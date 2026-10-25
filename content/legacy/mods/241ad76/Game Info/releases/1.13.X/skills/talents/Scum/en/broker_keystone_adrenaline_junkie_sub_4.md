# Uncontrolled Aggression: source evidence

[繁體中文](../broker_keystone_adrenaline_junkie_sub_4.md) | [Player description](README.md#broker_keystone_adrenaline_junkie_sub_4) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_adrenaline_junkie_sub_4)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_adrenaline_junkie_sub_4`; name key `loc_talent_broker_keystone_adrenaline_junkie_sub_4`; description key `loc_talent_broker_keystone_adrenaline_junkie_sub_4_desc`. Node `node_43d2abfa-c6f8-4ab7-8469-148b526040c2`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The core has `adrenaline_duration = 2`; the upgrade has `sub_4_duration = 4`. The stack buff's `start_func` checks the `stack_extra_duration` special rule and adds 4 − 2 = 2 seconds, making the template's final `duration` 4 seconds.
- The stack buff retains `refresh_duration_on_stack` and `refresh_duration_on_remove_stack`: gaining stacks resets the timer, and removing one expired stack resets it again. Without new stacks, this removes one stack every 4 seconds. At 30 stacks, `on_reached_max_stack_func` disables the reset on stack removal; the conditional exit clears the stack buff and triggers the core Frenzy.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2798-L2826](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2798-L2826)
- [scripts/settings/talent/talent_settings_broker.lua — L464-L480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L464-L480)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3686-L3698](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3686-L3698)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3735-L3759](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3735-L3759)
- [scripts/extension_systems/buff/buffs/buff.lua — L29-L44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44)
- [scripts/extension_systems/buff/buff_extension_base.lua — L631-L663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L631-L663)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2798-L2826](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2798-L2826)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1857-L1879](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1857-L1879)

## Example assumptions and limits

- **Stack timer**: after gaining Adrenaline stacks, the timer is 4 seconds. New stacks reset this shared timer.
- **Decay**: if no new stacks arrive within 4 seconds, lose 1 stack and restart the timer. If no further stacks arrive, lose another stack every 4 seconds.
- **Cap trigger**: Adrenaline Frenzy still triggers at 30 stacks. On reaching the cap, the core triggers Frenzy and clears the Adrenaline stacks.

**Timing example**: gain 3 stacks at 0 seconds and gain no more. Lose 1 stack after 4 seconds, then another at 8 seconds. Gaining new stacks resets the next decay to 4 seconds later. This upgrade extends the shared timer used by the stacks; it changes neither the 30-stack cap, stack gains, nor Frenzy duration. Reaching 30 stacks triggers the core's clearing process instead of continuing to decay one stack every 4 seconds. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_adrenaline_junkie_sub_4`, hash `b6f65f02`, entry 11809: **Uncontrolled Aggression**.
- Description key `loc_talent_broker_keystone_adrenaline_junkie_sub_4_desc`, hash `fb871cba`, entry 16334.

Full raw template:

~~~text
Increase the duration of {adrenaline:%s} to {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{adrenaline:%s}` | `loc_term_glossary_adrenaline` → Adrenaline | `loc_string` |
| `{duration:%s}` | `broker_keystone_adrenaline_junkie_stack.sub_4_duration = 4` → `4` | `number` |

The existing display mapping at `broker_talents.lua` L2802-L2817 supplies the Adrenaline glossary key and the stack buff's `sub_4_duration`. The verified value is reused. **Adrenaline** resolves from `loc_term_glossary_adrenaline`, hash `c4f3b84d`, entry 12704.

Static reconstruction; not an observed game screen:

~~~text
Increase the duration of Adrenaline to 4s.
~~~

## English comparison

The English states a final Adrenaline duration of 4 seconds, which agrees with the upgrade. It does not explain that the stack timer is shared and resets on gains or removal, or that reaching the unchanged 30-stack cap triggers Frenzy and clears the stacks. These are supplements, not contradictions.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_adrenaline_junkie_sub_4.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/2b1aa9f6-20e2-4d38-b2fb-6af765a426ca). The icon identifies the talent; it is not mechanism evidence.
