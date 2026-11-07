import {test} from 'node:test';import assert from 'node:assert/strict';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
import {parseLuaStatic,getTableField,getTableArray,getTableEntries} from '../../pipeline/lib/lua-static-reader.mjs';
import {createSkillResolver} from '../../pipeline/lib/skill-lua.mjs';
import {analyzeLuaEffects,createSharedBindingGuard} from '../../pipeline/lib/lua-effects.mjs';
import {staticBuffModules} from '../../pipeline/lib/blessing-buff-index.mjs';
const damage='scripts/settings/damage/damage_profile_templates.lua';
const options={staticArithmetic:true,allowUnsupported:true};
// Scenario: a constructor has an unknown key and is read through scalar/nested aliases.
// Purpose: reader uncertainty survives every field read and array/entry enumeration.
test('UnitT10_reader propagates unknown constructor keys through reads',()=>{
 for(const source of [
  'local t={attack=10,[runtime_key]=99} return t.attack',
  'local t={dist={attack=10},[runtime_key]={}} return t.dist.attack',
  'local t={attack=10,[runtime_key]=99} local box={value=t.attack} return box.value'
 ])assert.equal(parseLuaStatic(source,options).returned.reason,'DYNAMIC_VALUE',source);
 const t=parseLuaStatic('return {10,[runtime_key]=99}',options).returned;
 assert.equal(t.hasUnknownKeys,true);
 assert.equal(getTableArray(t)[0].reason,'DYNAMIC_VALUE');
 assert.ok(getTableEntries(t).every(e=>e.value.reason==='DYNAMIC_VALUE'));
});
// Scenario: an unknown read can select multiple tables, then a child is passed out.
// Purpose: the union retains every reachable alias through subsequent reads and calls.
test('UnitT20_reader invalidates every possible table through nested unknown reads',()=>{
 for(const tail of ['local x=box[runtime_key] x.child.attack=999','local x=box[runtime_key].child mutate(x)','mutate(box[runtime_key].child)']) {
  const p=parseLuaStatic(`local a={child={attack=10}} local b={child={attack=20}} local box={a=a,b=b} ${tail} return {a=a,b=b}`,options);
  for(const key of ['a','b'])assert.equal(getTableField(getTableField(p.locals[key],'child'),'attack').reason,'DYNAMIC_VALUE',tail);
 }
});
// Scenario: a constant local condition selects one of two shared aliases.
// Purpose: effects retains exact writes for a proven key without revoking the other alias.
test('UnitT30_effects simplifies proven logical keys precisely',()=>{
 const a=analyzeLuaEffects('local A=require("a") local B=require("b") local cond=true local box={value=A.dist,other=B.dist} local x=box[cond and "value" or "other"] x.attack=999');
 assert.ok(a.writes.includes('@a'));
 assert.ok(!a.writes.some(p=>p.startsWith('@b')),JSON.stringify(a.writes));
});
// Scenario: an imported settings table proves string/numeric enum keys, unless tainted.
// Purpose: static imports are evidence for keys; missing/dynamic/mutated imports are not.
test('UnitT40_imported literal keys require intact static tables',()=>{
 for(const settings of ['return {types={armored="attack",impact=2}}','return {types={armored="attack",impact=2,[runtime_key]="other"}}','local t={types={armored="attack",impact=2}} mutate(t.types) return t']) {
  const imported=parseLuaStatic(settings,options).returned;
  const p=parseLuaStatic('local A=require("armor") local types=A.types return {[types.armored]=10,[types.impact]=3}',{...options,resolveImport:()=>imported});
  if(settings.startsWith('return {types={armored="attack",impact=2}}')) {
   assert.equal(p.returned.hasUnknownKeys,false);
   assert.equal(getTableField(p.returned,'attack')?.value,10);
   assert.equal(getTableField(p.returned,2)?.value,3);
  } else assert.equal(p.returned.hasUnknownKeys,true);
 }
});
// Scenario: the skill reader receives dynamic keys and a proven imported enum.
// Purpose: skills and lazy blessing consumers inherit the same key and alias rules.
test('UnitT50_skill reader preserves uncertainty and proven imported keys',()=>{
 for(const source of ['local t={attack=10,[runtime_key]=99} return t.attack','local t={dist={attack=10},[runtime_key]={}} return t.dist.attack']) {
  const r=createSkillResolver({exists:p=>p==='test.lua',read:()=>source});
  assert.equal(r.returned('test.lua').reason,'DYNAMIC_VALUE');
 }
 const files={'armor.lua':'return {types={armored="attack"}}','test.lua':'local A=require("armor") local types=A.types local t={[types.armored]=10} return t.attack'};
 const r=createSkillResolver({exists:p=>p in files,read:p=>files[p]});assert.equal(r.scalar(r.returned('test.lua')),10);
 const table=createSkillResolver({exists:()=>true,read:()=>'return {attack=10,[runtime_key]=99}'}).returned('test.lua');
 assert.equal(table.hasUnknownKeys,true);
 const precise=createSkillResolver({exists:()=>true,read:()=>'local cond=true local t={value=10,other=20} return t[cond and "value" or "other"]'});
 assert.equal(precise.scalar(precise.returned('test.lua')),10);
});
// Scenario: blessing tables contain dynamic keys, computed reads and imported enums.
// Purpose: lazy tables must prove keys in their captured environment before exposing values.
test('UnitT60_lazy blessing reader preserves uncertainty and imported constants',()=>{
 for(const source of ['local t={attack=10,[runtime_key]=99} return t.attack','local t={dist={attack=10},[runtime_key]={}} return t.dist.attack','local t={value={attack=10}} return t[runtime_key].attack']) {
  const r=staticBuffModules({exists:p=>p==='test.lua',read:()=>source.replaceAll(' return ','\nreturn ')});
  assert.equal(r.load('test.lua').reason,'DYNAMIC_VALUE',source);
 }
 const files={'armor.lua':'return {types={armored="attack"}}','test.lua':'local A=require("armor")\nlocal types=A.types\nlocal t={[types.armored]=10}\nreturn t.attack'};
 const r=staticBuffModules({exists:p=>p in files,read:p=>files[p]});assert.equal(r.load('test.lua').value,10);
 const precise=staticBuffModules({exists:()=>true,read:()=>'local cond=true\nlocal t={value=10,other=20}\nreturn t[cond and "value" or "other"]'});
 assert.equal(precise.load('test.lua').value,10);
});
// Scenario: an unknown read joins an imported literal enum and a shared table.
// Purpose: proven scalar enum fields cannot become mutable table aliases in effects.
test('UnitT70_effects distinguishes imported literal enums from shared tables',()=>{
 const files={'enum.lua':'local e={key="value"} return settings("Enum",e)','other.lua':'return {dist={attack=10}}','test.lua':'local E=require("enum") local O=require("other") local box={value=E.key,other=O.dist} local x=box[runtime_key] x.attack=999'};
 const effects=createSharedBindingGuard({exists:p=>p in files,read:p=>files[p]});effects.load('test.lua');
 assert.equal(effects.moduleTainted('enum.lua'),false);
 assert.equal(effects.moduleTainted('other.lua'),true);
 const preciseFiles={...files,'left.lua':'return {dist={attack=10}}','right.lua':'return {dist={attack=20}}','test.lua':'local E=require("enum") local A=require("left") local B=require("right") local key=E.key local box={value=A.dist,other=B.dist} local x=box[key] x.attack=999'};
 const precise=createSharedBindingGuard({exists:p=>p in preciseFiles,read:p=>preciseFiles[p]});precise.load('test.lua');
 assert.equal(precise.moduleTainted('left.lua'),true);
 assert.equal(precise.moduleTainted('right.lua'),false);
 const changedFiles={...preciseFiles,'test.lua':'local E=require("enum") local A=require("left") local B=require("right") E.key="other" local selected=E.key local box={value=A.dist,other=B.dist} local x=box[selected] x.attack=999'};
 const changed=createSharedBindingGuard({exists:p=>p in changedFiles,read:p=>changedFiles[p]});changed.load('test.lua');
 assert.equal(changed.moduleTainted('right.lua'),true);
});
function extract({prime='',body='local S=require("settings") local damage_templates={base={power_distribution=S.distribution}} return damage_templates',weapon='local C=require("constants") local weapon_template={actions={attack={damage_profile="base"}}} return weapon_template'}={}){
 const files={'settings.lua':'return {distribution={attack=10,impact=3}}','constants.lua':`local S=require("settings") ${prime} return {}`,[damage]:body,'weapon.lua':weapon};
 const engine=createWeaponStats({exists:p=>p in files,read:p=>files[p]});engine.actions('constants.lua');const problems=[];const profiles=engine.damageProfiles({actions:engine.actions('weapon.lua'),file:'weapon.lua',id:'review25',problems});return {profiles,problems};
}
// Scenario: an unresolved computed read may select the shared table.
// Purpose: writes through all possible aliases invalidate the shared distribution.
test('UnitT80_unknown computed read invalidates shared profile',()=>{
 for(const key of ['runtime_key','cond and "value" or "other"']) {
  const {profiles,problems}=extract({prime:`local cond=true local box={value=S.distribution} local x=box[${key}] x.attack=999`});
  assert.ok(profiles[0].unknown||profiles[0].distributions[0].attack.unknown||problems.length);
 }
});
// Scenario: dynamic constructor keys occur along catalog and scalar alias paths.
// Purpose: known fields cannot be confirmed when the dynamic key may overwrite them.
test('UnitT90_dynamic keys propagate through catalog and aliases',()=>{
 for(const body of [
  'local damage_templates={base={power_distribution={attack=10,impact=3}},[runtime_key]={}} return damage_templates',
  'local dist={attack=10,impact=3,[runtime_key]=99} local damage_templates={base={power_distribution={attack=dist.attack,impact=dist.impact}}} return damage_templates',
  'local box={dist={attack=10,impact=3},[runtime_key]={}} local damage_templates={base={power_distribution=box.dist}} return damage_templates'
 ]) {
  const {profiles,problems}=extract({body});assert.ok(problems.length||profiles[0].unknown||profiles[0].distributions[0].attack.unknown);
 }
});
// Scenario: a dynamic key may overwrite an override descriptor field.
// Purpose: do not confirm inherited or overridden values without proof.
test('UnitT95_dynamic override descriptor is uncertain',()=>{
 const body='local damage_templates={base={power_distribution={attack=10,impact=3}}} local overrides={child={parent_template_name="base",overrides={{"power_distribution","attack",20}},[runtime_key]="unknown"}} return {base_templates=damage_templates,overrides=overrides}';
 const {profiles,problems}=extract({body,weapon:'local weapon_template={actions={attack={damage_profile="child"}}} return weapon_template'});
 assert.ok(problems.length||profiles[0].unknown||profiles[0].distributions[0].attack.unknown);
});
// Scenario: a logical computed key is determined by a constant condition.
// Purpose: precise reader lookup preserves the selected value.
test('UnitT99_constant logical key selects exact field',async()=>{
 const {parseLuaStatic}=await import('../../pipeline/lib/lua-static-reader.mjs');
 const parsed=parseLuaStatic('local cond=true local box={value=10,other=20} return box[cond and "value" or "other"]',{staticArithmetic:true,allowUnsupported:true});
 assert.equal(parsed.returned.value,10);
});
