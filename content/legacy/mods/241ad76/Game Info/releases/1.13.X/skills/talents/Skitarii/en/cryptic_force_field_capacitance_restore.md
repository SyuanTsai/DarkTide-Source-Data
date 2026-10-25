# Kinetic Repulsion: source evidence

[繁體中文](../cryptic_force_field_capacitance_restore.md) | [Player description](README.md#cryptic_force_field_capacitance_restore) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_force_field_capacitance_restore)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_force_field_capacitance_restore`; name key `loc_talent_cryptic_force_field_health_damage_limit`; description key `loc_talent_cryptic_force_field_capacitance_restore`. Node `node_4a240e77-1a0d-4833-ad5c-82bec1eca8c2`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The node adds the special rule `cryptic_force_field_generates_capacitance_based_on_hits_blocked`. The field's Health extension increases its attack counter and enters the restoration branch only when `attack_type` is `ranged` or `damage_profile.count_as_ranged_attack` is true. Each attack restores at most 0.025 charges. The individual field object's accumulated `_capacitance_restored` is capped at 0.75 and resets when the next field object is created. Restoration explicitly targets `combat_ability` via `restore_ability_charge_percentage`, so the percentage is based on the resource cost of one Combat Ability charge and capped at maximum resource by the shared ability resource system. It does not refill force-field uses in the Blitz slot and is not based on damage dealt. If Voltaic Resistance is also selected, both effects use the same absorbed-Ranged-Attack check, but track different resources/outputs separately.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L892-L919](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L892-L919)
- [scripts/settings/talent/talent_settings_cryptic.lua — L164-L180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L164-L180)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua — L24-L39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L24-L39)
- [scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua — L68-L100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/cryptic_personal_force_field_unit_health_extension.lua#L68-L100)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1081-L1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1317-L1320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1317-L1320)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L892-L919](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L892-L919)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1912-L1935](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1912-L1935)

## Example assumptions and limits

- **How it works**: Each Ranged Attack absorbed by Integrated Refraction Emitter restores 0.025 charges of Capacitance, up to 0.75 charges per field.
- **Example**: Absorbing 10 Ranged Attacks restores 0.25 charges. At 30 attacks, the 0.75-charge cap is reached; further attacks do not increase the total.
- **How it works**: This restores Combat Ability Capacitance, without refilling force-field uses already spent.
- **Point example**: At 50 points per Capacitance charge, each absorbed attack restores 50 × 2.5% = 1.25 points; 30 attacks restore at most 50 × 75% = 37.5 points. Recovery is based on attack count, so a higher-damage attack does not restore more.

- Each absorbed Ranged Attack restores 0.025 charges of Capacitance, up to 0.75; 30 attacks reach the cap.
- Only Ranged Attacks or attacks flagged as ranged count. Recovery does not depend on damage amount and is capped at 0.75 charges per field.
- The restored resource is `combat_ability` Capacitance, not Integrated Refraction Emitter uses.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_force_field_health_damage_limit`, hash `fc74e086`, entry 16396: **Kinetic Repulsion**.
- Description key `loc_talent_cryptic_force_field_capacitance_restore`, hash `e9096586`, entry 15133.

Full raw template:

~~~text
While {talent_name:%s} is active, absorbed attacks generate {capacitance:%s} {capacitance_keyword:%s}, up to a maximum of {max_capacitance:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{talent_name:%s}` | `loc_talent_cryptic_grenade_ability_force_field` → Integrated Refraction Emitter | `loc_string`; hash `1b8e6a78`, entry 1796 |
| `{capacitance:%s}` | 0.025 → 2.5% | `percentage`; no prefix |
| `{capacitance_keyword:%s}` | `loc_talent_cryptic_power_keyword` → Capacitance | `loc_string`; hash `ecc15a9f`, entry 15388 |
| `{max_capacitance:%s}` | 0.75 → 75% | `percentage`; no prefix |

The minimally read display mapping is `cryptic_talents.lua` L892-L919. Its percentage values use `force_field.force_field_capacitance_restore.capacitance_per_attack` and `max_capacitance`; the accepted evidence supplies 0.025 and 0.75. Both localized strings are paired to the same-build English keys above.

Static reconstruction; not an observed game screen:

~~~text
While Integrated Refraction Emitter is active, absorbed attacks generate 2.5% Capacitance, up to a maximum of 75%.
~~~

## English comparison

The 2.5% per absorbed attack and 75% per-field maximum agree with the accepted evidence, measured against one Combat Ability charge. The ranged classification, maximum-resource cap, reset for a new field, attack-count basis and distinction from Blitz uses are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_force_field_capacitance_restore.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/9eb6e468-224f-4d7c-b696-cc58aa08f532). The icon identifies the talent; it is not mechanism evidence.
