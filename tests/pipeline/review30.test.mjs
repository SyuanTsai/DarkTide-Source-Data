import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
function extract({prime='',body='local S=require("settings") local damage_templates={base={power_distribution=S.distribution}} return damage_templates',weapon='local C=require("constants") local weapon_template={actions={attack={damage_profile="base"}}} return weapon_template'}={}) {
 const files={'settings.lua':'return {distribution={attack=10,impact=3}}','constants.lua':`local S=require("settings") ${prime} return {}`,'scripts/settings/damage/damage_profile_templates.lua':body,'weapon.lua':weapon};
 const e=createWeaponStats({exists:p=>p in files,read:p=>files[p]}); e.actions('constants.lua'); const problems=[];
 const profiles=e.damageProfiles({actions:e.actions('weapon.lua'),file:'weapon.lua',id:'review27',problems});
 return {profiles,problems};
}
const uncertain=r=>Boolean(r.problems.length||r.profiles.some(p=>p.unknown||p.distributions.some(d=>d.attack.unknown||d.impact.unknown)));

// Scenario: named fields precede implicit Lua list fields; only list fields consume integer indices.
// Purpose: a direct write to the imported table must not preserve the old confirmed endpoint.
test('UnitT10_R30 F1 mixed constructor list aliases must invalidate shared profile',()=>{
 for(const prime of ['local box={label="attack",S.distribution} local x=box[1] x.attack=999','local index=1 local box={["label"]="attack",S.distribution} local x=box[index] x.attack=999']) {
  const {profiles,problems}=extract({prime}),p=profiles[0],v=p.distributions[0].attack;
  assert.ok(p.unknown||v.unknown||problems.length||v.min===999,JSON.stringify({prime,attack:v,profileUnknown:p.unknown,problems}));
 }
});
// Scenario: table keys are evaluated when the constructor runs, then their local variable is rebound.
// Purpose: an attack key cannot retroactively become an impact key.
test('UnitT20_R30 F2 rebound constructor key must not change impact',()=>{
 const body='local key="attack" local dist={impact=3,[key]=10} key="impact" local damage_templates={base={power_distribution=dist}} return damage_templates';
 const {profiles,problems}=extract({body}),p=profiles[0],v=p.distributions[0].impact;
 assert.ok(p.unknown||v.unknown||problems.length||v.min===3,JSON.stringify({body,impact:v,profileUnknown:p.unknown,problems}));
});
// Scenario: a numeric target key is proven as 1 at construction, then the local changes to 2.
// Purpose: target enumeration must retain the stored resolved key.
test('UnitT30_R30 F2 rebound target key must retain target one',()=>{
 const body='local key=1 local dist={attack={10,20},impact=3} local damage_templates={base={targets={[key]={power_distribution=dist}}}} key=2 return damage_templates';
 const {profiles,problems}=extract({body}),p=profiles[0];
 assert.ok(p.unknown||problems.length||p.distributions.some(d=>d.target===1)&&!p.distributions.some(d=>d.target===2),JSON.stringify({body,distributions:p.distributions,profileUnknown:p.unknown,problems}));
});
// Scenario: the alias constructor contains list fields only.
// Purpose: establish that the F1 regression specifically depends on a preceding keyed field.
test('UnitT40_R30 control list only alias is fail closed',()=>{
 const {profiles,problems}=extract({prime:'local box={S.distribution} local x=box[1] x.attack=999'}),p=profiles[0];
 assert.ok(p.unknown||p.distributions[0].attack.unknown||problems.length);
});

// Scenario: explicit numeric keys do not consume list indices.
// Purpose: a mixed constructor preserves aliases at Lua list positions.
test('UnitT50_mixed explicit index preserves list alias',()=>{
 const {profiles,problems}=extract({prime:'local box={[1]=S.distribution, S.distribution} local x=box[1] x.attack=999'});
 assert.ok(problems.length||profiles[0].unknown||profiles[0].distributions[0].attack.unknown);
});
// Scenario: a constructor key refers to a member that is rebound later.
// Purpose: retain the value proved at construction time.
test('UnitT60_rebound member key retains attack',()=>{
 const body='local keys={field="attack"} local dist={impact=3,[keys.field]=10} keys.field="impact" local damage_templates={base={power_distribution=dist}} return damage_templates';
 const {profiles,problems}=extract({body}); const p=profiles[0];
 assert.ok(problems.length||p.unknown||p.distributions[0].impact.unknown||p.distributions[0].impact.min===3);
});
// Scenario: the final list field calls a function returning an imported table.
// Purpose: an expanded return remains a possible alias for later indices.
test('UnitT70_final call expansion preserves possible aliases',()=>{
 const {profiles,problems}=extract({prime:'local function f() return S.distribution end local box={label="x", f()} local x=box[2] x.attack=999'});
 assert.ok(problems.length||profiles[0].unknown||profiles[0].distributions[0].attack.unknown);
});
// Scenario: an expandable final list value can supply later numeric indices.
// Purpose: the reader must not confirm absence or an old value at those indices.
test('UnitT80_reader treats expanded list indices as dynamic',async()=>{
 const {parseLuaStatic,getTableField}=await import('../../pipeline/lib/lua-static-reader.mjs');
 for(const source of ['return {label="x", f()}','return {label="x", ...}']) {
  const table=parseLuaStatic(source,{allowUnsupported:true}).returned;
  assert.equal(getTableField(table,2)?.reason,'DYNAMIC_VALUE');
 }
});
