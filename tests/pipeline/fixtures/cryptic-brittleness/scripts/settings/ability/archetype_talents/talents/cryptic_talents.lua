local TalentSettings = require("scripts/settings/talent/talent_settings")
local SpecialRulesSettings = require("scripts/settings/ability/special_rules_settings")
local talent_settings = TalentSettings.cryptic
local special_rules = SpecialRulesSettings.special_rules
return {archetype="cryptic",talents={
		cryptic_arc_grenades_brittleness = {
			description = "loc_talent_cryptic_arc_grenades_brittleness_desc",
			display_name = "loc_talent_cryptic_arc_grenades_brittleness",
			name = "cryptic_arc_grenades_brittleness",
			passive = {
				buff_template_name = "cryptic_grenade_ability_arc_grenade_extra_arcs",
				identifier = "cryptic_grenade_ability_arc_grenade_extra_arcs",
			},
			special_rule = {
				identifier = {
					"cryptic_arc_grenade_gives_brittleness",
				},
				special_rule_name = {
					special_rules.cryptic_arc_grenade_gives_brittleness,
				},
			},
			format_values = {
				talent_name = {
					format_type = "loc_string",
					value = "loc_talent_cryptic_arc_grenades",
				},
				number = {
					format_type = "number",
					value = talent_settings.arc_grenade.extra_arcs,
				},
				stacks = {
					format_type = "number",
					value = talent_settings.arc_grenade.rending_stacks_on_minions_hit_by_arc,
				},
			},
		},
		cryptic_electrocution_applies_brittleness = {
			description = "loc_talent_cryptic_electrocution_applies_brittleness_desc",
			display_name = "loc_talent_cryptic_electrocution_applies_brittleness",
			name = "cryptic_electrocution_applies_brittleness",
			passive = {
				buff_template_name = "cryptic_electrocution_applies_brittleness",
				identifier = "cryptic_electrocution_applies_brittleness",
			},
			format_values = {
				stacks = {
					format_type = "number",
					value = talent_settings.cryptic_electrocution_applies_brittleness.stacks,
				},
			},
		},
 unrelated={display_name="loc_unrelated",description="loc_unrelated_desc",format_values={stacks={format_type="number",value=1}}}
}}
