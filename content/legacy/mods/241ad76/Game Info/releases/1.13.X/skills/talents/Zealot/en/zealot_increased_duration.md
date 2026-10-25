# Master-Crafted Shroudfield: source evidence

[繁體中文](../zealot_increased_duration.md) | [Player description](README.md#zealot_increased_duration) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_increased_duration)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_increased_duration`; name key `loc_talent_zealot_increased_stealth_duration`; description key `loc_talent_zealot_stealth_duration_threat_damage_desc`. Node `node_374f4845-26ff-40f4-a893-75b4e4ac324d`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node points to `PlayerAbilities.zealot_invisibility_improved`. Its cloned invisibility Buff uses `duration=talent_settings.zealot_increased_duration.duration`, which is 5 seconds. The node's display value `duration=2` is the increase over the base `duration=3`.
- `zealot_invisibility.stop_func` checks `special_rules.zealot_increased_duration` and adds `zealot_decrease_threat_increase_backstab_damage` when invisibility ends.
- The subsequent Buff has `duration=5`, `stat_buffs.threat_weight_multiplier=0.25`, and `backstab_damage=0.5`. The threat field is a multiplier: 0.25 retains one quarter of threat weight, a 75% reduction, rather than adding 25% threat. Backstab damage gains 50%.
- This subsequent Buff has `max_stacks=1` and `refresh_duration_on_stack=true`. Applying it again on another exit from Stealth can reset its duration. It does not change combat ability resource or the invisibility cooldown.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L452-L517](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L452-L517)
- [scripts/settings/talent/talent_settings_zealot.lua — L157-L166](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L157-L166)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua — L77-L93](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L77-L93)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L4313-L4335](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4313-L4335)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L454-L470](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L454-L470)
- [scripts/utilities/attack/damage_calculation.lua — L95-L109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L95-L109)
- [scripts/utilities/attack/damage_calculation.lua — L848-L861](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L848-L861)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L452-L517](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L452-L517)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L785-L810](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L785-L810)

## Example assumptions and limits

- **Stealth duration**: Shroudfield lasts 2 seconds longer, increasing from 3 to 5 seconds. The base cooldown remains 30 seconds.
- **After leaving Stealth**: For 5 seconds, your threat weight for enemy target selection falls by 75% and Melee Backstab damage increases by 50%. Triggering the effect again restarts its timer.
- **Damage and threat example**: With other conditions fixed, 100 at the Backstab stage becomes 100 × 1.5 = 150; with an existing 20% Backstab bonus at the same stage, it becomes 170. Threat weight 100 becomes 100 × 0.25 = 25. This does not mean enemies have a fixed 25% chance to target you.

- `threat_weight_multiplier` changes threat weight. Actual enemy target selection also depends on AI, distance, line of sight and other threat sources.
- The description's `{duration}` is the 2-second increase. The Buff template's `duration=5` is the extended total; these values must not be conflated.
- The Chinese inventory says threat is “increased,” while the fixed SHA supplies a negative display prefix and a threat multiplier of 0.25. The accepted note records the numeric interpretation and leaves the final formatted game screen unverified, rather than asserting a localization erratum.
- At hash `f25397d4`, the English says “gain” followed by signed Threat; its reconstructed value is −75%. Preserve this wording question separately from the mechanism. Actual game display and behavior remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_increased_stealth_duration`, hash `ad0e421f`, entry 11138: **Master-Crafted Shroudfield**.
- Description key `loc_talent_zealot_stealth_duration_threat_damage_desc`, hash `f25397d4`, entry 15749.

Full raw template:

~~~text
{talent_name:%s} duration increased by {duration:%s}s. Upon leaving Stealth, gain {threat:%s} Threat and {damage:%s} Backstab Damage for {buff_duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_ability_zealot_stealth`: Shroudfield | `loc_string`; hash `e94fd822`, entry 15155 |
| `duration` | 2 | `number`; increase over the base 3 seconds |
| `buff_duration` | 5 | `number`; subsequent Buff `duration` |
| `threat` | 0.25 → (1 − 0.25) × 100 = 75 → -75% | `percentage`, `-` prefix, explicit value manipulation |
| `damage` | 0.5 → 50% | `percentage`; no explicit sign prefix in this definition |

The existing `zealot_talents.lua` L452-L512 provides the format mapping. Buff values reuse the accepted evidence. The Shroudfield name is paired in the same English batch.

Static reconstruction; not an observed game screen:

~~~text
Shroudfield duration increased by 2s. Upon leaving Stealth, gain -75% Threat and 50% Backstab Damage for 5s.
~~~

## English comparison

The English specifies a 2-second extension and a 5-second post-Stealth Buff. Reading the signed Threat value independently, “gain -75% Threat” conveys a reduction and matches the 0.25 multiplier; 50% Backstab Damage also agrees. The word “gain” does not by itself establish an English error. Threat weight versus target probability, refresh and additive damage are supplements. The Chinese wording question remains separate and the final screen is unobserved.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_increased_duration.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/064d2729-f3e2-4868-bc34-1bcf434d9f4d). The icon identifies the talent; it is not mechanism evidence.
