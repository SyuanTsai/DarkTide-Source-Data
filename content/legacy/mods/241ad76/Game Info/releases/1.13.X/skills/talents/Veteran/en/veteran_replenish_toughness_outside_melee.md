# Catch a Breath: source evidence

[繁體中文](../veteran_replenish_toughness_outside_melee.md) | [Player description](README.md#veteran_replenish_toughness_outside_melee) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_replenish_toughness_outside_melee)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_replenish_toughness_outside_melee`; installs `veteran_toughness_regen_out_of_melee`. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L633-L663); [Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2379-L2402).
- Exact English name key `loc_talent_veteran_replenish_toughness_outside_melee`, hash `f5a9fbb6`: **Catch a Breath**. Description key `loc_talent_veteran_replenish_toughness_outside_melee_hit_desc`, hash `8db6388a`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The buff records the last received melee-hit time. Server regeneration starts only when `t > last_hit_t + 5`, requesting `0.05 × dt` through Toughness.replenish_percentage. A new melee hit resets that waiting period. Enemy proximity, the player’s own melee attacks and received ranged hits do not by themselves reset this recorded melee-hit timer. [Melee-hit timer and server regeneration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1675-L1715).
- Recovery uses maximum Toughness, not missing Toughness: with no other recovery modifiers, the requested amount is `T_max × 0.05 × dt`. Actual recovery is capped at the missing amount. [Recovery settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L127-L132); [Maximum-Toughness conversion and cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285).
- The settings also contain time=0.1 and range=in_melee_range, but the accepted buff update and condition do not consume those fields. They do not establish an additional range condition for this talent; their possible use elsewhere has not been determined. [Recovery settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L127-L132); [Melee-hit timer and server regeneration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1675-L1715).

## Toughness recovery examples

Assume the five-second waiting period has been exceeded, no further received melee hit, maximum Toughness 100 and no other recovery modifiers. The two-second example begins after activation, not at the last melee hit. Exact update timing is unmeasured. [Melee-hit timer and server regeneration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1675-L1715); [Maximum-Toughness conversion and cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Maximum Toughness 100; enough missing Toughness | `100 × 0.05 = 5 Toughness per second`; over two active seconds, `5 × 2 = 10 Toughness` requested. | The rate is based on the maximum pool; actual recovery can be lower if the pool fills. |
| Current Toughness 98/100 | Missing amount `100 − 98 = 2 Toughness`; actual recovery is at most 2. | A nominal 5-per-second request cannot raise Toughness above the maximum. |

## Original English template and reconstruction

Full raw template, hash `8db6388a`:

```text
When you haven't been the target of a Melee Attack for {duration:%s}s, you start to replenish {toughness:%s} Toughness per second.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `duration` | Read `talent_settings_2.toughness_3.cooldown = 5`; number formatter | `5` |
| `toughness` | Read `talent_settings_2.toughness_3.toughness = 0.05`; percentage formatter, without a sign prefix | `5%` |

[Talent and display fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2379-L2402); [Recovery settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L127-L132); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425).

Static plain-text reconstruction:

```text
When you haven't been the target of a Melee Attack for 5s, you start to replenish 5% Toughness per second.
```

Runtime color markup is excluded; this is not an observed game screen. The reconstructed five-second interval and 5%-per-second rate agree with the accepted values. The English phrase "target of a Melee Attack" does not explicitly resolve attempted or missed attacks versus the recorded received-hit event. Exact event matching, the strict threshold, maximum-pool basis and recovery cap are therefore documented as additional details; no explicit English contradiction is established by the wording alone.

## Limits

Exact in-game update timing, attempted/missed-attack cases and final game UI have not been measured. The purpose of unused range/time settings outside this buff remains undetermined. Recovery examples use the stated maximum pool, no extra modifiers and an already active regeneration period.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_replenish_toughness_outside_melee.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/19c86987-5e48-4eeb-9385-33697b9d99b0)

The icon identifies the talent; it is not mechanism evidence.
