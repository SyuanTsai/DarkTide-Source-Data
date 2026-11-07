import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
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
