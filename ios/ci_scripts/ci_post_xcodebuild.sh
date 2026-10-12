#!/bin/sh
set -eu
if [ "${CI_XCODEBUILD_EXIT_CODE:-0}" != "0" ]; then
  echo "SELA Xcode action failed. Open this action's build log in App Store Connect."
  exit 1
fi
echo "SELA Xcode action completed: ${CI_XCODEBUILD_ACTION:-unknown}."
if [ "${CI_XCODEBUILD_ACTION:-}" = "archive" ]; then
  echo "Xcode Cloud manages archive signing and TestFlight delivery through the workflow."
fi
# Xcode Cloud's configured post-action handles delivery. No manual uploader is run.
