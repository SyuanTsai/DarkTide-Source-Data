local DamageProfileSettings = require("scripts/settings/damage/damage_profile_settings")
local damage_lerp_values = DamageProfileSettings.damage_lerp_values
local damage_templates = {}
local overrides = {}
local ArmorSettings = require("scripts/settings/damage/armor_settings")
local armor_types = ArmorSettings.types
damage_templates.parent = {power_distribution={attack={10,50}},armor={[armor_types.armored]=damage_lerp_values.test},ranges={min={1,2}}}
overrides.child = {parent_template_name="parent",overrides={{"ranges","min",{10,30}}}}
return {base_templates=damage_templates,overrides=overrides}
