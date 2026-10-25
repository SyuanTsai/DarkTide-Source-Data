# Pick Your Targets: source evidence

[繁體中文](../broker_ability_focus_sub_2.md) | [Player description](README.md#broker_ability_focus_sub_2) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_ability_focus_sub_2)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_ability_focus_sub_2`; name key `loc_talent_broker_ability_focus_sub_2`; description key `loc_talent_broker_ability_focus_sub_2_desc`. Node `node_276ffd37-efb4-4ced-b119-38aa2714359b`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Selecting the talent enables `broker_focus_rending`. While focus exists, `broker_focus_stance` applies `ranged_rending_multiplier = 0.15`. Ranged armour processing reads this as additive Rending, rather than a direct 15% Damage multiplier.
- After an eligible focus kill, enabling `sub_2_rending` adds `broker_focus_sub_2_damage`: `duration = 3`, `max_stacks = 5`, and `ranged_damage = 0.03` per stack. `refresh_duration_on_stack = true` refreshes the duration when adding a stack. `conditional_exit_func` ends the buff when focus disappears. Maximum additive Ranged Damage is 5 × 0.03 = 0.15.
- Ordinary kills require a death result, a Ranged attack (or a weapon configured as Ranged), and a hit position within 12.5 m of the attacker. There is no separate outline/highlight-status check. The Needle Pistol `on_minion_death` exception requires a tracked target that subsequently dies from Toxin, with the death position within 12.5 m of the current `params.attacking_unit`.
- `refresh_duration_on_remove_stack = true` resets the 3-second duration after one stack expires. With no further stacks added, one stack is lost every 3 seconds, rather than all stacks disappearing together after 3 seconds.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L171-L219](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L171-L219)
- [scripts/settings/talent/talent_settings_broker.lua — L119-L141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L119-L141)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L255-L314](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L255-L314)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L319-L346](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L319-L346)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L398-L450](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L398-L450)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L465-L485](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L465-L485)
- [scripts/settings/buff/broker_buff_utils.lua — L99-L190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L99-L190)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L306-L318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L306-L318)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L777-L792](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L792)
- [scripts/settings/buff/buff_settings.lua — L875-L878](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L875-L878)
- [scripts/settings/buff/buff_settings.lua — L942-L953](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L942-L953)
- [scripts/utilities/attack/damage_calculation.lua — L629-L660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L171-L219](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L171-L219)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L2048-L2070](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2048-L2070)

## Example assumptions and limits

- **Ranged Rending:** while focus is active, Ranged Attacks gain +15% Rending in armour penetration. This is not a direct 15% Damage increase.

- **Damage stacks:** each eligible Close Range Ranged kill adds one stack of +3% Ranged Damage, up to 5 stacks. A new kill refreshes the duration. After kills stop, one stack expires every 3 seconds; ending focus removes all remaining stacks.

- **Eligibility:** ordinary kills must occur within 12.5 m. A previously tracked enemy hit by the Needle Pistol can also trigger the effect if it later dies from Toxin within Close Range.

- **Damage example:** with only this effect and 5 stacks, base Damage 100 becomes 100 × (1 + 5 × 0.03) = 115. Other Ranged Damage bonuses add to the same pool.

Stack duration refreshes to 3 seconds, decays one stack at a time, and ends early with focus. Ordinary eligibility requires Close Range Ranged kills without a separate highlight-status check; the Needle Pistol exception retains its tracking, Toxin and distance conditions. The 15% Rending and maximum 15% Ranged Damage are separate effects: they are not 30% direct Damage or an additional ×1.15 Damage multiplier. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_ability_focus_sub_2`, hash `af69e03a`, entry 11293: **Pick Your Targets**.
- Description key `loc_talent_broker_ability_focus_sub_2_desc`, hash `4946598e`, entry 4753.

Full raw template:

~~~text
Gain {rending:%s} Rending for your Ranged Attacks while {focus:%s} is active. Additionally, killing highlighted enemies also grants {damage:%s} Ranged Damage, stacking {stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `rending` | `broker_focus_stance.conditional_stat_buffs.ranged_rending_multiplier = 0.15` | Percentage with explicit `+` prefix → `+15%` |
| `focus` | `loc_talent_broker_ability_focus_improved` | Localized string → `Enhanced Desperado` (hash `df173866`, entry 14474) |
| `damage` | `broker_focus_sub_2_damage.stat_buffs.ranged_damage = 0.03` | Percentage with explicit `+` prefix → `+3%` |
| `stacks` | `broker_focus_sub_2_damage.max_stacks = 5` | Number → `5` |

Display mapping: [broker_talents.lua L175–214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L175-L214). Values, localized ability name and formatting reuse the accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
Gain +15% Rending for your Ranged Attacks while Enhanced Desperado is active. Additionally, killing highlighted enemies also grants +3% Ranged Damage, stacking 5 times.
~~~

## English comparison

English distinguishes Ranged Rending from Ranged Damage and gives the accepted 15%, 3% per stack and 5-stack limit. It leaves the actual Close Range Ranged kill checks, lack of a separate highlight-status check, tracked Needle Pistol exception, 3-second refresh and sequential stack decay unstated. Those details supplement the short description. Neither the wording nor the evidence supports combining Rending and Damage as 30% direct Damage.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_focus_sub_2.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/732d190b-365f-4815-9d94-bc136cafd423). The icon identifies the talent; it is not mechanism evidence.
