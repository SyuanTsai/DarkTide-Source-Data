# Melee Damage Boost: source evidence

[繁體中文](../base_melee_damage_node_buff_high_2.md) | [Player description](README.md#base_melee_damage_node_buff_high_2) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#base_melee_damage_node_buff_high_2)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point stat node `base_melee_damage_node_buff_high_2`; installs player_melee_damage_node_buff_high_2. The exact UI keys use medium despite the high_2 node identifier. [One-point stat node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L2067-L2094); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L1181-L1204).
- Exact English name key `loc_talent_melee_damage_boost_medium`, hash `cb9e7b48`: **Melee Damage Boost**. Description key `loc_talent_melee_damage_boost_medium_desc`, hash `7b5da013`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The high_2 template copies high_1; its active tier-1 melee_damage value is 0.15. Buff._calculate_talent_override_data applies the selected tier override, defaulting to tier 1. [Melee-damage stat and tier overrides](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L997-L1026); [Buff._calculate_talent_override_data](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L255).
- The damage calculation adds melee_damage to damage_stat_buffs only when is_melee_attack is true. At this shared additive stage, the talent contributes +0.15 alongside existing applicable bonuses. It does not add the same bonus to a ranged attack. [Melee contribution to damage_stat_buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L301).
- For an isolated stage input D and an existing applicable additive bonus b, before is `D × (1 + b)` and after is `D × (1 + b + 0.15)`. The relative increase over the already-modified value is `0.15 / (1 + b)` when that value is positive. Hold later modifiers and limits fixed; these examples do not establish measured final damage for every weapon or target. [Melee contribution to damage_stat_buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L301).

## Melee-damage examples

Use an illustrative 100 damage-unit input at the shared damage-stat stage. The hit is a melee attack; other applicable bonuses are only those stated below, other factors are held fixed at 1, and no limit or cap binds. These are static calculations rather than weapon or in-game damage measurements. [Melee contribution to damage_stat_buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L301).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Melee input 100 damage units; no existing bonus | Before: `100 × 1 = 100`; after: `100 × 1.15 = 115 damage units`. | The stage gains 15 damage units, or 15%. |
| Melee input 100 damage units; existing applicable +25% at the same stage | Before: `100 × 1.25 = 125`; after: `100 × (1 + 0.25 + 0.15) = 140 damage units`; relative gain `(140 − 125) / 125 = 12%`. | The bonuses add to +40%; the node raises the already-modified value by 12%, not a further multiplicative 15%. |

## Original English template and reconstruction

Full raw template, hash `7b5da013`:

```text
{melee_damage:%s} Melee Damage.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `melee_damage` | Tier-aware lookup of player_melee_damage_node_buff_high_2.stat_buffs.melee_damage; tier-1 value 0.15; percentage conversion ×100, + prefix and % suffix | `+15%` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L1181-L1204); [Melee-damage stat and tier overrides](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L997-L1026); [Buff._calculate_talent_override_data](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L255); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+15% Melee Damage.
```

Runtime color markup is excluded; this is not an observed game screen. The reconstructed +15% amount and melee scope match the accepted stat and attack condition. The shared additive stage and effect of existing bonuses are omitted. No explicit English contradiction or supported English erratum is present.

## Limits

The 100 damage-unit input and existing +25% bonus are example assumptions. The calculations isolate the shared damage-stat stage with other factors fixed and no limit binding; actual final damage depends on weapon, attack, target and other modifiers and was not measured here.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/stat/base_melee_damage_node_buff_high_2.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/b0fb41b1-81da-4263-8d21-101a3af0cbdb)

The icon identifies the talent; it is not mechanism evidence.
