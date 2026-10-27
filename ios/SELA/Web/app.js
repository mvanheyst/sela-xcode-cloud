// BEGIN SELA RELEASE
const SELA_RELEASE={"version":"1.3.0","release":"sela-1.3.0-contextual-study-chat"};
// END SELA RELEASE
import {requestJSON, copyText} from './api-client.js';
const BOOK_NAMES_RO={"Genesis": "Geneza", "Exodus": "Exodul", "Leviticus": "Leviticul", "Numbers": "Numeri", "Deuteronomy": "Deuteronomul", "Joshua": "Iosua", "Judges": "Judecători", "Ruth": "Rut", "1 Samuel": "1 Samuel", "2 Samuel": "2 Samuel", "1 Kings": "1 Împărați", "2 Kings": "2 Împărați", "1 Chronicles": "1 Cronici", "2 Chronicles": "2 Cronici", "Ezra": "Ezra", "Nehemiah": "Neemia", "Esther": "Estera", "Job": "Iov", "Psalms": "Psalmii", "Proverbs": "Proverbe", "Ecclesiastes": "Eclesiastul", "Song of Solomon": "Cântarea Cântărilor", "Isaiah": "Isaia", "Jeremiah": "Ieremia", "Lamentations": "Plângerile lui Ieremia", "Ezekiel": "Ezechiel", "Daniel": "Daniel", "Hosea": "Osea", "Joel": "Ioel", "Amos": "Amos", "Obadiah": "Obadia", "Jonah": "Iona", "Micah": "Mica", "Nahum": "Naum", "Habakkuk": "Habacuc", "Zephaniah": "Țefania", "Haggai": "Hagai", "Zechariah": "Zaharia", "Malachi": "Maleahi", "Matthew": "Matei", "Mark": "Marcu", "Luke": "Luca", "John": "Ioan", "Acts": "Faptele Apostolilor", "Romans": "Romani", "1 Corinthians": "1 Corinteni", "2 Corinthians": "2 Corinteni", "Galatians": "Galateni", "Ephesians": "Efeseni", "Philippians": "Filipeni", "Colossians": "Coloseni", "1 Thessalonians": "1 Tesaloniceni", "2 Thessalonians": "2 Tesaloniceni", "1 Timothy": "1 Timotei", "2 Timothy": "2 Timotei", "Titus": "Tit", "Philemon": "Filimon", "Hebrews": "Evrei", "James": "Iacov", "1 Peter": "1 Petru", "2 Peter": "2 Petru", "1 John": "1 Ioan", "2 John": "2 Ioan", "3 John": "3 Ioan", "Jude": "Iuda", "Revelation": "Apocalipsa"};
const ROMANIAN={"SELA — Scripture, deeply understood": "SELA — Scriptura, înțeleasă în profunzime", "SCRIPTURE & STUDY": "SCRIPTURĂ ȘI STUDIU", "YOUR SPACE": "SPAȚIUL TĂU", "Read Scripture": "Citește Scriptura", "Highlights & notes": "Evidențieri și notițe", "Search the Bible": "Caută în Biblie", "THE BIBLE": "BIBLIA", "A deeper kind of reading": "O lectură mai profundă", "Original words. Timeless context.": "Cuvinte originale. Context pentru toate timpurile.", "A QUIET MOMENT WITH THE WORD": "UN MOMENT DE LINIȘTE CU SCRIPTURA", "SCRIPTURE READING": "LECTURA SCRIPTURII", "The promise of His coming": "Promisiunea venirii Sale", "CH.": "CAP.", "Go beyond the translation": "Descoperă dincolo de traducere", "Tap any verse to uncover its original language, historical setting, and deeper meaning.": "Atinge un verset pentru a descoperi textul original, cadrul istoric și sensul său profund.", "THE WORD": "CUVÂNTUL", "Opening Scripture…": "Se deschide Scriptura…", "Read slowly. Discover deeply. Let the words dwell.": "Citește încet. Descoperă în profunzime. Lasă cuvintele să prindă rădăcini.", "YOUR COLLECTION": "COLECȚIA TA", "Saved": "Salvate", "Scripture": "Scriptura", "The verses that have spoken to you, gathered in one place.": "Versetele care ți-au vorbit, adunate într-un singur loc.", "EXPLORE THE WORD": "EXPLOREAZĂ SCRIPTURA", "Find a": "Găsește un", "passage": "pasaj", "Keyword searches use WEB. References like “2 Peter 3:10” open your selected reading translation.": "Căutarea folosește versiunea selectată. Poți introduce o trimitere precum „Ioan 3:16”.", "Search": "Caută", "Try: John 3:16 · Psalm 23 · covenant · peace": "Încearcă: Ioan 3:16 · Psalmii 23 · legământ · pace", "DIG DEEPER": "APROFUNDEAZĂ", "Verse": "Studiul", "study": "versetului", "Every word has a story.": "Fiecare cuvânt are o poveste.", "Select a verse in the reading pane to see the original Greek, Hebrew or Aramaic, word meanings, and historical context.": "Selectează un verset pentru a vedea textul original grecesc, ebraic sau aramaic, sensurile cuvintelor și contextul istoric.", "01   Read": "01   Citește", "02   Select": "02   Selectează", "03   Discover": "03   Descoperă", "MARK THIS VERSE": "EVIDENȚIAZĂ VERSETUL", "Copy": "Copiază", "Original text": "Textul original", "Meaning & context": "Sens și context", "My notes": "Notițele mele", "Greek original": "Originalul grecesc", "Hebrew original": "Originalul ebraic", "Aramaic original": "Originalul aramaic", "Hebrew / Aramaic original": "Originalul ebraic / aramaic", "Loading original text…": "Se încarcă textul original…", "Personal reflection": "Reflecție personală", "Your thoughts are saved privately in this browser.": "Gândurile tale sunt salvate doar pe acest dispozitiv.", "Notes save automatically.": "Notițele se salvează automat.", "Word study uses Greek/Hebrew/Aramaic sources. AI commentary uses WEB and those sources, independently of your reading translation.": "Analiza folosește textul original grecesc, ebraic sau aramaic. Glosările și studiul sunt generate direct în română; textul NTR nu este trimis serviciului AI.", "Read": "Citește", "Study": "Studiu", "Find a book…": "Găsește o carte…", "Filter Bible books": "Filtrează cărțile Bibliei", "Bible books": "Cărțile Bibliei", "Main navigation": "Navigare principală", "Mobile navigation": "Navigare mobilă", "Open menu": "Deschide meniul", "Search Bible": "Caută în Biblie", "Change text size": "Schimbă mărimea textului", "Previous chapter": "Capitolul anterior", "Next chapter": "Capitolul următor", "Book": "Cartea", "Chapter": "Capitolul", "Bible translation": "Traducerea Bibliei", "Search Scripture": "Caută în Scriptură", "Search for a word or reference…": "Caută un cuvânt sau o trimitere…", "What is God teaching you through this verse? Write a reflection, question, or prayer…": "Ce te învață Dumnezeu prin acest verset? Scrie o reflecție, o întrebare sau o rugăciune…", "No books found.": "Nu s-au găsit cărți.", "OLD TESTAMENT": "VECHIUL TESTAMENT", "NEW TESTAMENT": "NOUL TESTAMENT", "Read • reflect • understand": "Citește • reflectează • înțelege", "No verses available for this chapter.": "Nu sunt disponibile versete pentru acest capitol.", "Study this verse": "Studiază acest verset", "Your collection begins with a single verse.": "Colecția ta începe cu un singur verset.", "Highlight or write a note while you read.": "Evidențiază un verset sau scrie o notiță în timp ce citești.", "Tap to open this passage.": "Atinge pentru a deschide pasajul.", "Verse not available in this passage preview": "Versetul nu este disponibil în acest pasaj.", "Loading original text and word definitions…": "Se încarcă textul original și sensurile cuvintelor…", "Original-language data is currently unavailable.": "Datele textului original nu sunt disponibile acum.", "Please check your connection and retry by reselecting the verse.": "Verifică conexiunea și selectează din nou versetul.", "Lexical gloss unavailable": "Glosare lexicală indisponibilă", "parts:": "componente:", "Tap any word for its lexicon details.": "Atinge un cuvânt pentru detalii lexicale.", "No morphological tags were returned for this verse.": "Sursa nu a furnizat analiza morfologică pentru acest verset.", "Text and lexical data:": "Text și date lexicale:", "Different manuscript editions may have variant readings.": "Edițiile manuscriselor pot avea variante textuale.", "A full lexicon definition is unavailable for this token.": "Definiția lexicală completă nu este disponibilă pentru acest cuvânt.", "Not available": "Indisponibil", "Explore the original meaning": "Explorează sensul original", "Add AI-powered historical context": "Adaugă context istoric cu AI", "Generate a careful explanation of this verse, including literal translation, literary and first-century context, different interpretations, and cross-references.": "Generează în română explicația versetului, traducerea literală din original, contextul literar și istoric, interpretări și trimiteri biblice.", "The word-by-word original text is available from the Scripture source. To generate in-depth context for any passage, add your OpenAI API key to the server environment.": "Textul original este disponibil din sursa biblică. Glosările românești și explicațiile necesită activarea serviciului AI pe server.", "Generate verse study": "Generează studiul versetului", "See README.md for optional AI setup.": "Activează serviciul de studiu pe server.", "Included example commentary · not an AI-generated manuscript analysis": "Comentariu exemplificativ inclus", "AI-generated study · verify interpretive claims with trusted commentaries.": "Studiu generat cu AI · verifică interpretările în comentarii de încredere.", "A direct translation": "O traducere literală din original", "What the author is saying": "Ce spune autorul", "Key expressions": "Expresii-cheie", "Historical setting": "Cadrul istoric", "Literary context": "Contextul literar", "Interpretations & nuances": "Interpretări și nuanțe", "Connected Scripture": "Trimiteri biblice", "Reflect & apply": "Reflectează și aplică", "Textual / translation notes": "Observații textuale și de traducere", "Regenerate explanation": "Regenerează explicația", "Generate fuller explanation": "Generează o explicație detaliată", "Lexicon glosses are not automatically a complete contextual translation. AI commentary may contain mistakes and should be checked against the text and reputable biblical scholarship.": "Glosările lexicale nu reprezintă automat o traducere contextuală completă. Comentariul AI poate conține erori; verifică-l în text și în lucrări biblice de încredere.", "Add an API key on the server to enable AI studies": "Activează serviciul AI pe server pentru studii.", "Creating study…": "Se generează studiul…", "Study ready": "Studiul este gata", "Try again": "Reîncearcă", "Enter a reference or a word": "Introdu o trimitere sau un cuvânt", "Searching Scripture…": "Se caută în Scriptură…", "matching verses in": "versete găsite în", "(showing first results)": "(primele rezultate)", "No verses found. Try another phrase.": "Nu s-au găsit versete. Încearcă altă expresie.", "Unknown": "Necunoscut", "Open verse": "Deschide versetul", "Highlight removed": "Evidențiere eliminată", "Verse highlighted": "Verset evidențiat", "Verse copied": "Verset copiat", "Clipboard requires a secure connection": "Copierea necesită o conexiune securizată", "Saved on this device ✓": "Salvat pe acest dispozitiv ✓", "Select a verse to begin studying": "Selectează un verset pentru a începe studiul", "Browser storage is unavailable": "Stocarea locală nu este disponibilă", "Study unavailable": "Studiul nu este disponibil", "Unable to load": "Nu se poate încărca", "Please try again or choose another translation.": "Reîncearcă sau alege altă traducere.", "Verse text:": "Mărimea textului:", "unavailable": "indisponibil", "An error occurred. Check your connection and try again.": "Serviciul nu este disponibil momentan. Verifică conexiunea și reîncearcă.", "The study server took too long to respond. Please try again.": "Serverul de studiu nu a răspuns la timp. Reîncearcă.", "Highlight color": "Culoarea evidențierii", "Remove highlight": "Elimină evidențierea", "Honey": "Auriu", "Sage": "Verde", "Lavender": "Lavandă", "Rose": "Roz", "Close study": "Închide studiul", "Dismiss": "Închide", "Search by reference or keyword": "Caută după trimitere sau cuvânt", "Search uses the selected translation. References such as “John 3:16” open that passage.": "Căutarea folosește versiunea selectată. O trimitere precum „Ioan 3:16” deschide pasajul.", "Dismiss tip": "Închide sugestia", "Verse, reference, or phrase…": "Verset, trimitere sau expresie…", "Verse study panel": "Panoul de studiu al versetului", "Highlight colors": "Culorile evidențierii", "Highlight gold": "Evidențiază cu auriu", "Gold": "Auriu", "Highlight green": "Evidențiază cu verde", "Green": "Verde", "Highlight lavender": "Evidențiază cu lavandă", "Highlight pink": "Evidențiază cu roz", "Pink": "Roz", "Copy verse": "Copiază versetul", "Study sections": "Secțiunile studiului", "Source": "Sursa"};
Object.assign(ROMANIAN,{"Select up to 20 consecutive verses.": "Selectează cel mult 20 de versete consecutive.", "Select consecutive verses to study this passage.": "Selectează versete consecutive pentru a studia pasajul.", "MARK SELECTED VERSES": "EVIDENȚIAZĂ VERSETELE SELECTATE", "Study the full selected passage, including its original wording and surrounding context.": "Studiază întregul pasaj selectat, inclusiv formularea originală și contextul învecinat.", "Update the study server to generate passage studies.": "Actualizează serverul de studiu pentru a genera studii de pasaje."});
function localize(text,language){return language==='ro'?(ROMANIAN[text]||text):text;}

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
  book:'2 Peter', chapter:3, translation:savedJSON('sela.translation','web'), selected:null, selectedVerses:[], originalLoadingKey:null, passageSupported:false, verses:[],
  translations:initialTranslations(), loaded:null, catalogPending:null,
  books:fallbackBooks, view:'read', aiEnabled:false, original:null, tab:'words',
  selectedToken:null, highlight:savedJSON('sela.highlights',{}), notes:savedJSON('sela.notes',{}),
  studies:savedJSON('sela.studies',{}), passageAbort:null, studySerial:0,
  fontSize:Number(localStorage.getItem('sela.fontsize')) || 19, toastTimer:null
};

const editionNames = {web:'World English Bible', kjv:'King James Version', esv:'English Standard Version', niv:'New International Version', ntr:'Noua Traducere Românească',nasb2020:'New American Standard Bible 2020',amp:'Amplified Bible',asv:'American Standard Version',nirv:'New International Reader’s Version 2014'};
const readerMessages={
  'Opening':'Se deschide','Having trouble connecting. Retrying…':'Conectare dificilă. Se reîncearcă…',
  'Couldn’t load this chapter.':'Capitolul nu a putut fi încărcat.',
  'This edition isn’t currently accessible.':'Această ediție nu este accesibilă momentan.',
  'Choose another translation':'Alege altă traducere','Try again':'Reîncearcă',
  'Your current chapter is still here.':'Capitolul încărcat rămâne aici.',
  'The server needs its YouVersion access checked.':'Accesul YouVersion al serverului trebuie verificat.',
  'Access required':'Necesită acces','Checking access':'Se verifică accesul','Setup required':'Necesită configurare',
  'Server access issue':'Problemă de acces a serverului','Reading':'Citești'
};
const rt=text=>uiLanguage()==='ro'?(readerMessages[text]||text):text;
function translationOptionLabel(entry){
  const labels={web:'WEB — World English Bible',kjv:'KJV — King James Version',
    niv:'NIV — New International Version',ntr:'NTR — Noua Traducere Românească',
    nasb2020:'NASB 2020 — New American Standard Bible',amp:'AMP — Amplified Bible',
    asv:'ASV — American Standard Version',nirv:'NIrV — New International Reader’s Version'};
  if(entry.id==='ntr')return labels.ntr+(uiLanguage()==='ro'?' (Română)':' (Romanian)');
  if(entry.id==='niv'&&(entry.bibleId===113||/^NIVUK/iu.test(entry.abbreviation||'')))return 'NIVUK — New International Version (Anglicised)';
  if(entry.id==='esv')return `${entry.abbreviation||'ESV'} — ${entry.name||editionNames.esv}`;
  return labels[entry.id]||entry.name||entry.id;
}
function initialTranslations(){
  const defaults=['web','kjv','niv','ntr','nasb2020','amp','asv','nirv'].map(id=>({id,available:['web','kjv'].includes(id),youversionAccess:'unverified'}));
  const stored=savedJSON('sela.translationCatalog.v1',null);
  if(!stored||!Number.isFinite(stored.time)||Date.now()-stored.time>24*60*60_000||!Array.isArray(stored.entries))return defaults;
  const ids=new Set(defaults.map(e=>e.id));ids.add('esv');
  const previous=new Map(stored.entries.filter(e=>ids.has(e.id)&&typeof e.available==='boolean'&&(!e.available||Date.now()-(e.verifiedAt||stored.time)<24*60*60_000)).map(e=>[e.id,{...e,cached:true,verifiedAt:e.verifiedAt||stored.time}]));
  return defaults.map(e=>previous.get(e.id)||e).concat(previous.has('esv')?[previous.get('esv')]:[]);
}
function acceptTranslationStatus(entries){
  const prior=new Map(state.translations.map(e=>[e.id,e]));
  state.translations=entries.filter(e=>Object.hasOwn(editionNames,e.id)).map(entry=>{
    const old=prior.get(entry.id);
    return entry.youversionAccess==='unverified'&&old?.available&&Date.now()-(old.verifiedAt||0)<24*60*60_000?{...entry,available:true,cached:true,verifiedAt:old.verifiedAt}:{...entry,verifiedAt:entry.available&&!entry.stale?Date.now():old?.verifiedAt||0};
  });
  // Optional editions verified previously remain visible during a catalog outage.
  for(const entry of prior.values())if(entry.available&&Date.now()-(entry.verifiedAt||0)<24*60*60_000&&!state.translations.some(e=>e.id===entry.id)&&entries.some(e=>e.youversionAccess==='unverified'))state.translations.push({...entry,cached:true});
  saveJSON('sela.translationCatalog.v1',{time:Date.now(),entries:state.translations.map(({id,available,abbreviation,youversionAccess,name,verifiedAt})=>({id,available,abbreviation,youversionAccess,name,verifiedAt}))});
  renderTranslationOptions();
}
async function refreshTranslationStatus(){
  if(state.catalogPending)return state.catalogPending;
  state.catalogPending=(async()=>{
    try{const status=await api('/api/status');state.aiEnabled=!!status.aiEnabled;acceptRelease(status);state.passageSupported=status.studyCapabilities?.passageSelection===true;if(Array.isArray(status.translations))acceptTranslationStatus(status.translations);}
    catch{ releaseLive=false;renderRelease(); /* Keep verified UI metadata. The server still enforces actual access. */ }
    finally{state.catalogPending=null;}
  })();
  return state.catalogPending;
}
function renderTranslationOptions(){
  $('translationSelect').innerHTML=state.translations.map(entry=>{
    const reason=entry.available?'':entry.youversionAccess==='not-configured'?'Setup required':entry.youversionAccess==='authentication'?'Server access issue':['not-licensed','access-denied'].includes(entry.youversionAccess)?'Access required':'Checking access';
    return `<option value="${escapeHTML(entry.id)}" ${entry.available?'':'disabled'}>${escapeHTML(translationOptionLabel(entry))}${reason?' ('+rt(reason)+')':''}</option>`;
  }).join('');
  $('translationSelect').value=state.translation;
}
const chapterRequests=new Map();
function requestChapter(params,signal){
  if(signal?.aborted)return Promise.reject(Object.assign(new Error('Aborted'),{name:'AbortError'}));
  const path='/api/chapter?'+params.toString();
  let pending=chapterRequests.get(path);
  if(!pending){pending=api(path).finally(()=>{if(chapterRequests.get(path)===pending)chapterRequests.delete(path);});chapterRequests.set(path,pending);}
  if(!signal)return pending;
  if(signal.aborted)return Promise.reject(Object.assign(new Error('Aborted'),{name:'AbortError'}));
  return new Promise((resolve,reject)=>{
    const abort=()=>reject(Object.assign(new Error('Aborted'),{name:'AbortError'}));
    signal.addEventListener('abort',abort,{once:true});
    pending.then(value=>{signal.removeEventListener('abort',abort);if(!signal.aborted)resolve(value);},error=>{signal.removeEventListener('abort',abort);reject(error);});
  });
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

// Selection is transient; existing notes/study keys remain unchanged for one verse.
const MAX_SELECTED_VERSES=20;
const originalRequests=new Map(),originalCache=new Map();
function selectionNumbers(){return state.selectedVerses.length?[...state.selectedVerses]:(state.selected?[state.selected]:[]);}
function isPassage(){return selectionNumbers().length>1;}
function completeSelection(numbers=selectionNumbers()){
  return numbers.length>0&&numbers.length<=MAX_SELECTED_VERSES&&numbers.every((n,i)=>Number.isInteger(n)&&n>0&&(!i||n===numbers[i-1]+1));
}
function hasStudySelection(){return state.selected!==null&&completeSelection();}
function compactStudy(){return window.matchMedia?.('(max-width: 1040px)').matches??false;}
function refKey(...args){
  const [book=state.book,chapter=state.chapter,verse=state.selected]=args;
  const end=args.length?verse:selectionNumbers().at(-1);
  return `${book} ${chapter}:${verse}${end>verse?'-'+end:''}`;
}
function updateSelectionLabel(){
  const numbers=selectionNumbers(),button=$('mobileStudy'),label=button?.querySelector?.('[data-i18n="Study"]');
  if(label)label.textContent=t('Study')+(numbers.length>1?` (${numbers.length})`:'');
  button?.setAttribute('aria-disabled',String(!hasStudySelection()));
  const mark=document.querySelector?.('[data-i18n="MARK THIS VERSE"]');
  if(mark)mark.textContent=t(isPassage()?'MARK SELECTED VERSES':'MARK THIS VERSE');
}
async function toggleVerse(number){
  if(!displayedMatches()||!state.verses.some(v=>Number(v.verse)===Number(number)))return;
  const selected=new Set(selectionNumbers());number=Number(number);
  if(selected.has(number))selected.delete(number);
  else {
    if(selected.size>=MAX_SELECTED_VERSES)return toast(t('Select up to 20 consecutive verses.'));
    selected.add(number);
  }
  return updateSelection([...selected].sort((a,b)=>a-b),{open:false,keepTab:true});
}
async function selectionOriginal(numbers,serial){
  // Reuse the existing single-verse source and Romanian annotation endpoint.
  // Bound concurrency and stop starting work for a superseded selection.
  const book=state.book,chapter=state.chapter,translation=state.translation,results=new Array(numbers.length);
  let cursor=0,failed=false;
  async function worker(){
    while(!failed&&cursor<numbers.length&&serial===state.studySerial){
      const index=cursor++,verse=numbers[index];
      const path='/api/original?'+new URLSearchParams({book,chapter,verse,translation});
      const cached=originalCache.get(path);
      if(cached&&Date.now()-cached.time<5*60_000){results[index]=cached.value;continue;}
      let pending=originalRequests.get(path);
      if(!pending){
        pending=api(path).then(value=>{
          if(typeof value.language!=='string'||typeof value.text!=='string'||!Array.isArray(value.words))throw new Error('Original-language data is currently unavailable.');
          if(value.reference&&value.reference!==`${book} ${chapter}:${verse}`)throw new Error('The original-language service returned a different verse.');
          if(originalCache.size>=80)originalCache.delete(originalCache.keys().next().value);
          originalCache.set(path,{value,time:Date.now()});return value;
        }).finally(()=>originalRequests.delete(path));
        originalRequests.set(path,pending);
      }
      try{results[index]=await pending;}catch(error){failed=true;throw error;}
    }
  }
  await Promise.all(Array.from({length:Math.min(2,numbers.length)},()=>worker()));
  if(serial!==state.studySerial)return null;
  if(results.length===1)return results[0];
  const languages=[...new Set(results.flatMap(o=>o.languages||String(o.language).split(' / ')))];
  return {...results[0],isPassage:true,reference:refKey(),
    language:languages.length===1?languages[0]:'Hebrew / Aramaic',languages,
    text:results.map((o,i)=>`${numbers[i]}. ${o.text}`).join('\n'),
    words:results.flatMap((o,i)=>(o.words||[]).map(w=>({...w,verse:numbers[i]}))),
    lexicon:Object.assign({},...results.map(o=>o.lexicon||{})),
    attribution:[...new Map(results.flatMap(o=>o.attribution||[]).map(a=>[JSON.stringify(a),a])).values()],
    annotationNotice:[...new Set(results.map(o=>o.annotationNotice).filter(Boolean))].join(' ')
  };
}
async function loadSelectedOriginal(){
  if(!hasStudySelection())return;
  const serial=state.studySerial,numbers=selectionNumbers(),key=studyKey();
  if(state.original||state.originalLoadingKey===key)return;
  state.originalLoadingKey=key;
  try {
    const original=await selectionOriginal(numbers,serial);
    if(serial!==state.studySerial||!original)return;
    state.original=original;renderOriginal();
  } catch(error){
    if(serial!==state.studySerial)return;
    $('originalContent').innerHTML=`<div class="status-note">${t('Original-language data is currently unavailable.')} ${escapeHTML(errorText(error))} ${t('Please check your connection and retry by reselecting the verse.')}</div>`;
  } finally {if(serial===state.studySerial)state.originalLoadingKey=null;}
}
async function openSelectedStudy(){
  if(!hasStudySelection()){toast(t(selectionNumbers().length?'Select consecutive verses to study this passage.':'Select a verse to begin studying'));showView('read');return;}
  openPanel();await loadSelectedOriginal();
}

const keyForChapter = () => `${state.book}:${state.chapter}`;
function toast(message) {
  const el = $('toast'); el.textContent = message; el.classList.remove('hidden');
  clearTimeout(state.toastTimer); state.toastTimer = setTimeout(()=>el.classList.add('hidden'),2900);
}
async function api(path,options={}){return requestJSON(path,options);}

function editionAbbreviation(){return (state.translations.find(e=>e.id===state.translation)?.abbreviation||state.translation).toUpperCase();}
function uiLanguage(){return state.translation==='ntr'?'ro':'en';}
const t=text=>localize(text,uiLanguage());
const bookName=name=>uiLanguage()==='ro'?(BOOK_NAMES_RO[name]||name):name;
const fold=text=>String(text).normalize('NFD').replace(/[\u0300-\u036f]/gu,'').toLowerCase();
function displayReference(...args){
  const [book=state.book,chapter=state.chapter,verse=state.selected,end=args.length?verse:selectionNumbers().at(-1)]=args;
  return `${bookName(book)} ${chapter}${verse?':'+verse:''}${end>verse?'–'+end:''}`;
}
function displayRef(text){const ref=parseReference(text);return ref?displayReference(ref.book,ref.chapter,ref.verse,ref.endVerse):text;}
function studyKey(ref=refKey()){return `${state.translation}:${ref}`;}
function errorText(error){return uiLanguage()==='ro'?(/[ăâîșțĂÂÎȘȚ]/u.test(error.message||'')?error.message:t('An error occurred. Check your connection and try again.')):error.message;}
function applyLocale(){
  renderRelease();document.documentElement.lang=uiLanguage();document.title=t('SELA — Scripture, deeply understood');
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
  $('verseList').lang = (state.loaded?.translation||state.translation)==='ntr'?'ro':'en';
  $('chapterTitle').innerHTML = `${escapeHTML(bookName(state.book))} <em>${state.chapter}</em>`;
  $('topReference').textContent = displayReference(state.book,state.chapter,null);
  $('languageLabel').textContent = (editionNames[state.translation]||state.translation).toUpperCase();
  $('chapterSubtitle').textContent = state.book === '2 Peter' && state.chapter === 3 ? t('The promise of His coming') : t('Read • reflect • understand');
  $('prevChapter').disabled = state.chapter === 1 && state.books[0].name === state.book;
  $('nextChapter').disabled = state.book === 'Revelation' && state.chapter === 22;
  document.querySelectorAll('.book-button').forEach(el=>el.classList.toggle('active',el.dataset.book===state.book));
  restoreReadingHeader();
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
  if (book===(state.loaded?.book||state.book) && chapter===(state.loaded?.chapter||state.chapter) && (state.loaded?.translation||state.translation)===state.translation) return state.verses.find(v=>Number(v.verse)===Number(verse))?.text || '';
  return (state.translation === 'web' ? DEMO_VERSES[`${book}:${chapter}`] || [] : []).find(v=>Number(v.verse)===Number(verse))?.text || '';
}
function displayedMatches(){return !state.loaded||(state.loaded.book===state.book&&state.loaded.chapter===state.chapter&&state.loaded.translation===state.translation);}
function restoreReadingHeader(){
  if(!state.loaded)return;
  const d=state.loaded;
  $('chapterTitle').innerHTML=`${escapeHTML(bookName(d.book))} <em>${d.chapter}</em>`;
  $('topReference').textContent=displayReference(d.book,d.chapter,null);
  $('chapterSubtitle').textContent=d.book==='2 Peter'&&d.chapter===3?t('The promise of His coming'):t('Read • reflect • understand');
  $('languageLabel').textContent=(d.editionName||editionNames[d.translation]||d.translation).toUpperCase();
  $('verseList').lang=d.translation==='ntr'?'ro':'en';
}
function readerNotice(message,action='',detail=''){
  const notice=$('readerNotice');notice.classList.remove('hidden');notice.setAttribute('role','status');notice.setAttribute('aria-live','polite');
  notice.innerHTML=`<div class="reader-notice-title">${escapeHTML(message)}</div>${detail?`<div class="reader-notice-detail">${escapeHTML(detail)}</div>`:''}${action?`<button type="button" id="readerRetry" class="reader-retry" data-reader-action="${action==='choose'?'choose':'retry'}">${rt(action==='choose'?'Choose another translation':'Try again')}</button>`:''}`;
}
async function loadChapter(){
  state.passageAbort?.abort();
  const ctrl=new AbortController();state.passageAbort=ctrl;
  const target={book:state.book,chapter:state.chapter,translation:state.translation};
  cancelStudyInteractions();state.selected=null;state.selectedVerses=[];state.original=null;state.originalLoadingKey=null;state.selectedToken=null;state.studySerial++;updateSelectionLabel();
  closePanel();updateNavigation();renderTranslationOptions();
  const label=state.translations.find(e=>e.id===target.translation)?.abbreviation||target.translation.toUpperCase();
  const retained=state.verses.length?rt('Your current chapter is still here.'):'';
  readerNotice(`${rt('Opening')} ${label}…`,'',retained);
  if(!state.verses.length)$('verseList').innerHTML=`<div class="loading-passage"><span class="spinner"></span> ${t('Opening Scripture…')}</div>`;
  else renderVerses();
  const params=new URLSearchParams(target);
  try{
    let data;
    for(let attempt=0;attempt<2;attempt++){
      try{data=await requestChapter(params,ctrl.signal);break;}
      catch(error){
        if(ctrl.signal.aborted)throw error;
        // Provider retries are already bounded on the server. Retry only a lost
        // connection to SELA itself, once, without multiplying upstream retries.
        if(attempt||error.status||error.code==='authentication'||error.retriesExhausted)throw error;
        readerNotice(rt('Having trouble connecting. Retrying…'),'',retained);
        await new Promise((resolve,reject)=>{
          const abort=()=>{clearTimeout(timer);reject(Object.assign(new Error('Aborted'),{name:'AbortError'}));};
          const timer=setTimeout(()=>{ctrl.signal.removeEventListener('abort',abort);resolve();},700);
          ctrl.signal.addEventListener('abort',abort,{once:true});
        });
      }
    }
    if(state.passageAbort!==ctrl||ctrl.signal.aborted)return;
    if(data.translation&&data.translation!==target.translation)throw new Error('The server returned a different translation.');
    if(!Array.isArray(data.verses)||!data.verses.length)throw new Error('The server returned an empty chapter.');
    state.verses=data.verses;state.loaded={...target,editionName:data.editionName||editionNames[target.translation]};
    translationCredits(data);restoreReadingHeader();$('readerNotice').classList.add('hidden');
    const entry=state.translations.find(e=>e.id===target.translation);
    if(entry){entry.available=true;entry.youversionAccess='licensed';renderTranslationOptions();}
  }catch(error){
    if(ctrl.signal.aborted||state.passageAbort!==ctrl)return;
    const denied=['access-denied','not-licensed'].includes(error.code)||[403,409].includes(error.status)&&error.code!=='not-configured';
    if(denied){
      const entry=state.translations.find(e=>e.id===target.translation);if(entry){entry.available=false;entry.youversionAccess='access-denied';renderTranslationOptions();}
      readerNotice(rt('This edition isn’t currently accessible.'),'choose',retained);
    }else if(error.code==='authentication'||error.code==='not-configured')readerNotice(rt('The server needs its YouVersion access checked.'),'choose',retained);
    else{
      const wait=Math.max(0,Number(error.retryAfter)||0);
      const retryAt=wait?Date.now()+wait*1000:0;
      readerNotice(rt('Couldn’t load this chapter.'),'retry',retained);
      const retry=$('readerRetry');
      if(retry&&retryAt){
        retry.disabled=true;retry.textContent=uiLanguage()==='ro'?`Reîncearcă peste ${wait} s`:`Try again in ${wait}s`;
        const enable=()=>{if(state.passageAbort===ctrl&&!ctrl.signal.aborted){retry.disabled=false;retry.textContent=rt('Try again');}};
        setTimeout(enable,Math.min(wait,2_147_483)*1000);
      }
    }
    // Included WEB examples are used only before any real chapter is loaded.
    if(!state.verses.length&&target.translation==='web'&&DEMO_VERSES[keyForChapter()]){
      state.verses=DEMO_VERSES[keyForChapter()];state.loaded={...target,editionName:'WEB · '+(uiLanguage()==='ro'?'exemplu offline':'offline preview')};
      readerNotice(uiLanguage()==='ro'?'Exemplu offline: versete selectate, nu capitolul complet.':'Offline preview: selected example verses, not the complete chapter.','retry');restoreReadingHeader();
    }
    void refreshTranslationStatus();
  }
  if(state.passageAbort===ctrl)renderVerses();
}
function renderVerses(){
  if(!state.verses.length){$('verseList').innerHTML=`<div class="loading-passage">${t('No verses available for this chapter.')}</div>`;return;}
  const shown=state.loaded||state;
  $('verseList').innerHTML=state.verses.map(v=>{
    const ref=refKey(shown.book,shown.chapter,v.verse),color=state.highlight[ref];
    const number=v.verseEnd&&v.verseEnd!==v.verse?`${v.verse}–${v.verseEnd}`:v.verse;
    return `<button class="verse ${color?'highlight-'+escapeHTML(color):''} ${selectionNumbers().includes(Number(v.verse))?'selected':''}" ${displayedMatches()?'':'disabled'} data-verse="${Number(v.verse)}" aria-pressed="${selectionNumbers().includes(Number(v.verse))}" aria-label="${t('Study this verse')}: ${escapeHTML(displayReference(shown.book,shown.chapter,v.verse))}"><span class="verse-number">${number}</span><span class="verse-text">${escapeHTML(v.text)}</span></button>`;
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
  const match=text.match(/^(.+?)\s+(\d{1,3})(?:\s*:\s*(\d{1,3})(?:\s*[-–]\s*(\d{1,3}))?)?$/i);
  if (!match) return null;
  const name=match[1].trim();
  const aliases={'psalmul':'Psalms','psalmii':'Psalms','psalm':'Psalms','ps':'Psalms','song of songs':'Song of Solomon'};
  const canonical=state.books.find(b=>fold(b.name)===fold(name)||fold(BOOK_NAMES_RO[b.name])===fold(name)|| b.name.toLowerCase()===aliases[name.toLowerCase()]?.toLowerCase());
  const chapter=Number(match[2]), verse=match[3] ? Number(match[3]) : null;
  if (!canonical || chapter<1 || chapter>canonical.chapters || (verse!==null && (verse<1 || verse>176))) return null;
  const endVerse=match[4]?Number(match[4]):verse;
  if(endVerse!==null&&(endVerse<verse||endVerse>176||endVerse-verse+1>MAX_SELECTED_VERSES))return null;
  return {book:canonical.name,chapter,verse,...(endVerse>verse?{endVerse}:{})};
}
async function navigate(book, chapter, verse = null, endVerse = verse) {
  state.book=book;state.chapter=Number(chapter);showView('read');renderBooks($('bookFilter').value);await loadChapter();
  if (verse!==null&&state.book===book&&state.chapter===Number(chapter)&&displayedMatches()) {
    const isThere=state.verses.some(v=>Number(v.verse)===Number(verse));
    if (isThere) {
      await selectVerse(verse,endVerse);
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
async function selectVerse(number,endVerse=number){
  number=Number(number);endVerse=Number(endVerse);
  if(!Number.isInteger(number)||!Number.isInteger(endVerse)||endVerse<number||endVerse-number>=MAX_SELECTED_VERSES)return;
  const numbers=Array.from({length:endVerse-number+1},(_,i)=>number+i);
  if(numbers.some(n=>!state.verses.some(v=>Number(v.verse)===n)))return toast(t('Verse not available in this passage preview'));
  return updateSelection(numbers,{open:true,keepTab:false});
}
async function updateSelection(numbers,{open=false,keepTab=false}={}){
  if(!displayedMatches())return;
  cancelStudyInteractions();state.selectedVerses=numbers;state.selected=completeSelection(numbers)?numbers[0]:null;
  state.original=null;state.originalLoadingKey=null;state.selectedToken=null;++state.studySerial;
  renderVerses();updateSelectionLabel();renderDailyFlow();
  if(!hasStudySelection()){
    $('studyEmpty').classList.remove('hidden');$('studyContent').classList.add('hidden');
    const caption=$('studyEmpty').querySelector?.('p');
    if(caption)caption.textContent=t(numbers.length?'Select consecutive verses to study this passage.':'Select a verse in the reading pane to see the original Greek, Hebrew or Aramaic, word meanings, and historical context.');
    $('selectedText').textContent='';$('selectedReference').textContent='';
    $('originalContent').innerHTML='';$('meaningContent').innerHTML='';$('noteInput').value='';
    closePanel();if(numbers.length)toast(t('Select consecutive verses to study this passage.'));return;
  }
  $('studyEmpty').classList.add('hidden');$('studyContent').classList.remove('hidden');
  $('selectedReference').textContent=displayReference();$('selectedVersion').textContent=editionAbbreviation();
  $('selectedText').textContent=numbers.map(n=>{
    const text=state.verses.find(v=>Number(v.verse)===n).text;return numbers.length>1?`${n}. ${text}`:text;
  }).join('\n');
  $('noteInput').value=state.notes[refKey()]||'';$('noteStatus').textContent=t('Notes save automatically.');
  renderPalette();if(!keepTab)switchTab('words');
  $('originalHeading').textContent=t('Original text');
  $('originalContent').innerHTML=`<div class="section-loading"><span class="spinner"></span> ${t('Loading original text and word definitions…')}</div>`;
  renderMeaning();
  if(open){openPanel();$('studyScroller').scrollTop=0;}
  else if(compactStudy())closePanel();
  if(open||!compactStudy())await loadSelectedOriginal();
}
function renderPalette(){
  const colors=selectionNumbers().map(n=>state.highlight[refKey(state.book,state.chapter,n)]||'none');
  const color=colors.length&&colors.every(c=>c===colors[0])?colors[0]:null;
  document.querySelectorAll('#highlightPalette button').forEach(btn=>btn.classList.toggle('active',color===btn.dataset.color));
}
function renderOriginal() {
  const orig=state.original;if(!orig)return;
  state.selectedToken=null;
  const isHebrew=['Hebrew','Aramaic','Hebrew / Aramaic'].includes(orig.language);
  $('originalHeading').textContent=t(['Greek','Hebrew','Aramaic','Hebrew / Aramaic'].includes(orig.language)?orig.language+' original':'Original text');
  const words=(orig.words||[]).map((w,i)=>{
    const entry=orig.lexicon?.[w.strong]||{};
    const gloss=w.gloss||entry.gloss||'';
    const languageNote=orig.language==='Hebrew / Aramaic'&&w.sourceLanguage?` · ${t(w.sourceLanguage+' original')}`:'';
    const parts=Array.isArray(w.parts)&&w.parts.length?` · ${t('parts:')} ${w.parts.map(p=>[p.surface,p.gloss].filter(Boolean).join(' = ')).join(' / ')}`:'';
    const boundary=orig.isPassage&&(i===0||orig.words[i-1].verse!==w.verse)?`<div class="source-label passage-word-label">${escapeHTML(displayReference(state.book,state.chapter,w.verse))}</div>`:'';
    return `${boundary}<div class="word-item"><button type="button" class="word-row" id="word-token-${i}" data-token="${i}" aria-expanded="false" aria-controls="word-detail-${i}"><div><div class="word-original" ${isHebrew?'dir="rtl"':''}>${escapeHTML(w.surface)}</div><div class="word-translit">${escapeHTML(entry.transliteration||w.strong||'—')}</div></div><div><div class="word-gloss">${escapeHTML(gloss||t('Lexical gloss unavailable'))}</div><div class="word-morph">${escapeHTML([w.strong,w.morph].filter(Boolean).join(' · ')+parts+languageNote)}</div></div></button><div id="word-detail-${i}" class="word-inline-detail hidden" role="region" aria-labelledby="word-token-${i}"></div></div>`;
  }).join('');
  const attribution=(orig.attribution||[]).map(a=>{
    try{if(new URL(a.url).protocol==='https:')return `<a href="${escapeHTML(a.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(a.name||a.id)}</a> (${escapeHTML(a.license||'')})`;}catch{}
    return escapeHTML(a.name||a.id);
  }).join(' · ');
  $('originalContent').innerHTML=`<div class="original-text${orig.isPassage?' passage-original':''}" ${isHebrew?'dir="rtl"':''}>${escapeHTML(orig.text)}</div><div class="source-label">${escapeHTML(orig.edition)} · ${t('Tap any word for its lexicon details.')}</div>${orig.annotationNotice?`<div class="source-label">${escapeHTML(orig.annotationNotice)}</div>`:''}<div class="word-table">${words||`<p class="source-label">${t('No morphological tags were returned for this verse.')}</p>`}</div><div class="source-credit">${t('Text and lexical data:')} ${attribution||'Bible API / eBible.org'}. ${t('Different manuscript editions may have variant readings.')}</div>`;
}
function selectToken(index) {
  wordRequest?.abort();
  const word=state.original?.words?.[index];if(!word||!Number.isInteger(index))return;
  const close=state.selectedToken===index;
  document.querySelectorAll('.word-inline-detail').forEach(el=>{el.classList.add('hidden');el.innerHTML='';});
  document.querySelectorAll('[data-token]').forEach(el=>el.setAttribute('aria-expanded','false'));
  state.selectedToken=null;if(close)return;
  const entry=state.original.lexicon?.[word.strong]||{};
  const detail=$(`word-detail-${index}`),button=$(`word-token-${index}`);if(!detail||!button)return;
  const definition=uiLanguage()==='ro'?(word.romanianDefinition||word.gloss||'O definiție completă nu este disponibilă pentru acest cuvânt.'):(entry.definition||word.gloss||t('A full lexicon definition is unavailable for this token.'));
  detail.innerHTML=`<div class="word-detail"><strong>${escapeHTML(word.surface)} ${entry.transliteration?`(${escapeHTML(entry.transliteration)})`:''}</strong><div>${escapeHTML(definition)}</div>${entry.partOfSpeech?`<div>${uiLanguage()==='ro'?'Parte de vorbire':'Part of speech'}: ${escapeHTML(entry.partOfSpeech)}</div>`:''}</div>`;
  detail.classList.remove('hidden');button.setAttribute('aria-expanded','true');state.selectedToken=index;renderWordEnhancement(index);
  button.scrollIntoView?.({behavior:'auto',block:'nearest'});
}
function block(title, content) {return `<div class="study-block"><h4>${escapeHTML(title)}</h4><p>${escapeHTML(content||t('Not available'))}</p></div>`;}
function renderMeaning() {
  const ref=refKey(),key=studyKey(ref),cached=state.studies[key]; const study=(cached&&(uiLanguage()==='en'||cached.language==='ro')?cached:null) || (uiLanguage()==='en'?PREVIEW_COMMENTARY[ref]:null);
  if (!study) {
    $('meaningContent').innerHTML=`<div class="ai-cta"><strong>${state.aiEnabled?t('Explore the original meaning'):t('Add AI-powered historical context')}</strong><p>${state.aiEnabled?t(isPassage()?'Study the full selected passage, including its original wording and surrounding context.':'Generate a careful explanation of this verse, including literal translation, literary and first-century context, different interpretations, and cross-references.'):t('The word-by-word original text is available from the Scripture source. To generate in-depth context for any passage, add your OpenAI API key to the server environment.')}</p>${state.aiEnabled?`<button class="primary-btn" id="generateStudy">✦ &nbsp; ${t('Generate verse study')}</button>`:`<span class="source-label">${t('See README.md for optional AI setup.')}</span>`}</div>`;
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
  $('meaningContent').innerHTML=html;mountPassageChat(study);
}
async function generateStudy() {
  if(!state.aiEnabled)return toast(t('Add an API key on the server to enable AI studies'));
  if(!hasStudySelection())return;
  cancelStudyInteractions();const passage=isPassage();
  if(passage&&!state.passageSupported)return toast(t('Update the study server to generate passage studies.'));
  const button=$('generateStudy'),ref=refKey(),key=studyKey(ref),serial=state.studySerial,translation=state.translation,endVerse=selectionNumbers().at(-1);
  if(button){button.disabled=true;button.textContent=t('Creating study…');}
  try {
    const data=await api('/api/study',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({book:state.book,chapter:state.chapter,verse:state.selected,...(passage?{endVerse}:{}),translation})});
    if(data.language!==(translation==='ntr'?'ro':'en'))throw new Error(t('An error occurred. Check your connection and try again.'));
    if(passage&&data.reference!==ref)throw new Error(t('Update the study server to generate passage studies.'));
    state.studies[key]=data;saveJSON('sela.studies',state.studies);
    if(serial===state.studySerial)renderMeaning();
    toast(t('Study ready'));
  } catch(error){toast(`${t('Study unavailable')}: ${errorText(error)}`);if(button){button.disabled=false;button.textContent=t('Try again');}}
}
async function performSearch(query) {
  const term=query.trim();if(!term){toast(t('Enter a reference or a word'));return;}
  const ref=parseReference(term);
  if(ref){await navigate(ref.book,ref.chapter,ref.verse,ref.endVerse);return;}
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
  $('readerNotice').addEventListener('click',e=>{const action=e.target.closest('[data-reader-action]');if(!action||action.disabled)return;if(action.dataset.readerAction==='choose')$('translationSelect').focus();else void loadChapter();});
  window.addEventListener('online',()=>{void refreshTranslationStatus();});window.addEventListener('offline',()=>{releaseLive=false;renderRelease();});
  $('bookFilter').addEventListener('input',e=>renderBooks(e.target.value));
  $('bookList').addEventListener('click',e=>{const btn=e.target.closest('[data-book]');if(btn)navigate(btn.dataset.book,1);});
  $('bookSelect').addEventListener('change',e=>navigate(e.target.value,1));
  $('chapterSelect').addEventListener('change',e=>navigate(state.book,Number(e.target.value)));
  $('translationSelect').addEventListener('change',e=>{state.translation=e.target.value;saveJSON('sela.translation',state.translation);renderSaved();$('searchResults').innerHTML='';translationCredits(null,'searchCredit');loadChapter();});
  $('prevChapter').addEventListener('click',()=>nextChapter(-1));
  $('nextChapter').addEventListener('click',()=>nextChapter(1));
  $('verseList').addEventListener('click',e=>{const btn=e.target.closest('[data-verse]');if(btn)void toggleVerse(btn.dataset.verse);});
  $('highlightPalette').addEventListener('click',e=>{const btn=e.target.closest('[data-color]');if(!btn||!state.selected)return;for(const n of selectionNumbers()){const ref=refKey(state.book,state.chapter,n);if(btn.dataset.color==='none')delete state.highlight[ref];else state.highlight[ref]=btn.dataset.color;}saveJSON('sela.highlights',state.highlight);renderPalette();renderVerses();renderSaved();toast(btn.dataset.color==='none'?t('Highlight removed'):t('Verse highlighted'));});
  $('copyVerse').addEventListener('click',async()=>{
    if(!hasStudySelection())return;
    const text=`${displayReference()} (${editionAbbreviation()}) — ${$('selectedText').textContent}`;
    try{await copyText(text);toast(t('Verse copied'));}catch{toast(t('Clipboard requires a secure connection'));}
  });
  document.querySelectorAll('.study-tab').forEach(b=>b.addEventListener('click',()=>switchTab(b.dataset.tab)));
  $('originalContent').addEventListener('click',e=>{if(e.target.closest('[data-word-cancel]')){wordRequest?.abort();return;}const explain=e.target.closest('[data-word-explain]');if(explain){void explainWord(Number(explain.dataset.wordExplain));return;}const token=e.target.closest('[data-token]');if(token)selectToken(Number(token.dataset.token));});
  $('meaningContent').addEventListener('click',e=>{if(e.target.closest('#generateStudy'))generateStudy();const ref=e.target.closest('[data-ref]');if(ref){const parsed=parseReference(ref.dataset.ref);if(parsed)navigate(parsed.book,parsed.chapter,parsed.verse,parsed.endVerse);}});
  $('noteInput').addEventListener('input',e=>{if(!state.selected)return;const ref=refKey();if(e.target.value.trim())state.notes[ref]=e.target.value;else delete state.notes[ref];saveJSON('sela.notes',state.notes);$('noteStatus').textContent=t('Saved on this device ✓');$('savedCount').textContent=new Set([...Object.keys(state.highlight),...Object.keys(state.notes)]).size;});
  $('savedList').addEventListener('click',e=>{const btn=e.target.closest('[data-ref]');const ref=btn&&parseReference(btn.dataset.ref);if(ref)navigate(ref.book,ref.chapter,ref.verse,ref.endVerse);});
  $('searchResults').addEventListener('click',e=>{const btn=e.target.closest('[data-ref]');const ref=btn&&parseReference(btn.dataset.ref);if(ref)navigate(ref.book,ref.chapter,ref.verse,ref.endVerse);});
  $('searchForm').addEventListener('submit',e=>{e.preventDefault();performSearch($('searchInput').value);});
  $('dismissBanner').addEventListener('click',()=>{$('insightBanner').classList.add('hidden');localStorage.setItem('sela.bannerDismissed','true');});
  $('fontButton').addEventListener('click',()=>{state.fontSize=state.fontSize>=24?17:state.fontSize+1;document.documentElement.style.setProperty('--reader-font',`${state.fontSize}px`);localStorage.setItem('sela.fontsize',state.fontSize);toast(`${t('Verse text:')} ${state.fontSize}px`);});
  $('navRead').addEventListener('click',()=>showView('read'));$('navSaved').addEventListener('click',()=>showView('saved'));$('navSearch').addEventListener('click',()=>showView('search'));
  $('mobileRead').addEventListener('click',()=>{showView('read');closePanel();});$('mobileSaved').addEventListener('click',()=>{showView('saved');closePanel();});$('mobileSearch').addEventListener('click',()=>{showView('search');closePanel();});
  $('searchButton').addEventListener('click',()=>{closePanel();showView('search');});
  $('mobileStudy').addEventListener('click',()=>{void openSelectedStudy();});
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
    const [books]=await Promise.all([api('/api/books'),refreshTranslationStatus()]);
    if(books.books?.length)state.books=books.books;
  }catch{ /* The included book catalogue and sample verses permit a simple offline preview. */ }
  if(!Object.hasOwn(editionNames,state.translation)||!state.translations.some(e=>e.id===state.translation))state.translation=state.translation==='vdc'&&state.translations.some(e=>e.id==='ntr'&&e.available)?'ntr':'web';
  saveJSON('sela.translation',state.translation);
  renderTranslationOptions();
  $('bookSelect').innerHTML=state.books.map(b=>`<option value="${escapeHTML(b.name)}">${escapeHTML(b.name)}</option>`).join('');
  initDaily();renderBooks();updateNavigation();$('savedCount').textContent=new Set([...Object.keys(state.highlight),...Object.keys(state.notes)]).size;
  await loadChapter();
  const refresh=()=>{void refreshTranslationStatus().finally(()=>setTimeout(refresh,60000));};
  setTimeout(refresh,60000);
}
// BEGIN SELA STUDY UI
// Shared interaction UI, embedded identically in the browser and bundled reader.
Object.assign(ROMANIAN,{
  'Short gloss':'Glosare scurtă','Meaning in this verse':'Sensul în acest verset',
  'Other documented senses':'Alte sensuri documentate','Translation alternatives here':'Variante de traducere aici',
  'Explain this word in context':'Explică acest cuvânt în context','Explaining…':'Se explică…',
  'Cancel':'Anulează','Try again':'Reîncearcă','Sources used':'Surse folosite',
  'Source lexical record':'Înregistrarea lexicală a sursei','English lexical aid':'Ajutor lexical în engleză',
  'Dictionary transliteration; correspondence to the surface form is not independently verified.':'Transliterare din dicționar; corespondența cu forma din text nu este verificată independent.',
  'Surface form':'Forma din text','Lemma':'Lema','Morphology':'Morfologie',
  'No separate documented senses were supplied. The available lexical record is shown above.':'Nu au fost furnizate sensuri documentate separat. Înregistrarea lexicală disponibilă apare mai sus.',
  'No further renderings are supported by this explanation.':'Această explicație nu oferă alte variante susținute.',
  'Ask about this passage':'Întreabă despre acest pasaj','Your question':'Întrebarea ta',
  'Ask a question about the passage or its generated study…':'Pune o întrebare despre pasaj sau despre studiul generat…',
  'Related Scripture (optional)':'Trimitere biblică suplimentară (opțional)',
  'For example, John 1:1-3':'De exemplu, Ioan 1:1-3',
  'Ask':'Întreabă','Answering…':'Se răspunde…','Clear conversation':'Șterge conversația',
  'Save to notes':'Salvează în notițe','Saved to notes':'Salvat în notițe',
  'Conversation stays in memory until you clear it or reload. Only answers you save are added to your notes. Questions and relevant study context are sent to the study service.':'Conversația rămâne în memorie până o ștergi sau reîncarci aplicația. Doar răspunsurile salvate explicit sunt adăugate în notițe. Întrebările și contextul relevant sunt trimise serviciului de studiu.',
  'Explain the main point more simply.':'Explică mai simplu ideea principală.',
  'How does the surrounding passage help explain this?':'Cum ajută contextul pasajului la înțelegerea lui?',
  'What in the text supports this interpretation?':'Ce anume din text susține această interpretare?',
  'Regenerate this study to enable passage chat.':'Regenerează studiul pentru a activa conversația despre pasaj.',
  'Update the study server to use this feature.':'Actualizează serverul de studiu pentru a folosi această funcție.',
  'The answer was not saved. Your existing notes are unchanged.':'Răspunsul nu a fost salvat. Notițele existente rămân neschimbate.',
  'Read retrieved text':'Citește textul preluat','SELA release':'Versiunea SELA',
  'Last verified service release':'Ultima versiune verificată a serviciului',
  'Bundled release; service version not verified':'Versiunea inclusă; versiunea serviciului nu este verificată',
  'Current service release':'Versiunea curentă a serviciului'
});
const wordExplanations=new Map(),wordPending=new Map(),chatSessions=new Map();
let wordRequest=null,chatRequest=null;
let verifiedRelease=savedJSON('sela.serviceRelease.v1',null);
if(!verifiedRelease||!/^\d+\.\d+\.\d+$/u.test(verifiedRelease.version)||!Number.isFinite(verifiedRelease.time)||Date.now()-verifiedRelease.time>7*24*60*60_000)verifiedRelease=null;
let releaseLive=false;
function renderRelease(){
  const version=verifiedRelease?.version||SELA_RELEASE.version;
  const description=releaseLive?'Current service release':verifiedRelease?'Last verified service release':'Bundled release; service version not verified';
  document.querySelectorAll('[data-sela-release]').forEach(el=>{
    el.textContent='v'+version;el.setAttribute('aria-label',`${t('SELA release')} ${version}. ${t(description)}`);
    el.title=t(description);
  });
}
function acceptRelease(status){
  if(status?.ready===true&&/^\d+\.\d+\.\d+$/u.test(status.version)&&typeof status.release==='string'&&status.release.startsWith('sela-'+status.version)){
    verifiedRelease={version:status.version,time:Date.now()};releaseLive=true;
    try{localStorage.setItem('sela.serviceRelease.v1',JSON.stringify(verifiedRelease));}catch{}
  }else releaseLive=false;
  state.contextualWords=status?.studyCapabilities?.contextualWords===true;
  state.passageChat=status?.studyCapabilities?.passageChat===true;
  renderRelease();
}
function cancelStudyInteractions(){
  wordRequest?.abort();wordRequest=null;chatRequest?.abort();chatRequest=null;
}
function safeEvidence(evidence){
  if(!Array.isArray(evidence)||!evidence.length)return '';
  return `<details class="evidence-list"><summary>${t('Sources used')}</summary>${evidence.map((s,i)=>{
    const credits=(s.attribution||[]).map(a=>{
      let url;try{if(new URL(a.url).protocol==='https:')url=a.url;}catch{}
      return url?`<a href="${escapeHTML(url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(a.name||a.id||t('Source'))}</a> ${escapeHTML(a.license||'')}`:escapeHTML(a.name||a.id||'');
    }).join(' · ');
    return `<div class="evidence-record"><strong>[${i+1}] ${escapeHTML(displayRef(s.reference||''))}</strong><small>${escapeHTML(s.edition||s.identifier||'')} · ${escapeHTML(s.id)}</small><p dir="auto">${escapeHTML(s.text||'')}</p><small>${credits}</small></div>`;
  }).join('')}</details>`;
}
function wordIdentity(index){
  const word=state.original?.words?.[index];if(!word)return null;
  const verse=Number(word.verse||state.selected);
  const tokenIndex=state.original.isPassage?state.original.words.slice(0,index).filter(w=>Number(w.verse)===verse).length:index;
  return {key:JSON.stringify([state.book,state.chapter,verse,state.translation,state.original.edition,tokenIndex,word.surface,word.morph]),verse,tokenIndex,surface:word.surface};
}
function renderWordEnhancement(index){
  const detail=$(`word-detail-${index}`),identity=wordIdentity(index),word=state.original?.words?.[index];
  if(!detail||!identity||state.selectedToken!==index)return;
  detail.querySelector('.contextual-word')?.remove();
  const data=wordExplanations.get(identity.key);
  const section=document.createElement('div');section.className='contextual-word';
  let html=`<h5>${t('Short gloss')}</h5><p>${escapeHTML(word.gloss||t('Lexical gloss unavailable'))}</p>`;
  const parts=[[t('Surface form'),word.surface],[t('Lemma'),word.lemma],[t('Morphology'),word.morph]].filter(([,v])=>v);
  html+=`<p class="source-label">${parts.map(([k,v])=>`${escapeHTML(k)}: ${escapeHTML(v)}`).join(' · ')}</p>`;
  if(state.original.lexicon?.[word.strong]?.transliteration)html+=`<p class="source-label">${t('Dictionary transliteration; correspondence to the surface form is not independently verified.')}</p>`;
  if(data){
    html+=`<h5>${t('Meaning in this verse')}</h5><p>${escapeHTML(data.meaning)}</p>`;
    html+=`<h5>${t('Other documented senses')}</h5>`;
    if(data.lexicalRecord?.definition)html+=`<details><summary>${t('Source lexical record')}${uiLanguage()==='ro'?' · '+t('English lexical aid'):''}</summary><p>${escapeHTML(data.lexicalRecord.definition)}</p></details>`;
    html+=`<p class="source-label">${t('No separate documented senses were supplied. The available lexical record is shown above.')}</p>`;
    html+=`<h5>${t('Translation alternatives here')}</h5>`+(data.alternatives.length?data.alternatives.map(a=>`<p><strong>${escapeHTML(a.rendering)}</strong> — ${escapeHTML(a.reason)}</p>`).join(''):`<p>${t('No further renderings are supported by this explanation.')}</p>`);
    html+=safeEvidence(data.evidence);
  }else{
    html+=`<h5>${t('Meaning in this verse')}</h5>`;
    if(state.aiEnabled&&state.contextualWords)html+=`<button type="button" class="secondary-btn" data-word-explain="${index}" ${wordPending.has(identity.key)?'disabled':''}>${wordPending.has(identity.key)?t('Explaining…'):t('Explain this word in context')}</button>`;
    else html+=`<p class="source-label">${t(state.aiEnabled?'Update the study server to use this feature.':'Add an API key on the server to enable AI studies')}</p>`;
    if(wordPending.has(identity.key))html+=` <button type="button" class="secondary-btn" data-word-cancel>${t('Cancel')}</button>`;
    html+=`<p class="interaction-error" role="status"></p>`;
  }
  section.innerHTML=html;detail.append(section);
}
async function explainWord(index){
  const identity=wordIdentity(index);if(!identity||!state.contextualWords||!state.aiEnabled||wordPending.has(identity.key))return;
  wordRequest?.abort();const controller=new AbortController();wordRequest=controller;
  const serial=state.studySerial,translation=state.translation;
  wordPending.set(identity.key,true);renderWordEnhancement(index);
  try{
    const data=await api('/api/word-study',{method:'POST',headers:{'Content-Type':'application/json'},signal:controller.signal,
      body:JSON.stringify({book:state.book,chapter:state.chapter,verse:identity.verse,translation,tokenIndex:identity.tokenIndex})});
    if(controller.signal.aborted||serial!==state.studySerial||translation!==state.translation||data.surface!==identity.surface||data.tokenIndex!==identity.tokenIndex||data.language!==(translation==='ntr'?'ro':'en'))return;
    if(wordExplanations.size>=100)wordExplanations.delete(wordExplanations.keys().next().value);
    wordExplanations.set(identity.key,data);
  }catch(error){
    if(!controller.signal.aborted&&serial===state.studySerial&&state.selectedToken===index){
      const el=$(`word-detail-${index}`)?.querySelector('.interaction-error');if(el)el.textContent=errorText(error);
      toast(errorText(error));
    }
  }finally{
    wordPending.delete(identity.key);if(wordRequest===controller)wordRequest=null;
    if(serial===state.studySerial&&state.selectedToken===index)renderWordEnhancement(index);
  }
}
function chatIdentity(study=state.studies[studyKey()]){
  return study?.chatContext&&study?.studyRevision?JSON.stringify([studyKey(),uiLanguage(),study.studyRevision]):null;
}
function chatSession(id){
  if(!chatSessions.has(id)){
    if(chatSessions.size>=8)chatSessions.delete(chatSessions.keys().next().value);
    chatSessions.set(id,{messages:[],draft:'',related:'',pending:false,error:'',saved:[]});
  }
  return chatSessions.get(id);
}
function mountPassageChat(study){
  if(!state.aiEnabled||!study||study!==state.studies[studyKey()])return;
  const host=document.createElement('section');host.className='passage-chat';host.id='passageChat';host.setAttribute('aria-labelledby','passageChatHeading');
  const id=chatIdentity(study);
  if(!state.passageChat||!id){host.innerHTML=`<h4 id="passageChatHeading">${t('Ask about this passage')}</h4><p class="source-label">${t(state.passageChat?'Regenerate this study to enable passage chat.':'Update the study server to use this feature.')}</p>`;}
  else{
    const session=chatSession(id);
    const suggestions=['Explain the main point more simply.','How does the surrounding passage help explain this?','What in the text supports this interpretation?'];
    host.innerHTML=`<h4 id="passageChatHeading">${t('Ask about this passage')}</h4><p class="source-label">${t('Conversation stays in memory until you clear it or reload. Only answers you save are added to your notes. Questions and relevant study context are sent to the study service.')}</p><div class="chat-messages" role="log" aria-live="polite">${session.messages.map((m,i)=>m.role==='user'?`<div class="chat-question"><strong>${escapeHTML(m.content)}</strong></div>`:`<div class="chat-answer">${m.paragraphs.map(p=>`<p>${escapeHTML(p.text)}</p>`).join('')}${safeEvidence(m.evidence)}<button type="button" class="secondary-btn" data-chat-save="${i}" ${session.saved.includes(i)?'disabled':''}>${t(session.saved.includes(i)?'Saved to notes':'Save to notes')}</button></div>`).join('')}</div><div class="chat-suggestions">${!session.messages.length?suggestions.map((s,i)=>`<button type="button" class="secondary-btn" data-chat-suggestion="${i}">${escapeHTML(t(s))}</button>`).join(''):''}</div><form id="passageChatForm"><label for="chatQuestion">${t('Your question')}</label><textarea id="chatQuestion" maxlength="2000" rows="3" required placeholder="${escapeHTML(t('Ask a question about the passage or its generated study…'))}" ${session.pending?'disabled':''}>${escapeHTML(session.draft)}</textarea><label for="chatRelated">${t('Related Scripture (optional)')}</label><input id="chatRelated" maxlength="100" placeholder="${escapeHTML(t('For example, John 1:1-3'))}" value="${escapeHTML(session.related)}" ${session.pending?'disabled':''}><div class="chat-actions"><button type="submit" class="primary-btn" ${session.pending?'disabled':''}>${t(session.pending?'Answering…':'Ask')}</button>${session.pending?`<button type="button" class="secondary-btn" data-chat-cancel>${t('Cancel')}</button>`:''}<button type="button" class="secondary-btn" data-chat-clear>${t('Clear conversation')}</button></div><p class="interaction-error" role="status">${escapeHTML(session.error)}</p></form>`;
    host.querySelector('#passageChatForm').addEventListener('submit',e=>{e.preventDefault();void askPassage();});
    host.querySelector('#chatQuestion').addEventListener('input',e=>{session.draft=e.target.value;});
    host.querySelector('#chatRelated').addEventListener('input',e=>{session.related=e.target.value;});
    host.addEventListener('click',e=>{
      const suggestion=e.target.closest('[data-chat-suggestion]');if(suggestion){session.draft=t(suggestions[Number(suggestion.dataset.chatSuggestion)]);const q=$('chatQuestion');q.value=session.draft;q.focus();}
      if(e.target.closest('[data-chat-cancel]')){chatRequest?.abort();session.pending=false;mountChatAgain();}
      if(e.target.closest('[data-chat-clear]')){chatRequest?.abort();chatSessions.delete(id);mountChatAgain();}
      const save=e.target.closest('[data-chat-save]');if(save)saveChatAnswer(Number(save.dataset.chatSave));
    });
  }
  $('passageChat')?.remove();$('meaningContent').append(host);
}
function mountChatAgain(){mountPassageChat(state.studies[studyKey()]);}
async function askPassage(){
  const study=state.studies[studyKey()],id=chatIdentity(study);if(!id||!state.passageChat||!state.aiEnabled)return;
  const session=chatSession(id);if(session.pending)return;
  const question=($('chatQuestion')?.value??session.draft).trim();if(!question||question.length>2000)return;
  session.draft=question;session.related=$('chatRelated')?.value?.trim()||'';
  // Keep a small number of complete turns. Server applies the same bounds.
  let history=session.messages.slice(-8).map(m=>({role:m.role,content:m.content.slice(0,4500)}));
  while(JSON.stringify(history).length>18000)history=history.slice(2);
  const controller=new AbortController();chatRequest?.abort();chatRequest=controller;session.pending=true;session.error='';
  const serial=state.studySerial,reference=refKey(),translation=state.translation;
  const body={book:state.book,chapter:state.chapter,verse:state.selected,endVerse:selectionNumbers().at(-1),translation,study,question,history,...(session.related?{relatedReference:session.related}:{})};
  mountChatAgain();
  try{
    const data=await api('/api/study-chat',{method:'POST',headers:{'Content-Type':'application/json'},signal:controller.signal,body:JSON.stringify(body)});
    if(controller.signal.aborted||serial!==state.studySerial||id!==chatIdentity()||data.studyRevision!==study.studyRevision||data.reference!==reference||data.language!==(translation==='ntr'?'ro':'en'))return;
    session.messages.push({role:'user',content:question},{role:'assistant',content:data.paragraphs.map(p=>p.text).join('\n\n'),paragraphs:data.paragraphs,evidence:data.evidence});
    if(session.messages.length>20){session.messages.splice(0,2);session.saved=session.saved.filter(i=>i>=2).map(i=>i-2);}
    session.draft='';session.related='';
  }catch(error){if(!controller.signal.aborted&&id===chatIdentity())session.error=errorText(error);}
  finally{
    session.pending=false;if(chatRequest===controller)chatRequest=null;
    if(serial===state.studySerial&&id===chatIdentity()&&chatSessions.get(id)===session)mountChatAgain();
  }
}
function saveChatAnswer(index){
  const id=chatIdentity();if(!id)return;const session=chatSession(id),message=session.messages[index];
  if(message?.role!=='assistant'||session.saved.includes(index))return;
  const previous=state.notes[refKey()]||'';
  const sources=(message.evidence||[]).map(s=>`${s.reference||s.id} — ${s.edition||s.identifier||''}\n${s.text||''}`).join('\n\n');
  const addition=`${displayReference()} (${editionAbbreviation()})\n${session.messages[index-1]?.content||''}\n\n${message.content}${sources?'\n\n'+t('Sources used')+':\n'+sources:''}`;
  const next={...state.notes,[refKey()]:previous+(previous?'\n\n':'')+addition};
  try{localStorage.setItem('sela.notes',JSON.stringify(next));}
  catch{toast(t('The answer was not saved. Your existing notes are unchanged.'));return;}
  state.notes=next;session.saved.push(index);$('noteInput').value=next[refKey()];renderSaved();mountChatAgain();toast(t('Saved to notes'));
}

// END SELA STUDY UI

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


// Persist only user writing and progress. No reading text, credits or credentials.
const STUDY_JOURNAL_KEY='sela.studyJournal.v1';
const journalObject=value=>value&&typeof value==='object'&&!Array.isArray(value);
const journalOrdinal=value=>(typeof value==='number'||typeof value==='string'&&/^\d+$/u.test(value))&&Number.isSafeInteger(Number(value))&&Number(value)>=0;
const journalStep=value=>Math.max(0,Math.min(4,Math.trunc(Number(value))||0));
function journalPosition(ordinal){
  ordinal=journalOrdinal(ordinal)?Number(ordinal):0;
  return {ordinal,index:ordinal%28,day:ordinal%28+1,cycle:Math.floor(ordinal/28)+1};
}
function journalNext(journal){
  let ordinal=0;
  while(journal.entries[String(ordinal)]?.completedDate)ordinal++;
  return ordinal;
}
function journalEntry(journal,ordinal,create=false,date=''){
  const key=String(ordinal);if(!journalOrdinal(ordinal))return null;
  if(!journal.entries[key]&&create)journal.entries[key]={ordinal:Number(ordinal),reference:DAILY_PLAN[Number(ordinal)%28].reference,step:0,reached:0,reflection:'',practice:'',startedDate:date,updatedDate:date};
  return journal.entries[key]||null;
}
function loadStudyJournal(saved,{anchor,journeys={},completed={}}={}){
  const journal={schema:1,planId:DAILY_PLAN_ID,entries:{},migratedLegacy:true};
  if(journalObject(saved)&&saved.schema===1&&journalObject(saved.entries)){
    for(const [key,value]of Object.entries(saved.entries)){
      if(!journalOrdinal(key)||!journalObject(value))continue;
      const entry={...value,ordinal:Number(key),reference:value.reference||DAILY_PLAN[Number(key)%28].reference,reached:journalStep(value.reached)};
      entry.step=Math.min(entry.reached,journalStep(value.step));
      for(const name of ['reflection','practice'])if(typeof entry[name]!=='string')entry[name]='';
      // Dates are calendar labels, not timestamps; never recompute them on travel.
      for(const name of ['startedDate','updatedDate','completedDate','legacyDate'])if(entry[name]&&!Number.isFinite(dailyDayNumber(entry[name])))delete entry[name];
      journal.entries[String(Number(key))]=entry;
    }
    return journal;
  }
  const anchorDay=dailyDayNumber(anchor);
  if(!Number.isFinite(anchorDay))return journal;
  journeys=journalObject(journeys)?journeys:{};completed=journalObject(completed)?completed:{};
  for(const date of new Set([...Object.keys(journeys),...Object.keys(completed)])){
    const ordinal=dailyDayNumber(date)-anchorDay;
    if(!journalOrdinal(ordinal))continue;
    const prior=journalObject(journeys[date])?journeys[date]:{};
    const done=completed[date]===true;
    const entry={ordinal,reference:DAILY_PLAN[ordinal%28].reference,step:done?4:journalStep(prior.step),reached:done?4:journalStep(prior.reached),
      reflection:'',practice:typeof prior.practice==='string'?prior.practice:'',legacyDate:date};
    entry.step=Math.min(entry.step,entry.reached);
    if(done)entry.completedDate=date;
    // Old reflections have only verse keys. Keep them undated in sela.notes.
    journal.entries[String(ordinal)]=entry;
  }
  return journal;
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
  'Weekly themes':'Temele săptămânale','Today':'Astăzi'
};
Object.assign(DAILY_LABELS,{
  'Read':'Citește','Word study':'Studiul cuvintelor','Meaning':'Înțeles','Reflection':'Reflecție','Practice':'Aplicare',
  'Begin daily study':'Începe studiul zilnic','Resume daily study':'Continuă studiul zilnic','Review today’s study':'Recapitulează studiul de astăzi',
  'Back':'Înapoi','Continue':'Continuă','Continue daily study':'Continuă studiul zilnic',
  'Finish today’s study':'Încheie studiul de astăzi','Study completed ✓':'Studiu încheiat ✓',
  'Read slowly. What does the verse actually say? Notice the speaker, repeated words and the surrounding passage.':'Citește încet. Ce spune versetul? Observă cine vorbește, cuvintele repetate și pasajul din jur.',
  'Explore the original words':'Explorează cuvintele originale',
  'Choose one Greek, Hebrew or Aramaic word. Compare its meaning with its use in this sentence; a dictionary gloss alone does not determine the verse’s meaning.':'Alege un cuvânt grecesc, ebraic sau aramaic. Compară sensul lui cu folosirea în această propoziție; o glosare de dicționar nu stabilește singură înțelesul versetului.',
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
Object.assign(DAILY_LABELS,{
  'Study journal':'Jurnal de studiu','Close journal':'Închide jurnalul','Study cycle':'Ciclul de studiu',
  'Resume where I left off':'Continuă de unde am rămas','Continue my path':'Continuă parcursul meu',
  'Finish this study':'Încheie acest studiu','Completed':'Încheiat','In progress':'În desfășurare','Not started':'Neînceput',
  'Earlier record':'Înregistrare anterioară','Started':'Început','Last edited':'Ultima modificare',
  'No reflection yet.':'Nu există încă o reflecție.','No practice response yet.':'Nu există încă un răspuns de aplicare.',
  'Review this study':'Recapitulează acest studiu','Open this study':'Deschide acest studiu',
  'Existing verse note (undated)':'Notiță existentă la verset (fără dată)',
  'Existing verse notes (undated)':'Notițe existente la versete (fără dată)','Open verse notes':'Deschide notițele versetului',
  'Progress follows lessons, not calendar days. Complete more than one lesson whenever you want.':'Progresul urmează lecțiile, nu zilele calendaristice. Poți încheia mai multe lecții când dorești.',
  'Older reflections were saved by verse. Their dates cannot be reconstructed. Earlier records removed by the old history limit cannot be recovered.':'Reflecțiile mai vechi au fost salvate pe verset. Datele lor nu pot fi reconstituite. Înregistrările eliminate de vechea limită a istoricului nu pot fi recuperate.',
  'Loading this lesson’s verse…':'Se încarcă versetul acestei lecții…',
  'This verse could not be loaded. Retry or choose another translation.':'Acest verset nu a putut fi încărcat. Reîncearcă sau alege altă traducere.',
  'Not saved. Keep this app open and copy your writing.':'Nu s-a salvat. Păstrează aplicația deschisă și copiază textul scris.',
  
});
let dailyState=null;

// Lesson progress is independent of the calendar; dates label actual activity.
const DAILY_STEPS=['Read','Word study','Meaning','Reflection','Practice'];
const dailyReference=reference=>{const m=reference.match(/^(.+) (\d+):(\d+)$/u);return {book:m[1],chapter:Number(m[2]),verse:Number(m[3])};};
function dailyRefLabel(reference){const r=dailyReference(reference);return displayReference(r.book,r.chapter,r.verse);}
function currentDailyLesson(){const p=journalPosition(dailyState.selected);return {...p,entry:DAILY_PLAN[p.index],theme:DAILY_THEMES[Math.floor(p.index/7)]};}
function dailyJourney(){return journalEntry(dailyState.journal,dailyState.selected)||{step:0,reached:0,reflection:'',practice:''};}
function dailyTouch(){return journalEntry(dailyState.journal,dailyState.selected,true,dailyDateKey());}
function dailySeen(){saveJSON('sela.daily.lastPrompt',dailyState.date);}
function saveDailyJourney(){
  const d=dailyState;
  try{
    if(d.storageBlocked)throw new Error('Unrecognized journal');
    localStorage.setItem(STUDY_JOURNAL_KEY,JSON.stringify(d.journal));d.storageError=false;
  }catch{d.storageError=true;}
  const el=$('dailySaveStatus');if(el)el.textContent=dt(d.storageError?'Not saved. Keep this app open and copy your writing.':'Saved on this device');
  if(d.journalOpen)renderDailyJournal();
  return !d.storageError;
}
function dailyStatus(j){return j?.completedDate?'Completed':j?'In progress':'Not started';}
function dailyDates(j){
  if(!j)return '';
  return [['Earlier record',j.legacyDate],['Started',j.startedDate],['Last edited',j.updatedDate],['Completed',j.completedDate]]
    .filter(([,date])=>date).map(([name,date])=>`${dt(name)}: ${date}`).join(' · ');
}
function renderDaily(){
  if(!dailyState||!$('dailyVerseCard'))return;
  const d=dailyState,lesson=currentDailyLesson(),entry=lesson.entry,j=dailyJourney(),complete=!!j.completedDate;
  $('dailyVerseCard').lang=uiLanguage();$('dailyVerseCard').classList.remove('hidden');
  $('dailyDate').dateTime=d.date;$('dailyDate').textContent=new Date(`${d.date}T12:00:00`).toLocaleDateString(uiLanguage()==='ro'?'ro-RO':'en-CA',{month:'long',day:'numeric',year:'numeric'});
  $('dailyEyebrow').textContent=dt('Verse of the day');$('dailySubtitle').textContent=dt('A daily path of spiritual growth');
  $('dailyProgress').textContent=`${dt('Day')} ${lesson.day} ${dt('of')} 28 · ${dt('Cycle')} ${lesson.cycle} · ${dt(dailyStatus(journalEntry(d.journal,d.selected)))}`;
  $('dailyTheme').textContent=dailyText(lesson.theme);$('dailyTitle').textContent=dailyText(entry.title);
  $('dailyReference').textContent=`${dailyRefLabel(entry.reference)} · ${editionAbbreviation()}`;
  $('dailyDetails').classList.toggle('hidden',!d.open);$('dailyExpand').classList.toggle('hidden',d.open);$('dailyLater').classList.toggle('hidden',!d.open);
  $('dailyExpand').setAttribute('aria-expanded',String(d.open));
  for(const el of document.querySelectorAll('[data-daily-label]'))el.textContent=dt(el.dataset.dailyLabel);
  $('dailyPromptToggle').checked=d.auto;$('dailyComplete').disabled=complete;$('dailyVerseCard').classList.toggle('daily-complete',complete);
  $('dailyBridge').textContent=dailyText(entry.bridge).replace(/\bYesterday\b/gu,'In the previous lesson').replace(/\bIeri\b/gu,'În lecția precedentă');
  $('dailyQuestion').textContent=dailyText(entry.question);$('dailyPractice').textContent=dailyText(entry.practice);
  $('dailyEntryDates').textContent=dailyDates(journalEntry(d.journal,d.selected));
  $('dailyResume').classList.toggle('hidden',d.selected===journalNext(d.journal));
  $('dailyPrevious').innerHTML=d.selected>0?`<button type="button" class="daily-previous" data-daily-lesson="${d.selected-1}">${escapeHTML(dt('Previous lesson'))}: ${escapeHTML(dailyRefLabel(DAILY_PLAN[(d.selected-1)%28].reference))}</button>`:'';
  $('dailyLinks').innerHTML=entry.links.map(item=>`<button type="button" class="daily-link" data-daily-ref="${escapeHTML(item.reference)}"><strong>${escapeHTML(dailyRefLabel(item.reference))} <span aria-hidden="true">↗</span></strong><span>${escapeHTML(dailyText(item))}</span></button>`).join('');
  $('dailyThemePath').innerHTML=DAILY_THEMES.map((theme,i)=>`<span role="listitem" ${i===Math.floor(lesson.index/7)?'aria-current="step"':''}>${i+1}. ${escapeHTML(dailyText(theme))}</span>`).join('');
  $('dailyThemePath').setAttribute('aria-label',dt('Weekly themes'));
  $('dailyNav').setAttribute('aria-label',dt('Verse of the day'));$('dailyNav').title=dt('Verse of the day');
  const key=`${d.selected}:${state.translation}`;
  if(d.key===key&&d.payload){$('dailyVerseText').textContent=d.payload.verseText;translationCredits(d.payload,'dailyCredit');}
  else{$('dailyVerseText').textContent=dt(d.loading||d.key!==key?'Loading this lesson’s verse…':'This verse could not be loaded. Retry or choose another translation.');translationCredits(null,'dailyCredit');}
  $('dailyRetry').classList.toggle('hidden',d.key!==key||d.loading||!!d.payload);
  renderDailyFlow();if(d.journalOpen)renderDailyJournal();
}
function renderDailyFlow(){
  if(!dailyState||!$('dailySteps'))return;
  const d=dailyState,j=dailyJourney(),finished=!!j.completedDate;
  $('dailySteps').innerHTML=DAILY_STEPS.map((name,i)=>`<button type="button" data-daily-step="${i}" ${i>j.reached?'disabled':''} ${i===j.step?'aria-current="step"':''}><span>${i+1}</span>${escapeHTML(dt(name))}</button>`).join('');
  $('dailySteps').setAttribute('aria-label',dt('Daily study steps'));
  document.querySelectorAll('[data-daily-stage]').forEach(el=>el.classList.toggle('hidden',Number(el.dataset.dailyStage)!==j.step));
  $('dailyStepStatus').textContent=`${j.step+1} / 5 · ${dt(DAILY_STEPS[j.step])}`;
  $('dailyBack').disabled=j.step===0;$('dailyNext').classList.toggle('hidden',j.step===4);
  $('dailyNext').textContent=j.step<4?`${dt('Continue')}: ${dt(DAILY_STEPS[j.step+1])} →`:dt('Continue');
  $('dailyStart').textContent=dt(finished?'Continue my path':j.reached>0?'Resume where I left off':'Begin daily study');
  if(document.activeElement!==$('dailyReflection'))$('dailyReflection').value=j.reflection;
  if(document.activeElement!==$('dailyIntention'))$('dailyIntention').value=j.practice;
  $('dailyReflection').placeholder=dt('In your own words, what have you learned about God, yourself or your response?');
  $('dailyIntention').placeholder=dt('What will you do, and when will you do it?');
  $('dailyComplete').textContent=dt(finished?'Study completed ✓':'Finish this study');$('dailyComplete').classList.toggle('hidden',j.step!==4);
  $('dailySaveStatus').textContent=dt(d.storageError?'Not saved. Keep this app open and copy your writing.':'Saved on this device');
  const legacy=state.notes[currentDailyLesson().entry.reference];
  $('dailyLegacyReflection').classList.toggle('hidden',!legacy?.trim());
  $('dailyLegacyReflection').textContent=legacy?`${dt('Existing verse note (undated)')}: ${legacy}`:'';
  let continuation=$('dailyStudyContinue');
  if(!continuation&&$('studyContent')){
    continuation=document.createElement('button');continuation.id='dailyStudyContinue';continuation.type='button';continuation.className='daily-panel-continue primary-btn';$('studyContent').append?.(continuation);
    continuation.addEventListener('click',()=>{closePanel();setDailyStep(Math.min(4,dailyJourney().step+1));$('dailyVerseCard').scrollIntoView?.({behavior:'auto',block:'start'});});
  }
  if(continuation){
    const ref=dailyReference(currentDailyLesson().entry.reference),isDaily=state.book===ref.book&&state.chapter===ref.chapter&&state.selected===ref.verse&&!isPassage();
    continuation.classList.toggle('hidden',!isDaily||!d.open||![1,2].includes(j.step));
    continuation.textContent=`${dt('Continue daily study')}: ${dt(DAILY_STEPS[Math.min(4,j.step+1)])} →`;
  }
}
function setDailyStep(step){
  if(!dailyState)return;const j=dailyTouch();j.step=Math.max(0,Math.min(4,step));j.reached=Math.max(j.reached,j.step);j.updatedDate=dailyDateKey();
  saveDailyJourney();dailyState.open=true;dailySeen();renderDaily();
}
async function selectDailyLesson(ordinal){
  if(!Number.isSafeInteger(ordinal)||ordinal<0)return;
  dailyState.selected=ordinal;dailyState.open=true;dailyState.journalOpen=false;$('dailyJournal').classList.add('hidden');
  showView('read');closePanel();dailySeen();await refreshDaily();
  $('dailyVerseCard').scrollIntoView?.({behavior:'auto',block:'start'});
}
function openDailyJournal(){
  if(!dailyState)return;showView('read');closePanel();dailyState.journalOpen=true;$('dailyJournal').classList.remove('hidden');
  dailyState.journalCycle=journalPosition(dailyState.selected).cycle;renderDailyJournal();$('dailyJournal').scrollIntoView?.({behavior:'auto',block:'start'});
}
function renderDailyJournal(){
  const d=dailyState;if(!d||!$('dailyJournalList'))return;
  $('dailyJournalTitle').textContent=dt('Study journal');$('dailyJournalNote').textContent=dt('Progress follows lessons, not calendar days. Complete more than one lesson whenever you want.');
  const cycles=new Set([journalPosition(journalNext(d.journal)).cycle,d.journalCycle||1]);
  for(const key of Object.keys(d.journal.entries))cycles.add(journalPosition(Number(key)).cycle);
  const picker=$('dailyJournalCycle');picker.innerHTML=[...cycles].sort((a,b)=>b-a).map(c=>`<option value="${c}">${dt('Cycle')} ${c}</option>`).join('');picker.value=String(d.journalCycle||1);
  picker.setAttribute('aria-label',dt('Study cycle'));
  const offset=((d.journalCycle||1)-1)*28;
  $('dailyJournalList').innerHTML=DAILY_PLAN.map((entry,index)=>{
    const ordinal=offset+index,j=journalEntry(d.journal,ordinal);
    return `<details class="journal-entry"><summary><span>${escapeHTML(dt('Day'))} ${index+1} · ${escapeHTML(dailyText(entry.title))}<small>${escapeHTML(dailyRefLabel(entry.reference))} · ${escapeHTML(dt(dailyStatus(j)))}</small></span></summary><div class="journal-entry-body"><p class="daily-small">${escapeHTML(dailyDates(j))}</p><h3>${escapeHTML(dt('Your reflection'))}</h3><p class="journal-writing">${escapeHTML(j?.reflection||dt('No reflection yet.'))}</p><h3>${escapeHTML(dt('My next step'))}</h3><p class="journal-writing">${escapeHTML(j?.practice||dt('No practice response yet.'))}</p><button type="button" class="daily-secondary" data-daily-lesson="${ordinal}">${escapeHTML(dt(j?.completedDate?'Review this study':'Open this study'))} →</button></div></details>`;
  }).join('');
  const refs=new Set(DAILY_PLAN.map(entry=>entry.reference));
  const notes=Object.entries(state.notes).filter(([ref,note])=>refs.has(ref)&&note?.trim());
  $('dailyLegacyNotes').innerHTML=`<h3>${escapeHTML(dt('Existing verse notes (undated)'))}</h3><p class="daily-small">${escapeHTML(dt('Older reflections were saved by verse. Their dates cannot be reconstructed. Earlier records removed by the old history limit cannot be recovered.'))}</p>`+notes.map(([ref,note])=>`<details class="journal-entry"><summary>${escapeHTML(dailyRefLabel(ref))}</summary><div class="journal-entry-body"><p class="journal-writing">${escapeHTML(note)}</p><button type="button" class="daily-secondary" data-legacy-note="${escapeHTML(ref)}">${escapeHTML(dt('Open verse notes'))} →</button></div></details>`).join('');
}
async function openDailyTool(mode){
  const ordinal=dailyState.selected,ref=dailyReference(currentDailyLesson().entry.reference);
  if(state.book===ref.book&&state.chapter===ref.chapter&&state.selected===ref.verse&&!isPassage()){openPanel();switchTab(mode==='meaning'?'meaning':'words');}
  else await openDailyPassage(currentDailyLesson().entry.reference,mode);
  if(dailyState.selected!==ordinal)return;dailyState.open=true;renderDaily();
}
async function refreshDaily(force=false,now=new Date()){
  if(!dailyState)return;const d=dailyState,today=dailyDateKey(now);
  if(today!==d.date){d.date=today;d.open=d.auto&&savedJSON('sela.daily.lastPrompt','')!==today;if(d.open)dailySeen();}
  const key=`${d.selected}:${state.translation}`;
  if(!force&&d.key===key){renderDaily();return;}
  d.abort?.abort();const ctrl=new AbortController();d.abort=ctrl;d.key=key;d.payload=null;d.loading=true;renderDaily();
  const ref=dailyReference(currentDailyLesson().entry.reference);
  try{
    const data=await requestChapter(new URLSearchParams({book:ref.book,chapter:ref.chapter,translation:state.translation}),ctrl.signal);
    if(ctrl.signal.aborted||d.abort!==ctrl)return;
    const verse=data.verses?.find(item=>Number(item.verse)===ref.verse);if(!verse?.text)throw new Error('Lesson verse unavailable');
    d.payload={verseText:verse.text,copyright:data.copyright,attribution:data.attribution};
  }catch{ /* The edition-specific retry state leaves the ordinary reader usable. */ }
  finally{if(d.abort===ctrl&&!ctrl.signal.aborted){d.loading=false;renderDaily();}}
}
function setDailyOpen(open){if(!dailyState)return;dailyState.open=open;dailySeen();renderDaily();}
async function openDailyPassage(reference,mode='study'){
  const ref=dailyReference(reference);setDailyOpen(false);await navigate(ref.book,ref.chapter,mode==='context'?null:ref.verse);
  if(state.book===ref.book&&state.chapter===ref.chapter&&state.selected===ref.verse&&!isPassage()){if(mode==='notes')switchTab('notes');if(mode==='meaning')switchTab('meaning');}
}
function initDaily(){
  if(!$('dailyVerseCard'))return;
  const today=dailyDateKey();let anchor=savedJSON('sela.daily.anchor','');
  if(!Number.isFinite(dailyDayNumber(anchor))){anchor=today;saveJSON('sela.daily.anchor',anchor);}
  let raw=null,saved=null,storageBlocked=false;
  try{raw=localStorage.getItem(STUDY_JOURNAL_KEY);saved=raw?JSON.parse(raw):null;if(raw&&(!saved||saved.schema!==1||!journalObject(saved.entries)||saved.planId&&saved.planId!==DAILY_PLAN_ID))storageBlocked=true;}catch{storageBlocked=true;}
  const journal=loadStudyJournal(saved,{anchor,journeys:savedJSON('sela.daily.journeys',{}),completed:savedJSON('sela.daily.completed',{})});
  dailyState={anchor,date:today,auto:savedJSON('sela.daily.auto',true)!==false,journal,selected:journalNext(journal),journalOpen:false,journalCycle:1,storageBlocked,storageError:false,key:'',payload:null,loading:false,abort:null};
  dailyState.open=dailyState.auto&&savedJSON('sela.daily.lastPrompt','')!==today;if(dailyState.open)dailySeen();
  // Do not touch the original legacy keys or ordinary verse notes during migration.
  saveDailyJourney();
  $('dailyExpand').addEventListener('click',()=>setDailyOpen(true));$('dailyLater').addEventListener('click',()=>setDailyOpen(false));
  $('dailyRetry').addEventListener('click',()=>void refreshDaily(true));
  $('dailyPromptToggle').addEventListener('change',event=>{dailyState.auto=event.target.checked;saveJSON('sela.daily.auto',dailyState.auto);});
  $('dailyComplete').addEventListener('click',()=>{
    if(dailyJourney().step!==4||dailyJourney().completedDate)return;
    if(!dailyJourney().practice.trim()){toast(dt('Choose a concrete action before finishing.'));$('dailyIntention').focus();return;}
    const j=dailyTouch();j.completedDate=dailyDateKey();j.updatedDate=j.completedDate;saveDailyJourney();renderDaily();
  });
  $('dailyStart').addEventListener('click',()=>{if(dailyJourney().completedDate){void selectDailyLesson(journalNext(dailyState.journal));return;}dailyTouch();saveDailyJourney();setDailyOpen(true);});
  $('dailyResume').addEventListener('click',()=>void selectDailyLesson(journalNext(dailyState.journal)));
  $('dailyJournalOpen').addEventListener('click',openDailyJournal);$('savedJournalOpen')?.addEventListener('click',openDailyJournal);
  $('dailyJournalClose').addEventListener('click',()=>{dailyState.journalOpen=false;$('dailyJournal').classList.add('hidden');});
  $('dailyJournalCycle').addEventListener('change',event=>{dailyState.journalCycle=Number(event.target.value);renderDailyJournal();});
  $('dailyBack').addEventListener('click',()=>setDailyStep(dailyJourney().step-1));$('dailyNext').addEventListener('click',()=>setDailyStep(dailyJourney().step+1));
  $('dailySteps').addEventListener('click',event=>{const b=event.target.closest('[data-daily-step]');if(b&&!b.disabled&&Number(b.dataset.dailyStep)<=dailyJourney().reached)setDailyStep(Number(b.dataset.dailyStep));});
  $('dailySuggest').addEventListener('click',()=>{const j=dailyTouch();j.practice=dailyText(currentDailyLesson().entry.practice);j.updatedDate=dailyDateKey();saveDailyJourney();renderDailyFlow();});
  for(const [id,field]of [['dailyIntention','practice'],['dailyReflection','reflection']])$(id).addEventListener('input',event=>{const j=dailyTouch();j[field]=event.target.value;j.updatedDate=dailyDateKey();saveDailyJourney();$('dailyEntryDates').textContent=dailyDates(j);});
  $('dailyVerseCard').addEventListener('click',event=>{
    const lesson=event.target.closest('[data-daily-lesson]'),legacy=event.target.closest('[data-legacy-note]');
    if(lesson){void selectDailyLesson(Number(lesson.dataset.dailyLesson));return;}if(legacy){void openDailyPassage(legacy.dataset.legacyNote,'notes');return;}
    const link=event.target.closest('[data-daily-ref]'),action=event.target.closest('[data-daily-open]'),tool=event.target.closest('[data-daily-tool]');
    if(link)void openDailyPassage(link.dataset.dailyRef);if(action)void openDailyPassage(currentDailyLesson().entry.reference,action.dataset.dailyOpen);if(tool)void openDailyTool(tool.dataset.dailyTool);
  });
  $('dailyNav').addEventListener('click',()=>{void selectDailyLesson(journalNext(dailyState.journal));$('dailyTitle').focus();});
  const resume=()=>{if(document.visibilityState!=='hidden')void refreshDaily();};document.addEventListener?.('visibilitychange',resume);window.addEventListener('focus',resume);
  if(typeof setInterval==='function')setInterval(resume,60000);void refreshDaily();
}

// END SELA DAILY
init();
