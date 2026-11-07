import {test} from 'node:test';import assert from 'node:assert/strict';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
const damage='scripts/settings/damage/damage_profile_templates.lua';
function extract({prime='',body='local S=require("settings") local damage_templates={base={power_distribution=S.distribution}} return damage_templates',weapon='local C=require("constants") local weapon_template={actions={attack={damage_profile="base"}}} return weapon_template'}={}){
 const files={'settings.lua':'return {distribution={attack=10,impact=3}}','constants.lua':`local S=require("settings") ${prime} return {}`,[damage]:body,'weapon.lua':weapon};
 const engine=createWeaponStats({exists:p=>p in files,read:p=>files[p]});engine.actions('constants.lua');const problems=[];const profiles=engine.damageProfiles({actions:engine.actions('weapon.lua'),file:'weapon.lua',id:'review25',problems});return {profiles,problems};
}
// Scenario: top-level direct assignment follows a table constructor keyed by a local constant.
// Purpose: 10 cannot remain confirmed after the direct write of 999; no mutator is called.
test('UnitT10_computed constant alias write invalidates shared profile',()=>{
 const {profiles,problems}=extract({prime:'local key="value" local box={[key]=S.distribution} box.value.attack=999'}),p=profiles[0],v=p.distributions[0].attack;
 assert.ok(p.unknown||v.unknown||problems.length,`got attack=${v.min}, unknown=${v.unknown}, profileUnknown=${p.unknown}, problems=${problems.length}`);
});
// Scenario: an unresolved constructor key can be attack at runtime.
// Purpose: an arbitrary table write cannot be discarded while confirming attack=10.
test('UnitT20_dynamic distribution key must fail closed',()=>{
 const {profiles,problems}=extract({body:'local damage_templates={base={power_distribution={attack=10,impact=3,[runtime_key]=99}}} return damage_templates'}),p=profiles[0];
 assert.ok(p.unknown||p.distributions[0].attack.unknown||problems.length,`got attack=${p.distributions[0].attack.min}, unknown=null, problems=${problems.length}`);
});


// Scenario: an unresolved constructor key may be read through any field.
// Purpose: a direct write through that alias invalidates the shared distribution.
test('UnitT30_dynamic alias key invalidates shared profile',()=>{
 const {profiles,problems}=extract({prime:'local box={[runtime_key]=S.distribution} box.value.attack=999'});
 assert.ok(profiles[0].unknown||profiles[0].distributions[0].attack.unknown||problems.length);
});
// Scenario: a constant local is used as a distribution key.
// Purpose: proven computed keys retain their exact known endpoints.
test('UnitT40_constant distribution key stays known',()=>{
 const {profiles,problems}=extract({body:'local key="attack" local damage_templates={base={power_distribution={[key]=10,impact=3}}} return damage_templates'});
 assert.equal(profiles[0].distributions[0].attack.min,10);assert.equal(problems.length,0);
});
// Scenario: an unknown key may overwrite a target scope.
// Purpose: the extractor reports the uncertainty.
test('UnitT50_dynamic target key reports uncertainty',()=>{
 const {profiles,problems}=extract({body:'local damage_templates={base={targets={[1]={power_distribution={attack=10,impact=3}},[runtime_key]={}}}} return damage_templates'});
 assert.ok(profiles[0].unknown||problems.length);
});
// Scenario: unknown keys occur in the actions table and an action body.
// Purpose: neither can silently confirm all bindings.
test('UnitT60_dynamic action keys report uncertainty',()=>{
 for(const actions of ['{attack={damage_profile="base"},[runtime_key]={}}','{attack={damage_profile="base",[runtime_key]=99}}']) {
  const {problems}=extract({weapon:`local weapon_template={actions=${actions}} return weapon_template`});assert.ok(problems.length);
 }
});

// Scenario: a proven local key is used for both construction and lookup.
// Purpose: computed reads retain the shared alias before a direct write.
test('UnitT70_constant computed lookup invalidates shared profile',()=>{
 const {profiles,problems}=extract({prime:'local key="value" local box={[key]=S.distribution} box[key].attack=999'});
 assert.ok(profiles[0].unknown||profiles[0].distributions[0].attack.unknown||problems.length);
});
