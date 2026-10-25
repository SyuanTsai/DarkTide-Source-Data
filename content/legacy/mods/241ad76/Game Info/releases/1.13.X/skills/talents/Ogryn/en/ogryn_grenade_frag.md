# Frag Bomb: source evidence

[繁體中文](../ogryn_grenade_frag.md) | [Player description](README.md#ogryn_grenade_frag) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_grenade_frag)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_grenade_frag`; name key `loc_ability_ogryn_grenade_demolition`; description key `loc_ability_ogryn_grenade_demolition_instakill_desc`. Node `node_4b421360-1595-4f94-bcf1-e4a715b9dbca`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Maximum charges 1, with charge-only consumption. The projectile has normal fuse 2s, impact fuse 0.9s and minimum lifetime 0.6s.
- `ProjectileDamageExtension` advances `life_time + dt`. A collision sets `_reset_time` to clear the timer; `_has_impacted` selects 0.9s. Minimum lifetime 0.6s is the activation-check threshold; detonation still compares the same `new_life_time > 0.9`, rather than adding 0.9s after 0.6s. Without impact it uses 2s; lag compensation also applies.
- Explosion radius 16m, close radius 2m, damage falloff enabled and explosion PowerLevel 500. The close profile attack distribution is 1500; standard PowerLevel 500 gives output multiplier 1. Armour interpolation and Power are separate parameters. Unarmoured modifier 1; Carapace attack modifier range 0.8–1.25, whose midpoint 1.025 gives 1537.5 in the example.
- The instant-kill flag excludes Monstrosities, Captains and Ogryns. This agrees with the independently read English restriction to human-sized, non-Captain enemies.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L255-L295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L255-L295)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L128-L139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L128-L139)
- [scripts/settings/projectile/player_projectile_templates.lua — L144-L160](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L144-L160)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L207-L210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L207-L210)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L232-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L232-L279)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L633-L664](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L633-L664)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L321-L363](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L321-L363)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L291-L310](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L291-L310)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L92-L111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L92-L111)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L1540-L1578](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1540-L1578)
- [scripts/settings/damage/power_level_settings.lua — L7-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/utilities/attack/power_level.lua — L21-L23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [scripts/utilities/attack/damage_profile.lua — L379-L445](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L379-L445)
- [scripts/utilities/attack/attack.lua — L249-L268](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L249-L268)
- [scripts/utilities/attack/damage_profile.lua — L345-L383](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L345-L383)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L255-L295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L255-L295)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L358-L384](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L358-L384)

## Example assumptions and limits

- **Blast distance**: Within 2m of the centre, the blast uses the close-range damage settings. From 2m to 16m, outer blast falloff applies.

- **Damage example**: Counting only ordinary damage within the central 2m, at standard Power and without other modifiers, the Unarmoured portion is 1500 × 1 = 1500. With the midpoint Carapace modifier 1.025, it is 1500 × 1.025 = 1537.5. Enemies eligible for the instant-kill effect are handled separately.

- **Fuse timing**: Without a collision, the grenade detonates after about 2s. A collision resets the timer and switches to the approximately 0.9s impact fuse. Repeated bounces can reset it again; 2s is not a fixed detonation time for every throw.

- **Supply and instant kills**: Carry at most 1 grenade, replenished through grenade supplies rather than automatically over time. A blast hit instantly kills eligible ordinary enemies; Monstrosities, Captains and Ogryns are excluded.

Damage examples use only ordinary damage in the close central zone, standard PowerLevel 500, and no other buffs, weakspot or hit-location modifiers. Outer blast damage falls off; instant-kill effects are separate. The special-enemy list and every hit location have not been verified in game. Timing follows fixed updates, collision moments and server synchronization; these static ranges do not claim millisecond-accurate detonation. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_ability_ogryn_grenade_demolition`, hash `7212deb4`, entry 7416: **Frag Bomb**.
- Description key `loc_ability_ogryn_grenade_demolition_instakill_desc`, hash `802d500b`, entry 8326.

Full raw template:

~~~text
Throw an Ogryn-sized (the only proper kind!) frag grenade with a {radius:%s}m blast radius, dealing increased Damage at the centre. Human-sized, Non-Captain enemies, are always killed.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| radius | Verified explosion radius 16 | Number → 16; the template supplies m |

Static reconstruction; not an observed game screen:

~~~text
Throw an Ogryn-sized (the only proper kind!) frag grenade with a 16m blast radius, dealing increased Damage at the centre. Human-sized, Non-Captain enemies, are always killed.
~~~

## English comparison

The English independently specifies a 16m blast with stronger central damage and instant kills for human-sized, non-Captain enemies. Those statements agree with the accepted radius and exclusions. The central 2m boundary, ordinary damage examples, armour interpolation, capacity and collision-dependent fuse rules supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/tactical/ogryn_grenade_frag.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/ce691c05-0701-4539-921b-620c90189fa2). The icon identifies the talent; it is not mechanism evidence.
