# Opening Salvo: source evidence

[繁體中文](../veteran_bonus_crit_chance_on_ammo.md) | [Player description](README.md#veteran_bonus_crit_chance_on_ammo) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_bonus_crit_chance_on_ammo)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_bonus_crit_chance_on_ammo`; installs the same-named conditional buff. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L664-L690); [Talent and custom display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1588-L1627).
- Exact English name key `loc_talent_veteran_bonus_crit_chance_on_ammo`, hash `f15fde11`: **Opening Salvo**. Description key `loc_talent_veteran_bonus_crit_chance_on_ammo_desc`, hash `e58119bd`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The condition requires the wielded slot to be slot_secondary and `current_ammo_in_clips / max_ammo_in_clips >= 0.8`. It uses clip ammunition, not reserve ammunition. While eligible, ranged_critical_strike_chance receives an additive 0.10, meaning 10 percentage points. [Wielded-slot and clip-fraction condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L561-L593); [Ranged critical chance stat category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L940-L940).
- The English ammo value is the complementary displayed fraction: `round((1 − 0.8) × 100) = 20%`. This is a display conversion of the 80%-remaining threshold; the recorded condition is not a count of a fixed number of shots since reloading. The internal talent name says First 10% of Ammo, but that metadata is not the English UI description or the actual threshold. [Talent and custom display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1588-L1627); [Wielded-slot and clip-fraction condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L561-L593).
- For an ordinary positive 30-round clip, at least `30 × 0.8 = 24 rounds` are required. The check is inclusive at 24; 23 fails it. This static state example does not establish when ammunition consumption and the critical roll are ordered during a shot. [Wielded-slot and clip-fraction condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L561-L593).

## Clip threshold and critical chance examples

Assume a wielded secondary ranged weapon, an ordinary positive 30-round clip, no other critical-chance changes and an initial ranged critical chance of 10%. Compare the recorded ammunition state at the condition check, not a guessed shot count. [Wielded-slot and clip-fraction condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L561-L593); [Ranged critical chance stat category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L940-L940).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| 30-round maximum clip; wielded secondary weapon | Threshold `30 × 0.8 = 24 rounds`; `24 / 30 = 0.8` qualifies, while `23 / 30 ≈ 0.7667` does not. | Reserve ammunition does not change this clip-fraction threshold. |
| Base ranged critical chance 10%; condition active | `10% + 10 percentage points = 20% ranged critical chance`. | This is an additive chance bonus, not a 10% relative increase, guaranteed critical hits or a fixed damage gain. |

## Original English template and reconstruction

Full raw template, hash `e58119bd`:

```text
The first {ammo:%s} Ammo after a Reload has {crit_chance:%s} Ranged Critical Hit Chance.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `ammo` | Read ammunition_percentage = 0.8; custom manipulation `round((1 − value) × 100)`; no sign prefix | `20%` |
| `crit_chance` | Read conditional ranged_critical_strike_chance = 0.10; custom manipulation `abs(value) × 100`, with + prefix | `+10%` |

[Talent and custom display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1588-L1627); [Wielded-slot and clip-fraction condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L561-L593); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Custom value manipulation and percentage interpolation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651).

Static plain-text reconstruction:

```text
The first 20% Ammo after a Reload has +10% Ranged Critical Hit Chance.
```

Runtime color markup is excluded; this is not an observed game screen. The reconstructed 20% ammunition portion and +10% ranged critical chance are compatible with the recorded 80%-remaining clip condition and additive chance stat. The wording does not explicitly require a reload event as a separate activation gate. Wielded-slot, reserve-ammo, inclusive-boundary and shot-ordering details are not stated. The internal First 10% metadata does not support an English erratum.

## Limits

Individual game shot/critical outcomes, ammunition-consumption versus critical-roll ordering, unusual clip or reload cases and final game UI have not been measured. The threshold example compares an existing clip state; no fixed count of boosted shots or resulting damage gain is claimed.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_bonus_crit_chance_on_ammo.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/4193f147-bd40-49f8-92d4-a2b83fa1ad5b)

The icon identifies the talent; it is not mechanism evidence.
