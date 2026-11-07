import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync } from 'node:fs';
import { buildSkills } from '../../pipeline/extract-skills.mjs';
import { validateExtractItems } from '../../pipeline/lib/extract-output.mjs';
import { expandOfficialEffect } from '../../pipeline/lib/official-effect.mjs';
import { checkText } from '../../pipeline/lib/verify/text.mjs';
import { checkValues } from '../../pipeline/lib/verify/values.mjs';

const ARC='scripts/settings/fx/effect_templates/arc_chain_lightning_source/arc_grenade_chain_lightning_source.lua';
const PASSIVE='scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua';
const WEAPON='scripts/settings/buff/weapon_buff_templates.lua';
const REGISTRY='scripts/settings/buff/buff_templates.lua';
const TALENTS='scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua';
const SETTINGS='scripts/settings/talent/talent_settings.lua';
const KEYS=['cryptic_arc_grenades_brittleness','cryptic_electrocution_applies_brittleness'];
const envelope={gameVersion:'1.13.4',sourceCommit:'e'.repeat(40),textBatch:'26101089'};

function fixture() {
  const files=new Map();
  function copy(dir,prefix='') {
    for(const e of readdirSync(dir,{withFileTypes:true})) {
      const name=prefix+e.name,url=new URL(e.name+(e.isDirectory()?'/':''),dir);
      if(e.isDirectory())copy(url,name+'/');else files.set(name,readFileSync(url,'utf8'));
    }
  }
  copy(new URL('./fixtures/cryptic-brittleness/',import.meta.url));
  files.set('scripts/settings/ability/archetype_talents/archetype_talents.lua','return {}');
  files.set('scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua','local FIND_VALUE_FUNCTIONS={buff_template=function() end} return {}');
  files.set('scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua',`return {archetype_name="cryptic",name="cryptic_tree",nodes={${[...KEYS,'unrelated'].map((key,i)=>`{talent="${key}",widget_name="n${i}",type="stat",parents={}}`).join(',')}}}`);
  files.set(SETTINGS,'return {cryptic={arc_grenade={extra_arcs=2,rending_stacks_on_minions_hit_by_arc=8},cryptic_electrocution_applies_brittleness={stacks=3}}}');
  files.set('scripts/utilities/fixed_frame.lua','return {}');
  files.set('scripts/settings/ability/special_rules_settings.lua','return {special_rules=table.enum("cryptic_arc_grenade_gives_brittleness")}');
  files.set('scripts/settings/buff/buff_settings.lua','return {proc_events=table.enum("on_buff_added","on_buff_stack_added","on_max_stack_refresh_buff","on_stackable_buff_refresh_duration"),group_keywords=table.enum("electrocuted"),group_to_keywords={electrocuted={electrocuted_arc_ability=true,electrocuted_arc_grenade=true,electrocuted_arc=true,electrocuted_chain_lightning=true,electrocuted_shock_mine=true,electrocuted=true}},stat_buffs=table.enum("rending_multiplier")}');
  files.set(WEAPON,'local BuffSettings=require("scripts/settings/buff/buff_settings")\nlocal buff_stat_buffs=BuffSettings.stat_buffs\nreturn {rending_debuff={stat_buffs={\n[buff_stat_buffs.rending_multiplier]=0.025\n}}}');
  files.set(REGISTRY,`local templates={}
local _create_entry=function(path, optional_default_buff_category)
  local entry_templates = require(path)
  for name, template in upairs(entry_templates) do
    templates[name] = template
    template.name = template.name or name
    template.buff_category = template.buff_category or optional_default_buff_category or buff_categories.generic
  end
end
_create_entry("${WEAPON.slice(0,-4)}")
_create_entry("${PASSIVE.slice(0,-4)}")
return templates`);
  const texts=new Map([
    ['loc_talent_cryptic_arc_grenades_brittleness_desc',{en:'Increase Arcs by {number:%s}. Apply {stacks:%s} Stacks of 2.5% Brittleness.',zh:'你的{talent_name:%s}電弧數量增加{number:%s}。施加{stacks:%s}層2.5%脆弱。'}],
    ['loc_talent_cryptic_electrocution_applies_brittleness_desc',{en:'Electrocuting applies {stacks:%s} Stacks of 2.5% Brittleness.',zh:'電擊施加{stacks:%s}層2.5%脆弱。'}],
    ['loc_talent_cryptic_arc_grenades',{en:'Arc Grenades',zh:'電弧手榴彈'}],
    ['loc_unrelated_desc',{en:'Apply {stacks:%s}.',zh:'施加{stacks:%s}層。'}]
  ]);
  const text={batch:envelope.textBatch,lookup:key=>texts.get(key)??{en:'Skill',zh:'技能'}};
  const reader={commit:envelope.sourceCommit,exists:p=>files.has(p),read:p=>files.get(p),list:(prefix='')=>[...files.keys()].filter(p=>p.startsWith(prefix)).sort()};
  const run=()=>buildSkills({reader,text,envelope});
  const change=(p,from,to)=>{assert.ok(files.get(p).includes(from),from);files.set(p,files.get(p).replace(from,to));};
  return {files,text,run,change};
}

function checks(data,text,key) {
  const item=data.items.find(i=>i.key===key);
  const effect=expandOfficialEffect(item,text,data.effectFormats[item.id]);
  assert.equal(effect.status,'complete');
  const candidate={...structuredClone(item),explanation:{effect:effect.text,effectOrigin:'official',conditions:'',calculation:'',notes:'',extra:''},errata:[]};
  return {item,candidate,text:checkText(candidate,item,[],[],new Map()),values:checkValues(candidate,item,undefined,[])};
}

// Scenario: small fake files have the audited shapes but different full contents.
// Purpose: exercise the production fingerprint gate; real-source success is verified separately.
test('UnitT10_small fixtures cannot impersonate the pinned full sources',()=>{
  const f=fixture(),data=f.run();
  assert.deepEqual(validateExtractItems('skills',data.items,envelope),[]);
  for(const key of KEYS) {
    const c=checks(data,f.text,key);
    assert.ok(!Object.hasOwn(c.item.values.params,'brittleness_per_stack'));
    assert.ok(c.text.failures.some(x=>x.code==='T_NUMBER'));
    assert.deepEqual(c.values,[]);
    assert.ok(data.problems.some(p=>p.id===c.item.id&&p.code==='BRITTLENESS_SOURCE_CHANGED'&&p.files.includes(WEAPON)));
  }
});

// Scenario: one reference, callback, binding, registry include or raw value becomes unprovable.
// Purpose: refuse supplementation without an unknown parameter or a skipped numeric gate.
test('UnitT20_broken or dynamic chains retain T_NUMBER',()=>{
  const cases=[
    [TALENTS,'special_rules.cryptic_arc_grenade_gives_brittleness','special_rules.changed',[KEYS[0]]],
    [TALENTS,'buff_template_name = "cryptic_electrocution_applies_brittleness"','buff_template_name = "changed"',[KEYS[1]]],
    [ARC,'has_special_rule("cryptic_arc_grenade_gives_brittleness")','has_special_rule("changed")',[KEYS[0]]],
    [ARC,'on_chain_node_add_func = _on_chain_node_add_func','on_chain_node_add_func = changed',[KEYS[0]]],
    [ARC,'"rending_debuff"','"other_debuff"',[KEYS[0]]],
    [PASSIVE,'"rending_debuff"','"other_debuff"',[KEYS[1]]],
    [PASSIVE,'group_keywords.electrocuted','group_keywords.changed',[KEYS[1]]],
    [PASSIVE,'local talent_settings = TalentSettings.cryptic','local talent_settings = TalentSettings.changed',[KEYS[1]]],
    [PASSIVE,'local group_to_keywords = BuffSettings.group_to_keywords','local group_to_keywords = BuffSettings.changed',[KEYS[1]]],
    [PASSIVE,'local FixedFrame = require("scripts/utilities/fixed_frame")','local FixedFrame = require("scripts/utilities/changed")',[KEYS[1]]],
    [PASSIVE,'local templates = {}','local ScriptUnit = {}\nlocal templates = {}',[KEYS[1]]],
    [PASSIVE,'return templates','talent_settings = {}\nreturn templates',[KEYS[1]]],
    [PASSIVE,'return templates','templates.cryptic_electrocution_applies_brittleness.proc_func = function() end\nreturn templates',[KEYS[1]]],
    [REGISTRY,`_create_entry("${WEAPON.slice(0,-4)}")`,'',KEYS],
    [REGISTRY,`_create_entry("${PASSIVE.slice(0,-4)}")`,'',[KEYS[1]]],
    [WEAPON,'0.025','function() return 0.025 end',KEYS],
    [WEAPON,'0.025','runtime_value',KEYS],
    [WEAPON,'0.025','0/0',KEYS],
    [WEAPON,'rending_multiplier]=0.025','other_stat]=0.025',KEYS]
  ];
  for(const [file,from,to,keys] of cases) {
    const f=fixture();f.change(file,from,to);const data=f.run();
    for(const key of keys) {
      const c=checks(data,f.text,key);
      assert.ok(!Object.hasOwn(c.item.values.params,'brittleness_per_stack'),`${file}: ${from}: ${key}`);
      assert.ok(c.text.failures.some(x=>x.code==='T_NUMBER'),`${file}: ${from}: ${key}`);
      assert.ok(!c.text.notes.some(x=>x.code==='ERRATA_CHECK_SKIPPED_UNKNOWN'));
    }
  }
});

// Scenario: the source ratio changes while localization still states 2.5%.
// Purpose: revoke trust in changed sources and preserve the numeric failure.
test('UnitT30_source ratio 0.02 still fails T_NUMBER',()=>{
  const f=fixture();f.change(WEAPON,'0.025','0.02');const data=f.run();
  for(const key of KEYS) {
    const c=checks(data,f.text,key);
    assert.ok(!Object.hasOwn(c.item.values.params,'brittleness_per_stack'));
    assert.ok(c.text.failures.some(x=>x.code==='T_NUMBER'));assert.deepEqual(c.values,[]);
  }
});

// Scenario: source comments and line spacing change, or a non-target skill is extracted.
// Purpose: full-content hashes also revoke comment changes; unrelated items stay identical.
test('UnitT40_line movement revokes supplementation and unrelated skills are unchanged',()=>{
  const f=fixture(),before=f.run();
  f.files.set(ARC,'-- moved\n\n'+f.files.get(ARC));f.files.set(WEAPON,'-- moved\n\n'+f.files.get(WEAPON));
  const after=f.run();
  for(const key of KEYS) {
    const c=checks(after,f.text,key);
    assert.ok(!Object.hasOwn(c.item.values.params,'brittleness_per_stack'));
    assert.ok(c.text.failures.some(x=>x.code==='T_NUMBER'));
    assert.ok(after.problems.some(p=>p.id===c.item.id&&p.code==='BRITTLENESS_SOURCE_CHANGED'&&p.files.includes(WEAPON)&&p.files.includes(ARC)));
  }
  const other=data=>JSON.stringify(data.items.find(i=>i.key==='unrelated'));
  assert.equal(other(before),other(after));
});

// Scenario: one of the audited source modules is missing from the pinned tree.
// Purpose: missing evidence must retain the original numeric failure for each affected skill.
test('UnitT50_missing source modules retain T_NUMBER without unknowns',()=>{
  for(const [file,keys] of [[ARC,[KEYS[0]]],[PASSIVE,[KEYS[1]]],[WEAPON,KEYS],[REGISTRY,KEYS]]) {
    const f=fixture();f.files.delete(file);const data=f.run();
    for(const key of keys) {
      const c=checks(data,f.text,key);
      assert.ok(!Object.hasOwn(c.item.values.params,'brittleness_per_stack'));
      assert.ok(c.text.failures.some(x=>x.code==='T_NUMBER'));
      assert.deepEqual(c.text.notes,[]);
      assert.ok(data.problems.some(p=>p.id===c.item.id&&p.code==='BRITTLENESS_SOURCE_CHANGED'&&p.files.includes(file)));
    }
  }
});

// Scenario: review18 mutations change a dependency outside the audited callback.
// Purpose: reject each unproven chain and retain the numeric verification failure.
for (const [name,file,from,to,keys] of [
  ['registry dynamic override',REGISTRY,'return templates','templates.rending_debuff = runtime_buff\nreturn templates',KEYS],
  ['registry changed ratio',REGISTRY,'return templates','templates.rending_debuff = {stat_buffs={rending_multiplier=0.02}}\nreturn templates',KEYS],
  ['registry passive removed',REGISTRY,'return templates','templates.cryptic_electrocution_applies_brittleness = nil\nreturn templates',[KEYS[1]]],
  ['local function shadow',PASSIVE,'templates.cryptic_electrocution_applies_brittleness = {','local function ipairs(x) return function() end end\ntemplates.cryptic_electrocution_applies_brittleness = {',[KEYS[1]]],
  ['global member overwritten',PASSIVE,'return templates','ScriptUnit.has_extension = function() return nil end\nreturn templates',[KEYS[1]]],
  ['keyword mapping missing','scripts/settings/buff/buff_settings.lua','group_to_keywords={electrocuted={electrocuted_arc_ability=true,electrocuted_arc_grenade=true,electrocuted_arc=true,electrocuted_chain_lightning=true,electrocuted_shock_mine=true,electrocuted=true}}','group_to_keywords={}',[KEYS[1]]],
  ['keyword mapping dynamic','scripts/settings/buff/buff_settings.lua','group_to_keywords={electrocuted={electrocuted_arc_ability=true,electrocuted_arc_grenade=true,electrocuted_arc=true,electrocuted_chain_lightning=true,electrocuted_shock_mine=true,electrocuted=true}}','group_to_keywords={electrocuted=runtime_keywords}',[KEYS[1]]]
]) test(`UnitT60_review18 ${name} retains T_NUMBER`,()=>{
  const f=fixture(); f.change(file,from,to); const data=f.run();
  for(const key of keys) {
    const c=checks(data,f.text,key);
    assert.ok(!Object.hasOwn(c.item.values.params,'brittleness_per_stack'));
    assert.ok(c.text.failures.some(x=>x.code==='T_NUMBER'));
    assert.deepEqual(c.text.notes,[]);
    assert.ok(data.problems.some(p=>p.id===c.item.id&&p.code==='BRITTLENESS_SOURCE_CHANGED'&&p.files.includes(file)));
  }
});

// Scenario: a source file differs from the audited fingerprint.
// Purpose: reject both supplements and identify the changed source.
test('UnitT70_changed source fingerprints reject supplementation',()=>{
  const f=fixture(); f.change(WEAPON,'0.025','0.02'); const data=f.run();
  for(const key of KEYS) {
    const c=checks(data,f.text,key);
    assert.ok(!Object.hasOwn(c.item.values.params,'brittleness_per_stack'));
    assert.ok(c.text.failures.some(x=>x.code==='T_NUMBER'));
    assert.ok(data.problems.some(p=>p.id===c.item.id && p.code==='BRITTLENESS_SOURCE_CHANGED' && p.files.includes(WEAPON)));
  }
});

// Scenario: every review20 script mutation changes an external dependency or binding.
// Purpose: all such edits revoke the source proof, including variants missed by token analysis.
for(const [name,file,from,to] of [
  ...['FixedFrame','talent_settings','group_to_keywords','group_keywords','BuffSettings','TalentSettings'].map(n=>[
    'local function '+n,PASSIVE,'templates.cryptic_electrocution_applies_brittleness = {',`local function ${n}() return nil end\ntemplates.cryptic_electrocution_applies_brittleness = {`]),
  ['dependency ScriptUnit','scripts/settings/buff/buff_settings.lua','return {','ScriptUnit.has_extension = function() return nil end\nreturn {'],
  ['dependency ipairs','scripts/settings/buff/buff_settings.lua','return {','ipairs = function() return function() end end\nreturn {'],
  ['dynamic stat constructor',WEAPON,'[buff_stat_buffs.rending_multiplier]=0.025','[buff_stat_buffs.rending_multiplier]=0.025, [runtime_stat or "rending_multiplier"]=0.02'],
  ['dynamic stat assignment',WEAPON,'return {','local templates = {'],
  ['registry alias',REGISTRY,'return templates','local alias = templates\nalias.rending_debuff = runtime_buff\nreturn templates'],
  ['registry dynamic key',REGISTRY,'return templates','templates[runtime_buff_name] = runtime_buff\nreturn templates'],
  ['registry nested stat',REGISTRY,'return templates','templates.rending_debuff.stat_buffs.rending_multiplier = 0.02\nreturn templates'],
  ['FixedFrame member',PASSIVE,'return templates','FixedFrame.get_latest_fixed_time = nil\nreturn templates'],
  ['arc callback',ARC,'on_chain_node_add_func = _on_chain_node_add_func','on_chain_node_add_func = runtime_callback']
]) test(`UnitT75_review20 ${name} reports source changed`,()=>{
  const f=fixture();f.change(file,from,to);
  if(name==='dynamic stat assignment')f.files.set(WEAPON,f.files.get(WEAPON)+'\ntemplates.rending_debuff.stat_buffs[runtime_stat or "rending_multiplier"]=0.02\nreturn templates');
  const data=f.run();
  for(const key of KEYS) {
    const c=checks(data,f.text,key);
    assert.ok(!Object.hasOwn(c.item.values.params,'brittleness_per_stack'));
    assert.ok(c.text.failures.some(x=>x.code==='T_NUMBER'));
    assert.deepEqual(c.text.notes,[]);
    assert.ok(data.problems.some(p=>p.id===c.item.id&&p.code==='BRITTLENESS_SOURCE_CHANGED'&&p.files.includes(file)));
  }
});

// Scenario: the resolver follows a new require while every pinned file still matches.
// Purpose: an actually read file outside the pins must itself revoke trust.
test('UnitT80_automatically records transitive reads outside pins',async()=>{
  const {createBrittlenessSourceAudit}=await import('../../pipeline/lib/skill-brittleness.mjs');
  const {createSkillResolver}=await import('../../pipeline/lib/skill-lua.mjs');
  const files=new Map([['root.lua','local Child=require("child") return {}'],['child.lua','return {}']]);
  const pins={'root.lua':createHash('sha256').update(files.get('root.lua')).digest('hex')};
  const reader={exists:p=>files.has(p),read:p=>files.get(p),list:()=>[...files.keys()]};
  const audit=createBrittlenessSourceAudit(reader,pins);
  assert.deepEqual(audit.changedFiles(),[]);
  createSkillResolver(audit.reader).returned('root.lua');
  assert.deepEqual(audit.filesRead(),['child.lua','root.lua']);
  assert.deepEqual(audit.changedFiles(),['child.lua']);
});

// Scenario: pinned bytes change in ways token fingerprints intentionally ignore.
// Purpose: hash raw bytes, report all changed/missing paths deterministically, and retain snapshots.
test('UnitT90_raw fingerprints reject BOM whitespace and missing files',async()=>{
  const {createBrittlenessSourceAudit}=await import('../../pipeline/lib/skill-brittleness.mjs');
  const raw=Buffer.from('return {}'),sha=createHash('sha256').update(raw).digest('hex');
  for(const changed of [Buffer.from('\uFEFFreturn {}'),Buffer.from('return {}\n'),Buffer.from([0xff,...raw])]) {
    const reader={exists:p=>p==='a.lua',read:()=>changed.toString('utf8').replace(/^\uFEFF/,''),readBytes:()=>changed};
    const audit=createBrittlenessSourceAudit(reader,{'z.lua':sha,'a.lua':sha});
    assert.deepEqual(audit.changedFiles(),['a.lua','z.lua']);
  }
});
