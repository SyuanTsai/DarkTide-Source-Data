# Toughness Damage Reduction: source evidence

[繁體中文](../base_toughness_damage_reduction_node_buff_medium_1.md) | [Player description](README.md#base_toughness_damage_reduction_node_buff_medium_1) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#base_toughness_damage_reduction_node_buff_medium_1)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `base_toughness_damage_reduction_node_buff_medium_1`; name key `loc_talent_toughness_damage_reduction_medium`; description key `loc_talent_toughness_damage_reduction_medium_desc`. Node `node_6b1ed144-097b-4dd0-9fab-c56e5722ee5f`; category Stat node; one point.

## Source-confirmed behavior and static derivation

This node costs one point and uses the tier-1 `toughness_damage_taken_modifier = −0.1`. Calculation adds the modifier to other same-stage adjustments, then multiplies by `toughness_damage_taken_multiplier`.

## Fixed source evidence

- [scripts/settings/buff/player_buff_templates.lua — L432-L460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L432-L460)
- [scripts/utilities/attack/damage_taken_calculation.lua — L234-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua — L437-L463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L437-L463)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L665-L697](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L665-L697)

## Example assumptions and limits

- **Damage-reduction example**: Isolating the Toughness damage-reduction stage, an original 100 points of Toughness damage becomes 100 × (1 − 10%) = 90. With an existing same-stage 20% reduction, it becomes 100 × (1 − 20% − 10%) = 70.

- **Scope**: This changes Toughness damage only. Other independent damage-reduction multipliers are then multiplied separately.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_toughness_damage_reduction_medium`, hash `4cf5defc`, entry 5002: **Toughness Damage Reduction**.
- Description key `loc_talent_toughness_damage_reduction_medium_desc`, hash `1272bcc0`, entry 1194.

Full raw template:

```text
{toughness:%s} Toughness Damage Reduction.
```

| Placeholder | Value | Formatting |
|---|---|---|
| toughness | Tier-1 toughness_damage_taken_modifier = −0.1 | Custom outer abs(value) × 100 → 10 instead of default percentage conversion; + prefix and % suffix → +10% |

[Accepted shared display evidence](../../Veteran/en/base_toughness_damage_reduction_node_buff_medium_1.md#original-english-template-and-reconstruction) is reused for the tier-aware lookup and formatting; no new source read was needed.

Static reconstruction; not an observed game screen:

```text
+10% Toughness Damage Reduction.
```

## English comparison

The independently read English agrees with +10% Toughness Damage Reduction for this tier-1 node. Same-stage addition and independent multiplication supplement the description. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/stat/base_toughness_damage_reduction_node_buff_medium_1.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/af78e688-7708-4d00-88f0-913478235d41). The icon identifies the talent; it is not mechanism evidence.
