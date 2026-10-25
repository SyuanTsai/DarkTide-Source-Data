# Ammo-Cell Augury: source evidence

[繁體中文](../cryptic_ammo_reserve.md) | [Player description](README.md#cryptic_ammo_reserve) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_ammo_reserve)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_ammo_reserve`; name key `loc_talent_cryptic_ammo_reserve`; description key `loc_talent_cryptic_ammo_reserve_desc`. Node `node_d9ef86eb-7750-4ede-8067-2bea7a6a996f`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `ammo_reserve_capacity = 0.25` is an `additive_multiplier`.
- Weapon initialization applies the capacity bonus with `floor`; `clip_size_modifier` is calculated separately.

## Fixed source evidence

- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua — L1326-L1345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1345)
- [scripts/settings/talent/talent_settings_cryptic.lua — L386-L388](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L386-L388)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2162-L2168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2162-L2168)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1737-L1752](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1737-L1752)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1570-L1599](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1570-L1599)

## Example assumptions and limits

- **Effect**: Increase reserve-ammo capacity by 25%. Clip capacity does not increase.
- **Capacity example**: An original reserve cap of 200 rounds becomes `200 × (1 + 25%) = 250` rounds. At an original 203 rounds, the calculation gives 253.75, rounded down to 253 rounds. With another 15% bonus of the same capacity type, `200 × (1 + 25% + 15%) = 280` rounds.

The examples use the original reserve capacity and the stated same-type bonuses. Fractional reserve capacity is rounded down; this stat does not change clip size.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_ammo_reserve`, hash `848fe38c`, entry 8618: **Ammo-Cell Augury**.
- Description key `loc_talent_cryptic_ammo_reserve_desc`, hash `bf4067b1`, entry 12330.

Full raw template:

~~~text
 {ammo:%s} Ammo Reserve.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `ammo` | `0.25` → `+25%` | Percentage with `+` prefix. |

The display mapping is `cryptic_talents.lua` L1745-L1751. The value reuses the verified settings above. The raw template begins with one space, preserved in both quoted blocks.

Static reconstruction; not an observed game screen:

~~~text
 +25% Ammo Reserve.
~~~

## English comparison

The English correctly names Ammo Reserve and +25%. The short stat description makes no promise of a clip-size increase. Capacity interpretation, rounding down and addition with same-type bonuses are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_ammo_reserve.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/d265085f-7abd-4433-adc1-3f0276351436). The icon identifies the talent; it is not mechanism evidence.
