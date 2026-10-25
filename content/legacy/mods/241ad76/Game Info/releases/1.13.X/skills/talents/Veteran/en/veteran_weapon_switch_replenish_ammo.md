# Always Prepared: source evidence

[繁體中文](../veteran_weapon_switch_replenish_ammo.md) | [Player description](README.md#veteran_weapon_switch_replenish_ammo) | [Technical index](SOURCE_INDEX.md) | [Original English comparison](LOCALIZATION_COMPARISON.md#veteran_weapon_switch_replenish_ammo)

## Identity and mechanism

- Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. One-point Weapons Specialist modifier `veteran_weapon_switch_replenish_ammo`; enables the same-named special rule. [One-point Keystone modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1863-L1887); [Modifier and display value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2873-L2888).
- Exact English name key `loc_talent_veteran_weapon_switch_replenish_ammo`, hash `5ffffaeb`: **Always Prepared**. Description key `loc_talent_veteran_weapon_switch_replenish_ammo_description`, hash `8e3d6e40`.
- Original English: Steam Build `25606770`, extracted 2026-10-02, resource `content/localization/ui`, resource hash `63564edcb7c3c5ee`, locale `en` (code `0`). UI JSONL SHA-256: `fb54bb69880e08b3a6e1c359bd970ed2416748bf5513d45c4b8a39c545e8c668`.

- Only switching to slot_secondary with ranged_stacks>0 triggers the ammo transfer. The matching Ranged Specialist activation clears those stored stacks afterward; the normal storage cap is 10. [Ranged activation, ammo calculation and stack consumption](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2985-L3024).
- Let M be current missing Clip ammo and n the stored ranged stack count, up to 10. Requested transfer is `ceil(M × 0.33 × (n / 10))`, equivalently the unrounded stage uses 3.3% of the current Clip deficit per stack. The ceiling applies to the calculated total; this is not a percentage of Reserve size or total Clip capacity. [Ranged activation, ammo calculation and stack consumption](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L2985-L3024); [Missing Clip ammo](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L202-L220).
- Ammo.transfer_from_reserve_to_clip moves existing Reserve ammo into the Clip. Actual transfer is limited by the requested amount, available Reserve ammo, missing Clip ammo and Clip capacity. It reduces Reserve by the amount moved and increases Clip by that amount; it does not create free Reserve ammo. [Ammo.transfer_from_reserve_to_clip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L428-L465).
- The English explicitly names the correct Reserve-to-Clip direction. The Chinese direction erratum does not carry over to this English page. [Modifier and display value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2873-L2888); [Ammo.transfer_from_reserve_to_clip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L428-L465).

## Missing-Clip transfer examples

Assume at least one stored Ranged Specialist stack and a qualifying switch to the ranged weapon. The examples use a 30-unit Clip deficit. The first two have enough Reserve ammo for the requested transfer; the third starts with only 3 Reserve units. For this illustrative weapon, one ammo unit is one round. These are static transfer calculations, not gameplay measurements.

| Assumptions | Substitution and result | Player meaning |
|---|---|---|
| Clip missing 30 rounds; 5 stored stacks; sufficient Reserve | `ceil(30 × 0.33 × 5 / 10) = ceil(4.95) = 5 rounds`. | Clip gains 5 rounds and Reserve loses 5; the remaining Clip deficit is 25 rounds. |
| Clip missing 30 rounds; 10 stored stacks; sufficient Reserve | `ceil(30 × 0.33 × 10 / 10) = ceil(9.9) = 10 rounds`. | Clip gains 10 rounds and Reserve loses 10; the remaining deficit is 20 rounds. |
| Clip missing 30 rounds; 10 stored stacks; Reserve only 3 rounds | Requested `10 rounds`; actual `min(10, 30, 3) = 3 rounds`; Reserve changes `3→0`. | Clip gains only 3 rounds, leaving a 27-round deficit. The effect does not create the other 7 requested rounds. |

## Original English template and reconstruction

Full raw template, hash `8e3d6e40`:

```text
Activating Ranged Specialist replenishes up to {ammo:%s} of your missing ammo in your Clip from your Reserve, rounded up, for each stack.
```

| Parameter | Definition and formatting | Reconstructed value |
|---|---|---|
| `ammo` | Literal value 0.033; percentage conversion ×100 gives 3.3 with one decimal place and % suffix; no + prefix | `3.3%` |

[Modifier and display value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L2873-L2888); [Percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L379-L404); [Decimal precision](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L354-L377).

Static plain-text reconstruction:

```text
Activating Ranged Specialist replenishes up to 3.3% of your missing ammo in your Clip from your Reserve, rounded up, for each stack.
```

Runtime color markup is excluded; this is not an observed game screen. The ranged activation, per-stack unrounded fraction, current Clip deficit, Reserve-to-Clip direction and ceiling agree with the reconstructed English. The exact stored-stack requirement/consumption and Reserve/Clip bounds are omitted. No explicit English contradiction or supported English erratum is present; the Chinese direction erratum is not inherited.

## Limits

The examples assume a qualifying ranged activation and state the available Reserve and Clip deficit. One ammo unit equals one round only for the illustrative weapon used here. Per-weapon ammo costs, active reload-state interactions and gameplay outcomes were not measured. The calculation rounds the total requested transfer up before applying available-Reserve and Clip limits.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_weapon_switch_replenish_ammo.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234) | [Issue attachment](https://github.com/user-attachments/assets/842c2a40-8bb4-45fa-a1e2-672fedf80d78)

The icon identifies the talent; it is not mechanism evidence.
