# Disdain: source evidence

[繁體中文](../zealot_multi_hits_increase_damage.md) | [Player description](README.md#zealot_multi_hits_increase_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_multi_hits_increase_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_multi_hits_increase_damage`; name key `loc_talent_zealot_3_tier_2_ability_1`; description key `loc_talent_zealot_3_tier_2_ability_1_description`. Node `node_88dfd7e8-94f2-4d58-8bfa-06e53dca3286`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_sweep_finish` directly stores `params.num_hit_units` in `hits`. `lerp=clamp(hits/5,0,1)` sets `melee_damage` up to `.05×5=.25`. There is no duration and no code progressively strengthening the current sweep as each hit occurs; the value used for the next attack is replaced only when the sweep ends.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L1136-L1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1136-L1179)
- [scripts/settings/talent/talent_settings_zealot.lua — L485-L488](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L485-L488)
- [scripts/utilities/attack/damage_calculation.lua — L289-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1397-L1417](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1397-L1417)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L96-L121](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L96-L121)

## Example assumptions and limits

- **Operation**: Each enemy hit by the previous Melee sweep adds 5% damage to the next Melee attack, counting at most 5 enemies for +25%.
- **Updates**: Recalculate from the latest sweep's hit count, without accumulating across sweeps. After the next sweep misses, the bonus becomes zero.
- **Damage example**: With no other bonuses, 3 enemies hit by the previous attack make the next attack's 100 become 100 × (1 + 3 × 5%) = 115. Five or more give 125.

- The accepted Chinese comparison at hash `e1fe6b4c` finds no explicit effect-direction contradiction for the same description key/hash. Unlisted formulas, caps or finer restrictions are supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_3_tier_2_ability_1`, hash `0153ea4d`, entry 76: **Disdain**.
- Description key `loc_talent_zealot_3_tier_2_ability_1_description`, hash `e1fe6b4c`, entry 14656.

Full raw template:

~~~text
{damage:%s} Damage on your next Melee Attack for each Enemy Hit. Stacks {max_stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | 0.05 → +5% | `percentage`, `+` prefix; `talent_settings_3.offensive_1.melee_damage` |
| `max_stacks` | 5 | `value`; corresponding `max_stacks` |

The minimal display mapping at `zealot_talents.lua` L1397-L1412 supplies the accepted per-enemy bonus and maximum count.

Static reconstruction; not an observed game screen:

~~~text
+5% Damage on your next Melee Attack for each Enemy Hit. Stacks 5 times.
~~~

## English comparison

The English specifies +5% damage on the **next** Melee attack for each enemy hit, stacking five times. This matches the accepted sweep-finish count applied to the following attack, capped at +25%. It does not promise increasing damage during the current sweep. Replacing the count each sweep, clearing it after a miss, lack of timed duration and the preserved 100→115/125 example supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_multi_hits_increase_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/69a5f7ea-11bc-41ae-8758-86a14213a116). The icon identifies the talent; it is not mechanism evidence.
