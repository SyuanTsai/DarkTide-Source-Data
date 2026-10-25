# Confirmed Kill: source evidence

[繁體中文](../veteran_elite_kills_replenish_toughness.md) | [Player description](README.md#veteran_elite_kills_replenish_toughness) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_elite_kills_replenish_toughness)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_elite_kills_replenish_toughness`; installs veteran_toughness_on_elite_kill. The name export’s [Writer] suffix is metadata, excluded from the displayed name. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1282-L1309); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1480-L1503).
- Exact English name key `loc_talent_veteran_toughness_on_elite_kill`, hash `2ddbfe9b`: **Confirmed Kill**. Description key `loc_talent_veteran_toughness_on_elite_kill_desc`, hash `b0b81b76`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- on_kill checks the killed enemy’s elite/special classification. A qualifying kill immediately replenishes 0.1 of maximum Toughness and adds an independent recovery effect. [Elite/Specialist kill and independent recovery effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1376-L1410); [Immediate recovery, per-second rate and duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L116-L120).
- Each effect replenishes maximum Toughness × 0.02 × dt for 10 seconds. The effect has no max_stacks or refresh-on-stack setting; separate instances recover independently and can overlap. A later kill is not merely a refresh of the first instance. Recovery cannot exceed maximum Toughness. [Elite/Specialist kill and independent recovery effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1376-L1410); [Immediate recovery, per-second rate and duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L116-L120); [Buff instance handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L481).

## Immediate and overlapping recovery examples

Assume maximum Toughness stays at 100, sufficient missing Toughness throughout the stated recovery periods, no other recovery modifiers or sources, and full effect durations. For overlap, assume two recovery instances are simultaneously active; each retains its own 10-second lifetime. These ideal static totals exclude game-update boundary differences. [Elite/Specialist kill and independent recovery effects](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L1376-L1410); [Immediate recovery, per-second rate and duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L116-L120); [Buff instance handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L439-L481).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| One qualifying kill; maximum Toughness 100; enough missing Toughness | Immediate `100 × 0.1 = 10`; over time `100 × 0.02 × 10 = 20`; ideal total `10 + 20 = 30 Toughness`. | The extra 20% is spread over 10 seconds at 2% of maximum per second, rather than granted at once. |
| Two independent recovery instances overlap; maximum Toughness 100 | While both are active, `100 × 0.02 × 2 = 4 Toughness/s`; after one expires, the remaining instance gives `100 × 0.02 = 2 Toughness/s`. | Each instance expires 10 seconds after its own start. Actual recovery is capped at missing Toughness. |

## Original English template and reconstruction

Full raw template, hash `b0b81b76`:

```text
Replenish {toughness:%s} Toughness on Elite or Specialist Enemy Kill, and a further {toughness_over_time:%s} Toughness over {duration:%s}s.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `toughness` | talent_settings_2.toughness_1.instant_toughness=0.1; percentage formatting without sign prefix | `10%` |
| `toughness_over_time` | toughness_1.toughness × toughness_1.duration = 0.02 × 10 = 0.2; percentage formatting without sign prefix | `20%` |
| `duration` | talent_settings_2.toughness_1.duration=10; number formatting | `10` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1480-L1503); [Immediate recovery, per-second rate and duration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L116-L120); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425).

Static plain-text reconstruction:

```text
Replenish 10% Toughness on Elite or Specialist Enemy Kill, and a further 20% Toughness over 10s.
```

Runtime color markup is excluded; this is not an observed game screen. The Elite/Specialist kill trigger, immediate 10% recovery, further 20% over time and 10-second duration agree. The constant 2% per-second rate, separate overlapping instances and maximum-Toughness basis/cap are additional details. The English does not say a later kill only refreshes the previous effect. No explicit English contradiction or English erratum is supported.

## Limits

The 30-Toughness total assumes enough missing Toughness for the full immediate and over-time recovery, constant maximum Toughness, and no additional modifiers. Exact update boundaries and in-game recovery outcomes have not been measured. Multiple instances have independent lifetimes; reaching maximum Toughness limits actual recovery.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_elite_kills_replenish_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/706a5b5b-5f7b-43bc-bbd0-7debf024671b)

The icon identifies the talent; it is not mechanism evidence.
