# Float Like a Butterfly: source evidence

[繁體中文](../broker_passive_ninja_grants_crit_chance.md) | [Player description](README.md#broker_passive_ninja_grants_crit_chance) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_ninja_grants_crit_chance)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_ninja_grants_crit_chance`; name key `loc_talent_broker_passive_ninja_grants_crit_chance`; description key `loc_talent_broker_passive_ninja_grants_crit_chance_desc`. Node `node_b2a0147e-0949-4501-8650-2b1ba64377a9`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The buff has `proc_chance = 1`, `max_stacks = 1`, `active_duration = 3`, and `allow_proc_while_active = true`. Both events grant the same `critical_strike_chance = 0.2`.
- `CriticalStrike.chance` adds archetype, weapon, and property chances, then clamps the result to 0..1. The examples assume no modifiers such as conversion of Critical strikes into Damage.

## Fixed source evidence

- [scripts/extension_systems/buff/buffs/proc_buff.lua — L328-L345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L328-L345)
- [scripts/utilities/attack/critical_strike.lua — L13-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/settings/talent/talent_settings_broker.lua — L238-L244](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L238-L244)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1063-L1079](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1063-L1079)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L952-L971](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L952-L971)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L143-L170](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L143-L170)

## Example assumptions and limits

- **Trigger and refresh**: a Successful Dodge or Perfect Block grants 20 percentage points of Critical Strike Chance for 3 seconds. Retriggering resets the duration without adding another bonus.
- **Chance examples**: an initial 10% Critical Strike Chance becomes 10% + 20% = 30%; an initial 25% becomes 45%.

The chance examples add 20 percentage points to the existing chance under the stated assumptions. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_ninja_grants_crit_chance`, hash `8d3c884d`, entry 9149: **Float Like a Butterfly**.
- Description key `loc_talent_broker_passive_ninja_grants_crit_chance_desc`, hash `43d506f8`, entry 4388.

Full raw template:

~~~text
Perfect Blocks and Successful Dodges grant {critical_strike_chance:%s} Critical Strike Chance for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{critical_strike_chance:%s}` | `talent_settings.broker_passive_ninja_grants_crit_chance.critical_strike_chance = 0.2` → `+20%` | `percentage`; prefix `+` |
| `{duration:%s}` | `talent_settings.broker_passive_ninja_grants_crit_chance.duration = 3` → `3` | `number` |

The existing display mapping at `broker_talents.lua` L956-L966 reads the Critical Strike Chance and duration settings. Verified values are reused.

Static reconstruction; not an observed game screen:

~~~text
Perfect Blocks and Successful Dodges grant +20% Critical Strike Chance for 3s.
~~~

## English comparison

The English correctly identifies the two triggers, +20% Critical Strike Chance, and 3-second duration. Each listed event independently triggers the effect; the wording does not require both together. Percentage-point addition, the chance clamp, and refresh without stacking are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_ninja_grants_crit_chance.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/e4a8f21b-75d8-45dd-8cf1-84a42d41578f). The icon identifies the talent; it is not mechanism evidence.
