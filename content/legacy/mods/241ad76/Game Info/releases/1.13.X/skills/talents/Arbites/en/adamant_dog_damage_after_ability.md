# Kill Order: source evidence

[繁體中文](../adamant_dog_damage_after_ability.md) | [Player description](README.md#adamant_dog_damage_after_ability) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_dog_damage_after_ability)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_dog_damage_after_ability`; node `node_6f8fc4e4-c5cd-423f-b612-4eb26dc2dadb`; category Ability; one point.

## Source-confirmed behavior and static derivation

- This passive grants a 12s Cyber-Mastiff damage buff after Combat Ability activation. It can trigger again during the active effect, resetting the duration.
- For companion non-Bleed damage, the general damage calculation reads the owner's companion-damage modifier and adds it to the damage bonus. This upgrade's +50% therefore applies to the Cyber-Mastiff's attacks.
- This modifier uses the same additive stat type as Bloodlust's +75% companion damage during Castigator's Stance, allowing them to combine additively.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1387-L1406](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1387-L1406)
- [scripts/settings/talent/talent_settings_adamant.lua — L247-L250](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L247-L250)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2531-L2546](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2531-L2546)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L821-L835](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L821-L835)
- [scripts/settings/buff/buff_settings.lua — L742-L744](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L744)
- [scripts/utilities/attack/damage_calculation.lua — L265-L276](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L265-L276)
- [scripts/settings/talent/talent_settings_adamant.lua — L19-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1387-L1406](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1387-L1406)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1625-L1648](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1625-L1648)

## Example assumptions and limits

- **Activation effect**: Using your Combat Ability grants your Cyber-Mastiff +50% Damage for 12s.

- **Example**: For base non-Bleed Cyber-Mastiff damage of 100, isolating this upgrade gives `100 × (1 + 50%) = 150 damage`. If Bloodlust's +75% is active in the same additive stage, the result is `100 × (1 + 50% + 75%) = 225 damage`, before target defenses.

- **Refresh and limits**: Using your Combat Ability again resets the 12s duration without stacking this upgrade's bonus with itself. Bleed damage does not receive this companion-damage bonus.

These examples isolate the stated companion-damage modifiers on non-Bleed damage. Actual results depend on enemy defenses and other damage modifiers. The owner's companion-damage bonus does not apply to Bleed. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_dog_damage_after_ability`, hash `4f3d7eb4`, entry 5154: **Kill Order**.
- Description key `loc_talent_adamant_dog_damage_after_ability_desc`, hash `9f9da5ce`, entry 10302.
- The separate stance upgrade is **Bloodlust**: `loc_talent_adamant_stance_bloodlust`, hash `f426a613`, entry 15856.

Full raw template:

```text
{companion_damage:%s} Damage for your Cyber Mastiff, for {duration:%s}s after using your Combat Ability.
```

The display mappings read `talent_settings.dog_damage_after_ability`. `companion_damage` uses percentage formatting with a `+` prefix; `duration` uses number formatting. Values reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| companion_damage | 0.50 | Percentage × 100 with `+` prefix → +50% |
| duration | 12 | Number → 12; template adds s |

Static reconstruction; not an observed game screen:

```text
+50% Damage for your Cyber Mastiff, for 12s after using your Combat Ability.
```

## English comparison limits

The independently read English matches the Combat Ability trigger, Cyber-Mastiff beneficiary, damage value and duration. Refresh without self-stacking, the non-Bleed qualification and additive examples are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_dog_damage_after_ability.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/6283df18-7a2a-4a7b-adac-4a13c5cd6315). The icon identifies the talent; it is not mechanism evidence.
