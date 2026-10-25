# Scum: original game English comparison

[繁體中文](../LOCALIZATION_COMPARISON.md) | [Player descriptions](README.md) | [Technical index](SOURCE_INDEX.md)

- Original: local Steam Build 25606770, extracted 2026-10-02, UI resource. English and Traditional Chinese pair by the same description key/hash. Full text is stored under this release's `source/SteamBuild_25606770_1.13.1/`; that Build directory is Git-ignored.
- Mechanisms: Release 1.13.1 / `7e662fcda16219d775b84af50322be2e9cd9d62e`. Text and source both correspond to 1.13.1; actual in-game presentation remains unobserved.
- Read game English independently against previously verified evidence. Only explicit contradictions in effect direction, target, condition, quantity or unit count as English errata. Omitted mechanics and examples are supplementary.
- Placeholder displays are static reconstructions from the original template, existing verified values and necessary display mappings; they are not observed game screens. `[Dev]` / `[Writer]` export suffixes are metadata.



## Comparison index

The independent English comparison covers 79 main talents, 1 recipe starting description, 29 recipes and 5 base descriptions. Recipe text uses the corresponding stat/effect label hashes and fixed display values; similar names are not substituted. The conditional `broker_syringe` has no standalone localization key, so it is documented without inventing an original description. English errata and Traditional Chinese translation corrections are evaluated separately.

| Talent or base effect | Conclusion |
|---|---|
| [Blackout](#broker_blitz_flash_grenade_improved) | No clear English contradiction |
| [Boom Bringer](#broker_blitz_missile_launcher) | No clear English contradiction |
| [Chem Grenade](#broker_blitz_tox_grenade) | No clear English contradiction |
| [Gunslinger Improved](#broker_aura_gunslinger_improved) | Cannot confirm part of the description |
| [Ruffian](#broker_coherency_melee_damage) | No clear English contradiction |
| [Anarchist](#broker_coherency_anarchist) | No clear English contradiction |
| [Enhanced Desperado](#broker_ability_focus_improved) | No clear English contradiction |
| [Stimm Supply](#broker_ability_stimm_field) | No clear English contradiction |
| [Rampage!](#broker_ability_punk_rage) | No corresponding implementation evidence found |
| [Pulverising Strikes](#broker_ability_punk_rage_sub_2) | No clear English contradiction |
| [Channelled Aggression](#broker_ability_punk_rage_sub_1) | No clear English contradiction |
| [Forge's Bellow](#broker_ability_punk_rage_sub_3) | Explicit English contradiction |
| [Boiling Blood](#broker_ability_punk_rage_sub_4) | No clear English contradiction |
| [Focused Resolve](#broker_ability_focus_sub_3) | No clear English contradiction |
| [Pick Your Targets](#broker_ability_focus_sub_2) | No clear English contradiction |
| [Practiced Deployment](#broker_ability_stimm_field_sub_3) | No clear English contradiction |
| [Fast Acting Stimms](#broker_ability_stimm_field_sub_1) | No clear English contradiction |
| [Booby Trap](#broker_ability_stimm_field_sub_2) | No clear English contradiction |
| [Nimble](#broker_passive_improved_dodges) | No clear English contradiction |
| [Adrenaline Frenzy](#broker_keystone_adrenaline_junkie) | No clear English contradiction |
| [Vulture's Mark](#broker_keystone_vultures_mark_on_kill) | No clear English contradiction |
| [Chemical Dependency](#broker_keystone_chemical_dependency) | Cannot confirm part of the description |
| [Chem Enhanced](#broker_keystone_chemical_dependency_sub_1) | No clear English contradiction |
| [Chem Fortified](#broker_keystone_chemical_dependency_sub_2) | No clear English contradiction |
| [Maxed Out Chems](#broker_keystone_chemical_dependency_sub_3) | No clear English contradiction |
| [Vulture's Push](#broker_keystone_vultures_mark_aoe_stagger) | Cannot confirm part of the description |
| [Patient Hunter](#broker_keystone_vultures_mark_increased_duration) | No clear English contradiction |
| [Vulture's Dodge](#broker_keystone_vultures_mark_dodge_on_ranged_crit) | Explicit English contradiction |
| [Adrenaline Assassin](#broker_keystone_adrenaline_junkie_sub_1) | No clear English contradiction |
| [Stoked Rage](#broker_keystone_adrenaline_junkie_sub_3) | No clear English contradiction |
| [Adrenaline Unbound](#broker_keystone_adrenaline_junkie_sub_5) | No clear English contradiction |
| [Uncontrolled Aggression](#broker_keystone_adrenaline_junkie_sub_4) | No clear English contradiction |
| [Adrenaline Smiter](#broker_keystone_adrenaline_junkie_sub_2) | No clear English contradiction |
| [Alley Rat](#broker_passive_longer_dodges) | No clear English contradiction |
| [Quick and Deadly](#broker_passive_close_range_damage_on_dodge) | No clear English contradiction |
| [A Tertium Welcome](#broker_passive_first_target_damage) | No clear English contradiction |
| [In Your Face](#broker_passive_close_ranged_damage) | No clear English contradiction |
| [Precision Violence](#broker_passive_restore_toughness_on_weakspot_kill) | No clear English contradiction |
| [Voice of Tertium](#broker_passive_restore_toughness_on_close_ranged_kill) | No clear English contradiction |
| [Float Like a Butterfly](#broker_passive_ninja_grants_crit_chance) | No clear English contradiction |
| [Speedloader](#broker_passive_reload_speed_on_close_kill) | No clear English contradiction |
| [Burst of Energy](#broker_passive_stun_immunity_on_toughness_broken) | No clear English contradiction |
| [Toughness Boost](#base_toughness_node_buff_medium_1) | No clear English contradiction |
| [Regained Posture](#broker_passive_stamina_on_successful_dodge) | No clear English contradiction |
| [Slippery Customer](#broker_passive_dodge_melee_on_slide) | No clear English contradiction |
| [Tis but a Scratch](#broker_passive_replenish_toughness_on_ranged_toughness_damage) | No clear English contradiction |
| [Unload](#broker_passive_damage_on_reload) | No clear English contradiction |
| [Swift Endurance](#broker_passive_stamina_grants_atk_speed) | No clear English contradiction |
| [Ramping Backstabs](#broker_passive_ramping_backstabs) | No clear English contradiction |
| [Moving Target](#broker_passive_increased_ranged_dodges) | No clear English contradiction |
| [Sample Collector](#broker_passive_stimm_cd_on_kill) | No clear English contradiction |
| [Jittery](#broker_passive_improved_dodges_at_full_stamina) | Explicit English contradiction |
| [Critical Chance Boost](#base_crit_chance_node_buff_low_1) | No clear English contradiction |
| [Melee Damage Boost](#base_melee_damage_node_buff_medium_1) | No clear English contradiction |
| [Potent Tox](#base_toxin_power_boost_1) | No clear English contradiction |
| [Sticky Hands](#broker_passive_reduce_swap_time) | No clear English contradiction |
| [Calling for a Time Out](#broker_passive_reduced_toughness_damage_during_reload) | No clear English contradiction |
| [Street Tough](#broker_passive_knockback_on_taking_melee_damage) | Cannot confirm part of the description |
| [Channelled Devastation](#broker_passive_crit_grants_damage) | No clear English contradiction |
| [Battering Strikes](#broker_passive_melee_cleave_on_melee_kill) | No clear English contradiction |
| [Hyper-Violence](#broker_passive_melee_damage_carry_over) | No clear English contradiction |
| [Virulent Strain](#broker_passive_toxin_infected_enemies_take_increased_damage) | No clear English contradiction |
| [Toxin Mania](#broker_passive_damage_after_toxined_enemies) | No clear English contradiction |
| [Splash Damage](#broker_passive_toxin_spread_on_kills) | No clear English contradiction |
| [Extra Pouches](#broker_passive_increased_blitz_ammo) | No clear English contradiction |
| [Coated Weaponry](#broker_passive_melee_attacks_apply_toxin) | No clear English contradiction |
| [Pocket Toxin](#broker_passive_blitz_inflicts_toxin) | No clear English contradiction |
| [Targeted Toxin](#broker_passive_reduced_damage_by_toxined) | No clear English contradiction |
| [Toxic Renewal](#broker_passive_replenish_toughness_while_toxined_enemies_in_proximity) | No clear English contradiction |
| [Ammo Jack](#broker_passive_extended_mag) | No clear English contradiction |
| [Cheap Shots](#broker_passive_damage_vs_heavy_staggered) | Explicit English contradiction |
| [Hyper-Critical](#broker_passive_melee_crit_instakill) | Cannot confirm part of the description |
| [Punching Above One's Weight](#broker_passive_damage_vs_elites_monsters) | No clear English contradiction |
| [The Sweet Spot](#broker_passive_increased_weakspot_damage) | No clear English contradiction |
| [Long Lasting](#broker_passive_stimm_increased_duration) | No clear English contradiction |
| [Blessed Stimms](#broker_passive_stimm_cleanse_on_kill) | Explicit English contradiction |
| [Hive City Brawler](#broker_passive_dr_damage_tradeoff_on_stamina) | No clear English contradiction |
| [Pickpocket](#broker_passive_low_ammo_regen) | No clear English contradiction |
| [Battering Momentum](#broker_passive_cleave_on_cleave) | Cannot confirm part of the description |
| [Equip Cartel Special](#broker_stimm_activation_talent) | Cannot confirm part of the description |
| [Spur I](#broker_stimm_celerity_1) | No clear English contradiction |
| [Spur II](#broker_stimm_celerity_2) | No clear English contradiction |
| [Spur III](#broker_stimm_celerity_3) | No clear English contradiction |
| [Spur IV](#broker_stimm_celerity_4) | No clear English contradiction |
| [Spur V](#broker_stimm_celerity_5a) | No clear English contradiction |
| [Reflex](#broker_stimm_celerity_5b) | No clear English contradiction |
| [Fervor](#broker_stimm_celerity_5c) | Cannot confirm part of the description |
| [Wildfire I](#broker_stimm_combat_1) | No clear English contradiction |
| [Wildfire II](#broker_stimm_combat_2) | No clear English contradiction |
| [Wildfire III](#broker_stimm_combat_3) | No clear English contradiction |
| [Wildfire IV](#broker_stimm_combat_4a) | No clear English contradiction |
| [Fury I](#broker_stimm_combat_4b) | No clear English contradiction |
| [Vultoprene I](#broker_stimm_combat_4c) | No clear English contradiction |
| [Wildfire V](#broker_stimm_combat_5a) | No clear English contradiction |
| [Fury II](#broker_stimm_combat_5b) | No clear English contradiction |
| [Vultoprene II](#broker_stimm_combat_5c) | No clear English contradiction |
| [Barrage I](#broker_stimm_durability_1) | No clear English contradiction |
| [Barrage II](#broker_stimm_durability_2) | No clear English contradiction |
| [Barrage III](#broker_stimm_durability_3) | No clear English contradiction |
| [Barrage IV](#broker_stimm_durability_4) | No clear English contradiction |
| [Tank](#broker_stimm_durability_5a) | No clear English contradiction |
| [Regain](#broker_stimm_durability_5b) | No clear English contradiction |
| [Kalma I](#broker_stimm_concentration_1) | No clear English contradiction |
| [Kalma II](#broker_stimm_concentration_2) | No clear English contradiction |
| [Kalma III](#broker_stimm_concentration_3) | No clear English contradiction |
| [Kalma IV](#broker_stimm_concentration_4) | No clear English contradiction |
| [Kalma V](#broker_stimm_concentration_5a) | No clear English contradiction |
| [Hypex](#broker_stimm_concentration_5b) | Explicit English contradiction |
| [Klay](#broker_stimm_concentration_5c) | Explicit English contradiction |
| [Desperado: base combat ability](#broker_ability_focus) | No clear English contradiction |
| [Blinder: base blitz](#broker_blitz_flash_grenade) | No clear English contradiction |
| [Gunslinger: base aura](#broker_aura_gunslinger) | Cannot confirm part of the description |
| [Like the Wind: base passive](#broker_passive_improved_sprint_dodge) | No clear English contradiction |
| [Cartel Special: dedicated stimm](#broker_stimm_description_talent) | No clear English contradiction |
| [Dedicated Stimm charge](#broker_syringe) | Cannot confirm part of the description |

<a id="broker_blitz_flash_grenade_improved"></a>

## Blackout

Full raw template and formatting: [source evidence](broker_blitz_flash_grenade_improved.md#original-english-template-and-reconstruction). Name hash `3176e093`. Every row uses `ui / loc_talent_broker_blitz_flash_grenade_improved_desc / 44ce3a9a`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Grenade control and replenishment | Quick grenade that Staggers; every 20 Kills at Close Range generate 1; max 5; augmented Blinder; `ui / loc_talent_broker_blitz_flash_grenade_improved_desc / 44ce3a9a` | Improved PlayerAbility has 5 charges while base quick-grenade and close-kill replenishment remain; ordinary close kills do not require Melee. [Fixed source and line references](broker_blitz_flash_grenade_improved.md#fixed-source-evidence) | Consistent | The English distance condition includes Ranged kills and matches the existing evidence. |
| Detailed control and counting limits | No radius, explosion-Damage, full-capacity or Needle Pistol detail; `ui / loc_talent_broker_blitz_flash_grenade_improved_desc / 44ce3a9a` | Explosion radius 3.5 m, stronger Stagger within 2.25 m, no explosion Health Damage; full capacity pauses progress; the tracked Needle Pistol exception has its own distance check. [Fixed source and line references](broker_blitz_flash_grenade_improved.md#fixed-source-evidence) | Not covered by the description | These are supplements, including the existing 2-grenade/19-kill example; no repeated error is inferred from omitted details. |


<a id="broker_blitz_missile_launcher"></a>

## Boom Bringer

Full raw template and formatting: [source evidence](broker_blitz_missile_launcher.md#original-english-template-and-reconstruction). Name hash `a29ee6e4`. Every row uses `ui / loc_talent_broker_blitz_missile_launcher_desc / fad7e488`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Launcher and capacity | High powered missile launcher; 2 Max Missiles; `ui / loc_talent_broker_blitz_missile_launcher_desc / fad7e488` | Missile-launcher PlayerAbility uses charges only and has max 2. [Fixed source and line references](broker_blitz_missile_launcher.md#fixed-source-evidence) | Consistent | The stated weapon and capacity match the accepted evidence. |
| Damage and replenishment detail | No radius, segmented Damage, armour or replenishment explanation; `ui / loc_talent_broker_blitz_missile_launcher_desc / fad7e488` | Explosion radii are 4/7 m; close/outer distributions are 2800/1300 at static Power 500, direct impact 1800 is separate; the talent removes the base grenade's kill-based replenishment. [Fixed source and line references](broker_blitz_missile_launcher.md#fixed-source-evidence) | Not covered by the description | The existing calculations and limits explain unspecified mechanics; they are not English errata. |


<a id="broker_blitz_tox_grenade"></a>

## Chem Grenade

Full raw template and formatting: [source evidence](broker_blitz_tox_grenade.md#original-english-template-and-reconstruction). Name hash `5ecc7244`. Every row uses `ui / loc_talent_broker_blitz_tox_grenade_desc_02 / cbe2dc42`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Toxic area, stacks and capacity | Area for 15s; enemies standing in it receive up to 6 Chem Toxin stacks over time and explode upon death; 2 Max Grenades; `ui / loc_talent_broker_blitz_tox_grenade_desc_02 / cbe2dc42` | Liquid lasts 15 seconds and contributes stacks up to 6; active death mark triggers an explosion; ability carries 2. [Fixed source and line references](broker_blitz_tox_grenade.md#fixed-source-evidence) | Consistent | The English quantities and area-scoped stack wording match the accepted behavior. |
| Detailed application and residual effects | No terrain shape, interval, Cleave, residual-mark or replenishment rule; `ui / loc_talent_broker_blitz_tox_grenade_desc_02 / cbe2dc42` | Liquid flows; checks each effect every 0.35 s; Toxin can reach 30 stacks from other sources; hit-mass reduction 0.5 lasts 1 s; death mark lasts 12 s with a 2.5 m explosion and does not require a Toxin killing blow; base kill replenishment is removed. [Fixed source and line references](broker_blitz_tox_grenade.md#fixed-source-evidence) | Not covered by the description | These explain the existing Power example and effects after leaving the area; omitted details are supplements. |


<a id="broker_aura_gunslinger_improved"></a>

## Gunslinger Improved

Full raw template and formatting: [source evidence](broker_aura_gunslinger_improved.md#original-english-template-and-reconstruction). Name hash `9826063e`. Every row uses `ui / loc_talent_broker_aura_gunslinger_improved_desc / 03a59c5c`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Ordinary pickup sharing | Ammo collected by you or allies in Coherency replenishes each with 10% of that pickup; augmented Gunslinger; `ui / loc_talent_broker_aura_gunslinger_improved_desc / 03a59c5c` | The improved Aura uses ammo_share 0.1 and shares the pickup in the collector's Coherency. [Fixed source and line references](broker_aura_gunslinger_improved.md#fixed-source-evidence) | Consistent | The ordinary pickup trigger, recipients and amount match the accepted evidence. |
| Calculation and duplicate limits | No individual-capacity, rounding, priority or recursion detail; `ui / loc_talent_broker_aura_gunslinger_improved_desc / 03a59c5c` | Each ammo_amount_func recalculates the member's capacity; small and large pickups round up; priority 1 replaces base priority 2; final true prevents recursive sharing. [Fixed source and line references](broker_aura_gunslinger_improved.md#fixed-source-evidence) | Not covered by the description | The existing small/large/deployed-crate examples and limits explain how sharing is calculated. |
| Special mission large Ammo Crate | The description does not qualify the 10% rule by pickup type; `ui / loc_talent_broker_aura_gunslinger_improved_desc / 03a59c5c` | large_ammunition_crate_pickup ignores modifier and would use full capacity if it emitted the same event; that event route and actual scene behavior are unresolved. [Fixed source and line references](broker_aura_gunslinger_improved.md#fixed-source-evidence) | Cannot confirm | The conditional exception is retained without promoting an unverified event route into an explicit English contradiction. |


<a id="broker_coherency_melee_damage"></a>

## Ruffian

Full raw template and formatting: [source evidence](broker_coherency_melee_damage.md#original-english-template-and-reconstruction). Name hash `3b445793`. Every row uses `ui / loc_talent_broker_aura_ruffian_desc / a241f5b9`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Melee Damage and recipients | +10% Melee Damage for you and Allies in Coherency; `ui / loc_talent_broker_aura_ruffian_desc / a241f5b9` | melee_damage 0.1 applies to self and Coherency allies. [Fixed source and line references](broker_coherency_melee_damage.md#fixed-source-evidence) | Consistent | The amount, Damage type and recipients match the accepted evidence. |
| Duplicate and calculation limits | No stacking-stage or duplicate rule; `ui / loc_talent_broker_aura_ruffian_desc / a241f5b9` | max_stacks 1 and coherency_id prevent duplicate copies; general damage_stat_buffs add within the same stage. [Fixed source and line references](broker_coherency_melee_damage.md#fixed-source-evidence) | Not covered by the description | The existing 100→110 and 100×(1+25%+10%)=135 examples explain omitted calculation details. |


<a id="broker_coherency_anarchist"></a>

## Anarchist

Full raw template and formatting: [source evidence](broker_coherency_anarchist.md#original-english-template-and-reconstruction). Name hash `9337fdef`. Every row uses `ui / loc_talent_broker_aura_anarchist_desc / d1ab227e`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Critical Chance and recipients | +5% Critical Chance for you and allies in Coherency; `ui / loc_talent_broker_aura_anarchist_desc / d1ab227e` | critical_strike_chance 0.05 applies to self and Coherency allies. [Fixed source and line references](broker_coherency_anarchist.md#fixed-source-evidence) | Consistent | The amount, chance statistic and recipients match the accepted evidence. |
| Addition and duplicate limits | No arithmetic or duplicate rule; `ui / loc_talent_broker_aura_anarchist_desc / d1ab227e` | Critical Chance adds; one stack and coherency_id prevent duplicate copies. [Fixed source and line references](broker_coherency_anarchist.md#fixed-source-evidence) | Not covered by the description | The existing 10%→15% and 25%→30% examples explain omitted calculations. |


<a id="broker_ability_focus_improved"></a>

## Enhanced Desperado

Full raw template and formatting: [source evidence](broker_ability_focus_improved.md#original-english-template-and-reconstruction). Name hash `df173866`. Every row uses `ui / loc_talent_broker_ability_focus_improved_desc / a1148a57`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Focus and extension description | 10s focus, Ranged Dodging, no Sprint Stamina cost, +20% Sprint Speed, reloads do not reduce Ammo Reserve; close-target highlights and 1s extensions diminishing after 20s; base cooldown 45s; `ui / loc_talent_broker_ability_focus_improved_desc / a1148a57` | The improved focus buff and ability use the stated values and free transfers; close Ranged kills extend focus under the accepted event conditions. [Fixed source and line references](broker_ability_focus_improved.md#fixed-source-evidence) | Consistent | The English effects, amounts and initial timing match the verified evidence; Base Cooldown does not promise replenishment during the state. |
| Geometry, immunity and timing limits | No numeric close radius, exact later extensions, tracked Toxin exception, Ammo cleanup or pause rule; `ui / loc_talent_broker_ability_focus_improved_desc / a1148a57` | 12.5 m checks; suppression_immune; extensions 1/5^floor(elapsed/20), remaining duration capped at 10 s; tracked Needle Pistol death conditions; Ammo reconciliation on stop; natural replenishment paused during focus. [Fixed source and line references](broker_ability_focus_improved.md#fixed-source-evidence) | Not covered by the description | These retain existing conditions and calculations, including 100→120 speed and the player 5→6 m/s example, without treating omissions as errors. |


<a id="broker_ability_stimm_field"></a>

## Stimm Supply

Full raw template and formatting: [source evidence](broker_ability_stimm_field.md#original-english-template-and-reconstruction). Name hash `56107528`. Every row uses `ui / loc_talent_broker_ability_stimm_field_desc_3 / 81b45839`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Field, healing and Stimm sharing | 20s gas field; heal up to 40 Corruption over time and become immune; copy equipped Stimm effects to nearby allies; base cooldown 60s; `ui / loc_talent_broker_ability_stimm_field_desc_3 / 81b45839` | Field life_time 20; server removes 0.5 Corruption every 0.25 s, capped by removable Corruption; Corruption taken multiplier 0; equipped usable Stimm effects are copied. [Fixed source and line references](broker_ability_stimm_field.md#fixed-source-evidence) | Consistent | The upper-bound wording, immunity, sharing and base values agree with the accepted evidence. |
| Range, consumption and cooldown limits | No radius, tick interval, full-segment restriction, use consumption or pause rule; `ui / loc_talent_broker_ability_stimm_field_desc_3 / 81b45839` | Radius 3 m; 0.25 s ticks; cannot clear Corruption consuming a complete Health segment; ordinary Stimm item or pocket charge is consumed/removed; base effects end on exit; natural replenishment pauses while the field works. [Fixed source and line references](broker_ability_stimm_field.md#fixed-source-evidence) | Not covered by the description | These preserve existing conditions and the 20/0.25×0.5=40 derivation; Base Cooldown does not specify an uninterrupted countdown. |


<a id="broker_ability_punk_rage"></a>

## Rampage!

Full raw template and formatting: [source evidence](broker_ability_punk_rage.md#original-english-template-and-reconstruction). Name hash `b37505a2`. Every row uses `ui / loc_talent_broker_ability_punk_rage_desc_3 / be0f1026`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Rage values and hit extension | Refill all Toughness; 10s; +35% Melee Power, +20% Melee Attack Speed, +25% Damage Reduction; Melee strikes extend by 0.3s, reduced after 20s; base cooldown 30s; `ui / loc_talent_broker_ability_punk_rage_desc_3 / be0f1026` | The accepted state and ability use those values; Power is separate from Damage; taken-Damage multiplier 0.75; Melee on_hit extends without a kill. [Fixed source and line references](broker_ability_punk_rage.md#fixed-source-evidence) | Consistent | The quantities and hit condition match; the English states Power and reduction rather than an equal final-Damage increase. |
| Stun immunity | Stun immune; `ui / loc_talent_broker_ability_punk_rage_desc_3 / be0f1026` | The state includes stun_immune. [Fixed source and line references](broker_ability_punk_rage.md#fixed-source-evidence) | Consistent | This stated immunity has corresponding accepted evidence. |
| Suppression immunity | Suppression immune; `ui / loc_talent_broker_ability_punk_rage_desc_3 / be0f1026` | The state includes stun_immune and slowdown_immune but no suppression_immune; the accepted suppression handler checks suppression_immune to skip accumulation. [Fixed source and line references](broker_ability_punk_rage.md#fixed-source-evidence) | No corresponding implementation evidence found | Both original languages promise this effect, but the existing record does not establish it. The implementation/text gap remains unresolved without new tracing. |
| Supplementary timing and immunity | No exact diminishing formula, Slowdown immunity, weapon swap or pause rule; `ui / loc_talent_broker_ability_punk_rage_desc_3 / be0f1026` | Extension = 0.3/2^floor(elapsed/20); state has slowdown_immune; activation swaps to Melee; natural replenishment resumes after rage ends. [Fixed source and line references](broker_ability_punk_rage.md#fixed-source-evidence) | Not covered by the description | These preserve original examples and limits; 20 seconds is an extension-diminution threshold, not a total duration cap. |


<a id="broker_ability_punk_rage_sub_2"></a>

## Pulverising Strikes

Full raw template and formatting: [source evidence](broker_ability_punk_rage_sub_2.md#original-english-template-and-reconstruction). Name hash `fb15cb7e`. Every row uses `ui / loc_talent_broker_ability_punk_rage_sub_2_desc / fb3a2cef`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Cleave and time-driven Power | +50% Cleave while Rampage! is active; +2.5% Melee Power per active second, up to 10 times; `ui / loc_talent_broker_ability_punk_rage_sub_2_desc / fb3a2cef` | rage_cleave adds 0.5 to attack/impact hit-mass capacities; time-based ramping stacks add melee_power_level_modifier 0.025, max 10. [Fixed source and line references](broker_ability_punk_rage_sub_2.md#fixed-source-evidence) | Consistent | The English active-state condition, per-second driver, amount and cap agree with accepted evidence. |
| Calculation and timing limits | No separate mass-budget, additive base-Power or update/cleanup detail; `ui / loc_talent_broker_ability_punk_rage_sub_2_desc / fb3a2cef` | Damage/Stagger Cleave capacities 10→15; Power stacks add 25% to base rage 35% for 60%, giving Power 500→800 before curves; stacks stop with rage and timing can affect reaching the cap. [Fixed source and line references](broker_ability_punk_rage_sub_2.md#fixed-source-evidence) | Not covered by the description | Existing calculations and limits explain omitted details; no fixed final-Damage percentage or guaranteed cap is inferred. |


<a id="broker_ability_punk_rage_sub_1"></a>

## Channelled Aggression

Full raw template and formatting: [source evidence](broker_ability_punk_rage_sub_1.md#original-english-template-and-reconstruction). Name hash `f1fa0859`. Every row uses `ui / loc_talent_broker_ability_punk_rage_sub_1_desc_02 / 472cc8e5`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Heavy-Attack Rending during rage | Heavy Attacks while Rampage! is active have +25% Rending; `ui / loc_talent_broker_ability_punk_rage_sub_1_desc_02 / 472cc8e5` | broker_rage_rending enables additive melee_heavy_rending_multiplier 0.25 during the state. [Fixed source and line references](broker_ability_punk_rage_sub_1.md#fixed-source-evidence) | Consistent | The amount, Rending effect and active-rage condition agree; no first-half gate is stated. |
| Eligibility and armour calculation | No explicit Melee check, armour calculation or ability-progress gate; `ui / loc_talent_broker_ability_punk_rage_sub_1_desc_02 / 472cc8e5` | Only Melee heavy profiles read the term; armour conversion is capped at 1; the 0.5 format progress value is not used to delay or limit enabling. [Fixed source and line references](broker_ability_punk_rage_sub_1.md#fixed-source-evidence) | Not covered by the description | The existing 100 pre-armour Damage/0.5 multiplier example gives 50→75, not a fixed ×1.25 Damage rule. |


<a id="broker_ability_punk_rage_sub_3"></a>

## Forge's Bellow

Full raw template and formatting: [source evidence](broker_ability_punk_rage_sub_3.md#original-english-template-and-reconstruction). Name hash `fc8121dd`. Every row uses `ui / loc_talent_broker_ability_punk_rage_sub_3_desc_02 / aa1fa2de`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Interval increase | Increases time between attacks by +50%; `ui / loc_talent_broker_ability_punk_rage_sub_3_desc_02 / aa1fa2de` | melee_attack_speed −0.5 leaves speed 0.5; isolated reciprocal interval is 1/0.5 = 2 times the original, an increase of 100%. [Fixed source and line references](broker_ability_punk_rage_sub_3.md#fixed-source-evidence) | Explicit contradiction | The English explicitly specifies an interval increase that differs from the accepted speed-based derivation; both original languages sharing it does not remove the English contradiction. |
| Shouts and debuff duration | Shout on activation and again when rage runs out; Staggers enemies; debuff 5s; `ui / loc_talent_broker_ability_punk_rage_sub_3_desc_02 / aa1fa2de` | Start and stop call the Shout; affected enemies receive Stagger and a 5-second debuff. [Fixed source and line references](broker_ability_punk_rage_sub_3.md#fixed-source-evidence) | Consistent | The trigger pattern and debuff duration agree under the accepted stop conditions. |
| Detailed scope and conditions | No radius, Melee-only statistic or living/server stop detail; `ui / loc_talent_broker_ability_punk_rage_sub_3_desc_02 / aa1fa2de` | Radius 4.5 m; second Shout requires living character/server and use_exhaust=false; only melee_attack_speed is modified; actual animations and other modifiers still affect intervals. [Fixed source and line references](broker_ability_punk_rage_sub_3.md#fixed-source-evidence) | Not covered by the description | These are supplementary limits, not a separate repeated numeric erratum. |
| Malformed first name placeholder | First token is {punk_rage%s}; second is {punk_rage:%s}; `ui / loc_talent_broker_ability_punk_rage_sub_3_desc_02 / aa1fa2de` | Mapping provides the localized punk_rage value, but runtime handling of the malformed first token is not established by the existing evidence. [Fixed source and line references](broker_ability_punk_rage_sub_3.md#fixed-source-evidence) | Cannot confirm | The partial reconstruction retains the first token; actual game rendering is not asserted or researched further. |


<a id="broker_ability_punk_rage_sub_4"></a>

## Boiling Blood

Full raw template and formatting: [source evidence](broker_ability_punk_rage_sub_4.md#original-english-template-and-reconstruction). Name hash `f8c9fad1`. Every row uses `ui / loc_talent_broker_ability_punk_rage_sub_4_desc / 43686b03`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Listed enemies and upgraded extension | Melee strikes against Elites and Monstrosities extend Rampage! by 1s; diminution begins at 30s; `ui / loc_talent_broker_ability_punk_rage_sub_4_desc / 43686b03` | With the branch active, elite/monster-tagged Melee hits use added_duration 1 and max_duration 30. [Fixed source and line references](broker_ability_punk_rage_sub_4.md#fixed-source-evidence) | Consistent | The stated targets receive the described values; Strikes does not require a kill. |
| Broader tags and ordinary-hit limits | No Specialist/Captain list, separate ordinary-hit rule or exact later extension values; `ui / loc_talent_broker_ability_punk_rage_sub_4_desc / 43686b03` | special/captain tags also qualify; special hits follow 1/2^floor(elapsed/30), ordinary hits retain 0.3/2^floor(elapsed/20); remaining-duration constraints still apply. [Fixed source and line references](broker_ability_punk_rage_sub_4.md#fixed-source-evidence) | Not covered by the description | The wording does not explicitly exclude other tags or promise a universal 30-second upgrade. These retain the original examples and scope limits. |


<a id="broker_ability_focus_sub_3"></a>

## Focused Resolve

Full raw template and formatting: [source evidence](broker_ability_focus_sub_3.md#original-english-template-and-reconstruction). Name hash `26e4c99d`. Every row uses `ui / loc_talent_broker_ability_focus_sub_3_desc / 5ba532cd`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Restoration values | 0.5s for ordinary kills, 1s for Elite/Specialist kills; 5s maximum; `ui / loc_talent_broker_ability_focus_sub_3_desc / 5ba532cd` | Eligible ordinary victims restore 0.5, elite/special victims restore 1; accumulated restoration is capped at 5 per focus state. [Fixed source and line references](broker_ability_focus_sub_3.md#fixed-source-evidence) | Consistent | All three displayed quantities match the accepted values. |
| Actual eligibility and recovery limits | Highlighted Enemies; no Ranged/distance checks, Toxin exception or natural-recovery details; `ui / loc_talent_broker_ability_focus_sub_3_desc / 5ba532cd` | Ordinary kills require Ranged attacks within 12.5 m, without a separate highlight-status check; tracked Needle Pistol Toxin deaths can qualify. Natural recovery pauses, but direct restoration remains possible and the 5-second cap applies per state. [Fixed source and line references](broker_ability_focus_sub_3.md#fixed-source-evidence) | Not covered by the description | These conditions and exceptions supplement the short trigger wording; no omitted detail is counted as an English translation error. |


<a id="broker_ability_focus_sub_2"></a>

## Pick Your Targets

Full raw template and formatting: [source evidence](broker_ability_focus_sub_2.md#original-english-template-and-reconstruction). Name hash `af69e03a`. Every row uses `ui / loc_talent_broker_ability_focus_sub_2_desc / 4946598e`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Rending and Damage values | During Enhanced Desperado: +15% Ranged Rending; kills grant +3% Ranged Damage, stacking 5 times; `ui / loc_talent_broker_ability_focus_sub_2_desc / 4946598e` | Focus gives additive ranged_rending_multiplier 0.15; each damage stack adds ranged_damage 0.03, up to 5 stacks. [Fixed source and line references](broker_ability_focus_sub_2.md#fixed-source-evidence) | Consistent | The values and separate effect types agree; Rending is not direct Damage. |
| Eligibility, refresh and decay | Highlighted enemies; no distance, attack-type, Toxin exception, duration or decay details; `ui / loc_talent_broker_ability_focus_sub_2_desc / 4946598e` | Ordinary kills require Ranged attacks within 12.5 m without a separate highlight check; tracked Needle Pistol Toxin deaths can qualify. Stacks refresh to 3 seconds, expire one at a time and all end with focus. [Fixed source and line references](broker_ability_focus_sub_2.md#fixed-source-evidence) | Not covered by the description | The accepted trigger restrictions and timing supplement the English wording. |


<a id="broker_ability_stimm_field_sub_3"></a>

## Practiced Deployment

Full raw template and formatting: [source evidence](broker_ability_stimm_field_sub_3.md#original-english-template-and-reconstruction). Name hash `e8ac27b2`. Every row uses `ui / loc_talent_broker_ability_stimm_field_sub_3_desc / 88b27852`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Availability and readiness | Once a Stimm becomes available to use (collected or otherwise), Stimm Supply becomes ready; `ui / loc_talent_broker_ability_stimm_field_sub_3_desc / 88b27852` | A newly occupied syringe slot or increased dedicated Stimm charge count restores one full ability charge. [Fixed source and line references](broker_ability_stimm_field_sub_3.md#fixed-source-evidence) | Consistent | Both recorded availability transitions fit collected or otherwise, and restoration fills the one-charge ability. |
| Polling and capacity | Instantly; no polling, initialization or extra-charge storage details; `ui / loc_talent_broker_ability_stimm_field_sub_3_desc / 88b27852` | The server checks every 0.5 seconds; initial availability is only recorded. Restoration is capped at one charge, with independent checks sharing the same cap. [Fixed source and line references](broker_ability_stimm_field_sub_3.md#fixed-source-evidence) | Not covered by the description | The short readiness wording leaves these timing and capacity limits unstated. |


<a id="broker_ability_stimm_field_sub_1"></a>

## Fast Acting Stimms

Full raw template and formatting: [source evidence](broker_ability_stimm_field_sub_1.md#original-english-template-and-reconstruction). Name hash `52cafac2`. Every row uses `ui / loc_talent_broker_ability_stimm_field_sub_1_desc / 8022348e`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Field and effect durations | Stimm Supply lasts 5s; its effects linger 15s after leaving; `ui / loc_talent_broker_ability_stimm_field_sub_1_desc / 8022348e` | The field lifetime becomes 5 seconds, and applied buffs receive 15 seconds of linger on leaving. [Fixed source and line references](broker_ability_stimm_field_sub_1.md#fixed-source-evidence) | Consistent | The field and retained effects have the stated separate durations. |
| Field expiry, re-entry and cooldown | No field-expiry linger, re-entry or cooldown-resumption details; `ui / loc_talent_broker_ability_stimm_field_sub_1_desc / 8022348e` | Expiry also makes existing buffs linger; re-entry reconnects them. The job ends after 5 seconds and natural 60-second recovery resumes, independently of lingering buffs. [Fixed source and line references](broker_ability_stimm_field_sub_1.md#fixed-source-evidence) | Not covered by the description | These conditions retain the original 5 + 60 = 65 second example without treating the 15-second effect as extra field life. |


<a id="broker_ability_stimm_field_sub_2"></a>

## Booby Trap

Full raw template and formatting: [source evidence](broker_ability_stimm_field_sub_2.md#original-english-template-and-reconstruction). Name hash `33d4173c`. Every row uses `ui / loc_talent_broker_ability_stimm_field_sub_2_desc / 59a6d46b`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Expiry and stack amount | Once its duration ends, Stimm Supply explodes; 7 stacks of Chem Toxin; `ui / loc_talent_broker_ability_stimm_field_sub_2_desc / 59a6d46b` | Normal lifetime completion creates one field explosion; an eligible damaged target receives exactly 7 neurotoxin_interval_buff3 stacks. [Fixed source and line references](broker_ability_stimm_field_sub_2.md#fixed-source-evidence) | Consistent | The stated expiry and status amount agree with the accepted evidence. |
| Radius, target conditions and recovery | Nearby Enemies; no radius, positive-Damage requirement, Toxin timing or recovery details; `ui / loc_talent_broker_ability_stimm_field_sub_2_desc / 59a6d46b` | The radius is 3 m. Positive explosion Damage and a target buff extension are required. Toxin has 2.6 s base duration, 0.35 s interval and 30-stack maximum. Ending the field resumes natural recovery; later Toxin Damage is separate. [Fixed source and line references](broker_ability_stimm_field_sub_2.md#fixed-source-evidence) | Not covered by the description | These clarify the nearby-target scope and status behavior without converting stacks into a fixed total Damage claim. |


<a id="broker_passive_improved_dodges"></a>

## Nimble

Full raw template and formatting: [source evidence](broker_passive_improved_dodges.md#original-english-template-and-reconstruction). Name hash `322d89e8`. Every row uses `ui / loc_talent_broker_passive_improved_dodges_desc_02 / 1cc9786f`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Speed and added Dodging time | Dodge Speed increased by +25%; time considered Dodging by +0.15s; `ui / loc_talent_broker_passive_improved_dodges_desc_02 / 1cc9786f` | The multiplicative Dodge speed stat is 1.25; the added dodge_linger_time is 0.15 seconds. [Fixed source and line references](broker_passive_improved_dodges.md#fixed-source-evidence) | Consistent | Both quantities and the stated speed/check-window effect types match. |
| Attack-specific windows and scope | No Melee/grab versus Ranged windows, motion-duration or consecutive-Dodge details; `ui / loc_talent_broker_passive_improved_dodges_desc_02 / 1cc9786f` | Melee/grab checks use 0.25 + 0.15 = 0.40 s; Ranged checks use 0 + 0.15 = 0.15 s. An unchanged path takes approximately 0.8 times the original time, subject to curve/weapon modifiers; Dodge count and recovery are unchanged. [Fixed source and line references](broker_passive_improved_dodges.md#fixed-source-evidence) | Not covered by the description | These explain existing limits without implying every attack must be avoided. |


<a id="broker_keystone_adrenaline_junkie"></a>

## Adrenaline Frenzy

Full raw template and formatting: [source evidence](broker_keystone_adrenaline_junkie.md#original-english-template-and-reconstruction). Name hash `016dda96`. Every row uses `ui / loc_talent_broker_keystone_adrenaline_junkie_desc / b4493ff1`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Stack cycle and Frenzy values | Melee hit grants one stack, Critical hit +1 additional; one stack lost after 2s without a gain; at 30, clear stacks and gain 10s Frenzy with +10% Attack Speed and +25% Melee Damage; `ui / loc_talent_broker_keystone_adrenaline_junkie_desc / b4493ff1` | Ordinary Melee hits give 1, Critical Melee hits 2 total; 2 s shared expiry removes one stack. Reaching 30 clears Adrenaline and applies the 10 s Frenzy with melee_attack_speed 0.1 and melee_damage 0.25. [Fixed source and line references](broker_keystone_adrenaline_junkie.md#fixed-source-evidence) | Consistent | The stated gains, threshold, decay interval, duration and numerical bonuses match the accepted values. |
| Scope, timer refresh and calculation | Attack Speed; no explicit Ranged bonus, sequential timer resets, retrigger refresh or additive calculation details; `ui / loc_talent_broker_keystone_adrenaline_junkie_desc / b4493ff1` | The speed stat applies to Melee. Gain/removal resets the 2 s stack timer; retriggering refreshes 10 s Frenzy. Damage adds in the same-stage pool, e.g. 100 × (1 + 0.20 + 0.25) = 145. [Fixed source and line references](broker_keystone_adrenaline_junkie.md#fixed-source-evidence) | Not covered by the description | These clarify scope and timing without counting absent qualifiers or formulas as English errors. |


<a id="broker_keystone_vultures_mark_on_kill"></a>

## Vulture's Mark

Full raw template and formatting: [source evidence](broker_keystone_vultures_mark_on_kill.md#original-english-template-and-reconstruction). Name hash `a46e752f`. Every row uses `ui / loc_talent_broker_keystone_vultures_mark_on_kill_desc / 5b5c21fe`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Standard acquisition, bonuses and restoration | Ranged Special/Elite kill grants an 8s Mark, up to 3; each gives +5% Ranged Damage, Ranged Critical Chance and Movement Speed; qualifying kills at the cap restore 15% Toughness to self/Allies in Coherency; `ui / loc_talent_broker_keystone_vultures_mark_on_kill_desc / 5b5c21fe` | Standard on_kill requires died, elite/special and Ranged classification. Three per-stack stats are 0.05; at_max_stacks qualifying kills restore replenish_percentage(0.15) to Coherency units. [Fixed source and line references](broker_keystone_vultures_mark_on_kill.md#fixed-source-evidence) | Consistent | The listed standard trigger, values and recipient scope agree with accepted evidence. |
| Expiry, Toxin exception and calculation limits | No shared expiry, weapon exception, additive pools, Critical Chance cap or Toughness-deficit details; `ui / loc_talent_broker_keystone_vultures_mark_on_kill_desc / 5b5c21fe` | All stacks expire together 8 s after the last gain, or 12 s with Patient Hunter. Tracked secondary-slot Needle Pistol Close Range Toxin deaths also grant a stack. Damage adds, Critical Chance adds percentage points and clamps to 0%–100%; restoration cannot exceed missing Toughness. [Fixed source and line references](broker_keystone_vultures_mark_on_kill.md#fixed-source-evidence) | Not covered by the description | These preserve the separate standard/full-stack checks and original calculations without treating omitted exceptions as English errors. |


<a id="broker_keystone_chemical_dependency"></a>

## Chemical Dependency

Full raw template and formatting: [source evidence](broker_keystone_chemical_dependency.md#original-english-template-and-reconstruction). Name hash `3c3f00ca`. Every row uses `ui / loc_talent_broker_keystone_chemical_dependency_desc / e80edf15`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Trigger, duration, cap and decay | Stimm use grants Dependency for 90s, up to 3; stacks decay one at a time; `ui / loc_talent_broker_keystone_chemical_dependency_desc / e80edf15` | on_syringe_used adds a stack; base duration 90 and maximum 3; removal restarts the timer and decay is sequential. [Fixed source and line references](broker_keystone_chemical_dependency.md#fixed-source-evidence) | Consistent | The stated stack cycle agrees with accepted evidence. |
| Cooldown percentage terminology | Each stack grants +10% Ability Cooldown Reduction; `ui / loc_talent_broker_keystone_chemical_dependency_desc / e80edf15` | The mapped combat_ability_resource_regen_modifier adds 0.10 per stack to recovery rate; 3 stacks give 1.30, with isolated 60 ÷ 1.30 ≈ 46.15 s recovery. [Fixed source and line references](broker_keystone_chemical_dependency.md#fixed-source-evidence) | Cannot confirm | English does not define the percentage's measurement. The evidence confirms increased recovery rate, not an equal percentage directly subtracted from elapsed cooldown. |
| Field events, timer refresh and assumptions | No field syringe event, capped-use refresh or recovery assumptions; `ui / loc_talent_broker_keystone_chemical_dependency_desc / e80edf15` | Field recipients also receive on_syringe_used; gains/capped uses refresh the shared timer. Natural recovery pauses and other modifiers can affect actual time; the Toughness upgrade can still restore 50% at the cap. [Fixed source and line references](broker_keystone_chemical_dependency.md#fixed-source-evidence) | Not covered by the description | These preserve the accepted trigger scope and limits without creating new recovery examples. |


<a id="broker_keystone_chemical_dependency_sub_1"></a>

## Chem Enhanced

Full raw template and formatting: [source evidence](broker_keystone_chemical_dependency_sub_1.md#original-english-template-and-reconstruction). Name hash `6d979983`. Every row uses `ui / loc_talent_broker_keystone_chemical_dependency_sub_1_desc / 3356ae07`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Per-stack Critical Chance | Each Dependency stack additionally grants +5% Critical Hit Chance; `ui / loc_talent_broker_keystone_chemical_dependency_sub_1_desc / 3356ae07` | The enabled general critical_strike_chance value is 0.05 per stack and enters both Melee and Ranged chance calculations. [Fixed source and line references](broker_keystone_chemical_dependency_sub_1.md#fixed-source-evidence) | Consistent | The effect type and per-stack value agree. |
| Additive chance, clamp and inherited timing | No base-chance calculation, final clamp or stack-timing details; `ui / loc_talent_broker_keystone_chemical_dependency_sub_1_desc / 3356ae07` | One/two/three stacks add 5/10/15 percentage points; base 10% + 15 points = 25% before other modifiers. Final chance clamps to 0%–100%; duration, cap, recovery and sequential decay follow the core buff. [Fixed source and line references](broker_keystone_chemical_dependency_sub_1.md#fixed-source-evidence) | Not covered by the description | These preserve the original chance examples and limits without treating missing formulas as English errors. |


<a id="broker_keystone_chemical_dependency_sub_2"></a>

## Chem Fortified

Full raw template and formatting: [source evidence](broker_keystone_chemical_dependency_sub_2.md#original-english-template-and-reconstruction). Name hash `a78f9241`. Every row uses `ui / loc_talent_broker_keystone_chemical_dependency_sub_2_desc / bd5bf1c2`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Restoration and per-stack Toughness reduction | Stimm use replenishes 50% Toughness; each Dependency stack grants +5% Toughness Damage Reduction; `ui / loc_talent_broker_keystone_chemical_dependency_sub_2_desc / bd5bf1c2` | Each syringe event restores replenish_percentage(0.5); each enabled stack applies toughness_damage_taken_multiplier 0.95. [Fixed source and line references](broker_keystone_chemical_dependency_sub_2.md#fixed-source-evidence) | Consistent | The restoration amount and each individual stack's Toughness-specific reduction agree. |
| Stack combination and restoration limits | No multiplicative combination, missing-Toughness limit or capped-use detail; `ui / loc_talent_broker_keystone_chemical_dependency_sub_2_desc / bd5bf1c2` | Three stacks multiply to 0.857375, approximately 14.26% less Toughness Damage. Restoration precedes stack addition, still executes at the cap and is limited by the deficit/other modifiers; Health Damage is not directly reduced. [Fixed source and line references](broker_keystone_chemical_dependency_sub_2.md#fixed-source-evidence) | Not covered by the description | The wording specifies each stack's effect without claiming additive total reduction. |


<a id="broker_keystone_chemical_dependency_sub_3"></a>

## Maxed Out Chems

Full raw template and formatting: [source evidence](broker_keystone_chemical_dependency_sub_3.md#original-english-template-and-reconstruction). Name hash `fdf59fed`. Every row uses `ui / loc_talent_broker_keystone_chemical_dependency_sub_3_desc / 80f78eef`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Upgraded duration and stack cap | Dependency now lasts 60s per stack; Max Stacks increased to 4; `ui / loc_talent_broker_keystone_chemical_dependency_sub_3_desc / 80f78eef` | The upgrade adds one to max_stacks/max_stacks_cap and changes duration by −30 s, yielding 4 stacks and 60 s. [Fixed source and line references](broker_keystone_chemical_dependency_sub_3.md#fixed-source-evidence) | Consistent | The final duration and cap match the stated tradeoff. |
| Shared timer, recovery and capped-use behavior | No shared-timer refresh, sequential decay or recovery calculation details; `ui / loc_talent_broker_keystone_chemical_dependency_sub_3_desc / 80f78eef` | Gain/removal refreshes the shared 60 s timer; capped uses refresh without adding a fifth stack. Four unchanged 0.10 recovery bonuses give 1.40 rate and isolated 60 ÷ 1.40 ≈ 42.86 s recovery. [Fixed source and line references](broker_keystone_chemical_dependency_sub_3.md#fixed-source-evidence) | Not covered by the description | These retain the original timing and recovery examples without adding new mechanism analysis. |


<a id="broker_keystone_vultures_mark_aoe_stagger"></a>

## Vulture's Push

Full raw template and formatting: [source evidence](broker_keystone_vultures_mark_aoe_stagger.md#original-english-template-and-reconstruction). Name hash `763b07e9`. Every row uses `ui / loc_talent_broker_keystone_vultures_mark_aoe_stagger_desc / d98831c7`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Ranged kill trigger and player-centred effect | Killing Elite or Special enemies with Ranged Attacks; enemies around you; `ui / loc_talent_broker_keystone_vultures_mark_aoe_stagger_desc / d98831c7` | The on_kill check requires died, elite/special and Ranged classification; the explosion is centred at player position + 0.65 m. [Fixed source and line references](broker_keystone_vultures_mark_aoe_stagger.md#fixed-source-evidence) | Consistent | The trigger and location agree with the accepted evidence. |
| Universal knockback result | Knocks all enemies around you backwards; `ui / loc_talent_broker_keystone_vultures_mark_aoe_stagger_desc / d98831c7` | The 3 m villains-filtered explosion requests medium Stagger, with Impact 0.55 modified by armour and resistance/state; attack Power is 0. Actual displacement is target-dependent, and the separate Toxin Mark event does not automatically trigger this handler. [Fixed source and line references](broker_keystone_vultures_mark_aoe_stagger.md#fixed-source-evidence) | Cannot confirm | The accepted evidence does not guarantee the stated backwards displacement for every enemy and state. Other omitted area/handler limits remain supplements. |


<a id="broker_keystone_vultures_mark_increased_duration"></a>

## Patient Hunter

Full raw template and formatting: [source evidence](broker_keystone_vultures_mark_increased_duration.md#original-english-template-and-reconstruction). Name hash `2c5bc480`. Every row uses `ui / loc_talent_broker_keystone_vultures_mark_increased_duration_desc / 2a61076a`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Final Mark duration | Duration of Vulture's Mark extended to 12s; `ui / loc_talent_broker_keystone_vultures_mark_increased_duration_desc / 2a61076a` | The core 8 s gains the 12 − 8 = 4 s difference, for 12 s total. [Fixed source and line references](broker_keystone_vultures_mark_increased_duration.md#fixed-source-evidence) | Consistent | The stated final duration matches the accepted setting. |
| Shared refresh, expiry and separate effects | No capped-use refresh, shared expiry or separate Dodge duration details; `ui / loc_talent_broker_keystone_vultures_mark_increased_duration_desc / 2a61076a` | Gain or capped qualifying kill refreshes one 12 s timer; all remaining Marks expire together. The cap stays at 3, other bonuses/restoration checks remain unchanged, and Vulture's Dodge stays at 1 s. [Fixed source and line references](broker_keystone_vultures_mark_increased_duration.md#fixed-source-evidence) | Not covered by the description | These preserve the original 0/6/18-second timing and fourth-kill cap examples. |


<a id="broker_keystone_vultures_mark_dodge_on_ranged_crit"></a>

## Vulture's Dodge

Full raw template and formatting: [source evidence](broker_keystone_vultures_mark_dodge_on_ranged_crit.md#original-english-template-and-reconstruction). Name hash `18262d3b`. Every row uses `ui / loc_talent_broker_keystone_vultures_mark_dodge_on_ranged_crit_desc / c8880e0b`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Trigger and duration | Ranged Critical Hits; for 1s; `ui / loc_talent_broker_keystone_vultures_mark_dodge_on_ranged_crit_desc / c8880e0b` | on_crit_ranged requires a Critical hit and Ranged classification; the triggered buff has duration 1. [Fixed source and line references](broker_keystone_vultures_mark_dodge_on_ranged_crit.md#fixed-source-evidence) | Consistent | The listed trigger and duration match. |
| Universal attack coverage | Count as Dodging against all Attacks; `ui / loc_talent_broker_keystone_vultures_mark_dodge_on_ranged_crit_desc / c8880e0b` | The buff only sets count_as_dodge_vs_melee and count_as_dodge_vs_ranged; Dodge.is_dodging uses them for melee/incapacitating_grab and ranged. It has no count_as_dodge_vs_all and does not cover types outside those branches. [Fixed source and line references](broker_keystone_vultures_mark_dodge_on_ranged_crit.md#fixed-source-evidence) | Explicit contradiction | All Attacks is explicitly broader than the accepted attack-branch coverage. |
| Refresh and avoidance limits | No repeated-trigger timing, motion or attack-logic details; `ui / loc_talent_broker_keystone_vultures_mark_dodge_on_ranged_crit_desc / c8880e0b` | One stack refreshes for 1 s; a trigger at 0.6 s extends an initial 0 s trigger to 1.6 s. No movement state, speed, distance or Damage change is applied; avoidance depends on each attack using its Dodge rules. [Fixed source and line references](broker_keystone_vultures_mark_dodge_on_ranged_crit.md#fixed-source-evidence) | Not covered by the description | These preserve the original timing and functional limits rather than adding further contradiction rows. |


<a id="broker_keystone_adrenaline_junkie_sub_1"></a>

## Adrenaline Assassin

Full raw template and formatting: [source evidence](broker_keystone_adrenaline_junkie_sub_1.md#original-english-template-and-reconstruction). Name hash `f9457720`. Every row uses `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_1_desc / 02bab200`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Additional Weakspot and regular grants | Weakspot Hits grant +2 additional Adrenaline stacks; Regular Melee Hits grant none; `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_1_desc / 02bab200` | Weakspot Melee hits use the original 1 plus 2 additional stacks; the ordinary non-Weakspot grant becomes 0. [Fixed source and line references](broker_keystone_adrenaline_junkie_sub_1.md#fixed-source-evidence) | Consistent | Additional identifies the bonus rather than the final Weakspot total; the regular grant is removed. |
| Independent Critical grant and limits | No removal of the core Critical bonus, Ranged Weakspot eligibility or cap/timing detail; `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_1_desc / 02bab200` | Critical grant 1 remains independent: non-Weakspot/non-Critical 0, non-Weakspot/Critical 1, Weakspot/non-Critical 3, Weakspot/Critical 4. Only Melee qualifies, with the core 30-stack cap, timing and Frenzy effects. [Fixed source and line references](broker_keystone_adrenaline_junkie_sub_1.md#fixed-source-evidence) | Not covered by the description | These preserve all four original cases without reading Regular as cancelling the separately defined Critical bonus. |


<a id="broker_keystone_adrenaline_junkie_sub_3"></a>

## Stoked Rage

Full raw template and formatting: [source evidence](broker_keystone_adrenaline_junkie_sub_3.md#original-english-template-and-reconstruction). Name hash `6d1091f8`. Every row uses `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_3_desc / 95b51a39`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Final Frenzy duration | Increase duration of Adrenaline Frenzy to 20s; `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_3_desc / 95b51a39` | The 10 s base gains add_duration(20 − 10), yielding 20 s total. [Fixed source and line references](broker_keystone_adrenaline_junkie_sub_3.md#fixed-source-evidence) | Consistent | To specifies the final duration, which agrees with accepted evidence. |
| Retrigger refresh and unchanged core rules | No single-buff refresh or unchanged stacking/bonus details; `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_3_desc / 95b51a39` | max_stacks 1 and refresh_duration_on_stack restart 20 s on retrigger; at 18 s another full 20 s begins. Adrenaline keeps its 2 s timer and 30-stack cap; Frenzy retains melee_attack_speed 0.10 and melee_damage 0.25. [Fixed source and line references](broker_keystone_adrenaline_junkie_sub_3.md#fixed-source-evidence) | Not covered by the description | These preserve the original timing example and scope of the duration-only upgrade. |


<a id="broker_keystone_adrenaline_junkie_sub_5"></a>

## Adrenaline Unbound

Full raw template and formatting: [source evidence](broker_keystone_adrenaline_junkie_sub_5.md#original-english-template-and-reconstruction). Name hash `c11b1c30`. Every row uses `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_5_desc / 1af84a83`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Frenzy condition and recovery rate | While Frenzy is active, replenish 5% Toughness each second; `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_5_desc / 1af84a83` | The server Frenzy buff enables `restore_toughness = 0.05` and replenishes at 1-second intervals. [Fixed source and line references](broker_keystone_adrenaline_junkie_sub_5.md#fixed-source-evidence) | Consistent | The stated condition and percentage match the accepted mechanism. |
| Recovery basis, cap, and first tick | No maximum-Toughness basis, deficit limit, or first-tick timing is stated; `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_5_desc / 1af84a83` | Recovery uses maximum Toughness, respects the current deficit and recovery modifiers, and initializes `next_tick = t`. [Fixed source and line references](broker_keystone_adrenaline_junkie_sub_5.md#fixed-source-evidence) | Not covered by the description | These limits and timing details supplement the short description. |


<a id="broker_keystone_adrenaline_junkie_sub_4"></a>

## Uncontrolled Aggression

Full raw template and formatting: [source evidence](broker_keystone_adrenaline_junkie_sub_4.md#original-english-template-and-reconstruction). Name hash `b6f65f02`. Every row uses `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_4_desc / fb871cba`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Final Adrenaline duration | Increase duration of Adrenaline to 4s; `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_4_desc / fb871cba` | The 2-second core timer gains 4 − 2 seconds, yielding a final duration of 4 seconds. [Fixed source and line references](broker_keystone_adrenaline_junkie_sub_4.md#fixed-source-evidence) | Consistent | To describes the final duration, rather than an additional 4 seconds. |
| Shared decay timer and cap behavior | No timer-reset or cap-clearing details are stated; `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_4_desc / fb871cba` | Gains reset the shared timer; each expired stack removal resets it to 4 seconds. At 30 stacks, the core triggers Frenzy and clears Adrenaline. [Fixed source and line references](broker_keystone_adrenaline_junkie_sub_4.md#fixed-source-evidence) | Not covered by the description | The shared timing and unchanged cap rules supplement the stated duration. |


<a id="broker_keystone_adrenaline_junkie_sub_2"></a>

## Adrenaline Smiter

Full raw template and formatting: [source evidence](broker_keystone_adrenaline_junkie_sub_2.md#original-english-template-and-reconstruction). Name hash `11bcd450`. Every row uses `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_2_desc / e0b9d68a`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Additional kill grants and non-killing exclusion | Killing Blows grant +4 additional Adrenaline stacks; Elite Killing Blows grant +10 additional stacks; Non-Killing Blows grant none; `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_2_desc / e0b9d68a` | `on_hit` returns; `on_kill` runs core hit/Critical grants, then adds 4 and another 10 for an Elite kill. [Fixed source and line references](broker_keystone_adrenaline_junkie_sub_2.md#fixed-source-evidence) | Consistent | The English uses additional amounts, not final totals. Ordinary kills yield 5/6 and Elite kills 15/16 under the stated assumptions. |
| Melee scope, classification, and core constraints | No attack-type, tag, cap, or decay details are stated; `ui / loc_talent_broker_keystone_adrenaline_junkie_sub_2_desc / e0b9d68a` | Only `attack_type = melee` qualifies; the extra 10 requires `tags.elite`, not a `special` tag alone. Stacks retain the core's cap, timing, decay, and interactions with other special rules. [Fixed source and line references](broker_keystone_adrenaline_junkie_sub_2.md#fixed-source-evidence) | Not covered by the description | These conditions complete the accepted mechanism without contradicting the English. |


<a id="broker_passive_longer_dodges"></a>

## Alley Rat

Full raw template and formatting: [source evidence](broker_passive_longer_dodges.md#original-english-template-and-reconstruction). Name hash `f8484bf1`. Every row uses `ui / loc_talent_broker_passive_longer_dodges_desc / 22b08fe3`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Distance stat and amount | +50% Dodge Distance; `ui / loc_talent_broker_passive_longer_dodges_desc / 22b08fe3` | `dodge_distance_modifier = 0.5` is an `additive_multiplier`, giving a base distance factor of 1 + 0.5 = 1.5. [Fixed source and line references](broker_passive_longer_dodges.md#fixed-source-evidence) | Consistent | The English names distance, and its percentage agrees with the accepted stat. |
| Final distance and unchanged Dodge properties | No weapon, diminishing-return, sticky, or other Dodge-property details are stated; `ui / loc_talent_broker_passive_longer_dodges_desc / 22b08fe3` | Final distance includes weapon scaling, diminishing returns, and sticky factors. The talent does not increase speed, consecutive-Dodge allowance, or checking duration. [Fixed source and line references](broker_passive_longer_dodges.md#fixed-source-evidence) | Not covered by the description | These explain the stated distance bonus and qualify the original distance examples. |


<a id="broker_passive_close_range_damage_on_dodge"></a>

## Quick and Deadly

Full raw template and formatting: [source evidence](broker_passive_close_range_damage_on_dodge.md#original-english-template-and-reconstruction). Name hash `d3130281`. Every row uses `ui / loc_talent_broker_passive_close_range_damage_on_dodge_desc / 0410a6ec`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Successful Dodge trigger, amount, and duration | +15% Close Range Damage for 3s after a Successful Dodge; `ui / loc_talent_broker_passive_close_range_damage_on_dodge_desc / 0410a6ec` | `on_successful_dodge` activates `damage_near = 0.15` for `active_duration = 3`; the Damage calculation is not restricted to Ranged attacks. [Fixed source and line references](broker_passive_close_range_damage_on_dodge.md#fixed-source-evidence) | Consistent | The English states the matching trigger, amount, and duration and does not claim Ranged-only scope. |
| Distance falloff, combination, and refresh | No falloff formula, additive-stage, or retrigger details are stated; `ui / loc_talent_broker_passive_close_range_damage_on_dodge_desc / 0410a6ec` | The full 15% applies through 12.5 m, falls to zero at 30 m using the square-root interpolation, and adds to `damage_stat_buffs`. Retriggering resets the 3-second duration without stacking. [Fixed source and line references](broker_passive_close_range_damage_on_dodge.md#fixed-source-evidence) | Not covered by the description | These explain the verified examples and timer behavior without contradicting the short wording. |


<a id="broker_passive_first_target_damage"></a>

## A Tertium Welcome

Full raw template and formatting: [source evidence](broker_passive_first_target_damage.md#original-english-template-and-reconstruction). Name hash `48e421bf`. Every row uses `ui / loc_talent_broker_passive_first_target_damage_desc / 4ebbdbb2`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| First target of each Melee attack | +15% Melee Damage on first Enemy hit with each attack; `ui / loc_talent_broker_passive_first_target_damage_desc / 4ebbdbb2` | The permanent 0.15 modifier requires both `is_first_target` and `is_melee_attack`. [Fixed source and line references](broker_passive_first_target_damage.md#fixed-source-evidence) | Consistent | The English correctly identifies the amount, attack type, and first-target restriction. |
| Damage combination and permanent effect | No additive-stage, stack, timer, or cooldown details are stated; `ui / loc_talent_broker_passive_first_target_damage_desc / 4ebbdbb2` | The modifier adds at the Damage-bonus stage and has no stacks, duration, or cooldown. [Fixed source and line references](broker_passive_first_target_damage.md#fixed-source-evidence) | Not covered by the description | These supplement the wording and support the original Damage example. |


<a id="broker_passive_close_ranged_damage"></a>

## In Your Face

Full raw template and formatting: [source evidence](broker_passive_close_ranged_damage.md#original-english-template-and-reconstruction). Name hash `f80ef4b2`. Every row uses `ui / loc_talent_broker_passive_close_ranged_damage_desc / be48df80`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Near/far amounts and distances | +25% Ranged Damage within 12.5 m, scaling down to a minimum of +10% at 30 m and beyond; `ui / loc_talent_broker_passive_close_ranged_damage_desc / be48df80` | The conditional stats supply near 0.25 and far 0.1, with the accepted range endpoints 12.5 m and 30 m. [Fixed source and line references](broker_passive_close_ranged_damage.md#fixed-source-evidence) | Consistent | The English correctly states both endpoints and the minimum beyond the far range. |
| Wielded-slot condition and interpolation | No separate wielded-slot condition, square-root formula, or additive stage is stated; `ui / loc_talent_broker_passive_close_ranged_damage_desc / be48df80` | `wielded_slot == slot_secondary` enables both stats; `distance_damage_buff` uses square-root interpolation and adds to general `damage_stat_buffs`. [Fixed source and line references](broker_passive_close_ranged_damage.md#fixed-source-evidence) | Not covered by the description | Ranged Damage does not explicitly define an exclusive attack-type check. The accepted condition and formula complete the description. |


<a id="broker_passive_restore_toughness_on_weakspot_kill"></a>

## Precision Violence

Full raw template and formatting: [source evidence](broker_passive_restore_toughness_on_weakspot_kill.md#original-english-template-and-reconstruction). Name hash `f58949f3`. Every row uses `ui / loc_talent_broker_passive_restore_toughness_on_weakspot_kill_desc / d91c10cd`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Melee hit types and recovery values | Melee Hits replenish 4%; Critical Strikes or Weakspot Hits instead replenish 8%; Critical Weakspot Strikes replenish 12%; `ui / loc_talent_broker_passive_restore_toughness_on_weakspot_kill_desc / d91c10cd` | Eligible Melee hits use the corresponding full recovery percentage, without requiring a kill. [Fixed source and line references](broker_passive_restore_toughness_on_weakspot_kill.md#fixed-source-evidence) | Consistent | The English's hit conditions and replacement values match the accepted mechanism. |
| Same-attack gate and recovery limits | No same-attack tracking, instakill exclusion, or recovery-basis details are stated; `ui / loc_talent_broker_passive_restore_toughness_on_weakspot_kill_desc / d91c10cd` | Only a higher percentage triggers again in the same attack, but it restores the full value: 4→8→12 can total 24%, whereas 12→8/4 adds nothing. Recovery excludes `is_instakill`, uses maximum Toughness and recovery modifiers, and caps at the deficit. [Fixed source and line references](broker_passive_restore_toughness_on_weakspot_kill.md#fixed-source-evidence) | Not covered by the description | The English does not promise a 12% per-swing cap or recovery from every cleaved target. These are supplementary constraints. |


<a id="broker_passive_restore_toughness_on_close_ranged_kill"></a>

## Voice of Tertium

Full raw template and formatting: [source evidence](broker_passive_restore_toughness_on_close_ranged_kill.md#original-english-template-and-reconstruction). Name hash `07db222a`. Every row uses `ui / loc_talent_broker_passive_restore_toughness_on_close_ranged_kill_desc / 7f8728ae`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Ranged kills and replacement amount | Replenish +8% Toughness on Ranged Kill; Elites and Specials instead replenish +15%; `ui / loc_talent_broker_passive_restore_toughness_on_close_ranged_kill_desc / 7f8728ae` | Qualifying kills use 0.08, or 0.15 for an Elite/Specialist, without adding the two. [Fixed source and line references](broker_passive_restore_toughness_on_close_ranged_kill.md#fixed-source-evidence) | Consistent | Ranged kills and the replacement wording agree with accepted evidence. |
| Close-range and recovery constraints | No distance limit, positional check, or recovery basis is stated; `ui / loc_talent_broker_passive_restore_toughness_on_close_ranged_kill_desc / 7f8728ae` | `on_ranged_close_kill` checks death, Ranged or `count_as_ranged_attack`, and squared hit-position/attacker distance ≤12.5². Recovery uses maximum Toughness and is capped by the deficit. [Fixed source and line references](broker_passive_restore_toughness_on_close_ranged_kill.md#fixed-source-evidence) | Not covered by the description | The omitted close-range requirement and recovery limits supplement the wording; no all-range claim is explicit. |


<a id="broker_passive_ninja_grants_crit_chance"></a>

## Float Like a Butterfly

Full raw template and formatting: [source evidence](broker_passive_ninja_grants_crit_chance.md#original-english-template-and-reconstruction). Name hash `8d3c884d`. Every row uses `ui / loc_talent_broker_passive_ninja_grants_crit_chance_desc / 43d506f8`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Triggers, chance bonus, and duration | Perfect Blocks and Successful Dodges grant +20% Critical Strike Chance for 3s; `ui / loc_talent_broker_passive_ninja_grants_crit_chance_desc / 43d506f8` | Both events independently activate the same 0.2 chance stat for 3 seconds; `proc_chance = 1`. [Fixed source and line references](broker_passive_ninja_grants_crit_chance.md#fixed-source-evidence) | Consistent | The English lists the matching triggers, bonus, and duration. |
| Chance calculation and retriggering | No chance-combination, clamp, or retrigger details are stated; `ui / loc_talent_broker_passive_ninja_grants_crit_chance_desc / 43d506f8` | `CriticalStrike.chance` adds chance values and clamps to 0..1. `max_stacks = 1` and `allow_proc_while_active = true` allow a duration reset without another bonus. [Fixed source and line references](broker_passive_ninja_grants_crit_chance.md#fixed-source-evidence) | Not covered by the description | These qualify the percentage and preserve the original chance examples. |


<a id="broker_passive_reload_speed_on_close_kill"></a>

## Speedloader

Full raw template and formatting: [source evidence](broker_passive_reload_speed_on_close_kill.md#original-english-template-and-reconstruction). Name hash `e3392d09`. Every row uses `ui / loc_talent_broker_passive_reload_speed_on_close_kill_desc / f9ccd2c5`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Close Ranged kill and Reload Speed | +30% Reload Speed for 8s on Close Ranged Kill; `ui / loc_talent_broker_passive_reload_speed_on_close_kill_desc / f9ccd2c5` | A qualifying close-range Ranged kill applies `reload_speed = 0.3` for 8 seconds. [Fixed source and line references](broker_passive_reload_speed_on_close_kill.md#fixed-source-evidence) | Consistent | The English explicitly names both close range and Ranged kills and matches the bonus and duration. |
| Threshold, refresh, timing, and Needle Pistol exception | No exact close-range threshold, refresh, action-time formula, or Toxin exception is stated; `ui / loc_talent_broker_passive_reload_speed_on_close_kill_desc / f9ccd2c5` | The effect uses 12.5 m and refreshes one buff. Accelerable action time divides by the combined Reload Speed factor. Tracked Needle Pistol targets can also qualify on a close Toxin death, using the event attacker and without a separate final-owner check. [Fixed source and line references](broker_passive_reload_speed_on_close_kill.md#fixed-source-evidence) | Not covered by the description | These supplement the trigger and preserve the accepted timing examples and attribution limits. |


<a id="broker_passive_stun_immunity_on_toughness_broken"></a>

## Burst of Energy

Full raw template and formatting: [source evidence](broker_passive_stun_immunity_on_toughness_broken.md#original-english-template-and-reconstruction). Name hash `42123092`. Every row uses `ui / loc_talent_broker_passive_stun_immunity_on_toughness_broken_desc / 261ee901`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Toughness-break effect and configured values | Gain Stun Immunity for 6s and restore +50% Toughness when Toughness is broken; 10s Cooldown; `ui / loc_talent_broker_passive_stun_immunity_on_toughness_broken_desc / 261ee901` | The self Toughness-break event enables `stun_immune` for 6 seconds and replenishes 0.5; the configured cooldown is 10 seconds. [Fixed source and line references](broker_passive_stun_immunity_on_toughness_broken.md#fixed-source-evidence) | Consistent | The trigger, recovery value, active duration, and cooldown value match. |
| Cooldown start and recovery basis | No cooldown start point or maximum-Toughness basis is stated; `ui / loc_talent_broker_passive_stun_immunity_on_toughness_broken_desc / 261ee901` | The cooldown check uses `active_start + active_duration + cooldown`; it begins after the active 6 seconds. The recovery uses maximum Toughness, and the event must refer to the talent owner. [Fixed source and line references](broker_passive_stun_immunity_on_toughness_broken.md#fixed-source-evidence) | Not covered by the description | The wording does not promise a 10-second total trigger interval; these details supplement it. |


<a id="base_toughness_node_buff_medium_1"></a>

## Toughness Boost

Full raw template and formatting: [source evidence](base_toughness_node_buff_medium_1.md#original-english-template-and-reconstruction). Name hash `65a72c01`. Every row uses `ui / loc_talent_toughness_boost_medium_desc / 329702b6`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Fixed Toughness increase | +25 Toughness; `ui / loc_talent_toughness_boost_medium_desc / 329702b6` | The one-tier node uses `talent_overrides[1]` with `toughness = 25`, rather than the template default 15. [Fixed source and line references](base_toughness_node_buff_medium_1.md#fixed-source-evidence) | Consistent | The reconstructed English value matches the accepted tier override. |
| Maximum-Toughness calculation | No maximum-stat wording or calculation order is stated; `ui / loc_talent_toughness_boost_medium_desc / 329702b6` | `max_toughness` adds the breed base and `stat_buffs.toughness`, multiplies by `toughness_bonus`, applies `ceil`, then adds the flat value. [Fixed source and line references](base_toughness_node_buff_medium_1.md#fixed-source-evidence) | Not covered by the description | The short stat label leaves the maximum-stat basis and combination order implicit. |


<a id="broker_passive_stamina_on_successful_dodge"></a>

## Regained Posture

Full raw template and formatting: [source evidence](broker_passive_stamina_on_successful_dodge.md#original-english-template-and-reconstruction). Name hash `296a3ab9`. Every row uses `ui / loc_talent_broker_passive_stamina_on_successful_dodge_desc / 022ffbe4`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Successful Dodge and recovery amount | +10% Stamina on Successful Dodge; `ui / loc_talent_broker_passive_stamina_on_successful_dodge_desc / 022ffbe4` | `on_successful_dodge` calls `Stamina.add_stamina(percentage = 0.1)`. [Fixed source and line references](broker_passive_stamina_on_successful_dodge.md#fixed-source-evidence) | Consistent | The trigger and percentage match the accepted recovery. |
| Maximum-Stamina basis and cap | No current-weapon/property basis or cap is stated; `ui / loc_talent_broker_passive_stamina_on_successful_dodge_desc / 022ffbe4` | Recovery uses maximum Stamina determined by the current weapon and properties, without exceeding the cap. [Fixed source and line references](broker_passive_stamina_on_successful_dodge.md#fixed-source-evidence) | Not covered by the description | These specify the amount's basis and qualify the original recovery example. |


<a id="broker_passive_dodge_melee_on_slide"></a>

## Slippery Customer

Full raw template and formatting: [source evidence](broker_passive_dodge_melee_on_slide.md#original-english-template-and-reconstruction). Name hash `abb5fdd2`. Every row uses `ui / loc_talent_broker_passive_dodge_melee_on_slide_desc / 2eb1aa86`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Sliding and Melee Dodge state | While sliding, count as Dodging against Melee Attacks; `ui / loc_talent_broker_passive_dodge_melee_on_slide_desc / 2eb1aa86` | `movement_state.method == sliding` enables `count_as_dodge_vs_melee`. [Fixed source and line references](broker_passive_dodge_melee_on_slide.md#fixed-source-evidence) | Consistent | The English correctly describes a conditional Dodging state. |
| Checking branches and Successful Dodge events | No grab branch or actual avoidance/event distinction is stated; `ui / loc_talent_broker_passive_dodge_melee_on_slide_desc / 2eb1aa86` | `Dodge.is_dodging` reads the keyword for `melee` and `incapacitating_grab`. Sliding alone is not a Successful Dodge; related talents require avoiding a qualifying attack. It is not universal Damage immunity. [Fixed source and line references](broker_passive_dodge_melee_on_slide.md#fixed-source-evidence) | Not covered by the description | These clarify the checking scope and event requirement without contradicting count as Dodging. |


<a id="broker_passive_replenish_toughness_on_ranged_toughness_damage"></a>

## Tis but a Scratch

Full raw template and formatting: [source evidence](broker_passive_replenish_toughness_on_ranged_toughness_damage.md#original-english-template-and-reconstruction). Name hash `6de924eb`. Every row uses `ui / loc_talent_broker_passive_replenish_toughness_on_ranged_toughness_damage_desc / 6f652e30`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Ranged Toughness Damage, recovery, and cancellation | Replenish 30% Toughness over 3s after Ranged Toughness Damage; losing all Toughness cancels the effect; `ui / loc_talent_broker_passive_replenish_toughness_on_ranged_toughness_damage_desc / 6f652e30` | `on_damage_taken` requires `has_toughness` and `on_ranged_hit`; the 3-second child buff regenerates 0.3 / 3 per second and finishes on Toughness break. [Fixed source and line references](broker_passive_replenish_toughness_on_ranged_toughness_damage.md#fixed-source-evidence) | Consistent | The English explicitly covers both the recovery and the depletion cancellation. |
| Recovery basis and refresh | No maximum-Toughness basis, rate-stacking, refresh, or deficit details are stated; `ui / loc_talent_broker_passive_replenish_toughness_on_ranged_toughness_damage_desc / 6f652e30` | One buff refreshes to 3 seconds without adding recovery rates. It restores 10% of maximum Toughness per second, capped by the deficit. [Fixed source and line references](broker_passive_replenish_toughness_on_ranged_toughness_damage.md#fixed-source-evidence) | Not covered by the description | These explain the accepted extension example and recovery limits. |


<a id="broker_passive_damage_on_reload"></a>

## Unload

Full raw template and formatting: [source evidence](broker_passive_damage_on_reload.md#original-english-template-and-reconstruction). Name hash `25a0e32f`. Every row uses `ui / loc_talent_broker_passive_damage_on_reload_desc / 6645de88`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Reload effect and ammunition-based increments | Reloading grants +2% Ranged Damage for 7s; each 10% of magazine spent grants +2% additional Ranged Damage; `ui / loc_talent_broker_passive_damage_on_reload_desc / 6645de88` | The buff supplies initial 0.02 and adds 0.02 per complete ammunition stage equal to 10% of magazine capacity. [Fixed source and line references](broker_passive_damage_on_reload.md#fixed-source-evidence) | Consistent | The English matches the initial bonus, duration, and additional-per-stage amounts. |
| Refill timing, reset, rounding, and cap | No refill-event timing, reset, full-stage rounding, combination, or cap is stated; `ui / loc_talent_broker_passive_damage_on_reload_desc / 6645de88` | `on_reload` fires at `refill_ammunition`; refresh clears accumulated ammunition usage. The formula uses `floor` without clamping stage count and adds at the Ranged Damage stage; non-resetting replenishment can exceed one magazine's 22%. [Fixed source and line references](broker_passive_damage_on_reload.md#fixed-source-evidence) | Not covered by the description | These qualify the stated increments and preserve the original example and cap explanation. |


<a id="broker_passive_stamina_grants_atk_speed"></a>

## Swift Endurance

Full raw template and formatting: [source evidence](broker_passive_stamina_grants_atk_speed.md#original-english-template-and-reconstruction). Name hash `0d4f0d6b`. Every row uses `ui / loc_talent_broker_passive_stamina_grants_atk_speed_desc / 15f411fc`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Current-Stamina Melee Attack Speed | +2% increased Melee Attack Speed for each current Stamina; `ui / loc_talent_broker_passive_stamina_grants_atk_speed_desc / 15f411fc` | Each step based on current Stamina contributes `melee_attack_speed = 0.02`. [Fixed source and line references](broker_passive_stamina_grants_atk_speed.md#fixed-source-evidence) | Consistent | The English identifies current Stamina, the per-point amount, and Melee Attack Speed. |
| Whole-point rounding, cap, and action time | No rounding, implemented cap, or speed-to-time formula is stated; `ui / loc_talent_broker_passive_stamina_grants_atk_speed_desc / 15f411fc` | `floor(current_stamina)` supplies bonus stacks; `stack_offset = -1` removes the base stack contribution. The cap is 2 × 15 = 30 steps, or 60%, subject to available Stamina. Accelerable action time divides by the speed factor. [Fixed source and line references](broker_passive_stamina_grants_atk_speed.md#fixed-source-evidence) | Not covered by the description | These qualify the per-point wording and preserve the original timing example. |


<a id="broker_passive_ramping_backstabs"></a>

## Ramping Backstabs

Full raw template and formatting: [source evidence](broker_passive_ramping_backstabs.md#original-english-template-and-reconstruction). Name hash `d0970afd`. Every row uses `ui / loc_talent_broker_passive_ramping_backstabs_desc / 2f7fcac8`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Backstab stacks and removal | Backstabs grant +10% Melee Strength, stacking 5 times; Regular Melee Hits remove all stacks; `ui / loc_talent_broker_passive_ramping_backstabs_desc / 2f7fcac8` | `on_melee_hit` with `is_backstab` adds a 0.1 Melee Power stack, capped at 5; other Melee hits finish all recorded stacks. [Fixed source and line references](broker_passive_ramping_backstabs.md#fixed-source-evidence) | Consistent | The Strength label, per-stack amount, cap, and non-Backstab removal agree with accepted evidence. |
| Power combination, duration, and final Damage | No timer, Power-combination formula, or final-Damage equivalence is stated; `ui / loc_talent_broker_passive_ramping_backstabs_desc / 2f7fcac8` | The child buff has no duration. Five stacks add 50% Power at this stage; Damage, Stagger, and Cleave still follow weapon curves. [Fixed source and line references](broker_passive_ramping_backstabs.md#fixed-source-evidence) | Not covered by the description | These qualify Melee Strength and preserve the original Power examples without asserting universal final Damage. |


<a id="broker_passive_increased_ranged_dodges"></a>

## Moving Target

Full raw template and formatting: [source evidence](broker_passive_increased_ranged_dodges.md#original-english-template-and-reconstruction). Name hash `0158f675`. Every row uses `ui / loc_talent_broker_passive_increased_ranged_dodges_desc / a7db2b5d`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Effective Dodge count and wielded weapon | Gain +1 Effective Dodges while wielding your Ranged Weapon; `ui / loc_talent_broker_passive_increased_ranged_dodges_desc / a7db2b5d` | The secondary-slot condition enables `extra_consecutive_dodges = 1`. [Fixed source and line references](broker_passive_increased_ranged_dodges.md#fixed-source-evidence) | Consistent | The English names a Dodge count and correctly limits it to the wielded Ranged weapon. |
| Threshold formula and unchanged movement properties | No threshold formula or distance/speed details are stated; `ui / loc_talent_broker_passive_increased_ranged_dodges_desc / a7db2b5d` | `consecutive_dodges_count` is the weapon's `diminishing_return_start` plus `round(extra)`. The bonus does not increase distance or speed and is lost on switching to Melee. [Fixed source and line references](broker_passive_increased_ranged_dodges.md#fixed-source-evidence) | Not covered by the description | These clarify what Effective Dodges means and support the original 3→4 example. |


<a id="broker_passive_stimm_cd_on_kill"></a>

## Sample Collector

Full raw template and formatting: [source evidence](broker_passive_stimm_cd_on_kill.md#original-english-template-and-reconstruction). Name hash `c7530a4c`. Every row uses `ui / loc_talent_broker_passive_stimm_cd_seconds_on_kill_desc / f234d4bf`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Kill recovery and toxin replacement | Kills reduce 0.5s; Chem Toxin infected enemies instead restore 1s; `ui / loc_talent_broker_passive_stimm_cd_seconds_on_kill_desc / f234d4bf` | `on_kill` restores 0.5 or 1 resource, selected by `has_keyword(toxin)` [Fixed source and line references](broker_passive_stimm_cd_on_kill.md#fixed-source-evidence) | Consistent | The toxin condition modifies which amount is restored; the amounts do not add. |
| Recovery limits | No statement about paused or complete recovery; `ui / loc_talent_broker_passive_stimm_cd_seconds_on_kill_desc / f234d4bf` | Recovery must be unpaused; no excess can be banked at full resource [Fixed source and line references](broker_passive_stimm_cd_on_kill.md#fixed-source-evidence) | Not covered by the description | These limits and the exclusion of natural recovery in examples supplement the English. |


<a id="broker_passive_improved_dodges_at_full_stamina"></a>

## Jittery

Full raw template and formatting: [source evidence](broker_passive_improved_dodges_at_full_stamina.md#original-english-template-and-reconstruction). Name hash `27778997`. Every row uses `ui / loc_talent_broker_passive_improved_dodges_at_full_stamina_desc / abe61ad9`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Stamina boundary | while Stamina is above 75%; `ui / loc_talent_broker_passive_improved_dodges_at_full_stamina_desc / abe61ad9` | `stamina_percentage >= 0.75` includes exactly 75% [Fixed source and line references](broker_passive_improved_dodges_at_full_stamina.md#fixed-source-evidence) | Explicit contradiction | “Above” excludes equality, while the verified threshold includes it. This comparison concerns the fixed evidence; the boundary has not been observed in game. |
| Recovery timing | Dodge Recovery Speed +40%; `ui / loc_talent_broker_passive_improved_dodges_at_full_stamina_desc / abe61ad9` | `dodge_reset_modifier = -0.4`; reset wait is (archetype reset time + weapon extra) × buff modifier [Fixed source and line references](broker_passive_improved_dodges_at_full_stamina.md#fixed-source-evidence) | Not covered by the description | The wording does not explain the time modifier or formula. The verified example gives 1s × 0.6 = 0.6s; no separate rate formula is assumed. |


<a id="base_crit_chance_node_buff_low_1"></a>

## Critical Chance Boost

Full raw template and formatting: [source evidence](base_crit_chance_node_buff_low_1.md#original-english-template-and-reconstruction). Name hash `3ec7f5ef`. Every row uses `ui / loc_talent_crit_chance_low_desc / 3019333a`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Critical Hit Chance bonus | +5% Critical Hit Chance; `ui / loc_talent_crit_chance_low_desc / 3019333a` | Tier 1 grants `critical_strike_chance = 0.05` [Fixed source and line references](base_crit_chance_node_buff_low_1.md#fixed-source-evidence) | Consistent | The named statistic and magnitude match the verified bonus. |
| Combination and limits | No calculation or clamp is stated; `ui / loc_talent_crit_chance_low_desc / 3019333a` | `CriticalStrike.chance` adds the bonus and clamps the total to 0–1 [Fixed source and line references](base_crit_chance_node_buff_low_1.md#fixed-source-evidence) | Not covered by the description | This explains 10%→15% and 25%→30% without adding a new condition to the English. |


<a id="base_melee_damage_node_buff_medium_1"></a>

## Melee Damage Boost

Full raw template and formatting: [source evidence](base_melee_damage_node_buff_medium_1.md#original-english-template-and-reconstruction). Name hash `cb9e7b48`. Every row uses `ui / loc_talent_melee_damage_boost_medium_desc / 7b5da013`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Melee Damage bonus | +10% Melee Damage; `ui / loc_talent_melee_damage_boost_medium_desc / 7b5da013` | Tier 1 supplies `melee_damage = 0.1` [Fixed source and line references](base_melee_damage_node_buff_medium_1.md#fixed-source-evidence) | Consistent | The statistic, Melee scope and value match. |
| Damage combination | No combination formula is stated; `ui / loc_talent_melee_damage_boost_medium_desc / 7b5da013` | The bonus is added in general `damage_stat_buffs` [Fixed source and line references](base_melee_damage_node_buff_medium_1.md#fixed-source-evidence) | Not covered by the description | The original 100→110 and 100 × (1 + 25% + 10%) = 135 examples explain the additive stage. |


<a id="base_toxin_power_boost_1"></a>

## Potent Tox

Full raw template and formatting: [source evidence](base_toxin_power_boost_1.md#original-english-template-and-reconstruction). Name hash `d8d25992`. Every row uses `ui / loc_talent_toxin_damage_boost_desc / f89ff0b1`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Toxin Strength | +10% Toxin Strength; `ui / loc_talent_toxin_damage_boost_desc / f89ff0b1` | Tier 1 grants `toxin_power = 0.1`, multiplying the Power entering the Toxin Damage curve [Fixed source and line references](base_toxin_power_boost_1.md#fixed-source-evidence) | Consistent | The wording describes strength and does not promise a fixed +10% final Damage per tick. |
| Power calculation and unchanged properties | No Damage curve, armour, stack or duration details are stated; `ui / loc_talent_toxin_damage_boost_desc / f89ff0b1` | `toxin_variant` uses `toxin_power`; `Attack` modifies `power_level` before the Damage curve. Stacks and duration are unchanged [Fixed source and line references](base_toxin_power_boost_1.md#fixed-source-evidence) | Not covered by the description | These details explain the original 500→550 Power example and its final-Damage limit. |


<a id="broker_passive_reduce_swap_time"></a>

## Sticky Hands

Full raw template and formatting: [source evidence](broker_passive_reduce_swap_time.md#original-english-template-and-reconstruction). Name hash `ac99c027`. Every row uses `ui / loc_talent_broker_passive_reduce_swap_time_desc / dd6f6b11`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Swap and firing-control bonuses | +40% Weapon Swap Speed; -10% Recoil and -30% Spread while firing from the hip or bracing; `ui / loc_talent_broker_passive_reduce_swap_time_desc / dd6f6b11` | Permanent `wield_speed = 0.4`; conditional `recoil_modifier = -0.1` and `spread_modifier = -0.3` [Fixed source and line references](broker_passive_reduce_swap_time.md#fixed-source-evidence) | Consistent | The values and the hip-fire/bracing restriction match. |
| Timing and modifier behavior | No time formula or Recoil/Spread calculation is stated; `ui / loc_talent_broker_passive_reduce_swap_time_desc / dd6f6b11` | Swap time uses the speed divisor; Recoil modifies unsteadiness gain/decay, Spread multiplies pitch/yaw [Fixed source and line references](broker_passive_reduce_swap_time.md#fixed-source-evidence) | Not covered by the description | These support the original 1s→0.71s and 2°→1.4° examples and the camera-displacement caveat. |


<a id="broker_passive_reduced_toughness_damage_during_reload"></a>

## Calling for a Time Out

Full raw template and formatting: [source evidence](broker_passive_reduced_toughness_damage_during_reload.md#original-english-template-and-reconstruction). Name hash `dcbae74b`. Every row uses `ui / loc_talent_broker_passive_reduced_toughness_damage_during_reload_desc / b4e891ca`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Reduction scope and duration | -25% Toughness Damage taken while reloading, and for 4s afterwards; `ui / loc_talent_broker_passive_reduced_toughness_damage_during_reload_desc / b4e891ca` | `toughness_damage_taken_modifier = -0.25`; reload start activates it, and leaving the reload state starts the 4s tail [Fixed source and line references](broker_passive_reduced_toughness_damage_during_reload.md#fixed-source-evidence) | Consistent | The English specifies the correct statistic and duration. |
| State handling and combination | No reactivation or combination formula is stated; `ui / loc_talent_broker_passive_reduced_toughness_damage_during_reload_desc / b4e891ca` | Reloading again keeps the same reduction; another 20% at the same stage yields 100 × (1 − 20% − 25%) = 55 [Fixed source and line references](broker_passive_reduced_toughness_damage_during_reload.md#fixed-source-evidence) | Not covered by the description | These are supplementary timing and calculation details; the wording makes no separate Health Damage claim. |


<a id="broker_passive_knockback_on_taking_melee_damage"></a>

## Street Tough

Full raw template and formatting: [source evidence](broker_passive_knockback_on_taking_melee_damage.md#original-english-template-and-reconstruction). Name hash `e7b80789`. Every row uses `ui / loc_talent_broker_passive_knockback_on_taking_melee_damage_desc_02 / f7be7408`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Trigger, movement and cooldown | When taking Melee Damage, gain +10% Movement Speed for 3s; once every 8s; `ui / loc_talent_broker_passive_knockback_on_taking_melee_damage_desc_02 / f7be7408` | Qualifying `on_player_hit_received` Melee event; separate 3s movement child and parent cooldown of 8s [Fixed source and line references](broker_passive_knockback_on_taking_melee_damage.md#fixed-source-evidence) | Consistent | The movement value, duration and trigger-to-trigger cooldown match. |
| Excluded enemies and pulse properties | No excluded enemy category, radius or pulse Damage is stated; `ui / loc_talent_broker_passive_knockback_on_taking_melee_damage_desc_02 / f7be7408` | Excludes `breed.tags.disabler`; radius 3m; `attack = 0`, medium Stagger [Fixed source and line references](broker_passive_knockback_on_taking_melee_damage.md#fixed-source-evidence) | Not covered by the description | These are limits and properties omitted from the English. |
| Universal backward knockback | knock all nearby Enemies around you backwards; `ui / loc_talent_broker_passive_knockback_on_taking_melee_damage_desc_02 / f7be7408` | Actual interruption depends on Stagger resistance and state; Impact differs for super armour and other armour [Fixed source and line references](broker_passive_knockback_on_taking_melee_damage.md#fixed-source-evidence) | Cannot confirm | The accepted evidence does not establish guaranteed backward knockback for every nearby enemy and state; retain this question without further research. |


<a id="broker_passive_crit_grants_damage"></a>

## Channelled Devastation

Full raw template and formatting: [source evidence](broker_passive_crit_grants_damage.md#original-english-template-and-reconstruction). Name hash `b59bc562`. Every row uses `ui / loc_talent_broker_passive_crit_grants_damage_desc / ef095720`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Current chance, bonus and cap | Each 1% of current Critical Hit Chance grants +0.5% Melee Damage; 30 stacks, up to +15%; `ui / loc_talent_broker_passive_crit_grants_damage_desc / ef095720` | `floor(chance / 0.01)`, capped at 30, multiplied by `melee_damage_per_stack = 0.005` [Fixed source and line references](broker_passive_crit_grants_damage.md#fixed-source-evidence) | Consistent | The English refers to current chance rather than a Critical Hit event and states the correct bonus and cap. |
| Rounding, updates and combination | No fractional-step rounding or weapon/update formula is stated; `ui / loc_talent_broker_passive_crit_grants_damage_desc / ef095720` | `update` obtains chance from the wielded weapon and handling template; whole steps count and Melee Damage adds at the general Damage stage [Fixed source and line references](broker_passive_crit_grants_damage.md#fixed-source-evidence) | Not covered by the description | This retains the original 12.8%→12 steps→6% and 100→106/131 examples, dynamic updates and non-consumption explanation. |


<a id="broker_passive_melee_cleave_on_melee_kill"></a>

## Battering Strikes

Full raw template and formatting: [source evidence](broker_passive_melee_cleave_on_melee_kill.md#original-english-template-and-reconstruction). Name hash `496ac07d`. Every row uses `ui / loc_talent_broker_passive_melee_cleave_on_melee_kill_desc / 3e88fbf2`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Melee kill stacks | Melee Kills grant +10% Melee Cleave for 5s; stacks 5 times; `ui / loc_talent_broker_passive_melee_cleave_on_melee_kill_desc / 3e88fbf2` | `on_melee_kill` adds a child with a 0.1 Damage hit-mass modifier, duration 5s and maximum 5 stacks [Fixed source and line references](broker_passive_melee_cleave_on_melee_kill.md#fixed-source-evidence) | Consistent | The trigger, per-stack magnitude, duration and cap match. |
| Refresh and Cleave scope | No refresh rule or Cleave-capacity definition is stated; `ui / loc_talent_broker_passive_melee_cleave_on_melee_kill_desc / 3e88fbf2` | Retriggering refreshes duration; only `max_hit_mass_attack` is modified. Enemy mass, armour and weapon limits still determine targets hit [Fixed source and line references](broker_passive_melee_cleave_on_melee_kill.md#fixed-source-evidence) | Not covered by the description | The original 10→15 mass-capacity example and the distinctions from per-target Damage and Stagger Cleave clarify the statistic. |


<a id="broker_passive_melee_damage_carry_over"></a>

## Hyper-Violence

Full raw template and formatting: [source evidence](broker_passive_melee_damage_carry_over.md#original-english-template-and-reconstruction). Name hash `14cf33e0`. Every row uses `ui / loc_talent_broker_passive_melee_damage_carry_over_desc / 821fa540`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Carry-over amount and duration | Kills grant +25% of the Damage/Health difference as Melee Damage for 1s; `ui / loc_talent_broker_passive_melee_damage_carry_over_desc / 821fa540` | Overkill Damage supplies a flat `melee_damage_bonus` at 25%, lasting 1s [Fixed source and line references](broker_passive_melee_damage_carry_over.md#fixed-source-evidence) | Consistent | The English's fraction of a Damage difference matches the flat bonus, not a percentage increase to the next attack. |
| Trigger limits, replacement and calculation stage | No instant-execution exclusion or active-bonus handling is stated; `ui / loc_talent_broker_passive_melee_damage_carry_over_desc / 821fa540` | `on_kill` accepts attack types except `instakill`; subtracts the active bonus, replaces/restarts only for a higher value, and adds the flat bonus after general multiplier terms [Fixed source and line references](broker_passive_melee_damage_carry_over.md#fixed-source-evidence) | Not covered by the description | These explain the original 50, 87.5 and 37.5 examples and the fact that later Damage processing can still apply. |


<a id="broker_passive_toxin_infected_enemies_take_increased_damage"></a>

## Virulent Strain

Full raw template and formatting: [source evidence](broker_passive_toxin_infected_enemies_take_increased_damage.md#original-english-template-and-reconstruction). Name hash `c1abbd9d`. Every row uses `ui / loc_talent_broker_passive_toxin_infected_enemies_take_increased_damage_desc / b7e6d44b`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Infection and vulnerability | When infecting an Enemy with Chem Toxin, increase Damage taken by +10% from all sources for 5s; `ui / loc_talent_broker_passive_toxin_infected_enemies_take_increased_damage_desc / b7e6d44b` | Owner-forwarded Toxin Buff events add a `damage_taken_modifier = 0.1` debuff with duration 5s [Fixed source and line references](broker_passive_toxin_infected_enemies_take_increased_damage.md#fixed-source-evidence) | Consistent | The trigger, target-side statistic, all-source scope and nominal duration match. |
| Ownership, refresh and early ending | No teammate ownership, stack-addition, refresh or early-end rules are stated; `ui / loc_talent_broker_passive_toxin_infected_enemies_take_increased_damage_desc / b7e6d44b` | Buff add/stack-add events use `additional_arguments.owner_unit`; maximum one refreshed debuff; after 0.1s, loss of Toxin ends it [Fixed source and line references](broker_passive_toxin_infected_enemies_take_increased_damage.md#fixed-source-evidence) | Not covered by the description | These limit and explain the stated effect without treating omitted details as English errors. The original attacker/target-stage examples are retained. |


<a id="broker_passive_damage_after_toxined_enemies"></a>

## Toxin Mania

Full raw template and formatting: [source evidence](broker_passive_damage_after_toxined_enemies.md#original-english-template-and-reconstruction). Name hash `3cc33c95`. Every row uses `ui / loc_talent_broker_damage_after_toxined_enemies_desc / f70dc769`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Nearby infected-enemy bonus | +5% Base Damage for each Chem Toxin infected enemy nearby; up to +15%; `ui / loc_talent_broker_damage_after_toxined_enemies_desc / f70dc769` | General `damage = 0.05` per enemy; enemy-count multiplier clamped to 0–3 [Fixed source and line references](broker_passive_damage_after_toxined_enemies.md#fixed-source-evidence) | Consistent | The per-enemy bonus and cap match; the wording does not impose a Melee or Ranged attack restriction. |
| Range, update and combination | No exact range, ownership requirement or combination formula is stated; `ui / loc_talent_broker_damage_after_toxined_enemies_desc / f70dc769` | Every 0.2s, a 12.5m broadphase query checks the Toxin keyword without owner filtering; the Damage bonus adds at the same stage [Fixed source and line references](broker_passive_damage_after_toxined_enemies.md#fixed-source-evidence) | Not covered by the description | These explain changes as enemies leave/lose Toxin and preserve the original two-enemy 100→110/135 example. |


<a id="broker_passive_toxin_spread_on_kills"></a>

## Splash Damage

Full raw template and formatting: [source evidence](broker_passive_toxin_spread_on_kills.md#original-english-template-and-reconstruction). Name hash `7aa99c8a`. Every row uses `ui / loc_talent_broker_passive_toxin_spread_on_kills_desc_02 / a94fd4a3`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Spread trigger, area and initial infection | Killing an Elite Enemy with a Melee Attack infects up to 10 enemies within 4m with 2 stacks of Chem Toxin; `ui / loc_talent_broker_passive_toxin_spread_on_kills_desc_02 / a94fd4a3` | Melee Elite-kill event; radius 4m; selection limit 10; initially uninfected targets reach two stacks [Fixed source and line references](broker_passive_toxin_spread_on_kills.md#fixed-source-evidence) | Consistent | The English's trigger, radius, upper target count and initial stack count match. |
| Existing stacks, selection and Toxin calculation | No additive-stack promise, selection order or Power formula is stated; `ui / loc_talent_broker_passive_toxin_spread_on_kills_desc_02 / a94fd4a3` | Fill only to two stacks, otherwise refresh; living targets filtered after selecting at most 10; `neurotoxin_interval_buff3`, 0.35s ticks, shared cap 30 [Fixed source and line references](broker_passive_toxin_spread_on_kills.md#fixed-source-evidence) | Not covered by the description | These preserve the 0→2/1→2/2+ refresh cases and the original 500 × 2 ÷ 30 Power example without treating two as the shared Toxin cap. |


<a id="broker_passive_increased_blitz_ammo"></a>

## Extra Pouches

Full raw template and formatting: [source evidence](broker_passive_increased_blitz_ammo.md#original-english-template-and-reconstruction). Name hash `a26229aa`. Every row uses `ui / loc_talent_broker_passive_increased_blitz_ammo_desc / 0e811057`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Maximum Blitz charges | +1 Blitz Charges; `ui / loc_talent_broker_passive_increased_blitz_ammo_desc / 0e811057` | `extra_max_amount_of_grenades = 1` adds to the Broker abilities' `max_charges` [Fixed source and line references](broker_passive_increased_blitz_ammo.md#fixed-source-evidence) | Consistent | The charge increase applies to carrying capacity. |
| Capacity and regeneration distinction | No regeneration is promised; `ui / loc_talent_broker_passive_increased_blitz_ammo_desc / 0e811057` | The effect increases capacity rather than regenerating a charge after each use [Fixed source and line references](broker_passive_increased_blitz_ammo.md#fixed-source-evidence) | Not covered by the description | This retains the original 3→4 and 2→3 capacity examples and their limit. |


<a id="broker_passive_melee_attacks_apply_toxin"></a>

## Coated Weaponry

Full raw template and formatting: [source evidence](broker_passive_melee_attacks_apply_toxin.md#original-english-template-and-reconstruction). Name hash `eed42f4b`. Every row uses `ui / loc_talent_broker_passive_melee_attacks_apply_toxin_desc / 4108cdaa`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Melee Critical Hit infection | Melee Critical Strikes infect Enemies with 1 stack of Chem Toxin; `ui / loc_talent_broker_passive_melee_attacks_apply_toxin_desc / 4108cdaa` | `on_hit` requires `on_crit_melee` and adds one `neurotoxin_interval_buff3` stack [Fixed source and line references](broker_passive_melee_attacks_apply_toxin.md#fixed-source-evidence) | Consistent | The trigger and per-hit stack addition match. |
| Shared stacks, decay and Damage calculation | No shared cap, refresh, decay or Power calculation is stated; `ui / loc_talent_broker_passive_melee_attacks_apply_toxin_desc / 4108cdaa` | Cap 30; refresh; base 2.6s wait with `interval_stack_removal = true` and 0.35s ticks [Fixed source and line references](broker_passive_melee_attacks_apply_toxin.md#fixed-source-evidence) | Not covered by the description | These preserve the original three-stack input Power of 50 and the distinction between Power and final Damage. |


<a id="broker_passive_blitz_inflicts_toxin"></a>

## Pocket Toxin

Full raw template and formatting: [source evidence](broker_passive_blitz_inflicts_toxin.md#original-english-template-and-reconstruction). Name hash `9f79e627`. Every row uses `ui / loc_talent_broker_passive_blitz_inflicts_toxin_desc_02 / 8757c0f2`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Blitz explosion types and stack counts | Blitz explosions infect enemies; Blackout 3, Boom Bringer 6, Chem Grenade 10; `ui / loc_talent_broker_passive_blitz_inflicts_toxin_desc_02 / 8757c0f2` | Server `on_hit` requires grenade-ability slot and explosion type; special-rule table selects 3/6/10 stacks [Fixed source and line references](broker_passive_blitz_inflicts_toxin.md#fixed-source-evidence) | Consistent | The English's Blitz restriction and separate values match. |
| Ground liquid and shared Toxin behavior | No liquid-tick, shared-cap, refresh or Power calculation is stated; `ui / loc_talent_broker_passive_blitz_inflicts_toxin_desc_02 / 8757c0f2` | This passive is separate from Chem Grenade liquid; same-type Toxin stacks cap at 30 and refresh on application; ticks every 0.35s [Fixed source and line references](broker_passive_blitz_inflicts_toxin.md#fixed-source-evidence) | Not covered by the description | These retain the original 2 + 6 = 8 stack and 500 × 8 ÷ 30 ≈ 133.33 input-Power examples. |


<a id="broker_passive_reduced_damage_by_toxined"></a>

## Targeted Toxin

Full raw template and formatting: [source evidence](broker_passive_reduced_damage_by_toxined.md#original-english-template-and-reconstruction). Name hash `78d6f9f3`. Every row uses `ui / loc_talent_broker_passive_reduced_damage_by_toxined_desc / 615c771b`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Inflicter, output reduction and replacement | Enemies you infect with Chem Toxin deal -15% Damage; Monstrosities instead deal -30%; `ui / loc_talent_broker_passive_reduced_damage_by_toxined_desc / 615c771b` | Owner-forwarded Toxin application applies an enemy `damage` debuff of -0.15 or -0.3 [Fixed source and line references](broker_passive_reduced_damage_by_toxined.md#fixed-source-evidence) | Consistent | The English identifies your infection and enemy Damage output; the stronger value replaces the ordinary one. |
| Boss tags and debuff lifetime | No exact tags, stack limit or removal rule is stated; `ui / loc_talent_broker_passive_reduced_damage_by_toxined_desc / 615c771b` | `tags.monster`, `captain` or `cultist_captain` selects the stronger debuff; maximum one stack, no fixed duration, removal after losing Toxin [Fixed source and line references](broker_passive_reduced_damage_by_toxined.md#fixed-source-evidence) | Not covered by the description | These clarify the boss category and lifetime. The original 100→85/70 example also explains why teammates benefit. |


<a id="broker_passive_replenish_toughness_while_toxined_enemies_in_proximity"></a>

## Toxic Renewal

Full raw template and formatting: [source evidence](broker_passive_replenish_toughness_while_toxined_enemies_in_proximity.md#original-english-template-and-reconstruction). Name hash `c7a7a696`. Every row uses `ui / loc_talent_broker_passive_replenish_toughness_while_toxined_enemies_in_proximity_desc / c1d98f78`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recovery, interval, range and enemy cap | Replenish 1% Toughness every 1s per Chem Toxin infected enemy within 15m, up to 10 enemies; `ui / loc_talent_broker_passive_replenish_toughness_while_toxined_enemies_in_proximity_desc / c1d98f78` | Server interval every 1s calls `Toughness.replenish_percentage(0.01 × min(n, 10))`; radius 15m [Fixed source and line references](broker_passive_replenish_toughness_while_toxined_enemies_in_proximity.md#fixed-source-evidence) | Consistent | The stated amount, interval, range and upper count match. |
| Recovery basis, counting and state limits | No maximum-Toughness basis, ownership filter, query frequency or knocked-down rule is stated; `ui / loc_talent_broker_passive_replenish_toughness_while_toxined_enemies_in_proximity_desc / c1d98f78` | Count queried every 0.2s without requiring your Toxin; recovery uses maximum Toughness and caps at missing Toughness. Knocked-down behavior is unverified [Fixed source and line references](broker_passive_replenish_toughness_while_toxined_enemies_in_proximity.md#fixed-source-evidence) | Not covered by the description | These retain the original 100 maximum / four enemies / 4 per second, ten-enemy cap and missing-3 examples. The existing state caveat remains unresolved. |


<a id="broker_passive_extended_mag"></a>

## Ammo Jack

Full raw template and formatting: [source evidence](broker_passive_extended_mag.md#original-english-template-and-reconstruction). Name hash `5fc69f62`. Every row uses `ui / loc_talent_broker_passive_extended_mag_desc / 414a3799`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Clip size and rounding | +15% Clip Size, rounded up; `ui / loc_talent_broker_passive_extended_mag_desc / 414a3799` | `clip_size_modifier = 0.15`; normal updates use `ceil(base_max_clip × modifier)` [Fixed source and line references](broker_passive_extended_mag.md#fixed-source-evidence) | Consistent | The statistic, value and upward rounding are stated correctly. |
| Combination, current ammunition and initialization | No reserve, combination, proportional-ammunition or initialization details are stated; `ui / loc_talent_broker_passive_extended_mag_desc / 414a3799` | Same-type bonuses add before capacity rounding; current ammunition converts proportionally using floor; initialization floor is followed by normal ceil capacity alignment [Fixed source and line references](broker_passive_extended_mag.md#fixed-source-evidence) | Not covered by the description | These retain the original 30→35 and 7→9 examples and explain the effect's limits. |


<a id="broker_passive_damage_vs_heavy_staggered"></a>

## Cheap Shots

Full raw template and formatting: [source evidence](broker_passive_damage_vs_heavy_staggered.md#original-english-template-and-reconstruction). Name hash `1d40fec5`. Every row uses `ui / loc_talent_broker_passive_damage_vs_heavy_staggered_desc_02 / 6dc4e3b1`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Stagger damage bonus | Staggered enemies: +10%; Medium and Heavy enemies instead: +5% (static reconstruction); `ui / loc_talent_broker_passive_damage_vs_heavy_staggered_desc_02 / 6dc4e3b1` | 0.1 base Stagger bonus plus 0.05 for at least Medium Stagger: 10% or 15% total [Fixed source and line references](broker_passive_damage_vs_heavy_staggered.md#fixed-source-evidence) | Explicit contradiction | The replacement wording presents 5% as the higher-tier total, while the mapped field is only the additional 5%; actual total is 15%. |
| Damage calculation | No same-stage stacking formula; `ui / loc_talent_broker_passive_damage_vs_heavy_staggered_desc_02 / 6dc4e3b1` | Add the applicable bonus to other general damage bonuses at the same stage [Fixed source and line references](broker_passive_damage_vs_heavy_staggered.md#fixed-source-evidence) | Not covered by the description | The formula and 100 → 110/115 or 140 examples supplement the description. |


<a id="broker_passive_melee_crit_instakill"></a>

## Hyper-Critical

Full raw template and formatting: [source evidence](broker_passive_melee_crit_instakill.md#original-english-template-and-reconstruction). Name hash `f0e426c8`. Every row uses `ui / loc_talent_broker_passive_melee_crit_instakill_desc / 41e81648`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Attack and target conditions | Critical Melee Hits; human sized Enemies; `ui / loc_talent_broker_passive_melee_crit_instakill_desc / 41e81648` | Requires `on_crit_melee`, `HEALTH_ALIVE` and a human-sized target [Fixed source and line references](broker_passive_melee_crit_instakill.md#fixed-source-evidence) | Consistent | The English expressly includes both Critical and Melee conditions and the target size. |
| Health threshold timing | Current Health less than 2 times the attack's Damage; `ui / loc_talent_broker_passive_melee_crit_instakill_desc / 41e81648` | Reads post-hit Health and tests it against `actual_damage_dealt`; pre-hit Health below twice the Damage is equivalent under matching single-hit damage [Fixed source and line references](broker_passive_melee_crit_instakill.md#fixed-source-evidence) | Cannot confirm | The English leaves the Health-read timing unspecified. A pre-hit reading is consistent, but a post-hit reading would not be; no definite English error is inferred. |
| Exclusions and example limits | No Captain exclusion or event-reading assumptions; `ui / loc_talent_broker_passive_melee_crit_instakill_desc / 41e81648` | Captains are excluded; event order and strict inequality govern the 190/200 Health examples [Fixed source and line references](broker_passive_melee_crit_instakill.md#fixed-source-evidence) | Not covered by the description | These clarify the existing evidence without treating omissions as errors. |


<a id="broker_passive_damage_vs_elites_monsters"></a>

## Punching Above One's Weight

Full raw template and formatting: [source evidence](broker_passive_damage_vs_elites_monsters.md#original-english-template-and-reconstruction). Name hash `e2641fac`. Every row uses `ui / loc_talent_broker_passive_damage_vs_elites_monsters_desc / a7b80936`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Targets and value | +15% Damage against Elites and Monstrosities; `ui / loc_talent_broker_passive_damage_vs_elites_monsters_desc / a7b80936` | Adds `damage_vs_elites = 0.15` or `damage_vs_monsters = 0.15` according to breed tags [Fixed source and line references](broker_passive_damage_vs_elites_monsters.md#fixed-source-evidence) | Consistent | Both named target classes and the numerical bonus agree. |
| Classification and calculation | No combined-tag or stacking details; `ui / loc_talent_broker_passive_damage_vs_elites_monsters_desc / a7b80936` | Each tag is checked independently; a Specialist-only target does not automatically qualify; same-stage bonuses add [Fixed source and line references](broker_passive_damage_vs_elites_monsters.md#fixed-source-evidence) | Not covered by the description | The existing formula and classification limits supplement the English. |


<a id="broker_passive_increased_weakspot_damage"></a>

## The Sweet Spot

Full raw template and formatting: [source evidence](broker_passive_increased_weakspot_damage.md#original-english-template-and-reconstruction). Name hash `3f4df881`. Every row uses `ui / loc_talent_broker_passive_increased_weakspot_damage_desc / 54b98b85`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Weakspot statistic and value | +25% Weakspot Damage; `ui / loc_talent_broker_passive_increased_weakspot_damage_desc / 54b98b85` | Adds 0.25 to `finesse_buff_damage_multiplier` on `hit_weakspot` [Fixed source and line references](broker_passive_increased_weakspot_damage.md#fixed-source-evidence) | Consistent | The named statistic, Weakspot condition and value agree. |
| Component scope and total gain | No component formula or fixed total-damage claim; `ui / loc_talent_broker_passive_increased_weakspot_damage_desc / 54b98b85` | Applies to `base_finesse_damage`; the normal component remains separate, so weapon and hit properties affect the total gain [Fixed source and line references](broker_passive_increased_weakspot_damage.md#fixed-source-evidence) | Not covered by the description | Both existing examples clarify the formula without treating the abbreviated statistic label as an error. |


<a id="broker_passive_stimm_increased_duration"></a>

## Long Lasting

Full raw template and formatting: [source evidence](broker_passive_stimm_increased_duration.md#original-english-template-and-reconstruction). Name hash `e452d69c`. Every row uses `ui / loc_talent_broker_passive_stimm_increased_duration_desc / 905ad5d9`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Duration bonus | +5s Stimm Duration; `ui / loc_talent_broker_passive_stimm_increased_duration_desc / 905ad5d9` | Adds `syringe_duration = 5` through the applicable syringe start function [Fixed source and line references](broker_passive_stimm_increased_duration.md#fixed-source-evidence) | Consistent | The statistic, fixed seconds and value agree. |
| Cooldown and applicability | No cooldown interaction or durationless-effect details; `ui / loc_talent_broker_passive_stimm_increased_duration_desc / 905ad5d9` | Timed effects receive `add_duration`; durationless effects are skipped, and longer Scum Stimm effects delay natural cooldown recovery [Fixed source and line references](broker_passive_stimm_increased_duration.md#fixed-source-evidence) | Not covered by the description | These retain the verified limitations and the 15 + 5 = 20 second example. |


<a id="broker_passive_stimm_cleanse_on_kill"></a>

## Blessed Stimms

Full raw template and formatting: [source evidence](broker_passive_stimm_cleanse_on_kill.md#original-english-template-and-reconstruction). Name hash `df6da11d`. Every row uses `ui / loc_talent_broker_passive_stimm_cleanse_on_kill_desc / 565482d8`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Kill recovery | While Stimmed, Kills clear 1% Corruption; `ui / loc_talent_broker_passive_stimm_cleanse_on_kill_desc / 565482d8` | After Stimm use, each Kill clears up to `0.01 × max_health` while the syringe keyword remains [Fixed source and line references](broker_passive_stimm_cleanse_on_kill.md#fixed-source-evidence) | Consistent | The active-effect condition and per-Kill amount agree. |
| Per-Stimm maximum | Up to 50% per Stimm; `ui / loc_talent_broker_passive_stimm_cleanse_on_kill_desc / 565482d8` | Checks accumulated clearing below `0.5 × max_health` before applying a full clear; the last clear may exceed 50% [Fixed source and line references](broker_passive_stimm_cleanse_on_kill.md#fixed-source-evidence) | Explicit contradiction | The stated maximum is a stopping threshold, not a strict cap. The preserved 99 + 2 = 101 example demonstrates the boundary difference. |
| Recovery limits and reset | No Wound floor, actual-cleared accumulation or refresh details; `ui / loc_talent_broker_passive_stimm_cleanse_on_kill_desc / 565482d8` | Protects `fixed_permanent_damage`, accumulates actual clearing and resets on start/refresh [Fixed source and line references](broker_passive_stimm_cleanse_on_kill.md#fixed-source-evidence) | Not covered by the description | These retain the existing recovery limits and example assumptions. |


<a id="broker_passive_dr_damage_tradeoff_on_stamina"></a>

## Hive City Brawler

Full raw template and formatting: [source evidence](broker_passive_dr_damage_tradeoff_on_stamina.md#original-english-template-and-reconstruction). Name hash `514f1d9d`. Every row uses `ui / loc_talent_broker_passive_dr_damage_tradeoff_on_stamina_desc / 2fe3c231`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Stamina relationship and maxima | Up to 20% Damage Reduction from available Stamina; up to 20% Melee Damage from spent Stamina; `ui / loc_talent_broker_passive_dr_damage_tradeoff_on_stamina_desc / 2fe3c231` | Reduction scales with remaining Stamina and Melee Damage with spent Stamina, each to 20% [Fixed source and line references](broker_passive_dr_damage_tradeoff_on_stamina.md#fixed-source-evidence) | Consistent | Both directions, damage categories and maximum values agree. |
| Interpolation and combination | No interpolation or combination formula; `ui / loc_talent_broker_passive_dr_damage_tradeoff_on_stamina_desc / 2fe3c231` | `lerp(1, 0.8, stamina_fraction)` for damage taken; `lerp(0, 0.2, 1 − stamina_fraction)` for additive Melee Damage [Fixed source and line references](broker_passive_dr_damage_tradeoff_on_stamina.md#fixed-source-evidence) | Not covered by the description | The half/full/empty examples and 100 × 0.8 × 0.8 = 64 combination explain the verified formulas. |


<a id="broker_passive_low_ammo_regen"></a>

## Pickpocket

Full raw template and formatting: [source evidence](broker_passive_low_ammo_regen.md#original-english-template-and-reconstruction). Name hash `f774ba92`. Every row uses `ui / loc_talent_broker_passive_low_ammo_regen_desc_04 / aa6ac8e6`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Kill conditions and refill target | Elite or Specialist killed by Melee; Ammo Reserve below 20%; refill to 20%; `ui / loc_talent_broker_passive_low_ammo_regen_desc_04 / aa6ac8e6` | Requires the matching Melee Kill and a reserve below `floor(max × 0.2)`, then fills the difference [Fixed source and line references](broker_passive_low_ammo_regen.md#fixed-source-evidence) | Consistent | The English describes topping up to the threshold, rather than adding a fixed 20% per Kill. |
| Rounding and reserve scope | No integer rounding, clip counting or capacity guard; `ui / loc_talent_broker_passive_low_ammo_regen_desc_04 / aa6ac8e6` | Requires `max_reserve > 0`; thresholds use floor, exclude the clip and the refill has a minimum of 1 [Fixed source and line references](broker_passive_low_ammo_regen.md#fixed-source-evidence) | Not covered by the description | These preserve the 150-round and 37-round examples and existing limits. |


<a id="broker_passive_cleave_on_cleave"></a>

## Battering Momentum

Full raw template and formatting: [source evidence](broker_passive_cleave_on_cleave.md#original-english-template-and-reconstruction). Name hash `66764aec`. Every row uses `ui / loc_talent_broker_passive_cleave_on_cleave_desc / 04b9c8f2`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Trigger and Cleave value | Single Melee Attack hits 3 or more enemies; +50% Cleave; `ui / loc_talent_broker_passive_cleave_on_cleave_desc / 04b9c8f2` | Grants the child at `target_number >= 3`; both Damage and Stagger Cleave modifiers are 0.5 [Fixed source and line references](broker_passive_cleave_on_cleave.md#fixed-source-evidence) | Consistent | The attack condition, threshold and capacity bonus agree. |
| Consumption and duration | No fixed duration or consumption event details; `ui / loc_talent_broker_passive_cleave_on_cleave_desc / 04b9c8f2` | `on_hit` with `target_number < 3` consumes the child, including non-Melee hits; the next qualifying attack can grant it again [Fixed source and line references](broker_passive_cleave_on_cleave.md#fixed-source-evidence) | Not covered by the description | These preserve the event limits and both Cleave-capacity examples. |
| Same-attack timing | For your next Attack; `ui / loc_talent_broker_passive_cleave_on_cleave_desc / 04b9c8f2` | Whether later hits of the triggering attack already read the new bonus depends on attack sampling and remains untested [Fixed source and line references](broker_passive_cleave_on_cleave.md#fixed-source-evidence) | Cannot confirm | The existing evidence does not establish an exclusive next-attack-only effect for every weapon; retain the caveat. |


<a id="broker_stimm_activation_talent"></a>

## Equip Cartel Special

Full raw template and formatting: [source evidence](broker_stimm_activation_talent.md#original-english-template-and-reconstruction). Name hash `6158914f`. Every row uses `ui / loc_talent_broker_stimm_activation_talent_desc / 95c45406`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Dedicated Stimm | Equips your Cartel Special; `ui / loc_talent_broker_stimm_activation_talent_desc / 95c45406` | Selecting any `broker_stimm` recipe enables `broker_syringe` and equips the dedicated item [Fixed source and line references](broker_stimm_activation_talent.md#fixed-source-evidence) | Consistent | The dedicated item agrees; the central icon's lack of an action does not change the recipe-based equipping result. |
| Other-Stimm use restriction | While equipped, you are unable to use other Stimms; `ui / loc_talent_broker_stimm_activation_talent_desc / 95c45406` | The item occupies `slot_pocketable_small` and is non-givable/non-droppable; the existing evidence does not fully establish every other-Stimm use path [Fixed source and line references](broker_stimm_activation_talent.md#fixed-source-evidence) | Cannot confirm | Preserve this concrete limitation of the available evidence without extending the task into a mechanism investigation. |
| Selection, budget and cycle | No recipe-selection, budget, duration or recovery formula; `ui / loc_talent_broker_stimm_activation_talent_desc / 95c45406` | Zero-cost start node; any selected recipe equips the item; 30-point recipe budget; 15-second effects pause natural recovery; recovery scales from 15 to 75 seconds [Fixed source and line references](broker_stimm_activation_talent.md#fixed-source-evidence) | Not covered by the description | The original formulas, costs and 90-second cycle explain the dedicated item's operation. |


<a id="broker_stimm_celerity_1"></a>

## Spur I

Full raw template and formatting: [source evidence](broker_stimm_celerity_1.md#original-english-template-and-reconstruction). Name hash `33b4b842`. Every row uses `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_stat_wield_speed / d0347040`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe statistics | +4% Attack Speed; +25% Weapon Swap Speed (component reconstruction); `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_stat_wield_speed / d0347040` | `attack_speed = 0.04`; `wield_speed = 0.25` affects applicable action time scales [Fixed source and line references](broker_stimm_celerity_1.md#fixed-source-evidence) | Consistent | Both stat names and values match the accepted recipe. |
| Cost, stacking and timing | No purchase, shared lifetime, stacking or action-segment formula; `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_stat_wield_speed / d0347040` | One purchase at cost 1; selected prerequisites remain active; additive speed bonuses divide applicable action times; field duration is externally controlled [Fixed source and line references](broker_stimm_celerity_1.md#fixed-source-evidence) | Not covered by the description | The original 0.8/0.667-second swap and 0.962-second attack examples clarify the effects. |


<a id="broker_stimm_celerity_2"></a>

## Spur II

Full raw template and formatting: [source evidence](broker_stimm_celerity_2.md#original-english-template-and-reconstruction). Name hash `33b4b842`. Every row uses `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_stat_wield_speed / d0347040`; `ui / loc_talent_stat_stamina_cost_multiplier / 26fbf08f`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe statistics | +4% Attack Speed; +25% Weapon Swap Speed; −15% Stamina Cost (component reconstruction); `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_stat_wield_speed / d0347040`; `ui / loc_talent_stat_stamina_cost_multiplier / 26fbf08f` | `attack_speed = 0.04`; `wield_speed = 0.25`; `stamina_cost_multiplier = 0.85` [Fixed source and line references](broker_stimm_celerity_2.md#fixed-source-evidence) | Consistent | All three named stats and numerical changes agree. |
| Cost, stacking and timing | No purchase, shared lifetime or stacking formula; `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_stat_wield_speed / d0347040`; `ui / loc_talent_stat_stamina_cost_multiplier / 26fbf08f` | One purchase at cost 2; selected prerequisites remain active; speed bonuses add, Stamina Cost multipliers multiply; field duration is externally controlled [Fixed source and line references](broker_stimm_celerity_2.md#fixed-source-evidence) | Not covered by the description | The swap, 5.78 Stamina Cost and 0.926-second attack examples preserve the accepted formulas and limits. |


<a id="broker_stimm_celerity_3"></a>

## Spur III

Full raw template and formatting: [source evidence](broker_stimm_celerity_3.md#original-english-template-and-reconstruction). Name hash `33b4b842`. Every row uses `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_stat_stamina_cost_multiplier / 26fbf08f`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe statistics | +4% Attack Speed; −15% Stamina Cost (component reconstruction); `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_stat_stamina_cost_multiplier / 26fbf08f` | `attack_speed = 0.04`; `stamina_cost_multiplier = 0.85` [Fixed source and line references](broker_stimm_celerity_3.md#fixed-source-evidence) | Consistent | Both stat names and numerical changes agree. |
| Cost, stacking and timing | No purchase, shared lifetime or stacking formula; `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_stat_stamina_cost_multiplier / 26fbf08f` | One purchase at cost 3; selected prerequisites remain active; speed bonuses add and Stamina Cost multipliers multiply; field duration is externally controlled [Fixed source and line references](broker_stimm_celerity_3.md#fixed-source-evidence) | Not covered by the description | The original 8.5/5.78 Stamina Cost and 0.893-second attack examples clarify the effects. |


<a id="broker_stimm_celerity_4"></a>

## Spur IV

Full raw template and formatting: [source evidence](broker_stimm_celerity_4.md#original-english-template-and-reconstruction). Name hash `33b4b842`. Every row uses `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_stat_stamina_cost_multiplier / 26fbf08f`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe statistics | +4% Attack Speed; −20% Stamina Cost (component reconstruction); `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_stat_stamina_cost_multiplier / 26fbf08f` | `attack_speed = 0.04`; `stamina_cost_multiplier = 0.8` [Fixed source and line references](broker_stimm_celerity_4.md#fixed-source-evidence) | Consistent | Both stat names and numerical changes agree. |
| Cost, stacking and timing | No purchase, shared lifetime or stacking formula; `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_stat_stamina_cost_multiplier / 26fbf08f` | One purchase at cost 4; selected prerequisites remain active; speed bonuses add and Stamina Cost multipliers multiply; field duration is externally controlled [Fixed source and line references](broker_stimm_celerity_4.md#fixed-source-evidence) | Not covered by the description | The original 8/5.78 Stamina Cost and 0.862-second attack examples clarify the effects. |


<a id="broker_stimm_celerity_5a"></a>

## Spur V

Full raw template and formatting: [source evidence](broker_stimm_celerity_5a.md#original-english-template-and-reconstruction). Name hash `33b4b842`. Every row uses `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_keyword_stun_immune / a6fe7bf4`; `ui / loc_talent_keyword_slowdown_immune / 5936af23`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe statistics and protection | +4% Attack Speed; Grants Stun Immunity; Grants Slowdown Immunity; `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_keyword_stun_immune / a6fe7bf4`; `ui / loc_talent_keyword_slowdown_immune / 5936af23` | `attack_speed = 0.04`; child `broker_syringe_slow_and_stun_immune` supplies the two matching keywords [Fixed source and line references](broker_stimm_celerity_5a.md#fixed-source-evidence) | Consistent | The stat value and both immunity types agree. |
| Cost, lifetime and immunity limits | No purchase, full-route formula, existing-disabled release or attack keyword-check details; `ui / loc_talent_stat_attack_speed / a2530496`; `ui / loc_talent_keyword_stun_immune / a6fe7bf4`; `ui / loc_talent_keyword_slowdown_immune / 5936af23` | One purchase at cost 5; prerequisites remain active; immunity follows the root lifetime and requires attack keyword checks; no call releases an existing disabled state [Fixed source and line references](broker_stimm_celerity_5a.md#fixed-source-evidence) | Not covered by the description | These preserve the 20% total/0.833-second example and the original protection limits. |


<a id="broker_stimm_celerity_5b"></a>

## Reflex

Full raw template and formatting: [source evidence](broker_stimm_celerity_5b.md#original-english-template-and-reconstruction). Name hash `d33a89f3`. Every row uses `ui / loc_talent_stat_reload_speed / 9020f1a1`; `ui / loc_talent_stat_recoil_modifier / 302c7f95`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe statistics | +30% Reload Speed; −50% Recoil (component reconstruction); `ui / loc_talent_stat_reload_speed / 9020f1a1`; `ui / loc_talent_stat_recoil_modifier / 302c7f95` | `reload_speed = 0.3`; additive `recoil_modifier = −0.5` changes the base 1 to 0.5 [Fixed source and line references](broker_stimm_celerity_5b.md#fixed-source-evidence) | Consistent | Both named stats and numerical changes agree. |
| Recoil scope, cost and duration | No unsteadiness/decay formula, recipe cost or shared lifetime; `ui / loc_talent_stat_reload_speed / 9020f1a1`; `ui / loc_talent_stat_recoil_modifier / 302c7f95` | Recoil gain uses the modifier and decay its reciprocal; displacement follows the weapon curve; one purchase at cost 5, with root/field lifetime [Fixed source and line references](broker_stimm_celerity_5b.md#fixed-source-evidence) | Not covered by the description | The 1.538-second reload and 0.1 gain/0.4 decay examples explain the verified effects. |


<a id="broker_stimm_celerity_5c"></a>

## Fervor

Full raw template and formatting: [source evidence](broker_stimm_celerity_5c.md#original-english-template-and-reconstruction). Name hash `9b5b6688`. Every row uses `ui / loc_talent_stat_movement_speed / 090b8be4`; `ui / loc_talent_stat_dodge_distance_modifier / ac38ced9`; `ui / loc_talent_stat_dodge_speed_multiplier / f5994101`; `ui / loc_talent_stat_dodge_cooldown_reset_modifier / 1863559c`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Movement and Dodge modifiers | +10% Movement Speed; +10% Dodge Distance; +10% Dodge Speed; `ui / loc_talent_stat_movement_speed / 090b8be4`; `ui / loc_talent_stat_dodge_distance_modifier / ac38ced9`; `ui / loc_talent_stat_dodge_speed_multiplier / f5994101`; `ui / loc_talent_stat_dodge_cooldown_reset_modifier / 1863559c` | Adds 0.1 to Movement Speed/Distance and multiplies Dodge Speed by 1.1 [Fixed source and line references](broker_stimm_celerity_5c.md#fixed-source-evidence) | Consistent | The three stat types and values agree. |
| Recovery wording | +10% Dodge Recovery Speed; `ui / loc_talent_stat_movement_speed / 090b8be4`; `ui / loc_talent_stat_dodge_distance_modifier / ac38ced9`; `ui / loc_talent_stat_dodge_speed_multiplier / f5994101`; `ui / loc_talent_stat_dodge_cooldown_reset_modifier / 1863559c` | `dodge_cooldown_reset_modifier = −0.1` shortens `consecutive_dodges_cooldown` wait to 0.9 of its base [Fixed source and line references](broker_stimm_celerity_5c.md#fixed-source-evidence) | Cannot confirm | The label does not define whether Speed is a literal rate or shorthand for the wait modifier. The verified 1 → 0.9 second effect is retained. |
| Cost, lifetime and movement limits | No recipe cost, sharing lifetime, total-duration or basic-interval formula; `ui / loc_talent_stat_movement_speed / 090b8be4`; `ui / loc_talent_stat_dodge_distance_modifier / ac38ced9`; `ui / loc_talent_stat_dodge_speed_multiplier / f5994101`; `ui / loc_talent_stat_dodge_cooldown_reset_modifier / 1863559c` | One purchase at cost 5; provider recipes share with externally controlled field lifetime; Dodge duration also depends on distance, curves and fixed steps; basic Dodge interval is unchanged [Fixed source and line references](broker_stimm_celerity_5c.md#fixed-source-evidence) | Not covered by the description | The movement/distance examples and existing timing limits supplement the stat labels. |


<a id="broker_stimm_combat_1"></a>

## Wildfire I

Full raw template and formatting: [source evidence](broker_stimm_combat_1.md#original-english-template-and-reconstruction). Name hash `fe5e6f12`. Every row uses `ui / loc_talent_stat_power_level / f8a49d31`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Power statistic and value | +4% Strength; `ui / loc_talent_stat_power_level / f8a49d31` | `power_level_modifier = 0.04`, using the accepted `loc_talent_stat_power_level` mapping [Fixed source and line references](broker_stimm_combat_1.md#fixed-source-evidence) | Consistent | Strength is the same-build English label for the mapped Power statistic, not a separate final-Damage claim. |
| Cost, stacking and Power scope | No cost, shared lifetime, stacking or final-Damage formula; `ui / loc_talent_stat_power_level / f8a49d31` | One purchase at cost 1; prerequisite Power adds at the same stage; `PowerLevel` precedes weapon Damage/Stagger/Cleave curves; field lifetime is externally controlled [Fixed source and line references](broker_stimm_combat_1.md#fixed-source-evidence) | Not covered by the description | The original 500 → 520 examples and Power scope explain the mapped statistic. |


<a id="broker_stimm_combat_2"></a>

## Wildfire II

Full raw template and formatting: [source evidence](broker_stimm_combat_2.md#original-english-template-and-reconstruction). Name hash `fe5e6f12`. Every row uses `ui / loc_talent_stat_power_level / f8a49d31`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Power statistic and value | +4% Strength; `ui / loc_talent_stat_power_level / f8a49d31` | `power_level_modifier = 0.04`, using the accepted `loc_talent_stat_power_level` mapping [Fixed source and line references](broker_stimm_combat_2.md#fixed-source-evidence) | Consistent | Strength is the same-build English label for the mapped Power statistic, not a separate final-Damage claim. |
| Cost, stacking and Power scope | No cost, shared lifetime, stacking or final-Damage formula; `ui / loc_talent_stat_power_level / f8a49d31` | One purchase at cost 2; prerequisite Power adds at the same stage; `PowerLevel` precedes weapon Damage/Stagger/Cleave curves; field lifetime is externally controlled [Fixed source and line references](broker_stimm_combat_2.md#fixed-source-evidence) | Not covered by the description | The original 500 → 520 with this node alone and 500 → 540 across I–II explain the accepted formula. |


<a id="broker_stimm_combat_3"></a>

## Wildfire III

Full raw template and formatting: [source evidence](broker_stimm_combat_3.md#original-english-template-and-reconstruction). Name hash `fe5e6f12`. Every row uses `ui / loc_talent_stat_power_level / f8a49d31`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Power statistic and value | +4% Strength; `ui / loc_talent_stat_power_level / f8a49d31` | `power_level_modifier = 0.04`, using the accepted `loc_talent_stat_power_level` mapping [Fixed source and line references](broker_stimm_combat_3.md#fixed-source-evidence) | Consistent | Strength is the same-build English label for the mapped Power statistic, not a separate final-Damage claim. |
| Cost, stacking and Power scope | No cost, shared lifetime, stacking or final-Damage formula; `ui / loc_talent_stat_power_level / f8a49d31` | One purchase at cost 3; prerequisite Power adds at the same stage; `PowerLevel` precedes weapon Damage/Stagger/Cleave curves; field lifetime is externally controlled [Fixed source and line references](broker_stimm_combat_3.md#fixed-source-evidence) | Not covered by the description | The original 500 → 520 with this node alone and 500 → 560 across I–III explain the accepted formula. |


<a id="broker_stimm_combat_4a"></a>

## Wildfire IV

Full raw template and formatting: [source evidence](broker_stimm_combat_4a.md#original-english-template-and-reconstruction). Name hash `fe5e6f12`. Every row uses `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_finesse_modifier_bonus / b004d6a5`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe statistics | +4% Strength; +10% Finesse (component reconstruction); `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_finesse_modifier_bonus / b004d6a5` | power_level_modifier = 0.04; finesse_modifier_bonus = 0.1 [Fixed source and line references](broker_stimm_combat_4a.md#fixed-source-evidence) | Consistent | The English labels match the mapped stats and values. Finesse is an abbreviated label for the additional Weakspot/Critical Damage component and does not state that the whole hit gains this percentage. |
| Cost, stacking and stat scope | No cost, shared lifetime or calculation formula; `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_finesse_modifier_bonus / b004d6a5` | One purchase at cost 4; prerequisite Power adds before weapon curves. `finesse_modifier_bonus` adds to the additional Finesse component, rather than the whole Weakspot/Critical Damage amount. Field lifetime is externally controlled. [Fixed source and line references](broker_stimm_combat_4a.md#fixed-source-evidence) | Not covered by the description | The original Power and additional-stat examples explain the accepted formulas and limits. |


<a id="broker_stimm_combat_4b"></a>

## Fury I

Full raw template and formatting: [source evidence](broker_stimm_combat_4b.md#original-english-template-and-reconstruction). Name hash `ea57fba3`. Every row uses `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_rending_multiplier / 0dd2df4e`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe statistics | +4% Strength; +5% Rending (component reconstruction); `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_rending_multiplier / 0dd2df4e` | power_level_modifier = 0.04; rending_multiplier = 0.05 [Fixed source and line references](broker_stimm_combat_4b.md#fixed-source-evidence) | Consistent | The English labels match the mapped stats and values. Rending does not state a universal final Damage multiplier; the armour-modifier rules supplement it. |
| Cost, stacking and stat scope | No cost, shared lifetime or calculation formula; `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_rending_multiplier / 0dd2df4e` | One purchase at cost 4; prerequisite Power adds before weapon curves. `rending_multiplier` increases the effective armour modifier when it is below 1. Crossing 1 and special profiles follow separate Rending rules; the example is limited to values that do not cross 1. Field lifetime is externally controlled. [Fixed source and line references](broker_stimm_combat_4b.md#fixed-source-evidence) | Not covered by the description | The original Power and additional-stat examples explain the accepted formulas and limits. |


<a id="broker_stimm_combat_4c"></a>

## Vultoprene I

Full raw template and formatting: [source evidence](broker_stimm_combat_4c.md#original-english-template-and-reconstruction). Name hash `0f81fa53`. Every row uses `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_critical_strike_chance / a4e46663`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe statistics | +4% Strength; +5% Critical Strike Chance (component reconstruction); `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_critical_strike_chance / a4e46663` | power_level_modifier = 0.04; critical_strike_chance = 0.05 [Fixed source and line references](broker_stimm_combat_4c.md#fixed-source-evidence) | Consistent | The English labels match the mapped stats and values. The Critical Strike Chance label and value match an additive percentage-point bonus; stacking and clamping supplement it. |
| Cost, stacking and stat scope | No cost, shared lifetime or calculation formula; `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_critical_strike_chance / a4e46663` | One purchase at cost 4; prerequisite Power adds before weapon curves. `critical_strike_chance` is a `value` stat, added to the base and other Critical Strike Chance values before `clamp01`. Field lifetime is externally controlled. [Fixed source and line references](broker_stimm_combat_4c.md#fixed-source-evidence) | Not covered by the description | The original Power and additional-stat examples explain the accepted formulas and limits. |


<a id="broker_stimm_combat_5a"></a>

## Wildfire V

Full raw template and formatting: [source evidence](broker_stimm_combat_5a.md#original-english-template-and-reconstruction). Name hash `fe5e6f12`. Every row uses `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_finesse_modifier_bonus / b004d6a5`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe statistics | +4% Strength; +25% Finesse (component reconstruction); `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_finesse_modifier_bonus / b004d6a5` | power_level_modifier = 0.04; finesse_modifier_bonus = 0.25 [Fixed source and line references](broker_stimm_combat_5a.md#fixed-source-evidence) | Consistent | The English labels match the mapped stats and values. Finesse is an abbreviated label for the additional Weakspot/Critical Damage component and does not state that the whole hit gains this percentage. |
| Cost, stacking and stat scope | No cost, shared lifetime or calculation formula; `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_finesse_modifier_bonus / b004d6a5` | One purchase at cost 5; prerequisite Power adds before weapon curves. `finesse_modifier_bonus` adds to the additional Finesse component, rather than the whole Weakspot/Critical Damage amount. Field lifetime is externally controlled. [Fixed source and line references](broker_stimm_combat_5a.md#fixed-source-evidence) | Not covered by the description | The original Power and additional-stat examples explain the accepted formulas and limits. |


<a id="broker_stimm_combat_5b"></a>

## Fury II

Full raw template and formatting: [source evidence](broker_stimm_combat_5b.md#original-english-template-and-reconstruction). Name hash `ea57fba3`. Every row uses `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_rending_multiplier / 0dd2df4e`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe statistics | +4% Strength; +10% Rending (component reconstruction); `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_rending_multiplier / 0dd2df4e` | power_level_modifier = 0.04; rending_multiplier = 0.1 [Fixed source and line references](broker_stimm_combat_5b.md#fixed-source-evidence) | Consistent | The English labels match the mapped stats and values. Rending does not state a universal final Damage multiplier; the armour-modifier rules supplement it. |
| Cost, stacking and stat scope | No cost, shared lifetime or calculation formula; `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_rending_multiplier / 0dd2df4e` | One purchase at cost 5; prerequisite Power adds before weapon curves. `rending_multiplier` increases the effective armour modifier when it is below 1. Crossing 1 and special profiles follow separate Rending rules; the example is limited to values that do not cross 1. Field lifetime is externally controlled. [Fixed source and line references](broker_stimm_combat_5b.md#fixed-source-evidence) | Not covered by the description | The original Power and additional-stat examples explain the accepted formulas and limits. |


<a id="broker_stimm_combat_5c"></a>

## Vultoprene II

Full raw template and formatting: [source evidence](broker_stimm_combat_5c.md#original-english-template-and-reconstruction). Name hash `0f81fa53`. Every row uses `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_critical_strike_chance / a4e46663`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe statistics | +4% Strength; +10% Critical Strike Chance (component reconstruction); `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_critical_strike_chance / a4e46663` | power_level_modifier = 0.04; critical_strike_chance = 0.1 [Fixed source and line references](broker_stimm_combat_5c.md#fixed-source-evidence) | Consistent | The English labels match the mapped stats and values. The Critical Strike Chance label and value match an additive percentage-point bonus; stacking and clamping supplement it. |
| Cost, stacking and stat scope | No cost, shared lifetime or calculation formula; `ui / loc_talent_stat_power_level / f8a49d31`; `ui / loc_talent_stat_critical_strike_chance / a4e46663` | One purchase at cost 5; prerequisite Power adds before weapon curves. `critical_strike_chance` is a `value` stat, added to the base and other Critical Strike Chance values before `clamp01`. Field lifetime is externally controlled. [Fixed source and line references](broker_stimm_combat_5c.md#fixed-source-evidence) | Not covered by the description | The original Power and additional-stat examples explain the accepted formulas and limits. |


<a id="broker_stimm_durability_1"></a>

## Barrage I

Full raw template and formatting: [source evidence](broker_stimm_durability_1.md#original-english-template-and-reconstruction). Name hash `6f8e5c73`. Every row uses `ui / loc_talent_buff_toughness_on_stimm / 75149821`; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71`; `ui / loc_talent_stat_damage_taken_multiplier / 9a749a67`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe effects | Replenish 6.25% Toughness; +5% Toughness Replenishment; +4% Damage Reduction (component reconstruction); `ui / loc_talent_buff_toughness_on_stimm / 75149821`; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71`; `ui / loc_talent_stat_damage_taken_multiplier / 9a749a67` | One-time replenish_percentage(0.0625); toughness_replenish_modifier +0.05; damage_taken_multiplier ×0.96 [Fixed source and line references](broker_stimm_durability_1.md#fixed-source-evidence) | Consistent | The three effects and displayed values agree; Damage Reduction expresses the complement of the Damage Taken multiplier. |
| Recovery timing, stacking and limits | No maximum-Toughness basis, stacking formula, update/field rules, cost or lifetime; `ui / loc_talent_buff_toughness_on_stimm / 75149821`; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71`; `ui / loc_talent_stat_damage_taken_multiplier / 9a749a67` | Cost 1, bought once. Recovery modifiers add; Damage Taken modifiers multiply. Recovery is capped at the deficit, deferred while knocked down and not repeated on same-field re-entry; root/field lifetime applies. [Fixed source and line references](broker_stimm_durability_1.md#fixed-source-evidence) | Not covered by the description | The original examples retain the assumption that recovery modifiers are already applied. Actual synchronization/application order remains unobserved. |


<a id="broker_stimm_durability_2"></a>

## Barrage II

Full raw template and formatting: [source evidence](broker_stimm_durability_2.md#original-english-template-and-reconstruction). Name hash `6f8e5c73`. Every row uses `ui / loc_talent_buff_toughness_on_stimm / 75149821`; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71`; `ui / loc_talent_stat_damage_taken_multiplier / 9a749a67`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe effects | Replenish 6.25% Toughness; +5% Toughness Replenishment; +4% Damage Reduction (component reconstruction); `ui / loc_talent_buff_toughness_on_stimm / 75149821`; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71`; `ui / loc_talent_stat_damage_taken_multiplier / 9a749a67` | One-time replenish_percentage(0.0625); toughness_replenish_modifier +0.05; damage_taken_multiplier ×0.96 [Fixed source and line references](broker_stimm_durability_2.md#fixed-source-evidence) | Consistent | The three effects and displayed values agree; Damage Reduction expresses the complement of the Damage Taken multiplier. |
| Recovery timing, stacking and limits | No maximum-Toughness basis, stacking formula, update/field rules, cost or lifetime; `ui / loc_talent_buff_toughness_on_stimm / 75149821`; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71`; `ui / loc_talent_stat_damage_taken_multiplier / 9a749a67` | Cost 2, bought once. Recovery modifiers add; Damage Taken modifiers multiply. Recovery is capped at the deficit, deferred while knocked down and not repeated on same-field re-entry; root/field lifetime applies. [Fixed source and line references](broker_stimm_durability_2.md#fixed-source-evidence) | Not covered by the description | The original examples retain the assumption that recovery modifiers are already applied. Actual synchronization/application order remains unobserved. |


<a id="broker_stimm_durability_3"></a>

## Barrage III

Full raw template and formatting: [source evidence](broker_stimm_durability_3.md#original-english-template-and-reconstruction). Name hash `6f8e5c73`. Every row uses `ui / loc_talent_buff_toughness_on_stimm / 75149821`; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71`; `ui / loc_talent_stat_damage_taken_multiplier / 9a749a67`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe effects | Replenish 6.25% Toughness; +5% Toughness Replenishment; +4% Damage Reduction (component reconstruction); `ui / loc_talent_buff_toughness_on_stimm / 75149821`; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71`; `ui / loc_talent_stat_damage_taken_multiplier / 9a749a67` | One-time replenish_percentage(0.0625); toughness_replenish_modifier +0.05; damage_taken_multiplier ×0.96 [Fixed source and line references](broker_stimm_durability_3.md#fixed-source-evidence) | Consistent | The three effects and displayed values agree; Damage Reduction expresses the complement of the Damage Taken multiplier. |
| Recovery timing, stacking and limits | No maximum-Toughness basis, stacking formula, update/field rules, cost or lifetime; `ui / loc_talent_buff_toughness_on_stimm / 75149821`; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71`; `ui / loc_talent_stat_damage_taken_multiplier / 9a749a67` | Cost 3, bought once. Recovery modifiers add; Damage Taken modifiers multiply. Recovery is capped at the deficit, deferred while knocked down and not repeated on same-field re-entry; root/field lifetime applies. [Fixed source and line references](broker_stimm_durability_3.md#fixed-source-evidence) | Not covered by the description | The original examples retain the assumption that recovery modifiers are already applied. Actual synchronization/application order remains unobserved. |


<a id="broker_stimm_durability_4"></a>

## Barrage IV

Full raw template and formatting: [source evidence](broker_stimm_durability_4.md#original-english-template-and-reconstruction). Name hash `6f8e5c73`. Every row uses `ui / loc_talent_buff_toughness_on_stimm / 75149821`; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71`; `ui / loc_talent_stat_damage_taken_multiplier / 9a749a67`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe effects | Replenish 6.25% Toughness; +5% Toughness Replenishment; +4% Damage Reduction (component reconstruction); `ui / loc_talent_buff_toughness_on_stimm / 75149821`; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71`; `ui / loc_talent_stat_damage_taken_multiplier / 9a749a67` | One-time replenish_percentage(0.0625); toughness_replenish_modifier +0.05; damage_taken_multiplier ×0.96 [Fixed source and line references](broker_stimm_durability_4.md#fixed-source-evidence) | Consistent | The three effects and displayed values agree; Damage Reduction expresses the complement of the Damage Taken multiplier. |
| Recovery timing, stacking and limits | No maximum-Toughness basis, stacking formula, update/field rules, cost or lifetime; `ui / loc_talent_buff_toughness_on_stimm / 75149821`; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71`; `ui / loc_talent_stat_damage_taken_multiplier / 9a749a67` | Cost 4, bought once. Recovery modifiers add; Damage Taken modifiers multiply. Recovery is capped at the deficit, deferred while knocked down and not repeated on same-field re-entry; root/field lifetime applies. [Fixed source and line references](broker_stimm_durability_4.md#fixed-source-evidence) | Not covered by the description | The original examples retain the assumption that recovery modifiers are already applied. Actual synchronization/application order remains unobserved. |


<a id="broker_stimm_durability_5a"></a>

## Tank

Full raw template and formatting: [source evidence](broker_stimm_durability_5a.md#original-english-template-and-reconstruction). Name hash `e3530c66`. Every row uses `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recovery modifier | +30% Toughness Replenishment; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71` | toughness_replenish_modifier = 0.3 [Fixed source and line references](broker_stimm_durability_5a.md#fixed-source-evidence) | Consistent | The recovery stat and value agree. |
| Stacking, scope and recipe limits | No stacking formula, cap, stat-buff exception, cost or lifetime; `ui / loc_talent_stat_toughness_replenish_modifier / 805fdb71` | Four prerequisite 0.05 bonuses add with 0.3 to give multiplier 1.5; no maximum-Toughness increase; capped by deficit; sources ignoring stat buffs are unaffected; cost 5 and shared lifetime [Fixed source and line references](broker_stimm_durability_5a.md#fixed-source-evidence) | Not covered by the description | The original 10 → 15 and 37.5 injection examples retain the already-active recovery-bonus assumption. |


<a id="broker_stimm_durability_5b"></a>

## Regain

Full raw template and formatting: [source evidence](broker_stimm_durability_5b.md#original-english-template-and-reconstruction). Name hash `3e34e34e`. Every row uses `ui / loc_talent_buff_toughness_during_stimm / 6dd3d484`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recovery amount and interval | Replenish +5% Toughness every 1 seconds (reconstruction); `ui / loc_talent_buff_toughness_during_stimm / 6dd3d484` | replenish_percentage(0.05, false, "broker_syringe"); interval = 1 [Fixed source and line references](broker_stimm_durability_5b.md#fixed-source-evidence) | Consistent | The nominal recurring recovery amount and interval agree. |
| Timing, caps and recipe limits | No first-tick timing, exact total ticks, recovery basis/modifiers, knocked-down or lifetime rule; `ui / loc_talent_buff_toughness_during_stimm / 6dd3d484` | First tick requires time > start + 1; each tick schedules from current update time; deficit/recovery modifier applies; knocked-down returns; root removal stops recovery; cost 5 [Fixed source and line references](broker_stimm_durability_5b.md#fixed-source-evidence) | Not covered by the description | The original 6-Toughness example and 3-Toughness deficit cap are retained. No fixed 15-tick total is claimed. |


<a id="broker_stimm_concentration_1"></a>

## Kalma I

Full raw template and formatting: [source evidence](broker_stimm_concentration_1.md#original-english-template-and-reconstruction). Name hash `eab26b4f`. Every row uses `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Regeneration statistic | +6.25% Cooldown Regeneration; `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f` | combat_ability_resource_regen_modifier = 0.0625, additive_multiplier [Fixed source and line references](broker_stimm_concentration_1.md#fixed-source-evidence) | Consistent | The accepted cooldown/resource mapping and regeneration-rate value agree. |
| Stacking, pause and recipe limits | No stacking, base/flat formula, paused-state, cost or lifetime; `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f` | Prerequisites give multiplier 1.0625; (base_regen + flat_regen) × modifier, with base 0 while paused; cost 1, bought once, with shared lifetime [Fixed source and line references](broker_stimm_concentration_1.md#fixed-source-evidence) | Not covered by the description | The original 15-second regeneration and 60-second remaining-time examples assume normal regeneration and preserve the return to the original rate. |


<a id="broker_stimm_concentration_2"></a>

## Kalma II

Full raw template and formatting: [source evidence](broker_stimm_concentration_2.md#original-english-template-and-reconstruction). Name hash `eab26b4f`. Every row uses `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Regeneration statistic | +6.25% Cooldown Regeneration; `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f` | combat_ability_resource_regen_modifier = 0.0625, additive_multiplier [Fixed source and line references](broker_stimm_concentration_2.md#fixed-source-evidence) | Consistent | The accepted cooldown/resource mapping and regeneration-rate value agree. |
| Stacking, pause and recipe limits | No stacking, base/flat formula, paused-state, cost or lifetime; `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f` | Prerequisites give multiplier 1.125; (base_regen + flat_regen) × modifier, with base 0 while paused; cost 2, bought once, with shared lifetime [Fixed source and line references](broker_stimm_concentration_2.md#fixed-source-evidence) | Not covered by the description | The original 15-second regeneration and 60-second remaining-time examples assume normal regeneration and preserve the return to the original rate. |


<a id="broker_stimm_concentration_3"></a>

## Kalma III

Full raw template and formatting: [source evidence](broker_stimm_concentration_3.md#original-english-template-and-reconstruction). Name hash `eab26b4f`. Every row uses `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Regeneration statistic | +6.25% Cooldown Regeneration; `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f` | combat_ability_resource_regen_modifier = 0.0625, additive_multiplier [Fixed source and line references](broker_stimm_concentration_3.md#fixed-source-evidence) | Consistent | The accepted cooldown/resource mapping and regeneration-rate value agree. |
| Stacking, pause and recipe limits | No stacking, base/flat formula, paused-state, cost or lifetime; `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f` | Prerequisites give multiplier 1.1875; (base_regen + flat_regen) × modifier, with base 0 while paused; cost 3, bought once, with shared lifetime [Fixed source and line references](broker_stimm_concentration_3.md#fixed-source-evidence) | Not covered by the description | The original 15-second regeneration and 60-second remaining-time examples assume normal regeneration and preserve the return to the original rate. |


<a id="broker_stimm_concentration_4"></a>

## Kalma IV

Full raw template and formatting: [source evidence](broker_stimm_concentration_4.md#original-english-template-and-reconstruction). Name hash `eab26b4f`. Every row uses `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Regeneration statistic | +6.25% Cooldown Regeneration; `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f` | combat_ability_resource_regen_modifier = 0.0625, additive_multiplier [Fixed source and line references](broker_stimm_concentration_4.md#fixed-source-evidence) | Consistent | The accepted cooldown/resource mapping and regeneration-rate value agree. |
| Stacking, pause and recipe limits | No stacking, base/flat formula, paused-state, cost or lifetime; `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f` | Prerequisites give multiplier 1.25; (base_regen + flat_regen) × modifier, with base 0 while paused; cost 4, bought once, with shared lifetime [Fixed source and line references](broker_stimm_concentration_4.md#fixed-source-evidence) | Not covered by the description | The original 15-second regeneration and 60-second remaining-time examples assume normal regeneration and preserve the return to the original rate. |


<a id="broker_stimm_concentration_5a"></a>

## Kalma V

Full raw template and formatting: [source evidence](broker_stimm_concentration_5a.md#original-english-template-and-reconstruction). Name hash `eab26b4f`. Every row uses `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Regeneration statistic | +25% Cooldown Regeneration; `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f` | combat_ability_resource_regen_modifier = 0.25, additive_multiplier [Fixed source and line references](broker_stimm_concentration_5a.md#fixed-source-evidence) | Consistent | The accepted cooldown/resource mapping and regeneration-rate value agree. |
| Stacking, pause and recipe limits | No stacking, base/flat formula, paused-state, cost or lifetime; `ui / loc_talent_stat_combat_ability_cooldown_regen_modifier / 04d3484f` | Prerequisites give multiplier 1.5; (base_regen + flat_regen) × modifier, with base 0 while paused; cost 5, bought once, with shared lifetime [Fixed source and line references](broker_stimm_concentration_5a.md#fixed-source-evidence) | Not covered by the description | The original 15-second regeneration and 60-second remaining-time examples assume normal regeneration and preserve the return to the original rate. |


<a id="broker_stimm_concentration_5b"></a>

## Hypex

Full raw template and formatting: [source evidence](broker_stimm_concentration_5b.md#original-english-template-and-reconstruction). Name hash `99e5c538`. Every row uses `ui / loc_talent_buff_cooldown_on_melee_kills / 9c1a429b`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Trigger and duration | While active, Melee Kills grant Ability Cooldown Regeneration for 1s; `ui / loc_talent_buff_cooldown_on_melee_kills / 9c1a429b` | on_kill with CheckProcFunctions.on_melee_kill; child duration = 1 [Fixed source and line references](broker_stimm_concentration_5b.md#fixed-source-evidence) | Consistent | The active condition, Melee Kill trigger and one-second duration agree. |
| Regeneration value | +75% Ability Cooldown Regeneration; `ui / loc_talent_buff_cooldown_on_melee_kills / 9c1a429b` | Base modifier 0.75 × recipe multiplier 0.75 = 0.5625, or 56.25% [Fixed source and line references](broker_stimm_concentration_5b.md#fixed-source-evidence) | Explicit contradiction | The English explicitly gives 75%, while the accepted fixed implementation gives 56.25%. Both languages use the same 75% display parameter; actual behavior remains unobserved in game. |
| Refresh, scope and recipe limits | No stacking, regeneration scope, pause, cost or end-of-effect details; `ui / loc_talent_buff_cooldown_on_melee_kills / 9c1a429b` | max_stacks = 1; refresh_duration_on_stack = true; Combat Ability only; natural regeneration may pause; cost 5, bought once; trigger removed at Stimm end while child expires on its own timer [Fixed source and line references](broker_stimm_concentration_5b.md#fixed-source-evidence) | Not covered by the description | These omissions supplement the description. The original Kalma I–IV example preserves the combined 1.8125 multiplier; field sharing follows the provider's recipes and external lifetime. |


<a id="broker_stimm_concentration_5c"></a>

## Klay

Full raw template and formatting: [source evidence](broker_stimm_concentration_5c.md#original-english-template-and-reconstruction). Name hash `f7a8d514`. Every row uses `ui / loc_talent_buff_cooldown_on_ranged_kills / 676aa37d`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Trigger and duration | While active, Ranged Kills grant Ability Cooldown Regeneration for 1s; `ui / loc_talent_buff_cooldown_on_ranged_kills / 676aa37d` | on_kill with CheckProcFunctions.on_ranged_kill; child duration = 1 [Fixed source and line references](broker_stimm_concentration_5c.md#fixed-source-evidence) | Consistent | The active condition, Ranged Kill trigger and one-second duration agree. |
| Regeneration value | +75% Ability Cooldown Regeneration; `ui / loc_talent_buff_cooldown_on_ranged_kills / 676aa37d` | Base modifier 0.75 × recipe multiplier 0.75 = 0.5625, or 56.25% [Fixed source and line references](broker_stimm_concentration_5c.md#fixed-source-evidence) | Explicit contradiction | The English explicitly gives 75%, while the accepted fixed implementation gives 56.25%. Both languages use the same 75% display parameter; actual behavior remains unobserved in game. |
| Refresh, scope and recipe limits | No stacking, regeneration scope, pause, cost or end-of-effect details; `ui / loc_talent_buff_cooldown_on_ranged_kills / 676aa37d` | max_stacks = 1; refresh_duration_on_stack = true; Combat Ability only; natural regeneration may pause; cost 5, bought once; trigger removed at Stimm end while child expires on its own timer [Fixed source and line references](broker_stimm_concentration_5c.md#fixed-source-evidence) | Not covered by the description | These omissions supplement the description. The original Kalma I–IV example preserves the combined 1.8125 multiplier; field sharing follows the provider's recipes and external lifetime. |


<a id="broker_ability_focus"></a>

## Desperado: base combat ability

Full raw template and formatting: [source evidence](broker_ability_focus.md#original-english-template-and-reconstruction). Name hash `e77f3e99`. Every row uses `ui / loc_talent_broker_ability_focus_desc / a131b118`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Base stance and listed effects | Ranged Weapon switch/reload; Desperado for 10s; counts as Dodging against Ranged Attacks; Sprinting costs no Stamina; +20% Sprint Speed; reloads do not reduce Ammo Reserve; base cooldown 45s; `ui / loc_talent_broker_ability_focus_desc / a131b118` | slot_secondary; broker_focus_stance duration 10; count_as_dodge_vs_ranged; sprinting_cost_multiplier = 0; sprint_movement_speed = 0.20; free ammo transfers; resource cost 45 with natural regeneration 1/s [Fixed source and line references](broker_ability_focus.md#fixed-source-evidence) | Consistent | The English's explicit conditions, effects and values match the accepted base ability. |
| Additional base rules and limits | No cooldown pause, Toughness restoration, Suppression immunity, ammo reconciliation or upgrade boundaries; `ui / loc_talent_broker_ability_focus_desc / a131b118` | Cooldown pauses during Focus; Toughness restoration is deficit-capped; suppression_immune; normal ammo reconciliation at expiry; no broker_focus_improved kill behavior [Fixed source and line references](broker_ability_focus.md#fixed-source-evidence) | Not covered by the description | The original 10 + 45 = 55-second cooldown and 100 × 1.20 = 120 Sprint Speed examples retain their assumptions. These unmentioned details supplement the text. |


<a id="broker_blitz_flash_grenade"></a>

## Blinder: base blitz

Full raw template and formatting: [source evidence](broker_blitz_flash_grenade.md#original-english-template-and-reconstruction). Name hash `6fa18120`. Every row uses `ui / loc_talent_broker_blitz_flash_grenade_desc / 9cb00aee`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Grenade and replenishment | Quick Grenade Staggers enemies; every 20 Close Range Kills generate 1 Grenade; maximum 3; `ui / loc_talent_broker_blitz_flash_grenade_desc / 9cb00aee` | quick_flash_grenade; flash Stagger profile; on_close_kill counter resets at 20 and adds 1 below max_charges = 3 [Fixed source and line references](broker_blitz_flash_grenade.md#fixed-source-evidence) | Consistent | The listed effects, trigger and values match the accepted base Blitz. |
| Throw, damage and counting limits | No throw timing, collision/radii, Health Damage, full-charge counter or delayed-kill details; `ui / loc_talent_broker_blitz_flash_grenade_desc / 9cb00aee` | 0.55-second action, projectile at 0.25s; collision detonation; radii 3.5m/2.25m; explosion no Health Damage; counter retained while full; specific tracked needle-pistol toxin death with attacking_unit distance check [Fixed source and line references](broker_blitz_flash_grenade.md#fixed-source-evidence) | Not covered by the description | These details supplement the text; the achievement tracker adds no player Damage or charge bonus. Original counter examples retain their qualifying-kill and below-maximum conditions. |


<a id="broker_aura_gunslinger"></a>

## Gunslinger: base aura

Full raw template and formatting: [source evidence](broker_aura_gunslinger.md#original-english-template-and-reconstruction). Name hash `24295b77`. Every row uses `ui / loc_talent_broker_aura_gunslinger_desc / 3df231fe`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Pickup trigger and share | Ammo pickup collected by you or allies in Coherency; each replenish 5% of that pickup; `ui / loc_talent_broker_aura_gunslinger_desc / 3df231fe` | on_ammo_pickup; in_coherence_units; copied pickup data modifier = 0.05 [Fixed source and line references](broker_aura_gunslinger.md#fixed-source-evidence) | Consistent | The trigger, recipients and share value agree for the documented ordinary pickups. |
| Per-member calculation and sharing limits | No weapon capacity, rounding, deficit, duplicate Aura or recursion details; `ui / loc_talent_broker_aura_gunslinger_desc / 3df231fe` | Each slot's pickup_amount_func; only max_ammunition_reserve > 0; cap at reserve plus magazine deficit; improved 10% replaces base 5%; skip_proc = true [Fixed source and line references](broker_aura_gunslinger.md#fixed-source-evidence) | Not covered by the description | Original ordinary pickup examples retain their per-member capacities and available-room assumptions; these details supplement the text. |
| Special mission large Ammo Crate | When an Ammo pickup is collected; `ui / loc_talent_broker_aura_gunslinger_desc / 3df231fe` | The existing evidence does not establish the special mission crate's event or actual sharing [Fixed source and line references](broker_aura_gunslinger.md#fixed-source-evidence) | Cannot confirm | The text is broad, but this unverified case cannot be asserted as an English contradiction. |


<a id="broker_passive_improved_sprint_dodge"></a>

## Like the Wind: base passive

Full raw template and formatting: [source evidence](broker_passive_improved_sprint_dodge.md#original-english-template-and-reconstruction). Name hash `9ac70c19`. Every row uses `ui / loc_talent_broker_iconic_improved_dodges_desc / 993a0d69`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Sprint Dodge and additional Dodge | Dodge while Sprinting with depleted Stamina; +15 degree Dodge Angle; +1 Effective Dodges; `ui / loc_talent_broker_iconic_improved_dodges_desc / 993a0d69` | sprint_dodge_in_overtime; threshold 70° − 15° = 55°; extra_consecutive_dodges = 1 [Fixed source and line references](broker_passive_improved_sprint_dodge.md#fixed-source-evidence) | Consistent | The depleted-Stamina permission, wider Sprint Dodge angle and additional Effective Dodge agree. |
| Angle and weapon limits | No strict comparison, Ranged Attack scope or weapon-dependent decay formula; `ui / loc_talent_broker_iconic_improved_dodges_desc / 993a0d69` | look_away_angle > threshold; Sprint Dodge against Ranged Attacks; diminishing_return_start (default 2) + 1, with weapon-specific decay [Fixed source and line references](broker_passive_improved_sprint_dodge.md#fixed-source-evidence) | Not covered by the description | Original 60° angle and 2 + 1 = 3 decay-start examples retain their assumptions. The passive does not increase every Dodge duration or distance. |


<a id="broker_stimm_description_talent"></a>

## Cartel Special: dedicated stimm

Full raw template and formatting: [source evidence](broker_stimm_description_talent.md#original-english-template-and-reconstruction). Name hash `7a34c61a`. Every row uses `ui / loc_talent_broker_stimm_desc / 042ba657`.

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Recipe interface and personal Stimm | Use the Stimm Lab to brew Cartel Special, a personal Stimm for field use; `ui / loc_talent_broker_stimm_desc / 042ba657` | Description node's loc_string placeholders identify the Stimm Lab and Cartel Special; recipes are generated by _generate_stimm_talent [Fixed source and line references](broker_stimm_description_talent.md#fixed-source-evidence) | Consistent | The interface instruction and personal Stimm identity agree with the accepted configuration. |
| Item condition and effect definitions | No recipe-selection condition, point budget or independent ability definitions; `ui / loc_talent_broker_stimm_desc / 042ba657` | Description node has no combat effect; conditional broker_syringe requires any selected broker_stimm recipe in slot_pocketable_small; separate 30-point budget and recipe effects [Fixed source and line references](broker_stimm_description_talent.md#fixed-source-evidence) | Not covered by the description | These details supplement the instruction. The existing description-only example does not grant the syringe until a recipe is selected. |


<a id="broker_syringe"></a>

## Dedicated Stimm charge

| Rule | Original game English and resource / key / hash | Code behavior and fixed source / method / lines | Result | Reason |
|---|---|---|---|---|
| Standalone ability description | No standalone English description key/hash paired in the existing evidence | Conditional `broker_syringe` → `broker_ability_syringe`; 1 charge; 15-second effect plus duration modifiers; cost-based recovery, paused during effect [Fixed source and line references](broker_syringe.md#fixed-source-evidence) | Cannot confirm | Preserve the verified mechanism translation. Similar Cartel Special description keys do not provide a separate original English text for this ability. |

## Comparison totals

The 245 listed rules comprise **113 Consistent**, **7 Explicit contradictions**, **113 Not covered by the description**, **1 No corresponding implementation evidence found** and **11 Cannot confirm**.
