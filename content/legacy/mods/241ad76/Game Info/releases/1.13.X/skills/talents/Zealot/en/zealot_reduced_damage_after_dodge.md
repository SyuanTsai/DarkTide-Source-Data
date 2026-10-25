# Good Balance: source evidence

[繁體中文](../zealot_reduced_damage_after_dodge.md) | [Player description](README.md#zealot_reduced_damage_after_dodge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_reduced_damage_after_dodge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_reduced_damage_after_dodge`; name key `loc_talent_reduced_damage_after_dodge`; description key `loc_talent_reduced_damage_after_dodge_description`. Node `node_7ee3c5f1-cc73-412b-9e62-f013af339bc4`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The `proc_buff` triggers on `on_successful_dodge`, with `active_duration = 2.5` and `damage_taken_multiplier = 0.75`.
- The talent definition incorrectly applies `round((1 - value) × 100)` to the duration. For 2.5, this gives −150. This is a fixed-source formatting question, without an in-game screen; it is neither a Chinese mistranslation nor evidence that players actually see −150 seconds.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4435-L4451](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4435-L4451)
- [scripts/utilities/attack/damage_calculation.lua — L590-L610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L590-L610)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L173-L184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L184)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2724-L2763](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2724-L2763)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L834-L862](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L834-L862)

## Example assumptions and limits

- **Operation**: Successfully dodging an attack reduces damage taken by 25% for 2.5 seconds; another successful Dodge restarts the timer.
- **Damage example**: Damage of 100 becomes 100 × 0.75 = 75. With another independent 40% reduction, it becomes 100 × 0.75 × 0.6 = 45.

- The duration-formatting question requires in-game display confirmation. The player explanation follows the implemented 2.5 seconds.
- The accepted Chinese comparison at hash `d65317f7` finds no explicit effect-direction contradiction. Omitted formulas, caps and finer restrictions remain supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_reduced_damage_after_dodge`, hash `027aafc6`, entry 158: **Good Balance**.
- Description key `loc_talent_reduced_damage_after_dodge_description`, hash `d65317f7`, entry 13869.

Full raw template:

~~~text
A successful Dodge grants {damage:%s} Damage Reduction for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | 0.75 → round((1 − 0.75) × 100) = 25 → +25% | `percentage`, prefix `+`, explicit manipulation; `zealot_damage_reduction_after_dodge.proc_stat_buffs.damage_taken_multiplier` |
| `duration` | 2.5 → round((1 − 2.5) × 100) = −150 | `value`, explicit manipulation; `zealot_damage_reduction_after_dodge.active_duration` |

The minimal display mapping at `zealot_talents.lua` L2724-L2763 retains the accepted formatting concern. Reuse the known formatter rule: explicit value manipulation supplies the display number directly without another multiplication by 100. The following is a static reconstruction from that mapping, not a claim about an observed game screen or implemented duration.

Static reconstruction; not an observed game screen:

~~~text
A successful Dodge grants +25% Damage Reduction for -150s.
~~~

## English comparison

The English explicitly gives Damage Reduction after a successful Dodge; its 25% reduction agrees with the accepted 0.75 multiplier. The fixed mapping reconstructs −150 seconds because of the duration manipulation, while the accepted effect lasts 2.5 seconds. Keep this as Cannot confirm for actual English display, with the static discrepancy recorded; do not claim players saw it. Timer refresh, independent multiplication and the original 100→75/45 examples supplement the template.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_reduced_damage_after_dodge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/41e85f89-6787-4fe4-9fd7-a2382f2aa025). The icon identifies the talent; it is not mechanism evidence.
