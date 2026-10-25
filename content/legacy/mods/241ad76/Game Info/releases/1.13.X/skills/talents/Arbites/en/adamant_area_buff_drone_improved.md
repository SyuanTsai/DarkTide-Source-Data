# Nuncio-Aquila: source evidence

[繁體中文](../adamant_area_buff_drone_improved.md) | [Player description](README.md#adamant_area_buff_drone_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_area_buff_drone_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_area_buff_drone_improved`; node `node_ccb98e10-453f-425b-8242-9d264faf7b25`; category Ability; one point.

## Source-confirmed behavior and static derivation

- The ability has one charge and a 60s cooldown. The deployed object lives 20s, with both ally and enemy proximity radii set to 7.5m.
- The improved talent causes the area logic to replace the basic ally buff with the improved buff: restore 7.5% of maximum Toughness per second, apply Suppression, Impact and Recoil modifiers, and supply three immunity keywords.
- The enemy effect applies a damage-taken multiplier of 1.15. Two separate upgrade nodes can add Toughness Damage Reduction, Revive Speed and Attack Speed for allies in the area, or reduce enemies' Melee Attack Speed and Melee Damage.
- Leaving the area removes buffs or debuffs applied by the drone. Effect duration therefore depends on how long the recipient remains within the effective radius.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L503-L595](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L503-L595)
- [scripts/settings/talent/talent_settings_adamant.lua — L67-L83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L67-L83)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua — L77-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L77-L91)
- [scripts/settings/equipment/weapon_templates/combat_abilities/adamant_area_buff_drone.lua — L7-L15](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_abilities/adamant_area_buff_drone.lua#L7-L15)
- [scripts/settings/projectile/player_projectile_templates.lua — L1177-L1226](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1177-L1226)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua — L42-L61](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua#L42-L61)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua — L224-L295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua#L224-L295)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L424-L492](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L424-L492)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L542-L595](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L542-L595)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L324-L352](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L324-L352)

## Example assumptions and limits

- **Deployment and cooldown**: Aim to deploy in the target direction. A quick tap deploys it at your position and makes it follow you. The drone lasts 20s, has a 7.5m radius and a 60s cooldown.

- **Ally support**: The improved version replenishes 7.5% of maximum Toughness per second, grants 30% more Suppression Dealt and Impact, and reduces Recoil by 25%. It also grants immunity to Stun, Slowdown and Suppression. Staying within range for 2s theoretically restores `7.5% × 2 = 15% of maximum Toughness`; actual restoration is capped by missing Toughness.

- **Enemy vulnerability**: Enemies within range take 15% more damage. Isolating this effect with other conditions unchanged, 100 damage becomes `100 × 1.15 = 115 damage`.

Toughness is replenished over time. Restoration beyond the current deficit does not create excess Toughness, and leaving the radius removes the effect through the area logic. The 2s and 100-damage examples isolate the stated effects, with other damage modifiers excluded. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ability_area_buff_drone`, hash `82756b8c`, entry 8474: **Nuncio-Aquila**.
- Description key `loc_talent_ability_area_buff_drone_new_improved_description`, hash `1e02d48e`, entry 1958.

Full raw template:

```text
Deploy a Nuncio-Aquila in the target direction. Tapping the Ability will deploy it on your position and have it follow you.

Allies within {range:%s}m Replenish {toughness:%s} Toughness per second, gain {suppression:%s} Suppression Dealt, {impact:%s} Impact, {recoil:%s} Recoil as well as are Immune to Stun, Slowdown, and Suppression.

Enemies within {range:%s}m have {damage_taken:%s} Damage Taken.

Lasts {duration:%s}s. {cooldown:%s}s Cooldown.

This is an augmented version of {nuncio_name:%s}.
```

The necessary display mapping and shared formatter are applied once. `damage_taken` explicitly uses `math_round((value - 1) * 100)`; the damage-taken multiplier therefore displays its additional percentage. The base localized name is also Nuncio-Aquila.

| Placeholder | Value | Formatting |
|---|---|---|
| range | 7.5 | Number formatting; used twice |
| toughness | 0.075 | Percentage × 100, no positive prefix → 7.5% |
| suppression | 0.3 | Percentage × 100 with `+` prefix → +30% |
| impact | 0.3 | Percentage × 100 with `+` prefix → +30% |
| recoil | -0.25 | Percentage × 100 → -25% |
| damage_taken | 1.15 | Rounded (value − 1) × 100 with `+` prefix → +15% |
| duration | 20 | Number formatting |
| cooldown | 60 | Number formatting |
| nuncio_name | Nuncio-Aquila | Localized lookup of the name key |

Static reconstruction; not an observed game screen:

```text
Deploy a Nuncio-Aquila in the target direction. Tapping the Ability will deploy it on your position and have it follow you.

Allies within 7.5m Replenish 7.5% Toughness per second, gain +30% Suppression Dealt, +30% Impact, -25% Recoil as well as are Immune to Stun, Slowdown, and Suppression.

Enemies within 7.5m have +15% Damage Taken.

Lasts 20s. 60s Cooldown.

This is an augmented version of Nuncio-Aquila.
```

## English comparison limits

The independently read English matches deployment modes, recipients, rates, modifiers, immunities and timing. Missing-Toughness limits, exit removal, examples and separate upgrade-node effects are supplementary. No explicit English contradiction is established. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability/adamant_area_buff_drone_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/18c1f301-d18b-4469-9fbf-bb5ede1b3353). The icon identifies the talent; it is not mechanism evidence.
