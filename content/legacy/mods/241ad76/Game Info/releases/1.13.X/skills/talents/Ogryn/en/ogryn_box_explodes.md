# Bombs Away!: source evidence

[繁體中文](../ogryn_box_explodes.md) | [Player description](README.md#ogryn_box_explodes) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_box_explodes)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_box_explodes`; name key `loc_talent_bonebreaker_grenade_super_armor_explosion`; description key `loc_talent_bonebreaker_grenade_super_armor_explosion_desc`. Node `node_3e19fd5d-9d22-4e5c-8981-be97b1de8854`; category Blitz; one point.

## Source-confirmed behavior and static derivation

- The talent selects the cluster-grenade-box ability, with maximum charges 3 and charge-only consumption.
- Collision uses the cluster-box damage profile, whose parent attack distribution is 1850. Standard PowerLevel 500 has output multiplier 1; the close Carapace modifier is 0.15, giving the isolated direct-impact example 277.5.
- Impact creates 6 child grenades plus the additional-count modifier of 3 when selected. Child index `i` overrides the fuse range to `0.8 + 0.4i` through `0.8 + 0.8i` seconds. All child projectiles are created in one loop; the index changes fuses, not sequential spawn delay.
- Ordinary child blasts use radius 8m and close radius 2m. With the surprise-box keyword, cluster generation can use the listed krak, fire, frag, smoke or shock projectiles.
- The ordinary close cluster profile has attack distribution 10, Unarmoured modifier 1 and Carapace modifier 0.2. Box 1850 and child 10 are distinct profiles.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1174-L1198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1174-L1198)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L152-L163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L152-L163)
- [scripts/settings/projectile/player_projectile_templates.lua — L973-L1028](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L973-L1028)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L736-L803](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L736-L803)
- [scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua — L103-L203](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/grenade_damage_profile_templates.lua#L103-L203)
- [scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua — L464-L510](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L464-L510)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua — L336-L348](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L336-L348)
- [scripts/settings/damage/power_level_settings.lua — L7-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L25)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1174-L1198](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1174-L1198)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L330-L357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L330-L357)

## Example assumptions and limits

- **Hit and release**: The grenade box breaks open after hitting an enemy and releases 6 grenades. With Bigger Box of Hurt, the count is 6 + 3 = 9.

- **Direct-hit example**: At standard PowerLevel 500, close range and without other modifiers, the box's direct collision against Carapace Armour deals 1850 × 0.15 = 277.5 damage. This counts only the box impact, excluding the released grenades.

- **Released-grenade fuses**: With 6 grenades, the first detonates about 1.2–1.6s after release and the sixth about 3.2–5.6s. With 9 grenades, the ninth has a configured range of 4.4–8.0s.

- **Charges**: Carry up to 3 boxes; each throw consumes one charge. The ability has no fixed automatic cooldown, so missing charges must come from supplies or other recovery effects.

- **Child-grenade example**: Ordinary child grenades have an 8m blast radius and 2m centre. Excluding other modifiers, each central blast deals 10 × 1 = 10 to Unarmoured or 10 × 0.2 = 2 to Carapace. Six central hits on the same Unarmoured target total 60. The box's 1850 damage is not copied to each grenade.

The direct-impact example excludes child explosions. Total damage depends on distribution, each blast distance, armour, hit location and target state. Fuse ranges are static derivations; server update timing and special projectile types affect in-game presentation. Values and behavior reuse the verified fixed-version evidence. English and code sources both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_bonebreaker_grenade_super_armor_explosion`, hash `173a91dc`, entry 1520: **Bombs Away!**.
- Description key `loc_talent_bonebreaker_grenade_super_armor_explosion_desc`, hash `a06fe566`, entry 10368.

Full raw template:

~~~text
Throw a box of grenades with great strength and enthusiasm to deal high Damage to a Single Enemy.

Hitting an Enemy causes the box to break open, releasing {num_grenades:%s} grenades around the target.

This is an augmented version of {talent_name%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| num_grenades | ogryn_grenade_box_cluster.damage.impact.cluster.number = 6 | Number → 6 |
| talent_name | loc_ability_ogryn_grenade_box | Localized lookup → Big Box of Hurt |

Base-name key `loc_ability_ogryn_grenade_box`, hash `848c694f`, entry 8617, is **Big Box of Hurt**. The raw `{talent_name%s}` spelling lacks a colon and is preserved above. The following expected substitution uses the provided map; final rendering has not been observed.

Expected static substitution; not an observed game screen:

~~~text
Throw a box of grenades with great strength and enthusiasm to deal high Damage to a Single Enemy.

Hitting an Enemy causes the box to break open, releasing 6 grenades around the target.

This is an augmented version of Big Box of Hurt.
~~~

## English comparison

The independently read English agrees with direct single-target box damage followed by an enemy-hit release of 6 grenades and the augmented base-box identity. Charges, the extra 3 grenades, direct/child damage examples, fuse ranges and variant projectiles are supplementary. The unusual raw base-name placeholder's final rendering remains unconfirmed; no formatter tracing was added. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/tactical/ogryn_box_explodes.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/a7e97984-e57a-4028-ab1b-6e89a0e42fdf). The icon identifies the talent; it is not mechanism evidence.
