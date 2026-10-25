# Arbites: sources and technical index

[繁體中文](../SOURCE_INDEX.md) | [Player descriptions](README.md) | [Version and evidence limits](../../../../README.md)

[Character base effects](BASE_EFFECTS.md) | [Definitions not directly referenced](UNUSED_DEFINITIONS.md)

[Original English comparison](LOCALIZATION_COMPARISON.md) | [Percentage and calculation review](DAMAGE_PERCENTAGE_REVIEW.md)

Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. The current tree has 86 selectable one-point nodes; a build can allocate at most 30 points. Internal tree version 19 is not the game release number. [Class and base talents](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/adamant_archetype.lua#L50-L74); [Tree settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L3-L10).

Names use the same-build English resources. Mechanisms reuse the fixed-version evidence and have not been tested in game.

| Talent / code identifier | Category |
|---|---|
| [Remote Detonation](adamant_whistle.md) / `adamant_whistle` | Blitz |
| [Arbites Grenade](adamant_grenade_improved.md) / `adamant_grenade_improved` | Blitz |
| [Voltaic Shock Mine](adamant_shock_mine.md) / `adamant_shock_mine` | Blitz |
| [Part of the Squad](adamant_companion_coherency.md) / `adamant_companion_coherency` | Aura |
| [Ruthless Efficiency](adamant_reload_speed_aura.md) / `adamant_reload_speed_aura` | Aura |
| [Breaking Dissent](adamant_damage_vs_staggered_aura.md) / `adamant_damage_vs_staggered_aura` | Aura |
| [Break the Line](adamant_charge.md) / `adamant_charge` | Ability |
| [Nuncio-Aquila](adamant_area_buff_drone_improved.md) / `adamant_area_buff_drone_improved` | Ability |
| [Castigator's Stance](adamant_stance.md) / `adamant_stance` | Ability |
| [Blessed Armament](adamant_stance_ranged_kills_transfer_ammo.md) / `adamant_stance_ranged_kills_transfer_ammo` | Ability |
| [Writ of Execution](adamant_stance_elite_kills_stack_damage.md) / `adamant_stance_elite_kills_stack_damage` | Ability |
| [Bloodlust](adamant_stance_dog_bloodlust.md) / `adamant_stance_dog_bloodlust` | Ability |
| [Inspiring Recitation](adamant_drone_buff_talent.md) / `adamant_drone_buff_talent` | Ability |
| [Fear of Justice](adamant_drone_debuff_talent.md) / `adamant_drone_debuff_talent` | Ability |
| [Commendation from Condemnation](adamant_charge_toughness.md) / `adamant_charge_toughness` | Ability |
| [Targeted Brutality](adamant_charge_cooldown_reduction.md) / `adamant_charge_cooldown_reduction` | Ability |
| [Engage](adamant_charge_longer_distance.md) / `adamant_charge_longer_distance` | Ability |
| [Kill Order](adamant_dog_damage_after_ability.md) / `adamant_dog_damage_after_ability` | Ability |
| [Execution Order](adamant_execution_order.md) / `adamant_execution_order` | Keystone |
| [Terminus Warrant](adamant_terminus_warrant.md) / `adamant_terminus_warrant` | Keystone |
| [Forceful](adamant_forceful.md) / `adamant_forceful` | Keystone |
| [Lone Wolf](adamant_disable_companion.md) / `adamant_disable_companion` | Keystone |
| [Will of the Lex](adamant_forceful_toughness_regen_per_stack.md) / `adamant_forceful_toughness_regen_per_stack` | Keystone |
| [Adamant Will](adamant_forceful_stun_immune_and_block_all.md) / `adamant_forceful_stun_immune_and_block_all` | Keystone |
| [Targets Acquired](adamant_forceful_offensive.md) / `adamant_forceful_offensive` | Keystone |
| [Arbites Vigilant](adamant_forceful_ability_damage.md) / `adamant_forceful_ability_damage` | Keystone |
| [Judicial Force](adamant_forceful_stagger_on_low_high.md) / `adamant_forceful_stagger_on_low_high` | Keystone |
| [Obstinate](adamant_terminus_warrant_cdr.md) / `adamant_terminus_warrant_cdr` | Keystone |
| [Terminal Decree](adamant_terminus_warrant_support.md) / `adamant_terminus_warrant_support` | Keystone |
| [Efficient Killer](adamant_execution_order_crit.md) / `adamant_execution_order_crit` | Keystone |
| [Malocator](adamant_execution_order_cdr.md) / `adamant_execution_order_cdr` | Keystone |
| [No Lenience](adamant_execution_order_rending.md) / `adamant_execution_order_rending` | Keystone |
| [Keeping Protocol](adamant_execution_order_permastack.md) / `adamant_execution_order_permastack` | Keystone |
| [Not Far Behind](adamant_pinning_dog_bonus_moving_towards.md) / `adamant_pinning_dog_bonus_moving_towards` | Keystone |
| [Go Get 'Em!](adamant_companion_focus_ranged.md) / `adamant_companion_focus_ranged` | Keystone |
| [Unleashed Brutality](adamant_companion_focus_elite.md) / `adamant_companion_focus_elite` | Keystone |
| [Writ of Judgement](adamant_terminus_warrant_improved_combined.md) / `adamant_terminus_warrant_improved_combined` | Keystone |
| [Man and Cyber-Mastiff](adamant_toughness_regen_near_companion.md) / `adamant_toughness_regen_near_companion` | Passive talent |
| [Withering Fire](adamant_damage_after_reloading.md) / `adamant_damage_after_reloading` | Passive talent |
| [Hammer of Judgement](adamant_multiple_hits_attack_speed.md) / `adamant_multiple_hits_attack_speed` | Passive talent |
| [Target Neutralised](adamant_elite_special_kills_replenish_toughness.md) / `adamant_elite_special_kills_replenish_toughness` | Passive talent |
| [Up Close](adamant_close_kills_restore_toughness.md) / `adamant_close_kills_restore_toughness` | Passive talent |
| [Force of Will](adamant_staggers_replenish_toughness.md) / `adamant_staggers_replenish_toughness` | Passive talent |
| [Voltaic Mandibles Augment](adamant_dog_attacks_electrocute.md) / `adamant_dog_attacks_electrocute` | Passive talent |
| [Walk It Off](adamant_stamina_spent_replenish_toughness.md) / `adamant_stamina_spent_replenish_toughness` | Passive talent |
| [True Grit](adamant_limit_dmg_taken_from_hits.md) / `adamant_limit_dmg_taken_from_hits` | Passive talent |
| [Toughness Damage Reduction](base_toughness_damage_reduction_node_buff_medium_1.md) / `base_toughness_damage_reduction_node_buff_medium_1` | Stat node |
| [Arbitrator Armour](adamant_armor.md) / `adamant_armor` | Passive talent |
| [Ammo Belt](adamant_ammo_belt.md) / `adamant_ammo_belt` | Passive talent |
| [Rebreather](adamant_rebreather.md) / `adamant_rebreather` | Passive talent |
| [Suppression Protocols](adamant_hitting_multiple_gives_tdr.md) / `adamant_hitting_multiple_gives_tdr` | Passive talent |
| [Ranged Damage Boost](base_ranged_damage_node_buff_medium_1.md) / `base_ranged_damage_node_buff_medium_1` | Stat node |
| [Melee Damage Boost](base_melee_damage_node_buff_medium_1.md) / `base_melee_damage_node_buff_medium_1` | Stat node |
| [Razor-Jaw Augment](adamant_dog_pounces_bleed_nearby.md) / `adamant_dog_pounces_bleed_nearby` | Passive talent |
| [Imposing Force](adamant_damage_reduction_after_elite_kill.md) / `adamant_damage_reduction_after_elite_kill` | Passive talent |
| [Hold the Line](adamant_staggers_reduce_damage_taken.md) / `adamant_staggers_reduce_damage_taken` | Passive talent |
| [Cleave Boost](base_cleave_node_buff_medium_1.md) / `base_cleave_node_buff_medium_1` | Stat node |
| [Impact Boost](base_impact_node_buff_medium_1.md) / `base_impact_node_buff_medium_1` | Stat node |
| [Plasteel Plates](adamant_plasteel_plates.md) / `adamant_plasteel_plates` | Passive talent |
| [Serrated Maw](adamant_dog_applies_brittleness.md) / `adamant_dog_applies_brittleness` | Passive talent |
| [Arbites Revelatum](adamant_dodge_grants_damage.md) / `adamant_dodge_grants_damage` | Passive talent |
| [Soulguilt Scan](adamant_stacking_weakspot_strength.md) / `adamant_stacking_weakspot_strength` | Passive talent |
| [Judicious Efficiency](adamant_elite_special_kills_reload_speed.md) / `adamant_elite_special_kills_reload_speed` | Passive talent |
| [March](adamant_movement_speed_on_block.md) / `adamant_movement_speed_on_block` | Passive talent |
| [No Escape](adamant_elite_special_kills_offensive_boost.md) / `adamant_elite_special_kills_offensive_boost` | Passive talent |
| [Drive them Back](adamant_cleave_after_push.md) / `adamant_cleave_after_push` | Passive talent |
| [Shield Plates](adamant_shield_plates.md) / `adamant_shield_plates` | Passive talent |
| [Weight of the Lex](adamant_heavy_attacks_increase_damage.md) / `adamant_heavy_attacks_increase_damage` | Passive talent |
| [Strike Down](adamant_melee_attacks_on_staggered_rend.md) / `adamant_melee_attacks_on_staggered_rend` | Passive talent |
| [Zealous Dedication](adamant_crit_chance_on_kill.md) / `adamant_crit_chance_on_kill` | Passive talent |
| [Prosecution Blow](adamant_crits_rend.md) / `adamant_crits_rend` | Passive talent |
| [Street Smarts](adamant_dodge_improvement.md) / `adamant_dodge_improvement` | Passive talent |
| [Monstrosity Hunter](adamant_monster_hunter.md) / `adamant_monster_hunter` | Passive talent |
| [The Emperor's Fist](adamant_first_melee_hit_increased_damage.md) / `adamant_first_melee_hit_increased_damage` | Passive talent |
| [Target Selection](adamant_pinning_dog_elite_damage.md) / `adamant_pinning_dog_elite_damage` | Passive talent |
| [Target Priority](adamant_increased_damage_to_high_health.md) / `adamant_increased_damage_to_high_health` | Passive talent |
| [Canine Morale](adamant_pinning_dog_kills_buff_allies.md) / `adamant_pinning_dog_kills_buff_allies` | Passive talent |
| [Rapid Movement](adamant_sprinting_sliding.md) / `adamant_sprinting_sliding` | Passive talent |
| [Final Warning](adamant_ranged_damage_on_melee_stagger.md) / `adamant_ranged_damage_on_melee_stagger` | Passive talent |
| [Priority Endowment](adamant_clip_size.md) / `adamant_clip_size` | Passive talent |
| [Cower, Miscreants!](adamant_damage_vs_suppressed.md) / `adamant_damage_vs_suppressed` | Passive talent |
| [Justified Measures](adamant_stacking_damage.md) / `adamant_stacking_damage` | Passive talent |
| [Suppression Force](adamant_staggered_enemies_deal_less_damage.md) / `adamant_staggered_enemies_deal_less_damage` | Passive talent |
| [Concussive](adamant_melee_weakspot_hits_count_as_stagger.md) / `adamant_melee_weakspot_hits_count_as_stagger` | Passive talent |
| [Target the Weak](adamant_staggering_enemies_take_more_damage.md) / `adamant_staggering_enemies_take_more_damage` | Passive talent |
| [Retaliatory Force](adamant_perfect_block_damage_boost.md) / `adamant_perfect_block_damage_boost` | Passive talent |

## Base effects

| Effect / code identifier | Category |
|---|---|
| [Nuncio-Aquila](adamant_area_buff_drone.md) / `adamant_area_buff_drone` | Base effect |
| [Cyber-Mastiff tag command](adamant_command_dog_with_tag.md) / `adamant_command_dog_with_tag` | Base effect |
| [Companion Aura](adamant_companion_aura.md) / `adamant_companion_aura` | Base effect |
| [Companion Damage per Level](adamant_companion_damage_per_level.md) / `adamant_companion_damage_per_level` | Base effect |
| [Arbites Grenade](adamant_grenade.md) / `adamant_grenade` | Base effect |
