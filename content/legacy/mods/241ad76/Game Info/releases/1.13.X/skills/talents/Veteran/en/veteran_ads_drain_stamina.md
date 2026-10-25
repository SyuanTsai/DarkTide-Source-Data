# Deadshot: source evidence

[繁體中文](../veteran_ads_drain_stamina.md) | [Player description](README.md#veteran_ads_drain_stamina) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_ads_drain_stamina)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_ads_drain_stamina`; installs veteran_ads_stamina_boost. The description export’s [Writer] suffix is metadata, excluded from raw description text. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1443-L1469); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L248-L278).
- Exact English name key `loc_talent_ranger_ads_drains_stamina_boost`, hash `7bf3fc74`: **Deadshot**. Description key `loc_talent_veteran_ads_drains_stamina_boost_desc`, hash `81e6a4bd`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- _is_in_weapon_alternate_fire_with_stamina checks weapon slot, alternate_fire and current_fraction > 0. While active, critical chance receives +0.25, spread_modifier=-0.19, recoil_modifier=-0.12 and sway_modifier=0.4. Thus Sway is multiplied by 0.4, a 60% reduction; the separate recoil reduction is 12%. The positive-Stamina condition stops the bonuses when Stamina is exhausted, with a separate immediate sway application on depletion. [Conditional bonuses, continuous drain and shooting drain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1411-L1487); [Weapon alternate-fire and positive-Stamina condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2281-L2310); [Critical chance, handling and Stamina settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L173-L180).
- Continuous alternate-fire drain is 0.33 Stamina points per second. Stamina.drain subtracts actual points, rather than 33% of maximum Stamina. on_shoot checks alternate_fire and applies 0.1 points per shooting event; it is not a separate charge for every shotgun pellet. [Conditional bonuses, continuous drain and shooting drain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1411-L1487); [Critical chance, handling and Stamina settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L173-L180); [Absolute Stamina-point drain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L14-L42).

## Stamina, critical chance and Sway examples

Assume eligible alternate-fire use for 5 seconds, 10 on_shoot events, enough Stamina to remain active, no regeneration or other Stamina costs, and no cost modifiers. For critical chance, assume an initial chance of 10% and no other bonuses. For Sway, assume a normalized starting magnitude 1 and this modifier alone. [Conditional bonuses, continuous drain and shooting drain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1411-L1487); [Weapon alternate-fire and positive-Stamina condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2281-L2310); [Critical chance, handling and Stamina settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L173-L180); [Absolute Stamina-point drain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L14-L42).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| 5 seconds of alternate fire and 10 shooting events; no other costs or regeneration | `0.33 × 5 + 0.1 × 10 = 2.65 Stamina points`. | The costs are absolute points; shooting cost is per event, not per pellet. |
| Initial critical chance 10%; eligible alternate fire with positive Stamina | `10% + 25 percentage points = 35%`. | The additive bonus is 25 percentage points, rather than 25% of the initial chance. |
| Starting normalized Sway magnitude 1; talent modifier only | `1 × 0.4 = 0.4`, a `1 − 0.4 = 60%` reduction. | Sway reduction is separate from the 12% recoil and 19% spread reductions. |

## Original English template and reconstruction

Full raw template, hash `81e6a4bd`:

```text
{crit_chance:%s} Critical Chance & {sway_reduction:%s} Sway Reduction while using your Ranged Weapon's alternate fire, but lose {stamina:%s} Stamina per second and an additional {stamina_per_shot:%s} per shot.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `crit_chance` | critical_strike_chance=0.25; percentage formatting with + prefix | `+25%` |
| `sway_reduction` | 1 − sway_modifier = 1 − 0.4 = 0.6; percentage formatting with + prefix | `+60%` |
| `stamina` | stamina_per_second=0.33; number formatting automatically uses two decimals | `0.33` |
| `stamina_per_shot` | shot_stamina=0.1; number formatting with num_decimals=1 | `0.1` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L248-L278); [Critical chance, handling and Stamina settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L173-L180); [Automatic decimal count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L354-L377); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425).

Static plain-text reconstruction:

```text
+25% Critical Chance & +60% Sway Reduction while using your Ranged Weapon's alternate fire, but lose 0.33 Stamina per second and an additional 0.1 per shot.
```

Runtime color markup is excluded; this is not an observed game screen. The alternate-fire condition, +25% displayed critical-chance bonus, 60% Sway reduction and absolute 0.33/0.1 Stamina costs agree. The positive-Stamina gate/depletion handling, extra spread/recoil reductions and shooting-event versus pellet distinction are not described. The Chinese Sway/Recoil translation defect does not occur in this English text. No explicit English contradiction or English erratum is supported.

## Limits

The Stamina example assumes sufficient starting Stamina, no regeneration, no other costs or modifiers, and the stated shooting-event count. Exact depleted-state handling and game outcomes have not been measured. Critical chance is an additive percentage-point bonus; handling effects are separate attributes.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_ads_drain_stamina.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/e65e3909-4dac-413f-827d-f5db9138e5e2)

The icon identifies the talent; it is not mechanism evidence.
