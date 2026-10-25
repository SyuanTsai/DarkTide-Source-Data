# Toughness Boost: source evidence

[繁體中文](../base_toughness_node_buff_medium_2.md) | [Player description](README.md#base_toughness_node_buff_medium_2) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#base_toughness_node_buff_medium_2)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point stat node `base_toughness_node_buff_medium_2`; installs player_toughness_node_buff_medium_2. [One-point stat node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L576-L609); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L206-L229).
- Exact English name key `loc_talent_toughness_boost_medium`, hash `65a72c01`: **Toughness Boost**. Description key `loc_talent_toughness_boost_medium_desc`, hash `329702b6`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- Increase maximum Toughness by 25 points through the toughness stat. The medium_2 template copies medium_1, but its talent_overrides[1] value is 25; the copied outer value 15 is not the active node amount. Buff._calculate_talent_override_data applies the selected tier override, with tier 1 as the default. [Toughness stat and tier overrides](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L366-L395); [Buff._calculate_talent_override_data](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L255).
- The maximum is calculated as `ceil((base + buff_extra) × toughness_bonus) + flat`, where buff_extra includes this node's 25-point bonus, toughness_bonus is the aggregated percentage multiplier, and flat is the separate post-ceiling flat contribution. This node adds its points before the percentage multiplier; it is neither +25% nor a 25-point grant of current Toughness. [Maximum Toughness calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L79-L88).

## Maximum Toughness examples

Use an illustrative base maximum of 100 points, no other buff_extra or post-ceiling flat contribution, and only the percentage modifier stated in each row. These examples calculate capacity rather than current Toughness recovery and are not in-game measurements. [Maximum Toughness calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L79-L88).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Base 100 points; percentage multiplier 1; flat 0 | Before: `ceil(100 × 1) = 100`; after: `ceil((100 + 25) × 1) = 125 points`. | Maximum Toughness rises by 25 points. |
| Base 100 points; existing +20% maximum-Toughness modifier; flat 0 | Before: `ceil(100 × 1.2) = 120`; after: `ceil((100 + 25) × 1.2) = 150 points`. | The node raises this already-modified maximum by 30 points because its +25 is applied before the 1.2 multiplier. |

## Original English template and reconstruction

Full raw template, hash `329702b6`:

```text
{toughness:%s} Toughness.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `toughness` | Tier-aware lookup of player_toughness_node_buff_medium_2.stat_buffs.toughness; tier-1 override 25; number formatting with + prefix, no percentage conversion | `+25` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L206-L229); [Toughness stat and tier overrides](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L366-L395); [Buff._calculate_talent_override_data](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L255); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L405-L425).

Static plain-text reconstruction:

```text
+25 Toughness.
```

Runtime color markup is excluded; this is not an observed game screen. The reconstructed +25 amount matches the accepted tier-1 bonus. The English does not specify maximum rather than current Toughness, modifier order or rounding. Those are omissions, with no explicit English contradiction or supported English erratum.

## Limits

The 100-point base and +20% modifier are explicit example assumptions. The formula describes maximum capacity, not immediate current Toughness recovery. Live changes to current Toughness when activating or removing a node were not measured; no such recovery amount is claimed.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/stat/base_toughness_node_buff_medium_2.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/1ef34fb3-ac4e-47d1-b7c1-0d13f10e3173)

The icon identifies the talent; it is not mechanism evidence.
