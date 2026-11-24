import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
import {createDamageProfileExtractor} from '../../pipeline/lib/weapon-damage-profiles.mjs';
import {stringifyCanonical} from '../../pipeline/lib/canonical-json.mjs';
import {loadSchemas} from '../../pipeline/lib/json-schema.mjs';

const damage='scripts/settings/damage/damage_profile_templates.lua';
const projectile='scripts/settings/projectile/';
const original=readFileSync(new URL('./fixtures/damage-profiles/damage.lua',import.meta.url),'utf8');
const weapon=readFileSync(new URL('./fixtures/damage-profiles/weapon.lua',import.meta.url),'utf8');
const schemas=loadSchemas('tests/pipeline/fixtures');
function run({definitions=original,actions=weapon,extra={},combos=[]}={}) {
  const sources={
    'weapon.lua':actions,[damage]:definitions,
    [projectile+'hit_scan_templates.lua']:`local DamageProfileTemplates=require("scripts/settings/damage/damage_profile_templates")
local hit_scan_templates={hip={power_level=700,damage={impact={damage_profile=DamageProfileTemplates.ranged}}},ads={power_level=900,damage={impact={damage_profile=DamageProfileTemplates.ranged}}}}
return hit_scan_templates`,
    [projectile+'projectile_templates.lua']:`local DamageProfileTemplates=require("scripts/settings/damage/damage_profile_templates")
local projectile_templates={grenade={damage={impact={damage_profile=DamageProfileTemplates.ranged}}}}
return projectile_templates`,
    [projectile+'shotshell_templates.lua']:`local DamageProfileTemplates=require("scripts/settings/damage/damage_profile_templates")
local shotshell_templates={shell={damage={impact={damage_profile=DamageProfileTemplates.ranged}}}}
return shotshell_templates`,
    [projectile+'flamer_gas_templates.lua']:`local DamageProfileTemplates=require("scripts/settings/damage/damage_profile_templates")
local flamer_gas_templates={gas={damage={impact={damage_profile=DamageProfileTemplates.ranged}}}}
return flamer_gas_templates`,...extra,
  };
  const engine=createWeaponStats({exists:p=>{assert.equal(typeof p,'string');return p in sources;},read:p=>sources[p]});
  const problems=[],files=[];
  const profiles=engine.damageProfiles({actions:engine.actions('weapon.lua'),file:'weapon.lua',id:'test',problems,files,attackCombos:combos});
  assert.deepEqual(schemas.validate('damage-profiles.schema.json',profiles).errors,[]);
  return {profiles,problems,files};
}
const only=id=>`local weapon_template={}\nweapon_template.actions={attack={kind="sweep",damage_profile="${id}"}}\nreturn weapon_template`;

// Scenario: melee scopes contain two targets and a default with both endpoint forms.
// Purpose: preserve raw endpoints and their original source lines without interpolation.
test('UnitT10_melee targets retain fixed and lerp values with source lines',()=>{
  const {profiles}=run();
  const p=profiles.find(p=>p.id==='multi');
  assert.deepEqual(p.distributions.map(d=>[d.target,d.range,d.attack.kind,d.attack.min,d.attack.max,d.impact.min]),
    [[1,null,'lerp',10,20,3],[2,null,'lerp',5,8,2],['default',null,'fixed',1,1,0]]);
  assert.deepEqual(p.distributions[0].attack.source,{path:damage,line:5});
  assert.deepEqual(p.bindings.map(b=>[b.action,b.kind,b.template]),[['melee','action',null]]);
  assert.equal(p.unknown,null);
});

// Scenario: targets also contains a named modifier outside numeric/default target lookup.
// Purpose: follow DamageProfile.target_settings without treating modifier metadata as a target.
test('UnitT15_target lookup ignores proven non target property names',()=>{
  const definitions=original.replace('targets = {','targets = {crit_mod=runtime_modifier,');
  const {profiles}=run({definitions,actions:only('multi')});
  assert.equal(profiles[0].unknown,null);assert.equal(profiles[0].distributions.length,3);
});

// Scenario: hip and ADS share a ranged profile; projectile lacks explicit power_level.
// Purpose: associate each powerLevel with its own template and keep nonapplicable kinds clean.
test('UnitT20_ranged near far and template contexts keep distinct power levels',()=>{
  const {profiles}=run(),p=profiles.find(p=>p.id==='ranged');
  assert.deepEqual(p.distributions.map(d=>[d.range,d.attack.min,d.attack.max,d.impact.min,d.impact.max]),
    [['near',100,200,6,6],['far',20,40,1,2]]);
  const binding=action=>p.bindings.find(b=>b.action===action);
  assert.equal(binding('hip').powerLevel.value,700);
  assert.equal(binding('ads').powerLevel.value,900);
  assert.equal(binding('projectile').powerLevel.unknown,'NOT_EXPOSED_BY_SOURCE');
  assert.equal(binding('projectile').kind,'projectile');
  for(const [action,kind] of [['shell','shotshell'],['gas','flamerGas']]) {
    assert.equal(binding(action).kind,kind);assert.equal(Object.hasOwn(binding(action),'powerLevel'),false);
  }
});

// Scenario: hitScan omits power_level, uses a dynamic value, or names a missing template.
// Purpose: distinguish missing source values from runtime values and unresolved templates.
test('UnitT22_hitScan missing dynamic and absent template values stay unknown',()=>{
  const extra={
    [projectile+'hit_scan_templates.lua']:`local hit_scan_templates={
hip={damage={impact={damage_profile="ranged"}}},
ads={power_level=runtime_power,damage={impact={damage_profile="ranged"}}}}
return hit_scan_templates`,
  };
  const {profiles}=run({extra}),bindings=profiles.find(p=>p.id==='ranged').bindings;
  assert.equal(bindings.find(b=>b.action==='hip').powerLevel.unknown,'NOT_EXPOSED_BY_SOURCE');
  assert.equal(bindings.find(b=>b.action==='ads').powerLevel.unknown,'DYNAMIC_VALUE');
  const missing=run({actions:weapon.replace('HitScanTemplates.hip','"absent"')});
  assert.ok(missing.problems.some(p=>p.action==='hip'&&p.reason==='NOT_VERIFIED'));
});

test('Missing power_level in a cloned hitScan template keeps the parent source',()=>{
  const file=projectile+'hit_scan_templates.lua';
  const extra={[file]:`local hit_scan_templates={
  hip={damage={impact={damage_profile="ranged"}}},
}
hit_scan_templates.copy=table.clone(hit_scan_templates.hip)
return hit_scan_templates`};
  const {profiles,files}=run({extra,actions:weapon.replace('HitScanTemplates.hip','HitScanTemplates.copy')});
  const binding=profiles.find(p=>p.id==='ranged').bindings.find(b=>b.action==='hip');
  assert.deepEqual(binding.powerLevel,{value:null,unknown:'NOT_EXPOSED_BY_SOURCE',source:{path:file,line:2}});
  assert.ok(files.some(f=>f.path===file&&f.line===2));
});

// Scenario: ordered overrides replace a whole distribution before a final scalar write.
// Purpose: prevent deep-merging a removed impact field or reverting to an earlier attack.
test('UnitT30_overrides apply in order and replace whole tables',()=>{
  const {profiles}=run({actions:only('replaced')}),p=profiles[0],d=p.distributions[0];
  assert.equal(d.attack.min,7);assert.equal(d.attack.max,7);
  assert.equal(d.impact.unknown,'NOT_EXPOSED_BY_SOURCE');
  assert.equal(d.attack.source.line,22);assert.equal(p.source.line,17);
});

// Scenario: a parent distribution is an alias shared with another template.
// Purpose: table.clone inheritance must not mutate the parent's aliased table.
test('UnitT32_override traversal never mutates aliased parent tables',()=>{
  const definitions=original.replace('damage_templates.base = {power_distribution={attack={10,20},impact=3}}',
    'local distribution={attack={10,20},impact=3}\ndamage_templates.base={power_distribution=distribution}');
  const actions='local weapon_template={actions={attack={damage_profile="replaced"},zbase={damage_profile="base"}}}\nreturn weapon_template';
  const {profiles}=run({definitions,actions});
  assert.equal(profiles.find(p=>p.id==='base').distributions[0].attack.min,10);
  assert.equal(profiles.find(p=>p.id==='replaced').distributions[0].attack.min,7);
});

test('UnitT33_profile sources identify own declarations after cloning and field writes',()=>{
  const definitions=`local damage_templates={
  parent =
    {power_distribution={attack=10,impact=3}},
}
damage_templates.pure = table.clone(damage_templates.parent)
damage_templates.modified =
  table.clone(damage_templates.parent)
damage_templates.modified.power_distribution.attack = 20
local local_copy = table.clone(damage_templates.parent)
damage_templates.registered = local_copy
return damage_templates`;
  const actions=`local D=require("scripts/settings/damage/damage_profile_templates")
local weapon_template={actions={
  base={damage_profile=D.parent},
  pure={damage_profile=D.pure},
  modified={damage_profile=D.modified},
  registered={damage_profile=D.registered},
}}
return weapon_template`;
  const {profiles,problems}=run({definitions,actions});
  const resolve=id=>profiles.find(profile=>profile.id===id);
  assert.deepEqual(resolve('pure').source,{path:damage,line:5});
  assert.deepEqual(resolve('modified').source,{path:damage,line:7});
  assert.deepEqual(resolve('parent').source,{path:damage,line:3});
  assert.deepEqual(resolve('registered').source,{path:damage,line:10});
  assert.deepEqual(resolve('pure').distributions[0].attack.source,{path:damage,line:3});
  assert.deepEqual(resolve('modified').distributions[0].attack.source,{path:damage,line:8});
  assert.deepEqual(['parent','pure','modified'].map(id=>resolve(id).distributions[0].attack.min),[10,10,20]);
  assert.deepEqual(problems,[]);
});

test('UnitT34_cloned override source identifies the declaration in the required module',()=>{
  const file='profiles.lua';
  const definitions=`local WeaponTweaks=require("scripts/utilities/weapon_tweaks")
local damage_templates={}
WeaponTweaks.extract_weapon_tweaks("profiles",damage_templates,{})
return damage_templates`;
  const extra={
    'scripts/utilities/weapon_tweaks.lua':readFileSync(new URL('./fixtures/review6/weapon_tweaks.lua',import.meta.url),'utf8'),
    [file]:`local damage_templates={base={power_distribution={attack=10,impact=3}}}
local overrides={}
overrides.parent={parent_template_name="base",overrides={{"power_distribution","attack",7}}}
overrides.copy=table.clone(overrides.parent)
return {base_templates=damage_templates,overrides=overrides}`,
  };
  const {profiles,problems}=run({definitions,actions:only('copy'),extra});
  assert.deepEqual(profiles[0].source,{path:file,line:4});
  assert.equal(profiles[0].distributions[0].attack.min,7);
  assert.deepEqual(problems,[]);
});

test('Clone helpers use the calling file and keep imported attack sources',()=>{
  const parent='parent.lua';
  const extra={[parent]:`return {
  power_distribution={
    attack=10,impact=3
  }
}`};
  for(const helper of ['clone','clone_instance','shallow_copy']) {
    const definitions=`local parent=require("parent")
local damage_templates={}
damage_templates.copy =
  table.${helper}(
    parent
  )
return damage_templates`;
    const {profiles:[profile],problems}=run({definitions,actions:only('copy'),extra});
    assert.deepEqual(profile.source,{path:damage,line:4},helper);
    assert.deepEqual(profile.distributions[0].attack.source,{path:parent,line:3},helper);
    assert.equal(profile.distributions[0].attack.min,10,helper);
    assert.deepEqual(problems,[],helper);
  }
});

test('Whole-table clone preserves the nested profile clone call source',()=>{
  const definitions=`local damage_templates={parent={power_distribution={attack=10,impact=3}}}
damage_templates.copy=table.clone(damage_templates.parent)
local templates=table.clone(damage_templates)
return templates`;
  const {profiles,files}=run({definitions,actions:only('copy')});
  assert.deepEqual(profiles[0].source,{path:damage,line:2});
  assert.ok(files.some(f=>f.path===damage&&f.line===2));
});

test('Table merge preserves the profile clone call source',()=>{
  const definitions=`local source={parent={power_distribution={attack=10,impact=3}}}
source.copy=table.clone(source.parent)
local damage_templates={}
table.merge(damage_templates,source)
return damage_templates`;
  const {profiles,files}=run({definitions,actions:only('copy')});
  assert.deepEqual(profiles[0].source,{path:damage,line:2});
  assert.ok(files.some(f=>f.path===damage&&f.line===2));
});

test('Table merge preserves the clone declaration and value sources after a dynamic write',()=>{
  const definitions=`local base={power_distribution={attack=10,impact=3}}
local source={}
source.p=table.clone(base)
source[runtime_profile_name]={power_distribution={attack=20,impact=6}}
local damage_templates={}
table.merge(damage_templates,source)
return damage_templates`;
  const {profiles:[profile],problems,files}=run({definitions,actions:only('p')});
  const source={path:damage,line:3};
  assert.equal(profile.unknown,'DYNAMIC_VALUE');
  assert.deepEqual(profile.distributions[0].attack.source,{path:damage,line:1});
  assert.deepEqual({
    profile:profile.source,
    problem:problems.find(p=>p.code==='DAMAGE_PROFILE_UNKNOWN'&&p.profile==='p'&&p.reason==='DYNAMIC_VALUE')?.source,
    files:[...new Set(files.filter(f=>f.path===damage).map(f=>f.line))],
  },{profile:source,problem:source,files:[3,1]});
});

test('Dynamic registry keys retain a known clone declaration and fall back for unsupported lookups',()=>{
  const assignment=`local base={power_distribution={attack=10,impact=3}}; local damage_templates={}
damage_templates.p=table.clone(base)
damage_templates[runtime_profile_name]={power_distribution={attack=20,impact=6}}
return damage_templates`;
  const constructor=`local damage_templates={
  p={power_distribution={attack=10,impact=3}},
  [runtime_profile_name]={power_distribution={attack=20,impact=6}},
}
return damage_templates`;
  for(const [definitions,line,sourceLines] of [[assignment,2,[2,1]],[constructor,1,[1]]]) {
    const {profiles:[profile],problems,files}=run({definitions,actions:only('p')});
    const source={path:damage,line};
    assert.equal(profile.unknown,'DYNAMIC_VALUE');
    assert.deepEqual(profile.distributions[0].attack.source,{path:damage,line:1});
    assert.deepEqual({
      profile:profile.source,
      problem:problems.find(p=>p.code==='DAMAGE_PROFILE_UNKNOWN'&&p.profile==='p'&&p.reason==='DYNAMIC_VALUE')?.source,
      files:[...new Set(files.filter(f=>f.path===damage).map(f=>f.line))],
    },{profile:source,problem:source,files:sourceLines});
  }
});

test('Merging a dynamic key into a cloned registry keeps the lookup source',()=>{
  const definitions=`local base={p={power_distribution={attack=10,impact=3}}}
local damage_templates=table.clone(base)
table.merge(damage_templates,{[runtime_profile_name]={power_distribution={attack=20,impact=6}}})
return damage_templates`;
  const {profiles:[profile],problems,files}=run({definitions,actions:only('p')});
  const source={path:damage,line:1};
  assert.equal(profile.unknown,'DYNAMIC_VALUE');
  assert.deepEqual(profile.source,source);
  assert.deepEqual(profile.distributions[0].attack.source,source);
  assert.deepEqual(profile.distributions[0].impact.source,source);
  assert.deepEqual(problems.find(p=>p.code==='DAMAGE_PROFILE_UNKNOWN'&&p.profile==='p')?.source,source);
  assert.deepEqual([...new Set(files.filter(f=>f.path===damage).map(f=>f.line))],[1]);
});

for(const [registration,definitions,line,valueLine=line] of [
  ['reference assignment',`local base={power_distribution={attack=10,impact=3}}
local damage_templates={}
damage_templates.p=base`,4],
  ['reference in a table literal',`local base={power_distribution={attack=10,impact=3}}
local damage_templates={
  p=base}`,4],
  ['table literal value',`local damage_templates={}
damage_templates.p =
  {power_distribution={attack=10,impact=3}}`,3],
  // The conditional write invalidates the old table in place, so its clone call remains the source.
  ['clone value',`local base={power_distribution={attack=10,impact=3}}
local damage_templates={}
damage_templates.p =
  table.clone(base)`,4,1],
]) {
  test(`Conditional overwrite uses the fallback source for a ${registration}`,()=>{
    const {profiles:[profile],problems,files}=run({
      definitions:`${definitions}
if runtime then
  damage_templates.p={power_distribution={attack=20,impact=6}}
end
return damage_templates`,
      actions:only('p'),
    });
    const source={path:damage,line};
    assert.equal(profile.unknown,'DYNAMIC_VALUE');
    assert.deepEqual(profile.distributions[0].attack.source,{path:damage,line:valueLine});
    assert.deepEqual({
      profile:profile.source,
      problem:problems.find(p=>p.code==='DAMAGE_PROFILE_UNKNOWN'&&p.profile==='p'&&p.reason==='DYNAMIC_VALUE')?.source,
      files:[...new Set(files.filter(f=>f.path===damage).map(f=>f.line))],
    },{profile:source,problem:source,files:[...new Set([line,valueLine])]});
  });
}

test('Imported clone keeps its call source after table.make_unique',()=>{
  const file='profiles.lua';
  const definitions=`local WeaponTweaks=require("scripts/utilities/weapon_tweaks")
local templates={}
WeaponTweaks.extract_weapon_tweaks("profiles",templates,{})
return settings("DamageProfileTemplates",templates)`;
  const extra={
    'scripts/utilities/weapon_tweaks.lua':readFileSync(new URL('./fixtures/review6/weapon_tweaks.lua',import.meta.url),'utf8'),
    [file]:`local damage_templates={}
local overrides={}
table.make_unique(damage_templates)
table.make_unique(overrides)
damage_templates.base={power_distribution={attack=10,impact=3}}
damage_templates.copy=table.clone(damage_templates.base)
return {base_templates=damage_templates,overrides=overrides}`,
  };
  const {profiles:[profile],files}=run({definitions,actions:only('copy'),extra});
  assert.deepEqual(profile.source,{path:file,line:6});
  assert.deepEqual(profile.distributions[0].attack.source,{path:file,line:5});
  assert.ok(files.some(f=>f.path===file&&f.line===6));
});

test('Cloned profile with dynamic fields keeps its clone call source',()=>{
  const definitions=`local base={power_distribution={attack=10,impact=3},[runtime_field]={}}
local damage_templates={}
damage_templates.p=table.clone(base)
return damage_templates`;
  const {profiles:[profile],problems,files}=run({definitions,actions:only('p')});
  assert.equal(profile.unknown,'DYNAMIC_VALUE');
  assert.equal(profile.distributions[0].attack.unknown,'DYNAMIC_VALUE');
  assert.equal(profile.distributions[0].impact.unknown,'DYNAMIC_VALUE');
  const source={path:damage,line:3};
  assert.deepEqual(profile.source,source);
  assert.ok(files.some(f=>f.path===source.path&&f.line===source.line));
  assert.ok(problems.some(p=>p.code==='DAMAGE_PROFILE_UNKNOWN'&&p.profile==='p'&&p.reason==='DYNAMIC_VALUE'));
});

// Scenario: WeaponTweaks.create_new receives a proven row of zero or one element.
// Purpose: model its zero-iteration loop exactly while preserving later overrides.
test('UnitT35_static zero key override rows are proven no ops',()=>{
  const definitions=original.replace('{"power_distribution","attack",9}',
    '{"wounds_template"},{},{"power_distribution","attack",9}');
  const {profiles,problems}=run({definitions,actions:only('replaced')});
  assert.equal(profiles[0].unknown,null);assert.equal(profiles[0].distributions[0].attack.min,7);
  assert.deepEqual(problems,[]);
});

// Scenario: a nil or unresolved final row value can change Lua's #row boundary.
// Purpose: do not assume that the row still assigns its syntactically final key.
test('UnitT37_nil and possibly nil row values make the override unverified',()=>{
  for(const value of ['nil','runtime_value','runtime_call()']) {
    const definitions=original.replace('return {base_templates=damage_templates,overrides=overrides}',
      `overrides.removed={parent_template_name="base",overrides={{"power_distribution","attack",${value}}}}\nreturn {base_templates=damage_templates,overrides=overrides}`);
    const {profiles,problems}=run({definitions,actions:only('removed')});
    assert.ok(profiles[0].unknown,value);
    assert.ok(profiles[0].distributions.every(d=>d.attack.min===null&&d.impact.min===null),value);
    assert.ok(problems.length,value);
  }
});

// Scenario: a proven override path writes a runtime function and leaves impact untouched.
// Purpose: mark the affected endpoint dynamic without leaking the inherited attack.
test('UnitT40_dynamic override values cannot expose inherited numbers',()=>{
  const definitions=original.replace('{"power_distribution","attack",7}','{"power_distribution","attack",function() return runtime end}');
  const {profiles}=run({definitions,actions:only('replaced')});
  assert.equal(profiles[0].distributions[0].attack.unknown,'DYNAMIC_VALUE');
  assert.equal(profiles[0].distributions[0].attack.min,null);
});

// Scenario: override keys, rows, collections, or intermediate paths cannot be proven.
// Purpose: fail closed for every formerly skipped override form, including later valid writes.
test('UnitT50_unreadable overrides produce unknown profiles and problems',()=>{
  const lists=['{{runtime_key,9}}','{runtime_row}','runtime_overrides','{{"missing","attack",9}}',
    '{{"power_distribution","attack",7},{runtime_key,9},{"power_distribution","attack",8}}',
    '{[runtime_index]={"power_distribution","attack",9}}','{false}'];
  for(const overrides of lists) {
    const definitions=original+`\noverrides.bad={parent_template_name="base",overrides=${overrides}}`;
    // Keep declarations before return: the static reader must inspect actual reachable source.
    const {profiles,problems}=run({definitions:definitions.replace('return {base_templates=damage_templates,overrides=overrides}','')+'\nreturn {base_templates=damage_templates,overrides=overrides}',actions:only('bad')});
    assert.ok(profiles[0].unknown,overrides);
    assert.ok(profiles[0].distributions.every(d=>d.attack.min===null&&d.impact.min===null),overrides);
    assert.ok(problems.some(p=>p.code==='DAMAGE_PROFILE_UNKNOWN'),overrides);
  }
});

// Scenario: an unknown registry key may replace any override or target scope.
// Purpose: never retain a confirmed profile after dynamic writes to its containing table.
test('UnitT55_dynamic registries and distribution containers fail closed',()=>{
  const tail='return {base_templates=damage_templates,overrides=overrides}';
  for(const write of ['overrides[runtime_name]={parent_template_name="base",overrides={}}',
    'damage_templates[runtime_name]={power_distribution={attack=99,impact=9}}']) {
    const {profiles}=run({definitions:original.replace(tail,write+'\n'+tail),actions:only('replaced')});
    assert.ok(profiles[0].unknown,write);
  }
  const {profiles}=run({definitions:original.replace('power_distribution={attack={10,20},impact=3}',
    'power_distribution=runtime_distribution'),actions:only('multi')});
  assert.equal(profiles[0].distributions[0].attack.unknown,'DYNAMIC_VALUE');
  assert.equal(profiles[0].distributions[0].impact.unknown,'DYNAMIC_VALUE');
});

// Scenario: a named profile is absent or has a dynamic parent or inheritance cycle.
// Purpose: retain the referenced ID with explicit unknowns rather than dropping the record.
test('UnitT60_missing and unverified inheritance retain unknown references',()=>{
  for(const [id,extra] of [['missing',''],['bad','overrides.bad={parent_template_name=runtime_parent,overrides={}}'],
    ['cycle','overrides.cycle={parent_template_name="cycle",overrides={}}']]) {
    const definitions=original.replace('return {base_templates=damage_templates,overrides=overrides}',extra+'\nreturn {base_templates=damage_templates,overrides=overrides}');
    const {profiles,problems}=run({definitions,actions:only(id)});
    assert.equal(profiles[0].id,id);assert.ok(profiles[0].unknown);assert.ok(problems.length);
  }
});

// Scenario: a combo retains an ID absent from the successfully scanned action bindings.
// Purpose: the extractor itself must emit a corresponding unknown profile record.
test('UnitT65_combo references always have an emitted profile record',()=>{
  const {profiles}=run({actions:only('base'),combos:[{source:{path:'weapon.lua',line:1},steps:[{damageProfile:'combo_only'}]}]});
  const missing=profiles.find(p=>p.id==='combo_only');
  assert.equal(missing.unknown,'NOT_VERIFIED');
  assert.equal(missing.distributions[0].attack.min,null);
});

// Scenario: action/template bindings or endpoint expressions are dynamic.
// Purpose: report unresolved bindings and never silently treat them as absent.
test('UnitT70_dynamic values and bindings report explicit uncertainty',()=>{
  const definitions=original.replace('impact=3','impact=runtime_impact');
  const {profiles}=run({definitions});
  assert.equal(profiles.find(p=>p.id==='multi').distributions[0].impact.unknown,'DYNAMIC_VALUE');
  const dynamic=run({actions:weapon.replace('HitScanTemplates.hip','runtime_template').replace('DamageProfileTemplates.multi','runtime_profile')});
  assert.ok(dynamic.problems.some(p=>p.action==='hip'&&p.reason==='DYNAMIC_VALUE'));
  assert.ok(dynamic.problems.some(p=>p.action==='melee'&&p.reason==='DYNAMIC_VALUE'));
});

// Scenario: a template override replaces a damage_profile reference.
// Purpose: retain symbolic profile identity and bind the override rather than its parent.
test('UnitT75_template overrides retain referenced profile identities',()=>{
  const extra={
    [projectile+'hit_scan_templates.lua']:`local D=require("scripts/settings/damage/damage_profile_templates")
local hit_scan_templates={hip={power_level=700,damage={impact={damage_profile=D.multi}}}}
local overrides={ads={parent_template_name="hip",overrides={{"damage","impact","damage_profile",D.ranged}}}}
return {base_templates=hit_scan_templates,overrides=overrides}`,
  };
  const {profiles}=run({extra});
  assert.ok(profiles.find(p=>p.id==='ranged').bindings.some(b=>b.action==='ads'&&b.powerLevel.value===700));
  assert.equal(profiles.find(p=>p.id==='multi').bindings.some(b=>b.action==='ads'),false);
});

// Scenario: an action mutates its private clone of a named profile.
// Purpose: never report the original profile's endpoints for an unverified cloned binding.
test('UnitT77_modified profile clones never expose original endpoint values',()=>{
  const actions=`local D=require("scripts/settings/damage/damage_profile_templates")
local copy=table.clone(D.base)
copy.power_distribution.attack=99
local weapon_template={actions={attack={damage_profile=copy}}}
return weapon_template`;
  const definitions=original.replace('return {base_templates=damage_templates,overrides=overrides}','return damage_templates');
  const {profiles,problems}=run({actions,definitions});
  assert.ok(profiles.every(p=>p.distributions.every(d=>d.attack.min===null)));
  assert.ok(problems.some(p=>['DAMAGE_PROFILE_UNKNOWN','DAMAGE_BINDING_UNKNOWN'].includes(p.code)));
});

// Scenario: identical sources are extracted with separate parser instances.
// Purpose: guarantee stable IDs, distributions and binding order down to output bytes.
test('UnitT80_repeated extraction is byte identical',()=>{
  assert.equal(stringifyCanonical(run().profiles),stringifyCanonical(run().profiles));
});

// Scenario: an inherited hit scan clones a table containing a symbolic profile reference.
// Purpose: retain the original profile reference location in bindings and source files.
test('UnitT78_cloned template binding preserves reference source',()=>{
 const file=projectile+'hit_scan_templates.lua';
 const extra={[file]:`local D=require("scripts/settings/damage/damage_profile_templates")
local hit_scan_templates={hip={damage={impact={damage_profile=D.ranged}}}}
hit_scan_templates.ads=table.clone(hit_scan_templates.hip)
return hit_scan_templates`};
 const {profiles,files}=run({extra});
 const binding=profiles.find(p=>p.id==='ranged').bindings.find(b=>b.action==='ads');
 assert.deepEqual(binding.source,{path:file,line:2});
 assert.ok(files.some(f=>f.path===file&&f.line===2));
});

// Scenario: armor and breed enum tables have dynamic keys; a binding scope also has one.
// Purpose: ignore unrelated enum tables while retaining fail-closed binding diagnostics.
test('UnitT79_unrelated enum keys do not produce binding diagnostics',()=>{
 const actions=`local weapon_template={actions={attack={damage_profile="base",action_armor_hit_mass_mod={[armor_types.armored]=1,[armor_types.super_armor]=2},sticks_to_tags={[breed_tags.monster]=true,[breed_tags.ogryn]=true}}}}
return weapon_template`;
 assert.equal(run({actions}).problems.filter(p=>p.code==='DAMAGE_BINDING_UNKNOWN').length,0);
 const bad=actions.replace('damage_profile="base",','damage_profile="base",[runtime_key]=1,');
 assert.ok(run({actions:bad}).problems.some(p=>p.code==='DAMAGE_BINDING_UNKNOWN'));
});

// Scenario: a cloned reference node has a synthetic location after its original reference.
// Purpose: the binding and its file list use the same original location as name resolution.
test('UnitT81_clone reference source takes precedence over synthetic node location',()=>{
 const ref={type:'reference',ref:'D.base',_file:'hitscan.lua',startLine:53};
 const clone={type:'unsupported',_file:'hitscan.lua',startLine:77,_cloneReference:ref};
 const key=value=>({type:'string',value});
 const table=entries=>({type:'table',entries:entries.map(([k,v])=>({key:key(k),value:v}))});
 const actions=table([['attack',table([['damage_profile',clone]])]]);
 const extract=createDamageProfileExtractor({lookup:()=>null,resolve:n=>n,field:()=>null,component:n=>n?.value,annotate:()=>{},paths:{damage:'damage.lua'},definition:()=>null,binding:()=>({D:{type:'require',path:'damage'}})});
 const files=[],profiles=extract({actions,file:'weapon.lua',id:'fixture',files});
 assert.deepEqual(profiles[0].bindings[0].source,{path:'hitscan.lua',line:53});
 assert.ok(files.some(f=>f.path==='hitscan.lua'&&f.line===53));
});
