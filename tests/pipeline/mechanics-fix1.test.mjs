import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createMechanics} from '../../pipeline/lib/mechanics.mjs';
import {buildSkills} from '../../pipeline/extract-skills.mjs';
import {build as buildBlessings} from '../../pipeline/extract-blessings.mjs';
import {createSourceReader} from '../../pipeline/lib/source-reader.mjs';
import {siblingRepo} from '../../pipeline/lib/inputs.mjs';
import {loadTextIndex} from '../../pipeline/lib/official-text.mjs';

const DAMAGE='scripts/utilities/attack/damage_calculation.lua';
const STAGGER='scripts/utilities/attack/stagger_calculation.lua';
const POWER='scripts/utilities/attack/power_level.lua';
const BUFF='scripts/settings/buff/buff_templates.lua';
function fixture(source,extra={}) {
 const map=new Map(Object.entries({[BUFF]:source,...extra}));
 const engine=createMechanics({exists:p=>map.has(p),read:p=>map.get(p),list:()=>[...map.keys()]});
 const item={id:'darktide:skill:test:shared',key:'shared',values:{},source:{}};
 const c=engine.context(item);c.buff('shared');return {item,c};
}
// Scenario: only a stagger weakspot stat is present alongside the damage consumer.
// Purpose: weakspot spelling must never imply finesse damage.
test('UnitT10_stagger weakspot alone never emits finesse scope',()=>{
 const {item}=fixture('return {shared={stat_buffs={stagger_weakspot_reduction_modifier=0.5}}}',{
  [DAMAGE]:'local final_finesse_damage = base_finesse_damage * finesse_buff_damage_multiplier\nlocal is_finesse_hit = is_critical_strike or hit_weakspot',
  [STAGGER]:'local weakspot_modifier = hit_weakspot and attacker_stat_buffs.stagger_weakspot_reduction_modifier or 1\nlocal burning_modifier = is_burning and attacker_stat_buffs.stagger_burning_reduction_modifier or 1\nlocal modifier = weakspot_modifier * burning_modifier'
 });
 assert.ok(!Object.keys(item.values.mechanics).some(k=>k.startsWith('finesse.')));
 const key='stat_rule.shared.stat_buffs.stagger_weakspot_reduction_modifier.consumer_stage';
 assert.equal(item.values.mechanics[key]?.value,'stagger_reduction');
 assert.ok(item.source.valueSources['/mechanics/'+key].some(s=>s.path===STAGGER&&s.line===1));
});
// Scenario: a timed stack buff uses the verified expiry, refresh and -1 method.
// Purpose: represent one lost stack from its consumer rather than HUD priority.
test('UnitT15_stack decay count requires the remove stack method',()=>{
 const path='scripts/extension_systems/buff/buffs/buff.lua',base='scripts/extension_systems/buff/buff_extension_base.lua';
 const remove='Buff.remove_stack = function (self) local current_stack_count = self:stack_count()\nlocal new_stack_count = current_stack_count - 1\nself:set_stack_count(new_stack_count) return new_stack_count end';
 const extra={[path]:'if t > start_time + total_duration then self._finished = true end\n'+remove,[base]:'local finished = buff_instance:finished() local should_remove_stack, last_stack = buff_instance:should_remove_stack() if finished or should_remove_stack then self:_remove_internally_controlled_buff(index) end\nif current_stack_count > 1 then buff_instance:remove_stack() self:_on_remove_buff_stack(buff_instance, current_stack_count) if buff_instance:refresh_duration_on_remove_stack() then local max_stacks = buff_instance:max_stacks() if current_stack_count <= max_stacks then local t = FixedFrame.get_latest_fixed_time() buff_instance:set_start_time(t) end end'};
 const source='return {shared={class_name="buff",duration=90,max_stacks=10,refresh_duration_on_remove_stack=true,hud_priority=1}}';
 const {item}=fixture(source,extra),key='buff.shared.removed_stacks';
 assert.equal(item.values.mechanics[key]?.value,1);
 assert.ok(item.source.valueSources['/mechanics/'+key].some(s=>s.path===path&&s.line===3));
 const changed=fixture(source,{...extra,[path]:extra[path].replace('current_stack_count - 1','current_stack_count - 2')}).item;
 assert.equal(changed.values.mechanics[key],undefined);
});
// Scenario: the Lua callback uses distinct local and steps tokens, as in e46b892.
// Purpose: reject the historical localsteps token mismatch and retain floor evidence.
test('UnitT20_stamina rounding recognizes real Lua token boundaries',()=>{
 const {item}=fixture('return {shared={class_name="stepped_stat_buff",bonus_step_func=function()\nlocal steps = math.floor((1 - current_stamina_fraction) / 0.2)\nreturn steps\nend}}');
 assert.equal(item.values.mechanics['stat_rule.shared.stamina_rounding']?.value,'floor');
 assert.deepEqual(item.source.valueSources['/mechanics/stat_rule.shared.stamina_rounding'],[{path:BUFF,line:2}]);
});
// Scenario: both the raw amount and stack cap are cross-file constants.
// Purpose: maximum_raw must retain definitions as well as reference sites.
test('UnitT30_maximum raw includes both resolved constant definitions',()=>{
 const {item}=fixture('local s=require("settings")\nreturn {shared={max_stacks=s.cap,stat_buffs={critical_strike_damage=s.amount}}}',{'settings.lua':'return {\namount=0.25,\ncap=2\n}'});
 const key='/mechanics/finesse.shared.critical_strike_damage.maximum_raw';
 assert.equal(item.values.mechanics[key.slice('/mechanics/'.length)]?.value,0.5);
 for(const line of [2,3])assert.ok(item.source.valueSources[key]?.some(s=>s.path==='settings.lua'&&s.line===line),String(line));
});
// Scenario: the deciding removal call is between the function header and end.
// Purpose: valueSources are individual lines, never implicit start/end ranges.
test('UnitT40_multiline rules include the deciding middle statement',()=>{
 const path='drone.lua',{item,c}=fixture('return {}',{[path]:'ProximityAreaBuffDrone.unit_left_proximity = function (self, t, unit)\n self:_remove_buff_from_unit(unit)\nend'});
 c.rule(['area_buff','drone','remove_on_exit'],path,'ProximityAreaBuffDrone.unit_left_proximity = function (self, t, unit) self:_remove_buff_from_unit(unit) end',true);
 assert.ok(item.source.valueSources['/mechanics/area_buff.drone.remove_on_exit'].some(s=>s.line===2));
});

let realData;
function real() {
 if(!realData){const reader=createSourceReader({repo:siblingRepo('Darktide-Source-Code-e46b892'),commit:'e46b8926cfa3fa35503e4b80b15aab7a804314e4'}),text=loadTextIndex(siblingRepo('DarkTide-Pipeline-Work/1.13.4/extract/text.json')),envelope={textBatch:'26101089'};
  realData={skills:buildSkills({reader,text,envelope}).items,blessings:buildBlessings({reader,text,envelope}).items};}
 return realData;
}
const options={skip:process.env.PIPELINE_REAL_SMOKE!=='1'};
// Scenario: three real weakspot buffs feed stagger/power rather than finesse.
// Purpose: protect actual e46b892 consumers and their exact source lines.
test('InterT10_real weakspot stats retain stagger and power consumers',options,()=>{
 const data=real();
 for(const [category,key,stat,stage,path,line] of [
  ['blessings','weapon_trait_bespoke_autogun_p3_negate_stagger_reduction_on_weakspot','stagger_weakspot_reduction_modifier','stagger_reduction',STAGGER,207],
  ['skills','adamant_stacking_weakspot_strength','weakspot_power_level_modifier','power_level_input',POWER,33],
  ['skills','ogryn_weakspot_damage','melee_weakspot_power_modifier','power_level_input',POWER,34]
 ]){const item=data[category].find(i=>i.key===key);assert.ok(item,key);
  assert.ok(!Object.keys(item.values.mechanics).some(k=>k.startsWith('finesse.')&&(/scope$|single_bonus$/.test(k))),key);
  const entries=Object.entries(item.values.mechanics).filter(([k])=>k.endsWith('.'+stat+'.consumer_stage'));assert.ok(entries.length,key);
  for(const [k,p] of entries){assert.equal(p.value,stage);assert.ok(item.source.valueSources['/mechanics/'+k].some(s=>s.path===path&&s.line===line),key);}
 }
});
// Scenario: real stamina callbacks, critical maximum, and drone removal span sources.
// Purpose: retain exact real source evidence for M1-003, M1-004, and M1-005.
test('InterT20_real rounding maximum and drone sources include deciding lines',options,()=>{
 const data=real();
 const rounded=data.blessings.filter(i=>Object.keys(i.values.mechanics).some(k=>k.endsWith('.stamina_rounding')));
 assert.ok(rounded.length>=9);
 assert.ok(rounded.some(i=>i.key.includes('combataxe_p1')));
 let baseCallbacks=0;
 for(const item of rounded)for(const [key,p] of Object.entries(item.values.mechanics).filter(([k])=>k.endsWith('.stamina_rounding'))){assert.equal(p.value,'floor');const refs=item.source.valueSources['/mechanics/'+key];
  const base=refs.some(s=>s.path.endsWith('base_weapon_trait_buff_templates.lua')&&s.line===796);
  if(base)baseCallbacks++;
  assert.ok(base||refs.some(s=>s.path.endsWith('weapon_traits_bespoke_ogryn_hammer_2h_p1_buff_templates.lua')&&s.line===23));
 }
 assert.equal(baseCallbacks,8);
 const crit=data.skills.find(i=>Object.hasOwn(i.values.mechanics,'finesse.adamant_execution_order_crit.critical_strike_damage.maximum_raw'));
 assert.ok(crit);assert.ok(crit.source.valueSources['/mechanics/finesse.adamant_execution_order_crit.critical_strike_damage.maximum_raw'].some(s=>s.path.endsWith('talent_settings_adamant.lua')&&s.line===109));
 const drone=data.skills.find(i=>i.key==='adamant_area_buff_drone_improved');
 for(const [suffix,line] of [['remove_on_exit',87],['remove_on_destroy',68]])assert.ok(drone.source.valueSources['/mechanics/area_buff.drone.'+suffix].some(s=>s.path.endsWith('proximity_area_buff_drone.lua')&&s.line===line));
});
// Scenario: real chemical dependency loses one stack and resets its timer.
// Purpose: cover the count with buff.lua:462, never the equal HUD priority.
test('InterT30_real chemical dependency records stack removal from its method',options,()=>{
 const item=real().skills.find(i=>i.key==='broker_keystone_chemical_dependency'),key='buff.broker_keystone_chemical_dependency_stack.removed_stacks';
 assert.equal(item.values.mechanics[key]?.value,1);
 assert.ok(item.source.valueSources['/mechanics/'+key].some(s=>s.path==='scripts/extension_systems/buff/buffs/buff.lua'&&s.line===462));
 assert.equal(item.values.mechanics['buff.broker_keystone_chemical_dependency_stack.removal_restarts_timer']?.value,true);
});
