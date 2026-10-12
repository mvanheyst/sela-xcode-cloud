#!/bin/sh
set -eu
sela_script_directory=$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)
sela_repository=${CI_PRIMARY_REPOSITORY_PATH:-$(CDPATH= cd -- "$sela_script_directory/../.." && pwd)}
echo "Preparing SELA for Xcode Cloud."
# No package manager, downloaded SDK, signing key import, or nested archive command.
python3 "$sela_script_directory/cloud_config.py" prepare --repository "$sela_repository"
python3 -m unittest discover -s "$sela_repository/tests" -p 'test_cloud.py' -v
