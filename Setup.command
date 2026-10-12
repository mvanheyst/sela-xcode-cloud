#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
echo "SELA — Apple Developer setup"
read -r -p "Apple Team ID (10 characters): " sela_team_id
read -r -p "Your bundle ID (e.g. ca.yourdomain.sela): " sela_bundle_id
read -r -p "Study server HTTPS address (blank = example mode): " sela_api_url
read -r -p "Build number [1]: " sela_build_number
python3 scripts/configure.py --team-id "$sela_team_id" --bundle-id "$sela_bundle_id" \
  --api-url "$sela_api_url" --build "${sela_build_number:-1}"
open ios/SELA.xcodeproj
