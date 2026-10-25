# Enhanced Capacitance Protocols: source evidence

[繁體中文](../cryptic_dissector_ability_stacks.md) | [Player description](README.md#cryptic_dissector_ability_stacks) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_dissector_ability_stacks)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_dissector_ability_stacks`; name key `loc_talent_cryptic_dissector_ability`; description key `loc_talent_cryptic_dissector_ability_stacks_desc`. Node `node_dc1911a1-3b00-44d2-b830-00c0b18ed2e9`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent definition only enables the special rule `cryptic_dissector_combat_ability_restores_stacks`; it adds no numerical value. The `cryptic_dissector` `on_combat_ability` check requires this rule. Its `specific_proc_func` calculates `num_max_stacks − current_stacks` and adds stacks individually until full. It does not use `ability_cost`, so it restores all missing stacks rather than an amount based on charges spent.
- Ability actions explicitly send the event. `ActionAbilityBase` itself only manages ability resources; the `cryptic_discharge` and `cryptic_precision_stance_toggle` actions call `on_combat_ability` when their respective actions execute. The effect therefore follows the actual event, rather than every UI input.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1774-L1796](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1774-L1796)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1200-L1210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1200-L1210)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1412-L1431](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1412-L1431)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1465-L1477](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1465-L1477)
- [scripts/extension_systems/weapon/actions/action_ability_base.lua — L25-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_ability_base.lua#L25-L65)
- [scripts/extension_systems/ability/actions/action_cryptic_discharge.lua — L69-L80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_discharge.lua#L69-L80)
- [scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua — L104-L114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_cryptic_precision_stance_toggle.lua#L104-L114)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1200-L1210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1200-L1210)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1774-L1796](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1774-L1796)

## Example assumptions and limits

- **Trigger**: Using a Combat Ability fills Flensing Protocols to its **current maximum**; with Honed Dissector, it fills to **8 stacks**.
- **Example**: With the base cap of 6 and 3 stacks remaining, the next ability use restores 3 to reach 6. At a full 6, using the ability cannot exceed the cap.

- At `3/6` stacks, an ability use that triggers `on_combat_ability` restores 3, giving `6/6`. At full stacks, the missing count is zero and nothing is added.
- The effect requires the ability action to send `on_combat_ability`. Whether the ability otherwise consumes charges does not change the calculation that fills to the cap.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_dissector_ability`, hash `0f7aa923`, entry 1009: **Enhanced Capacitance Protocols**.
- Description key `loc_talent_cryptic_dissector_ability_stacks_desc`, hash `39219dd5`, entry 3701.

Full raw template:

~~~text
Using an Ability replenishes all stacks.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| None | No placeholders | The original description is literal text; no numerical substitution is needed. |

The original template has no placeholders. No additional source read was needed: the accepted talent definition in `cryptic_talents.lua` L1200–L1210 enables the special rule without a display value.

Static reconstruction; not an observed game screen:

~~~text
Using an Ability replenishes all stacks.
~~~

## English comparison

The English states that using an ability replenishes all stacks, matching the missing-stack calculation that fills to the current cap. The event requirement, independence from `ability_cost` and 6/8-stack examples explain implementation conditions. No explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_dissector_ability_stacks.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/de2e3c8c-8b4c-4859-87d0-c1416c07ef5c). The icon identifies the talent; it is not mechanism evidence.
