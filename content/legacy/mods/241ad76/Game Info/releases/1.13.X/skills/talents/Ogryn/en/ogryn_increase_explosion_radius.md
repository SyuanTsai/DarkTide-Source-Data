# Big Boom: source evidence

[繁體中文](../ogryn_increase_explosion_radius.md) | [Player description](README.md#ogryn_increase_explosion_radius) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_increase_explosion_radius)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_increase_explosion_radius`; name key `loc_talent_ogryn_increase_explosion_radius`; description key `loc_talent_ogryn_increase_explosion_radius_desc`. Node `node_1af9b61a-cb71-4510-9513-f46c0d73a4b0`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `explosion_radius_modifier=0.275`. `Explosion._calculate_radii` applies the accumulated modifier to both `radius` and `close_radius`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L761-L768](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L761-L768)
- [scripts/utilities/attack/explosion.lua — L470-L503](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L470-L503)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1824-L1847](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1824-L1847)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1129-L1154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1129-L1154)

## Example assumptions and limits

- **Effect**: Increase both an explosion's outer radius and its central high-damage radius by 27.5%. This does not directly increase the damage value of each explosion.

- **Area example**: An original radius of 4m becomes `4 × 1.275 = 5.1m`. Assuming an unobstructed planar circle, area becomes `1.275² ≈ 1.626` times the original, an increase of about 62.6%.

- **Combination**: Other explosion-radius bonuses at the same stage add together. Terrain obstruction and the explosion's own hit detection still affect actual coverage.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_increase_explosion_radius`, hash `515cf8be`, entry 5288: **Big Boom**.
- Description key `loc_talent_ogryn_increase_explosion_radius_desc`, hash `15f7867d`, entry 1427.

Full raw template:

~~~text
Increase explosion radius by {explosion_radius:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| explosion_radius | stat_buffs.explosion_radius_modifier = 0.275 | Percentage with explicit + prefix → +27.5% |

Only the missing display mapping in the cited talent definition, lines 1824–1847, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Increase explosion radius by +27.5%.
~~~

## English comparison

The independently read English increases explosion radius by +27.5%, matching the accepted radius modifier. It makes no claim of directly increasing explosion damage. Applying the modifier to both radii, adding same-stage bonuses and the unobstructed-circle area calculation supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_increase_explosion_radius.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/c6421034-209b-4fab-857d-541fa0667d8b). The icon identifies the talent; it is not mechanism evidence.
