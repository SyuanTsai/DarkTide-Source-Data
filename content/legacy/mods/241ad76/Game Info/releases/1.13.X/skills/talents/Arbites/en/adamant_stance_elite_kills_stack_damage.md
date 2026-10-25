# Writ of Execution: source evidence

[繁體中文](../adamant_stance_elite_kills_stack_damage.md) | [Player description](README.md#adamant_stance_elite_kills_stack_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_stance_elite_kills_stack_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_stance_elite_kills_stack_damage`; node `node_7de43e6e-167c-4e17-9975-e23e5ef390ec`; category Ability; one point.

## Source-confirmed behavior and static derivation

- Castigator's Stance listens for kills during the stance only when this upgrade is selected. An Elite or Specialist kill adds one stack of the damage buff.
- The buff has a six-stack maximum, +7.5% per stack and a 12s duration that restarts when a stack is added. Its independent duration allows the last acquired stack to remain after the stance ends.
- This bonus enters the damage stat buff. Base damage is still calculated with hit information, target defenses and other damage stages.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L292-L319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L292-L319)
- [scripts/settings/talent/talent_settings_adamant.lua — L35-L51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L35-L51)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L735-L820](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L735-L820)
- [scripts/settings/buff/buff_settings.lua — L763-L764](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L763-L764)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L731](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L731)
- [scripts/utilities/attack/damage_calculation.lua — L236-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L292-L319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L292-L319)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1180-L1205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1180-L1205)

## Example assumptions and limits

- **Trigger**: During Castigator's Stance, each Elite or Specialist kill grants one stack of the damage bonus.

- **Stacks and duration**: Each stack gives +7.5% Damage, up to six stacks. Adding a stack resets the 12s duration. After the stance ends, existing stacks still expire according to their own remaining duration.

- **Example**: Six stacks give `6 × 7.5% = 45%`. With base damage 100 and an existing +25% bonus in the same damage stage, `100 × (1 + 45% + 25%) = 170 damage`.

Qualifying kills must occur while the stance buff is active. Acquired stacks have their own 12s duration; hit and target defenses still affect actual damage. The example isolates the listed additive bonuses in one damage stage. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_stance_elite_kills_stack_damage`, hash `e294998f`, entry 14691: **Writ of Execution**.
- Description key `loc_talent_adamant_stance_elite_kills_stack_damage_desc`, hash `4b6af938`, entry 4904.
- Stance-name lookup `loc_talent_adamant_stance_ability_name`, hash `126c5ef0`, entry 1190: **Castigator's Stance**.

Full raw template:

```text
During {stance_name:%s}, each Elite or Specialist Kill grants {damage:%s} Damage. Lasting {duration:%s}s. {stacks:%s} Max Stacks.
```

The `damage` mapping reads `damage_talent_damage` with percentage formatting and a `+` prefix. `duration` and `stacks` read the corresponding stance talent settings with number formatting. `stance_name` is a localized-name lookup. Values reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| stance_name | Castigator's Stance | Localized lookup of the stance-name key |
| damage | 0.075 | Percentage × 100 with `+` prefix → +7.5% |
| duration | 12 | Number formatting |
| stacks | 6 | Number formatting |

Static reconstruction; not an observed game screen:

```text
During Castigator's Stance, each Elite or Specialist Kill grants +7.5% Damage. Lasting 12s. 6 Max Stacks.
```

## English comparison limits

The independently read English matches the stance and kill conditions, per-stack Damage, duration and stack cap. Refresh, post-stance retention and calculation examples are supplementary. No explicit English contradiction is established. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_stance_elite_kills_stack_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/f7454987-ea7e-474e-bb22-3c3ead9adb1b). The icon identifies the talent; it is not mechanism evidence.
