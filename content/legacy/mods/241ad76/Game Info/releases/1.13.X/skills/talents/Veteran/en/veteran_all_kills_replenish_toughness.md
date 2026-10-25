# Out for Blood: source evidence

[繁體中文](../veteran_all_kills_replenish_toughness.md) | [Player description](README.md#veteran_all_kills_replenish_toughness) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_all_kills_replenish_toughness)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point passive talent `veteran_all_kills_replenish_toughness`; installed buff `veteran_all_kills_replenish_bonus_toughness`. The accepted tier override selects tier 1. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L185-L211); [Talent and tiered display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1457-L1479).
- Exact English name key `loc_talent_veteran_all_kills_replenish_toughness`, hash `e1ec88bf`: **Out for Blood**. Description key `loc_talent_veteran_all_kills_replenish_toughness_description`, hash `a8f7b6af`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The one-point talent selects tier 1, whose Toughness restoration value is `0.05`. Its kill event requests an additional 5% of maximum Toughness through `Toughness.replenish_percentage`. [One-point talent node](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L185-L211); [Tier-one restoration value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L227-L229); [Kill-triggered Toughness restoration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2198-L2218).
- Both melee and ranged kills can trigger this additional restoration. It is a separate on-kill restoration, rather than a 5% multiplier on another recovery amount. [Kill-triggered Toughness restoration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2198-L2218).
- The shared Toughness extension caps the actual restoration at the missing amount. For maximum Toughness M and current Toughness C, the isolated example is `min(0.05 × M, M − C)`. This percentage uses maximum Toughness, rather than the current or missing amount. [Shared restoration cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285).

## Maximum-Toughness restoration examples

Assume maximum Toughness of 100, an eligible kill event and no other restoration bonuses or changes. In the first example at least 5 Toughness is missing; in the second, current Toughness is 98. Only this talent’s contribution is shown. [Tier-one restoration value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L227-L229); [Kill-triggered Toughness restoration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2198-L2218); [Shared restoration cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285).

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Maximum 100; at least 5 Toughness missing | `100 × 0.05 = 5 Toughness` requested and restored. | The percentage is based on maximum Toughness. |
| Current 98 / maximum 100 | `min(5, 100 − 98) = 2 Toughness` restored; current becomes 100. | Only the missing 2 Toughness is actually restored. |

## Original English template and reconstruction

Full raw template, hash `a8f7b6af`:

```text
Your Kills Replenish an additional {toughness%s} Toughness.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `toughness` | Read tier 1 of `veteran_all_kills_replenish_bonus_toughness.toughness_percentage = 0.05`; percentage formatting without a sign prefix | `5%` |

[Talent and tiered display field](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1457-L1479); [Tier-one restoration value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L227-L229); [Kill-triggered Toughness restoration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2198-L2218); [Buff and tier value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L467-L499); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404).

Static plain-text reconstruction:

```text
Your Kills Replenish an additional 5% Toughness.
```

Runtime color markup is excluded; this is not an observed game screen. The 5% restoration value and additional on-kill effect agree with the accepted mechanism. The maximum-Toughness basis and missing-amount cap supplement the description. No English contradiction is supported. Both exported records carry a [Writer] metadata suffix, which is excluded from the plain-text reconstruction.

## Limits

Individual special kill-event cases, final restoration under additional modifiers and final game UI have not been measured. The examples isolate this talent’s contribution and the shared cap.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/default/veteran_all_kills_replenish_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922922455) | [Issue attachment](https://github.com/user-attachments/assets/d6402640-110e-4d25-b1b3-780a49b1c4e1)

The icon identifies the talent; it is not mechanism evidence.
