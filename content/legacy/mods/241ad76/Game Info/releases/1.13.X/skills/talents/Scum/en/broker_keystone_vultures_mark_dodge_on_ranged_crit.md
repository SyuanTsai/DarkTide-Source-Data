# Vulture's Dodge: source evidence

[繁體中文](../broker_keystone_vultures_mark_dodge_on_ranged_crit.md) | [Player description](README.md#broker_keystone_vultures_mark_dodge_on_ranged_crit) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_vultures_mark_dodge_on_ranged_crit)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_vultures_mark_dodge_on_ranged_crit`; name key `loc_talent_broker_keystone_vultures_mark_dodge_on_ranged_crit`; description key `loc_talent_broker_keystone_vultures_mark_dodge_on_ranged_crit_desc`. Node `node_7c3d0b39-9457-4c3e-a4f6-3334c6d07b96`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The proc buff listens for `on_hit` and uses `CheckProcFunctions.on_crit_ranged`. This check requires `params.is_critical_strike` and either `attack_type = ranged` or `damage_profile.count_as_ranged_attack`.
- A trigger adds `broker_vultures_mark_dodge_on_ranged_crit_dodge_buff`, with `max_stacks = 1`, `duration = 1` and `refresh_duration_on_stack = true`. Its keywords are `count_as_dodge_vs_melee` and `count_as_dodge_vs_ranged`.
- `Dodge.is_dodging` uses Melee Dodge rules for `attack_type = melee` and `incapacitating_grab`, so `count_as_dodge_vs_melee` also covers grabs. The `ranged` branch reads `count_as_dodge_vs_ranged`. While active, the corresponding keyword makes these branches return Dodging.
- The buff has no `count_as_dodge_vs_all`. Its supported branches are Melee, `incapacitating_grab` under Melee rules, and Ranged; attack types that do not use these branches do not gain Dodging from it. Whether an attack is avoided depends on whether its logic calls and uses `Dodge.is_dodging`. The buff itself does not change attack Damage or movement state.
- A Ranged Critical hit at 0 seconds gives 1 second. Another at 0.6 seconds resets the timer and extends the effect until 1.6 seconds.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2450-L2464](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2450-L2464)
- [scripts/settings/talent/talent_settings_broker.lua — L451-L453](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L451-L453)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3452-L3477](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3452-L3477)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L336-L344](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L336-L344)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua — L100-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L100-L127)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2450-L2464](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2450-L2464)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1681-L1703](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1681-L1703)

## Example assumptions and limits

- **Trigger:** a Ranged Critical hit triggers the effect. An ordinary Ranged hit or a Critical Melee hit does not.

- **Effect:** for 1 second, you count as Dodging against Melee and Ranged attacks even without pressing Dodge. The result still follows each attack's Dodge rules; this does not make all Damage ineffective.

- **Refresh:** another Ranged Critical hit within that second restarts the 1-second timer, without accumulating multiple stacks.

- **Scope:** this directly changes Dodging checks. It does not increase actual Dodge distance or movement speed and does not require a Dodge action.

- **Timing example:** trigger at 0 seconds, then land another Ranged Critical hit at 0.6 seconds; the effect continues until 1.6 seconds.

This is conditional Dodging coverage through the specified attack branches, rather than universal Damage immunity. Repeated triggers refresh one buff without increasing its stack count, movement speed or Dodge distance. Patient Hunter's Mark-duration extension does not change this separate duration. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_vultures_mark_dodge_on_ranged_crit`, hash `18262d3b`, entry 1575: **Vulture's Dodge**.
- Description key `loc_talent_broker_keystone_vultures_mark_dodge_on_ranged_crit_desc`, hash `c8880e0b`, entry 12951.

Full raw template:

~~~text
Ranged Critical Hits makes you count as Dodging against all Attacks for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration` | `broker_keystone_vultures_mark_dodge_on_ranged_crit.duration = 1` | Number → `1` |

Display mapping: [broker_talents.lua L2454–2459](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2454-L2459). The duration and actual Dodge-branch coverage reuse accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
Ranged Critical Hits makes you count as Dodging against all Attacks for 1s.
~~~

## English comparison

The Ranged Critical hit trigger and 1-second duration agree with the accepted evidence. However, English explicitly says all Attacks. The accepted keyword/function evidence covers Melee, incapacitating grabs under Melee rules, and Ranged, with no count_as_dodge_vs_all; types outside those branches are not covered. The universal scope is therefore an English contradiction against the documented coverage. Refresh, lack of required Dodge movement and attack-specific avoidance remain supplements, and counting as Dodging must not be read as universal Damage immunity.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_vultures_mark_dodge_on_ranged_crit.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/00fcee1e-616c-4283-ade2-f67fc6657a7e). The icon identifies the talent; it is not mechanism evidence.
