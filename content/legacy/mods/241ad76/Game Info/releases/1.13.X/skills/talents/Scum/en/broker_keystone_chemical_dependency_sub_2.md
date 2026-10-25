# Chem Fortified: source evidence

[繁體中文](../broker_keystone_chemical_dependency_sub_2.md) | [Player description](README.md#broker_keystone_chemical_dependency_sub_2) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_keystone_chemical_dependency_sub_2)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_keystone_chemical_dependency_sub_2`; name key `loc_talent_broker_keystone_chemical_dependency_sub_2`; description key `loc_talent_broker_keystone_chemical_dependency_sub_2_desc`. Node `node_29d36ca3-ef53-4d5b-980d-0d0353cf8541`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Talent settings are `sub_2_toughness_grant = 0.5` and `toughness_damage_taken_multiplier = 0.95`. With the special rule enabled, the proc buff first calls `Toughness.replenish_percentage(unit, 0.5)` on every `on_syringe_used` event, then adds the Chemical Dependency stack. Restoration therefore still executes when the stack cap has already been reached.
- The stack template enables `conditional toughness_damage_taken_multiplier = 0.95` only with the `sub_2_toughness` rule. `buff_settings` classifies this as `multiplicative_multiplier`, and `Buff._calculate_stat_buffs` multiplies it once per stack. Three stacks give 0.95 × 0.95 × 0.95 = 0.857375, reducing Damage by 1 − 0.857375 = 0.142625.
- `DamageTakenCalculation` multiplies this into the total Toughness Damage modifier. It reduces Toughness Damage, without directly reducing Health Damage.
- With maximum Toughness 100 and current Toughness 40, theoretical restoration is 100 × 0.50 = 50 and the deficit permits restoring that amount. With current Toughness 80, only 20 can be restored. Isolated incoming Toughness Damage 100 at 3 stacks becomes 100 × 0.95³ = 85.74, approximately 14.26 less.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2539-L2578](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2539-L2578)
- [scripts/settings/talent/talent_settings_broker.lua — L454-L463](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L454-L463)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3478-L3497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3478-L3497)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L3524-L3566](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3524-L3566)
- [scripts/settings/buff/buff_settings.lua — L1000-L1004](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1000-L1004)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/toughness/toughness.lua — L16-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L25)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/utilities/attack/damage_taken_calculation.lua — L225-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L225-L258)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L2539-L2578](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2539-L2578)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1589-L1611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1589-L1611)

## Example assumptions and limits

- **Stimm use:** each use restores 50% of maximum Toughness. With maximum Toughness 100 and at least 50 missing, it restores 50; with only 20 missing, it restores at most 20.

- **Per-stack reduction:** each stack multiplies Toughness Damage Taken by 0.95. At 3 stacks, 0.95³ = 0.8574 of the original Damage is taken, approximately 14.26% less Toughness Damage.

- **At the cap:** even when Dependency is already at maximum stacks, another Stimm use can restore Toughness and refresh the stack timer.

Restoration depends on missing Toughness and other restoration modifiers, and cannot exceed the maximum. The 0.95³ calculation isolates these three stacks; other Toughness Damage multipliers still combine under the game's Damage formula. The effect applies to Toughness Damage only. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_keystone_chemical_dependency_sub_2`, hash `a78f9241`, entry 10789: **Chem Fortified**.
- Description key `loc_talent_broker_keystone_chemical_dependency_sub_2_desc`, hash `bd5bf1c2`, entry 12216.

Full raw template:

~~~text
Using a Stimm replenishes {toughness:%s} Toughness. Additionally, each stack of {dependency:%s} grants {toughness_damage_reduction:%s} Toughness Damage Reduction.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | `broker_keystone_chemical_dependency.sub_2_toughness_grant = 0.5` | Percentage → `50%` |
| `dependency` | `loc_term_glossary_chemical_dependency` | Localized string → `Dependency` (hash `0d7c24c6`, entry 883) |
| `toughness_damage_reduction` | `broker_keystone_chemical_dependency_stack.conditional_stat_buffs.toughness_damage_taken_multiplier = 0.95` | Custom `(1 − value) × 100 = 5`, percentage with explicit `+` prefix → `+5%` |

Display mapping: [broker_talents.lua L2543–2573](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2543-L2573). All values and multiplicative stack behavior reuse accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
Using a Stimm replenishes 50% Toughness. Additionally, each stack of Dependency grants +5% Toughness Damage Reduction.
~~~

## English comparison

English states 50% Toughness restoration on Stimm use and 5% Toughness Damage Reduction per Dependency stack. These agree with maximum-Toughness restoration and the per-stack 0.95 multiplier. It does not specify how reductions combine across stacks or other modifiers, nor restoration at the cap and the deficit limit. Those are supplements; the per-stack wording does not promise 15% additive reduction at 3 stacks.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_chemical_dependency_sub_2.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/6c334888-08bb-4567-a6a2-1c4b4750409b). The icon identifies the talent; it is not mechanism evidence.
