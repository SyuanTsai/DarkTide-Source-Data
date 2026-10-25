# Nimble: source evidence

[繁體中文](../broker_passive_improved_dodges.md) | [Player description](README.md#broker_passive_improved_dodges) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_improved_dodges)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_improved_dodges`; name key `loc_talent_broker_passive_improved_dodges`; description key `loc_talent_broker_passive_improved_dodges_desc_02`. Node `node_81fd0da4-87be-4750-a5b7-c51bb4eb9fef`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent settings set `dodge_speed_multiplier = 1.25` and `dodge_linger_time = 0.15`. The buff template applies them respectively to `stat_buffs.dodge_speed_multiplier` and `stat_buffs.dodge_linger_time`.
- `dodge_speed_multiplier` is registered as `multiplicative_multiplier` in `buff_settings`. Dodge-state updates multiply the base curve speed by this value. Estimated total Dodge time also accumulates displacement at fixed time steps until reaching the target distance, so with an unchanged path the time is approximately shortened by 1 ÷ 1.25 = 0.8. An isolated base speed of 4 m/s becomes 4 × 1.25 = 5 m/s.
- For Melee and grab checks, `Dodge.is_dodging` uses the archetype's base `dodge_linger_time`; Ranged checks do not use that base value. Both then add `stat_buffs.dodge_linger_time`. Broker's base is 0.25 seconds, so the Melee/grab window is 0.25 + 0.15 = 0.40 seconds, while the Ranged window is 0 + 0.15 = 0.15 seconds.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_broker.lua — L259-L262](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L259-L262)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1066-L1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1066-L1102)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1113-L1120](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1113-L1120)
- [scripts/settings/buff/buff_settings.lua — L799-L804](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L799-L804)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua — L114-L150](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L114-L150)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua — L189-L217](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L189-L217)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua — L100-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L100-L127)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua — L133-L167](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L133-L167)
- [scripts/settings/dodge/archetype_dodge_templates.lua — L213-L220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/dodge/archetype_dodge_templates.lua#L213-L220)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1066-L1103](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1066-L1103)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L434-L461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L434-L461)

## Example assumptions and limits

- **Dodge speed:** Dodge movement speed increases by 25%. A speed of 4 metres per second at the same point in the motion becomes 4 × 1.25 = 5 metres per second. Actual action duration is still calculated across the full speed curve.

- **Dodging checks:** after the Dodge ends, Melee and grab attacks continue considering you to be Dodging for 0.25 + 0.15 = 0.40 seconds, extended from 0.25 seconds. Ranged checks gain a 0.15-second window. Whether an attack misses still depends on its own checking rules.

- **Scope:** the bonus changes movement speed during a Dodge and the attack system's Dodging checks. It does not increase the number of consecutive Dodges or their cooldown-recovery speed.

Speed examples isolate this multiplier; the base Dodge curve, weapon settings and other modifiers change actual speed and full action duration. The window means attack checks treat the character as Dodging. Whether an attack uses Dodge rules remains determined by its attack type and logic. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_improved_dodges`, hash `322d89e8`, entry 3269: **Nimble**.
- Description key `loc_talent_broker_passive_improved_dodges_desc_02`, hash `1cc9786f`, entry 1878.

Full raw template:

~~~text
Dodge Speed is increased by {dodge_distance_modifier:%s}, and time considered Dodging by {dodge_linger_time:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `dodge_distance_modifier` | `broker_passive_improved_dodges.stat_buffs.dodge_speed_multiplier = 1.25` | Custom `(value − 1) × 100 = 25`, percentage with explicit `+` prefix → `+25%` |
| `dodge_linger_time` | `broker_passive_improved_dodges.stat_buffs.dodge_linger_time = 0.15` | Number with explicit `+` prefix, adaptive two decimals → `+0.15` |

Display mapping: [broker_talents.lua L1070–1098](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1070-L1098). Values reuse accepted evidence. The shared [number/decimal formatter L354–425](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L354-L425) retains two decimal places for 0.15. The distance-named placeholder reads the speed stat.

Static reconstruction; not an observed game screen:

~~~text
Dodge Speed is increased by +25%, and time considered Dodging by +0.15s.
~~~

## English comparison

English explicitly describes increased Dodge Speed and additional time considered Dodging, matching the speed multiplier and linger-time addition. The placeholder's distance-oriented identifier does not change the actual English wording or mapped speed stat. Attack-type differences, approximate whole-motion timing and the unchanged consecutive-Dodge/recovery scope supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_passive_improved_dodges.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/4575cb9c-10e2-489c-8b4f-0b8f4eda154d). The icon identifies the talent; it is not mechanism evidence.
