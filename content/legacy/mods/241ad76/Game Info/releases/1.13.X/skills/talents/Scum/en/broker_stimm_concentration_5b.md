# Hypex: source evidence

[繁體中文](../broker_stimm_concentration_5b.md) | [Player description](README.md#broker_stimm_concentration_5b) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_stimm_concentration_5b)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_stimm_concentration_5b`; name key `loc_talent_broker_stimm_concentration_b`; description key `loc_talent_buff_cooldown_on_melee_kills`. Node `node_cfc646a9-648a-402d-bcb5-7656f2852309`; category Stimm recipe; 5 points. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This recipe has `cost = max_points`, so it is bought once rather than repeatedly purchased as multiple ranks. Selected prerequisite recipes remain active together; each node's effects add or multiply according to its stat type.
- After the `proc_buff` is applied, it listens for `on_kill` with `CheckProcFunctions.on_melee_kill`. The child Buff has `duration = 1`, `max_stacks = 1` and `refresh_duration_on_stack = true`; retriggering only restarts its timer.
- The child Buff's base `combat_ability_resource_regen_modifier` is 0.75, multiplied by the recipe parameter 0.75 returned by `stat_buff_multiplier()`. `Buff._calculate_stat_buffs` multiplies these before adding the result, giving an actual bonus of 0.5625.
- `format_values.cooldown = 0.75` displays 75% in both Chinese and English. This is a numerical difference between the fixed implementation and their shared text; the actual value still needs in-game confirmation. It is not a Traditional Chinese mistranslation.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4091-L4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4128-L4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4210-L4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3926-L3958](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3926-L3958)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L825-L864](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L825-L864)
- [scripts/settings/buff/buff_settings.lua — L742-L742](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L742)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L116-L145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L116-L145)
- [scripts/settings/talent/talent_settings_broker.lua — L758-L768](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L758-L768)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua — L689-L712](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L689-L712)

## Example assumptions and limits

- **Recipe cost**: 5 points. Once selected, it takes effect when using the dedicated Stimm, with a basic duration of 15 seconds.

- **Trigger**: While the Stimm is active, killing an enemy with a Melee Attack grants an additional 56.25% Combat Ability Regeneration for 1 second.

- **Refreshing**: Another qualifying kill resets the 1-second countdown; it does not stack a second copy of the bonus.

- **Regeneration example**: Prerequisite Kalma I–IV provide 25%. Adding this 56.25% gives a multiplier of 1 + 25% + 56.25% = 1.8125 for that second. A base recovery of 1 second of cooldown per second becomes 1.8125 seconds for that second.

- **Scope**: This speeds up Combat Ability Regeneration only, without speeding up the dedicated Stimm's own recovery. It does not start the countdown while natural ability regeneration is paused.

When the Stimm effect ends, the trigger is removed. An already obtained 1-second internal Buff expires on its own timer; immediate simultaneous removal is not guaranteed. `syringe_broker_buff` reads and applies the same user's recipes together. Field sharing uses the provider's recipes, with externally controlled duration determined separately by the field settings. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_stimm_concentration_b`, hash `99e5c538`, entry 9921: **Hypex**.
- Description key `loc_talent_buff_cooldown_on_melee_kills`, hash `9c1a429b`, entry 10072.

Full raw template:

~~~text
While active, Melee Kills grant {cooldown:%s} Ability Cooldown Regeneration for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| Name `tier` | No tier → empty string | `Hypex {tier:%s}` → `Hypex` after trimming |
| `cooldown` | `format_values.cooldown = 0.75` | Percentage with `+`: `+75%` |
| `duration` | `melee_cd_duration = 1` | Number: `1`; raw template adds `s` |

The display mapping in `talent_settings_broker.lua` L758-L768 supplies the empty tier, `melee_cd_regen = 0.75` and `melee_cd_duration = 1`. Reuse the accepted recipe generator and percentage formatting. The display parameter is separate from the already verified multiplication that gives a 56.25% applied bonus.

Static reconstruction; not an observed game screen:

~~~text
While active, Melee Kills grant +75% Ability Cooldown Regeneration for 1s.
~~~

## English comparison

The independently read English explicitly promises +75% Ability Cooldown Regeneration on Melee Kills while active, for 1 second. Its trigger and duration match the accepted evidence, but its percentage contradicts the fixed implementation's 0.75 × 0.75 = 0.5625, or 56.25%. This is an English numerical erratum against the fixed-version evidence, shared with the Chinese source text rather than caused by Chinese translation; no in-game value was observed. Refreshing one non-stacking child Buff, the Combat Ability scope and pause behavior, recipe cost and lifetime are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_concentration_5b.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124) | [Existing attachment](https://github.com/user-attachments/assets/77f46379-3f89-4c81-8240-a0dc288fb868). The icon identifies the talent; it is not mechanism evidence.
