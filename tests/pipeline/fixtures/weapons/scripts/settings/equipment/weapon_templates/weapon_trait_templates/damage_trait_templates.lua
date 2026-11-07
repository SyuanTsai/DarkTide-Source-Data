local damage_trait_templates = {}
local ArmorSettings = require("scripts/settings/damage/armor_settings")
local armor_types = ArmorSettings.types
damage_trait_templates.example = {{"power_distribution","attack",{min=0.25,max=0.75}},{"armor",armor_types.armored,{min=0.25,max=0.75}},{"ranges","min",{min=0.25,max=0.75}}}
return damage_trait_templates
