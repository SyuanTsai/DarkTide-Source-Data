# Toughness Damage Reduction: source evidence

[繁體中文](../base_toughness_damage_reduction_node_buff_medium_1.md) | [Player description](README.md#base_toughness_damage_reduction_node_buff_medium_1) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#base_toughness_damage_reduction_node_buff_medium_1)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point stat node `base_toughness_damage_reduction_node_buff_medium_1`; installs player_toughness_damage_reduction_node_buff_medium_1. [One-point stat node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L2095-L2122); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L437-L463).
- Exact English name key `loc_talent_toughness_damage_reduction_medium`, hash `4cf5defc`: **Toughness Damage Reduction**. Description key `loc_talent_toughness_damage_reduction_medium_desc`, hash `1272bcc0`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The active tier-1 toughness_damage_taken_modifier is -0.1. Buff._calculate_talent_override_data applies the selected tier override, with tier 1 as the default. [Toughness-damage modifier and tier overrides](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L432-L443); [Buff._calculate_talent_override_data](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L255).
- toughness_damage_taken_modifier is an additive_multiplier stat; it is distinct from the separately multiplied toughness_damage_taken_multiplier. With this node alone, the isolated Toughness-damage factor is 0.9. Same-type additive reductions join this modifier; independent multipliers apply separately. [Distinct additive and multiplicative stat types](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1002-L1003); [Toughness-damage calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258).
- For an isolated incoming Toughness-damage value D with an existing same-type reduction r and independent multiplier m, before is `D × (1 − r) × m` and after is `D × (1 − r − 0.10) × m`, under the example assumptions and without a binding limit. This describes Toughness damage; it does not establish the same percentage of health-damage reduction. [Toughness-damage calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258).

## Toughness-damage reduction examples

Use an illustrative incoming 100 Toughness-damage units before this modifier stage. Enough Toughness remains; all independent multipliers are 1, no limit binds, and the only same-type reductions are those listed. Do not apply these results directly to health damage. These are static examples, not game measurements. [Toughness-damage calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Incoming 100 Toughness-damage units; this node alone | Before: `100`; after: `100 × (1 − 0.10) = 90 Toughness-damage units`. | The node prevents 10 units, a 10% reduction at this isolated stage. |
| Incoming 100 Toughness-damage units; existing same-type 20% reduction | Before: `100 × (1 − 0.20) = 80`; after: `100 × (1 − 0.20 − 0.10) = 70 Toughness-damage units`; relative reduction `(80 − 70) / 80 = 12.5%`. | The same-type reductions add to 30%; the node reduces the already-modified incoming value by 12.5%. Independent multipliers remain separate. |

## Original English template and reconstruction

Full raw template, hash `1272bcc0`:

```text
{toughness:%s} Toughness Damage Reduction.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `toughness` | Tier-aware lookup of toughness_damage_taken_modifier=-0.1; custom outer abs(value)×100 gives 10 instead of the default percentage conversion; + prefix and % suffix | `+10%` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L437-L463); [Toughness-damage modifier and tier overrides](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L432-L443); [Buff._calculate_talent_override_data](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L226-L255); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Custom outer value manipulation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+10% Toughness Damage Reduction.
```

Runtime color markup is excluded; this is not an observed game screen. The reconstructed +10% reduction and Toughness-damage scope match the accepted stat. Same-type addition and independent multiplication are not described. No explicit English contradiction or supported English erratum is present.

## Limits

The 100 incoming Toughness-damage units and existing same-type 20% reduction are example assumptions. Enough Toughness remains, independent factors are 1 and no limit binds. Actual health damage, depleted-Toughness cases and weapon/target outcomes were not measured or inferred from these isolated calculations.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/stat/base_toughness_damage_reduction_node_buff_medium_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/20744626-5cef-4e5c-afef-0474fde5a4b5)

The icon identifies the talent; it is not mechanism evidence.
