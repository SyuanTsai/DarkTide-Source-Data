# Desperado: source evidence

[繁體中文](../veteran_increased_melee_crit_chance_and_melee_finesse.md) | [Player description](README.md#veteran_increased_melee_crit_chance_and_melee_finesse) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increased_melee_crit_chance_and_melee_finesse)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_increased_melee_crit_chance_and_melee_finesse`; installed buff has the same identifier. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L154-L184); [Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1925-L1966).
- Exact English name key `loc_talent_veteran_increased_melee_crit_chance_and_melee_finesse`, hash `cd3136fe`: **Desperado**. Description key `loc_talent_veteran_increased_melee_crit_chance_and_melee_finesse_desc`, hash `0ffe42c2`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The buff adds `melee_critical_strike_chance = 0.10`, increasing melee critical hit chance by 10 percentage points. This is separate from its damage bonus. [Melee critical chance and finesse buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1012-L1019).
- It also adds `melee_finesse_modifier_bonus = 0.25` to the multiplier for the extra damage of melee critical or weakspot hits. The bonus acts on that extra component, rather than the entire hit. [Melee critical chance and finesse buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1012-L1019); [Shared finesse calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782).
- A hit that is both critical and a weakspot hit first obtains its combined finesse component; this talent contributes to the common multiplier once. Do not apply the 25% bonus twice. The resulting whole-hit increase depends on weapon attack data, target and other modifiers. [Shared finesse calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782).

## Critical chance and extra-damage examples

The chance example assumes an existing melee critical hit chance of 10% and no other changes. The two damage examples assume a non-critical melee weakspot hit, a base component B = 100 damage, the stated unmodified extra component F, and no other bonuses or later modifiers. These examples compare single-hit weakspot damage, not average DPS. [Melee critical chance and finesse buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1012-L1019); [Shared finesse calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Melee critical chance starts at 10% | `10% + 10 percentage points = 20%`. | A 10-percentage-point increase; not a 10% relative increase. |
| Non-critical melee weakspot hit; B = 100 damage, F = 40 damage | `100 + 40 = 140` → `100 + 40 × 1.25 = 150 damage`; `(150 − 140) / 140 ≈ 7.14%`. | The extra component rises 25%; the whole hit rises about 7.14%. |
| Same damage assumptions, but F = 100 damage | `100 + 100 = 200` → `100 + 100 × 1.25 = 225 damage`; `(225 − 200) / 200 = 12.5%`. | A larger extra component produces a larger whole-hit increase. |

## Original English template and reconstruction

Full raw template, hash `0ffe42c2`:

```text
{crit_chance%s} Melee Critical Hit Chance & {finesse%s} Melee Finesse Bonus.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `crit_chance` | Read `melee_critical_strike_chance = 0.10`; custom `abs(value) × 100`, percentage format and `+` prefix | `+10%` |
| `finesse` | Read `melee_finesse_modifier_bonus = 0.25`; custom `abs(value) × 100`, percentage format and `+` prefix | `+25%` |

[Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1925-L1966); [Melee critical chance and finesse buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1012-L1019); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Custom display conversion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651).

Static plain-text reconstruction:

```text
+10% Melee Critical Hit Chance & +25% Melee Finesse Bonus.
```

Runtime color markup is excluded; this is not an observed game screen. Both displayed values and their melee scope agree with the accepted mechanism. The extra-component formula and once-only treatment for a combined critical weakspot hit supplement the brief Finesse wording. No English contradiction is supported.

## Limits

Actual critical frequency, weapon-specific finesse components, target-dependent final damage, average DPS and final game UI have not been measured. Damage examples assume the specified non-critical weakspot hit and no other modifiers.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increased_melee_crit_chance_and_melee_finesse.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/7be19cb4-a1cb-4211-b9f2-d754f3c95b6c)

The icon identifies the talent; it is not mechanism evidence.
