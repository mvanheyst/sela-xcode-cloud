const BOOK_NAMES_RO={"Genesis": "Geneza", "Exodus": "Exodul", "Leviticus": "Leviticul", "Numbers": "Numeri", "Deuteronomy": "Deuteronomul", "Joshua": "Iosua", "Judges": "Judecători", "Ruth": "Rut", "1 Samuel": "1 Samuel", "2 Samuel": "2 Samuel", "1 Kings": "1 Împărați", "2 Kings": "2 Împărați", "1 Chronicles": "1 Cronici", "2 Chronicles": "2 Cronici", "Ezra": "Ezra", "Nehemiah": "Neemia", "Esther": "Estera", "Job": "Iov", "Psalms": "Psalmii", "Proverbs": "Proverbe", "Ecclesiastes": "Eclesiastul", "Song of Solomon": "Cântarea Cântărilor", "Isaiah": "Isaia", "Jeremiah": "Ieremia", "Lamentations": "Plângerile lui Ieremia", "Ezekiel": "Ezechiel", "Daniel": "Daniel", "Hosea": "Osea", "Joel": "Ioel", "Amos": "Amos", "Obadiah": "Obadia", "Jonah": "Iona", "Micah": "Mica", "Nahum": "Naum", "Habakkuk": "Habacuc", "Zephaniah": "Țefania", "Haggai": "Hagai", "Zechariah": "Zaharia", "Malachi": "Maleahi", "Matthew": "Matei", "Mark": "Marcu", "Luke": "Luca", "John": "Ioan", "Acts": "Faptele Apostolilor", "Romans": "Romani", "1 Corinthians": "1 Corinteni", "2 Corinthians": "2 Corinteni", "Galatians": "Galateni", "Ephesians": "Efeseni", "Philippians": "Filipeni", "Colossians": "Coloseni", "1 Thessalonians": "1 Tesaloniceni", "2 Thessalonians": "2 Tesaloniceni", "1 Timothy": "1 Timotei", "2 Timothy": "2 Timotei", "Titus": "Tit", "Philemon": "Filimon", "Hebrews": "Evrei", "James": "Iacov", "1 Peter": "1 Petru", "2 Peter": "2 Petru", "1 John": "1 Ioan", "2 John": "2 Ioan", "3 John": "3 Ioan", "Jude": "Iuda", "Revelation": "Apocalipsa"};
const ROMANIAN={"SELA — Scripture, deeply understood": "SELA — Scriptura, înțeleasă în profunzime", "SCRIPTURE & STUDY": "SCRIPTURĂ ȘI STUDIU", "YOUR SPACE": "SPAȚIUL TĂU", "Read Scripture": "Citește Scriptura", "Highlights & notes": "Evidențieri și notițe", "Search the Bible": "Caută în Biblie", "THE BIBLE": "BIBLIA", "A deeper kind of reading": "O lectură mai profundă", "Original words. Timeless context.": "Cuvinte originale. Context pentru toate timpurile.", "A QUIET MOMENT WITH THE WORD": "UN MOMENT DE LINIȘTE CU SCRIPTURA", "SCRIPTURE READING": "LECTURA SCRIPTURII", "The promise of His coming": "Promisiunea venirii Sale", "CH.": "CAP.", "Go beyond the translation": "Descoperă dincolo de traducere", "Tap any verse to uncover its original language, historical setting, and deeper meaning.": "Atinge un verset pentru a descoperi textul original, cadrul istoric și sensul său profund.", "THE WORD": "CUVÂNTUL", "Opening Scripture…": "Se deschide Scriptura…", "Read slowly. Discover deeply. Let the words dwell.": "Citește încet. Descoperă în profunzime. Lasă cuvintele să prindă rădăcini.", "YOUR COLLECTION": "COLECȚIA TA", "Saved": "Salvate", "Scripture": "Scriptura", "The verses that have spoken to you, gathered in one place.": "Versetele care ți-au vorbit, adunate într-un singur loc.", "EXPLORE THE WORD": "EXPLOREAZĂ SCRIPTURA", "Find a": "Găsește un", "passage": "pasaj", "Keyword searches use WEB. References like “2 Peter 3:10” open your selected reading translation.": "Căutarea folosește versiunea selectată. Poți introduce o trimitere precum „Ioan 3:16”.", "Search": "Caută", "Try: John 3:16 · Psalm 23 · covenant · peace": "Încearcă: Ioan 3:16 · Psalmii 23 · legământ · pace", "DIG DEEPER": "APROFUNDEAZĂ", "Verse": "Studiul", "study": "versetului", "Every word has a story.": "Fiecare cuvânt are o poveste.", "Select a verse in the reading pane to see the original Greek or Hebrew, word meanings, and historical context.": "Selectează un verset pentru a vedea textul original grecesc sau ebraic, sensurile cuvintelor și contextul istoric.", "01   Read": "01   Citește", "02   Select": "02   Selectează", "03   Discover": "03   Descoperă", "MARK THIS VERSE": "EVIDENȚIAZĂ VERSETUL", "Copy": "Copiază", "Original text": "Textul original", "Meaning & context": "Sens și context", "My notes": "Notițele mele", "Greek original": "Originalul grecesc", "Hebrew original": "Originalul ebraic", "Loading original text…": "Se încarcă textul original…", "Personal reflection": "Reflecție personală", "Your thoughts are saved privately in this browser.": "Gândurile tale sunt salvate doar pe acest dispozitiv.", "Notes save automatically.": "Notițele se salvează automat.", "Word study uses Greek/Hebrew sources. AI commentary uses WEB and those sources, independently of your reading translation.": "Analiza folosește textul original grecesc sau ebraic. Glosările și studiul sunt generate direct în română; textul NTR nu este trimis serviciului AI.", "Read": "Citește", "Study": "Studiu", "Find a book…": "Găsește o carte…", "Filter Bible books": "Filtrează cărțile Bibliei", "Bible books": "Cărțile Bibliei", "Main navigation": "Navigare principală", "Mobile navigation": "Navigare mobilă", "Open menu": "Deschide meniul", "Search Bible": "Caută în Biblie", "Change text size": "Schimbă mărimea textului", "Previous chapter": "Capitolul anterior", "Next chapter": "Capitolul următor", "Book": "Cartea", "Chapter": "Capitolul", "Bible translation": "Traducerea Bibliei", "Search Scripture": "Caută în Scriptură", "Search for a word or reference…": "Caută un cuvânt sau o trimitere…", "What is God teaching you through this verse? Write a reflection, question, or prayer…": "Ce te învață Dumnezeu prin acest verset? Scrie o reflecție, o întrebare sau o rugăciune…", "No books found.": "Nu s-au găsit cărți.", "OLD TESTAMENT": "VECHIUL TESTAMENT", "NEW TESTAMENT": "NOUL TESTAMENT", "Read • reflect • understand": "Citește • reflectează • înțelege", "No verses available for this chapter.": "Nu sunt disponibile versete pentru acest capitol.", "Study this verse": "Studiază acest verset", "Your collection begins with a single verse.": "Colecția ta începe cu un singur verset.", "Highlight or write a note while you read.": "Evidențiază un verset sau scrie o notiță în timp ce citești.", "Tap to open this passage.": "Atinge pentru a deschide pasajul.", "Verse not available in this passage preview": "Versetul nu este disponibil în acest pasaj.", "Loading original text and word definitions…": "Se încarcă textul original și sensurile cuvintelor…", "Original-language data is currently unavailable.": "Datele textului original nu sunt disponibile acum.", "Please check your connection and retry by reselecting the verse.": "Verifică conexiunea și selectează din nou versetul.", "Lexical gloss unavailable": "Glosare lexicală indisponibilă", "parts:": "componente:", "Tap any word for its lexicon details.": "Atinge un cuvânt pentru detalii lexicale.", "No morphological tags were returned for this verse.": "Sursa nu a furnizat analiza morfologică pentru acest verset.", "Text and lexical data:": "Text și date lexicale:", "Different manuscript editions may have variant readings.": "Edițiile manuscriselor pot avea variante textuale.", "A full lexicon definition is unavailable for this token.": "Definiția lexicală completă nu este disponibilă pentru acest cuvânt.", "Not available": "Indisponibil", "Explore the original meaning": "Explorează sensul original", "Add AI-powered historical context": "Adaugă context istoric cu AI", "Generate a careful explanation of this verse, including literal translation, literary and first-century context, different interpretations, and cross-references.": "Generează în română explicația versetului, traducerea literală din original, contextul literar și istoric, interpretări și trimiteri biblice.", "The word-by-word original text is available from the Scripture source. To generate in-depth context for any passage, add your OpenAI API key to the server environment.": "Textul original este disponibil din sursa biblică. Glosările românești și explicațiile necesită activarea serviciului AI pe server.", "Generate verse study": "Generează studiul versetului", "See README.md for optional AI setup.": "Activează serviciul de studiu pe server.", "Included example commentary · not an AI-generated manuscript analysis": "Comentariu exemplificativ inclus", "AI-generated study · verify interpretive claims with trusted commentaries.": "Studiu generat cu AI · verifică interpretările în comentarii de încredere.", "A direct translation": "O traducere literală din original", "What the author is saying": "Ce spune autorul", "Key expressions": "Expresii-cheie", "Historical setting": "Cadrul istoric", "Literary context": "Contextul literar", "Interpretations & nuances": "Interpretări și nuanțe", "Connected Scripture": "Trimiteri biblice", "Reflect & apply": "Reflectează și aplică", "Textual / translation notes": "Observații textuale și de traducere", "Regenerate explanation": "Regenerează explicația", "Generate fuller explanation": "Generează o explicație detaliată", "Lexicon glosses are not automatically a complete contextual translation. AI commentary may contain mistakes and should be checked against the text and reputable biblical scholarship.": "Glosările lexicale nu reprezintă automat o traducere contextuală completă. Comentariul AI poate conține erori; verifică-l în text și în lucrări biblice de încredere.", "Add an API key on the server to enable AI studies": "Activează serviciul AI pe server pentru studii.", "Creating study…": "Se generează studiul…", "Study ready": "Studiul este gata", "Try again": "Reîncearcă", "Enter a reference or a word": "Introdu o trimitere sau un cuvânt", "Searching Scripture…": "Se caută în Scriptură…", "matching verses in": "versete găsite în", "(showing first results)": "(primele rezultate)", "No verses found. Try another phrase.": "Nu s-au găsit versete. Încearcă altă expresie.", "Unknown": "Necunoscut", "Open verse": "Deschide versetul", "Highlight removed": "Evidențiere eliminată", "Verse highlighted": "Verset evidențiat", "Verse copied": "Verset copiat", "Clipboard requires a secure connection": "Copierea necesită o conexiune securizată", "Saved on this device ✓": "Salvat pe acest dispozitiv ✓", "Select a verse to begin studying": "Selectează un verset pentru a începe studiul", "Browser storage is unavailable": "Stocarea locală nu este disponibilă", "Study unavailable": "Studiul nu este disponibil", "Unable to load": "Nu se poate încărca", "Please try again or choose another translation.": "Reîncearcă sau alege altă traducere.", "Verse text:": "Mărimea textului:", "unavailable": "indisponibil", "An error occurred. Check your connection and try again.": "Serviciul nu este disponibil momentan. Verifică conexiunea și reîncearcă.", "The study server took too long to respond. Please try again.": "Serverul de studiu nu a răspuns la timp. Reîncearcă.", "Highlight color": "Culoarea evidențierii", "Remove highlight": "Elimină evidențierea", "Honey": "Auriu", "Sage": "Verde", "Lavender": "Lavandă", "Rose": "Roz", "Close study": "Închide studiul", "Dismiss": "Închide", "Search by reference or keyword": "Caută după trimitere sau cuvânt", "Search uses the selected translation. References such as “John 3:16” open that passage.": "Căutarea folosește versiunea selectată. O trimitere precum „Ioan 3:16” deschide pasajul.", "Dismiss tip": "Închide sugestia", "Verse, reference, or phrase…": "Verset, trimitere sau expresie…", "Verse study panel": "Panoul de studiu al versetului", "Highlight colors": "Culorile evidențierii", "Highlight gold": "Evidențiază cu auriu", "Gold": "Auriu", "Highlight green": "Evidențiază cu verde", "Green": "Verde", "Highlight lavender": "Evidențiază cu lavandă", "Highlight pink": "Evidențiază cu roz", "Pink": "Roz", "Copy verse": "Copiază versetul", "Study sections": "Secțiunile studiului", "Source": "Sursa"};
function localize(text,language){return language==='ro'?(ROMANIAN[text]||text):text;}

import { requestJSON, copyText } from './api-client.js';
const ICONS = {
  'book-open':'<path d="M12 7v14M3 18V4.5C6 3.8 9 4.4 12 6c3-1.6 6-2.2 9-1.5V18c-3-.7-6-.1-9 1.5C9 17.9 6 17.3 3 18Z"/>',
  'bookmark':'<path d="M5 4h14v17l-7-5-7 5z"/>',
  'search':'<circle cx="10.9" cy="10.9" r="6.9"/><path d="m16 16 5 5"/>',
  'type':'<path d="M4 6V4h16v2M12 4v16m-4 0h8"/>',
  'menu':'<path d="M4 6h16M4 12h16M4 18h16"/>',
  'chevron-down':'<path d="m6 9 6 6 6-6"/>',
  'chevron-left':'<path d="m14.5 5-7 7 7 7"/>',
  'chevron-right':'<path d="m9.5 5 7 7-7 7"/>',
  'layers':'<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5m-18 5 9 5 9-5"/>',
  'x':'<path d="M6 6 18 18M18 6 6 18"/>',
  'copy':'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  'languages':'<path d="m5 8 7 0m-3-4v4c0 5-2 8-6 10m3-8c1 3 3 5 6 6M15 6h6m-3-3v3m-5 15 4-10 4 10m-7-3h6"/>',
  'sparkles':'<path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Zm7 13 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z"/>',
  'notebook-pen':'<path d="M5 4h11a2 2 0 0 1 2 2v4M5 4v16h11M8 8h6M8 12h5M9 20v-3M17 19l4-4-3-3-4 4-1 4 4-1Z"/>',
  'shield-check':'<path d="M12 2 20 5v6c0 5-3 8-8 11-5-3-8-6-8-11V5l8-3Zm-4 10 3 3 5-5"/>',
  'arrow-right':'<path d="M4 12h16m-6-6 6 6-6 6"/>'
};
for (const element of document.querySelectorAll('[data-icon]')) {
  element.innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[element.dataset.icon] || ''}</svg>`;
}
const $ = id => document.getElementById(id);
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function savedJSON(key, otherwise) { try { return JSON.parse(localStorage.getItem(key)) ?? otherwise; } catch { return otherwise; } }
function saveJSON(key, value) { try { localStorage.setItem(key,JSON.stringify(value)); } catch { toast(t('Browser storage is unavailable')); } }
const fallbackBooks = [
  ['Genesis',50],['Exodus',40],['Leviticus',27],['Numbers',36],['Deuteronomy',34],
  ['Joshua',24],['Judges',21],['Ruth',4],['1 Samuel',31],['2 Samuel',24],['1 Kings',22],['2 Kings',25],
  ['1 Chronicles',29],['2 Chronicles',36],['Ezra',10],['Nehemiah',13],['Esther',10],['Job',42],['Psalms',150],
  ['Proverbs',31],['Ecclesiastes',12],['Song of Solomon',8],['Isaiah',66],['Jeremiah',52],['Lamentations',5],
  ['Ezekiel',48],['Daniel',12],['Hosea',14],['Joel',3],['Amos',9],['Obadiah',1],['Jonah',4],['Micah',7],
  ['Nahum',3],['Habakkuk',3],['Zephaniah',3],['Haggai',2],['Zechariah',14],['Malachi',4],
  ['Matthew',28],['Mark',16],['Luke',24],['John',21],['Acts',28],['Romans',16],['1 Corinthians',16],
  ['2 Corinthians',13],['Galatians',6],['Ephesians',6],['Philippians',4],['Colossians',4],
  ['1 Thessalonians',5],['2 Thessalonians',3],['1 Timothy',6],['2 Timothy',4],['Titus',3],
  ['Philemon',1],['Hebrews',13],['James',5],['1 Peter',5],['2 Peter',3],['1 John',5],
  ['2 John',1],['3 John',1],['Jude',1],['Revelation',22]
].map(([name,chapters],i) => ({name,chapters,testament:i<39?'OT':'NT'}));
const DEMO_VERSES = {
  '2 Peter:3': [
    {verse:8,text:"But don’t forget this one thing, beloved, that one day is with the Lord as a thousand years, and a thousand years as one day."},
    {verse:9,text:"The Lord is not slow concerning his promise, as some count slowness; but is patient with us, not wishing that any should perish, but that all should come to repentance."},
    {verse:10,text:"But the day of the Lord will come as a thief in the night; in which the heavens will pass away with a great noise, and the elements will be dissolved with fervent heat, and the earth and the works that are in it will be burned up."},
    {verse:13,text:"But, according to his promise, we look for new heavens and a new earth, in which righteousness dwells."}
  ],
  'Psalms:23':[
    {verse:1,text:'Yahweh is my shepherd: I shall lack nothing.'},
    {verse:2,text:'He makes me lie down in green pastures. He leads me beside still waters.'}
  ]
};
const PREVIEW_COMMENTARY = {
  '2 Peter 3:8': {
    literalTranslation:'But let this one thing not escape your notice, beloved: one day with the Lord is as a thousand years, and a thousand years as one day.',
    overview:'Peter responds to those who consider the delayed return of Christ evidence against God’s promise. His comparison emphasizes God’s different perspective on time, not a literal prophetic conversion formula.',
    historicalContext:'The early Christian community faced critics who questioned why the promised coming of Christ had not yet happened. Peter responds using language reminiscent of Psalm 90:4.',
    literaryContext:'Verses 3–7 introduce the scoffers. Verse 8 reframes their expectation of timing, and verse 9 explains apparent delay in terms of divine patience.',
    keyPhrases:[{original:'ὡς χίλια ἔτη',transliteration:'hōs chilia etē',meaning:'like a thousand years',significance:'“Like” communicates comparison rather than an exact numerical equivalence.'}],
    interpretations:['This passage does not itself establish a rule that one prophetic day equals one thousand calendar years.','The broader theological claim that God is outside time goes beyond what this particular verse independently proves.'],
    crossReferences:[{reference:'Psalm 90:4',connection:'The foundational comparison of a thousand years to yesterday in God’s sight.'},{reference:'2 Peter 3:9',connection:'Explains apparent delay as divine patience rather than broken promise.'}],
    application:'Practice patience with God’s promises without treating your preferred timeline as a measure of His faithfulness.',textualNotes:'Sample interpretive commentary, not a manuscript-critical edition.'
  },
  '2 Peter 3:10': {
    literalTranslation:'The day of the Lord will come like a thief; the heavens will pass away with a rushing sound, and the elements, burning, will be dissolved.',
    overview:'Peter describes divine judgment using vivid cosmic imagery. The Greek word stoicheia can refer to the elements or components of the created order; many interpreters understand heavenly bodies in this context.',
    historicalContext:'Peter uses Jewish apocalyptic language similar to Isaiah 34:4, where the heavens and their host are depicted as passing away in judgment.',
    literaryContext:'Verses 8–9 speak of God’s patience; verses 10–13 turn to the day of the Lord and the promise of new heavens and a new earth.',
    keyPhrases:[{original:'στοιχεῖα',transliteration:'stoicheia',meaning:'elements, fundamental components',significance:'“Heavenly bodies” is a contextual interpretation, not the word’s only possible meaning.'},{original:'καυσούμενα',transliteration:'kausoumena',meaning:'being burned with great heat',significance:'Describes intense cosmic dissolution, not a defined scientific mechanism.'}],
    interpretations:['Some understand cosmic dissolution as complete destruction followed by new creation. Others understand judgment leading to radical renewal.','Manuscripts differ on the closing clause about the earth and its works (for example, “found/exposed” versus “burned up”).'],
    crossReferences:[{reference:'Isaiah 34:4',connection:'Prophetic imagery of the heavens dissolved and rolled up.'},{reference:'2 Peter 3:13',connection:'Promises new heavens and a new earth characterized by righteousness.'}],
    application:'Live with integrity in light of God’s judgment and the hope of a renewed creation.',textualNotes:'The Greek forms and final wording vary between textual traditions. Consult the specific manuscript edition for precise word-by-word parsing.'
  }
};
const state = {
  book:'2 Peter', chapter:3, translation:savedJSON('sela.translation','web'), selected:null, verses:[],
  translations:[{id:'web',available:true},{id:'kjv',available:true},{id:'niv',available:false},{id:'ntr',available:false}],
  books:fallbackBooks, view:'read', aiEnabled:false, original:null, tab:'words',
  selectedToken:0, highlight:savedJSON('sela.highlights',{}), notes:savedJSON('sela.notes',{}),
  studies:savedJSON('sela.studies',{}), passageAbort:null, studySerial:0,
  fontSize:Number(localStorage.getItem('sela.fontsize')) || 19, toastTimer:null
};

const editionNames = {web:'World English Bible', kjv:'King James Version', esv:'English Standard Version', niv:'New International Version', ntr:'Noua Traducere Românească'};
function renderTranslationOptions() {
  $('translationSelect').innerHTML=state.translations.map(entry=>`<option value="${escapeHTML(entry.id)}" ${entry.available?'':'disabled'}>${(entry.abbreviation||entry.id).toUpperCase()}${entry.id==='ntr'?' · RO':''}${entry.available?'':` (${t('unavailable')})`}</option>`).join('');
  $('translationSelect').value=state.translation;
}
function translationCredits(data,target='translationCredit') {
  let el=$(target);
  if (!el && !data) return;
  if (!el) {
    el=document.createElement('div');el.id=target;el.className='source-credit';
    el.setAttribute('aria-live','polite');$(target==='searchCredit'?'searchResults':'verseList').after(el);
  }
  const links=(data?.attribution||[]).filter(a=>{
    try{return new URL(a.url).protocol==='https:';}catch{return false;}
  }).map(a=>`<a href="${escapeHTML(a.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(a.name||t('Source'))}</a>`).join(' · ');
  el.innerHTML=`${escapeHTML(data?.copyright||'')}${data?.copyright&&links?'<br>':''}${links}`;
}

const refKey = (book = state.book, chapter = state.chapter, verse = state.selected) => `${book} ${chapter}:${verse}`;
const keyForChapter = () => `${state.book}:${state.chapter}`;
function toast(message) {
  const el = $('toast'); el.textContent = message; el.classList.remove('hidden');
  clearTimeout(state.toastTimer); state.toastTimer = setTimeout(()=>el.classList.add('hidden'),2900);
}
const api = requestJSON;
const nativeApp = !!globalThis.webkit?.messageHandlers?.sela;


function editionAbbreviation(){return (state.translations.find(e=>e.id===state.translation)?.abbreviation||state.translation).toUpperCase();}
function uiLanguage(){return state.translation==='ntr'?'ro':'en';}
const t=text=>localize(text,uiLanguage());
const bookName=name=>uiLanguage()==='ro'?(BOOK_NAMES_RO[name]||name):name;
const fold=text=>String(text).normalize('NFD').replace(/[\u0300-\u036f]/gu,'').toLowerCase();
function displayReference(book=state.book,chapter=state.chapter,verse=state.selected){return `${bookName(book)} ${chapter}${verse?':'+verse:''}`;}
function displayRef(text){const ref=parseReference(text);return ref?displayReference(ref.book,ref.chapter,ref.verse):text;}
function studyKey(ref=refKey()){return `${state.translation}:${ref}`;}
function errorText(error){return uiLanguage()==='ro'?(/[ăâîșțĂÂÎȘȚ]/u.test(error.message||'')?error.message:t('An error occurred. Check your connection and try again.')):error.message;}
function applyLocale(){
  document.documentElement.lang=uiLanguage();document.title=t('SELA — Scripture, deeply understood');
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=t(el.getAttribute('data-i18n'));});
  for(const attr of ['placeholder','title','aria-label'])document.querySelectorAll(`[data-i18n-${attr}]`).forEach(el=>el.setAttribute(attr,t(el.getAttribute(`data-i18n-${attr}`))));
  $('bookSelect').innerHTML=state.books.map(b=>`<option value="${escapeHTML(b.name)}">${escapeHTML(bookName(b.name))}</option>`).join('');
  const bridge=globalThis.webkit?.messageHandlers?.sela;
  if(bridge)Promise.resolve(bridge.postMessage({action:'language',language:uiLanguage()})).catch(()=>{});
}

function updateNavigation() {
  applyLocale();renderBooks($('bookFilter').value);
  $('bookSelect').value = state.book;
  $('chapterSelect').innerHTML = Array.from({length:state.books.find(b=>b.name===state.book)?.chapters || 1},(_,i)=>`<option value="${i+1}">${i+1}</option>`).join('');
  $('chapterSelect').value = state.chapter;
  $('translationSelect').value = state.translation;
  $('verseList').lang = state.translation==='ntr' ? 'ro' : 'en';
  $('chapterTitle').innerHTML = `${escapeHTML(bookName(state.book))} <em>${state.chapter}</em>`;
  $('topReference').textContent = displayReference(state.book,state.chapter,null);
  $('languageLabel').textContent = (editionNames[state.translation]||state.translation).toUpperCase();
  $('chapterSubtitle').textContent = state.book === '2 Peter' && state.chapter === 3 ? t('The promise of His coming') : t('Read • reflect • understand');
  $('prevChapter').disabled = state.chapter === 1 && state.books[0].name === state.book;
  $('nextChapter').disabled = state.book === 'Revelation' && state.chapter === 22;
  document.querySelectorAll('.book-button').forEach(el=>el.classList.toggle('active',el.dataset.book===state.book));
}
function renderBooks(filter = '') {
  const term=fold(filter.trim()); let last = '';
  $('bookList').innerHTML = state.books.filter(b=>fold(b.name).includes(term)||fold(bookName(b.name)).includes(term)).map(book=>{
    const section = book.testament !== last ? `<div class="book-testament">${t(book.testament === 'OT'?'OLD TESTAMENT':'NEW TESTAMENT')}</div>` : '';
    last=book.testament;
    return section+`<button class="book-button ${book.name===state.book?'active':''}" data-book="${escapeHTML(book.name)}">${escapeHTML(bookName(book.name))}</button>`;
  }).join('') || `<p class="search-hint">${t('No books found.')}</p>`;
}
function verseExcerpt(book,chapter,verse) {
  if (book===state.book && chapter===state.chapter) return state.verses.find(v=>Number(v.verse)===Number(verse))?.text || '';
  return (state.translation === 'web' ? DEMO_VERSES[`${book}:${chapter}`] || [] : []).find(v=>Number(v.verse)===Number(verse))?.text || '';
}
async function loadChapter() {
  state.passageAbort?.abort();
  const ctrl = new AbortController(); state.passageAbort = ctrl;
  state.selected=null;state.original=null;state.studySerial++;
  translationCredits(null);
  updateNavigation(); $('verseList').innerHTML=`<div class="loading-passage"><span class="spinner"></span> ${t('Opening Scripture…')}</div>`;
  $('readerNotice').classList.add('hidden'); closePanel();
  let data;
  try {
    const params = new URLSearchParams({book:state.book,chapter:state.chapter,translation:state.translation});
    data = await api(`/api/chapter?${params}`,{signal:ctrl.signal});
    if (state.passageAbort !== ctrl) return;
    state.verses = data.verses || [];
    translationCredits(data);
    if(data.editionName)$('languageLabel').textContent=data.editionName.toUpperCase();
  } catch(error) {
    if (ctrl.signal.aborted) return;
    state.verses = state.translation === 'web' ? (DEMO_VERSES[keyForChapter()] || []) : [];
    const notice=$('readerNotice'); notice.classList.remove('hidden');
    notice.textContent = state.verses.length ?
      nativeApp ? 'Example verses only. Open Settings (gear above) and connect your study server for complete chapters and original-language study.' : 'Offline preview: showing selected example verses, not the complete chapter. Connect to the internet for the full Bible and word study.' :
      nativeApp ? 'This chapter needs a study-server connection. Check Settings and your internet connection, then select the chapter again.' : `${t('Unable to load')} ${state.translation.toUpperCase()}: ${errorText(error)} ${t('Please try again or choose another translation.')}`;
  }
  renderVerses();
}
function renderVerses() {
  if (!state.verses.length) { $('verseList').innerHTML=`<div class="loading-passage">${t('No verses available for this chapter.')}</div>`;return; }
  $('verseList').innerHTML = state.verses.map(v => {
    const ref=refKey(state.book,state.chapter,v.verse);
    const color=state.highlight[ref];
    return `<button class="verse ${color?'highlight-'+escapeHTML(color):''} ${Number(state.selected)===Number(v.verse)?'selected':''}" data-verse="${Number(v.verse)}" aria-label="${t('Study this verse')}: ${escapeHTML(displayRef(ref))}"><span class="verse-number">${Number(v.verse)}</span><span class="verse-text">${escapeHTML(v.text)}</span></button>`;
  }).join('');
}
function showView(view) {
  state.view=view;
  for (const target of ['read','saved','search']) $(`${target==='read'?'reader':target}View`).classList.toggle('hidden',view!==target);
  ['Read','Saved','Search'].forEach(label=>{
    $(`nav${label}`).classList.toggle('active',view===label.toLowerCase());
    $(`mobile${label}`).classList.toggle('active',view===label.toLowerCase());
  });
  if (view==='saved') renderSaved();
  if (view==='search') $('searchInput').focus();
  closeSidebar();
}
function renderSaved() {
  const refs = new Set([...Object.keys(state.highlight),...Object.keys(state.notes).filter(ref=>state.notes[ref]?.trim())]);
  $('savedCount').textContent=refs.size;
  if (!refs.size) { $('savedList').innerHTML=`<div class="empty-collection">${t('Your collection begins with a single verse.')}<br>${t('Highlight or write a note while you read.')}</div>`;return; }
  $('savedList').innerHTML=[...refs].reverse().map(ref=>{
    const parts=parseReference(ref); if (!parts) return '';
    return `<button class="saved-card" data-ref="${escapeHTML(ref)}"><div class="saved-meta"><span class="swatch ${escapeHTML(state.highlight[ref]||'')}"></span>${escapeHTML(displayRef(ref))}</div><div class="saved-text">${escapeHTML(verseExcerpt(parts.book,parts.chapter,parts.verse)||t('Tap to open this passage.'))}</div>${state.notes[ref]?`<div class="saved-note">${escapeHTML(state.notes[ref].slice(0,180))}</div>`:''}</button>`;
  }).join('');
}
function parseReference(input) {
  const text=input.trim();
  const match=text.match(/^(.+?)\s+(\d{1,3})(?:\s*:\s*(\d{1,3}))?$/i);
  if (!match) return null;
  const name=match[1].trim();
  const aliases={'psalmul':'Psalms','psalmii':'Psalms','psalm':'Psalms','ps':'Psalms','song of songs':'Song of Solomon'};
  const canonical=state.books.find(b=>fold(b.name)===fold(name)||fold(BOOK_NAMES_RO[b.name])===fold(name)|| b.name.toLowerCase()===aliases[name.toLowerCase()]?.toLowerCase());
  const chapter=Number(match[2]), verse=match[3] ? Number(match[3]) : null;
  if (!canonical || chapter<1 || chapter>canonical.chapters || (verse!==null && (verse<1 || verse>176))) return null;
  return {book:canonical.name,chapter,verse};
}
async function navigate(book, chapter, verse = null) {
  state.book=book;state.chapter=Number(chapter);showView('read');renderBooks($('bookFilter').value);await loadChapter();
  if (verse!==null) {
    const isThere=state.verses.some(v=>Number(v.verse)===Number(verse));
    if (isThere) {
      await selectVerse(verse);
      const el=document.querySelector(`[data-verse="${Number(verse)}"]`);
      el?.scrollIntoView({behavior:'smooth',block:'center'});
    } else toast(t('Verse not available in this passage preview'));
  }
}
function nextChapter(direction) {
  const position=state.books.findIndex(b=>b.name===state.book),current=state.books[position];
  if (direction === 1) {
    if (state.chapter<current.chapters) navigate(state.book,state.chapter+1);
    else if(position<state.books.length-1) navigate(state.books[position+1].name,1);
  } else {
    if(state.chapter>1)navigate(state.book,state.chapter-1);
    else if(position>0)navigate(state.books[position-1].name,state.books[position-1].chapters);
  }
}
function openPanel() {
  $('studyPanel').classList.add('open');$('mobileBackdrop').classList.add('show');
  $('mobileStudy').classList.add('active');
}
function closePanel() {
  $('studyPanel').classList.remove('open');$('mobileBackdrop').classList.remove('show');
  $('mobileStudy').classList.remove('active');
}
function openSidebar(){closePanel();$('sidebar').classList.add('open');$('mobileBackdrop').classList.add('show')}
function closeSidebar(){$('sidebar').classList.remove('open');if(!$('studyPanel').classList.contains('open'))$('mobileBackdrop').classList.remove('show')}
function switchTab(tab) {
  state.tab=tab;
  for(const name of ['words','meaning','notes']){
    $(`${name}Tab`).classList.toggle('hidden',name!==tab);
    const b=document.querySelector(`[data-tab="${name}"]`);
    b.classList.toggle('active',name===tab);b.setAttribute('aria-selected',String(name===tab));
  }
}
async function selectVerse(number) {
  const verse=state.verses.find(v=>Number(v.verse)===Number(number));
  if (!verse) return;
  state.selected=Number(number);state.original=null;
  const serial=++state.studySerial;
  renderVerses(); $('studyEmpty').classList.add('hidden');$('studyContent').classList.remove('hidden');
  $('selectedReference').textContent=displayReference();$('selectedVersion').textContent=editionAbbreviation();
  $('selectedText').textContent=verse.text;
  $('noteInput').value=state.notes[refKey()]||''; $('noteStatus').textContent=t('Notes save automatically.');
  renderPalette();switchTab('words');
  $('originalHeading').textContent=t(state.books.find(b=>b.name===state.book)?.testament==='OT'?'Hebrew original':'Greek original');
  $('originalContent').innerHTML=`<div class="section-loading"><span class="spinner"></span> ${t('Loading original text and word definitions…')}</div>`;
  renderMeaning();openPanel(); $('studyScroller').scrollTop=0;
  try {
    const params=new URLSearchParams({book:state.book,chapter:state.chapter,verse:state.selected,translation:state.translation});
    const original=await api(`/api/original?${params}`);
    if(serial!==state.studySerial)return;
    state.original=original;renderOriginal();
  } catch(error) {
    if(serial!==state.studySerial)return;
    $('originalContent').innerHTML=`<div class="status-note">${t('Original-language data is currently unavailable.')} ${escapeHTML(errorText(error))} ${t('Please check your connection and retry by reselecting the verse.')}</div>`;
  }
}
function renderPalette(){document.querySelectorAll('#highlightPalette button').forEach(btn=>btn.classList.toggle('active',(state.highlight[refKey()]||'none')===btn.dataset.color))}
function renderOriginal() {
  const orig=state.original;if(!orig)return;
  const isHebrew=orig.language==='Hebrew';
  const words=(orig.words||[]).map((w,i)=>{
    const entry=orig.lexicon?.[w.strong]||{};
    const gloss=w.gloss||entry.gloss||'';
    const parts=Array.isArray(w.parts)&&w.parts.length?` · ${t('parts:')} ${w.parts.map(p=>[p.surface,p.gloss].filter(Boolean).join(' = ')).join(' / ')}`:'';
    return `<button class="word-row" data-token="${i}"><div><div class="word-original" ${isHebrew?'dir="rtl"':''}>${escapeHTML(w.surface)}</div><div class="word-translit">${escapeHTML(entry.transliteration||w.strong||'—')}</div></div><div><div class="word-gloss">${escapeHTML(gloss||t('Lexical gloss unavailable'))}</div><div class="word-morph">${escapeHTML([w.strong,w.morph].filter(Boolean).join(' · ')+parts)}</div></div></button>`;
  }).join('');
  const attribution=(orig.attribution||[]).map(a=>{
    try{if(new URL(a.url).protocol==='https:')return `<a href="${escapeHTML(a.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(a.name||a.id)}</a> (${escapeHTML(a.license||'')})`;}catch{}
    return escapeHTML(a.name||a.id);
  }).join(' · ');
  $('originalContent').innerHTML=`<div class="original-text" ${isHebrew?'dir="rtl"':''}>${escapeHTML(orig.text)}</div><div class="source-label">${escapeHTML(orig.edition)} · ${t('Tap any word for its lexicon details.')}</div>${orig.annotationNotice?`<div class="source-label">${escapeHTML(orig.annotationNotice)}</div>`:''}<div class="word-table">${words||`<p class="source-label">${t('No morphological tags were returned for this verse.')}</p>`}</div><div id="wordDetail"></div><div class="source-credit">${t('Text and lexical data:')} ${attribution||'Bible API / eBible.org'}. ${t('Different manuscript editions may have variant readings.')}</div>`;
}
function selectToken(index) {
  const word=state.original?.words?.[index];if(!word)return;
  const entry=state.original.lexicon?.[word.strong]||{};
  const detail=$('wordDetail');
  detail.innerHTML=`<div class="word-detail"><strong>${escapeHTML(word.surface)} ${entry.transliteration?`(${escapeHTML(entry.transliteration)})`:''}</strong><div>${escapeHTML(word.romanianDefinition || entry.definition || word.gloss || t('A full lexicon definition is unavailable for this token.'))}</div>${entry.partOfSpeech?`<div>Part of speech: ${escapeHTML(entry.partOfSpeech)}</div>`:''}</div>`;
  detail.scrollIntoView({behavior:'smooth',block:'nearest'});
}
function block(title, content) {return `<div class="study-block"><h4>${escapeHTML(title)}</h4><p>${escapeHTML(content||t('Not available'))}</p></div>`;}
function renderMeaning() {
  const ref=refKey(),key=studyKey(ref),cached=state.studies[key]; const study=(cached&&(uiLanguage()==='en'||cached.language==='ro')?cached:null) || (uiLanguage()==='en'?PREVIEW_COMMENTARY[ref]:null);
  if (!study) {
    $('meaningContent').innerHTML=`<div class="ai-cta"><strong>${state.aiEnabled?t('Explore the original meaning'):t('Add AI-powered historical context')}</strong><p>${state.aiEnabled?t('Generate a careful explanation of this verse, including literal translation, literary and first-century context, different interpretations, and cross-references.'):'Connect to your study server to access Greek and Hebrew word data. AI commentary is available when your server administrator enables it.'}</p>${state.aiEnabled?`<button class="primary-btn" id="generateStudy">✦ &nbsp; ${t('Generate verse study')}</button>`:'<span class="source-label">Ask your administrator about study-server access.</span>'}</div>`;
    return;
  }
  let html='';
  if(uiLanguage()==='en'&&PREVIEW_COMMENTARY[ref] && !state.studies[key]) html=`<div class="source-label">${t('Included example commentary · not an AI-generated manuscript analysis')}</div>`;
  if(state.studies[key]) html=`<div class="source-label">${t('AI-generated study · verify interpretive claims with trusted commentaries.')}</div>`;
  html+=block(t('A direct translation'),study.literalTranslation)+block(t('What the author is saying'),study.overview);
  if(study.keyPhrases?.length){html+=`<div class="study-block"><h4>${t('Key expressions')}</h4>`;for(const p of study.keyPhrases){html+=`<div class="phrase-card"><strong>${escapeHTML(p.original)}</strong><small>${escapeHTML(p.transliteration)}</small><p><b>${escapeHTML(p.meaning)}</b> — ${escapeHTML(p.significance)}</p></div>`;}html+='</div>';}
  html+=block(t('Historical setting'),study.historicalContext)+block(t('Literary context'),study.literaryContext);
  if(study.interpretations?.length)html+=`<div class="study-block"><h4>${t('Interpretations & nuances')}</h4><ul>${study.interpretations.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul></div>`;
  if(study.crossReferences?.length)html+=`<div class="study-block"><h4>${t('Connected Scripture')}</h4>${study.crossReferences.map(x=>`<button class="crossref" data-ref="${escapeHTML(x.reference)}"><strong>${escapeHTML(displayRef(x.reference))} →</strong><p>${escapeHTML(x.connection)}</p></button>`).join('')}</div>`;
  html+=block(t('Reflect & apply'),study.application)+block(t('Textual / translation notes'),study.textualNotes);
  if(state.aiEnabled)html+=`<button id="generateStudy" class="primary-btn"><span>✧</span> ${state.studies[key]?t('Regenerate explanation'):t('Generate fuller explanation')}</button>`;
  html+=`<p class="ai-disclaimer">${t('Lexicon glosses are not automatically a complete contextual translation. AI commentary may contain mistakes and should be checked against the text and reputable biblical scholarship.')}</p>`;
  $('meaningContent').innerHTML=html;
}
async function generateStudy() {
  if(!state.aiEnabled)return toast(t('Add an API key on the server to enable AI studies'));
  const button=$('generateStudy'),ref=refKey(),key=studyKey(ref),serial=state.studySerial,translation=state.translation;
  if(button){button.disabled=true;button.textContent=t('Creating study…');}
  try {
    const data=await api('/api/study',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({book:state.book,chapter:state.chapter,verse:state.selected,translation})});
    if(data.language!==(translation==='ntr'?'ro':'en'))throw new Error(t('An error occurred. Check your connection and try again.'));
    state.studies[key]=data;saveJSON('sela.studies',state.studies);
    if(serial===state.studySerial)renderMeaning();
    toast(t('Study ready'));
  } catch(error){toast(`${t('Study unavailable')}: ${errorText(error)}`);if(button){button.disabled=false;button.textContent=t('Try again');}}
}
async function performSearch(query) {
  const term=query.trim();if(!term){toast(t('Enter a reference or a word'));return;}
  const ref=parseReference(term);
  if(ref){await navigate(ref.book,ref.chapter,ref.verse);return;}
  const translation=state.translation;
  $('searchResults').innerHTML=`<div class="loading-passage"><span class="spinner"></span> ${t('Searching Scripture…')}</div>`;
  translationCredits(null,'searchCredit');
  try {
    const result=await api(`/api/search?${new URLSearchParams({q:term,translation})}`);
    if(translation!==state.translation)return;
    const verses=result.results||[];
    $('searchResults').innerHTML=`<div class="result-count">${Number(result.total||verses.length)} ${t('matching verses in')} ${escapeHTML(result.editionName||translation.toUpperCase())} ${result.total_capped?t('(showing first results)'):''}</div>`+
      (verses.length?verses.map(item=>{
        const name=item.book_name||item.book||t('Unknown'),reference=`${name} ${item.chapter}:${item.verse}`;
        return `<button class="result-card" data-ref="${escapeHTML(reference)}"><div class="saved-meta">${escapeHTML(displayReference(name,item.chapter,item.verse))}</div><div class="result-text">${escapeHTML(item.text||t('Open verse'))}</div></button>`;
      }).join(''):`<div class="empty-collection">${t('No verses found. Try another phrase.')}</div>`);
    translationCredits(result,'searchCredit');
  }catch(error){if(translation===state.translation)$('searchResults').innerHTML=`<div class="status-note">${escapeHTML(errorText(error))}</div>`;}
}
function bindEvents() {
  $('bookFilter').addEventListener('input',e=>renderBooks(e.target.value));
  $('bookList').addEventListener('click',e=>{const btn=e.target.closest('[data-book]');if(btn)navigate(btn.dataset.book,1);});
  $('bookSelect').addEventListener('change',e=>navigate(e.target.value,1));
  $('chapterSelect').addEventListener('change',e=>navigate(state.book,Number(e.target.value)));
  $('translationSelect').addEventListener('change',e=>{state.translation=e.target.value;saveJSON('sela.translation',state.translation);renderSaved();$('searchResults').innerHTML='';translationCredits(null,'searchCredit');loadChapter();});
  $('prevChapter').addEventListener('click',()=>nextChapter(-1));
  $('nextChapter').addEventListener('click',()=>nextChapter(1));
  $('verseList').addEventListener('click',e=>{const btn=e.target.closest('[data-verse]');if(btn)selectVerse(btn.dataset.verse);});
  $('highlightPalette').addEventListener('click',e=>{const btn=e.target.closest('[data-color]');if(!btn||!state.selected)return;const ref=refKey();if(btn.dataset.color==='none')delete state.highlight[ref];else state.highlight[ref]=btn.dataset.color;saveJSON('sela.highlights',state.highlight);renderPalette();renderVerses();renderSaved();toast(btn.dataset.color==='none'?t('Highlight removed'):t('Verse highlighted'));});
  $('copyVerse').addEventListener('click',async()=>{
    const text=`${displayReference()} (${editionAbbreviation()}) — ${$('selectedText').textContent}`;
    try{await copyText(text);toast(t('Verse copied'));}catch{toast('Unable to copy this verse. Please try again.');}
  });
  document.querySelectorAll('.study-tab').forEach(b=>b.addEventListener('click',()=>switchTab(b.dataset.tab)));
  $('originalContent').addEventListener('click',e=>{const token=e.target.closest('[data-token]');if(token)selectToken(Number(token.dataset.token));});
  $('meaningContent').addEventListener('click',e=>{if(e.target.closest('#generateStudy'))generateStudy();const ref=e.target.closest('[data-ref]');if(ref){const parsed=parseReference(ref.dataset.ref);if(parsed)navigate(parsed.book,parsed.chapter,parsed.verse);}});
  $('noteInput').addEventListener('input',e=>{if(!state.selected)return;const ref=refKey();if(e.target.value.trim())state.notes[ref]=e.target.value;else delete state.notes[ref];saveJSON('sela.notes',state.notes);$('noteStatus').textContent=t('Saved on this device ✓');$('savedCount').textContent=new Set([...Object.keys(state.highlight),...Object.keys(state.notes)]).size;});
  $('savedList').addEventListener('click',e=>{const btn=e.target.closest('[data-ref]');const ref=btn&&parseReference(btn.dataset.ref);if(ref)navigate(ref.book,ref.chapter,ref.verse);});
  $('searchResults').addEventListener('click',e=>{const btn=e.target.closest('[data-ref]');const ref=btn&&parseReference(btn.dataset.ref);if(ref)navigate(ref.book,ref.chapter,ref.verse);});
  $('searchForm').addEventListener('submit',e=>{e.preventDefault();performSearch($('searchInput').value);});
  $('dismissBanner').addEventListener('click',()=>{$('insightBanner').classList.add('hidden');localStorage.setItem('sela.bannerDismissed','true');});
  $('fontButton').addEventListener('click',()=>{state.fontSize=state.fontSize>=24?17:state.fontSize+1;document.documentElement.style.setProperty('--reader-font',`${state.fontSize}px`);localStorage.setItem('sela.fontsize',state.fontSize);toast(`${t('Verse text:')} ${state.fontSize}px`);});
  $('navRead').addEventListener('click',()=>showView('read'));$('navSaved').addEventListener('click',()=>showView('saved'));$('navSearch').addEventListener('click',()=>showView('search'));
  $('mobileRead').addEventListener('click',()=>{showView('read');closePanel();});$('mobileSaved').addEventListener('click',()=>{showView('saved');closePanel();});$('mobileSearch').addEventListener('click',()=>{showView('search');closePanel();});
  $('searchButton').addEventListener('click',()=>{closePanel();showView('search');});
  $('mobileStudy').addEventListener('click',()=>{if(!state.selected){toast(t('Select a verse to begin studying'));showView('read');}else openPanel();});
  $('closeStudy').addEventListener('click',closePanel);
  $('menuButton').addEventListener('click',openSidebar);
  $('mobileBackdrop').addEventListener('click',()=>{closePanel();closeSidebar();});
  window.addEventListener('keydown',e=>{if(e.key==='Escape'){closePanel();closeSidebar();}});
}
async function init(){
  document.documentElement.style.setProperty('--reader-font',`${state.fontSize}px`);
  $('insightBanner').classList.toggle('hidden',localStorage.getItem('sela.bannerDismissed')==='true');
  bindEvents();
  try{
    const [books,status]=await Promise.all([api('/api/books'),api('/api/status')]);
    if(books.books?.length)state.books=books.books;
    state.aiEnabled=!!status.aiEnabled;
    if(Array.isArray(status.translations))state.translations=status.translations.filter(entry=>Object.hasOwn(editionNames,entry.id)&&(entry.id!=='esv'||entry.available));
  }catch{ /* The included book catalogue and sample verses permit a simple offline preview. */ }
  if(!Object.hasOwn(editionNames,state.translation)||!state.translations.some(e=>e.id===state.translation))state.translation=state.translation==='vdc'&&state.translations.some(e=>e.id==='ntr'&&e.available)?'ntr':'web';
  saveJSON('sela.translation',state.translation);
  renderTranslationOptions();
  $('bookSelect').innerHTML=state.books.map(b=>`<option value="${escapeHTML(b.name)}">${escapeHTML(b.name)}</option>`).join('');
  renderBooks();updateNavigation();$('savedCount').textContent=new Set([...Object.keys(state.highlight),...Object.keys(state.notes)]).size;
  await loadChapter();
}
init();
