# Bleed for the Emperor: source evidence

[繁體中文](../zealot_reduced_damage_on_wound.md) | [Player description](README.md#zealot_reduced_damage_on_wound) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_reduced_damage_on_wound)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_reduced_damage_on_wound`; name key `loc_talent_zealot_3_tier_3_ability_2`; description key `loc_talent_zealot_3_tier_3_ability_2_description`. Node `node_a5510705-1db7-4086-aa35-04833ebb8527`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The keyword `health_segment_breaking_reduce_damage_taken` enables the segment check; `health_segment_damage_taken_multiplier = 0.6` supplies the multiplier.
- The condition is strictly `current_segment_health < health_damage`. If true, multiply the entire Health-damage amount by 0.6, not just the portion beyond the threshold.
- This is a threshold-crossing condition, not a flat reduction determined by the number of missing Wounds.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L752-L763](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L752-L763)
- [scripts/settings/talent/talent_settings_zealot.lua — L503-L505](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L503-L505)
- [scripts/utilities/attack/damage_taken_calculation.lua — L366-L393](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L366-L393)
- [scripts/utilities/health.lua — L129-L136](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L129-L136)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3099-L3114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3099-L3114)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L373-L398](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L373-L398)

## Example assumptions and limits

- **Operation**: If incoming Health damage would take Health below the next Wound threshold, that entire Health-damage amount is reduced by 40%.
- **Damage example**: Maximum Health 200 with 4 Wounds gives 50 Health per segment. At 120 Health, the next threshold is 100. Incoming Health damage 30 crosses that threshold, so it becomes 30 × 0.6 = 18, leaving 102 Health.
- **Boundary**: Incoming damage 20 from 120 Health lands exactly at 100 and does not trigger this reduction.

- The accepted threshold test is strict. The English phrase “to the next Wound” does not explicitly define equality, so the exact-threshold exception is retained as a supplement rather than a clear English erratum.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_3_tier_3_ability_2`, hash `8391b055`, entry 8563: **Bleed for the Emperor**.
- Description key `loc_talent_zealot_3_tier_3_ability_2_description`, hash `4cc48983`, entry 4988.

Full raw template:

~~~text
Damage that would take your Health to the next Wound is reduced by {damage_reduction:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage_reduction` | 1 − 0.6 = 0.4 → 40% | `percentage`; `1 - talent_settings_3.defensive_2.health_segment_damage_taken_multiplier` |

The minimal display mapping at `zealot_talents.lua` L3099-L3114 supplies the accepted inverse damage-taken multiplier. `[Narrative]` is resource metadata outside the raw text.

Static reconstruction; not an observed game screen:

~~~text
Damage that would take your Health to the next Wound is reduced by 40%.
~~~

## English comparison

The English associates 40% reduction with damage reaching the next Wound, agreeing with the accepted segment-crossing effect and amount. “To the next Wound” leaves the equality boundary unspecified; it does not clearly promise activation when damage merely lands exactly on the threshold. The strict test, reduction of the entire damage amount and independence from the number of missing Wounds are supplementary details, with no explicit English contradiction established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_reduced_damage_on_wound.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/ba989f49-6c6c-4457-bc33-f09ab8342c1f). The icon identifies the talent; it is not mechanism evidence.
