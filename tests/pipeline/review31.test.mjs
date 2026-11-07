import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
function extract({prime='',body='local S=require("settings") local damage_templates={base={power_distribution=S.distribution}} return damage_templates'}={}) {
 const files={'settings.lua':'return {distribution={attack=10,impact=3}}','constants.lua':`local S=require("settings") ${prime} return {}`,'scripts/settings/damage/damage_profile_templates.lua':body,'weapon.lua':'local C=require("constants") local weapon_template={actions={attack={damage_profile="base"}}} return weapon_template'};
 const e=createWeaponStats({exists:p=>p in files,read:p=>files[p]}); e.actions('constants.lua'); const problems=[];
 return {profiles:e.damageProfiles({actions:e.actions('weapon.lua'),file:'weapon.lua',id:'review31',problems}),problems};
}
// Scenario: the final list call returns a shared table in its second or third position, or a multi-assignment receives it.
// Purpose: writes through any expanded result cannot confirm the stale imported value.
test('UnitT10_expanded return aliases invalidate shared profiles',()=>{
 for(const prime of ['local function f() return {}, S.distribution end local box={label="x",f()} local x=box[2] x.attack=999','local function f() return {}, {}, S.distribution end local box={f()} local x=box[3] x.attack=999','local function f() return {}, S.distribution end local unused,x=f() x.attack=999']) {
  const r=extract({prime}),p=r.profiles[0],a=p.distributions[0].attack; assert.ok(r.problems.length||p.unknown||a.unknown||a.min===999,JSON.stringify({prime,a}));
 }
});
// Scenario: target or source holds a frozen computed key when defaults are added or merged.
// Purpose: helpers compare the constructor-time key and preserve Lua helper semantics.
test('UnitT20_merge helpers compare resolved keys',()=>{
 for(const [setup,helper,expected] of [
  ['local key="attack" local dist={impact=3,[key]=10} key="impact" local extra={attack=99}','add_missing',10],
  ['local key="attack" local extra={[key]=99} key="impact" local dist={attack=10,impact=3}','add_missing',10],
  ['local key="attack" local dist={impact=3,[key]=10} key="impact" local extra={attack=99}','merge',99],
  ['local key="attack" local extra={[key]=99} key="impact" local dist={attack=10,impact=3}','merge',99]
 ]) {const body=`${setup} table.${helper}(dist,extra) local damage_templates={base={power_distribution=dist}} return damage_templates`;const r=extract({body}),p=r.profiles[0],a=p.distributions[0].attack;assert.ok(r.problems.length||p.unknown||a.unknown||a.min===expected,JSON.stringify({body,a}));}
});
// Scenario: a copied table has a frozen computed key and the original key is rebound.
// Purpose: deep and shallow copy helpers preserve the constructor-time identity.
test('UnitT30_clone helpers preserve resolved keys',async()=>{
 const {parseLuaStatic,getTableField}=await import('../../pipeline/lib/lua-static-reader.mjs');
 for(const helper of ['clone','clone_instance','shallow_copy']) {const r=parseLuaStatic(`local key="attack" local t={[key]=10} key="impact" return table.${helper}(t)`,{staticArithmetic:true,allowUnsupported:true});assert.equal(getTableField(r.returned,'attack')?.value,10);}
});
// Scenario: a merge source contains an unprovable computed key.
// Purpose: a possible collision cannot become a confirmed value.
test('UnitT40_unknown merge keys remain uncertain',async()=>{
 const {parseLuaStatic,getTableField}=await import('../../pipeline/lib/lua-static-reader.mjs');
 for(const helper of ['merge','add_missing']) {const r=parseLuaStatic(`local t={attack=10} local extra={[unknown()]=99} table.${helper}(t,extra) return t`,{staticArithmetic:true,allowUnsupported:true});assert.equal(getTableField(r.returned,'attack')?.reason,'DYNAMIC_VALUE');}
});
