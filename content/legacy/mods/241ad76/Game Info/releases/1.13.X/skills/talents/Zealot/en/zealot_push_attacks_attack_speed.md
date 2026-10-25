# Punish Impiety: source evidence

[繁體中文](../zealot_push_attacks_attack_speed.md) | [Player description](README.md#zealot_push_attacks_attack_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_push_attacks_attack_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_push_attacks_attack_speed`; name key `loc_talent_zealot_damage_after_heavy_attack`; description key `loc_talent_zealot_push_attacks_attack_speed_desc`. Node `node_cb819666-6781-499a-bb33-9a43ed61b4b3`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_push_finish` sets a push flag; `on_action_finish` requires `new_interrupting_action`. The next `on_sweep_start` marks the follow-up as valid, then its first `on_hit` triggers the effect and clears the valid flag. A miss clears the flag at `on_sweep_finish`.
- Attack speed affects only weapon actions listing `melee_attack_speed` in `time_scale_stat_buffs`. Shared handling adds speed bonuses first, then calculates action time as `total_time / time_scale`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2600-L2659](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2600-L2659)
- [scripts/settings/talent/talent_settings_zealot.lua — L138-L141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L138-L141)
- [scripts/utilities/action/action_handler.lua — L356-L429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2386-L2405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2386-L2405)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L675-L697](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L675-L697)

## Example assumptions and limits

- **Trigger**: Hitting an enemy with the attack following a push grants +10% Melee Attack Speed for 5 seconds. Another trigger restarts the timer; a miss gives no bonus.
- **Speed example**: Counting only this bonus, an affected 1-second action becomes 1 ÷ 1.1 ≈ 0.909 seconds. With an existing 20% same-stage attack-speed bonus, it becomes 1 ÷ (1 + 20% + 10%) ≈ 0.769 seconds.

- Examples assume no other time scaling or speed cap. They do not establish that entire combos, weapon swaps or recovery times shorten by the same proportion.
- The accepted Chinese comparison at hash `ab4ad805` finds no explicit effect-direction contradiction. Omitted formulas, caps and finer restrictions remain supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_damage_after_heavy_attack`, hash `707ee4fe`, entry 7304: **Punish Impiety**.
- Description key `loc_talent_zealot_push_attacks_attack_speed_desc`, hash `ab4ad805`, entry 11033.

Full raw template:

~~~text
Push followup attacks grant {attack_speed:%s} Melee Attack Speed for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `attack_speed` | 0.1 → +10% | `percentage`, prefix `+`; `talent_settings.zealot_push_attacks_attack_speed.melee_attack_speed` |
| `duration` | 5 → 5 | `number`; `talent_settings.zealot_push_attacks_attack_speed.duration` |

The minimal display mapping at `zealot_talents.lua` L2386-L2405 supplies the accepted speed bonus and duration. The old name key's Heavy Attack wording is an identifier; its current English value is Punish Impiety.

Static reconstruction; not an observed game screen:

~~~text
Push followup attacks grant +10% Melee Attack Speed for 5s.
~~~

## English comparison

The English gives +10% Melee Attack Speed for 5 seconds from push follow-up attacks, agreeing with the accepted direction and values. It does not explicitly state that a miss also grants the effect. The required hit, event flags, timer refresh, affected-action list and additive speed/time formula supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_push_attacks_attack_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/a2373334-1398-4475-b263-5b2d56cf8b90). The icon identifies the talent; it is not mechanism evidence.
