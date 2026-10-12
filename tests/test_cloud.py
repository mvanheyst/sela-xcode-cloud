import importlib.util
import plistlib
import tempfile
import unittest
from pathlib import Path

SCRIPT = Path(__file__).resolve().parents[1] / 'ios/ci_scripts/cloud_config.py'
spec = importlib.util.spec_from_file_location('cloud_config', SCRIPT)
cloud = importlib.util.module_from_spec(spec)
spec.loader.exec_module(cloud)


class CloudConfigurationTests(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        self.root = Path(self.directory.name)
        (self.root / 'ios/SELA').mkdir(parents=True)
        (self.root / 'ios/BuildSettings.xcconfig').write_text(
            'DEVELOPMENT_TEAM = ABCDE12345\nPRODUCT_BUNDLE_IDENTIFIER = ca.fixture.sela\n'
            'MARKETING_VERSION = 1.0.0\nCURRENT_PROJECT_VERSION = 1\n')
        (self.root / 'ios/SELA/Info.plist').write_bytes(plistlib.dumps({
            'SELAAPIBaseURL': '', 'CFBundleVersion': '$(CURRENT_PROJECT_VERSION)'}))

    def test_missing_server_stops_a_distribution_configuration(self):
        with self.assertRaisesRegex(cloud.ConfigurationError, 'SELA_API_URL'):
            cloud.prepare(self.root, {})

    def test_explicit_example_mode_can_build_without_a_server(self):
        self.assertEqual(cloud.prepare(self.root, {'SELA_ALLOW_EXAMPLE_MODE': 'YES'}), '')

    def test_workflow_identity_cannot_silently_change_the_app(self):
        for env in [{'CI_TEAM_ID': 'XXXXX12345'}, {'SELA_BUNDLE_ID': 'ca.other.sela'}]:
            with self.assertRaisesRegex(cloud.ConfigurationError, 'differs'):
                cloud.prepare(self.root, env)

    def test_configuration_preserves_cloud_numbering_and_is_repeatable(self):
        env = {'CI_TEAM_ID': 'ABCDE12345', 'CI_BUILD_NUMBER': '420000',
               'SELA_API_URL': 'https://study.example.com/', 'SELA_VERIFY_SERVER': 'NO'}
        self.assertEqual(cloud.prepare(self.root, env), 'https://study.example.com')
        first = (self.root / 'ios/BuildSettings.xcconfig').read_text()
        self.assertIn('SELA_TEST_BUNDLE_ID = ca.fixture.sela.tests', first)
        self.assertIn('CURRENT_PROJECT_VERSION = 1', first)
        cloud.prepare(self.root, env)
        self.assertEqual((self.root / 'ios/BuildSettings.xcconfig').read_text(), first)
        info = plistlib.loads((self.root / 'ios/SELA/Info.plist').read_bytes())
        self.assertEqual(info['CFBundleVersion'], '$(CURRENT_PROJECT_VERSION)')

    def test_url_validation_rejects_insecure_credentials_paths_and_newlines(self):
        for value in ['http://example.com', 'https://a:b@example.com', 'https://example.com/api',
                      'https://example.com?secret=a', 'https://example.com#',
                      'https://example.com\nmalicious', 'https://example.com:invalid']:
            with self.subTest(value=value):
                with self.assertRaises(cloud.ConfigurationError):
                    cloud.origin(value)

    def test_server_checks_require_complete_chapters_and_both_languages(self):
        requests = []
        def response(url):
            requests.append(url)
            if '/api/status' in url:
                return {'ready': True, 'aiEnabled': True}
            if '/api/chapter' in url:
                return {'verses': [{'verse': i} for i in range(1, 19)]}
            language = 'Hebrew' if 'Psalms' in url else 'Greek'
            return {'text': 'Fixture', 'language': language, 'words': [{'surface': 'fixture'}]}
        result = cloud.verify_server('https://fixture.example', {'SELA_REQUIRE_AI': 'YES'}, response)
        self.assertIn('Greek and Hebrew', result)
        self.assertEqual(len(requests), 4)
        self.assertFalse(any('/api/study' in request for request in requests))
        with self.assertRaisesRegex(cloud.ConfigurationError, 'complete'):
            cloud.verify_server('https://fixture.example', {}, lambda url:
                {'ready': True} if '/status' in url else {'verses': [{'verse': 10}]})

    def test_ai_requirement_does_not_pass_an_ai_disabled_server(self):
        with self.assertRaisesRegex(cloud.ConfigurationError, 'disabled'):
            cloud.verify_server('https://fixture.example', {'SELA_REQUIRE_AI': 'YES'},
                                lambda url: {'ready': True, 'aiEnabled': False})


if __name__ == '__main__':
    unittest.main()
