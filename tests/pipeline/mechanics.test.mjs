import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { buildSkills } from '../../pipeline/extract-skills.mjs';
import { diffCategory } from '../../pipeline/lib/diff-core.mjs';
import { normalizeLua, createCodeRefs } from '../../pipeline/lib/mechanics-code-refs.mjs';
import { createSkillResolver } from '../../pipeline/lib/skill-lua.mjs';
import { createMechanics } from '../../pipeline/lib/mechanics.mjs';
import { createSourceReader } from '../../pipeline/lib/source-reader.mjs';
import { siblingRepo } from '../../pipeline/lib/inputs.mjs';
import { loadTextIndex } from '../../pipeline/lib/official-text.mjs';
import { coverage } from '../../scripts/mechanics-coverage.mjs';
import { spawnSync } from './test-env.mjs';

function files() {
 const result=new Map(),root=new URL('./fixtures/mechanics/',import.meta.url);
 function walk(dir=''){for(const e of readdirSync(new URL(dir,root),{withFileTypes:true})){const p=dir+e.name;if(e.isDirectory())walk(p+'/');else result.set(p,readFileSync(new URL(p,root),'utf8'));}}walk();return result;
}
function reader(map){return {commit:'a'.repeat(40),exists:p=>map.has(p),read:p=>map.get(p),list:(prefix='')=>[...map.keys()].filter(p=>p.startsWith(prefix)).sort()};}
const extract=map=>buildSkills({reader:reader(map),text:{lookup:()=>null},envelope:{textBatch:'100'}}).items;

// Scenario: two talents share a template and the third uses an independent template.
// Purpose: C6 changes follow the actual extractor dependency graph.
test('InterT10_mechanics extract and diff isolate template numeric changes',()=>{
 const map=files(),before=extract(map),p='scripts/settings/buff/test.lua';
 map.set(p,map.get(p).replace('duration = 5','duration = 6'));
 const diff=diffCategory('skills',before,extract(map));
 assert.deepEqual(diff.changed,['darktide:skill:test:alpha','darktide:skill:test:beta']);
 assert.deepEqual(diff.unchanged,['darktide:skill:test:gamma']);
 assert.equal(before[0].values.mechanics['buff.shared.duration'].value,5);
 assert.ok(before[0].source.valueSources['/mechanics/buff.shared.duration'].length);
});
// Scenario: blank lines and comments shift every definition location.
// Purpose: sources never become fingerprint values and C3 ignores trivia.
test('InterT20_mechanics extract and diff ignore whitespace and comments',()=>{
 const map=files(),before=extract(map);
 for(const [p,s] of map)map.set(p,'\n-- moved\n--[=[ long comment ]=]\n'+s.replace('duration = 5','duration -- comment\n = 5'));
 assert.deepEqual(diffCategory('skills',before,extract(map)).changed,[]);
});
// Scenario: only a named function body changes; no number changes.
// Purpose: table-to-function tracking detects behavioral edits one level down.
test('InterT30_mechanics extract and diff detect named function body changes',()=>{
 const map=files(),before=extract(map),p='scripts/settings/buff/test.lua';
 map.set(p,map.get(p).replace('return true','return false'));
 assert.deepEqual(diffCategory('skills',before,extract(map)).changed,['darktide:skill:test:alpha','darktide:skill:test:beta']);
 assert.ok(Object.keys(before[0].source.codeRefs).some(k=>k.endsWith('#check_proc')));
});
// Scenario: identical values come from separate templates and talent overrides.
// Purpose: preserve rule identity and reject a dynamically replaced template.
test('UnitT10_mechanics preserve templates overrides sources and fail closed',()=>{
 const map=files(),r=reader(map),engine=createMechanics(r),res=createSkillResolver(r);
 const item={id:'darktide:skill:test:alpha',key:'alpha',values:{params:{}},source:{}};
 engine.skill(item,res.get(res.get(res.returned('scripts/settings/ability/archetype_talents/talents/test_talents.lua'),'talents'),'alpha'));
 assert.equal(item.values.mechanics['buff.shared.talent_overrides.1.duration'].value,7);
 assert.equal(item.values.mechanics['buff.shared.refresh'].value,'restart_shared_timer');
 assert.equal(item.values.mechanics['stat_rule.shared.stat_buffs.damage.aggregation'].value,'number');
 map.set('scripts/settings/buff/test.lua','local templates = {}\ntemplates.shared = dynamic()\nreturn templates');
 const bad=extract(map)[0];assert.ok(Object.values(bad.values.mechanics).some(p=>p.value===null&&p.unknown==='DYNAMIC_VALUE'));
});
// Scenario: comments and whitespace occur inside quoted and long-bracket strings.
// Purpose: remove comments outside strings only, then all whitespace as C3 specifies.
test('UnitT20_codeRefs normalize Lua according to C3',()=>{
 assert.equal(normalizeLua(' { x = "-- hi", -- outside\n y = [=[a -- b]=] --[==[c]==]\n } '),'{x="--hi",y=[=[a--b]=]}');
 const map=new Map([['x.lua','local fn = function() return true end\nlocal t = { callback=fn }\nreturn t']]);
 const c=createCodeRefs(reader(map));c.add('x.lua','t');assert.equal(Object.keys(c.refs).length,2);
 // Literal punctuation/keywords cannot open definitions or make the index loop.
 const module=new URL('../../pipeline/lib/mechanics-code-refs.mjs',import.meta.url).href;
 const child=`import {createCodeRefs} from ${JSON.stringify(module)}; const source=${JSON.stringify('local brace = "{"\nlocal t={kind="function"} return t')}; const c=createCodeRefs({exists:()=>true,read:()=>source}); c.add('x.lua','t'); c.add('x.lua','brace'); c.add('x.lua','t.kind'); if(Object.keys(c.refs).length!==1||c.skipped.size!==2)process.exit(1);`;
 const result=spawnSync(process.execPath,['--input-type=module','-e',child],{encoding:'utf8',timeout:3000});assert.equal(result.status,0,result.stderr||result.error?.message);
});

// Scenario: a linked reserve stat has distinct clip and reserve consumers.
// Purpose: prove enum meaning from actual statements and reject a changed consumer.
test('UnitT30_ammo floor and clip isolation require explicit consumers',()=>{
 const map=files(),p='scripts/extension_systems/weapon/player_unit_weapon_extension.lua';
 map.set('scripts/settings/buff/test.lua','return {shared={stat_buffs={ammo_reserve_capacity=0.25}}}');
 map.set(p,'local capacity_modifier = stat_buffs.ammo_reserve_capacity\nlocal clip_size_modifier = stat_buffs.clip_size_modifier\ninventory_slot_component.max_ammunition_reserve = math.clamp(math.floor(inventory_slot_component.max_ammunition_reserve * capacity_modifier), 0, ammo_large_hard_limit)\ninventory_slot_component.max_ammunition_clip[i] = math.clamp(math.floor(inventory_slot_component.max_ammunition_clip[i] * clip_size_modifier), 0, ammo_small_hard_limit)');
 let item=extract(map)[0];assert.equal(item.values.mechanics['ammo.shared.reserve_bonus'].value,0.25);assert.equal(item.values.mechanics['ammo.shared.rounding'].value,'floor');assert.equal(item.values.mechanics['ammo.shared.affects_clip'].value,false);
 map.set(p,map.get(p).replaceAll('math.floor','math.ceil'));item=extract(map)[0];assert.notEqual(item.values.mechanics['ammo.shared.rounding']?.value,'floor');
});
// Scenario: a critical damage stat reaches the explicit finesse consumer.
// Purpose: distinguish extra finesse damage from a fixed final-damage multiplier.
test('UnitT40_finesse scope requires the named extra damage expression',()=>{
 const map=files();map.set('scripts/settings/buff/test.lua','return {shared={stat_buffs={critical_strike_damage=0.25}}}');
 map.set('scripts/utilities/attack/damage_calculation.lua','local final_finesse_damage = base_finesse_damage * finesse_buff_damage_multiplier');
 assert.equal(extract(map)[0].values.mechanics['finesse.shared.scope'].value,'finesse_bonus');
});
// Scenario: an activated parent consumes an exact successful-sweep predicate.
// Purpose: refresh-at-cap and miss removal require both template and class logic.
test('UnitT50_parent buff lifecycle requires sweep predicate and class branches',()=>{
 const map=files();map.set('scripts/settings/buff/test.lua','return {shared={class_name="weapon_trait_activated_parent_proc_buff",child_duration=3.5,active_proc_func={on_sweep_finish=function(params,template_data,template_context) return params.num_hit_units > 0 end}}}');
 map.set('scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua','local function update() if active then activated_proc = true else self:_remove_child_buff_stack(t, self._num_child_stacks - 1) end end');
 map.set('scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua','WeaponTraitParentProcBuff._add_child_buff_stack = function(self,t) self:set_start_time(t) end');
 const m=extract(map)[0].values.mechanics;
 assert.equal(m['buff.shared.clear_on_missed_sweep']?.value,true);
 assert.equal(m['buff.shared.refresh_on_successful_sweep']?.value,true);
});
// Scenario: a coverage record contains a real duration and an editorial example.
// Purpose: reject absent source numbers and report exclusions without inventing values.
test('UnitT60_coverage rejects missing constants and records editorial inputs',()=>{
 const id='darktide:skill:test:alpha',inv={items:[{groupId:'B1-skills',category:'skills',recoverableByFixedScript:true,newId:id,missingIndex:0,oldText:'持續 9 秒',proposedValue:{duration:9},linkPath:'BuffTemplates.shared.duration'},{groupId:'A1-skills',category:'skills',recoverableByFixedScript:true,newId:id,missingIndex:1,kind:'example',oldText:'原本101發，乘1.25取整126發',proposedValue:{rounding:'floor'}}]};
 const items=extract(files());items[0].values.mechanics['ammo.shared.rounding']={value:'floor'};
 const result=coverage(inv,{skills:{items},blessings:{items:[]}});
 assert.equal(result.items[0].status,'notCovered');assert.ok(result.items[0].reasons.some(r=>r.includes('9')));
 assert.equal(result.items[1].status,'covered');assert.ok(result.items[1].numericChecks.filter(n=>[101,126].includes(n.value)).every(n=>n.status==='editorial'));
});
// Scenario: a callback name is overwritten and a function refers to another helper.
// Purpose: skip ambiguous names and stop function tracking after one level.
test('UnitT70_codeRefs skip overwritten names and stop at one function level',()=>{
 const map=new Map([['x.lua','local function deeper() return true end\nlocal function fn() return deeper() end\nlocal t={callback=fn}\nreturn t']]);
 let c=createCodeRefs(reader(map));c.add('x.lua','t');assert.equal(Object.keys(c.refs).length,2);assert.ok(!Object.keys(c.refs).some(k=>k.endsWith('#deeper')));
 map.set('x.lua',map.get('x.lua').replace('local t=','fn = dynamic()\nlocal t='));
 c=createCodeRefs(reader(map));c.add('x.lua','t');assert.equal(Object.keys(c.refs).length,1);assert.equal(c.skipped.size,1);
});
// Scenario: two blessing tiers override the same buff with distinct constants.
// Purpose: retain tier identity and source pointers even when a base value matches.
test('UnitT80_blessing tier mechanics retain exact override sources',()=>{
 const map=files();map.set('trait.lua','return {buffs={shared={{duration=5},{duration=9}}}}');
 map.set('scripts/settings/buff/test.lua',map.get('scripts/settings/buff/test.lua').replace('stat_buffs={damage=0.25}','stat_buffs={damage=0.25,critical_strike_damage=0.5}'));
 map.set('scripts/utilities/attack/damage_calculation.lua','local final_finesse_damage = base_finesse_damage * finesse_buff_damage_multiplier');
 const engine=createMechanics(reader(map)),item={id:'darktide:blessing:test',key:'test',values:{params:{},tiers:[{tier:1,params:{}},{tier:2,params:{}}]},source:{}};
 engine.blessing(item,engine.r.returned('trait.lua'));
 assert.equal(item.values.tiers[0].mechanics['buff.shared.override.duration'].value,5);assert.equal(item.values.tiers[1].mechanics['buff.shared.override.duration'].value,9);
 assert.equal(item.values.mechanics['stat_rule.shared.stat_buffs.damage.aggregation'].value,'number');
 assert.equal(item.values.mechanics['buff.shared.refresh'].value,'restart_shared_timer');
 assert.equal(item.values.mechanics['finesse.shared.scope'].value,'finesse_bonus');
 for(let i=0;i<2;i++)assert.deepEqual(item.source.valueSources[`/tiers/${i}/mechanics/buff.shared.override.duration`],[{path:'trait.lua',line:1}]);
});
// Scenario: the same template exposes a lerped stat and per-step stat tables.
// Purpose: retain every endpoint/step and its aggregation identity.
test('UnitT90_stat rules preserve lerped endpoints and discrete steps',()=>{
 const map=files();map.set('scripts/settings/buff/test.lua','return {shared={lerped_stat_buffs={damage={min=0.1,max=0.4}},stepped_stat_buffs={{damage=0.2},{damage=0.3}},stat_buffs={power_level_modifier=0.2}}}');
 map.set('scripts/utilities/attack/damage_profile.lua','local scaled_power_level = PowerLevel.scale_power_level_to_power_type_curve(power_level, power_type, stat_buffs_or_nil, attack_type_or_nil, weakspot_or_nil, attacker_unit_or_nil, target_unit_or_nil, damage_profile)');
 const m=extract(map)[0].values.mechanics;
 assert.equal(m['stat_rule.shared.lerped_stat_buffs.damage.raw.min'].value,0.1);
 assert.equal(m['stat_rule.shared.lerped_stat_buffs.damage.aggregation'].value,'number');
 assert.equal(m['stat_rule.shared.stepped_stat_buffs.1.stat_buffs.damage.raw'].value,0.2);
 assert.equal(m['stat_rule.shared.stepped_stat_buffs.2.stat_buffs.damage.raw'].value,0.3);
 assert.equal(m['stat_rule.power.scaling_stage'].value,'power_level_input');assert.equal(m['stat_rule.power.fixed_final_damage_percent'].value,false);
});
// Scenario: brain burst inherits an explicitly registered base ability.
// Purpose: W1 charge times and peril inputs stay independent for both modes.
test('UnitT92_brain burst links base ability actions and charge templates',()=>{
 const map=files();map.set('definition.lua','return {}');
 map.set('scripts/settings/archetype/archetypes/psyker_archetype.lua','return {base_talents={psyker_grenade_smite={}}}');
 map.set('scripts/settings/ability/archetype_talents/talents/psyker_talents.lua','local PlayerAbilities=require("scripts/settings/ability/player_abilities/player_abilities") return {talents={psyker_grenade_smite={player_ability={ability=PlayerAbilities.psyker_smite}}}}');
 map.set('scripts/settings/ability/player_abilities/player_abilities.lua','local player_abilities={psyker_smite={inventory_item_name="content/items/weapons/player/psyker_smite"}} return player_abilities');
 map.set('scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua','return {actions={action_charge_target_sticky={charge_time=2,charge_template="locked"},action_charge_target={charge_template="unlocked"}}}');
 map.set('scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua','return {locked={charge_duration=3,warp_charge_percent=0.3},unlocked={charge_duration=3,warp_charge_percent=0.2}}');
 map.set('scripts/extension_systems/weapon/actions/action_smite_targeting.lua','local charge_time = action_settings.charge_time or 3');
 map.set('scripts/extension_systems/weapon/actions/action_damage_target.lua','if self._dealt_damage and should_add_warp_charge then self:_pay_warp_charge_cost_immediate(t, self._charge_level, true) end');
 const engine=createMechanics(reader(map)),item={id:'darktide:skill:psyker:psyker_brain_burst_improved',key:'psyker_brain_burst_improved',values:{archetype:'psyker',params:{}},source:{}};
 engine.skill(item,engine.r.returned('definition.lua'));
 assert.equal(item.values.mechanics['ability.brain_burst.action_charge_target_sticky.charge_time'].value,2);
 assert.equal(item.values.mechanics['ability.brain_burst.action_charge_target.charge_time'].value,3);
 assert.equal(item.values.mechanics['ability.brain_burst.action_charge_target.charge_template.warp_charge_percent'].value,0.2);
 assert.equal(item.values.mechanics['ability.brain_burst.attack_requires'].value,'dealt_damage');
});
// Scenario: the drone relation definition names an allied buff and a removal callback.
// Purpose: D1 area scope and exit removal require their actual source structures.
test('UnitT94_drone removal derives from relation and explicit exit call',()=>{
 const map=files();map.set('definition.lua','return {special_rule={identifier="adamant_buff_drone_improved"}}');
 map.set('scripts/settings/projectile/player_projectile_templates.lua','return {area_buff_drone={deployable={relation_init_data={allied={logic={{init_data={buff_to_add="shared"}}}}}}}}');
 map.set('scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua','ProximityAreaBuffDrone.unit_left_proximity = function(self,t,unit) self:_remove_buff_from_unit(unit) end');
 const engine=createMechanics(reader(map)),item={id:'darktide:skill:adamant:test',key:'test',values:{archetype:'adamant',params:{}},source:{}};
 engine.skill(item,engine.r.returned('definition.lua'));
 assert.equal(item.values.mechanics['area_buff.drone.remove_on_exit'].value,true);
 assert.equal(item.values.mechanics['area_buff.drone.relations.allied.logic.1.init_data.buff_to_add'].value,'shared');
 assert.ok(Object.keys(item.source.valueSources).some(k=>k.startsWith('/mechanics/area_buff.')));
 // Removed upgrade links must not resurrect old, still-defined templates.
 map.set('scripts/settings/buff/test.lua',map.get('scripts/settings/buff/test.lua')+'\n');
 map.set('scripts/settings/buff/buff_templates.lua','local templates=require("scripts/settings/buff/test") templates.adamant_drone_talent_buff={stat_buffs={damage=0.9}} templates.adamant_drone_talent_debuff={stat_buffs={damage=-0.9}} return templates');
 const changed=createMechanics(reader(map)),next={id:item.id,key:item.key,values:{archetype:'adamant',params:{}},source:{}};changed.skill(next,changed.r.returned('definition.lua'));
 assert.ok(!Object.keys(next.values.mechanics).some(k=>k.startsWith('buff.adamant_drone_talent_')));
});
// Scenario: the fixed overload stack helper calls its named trigger helper.
// Purpose: link the explicit allied buff without extending codeRefs beyond one level.
test('UnitT96_overload fixed helper chain links allied stats without recursive hashes',()=>{
 const map=files();map.set('definition.lua','return {passive={buff_template_name="shared"}}');
 map.set('scripts/settings/buff/test.lua',`local function _trigger_overload_keystone(params,template_data,template_context,t) template_context.buff_extension:add_internally_controlled_buff("allies",t) end
local function _add_overload_stack(params,template_data,template_context,t) _trigger_overload_keystone(params, template_data, template_context, t) end
return {shared={proc_func=function(params,template_data,template_context,t) _add_overload_stack(params,template_data,template_context,t) end},allies={stat_buffs={damage=0.15}}}`);
 const engine=createMechanics(reader(map)),item={id:'darktide:skill:cryptic:cryptic_overload_keystone_permastack',key:'cryptic_overload_keystone_permastack',values:{archetype:'cryptic',params:{}},source:{}};
 engine.skill(item,engine.r.returned('definition.lua'));
 assert.equal(item.values.mechanics['buff.allies.stat_buffs.damage']?.value,0.15);
 assert.ok(!Object.keys(item.source.codeRefs).some(k=>k.endsWith('#_trigger_overload_keystone')));
});
// Scenario: the exact cooldown timer updates once and restores a capped ability resource.
// Purpose: distinguish strict timer ticks, refresh and resource clamping.
test('UnitT97_cooldown timer exposes strict ticks and resource cap',()=>{
 const map=files();map.set('scripts/settings/buff/test.lua','return {shared={update_func=function(template_data,template_context,dt,t) if not template_context.is_server then return end if t > template_data.timer then template_data.timer=template_data.timer+1 template_data.ability_extension:restore_ability_resource("combat_ability",talent_settings.terminus_warrant.cdr) end end}}');
 map.set('scripts/extension_systems/ability/player_unit_ability_extension.lua','local new_resource_amount = math.clamp(remaining_ability_resource + target_resource_amount_to_restore, 0, max_ability_resource)');
 const m=extract(map)[0].values.mechanics;
 assert.equal(m['buff.shared.one_tick_per_update'].value,true);assert.equal(m['buff.shared.tick_interval'].value,1);assert.equal(m['buff.shared.tick_comparison'].value,'strict_greater');assert.equal(m['buff.shared.resource_cap'].value,'ability_max_resource');
});
// Scenario: base and improved grenades have separate capacities and no explicit usage limits.
// Purpose: read the default charge cost from the consumer and retain the capacity delta.
test('UnitT98_grenade capacities and default charge use retain separate sources',()=>{
 const map=files();map.set('definition.lua','return {}');
 map.set('scripts/settings/ability/player_abilities/player_abilities.lua','local player_abilities={adamant_grenade={max_charges=3},adamant_grenade_improved={max_charges=4,usage_cost_type="charges"}} return player_abilities');
 map.set('scripts/extension_systems/ability/player_unit_ability_extension.lua','local min_charges_usage_cost = equipped_ability and equipped_ability.min_charges_usage_cost or 1\nlocal num_charges_to_use = math.clamp(current_charges, min_charges_usage_cost, max_charges_usage_cost)');
 const engine=createMechanics(reader(map)),item={id:'darktide:skill:adamant:adamant_grenade_improved',key:'adamant_grenade_improved',values:{archetype:'adamant',params:{}},source:{}};
 engine.skill(item,engine.r.returned('definition.lua'));const m=item.values.mechanics;
 assert.equal(m['ability.adamant_grenade_improved.charge_increase'].value,1);assert.equal(m['ability.adamant_grenade_improved.base_charges_per_use'].value,1);assert.equal(m['ability.adamant_grenade_improved.charge_use_rule'].value,'clamp_to_ability_cost_limits');
});

let realItems;
function real(){if(!realItems){const source=createSourceReader({repo:siblingRepo('Darktide-Source-Code-e46b892'),commit:'e46b8926cfa3fa35503e4b80b15aab7a804314e4'});realItems=buildSkills({reader:source,text:loadTextIndex(siblingRepo('DarkTide-Pipeline-Work/1.13.4/extract/text.json')),envelope:{textBatch:'26101089'}}).items;}return realItems;}
const realOptions={skip:process.env.PIPELINE_REAL_SMOKE!=='1'};
// Scenario: the real e46b892 brain burst has distinct locked and unlocked actions.
// Purpose: protect every requested charge/peril/lock spot-check constant.
test('InterT40_real brain burst preserves charge peril and strict lock threshold',realOptions,()=>{
 const m=real().find(i=>i.key==='psyker_brain_burst_improved').values.mechanics;
 const expected={'action_charge_target_sticky.charge_time':2,'action_charge_target.charge_time':3,'action_charge_target.charge_template.charge_duration':3,'action_charge_target.charge_template.warp_charge_percent':0.2,'action_charge_target_sticky.charge_template.warp_charge_percent':0.3,'action_charge_target.charge_template.full_charge_warp_charge_percent':0.09,'action_use_power.charge_template.warp_charge_percent':0.25,'action_charge_target_lock_on.attack_target_time':0.25,'lock_comparison':'strict_greater'};
 for(const [key,value] of Object.entries(expected))assert.equal(m['ability.brain_burst.'+key]?.value,value,key);
});
// Scenario: the real ammo belt increases reserve capacity only.
// Purpose: protect the raw quarter bonus, floor rounding and separate clip stat.
test('InterT50_real ammo belt preserves reserve floor and clip scope',realOptions,()=>{
 const m=real().find(i=>i.key==='adamant_ammo_belt').values.mechanics;
 for(const [key,value] of Object.entries({reserve_bonus:0.25,rounding:'floor',affects_clip:false}))assert.equal(m['ammo.adamant_ammo_belt.'+key]?.value,value,key);
});
// Scenario: the real improved drone links both upgrade templates and area lifetime.
// Purpose: protect max charge, all upgrade stats and removal on leaving.
test('InterT60_real drone preserves charge both upgrades and removal',realOptions,()=>{
 const m=real().find(i=>i.key==='adamant_area_buff_drone_improved').values.mechanics;
 const expected={'ability.drone.max_charges':1,'buff.adamant_drone_talent_buff.stat_buffs.toughness_damage_taken_multiplier':0.7,'buff.adamant_drone_talent_buff.stat_buffs.revive_speed_modifier':0.3,'buff.adamant_drone_talent_buff.stat_buffs.attack_speed':0.1,'buff.adamant_drone_talent_debuff.stat_buffs.melee_attack_speed':-0.25,'buff.adamant_drone_talent_debuff.stat_buffs.melee_damage':-0.25,'area_buff.drone.remove_on_exit':true};
 for(const [key,value] of Object.entries(expected))assert.equal(m[key]?.value,value,key);
});
