# Faith's Fortitude: source evidence

[繁體中文](../zealot_additional_wounds.md) | [Player description](README.md#zealot_additional_wounds) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_additional_wounds)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_additional_wounds`; name key `loc_talent_zealot_3_tier_1_ability_3`; description key `loc_talent_zealot_3_tier_1_ability_3_description`. Node `node_5b313422-552e-4e6c-b89c-d35acad88fc9`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `extra_max_amount_of_wounds = 2`; `max_wounds` adds the extra amount to the base count, without a `max_health` bonus.
- Health per Wound segment is `max_health / max_wounds`. Changing the number of Wounds also changes other talents' Wound-based conditions.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L1120-L1128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1120-L1128)
- [scripts/settings/talent/talent_settings_zealot.lua — L482-L484](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L482-L484)
- [scripts/extension_systems/health/player_unit_health_extension.lua — L422-L427](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/player_unit_health_extension.lua#L422-L427)
- [scripts/utilities/health.lua — L129-L136](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L129-L136)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2804-L2820](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2804-L2820)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1000-L1025](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1000-L1025)

## Example assumptions and limits

- **Operation**: Adds 2 to maximum Wounds while leaving maximum Health unchanged; the same Health is divided into more segments.
- **Wound example**: With maximum Health 200 and originally 2 Wounds, each segment has 200 ÷ 2 = 100 Health. Taking the talent gives 4 Wounds, each with 200 ÷ 4 = 50 Health. It does not increase Health to 400.

- The accepted Chinese comparison at hash `029afb2e` finds no explicit effect-direction contradiction. Omitted formulas, caps and finer restrictions remain supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_3_tier_1_ability_3`, hash `6f7a7374`, entry 7243: **Faith's Fortitude**.
- Description key `loc_talent_zealot_3_tier_1_ability_3_description`, hash `029afb2e`, entry 165.

Full raw template:

~~~text
{health_segment:%s} Wounds.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `health_segment` | 2 → +2 | `value`, prefix `+`; `talent_settings_3.mixed_3.extra_max_amount_of_wounds` |

The minimal display mapping at `zealot_talents.lua` L2804-L2820 was read with the preceding batch and supplies the accepted extra Wound count. `[Narrative]` is metadata outside the raw text.

Static reconstruction; not an observed game screen:

~~~text
+2 Wounds.
~~~

## English comparison

The English adds 2 Wounds and makes no maximum-Health claim, agreeing with the accepted extra count. Keeping maximum Health unchanged, dividing Health into more segments and changing other Wound-based conditions supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_additional_wounds.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/793e953e-5b99-416a-99c8-c6d185df7cc9). The icon identifies the talent; it is not mechanism evidence.
