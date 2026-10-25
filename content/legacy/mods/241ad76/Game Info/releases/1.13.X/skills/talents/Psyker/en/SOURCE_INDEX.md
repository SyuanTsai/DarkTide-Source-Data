# Psyker: sources and technical index

[繁體中文](../SOURCE_INDEX.md) | [Player descriptions](README.md) | [Release, date and evidence limits](../../../../README.md)

[Original game English comparison](LOCALIZATION_COMPARISON.md) | [Percentage-description review](DAMAGE_PERCENTAGE_REVIEW.md) | [Archetype base effects](BASE_EFFECTS.md) | [Definitions not directly used](UNUSED_DEFINITIONS.md)

Fixed source SHA: `7e662fcda16219d775b84af50322be2e9cd9d62e`. The talent tree has **81 selectable nodes**, each costing one point; a single build can allocate at most 30 points. The zero-point starting placeholder `not_selected` is not a talent effect and is excluded from the 81.
[Archetype and base talents](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/psyker_archetype.lua#L48-L65); [Talent-tree settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L3-L36). Internal tree version 26 is not the game's release version.

Names use the corresponding game English entries. Mechanisms reuse fixed-version code analysis and remain untested in game.

| Talent / code identifier | Category |
|---|---|
| [Kinetic Flayer](psyker_smite_on_hit.md) / `psyker_smite_on_hit` | Blitz |
| [Brain Rupture](psyker_brain_burst_improved.md) / `psyker_brain_burst_improved` | Blitz |
| [Assail](psyker_grenade_throwing_knives.md) / `psyker_grenade_throwing_knives` | Blitz |
| [Ethereal Shards](psyker_throwing_knives_piercing.md) / `psyker_throwing_knives_piercing` | Blitz |
| [Smite](psyker_grenade_chain_lightning.md) / `psyker_grenade_chain_lightning` | Blitz |
| [Kinetic Resonance](psyker_ability_increase_brain_burst_speed.md) / `psyker_ability_increase_brain_burst_speed` | Blitz |
| [Quick Shards](psyker_throwing_knives_cast_speed.md) / `psyker_throwing_knives_cast_speed` | Blitz |
| [Enfeeble](psyker_chain_lightning_improved_target_buff.md) / `psyker_chain_lightning_improved_target_buff` | Blitz |
| [Charged Strike](psyker_chain_lightning_heavy_attacks.md) / `psyker_chain_lightning_heavy_attacks` | Blitz |
| [Kinetic Presence](psyker_aura_damage_vs_elites.md) / `psyker_aura_damage_vs_elites` | Aura |
| [Seer's Presence](psyker_cooldown_aura_improved.md) / `psyker_cooldown_aura_improved` | Aura |
| [Prescience](psyker_aura_crit_chance_aura.md) / `psyker_aura_crit_chance_aura` | Aura |
| [Venting Shriek](psyker_shout_vent_warp_charge.md) / `psyker_shout_vent_warp_charge` | Ability |
| [Scrier's Gaze](psyker_combat_ability_stance.md) / `psyker_combat_ability_stance` | Ability |
| [Becalming Eruption](psyker_shout_reduces_warp_charge_generation.md) / `psyker_shout_reduces_warp_charge_generation` | Ability |
| [Warp Rupture](psyker_discharge_damage_debuff.md) / `psyker_discharge_damage_debuff` | Ability |
| [Creeping Flames](psyker_warpfire_on_shout.md) / `psyker_warpfire_on_shout` | Ability |
| [Precognition](psyker_overcharge_weakspot_kill_bonuses.md) / `psyker_overcharge_weakspot_kill_bonuses` | Ability |
| [Warp Speed](psyker_overcharge_increased_movement_speed.md) / `psyker_overcharge_increased_movement_speed` | Ability |
| [Psykinetic's Aura](psyker_2_tier_3_name_2.md) / `psyker_2_tier_3_name_2` | Ability |
| [Reality Anchor](psyker_overcharge_reduced_warp_charge.md) / `psyker_overcharge_reduced_warp_charge` | Ability |
| [Telekine Shield](psyker_combat_ability_force_field.md) / `psyker_combat_ability_force_field` | Ability |
| [Bolstered Shield](psyker_shield_extra_charge.md) / `psyker_shield_extra_charge` | Ability |
| [Sanctuary](psyker_boost_allies_in_sphere.md) / `psyker_boost_allies_in_sphere` | Ability |
| [Telekine Dome](psyker_sphere_shield.md) / `psyker_sphere_shield` | Ability |
| [Enervating Threshold](psyker_shield_stun_passive.md) / `psyker_shield_stun_passive` | Ability |
| [Warp Unbound](psyker_overcharge_stance_infinite_casting.md) / `psyker_overcharge_stance_infinite_casting` | Ability |
| [Warp Siphon](psyker_passive_souls_from_elite_kills.md) / `psyker_passive_souls_from_elite_kills` | Keystone |
| [Disrupt Destiny](psyker_new_mark_passive.md) / `psyker_new_mark_passive` | Keystone |
| [Empowered Psionics](psyker_empowered_ability.md) / `psyker_empowered_ability` | Keystone |
| [Inner Tranquility](psyker_reduced_warp_charge_cost_and_venting_speed.md) / `psyker_reduced_warp_charge_cost_and_venting_speed` | Keystone |
| [Essence Harvest](psyker_toughness_on_soul.md) / `psyker_toughness_on_soul` | Keystone |
| [Bio-Lodestone](psyker_empowered_grenades_passive_improved.md) / `psyker_empowered_grenades_passive_improved` | Keystone |
| [Psychic Leeching](psyker_empowered_chain_lightnings_replenish_toughness_to_allies.md) / `psyker_empowered_chain_lightnings_replenish_toughness_to_allies` | Keystone |
| [Overpowering Souls](psyker_empowered_ability_on_elite_kills.md) / `psyker_empowered_ability_on_elite_kills` | Keystone |
| [Perfectionism](psyker_mark_increased_max_stacks.md) / `psyker_mark_increased_max_stacks` | Keystone |
| [Purloin Providence](psyker_mark_kills_can_vent.md) / `psyker_mark_kills_can_vent` | Keystone |
| [Lingering Influence](psyker_mark_increased_duration.md) / `psyker_mark_increased_duration` | Keystone |
| [Charged Up](psyker_empowered_grenades_increased_max_stacks.md) / `psyker_empowered_grenades_increased_max_stacks` | Keystone |
| [In Fire Reborn](psyker_warpfire_generate_souls.md) / `psyker_warpfire_generate_souls` | Keystone |
| [Psychic Vampire](psyker_aura_souls_on_kill.md) / `psyker_aura_souls_on_kill` | Keystone |
| [Warp Battery](psyker_increased_max_souls.md) / `psyker_increased_max_souls` | Keystone |
| [Cruel Fortune](psyker_mark_weakspot_kills.md) / `psyker_mark_weakspot_kills` | Keystone |
| [Soulstealer](psyker_toughness_on_warp_kill.md) / `psyker_toughness_on_warp_kill` | Talent |
| [Quietude](psyker_toughness_on_vent.md) / `psyker_toughness_on_vent` | Talent |
| [Warp Expenditure](psyker_toughness_on_melee.md) / `psyker_toughness_on_melee` | Talent |
| [Mettle](psyker_crits_regen_toughness_movement_speed.md) / `psyker_crits_regen_toughness_movement_speed` | Talent |
| [Perilous Combustion](psyker_elite_kills_add_warpfire.md) / `psyker_elite_kills_add_warpfire` | Talent |
| [Battle Meditation](psyker_chance_to_vent_on_kill.md) / `psyker_chance_to_vent_on_kill` | Talent |
| [Perfect Timing](psyker_crits_empower_next_attack.md) / `psyker_crits_empower_next_attack` | Talent |
| [Wildfire](psyker_spread_warpfire_on_kill.md) / `psyker_spread_warpfire_on_kill` | Talent |
| [Mind in Motion](psyker_venting_improvements.md) / `psyker_venting_improvements` | Talent |
| [Malefic Momentum](psyker_kills_stack_other_weapon_damage.md) / `psyker_kills_stack_other_weapon_damage` | Talent |
| [One with the Warp](psyker_warp_charge_reduces_toughness_damage_taken.md) / `psyker_warp_charge_reduces_toughness_damage_taken` | Talent |
| [Anticipation](psyker_improved_dodge.md) / `psyker_improved_dodge` | Talent |
| [Empathic Evasion](psyker_dodge_after_crits.md) / `psyker_dodge_after_crits` | Talent |
| [Solidity](psyker_increased_vent_speed.md) / `psyker_increased_vent_speed` | Talent |
| [Warp Rider](psyker_damage_based_on_warp_charge.md) / `psyker_damage_based_on_warp_charge` | Talent |
| [True Aim](psyker_guaranteed_crit_on_multiple_weakspot_hits.md) / `psyker_guaranteed_crit_on_multiple_weakspot_hits` | Talent |
| [Puppet Master](psyker_coherency_aura_size_increase.md) / `psyker_coherency_aura_size_increase` | Talent |
| [Kinetic Deflection](psyker_block_costs_warp_charge.md) / `psyker_block_costs_warp_charge` | Talent |
| [Toughness Boost](base_toughness_node_buff_medium_5.md) / `base_toughness_node_buff_medium_5` | Talent |
| [Toughness Boost](base_toughness_node_buff_medium_4.md) / `base_toughness_node_buff_medium_4` | Talent |
| [Toughness Damage Reduction](base_toughness_damage_reduction_node_buff_medium_1.md) / `base_toughness_damage_reduction_node_buff_medium_1` | Talent |
| [Lightning Speed](psyker_melee_attack_speed.md) / `psyker_melee_attack_speed` | Talent |
| [Warp Splitting](psyker_cleave_from_peril.md) / `psyker_cleave_from_peril` | Talent |
| [Souldrinker](psyker_killing_enemy_with_warpfire_boosts.md) / `psyker_killing_enemy_with_warpfire_boosts` | Talent |
| [By Crack of Bone](psyker_melee_weaving.md) / `psyker_melee_weaving` | Talent |
| [Vulnerable Minds](psyker_damage_vs_ogryns_and_monsters.md) / `psyker_damage_vs_ogryns_and_monsters` | Talent |
| [Focused Warp](psyker_increased_warp_damage.md) / `psyker_increased_warp_damage` | Talent |
| [Peril Equilibrium](psyker_weapon_attacks_peril_equilibrium.md) / `psyker_weapon_attacks_peril_equilibrium` | Talent |
| [Surety of Arms](psyker_reload_speed_warp_charge.md) / `psyker_reload_speed_warp_charge` | Talent |
| [Crystalline Will](psyker_alternative_peril_explosion.md) / `psyker_alternative_peril_explosion` | Talent |
| [Channeled Force](psyker_force_staff_bonus.md) / `psyker_force_staff_bonus` | Talent |
| [Empyric Shock](psyker_force_staff_quick_attack_bonus.md) / `psyker_force_staff_quick_attack_bonus` | Talent |
| [Just a Dream](psyker_damage_to_peril_conversion.md) / `psyker_damage_to_peril_conversion` | Talent |
| [Immaterial Focus](psyker_damage_resistance_stun_immunity.md) / `psyker_damage_resistance_stun_immunity` | Talent |
| [Empyric Resolve](psyker_warp_glass_cannon.md) / `psyker_warp_glass_cannon` | Talent |
| [Warp Ghost](psyker_stat_mix.md) / `psyker_stat_mix` | Talent |
| [Penetration of the Soul](psyker_warp_attacks_rending.md) / `psyker_warp_attacks_rending` | Talent |
| [Psykinetic Grip](psyker_increased_blitz_damage.md) / `psyker_increased_blitz_damage` | Talent |
