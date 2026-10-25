# Calculated Priority: source evidence

[繁體中文](../cryptic_precision_stance_damage_on_elite_kill.md) | [Player description](README.md#cryptic_precision_stance_damage_on_elite_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_precision_stance_damage_on_elite_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_precision_stance_damage_on_elite_kill`; name key `loc_talent_cryptic_precision_stance_damage_on_elite_kill`; description key `loc_talent_cryptic_precision_stance_damage_on_elite_kill_desc`. Node `node_b983128b-a5ad-487d-9fdd-66656de8ffb4`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- While the Advanced Combat Doctrines buff exists, `on_kill` must satisfy both `on_ranged_kill` and `on_elite_kill`. A qualifying kill adds `cryptic_precision_stance_damage_on_elite_kill_stack`.
- Each stack supplies `damage = 0.05`, with a maximum of 5 stacks and a duration of 10 seconds. Adding a stack refreshes the duration. This is a general Damage modifier that adds to other modifiers at the same calculation stage: 5 stacks give +25%, rather than a fixed additional 25 points per hit.
- The stack buff is independent. It is not in the precision stance's `stop_func` list of `bonus_buff_ids`, so existing stacks can remain for their own 10-second duration after the ability ends. New stacks cannot be acquired while the ability is inactive.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L405-L432](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L405-L432)
- [scripts/settings/talent/talent_settings_cryptic.lua — L120-L124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L120-L124)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L403-L408](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L403-L408)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L461-L502](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L461-L502)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L698-L715](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L698-L715)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L96-L105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L96-L105)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L216-L230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L216-L230)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L428-L460](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L428-L460)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L405-L432](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L405-L432)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2577-L2599](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2577-L2599)

## Example assumptions and limits

- **Trigger**: While Advanced Combat Doctrines is active, a **ranged Elite kill** adds one stack of **+5% Damage for 10 seconds**.
- **Stacking**: Up to **5 stacks**, for **+25% Damage**. Adding another stack refreshes the 10-second duration.
- **How it works**: With illustrative base damage of `100` and no other modifiers at this stage, 5 stacks give `100 × (1 + 25%) = 125`. With an existing +20% modifier at the same stage, the result is `100 × (1 + 20% + 25%) = 145`.
- **After the ability ends**: Existing stacks remain until their own 10-second duration expires. Kills while the ability is inactive cannot add new stacks.

- Two qualifying Elite kills give 2 stacks, +10% Damage, lasting 10 seconds. Five qualifying kills give 5 stacks, +25%; another qualifying kill at the cap refreshes the 10 seconds without exceeding the cap.
- Melee kills, non-Elite kills and kills while the ability is inactive do not qualify.
- The +25% is a Damage modifier, not a fixed 25 points of Health damage. Actual damage still depends on the other applicable calculation stages.
- The English omits the ranged-kill requirement without explicitly excluding it. This is an omitted condition, not an English contradiction.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_precision_stance_damage_on_elite_kill`, hash `1194be75`, entry 1138: **Calculated Priority**.
- Description key `loc_talent_cryptic_precision_stance_damage_on_elite_kill_desc`, hash `0da94924`, entry 901.

Full raw template:

~~~text
While {talent_name:%s} is active, Elite Kills grant you {damage:%s} Damage for {duration:%s}s. Stacking {stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | Advanced Combat Doctrines | `loc_string`: `loc_talent_cryptic_precision_stance` |
| `damage` | +5% | `percentage`, prefix `+`: `damage = 0.05` |
| `duration` | 10 | `number`: `duration = 10` |
| `stacks` | 5 | `number`: `max_stacks = 5` |

The formatting block in `cryptic_talents.lua` L414–L430 uses the verified values in `talent_settings_cryptic.lua` L120–L124. The ability name uses `loc_talent_cryptic_precision_stance`, hash `c4f43796`, entry `12705`: Advanced Combat Doctrines.

Static reconstruction; not an observed game screen:

~~~text
While Advanced Combat Doctrines is active, Elite Kills grant you +5% Damage for 10s. Stacking 5 times.
~~~

## English comparison

The English agrees with the active-ability condition, Elite-kill trigger, +5% Damage per stack, 10-second duration and 5-stack cap. It leaves the additional ranged-kill requirement, duration refresh, additive calculation and persistence after ending the ability unstated. These are supplementary details; no explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/ability_modifier/cryptic_precision_stance_damage_on_elite_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/9cbfaa3e-c8bf-42b8-98a4-5e5c6ee9c033). The icon identifies the talent; it is not mechanism evidence.
