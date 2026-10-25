# Skitarii: sources and technical index

[繁體中文](../SOURCE_INDEX.md) | [Player descriptions](README.md) | [Release, date and evidence limits](../../../../README.md)

[Character base effects](BASE_EFFECTS.md) | [Definitions not directly used](UNUSED_DEFINITIONS.md)

[Original game English comparison](LOCALIZATION_COMPARISON.md) | [Percentage-description review](DAMAGE_PERCENTAGE_REVIEW.md)

Fixed source SHA: `7e662fcda16219d775b84af50322be2e9cd9d62e`. The talent tree has **97 selectable nodes**, each costing one point; a single build can allocate at most 30 points.
[Archetype and base talents](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/cryptic_archetype.lua#L55-L84); [Talent-tree settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L3-L10). Internal tree version 18 is not the game's release version.

Names use the corresponding game English entries. Mechanisms reuse fixed-version code analysis and remain untested in game.

| Talent / code identifier | Category |
|---|---|
| [Integrated Refraction Emitter](cryptic_grenade_ability_force_field.md) / `cryptic_grenade_ability_force_field` | Blitz |
| [Purgator Servo-Skull](cryptic_flamethrower.md) / `cryptic_flamethrower` | Blitz |
| [Medicae Servo-Skull](cryptic_servo_skull_inject_ally.md) / `cryptic_servo_skull_inject_ally` | Blitz |
| [Arc Grenades](cryptic_grenade_ability_arc_grenade.md) / `cryptic_grenade_ability_arc_grenade` | Blitz |
| [Artificer Servo-Skull](cryptic_servo_skull_improved.md) / `cryptic_servo_skull_improved` | Blitz |
| [Overcharged Arc Grenades](cryptic_arc_grenades_brittleness.md) / `cryptic_arc_grenades_brittleness` | Blitz |
| [Enhanced Arc Grenades](cryptic_arc_grenades_weapon_malfunction.md) / `cryptic_arc_grenades_weapon_malfunction` | Blitz |
| [Overcharged Refraction Emitter](cryptic_force_field_duration_increase.md) / `cryptic_force_field_duration_increase` | Blitz |
| [Kinetic Repulsion](cryptic_force_field_capacitance_restore.md) / `cryptic_force_field_capacitance_restore` | Blitz |
| [Noospheric Command](cryptic_servo_skull_improved_tagging.md) / `cryptic_servo_skull_improved_tagging` | Blitz |
| [Voltaic Resistance](cryptic_force_field_arcs.md) / `cryptic_force_field_arcs` | Blitz |
| [Resurgence](cryptic_coherency_regen_aura_improved.md) / `cryptic_coherency_regen_aura_improved` | Aura |
| [Ammunition Deposit](cryptic_ammo_aura.md) / `cryptic_ammo_aura` | Aura |
| [Foe-Render Creed](cryptic_aura_weapon_improved.md) / `cryptic_aura_weapon_improved` | Aura |
| [Chordclaw Strike](cryptic_chordclaw.md) / `cryptic_chordclaw` | Ability |
| [Restoration Protocol](cryptic_precision_stance_toughness_suppression.md) / `cryptic_precision_stance_toughness_suppression` | Ability |
| [Writ of Ammunition Enumeration](cryptic_precision_stance_fire_rate_increased.md) / `cryptic_precision_stance_fire_rate_increased` | Ability |
| [Voltaic Arcs](cryptic_discharge_generates_arcs.md) / `cryptic_discharge_generates_arcs` | Ability |
| [Voltaic Motivator](cryptic_discharge_attack_speed_increase.md) / `cryptic_discharge_attack_speed_increase` | Ability |
| [Voltaic Overcharge](cryptic_discharge_toughness.md) / `cryptic_discharge_toughness` | Ability |
| [Axial Slash](cryptic_chordclaw_horizontal_swipe.md) / `cryptic_chordclaw_horizontal_swipe` | Ability |
| [Probing Strikes](cryptic_chordclaw_quick_stab_combo.md) / `cryptic_chordclaw_quick_stab_combo` | Ability |
| [Flux Conduit Build-Up](cryptic_crits_grant_power.md) / `cryptic_crits_grant_power` | Ability |
| [Reactor Coil Recharge](cryptic_weakspot_kills_grant_power.md) / `cryptic_weakspot_kills_grant_power` | Ability |
| [Augmented Power-Cycle](cryptic_increased_passive_cooldown_regen.md) / `cryptic_increased_passive_cooldown_regen` | Ability |
| [Capacitor Reclamation Loop](cryptic_multi_hits_grant_power.md) / `cryptic_multi_hits_grant_power` | Ability |
| [Voltaic Emitter](cryptic_discharge.md) / `cryptic_discharge` | Ability |
| [Advanced Combat Doctrines](cryptic_precision_stance.md) / `cryptic_precision_stance` | Ability |
| [Satiated Steel](cryptic_chordclaw_capacitance_restoration.md) / `cryptic_chordclaw_capacitance_restoration` | Ability |
| [Slice and Dice](cryptic_chordclaw_consecutive_bonus.md) / `cryptic_chordclaw_consecutive_bonus` | Ability |
| [Piercing Sight](cryptic_precision_stance_crit_cleave.md) / `cryptic_precision_stance_crit_cleave` | Ability |
| [Calculated Priority](cryptic_precision_stance_damage_on_elite_kill.md) / `cryptic_precision_stance_damage_on_elite_kill` | Ability |
| [Flensing Protocols](cryptic_dissector.md) / `cryptic_dissector` | Keystone |
| [Redline Capacitors](cryptic_redline.md) / `cryptic_redline` | Keystone |
| [Power Overload](cryptic_overload_keystone.md) / `cryptic_overload_keystone` | Keystone |
| [Critical Power Overload](cryptic_overload_keystone_bigger_explosion.md) / `cryptic_overload_keystone_bigger_explosion` | Keystone |
| [Invigorating Overload](cryptic_overload_keystone_toughness_stamina.md) / `cryptic_overload_keystone_toughness_stamina` | Keystone |
| [Static Capacitor Drain](cryptic_overload_keystone_permastack.md) / `cryptic_overload_keystone_permastack` | Keystone |
| [Servo-Sinew Surge](cryptic_dissector_crit_attack_speed.md) / `cryptic_dissector_crit_attack_speed` | Keystone |
| [Honed Dissector](cryptic_dissector_max_stacks.md) / `cryptic_dissector_max_stacks` | Keystone |
| [Advanced Power Management](cryptic_redline_strength.md) / `cryptic_redline_strength` | Keystone |
| [Capacitory Limit Override](cryptic_redline_rending.md) / `cryptic_redline_rending` | Keystone |
| [Resource Optimisation Canticles](cryptic_redline_extra_max_stacks.md) / `cryptic_redline_extra_max_stacks` | Keystone |
| [Enhanced Capacitance Protocols](cryptic_dissector_ability_stacks.md) / `cryptic_dissector_ability_stacks` | Keystone |
| [Powerdrive](cryptic_overload_keystone_abilities.md) / `cryptic_overload_keystone_abilities` | Keystone |
| [Higher Purpose](cryptic_dissector_power.md) / `cryptic_dissector_power` | Keystone |
| [Surge-Extension](cryptic_redline_toughness.md) / `cryptic_redline_toughness` | Keystone |
| [Power Redistribution Uplink](cryptic_crits_grant_tdr.md) / `cryptic_crits_grant_tdr` | Talent |
| [Adaptive Combat Engram](cryptic_dr_on_toughness_break.md) / `cryptic_dr_on_toughness_break` | Talent |
| [Evasive Servo Recovery](cryptic_successful_dodge_stamina.md) / `cryptic_successful_dodge_stamina` | Talent |
| [Omnissian Recharge Litany](cryptic_multi_hits_restore_toughness.md) / `cryptic_multi_hits_restore_toughness` | Talent |
| [Channelled Motive Force](cryptic_stamina_increases_damage.md) / `cryptic_stamina_increases_damage` | Talent |
| [Entropic Transfer](cryptic_electrocution_toughness.md) / `cryptic_electrocution_toughness` | Talent |
| [Overcharge Transfer Lattice](cryptic_electrocution_defense.md) / `cryptic_electrocution_defense` | Talent |
| [Sureshot Cogitator Sync](cryptic_weakspot_damage.md) / `cryptic_weakspot_damage` | Talent |
| [Shockline Breach Protocol](cryptic_pushing_grants_cleave.md) / `cryptic_pushing_grants_cleave` | Talent |
| [Rad-Sink](cryptic_stacking_ranged_damage.md) / `cryptic_stacking_ranged_damage` | Talent |
| [Progressive Plating Matrix](cryptic_stacking_tdr.md) / `cryptic_stacking_tdr` | Talent |
| [Retribution Conduit](cryptic_damage_vs_electrocuted_scaling_on_charge.md) / `cryptic_damage_vs_electrocuted_scaling_on_charge` | Talent |
| [Galvanic Marking Array](cryptic_elite_kills_damage.md) / `cryptic_elite_kills_damage` | Talent |
| [Auto-Repair Doctrines](cryptic_toughness_per_charge.md) / `cryptic_toughness_per_charge` | Talent |
| [Last Stand Relay](cryptic_crit_chance_based_on_charge.md) / `cryptic_crit_chance_based_on_charge` | Talent |
| [Weakness Analysis Doctrine](cryptic_afflicted_increased_damage.md) / `cryptic_afflicted_increased_damage` | Talent |
| [Ablative Motion Routines](cryptic_mobile_defense.md) / `cryptic_mobile_defense` | Talent |
| [Power Overflow](cryptic_shared_toughness.md) / `cryptic_shared_toughness` | Talent |
| [Target-Neutralization Feedback](cryptic_stun_suppression_immune.md) / `cryptic_stun_suppression_immune` | Talent |
| [Binary Ballistics Protocol](cryptic_elite_kills_toughness.md) / `cryptic_elite_kills_toughness` | Talent |
| [Force Distribution Actuators](cryptic_push_stagger_stamina.md) / `cryptic_push_stagger_stamina` | Talent |
| [Superior Tracking Litanies](cryptic_no_braced_movement_penalty.md) / `cryptic_no_braced_movement_penalty` | Talent |
| [Hydraulic Impact](cryptic_better_heavies.md) / `cryptic_better_heavies` | Talent |
| [Hybrid Combat Covenant](cryptic_hybrid_damage.md) / `cryptic_hybrid_damage` | Talent |
| [Kinetic Energy Distributors](cryptic_toughness_on_damage_taken.md) / `cryptic_toughness_on_damage_taken` | Talent |
| [Uncapped Arrestor](cryptic_melee_attacks_give_melee_attack_speed.md) / `cryptic_melee_attacks_give_melee_attack_speed` | Talent |
| [Electro-Strike Conduit](cryptic_melee_crits_electrocute_first.md) / `cryptic_melee_crits_electrocute_first` | Talent |
| [Gunsmith](cryptic_auto_reload.md) / `cryptic_auto_reload` | Talent |
| [Assassination Protocols](cryptic_ranged_vs_bfg.md) / `cryptic_ranged_vs_bfg` | Talent |
| [System Shock](cryptic_electrocution_applies_brittleness.md) / `cryptic_electrocution_applies_brittleness` | Talent |
| [Ammo-Cell Augury](cryptic_ammo_reserve.md) / `cryptic_ammo_reserve` | Talent |
| [Voltaic Restoration](cryptic_coherency_toughness_on_ability.md) / `cryptic_coherency_toughness_on_ability` | Talent |
| [Salvation Doctrine](cryptic_revive_speed_and_dr.md) / `cryptic_revive_speed_and_dr` | Talent |
| [Ammunition-Restoration Pod](cryptic_passive_ammo_replenishment.md) / `cryptic_passive_ammo_replenishment` | Talent |
| [Sustained Assault Doctrine](cryptic_stacking_melee_damage.md) / `cryptic_stacking_melee_damage` | Talent |
| [Galvanized Coating](cryptic_stun_dr_power.md) / `cryptic_stun_dr_power` | Talent |
| [Moebian Conductor](cryptic_damage_on_ability.md) / `cryptic_damage_on_ability` | Talent |
| [Servo-Core Recharge Engine](cryptic_weakspot_kills_restore_toughness.md) / `cryptic_weakspot_kills_restore_toughness` | Talent |
| [Adaptive Combat Calibration](cryptic_cleave_and_impact.md) / `cryptic_cleave_and_impact` | Talent |
| [Residual Current Buffer](cryptic_tdr_based_on_charge.md) / `cryptic_tdr_based_on_charge` | Talent |
| [Superior Defence Engrams](cryptic_ranged_stacking_toughness.md) / `cryptic_ranged_stacking_toughness` | Talent |
| [Target Prioritization Psalms](cryptic_specials_marking.md) / `cryptic_specials_marking` | Talent |
| [Protectorate Protocol](cryptic_disabled_allies_defense.md) / `cryptic_disabled_allies_defense` | Talent |
| [Data Sensor Protocol](cryptic_ally_coherency_defenses.md) / `cryptic_ally_coherency_defenses` | Talent |
| [Sequenced Charge](cryptic_strength_on_charge_gain.md) / `cryptic_strength_on_charge_gain` | Talent |
| [Slaughter Protocol](cryptic_toughness_replenishment_on_kill_bonus.md) / `cryptic_toughness_replenishment_on_kill_bonus` | Talent |
| [Precision Combat Augurs](cryptic_next_hit_all_damage_on_dodge.md) / `cryptic_next_hit_all_damage_on_dodge` | Talent |
| [Voltaic Burst](cryptic_electrocution_push.md) / `cryptic_electrocution_push` | Talent |
| [Ablative Wards](cryptic_corruption_resistance_doom.md) / `cryptic_corruption_resistance_doom` | Talent |
| [Threat Detection Imperative](cryptic_ranged_kills_tdr.md) / `cryptic_ranged_kills_tdr` | Talent |
| [Voltaic Expander](cryptic_discharge_base.md) / `cryptic_discharge_base` | Base Combat Ability |
| [Motive Engine](cryptic_passive_cooldown_regen.md) / `cryptic_passive_cooldown_regen` | Base passive |
| [Servo-Skull](cryptic_servo_skull_order.md) / `cryptic_servo_skull_order` | Base Blitz |
| [Resurgence](cryptic_coherency_regen_aura.md) / `cryptic_coherency_regen_aura` | Base Aura |
