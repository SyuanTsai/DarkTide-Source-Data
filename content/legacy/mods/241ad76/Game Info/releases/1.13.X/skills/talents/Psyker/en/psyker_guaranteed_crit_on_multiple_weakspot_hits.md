# True Aim: source evidence

[繁體中文](../psyker_guaranteed_crit_on_multiple_weakspot_hits.md) | [Player description](README.md#psyker_guaranteed_crit_on_multiple_weakspot_hits) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_guaranteed_crit_on_multiple_weakspot_hits)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_guaranteed_crit_on_multiple_weakspot_hits`; name key `loc_talent_psyker_weakspot_grants_crit`; description key `loc_talent_psyker_weakspot_grants_crit_once_description`. Node `node_9674b583-7566-4f0c-a334-99e83f4715b2`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- After `on_weakspot_hit`, `damage <= 0` is excluded. Repeated events with the same `attack_instigator_unit` are deduplicated; the non-projectile branch excludes `target_index > 1`.
- At five stacks, `guaranteed_ranged_critical_strike` is enabled. The active effect finishes only when it receives a ranged `on_critical_strike` event; there is no ordinary `duration` countdown.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3073-L3137](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3073-L3137)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1072-L1093](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1072-L1093)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L992-L1018](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L992-L1018)

## Example assumptions and limits

- **Effect**: after accumulating 5 valid Weakspot Hits that deal damage, the next Ranged Attack is guaranteed to be Critical and consumes this accumulated effect.

- **Accumulation limits**: repeated hits by the same projectile and later enemies cleaved by one attack cannot all be counted as an additional stack.

- **Example**: from 0 stacks, five separately valid Weakspot Hits give 1 → 2 → 3 → 4 → 5 stacks. The following Ranged Critical Strike consumes this effect. Critical Damage still depends on the weapon, hit location and target; it is not a fixed doubling.

Whether an automatic weapon retains the same critical sequence depends on its shared critical settings. One consumption does not necessarily mean only one bullet. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_weakspot_grants_crit`, hash `702479a6`, entry 7284: **True Aim**.
- Description key `loc_talent_psyker_weakspot_grants_crit_once_description`, hash `2341fb06`, entry 2295.

Full raw template:

~~~text
Landing {weakspot_hits:%s} Weakspot Hits grants your next Ranged Attack a guaranteed Critical. Can only trigger once per Attack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `weakspot_hits` | `5` | number → `5` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1077-L1088) reads the verified `max_stacks` of 5. Shared number formatting is reused.

Static reconstruction; not an observed game screen:

~~~text
Landing 5 Weakspot Hits grants your next Ranged Attack a guaranteed Critical. Can only trigger once per Attack.
~~~

## English comparison

The English threshold, next-Ranged-Attack reward and once-per-Attack limit agree with the existing ordinary event behavior. It omits the positive-damage test, exact projectile/non-projectile counting rules, consumption event, absence of a countdown and weapon-specific critical-sequence behavior. These are supplements, not an explicit promise of one stack per projectile hit or a fixed double-damage shot.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_guaranteed_crit_on_multiple_weakspot_hits.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/4b242d12-87d5-44a8-a2aa-4c1a0f3a2376). The icon identifies the talent; it is not mechanism evidence.
