# Arbites Grenade: source evidence

[繁體中文](../adamant_grenade_improved.md) | [Player description](README.md#adamant_grenade_improved) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_grenade_improved)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_grenade_improved`; category Blitz; one point.

## Source-confirmed behavior and static derivation

- The talent selects `PlayerAbilities.adamant_grenade_improved`. Its maximum charge count reads `improved_charges = 4`; `only_uses_charges = true` and no cooldown is configured. The base `adamant_grenade` ability has `base_charges = 3`.
- Both abilities use `projectile_templates.adamant_grenade`: `fuse_time = 2`, `impact_fuse_time = 0` and `impact_triggered = true`. Explosion PowerLevel is set to 500, with radius 10, close radius 2.5 and damage falloff.
- The impact-triggered projectile-damage branch sets the fuse to zero after collision. The 2s fuse setting is not a fixed throw-to-detonation time. Without an impact, the safety route first waits for `max_lifetime = 4`, then starts the 2s fuse: approximately `4 + 2 = 6s`, subject to updates and lag compensation.
- The improved ability also installs `adamant_grenade_cluster_kills_tracking_buff`. On the server it accepts kill events from `close_adamant_grenade` or `adamant_grenade`. A gap greater than 0.25s between kills resets the running group count; reaching 3 records a private statistical event. It does not restore ability resource or give a combat buff, and the adjacent-kill accounting does not require all kills to come from one grenade.
- Radius and damage improvements are separate talents, `adamant_grenade_increased_radius` and `adamant_grenade_increased_damage`. This upgrade changes capacity from 3 to 4; it does not consume the settings fields `damage_increase` or `radius_increase`. Do not apply their unused 50% values to this ability's baseline.
- The player description's Lone Wolf interaction is retained separately: capacity 5 and one missing grenade replenished every 45s.
- Damage examples isolate the central blast profile's armour stage, with base damage 1,500 and other hit-location, obstruction and damage modifiers excluded. They are static examples, not game measurements.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L403-L436](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L403-L436)
- [scripts/settings/talent/talent_settings_adamant.lua — L95-L100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L95-L100)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua — L93-L116](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L93-L116)
- [scripts/settings/projectile/player_projectile_templates.lua — L1053-L1082](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1053-L1082)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L377-L403](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L377-L403)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L384-L423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L384-L423)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L232-L350](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L232-L350)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L691-L814](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L691-L814)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2155-L2233](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2155-L2233)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L839-L869](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L869)
- [scripts/extension_systems/weapon/weapon_system.lua — L270-L329](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L270-L329)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L403-L436](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L403-L436)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L227-L266](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L227-L266)

## Example assumptions and limits

- **Detonation and range**: Detonates on impact after being thrown. The blast radius is 10m, with a higher-damage 2.5m centre and damage falloff toward the edge.

- **Damage example**: Isolating the central blast's armour stage, base damage 1,500 gives `1,500 × 1 = 1,500 damage` against Unarmoured, `1,500 × 0.5 = 750` against Flak Armour and `1,500 × 0.2 = 300` against Carapace Armour. Hit location, blast obstruction and other damage modifiers still affect the actual hit.

- **Capacity and replenishment**: Carry up to 4 grenades, one more than the base version's 3. Throwing one consumes one; this ability alone has no timed automatic replenishment. With Lone Wolf, capacity becomes 5 and missing grenades replenish one every 45s.

The impact fuse is zero, but collision, fixed updates and lag compensation affect actual timing. In-game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ability_adamant_grenade_improved`, hash `1502f5e7`, entry 1362: **Arbites Grenade**.
- Description key `loc_talent_ability_adamant_grenade_improved_description`, hash `6a2ea9db`, entry 6920.

Full raw template:

```text
Throw an Arbites Grenade that explodes after a short delay. {charges:%s} Max Grenades.

This is an augmented version of {talent_name:%s}.
```

The necessary display mapping uses number formatting for `talent_settings.blitz_ability.grenade.improved_charges` and a localized-string lookup for `loc_talent_ability_adamant_grenade`. That base-name key has hash `f50a5b6d`, entry 15913, and the same English name **Arbites Grenade**. The raw name identity is preserved rather than inventing a different base display label.

| Placeholder | Value | Formatting |
|---|---|---|
| charges | 4 | Number formatting |
| talent_name | Arbites Grenade | Localized lookup of the base-name key |

Static reconstruction; not an observed game screen:

```text
Throw an Arbites Grenade that explodes after a short delay. 4 Max Grenades.

This is an augmented version of Arbites Grenade.
```

## English comparison limits

The raw description does not give a fixed fuse starting at the throw. The accepted impact and safety-fuse explanation supplements its short-delay wording. No explicit English contradiction is supported. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/tactical/adamant_grenade_improved.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/9f134d52-bce2-4365-b74c-f93550febf29). The icon identifies the talent; it is not mechanism evidence.
