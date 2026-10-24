#!/bin/sh
set -eu
if [ "${CI_XCODEBUILD_ACTION:-}" = "test-without-building" ]; then
    echo "SELA: configuration was validated during build-for-testing."
    echo "Continuing with test execution."
    exit 0
fi
sela_script_directory=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
sela_repository=${CI_PRIMARY_REPOSITORY_PATH:-$(CDPATH= cd -- "$sela_script_directory/../.." && pwd)}
python3 "$sela_script_directory/cloud_config.py" check --repository "$sela_repository"
echo "SELA is configured for action: ${CI_XCODEBUILD_ACTION:-local-validation}."
