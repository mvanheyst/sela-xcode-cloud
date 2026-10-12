> Xcode Cloud edition: follow XCODE-CLOUD.md for cloud signing and delivery.
> Local archive steps are an optional alternative. The device checklist still applies.

# Build, sign, and distribute SELA

## 1. Prepare your Apple account

You need an active Apple Developer Program team with permission to create the
app record and upload builds. Find your 10-character Team ID in Apple Developer
Membership Details. It is not the Apple account email address.

Choose a reverse-domain bundle identifier you control, such as
`ca.yourdomain.sela`. Register an explicit App ID in Certificates, Identifiers &
Profiles, then create an iOS app record in App Store Connect using that ID. A
unique SKU, such as `SELA-IOS-001`, is your internal label. The Apple record's
display name may need to differ if the name SELA is already in use.

## 2. Configure locally

`Setup.command` asks for the Apple Team ID, bundle ID, optional server address,
and initial build number. The Team ID and bundle ID are identifiers, not signing
secrets. The script writes `ios/BuildSettings.xcconfig` and the public server
address in `ios/SELA/Info.plist`.

For non-interactive setup:

```bash
python3 scripts/configure.py \
  --team-id YOURTEAMID \
  --bundle-id ca.yourdomain.sela \
  --api-url https://your-study-server.com \
  --build 1
```

Replace all example values. `YOURTEAMID` is illustrative, not a real team. Do
not enter an OpenAI key anywhere in the iOS project.

## 3. Verify on a Mac

```bash
bash scripts/verify-mac.sh
open ios/SELA.xcodeproj
```

The simulator build does not need signing. In Xcode select the SELA scheme,
choose an iPhone or iPad simulator, and press Run. Select your development team
before installing on a physical iPhone. If Xcode requests signing access, use
your own Apple account and Keychain locally.

Device acceptance checklist:

- Launch in example mode. Confirm the message explicitly identifies example
  verses and incomplete chapters.
- Select 2 Peter 3:10; apply each highlight colour; open My notes and type a note.
  Relaunch, open Saved, and verify both persist.
- Copy a verse, switch apps, and paste it. Clipboard writes happen only when
  Copy is tapped.
- Save a valid server address, test the connection, and read a complete chapter.
- Open an Old Testament and New Testament verse. Verify actual source words,
  transliterations, meanings, source edition, and attributions.
- Verify AI-disabled and AI-enabled server states. Generate a study, switch
  verses during a request, and confirm the result attaches to the intended verse.
- Turn off connectivity; verify errors are readable and notes/highlights remain.
- Try KJV while disconnected. WEB example wording must not appear as KJV.
- Check iPhone portrait/landscape and iPad portrait/landscape, including the
  keyboard in My notes. Use VoiceOver to select verses and navigation controls.
- Open a source attribution link; it should open in the device browser.

The source package's browser checks do not replace these native device checks.

## 4. Produce the signed IPA

Sign in to Xcode Settings → Accounts with a team that belongs to the paid Apple
Developer Program. Under the SELA target, enable automatic signing and verify
the correct team and bundle identifier.

```bash
bash Build-TestFlight.command
```

The script uses a generic iOS device destination, Release configuration, and
automatic signing. Outputs are `build/SELA.xcarchive` and `build/export/*.ipa`.
The `.ipa` is the actual Apple-signed application archive; a ZIP of source code
cannot be uploaded as the TestFlight binary.

The equivalent Xcode interface is **Product → Archive**, then in Organizer
choose **Distribute App → App Store Connect**. Choose an upload option eligible
for external TestFlight testing if you intend to share outside your Apple team.

## 5. Upload and invite testers

Either drag the exported `.ipa` into Apple's Transporter on the Mac and upload,
or run:

```bash
bash Upload-TestFlight.command
```

This explicitly uploads the archive to Apple using the account configured in
Xcode. No account passwords are stored by these scripts. Uploading does not
publish the app to the public App Store or invite testers automatically.

After processing, open **App Store Connect → Your app → TestFlight**. Complete
the beta description, feedback email, reviewer contact details, and test notes.
If the build uses only platform HTTPS encryption, the included export compliance
flag reflects that implementation; update it if you add non-exempt encryption.

Start with internal testing by members of your App Store Connect team. For
external testers, create an external group, add the build, submit for TestFlight
review, and distribute invitations or a public link after approval. Review and
approval are Apple's decisions, not guaranteed by this project.

Testers install Apple's TestFlight app and accept your invitation. TestFlight
builds normally expire after 90 days; upload new builds with increasing build
numbers as you iterate.

## Beta test information you can adapt

**Description:** SELA is a Bible reader with verse highlights, personal notes,
and original Greek/Hebrew word study. Meaning and context explanations are
available when the study server enables AI.

**What to test:** Bible navigation, saved highlights/notes, copying verses,
Greek/Hebrew word details, and the meaning/context panel on iPhone and iPad.

**Reviewer notes:** No account is required. Provide a working default server in
the binary or include its actual HTTPS address and instructions to enter it in
the Settings gear menu. Explain which features are sample content or unavailable
without the server. Ensure the server is available throughout review.

## Common issues

| Issue | Action |
| --- | --- |
| Signing requires a team | Add your Apple account in Xcode and choose the correct paid team. |
| No provisioning profile | Confirm App ID matches exactly, automatic signing is enabled, and you have certificate/profile access. |
| App record not found | Create the record using the identical bundle identifier before upload. |
| Duplicate build number | Increment `BUILD_NUMBER` or `CURRENT_PROJECT_VERSION`. |
| SDK too old | Use Xcode 26+ with the iOS 26+ SDK; check Apple's latest requirements. |
| Status succeeds but words fail | Check the hosted server's connection to its Scripture source and data licensing. |
| HTTPS connection fails | Use a valid publicly trusted certificate and root URL; insecure HTTP and cross-origin redirects are blocked. |
| AI studies disabled | Set the key on the server and restart it. Do not add it to the app. |

## Apple documentation

- https://developer.apple.com/help/app-store-connect/manage-builds/upload-builds/
- https://developer.apple.com/help/app-store-connect/test-a-beta-version/testflight-overview/
- https://developer.apple.com/help/app-store-connect/test-a-beta-version/invite-external-testers/
- https://developer.apple.com/news/upcoming-requirements/
