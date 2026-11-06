local BuffSettings = require("scripts/settings/buff/buff_settings")
local stat_buffs = BuffSettings.stat_buffs
local MAX_STACKS = 5
local templates = {}
templates.child = { max_stacks = MAX_STACKS, stat_buffs = { [stat_buffs.damage] = 0.15 } }
return templates
