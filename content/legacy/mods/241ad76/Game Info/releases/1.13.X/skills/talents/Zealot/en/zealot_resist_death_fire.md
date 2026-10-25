# Fire and Fury: source evidence

[繁體中文](../zealot_resist_death_fire.md) | [Player description](README.md#zealot_resist_death_fire) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_resist_death_fire)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_resist_death_fire`; name key `loc_talent_zealot_resist_death_fire`; description key `loc_talent_zealot_resist_death_fire_desc`. Node `node_9ad99512-0439-46e8-8113-5d7de6d174da`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Passive `zealot_resist_death_fire` processes only Melee/Ranged `on_hit`, requiring a living target and the player's `unkillable` keyword. It attempts to add 3 or 1 stacks respectively to the target's shared `flamer_assault`, with a talent cap of 12. Below the cap, only stacks that fit are added; at the cap, it calls `refresh_duration_of_stacking_buff`.
- `flamer_assault` is an interval Buff: single-stack `duration=4` seconds, `interval=0.5` seconds, `refresh_duration_on_stack=true`, and shared maximum 31 stacks. This talent's application caps at 12, but other sources can change actual stack count. Each application adding stacks resets the Buff duration.
- Each tick sets `x=current_stack_count/31`, `smooth=x²×(3−2x)`, then makes a `DamageProfileTemplates.burning` attack with `power_level=500×smooth`. The burning profile has attack `power_distribution=400`, `toughness_multiplier=3`, `ignore_shield=true`, and the default target boost curve. Stack count therefore cannot directly become a fixed Health-damage value.
- Without a separate `start_interval_on_apply` setting, IntervalBuff schedules the first interval after 0.5 seconds, then calls `interval_func` every 0.5 seconds. The 4-second duration and continuing stack refresh jointly determine the tick window.
- `flamer_assault` sets `interval_stack_removal=true`: 4 seconds does not clear all stacks at once; after expiry, each tick removes one stack. With no other modifiers, one Unarmoured tick is `400 × smoothstep(n/31) × 1.5`. The shared Buff cap is 31; 12 is only this talent's application cap.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3331-L3345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3331-L3345)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L5020-L5060](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L5020-L5060)
- [scripts/settings/talent/talent_settings_zealot.lua — L250-L270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L250-L270)
- [scripts/settings/buff/weapon_buff_templates.lua — L50-L77](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L77)
- [scripts/extension_systems/buff/buffs/interval_buff.lua — L10-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L10-L65)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L301-L328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L328)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L2014-L2036](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2014-L2036)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua — L19-L28](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L19-L28)
- [scripts/utilities/attack/power_level.lua — L21-L23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [scripts/utilities/attack/power_level.lua — L63-L94](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L94)
- [scripts/settings/damage/power_level_settings.lua — L7-L29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29)
- [scripts/utilities/attack/damage_profile.lua — L386-L444](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L444)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3331-L3345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3331-L3345)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L2014-L2036](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2014-L2036)

## Example assumptions and limits

- **Trigger**: While Unkillable, weapon hits against living enemies apply Burn. Each Melee hit adds 3 stacks, each Ranged hit 1. This talent can raise that enemy's Burn to at most 12; other sources can raise it higher.
- **Burn duration**: It ticks approximately every 0.5 seconds. Additional Burn resets the 4-second retention period; after expiry, ticks continue while stacks decay one by one. At 12 or more stacks, this talent refreshes timing without adding stacks.
- **Stack example**: From 0 stacks, 4 consecutive Melee hits reach 4 × 3 = 12. Another hit does not raise the count to 15 through this talent.
- **Damage example**: Against a fixed Unarmoured hit location with no other modifiers, one Burn tick at 3 stacks deals 400 × (3 ÷ 31)² × [3 − 2 × (3 ÷ 31)] × 1.5 ≈ 15.77 damage; 12 stacks deal about 200.11. These are individual ticks, not fixed damage per second against every enemy.

- Approximately 167 is the `power_level` used for the Burn tick, not fixed Health damage against every enemy. The profile derives actual results from enemy type and target boost curve.
- The 0.5-second cadence follows the accepted timer derivation; update steps can make actual execution occur after the scheduled time.
- Unkillable checks the player's Buff keyword, so any source granting `unkillable` can enable this effect. The listed Resist Death sub-upgrades and base effect are common sources.
- The accepted Chinese comparison at hash `2ee3f440` records both languages applying Burn through weapon hits while Unkillable, with the same effect direction and target. Stack counts, duration, interval and power scaling are supplementary mechanism details.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_resist_death_fire`, hash `af670dea`, entry 11292: **Fire and Fury**.
- Description key `loc_talent_zealot_resist_death_fire_desc`, hash `2ee3f440`, entry 3054.

Full raw template:

~~~text
While Unkillable your Weapon Attacks apply Burn up to {max_stacks:%s} Maximum Stacks.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `max_stacks` | 12 | `number`; `talent_settings.zealot_resist_death_subnodes.max_burn_stacks` |

The minimal display mapping at `zealot_talents.lua` L3331-L3344 supplies the accepted talent application cap, not the shared Burn Buff's 31-stack cap.

Static reconstruction; not an observed game screen:

~~~text
While Unkillable your Weapon Attacks apply Burn up to 12 Maximum Stacks.
~~~

## English comparison

The English explicitly requires Unkillable and says Weapon Attacks apply Burn up to 12 stacks, agreeing with this talent's accepted application condition and cap. It does not claim 12 is the shared Buff's global maximum. Living-target hits, separate Melee/Ranged additions, any-source keyword gating, timer refresh, gradual decay and nonlinear damage examples supplement the description; no English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_resist_death_fire.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/f88c569e-c89d-4850-b84b-17c5af69faf0). The icon identifies the talent; it is not mechanism evidence.
