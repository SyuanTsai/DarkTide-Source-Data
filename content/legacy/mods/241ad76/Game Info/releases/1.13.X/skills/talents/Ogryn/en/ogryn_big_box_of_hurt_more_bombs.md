# Bigger Box of Hurt: source evidence

[繁體中文](../ogryn_big_box_of_hurt_more_bombs.md) | [Player description](README.md#ogryn_big_box_of_hurt_more_bombs) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_big_box_of_hurt_more_bombs)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_big_box_of_hurt_more_bombs`; name key `loc_talent_ogryn_big_box_of_hurt_more_bombs`; description key `loc_talent_ogryn_big_box_of_hurt_more_bombs_desc`. Node `node_28631a03-da8c-4125-8151-10ac4db22fae`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The displayed shared count is 3; the effect writes the same setting to the box cluster-count attribute.
- The cluster projectile base count is 6. Generation adds the owning player count modifier to that base.
- The tree marks this node `tactical_modifier`, parented to the exploding-box node, so it modifies the box Blitz.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2649-L2664](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2649-L2664)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3154-L3160](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3154-L3160)
- [scripts/settings/talent/talent_settings_ogryn.lua — L121-L123](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L121-L123)
- [scripts/settings/projectile/player_projectile_templates.lua — L973-L1028](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L973-L1028)
- [scripts/extension_systems/projectile_damage/projectile_damage_extension.lua — L736-L803](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L736-L803)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L2126-L2145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2126-L2145)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2649-L2664](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2649-L2664)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L2125-L2147](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2125-L2147)

## Example assumptions and limits

- **Count example**: The box normally releases 6 grenades. Selecting this talent adds 3, for a total of 6 + 3 = 9.

- **Scope**: This effect increases only the grenades released by the box; it does not grant an additional grenade ability.

- **Stacking and charges**: The talent supplies one effect and does not repeatedly accumulate from the same hit. The box still has at most 3 throw charges.

When the surprise-box keyword is active, generation chooses from multiple child projectile types; without it, ordinary cluster grenades are used. Total damage still depends on distribution, hits, blast distance, target armour and other damage modifiers. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_big_box_of_hurt_more_bombs`, hash `826be9f9`, entry 8470: **Bigger Box of Hurt**.
- Description key `loc_talent_ogryn_big_box_of_hurt_more_bombs_desc`, hash `858b20e9`, entry 8674.

Full raw template:

~~~text
{amount:%s} grenades released.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| amount | Verified shared added count 3 | Number → 3; no additional prefix in the template |

Static reconstruction; not an observed game screen:

~~~text
3 grenades released.
~~~

## English comparison

The English is read independently as a terse count modifier. Its value 3 matches the added count, while actual generation is 6 + 3 = 9. The words do not explicitly distinguish an additional count from the total released count; that textual scope remains ambiguous rather than being treated as an explicit contradiction. The player description preserves the verified total 9. Box dependency, charge limits, stacking and child variants are supplementary. This judgement does not inherit the Chinese comparison conclusion.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/tactical_modifier/ogryn_big_box_of_hurt_more_bombs.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/13c08b08-ef80-4f04-8a70-cddfa4db7389). The icon identifies the talent; it is not mechanism evidence.
