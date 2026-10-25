# Smite: source evidence

[繁體中文](../psyker_grenade_chain_lightning.md) | [Player description](README.md#psyker_grenade_chain_lightning) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_grenade_chain_lightning)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_grenade_chain_lightning`; name key `loc_ability_psyker_chain_lightning`; description key `loc_ability_psyker_chain_lightning_description`. Node `node_88eb687e-bd2e-449e-b198-1bd2318eeda1`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- At the fixed source SHA, Smite's left-button quick action and right-button charged action use different chain schedules. Each table first limits the direct root targets acquired through the crosshair. Subsequent jumps extend separately from each root to nearby enemies and have independent `max_jumps_at_time`, radius, angle, line-of-sight and living-target conditions.
- Electrocution uses an interval buff: each tick's interval is random between 0.1 and 0.3 seconds, averaging about 0.2 seconds. The first attack time is delayed by target hit mass using `clamp((target_hit_mass - 1) × hit_mass_cost, 0, 2)`. Quick electrocution has `hit_mass_cost=0.1`, charged electrocution 0.05. For hit mass 3, these give delays of 0.2 and 0.1 seconds respectively.
- The direct-root and subsequent-jump table times both run from action start; the code selects limits with `time_in_action >= time threshold`. Server-side tick damage uses power level 500, the electrocution damage settings and elapsed time since electrocution began on that target. Base casting raises charge level from 0 to 1 over 5 seconds; charged casting does so over 2 seconds. The damage settings' power-level scalar rises linearly from 0.4 to 1.
- Once the base chain starts, Peril initially accumulates at 0.75% over 0.1 seconds; after full charge it accumulates at 22.5% per second. The preparatory charged action uses a 0.8-second charge template and generates 5% over that complete phase. These Peril derivations assume no other modifiers; actual action duration and buffs change the accumulated amount.
- The current Blitz itself installs `psyker_increased_chain_lightning_size`; the accepted settings at `talent_settings_psyker.lua` L333–338 provide jumps +1, radius +1 and angle +0. `ChainLightning.targeting_parameters` adds that stat to the schedule's `max_jumps` and adds 1 to the radius. Thus subsequent propagation reaches 6 metres with jump limits 1/2/3/4; the weapon template's unmodified 5 metres and 0/1/2/3 are insufficient. Direct target-finding radius likewise increases from the template's 15 to 16.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L340-L372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L340-L372)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L199-L230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L199-L230)
- [scripts/settings/talent/talent_settings_psyker.lua — L282-L304](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L282-L304)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua — L12-L54](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L12-L54)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua — L82-L124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L82-L124)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua — L447-L464](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L447-L464)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua — L514-L524](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L514-L524)
- [scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua — L587-L605](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenades/psyker_chain_lightning.lua#L587-L605)
- [scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua — L419-L439](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L419-L439)
- [scripts/extension_systems/weapon/actions/action_chain_lightning.lua — L166-L179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_chain_lightning.lua#L166-L179)
- [scripts/extension_systems/weapon/actions/action_chain_lightning.lua — L390-L418](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_chain_lightning.lua#L390-L418)
- [scripts/extension_systems/weapon/actions/action_chain_lightning.lua — L430-L489](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_chain_lightning.lua#L430-L489)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L7-L47](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L7-L47)
- [scripts/settings/buff/weapon_buff_templates.lua — L983-L1054](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L983-L1054)
- [scripts/settings/buff/weapon_buff_templates.lua — L1088-L1123](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1088-L1123)
- [scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua — L417-L462](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/psyker_damage_profile_templates.lua#L417-L462)
- [scripts/utilities/attack/power_level.lua — L122-L134](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L122-L134)
- [scripts/utilities/warp_charge.lua — L116-L141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L116-L141)
- [scripts/utilities/shared_overheat_and_warp_charge_functions.lua — L26-L41](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L26-L41)
- [scripts/utilities/action/chain_lightning.lua — L408-L435](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L408-L435)
- [scripts/utilities/action/chain_lightning.lua — L456-L483](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L456-L483)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2159-L2167](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2159-L2167)
- [scripts/settings/talent/talent_settings_psyker.lua — L333-L338](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L333-L338)
- [scripts/utilities/action/chain_lightning.lua — L455-L497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/chain_lightning.lua#L455-L497)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L199-L230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L199-L230)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L340-L372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L340-L372)

## Example assumptions and limits

- **How it works**: Channel psychic lightning, electrocuting a target and spreading to nearby enemies. Whether enemies remain staggered depends on their resistance and actions. Charged casting accelerates propagation and damage buildup.

- **Spread**: Subsequent propagation reaches 5 + 1 = 6 metres. Quick casting starts with at most one jump and increases to 2, 3 and 4 jumps at 1.2, 1.8 and 2.7 seconds. Charged casting reaches those same limits at 0.4, 0.6 and 0.9 seconds. Enemy positions and line of sight still limit actual numbers.

- **Sustained damage**: Electrocution deals damage at random intervals of 0.1–0.3 seconds. Quick casting takes about 5 seconds to reach maximum intensity; charged casting takes about 2. Targets with greater resistance to penetration start taking damage later. Final damage also depends on enemy armour and bonuses.

- **Peril example**: Without other modifiers, quick casting adds about 0.75 Peril percentage points during its first 0.1 seconds, then about 22.5 points per second. Maintaining it for 0.35 seconds adds about 0.75 + 22.5 × 0.25 = 6.375 points. Completing the 0.8-second preparatory charge phase adds about 5 points during that phase.

- Times run from each action's start. Counting only crosshair-acquired direct-root limits and assuming eligible targets: quick casting allows 1 root at 0 seconds, 2 at 1 second and 3 at 2 seconds. Its subsequent-jump limits are 1 at 0 seconds, 2 at 1.2 seconds, 3 at 1.8 seconds and 4 at 2.7 seconds. Charged casting allows 1 root at 0 seconds, 2 at 0.15 seconds and 3 at 0.3 seconds, with subsequent-jump limits of 1 at 0 seconds, 2 at 0.4 seconds, 3 at 0.6 seconds and 4 at 0.9 seconds. Direct-root count and jumps from each root are separate limits; 3 roots does not mean the whole attack can hit only 3 enemies.
- Peril calculations use the unmodified base chain template, starting the action at 0 charge. It generates 0.75% in the first 0.1 seconds and then 22.5%/second. An idealized 0.35-second quick action gives `0.75% + 22.5% × 0.25 = 6.375%`. Completing the preparatory charged template's 0.8 seconds generates 5% during that phase. These are template/time-derived Peril increments; discrete updates, action transitions and existing Peril may change actual values.
- Assume an electrocution tick occurs exactly 1 second after electrocution starts on the target and target hit mass is 1, making attack delay 0. Quick casting gives `charge level = min(1, 1/5)=0.2` and `power-level scalar = 0.4+(1−0.4)×0.2=0.52`. Charged casting gives `charge level = min(1, 1/2)=0.5` and `scalar=0.4+(1−0.4)×0.5=0.7`. These are scalars for that tick's power-level calculation, not final damage percentages; final values still apply the damage curve and target armour.
- Assume electrocution persists and tick intervals lie within the template's range. Each random 0.1–0.3-second interval averages 0.2 seconds, roughly 5 ticks/second; the interval bounds alone correspond to about 3.3–10 ticks/second. Tick frequency fluctuates and does not guarantee one hit every 0.2 seconds.
- Target schedules are code-defined limits. Enemy position, distance, angle, line of sight, survival and available jumps in each chain restrict actual hits.
- Tick damage depends on target hit-mass delay, random intervals, the 5-second/2-second damage charge curves, enemy armour and other multipliers. A power-level scalar is not a final damage percentage.
- Peril percentages are derived from templates and shared Peril update code; actual increments depend on the character's Peril modifiers, duration, ability interruption and update frames.
- This is static derivation without in-game testing. Text and source both correspond to 1.13.1; actual behavior remains pending in-game comparison. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_ability_psyker_chain_lightning`, hash `eb65c907`, entry 15301: **Smite**.
- Description key `loc_ability_psyker_chain_lightning_description`, hash `837f8e7f`, entry 8553.

Full raw template:

~~~text
Unleash a torrent of Bio-Lightning - a fast, channelled attack that Locks to and Stuns an Enemy while dealing Damage. This spreads to nearby Enemies. Charge to increase Spread rate and Damage.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | The exported description contains no placeholders | Original English is already complete |

The original English has no placeholders and needs no numeric reconstruction. The name/description mapping lies at `psyker_talents.lua` L199–230, already included in the batch's adjacent display-map read. All mechanism values and source pointers reuse accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
Unleash a torrent of Bio-Lightning - a fast, channelled attack that Locks to and Stuns an Enemy while dealing Damage. This spreads to nearby Enemies. Charge to increase Spread rate and Damage.
~~~

## English comparison

Read independently, the English describes channelled lightning that locks to a target, electrocutes it while dealing damage, spreads nearby, and improves spread rate and damage when charged. This agrees with the accepted chain actions and charged propagation/damage curves; target resistance and actions still qualify actual stagger. It does not state root/jump schedules, ranges, tick intervals, hit-mass delays, power-level scalars or Peril costs. These details supplement the description, without an explicit English contradiction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/tactical/psyker_grenade_chain_lightning.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/981d6617-da53-4f4d-8c85-c2e64dddab43). The icon identifies the talent; it is not mechanism evidence.
