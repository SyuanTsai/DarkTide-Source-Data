# Psyker talents: Release 1.13.X

[繁體中文](../README.md) | [Sources, formulas and technical index](SOURCE_INDEX.md) | [Talent classes](../../../README.en.md) | [Release information](../../../../README.md)

[Archetype base effects](BASE_EFFECTS.md)

Cooldown-aura progress adjustment and Assail homing turns use Release 1.13.2. Each detailed source document identifies its mechanism version. Original game text remains from 1.13.1 / Steam Build 25606770.

## Archetype base effects

These four pre-installed effects are separate from the 81 selectable nodes. Functional headings identify them without substituting other talent icons.

### Base Combat Ability

- Releases a forward shockwave that Staggers enemies and Quells 10 percentage points of Peril; base cooldown is 30 seconds.
- At an initial 60% Peril, 60% − 10 percentage points = 50%. Selecting Venting Shriek changes the reduction to 50 percentage points.

[Sources and limits](BASE_EFFECTS.md#psyker_combat_ability_shout)

### Base Blitz

- Charges an attack against one enemy. It is the base ability before Brain Rupture's upgrade and does not use Assail's ten throwable charges.
- You can charge before finding a target: a full base charge takes approximately 3 seconds; locking on before charging takes approximately 2 seconds. Without other modifiers, a full charge adds approximately 20 percentage points of Peril and a successful attack adds another 25, approximately 45 in total.
- Brain Rupture adds a 1.5 Damage multiplier. Under the same fixed conditions, if the base version deals 100, the upgraded version deals 100 × 1.5 = 150.

[Sources and limits](BASE_EFFECTS.md#psyker_grenade_smite)

### Base Aura

- Your and your Allies' Combat Ability cooldowns in Coherency are reduced by 7.5%; the same aura does not apply repeatedly.
- With only this effect, 40 seconds becomes 40 × (1 − 7.5%) = 37 seconds. When Seer's Presence replaces it with 10% reduction, the result is 36 seconds; the two bonuses cannot be added together.

[Sources and limits](BASE_EFFECTS.md#psyker_aura_ability_cooldown)

### Peril System

- Peril caps at 100%, with a high-Peril threshold of 97%. Generating Peril delays natural decay; after generation stops and you return to idle, wait approximately 3 seconds before natural decay begins.
- Three seconds is the waiting period, rather than the time needed to empty a 100% gauge. Decay rate depends on the Peril band, weapon and bonuses; you can also actively Quell Peril.
- Overload is not determined solely by reaching 100%. The immediate-generation path checks for an explosion when Peril is already at 100% and increases again; the continuous-cast path also checks current and starting Peril. Overload-prevention effects are handled separately.

#### English wording correction

- The English says generating Peril at Critical Peril (97%) or above causes the explosion. The verified generation paths use additional 100% and starting-Peril conditions, so being at 97% and generating Peril is not itself the stated explosion condition.

[Sources and limits](BASE_EFFECTS.md#psyker_peril_passive)

<a id="talent-index"></a>
## Talent index

| Talent | Main effect | Category |
|---|---|---|
| <img src="https://github.com/user-attachments/assets/2e792f27-7daf-4ce9-abcc-9d92ded0985c" width="32" height="32" alt="Kinetic Flayer talent icon"> [Kinetic Flayer](#psyker_smite_on_hit) | <ul><li>Hits on living Elites, Specialists or Monstrosities trigger Brain Rupture; 12-second cooldown.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/215cb557-8544-4d05-876a-871e70dc093a" width="32" height="32" alt="Brain Rupture talent icon"> [Brain Rupture](#psyker_brain_burst_improved) | <ul><li>Charge a single-target attack with 50% more damage than the base Blitz.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/a0c17626-2777-4302-bc7e-9b3a48aadcd0" width="32" height="32" alt="Assail talent icon"> [Assail](#psyker_grenade_throwing_knives) | <ul><li>Throw homing psychic shards, or aim to select a target; holds 10 uses and restores one every 3 seconds.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/ae86e2bb-6971-4dfe-b678-0aa814ccdfa1" width="32" height="32" alt="Ethereal Shards talent icon"> [Ethereal Shards](#psyker_throwing_knives_piercing) | <ul><li>Assail's damage and impact penetration capacities increase by 50%.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/981d6617-da53-4f4d-8c85-c2e64dddab43" width="32" height="32" alt="Smite talent icon"> [Smite](#psyker_grenade_chain_lightning) | <ul><li>Channel lightning into a target and nearby enemies; charging accelerates spread and damage buildup.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/6092228c-b394-42c6-831b-da4dc72024b9" width="32" height="32" alt="Kinetic Resonance talent icon"> [Kinetic Resonance](#psyker_ability_increase_brain_burst_speed) | <ul><li>For 10 seconds after using your Combat Ability, Brain Rupture charges 75% faster and generates 50% less Peril.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/7db7b0d7-3d96-4b42-8f50-f9112f80badc" width="32" height="32" alt="Quick Shards talent icon"> [Quick Shards](#psyker_throwing_knives_cast_speed) | <ul><li>Assail uses replenish 30% faster; base recovery per use falls from 3 seconds to about 2.31.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/0519f0ec-0ce9-4846-8ed4-95a0b9c092de" width="32" height="32" alt="Enfeeble talent icon"> [Enfeeble](#psyker_chain_lightning_improved_target_buff) | <ul><li>Enemies electrocuted by you take 10% more damage from all sources.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/e21d55d1-68fa-4d4d-a19b-2b6050753a7e" width="32" height="32" alt="Charged Strike talent icon"> [Charged Strike](#psyker_chain_lightning_heavy_attacks) | <ul><li>Melee heavy hits electrocute enemies for 2 seconds, dealing damage over that duration.</li></ul> | Blitz |
| <img src="https://github.com/user-attachments/assets/ddd7895f-a971-4cdf-99bd-3f536cab3f8a" width="32" height="32" alt="Kinetic Presence talent icon"> [Kinetic Presence](#psyker_aura_damage_vs_elites) | <ul><li>You and Allies in Coherency deal 10% more damage against Elite enemies.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/61a749ff-c64c-47a7-8607-e19b59a688b3" width="32" height="32" alt="Seer's Presence talent icon"> [Seer's Presence](#psyker_cooldown_aura_improved) | <ul><li>You and Allies in Coherency have 10% shorter Combat Ability cooldowns.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/44e929da-988f-4845-b68b-95320025d339" width="32" height="32" alt="Prescience talent icon"> [Prescience](#psyker_aura_crit_chance_aura) | <ul><li>You and Allies in Coherency gain 5 percentage points of Critical Hit Chance.</li></ul> | Aura |
| <img src="https://github.com/user-attachments/assets/d0500b6b-c91c-4c34-857a-6c144800fe37" width="32" height="32" alt="Venting Shriek talent icon"> [Venting Shriek](#psyker_shout_vent_warp_charge) | <ul><li>Staggers Enemies in front of you and immediately Quells 50 percentage points of Peril; base cooldown 30 seconds.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/a56d3b3f-6e4e-4aed-83fc-0317ac57364a" width="32" height="32" alt="Scrier's Gaze talent icon"> [Scrier's Gaze](#psyker_combat_ability_stance) | <ul><li>Quell 50 percentage points of Peril on activation; gain damage, Critical Chance, Weakspot Damage, Toughness protection/recovery and Suppression Immunity. Damage builds while active and lingers for 10 seconds.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/b89da8f0-2d3d-4a87-bc92-43e2438e28c8" width="32" height="32" alt="Becalming Eruption talent icon"> [Becalming Eruption](#psyker_shout_reduces_warp_charge_generation) | <ul><li>Venting Shriek hits grant Peril Generation reduction for 5 seconds, up to 25 stacks; in the 0.99-per-stack scenario, reductions multiply.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/8a145b7f-771a-42b6-a809-56650cd24f7e" width="32" height="32" alt="Warp Rupture talent icon"> [Warp Rupture](#psyker_discharge_damage_debuff) | <ul><li>Enemies hit by Venting Shriek deal 10% less damage and take 10% more damage for 8 seconds.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/65f7ef9b-5b0d-458e-bc7d-5aea8e948e14" width="32" height="32" alt="Creeping Flames talent icon"> [Creeping Flames](#psyker_warpfire_on_shout) | <ul><li>Venting Shriek applies 1–6 Soulblaze stacks based on Peril at activation; sleeping Daemonhosts are excluded.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/41b92eae-77a3-481e-af12-783845ce49c4" width="32" height="32" alt="Precognition talent icon"> [Precognition](#psyker_overcharge_weakspot_kill_bonuses) | <ul><li>During Scrier's Gaze, gain 1% Finesse Damage per second up to 30%, lingering 10 seconds. Weakspot Kills advance damage and Finesse Damage progress by one stack.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/f9987bfc-f9d7-48d8-9431-8c361223c50e" width="32" height="32" alt="Warp Speed talent icon"> [Warp Speed](#psyker_overcharge_increased_movement_speed) | <ul><li>Gain 20% Movement Speed while Scrier's Gaze is active; the bonus ends with Gaze.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/547fa734-789a-404c-9c48-aa1671d3605c" width="32" height="32" alt="Psykinetic's Aura talent icon"> [Psykinetic's Aura](#psyker_2_tier_3_name_2) | <ul><li>Your Elite or Specialist Kills grant an extra 0.5 seconds of Combat Ability cooldown recovery about once per second for 3 seconds; triggering again refreshes the duration.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/123c7e4e-3844-4ff0-94c0-5cf7f7772b8f" width="32" height="32" alt="Reality Anchor talent icon"> [Reality Anchor](#psyker_overcharge_reduced_warp_charge) | <ul><li>While Scrier's Gaze is active, generate 20% less Peril and shorten the time to Quell the same amount by 30%.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/e328d953-886b-4527-9c23-e8bfc90ada6f" width="32" height="32" alt="Telekine Shield talent icon"> [Telekine Shield](#psyker_combat_ability_force_field) | <ul><li>Deploy a forward shield that blocks Enemy Ranged Attacks while you and Allies can shoot through. Maximum duration 17.5 seconds; base cooldown 40 seconds.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/72b10287-7ce1-47a1-a57f-a88c56c51f9f" width="32" height="32" alt="Bolstered Shield talent icon"> [Bolstered Shield](#psyker_shield_extra_charge) | <ul><li>Telekine Shield gains one extra charge, holding up to 2; charges share the same cooldown-resource pool.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/57b73353-bc2c-4313-b488-cb9a1ac7c9f0" width="32" height="32" alt="Sanctuary talent icon"> [Sanctuary](#psyker_boost_allies_in_sphere) | <ul><li>With Telekine Dome, you and Allies inside recover 10% of maximum Toughness per second. Players still inside when it dissipates gain 50% Toughness Damage Reduction for 5 seconds.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/60e6d4b2-0696-4215-8afd-8c9725d4801f" width="32" height="32" alt="Telekine Dome talent icon"> [Telekine Dome](#psyker_sphere_shield) | <ul><li>Telekine Shield becomes a spherical barrier of about 6 metres radius, lasting up to 25 seconds with a 60-second base cooldown; durability remains 20 accepted hits.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/0cacb110-bf24-451f-ad19-f55ee7bd6191" width="32" height="32" alt="Enervating Threshold talent icon"> [Enervating Threshold](#psyker_shield_stun_passive) | <ul><li>Enemies passing through your Telekine Shield have a 20% Electrocution chance. Specialists and Monsters trigger with 100% chance; Specialists also damage the shield.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/810110f9-a360-4a69-8754-0e3502a0bef8" width="32" height="32" alt="Warp Unbound talent icon"> [Warp Unbound](#psyker_overcharge_stance_infinite_casting) | <ul><li>After Scrier's Gaze ends, gain protection from Peril overload for 11.5 seconds; Peril continues to accumulate normally.</li></ul> | Ability |
| <img src="https://github.com/user-attachments/assets/07eff6fd-5c1a-49f2-8a72-d689ec6bb42e" width="32" height="32" alt="Warp Siphon talent icon"> [Warp Siphon](#psyker_passive_souls_from_elite_kills) | <ul><li>Personal Elite or Specialist kills grant Warp Charges: +4% Damage per charge, with all charges spent by a Combat Ability to restore 7.5% of one charge's cooldown per Warp Charge.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/885fdda1-bcf2-4502-97e0-7eaead2392e0" width="32" height="32" alt="Disrupt Destiny talent icon"> [Disrupt Destiny](#psyker_new_mark_passive) | <ul><li>Personal Marked Enemy kills grant Precision: per stack, +1% Damage, +2% Critical Damage and +2.5% Weakspot Damage; also restore 25% Toughness over 2.5 seconds and grant +20% Movement Speed for 2.5 seconds.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/d3625057-f314-491b-8a34-84789ec38342" width="32" height="32" alt="Empowered Psionics talent icon"> [Empowered Psionics](#psyker_empowered_ability) | <ul><li>Kills have a 10% chance to empower the next Blitz; base storage is one. Empowered Brain Rupture and Smite gain Damage, while Assail avoids Peril and Blitz-stock payment and gains Damage/cleave.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/333bcafc-3c34-4b47-bb5b-658c9cd2b777" width="32" height="32" alt="Inner Tranquility talent icon"> [Inner Tranquility](#psyker_reduced_warp_charge_cost_and_venting_speed) | <ul><li>Each Warp Charge reduces Peril Generation by 8%; four charges give 32% reduction, or 48% at six with Warp Battery.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/00ae8b19-169d-4eec-94e2-89c3cf851d08" width="32" height="32" alt="Essence Harvest talent icon"> [Essence Harvest](#psyker_toughness_on_soul) | <ul><li>Gaining a Warp Charge restores 30% of maximum Toughness over five seconds; further gains refresh the duration without stacking the restoration rate.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/827d3ef0-dce8-4cb8-8af1-c5ad142d4ec1" width="32" height="32" alt="Bio-Lodestone talent icon"> [Bio-Lodestone](#psyker_empowered_grenades_passive_improved) | <ul><li>Raises the chance of gaining empowerment on a kill from 10% to 15%; the storage cap remains unchanged.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/38c99293-d836-4a4e-91fb-1f6a65a848f8" width="32" height="32" alt="Psychic Leeching talent icon"> [Psychic Leeching](#psyker_empowered_chain_lightnings_replenish_toughness_to_allies) | <ul><li>Using an empowered Blitz restores 20% of maximum Toughness to you and Allies in Coherency; restoration timing depends on the Blitz.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/6312d53d-fec2-44c3-b04e-778d2e74e232" width="32" height="32" alt="Overpowering Souls talent icon"> [Overpowering Souls](#psyker_empowered_ability_on_elite_kills) | <ul><li>Elite kills guarantee one empowerment stack, subject to the storage cap; Specialist and ordinary kills retain their existing gain chance.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/d2ef8713-7c0b-4dec-b13a-7f9e6a294435" width="32" height="32" alt="Perfectionism talent icon"> [Perfectionism](#psyker_mark_increased_max_stacks) | <ul><li>Raises Disrupt Destiny's Precision cap from 15 to 25 stacks; per-stack effects and five-second one-stack decay remain unchanged. Choose either this or Lingering Influence.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/06e543d8-85dd-455b-8ac2-3f9f29b03cf1" width="32" height="32" alt="Purloin Providence talent icon"> [Purloin Providence](#psyker_mark_kills_can_vent) | <ul><li>Personally killing Disrupt Destiny's current Marked Enemy Quells five percentage points of Peril.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/d2b37d6f-6054-462c-ba12-5583c59bceb8" width="32" height="32" alt="Lingering Influence talent icon"> [Lingering Influence](#psyker_mark_increased_duration) | <ul><li>Extends Disrupt Destiny's Precision timer before each one-stack decay from five to ten seconds; choose either this or Perfectionism.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/1918d789-dd64-401d-b985-c99915053691" width="32" height="32" alt="Charged Up talent icon"> [Charged Up](#psyker_empowered_grenades_increased_max_stacks) | <ul><li>Raises Empowered Psionics storage from one to three stacks; each empowered Blitz still spends one, with unchanged per-use strength.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/f42fce6a-aab7-4622-a8b9-bd171fba4b33" width="32" height="32" alt="In Fire Reborn talent icon"> [In Fire Reborn](#psyker_warpfire_generate_souls) | <ul><li>A qualifying death with Soulblaze present, or caused by your Soulblaze, has a 10% chance to grant one Warp Charge; choose either this or Psychic Vampire.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/36248d6b-7838-4004-86e5-645956cb8392" width="32" height="32" alt="Psychic Vampire talent icon"> [Psychic Vampire](#psyker_aura_souls_on_kill) | <ul><li>You or an Ally in Coherency killing an enemy gives you a 4% chance to gain one Warp Charge; choose either this or In Fire Reborn.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/47c3ad89-c6a0-4c8c-a452-b8af3e859043" width="32" height="32" alt="Warp Battery talent icon"> [Warp Battery](#psyker_increased_max_souls) | <ul><li>Raises Warp Charge storage from four to six; Damage and cooldown restoration per charge remain unchanged.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/a3deac9c-bddd-441f-a916-e41eecf9b23e" width="32" height="32" alt="Cruel Fortune talent icon"> [Cruel Fortune](#psyker_mark_weakspot_kills) | <ul><li>Personally killing Disrupt Destiny's current Marked Enemy with a Weakspot hit grants two extra Precision stacks, three in total, subject to the cap.</li></ul> | Keystone |
| <img src="https://github.com/user-attachments/assets/800b3bd1-a9a6-48ba-961c-66e12b256f37" width="32" height="32" alt="Soulstealer talent icon"> [Soulstealer](#psyker_toughness_on_warp_kill) | <ul><li>A Warp Attack Kill restores 7.5% of maximum Toughness, subject to restoration modifiers and missing Toughness.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/12e587e5-b69a-49cd-8d0f-a8280b832197" width="32" height="32" alt="Quietude talent icon"> [Quietude](#psyker_toughness_on_vent) | <ul><li>Both Peril Generation and Quelling restore Toughness: 4% of maximum Toughness per ten percentage points of actual Peril change.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/cb5dcadd-924f-442d-a21f-cb8f873b182d" width="32" height="32" alt="Warp Expenditure talent icon"> [Warp Expenditure](#psyker_toughness_on_melee) | <ul><li>First melee target hit: restore 2.5% maximum Toughness. Melee Weakspot Kill: restore 15% over 3s instead; refreshes without increasing the rate.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/53013aa9-f833-431c-8b85-3e548dbc318c" width="32" height="32" alt="Mettle talent icon"> [Mettle](#psyker_crits_regen_toughness_movement_speed) | <ul><li>Critical Hits restore 10% maximum Toughness over 4s and grant +5% Movement Speed, up to 3 stacks. Toughness restoration rate does not multiply with stacks.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/6cc7512d-8e6f-4261-88f3-c95089950934" width="32" height="32" alt="Perilous Combustion talent icon"> [Perilous Combustion](#psyker_elite_kills_add_warpfire) | <ul><li>Elite or Specialist Kill: apply 2 Soulblaze stacks to enemies within 4m of the victim. Sleeping Daemonhosts are excluded.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/69bdf081-b37e-479b-a157-f6e047efcfda" width="32" height="32" alt="Battle Meditation talent icon"> [Battle Meditation](#psyker_chance_to_vent_on_kill) | <ul><li>−10% Peril Generation. Each Kill has a 10% chance to remove 10 percentage points of Peril.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/3c19e5ea-ccab-46a3-9763-c8d4075c6332" width="32" height="32" alt="Perfect Timing talent icon"> [Perfect Timing](#psyker_crits_empower_next_attack) | <ul><li>Critical Hit: gain +3% Damage for 10s, up to 5 stacks (+15%); retriggering refreshes duration.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/1e6189fe-4a6e-4fda-bbe9-e2a38c75ff2a" width="32" height="32" alt="Wildfire talent icon"> [Wildfire](#psyker_spread_warpfire_on_kill) | <ul><li>When an enemy affected by your Soulblaze dies, distribute up to 4 shared stacks among enemies within 5m. Soulblaze need not deliver the final hit.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/86748037-d25a-449c-881a-b80060374012" width="32" height="32" alt="Mind in Motion talent icon"> [Mind in Motion](#psyker_venting_improvements) | <ul><li>+5% Movement Speed; removes Quelling and Reloading movement penalties. Other slowing sources still apply.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/cc72c2ff-3d22-42e0-be1d-69a9f4d7cb22" width="32" height="32" alt="Malefic Momentum talent icon"> [Malefic Momentum](#psyker_kills_stack_other_weapon_damage) | <ul><li>Non-Warp Kill: +5% Warp Damage. Warp Kill: +5% non-Warp Damage. Each group lasts 10s and stacks separately up to 5 times.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/68726dca-2cf0-40d6-bfe6-eccecc659446" width="32" height="32" alt="One with the Warp talent icon"> [One with the Warp](#psyker_warp_charge_reduces_toughness_damage_taken) | <ul><li>Toughness Damage Reduction scales linearly with current Peril: 10% at 0% Peril, 33% at 100%. Does not reduce Health Damage.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/80b2261c-4df6-4531-b9c1-bf67fbbbdcee" width="32" height="32" alt="Anticipation talent icon"> [Anticipation](#psyker_improved_dodge) | <ul><li>+1 Effective Dodge and +50% dodge protection linger time; the entire dodge animation is not extended by 50%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/946f549a-ed56-4711-aee8-39ce35a0a6b1" width="32" height="32" alt="Empathic Evasion talent icon"> [Empathic Evasion](#psyker_dodge_after_crits) | <ul><li>Critical Hit: count as Dodging against Ranged Attacks for 1s; triggering it again resets the timer.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/86582600-a30d-4e5a-b87b-ae33b2e78746" width="32" height="32" alt="Solidity talent icon"> [Solidity](#psyker_increased_vent_speed) | <ul><li>Active Quelling time and interval ×0.7: 30% shorter time, equivalent to approximately 42.9% higher processing rate.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/8f79e11c-ea7c-4e52-957b-007bd85bcf1b" width="32" height="32" alt="Warp Rider talent icon"> [Warp Rider](#psyker_damage_based_on_warp_charge) | <ul><li>Damage bonus scales linearly with current Peril: +0% / +10% / +20% at 0% / 50% / 100% Peril.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/4b242d12-87d5-44a8-a2aa-4c1a0f3a2376" width="32" height="32" alt="True Aim talent icon"> [True Aim](#psyker_guaranteed_crit_on_multiple_weakspot_hits) | <ul><li>After 5 valid damaging Weakspot Hits, the next Ranged Attack is guaranteed Critical; repeat hits and cleaved later targets are restricted.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/1561e519-2633-4a6f-af9f-fffe6a6c8a03" width="32" height="32" alt="Puppet Master talent icon"> [Puppet Master](#psyker_coherency_aura_size_increase) | <ul><li>Coherency Aura radius +75%, giving 1.75 times the original radius with other modifiers unchanged.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/e56e3649-507c-4ebb-94fc-58f7eff77aee" width="32" height="32" alt="Kinetic Deflection talent icon"> [Kinetic Deflection](#psyker_block_costs_warp_charge) | <ul><li>Below 97% Peril, Blocking converts Stamina cost to Peril at 25% of the cost's fraction of maximum Stamina; overflow is paid with Stamina.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/3d86850d-c891-443c-8f80-2f01ad34bdff" width="32" height="32" alt="Toughness Boost talent icon"> [Toughness Boost](#base_toughness_node_buff_medium_5) | <ul><li>+15 maximum Toughness.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/92db3e61-eb2d-4af5-b9a7-3a1bab73234a" width="32" height="32" alt="Toughness Boost talent icon"> [Toughness Boost](#base_toughness_node_buff_medium_4) | <ul><li>+15 maximum Toughness.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/57a54ed7-4f34-449f-9f2d-eb401a97b51a" width="32" height="32" alt="Toughness Damage Reduction talent icon"> [Toughness Damage Reduction](#base_toughness_damage_reduction_node_buff_medium_1) | <ul><li>10% Toughness Damage Reduction in this additive stage; no Health Damage reduction.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/ac3d53fd-1b36-40d7-8ee1-275804b29c63" width="32" height="32" alt="Lightning Speed talent icon"> [Lightning Speed](#psyker_melee_attack_speed) | <ul><li>+10% Melee Attack Speed; affected action segments take time ÷1.1 with no other speed bonuses.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/c8b43c74-3790-440f-8610-db321e11da83" width="32" height="32" alt="Warp Splitting talent icon"> [Warp Splitting](#psyker_cleave_from_peril) | <ul><li>Peril increases damage Cleave capacity by up to 100%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/444fd0d1-2a66-48f9-b841-f7bf1bcc6ccf" width="32" height="32" alt="Souldrinker talent icon"> [Souldrinker](#psyker_killing_enemy_with_warpfire_boosts) | <ul><li>A Soulblaze-related enemy death restores 15% maximum Toughness over 5 seconds and grants +5 percentage points Critical Hit Chance.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/efceab94-6c34-43bc-a8ed-6d06fbf269b1" width="32" height="32" alt="By Crack of Bone talent icon"> [By Crack of Bone](#psyker_melee_weaving) | <ul><li>Melee Weakspot Kills remove 10 percentage points of Peril and reduce Peril generation by 20% for 4 seconds.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/f3235e60-41ff-4e15-81eb-172af5ec1f2e" width="32" height="32" alt="Vulnerable Minds talent icon"> [Vulnerable Minds](#psyker_damage_vs_ogryns_and_monsters) | <ul><li>+20% Damage against Ogryns and Monstrosities.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/eeeb7b3b-f3bc-4509-b50f-edc7787cb0e7" width="32" height="32" alt="Focused Warp talent icon"> [Focused Warp](#psyker_increased_warp_damage) | <ul><li>+15% Damage on Warp Attacks.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/c84a6cc0-5f99-4eee-a394-9b234a1fa5dd" width="32" height="32" alt="Peril Equilibrium talent icon"> [Peril Equilibrium](#psyker_weapon_attacks_peril_equilibrium) | <ul><li>Damaging non-Warp melee or ranged hits add 2 percentage points of Peril, up to 75%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/5bac250d-4cc2-48b2-9832-8408652cec12" width="32" height="32" alt="Surety of Arms talent icon"> [Surety of Arms](#psyker_reload_speed_warp_charge) | <ul><li>+30% Reload Speed at Peril ≤80%; eligible completed reloads generate up to 15 percentage points of Peril according to the clip fraction restored.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/6b51b11f-eed5-45f3-b539-6b4502778099" width="32" height="32" alt="Crystalline Will talent icon"> [Crystalline Will](#psyker_alternative_peril_explosion) | <ul><li>+100% Overload Explosion Damage and +25% radius; ordinarily lose one Wound afterward, waived if the explosion kills an Elite.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/a3ca9930-1aef-4718-9463-1b5da02a5b6b" width="32" height="32" alt="Channeled Force talent icon"> [Channeled Force](#psyker_force_staff_bonus) | <ul><li>Finishing a staff charge above 95% grants +20% Primary Damage for 5 seconds; finishing a Primary action grants +10% Secondary Damage for 5 seconds.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/f556046f-b193-4776-963d-798307d2c36a" width="32" height="32" alt="Empyric Shock talent icon"> [Empyric Shock](#psyker_force_staff_quick_attack_bonus) | <ul><li>Force Staff Primary hits apply +6% Warp Damage Taken per multiplicative stack, up to 5 stacks for 10 seconds.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/b3086f22-3f24-417f-aaba-f59714897616" width="32" height="32" alt="Just a Dream talent icon"> [Just a Dream](#psyker_damage_to_peril_conversion) | <ul><li>Below 97% Peril, take 25% less Damage and gain 0.25 percentage points of Peril per reported Health/Toughness Damage point, capped at 97%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/288f8a4c-fee3-4e56-8e0b-b2419e2a115b" width="32" height="32" alt="Immaterial Focus talent icon"> [Immaterial Focus](#psyker_damage_resistance_stun_immunity) | <ul><li>10% Damage reduction; Stun Immunity at Peril ≥97% and for 4 seconds after dropping below it.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/49c99b4c-1fdc-4355-900d-2e4b4c733ba8" width="32" height="32" alt="Empyric Resolve talent icon"> [Empyric Resolve](#psyker_warp_glass_cannon) | <ul><li>40% less Peril generation; 30% less Toughness restored by effects subject to the restoration modifier.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/57acd7a3-65a7-460c-876c-3153b63d69a3" width="32" height="32" alt="Warp Ghost talent icon"> [Warp Ghost](#psyker_stat_mix) | <ul><li>+2 Stamina and +25% Toughness restoration; natural Peril decay is 80% slower in affected bands.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/790d837c-239d-4d45-b4e8-c3c039df63ba" width="32" height="32" alt="Penetration of the Soul talent icon"> [Penetration of the Soul](#psyker_warp_attacks_rending) | <ul><li>Warp Attacks gain Rending linearly with Peril: 10% at 50% Peril, 20% at 100%.</li></ul> | Talent |
| <img src="https://github.com/user-attachments/assets/e66044cc-0b83-4f85-86ff-84661f076941" width="32" height="32" alt="Psykinetic Grip talent icon"> [Psykinetic Grip](#psyker_increased_blitz_damage) | <ul><li>+20% Damage for Brain Rupture, Smite and Assail.</li></ul> | Talent |

---

<a id="psyker_smite_on_hit"></a>

### Kinetic Flayer

<img src="https://github.com/user-attachments/assets/2e792f27-7daf-4ce9-abcc-9d92ded0985c" width="72" height="72" alt="Kinetic Flayer talent icon">

- **Trigger**: A damaging hit against an Elite, Specialist or Monstrosity triggers Brain Rupture when the target remains alive and the talent is off cooldown. Bombers and scenery objects are excluded.

- **Cooldown example**: After triggering at second 0, a hit at second 11 cannot trigger it again. The next qualifying hit after the 12-second cooldown ends triggers it.

[Details](psyker_smite_on_hit.md) · [Back to index](#talent-index)

---

<a id="psyker_brain_burst_improved"></a>

### Brain Rupture

<img src="https://github.com/user-attachments/assets/215cb557-8544-4d05-876a-871e70dc093a" width="72" height="72" alt="Brain Rupture talent icon">

- **How it works**: Charge psychic power to attack one enemy, dealing 50% more damage than the original base Blitz.

- **Charging modes**: You can charge before finding a target, reaching full charge in about 3 seconds. Locking a target before charging reaches full charge in about 2 seconds; you may move the crosshair away after locking. Charge-speed bonuses affect these times.

- **Peril example**: Without other modifiers, either mode adds about 20 percentage points of Peril while charging fully; a successful attack adds another 25 points, totaling about 20 + 25 = 45 points. Holding full charge adds about 9 points per additional second.

- **Damage example**: With the same target, charge level and other bonuses, an attack dealing 100 damage becomes 100 × 1.5 = 150. This illustrates the multiplier; actual damage varies with armour and attack conditions.

[Details](psyker_brain_burst_improved.md) · [Back to index](#talent-index)

---

<a id="psyker_grenade_throwing_knives"></a>

### Assail

<img src="https://github.com/user-attachments/assets/a0c17626-2777-4302-bc7e-9b3a48aadcd0" width="72" height="72" alt="Assail talent icon">

- **How it works**: Throw psychic shards that home on targets. Aiming lets you choose an enemy and increases projectile speed.

- **Uses and recovery**: Holds up to 10 uses; each throw consumes one, with a base recovery of one use every 3 seconds. Uses share recovery progress and replenish sequentially.

- **Recovery example**: With no other recovery modifiers, starting at 0 uses with no remaining progress, one use returns at second 3 and two at second 6; filling all 10 takes 3 × 10 = 30 seconds.

- **Damage limits**: Hit location, target armour and penetration order affect damage; later penetrated targets cannot simply use the first enemy's damage.

- **Peril cost**: A normal throw adds 10 percentage points of Peril; an aimed throw adds 25. For example, an existing 40% becomes 50% or 65% respectively. Other Peril-generation modifiers apply separately.

- **Homing turns**: Both normal and aimed shards adjust their flight speed while they are not yet aligned with the target. Each adjustment stops at the configured turning speed instead of overshooting during a large turn or delayed update.

[Details](psyker_grenade_throwing_knives.md) · [Back to index](#talent-index)

---

<a id="psyker_throwing_knives_piercing"></a>

### Ethereal Shards

<img src="https://github.com/user-attachments/assets/ae86e2bb-6971-4dfe-b678-0aa814ccdfa1" width="72" height="72" alt="Ethereal Shards talent icon">

- **How it works**: Assail's damage and impact penetration capacities increase by 50%, letting it pass through more enemies.

- **Penetration example**: With no other penetration modifiers, a capacity of 2 mass units becomes 2 × 1.5 = 3 mass units. Enemy masses vary, so this does not guarantee one additional enemy hit.

[Details](psyker_throwing_knives_piercing.md) · [Back to index](#talent-index)

---

<a id="psyker_grenade_chain_lightning"></a>

### Smite

<img src="https://github.com/user-attachments/assets/981d6617-da53-4f4d-8c85-c2e64dddab43" width="72" height="72" alt="Smite talent icon">

- **How it works**: Channel psychic lightning, electrocuting a target and spreading to nearby enemies. Whether enemies remain staggered depends on their resistance and actions. Charged casting accelerates propagation and damage buildup.

- **Spread**: Subsequent propagation reaches 5 + 1 = 6 metres. Quick casting starts with at most one jump and increases to 2, 3 and 4 jumps at 1.2, 1.8 and 2.7 seconds. Charged casting reaches those same limits at 0.4, 0.6 and 0.9 seconds. Enemy positions and line of sight still limit actual numbers.

- **Sustained damage**: Electrocution deals damage at random intervals of 0.1–0.3 seconds. Quick casting takes about 5 seconds to reach maximum intensity; charged casting takes about 2. Targets with greater resistance to penetration start taking damage later. Final damage also depends on enemy armour and bonuses.

- **Peril example**: Without other modifiers, quick casting adds about 0.75 Peril percentage points during its first 0.1 seconds, then about 22.5 points per second. Maintaining it for 0.35 seconds adds about 0.75 + 22.5 × 0.25 = 6.375 points. Completing the 0.8-second preparatory charge phase adds about 5 points during that phase.

[Details](psyker_grenade_chain_lightning.md) · [Back to index](#talent-index)

---

<a id="psyker_ability_increase_brain_burst_speed"></a>

### Kinetic Resonance

<img src="https://github.com/user-attachments/assets/6092228c-b394-42c6-831b-da4dc72024b9" width="72" height="72" alt="Kinetic Resonance talent icon">

- **How it works**: For 10 seconds after using your Combat Ability, Brain Rupture's charge speed increases by 75% and its generated Peril decreases by 50%.

- **Charging example**: With an original 2-second charge and no other bonuses, 2 ÷ 1.75 ≈ 1.14 seconds. An original 10 Peril percentage points becomes 10 × 0.5 = 5 points.

[Details](psyker_ability_increase_brain_burst_speed.md) · [Back to index](#talent-index)

---

<a id="psyker_throwing_knives_cast_speed"></a>

### Quick Shards

<img src="https://github.com/user-attachments/assets/7db7b0d7-3d96-4b42-8f50-f9112f80badc" width="72" height="72" alt="Quick Shards talent icon">

- **How it works**: Assail's use-recovery rate increases by 30%.

- **Recovery example**: With only this talent, the original 3 seconds per use becomes 3 ÷ 1.3 ≈ 2.31 seconds. Refilling 10 uses from empty takes about 30 ÷ 1.3 ≈ 23.08 seconds. A 30% faster recovery rate does not mean a 30% shorter wait.

[Details](psyker_throwing_knives_cast_speed.md) · [Back to index](#talent-index)

---

<a id="psyker_chain_lightning_improved_target_buff"></a>

### Enfeeble

<img src="https://github.com/user-attachments/assets/0519f0ec-0ce9-4846-8ed4-95a0b9c092de" width="72" height="72" alt="Enfeeble talent icon">

- **How it works**: Enemies electrocuted by your Smite take 10% more damage; teammates' attacks also benefit. With Charged Strike, electrocution applied by melee heavy attacks has the same effect.

- **Damage example**: Isolating this target damage-taken multiplier with all other conditions equal, original damage of 100 becomes 100 × 1.1 = 110. The bonus ends when the electrocution effect is removed.

[Details](psyker_chain_lightning_improved_target_buff.md) · [Back to index](#talent-index)

---

<a id="psyker_chain_lightning_heavy_attacks"></a>

### Charged Strike

<img src="https://github.com/user-attachments/assets/e21d55d1-68fa-4d4d-a19b-2b6050753a7e" width="72" height="72" alt="Charged Strike talent icon">

- **Trigger**: After a melee heavy attack hits an enemy, it electrocutes that target for 2 seconds and deals damage over that duration.

- **With Enfeeble**: This 2-second electrocution also increases the target's damage taken by 10%. Isolating that damage-taken multiplier, original damage of 100 becomes 100 × 1.1 = 110.

[Details](psyker_chain_lightning_heavy_attacks.md) · [Back to index](#talent-index)

---

<a id="psyker_aura_damage_vs_elites"></a>

### Kinetic Presence

<img src="https://github.com/user-attachments/assets/ddd7895f-a971-4cdf-99bd-3f536cab3f8a" width="72" height="72" alt="Kinetic Presence talent icon">

- **Aura**: You and teammates in Coherency deal 10% more damage against Elite enemies. The same aura does not stack multiple times.

- **Damage example**: Isolating this stage with a baseline of 100 and no other bonuses, 100 × 1.1 = 110. With an existing 25% bonus at the same stage, damage rises from 125 to 100 × (1 + 25% + 10%) = 135. Non-Elite enemies do not receive this bonus.

[Details](psyker_aura_damage_vs_elites.md) · [Back to index](#talent-index)

---

<a id="psyker_cooldown_aura_improved"></a>

### Seer's Presence

<img src="https://github.com/user-attachments/assets/61a749ff-c64c-47a7-8607-e19b59a688b3" width="72" height="72" alt="Seer's Presence talent icon">

- **Aura**: You and teammates in Coherency have 10% shorter Combat Ability cooldowns. The same aura does not stack multiple times.

- **Cooldown example**: With fixed recovery speed and no other modifiers, an original 40 seconds becomes 40 × (1 − 10%) = 36 seconds; an original 60 seconds becomes 54.

- **Entering or leaving the aura**: For charge-based Combat Abilities with an unchanged maximum charge count, gaining or losing a cooldown aura preserves the existing recovery proportion. For one charge with an original 40-second cooldown and 50% recovered, gaining the 10% aura changes the full cooldown to 36 seconds while keeping 50% progress: 36 × (1 − 50%) = 18 seconds remain, assuming fixed regeneration speed and no other effects.

[Details](psyker_cooldown_aura_improved.md) · [Back to index](#talent-index)

---

<a id="psyker_aura_crit_chance_aura"></a>

### Prescience

<img src="https://github.com/user-attachments/assets/44e929da-988f-4845-b68b-95320025d339" width="72" height="72" alt="Prescience talent icon">

- **Aura**: You and teammates in Coherency gain 5 percentage points of Critical Hit Chance. The same aura does not stack multiple times.

- **Chance example**: An original 10% Critical Hit Chance becomes 10% + 5% = 15%, rather than 10% × 1.05 = 10.5%.

[Details](psyker_aura_crit_chance_aura.md) · [Back to index](#talent-index)

---

<a id="psyker_shout_vent_warp_charge"></a>

### Venting Shriek

<img src="https://github.com/user-attachments/assets/d0500b6b-c91c-4c34-857a-6c144800fe37" width="72" height="72" alt="Venting Shriek talent icon">

- **Ability**: Unleash a wave of warp energy that Staggers Enemies in front of you and immediately Quells 50 percentage points of Peril. Base cooldown: 30 seconds.

- **Peril examples**: With no other simultaneous Peril changes, 80% Peril becomes 80% − 50 percentage points = 30%. At 40% Peril, subtracting 50 percentage points reaches the lower limit of 0%.

[Details](psyker_shout_vent_warp_charge.md) · [Back to index](#talent-index)

---

<a id="psyker_combat_ability_stance"></a>

### Scrier's Gaze

<img src="https://github.com/user-attachments/assets/a56d3b3f-6e4e-4aed-83fc-0317ac57364a" width="72" height="72" alt="Scrier's Gaze talent icon">

- **Ability**: Activating Scrier's Gaze Quells 50 percentage points of Peril. While active, gain +10% Damage, 20 percentage points of Critical Chance, +10% Weakspot Damage, 20% Toughness Damage Reduction and Suppression Immunity.
- Gain another 1% Damage per second, up to +30%, and recover 2.5% of maximum Toughness per second. Peril builds while active; enemy Kills briefly slow its accumulation. At 100% Peril, Gaze ends, and the accumulated damage bonus remains for 10 seconds.
- **Damage example**: With no other bonuses, a non-Critical, non-Weakspot hit of 100 becomes `100 × (1 + 10% + 30%) = 140` at full stacks. After Gaze ends, only the accumulated 30% remains, giving 130.
- **Weakspot example**: Isolating the Weakspot Damage bonus, assume base damage 100 and extra Weakspot damage 50. The original 150 becomes `100 + 50 × 1.10 = 155`, about a 3.33% increase for the whole hit. Gaze's other damage bonuses are calculated separately.
- **Recovery and chance examples**: At 100 maximum Toughness, recover `100 × 2.5% = 2.5` per second, capped by missing Toughness. An original 5% Critical Chance becomes `5% + 20 percentage points = 25%`.
- Base cooldown: 25 seconds. Cooldown recovery pauses while the active Gaze buff exists and resumes after it ends, without other cooldown modifiers.

**Note on the Chinese wording**: The Chinese description says entering/leaving Gaze's “area,” which may suggest a ground zone. The corresponding English and accepted implementation describe the character entering and ending the Gaze state.

[Details](psyker_combat_ability_stance.md) · [Back to index](#talent-index)

---

<a id="psyker_shout_reduces_warp_charge_generation"></a>

### Becalming Eruption

<img src="https://github.com/user-attachments/assets/b89da8f0-2d3d-4a87-bc92-43e2438e28c8" width="72" height="72" alt="Becalming Eruption talent icon">

- **Ability modifier**: Each Enemy hit by Venting Shriek grants one stack of Peril Generation reduction for 5 seconds, up to 25 stacks.
- **Stack examples**: Using the accepted 0.99 coefficient per stack and no other Peril Generation modifiers, 10 eligible hits give `0.99^10 ≈ 0.9044`: about 90.44% of original generation, or 9.56% less. A gain of 10 Peril percentage points becomes `10 × 0.99^10 ≈ 9.04` points. At 25 stacks, `0.99^25 ≈ 0.7778`: about 77.78% of original generation, or 22.22% less; a gain of 10 points becomes about 7.78 points.
- This reduces new Peril Generation; it does not directly Quell existing Peril. The source also contains a 0.98 tier override. The examples use 0.99 and cannot be applied unchanged to a different tier/configuration.

[Details](psyker_shout_reduces_warp_charge_generation.md) · [Back to index](#talent-index)

---

<a id="psyker_discharge_damage_debuff"></a>

### Warp Rupture

<img src="https://github.com/user-attachments/assets/8a145b7f-771a-42b6-a809-56650cd24f7e" width="72" height="72" alt="Warp Rupture talent icon">

- **Ability modifier**: Enemies hit by Venting Shriek deal 10% less damage and take 10% more damage for 8 seconds.

- **Damage example**: With no other bonuses, an Enemy originally dealing 100 damage now deals `100 × 0.9 = 90`; originally taking 100 damage, it now takes `100 × 1.1 = 110`.

[Details](psyker_discharge_damage_debuff.md) · [Back to index](#talent-index)

---

<a id="psyker_warpfire_on_shout"></a>

### Creeping Flames

<img src="https://github.com/user-attachments/assets/65f7ef9b-5b0d-458e-bc7d-5aea8e948e14" width="72" height="72" alt="Creeping Flames talent icon">

- **Ability modifier**: Based on your Peril before casting Venting Shriek, apply 1–6 stacks of Soulblaze to hit Enemies. Sleeping Daemonhosts are not ignited by this effect.

- **Stack examples**: Multiply the Peril proportion by 6 and round up, with a minimum of 1 and maximum of 6 stacks. At 50%, `0.50 × 6 = 3` stacks; at 80%, `0.80 × 6 = 4.8` rounds up to 5. Even 0% Peril applies 1 stack.

[Details](psyker_warpfire_on_shout.md) · [Back to index](#talent-index)

---

<a id="psyker_overcharge_weakspot_kill_bonuses"></a>

### Precognition

<img src="https://github.com/user-attachments/assets/41b92eae-77a3-481e-af12-783845ce49c4" width="72" height="72" alt="Precognition talent icon">

- **Ability modifier**: During Scrier's Gaze, also gain 1% Finesse Damage each second, up to 30%, remaining for 10 seconds after it ends. Weakspot Kills add one stack of progress to both damage and Finesse Damage.

- **Stack example**: At 8 accumulated Gaze stacks, a Weakspot Kill gives `8 + 1 = 9` stacks. It does not extend the actual duration of Gaze.

- **Damage example**: Finesse Damage affects the extra Weakspot or Critical damage. Isolating a 30% Finesse bonus, assume base damage 100 and extra damage 50. The original 150 becomes `100 + 50 × 1.30 = 165`, a 10% increase for the whole hit; Gaze's other bonuses are calculated separately.

[Details](psyker_overcharge_weakspot_kill_bonuses.md) · [Back to index](#talent-index)

---

<a id="psyker_overcharge_increased_movement_speed"></a>

### Warp Speed

<img src="https://github.com/user-attachments/assets/f9987bfc-f9d7-48d8-9431-8c361223c50e" width="72" height="72" alt="Warp Speed talent icon">

- **Ability modifier**: While Scrier's Gaze is active, gain 20% Movement Speed. This bonus ends when Gaze ends.

- **Speed example**: Isolating this effect, an original speed of 5 metres per second becomes `5 × (1 + 20%) = 6` metres per second.

[Details](psyker_overcharge_increased_movement_speed.md) · [Back to index](#talent-index)

---

<a id="psyker_2_tier_3_name_2"></a>

### Psykinetic's Aura

<img src="https://github.com/user-attachments/assets/547fa734-789a-404c-9c48-aa1671d3605c" width="72" height="72" alt="Psykinetic's Aura talent icon">

- **Trigger**: After personally killing an Elite or Specialist Enemy, gain an extra 0.5 seconds of Combat Ability cooldown recovery about once per second for 3 seconds. Triggering it again resets the effect's duration without increasing the amount restored by each tick.

- **Cooldown example**: With 20 seconds remaining, after 1 second of normal recovery and one extra recovery tick, the remaining cooldown becomes `20 − 1 − 0.5 = 18.5` seconds.

- **Full recovery amount**: With normal frame-by-frame updates and no interruption, three extra ticks restore `0.5 × 3 = 1.5` seconds in total, in addition to the cooldown time that naturally passes during this interval.

[Details](psyker_2_tier_3_name_2.md) · [Back to index](#talent-index)

---

<a id="psyker_overcharge_reduced_warp_charge"></a>

### Reality Anchor

<img src="https://github.com/user-attachments/assets/123c7e4e-3844-4ff0-94c0-5cf7f7772b8f" width="72" height="72" alt="Reality Anchor talent icon">

- **Ability modifier**: While Scrier's Gaze is active, generate 20% less Peril and take 30% less time to Quell the same amount of Peril.

- **Generation example**: An original gain of 10 Peril percentage points becomes `10 × 0.8 = 8` points. Existing accumulated Peril is not directly removed.

- **Quell example**: An original 10-second Quell process becomes `10 × 0.7 = 7` seconds. Expressed as a rate per second, this is `1 ÷ 0.7 ≈ 1.429` times the original rate, about 42.9% faster.

#### Chinese wording erratum

- The Chinese phrase “reduces already generated Peril” describes removing existing Peril. The corresponding English and accepted implementation refer to generating less new Peril while Gaze is active.

[Details](psyker_overcharge_reduced_warp_charge.md) · [Back to index](#talent-index)

---

<a id="psyker_combat_ability_force_field"></a>

### Telekine Shield

<img src="https://github.com/user-attachments/assets/e328d953-886b-4527-9c23-e8bfc90ada6f" width="72" height="72" alt="Telekine Shield talent icon">

- **Ability**: Deploy a psychic shield in front of you, blocking Enemy Ranged Attacks while you and Allies can still shoot through. It lasts up to 17.5 seconds; base cooldown: 40 seconds.

- **Shield durability**: The shield withstands 20 hits that are accepted for durability removal. After each removal, no further durability is removed for 0.33 seconds. Heavy attack pressure may destroy the shield early.

- **Durability example**: After 12 accepted durability removals, `20 − 12 = 8` remain. This counts shield hits and is separate from your Health or Toughness.

[Details](psyker_combat_ability_force_field.md) · [Back to index](#talent-index)

---

<a id="psyker_shield_extra_charge"></a>

### Bolstered Shield

<img src="https://github.com/user-attachments/assets/72b10287-7ce1-47a1-a57f-a88c56c51f9f" width="72" height="72" alt="Bolstered Shield talent icon">

- **Ability modifier**: Telekine Shield gains one extra charge, storing up to 2. The two uses share cooldown progress and restore one charge at a time.

- **Cooldown example**: After both charges are exhausted, recover the first after 40 seconds and the second after another 40, for `40 × 2 = 80` seconds in total. Other cooldown bonuses are calculated separately.

[Details](psyker_shield_extra_charge.md) · [Back to index](#talent-index)

---

<a id="psyker_boost_allies_in_sphere"></a>

### Sanctuary

<img src="https://github.com/user-attachments/assets/57b73353-bc2c-4313-b488-cb9a1ac7c9f0" width="72" height="72" alt="Sanctuary talent icon">

- **Ability modifier**: With Telekine Dome selected, you and Allies inside the spherical shield recover 10% of maximum Toughness per second.

- **Dissipation effect**: When the shield dissipates, players still inside gain 50% Toughness Damage Reduction for 5 seconds. Leaving early does not grant this dissipation bonus.

- **Recovery and reduction example**: At 100 maximum Toughness, recover `100 × 10% = 10` per second, up to 30 over 3 seconds, capped by missing Toughness. During the reduction effect, an original 40 Toughness damage becomes `40 × 0.5 = 20`.

[Details](psyker_boost_allies_in_sphere.md) · [Back to index](#talent-index)

---

<a id="psyker_sphere_shield"></a>

### Telekine Dome

<img src="https://github.com/user-attachments/assets/60e6d4b2-0696-4215-8afd-8c9725d4801f" width="72" height="72" alt="Telekine Dome talent icon">

- **Ability modifier**: Telekine Shield becomes a spherical barrier around the casting position, with a radius of about 6 metres. It lasts up to 25 seconds; base cooldown becomes 60 seconds. The shield can still disappear early when its durability is exhausted.

- **Time comparison**: Compared with the original shield, duration increases by `25 − 17.5 = 7.5` seconds and cooldown by `60 − 40 = 20` seconds. Durability still supports 20 accepted removals.

[Details](psyker_sphere_shield.md) · [Back to index](#talent-index)

---

<a id="psyker_shield_stun_passive"></a>

### Enervating Threshold

<img src="https://github.com/user-attachments/assets/0cacb110-bf24-451f-ad19-f55ee7bd6191" width="72" height="72" alt="Enervating Threshold talent icon">

- **Ability modifier**: Enemies passing through your Telekine Shield have a 20% chance to be Electrocuted. Specialist Enemies and Monsters always trigger the effect; whether it interrupts an action still depends on the Enemy's resistance.

- **Shield cost**: A Specialist trigger also damages the shield, subject to its 0.33-second durability-removal interval.

- **Chance example**: Each eligible ordinary-Enemy crossing has a 20% chance. Across 100 crossings, expected triggers are `100 × 20% = 20`, rather than a guaranteed trigger every five crossings.

[Details](psyker_shield_stun_passive.md) · [Back to index](#talent-index)

---

<a id="psyker_overcharge_stance_infinite_casting"></a>

### Warp Unbound

<img src="https://github.com/user-attachments/assets/810110f9-a360-4a69-8754-0e3502a0bef8" width="72" height="72" alt="Warp Unbound talent icon">

- **Ability modifier**: After Scrier's Gaze ends, retain protection from Peril overload; Peril still accumulates normally.

- **Duration**: The 10-second post-Gaze effect plus a 1.5-second buffer gives `10 + 1.5 = 11.5` seconds. Gaze itself still ends at 100% Peril.

[Details](psyker_overcharge_stance_infinite_casting.md) · [Back to index](#talent-index)

---

<a id="psyker_passive_souls_from_elite_kills"></a>

### Warp Siphon

<img src="https://github.com/user-attachments/assets/07eff6fd-5c1a-49f2-8a72-d689ec6bb42e" width="72" height="72" alt="Warp Siphon talent icon">

- **Gaining and retaining charges:** Personally kill an Elite or Specialist Enemy to gain one Warp Charge, up to four stacks, lasting 25 seconds. Gaining another charge resets the shared timer. Expiry removes one stack and restarts the 25-second countdown.

- **Damage example:** Each stack adds 4% Damage. With no other bonuses, four stacks turn 100 Damage into `100 × (1 + 4% × 4) = 116`; six stacks with Warp Battery give 124.

- **Cooldown example:** Using a Combat Ability spends every Warp Charge. Each restores 7.5% of the cooldown required for one use of that ability. For a 30-second cooldown and four stacks, this immediately restores `30 × 7.5% × 4 = 9` seconds of progress, leaving about 21 seconds.

- **Abilities with multiple charges:** Restoration first fills the charge currently counting down; any progress exceeding the amount required for that charge carries over to subsequent charges.

[Details](psyker_passive_souls_from_elite_kills.md) · [Back to index](#talent-index)

---

<a id="psyker_new_mark_passive"></a>

### Disrupt Destiny

<img src="https://github.com/user-attachments/assets/885fdda1-bcf2-4502-97e0-7eaead2392e0" width="72" height="72" alt="Disrupt Destiny talent icon">

- **Marking and stacks:** Mark eligible enemies in front of you, within 40 metres and with line of sight. Personally kill the current Marked Enemy to gain one Precision stack, up to 15.

- **Per-stack bonuses:** +1% general Damage, +2% additional Critical Damage and +2.5% additional Weakspot Damage. At 15 stacks these are +15%, +30% and +37.5%, respectively.

- **Damage examples:** With only the general Damage bonus, `100 × (1 + 15%) = 115`. For the Weakspot bonus alone, suppose the same hit already includes the general Damage bonus and has a base portion of 100 plus an additional Weakspot portion of 50. Adding 37.5% Weakspot Damage gives `100 + 50 × 1.375 = 168.75`, a 12.5% increase over the original 150 at this stage. Weapons have different additional-Damage proportions, so the increase to the whole hit varies.

- **Toughness and Movement Speed:** Killing the Marked target restores 25% of maximum Toughness over 2.5 seconds and grants +20% Movement Speed for 2.5 seconds. At 100 maximum Toughness, this restores 25 in total, or `25 ÷ 2.5 = 10` per second, capped by missing Toughness.

- **Timer refresh and decay:** Precision shares a five-second timer. Gaining a stack, or hitting a still-living Marked target or a Boss while stacks already exist, resets it. Expiry removes one stack, then starts another five-second timer. With three stacks and no further refresh, the count falls to two, one and zero at about 5, 10 and 15 seconds.

[Details](psyker_new_mark_passive.md) · [Back to index](#talent-index)

---

<a id="psyker_empowered_ability"></a>

### Empowered Psionics

<img src="https://github.com/user-attachments/assets/d3625057-f314-491b-8a34-84789ec38342" width="72" height="72" alt="Empowered Psionics talent icon">

- **Gaining and spending empowerment:** Kills have a 10% chance to grant one empowerment stack, with a base storage limit of one. Each empowered Blitz spends one stack; Smite spends it when that continuous cast ends.

- **Brain Rupture:** Generates no Peril, gains +50% Damage and +50% charge speed. Without other Damage bonuses, `100 × 1.5 = 150`. A two-second charge becomes `2 ÷ 1.5 ≈ 1.33` seconds, about 33.3% shorter.

- **Smite:** Gains +200% Damage. Without other Damage bonuses, `100 × (1 + 200%) = 300`.

- **Assail:** Generates no Peril and spends no throw charges, with increased Damage and piercing capacity; it still spends one empowerment stack. Cleave capacity rises from two to four, or `4 ÷ 2 = 2` times the capacity. The number of enemies actually pierced depends on enemies and hit conditions.

- **Chance example:** If storage is available on every kill, 100 kills give an expected `100 × 10% = 10` empowerments; there is no guaranteed trigger every ten kills.

[Details](psyker_empowered_ability.md) · [Back to index](#talent-index)

---

<a id="psyker_reduced_warp_charge_cost_and_venting_speed"></a>

### Inner Tranquility

<img src="https://github.com/user-attachments/assets/333bcafc-3c34-4b47-bb5b-658c9cd2b777" width="72" height="72" alt="Inner Tranquility talent icon">

- **How it works:** Each Warp Charge reduces Peril Generation by 8%. Four stacks give a 32% reduction; six with Warp Battery give 48%.

- **Peril example:** An attack that originally generates 10 percentage points of Peril generates `10 × (1 − 8% × 4) = 6.8` at four stacks, or 5.2 at six. Other Generation modifiers apply separately.

[Details](psyker_reduced_warp_charge_cost_and_venting_speed.md) · [Back to index](#talent-index)

---

<a id="psyker_toughness_on_soul"></a>

### Essence Harvest

<img src="https://github.com/user-attachments/assets/00ae8b19-169d-4eec-94e2-89c3cf851d08" width="72" height="72" alt="Essence Harvest talent icon">

- **How it works:** Gaining a Warp Charge restores 30% of maximum Toughness over five seconds. Gaining another during the effect resets the five-second timer; the restoration rate does not stack.

- **Restoration example:** With 100 maximum Toughness, restore `100 × 30% ÷ 5 = 6` per second, or 30 over a full five seconds. If only 12 is missing, at most 12 can actually be restored.

[Details](psyker_toughness_on_soul.md) · [Back to index](#talent-index)

---

<a id="psyker_empowered_grenades_passive_improved"></a>

### Bio-Lodestone

<img src="https://github.com/user-attachments/assets/827d3ef0-dce8-4cb8-8af1-c5ad142d4ec1" width="72" height="72" alt="Bio-Lodestone talent icon">

- **How it works:** The chance to gain empowerment on killing an enemy rises from 10% to 15%; the storage cap does not change.

- **Chance example:** With storage available each time, the expected number of empowerments from 100 kills rises from `100 × 10% = 10` to `100 × 15% = 15`. Random outcomes are not guaranteed to equal the expectation.

[Details](psyker_empowered_grenades_passive_improved.md) · [Back to index](#talent-index)

---

<a id="psyker_empowered_chain_lightnings_replenish_toughness_to_allies"></a>

### Psychic Leeching

<img src="https://github.com/user-attachments/assets/38c99293-d836-4a4e-91fb-1f6a65a848f8" width="72" height="72" alt="Psychic Leeching talent icon">

- **Trigger:** While holding empowerment, use an empowered Blitz to restore 20% of maximum Toughness to you and each Ally in Coherency. Smite restores it when casting starts, Assail when thrown, and Brain Rupture when the attack resolves.

- **Restoration example:** A player with 100 maximum Toughness restores `100 × 20% = 20`; one with 150 restores 30. Each is capped by their own missing Toughness. Hitting more enemies with a single Smite does not increase this restoration.

[Details](psyker_empowered_chain_lightnings_replenish_toughness_to_allies.md) · [Back to index](#talent-index)

---

<a id="psyker_empowered_ability_on_elite_kills"></a>

### Overpowering Souls

<img src="https://github.com/user-attachments/assets/6312d53d-fec2-44c3-b04e-778d2e74e232" width="72" height="72" alt="Overpowering Souls talent icon">

- **Trigger:** Killing an Elite Enemy guarantees one empowerment stack. Specialist and ordinary enemies retain the existing gain chance.

- **Stack example:** Killing an Elite at zero stacks gives one. The base cap is one, so another kill at the cap does not give two. Charged Up raises the cap to three.

[Details](psyker_empowered_ability_on_elite_kills.md) · [Back to index](#talent-index)

---

<a id="psyker_mark_increased_max_stacks"></a>

### Perfectionism

<img src="https://github.com/user-attachments/assets/d2ef8713-7c0b-4dec-b13a-7f9e6a294435" width="72" height="72" alt="Perfectionism talent icon">

- **How it works:** Disrupt Destiny's Precision cap increases from 15 to 25 stacks. Per-stack effects and the rule of losing one stack every five seconds remain unchanged.

- **Damage example:** At 25 stacks, gain +25% general Damage, +50% additional Critical Damage and +62.5% additional Weakspot Damage. With only general Damage, `100 × (1 + 25%) = 125`. The additional Critical and Weakspot portions require separate calculation for each weapon.

- **Selection limit:** Choose either Perfectionism or Lingering Influence.

[Details](psyker_mark_increased_max_stacks.md) · [Back to index](#talent-index)

---

<a id="psyker_mark_kills_can_vent"></a>

### Purloin Providence

<img src="https://github.com/user-attachments/assets/06e543d8-85dd-455b-8ac2-3f9f29b03cf1" width="72" height="72" alt="Purloin Providence talent icon">

- **Trigger:** Personally kill Disrupt Destiny's current Marked Enemy to immediately Quell five percentage points of Peril.

- **Peril example:** At 60% Peril, `60% − 5 percentage points = 55%`. At 3%, Peril falls to 0%.

[Details](psyker_mark_kills_can_vent.md) · [Back to index](#talent-index)

---

<a id="psyker_mark_increased_duration"></a>

### Lingering Influence

<img src="https://github.com/user-attachments/assets/d2b37d6f-6054-462c-ba12-5583c59bceb8" width="72" height="72" alt="Lingering Influence talent icon">

- **How it works:** Disrupt Destiny's Precision timer before each one-stack decay increases from five to ten seconds. Gaining a stack or hitting a qualifying target can still refresh the countdown.

- **Time example:** With three stacks and no subsequent refresh, the count falls to two, one and zero at about 10, 20 and 30 seconds. Full decay originally took about `5 × 3 = 15` seconds; it now takes about `10 × 3 = 30`.

- **Selection limit:** Choose either Lingering Influence or Perfectionism.

[Details](psyker_mark_increased_duration.md) · [Back to index](#talent-index)

---

<a id="psyker_empowered_grenades_increased_max_stacks"></a>

### Charged Up

<img src="https://github.com/user-attachments/assets/1918d789-dd64-401d-b985-c99915053691" width="72" height="72" alt="Charged Up talent icon">

- **How it works:** Empowered Psionics' storage cap rises from one to three stacks. Each empowered Blitz still spends one; storing more stacks does not increase a single empowerment's multiplier.

- **Stack example:** At two stacks, gaining one gives `2 + 1 = 3`. At three, another gain leaves the count at three.

[Details](psyker_empowered_grenades_increased_max_stacks.md) · [Back to index](#talent-index)

---

<a id="psyker_warpfire_generate_souls"></a>

### In Fire Reborn

<img src="https://github.com/user-attachments/assets/f42fce6a-aab7-4622-a8b9-bd171fba4b33" width="72" height="72" alt="In Fire Reborn talent icon">

- **Trigger:** If an enemy still has Soulblaze when it dies, or your Soulblaze deals the killing Damage, there is a 10% chance to gain one Warp Charge. The first condition does not require you to land the last hit.

- **Chance example:** Without truncation at the charge cap, 100 qualifying death events give an expected `100 × 10% = 10` stacks. Actual results depend on random rolls.

- **Selection limit:** Choose either In Fire Reborn or Psychic Vampire.

[Details](psyker_warpfire_generate_souls.md) · [Back to index](#talent-index)

---

<a id="psyker_aura_souls_on_kill"></a>

### Psychic Vampire

<img src="https://github.com/user-attachments/assets/36248d6b-7838-4004-86e5-645956cb8392" width="72" height="72" alt="Psychic Vampire talent icon">

- **Trigger:** When you or an Ally in Coherency kills an enemy, you have a 4% chance to gain one Warp Charge. Allies do not receive your charge from this effect.

- **Chance example:** With storage available each time, 100 qualifying kills have expected gain `100 × 4% = 4` stacks; there is no guaranteed gain every 25 kills.

- **Selection limit:** Choose either Psychic Vampire or In Fire Reborn.

[Details](psyker_aura_souls_on_kill.md) · [Back to index](#talent-index)

---

<a id="psyker_increased_max_souls"></a>

### Warp Battery

<img src="https://github.com/user-attachments/assets/47c3ad89-c6a0-4c8c-a452-b8af3e859043" width="72" height="72" alt="Warp Battery talent icon">

- **How it works:** Warp Charge storage increases from four to six stacks. Damage and cooldown effects per stack remain unchanged.

- **Damage example:** Six stacks give `6 × 4% = 24%` Damage. Without other bonuses, `100 × 1.24 = 124`. This is eight more than 116 at the original four-stack cap.

- **Cooldown example:** Six stacks restore `6 × 7.5% = 45%` of one ability charge's cooldown; for a 30-second cooldown, this restores 13.5 seconds of progress.

[Details](psyker_increased_max_souls.md) · [Back to index](#talent-index)

---

<a id="psyker_mark_weakspot_kills"></a>

### Cruel Fortune

<img src="https://github.com/user-attachments/assets/a3deac9c-bddd-441f-a916-e41eecf9b23e" width="72" height="72" alt="Cruel Fortune talent icon">

- **Trigger:** Kill Disrupt Destiny's current Marked Enemy with a Weakspot hit to gain two Precision stacks in addition to the original one, for three in total. Killing an unmarked enemy does not trigger this effect.

- **Stack example:** At four stacks, gain `4 + 3 = 7`. At 14 with a cap of 15, the count stops at 15.

[Details](psyker_mark_weakspot_kills.md) · [Back to index](#talent-index)

---

<a id="psyker_toughness_on_warp_kill"></a>

### Soulstealer

<img src="https://github.com/user-attachments/assets/800b3bd1-a9a6-48ba-961c-66e12b256f37" width="72" height="72" alt="Soulstealer talent icon">

- **Trigger:** Kill an enemy with a Warp Attack to restore 7.5% of maximum Toughness.

- **Restoration example:** At 100 maximum Toughness with no other restoration bonuses, each proc restores `100 × 7.5% = 7.5`. If current Toughness is 96, effective restoration is `100 − 96 = 4`.

[Details](psyker_toughness_on_warp_kill.md) · [Back to index](#talent-index)

---

<a id="psyker_toughness_on_vent"></a>

### Quietude

<img src="https://github.com/user-attachments/assets/12e587e5-b69a-49cd-8d0f-a8280b832197" width="72" height="72" alt="Quietude talent icon">

- **How it works:** Both rising and falling Peril restore Toughness. Each ten-percentage-point change restores 4% of maximum Toughness, proportional to the actual change.

- **Restoration example:** At 100 maximum Toughness with no other restoration bonuses, increasing Peril from 40% to 60% restores `100 × 20% × 0.4 = 8`. Subsequently reducing it from 60% to 50% restores another `100 × 10% × 0.4 = 4`. Full Toughness cannot be overfilled.

[Details](psyker_toughness_on_vent.md) · [Back to index](#talent-index)

---

<a id="psyker_toughness_on_melee"></a>

### Warp Expenditure

<img src="https://github.com/user-attachments/assets/cb5dcadd-924f-442d-a21f-cb8f873b182d" width="72" height="72" alt="Warp Expenditure talent icon">

- **Ordinary hit**: hitting the first enemy with a melee attack restores 2.5% of maximum Toughness.

- **Weakspot Kill**: a melee hit that kills an enemy through its Weakspot instead restores 15% of maximum Toughness over 3 seconds; this kill does not also grant the preceding 2.5%. Triggering it again resets the 3 seconds without stacking the restoration rate.

- **Restoration example**: with 100 maximum Toughness, no other bonuses and a sufficient deficit, an ordinary hit restores 2.5 points. A Weakspot Kill restores 100 × 15% ÷ 3 = 5 points per second, for 15 points over 3 seconds.

[Details](psyker_toughness_on_melee.md) · [Back to index](#talent-index)

---

<a id="psyker_crits_regen_toughness_movement_speed"></a>

### Mettle

<img src="https://github.com/user-attachments/assets/53013aa9-f833-431c-8b85-3e548dbc318c" width="72" height="72" alt="Mettle talent icon">

- **Trigger**: after a Critical Hit, restore 10% of maximum Toughness over 4 seconds and gain 5% Movement Speed.

- **Stacks and refresh**: Movement Speed stacks up to 3 times, for a total increase of 15%; triggering the effect again resets the 4 seconds. Toughness continues to regenerate at 2.5% of maximum per second and does not multiply with the Movement Speed stack count.

- **Restoration example**: with 100 maximum Toughness, a sufficient deficit and no other bonuses, the 4-second effect restores 100 × 10% = 10 points. At 3 stacks it still restores 2.5 points per second, while the movement multiplier is 1 + 3 × 5% = 1.15.

[Details](psyker_crits_regen_toughness_movement_speed.md) · [Back to index](#talent-index)

---

<a id="psyker_elite_kills_add_warpfire"></a>

### Perilous Combustion

<img src="https://github.com/user-attachments/assets/6cc7512d-8e6f-4261-88f3-c95089950934" width="72" height="72" alt="Perilous Combustion talent icon">

- **Trigger**: killing an Elite or Specialist enemy applies 2 Soulblaze stacks to enemies within 4 metres of the victim.

- **Stack example**: a nearby enemy with no Soulblaze receives 2 stacks; one with 3 stacks reaches 3 + 2 = 5 stacks. Damage grows nonlinearly with stacks; 5 stacks do not deal 5 times the damage of 1 stack.

- **Exception**: a sleeping Daemonhost is not ignited by this effect.

[Details](psyker_elite_kills_add_warpfire.md) · [Back to index](#talent-index)

---

<a id="psyker_chance_to_vent_on_kill"></a>

### Battle Meditation

<img src="https://github.com/user-attachments/assets/69bdf081-b37e-479b-a157-f6e047efcfda" width="72" height="72" alt="Battle Meditation talent icon">

- **Effect**: Peril Generation is reduced by 10%; each Kill has a 10% chance to remove 10 percentage points of Peril.

- **Peril example**: an attack that normally generates 20 percentage points of Peril instead generates 20 × 0.9 = 18 percentage points. When the kill effect triggers, 50% Peril falls to 40%; if only 6% remains, it falls to 0%.

- **Proc chance**: 10% is the chance on each Kill; it does not guarantee one proc for every 10 enemies killed.

[Details](psyker_chance_to_vent_on_kill.md) · [Back to index](#talent-index)

---

<a id="psyker_crits_empower_next_attack"></a>

### Perfect Timing

<img src="https://github.com/user-attachments/assets/3c19e5ea-ccab-46a3-9763-c8d4075c6332" width="72" height="72" alt="Perfect Timing talent icon">

- **Effect**: after a Critical Hit, gain 1 Damage stack. Each stack adds 3% Damage, up to 5 stacks.

- **Stacks and refresh**: the effect lasts 10 seconds, and triggering it again resets the duration. At full stacks, Damage increases by 15%.

- **Damage example**: compare only this damage-bonus stage, with all other multipliers fixed at 1. With a baseline of 100 points and no other bonus, 100 × (1 + 15%) = 115 points. With an existing 25% bonus in the same stage, Damage rises from 125 to 100 × (1 + 25% + 15%) = 140 points.

[Details](psyker_crits_empower_next_attack.md) · [Back to index](#talent-index)

---

<a id="psyker_spread_warpfire_on_kill"></a>

### Wildfire

<img src="https://github.com/user-attachments/assets/1e6189fe-4a6e-4fda-bbe9-e2a38c75ff2a" width="72" height="72" alt="Wildfire talent icon">

- **Trigger**: when an enemy affected by your Soulblaze dies, distribute up to 4 stacks among enemies within 5 metres; the final hit does not have to come from Soulblaze.

- **Distribution**: the total available cannot exceed the victim's stack count at death. This spread also cannot raise any recipient above that stack ceiling.

- **Stack example**: if the victim had 6 stacks and two nearby eligible enemies each had 0, the shared total is min(6, 4) = 4. Giving them 1 stack in turn leaves each with 2 stacks. With only one eligible target, that target can receive 4 stacks.

#### Existing Traditional Chinese text correction

- The Traditional Chinese wording narrows the trigger to being burned to death by your Soulblaze. The English and verified execution condition require the enemy to be affected by your Soulblaze when it dies; another attack can deliver the killing blow.

[Details](psyker_spread_warpfire_on_kill.md) · [Back to index](#talent-index)

---

<a id="psyker_venting_improvements"></a>

### Mind in Motion

<img src="https://github.com/user-attachments/assets/86748037-d25a-449c-881a-b80060374012" width="72" height="72" alt="Mind in Motion talent icon">

- **Effect**: remove the movement penalties caused by Quelling Peril and Reloading, and gain 5% Movement Speed. Slows from other sources are still calculated separately.

- **Movement example**: with no other modifiers, if movement at this stage was 5 metres per second, it becomes 5 × (1 + 5%) = 5.25 metres per second.

[Details](psyker_venting_improvements.md) · [Back to index](#talent-index)

---

<a id="psyker_kills_stack_other_weapon_damage"></a>

### Malefic Momentum

<img src="https://github.com/user-attachments/assets/cc72c2ff-3d22-42e0-be1d-69a9f4d7cb22" width="72" height="72" alt="Malefic Momentum talent icon">

- **Effect**: a kill with non-Warp Damage grants 5% Warp Damage; a kill with Warp Damage grants 5% non-Warp Damage.

- **Stacks and refresh**: the two groups each have a separate cap of 5 stacks and last 10 seconds. Gaining the same group's effect again resets that group's timer. Each group at full stacks adds 25% Damage.

- **Damage example**: compare only this damage-bonus stage, with all other multipliers fixed at 1. With a baseline of 100 points and no other bonus, 100 × (1 + 25%) = 125 points. With an existing 25% bonus in the same stage, Damage rises from 125 to 100 × (1 + 25% + 25%) = 150 points.

[Details](psyker_kills_stack_other_weapon_damage.md) · [Back to index](#talent-index)

---

<a id="psyker_warp_charge_reduces_toughness_damage_taken"></a>

### One with the Warp

<img src="https://github.com/user-attachments/assets/68726dca-2cf0-40d6-bfe6-eccecc659446" width="72" height="72" alt="One with the Warp talent icon">

- **Effect**: higher Peril provides stronger Toughness Damage Reduction. It is 10% at 0% Peril and 33% at 100% Peril, with proportional changes between them.

- **Reduction example**: at 50% Peril, the reduction is 10% + (33% − 10%) × 50% = 21.5%. An original 100 points of Toughness Damage becomes 100 × 0.785 = 78.5 points; with another independent 20% reduction it becomes 78.5 × 0.8 = 62.8 points. This effect does not reduce Health Damage.

[Details](psyker_warp_charge_reduces_toughness_damage_taken.md) · [Back to index](#talent-index)

---

<a id="psyker_improved_dodge"></a>

### Anticipation

<img src="https://github.com/user-attachments/assets/80b2261c-4df6-4531-b9c1-bf67fbbbdcee" width="72" height="72" alt="Anticipation talent icon">

- **Effect**: gain 1 additional Effective Dodge and increase the protection linger time after the dodge action ends by 50%.

- **Example**: a weapon with 3 consecutive Effective Dodges gains 3 + 1 = 4. If the original linger time was 0.2 seconds, it becomes 0.2 × 1.5 = 0.3 seconds; this does not mean the entire dodge action lasts 50% longer.

#### Existing Traditional Chinese text correction

- The Traditional Chinese wording says the Effective Dodge count increases to the specified number, treating the bonus as a new total. The English says to increase the count by that number; the verified effect adds 1 to the existing count, rather than allowing only 1 dodge in total.

[Details](psyker_improved_dodge.md) · [Back to index](#talent-index)

---

<a id="psyker_dodge_after_crits"></a>

### Empathic Evasion

<img src="https://github.com/user-attachments/assets/946f549a-ed56-4711-aee8-39ce35a0a6b1" width="72" height="72" alt="Empathic Evasion talent icon">

- **Effect**: after a Critical Hit, count as Dodging against Ranged Attacks for 1 second; triggering it again resets the duration.

- **Timing example**: a proc at 0 seconds lasts until approximately 1 second. Another proc at 0.6 seconds extends it until approximately 1.6 seconds.

- **Scope**: this is a ranged-dodge check. It does not provide melee invulnerability, and explosions or ground fire cannot all be treated as ranged hits to which it grants immunity.

[Details](psyker_dodge_after_crits.md) · [Back to index](#talent-index)

---

<a id="psyker_increased_vent_speed"></a>

### Solidity

<img src="https://github.com/user-attachments/assets/86582600-a30d-4e5a-b87b-ae33b2e78746" width="72" height="72" alt="Solidity talent icon">

- **Effect**: the time needed to actively Quell Peril is reduced by 30%.

- **Timing example**: with the same weapon, starting Peril and other conditions, a Quelling process that took 4 seconds becomes approximately 4 × 0.7 = 2.8 seconds. The processing rate per second is 1 ÷ 0.7 ≈ 1.429 times the original, approximately 42.9% faster.

[Details](psyker_increased_vent_speed.md) · [Back to index](#talent-index)

---

<a id="psyker_damage_based_on_warp_charge"></a>

### Warp Rider

<img src="https://github.com/user-attachments/assets/8f79e11c-ea7c-4e52-957b-007bd85bcf1b" width="72" height="72" alt="Warp Rider talent icon">

- **Effect**: the Damage bonus rises proportionally with current Peril. At 0% / 50% / 100% Peril, it grants 0% / 10% / 20% Damage respectively.

- **Damage example**: at 50% Peril, with a baseline Damage of 100 at this stage and all other multipliers fixed at 1, 100 × (1 + 20% × 50%) = 110 points. With an existing 25% bonus in the same stage, Damage rises from 125 to 135 points.

[Details](psyker_damage_based_on_warp_charge.md) · [Back to index](#talent-index)

---

<a id="psyker_guaranteed_crit_on_multiple_weakspot_hits"></a>

### True Aim

<img src="https://github.com/user-attachments/assets/4b242d12-87d5-44a8-a2aa-4c1a0f3a2376" width="72" height="72" alt="True Aim talent icon">

- **Effect**: after accumulating 5 valid Weakspot Hits that deal damage, the next Ranged Attack is guaranteed to be Critical and consumes this accumulated effect.

- **Accumulation limits**: repeated hits by the same projectile and later enemies cleaved by one attack cannot all be counted as an additional stack.

- **Example**: from 0 stacks, five separately valid Weakspot Hits give 1 → 2 → 3 → 4 → 5 stacks. The following Ranged Critical Strike consumes this effect. Critical Damage still depends on the weapon, hit location and target; it is not a fixed doubling.

[Details](psyker_guaranteed_crit_on_multiple_weakspot_hits.md) · [Back to index](#talent-index)

---

<a id="psyker_coherency_aura_size_increase"></a>

### Puppet Master

<img src="https://github.com/user-attachments/assets/1561e519-2633-4a6f-af9f-fffe6a6c8a03" width="72" height="72" alt="Puppet Master talent icon">

- **Effect**: increase the Coherency Aura radius by 75%, allowing more distant allies to remain in Coherency.

- **Range example**: with other modifiers unchanged, an original radius of 8 metres becomes 8 × 1.75 = 14 metres. The increase is to radius; when comparing only the area of a flat circle, the area multiplier is 1.75² = 3.0625.

#### Existing Traditional Chinese text correction

- The Traditional Chinese wording says the Aura range becomes {radius_modifier} times the original, mixing a multiplier with a bonus amount. The verified effect increases radius by 75%, making it 1.75 times the original.

[Details](psyker_coherency_aura_size_increase.md) · [Back to index](#talent-index)

---

<a id="psyker_block_costs_warp_charge"></a>

### Kinetic Deflection

<img src="https://github.com/user-attachments/assets/e56e3649-507c-4ebb-94fc-58f7eff77aee" width="72" height="72" alt="Kinetic Deflection talent icon">

- **Effect**: below 97% Peril, Blocking first generates Peril. The conversion is 25% of the original Stamina cost as a fraction of maximum Stamina. Once Peril reaches 97%, the remaining Block cost is paid with Stamina.

- **Block example**: with 4 maximum Stamina, a Block that originally costs 2, and no other Peril modifiers, gain 2 ÷ 4 × 25% = 12.5 percentage points of Peril. Starting at 50% gives 62.5%, with no Stamina spent on this Block.

- **Near the cap**: if the same Block starts at 90%, only 7 percentage points fit. The remaining 12.5 − 7 = 5.5 percentage points convert back to 5.5% ÷ 25% × 4 = 0.88 Stamina.

[Details](psyker_block_costs_warp_charge.md) · [Back to index](#talent-index)

---

<a id="base_toughness_node_buff_medium_5"></a>

### Toughness Boost

<img src="https://github.com/user-attachments/assets/3d86850d-c891-443c-8f80-2f01ad34bdff" width="72" height="72" alt="Toughness Boost talent icon">

- **Effect**: increase maximum Toughness by 15 points.

- **Toughness example**: with no other modifiers, 100 maximum Toughness becomes 100 + 15 = 115 points; selecting another node with the same effect gives 130 points. This increases the maximum rather than restoring Toughness over time.

[Details](base_toughness_node_buff_medium_5.md) · [Back to index](#talent-index)

---

<a id="base_toughness_node_buff_medium_4"></a>

### Toughness Boost

<img src="https://github.com/user-attachments/assets/92db3e61-eb2d-4af5-b9a7-3a1bab73234a" width="72" height="72" alt="Toughness Boost talent icon">

- **Effect**: increase maximum Toughness by 15 points.

- **Toughness example**: with no other modifiers, 100 maximum Toughness becomes 100 + 15 = 115 points; selecting another node with the same effect gives 130 points. This increases the maximum rather than restoring Toughness over time.

[Details](base_toughness_node_buff_medium_4.md) · [Back to index](#talent-index)

---

<a id="base_toughness_damage_reduction_node_buff_medium_1"></a>

### Toughness Damage Reduction

<img src="https://github.com/user-attachments/assets/57a54ed7-4f34-449f-9f2d-eb401a97b51a" width="72" height="72" alt="Toughness Damage Reduction talent icon">

- **Effect**: reduce Toughness Damage by 10% in this reduction stage; this does not reduce Health Damage.

- **Reduction example**: with an original 100 points of Toughness Damage and no other reduction in this stage, 100 × (1 − 10%) = 90 points. With an existing 5% reduction in the same stage, 100 × (1 − 5% − 10%) = 85 points. Other independent multiplicative reductions apply separately.

[Details](base_toughness_damage_reduction_node_buff_medium_1.md) · [Back to index](#talent-index)

---

<a id="psyker_melee_attack_speed"></a>

### Lightning Speed

<img src="https://github.com/user-attachments/assets/ac3d53fd-1b36-40d7-8ee1-275804b29c63" width="72" height="72" alt="Lightning Speed talent icon">

- **Effect**: increase Melee Attack Speed by 10%.

- **Timing example**: comparing only the action segment affected by Attack Speed, a segment that originally takes 1 second with no other Attack Speed bonuses becomes 1 ÷ 1.1 ≈ 0.909 seconds. This does not mean the entire combo always takes 10% less time.

[Details](psyker_melee_attack_speed.md) · [Back to index](#talent-index)

---

<a id="psyker_cleave_from_peril"></a>

### Warp Splitting

<img src="https://github.com/user-attachments/assets/c8b43c74-3790-440f-8610-db321e11da83" width="72" height="72" alt="Warp Splitting talent icon">

- **How it works**: Higher Peril allows attacks to pass through more total enemy mass: +50% at 50% Peril and +100% at 100% Peril.

- **Cleave example**: With a baseline damage Cleave capacity of 4 mass units, 50% Peril and no other bonuses, 4 × (1 + 50%) = 6. This does not increase damage to a single enemy by 50% and cannot be converted directly into a fixed number of extra enemies hit.

#### Traditional Chinese wording correction

- The Chinese phrase meaning “Cleave attack damage” presents Cleave capacity as a damage increase. The English says Cleave; the effect raises the enemy mass limit an attack can pass through, rather than directly increasing damage per hit.

[Details](psyker_cleave_from_peril.md) · [Back to index](#talent-index)

---

<a id="psyker_killing_enemy_with_warpfire_boosts"></a>

### Souldrinker

<img src="https://github.com/user-attachments/assets/444fd0d1-2a66-48f9-b841-f7bf1bcc6ccf" width="72" height="72" alt="Souldrinker talent icon">

- **Trigger**: When an enemy affected by Soulblaze dies, or you kill an enemy with Soulblaze, restore 15% of maximum Toughness over 5 seconds and gain 5 percentage points of Critical Hit Chance.

- **Refresh**: Another trigger resets the 5-second duration. The restoration rate and Critical Hit Chance bonus do not stack.

- **Restoration and chance example**: With 100 maximum Toughness, enough missing Toughness and no other modifiers, restore 100 × 15% ÷ 5 = 3 points per second. An initial 10% Critical Hit Chance becomes 10% + 5% = 15%.

[Details](psyker_killing_enemy_with_warpfire_boosts.md) · [Back to index](#talent-index)

---

<a id="psyker_melee_weaving"></a>

### By Crack of Bone

<img src="https://github.com/user-attachments/assets/efceab94-6c34-43bc-a8ed-6d06fbf269b1" width="72" height="72" alt="By Crack of Bone talent icon">

- **Trigger**: Kill an enemy with a melee Weakspot hit to remove 10 percentage points of Peril. Peril generation is reduced by 20% for the next 4 seconds. Another trigger refreshes the duration.

- **Peril example**: A trigger at 60% Peril lowers it to 50%. During the effect, an attack that would generate 20 percentage points generates 20 × 0.8 = 16 percentage points.

[Details](psyker_melee_weaving.md) · [Back to index](#talent-index)

---

<a id="psyker_damage_vs_ogryns_and_monsters"></a>

### Vulnerable Minds

<img src="https://github.com/user-attachments/assets/f3235e60-41ff-4e15-81eb-172af5ec1f2e" width="72" height="72" alt="Vulnerable Minds talent icon">

- **How it works**: Deal 20% more Damage to Ogryns and Monstrosities.

- **Damage example**: Compare only this Damage stage, with all other multipliers fixed at 1. With a baseline of 100 and no other bonuses, 100 × (1 + 20%) = 120. With an existing 25% bonus in the same stage, 125 becomes 100 × (1 + 25% + 20%) = 145.

[Details](psyker_damage_vs_ogryns_and_monsters.md) · [Back to index](#talent-index)

---

<a id="psyker_increased_warp_damage"></a>

### Focused Warp

<img src="https://github.com/user-attachments/assets/eeeb7b3b-f3bc-4509-b50f-edc7787cb0e7" width="72" height="72" alt="Focused Warp talent icon">

- **How it works**: Warp Damage increases by 15%. Eligibility depends on the attack's Damage type, rather than its weapon name.

- **Damage example**: Compare only this Damage stage, with all other multipliers fixed at 1. With a baseline of 100 and no other bonuses, 100 × (1 + 15%) = 115. With an existing 25% bonus in the same stage, 125 becomes 100 × (1 + 25% + 15%) = 140.

[Details](psyker_increased_warp_damage.md) · [Back to index](#talent-index)

---

<a id="psyker_weapon_attacks_peril_equilibrium"></a>

### Peril Equilibrium

<img src="https://github.com/user-attachments/assets/c84a6cc0-5f99-4eee-a394-9b234a1fa5dd" width="72" height="72" alt="Peril Equilibrium talent icon">

- **How it works**: A non-Warp melee or ranged hit that deals Damage adds 2 percentage points of Peril, up to 75%. It stops adding Peril at 75% and does not lower Peril that is already above that threshold.

- **Peril example**: Three successive triggers at 70% Peril give 70% → 72% → 74% → 75%. An initial 90% remains at 90%.

[Details](psyker_weapon_attacks_peril_equilibrium.md) · [Back to index](#talent-index)

---

<a id="psyker_reload_speed_warp_charge"></a>

### Surety of Arms

<img src="https://github.com/user-attachments/assets/5bac250d-4cc2-48b2-9832-8408652cec12" width="72" height="72" alt="Surety of Arms talent icon">

- **How it works**: At no more than 80% Peril, gain 30% Reload Speed. If the threshold condition still holds when the reload completes, generate Peril according to the fraction of the clip restored.

- **Reload example**: Compare only the segment affected by Reload Speed. A segment that originally takes 3 seconds becomes 3 ÷ 1.3 ≈ 2.31 seconds.

- **Peril example**: With a 40-round clip, 20 rounds restored and no other Peril modifiers, gain 20 ÷ 40 × 15% = 7.5 percentage points of Peril. Restoring a full clip adds 15 percentage points.

#### English wording correction

- “Below 80% Peril” excludes exactly 80%, but the verified condition is Peril ≤80%.

[Details](psyker_reload_speed_warp_charge.md) · [Back to index](#talent-index)

---

<a id="psyker_alternative_peril_explosion"></a>

### Crystalline Will

<img src="https://github.com/user-attachments/assets/6b51b11f-eed5-45f3-b539-6b4502778099" width="72" height="72" alt="Crystalline Will talent icon">

- **Explosion effect**: Overload Explosion Damage increases by 100% and radius by 25%, changing the cost of surviving the explosion.

- **Wound cost**: After an explosion, ordinarily remove one Wound; with only one Wound left, you die. If this explosion kills an Elite enemy, its Wound cost is waived.

- **Damage and radius example**: Compare only these two modifiers. An original 100 explosion Damage becomes 100 × 2 = 200; an original 10-metre explosion radius becomes 10 × 1.25 = 12.5 metres. Actual Damage remains subject to distance falloff and enemy armour.

[Details](psyker_alternative_peril_explosion.md) · [Back to index](#talent-index)

---

<a id="psyker_force_staff_bonus"></a>

### Channeled Force

<img src="https://github.com/user-attachments/assets/a3ca9930-1aef-4718-9463-1b5da02a5b6b" width="72" height="72" alt="Channeled Force talent icon">

- **Alternating attacks**: After a Force Staff charge exceeds 95% and the charge action finishes, Primary Attack Damage increases by 20% for 5 seconds. After a Primary Attack action finishes, Secondary Attack Damage increases by 10% for 5 seconds.

- **Refresh**: The bonuses have separate timers and can coexist. Repeated triggers reset the corresponding 5-second timer without stacking the same bonus.

- **Damage example**: Compare each bonus's own Damage stage, with both attacks originally dealing 100 and no other bonuses. Primary Attacks deal 100 × 1.2 = 120; Secondary Attacks deal 100 × 1.1 = 110. The bonuses affect different attacks and cannot be combined into a 30% increase on one hit.

[Details](psyker_force_staff_bonus.md) · [Back to index](#talent-index)

---

<a id="psyker_force_staff_quick_attack_bonus"></a>

### Empyric Shock

<img src="https://github.com/user-attachments/assets/f556046f-b193-4776-963d-798307d2c36a" width="72" height="72" alt="Empyric Shock talent icon">

- **How it works**: A Force Staff Primary Attack hit makes that enemy take 6% more Warp Damage per stack, with stacks multiplying. Both your and your Allies' Warp Attacks benefit.

- **Stacks and refresh**: Up to 5 stacks, lasting 10 seconds. Another hit adds a stack and resets the duration; hits at maximum stacks still refresh it.

- **Damage example**: A target originally taking 100 Warp Damage takes 100 × 1.06 = 106 at one stack. At five stacks, 100 × 1.06⁵ ≈ 133.82, an increase of approximately 33.82%.

[Details](psyker_force_staff_quick_attack_bonus.md) · [Back to index](#talent-index)

---

<a id="psyker_damage_to_peril_conversion"></a>

### Just a Dream

<img src="https://github.com/user-attachments/assets/b3086f22-3f24-417f-aaba-f59714897616" width="72" height="72" alt="Just a Dream talent icon">

- **How it works**: Below 97% Peril, take 25% less Damage. Also generate Peril from the combined Health and Toughness Damage reported for the hit: 0.25 percentage points per Damage point, up to 97% Peril.

- **Damage reduction example**: Compare only this reduction stage. An original 100 Damage becomes 100 × 0.75 = 75.

- **Peril example**: If the hit reports 40 combined Health and Toughness Damage, with no other Peril modifiers, gain 40 × 0.25 = 10 percentage points of Peril. An initial 50% becomes 60%; an initial 92% reaches at most 97%.

[Details](psyker_damage_to_peril_conversion.md) · [Back to index](#talent-index)

---

<a id="psyker_damage_resistance_stun_immunity"></a>

### Immaterial Focus

<img src="https://github.com/user-attachments/assets/288f8a4c-fee3-4e56-8e0b-b2419e2a115b" width="72" height="72" alt="Immaterial Focus talent icon">

- **How it works**: Take 10% less Damage. At 97% Peril or above, become Stun Immune; after dropping below 97%, the immunity lasts another 4 seconds.

- **Damage reduction example**: Compare only this reduction stage. 100 Damage becomes 100 × 0.9 = 90. With another independent 20% reduction, 100 × 0.8 × 0.9 = 72, a combined reduction of 28%.

[Details](psyker_damage_resistance_stun_immunity.md) · [Back to index](#talent-index)

---

<a id="psyker_warp_glass_cannon"></a>

### Empyric Resolve

<img src="https://github.com/user-attachments/assets/49c99b4c-1fdc-4355-900d-2e4b4c733ba8" width="72" height="72" alt="Empyric Resolve talent icon">

- **How it works**: Peril generation decreases by 40%, while Toughness restoration affected by this modifier also decreases by 30%.

- **Peril example**: An attack that originally generates 20 percentage points of Peril generates 20 × 0.6 = 12. With another independent 10% Peril reduction, 20 × 0.6 × 0.9 = 10.8 percentage points.

- **Restoration example**: An original 10 Toughness restored becomes 10 × 0.7 = 7. With another 25% restoration bonus, 10 × 1.25 × 0.7 = 8.75, still limited by maximum Toughness.

[Details](psyker_warp_glass_cannon.md) · [Back to index](#talent-index)

---

<a id="psyker_stat_mix"></a>

### Warp Ghost

<img src="https://github.com/user-attachments/assets/57acd7a3-65a7-460c-876c-3153b63d69a3" width="72" height="72" alt="Warp Ghost talent icon">

- **How it works**: Gain 2 Stamina and 25% Toughness restoration. Natural Peril decay is 80% slower in affected bands. Active Quelling does not use this slowdown multiplier.

- **Restoration example**: Without other bonuses, an original 10 Toughness restored becomes 10 × 1.25 = 12.5. With an existing 20% bonus of the same type, 10 × (1 + 20% + 25%) = 14.5.

- **Natural decay example**: Within the same eligible Peril band, an original decrease of 5 percentage points per second becomes 5 × 0.2 = 1 percentage point per second. With other conditions unchanged, decay across that same band takes approximately five times as long.

[Details](psyker_stat_mix.md) · [Back to index](#talent-index)

---

<a id="psyker_warp_attacks_rending"></a>

### Penetration of the Soul

<img src="https://github.com/user-attachments/assets/790d837c-239d-4d45-b4e8-c3c039df63ba" width="72" height="72" alt="Penetration of the Soul talent icon">

- **How it works**: Warp Attacks gain Rending based on current Peril: 10% / 20% Rending at 50% / 100% Peril. The actual Damage increase depends on the weapon and enemy armour.

- **Armour example**: Compare only the armour stage with a Rending-resistance modifier of 1, excluding Weakspots, Critical Hits and other multipliers. With 100 pre-armour Damage and a baseline armour multiplier of 0.5, at 100% Peril, 100 × 0.5 = 50 becomes 100 × (0.5 + 0.2) = 70, a 40% Damage increase.

- **Different target**: With the same 20% Rending, a baseline armour multiplier already at 1 and an excess-Rending conversion coefficient of 0.25, 100 becomes 100 × (1 + 0.2 × 0.25) = 105, only a 5% increase.

[Details](psyker_warp_attacks_rending.md) · [Back to index](#talent-index)

---

<a id="psyker_increased_blitz_damage"></a>

### Psykinetic Grip

<img src="https://github.com/user-attachments/assets/e66044cc-0b83-4f85-86ff-84661f076941" width="72" height="72" alt="Psykinetic Grip talent icon">

- **How it works**: Brain Rupture, Smite and Assail deal 20% more Damage.

- **Damage example**: Compare only this Damage stage, with all other multipliers fixed at 1. With a baseline of 100 and no other bonuses, 100 × (1 + 20%) = 120. With an existing 25% bonus in the same stage, 125 becomes 100 × (1 + 25% + 20%) = 145.

#### Traditional Chinese wording correction

- The Chinese construction meaning “Damage dealt to…” presents the three Blitz abilities as targets being attacked. The effect instead increases the Damage dealt by Brain Rupture, Smite and Assail themselves.

[Details](psyker_increased_blitz_damage.md) · [Back to index](#talent-index)
