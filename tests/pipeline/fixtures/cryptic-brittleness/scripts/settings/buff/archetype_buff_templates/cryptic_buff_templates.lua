-- chunkname: @scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua

local Action = require("scripts/utilities/action/action")
local Ammo = require("scripts/utilities/ammo")
local Attack = require("scripts/utilities/attack/attack")
local AttackSettings = require("scripts/settings/damage/attack_settings")
local Breeds = require("scripts/settings/breed/breeds")
local BuffSettings = require("scripts/settings/buff/buff_settings")
local CompanionServoSkullAbility = require("scripts/utilities/companion/companion_servo_skull_ability")
local CompanionServoSkullSettings = require("scripts/settings/companion/companion_servo_skull_settings")
local MinionState = require("scripts/utilities/minion_state")
local CheckProcFunctions = require("scripts/settings/buff/helper_functions/check_proc_functions")
local CrypticBuffUtils = require("scripts/settings/buff/cryptic_buff_utils")
local ConditionalFunctions = require("scripts/settings/buff/helper_functions/conditional_functions")
local DamageProfileTemplates = require("scripts/settings/damage/damage_profile_templates")
local DamageSettings = require("scripts/settings/damage/damage_settings")
local EffectTemplates = require("scripts/settings/fx/effect_templates")
local Explosion = require("scripts/utilities/attack/explosion")
local ExplosionTemplates = require("scripts/settings/damage/explosion_templates")
local FixedFrame = require("scripts/utilities/fixed_frame")
local HordesBuffsData = require("scripts/settings/buff/hordes_buffs/hordes_buffs_data")
local PlayerDeath = require("scripts/utilities/player_death")
local PlayerUnitStatus = require("scripts/utilities/attack/player_unit_status")
local PowerLevelSettings = require("scripts/settings/damage/power_level_settings")
local ReloadStates = require("scripts/extension_systems/weapon/utilities/reload_states")
local SpecialRulesSettings = require("scripts/settings/ability/special_rules_settings")
local Sprint = require("scripts/extension_systems/character_state_machine/character_states/utilities/sprint")
local Stamina = require("scripts/utilities/attack/stamina")
local TalentSettings = require("scripts/settings/talent/talent_settings")
local Toughness = require("scripts/utilities/toughness/toughness")
local WeaponTemplate = require("scripts/utilities/weapon/weapon_template")
local attack_results = AttackSettings.attack_results
local attack_types = AttackSettings.attack_types
local buff_categories = BuffSettings.buff_categories
local damage_types = DamageSettings.damage_types
local group_keywords = BuffSettings.group_keywords
local group_to_keywords = BuffSettings.group_to_keywords
local keywords = BuffSettings.keywords
local stat_buffs = BuffSettings.stat_buffs
local special_rules = SpecialRulesSettings.special_rules
local proc_events = BuffSettings.proc_events
local talent_settings = TalentSettings.cryptic
local templates = {}
templates.cryptic_electrocution_applies_brittleness = {
	class_name = "server_only_proc_buff",
	predicted = false,
	proc_events = {
		[proc_events.on_buff_added] = 1,
		[proc_events.on_buff_stack_added] = 1,
		[proc_events.on_max_stack_refresh_buff] = 1,
		[proc_events.on_stackable_buff_refresh_duration] = 1,
	},
	check_proc_func = function (params, template_data, template_context, t)
		local buff_template = params.template
		local buff_template_keywords = buff_template.keywords
		local has_keywords = buff_template_keywords and #buff_template_keywords > 0 or false

		if not has_keywords then
			return false
		end

		local electrocuted_group_keywords = group_to_keywords[group_keywords.electrocuted]

		for _, buff_keyword in ipairs(buff_template_keywords) do
			if electrocuted_group_keywords[buff_keyword] then
				return true
			end
		end

		return false
	end,
	proc_func = function (params, template_data, template_context)
		local target_unit = params.unit
		local target_buff_extension = ScriptUnit.has_extension(target_unit, "buff_system")

		if HEALTH_ALIVE[target_unit] and target_buff_extension then
			local t = FixedFrame.get_latest_fixed_time()
			local player_unit = template_context.unit
			local stacks = talent_settings.cryptic_electrocution_applies_brittleness.stacks

			target_buff_extension:add_internally_controlled_buff_with_stacks("rending_debuff", stacks, t, "owner_unit", player_unit)
		end
	end,
}
return templates
