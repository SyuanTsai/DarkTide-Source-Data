# Commendation from Condemnation: source evidence

[繁體中文](../adamant_charge_toughness.md) | [Player description](README.md#adamant_charge_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_charge_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_charge_toughness`; node `node_b0947b3d-cb39-43c3-8922-1a9c48dfb8d8`; category Ability; one point.

## Source-confirmed behavior and static derivation

- This upgrade accepts only hits caused by the charge ability and checks whether the target is an Elite, Specialist or Monstrosity.
- Each eligible target is deduplicated by unit identity. When the charge ends, it calculates 20% × eligible target count for Toughness and 15% × count for Stamina, capped separately at 100% and 75%.
- Settlement directly calls percentage Toughness replenishment and percentage Stamina addition. When a resource is near its maximum, its remaining deficit limits the actual increase.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L149-L175](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L149-L175)
- [scripts/settings/talent/talent_settings_adamant.lua — L19-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L180-L237](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L180-L237)
- [scripts/utilities/toughness/toughness.lua — L16-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L24)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L286](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L286)
- [scripts/utilities/attack/stamina.lua — L102-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119)
- [scripts/settings/talent/talent_settings_adamant.lua — L19-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/utilities/attack/stamina.lua — L102-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L149-L175](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L149-L175)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1276-L1301](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1276-L1301)

## Example assumptions and limits

- **Trigger condition**: Break the Line hits on Elites, Specialists or Monstrosities count distinct enemies. The same target counts only once in a single charge.

- **Recovery and caps**: Recovery is applied together when the charge ends. Each distinct eligible target replenishes 20% of maximum Toughness and 15% of maximum Stamina, capped at 100% of maximum Toughness and 75% of maximum Stamina. Neither recovery exceeds the resource's current deficit.

- **Example**: Hitting three distinct eligible targets replenishes `3 × 20% = 60% Toughness` and `3 × 15% = 45% Stamina`. Hitting the same enemy again does not increase the recovery.

Five or more distinct eligible targets still replenish at most 100% of maximum Toughness and 75% of maximum Stamina. Repeated hits on the same target within one charge do not count again; recovery exceeding the current deficit does not create surplus resources. Recovery percentages refer to maximum resources, not percentages of the missing amount. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_charge_toughness_name`, hash `1f97a4e8`, entry 2062: **Commendation from Condemnation**.
- Description key `loc_talent_adamant_charge_toughness_alt_description`, hash `af8a4ee4`, entry 11302.
- The associated ability is **Break the Line**: `loc_talent_adamant_charge_ability_name`, hash `c274ea7a`, entry 12546.

Full raw template:

```text
Replenish {toughness:%s} Toughness and {stamina:%s} Stamina for each Elite, Specialist, or Monstrosity hit, up to {toughness_max:%s} Toughness and {stamina_max:%s} Stamina.
```

The display mappings read `talent_settings.combat_ability.charge` and use default percentage formatting without a `+` prefix. Values reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| toughness | 0.20 | Percentage × 100 → 20% |
| stamina | 0.15 | Percentage × 100 → 15% |
| toughness_max | 1.00 | Percentage × 100 → 100% |
| stamina_max | 0.75 | Percentage × 100 → 75% |

Static reconstruction; not an observed game screen:

```text
Replenish 20% Toughness and 15% Stamina for each Elite, Specialist, or Monstrosity hit, up to 100% Toughness and 75% Stamina.
```

## English comparison limits

The independently read English matches the eligible enemy categories, both per-target recovery values and both caps. The charge-only trigger, settlement timing, distinct-unit rule, maximum-resource denominator, deficit cap and examples are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_charge_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/a0f08b1e-586b-4a65-b271-29d79874f573). The icon identifies the talent; it is not mechanism evidence.
