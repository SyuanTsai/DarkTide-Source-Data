import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { spawnSync } from './test-env.mjs';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';
import { emptyState, startRun, writeState } from '../../pipeline/lib/state.mjs';
import { CATEGORIES } from '../../pipeline/lib/data-files.mjs';
import { schemaAlignFixture } from './schema-align-fixture.mjs';
import { runWrite } from '../../pipeline/lib/write.mjs';
import { createHash } from 'node:crypto';

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

// Scenario: real 1.1 predecessors meet 1.2 candidates through diff, mark, verify, write and validate.
// Purpose: combine the existing skill, exclude a new failure, and promote whole-category fallbacks.
for(const whole of [false,true]) test(`InterT91_1.1 predecessor to 1.2 CLI ${whole?'whole category retention and item':'item'} combination`,async t=>{
 const root=mkdtempSync(join(tmpdir(),'schema-align-io-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const f=await schemaAlignFixture(root,{whole});const r=f.verify();assert.equal(r.status,0,r.stdout+r.stderr);
 const report=read(join(f.base,'verify/report.json'));assert.equal(report.result,'degraded');assert.equal(report.targetSchemaVersion,'1.2.0');
 const retained=report.items.find(row=>row.id.endsWith(':second')),excluded=report.items.find(row=>row.id.endsWith(':new'));
 assert.equal(retained.decision,'combined');assert.ok(retained.failures.some(x=>x.code==='V-CITE'));
 assert.equal(excluded.decision,'excluded');
 f.success('write',f.writeArgs);f.success('validate',['--root',root]);
 for(const category of CATEGORIES) {
  const file=read(join(root,'data',f.meta.gameVersion,`${category}.json`));assert.equal(file.schemaVersion,'1.2.0');
  const merged=read(join(f.base,'verify/out/data',f.meta.gameVersion,`${category}.json`));assert.deepEqual(file,merged);
  if(category==='skills') {
   assert.equal(file.items.length,2);const item=file.items.find(x=>x.id===retained.id);
   assert.ok(!Object.hasOwn(item,'retainedFrom'));assert.equal(item.explanation.effect,retained.lockedEffect);
   assert.equal(item.explanation.effectOrigin,'official');
  }
  if(whole&&category==='terms')assert.deepEqual(file.items,f.previous.terms.items.map(x=>({...x,retainedFrom:f.old})));
 }
});

// Scenario: every extract fails structurally, leaving no usable candidates.
// Purpose: the release target survives verify's report and reaches write even for an entirely retained release.
test('InterT92_1.1 all-category fallback publishes the extract target 1.2',async t=>{
 const root=mkdtempSync(join(tmpdir(),'schema-align-all-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const f=await schemaAlignFixture(root,{all:true});const r=f.verify();assert.equal(r.status,0,r.stdout+r.stderr);
 f.success('write',f.writeArgs);f.success('validate',['--root',root]);
 for(const category of CATEGORIES)assert.equal(read(join(root,'data',f.meta.gameVersion,`${category}.json`)).schemaVersion,'1.2.0');
});

// Scenario: same-version write stops after a category with an immutable retained predecessor.
// Purpose: resume and completed replay are byte-identical and never promote retained items a second time.
test('InterT93_1.1 same-version baseline survives interrupted 1.2 write and replay',async t=>{
 const root=mkdtempSync(join(tmpdir(),'schema-align-replay-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const f=await schemaAlignFixture(root,{whole:true,sameVersion:true}),baseline=CATEGORIES.map(c=>readFileSync(join(f.baseline,`${c}.json`)));
 const r=f.verify();assert.equal(r.status,0,r.stdout+r.stderr);
 await assert.rejects(runWrite({...f.writeOptions,afterCategory(category){if(category==='skills')throw Error('interrupt');}}),/interrupt/);
 const first=readFileSync(join(root,'data',f.meta.gameVersion,'skills.json'));
 await runWrite(f.writeOptions);assert.deepEqual(readFileSync(join(root,'data',f.meta.gameVersion,'skills.json')),first);
 const bytes=CATEGORIES.map(c=>readFileSync(join(root,'data',f.meta.gameVersion,`${c}.json`))),stateBytes=readFileSync(f.state);
 await runWrite(f.writeOptions);assert.deepEqual(readFileSync(f.state),stateBytes);
 for(const [i,c] of CATEGORIES.entries()) {
  assert.deepEqual(readFileSync(join(root,'data',f.meta.gameVersion,`${c}.json`)),bytes[i]);
  assert.deepEqual(readFileSync(join(f.baseline,`${c}.json`)),baseline[i]);
 }
 f.success('validate',['--root',root]);
});

// Scenario: baseline schema is downgraded, unknown, future, or lacks mandatory promoted fields.
// Purpose: verify and write independently fail closed for item and whole-category retention without publishing.
test('InterT94_verify and write reject invalid cross-schema retention in both paths',async t=>{
 for(const whole of [false,true])for(const mode of ['downgrade','unknown','future','invalid-shape']) {
  const root=mkdtempSync(join(tmpdir(),'schema-align-reject-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
  const f=await schemaAlignFixture(root,{whole,target:mode==='downgrade'?'1.1.0':'1.2.0'});
  const good=f.verify();assert.equal(good.status,0,good.stdout+good.stderr);
  const category=whole?'terms':'skills',path=join(f.baseline,`${category}.json`),oldFile=read(path);
  oldFile.schemaVersion=mode==='downgrade'?'1.2.0':mode==='unknown'?'unknown':mode==='future'?'1.3.0':'1.0.0';
  if(mode==='invalid-shape') {
   // A 1.0 weapon is valid in its own schema but cannot acquire required curves by relabeling.
   const wp=join(f.baseline,'weapons.json'),file=read(wp);file.schemaVersion='1.0.0';delete file.items[0].values.curves;delete file.items[0].values.attackCombos;
   write(wp,file);
   // Change the verified decision too, solely to exercise write's independent final-schema check.
   const reportPath=join(f.base,'verify/report.json'),report=read(reportPath);
   if(whole) {
    const extractPath=join(f.base,'extract/weapons.json'),extract=read(extractPath);extract.status='structure-mismatch';extract.reason='fixture';write(extractPath,extract);
    report.categories.weapons.status='kept-previous';report.categories.weapons.reason='fixture';
    const state=read(f.state);state.run.categories.weapons={status:'kept-previous',reason:'fixture'};write(f.state,state);
   } else {
    report.items.find(row=>row.category==='weapons').decision='kept-previous';
    const candidatePath=join(f.base,'candidate/weapons.json'),candidate=read(candidatePath);candidate.items[0].explanation.effect='';write(candidatePath,candidate);
    report.categories.weapons.candidateSha256=createHash('sha256').update(readFileSync(candidatePath)).digest('hex');
   }
   write(reportPath,report);
   // Exercise the independent schema guard with a legacy state lacking the report binding.
   const legacy=read(f.state);delete legacy.run.reportIntegrity;write(f.state,legacy);
  } else write(path,oldFile);
  const before=readFileSync(join(root,'data/current.json'));
  await assert.rejects(runWrite(f.writeOptions),/schemaVersion|驗證失敗/);
  assert.deepEqual(readFileSync(join(root,'data/current.json')),before);
  const r=mode==='invalid-shape'&&!whole?f.cli('verify',[...f.verifyArgs,'--candidate-dir',join(f.base,'candidate')]):f.verify();
  assert.equal(r.status,3,r.stdout+r.stderr);
  assert.equal(read(join(f.base,'verify/report.json')).result,'halted');
 }
});

// Scenario: a candidate's release target is unknown or future, including a whole-category fallback.
// Purpose: both verification and publication reject unsupported targets before writing any data.
test('InterT95_verify and write reject unknown and future release targets',async t=>{
 for(const whole of [false,true])for(const target of ['unknown','1.3.0']) {
  const root=mkdtempSync(join(tmpdir(),'schema-align-target-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
  const f=await schemaAlignFixture(root,{whole}),r=f.verify();assert.equal(r.status,0,r.stdout+r.stderr);
  const candidatePath=join(f.base,'candidate/skills.json'),candidate=read(candidatePath);candidate.schemaVersion=target;write(candidatePath,candidate);
  const reportPath=join(f.base,'verify/report.json'),report=read(reportPath);report.targetSchemaVersion=target;
  report.categories.skills.candidateSha256=createHash('sha256').update(readFileSync(candidatePath)).digest('hex');write(reportPath,report);
  const before=readFileSync(join(root,'data/current.json')),stateBytes=readFileSync(f.state);
  await assert.rejects(runWrite(f.writeOptions),/schemaVersion/);assert.deepEqual(readFileSync(f.state),stateBytes);
  assert.deepEqual(readFileSync(join(root,'data/current.json')),before);
  // Default verify rebuilds candidates from extract, so the same unsupported target must reach that boundary too.
  const extractPath=join(f.base,'extract/skills.json'),extract=read(extractPath);extract.schemaVersion=target;write(extractPath,extract);
  const verified=f.verify();assert.equal(verified.status,3,verified.stdout+verified.stderr);
  assert.equal(read(join(f.base,'verify/report.json')).result,'halted');
 }
});

// Scenario: this run has no local terms extract, but cloud still contains an older-schema file.
// Purpose: an explicitly missing input must not override the release target used for whole-category retention.
test('InterT96_missing extract ignores stale cloud schema when retaining a 1.1 category',async t=>{
 const root=mkdtempSync(join(tmpdir(),'schema-align-missing-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const f=await schemaAlignFixture(root,{whole:true});
 const diffPath=join(f.base,'diff/diff.json'),diff=read(diffPath);diff.categories.terms.status='missing';diff.categories.terms.reason=null;write(diffPath,diff);
 write(join(f.base,'extract/terms.json'),{...f.previous.terms,status:'ok'});
 const r=f.verify();assert.equal(r.status,0,r.stdout+r.stderr);
 const report=read(join(f.base,'verify/report.json'));assert.equal(report.targetSchemaVersion,'1.2.0');assert.equal(report.categories.terms.status,'kept-previous');
 f.success('write',f.writeArgs);f.success('validate',['--root',root]);
 const final=read(join(root,'data',f.meta.gameVersion,'terms.json'));assert.equal(final.schemaVersion,'1.2.0');
 assert.deepEqual(final.items,f.previous.terms.items.map(item=>({...item,retainedFrom:f.old})));
});

// Scenario: all current extracts are missing and every cloud file is an older leftover.
// Purpose: even an entirely retained release defaults to the current target rather than the predecessor's schema.
test('InterT97_all missing extracts retain 1.1 data under the current 1.2 target',async t=>{
 const root=mkdtempSync(join(tmpdir(),'schema-align-all-missing-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const f=await schemaAlignFixture(root,{all:true});
 const diffPath=join(f.base,'diff/diff.json'),diff=read(diffPath);
 for(const category of CATEGORIES) {
  diff.categories[category].status='missing';diff.categories[category].reason=null;
  write(join(f.base,'extract',`${category}.json`),{...f.previous[category],status:'ok'});
 }
 write(diffPath,diff);
 const r=f.verify();assert.equal(r.status,0,r.stdout+r.stderr);
 assert.equal(read(join(f.base,'verify/report.json')).targetSchemaVersion,'1.2.0');
 f.success('write',f.writeArgs);f.success('validate',['--root',root]);
 for(const category of CATEGORIES)assert.equal(read(join(root,'data',f.meta.gameVersion,`${category}.json`)).schemaVersion,'1.2.0');
});
