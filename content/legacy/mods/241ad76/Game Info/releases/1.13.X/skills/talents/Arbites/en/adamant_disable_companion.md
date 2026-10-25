# Lone Wolf: source evidence

[繁體中文](../adamant_disable_companion.md) | [Player description](README.md#adamant_disable_companion) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_disable_companion)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_disable_companion`; node `node_75d31c92-2869-4bbb-8f63-f0f7b9e15bdf`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- On talent-buff activation, the server calls the companion spawner to remove the companion. The direct stat buff supplies damage +0.20, attack speed +0.10, `toughness_damage_taken_modifier = −0.15` and `extra_max_amount_of_grenades = +1`.
- The replenishment buff observes only `grenade_ability`. It reads the selected Blitz name: `adamant_shock_mine` uses 90s and other grenade abilities 45s. When the deficit changes from zero to positive, it schedules the next restoration. Each cycle restores only one charge, clears the timer and starts a new wait for any remaining deficit.
- Talent settings also contain `blitz_replenish_time = 60`, but the raw description does not reference that placeholder and the replenishment buff does not read it. The existing evidence does not support treating 60s as the actual supply cadence. The Blitz definition has a generic stat buff that expands capacity using `extra_max_amount_of_grenades`.
- Damage enters the shared calculation with its general damage-taken multipliers/modifiers. The defensive bonus uses `toughness_damage_taken_modifier` in Toughness damage calculation, so this 15% applies only to Toughness damage.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L773-L836](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L773-L836)
- [scripts/settings/talent/talent_settings_adamant.lua — L197-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L197-L205)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2131-L2255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2131-L2255)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua — L93-L115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L93-L115)
- [scripts/utilities/attack/damage_calculation.lua — L587-L615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L615)
- [scripts/utilities/attack/damage_taken_calculation.lua — L234-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1127-L1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1179)
- [scripts/utilities/attack/damage_calculation.lua — L236-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L773-L836](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L773-L836)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L860-L885](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L860-L885)

## Example assumptions and limits

- **Replacement effect**: Selecting Lone Wolf removes your Cyber-Mastiff. You gain +20% Damage, +10% Attack Speed, +15% Toughness Damage Reduction and +1 maximum Blitz charge.

- **Damage and speed examples**: Isolating this talent, base damage 100 becomes `100 × 1.2 = 120 damage`; with an existing same-stage 25% damage bonus, it becomes 145. An attack action with adjustable speed taking 1s instead takes `1 ÷ 1.1 ≈ 0.91s`. Toughness damage 100 becomes 85; with an existing same-stage 10% Toughness damage reduction, it becomes 75.

- **Replenishment example**: When at least one ordinary grenade charge is missing, the timer starts and restores one after 45s. A missing Voltaic Shock Mine charge instead waits 90s. After restoring a charge, the next charge waits through a new timer; no timer runs at full charges.

Isolating Lone Wolf's defensive modifier, `100 × (1 − 0.15) = 85 Toughness damage`. If two ordinary grenades are missing, the first replenishes after 45s and the second after another 45s cycle; Voltaic Shock Mine uses 90s cycles instead.

The 60s `blitz_replenish_time` setting has no consumer in this template; it may be an unused field or a remnant from another version. That existing question remains open. Damage and Toughness examples are in points; durations and replenishment intervals in seconds. Examples isolate the stated modifiers or explicitly include a same-stage modifier. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed. Wording differences are compared against existing implementation evidence without assuming a translation error.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_disable_companion`, hash `fad692c8`, entry 16282: **Lone Wolf**.
- Description key `loc_talent_adamant_disable_companion_replenish_split_desc`, hash `fe3bded9`, entry 16508.
- Grenade-name lookup `loc_talent_ability_adamant_grenade_improved`, hash `1502f5e7`, entry 1362: **Arbites Grenade**.
- Mine-name lookup `loc_talent_ability_shock_mine`, hash `db593af0`, entry 14215: **Voltaic Shock Mine**.

Full raw template:

```text
You are no longer accompanied by your Cyber-Mastiff. Gain {tdr:%s} Toughness Damage Reduction, {attack_speed:%s} Attack Speed, {damage:%s} Damage, and {charges:%s} increased Charges on your Blitz Abilities.

You also replenish charges of your Blitz Ability depending on the one chosen. {grenade_blitz_name:%s} every {grenade_time:%s}s, {shock_mine_name:%s} every {time_shock_mine:%s}s.
```

The display mappings read `talent_settings.disable_companion`. Damage and Attack Speed use default percentage formatting with a `+` prefix. `tdr` uses its explicit manipulation in place of default percentage multiplication, with a `+` prefix. Charges use number formatting with a `+` prefix; interval fields use number formatting. The two Blitz names are localized lookups. The mapped `time` value of 60 is absent from this raw template and is not added to its reconstruction. Values reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| tdr | −0.15 | Explicit abs(value) × 100 with `+` prefix → +15% |
| attack_speed | 0.10 | Percentage × 100 with `+` prefix → +10% |
| damage | 0.20 | Percentage × 100 with `+` prefix → +20% |
| charges | 1 | Number with `+` prefix → +1 |
| grenade_blitz_name | Arbites Grenade | Localized lookup of the grenade-name key |
| grenade_time | 45 | Number → 45; template adds s |
| shock_mine_name | Voltaic Shock Mine | Localized lookup of the mine-name key |
| time_shock_mine | 90 | Number → 90; template adds s |

Static reconstruction; not an observed game screen:

```text
You are no longer accompanied by your Cyber-Mastiff. Gain +15% Toughness Damage Reduction, +10% Attack Speed, +20% Damage, and +1 increased Charges on your Blitz Abilities.

You also replenish charges of your Blitz Ability depending on the one chosen. Arbites Grenade every 45s, Voltaic Shock Mine every 90s.
```

## English comparison limits

The independently read English matches removal, the personal stats, extra capacity and both replenishment intervals. Deficit timing, sequential one-charge restoration, full-capacity behavior, the unused 60s field and numerical examples are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone/adamant_disable_companion.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/a2aadd19-f969-47d7-96f3-3021eb1fb5c8). The icon identifies the talent; it is not mechanism evidence.
