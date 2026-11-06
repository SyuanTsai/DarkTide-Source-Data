import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
import {parseLuaStatic,getTableField as field} from '../../pipeline/lib/lua-static-reader.mjs';
import {createSkillResolver,manipulate} from '../../pipeline/lib/skill-lua.mjs';
import {playerWeaponTemplates} from '../../pipeline/lib/weapon-inventory.mjs';
import {createSharedBindingGuard} from '../../pipeline/lib/lua-effects.mjs';
const utility='scripts/utilities/recoil_template.lua',recoil='scripts/settings/equipment/recoil_templates.lua';
const root='scripts/settings/equipment/weapon_templates/';
const reader=s=>({exists:p=>p in s,read:p=>s[p],list:(p='')=>Object.keys(s).filter(k=>k.startsWith(p))});
function sources(mutation='') {return {
 'scripts/foundation/utilities/math.lua':'math.lerp=function(a,b,p)return a*(1-p)+b*p end',
 [utility]:readFileSync(new URL('./fixtures/review4/recoil_template.lua',import.meta.url),'utf8'),
 [root+'weapon_trait_templates/recoil_trait_templates.lua']:'return {test={{"still","offset",1,"pitch",{min=0.05,max=0.95}}}}',
 [recoil]:`local R=require("scripts/utilities/recoil_template") local scale={{1,{0.5,1}},{30,{0.5,1}}} ${mutation} local recoil_templates={test={still={offset=R.generate_offset_range(30,0.015,0,0.95,R.create_scale(scale))}}} return recoil_templates`
};}
function extract(s,kind='recoil',actions='{}') {
 const stats=[],unknown=[],files=[];
 createWeaponStats(reader(s)).extract({source:`weapon_template.${kind}_template="test"`,file:'weapon.lua',kind,target:kind==='recoil'?'base':'shoot',actions:parseLuaStatic('return '+actions).returned,group:parseLuaStatic(`return {${kind}_trait_templates.test}`).returned,files,emit:v=>stats.push(v),unknown:(key,reason)=>unknown.push({key,reason})});
 return {stats,unknown,files};
}
// Scenario: caller, dependency and helper aliases overwrite shared helper dependencies.
// Purpose: F1 revokes finite evaluation across the entire loaded require closure.
test('UnitT10_F1 shared writes revoke helpers across modules',()=>{
 assert.equal(extract(sources()).stats.length,1);
 for(const write of ['math.lerp=function() return runtime end','local m=math if flag then m.lerp=function() return runtime end end','local a=R a.create_scale=function() return runtime end','local t=table t.insert=function() return runtime end','local m=math mutate(m)','local t=table local obj={value=mutate(t)}']) {
  const s=sources(write);assert.equal(extract(s).stats.length,0,write);
  const dep=sources('require("dependency")');dep['dependency.lua']=`local R=require("${utility.slice(0,-4)}") ${write}`;assert.equal(extract(dep).stats.length,0,'dependency: '+write);
  const helper=sources();helper[utility]='require("dependency") '+helper[utility];helper['dependency.lua']=`local R=require("${utility.slice(0,-4)}") ${write}`;assert.equal(extract(helper).stats.length,0,'helper dependency: '+write);
 }
 const rebound=sources('local round=math.round round=fallback');assert.equal(extract(rebound).stats.length,1);
 assert.equal(extract(sources('consume(type)')).stats.length,1,'a function argument cannot rebind its global name');
});
// Scenario: the audited base module repeats the same inspect factory declaration.
// Purpose: harmless initialization must not revoke action-copy numeric coverage.
test('UnitT15_F1 identical audited initialization preserves helper proof',()=>{
 const file=root+'base_template_settings.lua',definition='base_template_settings.generate_inspect_action=function() return {value=7} end ';
 for(const [second,expected] of [[definition,true],[definition.replace('7','8'),false],['if flag then '+definition+' end ',false]]) {
  const s={[file]:'local base_template_settings={} '+definition+second+'return base_template_settings'},guard=createSharedBindingGuard(reader(s));guard.load(file);assert.equal(guard.intact([],{moduleFile:file}),expected);
 }
});
// Scenario: an unknown function receives a table or alias before finite evaluation.
// Purpose: F2 invalidates nested tables and aliases after the call, retaining prior scalar reads.
test('UnitT20_F2 unknown calls invalidate argument tables and descendants',()=>{
 for(const call of ['local function apply_player_buff(t) t[1][2][1]=player_unit.runtime_value end apply_player_buff(scale)','local alias=scale apply_player_buff(alias)','local child=scale[1][2] apply_player_buff(scale)']) {
  const r=extract(sources(call));assert.equal(r.stats.length,0,call);assert.equal(r.unknown[0]?.reason,'DYNAMIC_VALUE');
 }
 const p=parseLuaStatic('local t={child={value=7}} local alias=t.child local before=alias.value mutate(t) local after=alias.value return alias',{staticArithmetic:true,allowUnsupported:true});
 assert.equal(p.locals.before.value,7);assert.equal(p.locals.after.reason,'DYNAMIC_VALUE');assert.equal(field(p.returned,'value').reason,'DYNAMIC_VALUE');
 for(const call of ['require("x")','settings("X",t)','table.clone(t)','table.keys(t)','Vector3(1,2,3)']) {
  const q=parseLuaStatic(`local t={value=7} ${call} return t`,{staticArithmetic:true,allowUnsupported:true});assert.equal(field(q.returned,'value').value,7,call);
 }
});
// Scenario: the registry loader receives lists after their declarations.
// Purpose: inventory uses the pre-call list and still rejects prior mutations.
test('UnitT25_F2 inventory reads loader inputs before the call',()=>{
 const registry=root+'weapon_templates.lua',file=root+'guns/test.lua';
 const s={[registry]:'local template_groups={{"guns","test"}} local template_names={} _require_weapon_templates(path_prefix,template_groups,template_names)',[file]:'local weapon_template={} return weapon_template'};
 assert.equal(playerWeaponTemplates(reader(s)).length,1);
 s[registry]=s[registry].replace('_require_weapon_templates(', 'mutate(template_groups) _require_weapon_templates(');
 assert.throws(()=>playerWeaponTemplates(reader(s)),/registry group/);
});
// Scenario: a verified projectile registry binding appears under fire_configuration.
// Purpose: F3 preserves explosion values and provenance while rejecting foreign registries.
test('UnitT30_F3 fire configuration projectile resolves explosion',()=>{
 const p='scripts/settings/projectile/projectile_templates.lua',e='scripts/settings/damage/explosion_templates.lua';
 const s={'weapon.lua':`local P=require("${p.slice(0,-4)}")`,[p]:'local projectile_templates={shell={impact={explosion_template="blast"}}} return projectile_templates',[e]:'local explosion_templates={blast={static_power_level=500,radius={lerp_basic=3,lerp_perfect=6},close_radius={lerp_basic=0.5,lerp_perfect=1.75},explosion_area_suppression={distance=15,suppression_value=20}}} return explosion_templates',[root+'weapon_trait_templates/explosion_trait_templates.lua']:'return {test={{"static_power_level",1},{"radius",{min=0,max=1}},{"close_radius",{min=0,max=1}},{"explosion_area_suppression","distance",1},{"explosion_area_suppression","suppression_value",1}}}'};
 const r=extract(s,'explosion','{shoot={fire_configuration={projectile=P.shell}}}');assert.deepEqual(r.stats.map(v=>[v.min,v.max]),[[500,500],[3,6],[0.5,1.75],[15,15],[20,20]]);assert.ok(r.files.some(f=>f.path===p));
 s['weapon.lua']='local P=require("foreign")';assert.equal(extract(s,'explosion','{shoot={fire_configuration={projectile=P.shell}}}').stats.length,0);
 s['weapon.lua']=`local P=require("${p.slice(0,-4)}")`;
 s[e]='local explosion_templates={blast={radius={lerp_basic=5,lerp_perfect=10},close_radius={lerp_basic=2,lerp_perfect=3},explosion_area_suppression={distance={lerp_basic=10,lerp_perfect=20},suppression_value={lerp_basic=10,lerp_perfect=20}}}} return explosion_templates';
 s[root+'weapon_trait_templates/explosion_trait_templates.lua']='return {test={{"radius",{min=0,max=1}},{"close_radius",{min=0,max=1}},{"explosion_area_suppression","distance",{min=0,max=1}},{"explosion_area_suppression","suppression_value",{min=0,max=1}}}}';
 assert.deepEqual(extract(s,'explosion','{shoot={fire_configuration={projectile=P.shell}}}').stats.map(v=>[v.min,v.max]),[[5,10],[2,3],[10,20],[10,20]]);
});
// Scenario: a finite parent/override chain supplies both constant math arguments.
// Purpose: F4 resolves seven stacks without extending value_manipulation.
test('UnitT40_F4 verified max min and bounded profile inheritance',()=>{
 const registry='scripts/settings/damage/damage_profile_templates.lua';
 const s={[registry]:'local WeaponTweaks=require("scripts/utilities/weapon_tweaks") local templates={} WeaponTweaks.extract_weapon_tweaks("profiles",templates,{}) return templates',
 'profiles.lua':'local damage_templates={} local overrides={} damage_templates.base={buffs={on_damage_dealt={neurotoxin_interval_buff3=7}}} overrides.close={parent_template_name="base",overrides={{"power",300}}} overrides.third={parent_template_name="close",overrides={{"buffs","on_damage_dealt","neurotoxin_interval_buff3",4}}} return {base_templates=damage_templates,overrides=overrides}',
 'test.lua':`local D=require("${registry.slice(0,-4)}") return {stacks=math.max(D.base.buffs.on_damage_dealt.neurotoxin_interval_buff3,D.close.buffs.on_damage_dealt.neurotoxin_interval_buff3),low=math.min(D.base.buffs.on_damage_dealt.neurotoxin_interval_buff3,D.third.buffs.on_damage_dealt.neurotoxin_interval_buff3)}`};
 const r=createSkillResolver(reader(s)),n=r.returned('test.lua');assert.equal(r.scalar(r.get(n,'stacks')),7);assert.equal(r.scalar(r.get(n,'low')),4);
 for(const prefix of ['local math={max=function() return runtime end}','math.max=function() return runtime end','local m=math if flag then m.max=function() return runtime end end']) {
  const q=createSkillResolver(reader({...s,'test.lua':prefix+' return math.max(7,7)'}));assert.equal(q.scalar(q.returned('test.lua')),undefined);
 }
 assert.equal(manipulate({type:'function',raw:'function(v) return math.max(v,7) end'},2),undefined);
 for(const expression of ['math.max(7,runtime)','math.min(7,runtime)','math.max()','math.min()']) {
  const q=createSkillResolver(reader({'test.lua':'return '+expression}));assert.equal(q.scalar(q.returned('test.lua')),undefined);
 }
 const cyclic={...s,'profiles.lua':s['profiles.lua'].replace('parent_template_name="base"','parent_template_name="third"')};
 const q=createSkillResolver(reader(cyclic));assert.equal(q.scalar(q.get(q.returned('test.lua'),'stacks')),undefined);
});
