#!/usr/bin/env python3
"""Prepare and verify SELA on an Xcode Cloud checkout. Standard library only."""
import argparse
import json
import os
import plistlib
import re
import sys
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path


class ConfigurationError(Exception):
    pass


def flag(env, key, default):
    value = env.get(key, default).strip().upper()
    if value not in ('YES', 'NO', 'TRUE', 'FALSE', '1', '0'):
        raise ConfigurationError(key + ' must be YES or NO.')
    return value in ('YES', 'TRUE', '1')


def origin(value):
    value = value.strip()
    if not value:
        return ''
    if any(c.isspace() or ord(c) < 32 for c in value) or '\\' in value:
        raise ConfigurationError('The study URL contains invalid characters.')
    parts = urllib.parse.urlsplit(value)
    try:
        port = parts.port
    except ValueError as error:
        raise ConfigurationError('The study URL has an invalid port.') from error
    if (parts.scheme != 'https' or not parts.hostname or parts.username is not None
            or parts.password is not None or parts.path not in ('', '/')
            or parts.query or parts.fragment or '?' in value or '#' in value
            or port == 0):
        raise ConfigurationError('SELA_API_URL must be an HTTPS origin without a path or credentials.')
    return value.rstrip('/')


def source_settings(root):
    path = root / 'ios/BuildSettings.xcconfig'
    if not path.is_file():
        raise ConfigurationError('Repository root must contain ios/BuildSettings.xcconfig.')
    result = {}
    for line in path.read_text().splitlines():
        match = re.match(r'^([A-Z_]+)\s*=\s*(.*?)\s*$', line)
        if match:
            result[match[1]] = match[2]
    return result


def identity(root, env):
    saved = source_settings(root)
    committed_team = saved.get('DEVELOPMENT_TEAM', '')
    team = env.get('SELA_TEAM_ID') or env.get('CI_TEAM_ID') or committed_team
    if not re.fullmatch(r'[A-Z0-9]{10}', team):
        raise ConfigurationError('Configure a valid 10-character Apple Team ID.')
    if committed_team and committed_team != team:
        raise ConfigurationError('The workflow Apple team differs from the committed app team.')
    committed_bundle = saved.get('PRODUCT_BUNDLE_IDENTIFIER', '')
    bundle = env.get('SELA_BUNDLE_ID') or committed_bundle
    if (not re.fullmatch(r'[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+){2,}', bundle)
            or bundle.startswith(('com.example.', 'com.yourcompany.'))):
        raise ConfigurationError('Set your own bundle identifier before cloud onboarding.')
    if (committed_bundle and not committed_bundle.startswith(('com.example.', 'com.yourcompany.'))
            and committed_bundle != bundle):
        raise ConfigurationError('The workflow bundle ID differs from the committed app ID.')
    version = env.get('SELA_MARKETING_VERSION') or saved.get('MARKETING_VERSION', '1.0.0')
    if not re.fullmatch(r'\d{1,4}\.\d{1,2}\.\d{1,2}', version):
        raise ConfigurationError('Marketing version must be numeric, such as 1.0.0.')
    if env.get('CI_BUILD_NUMBER') and not re.fullmatch(r'[1-9]\d*', env['CI_BUILD_NUMBER']):
        raise ConfigurationError('Xcode Cloud build number must be a positive integer.')
    return team, bundle, version, saved


def prepare(root, env):
    team, bundle, version, saved = identity(root, env)
    info_path = root / 'ios/SELA/Info.plist'
    info = plistlib.loads(info_path.read_bytes())
    # An explicitly empty override clears a previously committed URL.
    api = origin(env.get('SELA_API_URL', info.get('SELAAPIBaseURL', '')))
    if not api and not flag(env, 'SELA_ALLOW_EXAMPLE_MODE', 'NO'):
        raise ConfigurationError('Set SELA_API_URL, or explicitly allow example mode with SELA_ALLOW_EXAMPLE_MODE=YES.')
    info['SELAAPIBaseURL'] = api
    info_path.write_bytes(plistlib.dumps(info, sort_keys=False))
    # Apple assigns the final cloud build number. Do not set it to a timestamp or hash.
    build = saved.get('CURRENT_PROJECT_VERSION', '1') or '1'
    (root / 'ios/BuildSettings.xcconfig').write_text(
        '// Prepared for Xcode Cloud. Apple manages signing and cloud build numbering.\n'
        'DEVELOPMENT_TEAM = ' + team + '\n'
        'PRODUCT_BUNDLE_IDENTIFIER = ' + bundle + '\n'
        'MARKETING_VERSION = ' + version + '\n'
        'CURRENT_PROJECT_VERSION = ' + build + '\n'
        'SELA_TEST_BUNDLE_ID = ' + bundle + '.tests\n'
        'VERSIONING_SYSTEM = apple-generic\nCODE_SIGN_STYLE = Automatic\n')
    return api


class SameOriginRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        old, new = urllib.parse.urlsplit(req.full_url), urllib.parse.urlsplit(newurl)
        if (new.scheme != 'https' or old.hostname != new.hostname
                or (old.port or 443) != (new.port or 443)):
            raise ConfigurationError('Study server redirects to an unsupported origin.')
        return super().redirect_request(req, fp, code, msg, headers, newurl)


def fetch_json(url):
    request = urllib.request.Request(url, headers={'Accept': 'application/json'})
    try:
        with urllib.request.build_opener(SameOriginRedirect()).open(request, timeout=15) as response:
            payload = response.read(8_000_001)
            if len(payload) > 8_000_000:
                raise ConfigurationError('Study server response exceeds the size limit.')
            result = json.loads(payload)
            if not isinstance(result, dict):
                raise ConfigurationError('Study server did not return a JSON object.')
            return result
    except (urllib.error.URLError, ValueError) as error:
        raise ConfigurationError('Study-server verification failed: ' + str(error)) from error


def verify_server(api, env, fetch=fetch_json):
    if not api:
        return 'Example mode: complete chapters and tagged words require a server.'
    if not flag(env, 'SELA_VERIFY_SERVER', 'YES'):
        return 'Study-server verification explicitly disabled for this build.'
    status = fetch(api + '/api/status')
    if status.get('ready') is not True:
        raise ConfigurationError('Study server is not ready.')
    if flag(env, 'SELA_REQUIRE_AI', 'NO') and status.get('aiEnabled') is not True:
        raise ConfigurationError('AI commentary is required but is disabled on the server.')
    chapter = fetch(api + '/api/chapter?' + urllib.parse.urlencode(
        {'book': '2 Peter', 'chapter': 3, 'translation': 'web'}))
    verses = chapter.get('verses', [])
    if not isinstance(verses, list) or {int(v.get('verse', 0)) for v in verses} != set(range(1, 19)):
        raise ConfigurationError('The study server did not return the complete 2 Peter 3 chapter.')
    for book, chapter_num, verse, language in [('2 Peter', 3, 10, 'Greek'), ('Psalms', 23, 1, 'Hebrew')]:
        original = fetch(api + '/api/original?' + urllib.parse.urlencode(
            {'book': book, 'chapter': chapter_num, 'verse': verse}))
        words = original.get('words')
        if (original.get('language') != language or not original.get('text')
                or not isinstance(words, list) or not words
                or not all(isinstance(word, dict) and word.get('surface') for word in words)):
            raise ConfigurationError(language + ' word data is unavailable from the study server.')
    return 'Verified a complete chapter plus Greek and Hebrew word data. No paid AI generation was requested.'


def check_project(root, env):
    identity(root, env)
    scheme = root / 'ios/SELA.xcodeproj/xcshareddata/xcschemes/SELA.xcscheme'
    if not scheme.is_file():
        raise ConfigurationError('The shared SELA scheme is missing.')
    info = plistlib.loads((root / 'ios/SELA/Info.plist').read_bytes())
    if info.get('CFBundleVersion') != '$(CURRENT_PROJECT_VERSION)':
        raise ConfigurationError('Keep the build number connected to the Xcode build setting.')
    if not origin(info.get('SELAAPIBaseURL', '')) and not flag(env, 'SELA_ALLOW_EXAMPLE_MODE', 'NO'):
        raise ConfigurationError('The archive has no configured study server.')
    for relative in ['SELA/PrivacyInfo.xcprivacy', 'SELA/Web/index.html', 'SELA/Web/app.js', 'SELA/Web/api-client.js']:
        if not (root / 'ios' / relative).is_file():
            raise ConfigurationError('Required bundled file is missing: ' + relative)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('operation', choices=['prepare', 'check'])
    parser.add_argument('--repository', required=True)
    args = parser.parse_args()
    root = Path(args.repository).resolve()
    try:
        if args.operation == 'prepare':
            api = prepare(root, os.environ)
            print(verify_server(api, os.environ))
        check_project(root, os.environ)
        print('SELA cloud configuration verified; automatic signing is enabled.')
    except (ConfigurationError, OSError, ValueError, KeyError, TypeError) as error:
        print('SELA configuration error: ' + str(error), file=sys.stderr)
        return 1
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
