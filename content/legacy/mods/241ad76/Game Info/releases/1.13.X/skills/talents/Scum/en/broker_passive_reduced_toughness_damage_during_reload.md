# Calling for a Time Out: source evidence

[繁體中文](../broker_passive_reduced_toughness_damage_during_reload.md) | [Player description](README.md#broker_passive_reduced_toughness_damage_during_reload) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_reduced_toughness_damage_during_reload)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_reduced_toughness_damage_during_reload`; name key `loc_talent_broker_passive_reduced_toughness_damage_during_reload`; description key `loc_talent_broker_passive_reduced_toughness_damage_during_reload_desc`. Node `node_2c613026-5cb8-44d3-aff8-29114f2f10b6`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_reload_start` sets `is_reloading`. When `ConditionalFunctions.is_reloading` becomes false, the timestamp is set to `t + 4`. `toughness_damage_taken_modifier = -0.25`.

## Fixed source evidence

- [scripts/utilities/attack/damage_taken_calculation.lua — L228-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L228-L258)
- [scripts/settings/talent/talent_settings_broker.lua — L276-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L276-L279)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1217-L1261](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1217-L1261)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1180-L1198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1180-L1198)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1029-L1058](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1029-L1058)

## Example assumptions and limits

- **Duration**: Takes effect when reloading starts and lasts another 4s after leaving the reload state. Reloading again maintains the same reduction rather than adding another reduction.

- **Damage-reduction example**: An incoming 100 Toughness Damage becomes 100 × 0.75 = 75 with this effect alone. With another 20% Toughness Damage reduction at the same stage, it becomes 100 × (1 − 20% − 25%) = 55.

- **Scope**: Only reduces Damage taken by Toughness; it does not directly reduce Health Damage by 25% as well.

The original Chinese wording has awkward word order, but it conveys the same Toughness reduction during and after reloading as the English; no Chinese erratum was recorded. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_reduced_toughness_damage_during_reload`, hash `dcbae74b`, entry 14321: **Calling for a Time Out**.
- Description key `loc_talent_broker_passive_reduced_toughness_damage_during_reload_desc`, hash `b4e891ca`, entry 11668.

Full raw template:

~~~text
{toughness_damage_taken_modifier:%s} Toughness Damage taken while reloading, and for {duration:%s}s afterwards.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toughness_damage_taken_modifier:%s}` | −0.25 | `percentage`, no added prefix → `-25%` |
| `{duration:%s}` | 4 | `number` → `4` |

The existing display map at `broker_talents.lua` L1180-L1198 uses the verified modifier and duration. The reused percentage formatter preserves the negative sign, and the number formatter displays 4.

Static reconstruction; not an observed game screen:

~~~text
-25% Toughness Damage taken while reloading, and for 4s afterwards.
~~~

## English comparison

The English correctly specifies Toughness Damage, the 25% reduction and four seconds after reloading. The exact state-transition timing, non-stacking behavior and additive-stage example supplement it.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_reduced_toughness_damage_during_reload.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/d28213f3-85a5-4de7-a380-f3799f671cc8). The icon identifies the talent; it is not mechanism evidence.
