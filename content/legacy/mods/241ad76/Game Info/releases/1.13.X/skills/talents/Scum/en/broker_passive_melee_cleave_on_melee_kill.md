# Battering Strikes: source evidence

[繁體中文](../broker_passive_melee_cleave_on_melee_kill.md) | [Player description](README.md#broker_passive_melee_cleave_on_melee_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_melee_cleave_on_melee_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_melee_cleave_on_melee_kill`; name key `loc_talent_broker_passive_melee_cleave_on_melee_kill`; description key `loc_talent_broker_passive_melee_cleave_on_melee_kill_desc`. Node `node_43d46f72-28f5-4330-8a30-6fb2f1bc94db`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_melee_kill` adds a refreshing child Buff with `duration = 5` and `max_stacks = 5`. Its `max_melee_hit_mass_attack_modifier = 0.1` only multiplies `max_hit_mass_attack`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2252-L2266](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2252-L2266)
- [scripts/utilities/attack/damage_profile.lua — L42-L64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L42-L64)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2241-L2251](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2241-L2251)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1821-L1863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1821-L1863)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1116-L1140](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1116-L1140)

## Example assumptions and limits

- **Stacks**: Each Melee kill adds one stack, granting 10% Damage Cleave capacity per stack, up to 5 stacks. Triggering again resets the 5s duration.

- **Cleave example**: Five stacks grant 50%. A starting capacity to pass through targets with total mass 10 becomes 10 × 1.5 = 15. The number of enemies hit still depends on each enemy's mass, armour and weapon limits.

- **Scope**: This increases Damage Cleave capacity. It does not mean each enemy takes 50% more Damage, and it does not directly increase Stagger Cleave capacity.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_melee_cleave_on_melee_kill`, hash `496ac07d`, entry 4759: **Battering Strikes**.
- Description key `loc_talent_broker_passive_melee_cleave_on_melee_kill_desc`, hash `3e88fbf2`, entry 4075.

Full raw template:

~~~text
Melee Kills grant {multiplier:%s} Melee Cleave for {duration:%s}s. Stacks {max_stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{multiplier:%s}` | `max_melee_hit_mass_attack_modifier = 0.1` | Child Buff lookup; `percentage`, `+` prefix → `+10%` |
| `{duration:%s}` | 5 | Child Buff's `duration`; `number` → `5` |
| `{max_stacks:%s}` | 5 | Child Buff's `max_stacks`; `number` → `5` |

The existing display map at `broker_talents.lua` L1821-L1863 reads the verified modifier, duration and cap from `broker_passive_melee_cleave_on_melee_kill_buff`. Previously verified percentage and number formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
Melee Kills grant +10% Melee Cleave for 5s. Stacks 5 times.
~~~

## English comparison

The English correctly gives Melee kills, +10% Cleave, five seconds and five stacks. The description does not define Cleave as increased Damage to each enemy or promise a Stagger Cleave increase. The Damage hit-mass scope, refreshed timer and enemy/weapon limits supplement it.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_melee_cleave_on_melee_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/23850be1-ea33-448c-93dc-409f21216ceb). The icon identifies the talent; it is not mechanism evidence.
