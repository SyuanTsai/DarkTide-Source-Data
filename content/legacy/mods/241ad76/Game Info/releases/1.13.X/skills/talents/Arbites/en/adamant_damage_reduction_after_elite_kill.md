# Imposing Force: source evidence

[繁體中文](../adamant_damage_reduction_after_elite_kill.md) | [Player description](README.md#adamant_damage_reduction_after_elite_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_damage_reduction_after_elite_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_damage_reduction_after_elite_kill`; name key `loc_talent_adamant_damage_reduction_after_elite_kill`; description key `loc_talent_adamant_damage_reduction_after_elite_kill_desc`. Node `node_b4efa6cf-bc1d-4616-9518-4b9fc363dcf8`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_hit`, filtered through `on_elite_or_special_kill`, activates `damage_taken_multiplier = 0.75` for 5s. The multiplier combines multiplicatively with other independent damage-taken factors; it is not Toughness-only damage reduction.

## Fixed source evidence

- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L120-L133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L133)
- [scripts/utilities/attack/damage_calculation.lua — L587-L614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L303-L357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua — L206-L209](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L206-L209)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3292-L3312](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3292-L3312)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L862-L884](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L862-L884)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1039-L1066](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1039-L1066)

## Example assumptions and limits

- **Trigger and refresh**: After killing an Elite or Specialist, take 25% less damage for 5s. Another qualifying kill resets the duration; the multiplier does not stack.

- **Damage-reduction example**: For an original 100 incoming damage, this effect alone gives 100 × 0.75 = 75. With another independent 20% damage reduction, the result is 100 × 0.75 × 0.8 = 60.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_damage_reduction_after_elite_kill`, hash `79940084`, entry 7899: **Imposing Force**.
- Description key `loc_talent_adamant_damage_reduction_after_elite_kill_desc`, hash `368927ce`, entry 3541.

Full raw template:

```text
Gain {damage_reduction:%s} Damage Resistance for {duration:%s}s after Elite or Specialist Kill.
```

| Placeholder | Value | Formatting |
|---|---|---|
| damage_reduction | talent_settings.damage_reduction_after_elite_kill.damage_taken_multiplier = 0.75 | Custom round((1 − value) × 100) → 25 instead of default percentage conversion; + prefix and % suffix → +25% |
| duration | talent_settings.damage_reduction_after_elite_kill.duration = 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

```text
Gain +25% Damage Resistance for 5s after Elite or Specialist Kill.
```

## English comparison

The independently read English agrees with the Elite or Specialist kill condition and +25% general Damage Resistance for 5s. Duration refresh and independent multiplication supplement the description. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_damage_reduction_after_elite_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/d856ef6a-9f61-4b4a-b672-e60019dea866). The icon identifies the talent; it is not mechanism evidence.
