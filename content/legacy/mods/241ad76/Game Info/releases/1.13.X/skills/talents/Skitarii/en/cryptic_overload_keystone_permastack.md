# Static Capacitor Drain: source evidence

[繁體中文](../cryptic_overload_keystone_permastack.md) | [Player description](README.md#cryptic_overload_keystone_permastack) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_overload_keystone_permastack)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_overload_keystone_permastack`; name key `loc_talent_cryptic_overload_keystone_permastack`; description key `loc_talent_cryptic_overload_keystone_permastack_desc`. Node `node_50941b31-87cd-4b4e-86f1-25c09ee86bb5`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- With this modifier active, the overload template counts triggers from zero. Each completed overload adds one to the count. At 8, 16 and 24, it grants the Damage, Toughness damage taken and Combat Ability resource regeneration buffs in that order. Each threshold awards its buff once; the sequence index advances after each award.
- Each bonus buff has a maximum of 1 stack and no `duration`. Damage is `additive_multiplier +0.15`; Toughness damage taken is `multiplicative_multiplier 0.8`. The third buff supplies both `combat_ability_resource_regen_modifier` and `combat_ability_resource_restored_modifier`, each `+0.25`.
- Natural Combat Ability recovery multiplies the base rate by its resource regeneration modifier. Direct restoration that uses the restoration modifier can also benefit from +25%; direct restoration that ignores stat buffs does not. For Skitarii Discharge, one charge costs 50 points and natural recovery is 1 point/s, becoming 1.25 points/s with this bonus alone.
- When the template stops, it removes the permanent bonuses it granted and the counting stacks. The bonuses have no countdown; the UI states that they last until death.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1325-L1373](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1325-L1373)
- [scripts/settings/talent/talent_settings_cryptic.lua — L3-L18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L3-L18)
- [scripts/settings/talent/talent_settings_cryptic.lua — L264-L295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L264-L295)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1530-L1572](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1530-L1572)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1637-L1645](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1637-L1645)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1704-L1723](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1704-L1723)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1840-L1866](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1840-L1866)
- [scripts/settings/buff/buff_settings.lua — L742-L743](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L743)
- [scripts/settings/buff/buff_settings.lua — L763-L763](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L763)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L773-L879](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L879)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1120-L1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1120-L1179)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua — L70-L92](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L70-L92)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1325-L1373](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1325-L1373)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1009-L1031](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1009-L1031)

## Example assumptions and limits

- **Counting overloads**: Each Power Overload counts once. At **8**, gain **+15% Damage**; at **16**, also gain **20% Toughness Damage Reduction**; at **24**, also gain **25% faster natural Capacitance recovery**. All three can remain together, with the description stating that they last until death.
- **Damage examples**: With base damage `100`, the 15% bonus gives `100 × (1 + 15%) = 115`. With an existing +20% bonus at the same calculation stage, it gives `100 × (1 + 20% + 15%) = 135`.
- **Toughness damage examples**: Incoming Toughness damage `100` becomes `100 × (1 − 20%) = 80`. Together with the overload's own 15% Toughness Damage Reduction, it becomes `100 × 0.8 × 0.85 = 68`.
- **Charge examples**: One charge requires 50 Capacitance points, normally recovered at 1 point/s. With this bonus, the rate is `1 × (1 + 25%) = 1.25` points/s, so one charge takes `50 ÷ 1.25 = 40` seconds. With another +50% natural recovery bonus, the rate is `1 × (1 + 50% + 25%) = 1.75` points/s.
- **Restoration exception**: Effects that directly restore a percentage of one charge do not universally restore 25% more. An ordinary kill that normally restores 1 point still restores 1 point.

- After the 8th overload, illustrative base damage `100` becomes `115`. After the 16th, the Toughness damage taken multiplier is `0.80`, turning 100 incoming Toughness damage into 80.
- At 50 points per charge and a natural recovery rate of 1 point/s, filling from zero takes 50 seconds; with +25%, the rate is 1.25 points/s and the time is 40 seconds.
- Counts refer to actual overload triggers, not kills or accumulated stacks. Overflow does not count as additional overloads.
- The recovery times assume the stated 50-point charge, 1 point/s base rate and no recovery pause. Other abilities' base resource values and additional modifiers can differ.
- The fixed evidence confirms that the bonus buffs have no countdown and are cleared when the Keystone passive stops. This template alone does not prove the complete reset process on death; retain that qualification on the English's until-death statement.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_overload_keystone_permastack`, hash `273f2585`, entry 2535: **Static Capacitor Drain**.
- Description key `loc_talent_cryptic_overload_keystone_permastack_desc`, hash `c193a6c8`, entry 12479.

Full raw template:

~~~text
Overloading {first_threshold:%s} Times grants you {damage:%s} Damage.

Overloading {second_threshold:%s} Times grants {tdr:%s} Toughness Damage Reduction.

Overloading {third_threshold:%s} Times increases {capacitance_keyword:%s} generation by {power:%s}.

Bonuses lasts until death.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `first_threshold` | 8 | `number`: `permanent_buffs_to_give_per_trigger_count[1].num_triggers_needed` |
| `second_threshold` | 16 | `number`: `permanent_buffs_to_give_per_trigger_count[2].num_triggers_needed` |
| `third_threshold` | 24 | `number`: `permanent_buffs_to_give_per_trigger_count[3].num_triggers_needed` |
| `damage` | +15% | `percentage`, prefix `+`: `permanent_damage = 0.15` |
| `tdr` | +20% | `percentage`, prefix `+`: `math_round((1 − 0.8) × 100)` |
| `capacitance_keyword` | Capacitance | `loc_string`: `loc_talent_cryptic_power_keyword` |
| `power` | +25% | `percentage`, prefix `+`: `permanent_combat_ability_cooldown_regen_modifier = 0.25` |

The formatting block in `cryptic_talents.lua` L1333–L1372 uses the existing verified thresholds and values. The Toughness reduction is reconstructed from the `0.8` damage-taken multiplier. `power_keyword` is another mapping to the same keyword, unused by this raw template.

Static reconstruction; not an observed game screen:

~~~text
Overloading 8 Times grants you +15% Damage.

Overloading 16 Times grants +20% Toughness Damage Reduction.

Overloading 24 Times increases Capacitance generation by +25%.

Bonuses lasts until death.
~~~

## English comparison

The English's 8 /16 /24 thresholds and +15% Damage /20% Toughness Damage Reduction /25% Capacitance generation agree with the verified settings. Awarding each buff once, simultaneous retention, additive and multiplicative calculations, and restoration-path exceptions are supplements. The evidence supports no timed expiry and cleanup when the passive stops, but does not independently establish the complete death-reset process. That narrow until-death point remains unconfirmed; it is not an explicit contradiction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_overload_keystone_permastack.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935640756) | [Existing attachment](https://github.com/user-attachments/assets/f0977f9f-2eb1-458a-a2c1-5e5642a284aa). The icon identifies the talent; it is not mechanism evidence.
