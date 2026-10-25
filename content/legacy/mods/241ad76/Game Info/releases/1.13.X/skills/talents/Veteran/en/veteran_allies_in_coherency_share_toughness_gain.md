# Born Leader: source evidence

[繁體中文](../veteran_allies_in_coherency_share_toughness_gain.md) | [Player description](README.md#veteran_allies_in_coherency_share_toughness_gain) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_allies_in_coherency_share_toughness_gain)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_allies_in_coherency_share_toughness_gain`; installs veteran_share_toughness_gained. [One-point node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L941-L970); [Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2341-L2361).
- Exact English name key `loc_talent_veteran_allies_share_toughness`, hash `8f81679c`: **Born Leader**. Description key `loc_talent_veteran_allies_share_toughness_coherency_increase_description`, hash `61c0a8f2`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The passive adds coherency_radius_modifier=0.5 to an additive multiplier with baseline 1, giving a talent-only radius factor of 1.5. Its sharing uses coherency membership rather than a separate talent-specific distance. [Share and radius settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L266-L269); [Coherency sharing and recursion guard](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2330-L2377); [Radius additive stat category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L728-L728); [Radius stat field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1058); [Coherency radius and members](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L145-L161).
- On on_toughness_replenished, the proc reads params.amount, multiplies by 0.2 and calls replenish_flat for each other member of in_coherence_units. It does not share back to the owner. If reason=shared, it returns immediately, preventing recursive sharing. [Coherency sharing and recursion guard](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2330-L2377).
- Event amount is the wanted/requested amount, while recovered_amount is a separate field. Thus a request for 20 with only 2 missing Toughness restores 2 to the owner but still requests `20 × 0.2 = 4` for each eligible ally. Each recipient applies their own recovery modifiers and missing-Toughness cap. [Requested amount versus recovered amount](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L477-L490); [Percentage recovery and cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285); [Flat recovery and recipient modifiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L296-L322); [Coherency sharing and recursion guard](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2330-L2377).

## Coherency radius and shared recovery examples

For radius, assume an illustrative starting radius of 8 metres and no other radius modifiers. For sharing, assume a qualifying non-shared recovery event requesting 20 Toughness, an owner missing 2 and another ally in Coherency with enough missing Toughness. The last row adds only that recipient’s stated 25% recovery modifier. The radius example is hypothetical, not a fixed default for every loadout. [Coherency sharing and recursion guard](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2330-L2377); [Requested amount versus recovered amount](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L477-L490); [Flat recovery and recipient modifiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L296-L322); [Coherency radius and members](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L145-L161).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Assumed radius 8 metres; talent only | `8 × (1 + 0.5) = 12 metres`. | A 50% radius increase acts on distance; 8 metres is this example’s assumed starting value. |
| Owner requested recovery 20, missing 2; ally has no extra recovery modifier | Owner recovery `min(20, 2) = 2 Toughness`; each eligible ally receives a base request `20 × 0.2 = 4 Toughness`. | Sharing uses the requested 20, not the owner’s actual 2; recipients are capped at their own missing amount. |
| Same ally base request 4; recipient has +25% recovery and enough missing Toughness | `4 × 1.25 = 5 Toughness`. | The recipient’s recovery modifier applies, with their own Toughness cap. Shared recovery cannot be shared again. |

## Original English template and reconstruction

Full raw template, hash `61c0a8f2`:

```text
Allies in Coherency Replenish {toughness:%s} of any Toughness that you Replenish. {radius:%s} Coherency radius.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `toughness` | Read talent_settings_3.coop_3.percent=0.2; percentage formatter, without a sign prefix | `20%` |
| `radius` | Read talent_settings_3.coop_3.radius=0.5; percentage formatter with + prefix | `+50%` |

[Talent and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2341-L2361); [Share and radius settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L266-L269); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
Allies in Coherency Replenish 20% of any Toughness that you Replenish. +50% Coherency radius.
```

Runtime color markup is excluded; this is not an observed game screen. The 20% sharing fraction, +50% radius and allies-in-Coherency scope agree with the accepted behavior. The phrase of any Toughness that you Replenish does not distinguish requested from actually recovered Toughness; its intended amount basis is Cannot confirm from the wording alone. Recipient modifiers/caps and the shared-recovery recursion guard are not described. No explicit English contradiction or English erratum is supported.

## Limits

The fixed-source requested-amount basis is known, while the English wording does not resolve requested versus actually recovered Toughness. Individual game recovery/Coherency outcomes and final game UI have not been measured. Recipient modifiers and caps apply; the radius example does not establish a universal metre value.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_allies_in_coherency_share_toughness_gain.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/1a08688e-e370-4eac-a27e-fd48da3b3965)

The icon identifies the talent; it is not mechanism evidence.
