# Blazing Piety: source evidence

[繁體中文](../zealot_fanatic_rage.md) | [Player description](README.md#zealot_fanatic_rage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_fanatic_rage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_fanatic_rage`; name key `loc_talent_zealot_fanatic_rage`; description key `loc_talent_zealot_fanatic_rage_crit_desc`. Node `node_9e19621f-a49c-46a1-837a-056d1ea935bb`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The main Keystone grants `zealot_preacher_crits_grants_stack`. The Piety proc Buff listens to `on_minion_death` and `on_hit`. Enemy minion deaths are checked server-side for distance ≤25 metres and a different `side_name`; the code does not additionally check the killer. A hit classified as critical adds 1 stack. Both sources share the same talent resource.
- Resource is capped at 25. Each `_fanatic_rage_add_stack` sets the shared `remove_stack_t` to current time +8 seconds. Even at full stacks, additional events reset this timer and the 8-second Fury Buff. The base Fury Buff grants +0.15 Critical Chance, `duration=8`, and repeated application at full stacks refreshes duration.
- After 8 seconds without a new event, 1 stack is removed. Subsequent single-stack decay intervals are `abs(current_resource / 5 - 5) × 0.8` seconds: about 0.16 seconds at 24 remaining stacks, or 3.84 seconds at 1. Deaths and Critical Hits both reset this decay timer.
- The Fury Buff's `stop_func` clears resource to 0. Continued triggers can extend Fury; after interruption, Fury expiry resets the count, so an old sub-25 count cannot carry into the next cycle.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1071-L1107](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1071-L1107)
- [scripts/settings/talent/talent_settings_zealot.lua — L459-L468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L459-L468)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L765-L978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L765-L978)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L979-L999](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L979-L999)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1296-L1329](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1296-L1329)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1071-L1107](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1071-L1107)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1296-L1329](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1296-L1329)

## Example assumptions and limits

- **Building stacks**: Each enemy death within 25 metres grants 1 stack. Your own Critical Hits also grant 1, for both Melee and Ranged attacks. You do not have to kill the nearby dying enemy yourself.
- **Fury effect**: At 25 stacks, enter Fury and gain 15 percentage points of Critical Chance for 8 seconds. Further triggers at full stacks refresh duration.
- **Critical Chance example**: An existing 5% becomes 5% + 15% = 20%, not 5% × 1.15. Nearby deaths and Critical Hits count separately, so a critical kill may satisfy both.
- **Stack decay**: Before Fury, 8 seconds without a new trigger starts one-by-one stack decay. A new trigger resets the waiting period. Fury ending clears the count so it must be rebuilt.

- Distance uses the event position and player position. If the event has no position, the code uses the player's position as its event position.
- The decay-interval formula describes scheduling; actual cadence depends on server update steps.
- Critical Hit stacks require the main Keystone's special rule. This document uses the current main Keystone definition.
- The accepted Chinese comparison at hash `c80efade` records nearby enemy deaths and Critical Hits counting toward Fury in both languages. Minion targets, shared resource, decay and expiry reset supplement the description. Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_fanatic_rage`, hash `e87afd11`, entry 15098: **Blazing Piety**.
- Description key `loc_talent_zealot_fanatic_rage_crit_desc`, hash `c80efade`, entry 12922.

Full raw template:

~~~text
{crit_chance:%s} Critical Hit Chance for {duration:%s}s when in Fury. Fury is triggered when {max_stacks:%s} Enemies have died within {radius:%s}m. Critical Hits also count up towards triggering Fury.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `crit_chance` | 0.15 → +15% | `percentage`, `+` prefix; adds 15 percentage points |
| `duration` | 8 | `number`; `talent_settings_3.passive_1.duration` |
| `max_stacks` | 25 | `number`; corresponding `max_resource` |
| `radius` | 25 | `number`; corresponding `max_dist` |

The minimal display mapping at `zealot_talents.lua` L1071-L1098 uses the accepted passive settings. Its unused `talent_name` entry is not inserted.

Static reconstruction; not an observed game screen:

~~~text
+15% Critical Hit Chance for 8s when in Fury. Fury is triggered when 25 Enemies have died within 25m. Critical Hits also count up towards triggering Fury.
~~~

## English comparison

The English gives +15% Critical Chance for 8 seconds, a threshold of 25 deaths within 25 metres, and explicitly allows Critical Hits to count too. Read together, deaths and crits contribute toward the shared threshold, matching the accepted behavior. The percentage is additive probability. Killer independence, Melee/Ranged crits, shared timer refresh, decay and expiry reset are supplementary details; no English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone/zealot_fanatic_rage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/7e8dfc94-5f9b-4292-a4e6-8190bebb48bc). The icon identifies the talent; it is not mechanism evidence.
