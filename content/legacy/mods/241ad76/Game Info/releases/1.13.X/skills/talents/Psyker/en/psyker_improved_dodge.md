# Anticipation: source evidence

[繁體中文](../psyker_improved_dodge.md) | [Player description](README.md#psyker_improved_dodge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_improved_dodge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_improved_dodge`; name key `loc_talent_psyker_improved_dodge`; description key `loc_talent_psyker_improved_dodge_description`. Node `node_1c28e8f1-c647-401d-80f1-38263a6b616b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `extra_consecutive_dodges = 1` is added directly to `diminishing_return_start`.
- `dodge_linger_time_modifier = 0.5` is an additive modifier used for the Dodge linger time.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3065-L3072](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3065-L3072)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua — L139-L158](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L139-L158)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua — L246-L261](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L246-L261)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1515-L1549](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1515-L1549)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L881-L907](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L881-L907)

## Example assumptions and limits

- **Effect**: gain 1 additional Effective Dodge and increase the protection linger time after the dodge action ends by 50%.

- **Example**: a weapon with 3 consecutive Effective Dodges gains 3 + 1 = 4. If the original linger time was 0.2 seconds, it becomes 0.2 × 1.5 = 0.3 seconds; this does not mean the entire dodge action lasts 50% longer.

#### Existing Traditional Chinese text correction

- The Traditional Chinese wording says the Effective Dodge count increases to the specified number, treating the bonus as a new total. The English says to increase the count by that number; the verified effect adds 1 to the existing count, rather than allowing only 1 dodge in total.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_improved_dodge`, hash `3a1d92bc`, entry 3763: **Anticipation**.
- Description key `loc_talent_psyker_improved_dodge_description`, hash `b7dff1d2`, entry 11860.

Full raw template:

~~~text
Increase Effective Dodges by {extra_consecutive_dodges:%s} and time considered Dodging by {dodge_linger_time:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `extra_consecutive_dodges` | `1` | number → `1` |
| `dodge_linger_time` | `0.5` | percentage, `+` prefix → `+50%` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1520-L1542) selects the verified extra-dodge and linger-time stats. Shared number and percentage formatting is reused.

Static reconstruction; not an observed game screen:

~~~text
Increase Effective Dodges by 1 and time considered Dodging by +50%.
~~~

## English comparison

The English “Increase Effective Dodges by 1” agrees with an additional dodge, rather than replacing the total with 1. The time field maps to dodge linger time; the English does not specify the exact phase of protection or claim the entire action animation is extended. That phase distinction is a supplement.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_improved_dodge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/80b2261c-4df6-4531-b9c1-bf67fbbbdcee). The icon identifies the talent; it is not mechanism evidence.
