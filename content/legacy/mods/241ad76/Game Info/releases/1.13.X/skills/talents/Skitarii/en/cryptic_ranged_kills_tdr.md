# Threat Detection Imperative: source evidence

[繁體中文](../cryptic_ranged_kills_tdr.md) | [Player description](README.md#cryptic_ranged_kills_tdr) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_ranged_kills_tdr)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_ranged_kills_tdr`; name key `loc_talent_cryptic_ranged_kills_tdr`; description key `loc_talent_cryptic_ranged_kills_tdr_desc`. Node `node_8bd02750-e89f-4b2c-8de2-ba4ccba29e99`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

The stepped multiplier table at stack count `n` is `1 − 0.04 × n`, rather than `0.96^n`. Both `refresh_duration_on_stack` and `refresh_duration_on_remove_stack` are `true`, so gaining a stack and sequentially removing a stack reset the timer.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2180-L2206](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2180-L2206)
- [scripts/utilities/attack/damage_taken_calculation.lua — L234-L255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L255)
- [scripts/settings/talent/talent_settings_cryptic.lua — L389-L393](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L389-L393)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2169-L2179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2169-L2179)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1753-L1776](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1753-L1776)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2600-L2630](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2600-L2630)

## Example assumptions and limits

- **Stacking**: A ranged kill grants **1 stack**, each providing **4% Toughness Damage Reduction**, up to **5 stacks**. Another trigger resets the **8-second** timer.
- **Decay**: Without further kills, lose one stack every **8 seconds**. Starting at **5 stacks**, after **8, 16, 24, 32 and 40 seconds**, the remaining counts are **4, 3, 2, 1 and 0**.
- **Reduction example**: **5 stacks** give **20%** total reduction. Incoming Toughness damage **100** becomes `100 × (1 − 5 × 4%) = 80`. With a separate **15%** reduction, `80 × 0.85 = 68` damage remains.

Stack reductions add within this talent. Its resulting multiplier multiplies independent damage-reduction effects. The decay timeline assumes no further ranged kills.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_ranged_kills_tdr`, hash `9998676d`, entry 9907: **Threat Detection Imperative**.
- Description key `loc_talent_cryptic_ranged_kills_tdr_desc`, hash `3a7d18c1`, entry 3791.

Full raw template:

~~~text
Ranged Kills reduce Toughness Damage Taken by {tdr:%s} for {duration:%s}s. Stacks {stacks:%s} times. Stacks decay one at a time.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{tdr:%s}` | `0.04` → `+4%` | Percentage; `+` prefix |
| `{duration:%s}` | `8` | Number; template adds `s` |
| `{stacks:%s}` | `5` | Number |

The existing display mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L1761-L1775) uses `toughness_damage_taken_multiplier_step`, `duration`, and `max_stacks`.

Static reconstruction; not an observed game screen:

~~~text
Ranged Kills reduce Toughness Damage Taken by +4% for 8s. Stacks 5 times. Stacks decay one at a time.
~~~

## English comparison

The English correctly describes the ranged-kill trigger, 4% reduction, eight-second duration, five-stack cap and sequential decay. Refreshing on stack gains and removals, the full decay timeline, addition within this talent and multiplication with independent effects are supplementary details. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_ranged_kills_tdr.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030) | [Existing attachment](https://github.com/user-attachments/assets/a2e228da-729a-4b03-b07a-72bfaadf5dc3). The icon identifies the talent; it is not mechanism evidence.
