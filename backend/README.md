# SELA — Scripture & Study

A mobile-first Bible reading prototype inspired by the **reading experience** of modern Bible apps. It uses its own visual identity and interface — not YouVersion's branding, graphics, or application code.

## What works

- Read all 66 books, chapter-by-chapter, with **World English Bible (WEB)** and **King James Version (KJV)** choices.
- Tap a verse to open a responsive study panel (desktop sidebar / mobile bottom sheet).
- Highlight verses in four colours; clear highlights.
- Write personal notes; find saved verses. Highlights, notes and generated studies persist **only in that browser**, using `localStorage`.
- Fetch **original Greek (New Testament) or Hebrew (Old Testament) manuscript text** with aligned word forms, glosses, morphology codes, Strong's numbers and dictionary definitions, along with source attribution.
- Search references or text phrases across the Bible.
- Optional AI explanations covering a literal translation, word expressions, first-century / ancient Near Eastern historical setting as applicable, immediate literary context, interpretations, relevant cross-references, and practical application.
- Example commentary for **2 Peter 3:8** and **2 Peter 3:10** so you can see the study format before connecting an AI key.
- Works on narrow mobile screens and provides an installable web-app manifest. With no connection, it can display a *small, explicitly labelled preview* of example verses; **complete offline Bible reading is not implemented**.

## Run locally

Requires **Node.js 20+**; no `npm install` or third-party Node dependencies are required.

```bash
cd scripture-study-app
npm start
```

Open **http://localhost:3000** in a browser. On the same Wi-Fi network, you can open `http://YOUR_COMPUTER_LAN_IP:3000` from an iPhone for testing. To install as a home-screen app on iPhone, host it at an **HTTPS** domain first, then choose Share > Add to Home Screen in Safari.

### Enable AI study for every verse (optional)

The Greek/Hebrew word data is available without an AI key. The deeper contextual AI commentary needs a server-side OpenAI API key.

```bash
cp .env.example .env
```

Edit `.env`:

```env
OPENAI_API_KEY=your_secret_key_here
OPENAI_MODEL=gpt-5.4-mini
PORT=3000
```

Restart the server. Select a verse, open **Meaning & context**, and choose **Generate verse study**. This sends the selected verse text and source-tagged original language words to the OpenAI Responses API. AI use is billed separately under your API account.

**Keep your API key on the server.** Never paste it into browser JavaScript or check `.env` into version control.

## Bible source and rights

The app proxies a public open-source Scripture API: https://tuxr.github.io/bible-api/.

- **WEB** and **KJV** are public-domain English translations. The name *World English Bible* is a trademark; do not change its text and still label the result WEB.
- **New Testament Greek:** Text-Critical Greek New Testament (`tcgnt`) as served by the provider, based on the **Robinson–Pierpont Byzantine Textform 2018**, not SBLGNT or NA28.
- **Old Testament Hebrew:** Westminster Leningrad Codex (`wlc`), based on the Masoretic tradition.
- Some tagged morphology / lexicon data are from **STEPBible** and **Open Scriptures**, licensed **CC BY 4.0**. The app reproduces the upstream attribution next to the source text. Preserve these acknowledgements in a deployed product.
- The Greek textual tradition and exact English translation need not agree on every variant. Word-by-word glosses aren't complete contextual translations. Use the provided source edition when drawing grammatical or textual-critical conclusions.
- The public API is a shared community service, subject to rate limits and availability. For a commercial or heavily used app, **self-host the API** and confirm data provenance and licensing.

## Architecture

```
public/index.html         Mobile-first reading interface
public/styles.css         Responsive styling and reader typography
public/app.js             Reader, highlights, notes, study UI, search
public/manifest.webmanifest
public/icon.svg           Original app icon
server.mjs                Node 20+ HTTP server; scripture proxy; AI endpoint
.env.example              Optional OpenAI setup
```

Core endpoints:

| Endpoint | Purpose |
|---|---|
| `GET /api/books` | All 66 book names and chapter counts |
| `GET /api/chapter?book=2%20Peter&chapter=3&translation=web` | Full chapter |
| `GET /api/original?book=2%20Peter&chapter=3&verse=10` | Greek/Hebrew words, lexicon and attributions |
| `GET /api/search?q=mercy` | Text search |
| `POST /api/study` | AI exposition with JSON `{ "book": "2 Peter", "chapter": 3, "verse": 10 }` |

The AI endpoint has basic per-IP rate limiting, timeouts, source-side input validation, and schema-constrained JSON output. For production, add user authentication, persistent database/sync, observability, token spend quotas, managed API credentials, HTTPS, accessibility QA, and hardened abuse protection.

## Tests

```bash
npm test
```

Tests stub the external Scripture API and OpenAI endpoint so they run without network access.

## Known limitations

- This is a **functional web MVP**, not a finished App Store application. You can later wrap it using Capacitor, or rebuild its interface in React Native / SwiftUI.
- Highlights and notes are browser-local; reinstalling or clearing site storage can remove them. Add accounts and sync before using this for important long-term notes.
- Browser caching supports previously visited content only as permitted by the browser; there is no complete offline Bible package.
- The included 2 Peter commentary is an editorial example, not live AI output. The AI can make interpretive mistakes; check significant claims against primary sources and scholarship.
- Only WEB and KJV are included by default. ESV/NIV/NLT and other copyrighted translations require appropriate API permissions/licenses.
- This project is independently developed and is **not affiliated with or endorsed by YouVersion**.
