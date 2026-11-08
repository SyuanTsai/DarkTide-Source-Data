const DAMAGE='scripts/utilities/attack/damage_calculation.lua';
const POWER='scripts/utilities/attack/power_level.lua';
const STAGGER='scripts/utilities/attack/stagger_calculation.lua';
// Explicit e46b892 data flow into finesse_buff_damage_multiplier. Similar
// spellings (power, impact, ability damage) do not establish this relationship.
const finesse={
 weakspot_damage:'local weakspot_damage = stat_buffs.weakspot_damage or 1',
 ranged_weakspot_damage:'local ranged_weakspot_damage = is_ranged and stat_buffs.ranged_weakspot_damage or 1',
 melee_weakspot_damage:'local melee_weakspot_damage = is_melee and stat_buffs.melee_weakspot_damage or 1',
 ranged_weakspot_damage_vs_staggered:'ranged_weakspot_damage_vs_staggered = is_ranged and is_target_staggered and stat_buffs.ranged_weakspot_damage_vs_staggered or ranged_weakspot_damage_vs_staggered',
 melee_weakspot_damage_vs_staggered:'melee_weakspot_damage_vs_staggered = is_melee and is_target_staggered and stat_buffs.melee_weakspot_damage_vs_staggered or melee_weakspot_damage_vs_staggered',
 melee_weakspot_damage_vs_bleeding:'melee_weakspot_damage_vs_bleeding = is_melee and target_is_bleeding and stat_buffs.melee_weakspot_damage_vs_bleeding or melee_weakspot_damage_vs_bleeding',
 melee_weakspot_damage_vs_toxin_status:'melee_weakspot_damage_vs_toxin_status = is_melee and target_has_toxin_status and stat_buffs.melee_weakspot_damage_vs_toxin_status or melee_weakspot_damage_vs_toxin_status',
 critical_strike_damage:'local critical_damage = stat_buffs.critical_strike_damage or 1',
 ranged_critical_strike_damage:'local ranged_critical_damage = is_ranged and stat_buffs.ranged_critical_strike_damage or 1',
 melee_critical_strike_damage:'local melee_critical_damage = is_melee and stat_buffs.melee_critical_strike_damage or 1',
 finesse_close_range_modifier:'close_range_stat_buff = stat_buffs.finesse_close_range_modifier or 1',
 critical_strike_weakspot_damage:'crit_weakspot_damage_stat_buff = stat_buffs.critical_strike_weakspot_damage or 1',
 finesse_modifier_bonus:'local finesse_modifier_bonus = stat_buffs.finesse_modifier_bonus or 1',
 melee_finesse_modifier_bonus:'local melee_finesse_modifier_bonus = attack_type == attack_types.melee and stat_buffs.melee_finesse_modifier_bonus or 1',
 ranged_finesse_modifier_bonus:'local ranged_finesse_modifier_bonus = attack_type == attack_types.ranged and stat_buffs.ranged_finesse_modifier_bonus or 1'
};
export const isFinesseStat=stat=>Object.hasOwn(finesse,stat);
const other={
 weakspot_power_level_modifier:{file:POWER,stage:'power_level_input',pattern:'local weakspot_power_level_modifier = weakspot_or_nil and stat_buffs_or_nil.weakspot_power_level_modifier or 1'},
 melee_weakspot_power_modifier:{file:POWER,stage:'power_level_input',pattern:'local melee_weakspot_power_level_modifier_stat_buff = weakspot_or_nil and attack_type_or_nil == attack_types.melee and stat_buffs_or_nil.melee_weakspot_power_modifier or 1'},
 stagger_weakspot_reduction_modifier:{file:STAGGER,stage:'stagger_reduction',pattern:'local weakspot_modifier = hit_weakspot and attacker_stat_buffs.stagger_weakspot_reduction_modifier or 1'}
};
export function statConsumer(stat) {
 return isFinesseStat(stat)?{file:DAMAGE,stage:'finesse_bonus',pattern:finesse[stat]}:Object.hasOwn(other,stat)?other[stat]:null;
}
