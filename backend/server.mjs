import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnvFile } from 'node:process';

const ROOT = resolve(fileURLToPath(new URL('.', import.meta.url)));
const PUBLIC = resolve(ROOT, 'public');
try { loadEnvFile(resolve(ROOT, '.env')); } catch { /* .env is optional */ }
const PORT = Number(process.env.PORT || 3000);
const BIBLE_API_BASE = process.env.BIBLE_API_BASE || 'https://bible-api.dws-cloud.com';
const OPENAI_API_BASE = process.env.OPENAI_API_BASE || 'https://api.openai.com';
const OPENAI_MODEL = process.env.OPENAI_MODEL || 'gpt-5.4-mini';
const CACHE_TTL = 7 * 24 * 60 * 60 * 1000;
const cache = new Map();
const studyRate = new Map();

export const BOOKS = [
  ['Genesis',50],['Exodus',40],['Leviticus',27],['Numbers',36],['Deuteronomy',34],
  ['Joshua',24],['Judges',21],['Ruth',4],['1 Samuel',31],['2 Samuel',24],
  ['1 Kings',22],['2 Kings',25],['1 Chronicles',29],['2 Chronicles',36],['Ezra',10],
  ['Nehemiah',13],['Esther',10],['Job',42],['Psalms',150],['Proverbs',31],
  ['Ecclesiastes',12],['Song of Solomon',8],['Isaiah',66],['Jeremiah',52],
  ['Lamentations',5],['Ezekiel',48],['Daniel',12],['Hosea',14],['Joel',3],
  ['Amos',9],['Obadiah',1],['Jonah',4],['Micah',7],['Nahum',3],['Habakkuk',3],
  ['Zephaniah',3],['Haggai',2],['Zechariah',14],['Malachi',4],
  ['Matthew',28],['Mark',16],['Luke',24],['John',21],['Acts',28],['Romans',16],
  ['1 Corinthians',16],['2 Corinthians',13],['Galatians',6],['Ephesians',6],
  ['Philippians',4],['Colossians',4],['1 Thessalonians',5],['2 Thessalonians',3],
  ['1 Timothy',6],['2 Timothy',4],['Titus',3],['Philemon',1],['Hebrews',13],
  ['James',5],['1 Peter',5],['2 Peter',3],['1 John',5],['2 John',1],
  ['3 John',1],['Jude',1],['Revelation',22]
];
const validBooks = new Map(BOOKS.map(([name, count], idx) => [name.toLowerCase(), { name, count, testament: idx < 39 ? 'OT' : 'NT' }]));
const aliases = new Map([['psalm','Psalms'],['ps','Psalms'],['song of songs','Song of Solomon']]);

function normalizeBook(value) {
  if (typeof value !== 'string') return null;
  const raw = value.trim().replace(/\s+/g, ' ').toLowerCase();
  return validBooks.get(raw) || validBooks.get((aliases.get(raw) || '').toLowerCase()) || null;
}
function respond(res, status, value, headers = {}) {
  res.writeHead(status, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control':'no-store', 'X-Content-Type-Options':'nosniff', ...headers });
  res.end(JSON.stringify(value));
}
function validateReference(searchParams, needsVerse = false) {
  const book = normalizeBook(searchParams.get('book'));
  const chapter = Number(searchParams.get('chapter'));
  const verse = Number(searchParams.get('verse'));
  if (!book || !Number.isInteger(chapter) || chapter < 1 || chapter > book.count) return null;
  if (needsVerse && (!Number.isInteger(verse) || verse < 1 || verse > 176)) return null;
  return { ...book, chapter, verse };
}
async function fetchJSON(path, useCache = true) {
  const key = BIBLE_API_BASE + path;
  const cached = cache.get(key);
  if (useCache && cached && Date.now() - cached.time < CACHE_TTL) return cached.value;
  const response = await fetch(key, { signal: AbortSignal.timeout(12000), headers: { 'Accept':'application/json' } });
  if (!response.ok) throw Object.assign(new Error(`Scripture service returned ${response.status}`), { status: response.status });
  const value = await response.json();
  if (useCache) {
    if (cache.size > 140) cache.delete(cache.keys().next().value);
    cache.set(key, { value, time: Date.now() });
  }
  return value;
}
async function chapterData(book, chapter, translation = 'web', words = false) {
  const path = `/v1/chapters/${encodeURIComponent(book)}/${chapter}?translation=${translation}${words ? '&words=1':''}`;
  return fetchJSON(path);
}
function findVerse(data, number) {
  return (data.verses || []).find(v => Number(v.verse) === number);
}
async function originalData(ref) {
  const translation = ref.testament === 'NT' ? 'tcgnt' : 'wlc';
  const chapter = await chapterData(ref.name, ref.chapter, translation, true);
  const verse = findVerse(chapter, ref.verse);
  if (!verse) throw Object.assign(new Error('Original-language verse was not found'), { status: 404 });
  return {
    reference: `${ref.name} ${ref.chapter}:${ref.verse}`,
    edition: ref.testament === 'NT' ? 'Robinson–Pierpont Byzantine Textform (2018)' : 'Westminster Leningrad Codex',
    language: ref.testament === 'NT' ? 'Greek' : 'Hebrew',
    text: verse.text || '', words: verse.words || [], lexicon: chapter.lexicon || {},
    attribution: chapter.attribution || []
  };
}
async function bodyJSON(req) {
  let value = '';
  for await (const fragment of req) {
    value += fragment;
    if (value.length > 10000) throw Object.assign(new Error('Request is too large'), { status: 413 });
  }
  try { return JSON.parse(value); } catch { throw Object.assign(new Error('Invalid JSON body'), { status: 400 }); }
}
function checkRate(ip) {
  const now = Date.now();
  const entries = (studyRate.get(ip) || []).filter(time => now - time < 60_000);
  if (entries.length >= 6) return false;
  entries.push(now);
  studyRate.set(ip, entries);
  if (studyRate.size > 500) studyRate.clear();
  return true;
}
const phraseShape = {
  type: 'object', additionalProperties: false,
  properties: { original: { type:'string' }, transliteration: { type:'string' }, meaning: { type:'string' }, significance: { type:'string' } },
  required:['original','transliteration','meaning','significance']
};
const crossRefShape = {
  type:'object', additionalProperties: false,
  properties: { reference:{type:'string'}, connection:{type:'string'} },
  required:['reference','connection']
};
const STUDY_SCHEMA = {
  type:'object', additionalProperties:false,
  properties: {
    literalTranslation:{type:'string'}, overview:{type:'string'}, historicalContext:{type:'string'},
    literaryContext:{type:'string'}, keyPhrases:{type:'array',items:phraseShape},
    interpretations:{type:'array',items:{type:'string'}},
    crossReferences:{type:'array',items:crossRefShape}, application:{type:'string'}, textualNotes:{type:'string'}
  },
  required:['literalTranslation','overview','historicalContext','literaryContext','keyPhrases','interpretations','crossReferences','application','textualNotes']
};
async function generateStudy(ref) {
  const [english, original] = await Promise.all([
    chapterData(ref.name, ref.chapter), originalData(ref)
  ]);
  const verse = findVerse(english, ref.verse);
  if (!verse) throw Object.assign(new Error('Verse not found'), {status:404});
  const nextVerses = (english.verses || []).filter(v => Math.abs(Number(v.verse) - ref.verse) <= 2)
    .map(v => ({ number:v.verse, text:v.text }));
  // Keep the source text and dictionary data server-side as the ground truth.
  const facts = {
    reference:`${ref.name} ${ref.chapter}:${ref.verse}`,
    englishEdition:'World English Bible (WEB)', englishText:verse.text,
    nearbyVerses:nextVerses, originalEdition:original.edition,
    originalLanguage:original.language, originalText:original.text,
    words:original.words.map(word => ({
      surface:word.surface, lemma:word.lemma, strong:word.strong, gloss:word.gloss,
      transliteration:original.lexicon?.[word.strong]?.transliteration,
      definition:original.lexicon?.[word.strong]?.definition
    }))
  };
  const instructions = `You are a careful biblical-language scholar and historical commentator. Produce a thoughtful, readable passage study for an adult Bible reader. Ground the ORIGINAL LANGUAGE words and phrases STRICTLY in the source data provided; it is tagged source text from a real edition. Do not invent Greek/Hebrew spelling, transliterations, Strong's identifiers, morphology, manuscript evidence, or historical facts. If a word has no lexicon entry, omit its transliteration rather than guessing. Translate the selected verse literally with attention to grammar, but label contested renderings as contested. Give historical Jewish, Greco-Roman and literary context where supportable, separating well-established facts from scholarly debate. Explain at least one meaningful key phrase but at most four; give 2–4 relevant cross-references and explain the relationship, not a made-up quote. Where relevant discuss differences between textual traditions (especially Byzantine vs critical Greek, or Hebrew textual witnesses), but do not claim a specific variant unless certain. Never claim the verse predicts current events or proposes mathematical prophetic timelines as established facts. Use concise prose, no Markdown. Explain that AI commentary should be checked against lexicons and commentaries when relevant. Return schema-conforming JSON only.`;
  const response = await fetch(`${OPENAI_API_BASE}/v1/responses`, {
    method:'POST', signal:AbortSignal.timeout(65000),
    headers:{ 'Authorization':`Bearer ${process.env.OPENAI_API_KEY}`, 'Content-Type':'application/json' },
    body:JSON.stringify({ model:OPENAI_MODEL, instructions, input:JSON.stringify(facts),
      max_output_tokens:3800,
      text:{ format:{ type:'json_schema',name:'scripture_study',strict:true,schema:STUDY_SCHEMA } }
    })
  });
  const raw = await response.json().catch(() => ({}));
  if (!response.ok) throw Object.assign(new Error(raw.error?.message || `AI service error: ${response.status}`), { status:502 });
  const output = (raw.output || []).flatMap(item => item.content || []).filter(c => c.type === 'output_text').map(c => c.text).join('');
  if (!output) throw Object.assign(new Error('No complete study was returned. Please retry.'), { status:502 });
  let parsed;
  try { parsed = JSON.parse(output); } catch { throw Object.assign(new Error('AI returned an invalid study'), { status:502 }); }
  return { ...parsed, reference: facts.reference, model:OPENAI_MODEL, generated:true };
}
const contentTypes = {
  '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8',
  '.svg':'image/svg+xml', '.png':'image/png', '.webmanifest':'application/manifest+json', '.json':'application/json'
};
async function staticFile(path, res) {
  let pathname;
  try { pathname = decodeURIComponent(path); } catch { respond(res,400,{error:'Invalid path'}); return; }
  const target = resolve(PUBLIC, '.' + pathname.replace(/^\//, '/'));
  if (target !== PUBLIC && !target.startsWith(PUBLIC + sep)) { respond(res,403,{error:'Forbidden'}); return; }
  const targetFile = target === PUBLIC ? resolve(PUBLIC,'index.html') : target;
  try {
    const info = await stat(targetFile);
    if (!info.isFile()) throw new Error('Not a file');
    const data = await readFile(targetFile);
    res.writeHead(200, { 'Content-Type':contentTypes[extname(targetFile)] || 'application/octet-stream',
      'Cache-Control':'no-cache', 'X-Content-Type-Options':'nosniff' });
    res.end(data);
  } catch { respond(res,404,{error:'Not found'}); }
}
export function startServer(port = PORT) {
  const server = createServer(async (req,res) => {
    const u = new URL(req.url || '/', 'http://localhost');
    try {
      if (req.method === 'GET' && u.pathname === '/api/status') {
        respond(res,200,{ready:true,aiEnabled:!!process.env.OPENAI_API_KEY,model:process.env.OPENAI_API_KEY ? OPENAI_MODEL : null});
      } else if (req.method === 'GET' && u.pathname === '/api/books') {
        respond(res,200,{books:BOOKS.map(([name,chapters], index) => ({name,chapters,testament:index<39?'OT':'NT'}))});
      } else if (req.method === 'GET' && u.pathname === '/api/chapter') {
        const ref = validateReference(u.searchParams);
        const translation = u.searchParams.get('translation') || 'web';
        if (!ref || !['web','kjv'].includes(translation)) return respond(res,400,{error:'Choose a valid book, chapter and translation'});
        const data = await chapterData(ref.name,ref.chapter,translation);
        respond(res,200,data);
      } else if (req.method === 'GET' && u.pathname === '/api/original') {
        const ref = validateReference(u.searchParams,true);
        if (!ref) return respond(res,400,{error:'Choose a valid book, chapter and verse'});
        respond(res,200,await originalData(ref));
      } else if (req.method === 'GET' && u.pathname === '/api/search') {
        const q = (u.searchParams.get('q') || '').trim();
        if (q.length < 3 || q.length > 90) return respond(res,400,{error:'Search for 3–90 characters'});
        const data = await fetchJSON(`/v1/search?q=${encodeURIComponent(q)}&translation=web&limit=24`,false);
        respond(res,200,data);
      } else if (req.method === 'POST' && u.pathname === '/api/study') {
        if (!process.env.OPENAI_API_KEY) return respond(res,409,{error:'AI studies require OPENAI_API_KEY on the server. Original-language word studies work without it.'});
        if (!checkRate(req.socket.remoteAddress || 'local')) return respond(res,429,{error:'Study request limit reached; please try again shortly.'});
        const body = await bodyJSON(req);
        const search = new URLSearchParams({book:String(body.book||''),chapter:String(body.chapter||''),verse:String(body.verse||'')});
        const ref = validateReference(search,true);
        if (!ref) return respond(res,400,{error:'Choose a valid verse'});
        respond(res,200,await generateStudy(ref));
      } else if (req.method === 'GET' && !u.pathname.startsWith('/api/')) {
        await staticFile(u.pathname,res);
      } else respond(res,404,{error:'Not found'});
    } catch(error) {
      const status = error.status >= 400 && error.status < 500 ? error.status : 502;
      console.error(`[${new Date().toISOString()}]`, req.method, u.pathname, error.message);
      respond(res,status,{error: error.name === 'TimeoutError' ? 'The service timed out; please retry.' : error.message || 'Service unavailable'});
    }
  });
  server.listen(port,()=>console.log(`SELA running at http://localhost:${server.address().port}`));
  return server;
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) startServer();
