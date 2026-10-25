# Unstoppable Momentum: source evidence

[繁體中文](../ogryn_movement_speed_after_ranged_kills.md) | [Player description](README.md#ogryn_movement_speed_after_ranged_kills) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_movement_speed_after_ranged_kills)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_movement_speed_after_ranged_kills`; name key `loc_talent_ogryn_ranged_kill_grant_movement_speed`; description key `loc_talent_ogryn_ranged_kill_grant_movement_speed_desc`. Node `node_a68be7fb-c454-4cfd-9ab9-626b1facc88b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_ranged_kill` activates `proc_stat` Movement Speed of 0.2 for `active_duration=3`. There is no cooldown, so another proc can overwrite `_active_start_time`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2248-L2265](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2248-L2265)
- [scripts/settings/talent/talent_settings_ogryn.lua — L245-L248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L245-L248)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L173-L194](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L194)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L323-L345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L323-L345)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L743-L763](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L743-L763)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L459-L485](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L459-L485)

## Example assumptions and limits

- **Trigger**: A ranged kill grants +20% Movement Speed for 3s. Another ranged kill restarts the duration without increasing the bonus further.

- **Speed example**: A base speed of 5m/s becomes `5 × 1.2 = 6m/s` with no other modifiers. With an existing +10% at the same stage, it becomes `5 × (1 + 10% + 20%) = 6.5m/s`.

The example isolates the Movement Speed multiplier. Actual speed also depends on movement state, weapon and other limits. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_ranged_kill_grant_movement_speed`, hash `683f61ec`, entry 6788: **Unstoppable Momentum**.
- Description key `loc_talent_ogryn_ranged_kill_grant_movement_speed_desc`, hash `b22afedc`, entry 11480.

Full raw template:

~~~text
{movement_speed:%s} Movement Speed for {duration:%s}s on Ranged Kill.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| movement_speed | defensive_2.move_speed_on_ranged_kill = 0.2 | Percentage with explicit + prefix → +20% |
| duration | defensive_2.duration = 3 | Number → 3 |

Only the missing display mapping in the cited talent definition, lines 743–763, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+20% Movement Speed for 3s on Ranged Kill.
~~~

## English comparison

The independently read English states a ranged-kill trigger, +20% Movement Speed and 3s duration, matching the accepted evidence. Repeated-proc refresh, the additive speed calculation and movement-state limits supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_movement_speed_after_ranged_kills.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/01fd23cb-46d2-41fa-bfc3-d8b1d17f43a3). The icon identifies the talent; it is not mechanism evidence.
