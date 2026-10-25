# Telekine Dome: source evidence

[繁體中文](../psyker_sphere_shield.md) | [Player description](README.md#psyker_sphere_shield) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_sphere_shield)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_sphere_shield`; name key `loc_talent_psyker_force_field_dome`; description key `loc_talent_psyker_force_field_dome_increased_cd_desc`. Node `node_b965d30f-4412-43e5-856a-c571751925a7`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node replaces the wall form with the `psyker_force_field_dome` player ability and `psyker_sphere_shield` special rule. `PlayerAbilities` uses the same `psyker_shield` ability group and resource recovery of 1 per second, with `cooldown/resource_cost_per_charge=60`.
- On detecting the sphere rule, `ForceFieldUnitExtension` uses `sphere_duration=25`; the health extension uses `sphere_health=20`. `SPHERE_UNIT_RADIUS` is 6.
- For comparison, the ordinary wall has `duration=17.5`, `cooldown=40` and `health=20`. Shield damage-throttling rules are shared.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1929-L1956](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1929-L1956)
- [scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua — L27-L77](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/psyker_abilities.lua#L27-L77)
- [scripts/settings/talent/talent_settings_psyker.lua — L266-L280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L266-L280)
- [scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua — L88-L105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua#L88-L105)
- [scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua — L285-L305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua#L285-L305)
- [scripts/extension_systems/health/psyker_force_field_unit_health_extension.lua — L16-L44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/psyker_force_field_unit_health_extension.lua#L16-L44)
- [scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua — L22-L28](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/force_field/psyker_force_field_unit_extension.lua#L22-L28)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1929-L1956](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1929-L1956)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1156-L1182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1156-L1182)

## Example assumptions and limits

- **Ability modifier**: Telekine Shield becomes a spherical barrier around the casting position, with a radius of about 6 metres. It lasts up to 25 seconds; base cooldown becomes 60 seconds. The shield can still disappear early when its durability is exhausted.

- **Time comparison**: Compared with the original shield, duration increases by `25 − 17.5 = 7.5` seconds and cooldown by `60 − 40 = 20` seconds. Durability still supports 20 accepted removals.

- Compare the base shield and Dome with no extra cooldown modifiers and assume the barrier is not exhausted early. The wall has a 40-second cooldown and 17.5-second duration; the Dome has a 60-second cooldown and 25-second duration. Each Dome lasts 7.5 seconds longer and adds 20 seconds of cooldown; durability remains 20.
- Radius comes from a source constant. Collision checks add the player unit's radius, so 6 metres is not the exact outer-edge boundary for every character.
- Shape and blocking follow the barrier's in-game collision rules. This account does not infer outcomes for every Enemy attack or terrain type. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_force_field_dome`, hash `8dd9e6d1`, entry 9189: **Telekine Dome**.
- Description key `loc_talent_psyker_force_field_dome_increased_cd_desc`, hash `0b13a4ee`, entry 702.

Full raw template:

~~~text
{talent_name:%s} now forms a spherical shield which lasts {duration:%s}s, but the Cooldown is increased to {cooldown:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_combat_ability_shield` | Localized string → `Telekine Shield` |
| `duration` | `25` | Number → `25`; the template adds `s` |
| `cooldown` | `60` | Number → `60`; the template adds `s` |

Only missing display fields in `psyker_talents.lua` L1929–1947 were read. `talent_name` resolves to **Telekine Shield** (`loc_talent_psyker_combat_ability_shield`, hash `3a349f50`, entry 3771). Accepted `sphere_duration=25` and `cooldown_sphere=60` use number formatting. Mechanics and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Telekine Shield now forms a spherical shield which lasts 25s, but the Cooldown is increased to 60s.
~~~

## English comparison

Read independently, the English changes Telekine Shield into a sphere with a 25-second duration and a cooldown increased to 60 seconds. This agrees with the accepted replacement ability and sphere settings. It does not state increased durability or guaranteed survival for the full duration under all attacks. The approximate radius, shared 20-durability/throttling rules, early exhaustion and wall-versus-Dome time comparison supplement the description; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_sphere_shield.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/60e6d4b2-0696-4215-8afd-8c9725d4801f). The icon identifies the talent; it is not mechanism evidence.
