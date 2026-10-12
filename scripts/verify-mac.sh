#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."
if [[ "$(uname -s)" != Darwin ]]; then echo "Run this verification on a Mac." >&2; exit 1; fi
xcodebuild -project ios/SELA.xcodeproj -list
xcodebuild -project ios/SELA.xcodeproj -scheme SELA -configuration Debug \
  -sdk iphonesimulator -destination 'generic/platform=iOS Simulator' \
  -derivedDataPath "$PWD/build/Simulator" CODE_SIGNING_ALLOWED=NO build
echo "Simulator compilation completed. Follow the device checklist in docs/TESTFLIGHT.md."
