local WeaponTweaks=require("scripts/utilities/weapon_tweaks")
local hit_scan_templates = {}
WeaponTweaks.extract_weapon_tweaks("scripts/settings/equipment/weapon_templates/guns/settings_templates/test_hitscan_templates",hit_scan_templates,loaded_files)
return hit_scan_templates