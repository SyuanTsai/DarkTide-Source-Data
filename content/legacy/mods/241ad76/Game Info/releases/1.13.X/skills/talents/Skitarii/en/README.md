# Skitarii talents: Release 1.13.1

[繁體中文](../README.md) | [Sources, formulas and technical index](SOURCE_INDEX.md) | [Talent classes](../../../README.en.md) | [Release information](../../../../README.md)

[Character base effects](BASE_EFFECTS.md)

<a id="talent-index"></a>

## Talent index

| Talent | Main effects | Category |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/d45e19a1-d480-42db-bd0c-70ed43aba9aa" width="32" height="32" alt="Integrated Refraction Emitter talent icon"> [Integrated Refraction Emitter](#cryptic_grenade_ability_force_field) | <ul><li>Deploy a force field that follows you, absorbs Ranged Attacks and electrocutes nearby enemies at activation and expiry.</li><li>Lasts 8 seconds; stores up to 3 charges, each requiring 75 seconds of natural regeneration.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/295017d9-50cd-4797-8b33-bd3627a7139f" width="32" height="32" alt="Purgator Servo-Skull talent icon"> [Purgator Servo-Skull](#cryptic_flamethrower) | <ul><li>Summon an additional Servo-Skull with a Flamer and direct it to an area.</li><li>Selecting it together with Medicae Servo-Skull raises their shared capacity from 3 to 5 charges.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/adeeeef3-0c2e-450a-974b-66ce6c6366bd" width="32" height="32" alt="Medicae Servo-Skull talent icon"> [Medicae Servo-Skull](#cryptic_servo_skull_inject_ally) | <ul><li>Summon an additional Medicae Servo-Skull to rescue allies who need assistance.</li><li>After rescue, grant 5 seconds of Toughness Damage Reduction and Toughness restoration.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/6a4875ee-4056-4964-ae36-846e598954bc" width="32" height="32" alt="Arc Grenades talent icon"> [Arc Grenades](#cryptic_grenade_ability_arc_grenade) | <ul><li>After detonation, select up to 4 initial targets within 10m; arcs chain to nearby enemies and Electrocute them.</li><li>Each Elite or Specialist kill restores 0.04 charges of Capacitance.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/0efafa0a-aad0-4bb8-869f-133db37cf152" width="32" height="32" alt="Artificer Servo-Skull talent icon"> [Artificer Servo-Skull](#cryptic_servo_skull_improved) | <ul><li>A Servo-Skull follows you permanently and can be ordered to shoot enemies or perform data interrogation.</li><li>The base Servo-Skull bonuses become permanent; hits also increase enemy Damage taken and build Burn stacks.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/14c1a0d8-2916-40d7-a7e2-8572a0b3e6d2" width="32" height="32" alt="Overcharged Arc Grenades talent icon"> [Overcharged Arc Grenades](#cryptic_arc_grenades_brittleness) | <ul><li>Arc Grenades gain up to 2 additional initial arc targets.</li><li>Enemies hit by the arc chain receive 8 stacks of Brittleness.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/501bab77-4618-480e-80e8-3abb022f6a68" width="32" height="32" alt="Enhanced Arc Grenades talent icon"> [Enhanced Arc Grenades](#cryptic_arc_grenades_weapon_malfunction) | <ul><li>Arc Grenades and their arcs can cause applicable Ranged Enemies' weapons to Malfunction.</li><li>Malfunction normally lasts 12s; another qualifying hit updates its expiry.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/e70f3e4b-d2c2-4840-bc29-56ba85dd816d" width="32" height="32" alt="Overcharged Refraction Emitter talent icon"> [Overcharged Refraction Emitter](#cryptic_force_field_duration_increase) | <ul><li>Increase Integrated Refraction Emitter's duration from 8s to 12s and add an Electrocution explosion at the midpoint.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/9eb6e468-224f-4d7c-b696-cc58aa08f532" width="32" height="32" alt="Kinetic Repulsion talent icon"> [Kinetic Repulsion](#cryptic_force_field_capacitance_restore) | <ul><li>Integrated Refraction Emitter restores Capacitance when it absorbs Ranged Attacks.</li><li>Each absorbed attack restores 0.025 charges, up to 0.75 per field.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/c365855a-e85f-4d0d-8156-4048ae9f7e02" width="32" height="32" alt="Noospheric Command talent icon"> [Noospheric Command](#cryptic_servo_skull_improved_tagging) | <ul><li>Tag an enemy and order an attack to briefly make the Servo-Skull shoot much faster.</li><li>A full 2s boost costs 0.3 Capacitance charges; a minimum charge threshold is required except in the Psykhanium.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/ba6e0fe8-b601-433e-a423-8a6b8ee7b79b" width="32" height="32" alt="Voltaic Resistance talent icon"> [Voltaic Resistance](#cryptic_force_field_arcs) | <ul><li>When Integrated Refraction Emitter ends, send 1–4 arcs towards enemies in front, based on absorbed Ranged Attack count.</li><li>Each arc can chain to nearby enemies.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/7090c8fb-aaaa-4015-a5c1-21e7093507be" width="32" height="32" alt="Resurgence talent icon"> [Resurgence](#cryptic_coherency_regen_aura_improved) | <ul><li>Gain 25 Toughness; you and allies in Coherency retain at least 50% of the normal Coherency Toughness regeneration rate during combat.</li><li>The minimum regeneration multiplier applies even with enemies nearby.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/59dcc637-0b0f-4f3b-8e79-f4fdf53b6cef" width="32" height="32" alt="Ammunition Deposit talent icon"> [Ammunition Deposit](#cryptic_ammo_aura) | <ul><li>You gain 25 Toughness; players in the mission gain 15% Ammo Reserve capacity.</li><li>The Ammo Reserve effect has no Coherency-distance limit and does not stack from multiple allies selecting the talent.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/a48f1d74-488a-42d3-a59d-33d55135dad2" width="32" height="32" alt="Foe-Render Creed talent icon"> [Foe-Render Creed](#cryptic_aura_weapon_improved) | <ul><li>You gain 25 Toughness; you and allies in Coherency gain 15% more Cleave capacity and 7.5% Rending.</li><li>The Coherency chain includes the caster, so you also receive the Cleave and Rending bonuses.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/af7ec3de-6e36-4171-8be2-d385177b170e" width="32" height="32" alt="Chordclaw Strike talent icon"> [Chordclaw Strike](#cryptic_chordclaw) | <ul><li>Each Chordclaw activation costs 1 charge; the Chordclaw Heavy Attack is a guaranteed Critical Strike with +50% Rending.</li><li>While active, the Chordclaw effect also gives +30% Melee Damage and Stun immunity; actual Health damage varies with the enemy and damage calculation.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/eb879996-8768-4102-8799-0fecaf6f7a98" width="32" height="32" alt="Restoration Protocol talent icon"> [Restoration Protocol](#cryptic_precision_stance_toughness_suppression) | <ul><li>Activating Advanced Combat Doctrines clears Suppression; while the stance remains active, it restores 10% of maximum Toughness per second.</li><li>Recovery uses maximum Toughness, receives Toughness Replenishment modifiers and is capped at full Toughness.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/ac9ea4d6-352f-4ad1-95f2-a2de10d39d2d" width="32" height="32" alt="Writ of Ammunition Enumeration talent icon"> [Writ of Ammunition Enumeration](#cryptic_precision_stance_fire_rate_increased) | <ul><li>While Advanced Combat Doctrines is active, gain +15% ranged Fire Rate, increasing to a total of +30% after maintaining the stance continuously for 4s.</li><li>Leaving the stance removes the bonus; reactivation starts again at +15% with a new 4s timer.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/9d074da8-541c-4fec-bc2b-47e53be42bad" width="32" height="32" alt="Voltaic Arcs talent icon"> [Voltaic Arcs](#cryptic_discharge_generates_arcs) | <ul><li>Voltaic Emitter releases one additional forward arc per charge consumed. A use consumes at most 3 charges, so normal use releases at most 3 arcs.</li><li>Each arc starts from a valid enemy within 12m in front of you and can then link to nearby enemies.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/b74a0dba-64ed-40b6-b630-792c413387cd" width="32" height="32" alt="Voltaic Motivator talent icon"> [Voltaic Motivator](#cryptic_discharge_attack_speed_increase) | <ul><li>Each use of Voltaic Emitter gives a base +5% Attack Speed, plus another +5% per charge consumed.</li><li>The bonus lasts 15s; consuming 1, 2 or 3 charges gives a total of +10%, +15% or +20%, respectively.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/dd369366-6fa1-4e92-bd7b-c92f5bf8023a" width="32" height="32" alt="Voltaic Overcharge talent icon"> [Voltaic Overcharge](#cryptic_discharge_toughness) | <ul><li>Voltaic Emitter immediately restores 25% of maximum Toughness per full charge consumed; each Electric Discharge explosion hit on a living enemy restores another 1% of maximum Toughness.</li><li>Recovery receives Toughness Replenishment modifiers and cannot exceed the current Toughness deficit.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/94595162-990c-418a-9bbc-9b3e90ed790b" width="32" height="32" alt="Axial Slash talent icon"> [Axial Slash](#cryptic_chordclaw_horizontal_swipe) | <ul><li>Quickly activating the Chordclaw replaces its default Heavy stab with a horizontal sweep, which remains a guaranteed Critical Strike. Holding to charge still uses the original Heavy stab.</li><li>A sweep can hit multiple targets; damage to later targets decreases according to the damage profile.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/7d516cae-80f0-4d48-b562-b5a21f6ddcd1" width="32" height="32" alt="Probing Strikes talent icon"> [Probing Strikes](#cryptic_chordclaw_quick_stab_combo) | <ul><li>Quick Chordclaw activation becomes three successive stabs; holding the input still uses the regular Heavy Attack.</li><li>Each stab is a guaranteed Critical Strike and applies 6 Bleed stacks to its target when it deals Health damage. Bleed is capped at 18 stacks.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/c63720c4-df53-4c05-9881-cd6a6bf33c79" width="32" height="32" alt="Flux Conduit Build-Up talent icon"> [Flux Conduit Build-Up](#cryptic_crits_grant_power) | <ul><li>Critical hits accelerate Capacitance recovery for 4s. At the base recovery rate, the extra amount is 5% of one charge.</li><li>Another Critical hit within 4s resets the recovery window; the recovery bonus stays fixed and does not stack with repeated Critical hits.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/833b596d-dbc9-49fe-9f90-436140e700ed" width="32" height="32" alt="Reactor Coil Recharge talent icon"> [Reactor Coil Recharge](#cryptic_weakspot_kills_grant_power) | <ul><li>Weakspot Kills restore 2% of the current Combat Ability's cost per charge. At 50 points per charge, each restores 1 point of Capacitance.</li><li>Recovery is retained as fractional progress; usable charge count increases only upon reaching another full charge.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/39f22717-a782-4201-b5b3-f63a166bedd1" width="32" height="32" alt="Augmented Power-Cycle talent icon"> [Augmented Power-Cycle](#cryptic_increased_passive_cooldown_regen) | <ul><li>Natural Capacitance recovery increases from 2% to 3% of one charge per second. At 50 points per charge, recovery rises from 1 to 1.5 points/s.</li><li>With no other costs or recovery modifiers, one charge refills in about 33.3s and three charges from empty in about 100s.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/7557cf7d-9d8b-41ba-bff3-582bdcc5c063" width="32" height="32" alt="Capacitor Reclamation Loop talent icon"> [Capacitor Reclamation Loop](#cryptic_multi_hits_grant_power) | <ul><li>Hitting at least 3 enemies with one attack restores 1% of the current Combat Ability's cost per charge.</li><li>At 50 points per charge, each proc restores 0.5 points. After a proc, at least 0.25s must pass before another can trigger.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/637d6e54-1c81-434d-b5bc-d779d4d8674b" width="32" height="32" alt="Voltaic Emitter talent icon"> [Voltaic Emitter](#cryptic_discharge) | <ul><li>Activation consumes 1–3 full Capacitance charges, at most 3 per use. Extra charges and fractional progress towards the next charge are retained.</li><li>The main Discharge affects enemies within a fixed 12m radius, Electrocuting them for 2s and dealing ongoing damage.</li><li>Consuming at least 2 charges also causes Weapon Malfunction in qualifying enemies within 30m; consuming at least 3 grants 15s of attacks Electrocuting enemies for 2s.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/fe67d92b-3b1a-4da7-bf6a-43bb643e80d6" width="32" height="32" alt="Advanced Combat Doctrines talent icon"> [Advanced Combat Doctrines](#cryptic_precision_stance) | <ul><li>Switches to your ranged weapon and assists aiming at enemies near the reticule; Spread −90% and Recoil −60%.</li><li>Activation spends 25% of one charge, then 10% per second and 1% per shot. Reloading pauses the per-second drain.</li><li>Reload Speed +25%, lingering for 5s after the stance ends; reactivation, leaving the ranged weapon or exhausting Capacitance ends the stance.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/756e60ad-5734-42a4-be62-759096344f67" width="32" height="32" alt="Satiated Steel talent icon"> [Satiated Steel](#cryptic_chordclaw_capacitance_restoration) | <ul><li>A Chordclaw melee kill restores an additional 25% of the current Combat Ability's cost per charge over 5s.</li><li>At 50 points per charge, the full 5s gives 12.5 extra points. Another kill during the effect resets the timer without stacking the recovery rate.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/a4bee55e-0868-4104-89c8-e2009e89ae4d" width="32" height="32" alt="Slice and Dice talent icon"> [Slice and Dice](#cryptic_chordclaw_consecutive_bonus) | <ul><li>Each Chordclaw ability activation adds one Chordclaw damage stack, +20% per stack, up to 3.</li><li>Duration is 5s; adding a stack refreshes the duration. At 3 stacks, the Chordclaw damage modifier totals +60%.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/bedef96d-1746-44a5-a482-1abe4e5e15c6" width="32" height="32" alt="Piercing Sight talent icon"> [Piercing Sight](#cryptic_precision_stance_crit_cleave) | <ul><li>While Advanced Combat Doctrines is active, gain 30% Ranged Cleave and 15 percentage points of Ranged Critical Strike Chance; after 4 continuous seconds, these rise to 60% and 30 percentage points. Both bonuses end with the ability.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/9cbfaa3e-c8bf-42b8-98a4-5e5c6ee9c033" width="32" height="32" alt="Calculated Priority talent icon"> [Calculated Priority](#cryptic_precision_stance_damage_on_elite_kill) | <ul><li>While Advanced Combat Doctrines is active, ranged Elite kills grant +5% Damage per stack for 10 seconds, up to 5 stacks (+25%). New stacks refresh the duration; existing stacks can outlast the ability.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/856a3399-5f26-40e1-988e-8960086a92c9" width="32" height="32" alt="Flensing Protocols talent icon"> [Flensing Protocols](#cryptic_dissector) | <ul><li>Start with 6 stacks; each grants +2.5% Damage and 2.5% Toughness Damage Reduction. Taking Health or Toughness damage removes one stack at most once per second. Elite or Specialist kills restore up to 2 stacks and 15% of maximum Toughness.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/55fe932f-c298-4b33-ad21-efab7b9244e5" width="32" height="32" alt="Redline Capacitors talent icon"> [Redline Capacitors](#cryptic_redline) | <ul><li>Each Combat Ability charge actually gained or spent adds one stack: +5% natural Capacitance generation and 5% Toughness Damage Reduction per stack, up to 4. New stacks refresh 12 seconds; stacks then decay one at a time. Maximum Combat Ability charges increase by 1.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/1f613b73-cb4f-4b13-8c3e-2355fe567ba3" width="32" height="32" alt="Power Overload talent icon"> [Power Overload](#cryptic_overload_keystone) | <ul><li>Kills by you or allies in Coherency give 1 stack, or 2 for Elites and Specialists. Reaching 30 triggers an overload and resets to zero. You and allies in Coherency gain +15% Damage and 15% Toughness Damage Reduction for 8 seconds.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/a59865c6-45fb-4f1e-b360-b8100e541a00" width="32" height="32" alt="Critical Power Overload talent icon"> [Critical Power Overload](#cryptic_overload_keystone_bigger_explosion) | <ul><li>On Power Overload, enemies hit within 8 metres are Electrocuted and take 15% more damage for 8 seconds. Reapplication refreshes the duration; the area effect itself deals no explosion damage.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/cfc8d67b-448d-4b33-afac-86fd412b2a6d" width="32" height="32" alt="Invigorating Overload talent icon"> [Invigorating Overload](#cryptic_overload_keystone_toughness_stamina) | <ul><li>Each Power Overload restores 20% of maximum Toughness and 20% of maximum Stamina to you and allies in Coherency. Resource caps apply; Toughness recovery also uses existing replenishment modifiers.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/f0977f9f-2eb1-458a-a2c1-5e5642a284aa" width="32" height="32" alt="Static Capacitor Drain talent icon"> [Static Capacitor Drain](#cryptic_overload_keystone_permastack) | <ul><li>After 8 /16 /24 overloads, gain +15% Damage /20% Toughness Damage Reduction /25% faster natural Capacitance generation, respectively. All three can remain together, each awarded once; the description says they last until death.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/08678745-4375-4d48-bdde-6fbc209d6402" width="32" height="32" alt="Servo-Sinew Surge talent icon"> [Servo-Sinew Surge](#cryptic_dissector_crit_attack_speed) | <ul><li>Each current Flensing Protocols stack also grants 1.5 percentage points of Critical Strike Chance and +1.5% Melee Attack Speed. The bonuses follow the stack count: 6 stacks give 9 points /9%, and 8 give 12 points /12%.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/17ab9d2c-793b-40c4-83bd-cb3c4bdee444" width="32" height="32" alt="Honed Dissector talent icon"> [Honed Dissector](#cryptic_dissector_max_stacks) | <ul><li>Raises the Flensing Protocols cap from 6 to 8 stacks and starts at 8. Per-stack values remain unchanged: full stacks give +20% Damage and a Toughness damage taken multiplier of 0.80.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/0fead35c-7d81-43dc-be42-f88f95123f84" width="32" height="32" alt="Advanced Power Management talent icon"> [Advanced Power Management](#cryptic_redline_strength) | <ul><li>On Combat Ability use, gain one stack per charge held before use, each granting 5% Power for 10 seconds, up to 5 stacks. New stacks refresh the duration; repeated Chordclaw actions during the same activation do not trigger it again.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/bd0f7682-079c-4c61-bae6-b759aa2608e9" width="32" height="32" alt="Capacitory Limit Override talent icon"> [Capacitory Limit Override](#cryptic_redline_rending) | <ul><li>At 3 or more Redline Capacitors stacks, gain +15% Rending. The bonus turns off at 2 or fewer stacks; stacks above the threshold do not increase its value.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/96e3fb15-c1fd-4702-a6ef-0f69b10931fe" width="32" height="32" alt="Resource Optimisation Canticles talent icon"> [Resource Optimisation Canticles](#cryptic_redline_extra_max_stacks) | <ul><li>Adds another maximum Combat Ability charge and raises the Redline Capacitors stack cap from 4 to 5. At 5 stacks, Toughness damage taken is multiplied by 0.75 and natural Capacitance recovery is 25% faster.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/de2e3c8c-8b4c-4859-87d0-c1416c07ef5c" width="32" height="32" alt="Enhanced Capacitance Protocols talent icon"> [Enhanced Capacitance Protocols](#cryptic_dissector_ability_stacks) | <ul><li>Using a Combat Ability restores all missing Flensing Protocols stacks, up to the current cap: 6 normally, or 8 with Honed Dissector.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/d7c8f168-1f4e-42cc-a3d7-926d3b4382f1" width="32" height="32" alt="Powerdrive talent icon"> [Powerdrive](#cryptic_overload_keystone_abilities) | <ul><li>Voltaic Emitter gives 5 Power Overload stacks per charge consumed. The Chordclaw counts its first activation; continued attacks during the same activation do not add stacks. Advanced Combat Doctrines settles whole-charge consumption when the stance ends.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/e1ca03f4-8152-4fa6-9b43-0780a40ae7ca" width="32" height="32" alt="Higher Purpose talent icon"> [Higher Purpose](#cryptic_dissector_power) | <ul><li>Elite or Specialist kills restore an additional 2.5% of one Combat Ability charge, added to the class's base 4% for a total of 6.5%. This kill recovery is inactive during Advanced Combat Doctrines.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/d199d3e7-4b94-4288-bf17-acbd915bdeaf" width="32" height="32" alt="Surge-Extension talent icon"> [Surge-Extension](#cryptic_redline_toughness) | <ul><li>Each charge-gained or charge-spent event starts 5 seconds of Toughness recovery, restoring 25% of maximum Toughness in total. It can trigger at the Redline stack cap; repeated events reset the duration and recovery budget.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/6ce866b5-8bad-4668-94c0-c0c6c5a06944" width="32" height="32" alt="Power Redistribution Uplink talent icon"> [Power Redistribution Uplink](#cryptic_crits_grant_tdr) | <ul><li>Critical hits start 3 seconds of recovery at 2.5% of maximum Toughness per second and grant 15% Toughness Damage Reduction. Further critical hits restart the duration; the rate and reduction do not stack.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/ea4be2ad-8b84-4e83-a056-993beed7b39c" width="32" height="32" alt="Adaptive Combat Engram talent icon"> [Adaptive Combat Engram](#cryptic_dr_on_toughness_break) | <ul><li>When your Toughness breaks, gain 30% Damage Reduction for 5 seconds. A further 15-second cooldown follows the effect, so successive triggers are at least 20 seconds apart.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/4738c3e6-2609-414c-9c00-f50fea4dcef3" width="32" height="32" alt="Evasive Servo Recovery talent icon"> [Evasive Servo Recovery](#cryptic_successful_dodge_stamina) | <ul><li>Successfully dodging an enemy attack immediately restores 10% of maximum Stamina. Pressing dodge without avoiding an attack does not qualify; recovery is capped at full Stamina.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/d9876bb9-a417-45e8-814c-acbc24233120" width="32" height="32" alt="Omnissian Recharge Litany talent icon"> [Omnissian Recharge Litany](#cryptic_multi_hits_restore_toughness) | <ul><li>Hitting the third enemy with one attack starts 3 seconds of recovery totaling 10% of maximum Toughness. Melee and ranged hits qualify. Further triggers refresh the duration, at least 0.25 seconds apart.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/8f013bd2-f685-4be4-8678-11ac630d6659" width="32" height="32" alt="Channelled Motive Force talent icon"> [Channelled Motive Force](#cryptic_stamina_increases_damage) | <ul><li>Every accumulated Stamina bar spent grants 15% Damage for 4 seconds. Spending can be split across actions; recovery does not erase accumulated spending. Further triggers refresh the duration without stacking.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/98a10c08-52e1-47bf-a288-a2043ba40a63" width="32" height="32" alt="Entropic Transfer talent icon"> [Entropic Transfer](#cryptic_electrocution_toughness) | <ul><li>Applying Electrocution, adding an Electrocution stack or refreshing it at the stack cap starts 4 seconds of recovery totaling 12% of maximum Toughness. Further triggers restart the duration without increasing the recovery rate.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/74c8388d-8388-4646-8a91-0eb056656036" width="32" height="32" alt="Overcharge Transfer Lattice talent icon"> [Overcharge Transfer Lattice](#cryptic_electrocution_defense) | <ul><li>Receiving melee damage Electrocutes living enemies within 2.5 metres of the attacker. Blocking alone does not trigger it. Electrocution lasts 3 seconds and refreshes when reapplied; the talent has a 15-second cooldown from activation.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/4d3197de-7f15-46b8-9df6-153fd0f94642" width="32" height="32" alt="Sureshot Cogitator Sync talent icon"> [Sureshot Cogitator Sync](#cryptic_weakspot_damage) | <ul><li>Adds 25% to the extra damage component of weakspot hits, for both melee and ranged attacks. The increase to the complete hit depends on the weapon and hit conditions.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/dca309fd-773f-4a07-a659-cfb320cd14a9" width="32" height="32" alt="Shockline Breach Protocol talent icon"> [Shockline Breach Protocol](#cryptic_pushing_grants_cleave) | <ul><li>Hitting an enemy with a push grants 50% increased melee cleave for 8 seconds. Further push hits refresh the duration without stacking. The bonus increases the attack's mass budget.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/26c97989-2f88-46ee-9bf3-f9f02b09c0f3" width="32" height="32" alt="Rad-Sink talent icon"> [Rad-Sink](#cryptic_stacking_ranged_damage) | <ul><li>Gain 10% Ranged Damage 1 second after the last shot, rising to 20% at 2 seconds, up to 2 stacks. Shooting again restarts the wait; sustained fire does not preserve the full bonus.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/5208032b-aaaf-4801-b84c-6fdbaab1735b" width="32" height="32" alt="Progressive Plating Matrix talent icon"> [Progressive Plating Matrix](#cryptic_stacking_tdr) | <ul><li>Hitting the first target of an attack grants one stack of 2.5% Toughness Damage Reduction, up to 6 stacks. Triggers refresh a shared 5-second duration; one attack hitting several enemies still adds only one stack.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/eb093286-7cce-40e8-b518-3b5bc16dd38d" width="32" height="32" alt="Retribution Conduit talent icon"> [Retribution Conduit](#cryptic_damage_vs_electrocuted_scaling_on_charge) | <ul><li>Gain 10% Damage against Electrocuted enemies, plus 5% for each full Combat Ability charge currently held. Partial charges do not count; the bonus follows the remaining charges and ends for targets no longer Electrocuted.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/77cad8a5-5837-45fe-98a7-549e27e5d738" width="32" height="32" alt="Galvanic Marking Array talent icon"> [Galvanic Marking Array](#cryptic_elite_kills_damage) | <ul><li>Killing an Elite with a ranged attack grants one stack of 5% Damage, up to 4 stacks. Triggers refresh a 15-second timer; without further kills, one stack decays every 15 seconds.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/003d8e80-1bb4-46b0-aad1-e2f6d78be693" width="32" height="32" alt="Auto-Repair Doctrines talent icon"> [Auto-Repair Doctrines](#cryptic_toughness_per_charge) | <ul><li>Continuously restores 3% of maximum Toughness per second, plus 0.5% per second for each full charge currently held. Partial charges do not count; recovery is capped at maximum Toughness.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/5e8556aa-e9d9-4400-a863-bb26a5f11e17" width="32" height="32" alt="Last Stand Relay talent icon"> [Last Stand Relay](#cryptic_crit_chance_based_on_charge) | <ul><li>Always grants 6 percentage points of Critical Hit Chance. With no full charge remaining, adds another 4 points for a total of 10. Partial charge progress still counts as zero full charges.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/4683657a-edf5-4420-b60f-68eddc85ef43" width="32" height="32" alt="Weakness Analysis Doctrine talent icon"> [Weakness Analysis Doctrine](#cryptic_afflicted_increased_damage) | <ul><li>Hitting an Electrocuted, Burning, Soulblazed, Bleeding or Toxin-afflicted enemy with melee or ranged attacks grants 10% Damage for 8 seconds. The bonus can be used against other targets; qualifying hits refresh it without stacking.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/bc0f3370-fa34-406f-9e0d-91e23b98f1f2" width="32" height="32" alt="Ablative Motion Routines talent icon"> [Ablative Motion Routines](#cryptic_mobile_defense) | <ul><li>Take 25% less damage while sprinting with Stamina remaining, or while sliding. Sliding does not require remaining Stamina. The effect ends immediately when neither condition holds.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/dbeb2660-6b6d-4b09-b33a-bd21aef50f59" width="32" height="32" alt="Power Overflow talent icon"> [Power Overflow](#cryptic_shared_toughness) | <ul><li>When already at full Toughness and a recovery event restores nothing to you, each other ally in Coherency receives 25% of that event's intended recovery. It is applied separately to each ally, with their own recovery bonuses and cap.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/127fa97e-a0cf-4421-bff2-7edb8edaed86" width="32" height="32" alt="Target-Neutralization Feedback talent icon"> [Target-Neutralization Feedback](#cryptic_stun_suppression_immune) | <ul><li>Weakspot kills grant 5 seconds of Stun and Suppression immunity.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/79eb4aea-82d8-46fb-add1-a4ded8e41cce" width="32" height="32" alt="Binary Ballistics Protocol talent icon"> [Binary Ballistics Protocol](#cryptic_elite_kills_toughness) | <ul><li>Elite kills restore 15% of maximum Toughness over 3 seconds. Melee and ranged kills both qualify; retriggering refreshes the duration.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/6d7a17f5-be3e-4659-bc09-84cfb22bd20f" width="32" height="32" alt="Force Distribution Actuators talent icon"> [Force Distribution Actuators](#cryptic_push_stagger_stamina) | <ul><li>At or above 50% Stamina, Pushes gain 75% Impact. Exactly 50% qualifies.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/29715f83-8068-4375-9aa9-d00c34e8d8f3" width="32" height="32" alt="Superior Tracking Litanies talent icon"> [Superior Tracking Litanies](#cryptic_no_braced_movement_penalty) | <ul><li>Halves the movement-speed penalty while bracing or aiming down sights, and always reduces shooting Spread by 45%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/d01cfadc-7ba2-4505-b70a-11c22405645a" width="32" height="32" alt="Hydraulic Impact talent icon"> [Hydraulic Impact](#cryptic_better_heavies) | <ul><li>Protects against ordinary hit interruption while charging melee attacks and grants 15% Heavy Melee Damage; full charge is not required for the damage bonus.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/f8248e1e-3923-42b3-9afb-abed0c3ac1e9" width="32" height="32" alt="Hybrid Combat Covenant talent icon"> [Hybrid Combat Covenant](#cryptic_hybrid_damage) | <ul><li>Melee kills grant Ranged Damage stacks and ranged kills grant Melee Damage stacks: 3% per stack, up to 5 of each, decaying one at a time every 8 seconds.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/eae28459-1a70-43fc-a5ff-35d2b3adc0eb" width="32" height="32" alt="Kinetic Energy Distributors talent icon"> [Kinetic Energy Distributors](#cryptic_toughness_on_damage_taken) | <ul><li>Taking positive Health damage restores 25% of maximum Toughness over 5 seconds. Taking only Toughness damage does not trigger it; retriggering refreshes recovery.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/8c6107b2-c1ee-4fa6-9465-919f3c4d9d8b" width="32" height="32" alt="Uncapped Arrestor talent icon"> [Uncapped Arrestor](#cryptic_melee_attacks_give_melee_attack_speed) | <ul><li>A melee swing that hits an enemy grants one 2.5% Melee Attack Speed stack, up to 5. Each trigger refreshes the 3-second duration.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/a754db43-e82a-44d0-af91-ea8d874d8c3c" width="32" height="32" alt="Electro-Strike Conduit talent icon"> [Electro-Strike Conduit](#cryptic_melee_crits_electrocute_first) | <ul><li>Melee Critical Hits Electrocute the first target of the swing, provided it survives the hit.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/6e39714f-23a2-4d43-b5ae-6cfe4fa9b214" width="32" height="32" alt="Gunsmith talent icon"> [Gunsmith](#cryptic_auto_reload) | <ul><li>Always grants 15% Reload Speed. After 5 seconds without shooting, transfers 7.5% of clip capacity from reserves each subsequent second, rounded up; the first batch is around 6 seconds.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/c9876de0-2e5d-4421-9bee-326ac0c92290" width="32" height="32" alt="Assassination Protocols talent icon"> [Assassination Protocols](#cryptic_ranged_vs_bfg) | <ul><li>Grants 25% Ranged Damage against Ogryns, Monstrosities and Captains; melee attacks do not benefit.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/7f79455c-bf29-4b78-8706-dda075acb8d0" width="32" height="32" alt="System Shock talent icon"> [System Shock](#cryptic_electrocution_applies_brittleness) | <ul><li>Applying, stacking or refreshing Electrocution adds 3 Brittleness stacks at 2.5% each. Brittleness lasts 5 seconds and shares a 16-stack / 40% cap.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/d265085f-7abd-4433-adc1-3f0276351436" width="32" height="32" alt="Ammo-Cell Augury talent icon"> [Ammo-Cell Augury](#cryptic_ammo_reserve) | <ul><li>Increases reserve-ammo capacity by 25%, leaving clip capacity unchanged.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/bb7b86c4-512f-495f-a82a-7011cae498d6" width="32" height="32" alt="Voltaic Restoration talent icon"> [Voltaic Restoration](#cryptic_coherency_toughness_on_ability) | <ul><li>Activating a Combat Ability restores 20% of each recipient's maximum Toughness to you and allies in Coherency, once per activation.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/a86f113d-1a3e-4fc6-b1d1-24fe727b118d" width="32" height="32" alt="Salvation Doctrine talent icon"> [Salvation Doctrine](#cryptic_revive_speed_and_dr) | <ul><li>While reviving, pulling up, freeing from a net or rescuing an ally, take 25% less damage and perform the assistance action 25% faster.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/5330c87c-7abe-4993-8eb2-5cb11586c013" width="32" height="32" alt="Ammunition-Restoration Pod talent icon"> [Ammunition-Restoration Pod](#cryptic_passive_ammo_replenishment) | <ul><li>Every 15 seconds replenishes 1% of maximum Ammo Reserve into reserves. Fractional rounds carry over; it does not directly reload the clip.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/9e58fba3-e137-4f3e-89c3-ea7f5ebb0f24" width="32" height="32" alt="Sustained Assault Doctrine talent icon"> [Sustained Assault Doctrine](#cryptic_stacking_melee_damage) | <ul><li>Each melee swing that hits an enemy grants one 3% Damage stack, up to 5, refreshing 8 seconds. The bonus also increases ranged damage.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/e3f4e5a5-52c8-489e-a83f-3bf13c80eca8" width="32" height="32" alt="Galvanized Coating talent icon"> [Galvanized Coating](#cryptic_stun_dr_power) | <ul><li>Always grants ordinary hit Stun immunity and 15% Damage Resistance. Qualifying melee damage events spend 7.5% of one Capacitance charge; defence remains with insufficient Capacitance.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/78378820-be56-4a92-bd07-f6275c55fa47" width="32" height="32" alt="Moebian Conductor talent icon"> [Moebian Conductor](#cryptic_damage_on_ability) | <ul><li>Activating a Combat Ability grants 15% Damage for 10 seconds. Another activation refreshes the duration; spending multiple charges does not increase the bonus.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/233341e1-6bfd-4027-9641-610ec8733e45" width="32" height="32" alt="Servo-Core Recharge Engine talent icon"> [Servo-Core Recharge Engine](#cryptic_weakspot_kills_restore_toughness) | <ul><li>Melee or ranged Weakspot kills immediately restore 5% of maximum Toughness.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/ed3453a6-4290-4ca6-a37e-0d19046b048e" width="32" height="32" alt="Adaptive Combat Calibration talent icon"> [Adaptive Combat Calibration](#cryptic_cleave_and_impact) | <ul><li>Above 50% Toughness, gain +30% Melee Cleave; at or below 50%, gain +30% Melee Impact.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/f34040ff-ebd0-4f7e-b857-4557ccdee00c" width="32" height="32" alt="Residual Current Buffer talent icon"> [Residual Current Buffer](#cryptic_tdr_based_on_charge) | <ul><li>Always gain 10% Toughness Damage Reduction, plus 2.5% per fully charged unit of Capacitance currently held.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/deb63065-b15d-498f-a16c-ec7726ca6a22" width="32" height="32" alt="Superior Defence Engrams talent icon"> [Superior Defence Engrams](#cryptic_ranged_stacking_toughness) | <ul><li>Ranged kills grant up to 5 stacks, each restoring 1% of maximum Toughness per second; another kill refreshes the 8-second duration, even at the cap.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/f821891a-e246-41c9-ae45-97f93d0b8547" width="32" height="32" alt="Target Prioritization Psalms talent icon"> [Target Prioritization Psalms](#cryptic_specials_marking) | <ul><li>Shows outlines on living Specialists within 12.5 metres; no manual marking is required.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/53a3e76f-67fe-4d9e-bff5-7aafaee21065" width="32" height="32" alt="Protectorate Protocol talent icon"> [Protectorate Protocol](#cryptic_disabled_allies_defense) | <ul><li>Allies requiring help in Coherency take 25% less damage. After you assist them, they gain a separate 6-second effect with 25% Damage Resistance and ordinary hit Stun immunity.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/0bbe1f46-d58e-414d-9ab3-1c8ed0170a41" width="32" height="32" alt="Data Sensor Protocol talent icon"> [Data Sensor Protocol](#cryptic_ally_coherency_defenses) | <ul><li>When you or an ally in Coherency take Toughness damage, the injured player restores 25% Stamina; Health damage restores 25% Toughness. The two effects each have a 15-second cooldown.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/0a7a0b4b-9d65-4b36-9825-ed610ad0a3ae" width="32" height="32" alt="Sequenced Charge talent icon"> [Sequenced Charge](#cryptic_strength_on_charge_gain) | <ul><li>Gaining at least one full Capacitance charge grants 12.5% Strength for 10 seconds. Further gains refresh the duration; gaining multiple charges at once does not multiply the bonus.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/b22c3c3e-70a0-4411-99a5-63bcf1a6fa5a" width="32" height="32" alt="Slaughter Protocol talent icon"> [Slaughter Protocol](#cryptic_toughness_replenishment_on_kill_bonus) | <ul><li>Increase the existing Toughness recovery from melee kills by 25%, or by 50% when no full Capacitance charge remains.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/a18e19ec-6cad-4a2c-996b-6e7eddf47195" width="32" height="32" alt="Precision Combat Augurs talent icon"> [Precision Combat Augurs](#cryptic_next_hit_all_damage_on_dodge) | <ul><li>After a successful dodge, gain 15% damage for the next melee swing or shot. The attack consumes the effect even if it misses; repeated dodges cannot store multiple bonuses.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/80106b42-e788-43cb-a07a-ee69f668002f" width="32" height="32" alt="Voltaic Burst talent icon"> [Voltaic Burst](#cryptic_electrocution_push) | <ul><li>A Push that staggers enemies applies Electrocution to all qualifying living targets. The shared 12-second cooldown starts when that Push finishes.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/1c4ea759-440c-48dd-bc21-3bc8303683d5" width="32" height="32" alt="Ablative Wards talent icon"> [Ablative Wards](#cryptic_corruption_resistance_doom) | <ul><li>Reduce incoming Corruption by 90%. Every 20 seconds, incur a baseline cost of 1 Corruption, with this talent's own resistance already offset.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/a2e228da-729a-4b03-b07a-72bfaadf5dc3" width="32" height="32" alt="Threat Detection Imperative talent icon"> [Threat Detection Imperative](#cryptic_ranged_kills_tdr) | <ul><li>Ranged kills grant up to 5 stacks of 4% Toughness Damage Reduction. Further kills reset the 8-second timer; without more kills, stacks decay one every 8 seconds.</li></ul> | Talent |

---

<a id="cryptic_grenade_ability_force_field"></a>

### Integrated Refraction Emitter

<img src="https://github.com/user-attachments/assets/d45e19a1-d480-42db-bd0c-70ed43aba9aa" width="72" height="72" alt="Integrated Refraction Emitter talent icon">

- **Operation**: Select and activate the Refraction Emitter to deploy a shield around you that absorbs Ranged Attacks for 8 seconds. At activation and expiry, it electrocutes enemies within 5 metres.

- **Charges**: The base capacity is 3 uses, with each activation spending 1. Without other modifiers, each requires 75 seconds to recover; restoring all 3 after spending them takes 225 seconds.

[Details](cryptic_grenade_ability_force_field.md) · [Back to index](#talent-index)

---

<a id="cryptic_flamethrower"></a>

### Purgator Servo-Skull

<img src="https://github.com/user-attachments/assets/295017d9-50cd-4797-8b33-bd3627a7139f" width="72" height="72" alt="Purgator Servo-Skull talent icon">

- **Operation**: Gain an additional Flamer Servo-Skull. After you designate a ground area, it moves there and fires for up to 15 seconds, with a 10-metre range.

- **Fire modes and cost**: Use Primary Action to switch between Dispersed and Focused modes. Each order to fire consumes 1 Blitz charge.

- **Example**: Base capacity is 3 charges. Selecting Medicae Servo-Skull as well adds 2, raising capacity to 5; fire and rescue share those 5 charges.

[Details](cryptic_flamethrower.md) · [Back to index](#talent-index)

---

<a id="cryptic_servo_skull_inject_ally"></a>

### Medicae Servo-Skull

<img src="https://github.com/user-attachments/assets/adeeeef3-0c2e-450a-974b-66ce6c6366bd" width="72" height="72" alt="Medicae Servo-Skull talent icon">

- **Operation**: Gain an additional Medicae Servo-Skull. Tag a Knocked Down, Hogtied or Netted teammate who needs assistance to send it to rescue them.

- **After rescue**: The rescue gets the ally back up. For the next 5 seconds, Toughness Damage taken is 25% of the original amount, and they restore 20% of maximum Toughness per second.

- **Example**: With maximum Toughness 100, the ally restores 20 per second during the recovery period, up to 100 total. Each rescue spends 1 Blitz charge, shared with the Flamer Servo-Skull.

- **Rescue limits**: It cannot rescue an ally hanging from a ledge. If rescue fails while you are still alive, the charge spent is refunded.

[Details](cryptic_servo_skull_inject_ally.md) · [Back to index](#talent-index)

---

<a id="cryptic_grenade_ability_arc_grenade"></a>

### Arc Grenades

<img src="https://github.com/user-attachments/assets/6a4875ee-4056-4964-ae36-846e598954bc" width="72" height="72" alt="Arc Grenades talent icon">

- **How it works**: The explosion has a 10m radius and sends arcs to up to 4 enemies, prioritising specific heavily armoured enemies before other Elites and valid targets. Each arc can chain to nearby enemies.
- **Chain range**: Each arc can chain up to 5 times within 12m; actual hits depend on valid enemies being nearby.
- **Electrocution damage**: The area explosion and arc jumps do not directly remove Health. Damage comes from ongoing Electrocution after the arc hits. Electrocution lasts about 1.1s and resolves once every 0.2s; damage per tick varies with enemy armour and other bonuses.
- **Damage example**: Suppose each Electrocution tick deals 12 damage to a particular target and this instance actually resolves 5 ticks: 12 × 5 = 60 damage. This illustrates addition; it does not mean every enemy always takes 60 damage.
- **Kill recharge**: When the Arc Grenade or its arcs kill an Elite or Specialist, each kill restores 0.04 charges of Capacitance.
- **Example**: Killing 3 qualifying enemies restores 3 × 0.04 = 0.12 charges of Capacitance. The grenade itself has at most 3 uses.
- **Capacitance example**: With 50 points per charge, each qualifying kill additionally restores 50 × 4% = 2 points; 3 kills give 6 points. This is the grenade's additional effect; the class's innate recharge on kills is separate.
- **Uses**: You can carry 3 grenades at base. They do not replenish themselves over time as the force field does.

[Details](cryptic_grenade_ability_arc_grenade.md) · [Back to index](#talent-index)

---

<a id="cryptic_servo_skull_improved"></a>

### Artificer Servo-Skull

<img src="https://github.com/user-attachments/assets/0efafa0a-aad0-4bb8-869f-133db37cf152" width="72" height="72" alt="Artificer Servo-Skull talent icon">

- **How it works**: A Servo-Skull follows you. Double-tap the Tag input to order it to attack a valid enemy, or order it to decode an interactable data terminal.
- **How it works**: The base Servo-Skull bonuses become permanent: its shooting damage increases by 25%, and its shooting cooldown is halved.
- **Example**: Starting with 100 damage per shot and a 3s shooting cooldown, the permanent bonus gives 125 damage per shot and a 1.5s cooldown. When the skull hits an enemy, that enemy takes 15% more damage for 5s and gains 1 Burn stack. Burn reaches at most 8 stacks; at the cap, further hits reset its duration.

[Details](cryptic_servo_skull_improved.md) · [Back to index](#talent-index)

---

<a id="cryptic_arc_grenades_brittleness"></a>

### Overcharged Arc Grenades

<img src="https://github.com/user-attachments/assets/14c1a0d8-2916-40d7-a7e2-8572a0b3e6d2" width="72" height="72" alt="Overcharged Arc Grenades talent icon">

- **How it works**: Arc Grenades' initial arc limit increases from 4 to 6. The number of additional chain jumps per arc stays the same.
- **How it works**: An enemy hit by the arc chain receives 8 stacks of Brittleness, 2.5% each, lasting 5s.
- **Example**: One arc hit can apply 8 × 2.5% = 20% Brittleness. Another hit can continue stacking it, up to 16 stacks or 40%.
- **Damage example**: Comparing only the armour stage, assume 100 damage before armour, an original armour multiplier of 0.5 and a Rending coefficient of 1 for that armour. Eight Brittleness stacks raise damage from 100 × 0.5 = 50 to 100 × (0.5 + 20%) = 70. At 16 stacks it is 90. Crossing an armour multiplier of 1 requires a separate calculation.

[Details](cryptic_arc_grenades_brittleness.md) · [Back to index](#talent-index)

---

<a id="cryptic_arc_grenades_weapon_malfunction"></a>

### Enhanced Arc Grenades

<img src="https://github.com/user-attachments/assets/501bab77-4618-480e-80e8-3abb022f6a68" width="72" height="72" alt="Enhanced Arc Grenades talent icon">

- **How it works**: When an Arc Grenade explosion or its arc hits an applicable Ranged Enemy, that enemy's ranged weapon Malfunctions, normally for 12s.
- **Timing example**: A hit at 0s initially makes the Malfunction expire at 12s. Another hit at 8s changes expiry to 8 + 12 = 20s. Some enemies can still switch to melee attacks.
- **How it works**: Standard Arc Grenades have a 10m explosion radius. Whether a weapon Malfunction occurs also depends on the target supporting that state.
- **Ongoing Electrocution limit**: Subsequent repeated Electrocution does not trigger or extend the weapon Malfunction again. Another qualifying explosion or arc hit is required to restart the timer.

[Details](cryptic_arc_grenades_weapon_malfunction.md) · [Back to index](#talent-index)

---

<a id="cryptic_force_field_duration_increase"></a>

### Overcharged Refraction Emitter

<img src="https://github.com/user-attachments/assets/e70f3e4b-d2c2-4840-bc29-56ba85dd816d" width="72" height="72" alt="Overcharged Refraction Emitter talent icon">

- **How it works**: Integrated Refraction Emitter lasts 12s, 4s longer than the base 8s.
- **How it works**: The field causes an Electrocution explosion on activation, at the midpoint and on ending. During a normal full duration, the extra explosion occurs 6s after activation.
- **Example**: The midpoint of a 12s field is 12 ÷ 2 = 6s, so its three explosions occur around 0, 6 and 12s. Each still has a 5m radius.

[Details](cryptic_force_field_duration_increase.md) · [Back to index](#talent-index)

---

<a id="cryptic_force_field_capacitance_restore"></a>

### Kinetic Repulsion

<img src="https://github.com/user-attachments/assets/9eb6e468-224f-4d7c-b696-cc58aa08f532" width="72" height="72" alt="Kinetic Repulsion talent icon">

- **How it works**: Each Ranged Attack absorbed by Integrated Refraction Emitter restores 0.025 charges of Capacitance, up to 0.75 charges per field.
- **Example**: Absorbing 10 Ranged Attacks restores 0.25 charges. At 30 attacks, the 0.75-charge cap is reached; further attacks do not increase the total.
- **How it works**: This restores Combat Ability Capacitance, without refilling force-field uses already spent.
- **Point example**: At 50 points per Capacitance charge, each absorbed attack restores 50 × 2.5% = 1.25 points; 30 attacks restore at most 50 × 75% = 37.5 points. Recovery is based on attack count, so a higher-damage attack does not restore more.

[Details](cryptic_force_field_capacitance_restore.md) · [Back to index](#talent-index)

---

<a id="cryptic_servo_skull_improved_tagging"></a>

### Noospheric Command

<img src="https://github.com/user-attachments/assets/c365855a-e85f-4d0d-8156-4048ae9f7e02" width="72" height="72" alt="Noospheric Command talent icon">

- **How it works**: Tag a valid enemy and double-tap the Tag input to order the Servo-Skull to attack. For 2s after activation, its shooting cooldown is reduced to 15% of the original.
- **Example**: A 3s shooting cooldown becomes 0.45s. A full 2s boost costs 0.3 Capacitance charges (30% of one charge).
- **How it works**: You need at least 0.3 Capacitance charges before issuing the order. The Psykhanium does not check this threshold.
- **With Artificer Servo-Skull**: The permanent halving of the shooting interval multiplies with this effect. For example, a base 3s interval becomes 1.5s with the permanent bonus, then 3 × 0.5 × 0.15 = 0.225s during the command. This calculates the shooting interval; actual attacks still depend on aiming and target conditions.

[Details](cryptic_servo_skull_improved_tagging.md) · [Back to index](#talent-index)

---

<a id="cryptic_force_field_arcs"></a>

### Voltaic Resistance

<img src="https://github.com/user-attachments/assets/ba6e0fe8-b601-433e-a423-8a6b8ee7b79b" width="72" height="72" alt="Voltaic Resistance talent icon">

- **How it works**: When Integrated Refraction Emitter ends, it fires arcs based on absorbed Ranged Attacks: 0–6 attacks give 1 arc, 7–12 give 2, 13–18 give 3 and 19 or more reach the 4-arc maximum.
- **Example**: Even without absorbing any Ranged Attacks, the field still attempts to fire 1 arc at expiry. It hits a target only if a valid enemy is within 12m in front of you.
- **How it works**: Each arc can chain up to 4 times between nearby enemies; actual chaining still depends on valid targets being present.

[Details](cryptic_force_field_arcs.md) · [Back to index](#talent-index)

---

<a id="cryptic_coherency_regen_aura_improved"></a>

### Resurgence

<img src="https://github.com/user-attachments/assets/7090c8fb-aaaa-4015-a5c1-21e7093507be" width="72" height="72" alt="Resurgence talent icon">

- **How it works**: Gain 25 Toughness. You and allies in Coherency retain at least 50% of the normal Coherency Toughness regeneration rate even when enemies are nearby.
- **Example**: At a normal Coherency regeneration rate of 10 points/s, the minimum combat rate for you and allies is 10 × 50% = 5 points/s. With uninterrupted regeneration and sufficient deficit, 4s restores 20 points, subject to the Toughness deficit and personal regeneration modifiers.
- **Regeneration conditions**: The Toughness regeneration delay after taking damage must still finish, and normal Coherency regeneration must remain available. This effect does not cancel the delay or let Toughness exceed its maximum.

[Details](cryptic_coherency_regen_aura_improved.md) · [Back to index](#talent-index)

---

<a id="cryptic_ammo_aura"></a>

### Ammunition Deposit

<img src="https://github.com/user-attachments/assets/59dcc637-0b0f-4f3b-8e79-f4fdf53b6cef" width="72" height="72" alt="Ammunition Deposit talent icon">

- **How it works**: Gain 25 Toughness and increase Ammo Reserve capacity by 15%.
- **Example**: A maximum reserve of 101 rounds becomes 101 × 1.15 = 116.15, rounded down to 116 rounds. Current reserve also adjusts when capacity changes.
- **Recipients**: The Ammo Reserve bonus applies to you and player-controlled allies in the mission, without requiring Coherency range. If multiple allies select this talent, the capacity bonus remains 15%.

[Details](cryptic_ammo_aura.md) · [Back to index](#talent-index)

---

<a id="cryptic_aura_weapon_improved"></a>

### Foe-Render Creed

<img src="https://github.com/user-attachments/assets/a48f1d74-488a-42d3-a59d-33d55135dad2" width="72" height="72" alt="Foe-Render Creed talent icon">

- **How it works**: Your maximum Toughness increases by 25. You and allies in Coherency gain 15% Cleave and 7.5% Rending.
- **Cleave example**: If an attack originally penetrates a total target mass of 10, the bonus raises it to 10 × 1.15 = 11.5. The number of additional enemies actually hit depends on enemy mass and weapon limits.
- **Rending example**: Comparing only the armour stage, assume 100 damage before armour, an original armour multiplier of 0.5 and a Rending coefficient of 1 for this armour type. Damage changes from 100 × 0.5 = 50 to 100 × (0.5 + 0.075) = 57.5. Crossing an armour multiplier of 1 uses a different conversion; this is not a direct 7.5% damage increase on every hit.

[Details](cryptic_aura_weapon_improved.md) · [Back to index](#talent-index)

---

<a id="cryptic_chordclaw"></a>

### Chordclaw Strike

<img src="https://github.com/user-attachments/assets/af7ec3de-6e36-4171-8be2-d385177b170e" width="72" height="72" alt="Chordclaw Strike talent icon">

- **How it works**: Activating Chordclaw Strike costs 1 charge of Capacitance. The base capacity is 3 charges, which other talents can increase. The Chordclaw Heavy Attack is a guaranteed Critical Strike and has 50% more Rending.
- **How it works**: The active Chordclaw effect also increases Melee Damage by 30% and grants Stun immunity. Rending affects damage calculations against protection; a guaranteed Critical Strike does not mean fixed Health damage against every enemy.
- **Damage example**: Considering only the 30% melee bonus, with armour, Critical Strike and other conditions held fixed, 100 damage becomes 100 × (1 + 30%) = 130. With another 20% bonus already in the same stage, it is 100 × (1 + 20% + 30%) = 150. Rending and Critical Strike effects are calculated separately for the target.
- **Charges and duration**: Each use consumes one 50-point Capacitance charge, taking 50s to restore without other recovery bonuses. The attack effect lasts at most 10s and ends when switching away from the Chordclaw. Repeated activations consume charges but do not retrigger ability effects that depend on the initial activation.

[Details](cryptic_chordclaw.md) · [Back to index](#talent-index)

---

<a id="cryptic_precision_stance_toughness_suppression"></a>

### Restoration Protocol

<img src="https://github.com/user-attachments/assets/eb879996-8768-4102-8799-0fecaf6f7a98" width="72" height="72" alt="Restoration Protocol talent icon">

- **Activation effect**: Activating Advanced Combat Doctrines immediately clears your Suppression. This clear does not grant Suppression immunity for the rest of the stance.
- **Recovery**: While the stance remains active, it restores 10% of maximum Toughness per second until the stance ends. Recovery modifiers and the Toughness maximum still apply.
- **Recovery example**: With 150 maximum Toughness and no other recovery bonuses, it restores 150 × 10% = 15 points/s, or 60 points over 4s.

#### Traditional Chinese text correction

- The Traditional Chinese description adds a Toughness-point unit after the `{toughness}` placeholder, even though this field is a percentage. The correct effect restores 10% of maximum Toughness per second: with 150 maximum Toughness, that is 15 points/s, rather than a fixed 10 points. The original English does not add a point unit; this correction concerns the Traditional Chinese wording.

[Details](cryptic_precision_stance_toughness_suppression.md) · [Back to index](#talent-index)

---

<a id="cryptic_precision_stance_fire_rate_increased"></a>

### Writ of Ammunition Enumeration

<img src="https://github.com/user-attachments/assets/ac9ea4d6-352f-4ad1-95f2-a2de10d39d2d" width="72" height="72" alt="Writ of Ammunition Enumeration talent icon">

- **How it works**: While Advanced Combat Doctrines is active, ranged Fire Rate increases by 15%. Maintaining the stance continuously for 4s increases the total bonus to 30%.
- **Reset condition**: Leaving the stance removes the bonus. Reactivation starts again at 15% and begins a new 4s timer.
- **Fire Rate example**: Starting at 5 rounds/s, considering only the Fire Rate affected by this multiplier, the initial rate is 5 × 1.15 = 5.75 rounds/s. After 4s, it is 5 × 1.30 = 6.5 rounds/s. Other action and weapon limits are separate.

[Details](cryptic_precision_stance_fire_rate_increased.md) · [Back to index](#talent-index)

---

<a id="cryptic_discharge_generates_arcs"></a>

### Voltaic Arcs

<img src="https://github.com/user-attachments/assets/9d074da8-541c-4fec-bc2b-47e53be42bad" width="72" height="72" alt="Voltaic Arcs talent icon">

- **Trigger**: Using Voltaic Emitter releases one forward arc per full charge of Capacitance consumed. Consuming 3 charges releases 3 arcs.
- **Range**: Initial targets must be alive and within 12m in front of you. Each arc can continue to nearby valid targets for at most 4 links, dealing Electrocution damage and Impact.
- **Exceptions**: With insufficient nearby targets, fewer arcs or links occur. Damage still depends on armour and attack resolution; the arc count is not a Health-damage value.

[Details](cryptic_discharge_generates_arcs.md) · [Back to index](#talent-index)

---

<a id="cryptic_discharge_attack_speed_increase"></a>

### Voltaic Motivator

<img src="https://github.com/user-attachments/assets/b74a0dba-64ed-40b6-b630-792c413387cd" width="72" height="72" alt="Voltaic Motivator talent icon">

- **How it works**: Using Voltaic Emitter grants +5% Attack Speed, plus another +5% per full charge of Capacitance consumed, for 15s.
- **Attack Speed example**: Consuming 1, 2 or 3 charges gives a total of +10%, +15% or +20%, respectively. If an affected attack action originally takes 1s, consuming 3 charges changes it to 1 ÷ 1.20 ≈ 0.833s.

[Details](cryptic_discharge_attack_speed_increase.md) · [Back to index](#talent-index)

---

<a id="cryptic_discharge_toughness"></a>

### Voltaic Overcharge

<img src="https://github.com/user-attachments/assets/dd369366-6fa1-4e92-bd7b-c92f5bf8023a" width="72" height="72" alt="Voltaic Overcharge talent icon">

- **Recovery on activation**: Using Voltaic Emitter restores 25% of maximum Toughness per full charge of Capacitance consumed.
- **Recovery on hit**: The Discharge hitting an enemy that is still alive restores another 1% of maximum Toughness. Subsequent arcs or Electrocution added by weapons do not receive this on-hit recovery.
- **Recovery example**: With 100 maximum Toughness, consuming 2 charges and hitting 5 qualifying enemies restores 100 × (2 × 25% + 5 × 1%) = 55 points. If only 40 points are missing, it restores only 40.

[Details](cryptic_discharge_toughness.md) · [Back to index](#talent-index)

---

<a id="cryptic_chordclaw_horizontal_swipe"></a>

### Axial Slash

<img src="https://github.com/user-attachments/assets/94595162-990c-418a-9bbc-9b3e90ed790b" width="72" height="72" alt="Axial Slash talent icon">

- **How it works**: Selecting Axial Slash replaces the Chordclaw ability's default Heavy stab with a horizontal sweep. It remains a guaranteed Critical Strike.
- **How it works**: The sweep can hit multiple targets according to the weapon's Cleave settings. Actual target count and Health damage depend on the targets and hit results.
- **Target-order example**: Comparing only the damage distribution with the same hit location, armour and modifiers, the second target relative to the first is 480 ÷ 500 = 96%. If the first takes 100 damage, the second takes 96. The fifth takes 100 × 360 ÷ 500 = 72. Actual results still depend on each target's conditions.
- **Holding the input**: Quick activation uses the sweep. Holding to charge and then releasing still uses the original Heavy stab.

[Details](cryptic_chordclaw_horizontal_swipe.md) · [Back to index](#talent-index)

---

<a id="cryptic_chordclaw_quick_stab_combo"></a>

### Probing Strikes

<img src="https://github.com/user-attachments/assets/7d516cae-80f0-4d48-b562-b5a21f6ddcd1" width="72" height="72" alt="Probing Strikes talent icon">

- **How it works**: Quick Chordclaw activation performs three successive quick stabs. Each stab that deals Health damage adds 6 Bleed stacks to that enemy.
- **How it works**: All three hitting the same enemy can add at most 18 Bleed stacks. The Bleed effect itself is also capped at 18 stacks.
- **How it works**: Holding the input uses the regular Heavy Attack and does not select the three-quick-stab sequence.
- **Duration**: Bleed lasts 9.5s; applying it again restarts the timer. If all three stabs damage the same enemy, they add 6 + 6 + 6 = 18 stacks, reaching the cap.

[Details](cryptic_chordclaw_quick_stab_combo.md) · [Back to index](#talent-index)

---

<a id="cryptic_crits_grant_power"></a>

### Flux Conduit Build-Up

<img src="https://github.com/user-attachments/assets/c63720c4-df53-4c05-9881-cd6a6bf33c79" width="72" height="72" alt="Flux Conduit Build-Up talent icon">

- **How it works**: Capacitance recovery accelerates for 4s after a Critical hit. With a 50-point charge cost, the extra recovery over 4s is 2.5 points, equivalent to 5%.
- **How it works**: Another Critical hit within 4s restarts the window; it does not stack a higher recovery rate.
- **Recovery example**: With one charge costing 50 points, the extra recovery is 50 × 5% = 2.5 points over 4s. Including the base 1 point/s, total recovery over 4s is 4 × (1 + 2.5 ÷ 4) = 6.5 points. Another Critical hit extends the accelerated recovery period.

[Details](cryptic_crits_grant_power.md) · [Back to index](#talent-index)

---

<a id="cryptic_weakspot_kills_grant_power"></a>

### Reactor Coil Recharge

<img src="https://github.com/user-attachments/assets/833b596d-dbc9-49fe-9f90-436140e700ed" width="72" height="72" alt="Reactor Coil Recharge talent icon">

- **How it works**: Killing an enemy with a Weakspot hit restores Capacitance equal to 2% of the current Combat Ability's cost per charge. With a 50-point charge cost, each Weakspot Kill restores 1 point.
- **How it works**: Capacitance progress accumulates. Every 50 points forms one full charge, and progress below 50 points is retained.

[Details](cryptic_weakspot_kills_grant_power.md) · [Back to index](#talent-index)

---

<a id="cryptic_increased_passive_cooldown_regen"></a>

### Augmented Power-Cycle

<img src="https://github.com/user-attachments/assets/39f22717-a782-4201-b5b3-f63a166bedd1" width="72" height="72" alt="Augmented Power-Cycle talent icon">

- **Recovery**: Restores an additional 1% of one Capacitance charge per second, increasing base natural recovery from 2% to 3% per second.
- **Time example**: With no other bonuses or ongoing costs, refilling one charge from empty takes 100% ÷ 3% ≈ 33.33s. Refilling three empty charges takes 300% ÷ 3% = 100s.
- **Ability interaction**: Advanced Combat Doctrines has separate activation, upkeep and shooting costs. The refill times above cannot be used to estimate how long the stance can be maintained.

[Details](cryptic_increased_passive_cooldown_regen.md) · [Back to index](#talent-index)

---

<a id="cryptic_multi_hits_grant_power"></a>

### Capacitor Reclamation Loop

<img src="https://github.com/user-attachments/assets/7557cf7d-9d8b-41ba-bff3-582bdcc5c063" width="72" height="72" alt="Capacitor Reclamation Loop talent icon">

- **How it works**: Hitting the third enemy with the same attack restores 1% of the current Combat Ability's 50-point cost per charge, or 0.5 points of Capacitance. Hitting more enemies still grants recovery only once for that attack.
- **How it works**: At least 0.25s must pass after recovery before another proc can trigger. Fractional Capacitance accumulates; 50 points forms one full charge.

[Details](cryptic_multi_hits_grant_power.md) · [Back to index](#talent-index)

---

<a id="cryptic_discharge"></a>

### Voltaic Emitter

<img src="https://github.com/user-attachments/assets/637d6e54-1c81-434d-b5bc-d779d4d8674b" width="72" height="72" alt="Voltaic Emitter talent icon">

- **Charge consumption**: Activation consumes 1–3 currently full charges, at most 3 per use. With 4 or 5 charges, the extra charges remain; fractional progress below a full charge also remains.
- **Discharge effect**: Enemies hit within 12m are Electrocuted for 2s and take ongoing Electrocution damage. The main Discharge radius is 12m whether 1, 2 or 3 charges are consumed.
- **At least 2 charges consumed**: Also disrupts enemies within 30m that can receive Weapon Malfunction, normally for 12s. Some enemy durations differ.
- **3 charges consumed**: For the next 15s, your melee or ranged attacks hitting enemies that remain alive Electrocute them for 2s.
- **Consumption example**: At 185 points of Capacitance, you have 3 full charges and 70% progress towards a fourth. Activation consumes 3 × 50 = 150 points, leaving 35. With only natural recovery of 1 point/s, another usable charge takes (50 − 35) ÷ 1 = 15s.
- **Damage example**: The initial area effect does not directly remove Health; damage comes from subsequent Electrocution. Assuming each tick deals 10 damage to a particular target and this instance resolves 4 ticks, the total is 10 × 4 = 40. Actual damage and tick count vary with the target and resolution timing.

[Details](cryptic_discharge.md) · [Back to index](#talent-index)

---

<a id="cryptic_precision_stance"></a>

### Advanced Combat Doctrines

<img src="https://github.com/user-attachments/assets/fe67d92b-3b1a-4da7-bf6a-43bb643e80d6" width="72" height="72" alt="Advanced Combat Doctrines talent icon">

- **Aiming effects**: Switches to your ranged weapon and assists aiming at enemies near the reticule. While active, Spread decreases by 90% and Recoil by 60%. This supplies no separate fixed damage bonus.
- **Activation cost**: Requires at least 1 full charge to activate, but actually spends only 25% of one charge. At 50 points per charge, activation costs 50 × 25% = 12.5 points.
- **Ongoing and shooting costs**: Separately drains 10% of one charge/s, or 50 × 10% = 5 points/s, plus 50 × 1% = 0.5 points per shot. These percentages all use one charge; increasing maximum charge capacity does not increase each deduction.
- **Duration example**: With only one charge, or 50 points, activation leaves 37.5 points. Without shooting, reloading or extra recovery, it lasts 37.5 ÷ 5 = 7.5s. With three full charges, it lasts (150 − 12.5) ÷ 5 = 27.5s.
- **Shooting example**: Starting with three full charges, activating for 10s and firing 20 shots leaves 150 − 12.5 − 10 × 5 − 20 × 0.5 = 77.5 points. This excludes reloading and extra recovery.
- **Reloading**: Reloading pauses the 5-point/s ongoing drain. Reload Speed increases by 25% and lingers for 5s after the stance ends. With no other bonuses, a 2s reload takes 2 ÷ 1.25 = 1.6s.
- **Recovery limits**: While active, base natural recovery and the extra upkeep cost cancel; the class's original kill-triggered recovery also stops. Other natural recovery bonuses can offset some drain. For example, +50% natural recovery leaves net drain of 5 − 0.5 = 4.5 points/s.
- **Ending and reuse**: Reactivating the ability, leaving the ranged weapon or exhausting Capacitance ends the stance. Normal recovery resumes afterwards. Starting at 0 points with only natural recovery of 1 point/s, it takes 50s to obtain one charge and activate again.

[Details](cryptic_precision_stance.md) · [Back to index](#talent-index)

---

<a id="cryptic_chordclaw_capacitance_restoration"></a>

### Satiated Steel

<img src="https://github.com/user-attachments/assets/756e60ad-5734-42a4-be62-759096344f67" width="72" height="72" alt="Satiated Steel talent icon">

- **How it works**: A Chordclaw melee kill restores an additional 25% of the current Combat Ability's 50-point cost per charge over the next 5s, totalling 12.5 points of Capacitance.
- **How it works**: Another Chordclaw melee kill within 5s restarts the recovery period, without stacking a higher per-second rate. Normal natural recovery is calculated separately.
- **Recovery example**: 50 × 25% = 12.5 points, spread over 5s, so extra recovery is 12.5 ÷ 5 = 2.5 points/s. If it is not retriggered and the pool does not fill early, the complete 5s gives these 12.5 points.

[Details](cryptic_chordclaw_capacitance_restoration.md) · [Back to index](#talent-index)

---

<a id="cryptic_chordclaw_consecutive_bonus"></a>

### Slice and Dice

<img src="https://github.com/user-attachments/assets/a4bee55e-0868-4104-89c8-e2009e89ae4d" width="72" height="72" alt="Slice and Dice talent icon">

- **How it works**: Each Chordclaw ability activation adds one Chordclaw damage stack, +20% per stack, up to 3. Adding a stack refreshes the 5s duration.
- **How it works**: Three stacks give +60% Chordclaw damage. With an illustrative base Chordclaw damage of 100, considering only this effect, the values are approximately 120 / 140 / 160.

[Details](cryptic_chordclaw_consecutive_bonus.md) · [Back to index](#talent-index)

---

<a id="cryptic_precision_stance_crit_cleave"></a>

### Piercing Sight

<img src="https://github.com/user-attachments/assets/bedef96d-1746-44a5-a482-1abe4e5e15c6" width="72" height="72" alt="Piercing Sight talent icon">

- While Advanced Combat Doctrines is active, gain **30% Ranged Cleave** and **15 percentage points of Ranged Critical Strike Chance**. After **4 continuous seconds**, these increase to **60% Ranged Cleave** and **30 percentage points of Ranged Critical Strike Chance**.
- With an original hit-mass budget of `10`, the initial budget is `10 × 1.3 = 13`; after 4 seconds it is `10 × 1.6 = 16`. The number of enemies actually cleaved depends on their hit mass and the attack's rules for stopping Cleave.
- With an original Ranged Critical Strike Chance of `7.5%`, the initial chance is `7.5% + 15% = 22.5%`; after 4 seconds it is `7.5% + 30% = 37.5%`.
- Ending the ability removes both bonuses. Activating it again requires another 4 seconds to reach the increased values.

[Details](cryptic_precision_stance_crit_cleave.md) · [Back to index](#talent-index)

---

<a id="cryptic_precision_stance_damage_on_elite_kill"></a>

### Calculated Priority

<img src="https://github.com/user-attachments/assets/9cbfaa3e-c8bf-42b8-98a4-5e5c6ee9c033" width="72" height="72" alt="Calculated Priority talent icon">

- **Trigger**: While Advanced Combat Doctrines is active, a **ranged Elite kill** adds one stack of **+5% Damage for 10 seconds**.
- **Stacking**: Up to **5 stacks**, for **+25% Damage**. Adding another stack refreshes the 10-second duration.
- **How it works**: With illustrative base damage of `100` and no other modifiers at this stage, 5 stacks give `100 × (1 + 25%) = 125`. With an existing +20% modifier at the same stage, the result is `100 × (1 + 20% + 25%) = 145`.
- **After the ability ends**: Existing stacks remain until their own 10-second duration expires. Kills while the ability is inactive cannot add new stacks.

[Details](cryptic_precision_stance_damage_on_elite_kill.md) · [Back to index](#talent-index)

---

<a id="cryptic_dissector"></a>

### Flensing Protocols

<img src="https://github.com/user-attachments/assets/856a3399-5f26-40e1-988e-8960086a92c9" width="72" height="72" alt="Flensing Protocols talent icon">

- **Starting stacks**: Start with **6 stacks**, or **8** with Honed Dissector.
- **Per-stack effects**: Each stack grants **+2.5% Damage**; Toughness damage taken is multiplied by `1 − 2.5% × visible stack count`. At 6 stacks, Damage is +15% and Toughness damage taken is `0.85` (15% reduction). At 8, these become +20% and `0.80` (20% reduction). With illustrative base damage of `100` and no other damage modifiers, this gives `115` or `120`.
- **Losing stacks**: Taking Health or Toughness damage removes one stack, at most once per second. Stacks have no expiry and do not decay passively.
- **Restoring stacks and Toughness**: An Elite or Specialist kill restores up to **2 missing stacks** and **15% of maximum Toughness**. The Toughness recovery still occurs at full stacks.
- **Examples**: Taking damage at 6 stacks leaves 5. Further damage within that second removes no additional stack; the next eligible hit at or after 1 second can remove one. At a full 6 stacks, illustrative damage `100` becomes `100 × 1.15 = 115`, and incoming Toughness damage `100` becomes `100 × 0.85 = 85`. If only one stack is missing, a qualifying kill restores that one stack and still restores 15% of maximum Toughness.

[Details](cryptic_dissector.md) · [Back to index](#talent-index)

---

<a id="cryptic_redline"></a>

### Redline Capacitors

<img src="https://github.com/user-attachments/assets/55fe932f-c298-4b33-ad21-efab7b9244e5" width="72" height="72" alt="Redline Capacitors talent icon">

- **Trigger**: Each Combat Ability charge actually spent or restored adds **one stack**. Spending 2 charges at once adds 2 stacks, up to **4**.
- **Per-stack effects**: Natural Capacitance recovery is increased by **5% per stack**, and Toughness Damage Reduction by **5% per stack**. At 4 stacks, a natural rate of 2% of one charge per second becomes `2% × (1 + 20%) = 2.4%` per second. Incoming Toughness damage of `100` becomes `100 × (1 − 20%) = 80`.
- **Duration**: The stack effect lasts **12 seconds**; adding a stack restarts the timer. Another trigger at 4 stacks refreshes the timer without exceeding the cap. With no new trigger, one stack is lost every 12 seconds.
- **Charge cap**: Maximum Combat Ability charges increase from **3 to 4**.
- **Restoration exceptions**: Kill restoration, weakspot-kill restoration and Higher Purpose's direct restoration are not increased by this modifier.

[Details](cryptic_redline.md) · [Back to index](#talent-index)

---

<a id="cryptic_overload_keystone"></a>

### Power Overload

<img src="https://github.com/user-attachments/assets/1f613b73-cb4f-4b13-8c3e-2355fe567ba3" width="72" height="72" alt="Power Overload talent icon">

- **Trigger**: Kills by you or allies in Coherency add **1 stack** for an ordinary enemy, or **2 stacks** for an Elite or Specialist.
- **Accumulation**: Up to **30 stacks**, with no countdown. Reaching or exceeding 30 triggers an overload and resets the count to **0**.
- **Overload effect**: You and allies in Coherency receive an **8-second** buff: **+15% Damage** and **15% less Toughness damage taken**. With no other damage bonuses, illustrative damage `100` becomes `115`; incoming Toughness damage `100` becomes `85`. With Critical Power Overload, an explosion also occurs around you and debuffs enemies.
- **Examples**: At 28 stacks, an Elite or Specialist kill adds 2 to reach 30, immediately triggering and resetting to zero. At 29, adding 2 still triggers only once; the amount beyond 30 does not carry over.

[Details](cryptic_overload_keystone.md) · [Back to index](#talent-index)

---

<a id="cryptic_overload_keystone_bigger_explosion"></a>

### Critical Power Overload

<img src="https://github.com/user-attachments/assets/a59865c6-45fb-4f1e-b360-b8100e541a00" width="72" height="72" alt="Critical Power Overload talent icon">

- **Trigger**: On Power Overload, enemies hit within **8 metres** around you receive Electrocution and increased damage taken for **8 seconds**.
- **Damage example**: An attack that would deal `100` to an affected enemy instead deals `100 × 1.15 = 115`, with no other modifiers. This increase comes from the enemy's damage taken; this area effect itself deals no explosion damage.
- **Repeated triggers**: The same effect has at most **1 stack**. Another hit refreshes the 8-second duration; it does not increase the bonus to 30%.

[Details](cryptic_overload_keystone_bigger_explosion.md) · [Back to index](#talent-index)

---

<a id="cryptic_overload_keystone_toughness_stamina"></a>

### Invigorating Overload

<img src="https://github.com/user-attachments/assets/cfc8d67b-448d-4b33-afac-86fd412b2a6d" width="72" height="72" alt="Invigorating Overload talent icon">

- **Trigger**: On Power Overload, you and allies in Coherency each restore **20% of maximum Toughness** and **20% of maximum Stamina**.
- **Recovery example**: At `100` maximum Toughness and `5` maximum Stamina bars, one overload restores `100 × 20% = 20` Toughness points and `5 × 20% = 1` Stamina bar. If only 12 Toughness points are missing, it restores only 12.
- **Other bonuses**: Toughness recovery still uses your Toughness Replenishment bonuses. With only a +25% replenishment bonus, `20 × 1.25 = 25` points; recovery cannot exceed maximum Toughness.

[Details](cryptic_overload_keystone_toughness_stamina.md) · [Back to index](#talent-index)

---

<a id="cryptic_overload_keystone_permastack"></a>

### Static Capacitor Drain

<img src="https://github.com/user-attachments/assets/f0977f9f-2eb1-458a-a2c1-5e5642a284aa" width="72" height="72" alt="Static Capacitor Drain talent icon">

- **Counting overloads**: Each Power Overload counts once. At **8**, gain **+15% Damage**; at **16**, also gain **20% Toughness Damage Reduction**; at **24**, also gain **25% faster natural Capacitance recovery**. All three can remain together, with the description stating that they last until death.
- **Damage examples**: With base damage `100`, the 15% bonus gives `100 × (1 + 15%) = 115`. With an existing +20% bonus at the same calculation stage, it gives `100 × (1 + 20% + 15%) = 135`.
- **Toughness damage examples**: Incoming Toughness damage `100` becomes `100 × (1 − 20%) = 80`. Together with the overload's own 15% Toughness Damage Reduction, it becomes `100 × 0.8 × 0.85 = 68`.
- **Charge examples**: One charge requires 50 Capacitance points, normally recovered at 1 point/s. With this bonus, the rate is `1 × (1 + 25%) = 1.25` points/s, so one charge takes `50 ÷ 1.25 = 40` seconds. With another +50% natural recovery bonus, the rate is `1 × (1 + 50% + 25%) = 1.75` points/s.
- **Restoration exception**: Effects that directly restore a percentage of one charge do not universally restore 25% more. An ordinary kill that normally restores 1 point still restores 1 point.

[Details](cryptic_overload_keystone_permastack.md) · [Back to index](#talent-index)

---

<a id="cryptic_dissector_crit_attack_speed"></a>

### Servo-Sinew Surge

<img src="https://github.com/user-attachments/assets/08678745-4375-4d48-bdde-6fbc209d6402" width="72" height="72" alt="Servo-Sinew Surge talent icon">

- **Trigger**: With this modifier selected, each Flensing Protocols stack also grants **1.5 percentage points of Critical Strike Chance** and **+1.5% Melee Attack Speed**.
- **Changing stacks**: Losing or restoring Flensing Protocols stacks decreases or increases both bonuses at the same time. Zero stacks give no bonus.
- **Stack examples**: At 6 stacks, gain **9 percentage points** of Critical Strike Chance and **+9% Melee Attack Speed**. At 8, gain **12 percentage points** and **+12%**, respectively.
- **Calculation examples**: An original Critical Strike Chance of `7.5%` becomes `7.5% + 6 × 1.5% = 16.5%` at 6 stacks. A melee attack that originally takes 1 second takes approximately `1 ÷ 1.09 = 0.917` seconds with no other attack-speed bonus.

[Details](cryptic_dissector_crit_attack_speed.md) · [Back to index](#talent-index)

---

<a id="cryptic_dissector_max_stacks"></a>

### Honed Dissector

<img src="https://github.com/user-attachments/assets/17ab9d2c-793b-40c4-83bd-cb3c4bdee444" width="72" height="72" alt="Honed Dissector talent icon">

- **Effect**: Raises the Flensing Protocols stack cap from **6 to 8**; starts at **8 stacks**.
- **Example**: Damage remains +2.5% per stack, so 8 stacks give **+20% Damage**. The Toughness damage taken multiplier is `1 − 0.025 × 8 = 0.80`. With no other damage bonuses, base attack damage `100` becomes `120`; with no other damage reduction, 100 incoming Toughness damage becomes `80`.

[Details](cryptic_dissector_max_stacks.md) · [Back to index](#talent-index)

---

<a id="cryptic_redline_strength"></a>

### Advanced Power Management

<img src="https://github.com/user-attachments/assets/0fead35c-7d81-43dc-be42-f88f95123f84" width="72" height="72" alt="Advanced Power Management talent icon">

- **Trigger**: On Combat Ability use, add one effect stack for each charge held **before using the ability**, up to **5 stacks**.
- **Effect**: Each stack increases **Power by 5% for 10 seconds**. Adding stacks resets the countdown. Another trigger at 5 stacks refreshes the duration without exceeding the cap.
- **Example**: Holding 3 charges before use grants 3 stacks, or +15% Power. An original Power Level of `500` becomes `575`. This does not guarantee 15% more final damage; damage still depends on attack type, weapon damage settings, target armour and other conditions.
- **Chordclaw limit**: Repeated Chordclaw actions during a continuous activation do not trigger this effect again. End the Chordclaw activation, then activate the ability again.

[Details](cryptic_redline_strength.md) · [Back to index](#talent-index)

---

<a id="cryptic_redline_rending"></a>

### Capacitory Limit Override

<img src="https://github.com/user-attachments/assets/bd0f7682-079c-4c61-bae6-b759aa2608e9" width="72" height="72" alt="Capacitory Limit Override talent icon">

- **Trigger**: Active at **3 or more Redline Capacitors stacks**; inactive at **2 or fewer**.
- **Effect**: Gain **+15% Rending**. At 3, 4 or additional stacks, the value remains 15%; it does not accumulate per stack.
- **Damage example**: Comparing only the armour stage, assume pre-armour damage `100`, original armour multiplier `0.5`, and a Rending coefficient of `1` for that armour type. The original result is `100 × 0.5 = 50`; with the bonus, `100 × (0.5 + 0.15) = 65`. This example increases damage by 30%. Different armour multipliers give different increases; this effect does not simply multiply all damage by `1.15`.

#### Traditional Chinese original-text correction

- The Traditional Chinese template swaps the stack count and talent name. After substitution, its condition is equivalent to “while 3 reaches Redline Capacitors stacks or above.” The correct condition is “at 3 or more Redline Capacitors stacks, gain 15% Rending.” The corresponding English puts the stack count and name in the correct positions.

[Details](cryptic_redline_rending.md) · [Back to index](#talent-index)

---

<a id="cryptic_redline_extra_max_stacks"></a>

### Resource Optimisation Canticles

<img src="https://github.com/user-attachments/assets/96e3fb15-c1fd-4702-a6ef-0f69b10931fe" width="72" height="72" alt="Resource Optimisation Canticles talent icon">

- **Effect**: Adds **1 maximum Combat Ability charge** and **1 maximum Redline Capacitors stack**, raising the stack cap from **4 to 5**.
- **Charge example**: The Skitarii Combat Ability base cap is 3 charges, Redline Capacitors adds 1, and this talent adds another 1: `3 + 1 + 1 = 5` charges. Voltaic Emitter still consumes at most 3 charges per use.
- **Toughness damage example**: At 5 Redline stacks, the Toughness damage taken multiplier is `0.75`. An attack that would deal 100 Toughness damage instead deals `75`.
- **Recovery example**: At 5 Redline stacks, natural recovery is increased by 25%. With no other modifiers, the rate rises from 2% of one charge per second to `2% × 1.25 = 2.5%` per second.

[Details](cryptic_redline_extra_max_stacks.md) · [Back to index](#talent-index)

---

<a id="cryptic_dissector_ability_stacks"></a>

### Enhanced Capacitance Protocols

<img src="https://github.com/user-attachments/assets/de2e3c8c-8b4c-4859-87d0-c1416c07ef5c" width="72" height="72" alt="Enhanced Capacitance Protocols talent icon">

- **Trigger**: Using a Combat Ability fills Flensing Protocols to its **current maximum**; with Honed Dissector, it fills to **8 stacks**.
- **Example**: With the base cap of 6 and 3 stacks remaining, the next ability use restores 3 to reach 6. At a full 6, using the ability cannot exceed the cap.

[Details](cryptic_dissector_ability_stacks.md) · [Back to index](#talent-index)

---

<a id="cryptic_overload_keystone_abilities"></a>

### Powerdrive

<img src="https://github.com/user-attachments/assets/d7c8f168-1f4e-42cc-a3d7-926d3b4382f1" width="72" height="72" alt="Powerdrive talent icon">

- **Trigger**: With Voltaic Emitter, each consumed charge adds **5 Power Overload stacks**. The Chordclaw counts **only its first activation**; charges spent on continued attacks during that same activation do not grant more stacks.
- **Advanced Combat Doctrines**: When the stance ends, its activation, ongoing and shot charge consumption is totalled. Each complete charge adds 5 stacks; a remainder smaller than one charge is discarded.
- **Charge example**: One stance consumes `0.25` charges on activation, `1.6` while maintained and `0.2` through shots, totalling `2.05`. Two complete charges count, giving `2 × 5 = 10` stacks. Charges recovered along the way do not subtract from the consumption already recorded.
- **Overload example**: Starting at 22 stacks, consuming 2 charges adds 10: `22 + 10 = 32`. One overload triggers immediately and resets the count to zero; the 2 excess stacks are discarded.

[Details](cryptic_overload_keystone_abilities.md) · [Back to index](#talent-index)

---

<a id="cryptic_dissector_power"></a>

### Higher Purpose

<img src="https://github.com/user-attachments/assets/e1ca03f4-8152-4fa6-9b43-0780a40ae7ca" width="72" height="72" alt="Higher Purpose talent icon">

- **Trigger**: An Elite or Specialist kill restores an **additional 2.5% of one Combat Ability charge's cost**. Added to the class's original 4%, that kill restores **6.5% in total**.
- **Example**: With a 50-point cost per charge, the additional 2.5% is `1.25` points; the original 4% is `2` points, for a total of `3.25`. These resources first accumulate as charge progress and do not necessarily add one whole usable charge immediately.
- **Exception**: While Advanced Combat Doctrines is active, both the class's base kill recovery and this talent's additional recovery are suspended.

[Details](cryptic_dissector_power.md) · [Back to index](#talent-index)

---

<a id="cryptic_redline_toughness"></a>

### Surge-Extension

<img src="https://github.com/user-attachments/assets/d199d3e7-4b94-4288-bf17-acbd915bdeaf" width="72" height="72" alt="Surge-Extension talent icon">

- **Trigger**: Gaining or spending a Combat Ability charge starts **5 seconds of Toughness recovery**. This can still trigger when Redline is at its stack cap.
- **Amount**: Restore **25% of maximum Toughness in total**, at **5% per second**. At 100 maximum Toughness, this is 5 points per second and 25 points over 5 seconds.
- **Repeated triggers**: A new trigger resets the 5-second duration and remaining recovery budget. If one charge event adds two Redline stacks, it still starts one 25% recovery, rather than 50%.

[Details](cryptic_redline_toughness.md) · [Back to index](#talent-index)

---

<a id="cryptic_crits_grant_tdr"></a>

### Power Redistribution Uplink

<img src="https://github.com/user-attachments/assets/6ce866b5-8bad-4668-94c0-c0c6c5a06944" width="72" height="72" alt="Power Redistribution Uplink talent icon">

- **Trigger**: After a critical hit, restore **2.5% of maximum Toughness per second for 3 seconds** and gain **15% Toughness Damage Reduction**.
- **Refreshing**: Another critical hit restarts the duration. The restoration rate and damage reduction do not stack.
- **Example**: At 100 maximum Toughness, restore `100 × 2.5% = 2.5` points per second, or 7.5 points over the full 3 seconds. With no other damage reduction, 100 points of Toughness damage become `100 × 0.85 = 85`.

[Details](cryptic_crits_grant_tdr.md) · [Back to index](#talent-index)

---

<a id="cryptic_dr_on_toughness_break"></a>

### Adaptive Combat Engram

<img src="https://github.com/user-attachments/assets/ea4be2ad-8b84-4e83-a056-993beed7b39c" width="72" height="72" alt="Adaptive Combat Engram talent icon">

- **Trigger**: When your own Toughness breaks, gain **30% Damage Reduction for 5 seconds**.
- **Cooldown**: After the 5-second effect ends, wait another **15 seconds** before it can trigger again. The earliest next trigger is **20 seconds after the previous trigger**.
- **Example**: With no other reduction, `100 × (1 − 30%) = 70` damage. With another independent 25% reduction, `100 × 0.70 × 0.75 = 52.5` damage.

[Details](cryptic_dr_on_toughness_break.md) · [Back to index](#talent-index)

---

<a id="cryptic_successful_dodge_stamina"></a>

### Evasive Servo Recovery

<img src="https://github.com/user-attachments/assets/4738c3e6-2609-414c-9c00-f50fea4dcef3" width="72" height="72" alt="Evasive Servo Recovery talent icon">

- **Trigger**: Successfully dodging an enemy attack immediately restores **10% of maximum Stamina**. Simply pressing dodge without avoiding an attack does not count.
- **Example**: At 5 maximum Stamina bars, each successful dodge restores `5 × 10% = 0.5` bars. At 4.8 current bars, it only restores up to 5.

[Details](cryptic_successful_dodge_stamina.md) · [Back to index](#talent-index)

---

<a id="cryptic_multi_hits_restore_toughness"></a>

### Omnissian Recharge Litany

<img src="https://github.com/user-attachments/assets/d9876bb9-a417-45e8-814c-acbc24233120" width="72" height="72" alt="Omnissian Recharge Litany talent icon">

- **Trigger**: Hitting the **third enemy with the same attack** starts recovery of **10% of maximum Toughness over 3 seconds**. Both melee and ranged hits can trigger it.
- **Refreshing**: Another qualifying attack restarts the 3-second period. Triggers are at least **0.25 seconds apart**; hitting the fourth or fifth enemy does not add stacks.
- **Example**: At 150 maximum Toughness, restore `150 × 10% ÷ 3 = 5` points per second, or 15 points over the full effect.

[Details](cryptic_multi_hits_restore_toughness.md) · [Back to index](#talent-index)

---

<a id="cryptic_stamina_increases_damage"></a>

### Channelled Motive Force

<img src="https://github.com/user-attachments/assets/8f013bd2-f685-4be4-8678-11ac630d6659" width="72" height="72" alt="Channelled Motive Force talent icon">

- **Trigger**: After spending **1 Stamina bar in total**, gain **15% Damage for 4 seconds**. The bar does not need to be spent all at once.
- **Accumulation and refreshing**: Stamina recovery does not subtract from accumulated spending. Spending another accumulated bar restarts the 4-second duration; the damage bonus does not stack.
- **Example**: Spending 0.4 bars followed by 0.6 bars triggers it. At 100 base damage with an existing 25% bonus in the same stage, the result is `100 × (1 + 25% + 15%) = 140` damage.

[Details](cryptic_stamina_increases_damage.md) · [Back to index](#talent-index)

---

<a id="cryptic_electrocution_toughness"></a>

### Entropic Transfer

<img src="https://github.com/user-attachments/assets/98a10c08-52e1-47bf-a288-a2043ba40a63" width="72" height="72" alt="Entropic Transfer talent icon">

- **Trigger**: Applying Electrocution to an enemy, adding an Electrocution stack, or refreshing its duration at the stack cap starts recovery of **12% of maximum Toughness over 4 seconds**.
- **Refreshing**: Another trigger restarts the 4-second duration without increasing the amount restored per second.
- **Example**: At 100 maximum Toughness, restore `100 × 12% ÷ 4 = 3` points per second. Retriggering at 2 seconds extends the effect until 6 seconds, allowing 18 points to be restored over that period.

[Details](cryptic_electrocution_toughness.md) · [Back to index](#talent-index)

---

<a id="cryptic_electrocution_defense"></a>

### Overcharge Transfer Lattice

<img src="https://github.com/user-attachments/assets/74c8388d-8388-4646-8a91-0eb056656036" width="72" height="72" alt="Overcharge Transfer Lattice talent icon">

- **Trigger**: Receiving damage from a melee attack Electrocutes living enemies within **2.5 metres of the attacker**. Simply blocking does not trigger it.
- **Electrocution**: The status lasts **3 seconds** and refreshes when reapplied. Its actual control effect on different enemies still depends on their resistances.
- **Cooldown**: Cooldown is **15 seconds from activation**. For example, after triggering at 0 seconds, another hit at 10 seconds does not activate it again; a qualifying hit after 15 seconds can.

[Details](cryptic_electrocution_defense.md) · [Back to index](#talent-index)

---

<a id="cryptic_weakspot_damage"></a>

### Sureshot Cogitator Sync

<img src="https://github.com/user-attachments/assets/4d3197de-7f15-46b8-9df6-153fd0f94642" width="72" height="72" alt="Sureshot Cogitator Sync talent icon">

- **Effect**: Increases the **extra damage component of weakspot hits by 25%**, for both melee and ranged attacks.
- **Examples**: With a base component of 100 and an extra weakspot component of 100 for the same attack, damage goes from `200` to `100 + 100 × 1.25 = 225`, a 12.5% increase to the whole hit. If the extra component is 200, damage goes from `300` to `100 + 200 × 1.25 = 350`, an increase of approximately 16.67%.
- **Weapon differences**: The larger the extra weakspot component's share of damage, the larger the increase to the whole hit. Weapon model, charge level, target armour, hit zone and critical hits all affect the result.
- **Other bonuses**: If the extra weakspot component already has a 20% bonus in the same stage, damage becomes `100 + 100 × (1 + 20% + 25%) = 245`. It was 220 before this talent, so the increase is approximately 11.36%.

[Details](cryptic_weakspot_damage.md) · [Back to index](#talent-index)

---

<a id="cryptic_pushing_grants_cleave"></a>

### Shockline Breach Protocol

<img src="https://github.com/user-attachments/assets/dca309fd-773f-4a07-a659-cfb320cd14a9" width="72" height="72" alt="Shockline Breach Protocol talent icon">

- **Trigger**: Hitting an enemy with a push grants **50% increased melee cleave for 8 seconds**. Another successful push restarts the duration without adding stacks.
- **Example**: If the attack could originally handle 10 units of enemy mass, the effect changes that to `10 × (1 + 50%) = 15`. The number of additional enemies hit still depends on their mass and the attack's own limits.

[Details](cryptic_pushing_grants_cleave.md) · [Back to index](#talent-index)

---

<a id="cryptic_stacking_ranged_damage"></a>

### Rad-Sink

<img src="https://github.com/user-attachments/assets/26c97989-2f88-46ee-9bf3-f9f02b09c0f3" width="72" height="72" alt="Rad-Sink talent icon">

- **Accumulation**: At **1 second since the last shot**, gain **10% Ranged Damage**. At **2 seconds**, it rises to **20%**, up to **2 stacks**.
- **Consumption**: Shooting again restarts the waiting period. Sustained fire cannot keep both stacks continuously.
- **Example**: At 100 base damage, one stack gives `100 × 1.10 = 110` and two give `100 × 1.20 = 120`. With an existing same-stage 25% bonus, two stacks give `100 × (1 + 25% + 20%) = 145`.

[Details](cryptic_stacking_ranged_damage.md) · [Back to index](#talent-index)

---

<a id="cryptic_stacking_tdr"></a>

### Progressive Plating Matrix

<img src="https://github.com/user-attachments/assets/5208032b-aaaf-4801-b84c-6fdbaab1735b" width="72" height="72" alt="Progressive Plating Matrix talent icon">

- **Stacks**: Hitting the first target of an attack grants **1 stack**, reducing Toughness damage by **2.5% per stack**, up to **6 stacks**. Hitting multiple enemies with the same attack adds only one stack.
- **Duration**: Each trigger restarts the **5-second countdown**. If no further trigger occurs, the effect expires.
- **Example**: Six stacks provide `6 × 2.5% = 15%` reduction, turning 100 points of Toughness damage into 85. With another independent 20% reduction, the result is `100 × 0.85 × 0.80 = 68` points.

[Details](cryptic_stacking_tdr.md) · [Back to index](#talent-index)

---

<a id="cryptic_damage_vs_electrocuted_scaling_on_charge"></a>

### Retribution Conduit

<img src="https://github.com/user-attachments/assets/eb093286-7cce-40e8-b518-3b5bc16dd38d" width="72" height="72" alt="Retribution Conduit talent icon">

- **Effect**: Deal **10% increased damage to Electrocuted enemies**, plus **5% for each full charge currently held**. An incomplete charge does not count.
- **Example**: With 3 full charges, the bonus is `10% + 3 × 5% = 25%`, turning 100 base damage into 125. With another same-stage 20% bonus, `100 × (1 + 20% + 25%) = 145`.
- **Changes**: After a charge is spent, the bonus recalculates from the remaining full charges. Once the target's Electrocution ends, this bonus against Electrocuted targets no longer applies.

[Details](cryptic_damage_vs_electrocuted_scaling_on_charge.md) · [Back to index](#talent-index)

---

<a id="cryptic_elite_kills_damage"></a>

### Galvanic Marking Array

<img src="https://github.com/user-attachments/assets/77cad8a5-5837-45fe-98a7-549e27e5d738" width="72" height="72" alt="Galvanic Marking Array talent icon">

- **Trigger**: Killing an Elite enemy **with a ranged attack** grants **1 damage stack**. The target does not need to be a gun-carrying ranged Elite.
- **Stacks and duration**: Each stack adds **5% Damage**, up to **4 stacks**. Another qualifying kill restarts the **15-second countdown**. With no further kills, one stack is lost every 15 seconds.
- **Example**: Four stacks give 20%, turning base damage 100 into `100 × 1.20 = 120`. Starting at full stacks with no further triggers, 3, 2, 1 and 0 stacks remain after 15, 30, 45 and 60 seconds respectively.

#### Chinese original text correction

- The game Chinese says “擊殺遠程精英” (kill ranged Elites), which can suggest a restriction to gun-carrying Elites. This version requires **killing an Elite with a ranged attack**. Killing a gun-carrying Elite in melee does not satisfy that condition.

[Details](cryptic_elite_kills_damage.md) · [Back to index](#talent-index)

---

<a id="cryptic_toughness_per_charge"></a>

### Auto-Repair Doctrines

<img src="https://github.com/user-attachments/assets/003d8e80-1bb4-46b0-aad1-e2f6d78be693" width="72" height="72" alt="Auto-Repair Doctrines talent icon">

- **Recovery**: Continuously restore **3% of maximum Toughness per second**, plus **0.5% of maximum Toughness per second for each full charge currently held**.
- **Example**: At 200 maximum Toughness with 3 full charges, recover `200 × (3% + 3 × 0.5%) = 9` points per second. With 0 charges, still recover `200 × 3% = 6` points per second.
- **Limits**: Incomplete charges do not count. Recovery cannot exceed maximum Toughness.

[Details](cryptic_toughness_per_charge.md) · [Back to index](#talent-index)

---

<a id="cryptic_crit_chance_based_on_charge"></a>

### Last Stand Relay

<img src="https://github.com/user-attachments/assets/5e8556aa-e9d9-4400-a863-bb26a5f11e17" width="72" height="72" alt="Last Stand Relay talent icon">

- **Effect**: Always gain **6 percentage points of Critical Hit Chance**. With less than one full charge currently held, gain another **4 percentage points**, for **10 percentage points in total**.
- **Example**: At an original 7.5% chance, having a full charge gives `7.5% + 6% = 13.5%`. With no full charge, it gives `7.5% + 6% + 4% = 17.5%`.
- **Changes**: A charge being restored still counts as zero full charges even at **90% progress**. Once it becomes full, the extra 4 percentage points disappear.

[Details](cryptic_crit_chance_based_on_charge.md) · [Back to index](#talent-index)

---

<a id="cryptic_afflicted_increased_damage"></a>

### Weakness Analysis Doctrine

<img src="https://github.com/user-attachments/assets/4683657a-edf5-4420-b60f-68eddc85ef43" width="72" height="72" alt="Weakness Analysis Doctrine talent icon">

- **Trigger**: Hitting an enemy affected by **Electrocution, Burning, Soulblaze, Bleeding or Toxin** with a melee or ranged attack grants **10% Damage for 8 seconds**.
- **Duration and scope**: After gaining the bonus, you can use it against other targets. Another qualifying hit restarts the 8-second countdown without adding stacks.
- **Example**: At 100 base damage with an existing same-stage 25% bonus, `100 × (1 + 25% + 10%) = 135` damage.

[Details](cryptic_afflicted_increased_damage.md) · [Back to index](#talent-index)

---

<a id="cryptic_mobile_defense"></a>

### Ablative Motion Routines

<img src="https://github.com/user-attachments/assets/bc0f3370-fa34-406f-9e0d-91e23b98f1f2" width="72" height="72" alt="Ablative Motion Routines talent icon">

- **Trigger**: While **sprinting with Stamina remaining**, or while **sliding**, take **25% less damage**. Sliding itself does not require remaining Stamina.
- **Example**: Damage 100 becomes `100 × 0.75 = 75`. With another independent 30% reduction, it becomes `100 × 0.75 × 0.70 = 52.5`.
- **Ending**: The effect ends as soon as you leave those states, with no additional lingering duration.

[Details](cryptic_mobile_defense.md) · [Back to index](#talent-index)

---

<a id="cryptic_shared_toughness"></a>

### Power Overflow

<img src="https://github.com/user-attachments/assets/dbeb2660-6b6d-4b09-b33a-bd21aef50f59" width="72" height="72" alt="Power Overflow talent icon">

- **Trigger**: If your Toughness was **already full**, and the next recovery event restores **nothing to you**, each teammate in Coherency separately receives **25% of that event's intended recovery**.
- **Example**: While you are full, an effect that would restore 20 points gives each teammate `20 × 25% = 5` points. Three teammates can receive 15 points in total; the 5 points are not divided among them.
- **Exceptions**: If you are missing 2 points and receive a 20-point recovery, the 18-point overflow is not shared. Recovery received through sharing cannot be passed on again. Each teammate's recovery bonuses and maximum Toughness still apply.

[Details](cryptic_shared_toughness.md) · [Back to index](#talent-index)

---

<a id="cryptic_stun_suppression_immune"></a>

### Target-Neutralization Feedback

<img src="https://github.com/user-attachments/assets/127fa97e-a0cf-4421-bff2-7edb8edaed86" width="72" height="72" alt="Target-Neutralization Feedback talent icon">

- Weakspot kills grant 5 seconds of immunity to ordinary hit Stun and Suppression.
- Another qualifying kill refreshes the 5-second duration. For example, a trigger at 0 seconds followed by another at 3 seconds keeps the effect active until 8 seconds.
- This grants no damage reduction. It does not make you immune to nets, pounces or every form of forced control.

[Details](cryptic_stun_suppression_immune.md) · [Back to index](#talent-index)

---

<a id="cryptic_elite_kills_toughness"></a>

### Binary Ballistics Protocol

<img src="https://github.com/user-attachments/assets/79eb4aea-82d8-46fb-add1-a4ded8e41cce" width="72" height="72" alt="Binary Ballistics Protocol talent icon">

- Killing an Elite restores 15% of maximum Toughness over 3 seconds. Both melee and ranged kills qualify.
- Another qualifying kill refreshes the 3-second duration; it does not increase the recovery rate.
- **Example**: With 200 maximum Toughness, recovery is `200 × 15% ÷ 3 = 10` points per second, or 30 points over 3 seconds. If you trigger it again after 2 seconds, continuous recovery lasts 5 seconds and restores 50 points in total.

[Details](cryptic_elite_kills_toughness.md) · [Back to index](#talent-index)

---

<a id="cryptic_push_stagger_stamina"></a>

### Force Distribution Actuators

<img src="https://github.com/user-attachments/assets/6d7a17f5-be3e-4659-bc09-84cfb22bd20f" width="72" height="72" alt="Force Distribution Actuators talent icon">

- While your current Stamina is at least 50% of maximum Stamina, your Pushes gain 75% Impact. Exactly 50% qualifies.
- **Example**: With 6 maximum Stamina bars, you need at least 3 bars. A Push with an original Impact of 100 becomes `100 × (1 + 75%) = 175`.
- This improves Push and stagger control. Whether a Push interrupts an enemy still depends on that enemy's Impact threshold.

[Details](cryptic_push_stagger_stamina.md) · [Back to index](#talent-index)

---

<a id="cryptic_no_braced_movement_penalty"></a>

### Superior Tracking Litanies

<img src="https://github.com/user-attachments/assets/29715f83-8068-4375-9aa9-d00c34e8d8f3" width="72" height="72" alt="Superior Tracking Litanies talent icon">

- **Movement effect**: While bracing or aiming down sights, halve the original movement-speed penalty.
- **Movement example**: If your speed was 60% of normal movement speed, the penalty was 40%. With this talent, speed becomes `1 − 40% × 0.5 = 80%` of normal speed.
- **Spread effect**: Always reduces shooting Spread by 45%; bracing first is not required. If Spread is 10 under the same conditions with no other Spread bonuses, it becomes `10 × (1 − 45%) = 5.5`.

[Details](cryptic_no_braced_movement_penalty.md) · [Back to index](#talent-index)

---

<a id="cryptic_better_heavies"></a>

### Hydraulic Impact

<img src="https://github.com/user-attachments/assets/d01cfadc-7ba2-4505-b70a-11c22405645a" width="72" height="72" alt="Hydraulic Impact talent icon">

- **Effect**: During melee windup, you are immune to ordinary hit Stun. Your Heavy Melee Damage also increases by 15%. The damage bonus applies to heavy attacks and does not require charging them fully.
- **Damage example**: At base heavy-attack damage 100 with another 25% damage bonus in the same stage, `100 × (1 + 25% + 15%) = 140`.
- **Exceptions**: Interruption protection applies only during the windup action. You still take damage, and this does not mean immunity to nets or pounces.

[Details](cryptic_better_heavies.md) · [Back to index](#talent-index)

---

<a id="cryptic_hybrid_damage"></a>

### Hybrid Combat Covenant

<img src="https://github.com/user-attachments/assets/f8248e1e-3923-42b3-9afb-abed0c3ac1e9" width="72" height="72" alt="Hybrid Combat Covenant talent icon">

- **Triggers**: A melee kill adds one Ranged Damage stack; a ranged kill adds one Melee Damage stack. The two effects accumulate separately, each granting 3% per stack, up to 5 stacks.
- **Duration**: Gaining a new stack of either type restarts that type's 8-second countdown. After you stop triggering it, one stack is lost every 8 seconds. Switching weapons does not directly remove accumulated effects.
- **Damage example**: Five Ranged Damage stacks give 15%, taking base shooting damage from 100 to 115. Even if you also have five Melee Damage stacks, that shot still receives only the 15% Ranged Damage bonus.

[Details](cryptic_hybrid_damage.md) · [Back to index](#talent-index)

---

<a id="cryptic_toughness_on_damage_taken"></a>

### Kinetic Energy Distributors

<img src="https://github.com/user-attachments/assets/eae28459-1a70-43fc-a5ff-35d2b3adc0eb" width="72" height="72" alt="Kinetic Energy Distributors talent icon">

- **Trigger**: After you take positive Health damage, restore 25% of maximum Toughness over 5 seconds. Losing Toughness alone does not trigger this effect.
- **Refresh**: Taking qualifying damage again restarts recovery; the recovery rate does not stack.
- **Recovery example**: At 100 maximum Toughness, recover `100 × 25% ÷ 5 = 5` points per second. Taking damage again at 2 seconds extends recovery until 7 seconds, restoring up to 35 points over that period.

[Details](cryptic_toughness_on_damage_taken.md) · [Back to index](#talent-index)

---

<a id="cryptic_melee_attacks_give_melee_attack_speed"></a>

### Uncapped Arrestor

<img src="https://github.com/user-attachments/assets/8c6107b2-c1ee-4fa6-9465-919f3c4d9d8b" width="72" height="72" alt="Uncapped Arrestor talent icon">

- **Stacks**: A melee swing that hits an enemy grants one Melee Attack Speed stack. Hitting multiple enemies still grants only one stack. Each stack gives 2.5%, up to 5 stacks.
- **Duration**: Every trigger resets the 3-second countdown. If you do not trigger it again within 3 seconds, the effect expires.
- **Attack-speed example**: Five stacks give 12.5% Attack Speed. An attack action affected by Attack Speed that originally takes 1 second becomes `1 ÷ 1.125 ≈ 0.889` seconds. An actual full combo also contains other actions.

[Details](cryptic_melee_attacks_give_melee_attack_speed.md) · [Back to index](#talent-index)

---

<a id="cryptic_melee_crits_electrocute_first"></a>

### Electro-Strike Conduit

<img src="https://github.com/user-attachments/assets/a754db43-e82a-44d0-af91-ea8d874d8c3c" width="72" height="72" alt="Electro-Strike Conduit talent icon">

- **Trigger**: A melee Critical Hit applies Electrocution to the first target of that swing. The target must still be alive after the hit.
- **Electrocution**: The status lasts 3 seconds, and applying it again refreshes the duration. Cleaving through 5 enemies in one swing does not Electrocute all 5.
- **Exception**: There is no additional trigger cooldown. Whether an enemy can be kept under continuous control still depends on its own resistances.

[Details](cryptic_melee_crits_electrocute_first.md) · [Back to index](#talent-index)

---

<a id="cryptic_auto_reload"></a>

### Gunsmith

<img src="https://github.com/user-attachments/assets/6e39714f-23a2-4d43-b5ae-6cfe4fa9b214" width="72" height="72" alt="Gunsmith talent icon">

- **Reload Speed**: Gain 15% Reload Speed. An affected reload action that originally takes 2 seconds becomes `2 ÷ 1.15 ≈ 1.74` seconds.
- **Automatic reload**: After 5 full seconds without shooting, every additional second transfers ammo from reserves into the clip. After normal shooting, the first batch arrives at approximately 6 seconds. Each batch is 7.5% of clip capacity, rounded up.
- **Ammo example**: A 30-round clip gives `30 × 7.5% = 2.25`, rounded up to 3 rounds per batch. If the clip is missing 2 rounds, only 2 are transferred; if reserves contain only 1 round, only 1 is transferred.
- **Exceptions**: No transfer occurs during manual reloading, with a full clip or with empty reserves. Shooting again resets the wait. This moves reserve ammo into the clip; it does not create new ammo.

[Details](cryptic_auto_reload.md) · [Back to index](#talent-index)

---

<a id="cryptic_ranged_vs_bfg"></a>

### Assassination Protocols

<img src="https://github.com/user-attachments/assets/c9876de0-2e5d-4421-9bee-326ac0c92290" width="72" height="72" alt="Assassination Protocols talent icon">

- **Targets**: Ranged attacks deal 25% more damage to Ogryn, Monstrosity or Captain enemies. Melee attacks do not benefit.
- **Damage example**: Against a target matching one of those categories, base ranged damage 100 becomes `100 × 1.25 = 125`. With an existing 20% bonus in the same stage, it becomes `100 × (1 + 20% + 25%) = 145`.

[Details](cryptic_ranged_vs_bfg.md) · [Back to index](#talent-index)

---

<a id="cryptic_electrocution_applies_brittleness"></a>

### System Shock

<img src="https://github.com/user-attachments/assets/7f79455c-bf29-4b78-8706-dda075acb8d0" width="72" height="72" alt="System Shock talent icon">

- **Trigger**: Applying Electrocution to an enemy, adding a stack or refreshing its duration adds 3 Brittleness stacks. Each gives 2.5%, for 7.5% added by that trigger.
- **Stacks and duration**: Brittleness lasts 5 seconds; applying it again refreshes the duration. The same Brittleness effect has a combined cap of 16 stacks, or 40%. For example, 6 consecutive triggers raise the count through 3, 6, 9, 12 and 15 to the cap of 16.
- **Damage example**: Brittleness improves the attack's effectiveness against armour; it cannot be treated as 7.5% more total damage. With an unarmoured damage baseline of 100 and an original armour modifier of 0.5, adding 7.5% Brittleness makes this stage `100 × (0.5 + 0.075) = 57.5`, compared with 50 before.
- **Team effect**: Brittleness is applied to the enemy, so teammates' attacks can also benefit. The actual increase varies with the weapon and armour.

[Details](cryptic_electrocution_applies_brittleness.md) · [Back to index](#talent-index)

---

<a id="cryptic_ammo_reserve"></a>

### Ammo-Cell Augury

<img src="https://github.com/user-attachments/assets/d265085f-7abd-4433-adc1-3f0276351436" width="72" height="72" alt="Ammo-Cell Augury talent icon">

- **Effect**: Increase reserve-ammo capacity by 25%. Clip capacity does not increase.
- **Capacity example**: An original reserve cap of 200 rounds becomes `200 × (1 + 25%) = 250` rounds. At an original 203 rounds, the calculation gives 253.75, rounded down to 253 rounds. With another 15% bonus of the same capacity type, `200 × (1 + 25% + 15%) = 280` rounds.

[Details](cryptic_ammo_reserve.md) · [Back to index](#talent-index)

---

<a id="cryptic_coherency_toughness_on_ability"></a>

### Voltaic Restoration

<img src="https://github.com/user-attachments/assets/bb7b86c4-512f-495f-a82a-7011cae498d6" width="72" height="72" alt="Voltaic Restoration talent icon">

- **Trigger**: Activating your Combat Ability restores 20% of each recipient's own maximum Toughness to you and allies in Coherency. Using your Blitz does not trigger it.
- **Recovery example**: At your maximum Toughness of 100, you recover `100 × 20% = 20` points. A teammate with maximum Toughness 200 recovers `200 × 20% = 40` points.
- **Counting**: Recovery is per ability activation. Spending 3 Capacitance charges in one activation does not change it to 60%.

[Details](cryptic_coherency_toughness_on_ability.md) · [Back to index](#talent-index)

---

<a id="cryptic_revive_speed_and_dr"></a>

### Salvation Doctrine

<img src="https://github.com/user-attachments/assets/a86f113d-1a3e-4fc6-b1d1-24fe727b118d" width="72" height="72" alt="Salvation Doctrine talent icon">

- **Effect**: While reviving a downed ally, pulling up a hanging ally, removing a net or rescuing a captured ally, take 25% less damage and perform the assistance action 25% faster.
- **Time example**: An assistance action that originally takes 4 seconds becomes `4 ÷ 1.25 = 3.2` seconds with no other speed bonuses.
- **Damage-reduction example**: During assistance, an original 100 damage becomes `100 × 0.75 = 75`. Once you stop assisting, this damage reduction ends.

[Details](cryptic_revive_speed_and_dr.md) · [Back to index](#talent-index)

---

<a id="cryptic_passive_ammo_replenishment"></a>

### Ammunition-Restoration Pod

<img src="https://github.com/user-attachments/assets/5330c87c-7abe-4993-8eb2-5cb11586c013" width="72" height="72" alt="Ammunition-Restoration Pod talent icon">

- **Ammo recovery**: Every 15 seconds, replenish 1% of maximum reserve ammo into your reserves, rather than directly into the clip.
- **Rounding example**: With a reserve cap of 250 rounds, each interval accrues `250 × 1% = 2.5` rounds. First gain 2 and retain 0.5; the next interval then grants 3. Four consecutive intervals grant 10 rounds in total.
- **Cap and exceptions**: Reserves can also include the ammo needed to fill the missing part of the clip. A fully supplied weapon cannot accumulate ammo indefinitely. Weapons without an ammo reserve do not gain ammo from this effect.

[Details](cryptic_passive_ammo_replenishment.md) · [Back to index](#talent-index)

---

<a id="cryptic_stacking_melee_damage"></a>

### Sustained Assault Doctrine

<img src="https://github.com/user-attachments/assets/9e58fba3-e137-4f3e-89c3-ea7f5ebb0f24" width="72" height="72" alt="Sustained Assault Doctrine talent icon">

- **Stacks**: A melee swing hitting at least one enemy grants one Damage stack. Each swing grants at most one stack, each giving 3%, up to 5 stacks.
- **Duration**: Another trigger resets the 8-second countdown. This effect can also increase ranged damage.
- **Damage example**: Five stacks give 15%, taking base damage 100 to 115. With an existing 25% bonus in the same stage, `100 × (1 + 25% + 15%) = 140`.

[Details](cryptic_stacking_melee_damage.md) · [Back to index](#talent-index)

---

<a id="cryptic_stun_dr_power"></a>

### Galvanized Coating

<img src="https://github.com/user-attachments/assets/e3f4e5a5-52c8-489e-a83f-3bf13c80eca8" width="72" height="72" alt="Galvanized Coating talent icon">

- **Defence**: Gain immunity to ordinary hit Stun and take 15% less damage. Both defensive effects remain even with insufficient Capacitance.
- **Resource cost**: Taking melee damage spends 7.5% of one Capacitance charge. Only existing resources are spent; they cannot go negative. This cost is not charged while you are already disabled.
- **Calculation example**: With a base natural recovery time of 50 seconds per charge, 7.5% equals `50 × 7.5% = 3.75` seconds of natural recovery. An original 100 damage becomes `100 × 0.85 = 85`.

[Details](cryptic_stun_dr_power.md) · [Back to index](#talent-index)

---

<a id="cryptic_damage_on_ability"></a>

### Moebian Conductor

<img src="https://github.com/user-attachments/assets/78378820-be56-4a92-bd07-f6275c55fa47" width="72" height="72" alt="Moebian Conductor talent icon">

- **Trigger**: Activating your Combat Ability grants 15% Damage for 10 seconds. Blitz does not trigger it.
- **Refresh**: Another activation resets the 10-second countdown without stacking. Spending multiple Capacitance charges in one activation still grants only 15%.
- **Damage example**: At base damage 100 with an existing 25% bonus in the same stage, `100 × (1 + 25% + 15%) = 140` damage.

[Details](cryptic_damage_on_ability.md) · [Back to index](#talent-index)

---

<a id="cryptic_weakspot_kills_restore_toughness"></a>

### Servo-Core Recharge Engine

<img src="https://github.com/user-attachments/assets/233341e1-6bfd-4027-9641-610ec8733e45" width="72" height="72" alt="Servo-Core Recharge Engine talent icon">

- **Trigger**: Killing an enemy with a Weakspot hit immediately restores 5% of maximum Toughness. Both melee and ranged attacks qualify.
- **Recovery example**: At 200 maximum Toughness, each trigger restores `200 × 5% = 10` points. Three consecutive qualifying kills can restore 30 points, capped at maximum Toughness.

[Details](cryptic_weakspot_kills_restore_toughness.md) · [Back to index](#talent-index)

---

<a id="cryptic_cleave_and_impact"></a>

### Adaptive Combat Calibration

<img src="https://github.com/user-attachments/assets/ed3453a6-4290-4ca6-a37e-0d19046b048e" width="72" height="72" alt="Adaptive Combat Calibration talent icon">

- While above **50% of maximum Toughness**, gain **+30% Melee Cleave**. At or below **50%**, gain **+30% Melee Impact** instead.
- With maximum Toughness **100**, current Toughness **51** enables Cleave; **50** or **49** enables Impact.
- A Cleave baseline of **10** becomes `10 × 1.30 = 13`; an Impact baseline of **100** becomes `100 × 1.30 = 130`.
- Cleave affects how many enemies the attack can penetrate; Impact affects stagger. They do not apply together and are not a direct 30% damage bonus.

[Details](cryptic_cleave_and_impact.md) · [Back to index](#talent-index)

---

<a id="cryptic_tdr_based_on_charge"></a>

### Residual Current Buffer

<img src="https://github.com/user-attachments/assets/f34040ff-ebd0-4f7e-b857-4557ccdee00c" width="72" height="72" alt="Residual Current Buffer talent icon">

- **Operation**: Always reduce incoming Toughness damage by **10%**. Each fully charged unit of Capacitance currently held adds **2.5%** reduction.
- **Reduction example**: With **3 charges**, `10% + 3 × 2.5% = 17.5%`. Incoming Toughness damage **100** becomes `100 × 0.825 = 82.5`. With a separate **20%** Toughness damage reduction, `82.5 × 0.8 = 66` damage remains.
- **Update condition**: Only fully charged units count. The effect updates when Capacitance is spent or a charge finishes recharging. With **0 charges**, the **10%** base reduction remains.

[Details](cryptic_tdr_based_on_charge.md) · [Back to index](#talent-index)

---

<a id="cryptic_ranged_stacking_toughness"></a>

### Superior Defence Engrams

<img src="https://github.com/user-attachments/assets/deb63065-b15d-498f-a16c-ec7726ca6a22" width="72" height="72" alt="Superior Defence Engrams talent icon">

- **Stacking**: Each ranged kill grants **1 stack**, up to **5**. Each stack restores **1% of maximum Toughness per second**.
- **Duration**: Another ranged kill resets the **8-second** timer. The duration can still refresh at maximum stacks.
- **Recovery example**: At **200 maximum Toughness** and **5 stacks**, recover `200 × 5 × 1% = 10` points per second. Maintaining full stacks for **8 seconds** can restore **80** points, capped at maximum Toughness.

[Details](cryptic_ranged_stacking_toughness.md) · [Back to index](#talent-index)

---

<a id="cryptic_specials_marking"></a>

### Target Prioritization Psalms

<img src="https://github.com/user-attachments/assets/f821891a-e246-41c9-ae45-97f93d0b8547" width="72" height="72" alt="Target Prioritization Psalms talent icon">

- **Operation**: Living Specialists within **12.5 metres** show an outline; no manual marking is required.
- **Updates**: The outline updates approximately every **0.25 seconds** and is removed when the enemy leaves the range or dies.
- **Marking distinction**: This is an enemy outline indicator. The talent itself grants no damage bonus, charge recovery, or additional manual-marking reward.

[Details](cryptic_specials_marking.md) · [Back to index](#talent-index)

---

<a id="cryptic_disabled_allies_defense"></a>

### Protectorate Protocol

<img src="https://github.com/user-attachments/assets/53a3e76f-67fe-4d9e-bff5-7aafaee21065" width="72" height="72" alt="Protectorate Protocol talent icon">

- **Protection**: Allies who require help within Coherency take **25% less damage**, until they leave that state or lose the Coherency effect.
- **Assistance bonus**: When **you** complete the assistance, the rescued ally gains **6 seconds** of **25% Damage Resistance** and immunity to ordinary hit Stun. This separate reduction does not require them to remain within Coherency.
- **Reduction example**: With one effect, incoming damage **100** becomes `100 × 0.75 = 75`. With another independent **20%** reduction, `100 × 0.75 × 0.80 = 60` damage remains.

[Details](cryptic_disabled_allies_defense.md) · [Back to index](#talent-index)

---

<a id="cryptic_ally_coherency_defenses"></a>

### Data Sensor Protocol

<img src="https://github.com/user-attachments/assets/0bbe1f46-d58e-414d-9ab3-1c8ed0170a41" width="72" height="72" alt="Data Sensor Protocol talent icon">

- **Stamina recovery**: When **you or an ally within Coherency** take Toughness damage, **the injured player** restores **25% of their maximum Stamina**.
- **Toughness recovery**: When you or an ally within Coherency take Health damage, the injured player restores **25% of their maximum Toughness**. Lethal attacks do not trigger this effect.
- **Cooldowns**: Each recovery type has its own **15-second** cooldown, but triggers of the same type share your cooldown. If ally A triggers Stamina recovery and ally B takes Toughness damage **5 seconds** later, that same effect cannot trigger again.
- **Recovery example**: If the injured player's maximum Stamina is **6 bars** and maximum Toughness is **120**, the corresponding recovery is `6 × 25% = 1.5` Stamina bars or `120 × 25% = 30` Toughness points. The entire team does not recover simultaneously.

#### Traditional Chinese localization note

The verified Chinese document notes that its original wording says, in translation, “When you or … an ally take damage, allies restore …”. The beneficiary is the player who took that damage: your injury restores your own resource; an ally's injury restores that ally's resource. Recovery is not transferred to other allies.

[Details](cryptic_ally_coherency_defenses.md) · [Back to index](#talent-index)

---

<a id="cryptic_strength_on_charge_gain"></a>

### Sequenced Charge

<img src="https://github.com/user-attachments/assets/0a7a0b4b-9d65-4b36-9825-ed610ad0a3ae" width="72" height="72" alt="Sequenced Charge talent icon">

- **Trigger**: Replenishing at least **1 full Capacitance charge** grants **12.5% Strength** for **10 seconds**. Adding only partial progress without completing a charge does not trigger it.
- **Refresh**: Gaining another full charge during the effect resets the **10-second** duration. Gaining multiple charges at once does not multiply the Strength bonus.
- **Power example**: Suppose an attack's power before the modifier is **500**. With this effect, `500 × 1.125 = 562.5`. With another **20%** modifier at the same stage, `500 × (1 + 20% + 12.5%) = 662.5`.
- **Scope**: Strength affects the power used in damage, Impact and Cleave calculations. Actual results still depend on the weapon and target; this does not mean every final damage result increases by 12.5%.

[Details](cryptic_strength_on_charge_gain.md) · [Back to index](#talent-index)

---

<a id="cryptic_toughness_replenishment_on_kill_bonus"></a>

### Slaughter Protocol

<img src="https://github.com/user-attachments/assets/b22c3c3e-70a0-4411-99a5-63bcf1a6fa5a" width="72" height="72" alt="Slaughter Protocol talent icon">

- **Operation**: Increase the Toughness amount a melee kill would normally restore by **25%**. With **no full Capacitance charges**, the increase becomes **50%**.
- **Recovery example**: If a melee kill normally restores **5** Toughness points, the normal bonus gives `5 × 1.25 = 6.25` points; at **0 charges**, `5 × 1.50 = 7.5` points.
- **Other bonuses**: With an existing **20%** Toughness recovery bonus at the same stage, the zero-charge result is `5 × (1 + 20% + 50%) = 8.5` points, capped at maximum Toughness.

[Details](cryptic_toughness_replenishment_on_kill_bonus.md) · [Back to index](#talent-index)

---

<a id="cryptic_next_hit_all_damage_on_dodge"></a>

### Precision Combat Augurs

<img src="https://github.com/user-attachments/assets/a18e19ec-6cad-4a2c-996b-6e7eddf47195" width="72" height="72" alt="Precision Combat Augurs talent icon">

- **Trigger**: Successfully dodging an enemy attack grants **15% Damage** to your next melee swing or shot.
- **Consumption**: The effect is consumed when the melee swing finishes or you fire, even if the attack misses. Repeated dodges cannot store multiple uses.
- **Damage example**: Base damage **100** becomes `100 × 1.15 = 115`. With an existing **25%** bonus at the same stage, `100 × (1 + 25% + 15%) = 140`.

[Details](cryptic_next_hit_all_damage_on_dodge.md) · [Back to index](#talent-index)

---

<a id="cryptic_electrocution_push"></a>

### Voltaic Burst

<img src="https://github.com/user-attachments/assets/80106b42-e788-43cb-a07a-ee69f668002f" width="72" height="72" alt="Voltaic Burst talent icon">

- **Trigger**: When a Push actually staggers an enemy, it applies **3 seconds** of Electrocution to that still-living target. Every qualifying target in the same Push can receive Electrocution.
- **Cooldown**: The **12-second** cooldown starts only after that Push finishes. A missed Push or one that does not stagger an enemy does not start the cooldown.
- **Timing example**: If the Push finishes at **0 seconds**, the next Push able to apply Electrocution is available no earlier than **12 seconds** later. Pushes during the cooldown still retain their ordinary effects.

[Details](cryptic_electrocution_push.md) · [Back to index](#talent-index)

---

<a id="cryptic_corruption_resistance_doom"></a>

### Ablative Wards

<img src="https://github.com/user-attachments/assets/1c4ea759-440c-48dd-bc21-3bc8303683d5" width="72" height="72" alt="Ablative Wards talent icon">

- **Defence**: Reduce ordinary incoming Corruption by **90%**. If otherwise identical conditions would add **10** Corruption, this resistance alone changes it to `10 × 0.10 = 1`.
- **Periodic cost**: Every **20 seconds**, incur a baseline **1 Corruption**. This cost already offsets the talent's own 90% resistance, so it must not be reduced again to 0.1.
- **Cost example**: With no other modifiers, remaining alive and requiring no assistance throughout, **60 seconds** produces **3** applications, adding **3 baseline Corruption**. Applications are skipped while in a help-required state, such as being downed or subdued.
- **Other effects**: Additional damage reduction, Corruption Resistance and other modifiers may still affect the actual cost. This talent does not remove accumulated Corruption.

[Details](cryptic_corruption_resistance_doom.md) · [Back to index](#talent-index)

---

<a id="cryptic_ranged_kills_tdr"></a>

### Threat Detection Imperative

<img src="https://github.com/user-attachments/assets/a2e228da-729a-4b03-b07a-72bfaadf5dc3" width="72" height="72" alt="Threat Detection Imperative talent icon">

- **Stacking**: A ranged kill grants **1 stack**, each providing **4% Toughness Damage Reduction**, up to **5 stacks**. Another trigger resets the **8-second** timer.
- **Decay**: Without further kills, lose one stack every **8 seconds**. Starting at **5 stacks**, after **8, 16, 24, 32 and 40 seconds**, the remaining counts are **4, 3, 2, 1 and 0**.
- **Reduction example**: **5 stacks** give **20%** total reduction. Incoming Toughness damage **100** becomes `100 × (1 − 5 × 4%) = 80`. With a separate **15%** reduction, `80 × 0.85 = 68` damage remains.

[Details](cryptic_ranged_kills_tdr.md) · [Back to index](#talent-index)
