# Remote Detonation: source evidence

[繁體中文](../adamant_whistle.md) | [Player description](README.md#adamant_whistle) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_whistle)

- Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`.
- Talent `adamant_whistle`; category Blitz; one point.
- Source-confirmed behavior and static derivation are translated from the accepted Chinese dossier; the examples were not measured in game.

## Source-confirmed behavior and static derivation

- `action_order_companion` first applies a 5m shout at `dog_position`, then creates a 4m-radius explosion when `time_in_action >= 0.3`.
- The public ability template does not wire the `adamant_whistle_targeting` action module. An unwired module does not establish that this Blitz orders the Cyber-Mastiff to pounce on an aimed enemy.
- The shout applies `adamant_whistle_electrocution`. Its clone chain reaches the improved charged-chain buff with duration 2 and inherited `damage_taken_multiplier = 1.1`. The template also forces light stagger for 2.5s; this is a separate duration.
- The ability has maximum charges 2, resource cost 50 and natural recovery of 1 resource per second. Available charges are `floor(resource / 50)` in a shared resource pool. `whistle_replenishment` supplies HUD/audio feedback rather than a second charge-restoration route.
- Blast examples isolate the central profile's armour stage and exclude hit-location modifiers, obstruction, Electrocution's damage-taken multiplier and other bonuses. Static calculations do not substitute for in-game measurements.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L343-L376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L343-L376)
- [scripts/settings/talent/talent_settings_adamant.lua — L88-L94](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L88-L94)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua — L117-L134](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L117-L134)
- [scripts/settings/ability/ability_templates/adamant_whistle.lua — L38-L61](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/adamant_whistle.lua#L38-L61)
- [scripts/extension_systems/weapon/actions/modules/adamant_whistle_targeting_action_module.lua — L21-L66](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/adamant_whistle_targeting_action_module.lua#L21-L66)
- [scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua — L172-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/perception/target_selection_templates/companion_dog_target_selection_template.lua#L172-L194)
- [scripts/extension_systems/ability/actions/action_order_companion.lua — L48-L76](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_order_companion.lua#L48-L76)
- [scripts/settings/ability/shout_target_templates.lua — L8-L18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/shout_target_templates.lua#L8-L18)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L418-L444](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L418-L444)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L263-L380](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L263-L380)
- [scripts/settings/buff/weapon_buff_templates.lua — L1088-L1135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1088-L1135)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L815-L932](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L815-L932)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L839-L880](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L880)
- [scripts/utilities/attack/damage_calculation.lua — L587-L614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/extension_systems/ability/utilities/shout_ability.lua — L121-L186](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/utilities/shout_ability.lua#L121-L186)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L343-L376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L343-L376)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L188-L226](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L188-L226)

## Example assumptions

- **Location and range**: About 0.3s after activation, trigger the effect at your Cyber-Mastiff's current location. Enemies within 5m are electrocuted and receive a 2.5s light stagger. Explosion damage reaches 4m, with a 2m high-damage centre.

- **Electrocution and damage taken**: Electrocution lasts 2s and multiplies the target's damage taken by 1.1. Isolating this effect, 100 damage becomes `100 × 1.1 = 110`. With a separate 25% attacker damage bonus, the result is `100 × 1.25 × 1.1 = 137.5 damage`.

- **Blast example**: Isolating the central blast's armour stage, the Unarmoured baseline is `600 × 1 = 600 damage`; Flak Armour gives `600 × 0.5 = 300 damage`. Hit location, obstruction and Electrocution's damage-taken effect still affect the actual hit. A target 4.5m from the Cyber-Mastiff is inside the Electrocution radius but outside the damaging blast.

- **Charges and cooldown**: Hold up to 2 charges, with 50s needed to restore one. Both charges share the same recovery progress and return in sequence. With both used in quick succession and no other cooldown modifiers, about 50s restores one charge and 100s restores both.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ability_detonate`, hash `c6cb4eee`, entry 12831: **Remote Detonation**.
- Description key `loc_talent_ability_detonate_description`, hash `29c13c22`, entry 2711.

Full raw template:

```text
Cause an Explosion at your Cyber-Mastiff's Location. Staggering and Electrocuting nearby Enemies. {max_charges:%s} Charges. {cooldown:%s}s Cooldown.
```

The display fields use number formatting: `max_charges` reads `talent_settings.blitz_ability.whistle.charges` (2), and `cooldown` reads its `cooldown` (50). The template supplies the seconds suffix. Shared number-formatting evidence is reused.

| Placeholder | Value | Reconstruction |
|---|---|---|
| max_charges | 2 | 2 Charges |
| cooldown | 50 seconds | 50s Cooldown |

Static reconstruction; not an observed game screen:

```text
Cause an Explosion at your Cyber-Mastiff's Location. Staggering and Electrocuting nearby Enemies. 2 Charges. 50s Cooldown.
```

## Evidence limits

The same-build raw English describes the explosion, stagger and Electrocution at the Cyber-Mastiff; it omits their precise radii and numerical effects. This supports supplementary explanation rather than an English erratum. Final game UI and execution remain unobserved. The unwired targeting module is not treated as an available command.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/tactical/adamant_whistle.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/aa116dc7-88d2-450b-bcff-c2dc0bb6b4c0). The image identifies the talent; it is not mechanism evidence.
