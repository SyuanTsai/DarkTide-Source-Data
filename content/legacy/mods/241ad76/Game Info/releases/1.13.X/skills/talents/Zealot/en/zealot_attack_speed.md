# Faithful Frenzy: source evidence

[繁體中文](../zealot_attack_speed.md) | [Player description](README.md#zealot_attack_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_attack_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_attack_speed`; name key `loc_talent_zealot_attack_speed`; description key `loc_talent_zealot_speed_desc`. Node `node_81b042fd-5ffb-4317-917d-8ea465181053`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Permanently grants `melee_attack_speed +0.1` and `movement_speed +0.05`.
- `ActionHandler` adds bonuses specified by each weapon action's `time_scale_stat_buffs`, then divides time by the combined speed. A 10% attack-speed bonus is not a 10% reduction in action time.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L1385-L1392](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1385-L1392)
- [scripts/settings/talent/talent_settings_zealot.lua — L340-L343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L340-L343)
- [scripts/utilities/action/action_handler.lua — L356-L429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1434-L1456](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1434-L1456)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L944-L972](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L944-L972)

## Example assumptions and limits

- **Operation**: Permanently grants +10% Melee Attack Speed and +5% Movement Speed.
- **Speed example**: Counting only this talent, an affected 1-second Melee action becomes 1 ÷ 1.1 ≈ 0.909 seconds; base Movement Speed 5 metres/second becomes 5 × 1.05 = 5.25 metres/second. Other same-stage attack-speed bonuses are added first, then action time is calculated from the total speed multiplier.

- Examples exclude other speed modifiers and time-scaling caps. They do not guarantee that every weapon's entire combo shortens by 9.09%.
- The accepted Chinese comparison at hash `6513bf51` finds no explicit effect-direction contradiction. Omitted formulas, caps and finer restrictions remain supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_attack_speed`, hash `292b37d4`, entry 2668: **Faithful Frenzy**.
- Description key `loc_talent_zealot_speed_desc`, hash `6513bf51`, entry 6576.

Full raw template:

~~~text
{attack_speed:%s} Melee Attack Speed. {movement_speed:%s} Movement Speed.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `attack_speed` | 0.1 → +10% | `percentage`, prefix `+`; `talent_settings_2.passive_3.melee_attack_speed` |
| `movement_speed` | 0.05 → +5% | `percentage`, prefix `+`; `talent_settings_2.passive_3.movement_speed` |

The minimal display mapping at `zealot_talents.lua` L1434-L1456 was read with the preceding batch and supplies the accepted speed bonuses. `[Writer]` is metadata outside the raw text.

Static reconstruction; not an observed game screen:

~~~text
+10% Melee Attack Speed. +5% Movement Speed.
~~~

## English comparison

The English names +10% Melee Attack Speed and +5% Movement Speed without a trigger or timer, matching the permanent accepted stats. It does not promise 10% shorter action time. Per-action eligibility, same-stage addition, reciprocal action-time calculation and the original movement-speed example supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_attack_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/c184be29-e45d-4968-acc5-ae67779d90cc). The icon identifies the talent; it is not mechanism evidence.
