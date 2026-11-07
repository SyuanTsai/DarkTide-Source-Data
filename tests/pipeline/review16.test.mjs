import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
const damage='scripts/settings/damage/damage_profile_templates.lua';
function run({prime='', prefix='', value='math.huge'}={}) {
 const sources={'settings.lua':'local s={} s.damage_types=table.enum("sawing") return s',
 'constants.lua':`local S=require("settings") local damage_types=S.damage_types local output={} local function add(value) output[#output+1]={input=value} end local config={"a"} for i=1,#config do add(config[i]) end ${prime} return output`,
 [damage]:`${prefix} local S=require("settings") local damage_types=S.damage_types local damage_templates={base={power_distribution={attack=10,impact=3},cleave_distribution={attack=1,impact=1}}} local overrides={child={parent_template_name="base",overrides={{"damage_type",damage_types.sawing},{"cleave_distribution","attack",${value}},{"cleave_distribution","impact",${value}},{"power_distribution","attack",{100,200}}}}} return {base_templates=damage_templates,overrides=overrides}`,
 'weapon.lua':'local weapon_template={actions={attack={damage_profile="child"}}} return weapon_template'};
 const engine=createWeaponStats({exists:p=>p in sources,read:p=>sources[p]}); engine.actions('constants.lua');
 return engine.damageProfiles({actions:engine.actions('weapon.lua'),file:'weapon.lua',id:'test',problems:[]})[0];
}
// Scenario: a local append helper is parsed before a profile using an imported enum.
// Purpose: unrelated local effects must not poison the shared enum.
test('UnitT10_local helper preserves imported enum and huge cleave',()=>{for(const value of ['1000','math.huge']) {const p=run({value});assert.equal(p.unknown,null);assert.equal(p.distributions[0].attack.min,100);assert.equal(p.distributions[0].impact.min,3);}});
// Scenario: the earlier module really changes the imported enum.
// Purpose: shared mutation remains unknown even when a local helper is also present.
test('UnitT20_shared enum mutation remains unknown',()=>{assert.equal(run({prime:'S.damage_types.sawing=runtime_value'}).unknown,'DYNAMIC_VALUE');});
// Scenario: an unknown call receives the imported table before extraction.
// Purpose: escaped shared data cannot be treated as an intact enum.
test('UnitT25_escaped shared enum remains unknown',()=>{assert.equal(run({prime:'unknown_call(S.damage_types)'}).unknown,'DYNAMIC_VALUE');});
// Scenario: math is shadowed or its huge member is rewritten before the override.
// Purpose: only the verified built-in constant proves the row length.
test('UnitT30_shadowed or modified math remains unknown',()=>{for(const prefix of ['local math=runtime_math','math.huge=runtime_value'])assert.equal(run({prefix}).unknown,'DYNAMIC_VALUE');});
// Scenario: math.huge is assigned directly to an exported attack endpoint.
// Purpose: non-nil evidence never makes infinity an output number.
test('UnitT40_infinite attack endpoint remains unknown',()=>{
 const sources={[damage]:'local damage_templates={base={power_distribution={attack=10,impact=3}}} local overrides={child={parent_template_name="base",overrides={{"power_distribution","attack",math.huge}}}} return {base_templates=damage_templates,overrides=overrides}', 'weapon.lua':'local weapon_template={actions={attack={damage_profile="child"}}} return weapon_template'};
 const engine=createWeaponStats({exists:p=>p in sources,read:p=>sources[p]});const p=engine.damageProfiles({actions:engine.actions('weapon.lua'),file:'weapon.lua',id:'test',problems:[]})[0];
 assert.equal(p.distributions[0].attack.unknown,'DYNAMIC_VALUE');assert.equal(p.distributions[0].attack.min,null);assert.equal(p.distributions[0].impact.min,3);
});
