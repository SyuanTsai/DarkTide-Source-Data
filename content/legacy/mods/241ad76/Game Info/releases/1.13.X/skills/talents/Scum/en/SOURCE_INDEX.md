# Scum: sources and technical index

[繁體中文](../SOURCE_INDEX.md) | [Player descriptions](README.md) | [Release, date and evidence limits](../../../../README.md)

[Character base effects](BASE_EFFECTS.md) | [Definitions not directly selected](UNUSED_DEFINITIONS.md)

[Original game English comparison](LOCALIZATION_COMPARISON.md) | [Percentage-description review](DAMAGE_PERCENTAGE_REVIEW.md)

Fixed source SHA: `7e662fcda16219d775b84af50322be2e9cd9d62e`. The talent tree has **79 selectable nodes**, each costing one point; a single build can allocate at most 30 points.
[Archetype and base talents](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/broker_archetype.lua#L50-L74); [Talent-tree settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L3-L10). Internal tree version 15 is not the game's release version.

The Stimm recipe tree has a separate 30-point budget. Each recipe costs 1–5 points and can be purchased only once.
Names use the corresponding game English entries. Mechanisms reuse fixed-version code analysis and remain untested in game.

| Talent / code identifier | Category |
|---|---|
| [Blackout](broker_blitz_flash_grenade_improved.md) / `broker_blitz_flash_grenade_improved` | Blitz |
| [Boom Bringer](broker_blitz_missile_launcher.md) / `broker_blitz_missile_launcher` | Blitz |
| [Chem Grenade](broker_blitz_tox_grenade.md) / `broker_blitz_tox_grenade` | Blitz |
| [Gunslinger Improved](broker_aura_gunslinger_improved.md) / `broker_aura_gunslinger_improved` | Aura |
| [Ruffian](broker_coherency_melee_damage.md) / `broker_coherency_melee_damage` | Aura |
| [Anarchist](broker_coherency_anarchist.md) / `broker_coherency_anarchist` | Aura |
| [Enhanced Desperado](broker_ability_focus_improved.md) / `broker_ability_focus_improved` | Ability |
| [Stimm Supply](broker_ability_stimm_field.md) / `broker_ability_stimm_field` | Ability |
| [Rampage!](broker_ability_punk_rage.md) / `broker_ability_punk_rage` | Ability |
| [Pulverising Strikes](broker_ability_punk_rage_sub_2.md) / `broker_ability_punk_rage_sub_2` | Ability |
| [Channelled Aggression](broker_ability_punk_rage_sub_1.md) / `broker_ability_punk_rage_sub_1` | Ability |
| [Forge's Bellow](broker_ability_punk_rage_sub_3.md) / `broker_ability_punk_rage_sub_3` | Ability |
| [Boiling Blood](broker_ability_punk_rage_sub_4.md) / `broker_ability_punk_rage_sub_4` | Ability |
| [Focused Resolve](broker_ability_focus_sub_3.md) / `broker_ability_focus_sub_3` | Ability |
| [Pick Your Targets](broker_ability_focus_sub_2.md) / `broker_ability_focus_sub_2` | Ability |
| [Practiced Deployment](broker_ability_stimm_field_sub_3.md) / `broker_ability_stimm_field_sub_3` | Ability |
| [Fast Acting Stimms](broker_ability_stimm_field_sub_1.md) / `broker_ability_stimm_field_sub_1` | Ability |
| [Booby Trap](broker_ability_stimm_field_sub_2.md) / `broker_ability_stimm_field_sub_2` | Ability |
| [Nimble](broker_passive_improved_dodges.md) / `broker_passive_improved_dodges` | Keystone |
| [Adrenaline Frenzy](broker_keystone_adrenaline_junkie.md) / `broker_keystone_adrenaline_junkie` | Keystone |
| [Vulture's Mark](broker_keystone_vultures_mark_on_kill.md) / `broker_keystone_vultures_mark_on_kill` | Keystone |
| [Chemical Dependency](broker_keystone_chemical_dependency.md) / `broker_keystone_chemical_dependency` | Keystone |
| [Chem Enhanced](broker_keystone_chemical_dependency_sub_1.md) / `broker_keystone_chemical_dependency_sub_1` | Keystone |
| [Chem Fortified](broker_keystone_chemical_dependency_sub_2.md) / `broker_keystone_chemical_dependency_sub_2` | Keystone |
| [Maxed Out Chems](broker_keystone_chemical_dependency_sub_3.md) / `broker_keystone_chemical_dependency_sub_3` | Keystone |
| [Vulture's Push](broker_keystone_vultures_mark_aoe_stagger.md) / `broker_keystone_vultures_mark_aoe_stagger` | Keystone |
| [Patient Hunter](broker_keystone_vultures_mark_increased_duration.md) / `broker_keystone_vultures_mark_increased_duration` | Keystone |
| [Vulture's Dodge](broker_keystone_vultures_mark_dodge_on_ranged_crit.md) / `broker_keystone_vultures_mark_dodge_on_ranged_crit` | Keystone |
| [Adrenaline Assassin](broker_keystone_adrenaline_junkie_sub_1.md) / `broker_keystone_adrenaline_junkie_sub_1` | Keystone |
| [Stoked Rage](broker_keystone_adrenaline_junkie_sub_3.md) / `broker_keystone_adrenaline_junkie_sub_3` | Keystone |
| [Adrenaline Unbound](broker_keystone_adrenaline_junkie_sub_5.md) / `broker_keystone_adrenaline_junkie_sub_5` | Keystone |
| [Uncontrolled Aggression](broker_keystone_adrenaline_junkie_sub_4.md) / `broker_keystone_adrenaline_junkie_sub_4` | Keystone |
| [Adrenaline Smiter](broker_keystone_adrenaline_junkie_sub_2.md) / `broker_keystone_adrenaline_junkie_sub_2` | Keystone |
| [Alley Rat](broker_passive_longer_dodges.md) / `broker_passive_longer_dodges` | Keystone |
| [Quick and Deadly](broker_passive_close_range_damage_on_dodge.md) / `broker_passive_close_range_damage_on_dodge` | Talent |
| [A Tertium Welcome](broker_passive_first_target_damage.md) / `broker_passive_first_target_damage` | Talent |
| [In Your Face](broker_passive_close_ranged_damage.md) / `broker_passive_close_ranged_damage` | Talent |
| [Precision Violence](broker_passive_restore_toughness_on_weakspot_kill.md) / `broker_passive_restore_toughness_on_weakspot_kill` | Talent |
| [Voice of Tertium](broker_passive_restore_toughness_on_close_ranged_kill.md) / `broker_passive_restore_toughness_on_close_ranged_kill` | Talent |
| [Float Like a Butterfly](broker_passive_ninja_grants_crit_chance.md) / `broker_passive_ninja_grants_crit_chance` | Talent |
| [Speedloader](broker_passive_reload_speed_on_close_kill.md) / `broker_passive_reload_speed_on_close_kill` | Talent |
| [Burst of Energy](broker_passive_stun_immunity_on_toughness_broken.md) / `broker_passive_stun_immunity_on_toughness_broken` | Talent |
| [Toughness Boost](base_toughness_node_buff_medium_1.md) / `base_toughness_node_buff_medium_1` | Talent |
| [Regained Posture](broker_passive_stamina_on_successful_dodge.md) / `broker_passive_stamina_on_successful_dodge` | Talent |
| [Slippery Customer](broker_passive_dodge_melee_on_slide.md) / `broker_passive_dodge_melee_on_slide` | Talent |
| [Tis but a Scratch](broker_passive_replenish_toughness_on_ranged_toughness_damage.md) / `broker_passive_replenish_toughness_on_ranged_toughness_damage` | Talent |
| [Unload](broker_passive_damage_on_reload.md) / `broker_passive_damage_on_reload` | Talent |
| [Swift Endurance](broker_passive_stamina_grants_atk_speed.md) / `broker_passive_stamina_grants_atk_speed` | Talent |
| [Ramping Backstabs](broker_passive_ramping_backstabs.md) / `broker_passive_ramping_backstabs` | Talent |
| [Moving Target](broker_passive_increased_ranged_dodges.md) / `broker_passive_increased_ranged_dodges` | Talent |
| [Sample Collector](broker_passive_stimm_cd_on_kill.md) / `broker_passive_stimm_cd_on_kill` | Talent |
| [Jittery](broker_passive_improved_dodges_at_full_stamina.md) / `broker_passive_improved_dodges_at_full_stamina` | Talent |
| [Critical Chance Boost](base_crit_chance_node_buff_low_1.md) / `base_crit_chance_node_buff_low_1` | Talent |
| [Melee Damage Boost](base_melee_damage_node_buff_medium_1.md) / `base_melee_damage_node_buff_medium_1` | Talent |
| [Potent Tox](base_toxin_power_boost_1.md) / `base_toxin_power_boost_1` | Talent |
| [Sticky Hands](broker_passive_reduce_swap_time.md) / `broker_passive_reduce_swap_time` | Talent |
| [Calling for a Time Out](broker_passive_reduced_toughness_damage_during_reload.md) / `broker_passive_reduced_toughness_damage_during_reload` | Talent |
| [Street Tough](broker_passive_knockback_on_taking_melee_damage.md) / `broker_passive_knockback_on_taking_melee_damage` | Talent |
| [Channelled Devastation](broker_passive_crit_grants_damage.md) / `broker_passive_crit_grants_damage` | Talent |
| [Battering Strikes](broker_passive_melee_cleave_on_melee_kill.md) / `broker_passive_melee_cleave_on_melee_kill` | Talent |
| [Hyper-Violence](broker_passive_melee_damage_carry_over.md) / `broker_passive_melee_damage_carry_over` | Talent |
| [Virulent Strain](broker_passive_toxin_infected_enemies_take_increased_damage.md) / `broker_passive_toxin_infected_enemies_take_increased_damage` | Talent |
| [Toxin Mania](broker_passive_damage_after_toxined_enemies.md) / `broker_passive_damage_after_toxined_enemies` | Talent |
| [Splash Damage](broker_passive_toxin_spread_on_kills.md) / `broker_passive_toxin_spread_on_kills` | Talent |
| [Extra Pouches](broker_passive_increased_blitz_ammo.md) / `broker_passive_increased_blitz_ammo` | Talent |
| [Coated Weaponry](broker_passive_melee_attacks_apply_toxin.md) / `broker_passive_melee_attacks_apply_toxin` | Talent |
| [Pocket Toxin](broker_passive_blitz_inflicts_toxin.md) / `broker_passive_blitz_inflicts_toxin` | Talent |
| [Targeted Toxin](broker_passive_reduced_damage_by_toxined.md) / `broker_passive_reduced_damage_by_toxined` | Talent |
| [Toxic Renewal](broker_passive_replenish_toughness_while_toxined_enemies_in_proximity.md) / `broker_passive_replenish_toughness_while_toxined_enemies_in_proximity` | Talent |
| [Ammo Jack](broker_passive_extended_mag.md) / `broker_passive_extended_mag` | Talent |
| [Cheap Shots](broker_passive_damage_vs_heavy_staggered.md) / `broker_passive_damage_vs_heavy_staggered` | Talent |
| [Hyper-Critical](broker_passive_melee_crit_instakill.md) / `broker_passive_melee_crit_instakill` | Talent |
| [Punching Above One's Weight](broker_passive_damage_vs_elites_monsters.md) / `broker_passive_damage_vs_elites_monsters` | Talent |
| [The Sweet Spot](broker_passive_increased_weakspot_damage.md) / `broker_passive_increased_weakspot_damage` | Talent |
| [Long Lasting](broker_passive_stimm_increased_duration.md) / `broker_passive_stimm_increased_duration` | Talent |
| [Blessed Stimms](broker_passive_stimm_cleanse_on_kill.md) / `broker_passive_stimm_cleanse_on_kill` | Talent |
| [Hive City Brawler](broker_passive_dr_damage_tradeoff_on_stamina.md) / `broker_passive_dr_damage_tradeoff_on_stamina` | Talent |
| [Pickpocket](broker_passive_low_ammo_regen.md) / `broker_passive_low_ammo_regen` | Talent |
| [Battering Momentum](broker_passive_cleave_on_cleave.md) / `broker_passive_cleave_on_cleave` | Talent |
| [Equip Cartel Special](broker_stimm_activation_talent.md) / `broker_stimm_activation_talent` | Stimm recipe |
| [Spur I](broker_stimm_celerity_1.md) / `broker_stimm_celerity_1` | Stimm recipe |
| [Spur II](broker_stimm_celerity_2.md) / `broker_stimm_celerity_2` | Stimm recipe |
| [Spur III](broker_stimm_celerity_3.md) / `broker_stimm_celerity_3` | Stimm recipe |
| [Spur IV](broker_stimm_celerity_4.md) / `broker_stimm_celerity_4` | Stimm recipe |
| [Spur V](broker_stimm_celerity_5a.md) / `broker_stimm_celerity_5a` | Stimm recipe |
| [Reflex](broker_stimm_celerity_5b.md) / `broker_stimm_celerity_5b` | Stimm recipe |
| [Fervor](broker_stimm_celerity_5c.md) / `broker_stimm_celerity_5c` | Stimm recipe |
| [Wildfire I](broker_stimm_combat_1.md) / `broker_stimm_combat_1` | Stimm recipe |
| [Wildfire II](broker_stimm_combat_2.md) / `broker_stimm_combat_2` | Stimm recipe |
| [Wildfire III](broker_stimm_combat_3.md) / `broker_stimm_combat_3` | Stimm recipe |
| [Wildfire IV](broker_stimm_combat_4a.md) / `broker_stimm_combat_4a` | Stimm recipe |
| [Fury I](broker_stimm_combat_4b.md) / `broker_stimm_combat_4b` | Stimm recipe |
| [Vultoprene I](broker_stimm_combat_4c.md) / `broker_stimm_combat_4c` | Stimm recipe |
| [Wildfire V](broker_stimm_combat_5a.md) / `broker_stimm_combat_5a` | Stimm recipe |
| [Fury II](broker_stimm_combat_5b.md) / `broker_stimm_combat_5b` | Stimm recipe |
| [Vultoprene II](broker_stimm_combat_5c.md) / `broker_stimm_combat_5c` | Stimm recipe |
| [Barrage I](broker_stimm_durability_1.md) / `broker_stimm_durability_1` | Stimm recipe |
| [Barrage II](broker_stimm_durability_2.md) / `broker_stimm_durability_2` | Stimm recipe |
| [Barrage III](broker_stimm_durability_3.md) / `broker_stimm_durability_3` | Stimm recipe |
| [Barrage IV](broker_stimm_durability_4.md) / `broker_stimm_durability_4` | Stimm recipe |
| [Tank](broker_stimm_durability_5a.md) / `broker_stimm_durability_5a` | Stimm recipe |
| [Regain](broker_stimm_durability_5b.md) / `broker_stimm_durability_5b` | Stimm recipe |
| [Kalma I](broker_stimm_concentration_1.md) / `broker_stimm_concentration_1` | Stimm recipe |
| [Kalma II](broker_stimm_concentration_2.md) / `broker_stimm_concentration_2` | Stimm recipe |
| [Kalma III](broker_stimm_concentration_3.md) / `broker_stimm_concentration_3` | Stimm recipe |
| [Kalma IV](broker_stimm_concentration_4.md) / `broker_stimm_concentration_4` | Stimm recipe |
| [Kalma V](broker_stimm_concentration_5a.md) / `broker_stimm_concentration_5a` | Stimm recipe |
| [Hypex](broker_stimm_concentration_5b.md) / `broker_stimm_concentration_5b` | Stimm recipe |
| [Klay](broker_stimm_concentration_5c.md) / `broker_stimm_concentration_5c` | Stimm recipe |
| [Desperado](broker_ability_focus.md) / `broker_ability_focus` | Base Combat Ability |
| [Blinder](broker_blitz_flash_grenade.md) / `broker_blitz_flash_grenade` | Base Blitz |
| [Gunslinger](broker_aura_gunslinger.md) / `broker_aura_gunslinger` | Base Aura |
| [Like the Wind](broker_passive_improved_sprint_dodge.md) / `broker_passive_improved_sprint_dodge` | Base passive |
| [Cartel Special](broker_stimm_description_talent.md) / `broker_stimm_description_talent` | Dedicated Stimm |
| [Dedicated Stimm charge](broker_syringe.md) / `broker_syringe` | Conditional base ability |

## Icon sources

[Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12)

Images identify talents; they are not mechanism evidence.
