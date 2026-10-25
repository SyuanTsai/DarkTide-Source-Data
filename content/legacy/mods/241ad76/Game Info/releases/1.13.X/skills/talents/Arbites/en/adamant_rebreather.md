# Rebreather: source evidence

[繁體中文](../adamant_rebreather.md) | [Player description](README.md#adamant_rebreather) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_rebreather)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_rebreather`; name key `loc_talent_adamant_rebreather`; description key `loc_talent_adamant_rebreather_desc`. Node `node_39b2491a-29f2-428c-9dc5-14d41204a76d`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`corruption_taken_multiplier = 0.8` applies to `permanent_damage`. `damage_taken_from_toxic_gas_multiplier = 0.25` applies only to `damage_profile.toxic_gas`; it does not reduce every damage-over-time effect by 75%.

## Fixed source evidence

- [scripts/utilities/attack/damage_taken_calculation.lua — L363-L376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L363-L376)
- [scripts/utilities/attack/damage_calculation.lua — L601-L614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L601-L614)
- [scripts/settings/talent/talent_settings_adamant.lua — L179-L182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L179-L182)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2378-L2388](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2378-L2388)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1212-L1238](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1212-L1238)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L754-L779](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L754-L779)

## Example assumptions and limits

- **Corruption example**: Isolating Corruption Resistance, an original gain of 20 Corruption points becomes 20 × 0.8 = 16.

- **Toxic-gas example**: Isolating Toxic Gas damage reduction, gas that originally deals 100 damage instead deals 100 × 0.25 = 25. These effects apply separately to the Corruption and damage stages.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_rebreather`, hash `bad9764c`, entry 12050: **Rebreather**.
- Description key `loc_talent_adamant_rebreather_desc`, hash `0e416297`, entry 934.

Full raw template:

```text
{corruption:%s} Corruption Resistance and {toxic_reduction:%s} Reduced Damage Taken from Toxic Gas.
```

| Placeholder | Value | Formatting |
|---|---|---|
| corruption | talent_settings.rebreather.corruption_taken_multiplier = 0.8 | Custom round((1 − value) × 100) → 20 instead of default percentage conversion; + prefix and % suffix → +20% |
| toxic_reduction | talent_settings.rebreather.damage_taken_from_toxic_gas_multiplier = 0.25 | Custom (1 − value) × 100 → 75 instead of default percentage conversion; + prefix and % suffix → +75% |

Static reconstruction; not an observed game screen:

```text
+20% Corruption Resistance and +75% Reduced Damage Taken from Toxic Gas.
```

## English comparison

The independently read English agrees with +20% Corruption Resistance and +75% reduced Toxic Gas damage. The implementation uses separate Corruption and damage stages; the examples supplement the description. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_rebreather.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/4232eef3-1499-4f4c-b2e3-d1416db2ec8e). The icon identifies the talent; it is not mechanism evidence.
