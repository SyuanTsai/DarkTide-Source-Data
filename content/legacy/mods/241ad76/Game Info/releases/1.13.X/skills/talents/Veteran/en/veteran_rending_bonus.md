# Rending Strikes: source evidence

[繁體中文](../veteran_rending_bonus.md) | [Player description](README.md#veteran_rending_bonus) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_rending_bonus)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent and installed buff `veteran_rending_bonus`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L384-L408); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2433-L2456).
- Exact English name key `loc_talent_veteran_rending_bonus`, hash `85ef3efb`: **Rending Strikes**. Description key `loc_talent_veteran_rending_bonus_desc`, hash `e703007a`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The installed buff grants `rending_multiplier = 0.10` to the owner’s weapons. Display formatting reads the same buff value. [Installed Rending buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1027-L1033); [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2433-L2456).
- Shared damage calculation includes attacker and target Rending modifiers in armor settlement. Below an armor modifier of 1, Rending first fills the gap to 1; excess uses `overdamage_rending_multiplier = 0.25`. The examples below isolate this talent on Carapace (`super_armor`) with no existing Rending. [Rending armor calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660); [Damage and Rending inputs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L95); [Armor and overflow settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19).
- Unarmoured (`unarmored`) has no `rending_armor_type_multiplier`, so this armor adjustment is zero for it. The later critical/weakspot finesse calculation uses the Rending-adjusted damage and `rending_damage`; a complete attack needs those extra components calculated separately. [Armor and overflow settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19); [Rending armor calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660); [Shared finesse calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782).
- The talent’s internal `name` annotation says “Give 20% rending to all weapons”, but its display field and installed buff give 10%. Preserve the annotation discrepancy without substituting it for the actual English UI description; its origin is unconfirmed. [Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2433-L2456); [Installed Rending buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1027-L1033).

## Armor-stage damage examples

Assume a noncritical hit that does not hit a weakspot, 100 damage units before armor settlement, a Carapace (`super_armor`) target, the stated original armor modifier, no existing Rending, no other modifiers or later multipliers, and no cap binding. These static examples isolate the armor stage; they are not measurements of a particular weapon or target. [Rending armor calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660); [Armor and overflow settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19); [Damage and Rending inputs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L95).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Original armor modifier 0.50 | Before `100 × 0.50 = 50 damage`; after `100 × (0.50 + 0.10) = 60 damage`; relative gain `(60 − 50) ÷ 50 = 20%`. | The same 10% Rending produces a 20% relative armor-stage gain under these assumptions. |
| Original armor modifier 1.00 | Before `100 × 1 = 100 damage`; after `100 × (1 + 0.10 × 0.25) = 102.5 damage`; relative gain `2.5 ÷ 100 = 2.5%`. | Rending above the gap to 1 contributes at one-quarter strength in this isolated example. |

## Original English template and reconstruction

Full raw template, hash `e703007a`:

```text
Gives {rending_multiplier:%s} Rending to all weapons.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `rending_multiplier` | Read `veteran_rending_bonus.stat_buffs.rending_multiplier = 0.10`; percentage formatter and `+` prefix | `+10%` |

[Talent and display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2433-L2456); [Installed Rending buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1027-L1033); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
Gives +10% Rending to all weapons.
```

Runtime color markup is excluded; this is not an observed game screen. The Rending percentage and weapon scope agree with the installed effect. Armor-dependent outcomes and finesse limits supplement the text. The internal 20% annotation is not an English UI claim and supports no player erratum.

## Limits

Actual damage depends on the weapon’s armor profile, target armor, existing Rending, critical/weakspot components, later modifiers and caps. The two examples isolate stated armor-stage assumptions; static translation does not establish an in-game measurement or final UI observation. The reason for the internal 20% annotation remains unconfirmed.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_rending_bonus.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/cc7841b0-9637-4d35-8bca-c2c418798875)

The icon identifies the talent; it is not mechanism evidence.
