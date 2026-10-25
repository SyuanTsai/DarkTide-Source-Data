# Suppression Protocols: source evidence

[繁體中文](../adamant_hitting_multiple_gives_tdr.md) | [Player description](README.md#adamant_hitting_multiple_gives_tdr) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_hitting_multiple_gives_tdr)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_hitting_multiple_gives_tdr`; name key `loc_talent_adamant_hitting_multiple_gives_tdr`; description key `loc_talent_adamant_hitting_multiple_gives_tdr_desc`. Node `node_edc914ed-dc63-47f0-b8e5-97a051892616`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_hit` checks only `target_number == 3`, with no `attack_type` restriction. `active_duration = 5` and `toughness_damage_taken_multiplier = 0.8`. Hitting more targets does not increase the multiplier.

## Fixed source evidence

- [scripts/utilities/attack/damage_taken_calculation.lua — L234-L258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L258)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L303-L357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua — L251-L255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L251-L255)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2621-L2641](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2621-L2641)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1407-L1433](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1407-L1433)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L780-L805](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L780-L805)

## Example assumptions and limits

- **Trigger and refresh**: Hitting the third enemy in one attack grants 20% Toughness Damage Reduction for 5s. Both melee and ranged attacks qualify; triggering again resets the duration.

- **Damage-reduction example**: Isolating this effect, 100 points of Toughness damage becomes 100 × 0.8 = 80. With another independent 10% Toughness damage reduction, the result is 100 × 0.8 × 0.9 = 72.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_hitting_multiple_gives_tdr`, hash `9f1031c7`, entry 10269: **Suppression Protocols**.
- Description key `loc_talent_adamant_hitting_multiple_gives_tdr_desc`, hash `2e6f11ec`, entry 3027.

Full raw template:

```text
Hitting {hits:%s} or more enemies with an Attack grants you {tdr:%s} Toughness Damage Reduction for {duration:%s}s.
```

| Placeholder | Value | Formatting |
|---|---|---|
| hits | talent_settings.hitting_multiple_gives_tdr.num_hits = 3 | Number → 3 |
| tdr | talent_settings.hitting_multiple_gives_tdr.tdr = 0.8 | Custom round((1 − value) × 100) → 20 instead of default percentage conversion; + prefix and % suffix → +20% |
| duration | talent_settings.hitting_multiple_gives_tdr.duration = 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

```text
Hitting 3 or more enemies with an Attack grants you +20% Toughness Damage Reduction for 5s.
```

## English comparison

The independently read English agrees with the three-target threshold within one attack, unrestricted melee/ranged scope and +20% Toughness Damage Reduction for 5s. Duration refresh, lack of extra-target scaling and multiplicative calculation are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_hitting_multiple_gives_tdr.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/02fd58ae-50fc-461f-879d-70d77a2aff44). The icon identifies the talent; it is not mechanism evidence.
