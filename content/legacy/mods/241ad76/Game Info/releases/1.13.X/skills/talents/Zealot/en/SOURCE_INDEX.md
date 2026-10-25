# Zealot: sources and technical index

[繁體中文](../SOURCE_INDEX.md) | [Player descriptions](README.md) | [Release, date and evidence limits](../../../../README.md)

[Class base effects](BASE_EFFECTS.md) | [Definitions not directly used](UNUSED_DEFINITIONS.md)

[Original game English comparison](LOCALIZATION_COMPARISON.md) | [Percentage-description review](DAMAGE_PERCENTAGE_REVIEW.md)

Fixed source SHA: `7e662fcda16219d775b84af50322be2e9cd9d62e`. The talent tree has **82 selectable nodes**, each costing one point; a single build can allocate at most 30 points.
[Class and base talents](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/zealot_archetype.lua#L50-L64) | [Talent tree settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L3-L10). Internal tree version 29 is not the game release number.

Names use the corresponding game English entries. Mechanisms reuse fixed-version evidence; no in-game verification was performed.

| Talent / code identifier | Category |
|---|---|
| [Immolation Grenade](zealot_flame_grenade.md) / `zealot_flame_grenade` | Blitz |
| [Blades of Faith](zealot_throwing_knives.md) / `zealot_throwing_knives` | Blitz |
| [Stunstorm Grenade](zealot_improved_stun_grenade.md) / `zealot_improved_stun_grenade` | Blitz |
| [Benediction](zealot_toughness_damage_reduction_coherency_improved.md) / `zealot_toughness_damage_reduction_coherency_improved` | Aura |
| [Beacon of Purity](zealot_corruption_healing_coherency_improved.md) / `zealot_corruption_healing_coherency_improved` | Aura |
| [Zealous](zealot_stamina_cost_multiplier_aura.md) / `zealot_stamina_cost_multiplier_aura` | Aura |
| [Chorus of Spiritual Fortitude](zealot_bolstering_prayer.md) / `zealot_bolstering_prayer` | Ability |
| [Fury of the Faithful](zealot_attack_speed_post_ability.md) / `zealot_attack_speed_post_ability` | Ability |
| [Holy Cause](zealot_channel_grants_toughness_damage_reduction.md) / `zealot_channel_grants_toughness_damage_reduction` | Ability |
| [Ecclesiarch's Call](zealot_channel_grants_damage.md) / `zealot_channel_grants_damage` | Ability |
| [Redoubled Zeal](zealot_additional_charge_of_ability.md) / `zealot_additional_charge_of_ability` | Ability |
| [Shroudfield](zealot_stealth.md) / `zealot_stealth` | Ability |
| [Master-Crafted Shroudfield](zealot_increased_duration.md) / `zealot_increased_duration` | Ability |
| [Invigorating Revelation](zealot_leaving_stealth_restores_toughness.md) / `zealot_leaving_stealth_restores_toughness` | Ability |
| [Martyr's Purpose](zealot_restore_stealth_cd_on_damage.md) / `zealot_restore_stealth_cd_on_damage` | Ability |
| [Pious Cut-Throat](zealot_backstab_kills_restore_cd.md) / `zealot_backstab_kills_restore_cd` | Ability |
| [Invocation of Death](zealot_crits_grant_cd.md) / `zealot_crits_grant_cd` | Ability |
| [Unrelenting Fury](zealot_fotf_refund_cooldown.md) / `zealot_fotf_refund_cooldown` | Ability |
| [Perfectionist](zealot_stealth_cooldown_regeneration.md) / `zealot_stealth_cooldown_regeneration` | Ability |
| [Until Death](zealot_resist_death.md) / `zealot_resist_death` | Keystone |
| [Martyrdom](zealot_martyrdom.md) / `zealot_martyrdom` | Keystone |
| [I Shall Not Fall](zealot_martyrdom_grants_toughness.md) / `zealot_martyrdom_grants_toughness` | Keystone |
| [Maniac](zealot_martyrdom_grants_attack_speed.md) / `zealot_martyrdom_grants_attack_speed` | Keystone |
| [Inexorable Judgement](zealot_quickness_passive.md) / `zealot_quickness_passive` | Keystone |
| [Retributor's Stance](zealot_momentum_toughness_replenish.md) / `zealot_momentum_toughness_replenish` | Keystone |
| [Inebriate's Poise](zealot_quickness_passive_dodge_stacks.md) / `zealot_quickness_passive_dodge_stacks` | Keystone |
| [Holy Revenant](zealot_resist_death_heal.md) / `zealot_resist_death_heal` | Keystone |
| [Blazing Piety](zealot_fanatic_rage.md) / `zealot_fanatic_rage` | Keystone |
| [Stalwart](zealot_fanatic_rage_toughness_on_max.md) / `zealot_fanatic_rage_toughness_on_max` | Keystone |
| [Righteous Warrior](zealot_fanatic_rage_improved.md) / `zealot_fanatic_rage_improved` | Keystone |
| [Infectious Zeal](zealot_shared_fanatic_rage.md) / `zealot_shared_fanatic_rage` | Keystone |
| [Restorative Verses](zealot_martyrdom_toughness_modifier.md) / `zealot_martyrdom_toughness_modifier` | Keystone |
| [Eternal](zealot_quickness_increased_duration.md) / `zealot_quickness_increased_duration` | Keystone |
| [On the Brink](zealot_corruption_resistance_stacking.md) / `zealot_corruption_resistance_stacking` | Keystone |
| [Zealous Pilgrim](zealot_resist_death_ability.md) / `zealot_resist_death_ability` | Keystone |
| [Fire and Fury](zealot_resist_death_fire.md) / `zealot_resist_death_fire` | Keystone |
| [Risen](zealot_resist_death_golden_toughness.md) / `zealot_resist_death_golden_toughness` | Keystone |
| [Scourge](zealot_crits_apply_bleed.md) / `zealot_crits_apply_bleed` | Skill |
| [Backstabber](zealot_backstab_damage.md) / `zealot_backstab_damage` | Skill |
| [Disdain](zealot_multi_hits_increase_damage.md) / `zealot_multi_hits_increase_damage` | Skill |
| [Purge the Unclean](zealot_increased_damage_vs_resilient.md) / `zealot_increased_damage_vs_resilient` | Skill |
| [Sustained Assault](zealot_hits_grant_stacking_damage.md) / `zealot_hits_grant_stacking_damage` | Skill |
| [Enduring Faith](zealot_crits_reduce_toughness_damage.md) / `zealot_crits_reduce_toughness_damage` | Skill |
| [Second Wind](zealot_toughness_on_dodge.md) / `zealot_toughness_on_dodge` | Skill |
| [Melee Damage Boost](base_melee_damage_node_buff_medium_1.md) / `base_melee_damage_node_buff_medium_1` | Skill |
| [The Voice of Terra](zealot_toughness_while_shooting.md) / `zealot_toughness_while_shooting` | Skill |
| [Restoring Faith](zealot_heal_part_of_damage_taken.md) / `zealot_heal_part_of_damage_taken` | Skill |
| [Bleed for the Emperor](zealot_reduced_damage_on_wound.md) / `zealot_reduced_damage_on_wound` | Skill |
| [Vicious Offering](zealot_toughness_on_heavy_kills.md) / `zealot_toughness_on_heavy_kills` | Skill |
| [Toughness Damage Reduction](base_toughness_damage_reduction_node_buff_medium_1.md) / `base_toughness_damage_reduction_node_buff_medium_1` | Skill |
| [Duellist](zealot_increased_crit_and_weakspot_damage_after_dodge.md) / `zealot_increased_crit_and_weakspot_damage_after_dodge` | Skill |
| [Shield of Contempt](zealot_ally_damage_taken_reduced.md) / `zealot_ally_damage_taken_reduced` | Skill |
| [Punish Impiety](zealot_push_attacks_attack_speed.md) / `zealot_push_attacks_attack_speed` | Skill |
| [Thy Wrath be Swift](zealot_damage_boosts_movement.md) / `zealot_damage_boosts_movement` | Skill |
| [Retaliatory Defence](zealot_stamina_on_block_break.md) / `zealot_stamina_on_block_break` | Skill |
| [Good Balance](zealot_reduced_damage_after_dodge.md) / `zealot_reduced_damage_after_dodge` | Skill |
| [Enemies Within, Enemies Without](zealot_toughness_in_melee.md) / `zealot_toughness_in_melee` | Skill |
| [Faithful Frenzy](zealot_attack_speed.md) / `zealot_attack_speed` | Skill |
| [Faith's Fortitude](zealot_additional_wounds.md) / `zealot_additional_wounds` | Skill |
| [Anoint in Blood](zealot_increase_ranged_close_damage.md) / `zealot_increase_ranged_close_damage` | Skill |
| [Unfaltering](zealot_uninterruptible_no_slow_heavies.md) / `zealot_uninterruptible_no_slow_heavies` | Skill |
| [Riposte](zealot_stacking_melee_damage_after_dodge.md) / `zealot_stacking_melee_damage_after_dodge` | Skill |
| [Relentless Fervor](zealot_sprint_improvements.md) / `zealot_sprint_improvements` | Skill |
| [Unseen Blade](zealot_damage_vs_nonthreat.md) / `zealot_damage_vs_nonthreat` | Skill |
| [The Master's Retribution](zealot_defensive_knockback.md) / `zealot_defensive_knockback` | Skill |
| [Blinded by Blood](zealot_bled_enemies_take_more_damage.md) / `zealot_bled_enemies_take_more_damage` | Skill |
| [Desperation](zealot_more_damage_when_low_on_stamina.md) / `zealot_more_damage_when_low_on_stamina` | Skill |
| [No Respite](zealot_melee_crits_restore_stamina.md) / `zealot_melee_crits_restore_stamina` | Skill |
| [Providence](zealot_revive_speed.md) / `zealot_revive_speed` | Skill |
| [Abolish Blasphemers](zealot_damage_vs_elites.md) / `zealot_damage_vs_elites` | Skill |
| [Hubris](zealot_weakspot_damage_reduction.md) / `zealot_weakspot_damage_reduction` | Skill |
| [Melee Damage Boost](base_melee_damage_node_buff_medium_4.md) / `base_melee_damage_node_buff_medium_4` | Skill |
| [Prime Target](zealot_elite_kills_empowers.md) / `zealot_elite_kills_empowers` | Skill |
| [Behind the Lines](zealot_suppress_on_backstab_kill.md) / `zealot_suppress_on_backstab_kill` | Skill |
| [Time to Kill](zealot_backstab_periodic_damage.md) / `zealot_backstab_periodic_damage` | Skill |
| [Against the Odds](zealot_offensive_vs_many.md) / `zealot_offensive_vs_many` | Skill |
| [Out of Pocket](zealot_reload_from_melee.md) / `zealot_reload_from_melee` | Skill |
| [Wait in Line](zealot_reduced_damage_from_ranged.md) / `zealot_reduced_damage_from_ranged` | Skill |
| [Holy Tools](zealot_weapon_special_damage.md) / `zealot_weapon_special_damage` | Skill |
| [Got Your Back](zealot_melee_kills_restore_toughness_to_target.md) / `zealot_melee_kills_restore_toughness_to_target` | Skill |
| [Purifying Hatred](zealot_dmg_vs_burning_electrocuted.md) / `zealot_dmg_vs_burning_electrocuted` | Skill |
| [Dance of Death](zealot_improved_weapon_handling_after_dodge.md) / `zealot_improved_weapon_handling_after_dodge` | Skill |
