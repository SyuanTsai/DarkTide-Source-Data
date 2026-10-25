# Iron Will: source evidence

[繁體中文](../veteran_tdr_on_high_toughness.md) | [Player description](README.md#veteran_tdr_on_high_toughness) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_tdr_on_high_toughness)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent and installed buff `veteran_tdr_on_high_toughness`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1605-L1633); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2245-L2272).
- Exact English name key `loc_talent_veteran_block_break_gives_tdr`, hash `0f2286e9`: **Iron Will**. Description key `loc_talent_veteran_tdr_on_high_toughness_desc`, hash `9702d945`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The conditional effect tests `current_toughness_percent() > 0.75`. This is current Toughness divided by maximum Toughness, with a strict comparison: exactly 75% fails. Above the threshold, `toughness_damage_taken_multiplier = 0.50` halves the affected Toughness damage. [Strict condition and Toughness multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2679-L2702).
- Returning above the threshold permits the condition to activate again. Conditional-buff state follows its update timing; the exact frame of crossing or reactivation is not an observed guarantee. [Strict condition and Toughness multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2679-L2702).
- This active multiplier combines multiplicatively with separate Toughness-damage reduction multipliers. The examples isolate that settlement and do not make a health-damage claim. [Toughness damage settlement](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258).
- The internal talent `name` annotation says 25%, but the installed multiplier is 0.50 and its visible value reconstructs as +50%. The internal name key mentions block breaking; neither internal wording defines the current trigger or an English UI erratum. [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2245-L2272); [Strict condition and Toughness multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2679-L2702).

## Threshold and Toughness damage examples

Assume the condition is evaluated at the listed current/maximum Toughness and that its conditional effect is already active in the damage rows. Incoming Toughness damage is 40 before these reductions, with no other modifiers except the stated independent 10% reduction in the final row. These static examples do not measure condition-update frames. [Strict condition and Toughness multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2679-L2702); [Toughness damage settlement](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Maximum Toughness 200; evaluate current value at the threshold | Threshold `200 × 0.75 = 150 Toughness`; current `151/200 > 0.75` qualifies, while `150/200 = 0.75` does not. | The condition requires more than 150 of this 200 maximum, not at least 150. |
| Iron Will already active; no other reduction | `40 × 0.50 = 20 Toughness damage`. | Half of the stated 40-damage baseline is prevented. |
| Iron Will and independent 10% reduction already active | `40 × 0.50 × 0.90 = 18 Toughness damage`; reduction `(40 − 18)/40 = 55%`. | The separate reductions multiply, giving 55% combined reduction in this example. |

## Original English template and reconstruction

Full raw template, hash `9702d945`:

```text
{toughness_damage_reduction:%s} Reduced Toughness Damage if above {toughness_percent:%s} Toughness.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `toughness_damage_reduction` | Read `veteran_tdr_on_high_toughness.conditional_stat_buffs.toughness_damage_taken_multiplier = 0.50`; percentage formatter and `+` prefix | `+50%` |
| `toughness_percent` | Literal `0.75`; percentage formatter without a prefix | `75%` |

[Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2245-L2272); [Strict condition and Toughness multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2679-L2702); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+50% Reduced Toughness Damage if above 75% Toughness.
```

Runtime color markup is excluded; this is not an observed game screen. The 50% reduction and strict above-75% condition agree with the established effect. Current/maximum basis, reactivation timing and combination rules supplement the text. The internal 25% annotation and name-key wording create no English UI erratum.

## Limits

Threshold crossings, conditional update frames, precise activation/reactivation timing, game damage outcomes and final UI have not been measured in game. The damage examples assume the conditional multiplier is already active; they do not guarantee an instantaneous threshold transition.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_tdr_on_high_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/d56c3a6f-0fed-4e37-bb08-aa3c87f5624d)

The icon identifies the talent; it is not mechanism evidence.
