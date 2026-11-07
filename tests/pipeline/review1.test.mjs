import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createWeaponStats,damageLerpValue} from '../../pipeline/lib/weapon-stats.mjs';
import {parseLuaStatic} from '../../pipeline/lib/lua-static-reader.mjs';
import {createSkillResolver,manipulate} from '../../pipeline/lib/skill-lua.mjs';
import {skillParams} from '../../pipeline/lib/skill-values.mjs';
import {staticBuffModules} from '../../pipeline/lib/blessing-buff-index.mjs';
import {expression} from '../../pipeline/lib/blessing-values.mjs';

const root='scripts/settings/equipment/weapon_templates/weapon_trait_templates/';
const reader=sources=>({exists:p=>p in sources,read:p=>sources[p],list:()=>[]});
const lua=s=>parseLuaStatic('return '+s).returned;

// Review fixtures use the game's endpoint and trait values, with no runtime Lua.
test('review F1/F2: sum every bar, retain distinct actual damage profiles',()=>{
 const r=reader({
  [root+'damage_trait_templates.lua']:`local damage_trait_templates={a={{"targets",1,"armor_damage_modifier","attack","armored",{min=0.1,max=0.95}}},b={{"targets",1,"armor_damage_modifier","attack","armored",{min=0.25,max=0.75}}},sticky={{"targets",1,"power_distribution","attack",{min=0.25,max=0.75}}}} return damage_trait_templates`,
  'scripts/settings/damage/damage_profile_templates.lua':`local damage_templates={combatsword={targets={{armor_damage_modifier={attack={armored={0.174,0.426}}}}}},light_chainsword_sticky={targets={{power_distribution={attack={150,300}}}}},light_chainsword_sticky_last={targets={{power_distribution={attack={300,600}}}}}} return damage_templates`,
  'weapon.lua':`local DamageProfileTemplates=require("scripts/settings/damage/damage_profile_templates") return {}`
 });
 const engine=createWeaponStats(r),contributions=[],bars=[[],[]];
 const run=(trait,profile,bar)=>engine.extract({source:'',file:'weapon.lua',kind:'damage',target:'action',group:lua('{overrides={'+profile+'={damage_trait_templates.'+trait+'}}}'),actions:lua('{}'),files:[],contributions,emit:s=>bars[bar].push(s),unknown:(k,r)=>assert.fail(k+':'+r)});
 run('a','combatsword',0);run('b','combatsword',1);engine.finish(contributions);
 for(const bar of bars)assert.deepEqual(bar.map(({min,max})=>[min,max]),[[0.2622,0.426]]);
 contributions.length=0;bars[0].length=0;
 run('sticky','light_chainsword_sticky',0);run('sticky','light_chainsword_sticky_last',0);engine.finish(contributions);
 assert.deepEqual(bars[0].map(({min,max})=>[min,max]),[[187.5,262.5],[375,525]]);
 assert.equal(new Set(bars[0].map(s=>s.key)).size,2);
 const selected=[],generic=[],all=[];
 engine.extract({source:'',file:'weapon.lua',kind:'damage',target:'action',group:lua('{damage_trait_templates.sticky}'),actions:lua('{action={damage_profile=DamageProfileTemplates.light_chainsword_sticky}}'),files:[],contributions:all,emit:s=>generic.push(s),unknown:(k,r)=>assert.fail(k+':'+r)});
 engine.extract({source:'',file:'weapon.lua',kind:'damage',target:'action',group:lua('{overrides={light_chainsword_sticky={damage_trait_templates.sticky}}}'),files:[],contributions:all,emit:s=>selected.push(s),unknown:(k,r)=>assert.fail(k+':'+r)});
 engine.finish(all);
 assert.deepEqual(generic,[]);
 assert.deepEqual(selected.map(({min,max})=>[min,max]),[[187.5,262.5]]);
});

test('review F3: target fallback, root/default lerp paths and absent fields',()=>{
 const r=reader({
  [root+'damage_trait_templates.lua']:`local damage_trait_templates={arc={{"targets",4,"power_distribution","attack",{min=0.25,max=1}},{"targets",1,"absent",0.5},{"ranges","min",{min=0.25,max=0.75}},{"targets",1,DEFAULT_LERP_VALUE,{min=0.2,max=0.8}}}} return damage_trait_templates`,
  'scripts/settings/damage/damage_profile_templates.lua':`local damage_templates={arc={ranges={min={10,30}},targets={{power_distribution={attack={100,200}}},{},{},default_target={power_distribution={attack={300,350}},absent={99,199}}}}} return damage_templates`
 });
 const stats=[],unknown=[];let na=0;
 createWeaponStats(r).extract({source:'',file:'weapon.lua',kind:'damage',target:'shoot',group:lua('{overrides={arc={damage_trait_templates.arc}}}'),files:[],emit:s=>stats.push(s),unknown:(k,r)=>unknown.push(r),notApplicable:()=>na++});
 assert.deepEqual(stats.map(({min,max})=>[min,max]),[[312.5,350],[15,25],[120,180]]);
 assert.equal(na,1);assert.deepEqual(unknown,[]);
});

test('review F3: missing lerp paths use scope default then game fallback, preserving zero',()=>{
 const values=new Map([['DEFAULT_LERP_VALUE',0.25],['power_distribution',new Map([['attack',0]])]]);
 assert.equal(damageLerpValue(values,['power_distribution','attack'],0.5),0);
 assert.equal(damageLerpValue(values,['missing','attack'],0.5),0.25);
 assert.equal(damageLerpValue(new Map(),['missing','attack'],0.5),0.5);
});

// Scenario: inherited movement endpoints are expanded for each movement state.
// Purpose: retain endpoint values and their curve provenance.
test('UnitT45_review F4 expands movement states before inherited endpoint lookup',()=>{
 const r=reader({
  [root+'sway_trait_templates.lua']:`local sway_trait_templates={test={{ALL_WEAPON_MOVEMENT_STATES,"continuous_sway","pitch",{min=0.1,max=0.95}}}} return sway_trait_templates`,
  'scripts/settings/equipment/weapon_movement_state_settings.lua':`local weapon_movement_state_settings={weapon_movement_states=table.enum("still","moving","crouch_still","crouch_moving")} return weapon_movement_state_settings`,
  'scripts/settings/equipment/sway_templates.lua':`local sway_templates={parent={still={continuous_sway={pitch={lerp_basic=2,lerp_perfect=0.5}}}},gun={still={inherits={"parent","still"}},moving={inherits={"parent","still"}},crouch_still={},crouch_moving={}}} return sway_templates`
 });
 const stats=[];let na=0;
 createWeaponStats(r).extract({source:'',file:'weapon.lua',kind:'sway',target:'alternate_fire',alternate:lua('{sway_template="gun"}'),group:lua('{sway_trait_templates.test}'),files:[],emit:s=>stats.push(s),unknown:(k,r)=>assert.fail(k+':'+r),notApplicable:()=>na++});
 assert.equal(stats.length,2);assert.equal(na,2);
 assert.deepEqual(stats[0],{key:'sway.alternate_fire.still.continuous_sway.pitch',min:1.85,max:0.575,curveUnknown:null,curveSource:{path:'scripts/settings/equipment/sway_templates.lua',line:1}});
});

for(const branch of [
 'if runtime_flag then talent.format_values.damage.value=20 end',
 'for i=1,n do alias.value=20 end',
 'while flag do alias[dynamic_key]=20 end',
 'repeat alias.value=20 until flag',
 'if flag then table.merge(alias, runtime_table) end',
 'if flag then local inner=alias inner.value=20 end',
 'if flag then mutate(alias) end',
 'if flag then table.merge(talent.format_values, runtime_table) end'
])test('review F5: skills invalidate conditional writes and aliases: '+branch,()=>{
 const source=`local talent={format_values={damage={format_type="number",value=10}}} local alias=talent.format_values.damage ${branch} return talent`;
 const r=createSkillResolver(reader({'talent.lua':source})),problems=[];
 const params=skillParams(r,r.returned('talent.lua'),'test',problems,[]);
 assert.deepEqual(params.damage,{value:null,unknown:'DYNAMIC_VALUE'});
 assert.ok(problems.some(p=>p.code==='UNRESOLVED_VALUE'&&['CONDITIONAL_ASSIGNMENT','DYNAMIC_VALUE'].includes(p.message)));
});

test('review F5 conditional mutation of one contribution invalidates every contributing bar',()=>{
 const r=reader({
  [root+'recoil_trait_templates.lua']:`local recoil_trait_templates={a={{"pitch",{min=0,max=1}}},b={{"pitch",{min=0,max=1}}}} if flag then recoil_trait_templates.b[1][2]=runtime end return recoil_trait_templates`,
  'scripts/settings/equipment/recoil_templates.lua':`local recoil_templates={test={pitch={lerp_basic=0,lerp_perfect=10}}} return recoil_templates`
 });
 const engine=createWeaponStats(r),contributions=[],stats=[],unknown=[];
 for(const name of ['a','b'])engine.extract({source:'weapon_template.recoil_template="test"',file:'weapon.lua',kind:'recoil',target:'base',group:lua('{recoil_trait_templates.'+name+'}'),files:[],contributions,emit:s=>stats.push(s),unknown:(key,reason)=>unknown.push(reason)});
 engine.finish(contributions);
 assert.equal(stats.length,0);assert.ok(unknown.includes('CONDITIONAL_ASSIGNMENT'));
});

test('review F5: blessings and weapon static catalogs invalidate table aliases and merge targets',()=>{
 for(const branch of ['if flag then alias.value=20 end','if flag then table.merge(alias, changes) end','while flag do alias[key]=20 end']) {
  const source=`local templates={test={value=10}}\nlocal alias=templates.test\n${branch}\nreturn templates`;
  const modules=staticBuffModules(reader({'test.lua':source}));
  const value=modules.get(modules.get(modules.load('test.lua'),'test'),'value');
  assert.equal(value.type,'unknown');assert.equal(value.reason,'CONDITIONAL_ASSIGNMENT');
  const p=parseLuaStatic(source,{allowUnsupported:true});
  const t=p.locals.templates.entries[0].value;
  assert.equal(t.type==='unsupported'?t.reason:t.entries[0].value.reason,'CONDITIONAL_ASSIGNMENT');
 }
});

test('review F7: negative half rounds away from zero in blessings and skills',()=>{
 const fn=lua('function(v) return math.round(v) end');
 assert.equal(expression(fn,-2.5),-3);
 assert.equal(manipulate({...fn,file:'test.lua'},-2.5),-3);
});

test('bounded stimm data-copy loop rejects a conditionally changed iterator binding',()=>{
 const file='scripts/settings/ability/archetype_talents/talents/broker_talents.lua';
 for(const branch of ['', 'if runtime_flag then stimm_talent_settings=runtime_data end']) {
  const r=createSkillResolver(reader({[file]:`local TalentSettings=require("scripts/settings/talent/talent_settings")
local stimm_talent_settings=TalentSettings.broker_stimm
local archetype_talents={talents={basic={format_values={damage={format_type="number",value=10}}}}}
${branch}
for talent_name, data in pairs(stimm_talent_settings) do
 archetype_talents.talents[talent_name]=table.clone(data.talent_data)
end
return archetype_talents`,'generated.lua':'return {format_values={damage={format_type="number",value=20}}}'}));
  r.setStimmDefinitions(new Map([['generated',r.returned('generated.lua')]]));
  const talents=r.get(r.returned(file),'talents'),problems=[];
  const params=skillParams(r,r.get(talents,'basic'),'test',problems,[]);
  assert.deepEqual(params.damage,branch?{value:null,unknown:'DYNAMIC_VALUE'}:{value:10});
  if(!branch)assert.equal(r.scalar(r.get(r.get(r.get(talents,'generated'),'format_values'),'damage')?.entries?.find(e=>e.key.value==='value')?.value),20);
 }
});
