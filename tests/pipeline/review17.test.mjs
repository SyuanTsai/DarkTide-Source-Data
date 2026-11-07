import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createSharedBindingGuard} from '../../pipeline/lib/lua-effects.mjs';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
const damage='scripts/settings/damage/damage_profile_templates.lua';
function run(callback, value='1') {
 const sources={'shared.lua':'return {attack=10,impact=3}', 'effects.lua':`local S=require("shared") ${callback} return {}`,
 [damage]:`local S=require("shared") local damage_templates={base={power_distribution=S,cleave_distribution={attack=1,impact=1}}} local overrides={child={parent_template_name="base",overrides={{"cleave_distribution","attack",${value}}}}} return {base_templates=damage_templates,overrides=overrides}`,
 'weapon.lua':'local weapon_template={actions={attack={damage_profile="child"}}} return weapon_template'};
 const engine=createWeaponStats({exists:p=>p in sources,read:p=>sources[p]});engine.actions('effects.lua');
 const problems=[];const profile=engine.damageProfiles({actions:engine.actions('weapon.lua'),file:'weapon.lua',id:'test',problems})[0];return {profile,problems};
}
// Scenario: an unknown function receives a callback writing a shared distribution.
// Purpose: the imported attack must not remain a proved 10.
test('UnitT10_escaped callback invalidates shared distribution',()=>{const {profile,problems}=run('unknown_call(function() S.attack=999 end)');assert.ok(profile.unknown || profile.distributions[0]?.attack?.unknown || problems.length);});
// Scenario: an escaped callback can set the global math.huge to nil.
// Purpose: non-nil proof is revoked before resolving override rows.
test('UnitT20_escaped callback invalidates math huge proof',()=>{const {profile,problems}=run('unknown_call(function() math.huge=nil end)','math.huge');assert.ok(profile.unknown || problems.length);});
// Scenario: an escaped callback returns or passes another mutating closure.
// Purpose: nested and returned closures cannot hide their captured writes.
test('UnitT30_nested and returned callbacks invalidate shared data',()=>{for(const callback of ['unknown_call(function() unknown_call(function() S.attack=999 end) end)','unknown_call(function() return function() S.attack=999 end end)','local function factory() return function() S.attack=999 end end unknown_call(factory())']){const {profile,problems}=run(callback);assert.ok(profile.unknown || profile.distributions[0]?.attack?.unknown || problems.length,callback);}});
// Scenario: a callback factory is imported from another module before escaping.
// Purpose: returned closures retain their owning module's captured writes.
test('UnitT35_imported factory callback invalidates captured data',()=>{const files={'shared.lua':'return {attack=10}', 'factory.lua':'local S=require("shared") local out={make=function() return function() S.attack=999 end end} return out', 'effects.lua':'local F=require("factory") unknown_call(F.make()) return {}'};const g=createSharedBindingGuard({exists:p=>p in files,read:p=>files[p]});g.load('effects.lua');assert.equal(g.moduleTainted('shared.lua'),true);});
// Scenario: a local helper mutates only a local allocation.
// Purpose: unrelated effects leave the imported enum and math proof intact.
test('UnitT40_unrelated local helper preserves shared proofs',()=>{const files={'settings.lua':'return {damage_types={sawing=1}}','effects.lua':'local S=require("settings") local output={} local function add(v) output[#output+1]=v end add(1) return output'};const guard=createSharedBindingGuard({exists:p=>p in files,read:p=>files[p]});guard.load('effects.lua');assert.equal(guard.moduleTainted('settings.lua'),false);assert.equal(guard.intact(['math']),true);});
