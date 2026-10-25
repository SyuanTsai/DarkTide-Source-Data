# Castigator's Stance: source evidence

[繁體中文](../adamant_stance.md) | [Player description](README.md#adamant_stance) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_stance)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_stance`; node `node_f1a66593-132e-4464-9c20-c7a7cf79a4b0`; category Ability; one point.

## Source-confirmed behavior and static derivation

- The ability has one charge and a 50s cooldown; the stance buff lasts 10s. The stance action calls maximum-Toughness replenishment on the server.
- The buff supplies Movement Speed +15%, PowerLevel +20%, a damage-taken multiplier of 0.3, and two action movement-penalty multipliers of zero. It also blocks Sprint.
- When the stance ends, it adds a separate 2s defensive buff using the same 0.3 damage-taken multiplier.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L195-L255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L195-L255)
- [scripts/settings/talent/talent_settings_adamant.lua — L35-L51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L35-L51)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua — L60-L75](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L60-L75)
- [scripts/settings/ability/ability_templates/adamant_stance.lua — L22-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/ability_templates/adamant_stance.lua#L22-L39)
- [scripts/extension_systems/ability/actions/action_stance_change.lua — L177-L179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/actions/action_stance_change.lua#L177-L179)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L706-L804](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L706-L804)
- [scripts/utilities/attack/power_level.lua — L25-L91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/utilities/attack/damage_calculation.lua — L587-L614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L195-L255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L195-L255)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L353-L381](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L353-L381)

## Example assumptions and limits

- **Activation and replenishment**: Replenish all Toughness on activation. The stance lasts 10s and has a 50s base cooldown.

- **Stance effects**: Gain 15% Movement Speed and 20% Strength (PowerLevel). Damage taken is multiplied by 0.3, a 70% reduction. Weapon-action movement penalties are reduced to zero, but you cannot Sprint.

- **Replenishment and damage example**: Starting at 40/100 Toughness, activation restores `100 − 40 = 60`, bringing Toughness to 100/100. Isolating this ability's damage-taken multiplier, an incoming hit of 100 becomes `100 × 0.3 = 30 damage`. Damage reduction continues for another 2s after the stance ends.

- **Power and movement example**: Isolating this effect, PowerLevel 500 becomes `500 × 1.2 = 600`, and movement speed 5m/s becomes `5 × 1.15 = 5.75m/s`. PowerLevel then enters the separate Damage, Impact and Cleave formulas; these outputs do not all simply increase by 20%.

Damage taken is calculated together with other defensive modifiers; difficulty, enemy attack type and other damage adjustments can change the actual result. The examples isolate this ability's modifiers and reuse fixed-version evidence. They are static derivations; game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_stance_ability_name`, hash `126c5ef0`, entry 1190: **Castigator's Stance**.
- Description key `loc_talent_adamant_stance_ability_power_description`, hash `b712c4e8`, entry 11815.

Full raw template:

```text
Enter the {talent_name:%s} for {duration:%s}s, during which you have {movement_speed:%s} Movement Speed, {damage_taken:%s} Reduced Damage Taken, {strength:%s} Strength, {movement_reduction:%s} Reduced Movement Speed Penalty from Actions, but you cannot Sprint. On activation, you replenish all Toughness.

Base Cooldown: {cooldown:%s}s.
```

The display maps `strength` to the stance's `damage` setting, whose accepted runtime effect is PowerLevel. Damage-taken and action-penalty reduction each use the explicit manipulation `100 * (1 - value)` once. The mapped `damage`, `cooldown_percent` and `toughness` fields are not placeholders in this raw template.

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | Castigator's Stance | Localized lookup of the name key |
| duration | 10 | Number formatting |
| movement_speed | 0.15 | Percentage × 100 with `+` prefix → +15% |
| damage_taken | 0.3 | 100 × (1 − value) with `+` prefix → +70% |
| strength | 0.2 | Percentage × 100 with `+` prefix → +20% |
| movement_reduction | 0 | 100 × (1 − value), no positive prefix → 100% |
| cooldown | 50 | Number formatting |

Static reconstruction; not an observed game screen:

```text
Enter the Castigator's Stance for 10s, during which you have +15% Movement Speed, +70% Reduced Damage Taken, +20% Strength, 100% Reduced Movement Speed Penalty from Actions, but you cannot Sprint. On activation, you replenish all Toughness.

Base Cooldown: 50s.
```

## English comparison limits

The independently read English matches the stance's named effects, replenishment, restriction and numerical display values. Strength is interpreted against the existing PowerLevel evidence. Capacity, post-stance defensive duration and calculation details are supplementary. No explicit English contradiction is established. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability/adamant_stance.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/4eb18874-83b0-4e2f-bf2b-c91001a15371). The icon identifies the talent; it is not mechanism evidence.
