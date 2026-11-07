// Manual, pinned-source acceptance. Run from the repository root; all output is
// isolated under the spec28 work root, and the repository state is hash-checked.
import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import {readFileSync,mkdirSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import {buildSkills,SCRIPT_VERSION} from '../../pipeline/extract-skills.mjs';
import {createSourceReader} from '../../pipeline/lib/source-reader.mjs';
import {loadTextIndex} from '../../pipeline/lib/official-text.mjs';
import {writeExtract,validateExtractItems} from '../../pipeline/lib/extract-output.mjs';
import {expandOfficialEffect} from '../../pipeline/lib/official-effect.mjs';
import {checkText} from '../../pipeline/lib/verify/text.mjs';
import {checkValues} from '../../pipeline/lib/verify/values.mjs';
import {checkDataFile} from '../../pipeline/lib/data-files.mjs';
import {stringifyCanonical} from '../../pipeline/lib/canonical-json.mjs';
import {contentHash} from '../../pipeline/lib/diff-core.mjs';
import {createBrittlenessSupplement,BRITTLENESS_SOURCE_PINS,BRITTLENESS_DIRECTORY_PINS} from '../../pipeline/lib/skill-brittleness.mjs';
import {skillStructure} from '../../pipeline/lib/skill-structure.mjs';

const repo=resolve('.'),root='F:/GitFile/Persion - Games/DarkTide-Pipeline-Work/cryptic-brittleness';
const source='F:/GitFile/Persion - Games/Darktide-Source-Code',commit='e46b8926cfa3fa35503e4b80b15aab7a804314e4';
const hash=s=>createHash('sha256').update(s).digest('hex');
const stateBefore=hash(readFileSync('pipeline/state.json'));
const baselineSource=execFileSync('git',['show','b133bd0:pipeline/extract-skills.mjs'],{encoding:'utf8'}).replaceAll("'./lib/","'"+pathToFileURL(repo+'/pipeline/lib/').href);
const baselineBuild=(await import('data:text/javascript;base64,'+Buffer.from(baselineSource).toString('base64'))).buildSkills;
const reader=createSourceReader({repo:source,commit}),text=loadTextIndex(root+'/extract/text.json');
const textMeta=JSON.parse(readFileSync(root+'/extract/text.json'));
assert.equal(textMeta.privateRefCommit,'dd430f524dfd089e013f87cbc20be754af6979d4');
assert.equal(text.batch,'26101089');
const envelope={gameVersion:'1.13.4',sourceCommit:commit,textBatch:text.batch,scriptVersion:SCRIPT_VERSION};
const baseline=baselineBuild({reader,text,envelope});
assert.equal(baseline.items.length,618);
await writeExtract({workDir:root+'/baseline',category:'skills',envelope,...baseline});
console.log('Baseline extracted: 618');
const runs=[];
for(const n of [1,2]) {
  const data=buildSkills({reader,text,envelope});
  await writeExtract({workDir:root+'/run'+n,category:'skills',envelope,...data});
  runs.push(data);console.log('Supplemented extraction '+n+': '+data.items.length);
}
assert.deepEqual(readFileSync(root+'/run1/extract/skills.json'),readFileSync(root+'/run2/extract/skills.json'));
const actual=runs[0],keys=['cryptic_arc_grenades_brittleness','cryptic_electrocution_applies_brittleness'];
assert.deepEqual(actual.effectFormats,baseline.effectFormats);
assert.deepEqual(actual.problems,baseline.problems);
assert.deepEqual(actual.excluded,baseline.excluded);
const changed=[],unchanged=[],checks=[];
for(const item of actual.items) {
  const before=baseline.items.find(i=>i.id===item.id);
  if(stringifyCanonical(before)===stringifyCanonical(item))unchanged.push(item.id);else changed.push(item.id);
  if(!keys.includes(item.key)) {
    assert.equal(stringifyCanonical(before),stringifyCanonical(item),item.id);
    assert.equal(contentHash('skills',before),contentHash('skills',item));continue;
  }
  assert.deepEqual(item.values.params.brittleness_per_stack,{value:0.025,unit:'ratio'});
  const without=structuredClone(item.values);delete without.params.brittleness_per_stack;
  assert.deepEqual(without,before.values);
  assert.notEqual(contentHash('skills',before),contentHash('skills',item));
  assert.ok(item.source.files.some(s=>s.path==='scripts/settings/buff/weapon_buff_templates.lua'&&s.line===374));
  const effect=expandOfficialEffect(item,text,actual.effectFormats[item.id]);assert.equal(effect.status,'complete');
  const candidate={...structuredClone(item),explanation:{effect:effect.text,effectOrigin:'official',conditions:'',calculation:'',notes:'',extra:''},errata:[]};
  const ct=checkText(candidate,item,[],[],new Map()),cv=checkValues(candidate,item,undefined,[]);
  assert.deepEqual(ct,{failures:[],notes:[]});assert.deepEqual(cv,[]);
  const schema=checkDataFile('skills',stringifyCanonical({schemaVersion:'1.1.0',category:'skills',gameVersion:envelope.gameVersion,sourceCommit:commit,textBatch:text.batch,items:[candidate]})).errors;
  assert.deepEqual(schema,[]);
  const original={...structuredClone(candidate),values:before.values};
  const missing=checkText(original,before,[],[],new Map());assert.ok(missing.failures.some(f=>f.code==='T_NUMBER'));
  const wrong=structuredClone(candidate);wrong.values.params.brittleness_per_stack.value=0.02;
  const wrongCheck=checkText(wrong,wrong,[],[],new Map());assert.ok(wrongCheck.failures.some(f=>f.code==='T_NUMBER'));
  const candidateOnly=checkValues(candidate,before,undefined,[]);assert.ok(candidateOnly.some(f=>f.code==='V_FIELD_CHANGED'));
  checks.push({id:item.id,params:item.values.params,sourceFiles:item.source.files,effect,checkText:ct,checkValues:cv,schema,missingValue:missing,wrongRatio:wrongCheck,candidateOnly,beforeContentHash:contentHash('skills',before),afterContentHash:contentHash('skills',item)});
}
assert.equal(unchanged.length,616);assert.equal(changed.length,2);
assert.deepEqual(actual.problems.filter(p=>keys.some(k=>p.id?.endsWith(':'+k))),[]);
assert.deepEqual(validateExtractItems('skills',[...actual.items].sort((a,b)=>a.id<b.id?-1:a.id>b.id?1:0),envelope),[]);
// Confirm the manifest was generated from the proof's actual reads rather than
// from a hand-maintained dependency guess. Preflight reads are excluded here.
const audited=createBrittlenessSupplement(reader);
const {r:definitionResolver,definitions}=skillStructure(reader);
for(const item of actual.items.filter(i=>keys.includes(i.key))) {
  const params=structuredClone(item.values.params),problems=[];delete params.brittleness_per_stack;
  audited(item.id,params,problems,[],definitionResolver.resolve(definitions.get('cryptic').get(item.key)));
  assert.deepEqual(problems,[]);assert.deepEqual(params,item.values.params);
}
const proofFilesRead=audited.filesRead();
assert.deepEqual(proofFilesRead,Object.keys(BRITTLENESS_SOURCE_PINS).sort());
assert.deepEqual(audited.directoriesRead(),BRITTLENESS_DIRECTORY_PINS);
assert.equal(hash(readFileSync('pipeline/state.json')),stateBefore);
const report={sourceCommit:commit,privateCommit:textMeta.privateRefCommit,batch:text.batch,baseline:'b133bd0',items:actual.items.length,changed,unchanged:unchanged.length,unchangedIds:unchanged,repeatBytesIdentical:true,extractSha256:hash(readFileSync(root+'/run1/extract/skills.json')),repositoryStateSha256:stateBefore,proofFilesRead,sourceFingerprints:BRITTLENESS_SOURCE_PINS,directoryFingerprints:BRITTLENESS_DIRECTORY_PINS,checks};
mkdirSync(root,{recursive:true});writeFileSync(root+'/acceptance.json',JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({...report,unchangedIds:undefined,proofFilesRead:proofFilesRead.length,sourceFingerprints:undefined,checks:checks.map(c=>({id:c.id,params:c.params,effect:c.effect,checkText:c.checkText,checkValues:c.checkValues,sourceFiles:c.sourceFiles.filter(s=>/weapon_buff_templates|arc_grenade_chain_lightning|cryptic_buff_templates|buff_templates\.lua$/.test(s.path))}))}));
