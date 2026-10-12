# Host the SELA study service

The iOS app includes its interface but calls the existing Node backend for Bible
and original-language data. You can keep a separate hosted server for the app
and the web reader. The native bridge uses URLSession, so it does not require
broad CORS permissions on your server.

## Local development

```bash
cd backend
cp .env.example .env
npm test
npm start
```

Open `http://localhost:3000` for the original web reader. The iOS configuration
requires HTTPS; for native development use a proper HTTPS development endpoint.
No Node packages are needed by the supplied backend.

## Deployment

Deploy `backend/` to your preferred Node/container host. Use Node 24 LTS and
listen on the host's supplied `PORT` (default 3000). Attach your domain and enable
HTTPS with a publicly trusted certificate. Routes must be exposed at the domain
root, for example `https://your-study-server.com/api/status`.

The included Dockerfile can be built with:

```bash
docker build -t sela-study ./backend
docker run --rm --env-file ./backend/.env -p 3000:3000 sela-study
```

Terminate HTTPS at your hosting platform or reverse proxy. Set proxy request
timeouts to at least 90 seconds for AI generation. The default API source is
`https://bible-api.dws-cloud.com`; its availability and tagged data coverage must
be verified from your host before inviting testers. This package does not
establish licensing rights beyond the upstream source's terms and attribution.

Optional environment variables:

| Variable | Purpose |
| --- | --- |
| `PORT` | Host listener port. |
| `OPENAI_API_KEY` | Enables AI studies; keep secret on the server. |
| `OPENAI_MODEL` | Model enabled for your OpenAI account; inherited default is `gpt-5.4-mini`. |
| `BIBLE_API_BASE` | Optional compatible Scripture source. |

Consult `backend/README.md` for the original service's capabilities and data
attributions. The current model setting is inherited from the source prototype;
verify the chosen model is available to your account before enabling AI.

## Confirm before distributing

Check `/api/status` returns `ready: true`. Then request a chapter and an original
verse, and generate one AI study if enabled. A status response alone does not
validate downstream providers. Save the HTTPS origin in the app's Settings or
set it at build time using `Setup.command`.

The supplied prototype backend has basic request validation and rate limiting,
but no user accounts, per-user authorization, or durable study cache. If enabling
paid AI on a publicly reachable server, configure access restrictions and cost
limits for your beta. Do not assume the app's bundle conceals the server URL.

## Privacy information for the owner

The native app stores annotations in its own persistent WKWebView data store;
the server receives Bible references/searches and requested study inputs.
Personal note text is not sent with study requests. Hosting logs may record IP
addresses and request details. AI-enabled requests send verse/source data to
the configured AI provider.

The included `PrivacyInfo.xcprivacy` declares the app's own UserDefaults access
for its server preference. It contains no tracking declaration and no native
analytics SDK. It is not a substitute for your App Store Connect privacy answers
or a public privacy policy. Final disclosures must describe your actual hosting,
logging, and provider retention. Update the manifest if you add SDKs or collect
additional data.
