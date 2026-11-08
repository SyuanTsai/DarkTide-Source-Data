import { tokenizeLua } from './lua-static-reader.mjs';
import { callName } from './skill-lua.mjs';

const ABILITIES='scripts/settings/ability/player_abilities/player_abilities.lua';
const CHARGES='scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua';
const TARGET='scripts/extension_systems/weapon/actions/action_smite_targeting.lua';
const SHARED='scripts/utilities/shared_overheat_and_warp_charge_functions.lua';

/** Fixed token recognizer: NUMBER matches a numeric AST token, not text in a
 * comment/string. All other tokens must match exactly. It never evaluates a
 * function; the returned value and source line are the matched literal. */
export function numberRule(c,key,file,pattern,scope) {
 if(!c.reader.exists(file))return false;
 const t=tokenizeLua(scope?.raw??c.reader.read(file)),p=tokenizeLua(pattern).filter(x=>x.type!=='eof'),offset=scope?(scope.line??1)-1:0;
 for(let i=0;i<t.length-p.length;i++){
  if(!p.every((x,j)=>x.value==='NUMBER'?t[i+j]?.type==='number':x.type===t[i+j]?.type&&x.value===t[i+j]?.value))continue;
  const n=t[i+p.findIndex(x=>x.value==='NUMBER')];c.put(key,n.value,[{path:file,line:n.line+offset}]);c.code.location(file,n.line+offset);return true;
 }return false;
}

export function specialMechanics(c,definition) {
 const {r,item,reader}=c;
 const get=(n,...path)=>path.reduce((a,k)=>r.get(a,k),n);
 const ability=name=>r.get(r.returned(ABILITIES),name);
 const settings=r.returned('scripts/settings/talent/talent_settings.lua');
 const scalar=(key,n)=>c.scalar(key,n);
 const unknown=key=>c.put(key,null,[{path:definition.file,line:definition.line}],true);
 if(item.key==='cryptic_overload_keystone_permastack'){
  // This finite two-helper mechanism link does not recurse codeRefs: the hash
  // contract still stops at the functions named directly in the linked table.
  const expected=tokenizeLua('_trigger_overload_keystone(params, template_data, template_context, t)').filter(t=>t.type!=='eof');
  for(const fn of c.code.functions().filter(f=>f.symbol==='_add_overload_stack')){
   const t=tokenizeLua(fn.raw);if(!t.some((_,i)=>expected.every((p,j)=>p.type===t[i+j]?.type&&p.value===t[i+j]?.value)))continue;
   const trigger=c.code.definition(fn.file,'_trigger_overload_keystone');if(trigger)c.linkNames({...trigger,type:'function'});
  }
 }
 const mechanicalKeys=[...Object.keys(c.values),...(item.values.tiers??[]).flatMap(t=>Object.keys(t.mechanics??{}))];
 if(mechanicalKeys.some(k=>/power_level_modifier/.test(k))){
  const file='scripts/utilities/attack/damage_profile.lua',pattern='local scaled_power_level = PowerLevel.scale_power_level_to_power_type_curve(power_level, power_type, stat_buffs_or_nil, attack_type_or_nil, weakspot_or_nil, attacker_unit_or_nil, target_unit_or_nil, damage_profile)';
  if(c.rule(['stat_rule','power','scaling_stage'],file,pattern,'power_level_input'))c.rule(['stat_rule','power','fixed_final_damage_percent'],file,pattern,false);
 }
 if(mechanicalKeys.some(k=>/\.(?:damage_near|damage_far|ranged_damage_near|ranged_damage_far)\.raw$/.test(k))){
  const file='scripts/settings/damage/damage_settings.lua',d=r.returned(file);
  // Respect cross-module revocation. A literal local constant is not a fallback
  // when the effective imported DamageSettings table has become unknown.
  for(const [key,field]of [['near_meters','ranged_close'],['far_meters','ranged_far']])scalar(['stat_rule','distance',key],get(d,field));
  c.rule(['stat_rule','distance','curve'],'scripts/utilities/attack/damage_calculation.lua','local distance_scalar = math.clamp((distance - close_range) / (far_range - close_range), 0, 1)','sqrt_clamped_linear_distance');
  if(c.rule(['stat_rule','distance','combination'],'scripts/utilities/attack/damage_calculation.lua','damage_stat_buffs = damage_stat_buffs + distance_damage_buff','same_stage_sum')){
   for(const [key,p]of Object.entries(c.values))if(key.startsWith('buff.')&&key.endsWith('.stat_buffs.ranged_damage')&&typeof p.value==='number'){
    const farKey=key+'_far',far=c.values[farKey];if(typeof far?.value!=='number')continue;
    const parts=key.split('.');parts[0]='stat_rule';parts[parts.length-1]='ranged_far_combined_raw';
    c.put(parts,p.value+far.value,[...(c.sources['/mechanics/'+key]??[]),...(c.sources['/mechanics/'+farKey]??[]),...(c.sources['/mechanics/stat_rule.distance.combination']??[])]);
   }
  }
 }
 if(mechanicalKeys.some(k=>k.includes('.stagger_count_damage.'))){
  numberRule(c,['stat_rule','stagger_count','maximum'],'scripts/utilities/attack/damage_calculation.lua','local stagger_count_stat_buff = ((attacker_stat_buffs.stagger_count_damage or 1) - 1) * math.clamp(stagger_count, 0, NUMBER)');
 }
 const specialId=r.scalar(get(definition,'special_rule','special_rule_name'));
 if(['ogryn_leadbelcher_auto_crit','psyker_overchage_stance_weakspot_kills'].includes(specialId))c.rule(['finesse','special_rule','scope'],'scripts/utilities/attack/damage_calculation.lua','local final_finesse_damage = base_finesse_damage * finesse_buff_damage_multiplier','finesse_bonus');
 // Named gameplay consumers are linked only after the corresponding buff stat
 // was found. Explicit recognized statements establish their enum meaning.
 if(Object.keys(c.values).some(k=>k.endsWith('.toughness.raw'))){
  const file='scripts/extension_systems/toughness/player_unit_toughness_extension.lua';
  c.rule(['stat_rule','toughness','order'],file,'local max_toughness = (self._max_toughness + buff_extra) * toughness_bonus','add_before_percent');
  c.rule(['stat_rule','toughness','rounding'],file,'max_toughness = math.ceil(max_toughness) + buff_extra_flat','ceil');
 }
 const explicit=get(definition,'player_ability','ability');
 if(explicit?.type==='table')c.ability(explicit,'selected');
 // The skill's explicit ability may be inherited from its archetype's base
 // talents. Resolve those named definitions, retaining separate base contexts.
 const archetype=item.values.archetype;
 const archetypeFile=`scripts/settings/archetype/archetypes/${archetype}_archetype.lua`;
 const arch=reader.exists(archetypeFile)?r.returned(archetypeFile):null;
 const base=get(arch,'base_talents');
 const talentFile=`scripts/settings/ability/archetype_talents/talents/${archetype}_talents.lua`;
 const talents=reader.exists(talentFile)?get(r.returned(talentFile),'talents'):null;
 const baseAbility=talent=>{
  if(!get(base,talent))return null;
  const d=get(talents,talent);c.code.node(d);const a=get(d,'player_ability','ability');c.ability(a,'base_'+talent);return a;
 };
 if(item.key==='psyker_brain_burst_improved'){
  const a=baseAbility('psyker_grenade_smite');
  if(r.scalar(get(a,'inventory_item_name'))!=='content/items/weapons/player/psyker_smite'){unknown(['ability','brain_burst','link']);return;}
  const file='scripts/settings/equipment/weapon_templates/grenades/psyker_smite.lua';
  const weapon=r.returned(file),actions=get(weapon,'actions');c.code.node(weapon);
  for(const name of ['action_charge_target','action_charge_target_sticky','action_charge_target_lock_on','action_use_power']){
   const n=get(actions,name);if(!n)continue;c.code.node(n);
   for(const field of ['charge_time','attack_target_time','kind','overload_module_class_name'])if(get(n,field))scalar(['ability','brain_burst',name,field],get(n,field));
   const template=r.scalar(get(n,'charge_template'));
   if(typeof template==='string'){const charge=get(r.returned(CHARGES),template);c.code.node(charge);c.flatten(charge,['ability','brain_burst',name,'charge_template']);}
  }
  // Omitted charge_time uses the explicit default from ActionSmiteTargeting.
  const unlocked=get(actions,'action_charge_target');
  if(unlocked?.type==='table'&&!get(unlocked,'charge_time')){
   if(!numberRule(c,['ability','brain_burst','action_charge_target','charge_time'],TARGET,'local charge_time = action_settings.charge_time or NUMBER'))unknown(['ability','brain_burst','action_charge_target','charge_time']);
  }
  c.rule(['ability','brain_burst','time_formula'],TARGET,'local max_charge_time = charge_time / attack_speed','base_seconds / smite_attack_speed * charge_up_time');
  c.rule(['ability','brain_burst','charge_up_time_multiplier'],'scripts/extension_systems/weapon/actions/modules/charge_action_module.lua','charge_duration = charge_duration * stat_buffs.charge_up_time',true);
  c.rule(['ability','brain_burst','lock_comparison'],TARGET,'if should_attack and self._attack_target and time_to_attack < self._time_on_target then','strict_greater');
  c.rule(['ability','brain_burst','lock_once_per_target'],TARGET,'local should_attack = not self._has_attacked_target',true);
  c.rule(['ability','brain_burst','immune_breed_field'],TARGET,'if not breed.smite_stagger_immunity then','smite_stagger_immunity');
  c.rule(['ability','brain_burst','peril_formula'],SHARED,'local increase = actual_add_percentage / actual_charge_duration * dt','warp_charge_percent / charge_template.charge_duration * dt');
  c.rule(['ability','brain_burst','attack_requires'],'scripts/extension_systems/weapon/actions/action_damage_target.lua','if self._dealt_damage and should_add_warp_charge then','dealt_damage');
  c.rule(['ability','brain_burst','attack_finish_requires'],'scripts/extension_systems/weapon/actions/action_damage_target.lua','if not self._prevent_explosion and self._dealt_damage then','dealt_damage_and_not_prevent_explosion');
  const profile=r.field(get(actions,'action_use_power'),'damage_profile'),ref=callName(profile);
  if(/^DamageProfileTemplates\.[a-z0-9_]+$/.test(ref)&&r.resolve(profile)?.type==='table'){
   c.put(['ability','brain_burst','action_use_power','damage_profile'],ref.split('.').at(-1),[{path:profile.file,line:profile.line}]);c.code.node(r.resolve(profile));
   c.rule(['ability','brain_burst','damage_rule'],'scripts/utilities/attack/damage_calculation.lua','local is_finesse_hit = is_critical_strike or hit_weakspot','damage_profile_context');
  }
 }
 // D1: the projectile relation table explicitly names each buff and special
 // rule. Preserve allied/enemy, normal/improved and each upgrade separately.
 const special=r.scalar(get(definition,'special_rule','identifier'));
 if(['adamant_buff_drone_improved','adamant_drone_buff_talent','adamant_drone_debuff_talent'].includes(special)){
  const projectileFile='scripts/settings/projectile/player_projectile_templates.lua';
  const drone=get(r.returned(projectileFile),'area_buff_drone');
  if(!drone||drone.type!=='table'){unknown(['area_buff','drone','definition']);return;}
  const a=baseAbility('adamant_area_buff_drone');if(a)c.ability(a,'drone');
  const relations=get(drone,'deployable','relation_init_data');c.code.node(drone);
  if(relations?.type!=='table'){unknown(['area_buff','drone','relations']);return;}
  c.flatten(relations,['area_buff','drone','relations']);c.linkNames(relations);
  // The implementation literally removes the same externally controlled buff
  // on leaving and destroying the area; a changed call fails recognition.
  const logic='scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua';
  c.rule(['area_buff','drone','remove_on_exit'],logic,'ProximityAreaBuffDrone.unit_left_proximity = function (self, t, unit) self:_remove_buff_from_unit(unit) end',true);
  c.rule(['area_buff','drone','remove_on_destroy'],logic,'for unit, data in pairs(units_in_proximity) do self:_remove_buff_from_unit(unit) end',true);
  const toughness='scripts/extension_systems/toughness/player_unit_toughness_extension.lua';
  c.rule(['area_buff','drone','recovery_clamped'],toughness,'local new_toughness = math.max(0, toughness_damage - wanted_amount)',true);
 }
 // Finite ability contexts whose numeric consumers are not display params.
 if(item.key==='adamant_grenade_improved'){
  const all=r.returned(ABILITIES);for(const name of ['adamant_grenade','adamant_grenade_improved'])c.ability(get(all,name),name);
  const normal=get(all,'adamant_grenade','max_charges'),improved=get(all,'adamant_grenade_improved','max_charges');
  if(typeof r.scalar(normal)==='number'&&typeof r.scalar(improved)==='number')c.put(['ability','adamant_grenade_improved','charge_increase'],r.scalar(improved)-r.scalar(normal),[normal,improved].map(n=>({path:n.file,line:n.line})));
  const a=get(all,'adamant_grenade_improved'),file='scripts/extension_systems/ability/player_unit_ability_extension.lua';
  if(a?.type==='table'&&!get(a,'min_charges_usage_cost')&&!get(a,'max_charges_usage_cost')&&!get(a,'min_charges_percent_usage_cost')){
   numberRule(c,['ability','adamant_grenade_improved','base_charges_per_use'],file,'local min_charges_usage_cost = equipped_ability and equipped_ability.min_charges_usage_cost or NUMBER');
   c.rule(['ability','adamant_grenade_improved','charge_use_rule'],file,'local num_charges_to_use = math.clamp(current_charges, min_charges_usage_cost, max_charges_usage_cost)','clamp_to_ability_cost_limits');
  }
 }
 if(item.key==='veteran_combat_ability_extra_charge'){
  const buff=get(r.returned('scripts/settings/buff/buff_templates.lua'),'veteran_combat_ability_extra_charge'),extraNode=get(buff,'stat_buffs','ability_extra_charges'),extra=r.scalar(extraNode);
  for(const [name,a]of r.entries(r.returned(ABILITIES)))if(r.scalar(get(a,'stat_buff'))==='ability_extra_charges'&&r.entries(get(a,'archetypes')).some(([,n])=>r.scalar(n)==='veteran')){
   c.ability(a,name);scalar(['ability',name,'extra_charges'],extraNode);
   const baseNode=get(a,'max_charges'),base=r.scalar(baseNode);
   if(typeof base==='number'&&typeof extra==='number'&&c.rule(['ability',name,'capacity_rule'],'scripts/extension_systems/ability/player_unit_ability_extension.lua','max_charges = max_charges + buff_amount','base_plus_stat'))c.put(['ability',name,'total_charges'],base+extra,[baseNode,extraNode].map(n=>({path:n.file,line:n.line})));
  }
 }
 if(item.key==='psyker_combat_ability_force_field'){
  const s=get(settings,'psyker_3','combat_ability'),file='scripts/extension_systems/health/psyker_force_field_unit_health_extension.lua';
  for(const f of ['health','sphere_health','damage_cooldown'])scalar(['ability','force_field',f],get(s,f));
  numberRule(c,['ability','force_field','loss_per_eligible_call'],file,'self._local_damage = NUMBER');
  c.rule(['ability','force_field','scope'],file,'self._health = math.max(0, self._health - self._local_damage)','shield_health');
  c.rule(['ability','force_field','early_end'],file,'if self._health <= 0 then self:kill() self:send_stat_data() end','health_depleted');
 }
 if(item.key==='broker_ability_stimm_field'){
  const s=get(settings,'broker','combat_ability','stimm_field');
  for(const f of ['life_time','interval','corruption_heal_amount'])scalar(['area_buff','stimm_field',f],get(s,f));
  const a=r.scalar(get(s,'life_time')),b=r.scalar(get(s,'interval')),h=r.scalar(get(s,'corruption_heal_amount'));
  if([a,b,h].every(v=>typeof v==='number')&&b>0)c.put(['area_buff','stimm_field','nominal_maximum'],a/b*h,[get(s,'life_time'),get(s,'interval'),get(s,'corruption_heal_amount')].map(n=>({path:n.file,line:n.line})));
 }
 if(['cryptic_arc_grenades_brittleness','cryptic_electrocution_applies_brittleness'].includes(item.key))c.buff('rending_debuff');
 if(item.key==='zealot_improved_stun_grenade')baseAbility('zealot_shock_grenade');
 if(item.key==='veteran_grenade_apply_bleed')baseAbility('veteran_frag_grenade');
 if(item.key==='broker_keystone_vultures_mark_increased_duration'){
  const file='scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua';
  if(c.rule(['buff','vultures_mark','duration_override_rule'],file,'local extra_duration = talent_settings.broker_keystone_vultures_mark_increased_duration.duration - talent_settings.broker_keystone_vultures_mark_on_kill.duration','replace_base_duration'))scalar(['buff','vultures_mark','special_rule','increased_duration'],get(settings,'broker','broker_keystone_vultures_mark_increased_duration','duration'));
 }
 if(item.key==='zealot_resist_death_fire'){
  const file='scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua';
  if(c.rule(['buff','flamer_assault','talent_limit_rule'],file,'stacks_to_add = math.min(max_burn_stacks - current_stacks, stacks_to_add)','add_until_talent_limit_other_sources_independent'))scalar(['buff','flamer_assault','talent_stack_limit'],get(settings,'zealot','zealot_resist_death_subnodes','max_burn_stacks'));
 }
 // Two bounded data-only loops in e46b892 materialize the discrete TDR table.
 // Accept the entire loop (including field path and arithmetic) before using
 // its source max/step constants; changed loop shapes produce no known steps.
 for(const [template,setting,field]of [['cryptic_ranged_kills_tdr_stack','cryptic_ranged_kills_tdr','toughness_damage_taken_multiplier_step'],['cryptic_stacking_tdr_buff','cryptic_stacking_tdr','toughness_damage_taken_multiplier']]){
  if(!Object.keys(c.values).some(k=>k.startsWith('buff.'+template+'.')))continue;
  const file='scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua';
  const pattern=`for i = 1, talent_settings.${setting}.max_stacks do table.insert(templates.${template}.stepped_stat_buffs, { [stat_buffs.toughness_damage_taken_multiplier] = 1 - math.min(talent_settings.${setting}.${field} * i, 1), }) end`;
  if(!c.rule(['stat_rule',template,'fixed_step_formula'],file,pattern,'1 - min(step * index, 1)'))continue;
  const capNode=get(settings,'cryptic',setting,'max_stacks'),stepNode=get(settings,'cryptic',setting,field),cap=r.scalar(capNode),step=r.scalar(stepNode);
  if(!Number.isInteger(cap)||cap<1||cap>1000||typeof step!=='number')continue;
  const refs=[...([capNode,stepNode].map(n=>({path:n.file,line:n.line}))),...(c.sources[`/mechanics/stat_rule.${template}.fixed_step_formula`]??[])];
  for(let i=1;i<=cap;i++)c.put(['stat_rule',template,'fixed_steps',i,'raw'],1-Math.min(step*i,1),refs);
  c.rule(['stat_rule',template,'fixed_steps','aggregation'],'scripts/settings/buff/buff_settings.lua','toughness_damage_taken_multiplier = "multiplicative_multiplier"','multiplicative_multiplier');
 }
}
