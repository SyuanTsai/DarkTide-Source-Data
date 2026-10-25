# Maniac: source evidence

[繁體中文](../zealot_martyrdom_grants_attack_speed.md) | [Player description](README.md#zealot_martyrdom_grants_attack_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_martyrdom_grants_attack_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_martyrdom_grants_attack_speed`; name key `loc_talent_zealot_attack_speed_per_martyrdom`; description key `loc_talent_zealot_attack_speed_per_martyrdom_upd_desc`. Node `node_9d8273b3-4c5d-4317-b480-54a125376f0d`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This node attaches `zealot_martyrdom_attack_speed`, which sets only `melee_attack_speed`, up to 6% per segment × 5. The Buff interpolates linearly using the same missing-Wound count as Martyrdom divided by 5.
- There is no additional proc, cooldown, duration or timed stack counter. The effect directly follows the missing segment count. It increases Melee Attack Speed, not Ranged firing speed.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1551-L1571](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1551-L1571)
- [scripts/settings/talent/talent_settings_zealot.lua — L364-L375](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L364-L375)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L633-L652](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L633-L652)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L1715-L1739](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1715-L1739)
- [scripts/utilities/health.lua — L117-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L117-L127)
- [scripts/utilities/action/action_handler.lua — L356-L429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1551-L1571](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1551-L1571)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1087-L1111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1087-L1111)

## Example assumptions and limits

- **Effect**: Each fully missing Health Wound grants 6% Melee Attack Speed, counting at most 5 Wounds for a maximum +30%.
- **Speed example**: 3 stacks grant 3 × 6% = 18% Melee Attack Speed. An affected 1-second action takes 1 ÷ 1.18 ≈ 0.847 seconds; at 5 stacks, 1 ÷ 1.3 ≈ 0.769 seconds. Other same-stage Attack Speed bonuses add first.

- The example excludes other Attack Speed modifiers and the final action-speed calculation.
- Missing segment count follows current maximum Health and maximum Wounds; it does not mean one stack per fixed percentage of missing Health.
- The accepted Chinese comparison at hash `b83c3710` records Attack Speed per Martyrdom stack in both languages. The implementation specifically limits this to Melee Attack Speed; missing-Wound details and values supplement the description. Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_attack_speed_per_martyrdom`, hash `7dee864b`, entry 8170: **Maniac**.
- Description key `loc_talent_zealot_attack_speed_per_martyrdom_upd_desc`, hash `b83c3710`, entry 11879.

Full raw template:

~~~text
{talent_name:%s} grants {attack_speed:%s} Attack Speed per stack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_zealot_martyrdom`: Martyrdom | `loc_string`; hash `15d87f95`, entry 1420 |
| `attack_speed` | 0.06 → +6% | `percentage`, `+` prefix; `talent_settings_2.offensive_3.attack_speed_per_segment` |

The minimal display mapping at `zealot_talents.lua` L1551-L1565 supplies the name and accepted per-segment bonus.

Static reconstruction; not an observed game screen:

~~~text
Martyrdom grants +6% Attack Speed per stack.
~~~

## English comparison

The English's +6% Attack Speed per Martyrdom stack agrees with the accepted bonus direction and value. It does not explicitly promise Ranged firing speed; the implementation's Melee-only scope is supplementary specificity. The 5-Wound cap, live segment scaling, lack of a timed proc and affected-action formula are also omitted details. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_martyrdom_grants_attack_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/2a096b34-3273-406a-82fc-23c774fcaedf). The icon identifies the talent; it is not mechanism evidence.
