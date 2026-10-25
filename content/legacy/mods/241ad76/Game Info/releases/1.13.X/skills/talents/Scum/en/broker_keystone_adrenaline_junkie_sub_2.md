# Adrenaline Smiter: source evidence

[繁體中文](../broker_keystone_adrenaline_junkie_sub_2.md) | [Player description](README.md#broker_keystone_adrenaline_junkie_sub_2) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_adrenaline_junkie_sub_2)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_adrenaline_junkie_sub_2`; name key `loc_talent_broker_keystone_adrenaline_junkie_sub_2`; description key `loc_talent_broker_keystone_adrenaline_junkie_sub_2_desc`. Node `node_8277fab7-51c3-4697-aa79-d80ddcb6060e`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `talent_settings` sets `sub_2_kill_additional_grant = 4` and `sub_2_kill_additional_elite_grant = 10`. With the `extra_killing_blow_stacks` special rule enabled, the `on_hit` handler returns immediately. The `on_kill` handler first runs the core's hit/Critical stack grants, then adds 4 stacks and, if `CheckProcFunctions.on_elite_kill` is true, another 10.
- The shared proc check requires `attack_type = melee`, so this applies only to Melee kills. `on_elite_kill` requires both `attack_result = died` and `params.tags.elite`; a kill with only the `special` tag is not an Elite kill.
- These stacks still enter the core `broker_keystone_adrenaline_junkie_stack` and follow its 30-stack cap, timer reset, one-at-a-time decay, and Frenzy trigger on reaching the cap.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_broker.lua — L464-L480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L464-L480)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2728-L2768](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2728-L2768)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3630-L3679](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3630-L3679)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L96-L105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L96-L105)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L120-L133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L133)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L368-L370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L370)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3686-L3698](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3686-L3698)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buff_extension_base.lua — L631-L663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L631-L663)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2728-L2768](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2728-L2768)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1880-L1902](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1880-L1902)

## Example assumptions and limits

- **Trigger**: an ordinary Melee kill grants the core's 1 hit stack plus this upgrade's 4 stacks, for 5 total. A Critical Melee kill also grants the core's Critical stack, for 6 total.
- **Elite kills**: killing an Elite grants another 10 stacks, giving 15 for an ordinary Elite kill or 16 for a Critical Elite kill.
- **Non-killing hits**: a Melee attack that does not kill its target grants no stacks. Even a Critical non-killing hit does not trigger the core's additional Critical stack.
- **Elite check**: the extra 10 stacks depend on the Elite classification. An enemy classified only as a Specialist does not qualify for this Elite bonus.

**Kill examples**: an ordinary non-Critical Melee kill grants 1 + 4 = 5 stacks; an ordinary Critical Melee kill grants 1 + 1 + 4 = 6; a non-Critical Elite kill grants 1 + 4 + 10 = 15; a Critical Elite kill grants 1 + 1 + 4 + 10 = 16. These assume the core keystone is active and the 30-stack cap has not been reached. With other Adrenaline special rules selected, calculate hit stacks under their respective conditions. The Elite +10 uses the `elite` tag and does not apply to every Specialist or `special` enemy. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_adrenaline_junkie_sub_2`, hash `11bcd450`, entry 1151: **Adrenaline Smiter**.
- Description key `loc_talent_broker_keystone_adrenaline_junkie_sub_2_desc`, hash `e0b9d68a`, entry 14572.

Full raw template:

~~~text
Killing Blows now grants {stacks:%s} additional stacks of {adrenaline:%s}. Elite Killing Blows grants {elite_stacks:%s} additional stacks. Non-Killing Blows grants none.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{stacks:%s}` | `broker_keystone_adrenaline_junkie.sub_2_kill_additional_grant = 4` → `+4` | `number`; prefix `+` |
| `{elite_stacks:%s}` | `broker_keystone_adrenaline_junkie.sub_2_kill_additional_elite_grant = 10` → `+10` | `number`; prefix `+` |
| `{adrenaline:%s}` | `loc_term_glossary_adrenaline` → Adrenaline | `loc_string` |

The existing display mapping at `broker_talents.lua` L2732-L2759 reads the two additional-kill grant values from the core buff and supplies the Adrenaline glossary key. Verified values are reused. **Adrenaline** resolves from `loc_term_glossary_adrenaline`, hash `c4f3b84d`, entry 12704.

Static reconstruction; not an observed game screen:

~~~text
Killing Blows now grants +4 additional stacks of Adrenaline. Elite Killing Blows grants +10 additional stacks. Non-Killing Blows grants none.
~~~

## English comparison

The English distinguishes killing from non-killing blows and describes +4 and +10 as additional stacks, matching the accepted grants. The retained core hit/Critical grants determine the final totals. The wording does not specify Melee-only scope, the Elite tag check, interactions with other special rules, or the core cap and decay rules; these are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_adrenaline_junkie_sub_2.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/29f93050-b0a8-48ca-88fe-2e40d9769a99). The icon identifies the talent; it is not mechanism evidence.
