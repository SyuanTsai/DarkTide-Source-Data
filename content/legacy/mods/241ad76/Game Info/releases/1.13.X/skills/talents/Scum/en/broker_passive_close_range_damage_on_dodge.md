# Quick and Deadly: source evidence

[繁體中文](../broker_passive_close_range_damage_on_dodge.md) | [Player description](README.md#broker_passive_close_range_damage_on_dodge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_close_range_damage_on_dodge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_close_range_damage_on_dodge`; name key `loc_talent_broker_passive_close_range_damage_on_dodge`; description key `loc_talent_broker_passive_close_range_damage_on_dodge_desc`. Node `node_a8bc4def-415e-4b1b-9b1d-6f2783c5323d`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_successful_dodge` activates `damage_near = 0.15` for `active_duration = 3`, with no `cooldown` configured. A successful `ProcBuff` trigger updates `active_start_time`, resetting the duration rather than stacking the amount.
- The Damage calculation does not restrict this effect to Ranged attacks. Based on distance, it interpolates between `damage_near` and `damage_far` using `sqrt(clamp((d − 12.5) / 17.5))`, then adds the result to `damage_stat_buffs`. Melee distances are usually at the near end; this must not be described as Ranged-only.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L284-L305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L305)
- [scripts/settings/damage/damage_settings.lua — L18-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L173-L185](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L185)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L328-L345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L328-L345)
- [scripts/settings/talent/talent_settings_broker.lua — L322-L325](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L322-L325)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1568-L1581](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1568-L1581)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1463-L1482](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1463-L1482)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L11-L35](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L11-L35)

## Example assumptions and limits

- **Trigger and duration**: after a Successful Dodge, Damage within 12.5 metres increases by 15% for 3 seconds. Retriggering resets the duration without stacking the amount.
- **Distance example**: the bonus falls off beyond 12.5 metres and reaches zero at 30 metres. At 16.875 metres, the interpolation factor is √((16.875 − 12.5) ÷ 17.5) = 0.5, leaving 15% × (1 − 0.5) = 7.5%; base Damage of 100 becomes 107.5.
- **Close-range example**: with this effect alone, base Damage of 100 becomes 115. With an existing 25% Damage bonus at the same stage, the result is 100 × (1 + 25% + 15%) = 140.

The distance and close-range examples retain the verified assumptions: use the stated distance and isolate this effect, except where the existing 25% bonus is explicitly included. Missing distance-falloff details in the game description are supplements. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_close_range_damage_on_dodge`, hash `d3130281`, entry 13638: **Quick and Deadly**.
- Description key `loc_talent_broker_passive_close_range_damage_on_dodge_desc`, hash `0410a6ec`, entry 255.

Full raw template:

~~~text
{damage_near:%s} Close Range Damage for {duration:%s}s after a Successful Dodge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{damage_near:%s}` | `talent_settings.broker_passive_close_range_damage_on_dodge.damage_near = 0.15` → `+15%` | `percentage`; prefix `+` |
| `{duration:%s}` | `talent_settings.broker_passive_close_range_damage_on_dodge.active_duration = 3` → `3` | `number` |

The existing display mapping at `broker_talents.lua` L1467-L1477 reads `damage_near` and `active_duration` directly from the talent settings. The verified values are reused.

Static reconstruction; not an observed game screen:

~~~text
+15% Close Range Damage for 3s after a Successful Dodge.
~~~

## English comparison

The English's Successful Dodge trigger, +15% Close Range Damage, and 3-second duration agree with the accepted evidence. It makes no Ranged-only restriction. The exact distance falloff, additive Damage stage, and duration refresh without stacking are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_close_range_damage_on_dodge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/b19ca7bc-4348-455c-ae43-c3cf7a8b0852). The icon identifies the talent; it is not mechanism evidence.
