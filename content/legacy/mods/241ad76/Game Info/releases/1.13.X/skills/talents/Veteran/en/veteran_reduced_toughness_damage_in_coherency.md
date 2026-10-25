# Close Order Drill: source evidence

[繁體中文](../veteran_reduced_toughness_damage_in_coherency.md) | [Player description](README.md#veteran_reduced_toughness_damage_in_coherency) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_reduced_toughness_damage_in_coherency)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_reduced_toughness_damage_in_coherency`; installed buff `veteran_toughness_damage_reduction_per_ally_in_coherency`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1356-L1386); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1437-L1456).
- Exact English name key `loc_talent_veteran_toughness_damage_reduction_per_ally`, hash `a8e1785b`: **Close Order Drill**. Description key `loc_talent_veteran_toughness_damage_reduction_per_ally_description`, hash `bcb7160f`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The count is `num_units_in_coherency() − 1`, excluding the owner, with at most three teammates counted. For current teammate count `n`, the single multiplier is `lerp(1, 0.67, n/3) = 1 − 0.11n`: 1, 0.89, 0.78 or 0.67 for zero, one, two or three teammates. [Current Coherency count and multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2219-L2241); [Maximum multiplier and teammate cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L220-L223).
- Each teammate adds 11 percentage points to this talent’s own Toughness Damage Reduction, reaching 33%. The effect is recalculated from the current Coherency count; it is not three independent factors of 0.89. [Current Coherency count and multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2219-L2241).
- Shared Toughness settlement combines this multiplier multiplicatively with separate active reduction multipliers. The combined example assumes Iron Will’s 0.50 conditional multiplier is active; its established condition is current Toughness strictly above 75%, with exact threshold-update timing unmeasured. [Toughness damage settlement](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258); [Iron Will condition and multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2679-L2702).

## Toughness damage examples

Assume 100 incoming Toughness damage before the stated reduction multipliers, the listed current Coherency teammate count and no other modifiers except an already active Iron Will in the last row. The combined row assumes its condition has already activated. These are static calculations, not game measurements. [Current Coherency count and multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2219-L2241); [Toughness damage settlement](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258); [Iron Will condition and multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2679-L2702).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| One teammate; Close Order Drill alone | `100 × (1 − 0.11 × 1) = 89 Toughness damage`. | 11% of this 100-damage baseline is prevented. |
| Two teammates; Close Order Drill alone | `100 × (1 − 0.11 × 2) = 78 Toughness damage`. | This talent’s own reduction is 22%. |
| Three teammates; Close Order Drill alone | `100 × (1 − 0.11 × 3) = 67 Toughness damage`. | The maximum is 33% reduction; further teammates add no benefit. |
| Three teammates and Iron Will already active | `100 × 0.67 × 0.50 = 33.5 Toughness damage`. | The combined reduction is 66.5% of the stated baseline; the two reductions are not added. |

## Original English template and reconstruction

Full raw template, hash `bcb7160f`:

```text
Up to {toughness:%s} Toughness Damage Reduction the more Allies in Coherency.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `toughness` | `talent_settings_3.toughness_1.max = 0.67`; custom `round((1 − value) × 100) = 33`, percentage formatter and `+` prefix | `+33%` |

[Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1437-L1456); [Maximum multiplier and teammate cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L220-L223); [Custom display-value manipulation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404). The custom manipulation replaces the default percentage conversion; 33 is not multiplied by 100 again.

Static plain-text reconstruction:

```text
Up to +33% Toughness Damage Reduction the more Allies in Coherency.
```

Runtime color markup is excluded; this is not an observed game screen. The maximum reduction and increasing benefit with more Coherency allies agree. The exact teammate count, recalculation and combination rules supplement the original text. No English erratum is supported.

## Limits

Coherency transitions, frame/network timing, conditional threshold changes and final game UI have not been measured in game. The combined example assumes Iron Will is already active; it does not establish its exact activation frame.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_reduced_toughness_damage_in_coherency.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/139120eb-e9c5-41ea-b87c-bf4737b53f49)

The icon identifies the talent; it is not mechanism evidence.
