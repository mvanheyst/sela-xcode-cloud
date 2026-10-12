#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."
if [[ "$(uname -s)" != Darwin ]]; then
  echo "Build on a Mac with Xcode 26 or later and an Apple Developer Program account." >&2
  exit 1
fi
if ! command -v xcodebuild >/dev/null; then
  echo "Install Xcode and select it in Xcode > Settings > Locations > Command Line Tools." >&2
  exit 1
fi
sela_xcode_major=$(xcodebuild -version | awk '/^Xcode / {split($2, v, "."); print v[1]}')
if [[ "$sela_xcode_major" -lt 26 ]]; then
  echo "Use Xcode 26 or later with the iOS 26 SDK or later." >&2; exit 1
fi
sela_destination=export
case "${1:-}" in
  "") ;;
  --upload) sela_destination=upload ;;
  *) echo "Usage: $0 [--upload]" >&2; exit 1 ;;
esac
mkdir -p build
python3 - "$sela_destination" <<'PY'
import plistlib, re, sys
from pathlib import Path
text = Path('ios/BuildSettings.xcconfig').read_text()
def value(key):
    match = re.search(r'^' + key + r'\s*=\s*(.*?)\s*$', text, re.M)
    return match.group(1) if match else ''
team = value('DEVELOPMENT_TEAM')
bundle = value('PRODUCT_BUNDLE_IDENTIFIER')
if not re.fullmatch(r'[A-Z0-9]{10}', team) or bundle.startswith(('com.example.', 'com.yourcompany.')):
    raise SystemExit('Run Setup.command first, using your Apple team and your own bundle ID.')
export = {'method': 'app-store-connect', 'destination': sys.argv[1], 'teamID': team,
          'signingStyle': 'automatic', 'stripSwiftSymbols': True, 'uploadSymbols': True,
          'manageAppVersionAndBuildNumber': False}
Path('build/ExportOptions.plist').write_bytes(plistlib.dumps(export))
PY
sela_build_flags=("CODE_SIGN_STYLE=Automatic")
if [[ -n "${BUILD_NUMBER:-}" ]]; then
  if [[ ! "$BUILD_NUMBER" =~ ^[1-9][0-9]{0,3}$ ]]; then
    echo "BUILD_NUMBER must be 1–9999." >&2; exit 1
  fi
  sela_build_flags+=("CURRENT_PROJECT_VERSION=$BUILD_NUMBER")
fi
# Automatic signing uses the Apple account already added in Xcode Settings > Accounts.
xcodebuild -project ios/SELA.xcodeproj -scheme SELA -configuration Release \
  -destination 'generic/platform=iOS' -archivePath "$PWD/build/SELA.xcarchive" \
  -allowProvisioningUpdates "${sela_build_flags[@]}" archive
xcodebuild -exportArchive -archivePath "$PWD/build/SELA.xcarchive" \
  -exportPath "$PWD/build/export" -exportOptionsPlist "$PWD/build/ExportOptions.plist" \
  -allowProvisioningUpdates
if [[ "$sela_destination" == upload ]]; then
  echo "Upload completed. Wait for processing, then open the TestFlight tab in App Store Connect."
else
  echo "Export completed. Your signed .ipa is in build/export; upload it with Apple's Transporter."
fi
