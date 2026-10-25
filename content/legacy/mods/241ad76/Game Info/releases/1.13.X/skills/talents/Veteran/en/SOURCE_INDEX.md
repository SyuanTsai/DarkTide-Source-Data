# Veteran: sources and technical index

[繁體中文](../SOURCE_INDEX.md) | [Player descriptions](README.md) | [Version and evidence limits](../../../../README.md) | [Definitions without independent nodes](UNUSED_DEFINITIONS.md) | [Base effects](BASE_EFFECTS.md)

[Original English description comparison](LOCALIZATION_COMPARISON.md) | [Percentage and calculation review](DAMAGE_PERCENTAGE_REVIEW.md)

Implementation source: Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Mechanism descriptions combine source-confirmed behavior and explicitly identified static derivation. In-game execution and final UI rendering have not been tested.

The current player tree has **77 nodes**: 76 one-point nodes and one zero-point starting node. A build can allocate at most 30 points; the index does not imply that all 77 talents can be selected together. The six class base effects are listed separately below.

| Talent / code identifier | Category |
|---|---|
| [Smoke Grenade](veteran_smoke_grenade.md) / `veteran_smoke_grenade` | Blitz |
| [Grenadier](veteran_extra_grenade.md) / `veteran_extra_grenade` | Blitz modifier |
| [Grenade Tinkerer](veteran_improved_grenades.md) / `veteran_improved_grenades` | Blitz modifier |
| [Krak Grenade](veteran_krak_grenade.md) / `veteran_krak_grenade` | Blitz |
| [Demolition Stockpile](veteran_replenish_grenades.md) / `veteran_replenish_grenades` | Blitz modifier |
| [Shredder Frag Grenade](veteran_grenade_apply_bleed.md) / `veteran_grenade_apply_bleed` | Blitz |
| [Fire Team](veteran_increased_damage_coherency.md) / `veteran_increased_damage_coherency` | Aura |
| [Close and Kill](veteran_movement_speed_coherency.md) / `veteran_movement_speed_coherency` | Aura |
| [Survivalist](veteran_aura_gain_ammo_on_elite_kill_improved.md) / `veteran_aura_gain_ammo_on_elite_kill_improved` | Aura |
| [Volley Fire](veteran_combat_ability_stance.md) / `veteran_combat_ability_stance` | Combat ability |
| [Infiltrate](veteran_invisibility_on_combat_ability.md) / `veteran_invisibility_on_combat_ability` | Combat ability |
| [Low Profile](veteran_reduced_threat_after_combat_ability.md) / `veteran_reduced_threat_after_combat_ability` | Ability modifier |
| [Executioner's Stance](veteran_combat_ability_elite_and_special_outlines.md) / `veteran_combat_ability_elite_and_special_outlines` | Combat ability |
| [Enhanced Target Priority](veteran_combat_ability_coherency_outlines.md) / `veteran_combat_ability_coherency_outlines` | Ability modifier |
| [Counter-Fire](veteran_combat_ability_ranged_roamer_outlines.md) / `veteran_combat_ability_ranged_roamer_outlines` | Ability modifier |
| [The Bigger they Are ...](veteran_combat_ability_ogryn_outlines.md) / `veteran_combat_ability_ogryn_outlines` | Ability modifier |
| [Hunter's Resolve](veteran_toughness_bonus_leaving_invisibility.md) / `veteran_toughness_bonus_leaving_invisibility` | Ability modifier |
| [Tactical Awareness](veteran_elite_kills_reduce_cooldown.md) / `veteran_elite_kills_reduce_cooldown` | Ability modifier |
| [Voice of Command](veteran_combat_ability_stagger_nearby_enemies.md) / `veteran_combat_ability_stagger_nearby_enemies` | Combat ability |
| [Only In Death Does Duty End](veteran_combat_ability_revive_nearby_allies.md) / `veteran_combat_ability_revive_nearby_allies` | Ability modifier |
| [Marksman](veteran_increased_weakspot_power_after_combat_ability.md) / `veteran_increased_weakspot_power_after_combat_ability` | Ability modifier |
| [Duty and Honour](veteran_combat_ability_increase_and_restore_toughness_to_coherency.md) / `veteran_combat_ability_increase_and_restore_toughness_to_coherency` | Ability modifier |
| [Close Quarters Killzone](veteran_increased_close_damage_after_combat_ability.md) / `veteran_increased_close_damage_after_combat_ability` | Ability modifier |
| [Overwatch](veteran_combat_ability_extra_charge.md) / `veteran_combat_ability_extra_charge` | Ability modifier |
| [Weapons Specialist](veteran_weapon_switch_passive.md) / `veteran_weapon_switch_passive` | Keystone |
| [On Your Toes](veteran_weapon_switch_replenish_toughness.md) / `veteran_weapon_switch_replenish_toughness` | Keystone modifier |
| [Always Prepared](veteran_weapon_switch_replenish_ammo.md) / `veteran_weapon_switch_replenish_ammo` | Keystone modifier |
| [Invigorated](veteran_weapon_switch_replenish_stamina.md) / `veteran_weapon_switch_replenish_stamina` | Keystone modifier |
| [Focus Target!](veteran_improved_tag.md) / `veteran_improved_tag` | Keystone |
| [Focused Fire](veteran_improved_tag_more_damage.md) / `veteran_improved_tag_more_damage` | Keystone modifier |
| [Target Down!](veteran_improved_tag_dead_bonus.md) / `veteran_improved_tag_dead_bonus` | Keystone modifier |
| [Redirect Fire!](veteran_improved_tag_dead_coherency_bonus.md) / `veteran_improved_tag_dead_coherency_bonus` | Keystone modifier |
| [Marksman's Focus](veteran_snipers_focus.md) / `veteran_snipers_focus` | Keystone |
| [Long Range Assassin](veteran_snipers_focus_increased_stacks.md) / `veteran_snipers_focus_increased_stacks` | Keystone modifier |
| [Chink in their Armour](veteran_snipers_focus_rending_bonus.md) / `veteran_snipers_focus_rending_bonus` | Keystone modifier |
| [Tunnel Vision](veteran_snipers_focus_toughness_bonus.md) / `veteran_snipers_focus_toughness_bonus` | Keystone modifier |
| [Fully Loaded](veteran_ammo_increase.md) / `veteran_ammo_increase` | Passive talent |
| [Lock and Load](veteran_clip_size.md) / `veteran_clip_size` | Passive talent |
| [Tactical Reload](veteran_faster_reload_on_non_empty_clips.md) / `veteran_faster_reload_on_non_empty_clips` | Passive talent |
| [Volley Adept](veteran_reload_speed_on_elite_kill.md) / `veteran_reload_speed_on_elite_kill` | Passive talent |
| [Rending Strikes](veteran_rending_bonus.md) / `veteran_rending_bonus` | Passive talent |
| [Close Order Drill](veteran_reduced_toughness_damage_in_coherency.md) / `veteran_reduced_toughness_damage_in_coherency` | Passive talent |
| [Iron Will](veteran_tdr_on_high_toughness.md) / `veteran_tdr_on_high_toughness` | Passive talent |
| [Superiority Complex](veteran_increase_damage_vs_elites.md) / `veteran_increase_damage_vs_elites` | Passive talent |
| [Bring it Down!](veteran_big_game_hunter.md) / `veteran_big_game_hunter` | Passive talent |
| [Covert Operative](veteran_increased_damage_when_flanking.md) / `veteran_increased_damage_when_flanking` | Passive talent |
| [Desperado](veteran_increased_melee_crit_chance_and_melee_finesse.md) / `veteran_increased_melee_crit_chance_and_melee_finesse` | Passive talent |
| [Out for Blood](veteran_all_kills_replenish_toughness.md) / `veteran_all_kills_replenish_toughness` | Passive talent |
| [Skirmisher](veteran_increase_damage_after_sprinting.md) / `veteran_increase_damage_after_sprinting` | Passive talent |
| [Exploit Weakness](veteran_crits_apply_rending.md) / `veteran_crits_apply_rending` | Passive talent |
| [Leave No One Behind](veteran_movement_speed_towards_downed.md) / `veteran_movement_speed_towards_downed` | Passive talent |
| [Reciprocity](veteran_dodging_grants_crit.md) / `veteran_dodging_grants_crit` | Passive talent |
| [Agile Engagement](veteran_kill_grants_damage_to_other_slot.md) / `veteran_kill_grants_damage_to_other_slot` | Passive talent |
| [Serrated Blade](veteran_hits_cause_bleed.md) / `veteran_hits_cause_bleed` | Passive talent |
| [Onslaught](veteran_continous_hits_apply_rending.md) / `veteran_continous_hits_apply_rending` | Passive talent |
| [Catch a Breath](veteran_replenish_toughness_outside_melee.md) / `veteran_replenish_toughness_outside_melee` | Passive talent |
| [Opening Salvo](veteran_bonus_crit_chance_on_ammo.md) / `veteran_bonus_crit_chance_on_ammo` | Passive talent |
| [Kill Zone](veteran_ranged_power_out_of_melee.md) / `veteran_ranged_power_out_of_melee` | Passive talent |
| [Shock Trooper](veteran_no_ammo_consumption_on_lasweapon_crit.md) / `veteran_no_ammo_consumption_on_lasweapon_crit` | Passive talent |
| [Withering Fire](veteran_increased_ranged_cleave.md) / `veteran_increased_ranged_cleave` | Passive talent |
| [Born Leader](veteran_allies_in_coherency_share_toughness_gain.md) / `veteran_allies_in_coherency_share_toughness_gain` | Passive talent |
| [Field Improvisation](veteran_better_deployables.md) / `veteran_better_deployables` | Passive talent |
| [Covering Fire](veteran_replenish_toughness_and_boost_allies.md) / `veteran_replenish_toughness_and_boost_allies` | Passive talent |
| [Competitive Urge](veteran_ally_kills_increase_damage.md) / `veteran_ally_kills_increase_damage` | Passive talent |
| [Confirmed Kill](veteran_elite_kills_replenish_toughness.md) / `veteran_elite_kills_replenish_toughness` | Passive talent |
| [Longshot](veteran_increased_damage_based_on_range.md) / `veteran_increased_damage_based_on_range` | Passive talent |
| [Deadshot](veteran_ads_drain_stamina.md) / `veteran_ads_drain_stamina` | Passive talent |
| [Duck and Dive](veteran_dodging_grants_stamina.md) / `veteran_dodging_grants_stamina` | Passive talent |
| [Keep Their Heads Down!](veteran_increase_suppression.md) / `veteran_increase_suppression` | Passive talent |
| [Toughness Boost](base_toughness_node_buff_medium_2.md) / `base_toughness_node_buff_medium_2` | Stat node |
| [Melee Damage Boost](base_melee_damage_node_buff_high_2.md) / `base_melee_damage_node_buff_high_2` | Stat node |
| [Toughness Damage Reduction](base_toughness_damage_reduction_node_buff_medium_1.md) / `base_toughness_damage_reduction_node_buff_medium_1` | Stat node |
| [Demolition Team](veteran_aura_elite_kills_restore_grenade.md) / `veteran_aura_elite_kills_restore_grenade` | Passive talent |
| [Precision Strikes](veteran_increased_weakspot_damage.md) / `veteran_increased_weakspot_damage` | Passive talent |
| [Trench Fighter Drill](veteran_attack_speed.md) / `veteran_attack_speed` | Passive talent |
| [One Motion](veteran_reduce_swap_time.md) / `veteran_reduce_swap_time` | Passive talent |
| [Exhilarating Takedown](veteran_replenish_toughness_on_weakspot_kill.md) / `veteran_replenish_toughness_on_weakspot_kill` | Passive talent |

## Base effects

| Talent / code identifier | Category |
|---|---|
| [Scavenger](veteran_aura_gain_ammo_on_elite_kill.md) / `veteran_aura_gain_ammo_on_elite_kill` | Base aura |
| [Guardsman](veteran_base_ranged_damage.md) / `veteran_base_ranged_damage` | Base passive |
| [Low Profile](veteran_cover_peeking.md) (base cover peeking) / `veteran_cover_peeking` | Base cover-peeking rule |
| [Frag Grenade](veteran_frag_grenade.md) / `veteran_frag_grenade` | Base Blitz |
| [Determined](veteran_supression_immunity.md) / `veteran_supression_immunity` | Base suppression immunity |
| [Practiced Efficiency](veteran_survivalist_passive.md) / `veteran_survivalist_passive` | Base personal Ammo passive |
