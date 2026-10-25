# Adrenaline Frenzy: source evidence

[繁體中文](../broker_keystone_adrenaline_junkie.md) | [Player description](README.md#broker_keystone_adrenaline_junkie) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_adrenaline_junkie)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_adrenaline_junkie`; name key `loc_talent_broker_keystone_adrenaline_junkie`; description key `loc_talent_broker_keystone_adrenaline_junkie_desc`. Node `node_887dd932-ea4e-42cb-b294-64f30771d7e0`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Settings are `regular_grant = 1`, `crit_grant = 1`, `adrenaline_duration = 2`, `adrenaline_max_stacks = 30`, `frenzy_duration = 10`, `frenzy_max_stacks = 1`, `melee_attack_speed = 0.1` and `melee_damage = 0.25`.
- The proc check accepts only `attack_type = melee`. An ordinary hit grants 1 stack; `CheckProcFunctions.on_crit` adds another 1. At 30 stacks, `on_reached_max_stack_func` adds the Frenzy buff and disables `refresh_duration_on_remove_stack` on the stacking buff. Its conditional exit then clears that stack buff.
- The Adrenaline stack buff uses `refresh_duration_on_stack` and `refresh_duration_on_remove_stack`. A new stack resets the shared timer; expiry internally removes one stack and restarts that timer, producing one-stack decay every 2 seconds without further hits. The Frenzy buff has `max_stacks = 1` and `refresh_duration_on_stack = true`, so retriggering can refresh its 10-second duration.
- Both `melee_attack_speed` and `melee_damage` are `additive_multiplier` entries in `buff_settings`. Isolated Melee Attack Speed is 1 + 0.10 = 1.10, giving approximately 1 ÷ 1.10 = 0.91 seconds for a previously 1-second affected action. `damage_calculation` adds the Melee Damage term to its Damage multiplier sum: alone, 100 × (1 + 0.25) = 125; with another 20% at the same stage, 100 × (1 + 0.20 + 0.25) = 145, rather than multiplying the bonuses separately.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_broker.lua — L464-L480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L464-L480)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2614-L2697](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2614-L2697)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3600-L3685](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3600-L3685)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3686-L3759](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3686-L3759)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3761-L3804](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3761-L3804)
- [scripts/extension_systems/buff/buffs/buff.lua — L29-L44](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44)
- [scripts/extension_systems/buff/buffs/buff.lua — L619-L630](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L630)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buff_extension_base.lua — L631-L663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L631-L663)
- [scripts/settings/buff/buff_settings.lua — L863-L869](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L863-L869)
- [scripts/utilities/attack/damage_calculation.lua — L236-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L245)
- [scripts/utilities/attack/damage_calculation.lua — L295-L320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L320)
- [scripts/utilities/attack/damage_calculation.lua — L582-L612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L582-L612)
- [scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua — L45-L51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua#L45-L51)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2614-L2697](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2614-L2697)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L690-L721](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L690-L721)

## Example assumptions and limits

- **Trigger:** each Melee hit grants 1 stack. A Critical hit adds another 1, for 1 + 1 = 2 stacks from one Critical Melee hit.

- **Stacks and decay:** the maximum is 30 stacks. Each stack gain resets the 2-second timer. If no further stack is gained, one stack is removed and the timer restarts from that removal; another stack then expires every 2 seconds.

- **At the cap:** the 30th stack triggers Frenzy and clears the Adrenaline stack buff. Frenzy lasts 10 seconds, and retriggering restarts its timer.

- **Frenzy speed:** the additive Melee Attack Speed multiplier changes from 1 to 1.10. An affected action originally taking 1 second takes approximately 1 ÷ 1.10 = 0.91 seconds.

- **Frenzy Damage:** +25% Melee Damage is additive Damage modification. With only this effect, base Damage 100 becomes 125.

Damage examples describe only the additive Damage-modification stage. Weapon Damage, hit location, armour, Critical/Weakspot effects and Damage Taken modifiers still affect the final result. Weapon actions and other speed modifiers affect actual attack duration; 0.91 seconds isolates the +10% speed ratio. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_adrenaline_junkie`, hash `016dda96`, entry 80: **Adrenaline Frenzy**.
- Description key `loc_talent_broker_keystone_adrenaline_junkie_desc`, hash `b4493ff1`, entry 11622.

Full raw template:

~~~text
Melee Hits grants you a stack of {adrenaline:%s}. Critical Melee Hits grants {on_crit:%s} additional Stack. Not gaining a stack within {duration:%s}s will remove a stack instead.

At {max_stacks:%s} Stacks, remove all stacks of {adrenaline:%s} and gain {frenzy:%s}.

{frenzy:%s} grants {attack_speed:%s} Attack Speed and {melee_damage:%s} Melee Damage, lasting {frenzy_duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `adrenaline` | `loc_term_glossary_adrenaline` | Localized string → `Adrenaline` (hash `c4f3b84d`, entry 12704) |
| `on_crit` | `broker_keystone_adrenaline_junkie.crit_grant = 1` | Number with explicit `+` prefix → `+1` |
| `duration` | `broker_keystone_adrenaline_junkie_stack.duration = 2` | Number → `2` |
| `max_stacks` | `broker_keystone_adrenaline_junkie_stack.max_stacks = 30` | Number → `30` |
| `frenzy` | `loc_term_glossary_adrenaline_frenzy` | Localized string → `Adrenaline Frenzy` (hash `659d0629`, entry 6613) |
| `attack_speed` | `broker_keystone_adrenaline_junkie_proc.stat_buffs.melee_attack_speed = 0.1` | Percentage with explicit `+` prefix → `+10%` |
| `melee_damage` | `broker_keystone_adrenaline_junkie_proc.stat_buffs.melee_damage = 0.25` | Percentage with explicit `+` prefix → `+25%` |
| `frenzy_duration` | `broker_keystone_adrenaline_junkie_proc.duration = 10` | Number → `10` |

Display mapping: [broker_talents.lua L2618–2692](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2618-L2692). Values reuse accepted evidence; glossary names use the same English resource.

Static reconstruction; not an observed game screen:

~~~text
Melee Hits grants you a stack of Adrenaline. Critical Melee Hits grants +1 additional Stack. Not gaining a stack within 2s will remove a stack instead.

At 30 Stacks, remove all stacks of Adrenaline and gain Adrenaline Frenzy.

Adrenaline Frenzy grants +10% Attack Speed and +25% Melee Damage, lasting 10s.
~~~

## English comparison

English gives the accepted Melee-hit gain, additional Critical stack, 2-second decay, 30-stack conversion and 10-second Frenzy values. Attack Speed is unqualified in the last sentence; the mapped and accepted stat is specifically Melee Attack Speed. This scope detail, sequential timer resets, retrigger refresh and additive Damage calculation supplement the description. Its wording does not explicitly promise a Ranged Attack Speed bonus.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone/broker_keystone_adrenaline_junkie.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/2b18473f-9818-4d07-98ab-b4c7995dbf8d). The icon identifies the talent; it is not mechanism evidence.
