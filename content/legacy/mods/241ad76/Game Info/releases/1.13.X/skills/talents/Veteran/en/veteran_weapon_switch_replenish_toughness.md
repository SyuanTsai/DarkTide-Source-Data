# On Your Toes: source evidence

[繁體中文](../veteran_weapon_switch_replenish_toughness.md) | [Player description](README.md#veteran_weapon_switch_replenish_toughness) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_weapon_switch_replenish_toughness)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point Weapons Specialist modifier `veteran_weapon_switch_replenish_toughness`; enables the same-named special rule. [One-point Keystone modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1840-L1862); [Modifier and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2958-L2977).
- Exact English name key `loc_talent_veteran_weapon_switch_replenish_toughness`, hash `4d8f7e13`: **On Your Toes**. Description key `loc_talent_veteran_weapon_switch_replenish_toughness_description`, hash `9a112db1`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- The modifier enables restore_toughness on the Weapons Specialist passive. on_wield_ranged restores only when ranged_stacks>0 and `t > last_ranged_toughness + 3`; on_wield_melee checks melee_stacks>0 and its separate last_melee_toughness timestamp. The two directions have independent timers. [Weapons Specialist recovery flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2912-L2915); [Per-side recovery and stack consumption](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3013-L3045).
- An eligible activation calls Toughness.replenish_percentage(unit, 0.2, false, ...). It requests 20% of maximum Toughness once per activation, rather than multiplying that amount by stored stacks. The relevant stored stacks are still cleared by the weapon switch when recovery is blocked by that side's cooldown. [Per-side recovery and stack consumption](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3013-L3045); [Toughness.replenish_percentage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L24).
- ignore_stat_buffs=false means the percentage recovery remains affected by the recipient's toughness_regen_rate_multiplier. With recovery allowed, maximum M, current C and applicable multiplier r, requested recovery is `0.20 × M × r`; actual recovery is limited by the deficit `M − C`. The examples use `min(0.20 × M × r, M − C)`. [Toughness.replenish_percentage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L24); [Percentage recovery and deficit limit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285).
- The timestamp comparison is strictly greater than the prior timestamp plus 3, not greater-than-or-equal. At the exact threshold it fails; the first qualifying update after it can pass. Exact displayed 3.0-second boundary behavior depends on update timing and was not measured. [Per-side recovery and stack consumption](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3013-L3045).

## Maximum-Toughness recovery examples

Assume at least one stored stack on the relevant side, a matching weapon-switch activation, that side's cooldown check passing and recovery being allowed. Maximum Toughness is an illustrative 100 points. Use only the recovery modifier stated in each row; the amount is per activation, not per stored stack.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Maximum 100, current 70; recovery multiplier 1 | Requested: `100 × 0.20 × 1 = 20 points`; actual: `min(20, 100 − 70) = 20`; new total `70 + 20 = 90/100`. | A qualifying activation restores 20 points with room for the whole amount. |
| Maximum 100, current 90; recovery multiplier 1 | Requested: `20 points`; actual: `min(20, 100 − 90) = 10`; new total `100/100`. | Only the 10 missing points are restored. |
| Maximum 100, current 70; illustrative applicable +25% recovery modifier | Requested: `100 × 0.20 × 1.25 = 25 points`; actual: `min(25, 30) = 25`; new total `95/100`. | The ordinary recovery modifier changes the grant; storing more stacks does not multiply it. |

## Original English template and reconstruction

Full raw template, hash `9a112db1`:

```text
Activating Melee Specialist and Ranged Specialist replenishes {toughness:%s} Toughness. {cooldown:%s}s Cooldown for each.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `toughness` | Literal value 0.2; percentage conversion ×100 and % suffix; no + prefix | `20%` |
| `cooldown` | Literal value 3; number; template supplies s | `3` |

[Modifier and display values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2958-L2977); [Percentage and number formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L425).

Static plain-text reconstruction:

```text
Activating Melee Specialist and Ranged Specialist replenishes 20% Toughness. 3s Cooldown for each.
```

Runtime color markup is excluded; this is not an observed game screen. The 20% amount, activation of either Specialist and separate 3-second cooldowns match the reconstructed English. The maximum-Toughness basis, recovery modifier/deficit limit, stored-stack consumption and strict timestamp boundary are omitted. No explicit English contradiction or supported English erratum is present.

## Limits

The recovery examples use explicit maximum/current values and modifiers with recovery permitted and the cooldown check passing. Exact threshold-frame timing was not measured. The display says 3 seconds, while the accepted static comparison is strictly t greater than last timestamp plus 3; no exact observed 3.0-second UI behavior is claimed.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_weapon_switch_replenish_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/a6e24eb8-063a-45a5-8796-acde81d1f734)

The icon identifies the talent; it is not mechanism evidence.
