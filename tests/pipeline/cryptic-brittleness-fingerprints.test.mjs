import {test} from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {createSourceReader} from '../../pipeline/lib/source-reader.mjs';
import {resolveSourceRepo} from '../../pipeline/lib/inputs.mjs';
import {createBrittlenessSupplement,BRITTLENESS_SOURCE_PINS,BRITTLENESS_SOURCE_COMMIT,BRITTLENESS_DIRECTORY_PINS} from '../../pipeline/lib/skill-brittleness.mjs';
import {checkText} from '../../pipeline/lib/verify/text.mjs';
import {buildSkills} from '../../pipeline/extract-skills.mjs';
import {createSkillResolver} from '../../pipeline/lib/skill-lua.mjs';

const repo=resolveSourceRepo(),options={skip:!existsSync(repo)&&'需要本機固定 Source-Code；小型 fixture 測試仍照常執行'};
const ARC='scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua';
const PASSIVE='scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua';
const WEAPON='scripts/settings/buff/weapon_buff_templates.lua';
const REGISTRY='scripts/settings/buff/buff_templates.lua';
const TALENTS_DIR='scripts/settings/ability/archetype_talents/talents/';
const TALENTS=TALENTS_DIR+'cryptic_talents.lua';
const SETTINGS='scripts/settings/buff/buff_settings.lua';
const keys=[['cryptic_arc_grenades_brittleness',8],['cryptic_electrocution_applies_brittleness',3]];
let base,definitionResolver;
const source=()=>base??=createSourceReader({repo,commit:BRITTLENESS_SOURCE_COMMIT});
const definitionFor=key=>{
  definitionResolver??=createSkillResolver(source());
  return definitionResolver.get(definitionResolver.get(definitionResolver.returned(TALENTS),'talents'),key);
};

function numericCheck(id,stacks,params) {
  const text=`施加${stacks}層2.5%脆弱。`;
  const item={id,official:{en:text,zh:text},values:{params},explanation:{effect:text,conditions:'',calculation:'',notes:'',extra:''},errata:[]};
  return checkText(item,item,[],[],new Map());
}

// Scenario: the actual e46b892 sources match the complete reviewed manifest.
// Purpose: prove both parsed ratios/lines and compare the automatically observed read set to ALL pins.
test('InterT10_pinned sources supplement both ratios and account for every read',options,()=>{
  const supplement=createBrittlenessSupplement(source());
  for(const [key,stacks] of keys) {
    const id='darktide:skill:cryptic:'+key,params={stacks:{value:stacks}},problems=[],trace=[];
    supplement(id,params,problems,trace,definitionFor(key));
    assert.deepEqual(problems,[]);
    assert.deepEqual(params.brittleness_per_stack,{value:0.025,unit:'ratio'});
    assert.ok(trace.some(p=>p.path===WEAPON&&p.line===374));
    assert.deepEqual(numericCheck(id,stacks,params),{failures:[],notes:[]});
  }
  assert.deepEqual(supplement.filesRead(),Object.keys(BRITTLENESS_SOURCE_PINS).sort());
  assert.deepEqual(supplement.directoriesRead(),BRITTLENESS_DIRECTORY_PINS);
});

// Scenario: unchanged pinned files have a stack count inconsistent with the calling talent.
// Purpose: fingerprint success cannot replace the existing static proof or publish partial trace.
test('InterT20_matching fingerprints still require the static proof',options,()=>{
  const supplement=createBrittlenessSupplement(source());
  for(const [key] of keys) {
    const params={stacks:{value:99}},problems=[],trace=[];
    supplement('darktide:skill:cryptic:'+key,params,problems,trace,definitionFor(key));
    assert.ok(!Object.hasOwn(params,'brittleness_per_stack'));
    assert.deepEqual(problems.map(p=>p.code),['BRITTLENESS_SOURCE_UNPROVEN']);
    assert.deepEqual(trace,[]);
  }
});

// Exact e46b892 mutations ported from review18 and both review20 counterexample
// scripts. Every case owns its reader/supplement; the shared Git cache is read-only.
const end='return settings("BuffTemplates", templates)';
const cases=[
  ['review18 registry dynamic',REGISTRY,end,'templates.rending_debuff = runtime_buff\n'+end],
  ['review18 registry ratio',REGISTRY,end,'templates.rending_debuff = {class_name="buff",stat_buffs={rending_multiplier=0.02}}\n'+end],
  ['review18 registry passive removed',REGISTRY,end,'templates.cryptic_electrocution_applies_brittleness = nil\n'+end],
  ['review18 ipairs shadow',PASSIVE,'templates.cryptic_electrocution_applies_brittleness = {','local function ipairs(x) return function() end end\ntemplates.cryptic_electrocution_applies_brittleness = {'],
  ['review18 ScriptUnit member',PASSIVE,'return templates','ScriptUnit.has_extension = function() return nil end\nreturn templates'],
  ['review18 keyword missing',SETTINGS,'buff_settings.group_to_keywords = group_to_keywords','buff_settings.group_to_keywords = {}'],
  ['review18 keyword dynamic',SETTINGS,'buff_settings.group_to_keywords = group_to_keywords','buff_settings.group_to_keywords = { [group_keywords.electrocuted] = runtime_keywords }'],
  ...['FixedFrame','talent_settings','group_to_keywords','group_keywords','BuffSettings','TalentSettings'].map(n=>[
    'review20 shadow '+n,PASSIVE,'templates.cryptic_electrocution_applies_brittleness = {',`local function ${n}() return nil end\ntemplates.cryptic_electrocution_applies_brittleness = {`]),
  ['review20 dependency ScriptUnit',SETTINGS,'buff_settings.group_to_keywords = group_to_keywords','buff_settings.group_to_keywords = group_to_keywords\nScriptUnit.has_extension = function() return nil end'],
  ['review20 dependency ipairs',SETTINGS,'buff_settings.group_to_keywords = group_to_keywords','buff_settings.group_to_keywords = group_to_keywords\nipairs = function() return function() end end'],
  ['review20 dynamic constructor',WEAPON,'[buff_stat_buffs.rending_multiplier] = 0.025,','[buff_stat_buffs.rending_multiplier] = 0.025,\n [runtime_stat] = 0.02,'],
  ['review20 dynamic fallback constructor',WEAPON,'[buff_stat_buffs.rending_multiplier] = 0.025,','[buff_stat_buffs.rending_multiplier] = 0.025,\n [runtime_stat or "rending_multiplier"] = 0.02,'],
  ['review20 dynamic assignment',WEAPON,'return templates','templates.rending_debuff.stat_buffs[runtime_stat or "rending_multiplier"] = 0.02\nreturn templates'],
  ['review20 registry alias',REGISTRY,end,'local alias = templates\nalias.rending_debuff = runtime_buff\n'+end],
  ['review20 registry dynamic key',REGISTRY,end,'templates[runtime_buff_name] = runtime_buff\n'+end],
  ['review20 registry nested stat',REGISTRY,end,'templates.rending_debuff.stat_buffs.rending_multiplier = 0.02\n'+end],
  ['review20 FixedFrame member',PASSIVE,'return templates','FixedFrame.get_latest_fixed_time = nil\nreturn templates'],
  ['review20 arc callback',ARC,'on_chain_node_add_func = _on_chain_node_add_func','on_chain_node_add_func = runtime_callback'],
  ['review20 static ratio 0.02',WEAPON,'[buff_stat_buffs.rending_multiplier] = 0.025,','[buff_stat_buffs.rending_multiplier] = 0.02,'],
  ['comment-only source change',WEAPON,'return templates','-- source changed\nreturn templates'],
];
// Scenario: a complete real-source variant changes one audited file.
// Purpose: require exact changed-file reporting, no supplemented value/trace, and the original T_NUMBER.
for(const [name,file,from,to] of cases)test(`InterT30_${name} refuses changed sources`,options,()=>{
  const original=source().read(file);assert.ok(original.includes(from),name);
  const changed=original.replace(from,to);
  const reader={...source(),read:p=>p===file?changed:source().read(p),
    readBytes:p=>p===file?Buffer.from('\uFEFF'+changed):source().readBytes(p)};
  const supplement=createBrittlenessSupplement(reader);
  for(const [key,stacks] of keys) {
    const id='darktide:skill:cryptic:'+key,params={stacks:{value:stacks}},problems=[],trace=[];
    supplement(id,params,problems,trace,definitionFor(key));
    assert.ok(!Object.hasOwn(params,'brittleness_per_stack'));
    assert.deepEqual(problems.map(p=>({code:p.code,files:p.files})),[{code:'BRITTLENESS_SOURCE_CHANGED',files:[file]}]);
    assert.match(problems[0].message,/引用鏈來源已變更，需重新核實/);
    assert.deepEqual(trace,[]);
    const check=numericCheck(id,stacks,params);
    assert.ok(check.failures.some(p=>p.code==='T_NUMBER'));
    assert.deepEqual(check.notes,[]);
  }
});

// Scenario: an unpinned same-class file wins the extractor's last-definition selection.
// Purpose: reproduce review21 through buildSkills while all original file hashes still match.
test('InterT40_unlisted same-class definition retains T_NUMBER',options,()=>{
  const {reader,extra}=shadowDefinitionReader();
  assertRejectedBuild(reader,extra);
});

// Scenario: reverse an unchanged scan, then reverse the shadow-file scan so the original wins.
// Purpose: reject pure order changes and both outcomes of last-definition-wins selection.
test('InterT50_reordered talent scan retains T_NUMBER',options,()=>{
  const reader={...source(),list:(prefix='')=>prefix===TALENTS_DIR?source().list(prefix).reverse():source().list(prefix)};
  assertRejectedBuild(reader,TALENTS);
  const shadow=shadowDefinitionReader().reader;
  assertRejectedBuild({...shadow,list:(prefix='')=>prefix===TALENTS_DIR?shadow.list(prefix).reverse():shadow.list(prefix)},TALENTS);
});

function shadowDefinitionReader() {
  const extra=TALENTS_DIR+'zz_review21_talents.lua';
  const changed=source().read(TALENTS).replaceAll('cryptic_arc_grenade_gives_brittleness','different_rule')
    .replace('buff_template_name = "cryptic_electrocution_applies_brittleness"','buff_template_name = "different_buff"');
  return {extra,reader:{...source(),exists:p=>p===extra||source().exists(p),
    list:(prefix='')=>[...source().list(prefix),...(extra.startsWith(prefix)?[extra]:[])].sort(),
    read:p=>p===extra?changed:source().read(p),readBytes:p=>p===extra?Buffer.from('\uFEFF'+changed):source().readBytes(p)}};
}

function assertRejectedBuild(reader,selectedFile) {
  const text={lookup:()=>({en:'Skill',zh:'技能'})};
  const data=buildSkills({reader,text,envelope:{gameVersion:'1.13.4',textBatch:'26101089',sourceCommit:reader.commit}});
  assert.equal(data.items.length,618);
  for(const [key,stacks] of keys) {
    const item=data.items.find(i=>i.key===key);
    assert.ok(item.source.files.some(p=>p.path===selectedFile));
    assert.ok(!Object.hasOwn(item.values.params,'brittleness_per_stack'));
    const problem=data.problems.find(p=>p.id===item.id&&p.code==='BRITTLENESS_SOURCE_CHANGED');
    assert.ok(problem,JSON.stringify(data.problems.filter(p=>p.id===item.id)));
    assert.ok(problem.directories.includes(TALENTS_DIR));
    assert.ok(numericCheck(item.id,stacks,item.values.params).failures.some(p=>p.code==='T_NUMBER'));
  }
}

// Scenario: pins and scan results match, but the caller supplies a different definition location.
// Purpose: the proof must bind to the actual definition supplied by the main extractor.
test('InterT60_actual definition identity mismatch refuses supplementation',options,()=>{
  const r=createSkillResolver(source()),talents=r.get(r.returned(TALENTS),'talents');
  const supplement=createBrittlenessSupplement(source());
  for(const [key,stacks] of keys) {
    const actual={...r.get(talents,key),start:0},params={stacks:{value:stacks}},problems=[],trace=[];
    supplement('darktide:skill:cryptic:'+key,params,problems,trace,actual);
    assert.ok(!Object.hasOwn(params,'brittleness_per_stack'));
    assert.deepEqual(problems.map(p=>p.code),['BRITTLENESS_SOURCE_CHANGED']);
    assert.ok(problems[0].files.includes(TALENTS));assert.deepEqual(trace,[]);
  }
});
