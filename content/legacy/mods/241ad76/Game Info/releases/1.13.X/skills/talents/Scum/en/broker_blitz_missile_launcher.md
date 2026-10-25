# Boom Bringer: source evidence

[繁體中文](../broker_blitz_missile_launcher.md) | [Player description](README.md#broker_blitz_missile_launcher) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_blitz_missile_launcher)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_blitz_missile_launcher`; name key `loc_talent_broker_blitz_missile_launcher`; description key `loc_talent_broker_blitz_missile_launcher_desc`. Node `node_71b9436c-eebd-417b-b666-9df1a19c2db7`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The explosion uses `static_power = 500`, close radius 4 and overall radius 7, with close-area Power distribution 2800 and outer-area distribution 1300. Direct-impact distribution 1800 is calculated separately; the constants cannot all be added into one fixed Damage value for every enemy.
- The talent replaces the Blitz-regeneration and tracking identifiers with an empty `buff_template_name`. The ability has `only_uses_charges` and a maximum of 2 charges.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_broker.lua — L191-L204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L204)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L255-L269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L255-L269)
- [scripts/settings/projectile/player_projectile_templates.lua — L175-L190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L175-L190)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L187-L210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L187-L210)
- [scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua — L156-L281](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua#L156-L281)
- [scripts/utilities/attack/damage_calculation.lua — L219-L228](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L228)
- [scripts/utilities/attack/damage_calculation.lua — L69-L109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L109)
- [scripts/settings/damage/power_level_settings.lua — L7-L29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29)
- [scripts/utilities/attack/damage_profile.lua — L386-L445](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L445)
- [scripts/settings/talent/talent_settings_broker.lua — L191-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L205)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4253-L4295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4253-L4295)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1673-L1717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1673-L1717)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L718-L749](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L718-L749)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L295-L322](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L295-L322)

## Example assumptions and limits

- **Attack:** missile direct-impact and explosion Damage are calculated separately. The explosion has a 4-metre inner radius and a 7-metre overall radius; outer-area Damage is lower and falls off with distance.

- **Damage example:** for an unmodified inner explosion with no falloff, base Damage is 20 × (500 × 2800 ÷ 10000) = 2800. An Unarmoured hit location uses ×1.25 for 3500; a Carapace location uses ×2.4 for 6720. These numbers exclude direct missile impact, hit-location modifiers, enemy-specific Damage reduction and other talents.

- **Ammunition:** carry up to 2 missiles, increased to 3 by Extra Pouches. Replacing the original Stagger grenade removes replenishment from every 20 kills at Close Range.

Distance falloff, direct-impact locations and enemy Damage reduction have not been measured in game to produce a complete Damage table. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_blitz_missile_launcher`, hash `a29ee6e4`, entry 10506: **Boom Bringer**.
- Description key `loc_talent_broker_blitz_missile_launcher_desc`, hash `fad7e488`, entry 16284.

Full raw template:

~~~text
High powered missile launcher.

{max_charges:%s} Max Missiles.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `max_charges` | `talent_settings.blitz.missile_launcher.max_charges = 2` | Number → `2` |

Display mapping: [broker_talents.lua L724–729](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L724-L729); capacity reuses the accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
High powered missile launcher.

2 Max Missiles.
~~~

## English comparison

The English high-powered missile launcher and two-missile capacity agree with the existing evidence. Explosion dimensions, separate impact and explosion Damage, armour-specific calculations and the loss of close-kill replenishment are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/tactical/broker_blitz_missile_launcher.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/3b4df232-3b49-4f84-98c0-2b3e8828f917). The icon identifies the talent; it is not mechanism evidence.
