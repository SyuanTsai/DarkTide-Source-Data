# Serrated Maw: source evidence

[繁體中文](../adamant_dog_applies_brittleness.md) | [Player description](README.md#adamant_dog_applies_brittleness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_dog_applies_brittleness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_dog_applies_brittleness`; name key `loc_talent_adamant_dog_applies_brittleness`; description key `loc_talent_adamant_dog_applies_brittleness_desc`. Node `node_e992d16b-4372-4874-93ca-7a520cceb74c`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- The proc requires the player's own companion and the `initial_pounce` flag, then adds 6 stacks of `rending_debuff`. Ongoing pounce against Ogryns/Monsters also has `initial_pounce = true`. The generic debuff grants 0.025 per stack, caps at 16, lasts 5s and refreshes on another application.
- For eligible armour, `DamageCalculation` fills the armour damage modifier (ADM) toward 1, then converts excess with `overdamage_multiplier = 0.25`. Armour types with `rending_damage_multiplier = 0` do not use this example.

## Fixed source evidence

- [scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua — L227-L287](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/adamant_damage_profile_templates.lua#L227-L287)
- [scripts/settings/buff/weapon_buff_templates.lua — L366-L376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376)
- [scripts/utilities/attack/damage_calculation.lua — L63-L89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L63-L89)
- [scripts/utilities/attack/damage_calculation.lua — L629-L670](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L670)
- [scripts/settings/damage/armor_settings.lua — L8-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24)
- [scripts/settings/talent/talent_settings_adamant.lua — L259-L261](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L259-L261)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2724-L2748](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2724-L2748)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua — L40-L61](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L40-L61)
- [scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua — L125-L156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_companion_target_pounced_action.lua#L125-L156)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1464-L1478](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1464-L1478)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1379-L1406](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1379-L1406)

## Example assumptions and limits

- **Trigger and stacks**: The Cyber-Mastiff's initial pounce hit applies 15% Brittleness for 5s. Its suppression attacks against Ogryns and Monsters can continue to apply it. Each stack is 2.5%; one application adds 6 stacks. The shared cap is 16 stacks, or 40%. Another application resets the duration of all stacks.

- **Team benefit**: Brittleness stays on the enemy, so teammates attacking that target can also benefit. The damage increase depends on the attack's original armour damage modifier.

- **Damage examples**: With base damage 100 and an original armour modifier of 0.5, damage is 50. Adding 15% Brittleness gives 100 × (0.5 + 0.15) = 65, an actual 30% increase. If the armour supports excess-rending conversion and the original modifier is already 1, the result is 100 × (1 + 0.15 × 0.25) = 103.75. This is not a fixed 15% increase to final damage.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_dog_applies_brittleness`, hash `f882d8e5`, entry 16140: **Serrated Maw**.
- Description key `loc_talent_adamant_dog_applies_brittleness_desc`, hash `c858c05f`, entry 12936.

Full raw template:

```text
Your Cyber-Mastiff applies {stacks:%s} Stacks of Brittleness on attack.
```

| Placeholder | Value | Formatting |
|---|---|---|
| stacks | talent_settings.dog_applies_brittleness.stacks = 6 | Number → 6 |

Static reconstruction; not an observed game screen:

```text
Your Cyber-Mastiff applies 6 Stacks of Brittleness on attack.
```

## English comparison

The independently read English agrees with the owned companion and six-stack Brittleness amount. Its generic on-attack coverage versus the accepted initial-pounce predicate remains unconfirmed. Duration, refresh, cap, team benefit, armour calculation and examples are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_dog_applies_brittleness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/5df365c7-8213-4c06-acc5-2b00f0cda022). The icon identifies the talent; it is not mechanism evidence.
