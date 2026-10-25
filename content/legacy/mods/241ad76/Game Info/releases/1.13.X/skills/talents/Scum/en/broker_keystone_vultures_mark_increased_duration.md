# Patient Hunter: source evidence

[繁體中文](../broker_keystone_vultures_mark_increased_duration.md) | [Player description](README.md#broker_keystone_vultures_mark_increased_duration) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_vultures_mark_increased_duration)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_vultures_mark_increased_duration`; name key `loc_talent_broker_keystone_vultures_mark_increased_duration`; description key `loc_talent_broker_keystone_vultures_mark_increased_duration_desc`. Node `node_aab0fcfa-aa2c-4f06-bed9-dd6903333cf0`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Talent settings give the core `duration = 8` and `increased_duration.duration = 12`. The Mark buff's `start_func` checks the special rule and adds 12 − 8 = 4 seconds, giving a final 12-second duration.
- `vultures_mark` uses `refresh_duration_on_stack = true`. A new stack or a gain at maximum stacks resets `start_time`. Duration is a single shared timer, with no `refresh_duration_on_remove_stack`; at expiry, the finished buff clears all remaining stacks together.
- Only the `vultures_mark` buff's `start_func` uses this special rule. It does not modify other Mark upgrades or Vulture's Dodge's separate 1-second effect.
- First gaining a stack at 0 seconds and another at 6 seconds restarts the 12-second timer; without further gains, expiry occurs at 18 seconds. At 3 stacks, a fourth qualifying kill does not add a fourth stack but refreshes 12 seconds.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2435-L2449](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2435-L2449)
- [scripts/settings/talent/talent_settings_broker.lua — L440-L450](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L440-L450)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3387-L3414](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3387-L3414)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buff_extension_base.lua — L560-L589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/extension_systems/buff/buff_extension_base.lua — L631-L698](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L631-L698)
- [scripts/extension_systems/buff/buff_extension_base.lua — L187-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L205)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2435-L2449](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2435-L2449)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1658-L1680](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1658-L1680)

## Example assumptions and limits

- **Duration:** after gaining a Vulture's Mark, the stacks' shared timer is 12 seconds, 4 seconds longer than the core's 8.

- **Refresh:** a new Mark adds a stack and resets the shared timer to 12 seconds. At the 3-stack cap, another qualifying event still refreshes the timer.

- **Expiry:** without another Mark, existing stacks disappear together when the 12-second timer expires.

- **Timing example:** gain the first stack at 0 seconds and a second at 6 seconds. The second gain restarts 12 seconds; without further gains, the current stacks expire at 18 seconds.

This extends the Mark buff's shared duration without raising the 3-stack cap or changing per-stack bonuses or full-stack Toughness-restoration conditions. It does not extend the brief Dodge buff from Vulture's Dodge. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_vultures_mark_increased_duration`, hash `2c5bc480`, entry 2886: **Patient Hunter**.
- Description key `loc_talent_broker_keystone_vultures_mark_increased_duration_desc`, hash `2a61076a`, entry 2748.

Full raw template:

~~~text
Duration of Vulture's Mark is extended to {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration` | `broker_keystone_vultures_mark_increased_duration.duration = 12` | Number → `12` |

Display mapping: [broker_talents.lua L2439–2444](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2439-L2444). The final duration reuses accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
Duration of Vulture's Mark is extended to 12s.
~~~

## English comparison

English extends Vulture's Mark to 12 seconds, matching the final duration. It does not describe the shared timer, refresh at the stack cap, simultaneous expiry or unchanged separate Dodge effect. These are supplements; to 12s identifies the final duration rather than adding another 12 seconds.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_vultures_mark_increased_duration.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/76cdf6df-d713-4085-8b29-fce2c1c64413). The icon identifies the talent; it is not mechanism evidence.
