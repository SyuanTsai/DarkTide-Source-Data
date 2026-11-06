-- Fixed source adamant_buff_templates.lua:1893-1895, reduced data dependencies.
local templates={}
local stat_buffs={melee_rending_multiplier="melee_rending_multiplier",melee_attack_speed="melee_attack_speed"}
local talent_settings={terminus_warrant={melee_rending=0.15,melee_attack_speed=0.1}}
templates.adamant_terminus_warrant_melee_stat_buff={stat_buffs={}}
templates.adamant_terminus_warrant_melee_stat_buff_improved = table.clone(templates.adamant_terminus_warrant_melee_stat_buff)
templates.adamant_terminus_warrant_melee_stat_buff_improved.stat_buffs[stat_buffs.melee_rending_multiplier] = talent_settings.terminus_warrant.melee_rending
templates.adamant_terminus_warrant_melee_stat_buff_improved.stat_buffs[stat_buffs.melee_attack_speed] = talent_settings.terminus_warrant.melee_attack_speed
return templates
