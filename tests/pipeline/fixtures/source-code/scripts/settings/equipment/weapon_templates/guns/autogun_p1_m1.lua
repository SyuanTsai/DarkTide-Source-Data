local Traits = require("scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_test")
local weapon_template = {}
weapon_template.traits = {"weapon_trait_bespoke_direct"}
local list = table.ukeys(Traits)
table.append(weapon_template.traits, list)
return weapon_template
