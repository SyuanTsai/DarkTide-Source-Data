# Arbites Vigilant: source evidence

[繁體中文](../adamant_forceful_ability_damage.md) | [Player description](README.md#adamant_forceful_ability_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_forceful_ability_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_forceful_ability_damage`; node `node_284a6993-4069-480f-be4b-ad6bb34c6739`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- The parent Forceful proc records whether `adamant_forceful_ability_strength` is selected. The Combat Ability event first avoids immediately granting another stack. The stack buff's `on_combat_ability` creates `adamant_forceful_strength_stacks` using the current `stack_count`, then finishes the original stack buff.
- The converted buff has max stacks = 10, duration = 12 and `power_level_modifier = 0.025` per stack. Buff stat aggregation adds the contributions of each stack for this additive stat.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1583-L1602](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1583-L1602)
- [scripts/settings/talent/talent_settings_adamant.lua — L268-L284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L268-L284)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1233-L1242](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1233-L1242)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1370-L1377](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1370-L1377)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1485-L1499](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1485-L1499)
- [scripts/extension_systems/buff/buffs/buff.lua — L397-L410](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L410)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/attack/power_level.lua — L25-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1583-L1602](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1583-L1602)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L962-L985](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L962-L985)

## Example assumptions and limits

- **Trigger and consumption**: Using your Combat Ability consumes all current Forceful stacks. Each stack grants +2.5% Strength (PowerLevel) for 12s.

- **Strength example**: Six stacks grant +15%, and 10 stacks grant +25%. With this effect alone, 500 PowerLevel at 10 stacks becomes 500 × 1.25 = 625. Damage, Impact and Cleave then use their respective formulas; their final results cannot all be multiplied directly by 1.25.

Ten stacks × 2.5% = +25% Strength for 12s; five stacks grant +12.5%. The numerical examples isolate this effect. Strength here modifies PowerLevel; how it changes a particular weapon or ability's final damage still depends on the shared damage and attack-type formulas.

Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_forceful_refresh_on_ability`, hash `5a98c23b`, entry 5878: **Arbites Vigilant**.
- Description key `loc_talent_adamant_forceful_ability_damage`, hash `5c5993f8`, entry 5995.

Full raw template:

```text
On Combat Ability, Gain {strength:%s} Strength for each stack. Lasts {duration:%s}s. Removes all Stacks.
```

The display maps `strength` and `duration` to the corresponding `talent_settings.forceful` values below. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| strength | 0.025 | Percentage with + prefix → +2.5% |
| duration | strength_duration = 12 | Number → 12; template adds s |

Static reconstruction; not an observed game screen:

```text
On Combat Ability, Gain +2.5% Strength for each stack. Lasts 12s. Removes all Stacks.
```

## English comparison limits

The independently read English matches the Combat Ability trigger, +2.5% Strength per Forceful stack, 12s duration and removal of the original stacks. The cap, additive aggregation, examples and final-attack calculation limits are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_forceful_ability_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/bc3b59ed-a142-4807-86f9-f75d65b367b4). The icon identifies the talent; it is not mechanism evidence.
