# Superiority Complex: source evidence

[繁體中文](../veteran_increase_damage_vs_elites.md) | [Player description](README.md#veteran_increase_damage_vs_elites) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increase_damage_vs_elites)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_increase_damage_vs_elites`; installed buff `veteran_increase_elite_damage`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1551-L1579); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L893-L916).
- Exact English name key `loc_talent_veteran_increase_damage_vs_elites`, hash `2b206efd`: **Superiority Complex**. Description key `loc_talent_veteran_increase_damage_vs_elites_desc`, hash `db5e86d9`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The installed buff has `damage_vs_elites = 0.15` and effective-stack limit 1. It specifies no hit/kill trigger, distance condition, duration or cooldown. The display reads the same stat; the installed buff name differs from the talent ID. [Installed Elite-damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L736-L743); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L893-L916).
- The talent system installs the passive on the owner while equipped and removes it when the talent is removed. This is an owner stat bonus, not target-applied vulnerability, and repeated hits do not build additional effective stacks. [Passive installation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/talent/player_unit_talent_extension.lua#L164-L175); [Passive removal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/talent/player_unit_talent_extension.lua#L221-L231); [Effective-stack limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410).
- Shared damage calculation applies the bonus when `attacked_breed_or_nil.tags.elite` is true. A Specialist tag by itself is insufficient; a missing target breed/classification also supplies no Elite bonus. The check adds no melee, ranged, critical or weakspot restriction. This establishes attacks using that shared path and attacker stats; other special damage sources were not individually verified. [Elite and Specialist tag checks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L334-L355).
- The stat is an additive multiplier: aggregation adds 0.15, and the damage flow adds the stat minus 1 to its additive total. An isolated total of 1 becomes 1.15; an existing 1.25 becomes 1.40. Later multipliers and target damage-taken properties still participate, so final damage is not universally multiplied by an extra 1.15. [Additive stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L780-L786); [Stat aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727); [Damage-additive baseline](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L245); [Adding the Elite-damage stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L334-L337); [Later modifiers and damage settlement](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L575-L614).

## Elite-target additive damage examples

Assume an eligible Elite target, an ordinary melee or ranged attack using the shared damage path with the owner’s stats, 100 damage before the stated additive stage, unchanged attack/armor/critical/weakspot conditions and no other or later modifiers. The second row includes only the stated existing +25% same-stage bonus; the final row changes only target eligibility. [Elite and Specialist tag checks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L334-L355); [Damage-additive baseline](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L245); [Adding the Elite-damage stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L334-L337); [Later modifiers and damage settlement](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L575-L614).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Elite target; no existing same-stage bonus | Before `100 × 1 = 100 damage`; after `100 × (1 + 0.15) = 115 damage`; relative gain `15/100 = 15%`. | An eligible melee or ranged attack gains 15 damage in this isolated baseline. |
| Elite target; existing +25% same-stage bonus | Before `100 × 1.25 = 125 damage`; after `100 × (1 + 0.25 + 0.15) = 140 damage`; relative gain `(140 − 125)/125 = 12%`. | Adding 15 percentage points at this stage produces a 12% relative gain over the existing 125 damage. |
| Non-Elite target, including Specialist-only or missing Elite classification | No contribution from this talent: `100 × 1 = 100 damage` before and after. | A Specialist label alone does not activate the Elite damage bonus. |

## Original English template and reconstruction

Full raw template, hash `db5e86d9`:

```text
{damage:%s} Base Damage (Elite Enemies).
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `damage` | Read `veteran_increase_elite_damage.stat_buffs.damage_vs_elites = 0.15`; percentage formatter and `+` prefix | `+15%` |

[Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L893-L916); [Installed Elite-damage buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L736-L743); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+15% Base Damage (Elite Enemies).
```

Runtime color markup is excluded; this is not an observed game screen. The percentage and Elite target condition agree with the established effect. Attack-path scope, additive calculation, single-stack owner lifecycle and special-source limits supplement the text. No English erratum is supported.

## Limits

Final UI and damage outcomes have not been measured in game, and not every special damage source was checked for the same attacker-stat path. The examples isolate their stated additive-stage assumptions; actual outcomes also depend on armor, critical/weakspot components and later modifiers.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increase_damage_vs_elites.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6) | [Issue attachment](https://github.com/user-attachments/assets/915cdbef-5b88-4d3b-a4f1-e29e8a8f0f07)

The icon identifies the talent; it is not mechanism evidence.
