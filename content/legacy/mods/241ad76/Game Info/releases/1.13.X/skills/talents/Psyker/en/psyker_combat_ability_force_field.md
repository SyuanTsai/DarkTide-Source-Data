# Telekine Shield: source evidence

[繁體中文](../psyker_combat_ability_force_field.md) | [Player description](README.md#psyker_combat_ability_force_field) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_combat_ability_force_field)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_combat_ability_force_field`; name key `loc_talent_psyker_combat_ability_shield`; description key `loc_talent_psyker_combat_ability_shield_description`. Node `node_ba340289-3623-4920-b6cb-0a665eff8c0e`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Base ability settings are `max_charges=1`, `resource_cost_per_charge=40` and `resource_regen_per_second=1`. After use, about 40 seconds restores one charge.
- The shield wall defaults to a duration of 17.5 seconds and durability 20. Each damage event accepted by `HealthExtension` removes 1 durability and starts a global 0.33-second damage interval. Incoming damage amount only accumulates a recorded value; each accepted hit still removes 1.
- Without other effects, about 20 accepted damage events exhaust the shield. If it does not receive enough attacks to exhaust durability, it expires after 17.5 seconds.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L132-L154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L132-L154)
- [scripts/settings/talent/talent_settings_psyker.lua — L266-L280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L266-L280)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua — L27-L43](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L27-L43)
- [scripts/extension_systems/health/psyker_force_field_unit_health_extension.lua — L16-L44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/psyker_force_field_unit_health_extension.lua#L16-L44)
- [scripts/extension_systems/health/psyker_force_field_unit_health_extension.lua — L46-L99](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/psyker_force_field_unit_health_extension.lua#L46-L99)
- [scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua — L88-L115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua#L88-L115)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L132-L154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L132-L154)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1074-L1103](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1074-L1103)

## Example assumptions and limits

- **Ability**: Deploy a psychic shield in front of you, blocking Enemy Ranged Attacks while you and Allies can still shoot through. It lasts up to 17.5 seconds; base cooldown: 40 seconds.

- **Shield durability**: The shield withstands 20 hits that are accepted for durability removal. After each removal, no further durability is removed for 0.33 seconds. Heavy attack pressure may destroy the shield early.

- **Durability example**: After 12 accepted durability removals, `20 − 12 = 8` remain. This counts shield hits and is separate from your Health or Toughness.

- After 12 of the 20 durability removals, `20 − 12 = 8` remain. If the first hit occurs at zero seconds and each later hit at 0.33-second intervals, the 20th occurs at `19 × 0.33 = 6.27` seconds. This is an idealized timeline, not a measured lifespan.
- How attacks collide with or are blocked by the shield depends on the scene and attack type. This account describes shield durability calculation.
- Durability is the Health of an independent object, not the player's Toughness. Shield failure does not directly mean the player's Toughness is exhausted. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_combat_ability_shield`, hash `3a349f50`, entry 3771: **Telekine Shield**.
- Description key `loc_talent_psyker_combat_ability_shield_description`, hash `2d4c8bb1`, entry 2949.

Full raw template:

~~~text
Spawns a psychic shield in front of you for {duration:%s}s. The shield blocks Enemy Ranged Attacks, while you and Allies can still shoot through.

Base Cooldown: {cooldown:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration` | `17.5` | Number → `17.5`; the template adds `s` |
| `cooldown` | `40` | Number → `40`; the template adds `s` |

Only missing display fields in `psyker_talents.lua` L132–150 were read. Accepted wall duration 17.5 seconds and base cooldown 40 seconds use number formatting. `talent_name` is unused in this English template. Mechanics and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Spawns a psychic shield in front of you for 17.5s. The shield blocks Enemy Ranged Attacks, while you and Allies can still shoot through.

Base Cooldown: 40s.
~~~

## English comparison

Read independently, the English describes a forward psychic shield that blocks Enemy Ranged Attacks while allowing the player and Allies to shoot through, with a 17.5-second duration and 40-second base cooldown. These agree with the accepted player account and base settings. It does not state unlimited durability or survival under every attack for the entire duration. The 20 accepted-hit removals, global damage interval, possible early destruction and separate shield-object Health supplement the description; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability/psyker_combat_ability_force_field.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/e328d953-886b-4527-9c23-e8bfc90ada6f). The icon identifies the talent; it is not mechanism evidence.
