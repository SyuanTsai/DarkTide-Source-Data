import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
const damage='scripts/settings/damage/damage_profile_templates.lua';
function uncertain(prime){
 const files={'settings.lua':'return {distribution={attack=10,impact=3,mutate=function(self) self.attack=999 end}, other={attack=20,impact=4}}','constants.lua':`local S=require("settings") ${prime} return {}`,[damage]:'local S=require("settings") local damage_templates={base={power_distribution=S.distribution,cleave_distribution={attack=1,impact=1}}} return damage_templates','weapon.lua':'local C=require("constants") local weapon_template={actions={attack={damage_profile="base"}}} return weapon_template'};
 const engine=createWeaponStats({exists:p=>p in files,read:p=>files[p]});engine.actions('constants.lua');const problems=[];const profile=engine.damageProfiles({actions:engine.actions('weapon.lua'),file:'weapon.lua',id:'review22',problems})[0];return !!(profile?.unknown||profile?.distributions.some(d=>d.attack.unknown||d.impact.unknown)||problems.length);
}
// Scenario: a local mutator receives tables selected by compound expressions.
// Purpose: each possible selected shared table must invalidate the extracted value.
test('UnitT10_compound selected arguments invalidate shared tables',()=>{for(const arg of ['mode == "update" and S.distribution or {}','a ~= b and S.distribution or {}','not x and S.distribution or {}','(c1 and S.distribution) or (c2 and S.other)','(c1 and S.other) or (c2 and S.distribution)','(mode == "update" and S.distribution or {})','(1 + 2 == 3) and S.distribution or {}','("a" .. "b" == "ab") and S.distribution or {}','(#x > -1) and S.distribution or {}'])assert.equal(uncertain(`local mode="update" local function mutate(t) t.attack=999 end mutate(${arg})`),true,arg);});
// Scenario: a selected shared table is stored in a constructor and subsequently mutated.
// Purpose: retain selected aliases in constructor slots.
test('UnitT20_constructor retains selected table',()=>assert.equal(uncertain('local function mutate(t) t.value.attack=999 end mutate({value=mode == "update" and S.distribution or {}})'),true));
// Scenario: the selected shared table becomes the receiver of a method call.
// Purpose: propagate the receiver as self to the method body.
test('UnitT30_method receiver propagates self',()=>assert.equal(uncertain('local obj=mode == "update" and S.distribution or {} obj:mutate()'),true));
