local WeaponBarUIDescriptionTemplates=require("scripts/settings/equipment/weapon_bar_ui_description_templates")
local Bespoke = require("scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_test")
local HitScanTemplates = require("scripts/settings/projectile/hit_scan_templates")
local weapon_template = {}
weapon_template.recoil_template = "test"
weapon_template.ammo_template = "test"
weapon_template.keywords = {"ranged"}
weapon_template.displayed_keywords = {{display_name="loc_autogun_p1_m1"}}
weapon_template.actions = {action_shoot={fire_configuration={hit_scan_template=HitScanTemplates.bullet}}}
weapon_template.base_stats = {test_stat={display_name="loc_autogun_p1_m1",recoil={base={recoil_trait_templates.example,display_data=WeaponBarUIDescriptionTemplates.create_template("recoil","loc_autogun_p1_m1")}},damage={action_shoot={damage_trait_templates.example}}},missing_stat={damage={base={damage_trait_templates.missing}}}}
weapon_template.displayed_attacks = {primary={type="shoot",display_name="loc_autogun_p1_m1"},secondary={type="aim"},special={type="special"}}
weapon_template.traits = {"weapon_trait_bespoke_test"}
table.append(weapon_template.traits, table.ukeys(Bespoke))
table.append(weapon_template.runtime_only, runtime_values)
return weapon_template