# Complete SELA with Xcode Cloud

## 1. Configure your identity

Register an explicit iOS App ID under your Apple Developer Program team and
create the corresponding iOS app record in App Store Connect. Set the same
bundle identifier in this project using `scripts/configure.py` (root README).

Configure the committed team and bundle identifier before first onboarding so
Xcode discovers the correct app record. Team IDs and server URLs are public app
settings, not signing secrets. A cloud override that differs from an already
configured app identity deliberately fails.

## 2. Import the repository

Create an empty private repository with a source-control provider supported by
Xcode Cloud. From inside the extracted `sela-xcode-cloud` folder:

```bash
git init -b main
chmod +x ios/ci_scripts/ci_*.sh
git add .
git update-index --chmod=+x ios/ci_scripts/ci_post_clone.sh \
  ios/ci_scripts/ci_pre_xcodebuild.sh ios/ci_scripts/ci_post_xcodebuild.sh
git commit -m "Add SELA with Xcode Cloud support"
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

Replace `YOUR_REPOSITORY_URL` with yours and use normal repository authentication.
The update-index step records executable permissions even on a filesystem that
does not preserve them. Push the extracted source rather than the ZIP.

The repository root must contain `ios/`, `tests/`, `scripts/`, and `backend/`.
The project path is `ios/SELA.xcodeproj`; the cloud hooks are beside it in
`ios/ci_scripts`. Commit the shared scheme and all icon/web assets.

## 3. One-time Apple onboarding

Apple's documented first-workflow setup starts in Xcode on a Mac. A trusted
developer can perform this initial setup; later builds and distribution run in
Apple's cloud, and workflow management is available in App Store Connect.

1. Clone the configured repository. Open `ios/SELA.xcodeproj` in a current,
   Apple-supported stable Xcode. Select Xcode 26 or later with iOS 26 SDK or
   later, and confirm Apple's upload requirements when building.
2. Sign in to the correct team in Xcode Settings → Accounts.
3. Select SELA. Confirm **Signing & Capabilities → Automatically manage signing**
   with your team and bundle ID.
4. Choose **Integrate → Xcode Cloud → Create Workflow**, or the equivalent
   first-time Get Started entry in your Xcode version.
5. Select the matching Apple app record, grant repository access when Apple
   opens the authorization page, and complete onboarding.
6. Configure the workflow below in Xcode or App Store Connect before running
   the distribution build.

If onboarding starts a build before you enter the server settings, the
intentional missing-server gate may stop it. Finish configuration and start a
new build. No local archive or signing-key export is required for this route.

The workflow lives in your Apple account. This package has no pretend YAML
import that creates an Xcode Cloud workflow or grants account/repository access.

## 4. Workflow settings

Under **App Store Connect → Your app → Xcode Cloud → Workflows**, use:

| Setting | Value |
| --- | --- |
| Name | `SELA — TestFlight` |
| Project | `ios/SELA.xcodeproj` |
| Scheme | Shared `SELA` scheme |
| Environment | Apple-supported stable Xcode and compatible macOS; minimum Xcode 26/iOS 26 SDK |
| Start condition | Manual initially; optionally branch changes on `main` after validation |
| Branch | `main` |
| Clean build | Enabled |
| Test action | iOS, SELA, Debug, supported iPhone simulator; optionally add iPad |
| Archive action | iOS, SELA, Release |
| Deployment preparation | `TestFlight and App Store` or the current option eligible for external testing |
| Post-action | `TestFlight Internal Testing`, select your internal test group |

Create the internal group under TestFlight before selecting it. Add yourself
only if your Apple account is eligible for internal testing. The shared scheme
contains `SELATests`, so the Test action has real native tests.

After the first successful build, add automatic triggers if desired. For
external testing, use a TestFlight External Testing post-action and external
group, keep a clean archive and external-eligible deployment preparation, and
complete Apple's beta review. Do not select an internal-only archive when you
intend to distribute the same build externally. UI wording can vary; use the
option eligible for TestFlight and App Store distribution.

## 5. Workflow variables

| Variable | Default / requirement | Meaning |
| --- | --- | --- |
| `SELA_API_URL` | Required unless committed or example mode allowed | Public HTTPS origin, e.g. `https://study.yourdomain.ca`; no `/api` suffix. |
| `SELA_VERIFY_SERVER` | `YES` | Check status, a complete chapter, Greek words, and Hebrew words. |
| `SELA_REQUIRE_AI` | `NO` | If YES, server must report AI enabled. No paid generation is performed. |
| `SELA_ALLOW_EXAMPLE_MODE` | `NO` | Set YES only for an intentional build without a study server. |
| `SELA_TEAM_ID` | Normally omit | Optional override; otherwise Apple's `CI_TEAM_ID` is used and must match source. |
| `SELA_BUNDLE_ID` | Normally omit | Optional override; must match the configured source bundle ID. |
| `SELA_MARKETING_VERSION` | Committed version | Optional release version, e.g. `1.0.1`. |

Apple supplies `CI_PRIMARY_REPOSITORY_PATH`, `CI_TEAM_ID`, `CI_BUILD_NUMBER`, and
Xcode action metadata. Do not redefine those variables. Apple assigns cloud
build numbers; do not use timestamps, hashes, or the local BUILD_NUMBER script
setting for cloud builds. If reusing a version already uploaded locally, ensure
the next cloud number will not collide with an existing version/build pair.

**No OpenAI API key belongs in the workflow.** It stays on the hosted backend.
Cloud signing uses your Apple account's managed infrastructure, without custom
`.p12`/`.p8` imports or Keychain setup in these scripts.

For an initial compilation trial without hosting, set
`SELA_ALLOW_EXAMPLE_MODE=YES` and leave the server blank. The app displays clearly
labelled examples. For a useful full-service beta, supply the live backend and
restore the default server checks before distribution.

## 6. Run and verify

Start the workflow manually on main. Expected phases:

1. **Post-clone:** verify identity, configure server, and run seven Python
   cloud-configuration tests. With a server, check complete 2 Peter 3 and Greek/
   Hebrew word endpoints.
2. **Test:** compile the app and execute the three XCTest URL-validation methods.
3. **Archive:** create the Release archive, prepared and signed by Xcode Cloud.
4. **Post-action:** deliver to the chosen TestFlight group, subject to Apple's
   processing and any required review.

Inspect logs on the individual Test/Archive actions if one fails. The hooks
propagate failures and do not run a second archive or manual uploader.

When the build appears under TestFlight, complete the real app's beta metadata,
feedback email, review information, and export-compliance answers as required.
Install on iPhone/iPad and follow the checklist in TESTFLIGHT.md, including
highlight/note persistence, copying, real words, and one AI study if enabled.

## 7. Backend and validation limits

Xcode Cloud does not host `backend/`. Host it separately with public HTTPS and
configure its Scripture provider. Preflight tests confirm sample endpoint
responses; they do not prove complete corpus coverage, scholarly accuracy,
licensing, or actual AI-model access. See BACKEND.md for hosting requirements.

The included privacy manifest describes native preference storage. Your actual
privacy policy and Apple privacy answers must also reflect server logs and AI
provider practices. The owner must provide these for the real app.

This package's tests passed in Linux. Swift compilation, native tests, signing,
and TestFlight delivery have not run here or on your account. The first cloud
build is the next native verification step, not evidence that deployment has
already occurred.

## Troubleshooting

| Issue | Action |
| --- | --- |
| Team or bundle mismatch | Align committed app identity with the Apple app/workflow. |
| Missing study URL | Provide SELA_API_URL or deliberately permit example mode. |
| Missing complete chapter or words | Fix backend/source availability before full-service delivery. |
| Backend reachable locally only | Confirm valid public HTTPS and any firewall rules for Apple infrastructure. |
| Hooks did not run | Confirm ios/ci_scripts location and committed executable bits. |
| No native tests discovered | Select shared SELA scheme containing SELATests. |
| Build has no TestFlight delivery | Add Archive deployment preparation and a TestFlight post-action/group. |
| Compilation/signing failure | Open the failing action's Xcode log; source tests do not replace that build. |

## Apple documentation (checked October 11, 2026)

- https://developer.apple.com/documentation/xcode/configuring-your-first-xcode-cloud-workflow
- https://developer.apple.com/documentation/xcode/setting-up-your-project-to-use-xcode-cloud
- https://developer.apple.com/documentation/xcode/writing-custom-build-scripts
- https://developer.apple.com/documentation/xcode/environment-variable-reference
- https://developer.apple.com/documentation/xcode/setting-the-next-build-number-for-xcode-cloud-builds
- https://developer.apple.com/help/account/certificates/cloud-managed-certificates
- https://developer.apple.com/documentation/xcode/xcode-cloud-workflow-reference
- https://developer.apple.com/help/app-store-connect/test-a-beta-version/invite-external-testers/
