# SELA — Xcode Cloud edition

Build, sign, and deliver SELA to TestFlight using Apple's Xcode Cloud. This
edition includes the iPhone/iPad app, a shared build-and-test scheme, automatic
signing, executable cloud hooks, native XCTest coverage, and the existing study
backend. No local distribution certificate or exported signing key is required
for the cloud delivery route.

**Start with [docs/XCODE-CLOUD.md](docs/XCODE-CLOUD.md).** It gives the repository,
workflow, and environment settings.

## Supply your app settings

You need an Apple Developer Program team, a matching App Store Connect app
record, your bundle identifier, and a source repository Apple can access. For
complete Bible and original-language study, supply your hosted server's HTTPS
address. An explicit example-only mode is available for initial build testing.

Configure the app identity before first onboarding. With Python 3 on any
computer, replace these three example values with yours:

```bash
python3 scripts/configure.py \
  --team-id ABCDE12345 \
  --bundle-id ca.yourdomain.sela \
  --api-url https://your-study-server.com
```

Alternatively edit `ios/BuildSettings.xcconfig`: set `DEVELOPMENT_TEAM`,
`PRODUCT_BUNDLE_IDENTIFIER`, and `SELA_TEST_BUNDLE_ID` (app ID plus `.tests`).

Commit this folder's contents to your repository, preserving the executable
cloud hook permissions. Connect the shared **SELA** scheme to Xcode Cloud, then
configure **Test + Archive** and a **TestFlight** post-action.

Apple's documented initial onboarding starts in Xcode on a Mac. After connecting
it, workflow management is available in App Store Connect, and builds/signing/
delivery can run on Apple's cloud infrastructure.

## Cloud behavior

- Post-clone verifies your app identity, configures the bundled server address,
  and runs seven cloud-configuration tests.
- With a configured server, preflight checks a complete chapter and Greek and
  Hebrew tokens. It does not generate a paid AI study.
- Pre-build verifies the shared scheme, bundled assets, and configuration.
- The shared scheme includes three native XCTest methods for server URL handling.
- Apple manages build numbering, archive signing, and TestFlight delivery. The
  hooks do not run a second archive/export/upload command.

## Status

Cloud configuration tests and the existing JavaScript/backend checks passed.
No workflow has been connected or executed on your Apple account. Swift
compilation, simulator tests, signing, and TestFlight processing need verification
in the first cloud build. See [docs/VALIDATION.md](docs/VALIDATION.md).

## Backend

Xcode Cloud builds the iOS app; it does not host the Node server in `backend/`.
Host that server separately for the complete reader and sourced word study.
Optional AI keys stay on that server, never in iOS source or cloud workflow
variables. Highlights, notes, and saved generated studies remain on the device.

The inherited local build scripts remain an alternative. Use
`docs/TESTFLIGHT.md` for device acceptance checks and `docs/BACKEND.md` for hosting.
