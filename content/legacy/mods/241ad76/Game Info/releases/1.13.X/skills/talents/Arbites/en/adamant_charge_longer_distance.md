# Engage: source evidence

[繁體中文](../adamant_charge_longer_distance.md) | [Player description](README.md#adamant_charge_longer_distance) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_charge_longer_distance)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_charge_longer_distance`; node `node_20638e8f-5c78-481c-a210-ec3fcdcd60e3`; category Ability; one point.

## Source-confirmed behavior and static derivation

- The base charge template has a distance of 3.75m. The upgrade adds a +3.75m distance stat buff.
- The shared charge-distance calculation adds the template's base distance and the character's current distance bonus. The lunging state uses that result to determine movement distance.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L176-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L176-L194)
- [scripts/settings/talent/talent_settings_adamant.lua — L19-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L238-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L238-L245)
- [scripts/settings/lunge/adamant_lunge_templates.lua — L13-L69](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/lunge/adamant_lunge_templates.lua#L13-L69)
- [scripts/utilities/player_state/lunge.lua — L59-L70](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/player_state/lunge.lua#L59-L70)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_lunging.lua — L95-L114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_lunging.lua#L95-L114)
- [scripts/settings/talent/talent_settings_adamant.lua — L19-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L176-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L176-L194)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1325-L1347](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1325-L1347)

## Example assumptions and limits

- **Charge distance**: This upgrade adds 3.75m to Break the Line's distance, raising its base 3.75m to 7.5m.

- **Example**: `3.75m base distance + 3.75m increase = 7.5m`. Actual displacement may be shorter because of collisions along the path or cancellation before completion.

The 7.5m value is the calculated distance limit; completed displacement may be affected by collision, path or player cancellation. The example isolates this upgrade, using metres as the distance unit. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_charge_longer_distance`, hash `1c63e9c7`, entry 1851: **Engage**.
- Description key `loc_talent_adamant_charge_longer_distance_desc`, hash `3945c4ac`, entry 3710.
- Ability-name lookup `loc_talent_adamant_charge_ability_name`, hash `c274ea7a`, entry 12546: **Break the Line**.

Full raw template:

```text
The distance of {charge_ability_name:%s} is increased to {distance:%s}m.
```

The `distance` mapping adds `talent_settings.combat_ability.charge.distance_increase` and `range` using value formatting. `charge_ability_name` is a localized-name lookup. Values reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| charge_ability_name | Break the Line | Localized lookup of the ability-name key |
| distance | 3.75 + 3.75 = 7.5 | Value → 7.5; template adds m |

Static reconstruction; not an observed game screen:

```text
The distance of Break the Line is increased to 7.5m.
```

## English comparison limits

The independently read English names the charge ability and states the resulting total with `increased to`; both agree with the accepted evidence. The base/additive composition and limits on actual displacement are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_charge_longer_distance.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/7b78f1c1-2250-44c0-9642-315fd105575a). The icon identifies the talent; it is not mechanism evidence.
