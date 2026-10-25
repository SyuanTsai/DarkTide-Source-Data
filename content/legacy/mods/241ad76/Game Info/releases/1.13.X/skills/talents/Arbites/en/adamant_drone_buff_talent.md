# Inspiring Recitation: source evidence

[繁體中文](../adamant_drone_buff_talent.md) | [Player description](README.md#adamant_drone_buff_talent) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_drone_buff_talent)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_drone_buff_talent`; node `node_0db1fa97-50eb-44b9-9c27-730da36404d1`; category Ability; one point.

## Source-confirmed behavior and static derivation

- The Nuncio-Aquila's area logic grants an additional ally buff on entering the valid radius. Leaving the radius or ending the area removes the buff.
- The Toughness-damage multiplier is 0.7 (30% reduction), the revive-speed modifier is +30%, and the general attack-speed modifier is +10%.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L596-L621](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L596-L621)
- [scripts/settings/talent/talent_settings_adamant.lua — L67-L83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L67-L83)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L466-L475](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L466-L475)
- [scripts/settings/projectile/player_projectile_templates.lua — L1185-L1205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L1185-L1205)
- [scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua — L224-L295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/proximity/side_relation_gameplay_logic/proximity_area_buff_drone.lua#L224-L295)
- [scripts/settings/buff/buff_settings.lua — L1000-L1004](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1000-L1004)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L731](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L731)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/extension_systems/interaction/interactor_extension.lua — L134-L157](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/interaction/interactor_extension.lua#L134-L157)
- [scripts/settings/interaction/interaction_settings.lua — L18-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/interaction/interaction_settings.lua#L18-L24)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L596-L621](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L596-L621)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1230-L1252](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1230-L1252)

## Example assumptions and limits

- **Ally bonuses**: Allies affected within the Nuncio-Aquila's area take 30% less Toughness damage, gain +30% Revive Speed and gain +10% Attack Speed.

- **Damage example**: Isolating this upgrade, an attack that would deal 100 Toughness damage instead deals `100 × 0.7 = 70 Toughness damage`. Other Toughness damage reductions still participate in the actual calculation.

- **Speed examples**: Isolating this effect, a revive taking 5s instead takes `5 ÷ 1.3 ≈ 3.85s`, and an attack action with adjustable speed taking 1s instead takes `1 ÷ 1.1 ≈ 0.91s`. Leaving the Nuncio-Aquila's area removes these bonuses.

The upgrade requires the ally to be affected by the Nuncio-Aquila's area. The examples isolate this upgrade, excluding other modifiers. Damage is measured in Toughness points and durations in seconds. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_drone_buff_talent`, hash `86ef2385`, entry 8764: **Inspiring Recitation**.
- Description key `loc_talent_adamant_drone_buff_talent_alt_desc`, hash `b7d2618a`, entry 11855. The `[Writer]` suffix is resource metadata.

Full raw template:

```text
Allies affected also gain {tdr:%s} Toughness Damage Reduction, {revive_speed:%s} Revive Speed, and {attack_speed:%s} Attack Speed.
```

The display mappings use `talent_settings.blitz_ability.drone`. The `tdr` value uses its explicit manipulation instead of the default percentage multiplication; the speed values use default percentage formatting. No mapping specifies a `+` prefix. Values reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| tdr | 0.7 | Explicit round((1 − value) × 100) → 30% |
| revive_speed | 0.30 | Percentage × 100 → 30% |
| attack_speed | 0.10 | Percentage × 100 → 10% |

Static reconstruction; not an observed game screen:

```text
Allies affected also gain 30% Toughness Damage Reduction, 30% Revive Speed, and 10% Attack Speed.
```

## English comparison limits

The independently read English matches the affected allies and all three stat values. Exact area entry and removal, the damage example and the speed-to-duration examples are supplementary. No explicit English contradiction is established. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_drone_buff_talent.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/53dd2864-62b6-4e6c-9d62-e79831b33c78). The icon identifies the talent; it is not mechanism evidence.
