# Redoubled Zeal: source evidence

[繁體中文](../zealot_additional_charge_of_ability.md) | [Player description](README.md#zealot_additional_charge_of_ability) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_additional_charge_of_ability)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_additional_charge_of_ability`; name key `loc_talent_zealot_dash_has_more_charges`; description key `loc_talent_zealot_dash_has_more_charges_desc`. Node `node_f562ee33-5fec-4016-a312-d10e7af1cd32`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent definition points `player_ability` to `PlayerAbilities.zealot_targeted_dash_improved_double`. This ability uses the improved dash as its base and sets `max_charges=2`; `TalentSettings.combat_ability_3.max_charges=2`.
- The base dash has `cooldown=30`, `max_charges=1`, `resource_cost_per_charge=cooldown`, and `resource_regeneration=1`. The double-charge variant changes the charge limit while retaining the resource cost and recharge rate.
- `PlayerUnitAbilityExtension` represents cooldown progress with a single resource pool. Each use deducts one charge's resource cost, and a charge returns when the pool reaches that cost threshold again. With both charges spent, resource 0→30 takes 30 seconds to restore one; 0→60 takes 60 seconds to restore both.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L429-L451](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L429-L451)
- [scripts/settings/talent/talent_settings_zealot.lua — L304-L318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L304-L318)
- [scripts/settings/talent/talent_settings_zealot.lua — L428-L430](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L428-L430)
- [scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua — L7-L36](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/zealot_abilities.lua#L7-L36)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L773-L875](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L875)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1323-L1461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1323-L1461)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L429-L451](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L429-L451)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L698-L724](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L698-L724)

## Example assumptions and limits

- **Charges**: Fury of the Faithful can hold 2 uses. Both uses share the same cooldown resource.
- **Cooldown example**: After using both consecutively, the first charge returns after about 30 seconds and both return after about 60 seconds. Waiting 30 seconds does not refill both at once. If you use only one, only that expenditure needs to recharge.

- These times assume natural recharge is neither paused nor accelerated and no other mechanism refunds resource. Other combat ability cooldown effects can change the actual HUD cooldown.
- The maximum is 2 charges; excess refunds cannot be stored as a third charge.
- This describes recharge of the charge pool. It does not describe the ability animation, dash distance, or a separate fixed countdown after each use.
- The Chinese source note records that both languages at hash `13ade9bb` describe 2 charges. Shared resource and recharge timing are omitted details, not errors. Actual game presentation remains unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_dash_has_more_charges`, hash `973b6f3c`, entry 9770: **Redoubled Zeal**.
- Description key `loc_talent_zealot_dash_has_more_charges_desc`, hash `13ade9bb`, entry 1272.

Full raw template:

~~~text
{talent_name:%s} now has {charges:%s} charges.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_maniac_attack_speed_after_dash`: Fury of the Faithful | `loc_string`; name hash `813869f7`, entry 8392 |
| `charges` | 2 | `number`; `talent_settings_2.combat_ability_3.max_charges` |

The existing talent definition at `zealot_talents.lua` L429-L447 supplies the name key and charge count. The paired name comes from the same English batch. Charge resource behavior reuses the accepted Chinese evidence.

Static reconstruction; not an observed game screen:

~~~text
Fury of the Faithful now has 2 charges.
~~~

## English comparison

Read independently, “now has 2 charges” matches the improved dash variant's limit. The English does not promise parallel recharge or a complete refill in 30 seconds. The shared pool, timing assumptions, and cap are supplementary details; no English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/ability_modifier/zealot_additional_charge_of_ability.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/35487761-88d3-4091-ac1b-bde3020e300e). The icon identifies the talent; it is not mechanism evidence.
