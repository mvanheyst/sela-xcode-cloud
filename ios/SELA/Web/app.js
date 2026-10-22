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
  applyLocale();void refreshDaily();renderBooks($('bookFilter').value);
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
  state.selected=Number(number);state.original=null;renderDailyFlow();
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
  initDaily();renderBooks();updateNavigation();$('savedCount').textContent=new Set([...Object.keys(state.highlight),...Object.keys(state.notes)]).size;
  await loadChapter();
}
// BEGIN SELA DAILY
// SELA 1.2: authored reading prompts, not quotations or generated Bible text.
// Each entry links yesterday's lesson to today's focus and two further readings.
const pair=(en,ro)=>({en,ro});
const link=(reference,en,ro)=>({reference,...pair(en,ro)});
const DAILY_PLAN_ID='spiritual-growth-v1';
const DAILY_THEMES=[
  pair('Rooted in Christ','Înrădăcinați în Hristos'),
  pair('A renewed mind','O minte înnoită'),
  pair('Christlike character','Un caracter asemenea lui Hristos'),
  pair('Faith in action','Credința în acțiune')
];
const DAILY_PLAN=[
  {
    reference:'John 15:5',title:pair('Begin by abiding','Începe prin a rămâne în Hristos'),
    bridge:pair('Our path begins with Jesus: spiritual fruit grows from remaining in him. Revisit this foundation throughout the coming weeks.','Drumul nostru începe cu Isus: rodirea spirituală izvorăște din rămânerea în El. Revino la această temelie pe parcursul săptămânilor următoare.'),
    question:pair('What does depending on Jesus look like in one ordinary part of your day?','Cum arată dependența de Isus într-un lucru obișnuit din ziua ta?'),
    practice:pair('Pause before your next task and ask Jesus to shape your motives and actions.','Oprește-te înainte de următoarea activitate și roagă-L pe Isus să-ți călăuzească motivațiile și faptele.'),
    links:[link('Psalms 1:3','A tree nourished by water pictures a rooted life.','Pomul hrănit de apă ilustrează o viață înrădăcinată.'),link('Colossians 2:7','Being rooted in Christ leads to growth and gratitude.','Înrădăcinarea în Hristos duce la creștere și recunoștință.')]
  },
  {
    reference:'Ephesians 2:8',title:pair('Receive grace','Primește harul'),
    bridge:pair('Yesterday we began with dependence on Christ. Today grace reminds us that our relationship with God begins with his gift.','Ieri am început cu dependența de Hristos. Astăzi, harul ne amintește că relația noastră cu Dumnezeu începe cu darul Lui.'),
    question:pair('Where are you trying to earn what God gives by grace?','Unde încerci să câștigi ceea ce Dumnezeu dă prin har?'),
    practice:pair('Thank God for one gift you could not earn; read verses 8–10 together.','Mulțumește-I lui Dumnezeu pentru un dar pe care nu l-ai putea câștiga; citește împreună versetele 8–10.'),
    links:[link('Romans 3:24','Justification is described as a gift of grace.','Îndreptățirea este prezentată ca un dar al harului.'),link('Titus 3:5','Mercy grounds salvation rather than our achievements.','Mântuirea se întemeiază pe îndurare, nu pe realizările noastre.')]
  },
  {
    reference:'Romans 8:15',title:pair('Live as a child of God','Trăiește ca un copil al lui Dumnezeu'),
    bridge:pair('Grace welcomes us into relationship. Paul now describes belonging to God as adoption rather than slavery to fear.','Harul ne primește într-o relație. Pavel descrie acum apartenența la Dumnezeu ca înfiere, în locul robiei fricii.'),
    question:pair('How might belonging to God change the way you pray today?','Cum ar putea apartenența la Dumnezeu să schimbe felul în care te rogi astăzi?'),
    practice:pair('Bring one fear honestly to your heavenly Father in prayer.','Adu cu sinceritate înaintea Tatălui ceresc o teamă pe care o ai.'),
    links:[link('Galatians 4:6','The Spirit shapes the prayer of God’s children.','Duhul modelează rugăciunea copiilor lui Dumnezeu.'),link('1 John 3:1','The Father’s love is expressed in calling us his children.','Dragostea Tatălui se arată prin faptul că ne numește copiii Lui.')]
  },
  {
    reference:'Proverbs 3:5',title:pair('Trust beyond your understanding','Încrede-te dincolo de înțelegerea ta'),
    bridge:pair('Knowing God as Father gives us a foundation for trust, even when we cannot see the whole path.','Cunoașterea lui Dumnezeu ca Tată ne oferă temelia încrederii, chiar când nu vedem întregul drum.'),
    question:pair('Which decision are you holding too tightly to bring before God?','Ce hotărâre încerci să controlezi fără să o aduci înaintea lui Dumnezeu?'),
    practice:pair('Pray about that decision and seek wise counsel before acting.','Roagă-te pentru acea hotărâre și caută un sfat înțelept înainte de a acționa.'),
    links:[link('Psalms 56:3','Fear can become an occasion to turn toward God.','Frica poate deveni un prilej de a ne întoarce spre Dumnezeu.'),link('James 1:5','Those who lack wisdom are invited to ask God.','Cei cărora le lipsește înțelepciunea sunt invitați să o ceară de la Dumnezeu.')]
  },
  {
    reference:'1 John 1:9',title:pair('Return with honesty','Întoarce-te cu sinceritate'),
    bridge:pair('Trust includes honesty about sin. Confession brings our failures into the light of God’s faithfulness.','Încrederea cuprinde sinceritatea cu privire la păcat. Mărturisirea aduce greșelile noastre în lumina credincioșiei lui Dumnezeu.'),
    question:pair('What do you need to acknowledge before God without excuses?','Ce trebuie să recunoști înaintea lui Dumnezeu fără scuze?'),
    practice:pair('Confess a specific wrong and take one appropriate step toward making it right.','Mărturisește un păcat concret și fă un pas potrivit pentru a îndrepta lucrurile.'),
    links:[link('Psalms 32:5','The psalmist connects confession with forgiveness.','Psalmistul leagă mărturisirea de iertare.'),link('Proverbs 28:13','Confession includes turning away from wrongdoing.','Mărturisirea cuprinde și părăsirea răului.')]
  },
  {
    reference:'Philippians 1:6',title:pair('Trust God’s continuing work','Încrede-te în lucrarea continuă a lui Dumnezeu'),
    bridge:pair('After confession, growth continues. Paul’s confidence rests in God’s faithfulness to complete his work among believers.','După mărturisire, creșterea continuă. Încrederea lui Pavel se sprijină pe credincioșia lui Dumnezeu de a-Și duce la capăt lucrarea în credincioși.'),
    question:pair('Where do you need patient confidence rather than instant results?','Unde ai nevoie de încredere răbdătoare în locul rezultatelor imediate?'),
    practice:pair('Notice one small sign of growth and thank God for it.','Observă un mic semn de creștere și mulțumește-I lui Dumnezeu pentru el.'),
    links:[link('Philippians 2:13','God’s work reaches both our desires and our actions.','Lucrarea lui Dumnezeu atinge atât dorințele, cât și faptele noastre.'),link('1 Thessalonians 5:24','God’s faithfulness supports the call to holiness.','Credincioșia lui Dumnezeu susține chemarea la sfințenie.')]
  },
  {
    reference:'Colossians 2:7',title:pair('Review your roots','Privește din nou la rădăcini'),
    bridge:pair('Gather this week’s lessons: abiding, grace, adoption, trust, confession and God’s continuing work support a rooted life.','Adună învățăturile acestei săptămâni: rămânerea în Hristos, harul, înfierea, încrederea, mărturisirea și lucrarea continuă a lui Dumnezeu susțin o viață înrădăcinată.'),
    question:pair('Which foundation do you most need to revisit next week?','La care dintre aceste temelii ai cea mai mare nevoie să revii săptămâna viitoare?'),
    practice:pair('Write one sentence about what you learned and one habit you will carry forward.','Scrie o propoziție despre ce ai învățat și un obicei pe care îl vei păstra.'),
    links:[link('John 15:5','Return to our starting point: remaining in Jesus.','Revino la punctul de plecare: rămânerea în Isus.'),link('Ephesians 3:17','Paul prays for believers to be rooted in love.','Pavel se roagă ca cei credincioși să fie înrădăcinați în dragoste.')]
  },
  {
    reference:'Romans 12:2',title:pair('Let your mind be renewed','Lasă-ți mintea să fie înnoită'),
    bridge:pair('A rooted life changes how we think. This week explores how Scripture, prayer and obedience shape discernment.','O viață înrădăcinată schimbă felul în care gândim. Săptămâna aceasta urmărim cum Scriptura, rugăciunea și ascultarea modelează discernământul.'),
    question:pair('Which assumption needs to be examined in the light of Scripture?','Ce convingere trebuie cercetată în lumina Scripturii?'),
    practice:pair('Name one recurring thought and test it against the surrounding passage.','Numește un gând care revine des și cercetează-l în lumina întregului pasaj.'),
    links:[link('Ephesians 4:23','Renewal belongs to putting on a new way of life.','Înnoirea ține de îmbrăcarea unui fel nou de a trăi.'),link('Colossians 3:10','The new self grows in knowledge of its Creator.','Omul cel nou crește în cunoașterea Creatorului său.')]
  },
  {
    reference:'2 Timothy 3:16',title:pair('Learn from Scripture','Învață din Scriptură'),
    bridge:pair('Renewal needs a trustworthy source. Paul describes Scripture as useful for teaching, correction and training.','Înnoirea are nevoie de o sursă demnă de încredere. Pavel descrie Scriptura ca folositoare pentru învățătură, îndreptare și formare.'),
    question:pair('What does this passage teach, correct or train in you?','Ce te învață, ce îndreaptă și ce formează în tine acest pasaj?'),
    practice:pair('Read verses 14–17 and write one observation before applying them.','Citește versetele 14–17 și notează o observație înainte de a le aplica.'),
    links:[link('Psalms 119:105','God’s word is pictured as a lamp for the path.','Cuvântul lui Dumnezeu este asemănat cu o candelă pentru drum.'),link('Hebrews 4:12','God’s word exposes the intentions of the heart.','Cuvântul lui Dumnezeu descoperă intențiile inimii.')]
  },
  {
    reference:'James 1:5',title:pair('Ask for wisdom','Cere înțelepciune'),
    bridge:pair('Scripture trains us, and prayer expresses our need for wisdom. James places this invitation in the setting of trials.','Scriptura ne formează, iar rugăciunea exprimă nevoia noastră de înțelepciune. Iacov așază această invitație în contextul încercărilor.'),
    question:pair('Where do you need wisdom to respond faithfully to difficulty?','Unde ai nevoie de înțelepciune pentru a răspunde cu credincioșie unei greutăți?'),
    practice:pair('Ask God for wisdom about one situation, then listen before responding.','Cere-I lui Dumnezeu înțelepciune într-o situație concretă, apoi ascultă înainte de a răspunde.'),
    links:[link('Proverbs 2:6','Wisdom has its source in God.','Înțelepciunea își are izvorul în Dumnezeu.'),link('James 3:17','Wisdom from above bears recognizable moral fruit.','Înțelepciunea de sus aduce roade morale care pot fi recunoscute.')]
  },
  {
    reference:'Psalms 1:2',title:pair('Dwell on the Word','Cugetă la Cuvânt'),
    bridge:pair('Wisdom deepens as we return to Scripture. Meditation gives attention to God’s instruction rather than rushing past it.','Înțelepciunea se adâncește când revenim la Scriptură. Meditația acordă atenție învățăturii lui Dumnezeu, în loc să treacă în grabă peste ea.'),
    question:pair('What do you notice when you read the same passage slowly a second time?','Ce observi când citești același pasaj încet, a doua oară?'),
    practice:pair('Read Psalm 1 slowly and carry one observation into the rest of your day.','Citește Psalmul 1 încet și păstrează o observație pentru restul zilei.'),
    links:[link('Joshua 1:8','Meditation is connected with faithful action.','Cugetarea este legată de împlinirea cu credincioșie.'),link('Colossians 3:16','The word of Christ is to dwell richly among believers.','Cuvântul lui Hristos trebuie să locuiască din belșug între credincioși.')]
  },
  {
    reference:'Philippians 4:6',title:pair('Bring your concerns to God','Adu-ți grijile înaintea lui Dumnezeu'),
    bridge:pair('What we dwell on shapes our response to worry. Paul invites believers to bring their requests to God with thanksgiving.','Lucrurile la care cugetăm modelează răspunsul nostru la îngrijorare. Pavel îi invită pe credincioși să-și aducă cererile înaintea lui Dumnezeu cu mulțumire.'),
    question:pair('Which concern can you turn into a specific prayer today?','Ce grijă poți transforma astăzi într-o rugăciune concretă?'),
    practice:pair('Name your concern in prayer and thank God for one evidence of his care.','Numește-ți grija în rugăciune și mulțumește-I lui Dumnezeu pentru un semn al purtării Sale de grijă.'),
    links:[link('1 Peter 5:7','God’s care gives a reason to entrust anxieties to him.','Purtarea de grijă a lui Dumnezeu ne dă motiv să-I încredințăm îngrijorările.'),link('Matthew 6:33','Jesus directs anxious disciples toward God’s kingdom.','Isus îi îndreaptă pe ucenicii îngrijorați spre Împărăția lui Dumnezeu.')]
  },
  {
    reference:'James 1:22',title:pair('Put learning into practice','Pune în practică ceea ce înveți'),
    bridge:pair('Prayer and meditation prepare us to act. James warns that hearing alone can leave us self-deceived.','Rugăciunea și meditația ne pregătesc să acționăm. Iacov avertizează că simpla ascultare ne poate lăsa să ne înșelăm singuri.'),
    question:pair('What specific response does your reading call for?','La ce răspuns concret te cheamă lectura ta?'),
    practice:pair('Choose one small act of obedience and do it today.','Alege o faptă mică de ascultare și împlinește-o astăzi.'),
    links:[link('Matthew 7:24','Hearing and doing are pictured as building on rock.','A auzi și a împlini sunt asemănate cu zidirea pe stâncă.'),link('John 14:21','Jesus connects love for him with keeping his commands.','Isus leagă dragostea față de El de păzirea poruncilor Sale.')]
  },
  {
    reference:'Colossians 3:16',title:pair('Let knowledge become shared wisdom','Lasă cunoașterea să devină înțelepciune împărtășită'),
    bridge:pair('Review this week: a renewed mind learns, asks, meditates, prays and acts. Paul also places this learning within a worshiping community.','Privește la săptămâna aceasta: mintea înnoită învață, cere, cugetă, se roagă și acționează. Pavel așază această învățare și în comunitatea care se închină.'),
    question:pair('How can you share something you learned with humility?','Cum poți împărtăși cu smerenie ceva ce ai învățat?'),
    practice:pair('Discuss one passage with someone and listen to what they noticed.','Discută un pasaj cu cineva și ascultă ce a observat acea persoană.'),
    links:[link('Romans 12:2','Return to the renewal that began this week.','Revino la înnoirea cu care am început săptămâna.'),link('Hebrews 10:24','Consider how to encourage love and good works in others.','Gândește-te cum să-i îndemni pe alții la dragoste și fapte bune.')]
  },
  {
    reference:'Galatians 5:22',title:pair('Grow in the Spirit’s fruit','Crește în rodul Duhului'),
    bridge:pair('Learning is meant to shape character. Read verses 22–25 together as Paul describes the fruit of life by the Spirit.','Învățarea trebuie să modeleze caracterul. Citește împreună versetele 22–25, unde Pavel descrie rodul vieții prin Duhul.'),
    question:pair('Which aspect of this fruit most challenges your current reactions?','Ce aspect al acestui rod pune cel mai mult la încercare reacțiile tale de acum?'),
    practice:pair('Ask the Spirit to shape one interaction you expect to have today.','Roagă-L pe Duhul să modeleze o întâlnire pe care o vei avea astăzi.'),
    links:[link('John 15:5','Fruit returns us to our first lesson about abiding.','Rodirea ne întoarce la prima lecție despre rămânerea în Hristos.'),link('2 Peter 1:5','Peter describes qualities to cultivate alongside faith.','Petru descrie însușirile care trebuie cultivate alături de credință.')]
  },
  {
    reference:'Philippians 2:3',title:pair('Choose humility','Alege smerenia'),
    bridge:pair('The Spirit’s fruit changes relationships. Paul points away from rivalry and toward the humility displayed by Christ.','Rodul Duhului schimbă relațiile. Pavel ne îndepărtează de rivalitate și ne îndreaptă spre smerenia arătată de Hristos.'),
    question:pair('Where is the desire to be noticed shaping your behavior?','Unde îți modelează purtarea dorința de a fi remarcat?'),
    practice:pair('Listen carefully to another person before offering your own view.','Ascultă cu atenție o altă persoană înainte de a-ți exprima părerea.'),
    links:[link('Philippians 2:5','The following passage presents Christ’s example.','Pasajul care urmează prezintă exemplul lui Hristos.'),link('James 4:6','God’s grace is associated with humility.','Harul lui Dumnezeu este legat de smerenie.')]
  },
  {
    reference:'Ephesians 4:32',title:pair('Practice forgiveness','Practică iertarea'),
    bridge:pair('Humility makes room to remember the grace we received. Paul grounds forgiveness in God’s forgiveness in Christ.','Smerenia ne ajută să ne amintim harul primit. Pavel întemeiază iertarea pe iertarea lui Dumnezeu în Hristos.'),
    question:pair('How can remembering God’s mercy shape your response to an offense?','Cum poate amintirea îndurării lui Dumnezeu să-ți modeleze răspunsul la o jignire?'),
    practice:pair('Pray for a forgiving heart; seek wise support where hurt is ongoing.','Roagă-te pentru o inimă iertătoare; caută sprijin înțelept acolo unde rănirea continuă.'),
    links:[link('Colossians 3:13','Bearing with one another accompanies forgiveness.','Îngăduința reciprocă însoțește iertarea.'),link('Matthew 18:33','Jesus’ parable connects receiving mercy with showing it.','Pilda lui Isus leagă primirea milei de arătarea ei altora.')]
  },
  {
    reference:'James 1:19',title:pair('Be ready to listen','Fii gata să asculți'),
    bridge:pair('Forgiveness and kindness affect our speech. James calls for attentive listening and restraint in anger.','Iertarea și bunătatea ne influențează vorbirea. Iacov ne cheamă la ascultare atentă și stăpânire în mânie.'),
    question:pair('What changes when you seek to understand before answering?','Ce se schimbă când cauți să înțelegi înainte de a răspunde?'),
    practice:pair('In a difficult conversation, pause and ask one honest clarifying question.','Într-o conversație dificilă, oprește-te și pune o întrebare sinceră pentru a înțelege mai bine.'),
    links:[link('Proverbs 15:1','A gentle answer can change a heated exchange.','Un răspuns blând poate schimba o discuție aprinsă.'),link('Ephesians 4:29','Speech is directed toward building others up.','Vorbirea trebuie îndreptată spre zidirea celorlalți.')]
  },
  {
    reference:'James 1:3',title:pair('Persevere with purpose','Stăruie cu un scop'),
    bridge:pair('Character also grows under pressure. James describes tested faith producing endurance, not an easy life.','Caracterul crește și sub presiune. Iacov descrie credința încercată ca producând răbdare, fără a promite o viață ușoară.'),
    question:pair('What would faithfulness look like in a trial you cannot quickly resolve?','Cum ar arăta credincioșia într-o încercare pe care nu o poți rezolva repede?'),
    practice:pair('Choose one faithful step and ask a trusted believer for support.','Alege un pas de credincioșie și cere sprijinul unui credincios de încredere.'),
    links:[link('Romans 5:4','Endurance is linked with tested character and hope.','Răbdarea este legată de caracterul încercat și de speranță.'),link('Hebrews 12:2','Endurance looks toward Jesus as its example.','Stăruința privește la Isus ca exemplu.')]
  },
  {
    reference:'1 Thessalonians 5:18',title:pair('Cultivate gratitude','Cultivă recunoștința'),
    bridge:pair('Endurance and gratitude can grow together. Giving thanks in circumstances does not require calling evil good.','Răbdarea și recunoștința pot crește împreună. A mulțumi în orice împrejurare nu înseamnă a numi răul bine.'),
    question:pair('What can you honestly thank God for amid today’s circumstances?','Pentru ce Îi poți mulțumi sincer lui Dumnezeu în împrejurările de astăzi?'),
    practice:pair('Write down three particular reasons for gratitude.','Notează trei motive concrete de recunoștință.'),
    links:[link('Colossians 3:17','Gratitude accompanies ordinary words and actions.','Recunoștința însoțește cuvintele și faptele obișnuite.'),link('Psalms 103:2','Remembering God’s benefits nourishes praise.','Amintirea binefacerilor lui Dumnezeu hrănește lauda.')]
  },
  {
    reference:'2 Peter 1:5',title:pair('Connect faith and character','Leagă credința de caracter'),
    bridge:pair('Review this week’s character lessons. Read verses 5–8 to see how Peter connects faith, knowledge, endurance and love.','Recapitulează lecțiile de caracter ale săptămânii. Citește versetele 5–8 pentru a vedea cum leagă Petru credința, cunoașterea, răbdarea și dragostea.'),
    question:pair('Where has knowing more begun to change how you live?','Unde a început cunoașterea să schimbe felul în care trăiești?'),
    practice:pair('Choose one quality to keep practicing as we move into faith in action.','Alege o însușire pe care să o practici în continuare, pe măsură ce trecem la credința în acțiune.'),
    links:[link('Galatians 5:22','Compare Peter’s sequence with Paul’s account of spiritual fruit.','Compară înșiruirea lui Petru cu descrierea rodului Duhului făcută de Pavel.'),link('Colossians 1:10','Knowing God and bearing fruit belong together.','Cunoașterea lui Dumnezeu și rodirea merg împreună.')]
  },
  {
    reference:'Mark 10:45',title:pair('Follow Jesus in service','Urmează-L pe Isus în slujire'),
    bridge:pair('Growing character moves outward in service. Jesus’ example challenges the disciples’ pursuit of status.','Caracterul în creștere se exprimă prin slujire. Exemplul lui Isus pune sub semnul întrebării dorința ucenicilor de a avea întâietate.'),
    question:pair('Who could benefit from an act of service that brings you no recognition?','Cine ar putea primi ajutor printr-o slujire care nu-ți aduce recunoaștere?'),
    practice:pair('Do one useful, quiet act of service today.','Fă astăzi o faptă folositoare de slujire, în liniște.'),
    links:[link('John 13:14','Jesus models humble service by washing feet.','Isus arată slujirea smerită prin spălarea picioarelor.'),link('Philippians 2:3','Recall the humility we explored last week.','Amintește-ți smerenia pe care am cercetat-o săptămâna trecută.')]
  },
  {
    reference:'Luke 10:37',title:pair('Become a neighbor','Fii aproapele celuilalt'),
    bridge:pair('Service becomes concrete in mercy. Jesus ends the Samaritan story by calling his hearer to act.','Slujirea devine concretă prin milă. Isus încheie pilda samariteanului chemându-l pe ascultător la faptă.'),
    question:pair('Whose need are you tempted to pass by?','Pe lângă a cui nevoie ești ispitit să treci nepăsător?'),
    practice:pair('Read Luke 10:25–37 and offer appropriate help to someone within reach.','Citește Luca 10:25–37 și oferă un ajutor potrivit cuiva aflat aproape de tine.'),
    links:[link('Leviticus 19:18','The command to love one’s neighbor underlies the discussion.','Porunca de a iubi aproapele stă la baza discuției.'),link('1 John 3:18','Love is expressed through deeds and truth.','Dragostea se exprimă prin faptă și adevăr.')]
  },
  {
    reference:'2 Corinthians 9:7',title:pair('Give with a willing heart','Dăruiește cu o inimă binevoitoare'),
    bridge:pair('Mercy includes how we share resources. Paul encourages willing generosity in a collection for other believers.','Mila se vede și în felul în care împărțim resursele. Pavel încurajează generozitatea de bunăvoie într-o strângere de ajutoare pentru alți credincioși.'),
    question:pair('What could you share freely rather than reluctantly?','Ce ai putea împărți de bunăvoie, fără părere de rău?'),
    practice:pair('Choose a thoughtful way to share time, attention or resources with someone.','Alege un mod chibzuit de a oferi cuiva timp, atenție sau resurse.'),
    links:[link('Acts 20:35','Paul recalls Jesus’ teaching about giving.','Pavel amintește învățătura lui Isus despre dăruire.'),link('1 Timothy 6:18','Generosity is described as readiness to share.','Generozitatea este descrisă ca disponibilitate de a împărți cu alții.')]
  },
  {
    reference:'Hebrews 10:24',title:pair('Encourage growth in others','Încurajează creșterea celorlalți'),
    bridge:pair('We can give encouragement as well as resources. Spiritual growth includes helping one another love and do good.','Putem oferi încurajare, nu doar resurse. Creșterea spirituală cuprinde ajutorul reciproc pentru dragoste și fapte bune.'),
    question:pair('Who could you encourage toward a faithful next step?','Pe cine ai putea încuraja să facă următorul pas în credincioșie?'),
    practice:pair('Offer someone a specific word of encouragement grounded in what you have observed.','Oferă cuiva o încurajare concretă, întemeiată pe ceea ce ai observat.'),
    links:[link('1 Thessalonians 5:11','Believers are called to build one another up.','Credincioșii sunt chemați să se zidească unii pe alții.'),link('Colossians 3:16','Return to learning together through Christ’s word.','Revino la învățarea împreună prin cuvântul lui Hristos.')]
  },
  {
    reference:'1 Peter 3:15',title:pair('Share hope with gentleness','Împărtășește speranța cu blândețe'),
    bridge:pair('Encouragement can open a conversation about hope. Peter joins readiness to speak with gentleness and respect.','Încurajarea poate deschide o conversație despre speranță. Petru unește pregătirea de a vorbi cu blândețea și respectul.'),
    question:pair('How would you describe your hope without turning the conversation into an argument?','Cum ți-ai descrie speranța fără a transforma conversația într-o ceartă?'),
    practice:pair('Write a brief account of why you hope in Christ, using respectful, ordinary language.','Scrie pe scurt de ce îți pui speranța în Hristos, folosind un limbaj obișnuit și respectuos.'),
    links:[link('Colossians 4:6','Grace should shape our conversation.','Harul trebuie să modeleze conversația noastră.'),link('James 1:19','Recall the practice of listening before speaking.','Amintește-ți practica ascultării înainte de a vorbi.')]
  },
  {
    reference:'Micah 6:8',title:pair('Walk humbly in everyday life','Umblă smerit în viața de zi cu zi'),
    bridge:pair('Hopeful words belong beside faithful conduct. Micah brings justice, steadfast kindness and humble walking together.','Cuvintele pline de speranță trebuie însoțite de o purtare credincioasă. Mica aduce împreună dreptatea, bunătatea statornică și umblarea smerită.'),
    question:pair('Where can you practice fairness, mercy and humility in the same decision?','Unde poți practica dreptatea, mila și smerenia în aceeași hotărâre?'),
    practice:pair('Examine one ordinary decision through those three qualities.','Cercetează o hotărâre obișnuită prin prisma acestor trei însușiri.'),
    links:[link('Matthew 23:23','Jesus highlights justice, mercy and faithfulness.','Isus subliniază dreptatea, mila și credincioșia.'),link('James 2:17','James challenges a faith that never takes practical form.','Iacov pune la încercare credința care nu ia niciodată o formă practică.')]
  },
  {
    reference:'Colossians 1:10',title:pair('Keep growing in knowing God','Continuă să crești în cunoașterea lui Dumnezeu'),
    bridge:pair('Gather the whole path: rooted in Christ, renewed in mind, formed in character and active in love. Knowing God and bearing fruit keep nourishing one another.','Adună întregul drum: înrădăcinare în Hristos, înnoire a minții, formare a caracterului și dragoste în acțiune. Cunoașterea lui Dumnezeu și rodirea continuă să se hrănească reciproc.'),
    question:pair('Which connection between knowing and doing will you carry into the next cycle?','Ce legătură între cunoaștere și faptă vei păstra în ciclul următor?'),
    practice:pair('Review your reflections, choose one continuing habit and return to abiding in Christ tomorrow.','Recitește-ți reflecțiile, alege un obicei de păstrat și revino mâine la rămânerea în Hristos.'),
    links:[link('John 15:5','The path returns to its source: life in Christ.','Drumul revine la izvorul său: viața în Hristos.'),link('2 Peter 3:18','Growth in grace and knowledge remains an ongoing calling.','Creșterea în har și cunoaștere rămâne o chemare continuă.')]
  }
];

// Compare local calendar dates as day numbers, avoiding 23/25-hour DST days.
function dailyDateKey(date=new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}
function dailyDayNumber(value) {
  if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/u.test(value))return NaN;
  const [y,m,d]=value.split('-').map(Number),stamp=Date.UTC(y,m-1,d),check=new Date(stamp);
  return check.getUTCFullYear()===y&&check.getUTCMonth()===m-1&&check.getUTCDate()===d?stamp/86400000:NaN;
}
function dailyLesson(anchor,today=dailyDateKey()) {
  const elapsed=Math.max(0,(dailyDayNumber(today)-dailyDayNumber(anchor))||0);
  const index=elapsed%DAILY_PLAN.length;
  return {entry:DAILY_PLAN[index],index,day:index+1,cycle:Math.floor(elapsed/DAILY_PLAN.length)+1,theme:DAILY_THEMES[Math.floor(index/7)]};
}

// Embedded into both readers by scripts/build-daily.mjs; no new runtime import.
const DAILY_LABELS={
  'Verse of the day':'Versetul zilei',
  'A daily path of spiritual growth':'Un parcurs zilnic de creștere spirituală',
  'Today’s focus':'Tema de astăzi','Reflect':'Reflectează','Practice today':'Aplică astăzi',
  'Build on what you learned':'Continuă ceea ce ai învățat',
  'Explore the connections':'Explorează legăturile',
  'Previous lesson':'Lecția precedentă','Read & study':'Citește și studiază',
  'Read in context':'Citește în context','Write a reflection':'Scrie o reflecție',
  'Mark reflected':'Marchează ca reflectat','Reflected today ✓':'Ai reflectat astăzi ✓',
  'Show today’s prompt':'Arată îndemnul de astăzi','Later today':'Mai târziu astăzi',
  'Open this prompt each day':'Deschide acest îndemn în fiecare zi',
  'Loading today’s verse…':'Se încarcă versetul de astăzi…',
  'Today’s verse could not be loaded in this translation. Retry or choose another translation.':'Versetul de astăzi nu a putut fi încărcat în această traducere. Reîncearcă sau alege altă traducere.',
  'Try again':'Reîncearcă','Day':'Ziua','of':'din','Cycle':'Ciclul',
  'Weekly themes':'Temele săptămânale','Today':'Astăzi','SELA version 1.2':'SELA versiunea 1.2'
};
Object.assign(DAILY_LABELS,{
  'Read':'Citește','Word study':'Studiul cuvintelor','Meaning':'Înțeles','Reflection':'Reflecție','Practice':'Aplicare',
  'Begin daily study':'Începe studiul zilnic','Resume daily study':'Continuă studiul zilnic','Review today’s study':'Recapitulează studiul de astăzi',
  'Back':'Înapoi','Continue':'Continuă','Continue daily study':'Continuă studiul zilnic',
  'Finish today’s study':'Încheie studiul de astăzi','Study completed ✓':'Studiu încheiat ✓',
  'Read slowly. What does the verse actually say? Notice the speaker, repeated words and the surrounding passage.':'Citește încet. Ce spune versetul? Observă cine vorbește, cuvintele repetate și pasajul din jur.',
  'Explore the original words':'Explorează cuvintele originale',
  'Choose one Greek or Hebrew word. Compare its meaning with its use in this sentence; a dictionary gloss alone does not determine the verse’s meaning.':'Alege un cuvânt grecesc sau ebraic. Compară sensul lui cu folosirea în această propoziție; o glosare de dicționar nu stabilește singură înțelesul versetului.',
  'Understand the author’s message':'Înțelege mesajul autorului',
  'Read the historical and literary context. What was the author communicating to the first readers? Explore the linked passages before applying the verse.':'Citește contextul istoric și literar. Ce le transmitea autorul primilor cititori? Explorează pasajele conexe înainte de a aplica versetul.',
  'Open meaning & context':'Deschide înțelesul și contextul',
  'Generate a verse study there if you want a fuller explanation.':'Generează acolo un studiu al versetului dacă dorești o explicație mai detaliată.',
  'In your own words, what have you learned about God, yourself or your response?':'Cu propriile cuvinte, ce ai învățat despre Dumnezeu, despre tine sau despre răspunsul tău?',
  'Your reflection':'Reflecția ta','My next step':'Următorul meu pas',
  'What will you do, and when will you do it?':'Ce vei face și când vei face acel lucru?',
  'Use today’s suggestion':'Folosește sugestia de astăzi',
  'Choose a concrete action before finishing.':'Alege o acțiune concretă înainte de a încheia.',
  'Saved on this device':'Salvat pe acest dispozitiv','Daily study steps':'Etapele studiului zilnic',
  'You can revisit each step. Your place and practice plan are saved on this device.':'Poți reveni la fiecare etapă. Locul tău și planul de aplicare sunt salvate pe acest dispozitiv.'
});
const dt=label=>uiLanguage()==='ro'?(DAILY_LABELS[label]||label):label;
const dailyText=value=>value[uiLanguage()]||value.en;
let dailyState=null;

function dailyReference(reference) {
  const match=reference.match(/^(.+) (\d+):(\d+)$/u);
  return {book:match[1],chapter:Number(match[2]),verse:Number(match[3])};
}
function dailyRefLabel(reference){const r=dailyReference(reference);return displayReference(r.book,r.chapter,r.verse);}
function dailySeen(){saveJSON('sela.daily.lastPrompt',dailyState.date);}
function renderDaily() {
  if(!dailyState||!$('dailyVerseCard'))return;
  const d=dailyState,lesson=dailyLesson(d.anchor,d.date),entry=lesson.entry;
  const complete=d.completed[d.date]===true;
  $('dailyVerseCard').lang=uiLanguage();
  $('dailyVerseCard').classList.remove('hidden');
  $('dailyDate').dateTime=d.date;
  $('dailyEyebrow').textContent=dt('Verse of the day');
  $('dailyDate').textContent=new Date(`${d.date}T12:00:00`).toLocaleDateString(uiLanguage()==='ro'?'ro-RO':'en-CA',{month:'long',day:'numeric',year:'numeric'});
  $('dailyProgress').textContent=`${dt('Day')} ${lesson.day} ${dt('of')} 28 · ${dt('Cycle')} ${lesson.cycle}`;
  $('dailyTheme').textContent=dailyText(lesson.theme);
  $('dailyTitle').textContent=dailyText(entry.title);
  $('dailyReference').textContent=`${dailyRefLabel(entry.reference)} · ${editionAbbreviation()}`;
  $('dailySubtitle').textContent=dt('A daily path of spiritual growth');
  $('dailyDetails').classList.toggle('hidden',!d.open);
  $('dailyExpand').classList.toggle('hidden',d.open);
  $('dailyLater').classList.toggle('hidden',!d.open);
  $('dailyExpand').setAttribute('aria-expanded',String(d.open));
  for(const el of document.querySelectorAll('[data-daily-label]'))el.textContent=dt(el.dataset.dailyLabel);
  $('dailyPromptToggle').checked=d.auto;
  $('dailyComplete').textContent=dt(complete?'Reflected today ✓':'Mark reflected');
  $('dailyComplete').disabled=complete;
  $('dailyVerseCard').classList.toggle('daily-complete',complete);
  $('dailyBridge').textContent=dailyText(entry.bridge);
  $('dailyQuestion').textContent=dailyText(entry.question);
  $('dailyPractice').textContent=dailyText(entry.practice);
  const previous=lesson.index>0?DAILY_PLAN[lesson.index-1]:lesson.cycle>1?DAILY_PLAN.at(-1):null;
  $('dailyPrevious').innerHTML=previous?`<button type="button" class="daily-previous" data-daily-ref="${escapeHTML(previous.reference)}">${escapeHTML(dt('Previous lesson'))}: ${escapeHTML(dailyRefLabel(previous.reference))} · ${escapeHTML(dailyText(previous.title))}</button>`:'';
  $('dailyLinks').innerHTML=entry.links.map(item=>`<button type="button" class="daily-link" data-daily-ref="${escapeHTML(item.reference)}"><strong>${escapeHTML(dailyRefLabel(item.reference))} <span aria-hidden="true">↗</span></strong><span>${escapeHTML(dailyText(item))}</span></button>`).join('');
  $('dailyThemePath').innerHTML=DAILY_THEMES.map((theme,i)=>`<span role="listitem" ${i===Math.floor(lesson.index/7)?'aria-current="step"':''}>${i+1}. ${escapeHTML(dailyText(theme))}</span>`).join('');
  $('dailyThemePath').setAttribute('aria-label',dt('Weekly themes'));
  $('dailyVersion').setAttribute('aria-label',dt('SELA version 1.2'));
  $('dailyNav').setAttribute('aria-label',dt('Verse of the day'));
  $('dailyNav').title=dt('Verse of the day');
  const key=`${d.date}:${state.translation}`;
  if(d.key!==key){$('dailyVerseText').textContent=dt('Loading today’s verse…');translationCredits(null,'dailyCredit');}
  else if(d.payload){
    $('dailyVerseText').textContent=d.payload.verseText;
    translationCredits(d.payload,'dailyCredit');
  }else $('dailyVerseText').textContent=dt(d.loading?'Loading today’s verse…':'Today’s verse could not be loaded in this translation. Retry or choose another translation.');
  $('dailyRetry').classList.toggle('hidden',d.key!==key||d.loading||!!d.payload);
  renderDailyFlow();
}

const DAILY_STEPS=['Read','Word study','Meaning','Reflection','Practice'];
function dailyJourney(){
  const d=dailyState;let journey=d.journeys[d.date];
  if(!journey||typeof journey!=='object'||Array.isArray(journey))journey=d.journeys[d.date]={step:0,reached:0,practice:''};
  journey.reached=Math.max(0,Math.min(4,Math.trunc(Number(journey.reached))||0));
  journey.step=Math.max(0,Math.min(journey.reached,Math.trunc(Number(journey.step))||0));
  if(typeof journey.practice!=='string')journey.practice='';
  return journey;
}
function saveDailyJourney(){
  dailyState.journeys=Object.fromEntries(Object.entries(dailyState.journeys).sort(([a],[b])=>b.localeCompare(a)).slice(0,120));
  saveJSON('sela.daily.journeys',dailyState.journeys);
}
function renderDailyFlow(){
  if(!dailyState||!$('dailySteps'))return;
  const d=dailyState,j=dailyJourney(),finished=d.completed[d.date]===true;
  $('dailySteps').innerHTML=DAILY_STEPS.map((name,i)=>`<button type="button" data-daily-step="${i}" ${i>j.reached?'disabled':''} ${i===j.step?'aria-current="step"':''}><span>${i+1}</span>${escapeHTML(dt(name))}</button>`).join('');
  $('dailySteps').setAttribute('aria-label',dt('Daily study steps'));
  document.querySelectorAll('[data-daily-stage]').forEach(el=>el.classList.toggle('hidden',Number(el.dataset.dailyStage)!==j.step));
  $('dailyStepStatus').textContent=`${j.step+1} / 5 · ${dt(DAILY_STEPS[j.step])}`;
  $('dailyBack').disabled=j.step===0;
  $('dailyNext').classList.toggle('hidden',j.step===4);
  $('dailyNext').textContent=j.step<4?`${dt('Continue')}: ${dt(DAILY_STEPS[j.step+1])} →`:dt('Continue');
  $('dailyStart').textContent=dt(finished?'Review today’s study':j.reached>0?'Resume daily study':'Begin daily study');
  const reference=dailyLesson(d.anchor,d.date).entry.reference;
  if(document.activeElement!==$('dailyReflection'))$('dailyReflection').value=state.notes[reference]||'';
  if(document.activeElement!==$('dailyIntention'))$('dailyIntention').value=j.practice;
  $('dailyReflection').placeholder=dt('In your own words, what have you learned about God, yourself or your response?');
  $('dailyIntention').placeholder=dt('What will you do, and when will you do it?');
  $('dailyComplete').textContent=dt(finished?'Study completed ✓':'Finish today’s study');
  $('dailyComplete').classList.toggle('hidden',j.step!==4);
  let continuation=$('dailyStudyContinue');
  if(!continuation&&$('studyContent')){
    continuation=document.createElement('button');continuation.id='dailyStudyContinue';continuation.type='button';continuation.className='daily-panel-continue primary-btn';
    $('studyContent').append?.(continuation);
    continuation.addEventListener('click',()=>{closePanel();setDailyStep(Math.min(4,dailyJourney().step+1));$('dailyVerseCard').scrollIntoView?.({behavior:'smooth',block:'start'});});
  }
  if(continuation){
    const ref=dailyReference(reference),isDaily=state.book===ref.book&&state.chapter===ref.chapter&&state.selected===ref.verse;
    continuation.classList.toggle('hidden',!isDaily||!d.open||![1,2].includes(j.step));
    continuation.textContent=`${dt('Continue daily study')}: ${dt(DAILY_STEPS[Math.min(4,j.step+1)])} →`;
  }
}
function setDailyStep(step){
  const j=dailyJourney();j.step=Math.max(0,Math.min(4,step));j.reached=Math.max(j.reached,j.step);
  saveDailyJourney();dailyState.open=true;dailySeen();renderDaily();
}
async function openDailyTool(mode){
  const date=dailyState.date,reference=dailyLesson(dailyState.anchor,date).entry.reference;
  const ref=dailyReference(reference);
  if(state.book===ref.book&&state.chapter===ref.chapter&&state.selected===ref.verse){
    openPanel();switchTab(mode==='meaning'?'meaning':'words');
  }else await openDailyPassage(reference,mode);
  if(dailyState.date!==date)return;
  dailyState.open=true;renderDaily();
}

async function refreshDaily(force=false,now=new Date()) {
  if(!dailyState)return;
  const d=dailyState,today=dailyDateKey(now);
  if(today!==d.date){
    d.date=today;d.open=d.auto&&savedJSON('sela.daily.lastPrompt','')!==today;
    if(d.open)dailySeen();
  }
  const key=`${d.date}:${state.translation}`;
  if(!force&&d.key===key){renderDaily();return;}
  d.abort?.abort();const ctrl=new AbortController();d.abort=ctrl;
  d.key=key;d.payload=null;d.loading=true;renderDaily();
  const ref=dailyReference(dailyLesson(d.anchor,d.date).entry.reference);
  try {
    const params=new URLSearchParams({book:ref.book,chapter:ref.chapter,translation:state.translation});
    const data=await api(`/api/chapter?${params}`,{signal:ctrl.signal});
    if(ctrl.signal.aborted||d.abort!==ctrl)return;
    const verse=data.verses?.find(item=>Number(item.verse)===ref.verse);
    if(!verse?.text)throw new Error('Daily verse unavailable');
    d.payload={verseText:verse.text,copyright:data.copyright,attribution:data.attribution};
  }catch(error){if(ctrl.signal.aborted||d.abort!==ctrl)return;}
  finally{if(d.abort===ctrl&&!ctrl.signal.aborted){d.loading=false;renderDaily();}}
}

function setDailyOpen(open) {
  if(!dailyState)return;
  dailyState.open=open;dailySeen();renderDaily();
}
async function openDailyPassage(reference,mode='study') {
  const ref=dailyReference(reference);setDailyOpen(false);
  await navigate(ref.book,ref.chapter,mode==='context'?null:ref.verse);
  if(state.book===ref.book&&state.chapter===ref.chapter&&state.selected===ref.verse){
    if(mode==='notes')switchTab('notes');
    if(mode==='meaning')switchTab('meaning');
  }
}
function initDaily() {
  if(!$('dailyVerseCard'))return; // Older HTML can still start the reader.
  const today=dailyDateKey();let anchor=savedJSON('sela.daily.anchor','');
  if(!Number.isFinite(dailyDayNumber(anchor))){anchor=today;saveJSON('sela.daily.anchor',anchor);}
  const completed=savedJSON('sela.daily.completed',{});
  const savedJourneys=savedJSON('sela.daily.journeys',{});
  dailyState={anchor,date:today,auto:savedJSON('sela.daily.auto',true)!==false,
    journeys:savedJourneys&&typeof savedJourneys==='object'&&!Array.isArray(savedJourneys)?savedJourneys:{},
    completed:completed&&typeof completed==='object'&&!Array.isArray(completed)?completed:{},key:'',payload:null,loading:false,abort:null};
  dailyState.open=dailyState.auto&&savedJSON('sela.daily.lastPrompt','')!==today;
  if(dailyState.open)dailySeen();
  $('dailyExpand').addEventListener('click',()=>setDailyOpen(true));
  $('dailyLater').addEventListener('click',()=>setDailyOpen(false));
  $('dailyRetry').addEventListener('click',()=>void refreshDaily(true));
  $('dailyPromptToggle').addEventListener('change',event=>{dailyState.auto=event.target.checked;saveJSON('sela.daily.auto',dailyState.auto);});
  $('dailyComplete').addEventListener('click',()=>{
    if(dailyJourney().step!==4)return;
    if(!dailyJourney().practice.trim()){toast(dt('Choose a concrete action before finishing.'));$('dailyIntention').focus();return;}
    dailyState.completed[dailyState.date]=true;
    // Bound date-only history; Scripture text is never persisted here.
    dailyState.completed=Object.fromEntries(Object.entries(dailyState.completed).sort(([a],[b])=>b.localeCompare(a)).slice(0,120));
    saveJSON('sela.daily.completed',dailyState.completed);renderDaily();
  });
  $('dailyStart').addEventListener('click',()=>{setDailyOpen(true);renderDailyFlow();});
  $('dailyBack').addEventListener('click',()=>setDailyStep(dailyJourney().step-1));
  $('dailyNext').addEventListener('click',()=>setDailyStep(dailyJourney().step+1));
  $('dailySteps').addEventListener('click',event=>{const b=event.target.closest('[data-daily-step]');if(b&&!b.disabled&&Number(b.dataset.dailyStep)<=dailyJourney().reached)setDailyStep(Number(b.dataset.dailyStep));});
  $('dailySuggest').addEventListener('click',()=>{dailyJourney().practice=dailyText(dailyLesson(dailyState.anchor,dailyState.date).entry.practice);saveDailyJourney();renderDailyFlow();});
  $('dailyIntention').addEventListener('input',event=>{dailyJourney().practice=event.target.value;saveDailyJourney();});
  $('dailyReflection').addEventListener('input',event=>{
    const reference=dailyLesson(dailyState.anchor,dailyState.date).entry.reference;
    if(event.target.value.trim())state.notes[reference]=event.target.value;else delete state.notes[reference];
    saveJSON('sela.notes',state.notes);
    if(refKey()===reference)$('noteInput').value=event.target.value;
    $('savedCount').textContent=new Set([...Object.keys(state.highlight),...Object.keys(state.notes)]).size;
  });
  $('dailyVerseCard').addEventListener('click',event=>{
    const link=event.target.closest('[data-daily-ref]');
    const action=event.target.closest('[data-daily-open]');
    const tool=event.target.closest('[data-daily-tool]');
    if(link)void openDailyPassage(link.dataset.dailyRef);
    if(action)void openDailyPassage(dailyLesson(dailyState.anchor,dailyState.date).entry.reference,action.dataset.dailyOpen);
    if(tool)void openDailyTool(tool.dataset.dailyTool);
  });
  $('dailyNav').addEventListener('click',()=>{
    showView('read');closePanel();void refreshDaily();setDailyOpen(true);
    $('dailyVerseCard').scrollIntoView?.({behavior:'smooth',block:'start'});
    $('dailyTitle').focus();
  });
  const resume=()=>{if(document.visibilityState!=='hidden')void refreshDaily();};
  document.addEventListener?.('visibilitychange',resume);
  window.addEventListener('focus',resume);
  // A short interval also handles midnight while the app remains in the foreground.
  // Lifecycle events handle resuming after iOS suspends timers.
  if(typeof setInterval==='function')setInterval(resume,60000);
  void refreshDaily();
}

// END SELA DAILY
init();
