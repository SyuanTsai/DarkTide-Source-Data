# Bolstered Shield: source evidence

[繁體中文](../psyker_shield_extra_charge.md) | [Player description](README.md#psyker_shield_extra_charge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_shield_extra_charge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_shield_extra_charge`; name key `loc_talent_psyker_force_field_charges`; description key `loc_talent_psyker_force_field_charges_description`. Node `node_a10c7d87-9c54-4268-b6be-ca862dcc59ae`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The extra-charge passive supplies `ability_extra_charges=1`. With base `max_charges=1`, the improved ability `psyker_force_field_improved` can therefore hold at most 2 charges.
- The player ability extension sets each charge's cost to 40 seconds and restores 1 resource unit per second. `resource` is a single shared pool; `charges` is calculated as `floor(resource / cost_per_charge)`, retaining partial charge progress.
- With two charges, maximum resource is 80 units. Without modifiers, recovery from completely empty reaches the first charge at 40 seconds and the second at 80 seconds.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1902-L1928](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1902-L1928)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L456-L463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L456-L463)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua — L27-L59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L27-L59)
- [scripts/settings/talent/talent_settings_psyker.lua — L266-L280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L266-L280)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L839-L880](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L880)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1037-L1075](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1037-L1075)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1323-L1348](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1323-L1348)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L734-L772](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L734-L772)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1902-L1928](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1902-L1928)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1104-L1131](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1104-L1131)

## Example assumptions and limits

- **Ability modifier**: Telekine Shield gains one extra charge, storing up to 2. The two uses share cooldown progress and restore one charge at a time.

- **Cooldown example**: After both charges are exhausted, recover the first after 40 seconds and the second after another 40, for `40 × 2 = 80` seconds in total. Other cooldown bonuses are calculated separately.

- Assume both charges are spent, recovery is 1 unit per second and no other cooldown-resource effects apply. `40 units per charge × 2 charges = 80 units`; at 1 unit per second, `80 ÷ 1 = 80` seconds. The first charge returns at about 40 seconds, the second at about 80.
- Charge display and recovery remain affected by global cooldown-resource modifiers, Auras, Kill-related recovery and other effects.
- This talent adds one charge; it does not increase each deployed shield's durability or duration. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_force_field_charges`, hash `dcc7895a`, entry 14322: **Bolstered Shield**.
- Description key `loc_talent_psyker_force_field_charges_description`, hash `5d19ee30`, entry 6036.

Full raw template:

~~~text
{talent_name:%s} now holds up to {max_charges:%s} charges.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_combat_ability_shield` | Localized string → `Telekine Shield` |
| `max_charges` | Base `1` + extra `1` = `2` | Number → `2` |

Only missing display fields in `psyker_talents.lua` L1902–1920 were read. `max_charges` adds the accepted base maximum 1 and `ability_extra_charges=1`, displaying 2. `talent_name` resolves to **Telekine Shield** (`loc_talent_psyker_combat_ability_shield`, hash `3a349f50`, entry 3771). The cooldown mapping is unused by this English template. Mechanics and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Telekine Shield now holds up to 2 charges.
~~~

## English comparison

Read independently, the English raises Telekine Shield's storage maximum to 2 charges. This agrees with base maximum 1 plus one extra charge. It does not claim parallel recovery, more shield durability or longer duration. The shared resource pool, retained partial progress, 40/80-second empty-pool example and other cooldown modifiers supplement the wording; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_shield_extra_charge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/72b10287-7ce1-47a1-a57f-a88c56c51f9f). The icon identifies the talent; it is not mechanism evidence.
