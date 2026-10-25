# Frag Grenade

[繁體中文](../veteran_frag_grenade.md) | [Base effects](BASE_EFFECTS.md#veteran_frag_grenade) | [Technical index](SOURCE_INDEX.md)

## How it works

- Carry 3 Frag Grenades. A thrown grenade detonates after approximately 1.7s. The blast radius is 10m, with a 2m high-damage centre and damage falloff toward the edge.
- With no other bonuses or hit-location modifiers, the central blast has 500 base damage against an Unarmoured target. Its Carapace Armour multiplier is 0.2, giving `500 × 0.2 = 100 damage`.
- Shredder Frag Grenade adds Bleed to qualifying explosion hits. Krak Grenade or Smoke Grenade replaces the equipped grenade type. The base Frag Grenade has no built-in Bleed effect.

## Source-confirmed behavior and static derivation

Release 1.13.1, fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent identifier: `veteran_frag_grenade`.

- The class base-talent list points to `veteran_frag_grenade`; it is not an additional selectable node beyond the 77 nodes in the player tree index.
- The talent's `player_ability` uses the `grenade_frag` item, with `only_uses_charges = true` and `max_charges = 3`.
- The projectile has `fuse_time = 1.7`. `ExplosionTemplates.frag_grenade` uses `static_power_level = 500`, `close_radius = 2`, `radius = 10` and `damage_falloff = true`.
- The `close_frag_grenade` attack has `power_distribution = 500`, with armour-damage modifiers of 1 for Unarmoured and 0.2 for `super_armor` (Carapace Armour).
- With default power 500, damage output 20 and maximum power 10,000, the normalized power factor is `500 × 20 / 10,000 = 1`. The central base damage is `500 × 1 × armour_damage_modifier`: 500 against Unarmoured and 100 against Carapace. These examples exclude other damage bonuses, Rending and hit-location modifiers.
- `grenade_apply_bleed` is a separately selected passive rather than a built-in effect of the base ability. The Krak and Smoke talents select different `player_ability` definitions.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/veteran_archetype.lua — L50-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/veteran_archetype.lua#L50-L74)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua — L33-L42](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L33-L42)
- [scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua — L27-L62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/veteran_abilities.lua#L27-L62)
- [scripts/settings/talent/talent_settings_veteran.lua — L102-L104](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_veteran.lua#L102-L104)
- [scripts/settings/projectile/player_projectile_templates.lua — L258-L271](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L258-L271)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L25-L51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L25-L51)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L213-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L213-L258)
- [scripts/settings/damage/power_level_settings.lua — L7-L29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29)
- [scripts/utilities/attack/power_level.lua — L63-L94](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L94)
- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua — L1021-L1074](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L1021-L1074)

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key: `loc_ability_frag_grenade`; hash `86bb6780`; entry 8749; exact name: **Frag Grenade**.
- Description key: `loc_ability_frag_grenade_description`; hash `b3fb3c94`; entry 11606.

Full raw template:

```text
Fragmentation grenade that explodes after a short fuse timer.
```

The description has no value placeholders requiring reconstruction.

[Independent English comparison](LOCALIZATION_COMPARISON.md#veteran_frag_grenade).

## Evidence limits

- Mechanisms and citations reuse the accepted Chinese dossier. In-game execution and final game UI observation were not performed.
