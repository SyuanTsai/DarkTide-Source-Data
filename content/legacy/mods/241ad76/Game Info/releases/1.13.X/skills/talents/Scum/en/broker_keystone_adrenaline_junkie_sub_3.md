# Stoked Rage: source evidence

[繁體中文](../broker_keystone_adrenaline_junkie_sub_3.md) | [Player description](README.md#broker_keystone_adrenaline_junkie_sub_3) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_adrenaline_junkie_sub_3)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_adrenaline_junkie_sub_3`; name key `loc_talent_broker_keystone_adrenaline_junkie_sub_3`; description key `loc_talent_broker_keystone_adrenaline_junkie_sub_3_desc`. Node `node_4943dd3d-899a-44ad-a876-da513a6f3b01`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `talent_settings.broker_keystone_adrenaline_junkie.sub_3_frenzy_duration = 20`, while the core `frenzy_duration = 10`. Frenzy's `start_func` checks the `extra_duration` special rule and adds the difference through `add_duration(20 − 10)`, increasing the template duration from 10 to 20 seconds.
- The Frenzy buff has `max_stacks = 1` and `refresh_duration_on_stack = true`. Retriggering resets `start_time`, restarting the upgraded 20-second timer without stacking two Frenzy effects. For example, retriggering at 18 seconds starts another full 20 seconds.
- Its `stat_buffs` retain core `melee_attack_speed = 0.10` and `melee_damage = 0.25`. This upgrade only changes the Frenzy buff duration; trigger frequency still depends on how quickly 30 Adrenaline stacks are gained.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2769-L2797](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2769-L2797)
- [scripts/settings/talent/talent_settings_broker.lua — L464-L480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L464-L480)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3761-L3802](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3761-L3802)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buffs/buff.lua — L619-L630](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L630)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2769-L2797](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2769-L2797)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1811-L1833](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1811-L1833)

## Example assumptions and limits

- **Duration:** triggered Frenzy lasts 20 seconds, 10 seconds longer than the core's 10.

- **Refresh:** reaching 30 stacks again retriggers the same single Frenzy effect and resets its duration to 20 seconds.

- **Other rules:** this upgrade leaves Adrenaline's 2-second stack timer, 30-stack cap, and Frenzy's Attack Speed and Damage multipliers unchanged.

Actual speed and Damage bonuses still combine with other active modifiers. Duration changes from the 10-second base by the 20 − 10 second difference, for 20 seconds total. This does not change the Adrenaline stack timer, maximum count or Frenzy stat values. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_adrenaline_junkie_sub_3`, hash `6d1091f8`, entry 7086: **Stoked Rage**.
- Description key `loc_talent_broker_keystone_adrenaline_junkie_sub_3_desc`, hash `95b51a39`, entry 9676.

Full raw template:

~~~text
Increase the duration of {frenzy:%s} to {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `frenzy` | `loc_term_glossary_adrenaline_frenzy` | Localized string → `Adrenaline Frenzy` (hash `659d0629`, entry 6613) |
| `duration` | `broker_keystone_adrenaline_junkie_proc.sub_3_frenzy_duration = 20` | Number → `20` |

Display mapping: [broker_talents.lua L2773–2788](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2773-L2788). The final duration and unchanged stats reuse accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
Increase the duration of Adrenaline Frenzy to 20s.
~~~

## English comparison

English increases Adrenaline Frenzy to 20 seconds, matching the final duration. It does not promise an additional 20 seconds on top of the base. The single-buff refresh, unchanged stacking/bonus rules and dependence on reaching 30 stacks are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_adrenaline_junkie_sub_3.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/72d38f70-b406-41ca-a04b-2bcdadfec50c). The icon identifies the talent; it is not mechanism evidence.
