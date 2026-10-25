# Ammo Belt: source evidence

[繁體中文](../adamant_ammo_belt.md) | [Player description](README.md#adamant_ammo_belt) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_ammo_belt)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_ammo_belt`; name key `loc_talent_adamant_ammo_belt`; description key `loc_talent_adamant_ammo_belt_desc`. Node `node_8cd80a54-2e4c-435c-9cdd-2ff7e4715505`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`ammo_reserve_capacity = 0.25` is an additive capacity modifier. When applied to the weapon, Reserve capacity uses `math.floor(baseReserve × capacity_modifier)` and is limited by the network capacity cap. `clip_size_modifier` is handled separately.

## Fixed source evidence

- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua — L1326-L1343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1343)
- [scripts/settings/talent/talent_settings_adamant.lua — L176-L178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L176-L178)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2371-L2377](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2371-L2377)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1196-L1211](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1196-L1211)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L727-L753](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L727-L753)

## Example assumptions and limits

- **Capacity example**: If the weapon originally carries 400 rounds in Reserve, capacity becomes 400 × (1 + 25%) = 500. For an original 101 rounds, 101 × 1.25 = 126.25 is rounded down to an integer capacity of 126.

- **Scope**: Increase maximum Reserve ammunition; Clip capacity is unchanged.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_ammo_belt`, hash `3d362bb3`, entry 3992: **Ammo Belt**.
- Description key `loc_talent_adamant_ammo_belt_desc`, hash `76199c1c`, entry 7671.

Full raw template:

```text
{ammo:%s} Ammo Capacity.
```

| Placeholder | Value | Formatting |
|---|---|---|
| ammo | talent_settings.ammo_belt.ammo_reserve_capacity = 0.25 | Percentage, prefix + → +25% |

Static reconstruction; not an observed game screen:

```text
+25% Ammo Capacity.
```

## English comparison

The independently read English agrees with a +25% capacity bonus. Reserve-only scope, separate Clip handling, additive calculation, floor rounding and the network cap supplement the generic Ammo Capacity wording. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_ammo_belt.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/90c9bff4-baf3-4b53-b160-16945870dd88). The icon identifies the talent; it is not mechanism evidence.
