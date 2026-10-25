# Targeted Brutality: source evidence

[繁體中文](../adamant_charge_cooldown_reduction.md) | [Player description](README.md#adamant_charge_cooldown_reduction) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_charge_cooldown_reduction)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_charge_cooldown_reduction`; node `node_ed72b6e9-1213-4760-bd1c-28c0f93c1f55`; category Ability; one point.

## Source-confirmed behavior and static derivation

- During the charge, this upgrade listens for effective hits caused by the ability and accepts only charge-hit damage. Each ordinary hit accumulates 0.5s; each hit carrying an Elite, Specialist or Monstrosity classification accumulates 1s.
- At charge end, the accumulated amount is capped at 5s and restores cooldown through the Combat Ability resource-replenishment flow. Each hit does not immediately reset the ability.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L126-L148](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L126-L148)
- [scripts/settings/talent/talent_settings_adamant.lua — L19-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L141-L178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L141-L178)
- [scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua — L43-L58](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/adamant_abilities.lua#L43-L58)
- [scripts/settings/talent/talent_settings_adamant.lua — L19-L34](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L19-L34)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1127-L1154](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1154)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L126-L148](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L126-L148)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1302-L1324](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1302-L1324)

## Example assumptions and limits

- **Cooldown restoration**: Each effective charge hit on an ordinary enemy restores 0.5s of Combat Ability Cooldown. Each hit on an Elite, Specialist or Monstrosity restores 1s.

- **Settlement and cap**: Restoration is applied when the charge ends, up to 5s per charge and limited by the remaining cooldown. This upgrade counts hit events and does not exclude repeated targets as the Toughness-recovery upgrade does.

- **Example**: Six ordinary hits contribute `6 × 0.5 = 3s`; three higher-category target hits contribute `3 × 1 = 3s`. Their 6s total is limited to 5s at settlement. The base cooldown of 20s can therefore receive at most a 5s restoration from this upgrade.

Only effective hits caused by the charge count. Their restoration is applied together at charge end, with a fixed 5s cap per charge. The example isolates this upgrade and expresses cooldown amounts in seconds. Values and behavior reuse the fixed-version evidence; examples are static derivations. Game execution and the final game UI were not observed.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_charge_cooldown_name`, hash `0c2dd4db`, entry 782: **Targeted Brutality**.
- Description key `loc_talent_adamant_charge_cooldown_alt_description`, hash `775c291d`, entry 7759.

Full raw template:

```text
Restore {cooldown:%s}s Ability Cooldown for each hit, increased to {cooldown_elite:%s} on Elite, Specialist, or Monstrosity. {max_cooldown:%s} Max Cooldown restored.
```

The display mappings read `talent_settings.combat_ability.charge` and use number formatting without a `+` prefix. Values reuse the accepted evidence. The first value has an `s` suffix in the template; the subsequent amounts refer to cooldown in the same sentence and are preserved exactly below.

| Placeholder | Value | Formatting |
|---|---|---|
| cooldown | 0.5 | Number → 0.5; template adds s |
| cooldown_elite | 1 | Number → 1 |
| max_cooldown | 5 | Number → 5 |

Static reconstruction; not an observed game screen:

```text
Restore 0.5s Ability Cooldown for each hit, increased to 1 on Elite, Specialist, or Monstrosity. 5 Max Cooldown restored.
```

## English comparison limits

The independently read English matches the ordinary-hit amount, higher-category amount and restoration cap. The charge-only filter, settlement event, repeated-hit counting, remaining-cooldown limit, base cooldown and example are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/ability_modifier/adamant_charge_cooldown_reduction.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/d2b1945d-2300-4993-a649-00c1e3858e0d). The icon identifies the talent; it is not mechanism evidence.
