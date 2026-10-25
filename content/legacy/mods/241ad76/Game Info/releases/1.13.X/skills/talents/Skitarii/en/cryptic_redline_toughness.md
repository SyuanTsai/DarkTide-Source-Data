# Surge-Extension: source evidence

[繁體中文](../cryptic_redline_toughness.md) | [Player description](README.md#cryptic_redline_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_redline_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_redline_toughness`; name key `loc_talent_cryptic_power_generation_one_more_charge`; description key `loc_talent_cryptic_redline_toughness_clarified_desc`. Node `node_d8193dca-b6d3-428a-b970-654b16fda839`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The configured duration is 5 seconds and total restoration is `0.25`. This talent's child buff uses the common Toughness-over-time mechanism and listens for Combat Ability charge-gained and charge-spent events.
- On activation, `toughness_left_to_restore` is set to `0.25`. Updates consume that budget at `0.05 × dt` and call `Toughness.replenish_percentage`. The Redline child overrides the common buff's duration to 5 seconds and total restoration to 25%.
- One ability-resource change sends the whole number of charges gained or consumed in one event. The proc does not read that quantity: each event resets the budget to 25%. Multiple Redline stacks from one event do not multiply the recovery. A new event while recovery is active resets its active time and remaining budget.
- Recovery uses maximum Toughness, is capped by the current deficit, and respects disabled replenishment as well as `toughness_replenish_modifier` and `toughness_replenish_multiplier`.
- These direct charge-event procs use `check_proc_func = nil` and do not check whether a Redline stack was actually added. Charge events can therefore start recovery even when Redline is already at its stack cap.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1482-L1505](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1482-L1505)
- [scripts/settings/talent/talent_settings_cryptic.lua — L346-L349](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L346-L349)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L77-L105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L77-L105)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1974-L1983](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1974-L1983)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L865-L879](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L865-L879)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1064-L1075](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1064-L1075)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1559-L1580](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1559-L1580)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L323-L355](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L323-L355)
- [scripts/utilities/toughness/toughness.lua — L16-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L25)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1482-L1505](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1482-L1505)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2013-L2035](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2013-L2035)

## Example assumptions and limits

- **Trigger**: Gaining or spending a Combat Ability charge starts **5 seconds of Toughness recovery**. This can still trigger when Redline is at its stack cap.
- **Amount**: Restore **25% of maximum Toughness in total**, at **5% per second**. At 100 maximum Toughness, this is 5 points per second and 25 points over 5 seconds.
- **Repeated triggers**: A new trigger resets the 5-second duration and remaining recovery budget. If one charge event adds two Redline stacks, it still starts one 25% recovery, rather than 50%.

- With 100 maximum Toughness, the base budget is 25 points at 5 points per second for 5 seconds. If another event occurs after 3 seconds, the duration returns to 5 seconds and the remaining budget is replaced with a new 25 points; the amount already restored is not deducted from that new budget.
- The percentage is based on maximum Toughness, not 25% of missing Toughness. It cannot restore beyond the maximum, and disabled replenishment and applicable recovery modifiers still affect it.
- The Chinese and English descriptions refer to gaining a stack. The implementation triggers per charge event: one event carrying several charges still starts recovery only once, and an event at the Redline stack cap can still trigger it.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_power_generation_one_more_charge`, hash `e4547a36`, entry 14800: **Surge-Extension**.
- Description key `loc_talent_cryptic_redline_toughness_clarified_desc`, hash `5f6b15fb`, entry 6191.

Full raw template:

~~~text
Gaining a {talent_name:%s} stack replenishes {toughness:%s} Toughness over {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | Redline Capacitors | `loc_string`: `loc_talent_cryptic_power_generation` |
| `toughness` | 25% | `percentage`: `talent_settings.redline.cryptic_redline_toughness.toughness_restored = 0.25`; no prefix |
| `duration` | 5 | `number`: `talent_settings.redline.cryptic_redline_toughness.duration = 5` |

The display mappings in `cryptic_talents.lua` L1491–L1504 use the verified restoration and duration. The paired name `loc_talent_cryptic_power_generation` is Redline Capacitors (hash `765c4c20`, entry 7686).

Static reconstruction; not an observed game screen:

~~~text
Gaining a Redline Capacitors stack replenishes 25% Toughness over 5s.
~~~

## English comparison

The English recovery amount and duration agree with the verified behavior. It does not specify that the percentage uses maximum Toughness, how events with several charges are handled, or how retriggering resets recovery. It also does not say that gaining a stack is the only possible trigger, so recovery from charge events at the stack cap is supplementary behavior, not an explicit contradiction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_redline_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/d199d3e7-4b94-4288-bf17-acbd915bdeaf). The icon identifies the talent; it is not mechanism evidence.
