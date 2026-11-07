local is_smite_attack = damage_type == damage_types.smite
local smite_damage_multiplier_stat_buff = is_smite_attack and attacker_stat_buffs.smite_damage_multiplier or 1
damage_multiplier = damage_multiplier * smite_damage_multiplier_stat_buff
