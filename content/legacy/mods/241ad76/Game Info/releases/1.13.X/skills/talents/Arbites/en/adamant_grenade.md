# Arbites Grenade: source evidence

[繁體中文](../adamant_grenade.md) | [Base effects](BASE_EFFECTS.md#adamant_grenade) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_grenade)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `adamant_grenade`; no selectable talent point is spent.

## Source-confirmed behavior and static derivation

- `adamant_archetype.base_talents` assigns `adamant_grenade` to the grenade slot. The ability has `only_uses_charges = true`, reads `base_charges = 3` and has no fixed cooldown field.
- The projectile has `fuse_time = 2`, `impact_fuse_time = 0` and `impact_triggered = true`. It uses `ExplosionTemplates.adamant_grenade`: radius 10m, close radius 2.5m, `static_power_level = 500` and damage falloff.
- Direct collision also uses the `adamant_grenade_impact` damage profile. Explosion damage uses `adamant_grenade` and `close_adamant_grenade`. Final outer-blast health damage cannot be inferred as a fixed number from PowerLevel 500 or radius alone.
- The `ProjectileDamageExtension` impact-triggered branch sets the fuse to `impact_fuse_time = 0` after collision. The 2s fuse is not a fixed throw-to-detonation time. Without collision, the safety route first waits `max_lifetime = 4`, then starts the 2s fuse: approximately 6s, subject to updates and lag compensation.
- The improved version changes capacity from 3 to 4 without consuming the `damage_increase` or `radius_increase` settings. Their unused 50% values do not grant baseline damage or radius bonuses.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/adamant_archetype.lua — L56-L59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/adamant_archetype.lua#L56-L59)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L377-L402](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L377-L402)
- [scripts/settings/talent/talent_settings_adamant.lua — L95-L100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L95-L100)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua — L93-L104](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L93-L104)
- [scripts/settings/projectile/player_projectile_templates.lua — L1053-L1068](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1053-L1068)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L377-L396](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L377-L396)
- [scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua — L425-L434](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua#L425-L434)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L691-L768](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L691-L768)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L232-L350](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L232-L350)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L691-L814](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L691-L814)
- [scripts/extension_systems/weapon/weapon_system.lua — L270-L329](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L270-L329)

## Example assumptions and limits

- **Detonation and range**: Detonates on impact after being thrown. The explosion radius is 10m, with higher close damage in the central 2.5m and damage falloff farther out.

- **Damage example**: Isolating the central explosion armour stage, base damage 1,500 gives 1,500 × 1 = 1,500 against Unarmoured, 1,500 × 0.5 = 750 against Flak Armour and 1,500 × 0.2 = 300 against Carapace Armour. Hit location, blast obstruction and other damage modifiers still affect actual damage.

- **Capacity and replenishment**: Carry up to 3 grenades; each throw consumes one. The base ability has no timed replenishment. Selecting the improved talent-tree version raises capacity to 4.

The no-impact safety fuse is approximately 4 + 2 = 6s after the throw; updates and lag compensation affect exact timing. The 10m radius does not guarantee fixed visible damage at its edge. Close/outer profiles, armour, hit location and other modifiers affect damage; PowerLevel 500 is not 500 health damage. The improved version directly increases capacity; unused damage/radius settings are excluded.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. The local English Build and fixed source both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ability_adamant_grenade`, hash `f50a5b6d`, entry 15913: **Arbites Grenade**.
- Description key `loc_talent_ability_adamant_grenade_description`, hash `9cfb3a86`, entry 10141. The description suffix `[Writer]` is record metadata.

Full raw template:

~~~text
Throw an Arbites Grenade that explodes after a short delay. {charges:%s} Max Grenades.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| charges | talent_settings.blitz_ability.grenade.base_charges = 3 | Number → 3 |

Static reconstruction; not an observed game screen:

~~~text
Throw an Arbites Grenade that explodes after a short delay. 3 Max Grenades.
~~~

## English comparison

The independently read English agrees with the grenade identity and maximum of 3. Its qualitative short-delay wording gives no fixed fuse starting at the throw. Impact and safety routes, blast profiles, armour examples, charge consumption and upgrade limits are supplementary. No explicit English contradiction is established. Actual collision timing and final game UI were not observed.
