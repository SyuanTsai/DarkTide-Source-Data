local DamageProfileTemplates = require("scripts/settings/damage/damage_profile_templates")
local HitScanTemplates = require("scripts/settings/projectile/hit_scan_templates")
local ProjectileTemplates = require("scripts/settings/projectile/projectile_templates")
local ShotshellTemplates = require("scripts/settings/projectile/shotshell_templates")
local FlamerGasTemplates = require("scripts/settings/projectile/flamer_gas_templates")
local weapon_template = {}
weapon_template.actions = {
  melee = {kind="sweep", damage_profile=DamageProfileTemplates.multi},
  hip = {kind="shoot", fire_configuration={hit_scan_template=HitScanTemplates.hip}},
  ads = {kind="shoot", fire_configuration={hit_scan_template="ads"}},
  projectile = {kind="shoot", projectile_template=ProjectileTemplates.grenade},
  shell = {kind="shoot", fire_configuration={shotshell=ShotshellTemplates.shell}},
  gas = {kind="shoot", fire_configuration={flamer_gas=FlamerGasTemplates.gas}},
}
return weapon_template
