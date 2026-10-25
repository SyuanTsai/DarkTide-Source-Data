# Maxed Out Chems: source evidence

[繁體中文](../broker_keystone_chemical_dependency_sub_3.md) | [Player description](README.md#broker_keystone_chemical_dependency_sub_3) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_chemical_dependency_sub_3)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_chemical_dependency_sub_3`; name key `loc_talent_broker_keystone_chemical_dependency_sub_3`; description key `loc_talent_broker_keystone_chemical_dependency_sub_3_desc`. Node `node_2459c212-b00a-43ce-a3b6-ad55e67605ed`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Settings are `sub_3_duration = 60` and `sub_3_max_stacks = 4`; the core has `duration = 90` and `max_stacks = max_stacks_cap = 3`. With the upgrade enabled, the stack's `start_func` adds 1 to both `max_stacks` and `max_stacks_cap`, and adjusts duration by 60 − 90 = −30 seconds. The final result is a 4-stack cap and 60-second duration.
- The buff retains `refresh_duration_on_stack = true` and `refresh_duration_on_remove_stack = true`. All stacks share `start_time`, so a new stack and each decay restart the full 60-second timer. After the last Stimm use, one stack expires at 60 seconds; without another gain, the next expires another 60 seconds later.
- The +0.10 resource-recovery modifier per stack is unchanged. Ability-resource recovery calculates `(base_resource_regen_per_second + flat_regen) × modifier`. Four stacks give 1 + 4 × 0.10 = 1.40 for the isolated base rate, turning 60 seconds of full linear recovery into approximately 60 ÷ 1.40 = 42.86 seconds.
- The additional fourth stack permits a higher Dependency stack count while shortening the individual timer from 90 to 60 seconds. Decay still removes one stack at a time.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2579-L2613](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2579-L2613)
- [scripts/settings/talent/talent_settings_broker.lua — L454-L463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L454-L463)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3524-L3578](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3524-L3578)
- [scripts/extension_systems/buff/buffs/buff.lua — L29-L44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buff_extension_base.lua — L560-L589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/extension_systems/buff/buff_extension_base.lua — L631-L663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L631-L663)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L839-L863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L863)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2579-L2613](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2579-L2613)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1612-L1634](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1612-L1634)

## Example assumptions and limits

- **Duration and cap:** the stack timer becomes 60 seconds and the maximum becomes 4 stacks. Compared with the core, each timer is 30 seconds shorter and one additional stack is allowed.

- **Recovery:** the core's +10% Combat Ability resource recovery per stack still applies. At 4 stacks the multiplier is 1 + 4 × 0.10 = 1.40. Uninterrupted recovery that originally takes 60 seconds becomes 60 ÷ 1.40 ≈ 42.86 seconds.

- **Refresh and decay:** another Stimm use resets the shared timer. Without another gain, one stack expires after 60 seconds, then another every 60 seconds. A use at 4 stacks cannot add a fifth, but still refreshes the timer.

Recovery examples assume uninterrupted recovery at the base rate with no other modifiers; resource-recovery pauses and other modifiers change actual time. Gains and capped uses reset the shared timer rather than creating independent timers for each stack. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_chemical_dependency_sub_3`, hash `fdf59fed`, entry 16487: **Maxed Out Chems**.
- Description key `loc_talent_broker_keystone_chemical_dependency_sub_3_desc`, hash `80f78eef`, entry 8378.

Full raw template:

~~~text
Each stack of {dependency:%s} now instead lasts for {duration:%s}s, but Max Stacks are increased to {max_stacks:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `dependency` | `loc_term_glossary_chemical_dependency` | Localized string → `Dependency` (hash `0d7c24c6`, entry 883) |
| `duration` | `broker_keystone_chemical_dependency_stack.sub_3_duration = 60` | Config uses `format_value = "number"` without `format_type`; default `tostring` → `60` |
| `max_stacks` | `broker_keystone_chemical_dependency_stack.sub_3_max_stacks = 4` | Number → `4` |

Display mapping: [broker_talents.lua L2583–2608](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2583-L2608). Duration uses the default formatter because its config has `format_value`, rather than `format_type`: [default `tostring` L432–434](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L432-L434) and [formatter selection L629–634](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/utilities/talent_layout_parser.lua#L629-L634). The accepted integer value still reconstructs as 60.

Static reconstruction; not an observed game screen:

~~~text
Each stack of Dependency now instead lasts for 60s, but Max Stacks are increased to 4.
~~~

## English comparison

English gives the accepted 60-second duration and 4-stack cap, describing the tradeoff from the core. It does not spell out the shared timer, sequential refresh on decay, capped-use refresh or unchanged recovery bonus. These are supplements. The duration config uses a different field name from the normal formatter config, but the recorded default formatter can stringify the accepted value 60; no display failure is asserted.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_chemical_dependency_sub_3.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/51827890-e735-4220-8959-bf37381e0fc8). The icon identifies the talent; it is not mechanism evidence.
