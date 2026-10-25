# Longshot: source evidence

[繁體中文](../veteran_increased_damage_based_on_range.md) | [Player description](README.md#veteran_increased_damage_based_on_range) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increased_damage_based_on_range)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_increased_damage_based_on_range`; installs veteran_increase_ranged_far_damage. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1387-L1414); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L831-L865).
- Exact English name key `loc_talent_veteran_increased_damage_based_on_range`, hash `22e59f4f`: **Longshot**. Description key `loc_talent_veteran_increased_damage_based_on_range_new_desc`, hash `187b8f4c`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- ranged_damage_min=0.1 and ranged_damage_max=0.15 feed ranged_damage and ranged_damage_far respectively. The 0.15 is an additional distance-dependent bonus, so this talent alone reaches 0.1 + 0.15 = 0.25 total. [Near and far ranged damage stats](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1368-L1375); [Near bonus and additional far bonus](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L133-L137).
- Let distance be d metres and `q = clamp((d − 12.5) / (30 − 12.5), 0, 1)`. The talent contribution is `b(d) = 0.10 + 0.15 × sqrt(q)`. damage_calculation clamps the distance ratio before taking its square root and interpolating. Thus the bonus is 10% at and below 12.5 metres, reaches 25% at 30 metres, and does not grow further beyond that distance. This contribution adds at the same stage as general damage bonuses; it is not a separate universal final-damage multiplier. [Close and far distance settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25); [Clamped square-root interpolation and additive damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L320); [Near bonus and additional far bonus](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L133-L137).

## Distance and isolated damage examples

Assume a starting damage-stage value of 100, this talent alone, distances stated in metres, no other damage bonuses, and later armor/profile/weakspot/critical processing excluded. These are static substitutions into the accepted distance formula. [Near bonus and additional far bonus](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L133-L137); [Close and far distance settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25); [Clamped square-root interpolation and additive damage stage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L320).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Distance at or below 12.5 metres; isolated starting value 100 | q=0; bonus `0.10 + 0.15 × sqrt(0) = 0.10`; result `100 × 1.10 = 110`. | The close-distance talent bonus is 10%. |
| Distance at or beyond 30 metres; isolated starting value 100 | q=1; bonus `0.10 + 0.15 × sqrt(1) = 0.25`; result `100 × 1.25 = 125`. | The maximum total bonus is 25%, combining the base 10% and additional 15%. |
| Distance 21.25 metres; isolated starting value 100 | `q = (21.25 − 12.5) / (30 − 12.5) = 0.5`; `100 × [1 + 0.10 + 0.15 × sqrt(0.5)] ≈ 120.61`. | The midpoint in distance uses a square-root curve, not linear bonus interpolation. |

## Original English template and reconstruction

Full raw template, hash `187b8f4c`:

```text
You deal {ranged_damage:%s} Ranged Damage to targets within {ranged_close:%s}m and up to {max_ranged_damage:%s} Ranged Damage to targets further away. Maximum bonus at {ranged_far:%s}m.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `ranged_damage` | ranged_damage_min=0.1; percentage formatting with + prefix | `+10%` |
| `ranged_close` | DamageSettings.ranged_close=12.5; number formatting automatically retains one decimal | `12.5` |
| `max_ranged_damage` | ranged_damage_min + ranged_damage_max = 0.1 + 0.15 = 0.25; percentage formatting with + prefix | `+25%` |
| `ranged_far` | DamageSettings.ranged_far=30; number formatting with zero decimals | `30` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L831-L865); [Near bonus and additional far bonus](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L133-L137); [Close and far distance settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25); [Automatic decimal count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L354-L377); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425).

Static plain-text reconstruction:

```text
You deal +10% Ranged Damage to targets within 12.5m and up to +25% Ranged Damage to targets further away. Maximum bonus at 30m.
```

Runtime color markup is excluded; this is not an observed game screen. The +10% close bonus, +25% far total, 12.5-metre close threshold and maximum at 30 metres agree. Square-root interpolation and addition alongside other damage bonuses are not described. The maximum displayed amount is the total 25%, not a further 25% on top of the close bonus. No explicit English contradiction or English erratum is supported.

## Limits

The isolated damage results exclude other bonuses and later processing, so they are not universal final-hit values. Distances and damage have not been measured in game; the formula and examples are static deductions from accepted fixed-source evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increased_damage_based_on_range.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/f7517509-e85f-47fb-b775-234a6aa0950a)

The icon identifies the talent; it is not mechanism evidence.
