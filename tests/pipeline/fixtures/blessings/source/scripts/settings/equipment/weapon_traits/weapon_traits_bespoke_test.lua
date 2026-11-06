local BuffSettings = require("scripts/settings/buff/buff_settings")
local stat_buffs = BuffSettings.stat_buffs
local templates = {}
templates.weapon_trait_bespoke_gun_p1_test = {
  format_values = {
    damage = { format_type = "percentage", find_value = { find_value_type = "trait_override", buff_template_name = "buff", path = { "stat_buffs", stat_buffs.damage } } },
    stacks = { format_type = "number", find_value = { find_value_type = "buff_template", buff_template_name = "child", path = { "max_stacks" } } },
    enum_fixed = { format_type = "percentage", find_value = { find_value_type = "buff_template", buff_template_name = "child", path = { "stat_buffs", stat_buffs.damage } } },
    rarity = { format_type = "number", find_value = { find_value_type = "rarity_value", trait_value = { 10, 20, 30, 40 } } },
    missing = { format_type = "number", find_value = { find_value_type = "buff_template", buff_template_name = "child", path = { "absent" } } },
    fixed = { format_type = "number", value = 2 },
    manipulated = { format_type = "percentage", value = 0.126, value_manipulation = function (value) return math.floor(value * 100) end },
    dynamic = { format_type = "number", value = 2, value_manipulation = function (value) local x = value return x end },
    label = { format_type = "loc_string", value = "loc_label" },
    string_value = { format_type = "string", value = "raw string" },
    UPPER = { format_type = "number", value = 1 },
    ["bad-name"] = { format_type = "number", value = 1 },
    format_type = "number",
  },
  buffs = { buff = {
    { stat_buffs = { [stat_buffs.damage] = 0.1 } },
    { stat_buffs = { [stat_buffs.damage] = 0.2 } },
    { stat_buffs = { [stat_buffs.damage] = 0.3 } },
    { stat_buffs = { [stat_buffs.damage] = 0.4 } },
  } },
}
templates.weapon_trait_bespoke_gun_p1_nameless = { buffs = { buff = { {} } } }
templates.weapon_trait_bespoke_gun_p1_no_tiers = {}
return templates
