# Integrated Refraction Emitter: source evidence

[繁體中文](../cryptic_grenade_ability_force_field.md) | [Player description](README.md#cryptic_grenade_ability_force_field) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_grenade_ability_force_field)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_grenade_ability_force_field`; name key `loc_talent_cryptic_grenade_ability_force_field`; description key `loc_talent_cryptic_grenade_ability_force_field_cooldown_desc`. Node `node_17da808e-f2f1-4684-8bc9-dce16aa14756`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The ability data sets a maximum of 3 charges, a cost of 75 resource per use and regeneration of 1 per second. One missing charge therefore needs 75 seconds, and all 3 empty charges need 225 seconds. All charges share regeneration progress; these are not three simultaneous 75-second cooldowns.
- `ActionActivateForceShield` creates a field attached to the player at their position for 8 seconds. At both activation and expiry, it creates a 5-metre-radius `cryptic_force_field_explosion`, applying `cryptic_discharge_shock` on hit. Its Buff gives `suppression_immune` and `count_as_dodge_vs_ranged` during the field.
- The action class has a `capacitance_cost_when_empty` branch, but neither current `cryptic_force_field` action supplies that field, and the ability has `can_be_wielded_when_depleted = false`. This is not described as an enabled feature that spends Capacitance after charges are exhausted.
- The field's health extension records the number of absorbed Ranged Attacks for extra Capacitance restoration and expiry arcs. Those upgrades are outside the base effect.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L780-L831](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L780-L831)
- [scripts/settings/talent/talent_settings_cryptic.lua — L164-L181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L164-L181)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua — L169-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L169-L194)
- [scripts/settings/ability/ability_templates/cryptic_force_field.lua — L27-L60](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/cryptic_force_field.lua#L27-L60)
- [scripts/extension_systems/ability/actions/action_activate_force_shield.lua — L21-L84](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_activate_force_shield.lua#L21-L84)
- [scripts/extension_systems/ability/actions/action_activate_force_shield.lua — L103-L141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_activate_force_shield.lua#L103-L141)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1250-L1293](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1250-L1293)
- [scripts/settings/damage/explosion_templates/player_explosion_templates.lua — L278-L298](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_explosion_templates.lua#L278-L298)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua — L68-L100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L68-L100)
- [scripts/extension_systems/force_field/cryptic_personal_force_field_unit_extension.lua — L39-L52](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/cryptic_personal_force_field_unit_extension.lua#L39-L52)
- [scripts/extension_systems/force_field/force_field_system.lua — L170-L220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/force_field_system.lua#L170-L220)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L835-L880](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L835-L880)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1317-L1320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1317-L1320)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L780-L831](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L780-L831)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L183-L212](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L183-L212)

## Example assumptions and limits

- **Operation**: Select and activate the Refraction Emitter to deploy a shield around you that absorbs Ranged Attacks for 8 seconds. At activation and expiry, it electrocutes enemies within 5 metres.

- **Charges**: The base capacity is 3 uses, with each activation spending 1. Without other modifiers, each requires 75 seconds to recover; restoring all 3 after spending them takes 225 seconds.

- **Cooldown example**: Each charge costs 75 ability resource and regenerates 1 per second. Restoring 1 used charge takes 75 seconds; restoring 3 takes 75 × 3 = 225 seconds, assuming no other cooldown modifiers.
- The field grants Suppression immunity and a Ranged Dodge check while active; this description does not generalize that to immunity against all Damage.
- Damage and the number of Electrocution ticks still depend on shared settings and the target. No in-game test was performed.
- The class's alternative cost branch for depleted charges is not enabled by this ability's action settings.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_grenade_ability_force_field`, hash `1b8e6a78`, entry 1796: **Integrated Refraction Emitter**.
- Description key `loc_talent_cryptic_grenade_ability_force_field_cooldown_desc`, hash `1988edfa`, entry 1661.

Full raw template:

~~~text
Surround yourself in a shield that absorbs all incoming Ranged Damage. Lasts {duration:%s}s. Upon activation, and again when it ends, trigger an electric explosion around you, applying Electrocution to enemies within {range:%s}m.

{max_charges:%s} Charges. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration` | `talent_settings.force_field.duration = 8` | Number: `8` |
| `range` | `talent_settings.force_field.range = 5` | Reconstructed numeric value: `5`; see mapping note |
| `max_charges` | `talent_settings.force_field.max_charges = 3` | Number: `3` |
| `cooldown` | `talent_settings.force_field.cooldown = 75` | Number: `75` |

Display mapping: `cryptic_talents.lua` L780-L821. Values reuse the accepted `talent_settings_cryptic.lua` L164-L181 and existing 5-metre explosion evidence. The `range` entry uses `format_values = "number"` rather than `format_type`; this static reconstruction inserts its verified numeric value 5 without asserting observed UI formatting. Other definition fields not used in this raw template are not inserted.

Static reconstruction; not an observed game screen:

~~~text
Surround yourself in a shield that absorbs all incoming Ranged Damage. Lasts 8s. Upon activation, and again when it ends, trigger an electric explosion around you, applying Electrocution to enemies within 5m.

3 Charges. 75s Cooldown.
~~~

## English comparison

The independently read English describes Ranged Damage absorption, an 8-second field, electric explosions at activation and expiry applying Electrocution within 5 metres, 3 charges and a 75-second cooldown. These conditions and values agree with the accepted evidence. Its Ranged wording does not imply immunity to every Damage type. Shared charge-regeneration progress, the 225-second full-recovery example, Suppression immunity/Ranged Dodge keywords, the inactive depleted-charge alternative and upgrade boundaries supplement the description; no clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical/cryptic_grenade_ability_force_field.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/d45e19a1-d480-42db-bd0c-70ed43aba9aa). The icon identifies the talent; it is not mechanism evidence.
