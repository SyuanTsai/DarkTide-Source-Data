# Keep Their Heads Down!: source evidence

[繁體中文](../veteran_increase_suppression.md) | [Player description](README.md#veteran_increase_suppression) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_increase_suppression)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_increase_suppression`; installs veteran_increase_suppression. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L2016-L2039); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L866-L892).
- Exact English name key `loc_talent_veteran_increase_suppression`, hash `ed2d7c87`: **Keep Their Heads Down!**. Description key `loc_talent_veteran_increase_suppression_desc`, hash `dcdb4dab`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The passive contributes suppression_dealt=0.75. The Suppression utility multiplies suppression_value by the aggregated suppression-dealt stat; with this talent alone, the isolated factor is 1.75. This changes suppression rather than adding a health-damage bonus. [Suppression-dealt bonus](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L720-L727); [Outgoing suppression calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/suppression.lua#L20-L48).
- Enemy suppression thresholds, immunity and resulting behavior are determined separately by breed/AI settings. The outgoing value increase does not guarantee every shot interrupts every enemy or forces it to stop firing. The reused dossier does not establish a universal enemy reaction. [Outgoing suppression calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/suppression.lua#L20-L48).

## Outgoing suppression example

Assume an illustrative outgoing suppression value of 20, this talent alone and no other suppression modifiers. Compute only that outgoing-value stage; do not assume any particular enemy reaction or damage increase. The base value 20 is hypothetical, not a fixed value for every attack. [Suppression-dealt bonus](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L720-L727); [Outgoing suppression calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/suppression.lua#L20-L48).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Illustrative base suppression value 20; talent bonus only | `20 × (1 + 0.75) = 35 suppression units`. | The value increases by 15 units, or 75%. Enemy reactions still depend on their thresholds/immunity; this is not +75% health damage. |

## Original English template and reconstruction

Full raw template, hash `dcdb4dab`:

```text
{suppression:%s} Ranged Attack Suppression.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `suppression` | Lookup veteran_increase_suppression.stat_buffs.suppression_dealt=0.75; custom outer abs(value)×100 gives 75 instead of the default percentage conversion; + prefix and % suffix | `+75%` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L866-L892); [Suppression-dealt bonus](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L720-L727); [Buff-value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Custom outer value manipulation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L613-L651); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
+75% Ranged Attack Suppression.
```

Runtime color markup is excluded; this is not an observed game screen. The +75% amount and suppression attribute agree with the accepted outgoing calculation. The English does not promise +75% damage or a universal enemy interruption. Enemy thresholds, immunity and resulting behavior are not described. No explicit English contradiction or English erratum is supported.

## Limits

The hypothetical 20→35 calculation isolates outgoing suppression with this talent alone. Exact enemy thresholds, immunity and reactions were not measured or exhaustively checked here. No universal stop-firing outcome follows from the increased value.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_increase_suppression.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/ae882322-f266-4e2c-8168-09f85a5c9285)

The icon identifies the talent; it is not mechanism evidence.
