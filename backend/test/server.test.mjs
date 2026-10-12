import test from 'node:test';
import assert from 'node:assert/strict';
import { createServer } from 'node:http';

let mockUpstream, app, base;
const words = [
  { surface:'στοιχεῖα',lemma:'στοιχεῖον',strong:'G4747',morph:'N-NPN',gloss:'elements' },
  { surface:'καυσούμενα',lemma:'καίω',strong:'G2545',morph:'V-PPP-NPN',gloss:'burning' }
];
const aiResult = {
  literalTranslation:'The elements burning shall be dissolved.', overview:'A cosmic judgment passage.',
  historicalContext:'Jewish apocalyptic imagery.',literaryContext:'Chapter three addresses the day of the Lord.',
  keyPhrases:[{original:'στοιχεῖα',transliteration:'stoicheia',meaning:'elements',significance:'Material order'}],
  interpretations:['Cosmic renewal or destruction.'],
  crossReferences:[{reference:'Isaiah 34:4',connection:'Cosmic imagery'}],
  application:'Live faithfully.',textualNotes:'Text traditions differ.'
};
function json(res,obj){res.setHeader('Content-Type','application/json');res.end(JSON.stringify(obj));}
const start = server => new Promise(resolve => server.listen(0,'127.0.0.1',()=>resolve(server.address().port)));
const stop = server => new Promise(resolve=>server.close(resolve));
function api(path,opts){return fetch(base+path,opts).then(async r=>({status:r.status,body:await r.json()}));}

test('Bible app endpoints, guardrails, and AI study against deterministic mocked upstream', async () => {
  mockUpstream=createServer(async(req,res)=>{
    const url=new URL(req.url,'http://localhost');
    if(url.pathname==='/v1/responses'){
      assert.equal(req.headers.authorization,'Bearer test-key');
      let data='';for await (const part of req)data+=part;
      const request=JSON.parse(data);
      assert.equal(request.text.format.type,'json_schema');
      assert.match(request.input,/στοιχεῖα/);
      return json(res,{output:[{content:[{type:'output_text',text:JSON.stringify(aiResult)}]}]});
    }
    if(url.pathname.startsWith('/v1/chapters/')){
      const translation=url.searchParams.get('translation');
      if(translation==='web')return json(res,{verses:[{verse:10,text:'The elements will be dissolved with heat.'}]});
      if(translation==='tcgnt')return json(res,{verses:[{verse:10,text:'στοιχεῖα καυσούμενα',words}],lexicon:{G4747:{transliteration:'stoicheion',definition:'an element'}},attribution:[{name:'STEPBible',license:'CC BY 4.0'}]});
      res.writeHead(404);return json(res,{error:'translation unavailable'});
    }
    if(url.pathname==='/v1/search')return json(res,{query:'mercy',total:1,results:[{book_name:'Psalms',chapter:23,verse:6,text:'Mercy follows me.'}]});
    res.writeHead(404);return json(res,{error:'Not found'});
  });
  const upstreamPort=await start(mockUpstream);
  process.env.BIBLE_API_BASE=`http://127.0.0.1:${upstreamPort}`;
  process.env.OPENAI_API_BASE=`http://127.0.0.1:${upstreamPort}`;
  process.env.OPENAI_API_KEY='test-key';
  const { startServer }=await import('../server.mjs');
  app=startServer(0);await new Promise(resolve=>app.on('listening',resolve));
  base=`http://127.0.0.1:${app.address().port}`;
  try {
    const {body:status}=await api('/api/status');assert.equal(status.aiEnabled,true);
    const books=await api('/api/books');assert.equal(books.body.books.length,66);
    const chapter=await api('/api/chapter?book=2%20Peter&chapter=3');assert.equal(chapter.body.verses[0].verse,10);
    const original=await api('/api/original?book=2%20Peter&chapter=3&verse=10');
    assert.equal(original.body.words[0].surface,'στοιχεῖα');
    assert.equal(original.body.attribution[0].license,'CC BY 4.0');
    const invalid=await api('/api/chapter?book=2%20Peter&chapter=55');assert.equal(invalid.status,400);
    const invalidTranslation=await api('/api/chapter?book=Genesis&chapter=1&translation=esv');assert.equal(invalidTranslation.status,400);
    const search=await api('/api/search?q=mercy');assert.equal(search.body.total,1);
    const ai=await api('/api/study',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({book:'2 Peter',chapter:3,verse:10})});
    assert.equal(ai.status,200);assert.equal(ai.body.keyPhrases[0].original,'στοιχεῖα');assert.equal(ai.body.model,'gpt-5.4-mini');
    const index=await fetch(base+'/');assert.equal(index.status,200);assert.match(await index.text(),/Sela|SELA/);
    const script=await fetch(base+'/app.js');assert.equal(script.status,200);assert.match(await script.text(),/renderOriginal/);
    const traversal=await fetch(base+'/server.mjs');assert.equal(traversal.status,404);
  }finally{await stop(app);await stop(mockUpstream);}
});
