# Justified Measures: source evidence

[繁體中文](../adamant_stacking_damage.md) | [Player description](README.md#adamant_stacking_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_stacking_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_stacking_damage`; name key `loc_talent_adamant_stacking_damage`; description key `loc_talent_adamant_stacking_damage_desc`. Node `node_51aaefd1-2772-4d9e-b458-80c449db677e`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- `on_hit` skips `target_number > 1`. The child has `damage = 0.02`, `max_stacks = 5`, `duration = 5` and `refresh_duration_on_stack`.
- A stack is added after the hit; it does not retroactively alter the triggering hit. Another trigger refreshes the duration of all stacks.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3593-L3622](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3593-L3622)
- [scripts/utilities/attack/damage_calculation.lua — L236-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/extension_systems/buff/buff_extension_base.lua — L433-L468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L433-L468)
- [scripts/settings/talent/talent_settings_adamant.lua — L391-L395](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L391-L395)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3593-L3606](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3593-L3606)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2536-L2559](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2536-L2559)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2247-L2279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2247-L2279)

## Example assumptions and limits

- **Stacks and refresh**: After an attack hits its first target, gain one stack of 2% Damage, up to 5 stacks. Another trigger refreshes the 5s duration of all stacks. Later targets in the same attack do not add more stacks.

- **Damage example**: Maximum stacks grant 5 × 2% = 10%, changing base damage 100 to 110. With an existing same-stage 25% bonus, damage rises from 125 to 100 × (1 + 25% + 10%) = 135.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_stacking_damage`, hash `4f0962e9`, entry 5142: **Justified Measures**.
- Description key `loc_talent_adamant_stacking_damage_desc`, hash `8191a7bf`, entry 8416.

Full raw template:

~~~text
{damage:%s} Damage on Successful Attack. {stacks:%s} Max Stacks. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings.stacking_damage.damage = 0.02 | Percentage, + prefix → +2% |
| stacks | talent_settings.stacking_damage.stacks = 5 | Number → 5 |
| duration | talent_settings.stacking_damage.duration = 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

~~~text
+2% Damage on Successful Attack. 5 Max Stacks. Lasts 5s.
~~~

## English comparison

The independently read English agrees with a successful attack granting 2% Damage per stack, up to 5 stacks for 5s. First-target filtering, post-hit timing, all-stack refresh and the additive damage example are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_stacking_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/d3c96bd5-6464-499a-a742-cd58ddf1fa02). The icon identifies the talent; it is not mechanism evidence.
