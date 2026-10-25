# Ecclesiarch's Call: source evidence

[繁體中文](../zealot_channel_grants_damage.md) | [Player description](README.md#zealot_channel_grants_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_channel_grants_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_channel_grants_damage`; name key `loc_talent_zealot_zealot_channel_grants_offensive_buff`; description key `loc_talent_zealot_zealot_channel_offensive_desc`. Node `node_518fc5ca-a334-46b2-9177-42cc04f43002`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node grants `special_rules.zealot_channel_grants_offensive_buff`. `ActionZealotChannel` reads the rule and adds `zealot_channel_damage` on every tick to the whole `in_coherence_units` set, including the holder.
- The template is an ordinary stat buff: `stat_buffs.damage = 0.06`, `duration = 10`, Chorus `max_stacks = 5` and `refresh_duration_on_stack = true`. It stacks the damage stat; it does not directly add 6 percentage points to every hit's final damage or independently multiply five times. Maximum is **+30% damage stat**.
- Base Chorus has `duration = 3.6666`, `tick_rate = 0.8` and an immediate first tick, giving approximately **5 pulses** for one full channel. External interruption may yield fewer than 5 stacks.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L673-L724](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L673-L724)
- [scripts/settings/talent/talent_settings_zealot.lua — L271-L275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L271-L275)
- [scripts/settings/talent/talent_settings_zealot.lua — L539-L547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L539-L547)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L80-L96](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L80-L96)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua — L44-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L44-L65)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua — L132-L163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L132-L163)
- [scripts/extension_systems/weapon/actions/action_zealot_channel.lua — L234-L246](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_zealot_channel.lua#L234-L246)
- [scripts/utilities/attack/damage_calculation.lua — L289-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L673-L724](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L673-L724)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L651-L674](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L651-L674)

## Example assumptions and limits

- **Operation**: Each Chorus of Spiritual Fortitude pulse gives you and Coherency allies **1 Damage stack**, **6% per stack**, up to **5 stacks / 30%**.
- **Duration**: Lasts **10 seconds** and refreshes on later pulses. Approximately 5 pulses in a full channel reach the cap; putting away the relic early may leave fewer than 5 stacks.
- **Damage example**: At full stacks, baseline **100** gives `100 × (1 + 5 × 6%) = 130`. With an existing same-stage **25%** bonus, `100 × (1 + 25% + 30%) = 155`.

#### Traditional Chinese localization note

- The Chinese “stack count” incorrectly uses the damage-percentage placeholder. The correct limit is **5 stacks**, with **6% Damage** per stack.

- `damage` is a global damage-stat modifier. How it combines with other bonuses, multipliers and damage stages depends on each weapon's damage calculation.
- The **10-second** Buff timer refreshes as later stacks arrive; without another pulse, it expires after the last application.
- The fixed source and inventory Build **25606770** both correspond to **1.13.1**. Formatting values or decimal display differences alone are not treated as translation errors; actual game presentation remains unobserved.
- Description hash **`af1e14c2`**: the Chinese version uses `{damage:%s}` for the stack count, whereas English uses `{stacks:%s}`. Substituting the damage percentage into a stack-count field is a confirmed Chinese parameter error, retained separately from the English comparison.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_zealot_channel_grants_offensive_buff`, hash `1627f378`, entry 1442: **Ecclesiarch's Call**.
- Description key `loc_talent_zealot_zealot_channel_offensive_desc`, hash `af1e14c2`, entry 11268.

Full raw template:

~~~text
Each pulse grants {damage:%s} Damage to you and Allies in Coherency. Stacking {stacks:%s} times. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{damage:%s}` | `0.06` → `+6%` | Percentage with explicit + prefix |
| `{stacks:%s}` | `5` → `5` | Number |
| `{duration:%s}` | `10` → `10` | Number |

The missing display mapping was read only in `zealot_talents.lua` L673-L718. `stacks` explicitly supplies 5; damage and duration reuse accepted Buff values. Unused `talent_name` and `max_stacks` mappings are not inserted into this template.

Static reconstruction; not an observed game screen:

~~~text
Each pulse grants +6% Damage to you and Allies in Coherency. Stacking 5 times. Lasts 10s.
~~~

## English comparison

The English independently states +6% Damage per pulse, five stacks, ten seconds and you plus Coherency allies, matching the accepted Buff. Unlike the Chinese parameter error, its stack-count placeholder is correctly `{stacks:%s}`. Refresh timing, interrupted-channel limits and additive same-stage damage examples are supplementary. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_channel_grants_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/1abe7e62-3810-4680-9c49-7f6091782ab6). The icon identifies the talent; it is not mechanism evidence.
