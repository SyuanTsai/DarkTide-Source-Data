# Soulguilt Scan: source evidence

[繁體中文](../adamant_stacking_weakspot_strength.md) | [Player description](README.md#adamant_stacking_weakspot_strength) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_stacking_weakspot_strength)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_stacking_weakspot_strength`; name key `loc_talent_adamant_stacking_weakspot_strength`; description key `loc_talent_adamant_stacking_weakspot_strength_duration_desc`. Node `node_e8d152e8-495b-4da1-86e8-4c78bd1dd63b`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_weakspot_hit` adds a 10s child buff with `max_stacks = 8` and refresh. `weakspot_power_level_modifier = 0.02` is added per effective stack. On a weakspot, `PowerLevel` includes it in `power_level_buff_modifier` and applies the modifier after curve scaling; this is not a `weakspot_damage` or additional finesse-damage field.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3577-L3592](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3577-L3592)
- [scripts/utilities/attack/power_level.lua — L25-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/extension_systems/buff/buff_extension_base.lua — L433-L468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L433-L468)
- [scripts/settings/talent/talent_settings_adamant.lua — L386-L390](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L386-L390)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3566-L3576](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3566-L3576)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2719-L2741](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2719-L2741)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1436-L1461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1436-L1461)

## Example assumptions and limits

- **Stacks and refresh**: A melee or ranged Weakspot Hit grants 1 stack of 2% Weakspot Strength, up to 8 stacks. Another Weakspot Hit resets the 10s duration of all stacks.

- **Power example**: Isolating this power stage, an original 500 with the full-stack 16% bonus becomes 500 × (1 + 8 × 2%) = 580. With an existing same-stage 20% power bonus, 600 becomes 680.

- **Damage distinction**: This increases the power used for subsequent calculations on a Weakspot Hit. It does not merely multiply additional weakspot damage by 1.16. Final damage still depends on the weapon's damage curve, armour, hit location and other bonuses.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_stacking_weakspot_strength`, hash `ad4f22e4`, entry 11154: **Soulguilt Scan**.
- Description key `loc_talent_adamant_stacking_weakspot_strength_duration_desc`, hash `62e55f07`, entry 6422.

Full raw template:

```text
Weakspot Hits grant {strength:%s} Weakspot Strength. {max_stacks:%s} Max Stacks. Lasts {duration:%s}s.
```

| Placeholder | Value | Formatting |
|---|---|---|
| strength | talent_settings.stacking_weakspot_strength.strength = 0.02 | Percentage; no prefix configured → 2% |
| max_stacks | talent_settings.stacking_weakspot_strength.max_stacks = 8 | Number → 8 |
| duration | talent_settings.stacking_weakspot_strength.duration = 10 | Number → 10; template adds s |

Static reconstruction; not an observed game screen:

```text
Weakspot Hits grant 2% Weakspot Strength. 8 Max Stacks. Lasts 10s.
```

## English comparison

The independently read English agrees with Weakspot Hits, the 2% per-stack strength, eight-stack cap and 10s duration. Refresh, Power Level calculation, additional-damage distinction and worked examples are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_stacking_weakspot_strength.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/59f1504d-8b25-40c7-a582-b5de1b3278cf). The icon identifies the talent; it is not mechanism evidence.
