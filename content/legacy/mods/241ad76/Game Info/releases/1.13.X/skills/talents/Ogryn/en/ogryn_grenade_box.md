# Big Box of Hurt: source evidence

[繁體中文](../ogryn_grenade_box.md) | [Base effects](BASE_EFFECTS.md#ogryn_grenade_box) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_grenade_box)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Base talent `ogryn_grenade_box`; no selectable talent point is spent. Name key `loc_ability_ogryn_grenade_box`; description key `loc_ability_ogryn_grenade_box_description`. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The base ability has `max_charges=3` and `only_uses_charges=true`. The `ogryn_grenade_box` projectile uses `ogryn_grenade_box_impact`, with `attack=1850`.
- Although the base projectile declares `conditional_cluster`, `ProjectileDamageExtension` enables it only with `ogryn_basic_box_spawns_cluster`. That keyword is absent from the current class base list.
- This conclusion is limited to the ordinary base configuration. In Hordes, `hordes_buff_ogryn_basic_box_spawns_cluster` can separately grant `ogryn_basic_box_spawns_cluster` and enable the base box's `conditional_cluster`; do not extend the ordinary-configuration conclusion to every mode.

## Fixed source evidence

- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L140-L163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L140-L163)
- [scripts/settings/projectile/player_projectile_templates.lua — L470-L483](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L470-L483)
- [scripts/settings/projectile/player_projectile_templates.lua — L1043-L1043](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1043-L1043)
- [scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua — L103-L180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua#L103-L180)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L683-L698](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L683-L698)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L200-L209](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L200-L209)
- [scripts/settings/archetype/archetypes/ogryn_archetype.lua — L50-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)
- [scripts/settings/buff/hordes_buffs/hordes_legendary_buff_templates/hordes_legendary_ogryn_buff_templates.lua — L31-L40](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/hordes_buffs/hordes_legendary_buff_templates/hordes_legendary_ogryn_buff_templates.lua#L31-L40)

## Examples and limits

- **Throwing**: Throw an entire box of grenades as a projectile at an enemy. Carry up to 3 boxes; throwing one leaves `3 − 1 = 2`. Boxes do not replenish automatically over time and require grenade supplies.

- **Damage example**: For the box's direct hit only, with no Critical Hit, Weakspot hit or other bonus, an Unarmoured target takes `1850 × 1 = 1850` damage; Carapace Armour takes `1850 × 0.15 = 277.5`.

- **Upgrade difference**: Under the ordinary base configuration, the box does not release grenades. Selecting Bombs Away! replaces it with the version that releases child grenades after a hit.

Damage examples exclude hit-location modifiers, additional armour reduction, Critical Hits, Weakspots and other talents. No damage was measured in game. Local Build 25606770 corresponds to the fixed 1.13.1 source. Actual presentation and behavior remain unobserved in game.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_ability_ogryn_grenade_box`, hash `848c694f`, entry 8617: **Big Box of Hurt**.
- Description key `loc_ability_ogryn_grenade_box_description`, hash `77e8d4ed`, entry 7796.

Full raw template:

~~~text
Throw a box of grenades with great strength and enthusiasm for high Damage against a Single Enemy.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | No format values / placeholders | Exported description is literal text |

Only the missing text mapping / display formatting in the cited talent definition, lines 200–209, was read. Accepted mechanisms, values, examples and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Throw a box of grenades with great strength and enthusiasm for high Damage against a Single Enemy.
~~~

## English comparison

The independently read English describes throwing a box of grenades for high damage against a single enemy. It agrees with the accepted direct-hit projectile and does not promise a grenade release or blast area. Charge capacity, supplies, armour-specific examples and the ordinary-configuration/Hordes distinction supplement the text. No explicit English contradiction is established.
