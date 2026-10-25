# Ramping Backstabs: source evidence

[繁體中文](../broker_passive_ramping_backstabs.md) | [Player description](README.md#broker_passive_ramping_backstabs) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_ramping_backstabs)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_ramping_backstabs`; name key `loc_talent_broker_passive_ramping_backstabs`; description key `loc_talent_broker_passive_ramping_backstabs_desc`. Node `node_1e885682-6bee-46c1-9d23-21332ffd3b51`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_melee_hit` with `is_backstab` adds a child buff. Other Melee hits call `mark_finished` on all recorded stacks. The child buff has `max_stacks = 5`, `melee_power_level_modifier = 0.1`, and no `duration`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1641-L1652](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1641-L1652)
- [scripts/utilities/attack/power_level.lua — L25-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/settings/talent/talent_settings_broker.lua — L332-L335](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L332-L335)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1617-L1640](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1617-L1640)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1501-L1520](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1501-L1520)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L635-L662](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L635-L662)

## Example assumptions and limits

- **Gain and removal**: a Melee Backstab adds 1 stack, granting 10% Melee Power per stack, up to 5. There is no fixed countdown. A Melee hit on a target from outside its back clears all stacks.
- **Power example**: 5 stacks grant 50%. If Power entering this bonus stage is 500, the result is 500 × 1.5 = 750. With another 20% Power bonus at the same stage, it is 500 × (1 + 20% + 50%) = 850.
- **Damage limit**: Power still passes through the weapon's Damage, Stagger, and Cleave curves. A 50% Power increase must not be described as 50% more final Damage for every weapon.

The Power examples use 500 Power entering the bonus stage and isolate this effect except where the additional 20% same-stage Power bonus is included. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_ramping_backstabs`, hash `d0970afd`, entry 13474: **Ramping Backstabs**.
- Description key `loc_talent_broker_passive_ramping_backstabs_desc`, hash `2f7fcac8`, entry 3091.

Full raw template:

~~~text
Backstabs grant {power:%s} Melee Strength. Stacks {stacks:%s} times. Regular Melee Hits will instead remove all stacks.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{power:%s}` | `talent_settings.broker_passive_ramping_backstabs.melee_power_level_modifier = 0.1` → `+10%` | `percentage`; prefix `+` |
| `{stacks:%s}` | `talent_settings.broker_passive_ramping_backstabs.max_stacks = 5` → `5` | `number` |

The existing display mapping at `broker_talents.lua` L1505-L1515 reads the Melee Power modifier and maximum stacks. Verified values are reused.

Static reconstruction; not an observed game screen:

~~~text
Backstabs grant +10% Melee Strength. Stacks 5 times. Regular Melee Hits will instead remove all stacks.
~~~

## English comparison

The English's Melee Strength wording corresponds here to the accepted `melee_power_level_modifier`, with +10% per stack, a 5-stack cap, and removal on regular non-Backstab Melee hits. It does not equate Strength with a universal final-Damage increase. The absence of a timer, same-stage Power addition, and downstream weapon curves are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_ramping_backstabs.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/d6f72725-01aa-4bc8-aeca-5e76118c1a51). The icon identifies the talent; it is not mechanism evidence.
