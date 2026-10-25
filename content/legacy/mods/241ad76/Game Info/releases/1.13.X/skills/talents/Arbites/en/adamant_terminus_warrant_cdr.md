# Obstinate: source evidence

[繁體中文](../adamant_terminus_warrant_cdr.md) | [Player description](README.md#adamant_terminus_warrant_cdr) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_terminus_warrant_cdr)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_terminus_warrant_cdr`; node `node_b6adf64e-bc34-455a-a059-552c4fb0f8a0`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- The core melee/ranged `on_wield` branches require `current_stacks >= max_stacks` before creating `adamant_terminus_warrant_cdr_buff`. It has duration = 12 and a timer that calls `restore_ability_resource(combat_ability, 0.33)` approximately once per second.
- Arbites Combat Abilities define `resource_regen_per_second = 1` and `resource_cost_per_charge = cooldown`. `restore_ability_resource` clamps the restored resource to the maximum. Thus 0.33 is 0.33s of ability resource, not an instant 33% cooldown reduction.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1902-L1925](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1902-L1925)
- [scripts/settings/talent/talent_settings_adamant.lua — L331-L370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L331-L370)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1657-L1663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1657-L1663)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1689-L1695](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1689-L1695)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L1751-L1786](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1751-L1786)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua — L7-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L7-L24)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1127-L1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1179)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1902-L1925](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1902-L1925)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1677-L1701](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1677-L1701)

## Example assumptions and limits

- **Trigger threshold**: Spending all 20 Terminus Warrant stacks triggers Obstinate. Spending fewer than 20 does not create the cooldown-restoration effect.

- **Cooldown example**: Restore an additional 0.33s of Combat Ability cooldown each second, nominally 3.96s over 12s. Starting with 20s remaining, after 12s and 12 restoration ticks the remainder is 20 − 12 − 12 × 0.33 = 4.04s. Restoration is limited to the unregenerated cooldown; expiry update order may result in one fewer tick. Retriggering refreshes the duration without increasing the restoration rate.

After spending all 20 stacks, the nominal additional restoration over 12s is 3.96s. If only 2s remain, restoration cannot exceed the missing 2s and fills the resource.

Restoration follows the per-second timer. Actual tick count depends on buff expiry update order; examples state a nominal upper total and remain subject to the resource clamp.

Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_bullet_rain_tdr`, hash `164cd29a`, entry 1448: **Obstinate**.
- Description key `loc_talent_adamant_terminus_warrant_cdr_desc`, hash `1a4408d8`, entry 1715.

Full raw template:

```text
Spending {stacks:%s} stacks grants you {cdr:%s} Ability Cooldown Regeneration, for {duration:%s}s.
```

The display maps `stacks`, `cdr` and `duration` to the corresponding `talent_settings.terminus_warrant` values below. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| stacks | max_stacks = 20 | Number → 20 |
| cdr | 0.33 | Percentage with + prefix → +33% |
| duration | cdr_duration = 12 | Number → 12; template adds s |

Static reconstruction; not an observed game screen:

```text
Spending 20 stacks grants you +33% Ability Cooldown Regeneration, for 12s.
```

## English comparison limits

The independently read English matches the 20-stack spending threshold, +33% Ability Cooldown Regeneration and 12s duration. Tick timing, nominal examples, resource clamp and retrigger behavior are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_terminus_warrant_cdr.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/7b782337-07db-4ff4-9a85-ba21d1fcfe6b). The icon identifies the talent; it is not mechanism evidence.
