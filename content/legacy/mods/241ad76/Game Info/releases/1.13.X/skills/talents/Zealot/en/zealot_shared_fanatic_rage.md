# Infectious Zeal: source evidence

[繁體中文](../zealot_shared_fanatic_rage.md) | [Player description](README.md#zealot_shared_fanatic_rage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_shared_fanatic_rage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_shared_fanatic_rage`; name key `loc_talent_zealot_shared_fanatic_rage`; description key `loc_talent_zealot_shared_fanatic_rage_new_desc`. Node `node_2a3a12a6-983c-4998-8541-83e9266b031d`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This upgrade grants the `zealot_preacher_spread_fanatic_rage` special rule. Personal Fury's `start_func` checks this rule server-side, then calls `CoherencyUtils.add_buff_to_all_in_coherency(unit, buff_name, t, true)`. The helper's `true` argument excludes the caster.
- Allies receive the separate `zealot_fanatic_rage_shared` Buff: `duration=8`, `max_stacks=1`, and `offensive_2.crit_chance=0.10`. This shared value does not read Righteous Warrior's +10% special rule, so the ally bonus stays fixed at +10 percentage points.
- Personal Fury's `start_func` runs only when the Buff is first created. Further applications at full stacks use the max-stack refresh path to reset personal Fury's start time without rerunning `start_func`. The shared Buff can therefore expire 8 seconds after its initial application even while personal Fury has been refreshed.
- This node has no separate cooldown or stacks. Recipients come from the Coherency list when Fury starts; the effect does not continuously scan and supply new allies.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1178-L1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1178-L1199)
- [scripts/settings/talent/talent_settings_zealot.lua — L489-L492](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L489-L492)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L921-L999](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L921-L999)
- [scripts/extension_systems/coherency/coherency_utils.lua — L5-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_utils.lua#L5-L25)
- [scripts/extension_systems/buff/buff_extension_base.lua — L560-L589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1377-L1399](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1377-L1399)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1178-L1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1178-L1199)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1377-L1399](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1377-L1399)

## Example assumptions and limits

- **Operation**: When Blazing Piety starts, other allies currently in Coherency gain 10 percentage points of Critical Chance for 8 seconds. You do not receive this shared bonus yourself.
- **Critical Chance example**: An ally's existing 5% becomes 5% + 10% = 15% during the effect. Your Righteous Warrior does not also increase their 10-point bonus.
- **Duration limits**: Later refreshing your own Fury does not extend the 8 seconds already given to allies. Allies who enter Coherency during the effect do not immediately receive it.

- The timing difference follows the accepted fixed-SHA start callback and refresh-path derivation; it has not been tested in game. Actual duration and presentation still need in-game confirmation.
- The code adds the Buff only to the Coherency set at activation; this node does not continuously monitor allies entering or leaving Coherency.
- An ally's other sources of additive Critical Chance affect their final chance separately.
- The accepted Chinese comparison at hash `95bbc544` records both languages describing allies receiving the bonus while personal Blazing Piety is active. The accepted 1.13.1 implementation distributes a separate 8-second Buff once at Fury start and does not redistribute it on personal refresh, so continued personal Fury can outlast the ally bonus.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_shared_fanatic_rage`, hash `57b9d494`, entry 5692: **Infectious Zeal**.
- Description key `loc_talent_zealot_shared_fanatic_rage_new_desc`, hash `95bbc544`, entry 9677.

Full raw template:

~~~text
Allies in Coherency have {crit_chance:%s} Critical Hit Chance while {talent_name:%s} is active.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `crit_chance` | 0.10 → +10% | `percentage`, zero decimals, `+` prefix; `talent_settings_3.offensive_2.crit_chance` |
| `talent_name` | `loc_talent_zealot_fanatic_rage`: Blazing Piety | `loc_string`; hash `e87afd11`, entry 15098 |

The minimal display mapping at `zealot_talents.lua` L1178-L1194 supplies the accepted shared chance and localized main Keystone name.

Static reconstruction; not an observed game screen:

~~~text
Allies in Coherency have +10% Critical Hit Chance while Blazing Piety is active.
~~~

## English comparison

The English's +10% Critical Hit Chance and Coherency recipient group agree with the accepted shared effect. Its phrase “while Blazing Piety is active” promises the ally bonus throughout personal activity. Against the accepted fixed-version implementation, personal Fury refresh can extend that activity without refreshing the separately applied 8-second ally Buff, and newly entering allies are not continuously supplied. That duration/availability claim is an English contradiction against the accepted source behavior; actual game timing remains unobserved. Excluding the caster, one-stack cap, lack of independent cooldown and independence from Righteous Warrior are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_shared_fanatic_rage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/d1133aca-9af8-4b47-934f-d073de0d4e1c). The icon identifies the talent; it is not mechanism evidence.
