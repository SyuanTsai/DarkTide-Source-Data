import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
const damage='scripts/settings/damage/damage_profile_templates.lua';
function uncertain(prime,huge=false){
 const files={'settings.lua':'return {distribution={attack=10,impact=3}}','constants.lua':`local S=require("settings") ${prime} return {}`,[damage]:`local S=require("settings") local damage_templates={base={power_distribution=S.distribution,cleave_distribution={attack=1,impact=1}}} ${huge?'local overrides={child={parent_template_name="base",overrides={{"cleave_distribution","attack",math.huge}}}} return {base_templates=damage_templates,overrides=overrides}':'return damage_templates'}`,'weapon.lua':`local C=require("constants") local weapon_template={actions={attack={damage_profile="${huge?'child':'base'}"}}} return weapon_template`};
 const engine=createWeaponStats({exists:p=>p in files,read:p=>files[p]});engine.actions('constants.lua');const problems=[],profile=engine.damageProfiles({actions:engine.actions('weapon.lua'),file:'weapon.lua',id:'review24',problems})[0];return Boolean(profile?.unknown||profile?.distributions.some(d=>d.attack.unknown||d.impact.unknown)||problems.length);
}
// Scenario: a computed constructor key or index hides a shared alias from a mutator.
// Purpose: fail closed when either possible alias reaches the shared distribution.
test('UnitT10_computed keys passed to mutators fail closed',()=>{for(const prime of ['local key=runtime local box={[key]=S.distribution} local function mutate(t) t.value.attack=999 end mutate(box)','local box={value=S.distribution} local function mutate(t) t.attack=999 end mutate(box[cond and "value" or "other"])'])assert.equal(uncertain(prime),true,prime);});
// Scenario: a parenthesized function receives math and can overwrite huge.
// Purpose: document observed output outside the function-call assumption in pipeline/README.md.
test('UnitT20_known limitation parenthesized callee currently yields unknown',()=>{for(const callee of ['(mutate)','((mutate))'])assert.equal(uncertain(`local function mutate(m) m.huge=nil end ${callee}(math)`,true),true,callee);});
