# Delight in Destruction: source evidence

[繁體中文](../ogryn_nearby_bleeds_reduce_damage_taken.md) | [Player description](README.md#ogryn_nearby_bleeds_reduce_damage_taken) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_nearby_bleeds_reduce_damage_taken)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_nearby_bleeds_reduce_damage_taken`; name key `loc_talent_ogryn_damage_reduction_per_bleed`; description key `loc_talent_ogryn_damage_reduction_per_bleed_desc`. Node `node_dd4eee73-3ed9-46e9-be35-e7e4860f0ed8`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- An 8m broadphase search checks enemies for the `bleeding` keyword without checking its owner. `lerp = clamp(n / 6, 0, 1)` interpolates `damage_taken_multiplier` from 1 to 0.7. The count is updated every 1s.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1496-L1570](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1496-L1570)
- [scripts/settings/talent/talent_settings_ogryn.lua — L349-L354](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L349-L354)
- [scripts/settings/damage/damage_settings.lua — L18-L27](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L27)
- [scripts/utilities/attack/damage_calculation.lua — L587-L612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L838-L861](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L838-L861)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L681-L708](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L681-L708)

## Example assumptions and limits

- **Condition**: Each bleeding enemy within 8m reduces the damage you take by 5%, counting at most 6 enemies. Bleed applied by teammates also qualifies; multiple Bleed stacks on one enemy still count as one enemy.

- **Damage-reduction example**: Three enemies grant 15% reduction, turning damage of 100 into 85. Six or more give `100 × (1 − 30%) = 70`. With another independent 20% reduction, it becomes `100 × 0.7 × 0.8 = 56`.

- **Updates**: Nearby bleeding enemies are recounted about once per second. Their contribution disappears after death, Bleed ending or leaving range.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_damage_reduction_per_bleed`, hash `3984145b`, entry 3730: **Delight in Destruction**.
- Description key `loc_talent_ogryn_damage_reduction_per_bleed_desc`, hash `2f439ba8`, entry 3077.

Full raw template:

~~~text
{damage_reduction:%s} Damage Resistance per Bleeding Enemy in Melee range. Stacks {max_stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage_reduction | (1 − defensive_1.max) / defensive_1.max_stacks = (1 − 0.7) / 6 = 0.05 | math_round(value × 100); percentage with explicit + prefix → +5% |
| max_stacks | defensive_1.max_stacks = 6 | Number → 6 |

Only the missing display mapping in the cited talent definition, lines 838–861, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+5% Damage Resistance per Bleeding Enemy in Melee range. Stacks 6 times.
~~~

## English comparison

The independently read English specifies +5% damage resistance per bleeding enemy in melee range, stacking six times. This agrees with the accepted per-enemy reduction and six-enemy cap. The numerical 8m radius clarifies the unspecified melee range; Bleed ownership, enemy rather than Bleed-stack counting, one-second updates and combined-reduction examples supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_nearby_bleeds_reduce_damage_taken.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/669fb8b0-a444-4216-abe1-74f4acc4af85). The icon identifies the talent; it is not mechanism evidence.
