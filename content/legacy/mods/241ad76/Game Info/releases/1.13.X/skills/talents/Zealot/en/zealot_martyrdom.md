# Martyrdom: source evidence

[繁體中文](../zealot_martyrdom.md) | [Player description](README.md#zealot_martyrdom) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_martyrdom)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_martyrdom`; name key `loc_talent_zealot_martyrdom`; description key `loc_talent_zealot_martyrdom_desc`. Node `node_00de95af-259d-4c82-ae16-91fa3b533ed9`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The tree node attaches `zealot_martyrdom_base`. Each Buff update reads `damage_taken` and `permanent_damage_taken`, takes the larger value, and uses `Health.calculate_num_segments` with Health per segment (`max_health/max_wounds`) to calculate remaining Wounds. Missing segments are capped at 5.
- The base effect gives +10% damage per missing segment, up to 5. It scales with fully missing Health segments immediately, rather than requiring kills or manual accumulation of a timed Buff.
- The settings table contains `health_step=0.15`, but the current Buff calculation does not read it. It must not be used to claim one stack per 15% missing Health.
- The affected stat is `melee_damage`; the player description must not extend this to general Melee and Ranged Damage.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L924-L944](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L924-L944)
- [scripts/settings/talent/talent_settings_zealot.lua — L329-L339](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L329-L339)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L631-L652](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L631-L652)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L1335-L1384](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1335-L1384)
- [scripts/utilities/health.lua — L117-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L117-L127)
- [scripts/utilities/attack/damage_calculation.lua — L289-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L924-L944](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L924-L944)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1026-L1061](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1026-L1061)

## Example assumptions and limits

- **Behavior**: Each fully missing Health Wound grants 10% Melee Damage, up to 5 stacks / 50%. Healing lowers the stack count. Health occupied by Corruption also counts.
- **Wound example**: With maximum Health 200 and 4 Wounds, each segment is 50. Losing 49 Health has not removed a full segment and adds no stack. Losing 100 gives 2 stacks: base Melee Damage 100 becomes 100 × (1 + 2 × 10%) = 120.
- **Other bonuses**: At those 2 stacks with an existing same-stage 25% Melee Damage bonus, 100 × (1 + 25% + 20%) = 145. A cap of 5 does not mean every Wound count can reach full stacks while alive.

- These hypothetical values illustrate the formula. Actual segment width follows the character's current maximum Health and maximum Wounds.
- The `health_step=0.15` setting is unused by this calculation; it does not establish a 15%-missing-Health threshold.
- The accepted Chinese comparison at hash `b90da3ce` records matching missing-Wound damage direction and +10% / maximum 5 values. Segment calculation details are supplementary. Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_martyrdom`, hash `15d87f95`, entry 1420: **Martyrdom**.
- Description key `loc_talent_zealot_martyrdom_desc`, hash `b90da3ce`, entry 11925.

Full raw template:

~~~text
{damage:%s} Melee Damage for each missing Wound, up to a maximum of {max_wounds:%s} missing Wounds.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | 0.1 → +10% | `percentage`, `+` prefix; `talent_settings_2.passive_1.damage_per_step` |
| `max_wounds` | 5 | `number`; corresponding `martyrdom_max_stacks` |

The minimal display mapping at `zealot_talents.lua` L924-L940 supplies the accepted settings. The unused `health_step` is not substituted or used to reinterpret “missing Wound.”

Static reconstruction; not an observed game screen:

~~~text
+10% Melee Damage for each missing Wound, up to a maximum of 5 missing Wounds.
~~~

## English comparison

The English explicitly limits the bonus to Melee Damage and fully missing Wounds, with +10% each up to 5. These match the accepted segment-based calculation. Corruption, healing response, actual segment width, same-stage addition and the ability to reach the cap are supplementary details. No English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone/zealot_martyrdom.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/5ac2048f-e48f-49ea-b739-e9c3301e66da). The icon identifies the talent; it is not mechanism evidence.
