local WeaponTweaks=require("scripts/utilities/weapon_tweaks")
local templates = {}
WeaponTweaks.extract_weapon_tweaks("scripts/settings/equipment/weapon_templates/guns/settings_templates/test_damage_profile_templates",templates,loaded_files)
return templates