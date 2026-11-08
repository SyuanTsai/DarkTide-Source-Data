import { test } from 'node:test';
import assert from 'node:assert/strict';
import { contentHash, diffCategory } from '../../pipeline/lib/diff-core.mjs';
import { readFileSync } from 'node:fs';
import { checkDataFile } from '../../pipeline/lib/data-files.mjs';
import { stringifyCanonical } from '../../pipeline/lib/canonical-json.mjs';
import { loadSchemas } from '../../pipeline/lib/json-schema.mjs';
import { checkNumbers } from '../../pipeline/lib/verify/numbers.mjs';
import { checkText, checkErrata } from '../../pipeline/lib/verify/text.mjs';
import { checkCitations } from '../../pipeline/lib/verify/citations.mjs';
import { composeCandidate } from '../../pipeline/lib/candidate.mjs';
import { inputHashFor } from '../../pipeline/lib/diff-core.mjs';
import { effectTaskFor } from '../../pipeline/lib/official-effect.mjs';
import { verifyMerged } from '../../pipeline/lib/verify/output.mjs';

const refId = 'scripts/example.lua#templates.example';
const location = { path: 'scripts/example.lua', line: 7 };
const sample = (category = 'skills') => {
  const file = JSON.parse(readFileSync(`pipeline/schema/examples/1.1.0-example/${category}.json`, 'utf8'));
  file.schemaVersion = '1.2.0';
  const item = file.items[0]; file.items = [item]; item.errata = [];
  if (['skills', 'blessings'].includes(category)) {
    item.values.mechanics = { 'buff.duration': { value: 7, unit: 'seconds' } };
    item.source.valueSources = { '/mechanics/buff.duration': [location] };
    item.source.codeRefs = { [refId]: { path: location.path, symbol: 'templates.example', sha256: 'a'.repeat(64) } };
    item.citations = [{ section: 'notes', text: '持續7秒', codeRefs: [refId], valueRefs: ['/mechanics/buff.duration'] }];
    item.explanation.notes = '持續7秒';
  }
  return file;
};
const check = file => checkDataFile(file.category, stringifyCanonical(file));

// Scenario: supported envelopes carry the new fields. Purpose: accept the complete C0–C4 contract.
test('UnitT40_schema12 accepts mechanics sources codeRefs citations in both categories', () => {
  for (const category of ['skills', 'blessings']) assert.deepEqual(check(sample(category)).errors, []);
});

// Scenario: mutate one valid field at a time. Purpose: reject only the named contract violation.
for (const [name, mutate] of [
  ['C0 unsupported version', f => { f.schemaVersion = '1.3.0'; }],
  ['C0 old mechanics', f => { f.schemaVersion = '1.1.0'; }],
  ['C0 old valueSources', f => { f.schemaVersion = '1.1.0'; delete f.items[0].values.mechanics; delete f.items[0].citations; delete f.items[0].source.codeRefs; f.items[0].source.valueSources = { '/params': [location] }; }],
  ['C0 old codeRefs', f => { f.schemaVersion = '1.0.0'; delete f.items[0].citations; delete f.items[0].values.mechanics; delete f.items[0].source.valueSources; delete f.items[0].explanation.effectOrigin; }],
  ['C0 old citations', f => { f.schemaVersion = '1.1.0'; }],
  ['C1 key pattern', f => { const x=f.items[0]; x.values.mechanics = { 'Bad': { value: 7 } }; x.source.valueSources = { '/mechanics/Bad': [location] }; }],
  ['C1 null requires unknown', f => { f.items[0].values.mechanics['buff.duration'].value=null; }],
  ['C1 param rejects extra', f => { f.items[0].values.mechanics['buff.duration'].extra=true; }],
  ['C2 mechanics requires source', f => { delete f.items[0].source.valueSources; f.items[0].citations[0].valueRefs=[]; }],
  ['C2 pointer must resolve', f => { f.items[0].source.valueSources['/missing']=[location]; }],
  ['C2 pointer syntax', f => { f.items[0].source.valueSources['bad']=[location]; }],
  ['C2 nonempty locations', f => { f.items[0].source.valueSources['/params']=[]; }],
  ['C2 line positive', f => { f.items[0].source.valueSources['/params']=[{...location,line:0}]; }],
  ['C2 location rejects extra', f => { f.items[0].source.valueSources['/params']=[{...location,extra:true}]; }],
  ['C3 path equality', f => { f.items[0].source.codeRefs[refId].path='scripts/other.lua'; }],
  ['C3 symbol equality', f => { f.items[0].source.codeRefs[refId].symbol='other'; }],
  ['C3 sha256 lowercase', f => { f.items[0].source.codeRefs[refId].sha256='A'.repeat(64); }],
  ['C3 no line', f => { f.items[0].source.codeRefs[refId].line=1; }],
  ['C3 ref id pattern', f => { f.items[0].source.codeRefs['invalid']={...f.items[0].source.codeRefs[refId]}; }],
  ['C4 section enum', f => { f.items[0].citations[0].section='invalid'; }],
  ['C4 text nonempty', f => { f.items[0].citations[0].text=''; }],
  ['C4 refs nonempty', f => { f.items[0].citations[0].codeRefs=[]; f.items[0].citations[0].valueRefs=[]; }],
  ['C4 refs unique', f => { f.items[0].citations[0].codeRefs=[refId,refId]; }],
  ['C4 no extra', f => { f.items[0].citations[0].extra=true; }],
]) test(`UnitT41_${name}`, () => {
  const file=sample(); assert.equal(check(file).valid,true); mutate(file); assert.equal(check(file).valid,false,name);
});

// Scenario: mechanics supply numbers and must be explained. Purpose: include both mechanics levels in coverage.
test('UnitT50_mechanics numbers and tier coverage', () => {
  for (const values of [{mechanics:{x:{value:7}}},{tiers:[{mechanics:{x:{value:7}}}]}]) {
    assert.deepEqual(checkNumbers(values,'7').failures,[]);
    assert.ok(checkNumbers(values,'').failures.some(f=>f.code==='T_COVERAGE'));
  }
  const values={mechanics:{x:{value:[7,11]}}};
  assert.deepEqual(checkNumbers(values,'7和11').failures,[]);
  assert.ok(checkNumbers(values,'7').failures.some(f=>f.code==='T_COVERAGE'));
});

// Scenario: source metadata is outside values. Purpose: never derive explanation numbers from locations or hashes.
test('UnitT51_source metadata cannot supply numbers', () => {
  const file=sample(),item=file.items[0]; item.values.params={};item.values.mechanics={};item.official={en:null,zh:null};item.explanation={effect:'數值987654',conditions:'',calculation:'',notes:'',extra:''}; item.errata=[]; delete item.citations;
  item.source.files[0].line=987654; item.source.valueSources={'/params':[{...location,line:987654}]}; item.source.codeRefs[refId].sha256='987654'.padEnd(64,'a');
  assert.deepEqual(check(file).errors,[]);
  assert.ok(checkText(item,item,[],[],new Map()).failures.some(f=>f.code==='T_NUMBER'));
});

// Scenario: scalar/array/null mechanics follow param exactly. Purpose: preserve the existing param type contract.
test('UnitT42_C1 mechanics param variants key depth and category restrictions', () => {
  for (const value of [1,'text',true,[1,'text',false,null],null]) {
    const file=sample(), param={value,...(value===null?{unknown:'DYNAMIC_VALUE'}:{})};
    file.items[0].values.mechanics['buff.duration']=param; assert.deepEqual(check(file).errors,[]);
    param.value={invalid:true}; assert.equal(check(file).valid,false);
  }
  for (const key of ['a','a.b.c.d.e.f.g.h']) {const f=sample(),x=f.items[0];x.values.mechanics={[key]:{value:1}};x.source.valueSources={[`/mechanics/${key}`]:[location]};assert.equal(check(f).valid,true);}
  for (const key of ['a.b.c.d.e.f.g.h.i','a..b','a-b']) {const f=sample(),x=f.items[0];x.values.mechanics={[key]:{value:1}};x.source.valueSources={[`/mechanics/${key}`]:[location]};assert.equal(check(f).valid,false);}
  for (const category of ['weapons','terms']) for(const field of ['mechanics','citations']) {
    const f=sample(category);assert.deepEqual(check(f).errors,[]);
    if(field==='mechanics') f.items[0].values.mechanics={x:{value:1}};else f.items[0].citations=[];
    assert.equal(check(f).valid,false);
  }
});

// Scenario: tier mechanics need their own source and pointers decode escaped tokens. Purpose: validate exact pointer targets.
test('UnitT43_C2 tier mechanics escaped pointers and canonical array indexes', () => {
  const f=sample('blessings'),x=f.items[0];x.values.tiers[0].mechanics={x:{value:7}};
  x.source.valueSources['/tiers/0/mechanics/x']=[location];assert.deepEqual(check(f).errors,[]);
  delete x.source.valueSources['/tiers/0/mechanics/x'];assert.equal(check(f).valid,false);
  x.source.valueSources['/tiers/0/mechanics/x']=[location];
  x.source.valueSources['/tiers/0']=[location];assert.equal(check(f).valid,true);
  for(const pointer of ['/tiers/01','/tiers/length','/tiers/99','/params/~2']){x.source.valueSources[pointer]=[location];assert.equal(check(f).valid,false);delete x.source.valueSources[pointer];}
});

// Scenario: each source/citation member is changed independently. Purpose: enforce the complete closed-object schemas.
for(const [name,mutate] of [
 ['C1 mechanics object',x=>{x.values.mechanics=[];x.source.valueSources={'/params':[location]};x.citations[0].valueRefs=[];}],
 ['C1 value required',x=>{delete x.values.mechanics['buff.duration'].value;}],
 ['C1 unknown enum',x=>{x.values.mechanics['buff.duration']={value:null,unknown:'INVALID'};}],
 ['C1 unknown only null',x=>{x.values.mechanics['buff.duration'].unknown='DYNAMIC_VALUE';}],
 ['C1 unit pattern',x=>{x.values.mechanics['buff.duration'].unit='bad unit';}],
 ['C2 valueSources object',x=>{x.source.valueSources=[];x.values.mechanics={};x.citations[0].valueRefs=[];}],
 ['C2 locations array',x=>{x.source.valueSources['/params']=location;}],
 ['C2 path required',x=>{x.source.valueSources['/params']=[{line:1}];}],
 ['C2 path nonempty',x=>{x.source.valueSources['/params']=[{path:'',line:1}];}],
 ['C2 line required',x=>{x.source.valueSources['/params']=[{path:'x.lua'}];}],
 ['C2 line integer',x=>{x.source.valueSources['/params']=[{path:'x.lua',line:1.5}];}],
 ['C3 codeRefs object',x=>{x.source.codeRefs=[];x.citations[0].codeRefs=[];}],
 ['C3 path required',x=>{delete x.source.codeRefs[refId].path;}],
 ['C3 symbol required',x=>{delete x.source.codeRefs[refId].symbol;}],
 ['C3 sha256 required',x=>{delete x.source.codeRefs[refId].sha256;}],
 ['C3 sha256 length',x=>{x.source.codeRefs[refId].sha256='a'.repeat(63);}],
 ['C4 citations array',x=>{x.citations={};}],
 ['C4 section required',x=>{delete x.citations[0].section;}],
 ['C4 text required',x=>{delete x.citations[0].text;}],
 ['C4 codeRefs required',x=>{delete x.citations[0].codeRefs;}],
 ['C4 valueRefs required',x=>{delete x.citations[0].valueRefs;}],
 ['C4 codeRefs array',x=>{x.citations[0].codeRefs=refId;}],
 ['C4 valueRefs array',x=>{x.citations[0].valueRefs='/params';}],
 ['C4 codeRefs syntax',x=>{x.citations[0].codeRefs=['invalid'];}],
 ['C4 valueRefs syntax',x=>{x.citations[0].valueRefs=['invalid'];}],
 ['C4 valueRefs unique',x=>{x.citations[0].valueRefs=['/params','/params'];}],
])test(`UnitT44_${name}`,()=>{const f=sample();assert.deepEqual(check(f).errors,[]);mutate(f.items[0]);assert.equal(check(f).valid,false,name);});

// Scenario: either reference kind alone is sufficient and new fields remain optional. Purpose: retain the exact C1–C4 optionality.
test('UnitT45_C0 C4 versions optional fields and either citation reference kind',()=>{
 for(const version of ['1.0.0','1.1.0'])for(const field of ['mechanics','tier mechanics','valueSources','codeRefs','citations']){
  const f=sample('blessings'),x=f.items[0];delete x.citations;delete x.values.mechanics;delete x.source.valueSources;delete x.source.codeRefs;
  f.schemaVersion=version;delete x.explanation.effectOrigin;assert.equal(check(f).valid,true);
  if(field==='mechanics')x.values.mechanics={};
  if(field==='tier mechanics')x.values.tiers[0].mechanics={};
  if(field==='valueSources')x.source.valueSources={};
  if(field==='codeRefs')x.source.codeRefs={};
  if(field==='citations')x.citations=[];
  assert.equal(check(f).valid,false,`${version}/${field}`);
 }
 for(const kind of ['codeRefs','valueRefs']){const f=sample(),c=f.items[0].citations[0];c[kind]=[];assert.equal(check(f).valid,true);assert.deepEqual(checkCitations(f.items[0]),[]);}
 const f=sample();delete f.items[0].citations;delete f.items[0].source.valueSources;delete f.items[0].source.codeRefs;delete f.items[0].values.mechanics;assert.equal(check(f).valid,true);
});

const erratum=()=>({locale:'en',official:'5',corrected:'7',valueRefs:['/mechanics/buff.duration'],sources:[location],anchor:{field:'displayParameter',locale:'en',text:'5',occurrence:1,param:'duration'}});
const errataFile=(category='skills')=>{const f=sample(category),x=f.items[0];x.values.params.duration={value:5};x.errata=[erratum()];if(category==='blessings'){x.values.tiers[0].params.duration={value:5};x.errata[0].anchor.tier=x.values.tiers[0].tier;}return f;};
// Scenario: optional anchors target display parameters, names or official strings. Purpose: accept every C5 anchor form in all versions.
test('UnitT60_C5 new errata shape all versions and anchor forms', () => {
  for(const category of ['skills','blessings']) assert.deepEqual(check(errataFile(category)).errors,[]);
  for(const version of ['1.0.0','1.1.0','1.2.0']) for(const field of ['official','name',undefined]) {
    const f=errataFile();f.schemaVersion=version;const x=f.items[0];delete x.values.mechanics;delete x.source.valueSources;delete x.source.codeRefs;delete x.citations;delete x.explanation.effectOrigin;
    x.official.en='5';x.name.en='5';x.errata[0].valueRefs=['/params/duration'];
    if(field)x.errata[0].anchor={field,locale:'en',text:'5',occurrence:1};else delete x.errata[0].anchor;
    assert.deepEqual(check(f).errors,[],`${version}/${field}`);
    x.errata[0].valueRef='/params/duration';assert.equal(check(f).valid,false);delete x.errata[0].valueRef;
  }
});

// Scenario: each invalid erratum differs from a valid display anchor by one rule. Purpose: enforce C5 without masking errors.
for(const [name,mutate,category='skills'] of [
 ['singular valueRef',x=>{x.errata[0].valueRef='/params/duration';}],
 ['valueRefs required',x=>{delete x.errata[0].valueRefs;}],
 ['valueRefs nonempty',x=>{x.errata[0].valueRefs=[];}],
 ['valueRefs resolves',x=>{x.errata[0].valueRefs=['/missing'];}],
 ['sources required',x=>{delete x.errata[0].sources;}],
 ['sources nonempty',x=>{x.errata[0].sources=[];}],
 ['sources line positive',x=>{x.errata[0].sources=[{...location,line:0}];}],
 ['sources no extra',x=>{x.errata[0].sources=[{...location,extra:true}];}],
 ['sources path nonempty',x=>{x.errata[0].sources=[{...location,path:''}];}],
 ['sources line integer',x=>{x.errata[0].sources=[{...location,line:1.5}];}],
 ['official string',x=>{x.errata[0].official=5;}],
 ['corrected string',x=>{x.errata[0].corrected=7;}],
 ['locale enum',x=>{x.errata[0].locale='fr';}],
 ['errata no extra',x=>{x.errata[0].extra=true;}],
 ['locale matches',x=>{x.errata[0].anchor.locale='zh';}],
 ['display param required',x=>{delete x.errata[0].anchor.param;}],
 ['display param resolves',x=>{x.errata[0].anchor.param='missing';}],
 ['display param pattern',x=>{x.errata[0].anchor.param='Bad';}],
 ['blessing tier required',x=>{delete x.errata[0].anchor.tier;},'blessings'],
 ['blessing tier range',x=>{x.errata[0].anchor.tier=5;},'blessings'],
 ['display tier resolves',x=>{x.errata[0].anchor.tier=4;},'blessings'],
 ['anchor occurrence positive',x=>{x.errata[0].anchor.occurrence=0;}],
 ['anchor occurrence exists',x=>{x.errata[0].anchor.occurrence=2;}],
 ['anchor text nonempty',x=>{x.errata[0].anchor.text='';}],
 ['anchor field enum',x=>{x.errata[0].anchor.field='invalid';delete x.errata[0].anchor.param;}],
 ['anchor field required',x=>{delete x.errata[0].anchor.field;}],
 ['anchor locale required',x=>{delete x.errata[0].anchor.locale;}],
 ['anchor text required',x=>{delete x.errata[0].anchor.text;}],
 ['anchor occurrence required',x=>{delete x.errata[0].anchor.occurrence;}],
 ['anchor item exists',x=>{x.errata[0].anchor.itemId='darktide:skill:missing';}],
 ['anchor item pattern',x=>{x.errata[0].anchor.itemId='bad';}],
 ['anchor no extra',x=>{x.errata[0].anchor.extra=true;}],
])test(`UnitT61_C5 ${name}`,()=>{const f=errataFile(category);assert.deepEqual(check(f).errors,[]);mutate(f.items[0]);assert.equal(check(f).valid,false,name);});

// Scenario: name/official anchors cannot carry display-only fields. Purpose: reject param and tier independently.
test('UnitT62_C5 non-display anchors forbid param and tier',()=>{
 for(const field of ['name','official'])for(const extra of ['param','tier']){const f=errataFile(),x=f.items[0];x[field].en='5';x.errata[0].anchor={field,locale:'en',text:'5',occurrence:1};assert.equal(check(f).valid,true);x.errata[0].anchor[extra]=extra==='param'?'duration':1;assert.equal(check(f).valid,false);}
});

// Scenario: the anchor selects another category in the same version. Purpose: resolve valueRefs against the target item.
test('UnitT63_C5 cross item references resolve against target values',()=>{
 const f=errataFile(),target=sample('terms').items[0];target.name.en='5';target.values.params={other:{value:7}};
 f.items[0].errata[0].anchor={field:'name',locale:'en',text:'5',occurrence:1,itemId:target.id};f.items[0].errata[0].valueRefs=['/params/other'];
 assert.deepEqual(checkDataFile('skills',stringifyCanonical(f),[...f.items,target]).errors,[]);
 f.items[0].errata[0].valueRefs=['/params/duration'];assert.equal(checkDataFile('skills',stringifyCanonical(f),[...f.items,target]).valid,false);
});

// Scenario: an errata target falls back to a previous value at the same pointer.
// Purpose: recheck corrections against the final target and retain only the dependent item.
test('UnitT64_C5 cross item corrections are rechecked after target fallback',()=>{
 const owner=errataFile(),target=sample('terms');target.items[0].name.en='5';target.items[0].values.params.corrected={value:14};
 owner.gameVersion='1.2.0';target.gameVersion='1.2.0';
 owner.items[0].errata[0]={...erratum(),corrected:'14',valueRefs:['/params/corrected'],anchor:{field:'name',locale:'en',text:'5',occurrence:1,itemId:target.items[0].id}};
 const oldOwner=structuredClone(owner);oldOwner.items[0].errata=[];
 const oldTarget=structuredClone(target);oldTarget.items[0].values.params.corrected.value=7;
 for(const f of [oldOwner,oldTarget]){f.gameVersion='0.0.0';}
 const loaded={skills:{candidate:owner,previous:oldOwner},terms:{candidate:target,previous:oldTarget}};
 const rows=[{category:'skills',id:owner.items[0].id,decision:'pass',failures:[]},{category:'terms',id:target.items[0].id,decision:'kept-previous',failures:[]}];
 const result=verifyMerged(loaded,{skills:{status:'ok'},terms:{status:'ok'}},rows);
 assert.deepEqual(result.errors,[]);assert.equal(rows[0].decision,'kept-previous');assert.deepEqual(result.merged.skills.items[0].errata,[]);
});

// Scenario: a valid numeric correction is replaced by a nonnumeric official display or an invented corrected number.
// Purpose: allow errata only for actual official-number differences supported by all referenced values.
test('UnitT65_C5 corrections require official numbers and derivable corrected numbers',()=>{
 const f=errataFile(),x=f.items[0];assert.deepEqual(checkErrata(x),[]);
 x.errata[0].corrected='7和987654';assert.equal(checkErrata(x)[0]?.code,'T_ERRATA_INVALID');
 x.errata[0].corrected='7';x.official.en='效果';x.errata[0].official='效果';x.errata[0].anchor={field:'official',locale:'en',text:'效果',occurrence:1};
 assert.deepEqual(check(f).errors,[]);assert.equal(checkErrata(x)[0]?.code,'T_ERRATA_INVALID');
});

// Scenario: citations reference existing text, code and values. Purpose: enforce each C4 semantic rule independently.
for(const [name,mutate,code] of [
 ['text substring',x=>{x.citations[0].text='不存在';},'V_CITATION_TEXT'],
 ['code ref exists',x=>{x.citations[0].codeRefs=['scripts/missing.lua#x'];},'V_CITATION_CODE'],
 ['value ref exists',x=>{x.citations[0].valueRefs=['/missing'];},'V_CITATION_VALUE'],
 ['value ref source exists',x=>{x.citations[0].valueRefs=['/params'];},'V_CITATION_VALUE'],
])test(`UnitT70_C4 ${name}`,()=>{const x=sample().items[0];assert.deepEqual(checkCitations(x),[]);mutate(x);assert.equal(checkCitations(x)[0]?.code,code);});

// Scenario: AI-generated paragraphs require section coverage, except locked official effects. Purpose: enforce V-CITE only for new AI descriptions.
test('UnitT71_V-CITE every generated section official exception and unchanged exemption',()=>{
 for(const category of ['skills','blessings'])for(const section of ['effect','conditions','calculation','notes','extra']) {
  const x=sample(category).items[0];x.explanation={effect:'效果',effectOrigin:'official',conditions:'',calculation:'',notes:'',extra:'',[section]:'引用段落'};
  if(section==='effect')x.explanation.effectOrigin='unofficial-translation';
  x.citations=[{section,text:'引用',codeRefs:[refId],valueRefs:[]}];const opts={schemaVersion:'1.2.0',category,generated:true};
  assert.deepEqual(checkCitations(x,opts),[]);x.citations=[];assert.equal(checkCitations(x,opts)[0]?.code,'V-CITE');
  assert.deepEqual(checkCitations(x,{...opts,generated:false}),[]);
  if(section==='effect'){x.explanation.effectOrigin='official';assert.deepEqual(checkCitations(x,opts),[]);}
 }
});

// Scenario: schema-invalid AI sections reach item checks. Purpose: diagnose them without terminating the whole verify run.
test('UnitT72_citation validation tolerates malformed explanation types',()=>{
 const x=sample().items[0];x.explanation.notes={invalid:true};
 assert.doesNotThrow(()=>checkCitations(x,{schemaVersion:'1.2.0',category:'skills'}));
 const f=errataFile();f.items[0].id=1;assert.doesNotThrow(()=>check(f));assert.equal(check(f).valid,false);
});

// Scenario: AI output and candidate carry citations/errata without transforming their content. Purpose: preserve optional-key presence and current hashes.
test('UnitT80_AI schema and candidate preserve citations and new errata',()=>{
 const schemas=loadSchemas('pipeline/schema'),file=sample(),item=file.items[0];item.errata=[];
 const task=effectTaskFor(item),inputHash=inputHashFor('skills','added',item,undefined,task);
 const run={...file,items:{[item.id]:{category:'skills',change:'added',inputHash}}};
 const {effectOrigin,...explanation}=item.explanation;
 const output={schemaVersion:'1.0.0',id:item.id,inputHash,explanation,errata:[erratum()],citations:item.citations};
 assert.deepEqual(schemas.validate('ai-output.schema.json',output).errors,[]);
 const {explanation:ignored,errata:ignoredErrata,citations:ignoredCitations,...extracted}=item;
 const build=()=>composeCandidate({category:'skills',run,extract:{...file,status:'ok',items:[extracted]},outputs:{[item.id]:output}}).items[0];
 assert.deepEqual(build().citations,output.citations);assert.deepEqual(build().errata,output.errata);
 delete output.citations;assert.equal(Object.hasOwn(build(),'citations'),false);
 output.errata[0].valueRef='/params';assert.equal(schemas.validate('ai-output.schema.json',output).valid,false);
});

// Scenario: AI input carries typed provenance and previous citations/errata. Purpose: reject old-shape errata and malformed mechanics before description.
test('UnitT81_AI input validates mechanics provenance and previous errata',()=>{
 const schemas=loadSchemas('pipeline/schema'),f=sample(),{explanation,errata,citations,...item}=f.items[0];
 const input={schemaVersion:'1.0.0',dataSchemaVersion:'1.2.0',id:item.id,category:'skills',change:'changed',gameVersion:f.gameVersion,sourceCommit:f.sourceCommit,textBatch:f.textBatch,inputHash:'a'.repeat(64),item,previous:{gameVersion:'0.0.0',name:item.name,official:item.official,values:item.values,explanation,errata:[erratum()],citations},glossary:{source:null,matches:[]},outputFile:'ai/output/example.json'};
 const check=()=>schemas.validate('ai-input.schema.json',input);
 assert.deepEqual(check().errors,[]);
 input.previous.errata[0].valueRef='/params';assert.equal(check().valid,false);delete input.previous.errata[0].valueRef;
 input.item.values.mechanics['buff.duration']={value:{invalid:true}};assert.equal(check().valid,false);
 input.item.values.mechanics['buff.duration']={value:7};input.item.source.valueSources['/mechanics/buff.duration'][0].line=0;assert.equal(check().valid,false);
 input.item.source.valueSources['/mechanics/buff.duration'][0].line=7;input.dataSchemaVersion='1.1.0';assert.equal(check().valid,false);
});

// Scenario: a referenced definition changes while the item values stay the same.
// Purpose: invalidate only items that reference the changed code.
test('UnitT10_code reference fingerprints detect changed definitions', () => {
  const ref = 'scripts/example.lua#templates.example';
  const item = { id: 'a', values: {}, source: { codeRefs: { [ref]: { path: 'scripts/example.lua', symbol: 'templates.example', sha256: 'a'.repeat(64) } } } };
  const changed = structuredClone(item);
  changed.source.codeRefs[ref].sha256 = 'b'.repeat(64);
  const other = { id: 'b', values: {}, source: {} };
  assert.notEqual(contentHash('skills', item), contentHash('skills', changed));
  const diff = diffCategory('skills', [item, other], [changed, other]);
  assert.deepEqual(diff.changed, ['a']);
  assert.deepEqual(diff.unchanged, ['b']);
  const second='scripts/other.lua#other';
  item.source.codeRefs[second]={path:'scripts/other.lua',symbol:'other',sha256:'c'.repeat(64)};
  const reordered=structuredClone(item);reordered.source.codeRefs=Object.fromEntries(Object.entries(reordered.source.codeRefs).reverse());
  assert.equal(contentHash('skills',item),contentHash('skills',reordered));
});

// Scenario: only one item references the changed template value.
// Purpose: preserve precise change detection for mechanics.
test('UnitT20_template value changes affect only dependent items', () => {
  const a = { id: 'a', values: { mechanics: { 'buff.value': { value: 1 } } } };
  const b = { id: 'b', values: { mechanics: { 'other.value': { value: 2 } } } };
  const changed = structuredClone(a); changed.values.mechanics['buff.value'].value = 3;
  assert.notEqual(contentHash('skills', a), contentHash('skills', changed));
  const c={id:'c',values:{},source:{codeRefs:{[refId]:{path:location.path,symbol:'templates.example',sha256:'a'.repeat(64)}}}};
  const codeChanged=structuredClone(c);codeChanged.source.codeRefs[refId].sha256='b'.repeat(64);
  const diff=diffCategory('skills', [a, b, c], [changed, b, codeChanged]);
  assert.deepEqual(diff.changed, ['a','c']);assert.deepEqual(diff.unchanged,['b']);
});

// Scenario: source locations move while values and definition hashes are stable.
// Purpose: exclude location metadata from fingerprints.
test('UnitT30_line shifts do not change fingerprints', () => {
  const a = { id: 'a', values: { mechanics: { x: { value: 1 } } }, source: { files: [{ path: 'a.lua', line: 1 }], valueSources: { '/mechanics/x': [{ path: 'a.lua', line: 1 }] } } };
  const changed = structuredClone(a); changed.source.files[0].line++; changed.source.valueSources['/mechanics/x'][0].line++;
  assert.equal(contentHash('skills', a), contentHash('skills', changed));
  assert.deepEqual(diffCategory('skills', [a], [changed]).unchanged, ['a']);
});
