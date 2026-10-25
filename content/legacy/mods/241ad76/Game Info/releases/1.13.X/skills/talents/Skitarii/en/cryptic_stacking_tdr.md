# Progressive Plating Matrix: source evidence

[繁體中文](../cryptic_stacking_tdr.md) | [Player description](README.md#cryptic_stacking_tdr) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_stacking_tdr)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_stacking_tdr`; name key `loc_talent_cryptic_stacking_tdr`; description key `loc_talent_cryptic_stacking_tdr_desc`. Node `node_853d22e7-bdc0-495e-ab44-7c5699dcf0f6`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `target_index == 1` triggers the `stepped_stat_buff`. At step `n`, the multiplier is `1 − 0.025n`, rather than `0.975` raised to the power `n`. `refresh_duration_on_stack = true`; no per-stack expiry is configured.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2401-L2426](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2401-L2426)
- [scripts/utilities/attack/damage_taken_calculation.lua — L234-L255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L255)
- [scripts/settings/talent/talent_settings_cryptic.lua — L413-L417](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L413-L417)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2388-L2400](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2388-L2400)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1888-L1911](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1888-L1911)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L553-L583](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L553-L583)

## Example assumptions and limits

- **Stacks**: Hitting the first target of an attack grants **1 stack**, reducing Toughness damage by **2.5% per stack**, up to **6 stacks**. Hitting multiple enemies with the same attack adds only one stack.
- **Duration**: Each trigger restarts the **5-second countdown**. If no further trigger occurs, the effect expires.
- **Example**: Six stacks provide `6 × 2.5% = 15%` reduction, turning 100 points of Toughness damage into 85. With another independent 20% reduction, the result is `100 × 0.85 × 0.80 = 68` points.

- The six-stack example sums this talent's reduction to 15%, giving 85 Toughness damage from an initial 100. An independent 20% reduction then multiplies that result to 68.
- Stacks within this talent add their reduction before the resulting multiplier is applied. Refreshing uses a shared duration; stacks do not expire individually.
- These calculation details supplement the English. Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_stacking_tdr`, hash `3d848475`, entry 4013: **Progressive Plating Matrix**.
- Description key `loc_talent_cryptic_stacking_tdr_desc`, hash `1e30d43e`, entry 1972.

Full raw template:

~~~text
Hits grant {tdr:%s} Toughness Damage Reduction for {duration:%s}s. Stacks {stacks:%s} times. Max one per attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `tdr` | +2.5% | `percentage`, prefix `+`: `abs(talent_settings.cryptic_stacking_tdr.toughness_damage_taken_multiplier)`, verified per-step change `-0.025` |
| `duration` | 5 | `number`: verified `talent_settings.cryptic_stacking_tdr.duration = 5` |
| `stacks` | 6 | `number`: verified `talent_settings.cryptic_stacking_tdr.max_stacks = 6` |

The display mappings in `cryptic_talents.lua` L1896–L1910 use the absolute per-step reduction and the already verified duration and stack cap.

Static reconstruction; not an observed game screen:

~~~text
Hits grant +2.5% Toughness Damage Reduction for 5s. Stacks 6 times. Max one per attack.
~~~

## English comparison

The English hit trigger, 2.5% reduction, 5-second duration, six-stack cap and maximum of one stack per attack agree with the accepted behavior. Selection of the first target, shared-duration refreshing, linear reduction within this talent and multiplication with independent reductions are supplementary details; no explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_stacking_tdr.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/5208032b-aaaf-4801-b84c-6fdbaab1735b). The icon identifies the talent; it is not mechanism evidence.
