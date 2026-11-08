import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from './test-env.mjs';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';
import { emptyState, startRun, writeState } from '../../pipeline/lib/state.mjs';
import { CATEGORIES } from '../../pipeline/lib/data-files.mjs';

const read=p=>JSON.parse(readFileSync(p,'utf8'));
const write=(p,x)=>{mkdirSync(resolve(p,'..'),{recursive:true});writeFileSync(p,stringifyCanonical(x));};
const refId='scripts/example.lua#templates.example';

// Scenario: schema12 extracts pass through real diff/AI/candidate/verify/write/state entry points.
// Purpose: preserve exact citations/errata and isolate a V-CITE failure to one retained item.
for(const fail of [false,true]) test(`InterT90_schema12 CLI citation ${fail?'failure retains only its item':'success preserves AI fields'}`,async t=>{
 const root=mkdtempSync(join(tmpdir(),'schema12-io-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const meta={gameVersion:'2.0.0',sourceCommit:'a'.repeat(40),textBatch:'new'};
 const old={gameVersion:'1.0.0',sourceCommit:'b'.repeat(40),textBatch:'old'};
 const cloud=join(root,'cloud'),work=join(root,'work'),base=join(cloud,meta.gameVersion),state=join(root,'pipeline/state.json');
 mkdirSync(cloud);writeFileSync(join(root,'Translation.md'),'# 譯名\n');await writeState(state,startRun(emptyState(),meta));
 const previous={};
 for(const category of CATEGORIES){
  const file=read(`pipeline/schema/examples/1.1.0-example/${category}.json`);file.schemaVersion='1.2.0';Object.assign(file,meta);
  const modern=['skills','blessings'].includes(category),item=file.items[0];
  item.name={en:'Example',zh:'範例',origin:'official'};item.official={en:'Effect',zh:'效果'};item.errata=[];item.values.params={};
  item.source.commit=meta.sourceCommit;item.source.text.batch=meta.textBatch;
  item.explanation={effect:'效果',conditions:'',calculation:'',notes:'',extra:'',...(modern?{effectOrigin:'official'}:{})};
  if(category==='weapons'){item.values.bars=[];item.values.curves=[];item.values.attackCombos=[];}
  if(category==='blessings')item.values.tiers=[{tier:1,params:{}}];
  if(category==='terms'){item.name.en='5';item.values.params.corrected={value:14};item.explanation.notes='數值14';}
  if(modern){
   item.values.params.duration={value:5};item.values.mechanics={'buff.duration':{value:14,unit:'seconds'}};
   item.source.valueSources={'/mechanics/buff.duration':[{path:'scripts/example.lua',line:7}]};
   item.source.codeRefs={[refId]:{path:'scripts/example.lua',symbol:'templates.example',sha256:'a'.repeat(64)}};
   item.explanation.notes='顯示5，持續14秒';
  }
  file.items=[item];if(category==='skills'){const second=structuredClone(item);second.id+=':second';file.items.push(second);}
  previous[category]=structuredClone(file);Object.assign(previous[category],old);
  for(const x of previous[category].items){x.source.commit=old.sourceCommit;x.source.text.batch=old.textBatch;if(modern){x.values.mechanics['buff.duration'].value=7;x.explanation.notes='顯示5，持續7秒';}}
  write(join(root,'data',old.gameVersion,`${category}.json`),previous[category]);
  write(join(work,'extract',`${category}.json`),{...file,scriptVersion:`pipeline/extract-${category}.mjs@1.0.0`,status:'ok',reason:null,problems:[],excluded:[],items:file.items.map(({explanation,errata,...x})=>x)});
 }
 write(join(root,'data/current.json'),{schemaVersion:'1.2.0',...old,path:`data/${old.gameVersion}`,versions:[old.gameVersion]});
 const cli=(name,args)=>{const r=spawnSync(process.execPath,[`pipeline/${name}.mjs`,...args],{encoding:'utf8'});assert.equal(r.status,0,r.stdout+r.stderr);return r;};
 const args=['--state',state,'--cloud-dir',cloud,'--work-dir',work,'--data-dir',join(root,'data'),'--glossary',join(root,'missing.md')];
 cli('diff',args);const outputs={};
 for(const name of readdirSync(join(base,'ai/input'))){
  const input=read(join(base,'ai/input',name));assert.equal(input.dataSchemaVersion,'1.2.0');assert.ok(input.item.source.codeRefs);
  const blessing=input.category==='blessings';
  const errata=[{locale:'en',official:'5',corrected:'14',valueRefs:['/mechanics/buff.duration'],sources:[{path:'scripts/example.lua',line:7}],anchor:{field:'displayParameter',locale:'en',text:'5',occurrence:1,param:'duration',...(blessing?{tier:1}:{})}}];
  if(input.category==='skills'&&!input.id.endsWith(':second')){
   errata[0].anchor={field:'name',locale:'en',text:'5',occurrence:1,itemId:previous.terms.items[0].id};errata[0].valueRefs=['/params/corrected'];
  }
  // Blessing display text belongs to the selected tier.
  if(blessing){const p=join(work,'extract/blessings.json'),extract=read(p);extract.items[0].values.tiers[0].params.duration={value:5};write(p,extract);}
  const output={schemaVersion:'1.0.0',id:input.id,inputHash:input.inputHash,explanation:{effect:'效果',conditions:'',calculation:'',notes:'顯示5，持續14秒',extra:''},errata,citations:[{section:'notes',text:'持續14秒',codeRefs:[refId],valueRefs:['/mechanics/buff.duration']}]};
  if(fail&&input.id.endsWith(':second'))delete output.citations;
  outputs[input.id]=output;write(join(base,'ai/output',name),output);
 }
 // Refresh the blessing input after adding its tier display parameter, retaining all AI fields.
 cli('diff',args);
 for(const name of readdirSync(join(base,'ai/input'))){const input=read(join(base,'ai/input',name));outputs[input.id].inputHash=input.inputHash;write(join(base,'ai/output',name),outputs[input.id]);cli('diff',[...args,'--mark-described',input.id]);}
 cli('verify',['--root',root,'--state',state,'--cloud-dir',cloud,'--translation',join(root,'Translation.md'),'--issues','off']);
 const report=read(join(base,'verify/report.json')),failed=report.items.filter(x=>x.failures.some(f=>f.code==='V-CITE'));
 assert.equal(failed.length,fail?1:0);if(fail)assert.equal(failed[0].decision,'kept-previous');
 cli('write',['--root',root,'--state',state,'--cloud-dir',cloud]);cli('validate',['--root',root]);
 for(const category of ['skills','blessings'])for(const item of read(join(root,'data',meta.gameVersion,`${category}.json`)).items){
  if(fail&&item.id.endsWith(':second')){assert.equal(item.explanation.notes,'顯示5，持續7秒');assert.equal(item.retainedFrom.gameVersion,old.gameVersion);}
  else {assert.deepEqual(item.citations,outputs[item.id].citations);assert.deepEqual(item.errata,outputs[item.id].errata);}
 }
 assert.equal(read(state).run.status,'completed');
});
