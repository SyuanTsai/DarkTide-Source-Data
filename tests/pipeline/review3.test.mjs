import {fileURLToPath} from 'node:url';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
import {parseLuaStatic,getTableField as field} from '../../pipeline/lib/lua-static-reader.mjs';
import {buildSkills,validateSkillParents} from '../../pipeline/extract-skills.mjs';
import {createSkillResolver} from '../../pipeline/lib/skill-lua.mjs';
import {staticBuffModules} from '../../pipeline/lib/blessing-buff-index.mjs';

const root='scripts/settings/equipment/weapon_templates/';
const damage='scripts/settings/damage/damage_profile_templates.lua';
const armor='scripts/settings/damage/armor_settings.lua';
const reader=s=>({commit:'a'.repeat(40),exists:p=>p in s,read:p=>s[p],list:(prefix='')=>Object.keys(s).filter(p=>p.startsWith(prefix)).sort()});
const trait=(kind,rows)=>({[root+`weapon_trait_templates/${kind}_trait_templates.lua`]:`local ArmorSettings=require("scripts/settings/damage/armor_settings")\nlocal armor_types=ArmorSettings.types\nlocal ${kind}_trait_templates={test={${rows}}}\nreturn ${kind}_trait_templates`});
function extract(s,kind,{name='test',target='base',actions='{}'}={}) {
 const stats=[],unknown=[],files=[];let absent=0;
 createWeaponStats(reader(s)).extract({source:`weapon_template.${kind}_template="${name}"`,file:'weapon.lua',kind,target,actions:parseLuaStatic('return '+actions).returned,group:parseLuaStatic(`return {${kind}_trait_templates.test}`).returned,files,emit:v=>stats.push(v),unknown:(key,reason)=>unknown.push({key,reason}),notApplicable:()=>absent++});
 return {stats,unknown,files,absent};
}
const ranges=r=>r.stats.map(v=>[v.min,v.max]);
const enumSource=`local types=table.enum("armored","super_armor")\nreturn {types=types}`;

// Scenario: enum trait keys and string overrides address the same armor entries.
// Purpose: preserve the chainsword's overridden values and audit both other resolvers.
test('UnitT10_F1 chainsword enum keys apply string overrides before lookup',()=>{
 const s={...trait('damage','{"armor_damage_modifier",armor_types.armored,{min=0.1,max=0.95}},{"armor_damage_modifier",armor_types.super_armor,{min=0.1,max=0.95}}'),[armor]:enumSource,
 [damage]:`local ArmorSettings=require("scripts/settings/damage/armor_settings")\nlocal armor_types=ArmorSettings.types
local damage_templates={base={armor_damage_modifier={[armor_types.armored]={lerp_basic=0,lerp_perfect=1},[armor_types.super_armor]={lerp_basic=0.24,lerp_perfect=0.56}}}}
local overrides={test={parent_template_name="base",overrides={{"armor_damage_modifier","armored",{lerp_basic=0.52,lerp_perfect=1.08}},{"armor_damage_modifier","super_armor",{lerp_basic=0.305,lerp_perfect=0.695}}}}}
return damage_templates`};
 const r=extract(s,'damage',{target:'heavy',actions:'{heavy={damage_profile="test"}}'});
 assert.deepEqual(r.unknown,[]);assert.equal(r.absent,0);assert.deepEqual(ranges(r),[[0.576,1.052],[0.344,0.6755]]);
 const file='enum.lua';s[file]=`local ArmorSettings=require("scripts/settings/damage/armor_settings")\nlocal armor_types=ArmorSettings.types\nreturn {[armor_types.armored]=7}`;
 const skills=createSkillResolver(reader(s)),buffs=staticBuffModules(reader(s));
 assert.equal(skills.scalar(skills.get(skills.returned(file),'armored')),7);
 assert.equal(buffs.get(buffs.load(file),'armored').value,7);
 s[file]=s[file].replace('return {[armor_types.armored]=7}','local x={[armor_types.armored]=7}\nx.armored=9\nreturn x');
 const updatedSkills=createSkillResolver(reader(s)),updatedBuffs=staticBuffModules(reader(s));
 assert.equal(updatedSkills.scalar(updatedSkills.get(updatedSkills.returned(file),'armored')),9);
 assert.equal(updatedBuffs.get(updatedBuffs.load(file),'armored').value,9);
});

// Scenario: yaw has two constant aliases, with an independent circular alias.
// Purpose: resolve the heavy stubber value with provenance and terminate cycles.
test('UnitT20_F2 heavy stubber yaw resolves aliases to 0.078',()=>{
 const s={...trait('spread','{"still","yaw",0.5}'),'scripts/settings/equipment/spread_templates.lua':`local pitch=2.6\nlocal yaw=pitch\nlocal alias=yaw\nlocal spread_templates={test={still={yaw=alias*0.03}}}\nreturn spread_templates`};
 const r=extract(s,'spread');assert.deepEqual(ranges(r),[[0.078,0.078]]);assert.deepEqual(r.unknown,[]);
 assert.ok(r.files.some(f=>f.line===1&&f.path.endsWith('spread_templates.lua')));
 assert.ok(r.files.some(f=>f.line===2&&f.path.endsWith('spread_templates.lua')));
 assert.ok(r.files.some(f=>f.line===3&&f.path.endsWith('spread_templates.lua')));
 // Real sentinels are empty tables: preserve identity while scalar enums resolve.
 const tf=root+'weapon_trait_templates/spread_trait_templates.lua';
 s[tf]='local WeaponTweakTemplateSettings=require("'+root+'weapon_tweak_template_settings")\n'+s[tf].replace('"still"','WeaponTweakTemplateSettings.ALL_WEAPON_MOVEMENT_STATES');
 s[root+'weapon_tweak_template_settings.lua']='return {ALL_WEAPON_MOVEMENT_STATES={},DEFAULT_LERP_VALUE={}}';
 s['scripts/settings/equipment/weapon_movement_state_settings.lua']='local weapon_movement_state_settings={weapon_movement_states=table.enum("still")}\nreturn weapon_movement_state_settings';
 assert.deepEqual(ranges(extract(s,'spread')),[[0.078,0.078]]);
 assert.doesNotThrow(()=>parseLuaStatic('local a=b\nlocal b=a\nreturn a*2',{staticArithmetic:true}));
});

// Scenario: the thumper module contains indexed writes and an unrelated bad clone.
// Purpose: retain the independent near attack endpoints despite a bad definition.
test('UnitT30_F3 indexed assignment keeps thumper near attack [100,200]',()=>{
 const s={...trait('damage','{"power_distribution_ranged","attack","near",{min=0,max=1}}'),[armor]:enumSource,
 [damage]:`local ArmorSettings=require("scripts/settings/damage/armor_settings")\nlocal armor_types=ArmorSettings.types
local damage_templates={other={armor_damage_modifier={}}}
damage_templates.other.armor_damage_modifier[armor_types.armored]={lerp_basic=1,lerp_perfect=2}
damage_templates.bad=table.clone(runtime_table)
damage_templates.bad.field=runtime_value
damage_templates.test={power_distribution_ranged={attack={near={lerp_basic=100,lerp_perfect=200}}}}
return damage_templates`};
 const r=extract(s,'damage',{target:'shoot',actions:'{shoot={damage_profile="test"}}'});
 assert.deepEqual(r.unknown,[]);assert.deepEqual(ranges(r),[[100,200]]);
 Object.assign(s,trait('damage','{"armor_damage_modifier","armored",{min=0,max=1}}'));
 const indexed=extract(s,'damage',{target:'shoot',actions:'{shoot={damage_profile="other"}}'});
 assert.deepEqual(indexed.unknown,[]);assert.deepEqual(ranges(indexed),[[1,2]]);
});

// Scenario: a validated helper is redefined directly or within a runtime branch.
// Purpose: never reuse stale whitelist evidence for time_scale.
test('UnitT40_F4 named helper redefinitions remain unknown',()=>{
 for(const declaration of ['function lerpable_timescale(v) return runtime_table end','if runtime_flag then function lerpable_timescale(v) return runtime_table end end']) {
  const s={...trait('weapon_handling','{"time_scale",{min=0,max=1}}'),'scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua':`local function lerpable_timescale(v) return {lerp_basic=v*0.75,lerp_perfect=v*1.25} end\n${declaration}\nlocal weapon_handling_templates={test={time_scale=lerpable_timescale(1)}}\nreturn weapon_handling_templates`};
  const r=extract(s,'weapon_handling');assert.deepEqual(r.stats,[]);assert.equal(r.unknown.length,1);assert.equal(r.unknown[0].reason,'FUNCTION_VALUE');
 }
});

// Scenario: push binds separate inner and outer damage profiles.
// Purpose: preserve both impact ranges and distinct profile identifiers.
test('UnitT50_F5 ogryn club inner and outer push ranges survive',()=>{
 const s={...trait('damage','{"power_distribution","impact",{min=0.05,max=0.95}}'),[damage]:`local damage_templates={ogryn_push={power_distribution={impact={lerp_basic=8,lerp_perfect=16}}},default_push={power_distribution={impact={lerp_basic=8,lerp_perfect=12}}}}\nreturn damage_templates`};
 const r=extract(s,'damage',{target:'action_push',actions:'{action_push={inner_damage_profile="ogryn_push",outer_damage_profile="default_push"}}'});
 assert.deepEqual(ranges(r),[[8.4,15.6],[8.2,11.8]]);assert.deepEqual(r.unknown,[]);assert.notEqual(r.stats[0].key,r.stats[1].key);
});

// Scenario: arc rifle max_angle converts constant degrees; dynamic args stay calls.
// Purpose: cover the finite math whitelist and its runtime boundary.
test('UnitT60_F6 arc rifle max_angle converts [25,70] degrees',()=>{
 const s={...trait('weapon_chain_lightning','{"max_angle",{min=0,max=1}},{"dynamic",0.5}'),'scripts/settings/equipment/weapon_handling_templates/weapon_chain_lightning_templates.lua':`local weapon_chain_lightning_templates={test={max_angle={lerp_basic=math.degrees_to_radians(25),lerp_perfect=math.degrees_to_radians(70)},dynamic=math.degrees_to_radians(runtime_angle)}}\nreturn weapon_chain_lightning_templates`};
 const r=extract(s,'weapon_chain_lightning');assert.deepEqual(ranges(r),[[0.436332312999,1.2217304764]]);assert.equal(r.unknown.length,1);assert.equal(r.unknown[0].reason,'FUNCTION_VALUE');
});

// Scenario: four psyker talents refer to the unselected placeholder and a real peer.
// Purpose: all parents must name an actual emitted skill, never the placeholder.
test('UnitT70_F7 psyker parents exclude not_selected',()=>{
 const s={};
 function copy(dir,prefix='') {for(const e of readdirSync(dir,{withFileTypes:true})){const p=prefix+e.name;if(e.isDirectory())copy(dir+'/'+e.name,p+'/');else s[p]=readFileSync(dir+'/'+e.name,'utf8');}}
 copy(fileURLToPath(new URL('./fixtures/skills/',import.meta.url)));
 const keys=['psyker_crits_regen_toughness_movement_speed','psyker_toughness_on_melee','psyker_toughness_on_vent','psyker_toughness_on_warp_kill'];
 s['scripts/settings/ability/archetype_talents/talents/psyker_talents.lua']=`return {archetype="psyker",talents={${keys.map(k=>`${k}={}`).join(',')}}}`;
 s['scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua']=`return {archetype_name="psyker",name="psyker",nodes={{widget_name="start",talent="not_selected"},${keys.map((k,i)=>`{widget_name="w${i}",talent="${k}",type="stat",parents={"start"${i?',"w0"':''}}}`).join(',')}}}`;
 const data=buildSkills({reader:reader(s),text:{lookup:()=>null},envelope:{textBatch:'100'}}),ids=new Set(data.items.map(i=>i.id));
 for(const i of data.items)assert.ok(i.values.parents.every(p=>ids.has(p)));
 for(const key of keys)assert.deepEqual(data.items.find(i=>i.key===key).values.parents,key===keys[0]?[]:[`darktide:skill:psyker:${keys[0]}`]);
 assert.throws(()=>validateSkillParents([{id:'skill',values:{parents:['absent']}}]),/腳本 bug/);
});
