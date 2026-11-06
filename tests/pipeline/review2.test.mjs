import {readFileSync} from 'node:fs';
import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createWeaponStats} from '../../pipeline/lib/weapon-stats.mjs';
import {parseLuaStatic,getTableField as field} from '../../pipeline/lib/lua-static-reader.mjs';
import {createSkillResolver} from '../../pipeline/lib/skill-lua.mjs';
import {staticBuffModules} from '../../pipeline/lib/blessing-buff-index.mjs';

const root='scripts/settings/equipment/weapon_templates/';
const reader=sources=>({exists:p=>p in sources,read:p=>sources[p],list:prefix=>Object.keys(sources).filter(p=>p.startsWith(prefix))});
function extract(sources,kind,{source='',actions='{}',target='base',group=`{${kind}_trait_templates.test}`}={}) {
 const engine=createWeaponStats(reader(sources)),stats=[],unknown=[],files=[];let absent=0;
 engine.extract({source,file:'weapon.lua',kind,target,group:parseLuaStatic('return '+group).returned,actions:parseLuaStatic('return '+actions).returned,files,emit:s=>stats.push(s),unknown:(key,reason)=>unknown.push({key,reason}),notApplicable:()=>absent++});
 return {stats,unknown,files,absent};
}
const trait=(kind,rows)=>({[root+`weapon_trait_templates/${kind}_trait_templates.lua`]:`local ${kind}_trait_templates={test={${rows}}}\nreturn ${kind}_trait_templates`});
const range=s=>[s.min,s.max];

// Scenario: recoil initialization writes through computed movement and array indices.
// Purpose: spec12 revokes dependent endpoints instead of synthesizing known zeros.
test('UnitT10_bolter computed initialization revokes endpoints',()=>{
 const sources={...trait('recoil',['still','moving'].flatMap(state=>['pitch','yaw'].map(k=>`{"${state}","offset_random_range",4,"${k}",0.5}`)).join(',')),
 'scripts/settings/equipment/recoil_templates.lua':`local recoil_templates={bolter_p1_m1={still={rise={1},offset={1,2,3,4},offset_random_range={{pitch=1,yaw=2},{pitch=1,yaw=2},{pitch=1,yaw=2}}},moving={inherits={"bolter_p1_m1","still"}}},bolter_p1_m2={still={rise={1},offset={1,2,3,4},offset_random_range={{pitch=1,yaw=2},{pitch=1,yaw=2},{pitch=1,yaw=2}}},moving={inherits={"bolter_p1_m2","still"}}}}
for name, template in pairs(recoil_templates) do
 for _, movement_state in pairs(weapon_movement_states) do
  local move_state_settings = template[movement_state]
  move_state_settings.num_rises = #move_state_settings.rise
  if move_state_settings.offset_range then
   move_state_settings.num_offset_ranges = #move_state_settings.offset_range
  else
   local num_offset_ranges = #move_state_settings.offset
   move_state_settings.num_offset_ranges = num_offset_ranges
   local offset_random_range = move_state_settings.offset_random_range
   for i = 1, num_offset_ranges do
    if not offset_random_range[i] then
     offset_random_range[i] = {pitch = 0, yaw = 0}
    end
   end
  end
 end
end
return settings("RecoilTemplates",recoil_templates)`};
 const m1=extract(sources,'recoil',{source:'weapon_template.recoil_template="bolter_p1_m1"'}),m2=extract(sources,'recoil',{source:'weapon_template.recoil_template="bolter_p1_m2"'});
 const alt=extract(sources,'recoil',{target:'alternate_fire',actions:'{alternate_fire={recoil_template="bolter_p1_m2"}}'});
 const zeros=[...m1.stats,...m2.stats,...alt.stats].filter(s=>s.min===0&&s.max===0);
 // The finding uses still/moving, plus m2 alternate_fire still/moving.
 assert.equal(zeros.length,0);assert.equal(m1.stats.length+m2.stats.length+alt.stats.length,0);
 assert.ok([...m1.unknown,...m2.unknown,...alt.unknown].every(x=>x.reason==='DYNAMIC_VALUE'));
 assert.equal(m1.unknown.length+m2.unknown.length+alt.unknown.length,12);
 assert.ok(m2.unknown.length>0);
});

// Scenario: a bounded stimm loop uses nonliteral table indices.
// Purpose: finite key enumeration must not override the spec12 alias grammar.
test('UnitT20_stimm computed writes revoke focus values',()=>{
 const file='scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua';
 const sources={[file]:`local TalentSettings=require("scripts/settings/talent/talent_settings")
local stimm_talent_settings=TalentSettings.broker_stimm
local templates={broker_focus_sub_2_damage={max_stacks=5,stat_buffs={ranged_damage=0.03}},syringe_broker_buff={stat_buffs={damage=2},stat_buff_multipliers={}}}
for talent_name, data in pairs(stimm_talent_settings) do
 local syringe_stat_buffs=templates.syringe_broker_buff.stat_buffs
 local multiplier_funcs=templates.syringe_broker_buff.stat_buff_multipliers
 for stat_name,stat_value in pairs(data.buff_data.stat_buffs) do
  syringe_stat_buffs[stat_name]=1
  multiplier_funcs[stat_name]=function() return runtime_value end
 end
 templates[talent_name]={class_name="buff"}
end
return templates`};
 const r=createSkillResolver(reader(sources));const keys=[...['1','2','3','4','5a','5b','5c'].map(n=>'broker_stimm_celerity_'+n),...['1','2','3','4a','5a','4b','5b','4c','5c'].map(n=>'broker_stimm_combat_'+n),...['1','2','3','4','5a','5b'].map(n=>'broker_stimm_durability_'+n),...['1','2','3','4','5a','5b','5c'].map(n=>'broker_stimm_concentration_'+n)];
 assert.equal(keys.length,29);r.setStimmDefinitions(new Map(keys.map(key=>[key,{}])));
 const buffs=r.returned(file),focus=r.get(buffs,'broker_focus_sub_2_damage');
 assert.equal(r.get(r.get(focus,'stat_buffs'),'ranged_damage').reason,'DYNAMIC_VALUE');
 assert.equal(r.get(focus,'max_stacks').reason,'DYNAMIC_VALUE');
 assert.equal(r.get(buffs,'broker_stimm_celerity_1').reason,'CONDITIONAL_ASSIGNMENT');
 assert.equal(r.get(r.get(buffs,'syringe_broker_buff'),'stat_buffs').dynamic.reason,'CONDITIONAL_ASSIGNMENT');
 const dynamic=createSkillResolver(reader(sources));assert.equal(dynamic.get(dynamic.get(dynamic.returned(file),'broker_focus_sub_2_damage'),'max_stacks').reason,'CONDITIONAL_ASSIGNMENT');
 sources[file]=sources[file].replace('templates[talent_name]=','talent_name=runtime_name\n templates[talent_name]=');
 const changed=createSkillResolver(reader(sources));changed.setStimmDefinitions(new Map(keys.map(key=>[key,{}])));
 assert.equal(changed.get(changed.get(changed.returned(file),'broker_focus_sub_2_damage'),'max_stacks').reason,'CONDITIONAL_ASSIGNMENT');
});

test('review2 F3 flamer settings call arguments keep provenance and yield [18.75,26.25]',()=>{
 const sources={...trait('damage','{"targets",1,"power_distribution","attack",{min=0.25,max=0.75}}'),
 'scripts/settings/damage/damage_profile_templates.lua':`local templates={default_flamer_assault_burst={targets={{power_distribution={attack={lerp_basic=15,lerp_perfect=30}}}}}}\nreturn settings("DamageProfileTemplates",templates)`,
 'scripts/settings/projectile/flamer_gas_templates.lua':`local DamageProfileTemplates=require("scripts/settings/damage/damage_profile_templates")\nlocal templates={flamer_p1_m1={damage_profile=DamageProfileTemplates.default_flamer_assault_burst}}\nreturn settings("FlamerGasTemplates",templates)`,
 'weapon.lua':`local FlamerGasTemplates=require("scripts/settings/projectile/flamer_gas_templates")`};
 // Actions are parsed separately, as in the weapon extractor; their references
 // receive the weapon file context through profiles().
 const result=extract(sources,'damage',{target:'action_shoot',actions:'{action_shoot={flamer=FlamerGasTemplates.flamer_p1_m1}}'});
 assert.deepEqual(result.unknown,[]);assert.deepEqual(range(result.stats[0]),[18.75,26.25]);
 assert.ok(result.files.some(f=>f.path==='scripts/settings/damage/damage_profile_templates.lua'));
});

test('review2 F4 ogryn powermaul explosion overrides yield [4,8] and retain template identities',()=>{
 const sources={...trait('explosion','{"radius",{min=0,max=1}}'),
 'scripts/settings/damage/explosion_templates.lua':`local explosion_templates={ogryn_powermaul_activated_impact={radius={lerp_basic=4,lerp_perfect=8}},other={radius={lerp_basic=1,lerp_perfect=2}}}\nreturn explosion_templates`};
 const r=extract(sources,'explosion',{target:'action_left_light',group:'{overrides={ogryn_powermaul_activated_impact={explosion_trait_templates.test},other={explosion_trait_templates.test}}}'});
 assert.deepEqual(r.unknown,[]);assert.deepEqual(r.stats.map(range),[[4,8],[1,2]]);
 assert.notEqual(r.stats[0].key,r.stats[1].key);
});

test('review2 F5 independent force_staff_ball survives clone_instance nested assignments: [90,150]',()=>{
 const sources={...trait('damage','{"power_distribution","attack",{min=0.25,max=0.75}}'),
 'scripts/settings/damage/damage_profile_templates.lua':`local templates={force_staff_ball={power_distribution={attack={lerp_basic=60,lerp_perfect=180}}}}\nreturn settings("DamageProfileTemplates",templates)`,
 'scripts/settings/projectile/projectile_templates.lua':`local projectile_templates={} local _require_templates=${JSON.parse(readFileSync(new URL('./fixtures/review6/finite-data-helpers.json',import.meta.url))).find(d=>d.name==='_require_templates').raw} _require_templates("scripts/settings/projectile/player_projectile_templates") return projectile_templates`,
 'scripts/settings/projectile/player_projectile_templates.lua':`local DamageProfileTemplates=require("scripts/settings/damage/damage_profile_templates")
local projectile_templates={psyker_throwing_knives={damage={impact={damage_profile="knife"},fuse={kill_at_lifetime=1}}}}
projectile_templates.psyker_throwing_knives_aimed=table.clone_instance(projectile_templates.psyker_throwing_knives)
projectile_templates.psyker_throwing_knives_aimed.damage.fuse.kill_at_lifetime=3
projectile_templates.force_staff_ball={damage={impact={damage_profile=DamageProfileTemplates.force_staff_ball}}}
return projectile_templates`,
 'weapon.lua':`local ProjectileTemplates=require("scripts/settings/projectile/projectile_templates")`};
 const r=extract(sources,'damage',{target:'rapid_left',actions:'{rapid_left={projectile=ProjectileTemplates.force_staff_ball}}'});
 assert.deepEqual(r.unknown,[]);assert.deepEqual(range(r.stats[0]),[90,150]);
 const parsed=parseLuaStatic(sources['scripts/settings/projectile/player_projectile_templates.lua']);
 const original=field(field(field(parsed.locals.projectile_templates,'psyker_throwing_knives'),'damage'),'fuse');
 assert.equal(field(original,'kill_at_lifetime').value,1);
 for(const resolver of [createSkillResolver(reader(sources)),staticBuffModules(reader(sources))]) {
  const file='scripts/settings/projectile/player_projectile_templates.lua';
  const n=resolver.returned?resolver.returned(file):resolver.load(file);
  assert.equal((resolver.get(n,'force_staff_ball')).type,'table');
 }
});

test('review2 F6 autogun spread arithmetic yields [0.55,0.325]; pure helper reads its body',()=>{
 const sources={...trait('spread','{"still","immediate_spread","shooting",1,"pitch",{min=0.05,max=0.95}}'),
 'scripts/settings/equipment/spread_templates.lua':`local p1_m1_multi=1.25\nlocal spread_templates={autogun_p1_m1={still={immediate_spread={shooting={{pitch={lerp_basic=0.45*p1_m1_multi,lerp_perfect=0.25*p1_m1_multi}}}}}}}\nreturn spread_templates`};
 const result=extract(sources,'spread',{source:'weapon_template.spread_template="autogun_p1_m1"'});
 assert.deepEqual(result.unknown,[]);assert.deepEqual(range(result.stats[0]),[0.55,0.325]);
 assert.ok(result.files.some(f=>f.path.endsWith('spread_templates.lua')&&f.line===1),'local constant provenance');
 const file='scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua';
 const helper=`local function lerpable_timescale(value)\n return {lerp_basic=value*0.75,lerp_perfect=value*1.25}\nend\nlocal weapon_handling_templates={test={scale=lerpable_timescale(1),dynamic=lerpable_timescale(runtime_value)}}\nreturn weapon_handling_templates`;
 const hs={...trait('weapon_handling','{"scale",{min=0,max=1}},{"dynamic",0.5}'),[file]:helper};
 const h=extract(hs,'weapon_handling',{source:'weapon_template.weapon_handling_template="test"'});
 assert.deepEqual(range(h.stats[0]),[0.75,1.25]);assert.equal(h.unknown[0].reason,'FUNCTION_VALUE');
 hs[file]=helper.replace('value*0.75','-(value + 2) / 4');
 assert.deepEqual(range(extract(hs,'weapon_handling',{source:'weapon_template.weapon_handling_template="test"'}).stats[0]),[-0.75,1.25]);
 hs[file]=helper.replace('return {','if external then return {} end\n return {');
 assert.equal(extract(hs,'weapon_handling',{source:'weapon_template.weapon_handling_template="test"'}).stats.length,0);
});
