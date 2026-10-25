# Nuncio-Aquila: source evidence

[繁體中文](../adamant_area_buff_drone.md) | [Base effects](BASE_EFFECTS.md#adamant_area_buff_drone) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_area_buff_drone)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `adamant_area_buff_drone`; no selectable talent point is spent.

## Source-confirmed behavior and static derivation

- The base combat ability in `adamant_archetype.base_talents` selects `PlayerAbilities.adamant_area_buff_drone`. It has one charge; cooldown and per-charge consumption both read the 60s setting.
- The unupgraded allied `adamant_drone_base_buff` restores `toughness = 0.05` per second using `dt`. The enemy `adamant_drone_enemy_debuff` has `damage_taken_multiplier = 1.15`. Allied Attack Speed, revive speed, Toughness reduction and enemy melee-output reduction belong to separate special-rule buffs.
- The deployed object checks allied and enemy units within radius 7.5m, applies their respective base buff or damage-taken debuff and removes it on leaving range. It follows the owner and has lifetime 20s.
- The theoretical maximum-100 Toughness example is `100 × 0.05 × 20`. Capacity, entry/exit, incoming hits and update timing limit actual recovery. The damage example isolates the 1.15 target damage-taken multiplier.

## Fixed source evidence

- [scripts/settings/archetype/archetypes/adamant_archetype.lua — L51-L55](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/adamant_archetype.lua#L51-L55)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L503-L541](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L503-L541)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua — L77-L92](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L77-L92)
- [scripts/settings/talent/talent_settings_adamant.lua — L68-L82](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L68-L82)
- [scripts/settings/projectile/player_projectile_templates.lua — L1177-L1225](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1177-L1225)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L424-L483](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L424-L483)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua — L80-L88](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua#L80-L88)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua — L224-L294](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua#L224-L294)
- [scripts/settings/equipment/weapon_templates/combat_abilities/adamant_area_buff_drone.lua — L7-L16](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/adamant_area_buff_drone.lua#L7-L16)

## Example assumptions and limits

- **Deployment and charge**: After deployment, the Nuncio-Aquila follows you and lasts 20s. The base ability has one charge and a 60s cooldown.

- **Allied Toughness**: Allies within 7.5m recover 5% of maximum Toughness per second. With maximum Toughness 100 and continuous presence in range, the theoretical recovery over 20s is 100 points, capped at missing Toughness.

- **Enemy damage taken**: Enemies in range take 15% more damage. Isolating this multiplier, damage 100 becomes 115.

Recovery is a percentage of maximum Toughness, not an increase to its maximum. The 15% affects enemy damage taken; other reduction, Weakspot, armour, distance and damage-type modifiers still enter final calculation. Upgrades are other nodes; this record covers the base configuration.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. The local English Build and fixed source both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ability_area_buff_drone`, hash `82756b8c`, entry 8474: **Nuncio-Aquila**.
- Description key `loc_talent_ability_area_buff_drone_new_description`, hash `f24979b8`, entry 15744.

Full raw template:

~~~text
Deploy a Nuncio-Aquila in the target direction. Tapping the Ability will deploy it on your position and have it follow you.

Allies within {range:%s}m Replenish {toughness:%s} Toughness per second and Enemies within {range:%s}m have {damage_taken:%s} Damage Taken.

Lasts {duration:%s}s. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| range | talent_settings.blitz_ability.drone.range = 7.5 | Number → 7.5; template adds m |
| toughness | talent_settings.blitz_ability.drone.toughness = 0.05 | Percentage, no prefix → 5% |
| damage_taken | talent_settings.blitz_ability.drone.damage_taken = 1.15 | Custom round((value − 1) × 100) overrides percentage conversion; + prefix → +15% |
| duration | talent_settings.blitz_ability.drone.duration = 20 | Number → 20; template adds s |
| cooldown | talent_settings.blitz_ability.drone.cooldown = 60 | Number → 60; template adds s |

The format map also supplies `talent_name` as a localized lookup of the name key; this raw template does not consume it.

Static reconstruction; not an observed game screen:

~~~text
Deploy a Nuncio-Aquila in the target direction. Tapping the Ability will deploy it on your position and have it follow you.

Allies within 7.5m Replenish 5% Toughness per second and Enemies within 7.5m have +15% Damage Taken.

Lasts 20s. 60s Cooldown.
~~~

## English comparison

The independently read English agrees with the accepted deployment, allied recovery, enemy damage-taken direction, range, duration and cooldown. The [existing deployment record](adamant_area_buff_drone_improved.md) supplies the aimed/tap distinction without new source tracing. One charge, range removal, separate upgrade effects, maximum-Toughness recovery basis and numerical examples are supplementary. No explicit English contradiction is established.
