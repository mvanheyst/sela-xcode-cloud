#!/bin/sh
set -eu
sela_script_directory=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
sela_repository=${CI_PRIMARY_REPOSITORY_PATH:-$(CDPATH= cd -- "$sela_script_directory/../.." && pwd)}
python3 "$sela_script_directory/cloud_config.py" check --repository "$sela_repository"
echo "SELA is configured for action: ${CI_XCODEBUILD_ACTION:-local-validation}."
