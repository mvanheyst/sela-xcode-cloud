# Validation — Xcode Cloud edition, October 11, 2026

## Passed here

- Seven Python configuration tests: missing-server gate, explicit example mode,
  identity mismatch rejection, repeatable cloud configuration and build-number
  handling, strict HTTPS origin handling, full chapter/Greek/Hebrew preflight,
  and AI-disabled server rejection when AI is required.
- Four JavaScript native-client tests: bridge request/copy, API errors, aborts
  and late replies, and browser fallback.
- The original backend integration test using deterministic Scripture/AI fixtures.
- The actual clone/pre-Xcodebuild/post-Xcodebuild shell hooks on an isolated
  fixture checkout, including a failed Xcode action propagating as failure.
- OpenStep parsing of the Xcode project; object/target/scheme references; native
  test target connection in the shared scheme; plist XML; icon references; and
  executable cloud hook permissions.
- Shell syntax checks for cloud/local scripts and Python compilation.

Tests use fixture identifiers/providers; the distributed app identity remains
unconfigured until the owner supplies the actual Apple team and bundle ID.

## Not run

This environment has no Xcode/iOS SDK. Swift compilation and the three native
XCTest methods have not run. The first Xcode Cloud Test action must compile and
execute them. Real WKWebView rendering, persistent annotations on iOS, clipboard,
layout/accessibility, and source-link handling need device verification.

No Apple workflow, repository connection, signing, archive upload, TestFlight
processing, or beta review was performed on the user's account. There is no
signed .ipa in this package. A cloud-ready source layout is not proof of a
successful cloud build or Apple acceptance.

Live provider availability, full corpus coverage, licenses, AI-model access,
and the owner's deployed backend were not verified here. The cloud preflight
checks real server responses when a server is configured; AI generation still
needs a manual trial after deployment.

## Reproduce

With Python 3 and Node 20+ from the package root:

```bash
npm test
```

In Xcode Cloud, configure the shared SELA scheme's Test and Archive actions
following XCODE-CLOUD.md. The post-clone hook runs the Python configuration
checks without installing packages; the Test action runs the native tests.

Then install via TestFlight and run the device acceptance checklist in
TESTFLIGHT.md before broader testing.
