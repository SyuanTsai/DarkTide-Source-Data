# Power Overload: source evidence

[繁體中文](../cryptic_overload_keystone.md) | [Player description](README.md#cryptic_overload_keystone) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_overload_keystone)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_overload_keystone`; name key `loc_talent_cryptic_overload_keystone`; description key `loc_talent_cryptic_overload_keystone_coherency_desc`. Node `node_2b657eae-4687-4860-a0c8-d87ac8266e32`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The Skitarii Keystone node in `cryptic_tree.lua` L154–L182 uses `cryptic_overload_keystone`. Settings specify 1 stack per ordinary kill, 2 per Elite or Specialist kill, a 30-stack cap, and an 8-second group buff with +15% Damage and a Toughness damage taken multiplier of `0.85`.
- A kill event must have an `attacking_unit` with a player owner, and that unit must be in this character's Coherency. `CheckProcFunctions` also requires `attack_result = died`; `tags.elite` or `tags.special` selects 2 stacks. Other qualifying kills give 1.
- Initialization adds one underlying stack with `stack_offset = -1`, so the HUD and threshold count start at zero. Accumulating stacks have no `duration`. `_add_overload_stack` reads `current_stacks − 1` as the visible count. If that count plus the event's increment is at least 30, it triggers once, removes the tracked stacks and clears their list. Excess from that event is discarded.
- The trigger clears accumulated stacks first, then either plays the ordinary effect or creates an explosion according to the selected modifier. It subsequently applies the 8-second group buff to non-companion units in the Coherency collection. The buff has one stack and `refresh_duration_on_stack = true`, with `damage = +0.15` and `toughness_damage_taken_multiplier = 0.85`.
- `buff_settings` defines Damage as `additive_multiplier` and the Toughness damage taken stat as `multiplicative_multiplier`. A multiplier of `0.85` means 15% less Toughness damage taken.
- Optional modifiers change the overload: Critical Power Overload enables the enemy-area explosion / Electrocution damage-taken debuff; Invigorating Overload restores 20% Toughness and 20% Stamina to Coherency members; Static Capacitor Drain grants successive permanent bonuses after 8 / 16 / 24 overloads; Powerdrive adds 5 stacks per Combat Ability charge consumed.
- The setting `num_stacks_per_hit_on_monster_or_captains = 1` exists, but the previously verified fixed-source search found only its definition. The active `cryptic_overload_keystone` template does not read it, so hitting Monsters or Captains is not documented as an active stack-gain effect.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L154-L182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L154-L182)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1232-L1283](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1232-L1283)
- [scripts/settings/talent/talent_settings_cryptic.lua — L264-L295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L264-L295)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1530-L1593](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1530-L1593)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1595-L1614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1595-L1614)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1619-L1771](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1619-L1771)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1773-L1808](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1773-L1808)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L96-L117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L96-L117)
- [scripts/settings/buff/buff_settings.lua — L763-L763](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L763)
- [scripts/settings/buff/buff_settings.lua — L1003-L1003](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1003-L1003)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1232-L1283](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1232-L1283)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L154-L182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L154-L182)

## Example assumptions and limits

- **Trigger**: Kills by you or allies in Coherency add **1 stack** for an ordinary enemy, or **2 stacks** for an Elite or Specialist.
- **Accumulation**: Up to **30 stacks**, with no countdown. Reaching or exceeding 30 triggers an overload and resets the count to **0**.
- **Overload effect**: You and allies in Coherency receive an **8-second** buff: **+15% Damage** and **15% less Toughness damage taken**. With no other damage bonuses, illustrative damage `100` becomes `115`; incoming Toughness damage `100` becomes `85`. With Critical Power Overload, an explosion also occurs around you and debuffs enemies.
- **Examples**: At 28 stacks, an Elite or Specialist kill adds 2 to reach 30, immediately triggering and resetting to zero. At 29, adding 2 still triggers only once; the amount beyond 30 does not carry over.

- At 28 stacks, an Elite or Specialist killed by an ally in Coherency adds 2 and triggers the group buff at exactly 30, then resets to zero.
- During the buff, with no other damage bonuses, base damage `100` becomes `115`. With no other damage reduction and all 100 incoming damage borne by Toughness, `100 × 0.85 = 85`.
- At 29 stacks, a 2-stack qualifying kill triggers once because `29 + 2 > 30`. The event increment is not processed as separate additional triggers, and the excess is discarded.
- The base Keystone has no stack countdown; reaching the overload threshold clears the accumulated stacks.
- Without Critical Power Overload, the base trigger plays visual and audio effects but creates no enemy-damage explosion. Enemy Electrocution and the damage-taken debuff belong to that modifier.
- Each group buff is applied only to non-companion units in the Coherency collection at the moment of triggering. Repeated overloads refresh the existing 8-second duration.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_overload_keystone`, hash `c79e512b`, entry 12890: **Power Overload**.
- Description key `loc_talent_cryptic_overload_keystone_coherency_desc`, hash `58d058f4`, entry 5766.

Full raw template:

~~~text
Kills by you and allies in coherency grant {low_stack:%s} stacks of {talent_name:%s}. Elite and Specialist enemy kills grant {elite_stacks:%s} stacks. Max {max_stacks:%s} stacks. Reaching max stacks causes an overload and reset to {zero:%s} stacks.

The overload grants you and allies in Coherency {damage:%s} Damage and {tdr:%s} Toughness Damage Reduction, for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `low_stack` | 1 | `number`: `num_stacks_per_kill = 1` |
| `talent_name` | Power Overload | `loc_string`: `loc_talent_cryptic_overload_keystone` |
| `elite_stacks` | 2 | `number`: `num_stacks_per_elite_or_special_kill = 2` |
| `max_stacks` | 30 | `number`: `max_stacks = 30` |
| `zero` | 0 | `number`: literal `0` |
| `damage` | +15% | `percentage`, prefix `+`: `damage = 0.15` |
| `tdr` | +15% | `percentage`, prefix `+`: `math_round((1 − 0.85) × 100)` |
| `duration` | 8 | `number`: `allies_buff_duration = 8` |

The formatting block in `cryptic_talents.lua` L1240–L1282 uses the verified settings. The Toughness placeholder explicitly converts the `0.85` damage-taken multiplier into a rounded reduction percentage. The alternative `low_stacks` mapping has the same value of 1 but is not used in this template.

Static reconstruction; not an observed game screen:

~~~text
Kills by you and allies in coherency grant 1 stacks of Power Overload. Elite and Specialist enemy kills grant 2 stacks. Max 30 stacks. Reaching max stacks causes an overload and reset to 0 stacks.

The overload grants you and allies in Coherency +15% Damage and +15% Toughness Damage Reduction, for 8s.
~~~

## English comparison

The English explicitly covers kills by the player and allies in Coherency, ordinary versus Elite/Specialist stack amounts, the 30-stack threshold, reset to zero, both group bonuses and their 8-second duration. These agree with the existing evidence. Single-event overflow, the lack of an accumulation timer, recipients at the trigger time and modifier-specific explosions are omitted details. No explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone/cryptic_overload_keystone.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/1f613b73-cb4f-4b13-8c3e-2355fe567ba3). The icon identifies the talent; it is not mechanism evidence.
