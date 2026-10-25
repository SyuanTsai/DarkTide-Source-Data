# Chemical Dependency: source evidence

[繁體中文](../broker_keystone_chemical_dependency.md) | [Player description](README.md#broker_keystone_chemical_dependency) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_chemical_dependency)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_chemical_dependency`; name key `loc_talent_broker_keystone_chemical_dependency`; description key `loc_talent_broker_keystone_chemical_dependency_desc`. Node `node_3c497305-70ec-4d49-a1e8-2bc3fdc2504c`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Talent settings are `combat_ability_cooldown_regen_modifier = 0.10`, `duration = 90` and `max_stacks = 3`. The stack template applies 0.10 as `stat_buffs.combat_ability_resource_regen_modifier`, an `additive_multiplier` stat. Each stack adds 0.10 to the base multiplier of 1.
- The proc buff listens for `on_syringe_used`. Direct syringe use makes `action_use_syringe` send this event to the user's buff extension; Broker Stimm Field proximity logic also sends the same event to units receiving the field's syringe effects.
- The stack template has `refresh_duration_on_stack = true` and `refresh_duration_on_remove_stack = true`. Stacks share one `start_time`. Use resets the timer; expiry internally removes one stack and restarts it, giving one-stack decay every 90 seconds without new Stimms.
- `PlayerUnitAbilityExtension` calculates recovery as the base rate plus flat recovery, multiplied by `resource_regen_modifier`. Three stacks give 1 + 0.10 + 0.10 + 0.10 = 1.30 to that rate, so elapsed recovery time is approximately divided by 1.30. Isolated full linear recovery of 60 seconds becomes 60 ÷ 1.30 = 46.15 seconds.
- Using a Stimm at the 3-stack cap cannot add a fourth stack but refreshes the stack buff timer. With the Toughness-restoration upgrade, that use still separately executes its 50% Toughness restoration.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2465-L2511](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2465-L2511)
- [scripts/settings/talent/talent_settings_broker.lua — L454-L463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L454-L463)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3478-L3497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3478-L3497)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3524-L3566](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3524-L3566)
- [scripts/extension_systems/weapon/actions/action_use_syringe.lua — L129-L134](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_use_syringe.lua#L129-L134)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua — L297-L304](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_broker_stimm_field.lua#L297-L304)
- [scripts/settings/buff/buff_settings.lua — L742-L743](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L743)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buff_extension_base.lua — L560-L589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/extension_systems/buff/buff_extension_base.lua — L631-L663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L631-L663)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L839-L863](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L863)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2465-L2511](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2465-L2511)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1395-L1428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1395-L1428)

## Example assumptions and limits

- **Trigger:** each Stimm use grants 1 stack. First receiving the effects of a Stimm-containing Stimm Supply field also triggers it.

- **Stacks:** the maximum is 3. Each adds 10% to the Combat Ability resource-recovery multiplier. At 3 stacks this is 1 + 3 × 0.10 = 1.30, or 30% faster recovery than the base rate.

- **Timing:** the base duration is 90 seconds. A new stack resets the shared timer. After 90 seconds without another gain, one stack is lost and the timer restarts; subsequent stacks then expire one at a time every 90 seconds.

- **Recovery example:** if the same Combat Ability resource amount normally takes 60 seconds to recover, with uninterrupted recovery and no other modifiers, 3 stacks take approximately 60 ÷ 1.30 = 46.15 seconds.

The recovery example assumes a fixed base resource rate and uninterrupted recovery. Actual resource pools, recovery pauses, other modifiers and resource consumption change the result. The last use starts a 90-second timer until one stack is removed; another 90 seconds without a gain removes the next stack. The associated Toughness restoration is the Chem Fortified upgrade; the Chinese source's limit note calls it Chem Enhanced, whose own verified page instead provides Critical Chance. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_chemical_dependency`, hash `3c3f00ca`, entry 3924: **Chemical Dependency**.
- Description key `loc_talent_broker_keystone_chemical_dependency_desc`, hash `e80edf15`, entry 15060.

Full raw template:

~~~text
Using a Stimm grants you a stack of {dependency:%s} for {duration:%s}s.

For each stack, gain {cooldown_reduction:%s} Ability Cooldown Reduction.

Up to {max_stacks:%s} Max Stacks. Stacks decay one at a time.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `dependency` | `loc_term_glossary_chemical_dependency` | Localized string → `Dependency` (hash `0d7c24c6`, entry 883) |
| `duration` | `broker_keystone_chemical_dependency_stack.duration = 90` | Number → `90` |
| `cooldown_reduction` | `broker_keystone_chemical_dependency_stack.stat_buffs.combat_ability_resource_regen_modifier = 0.10` | Percentage with explicit `+` prefix → `+10%` |
| `max_stacks` | `broker_keystone_chemical_dependency_stack.max_stacks = 3` | Number → `3` |

Display mapping: [broker_talents.lua L2469–2506](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2469-L2506). All values reuse accepted evidence. The Cooldown Reduction placeholder reads the resource-recovery-rate stat.

Static reconstruction; not an observed game screen:

~~~text
Using a Stimm grants you a stack of Dependency for 90s.

For each stack, gain +10% Ability Cooldown Reduction.

Up to 3 Max Stacks. Stacks decay one at a time.
~~~

## English comparison

English agrees on Stimm use, 90 seconds, a 3-stack cap and decay one stack at a time. It names the +10% effect Ability Cooldown Reduction, while the display mapping and accepted mechanism apply 0.10 to resource-recovery rate. The wording does not define whether its percentage measures rate or elapsed cooldown, so a literal time-reduction percentage cannot be confirmed from that label alone. The verified 1.30-rate and 46.15-second example is retained without treating the terminology as a confirmed English numerical error. Field-trigger support, shared timer refresh, capped uses and recovery assumptions are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone/broker_keystone_chemical_dependency.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/9b42d72f-2429-446a-bf75-d5d87db98b36). The icon identifies the talent; it is not mechanism evidence.
