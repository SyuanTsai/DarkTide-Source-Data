local buff_settings={stat_buff_types={damage='additive_multiplier'}}
local stat_buff_names=table.keys(buff_settings.stat_buff_types)
buff_settings.stat_buffs=table.enum(unpack(stat_buff_names))
return buff_settings
