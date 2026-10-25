# Shield of Contempt: source evidence

[繁體中文](../zealot_ally_damage_taken_reduced.md) | [Player description](README.md#zealot_ally_damage_taken_reduced) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_ally_damage_taken_reduced)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_ally_damage_taken_reduced`; name key `loc_talent_zealot_3_tier_4_ability_3`; description key `loc_talent_zealot_3_tier_4_ability_3_description`. Node `node_101154ca-57f6-45a4-beea-41dcd21be41f`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `Damage` broadcasts `on_damage_taken` to `side.valid_player_units`. This template checks only `params.damage_amount > 0`; it has no Coherency, distance or holder-equality check, and applies the defensive Buff to `params.attacked_unit`. Toughness-only damage with zero Health damage does not qualify.
- The template has `cooldown = 8` and no `active_duration`; the child effect has `duration = 4`. These timers are separate, so the interval is not 4 + 8 = 12 seconds.
- The child effect has `damage_taken_multiplier = 0.4` and no `max_stacks`. Independent applications by multiple holders must be treated using the shared multiplicative instance rules.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L527-L568](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L527-L568)
- [scripts/settings/talent/talent_settings_zealot.lua — L519-L523](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L519-L523)
- [scripts/utilities/attack/damage.lua — L154-L180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L154-L180)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L150-L184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L184)
- [scripts/utilities/attack/damage_calculation.lua — L590-L610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L590-L610)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L3149-L3173](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3149-L3173)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L569-L595](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L569-L595)

## Example assumptions and limits

- **Operation**: After you or an ally takes Health damage, the injured player gains 60% damage reduction for 4 seconds. The triggering damage has already been resolved and is not retroactively reduced by this new effect.
- **Cooldown**: Each Zealot holding this talent shares one 8-second trigger cooldown across recipients. Another ally taking damage during that cooldown cannot receive a new application from that same holder.
- **Damage example**: Counting only this effect, subsequent damage of 100 becomes 100 × 0.4 = 40. A trigger at second 0 gives an effect ending around second 4 and can trigger again around second 8.

- Both local Chinese and English specify Coherency, while the accepted fixed execution path has no Coherency check. Text and code are both from 1.13.1. This is a scope difference between sources, not a Chinese-only translation error; the actual game range remains unobserved.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_3_tier_4_ability_3`, hash `3c826469`, entry 3942: **Shield of Contempt**.
- Description key `loc_talent_zealot_3_tier_4_ability_3_description`, hash `96972711`, entry 9737.

Full raw template:

~~~text
When you or an Ally in Coherency takes damage, they gain {damage_reduction:%s} Damage Reduction for {duration:%s}s. Triggers every {cooldown:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage_reduction` | 1 − 0.4 = 0.6 → +60% | `percentage`, prefix `+`; `1 - talent_settings_3.coop_3.damage_taken_multiplier` |
| `duration` | 4 → 4 | `value`; `talent_settings_3.coop_3.duration` |
| `cooldown` | 8 → 8 | `value`; `talent_settings_3.coop_3.cooldown_duration` |

The minimal display mapping at `zealot_talents.lua` L3149-L3173 supplies the accepted inverse multiplier, child duration and trigger cooldown. `[Narrative]` is metadata outside the raw text.

Static reconstruction; not an observed game screen:

~~~text
When you or an Ally in Coherency takes damage, they gain +60% Damage Reduction for 4s. Triggers every 8s.
~~~

## English comparison

The English's +60% reduction, 4-second effect and 8-second trigger interval agree with the accepted values. Its explicit “an Ally in Coherency” restriction conflicts with the accepted broadcast and template, which have no Coherency or distance check. Record this as an English scope contradiction against the fixed implementation evidence, with actual game range unobserved. Health-only triggering, already-resolved trigger damage, per-holder cooldown and independent multiple-holder applications supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_ally_damage_taken_reduced.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/42daeb1b-ec7d-4f9b-bc58-f89c1de5d9b4). The icon identifies the talent; it is not mechanism evidence.
