# Hive City Brawler: source evidence

[繁體中文](../broker_passive_dr_damage_tradeoff_on_stamina.md) | [Player description](README.md#broker_passive_dr_damage_tradeoff_on_stamina) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_dr_damage_tradeoff_on_stamina)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_dr_damage_tradeoff_on_stamina`; name key `loc_talent_broker_passive_dr_damage_tradeoff_on_stamina`; description key `loc_talent_broker_passive_dr_damage_tradeoff_on_stamina_desc`. Node `node_9fd091a0-462c-42cb-917a-ba7755c9fc94`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `damage_taken_multiplier = lerp(1, 0.8, stamina_fraction)` and `melee_damage = lerp(0, 0.2, 1 − stamina_fraction)`. The two stats are respectively multiplicative and additive.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L293-L301](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L293-L301)
- [scripts/utilities/attack/damage_calculation.lua — L587-L614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2195-L2232](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2195-L2232)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1734-L1765](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1734-L1765)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1762-L1787](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1762-L1787)

## Example assumptions and limits

- **Calculation**: Damage Reduction = 20% × current Stamina fraction; Melee Damage bonus = 20% × spent Stamina fraction. Both adjust as Stamina changes.

- **Half-Stamina example**: At 50% Stamina remaining, both bonuses are 10%. Counting only this effect, incoming damage of 100 becomes 90, and Melee Damage of 100 becomes 110.

- **Full/empty-Stamina example**: At full Stamina, incoming damage is 100 × 0.8 = 80, with no Melee Damage bonus. At empty Stamina, there is no Damage Reduction and Melee Damage is 100 × 1.2 = 120.

- **Other bonuses**: Damage Reduction uses an independent damage-taken multiplier. With another independent 20% reduction at full Stamina, damage is 100 × 0.8 × 0.8 = 64. Melee Damage adds to other bonuses at the same stage.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_dr_damage_tradeoff_on_stamina`, hash `514f1d9d`, entry 5281: **Hive City Brawler**.
- Description key `loc_talent_broker_passive_dr_damage_tradeoff_on_stamina_desc`, hash `2fe3c231`, entry 3120.

Full raw template:

~~~text
Up to {damage_reduction:%s} Damage Reduction, depending on available Stamina. Additionally, up to {damage_increase:%s} Melee Damage depending on spent Stamina.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage_reduction` | `damage_reduction_multiplier = 0.2` | Percentage: `20%` |
| `damage_increase` | `damage_multiplier = 0.2` | Percentage: `20%` |

The display mapping at `broker_talents.lua` L1734-L1765 reads the named Buff fields. For the missing display-field values only, `broker_buff_templates.lua` L2195-L2199 points to the talent settings, and [talent_settings_broker.lua L421-L424](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L421-L424) gives both as 0.2. Reuse the accepted percentage formatting. The `+` entry for damage increase sits inside `find_value`; no extra leading sign is inferred for this reconstruction.

Static reconstruction; not an observed game screen:

~~~text
Up to 20% Damage Reduction, depending on available Stamina. Additionally, up to 20% Melee Damage depending on spent Stamina.
~~~

## English comparison

The English correctly links Damage Reduction to available Stamina and Melee Damage to spent Stamina, with a 20% maximum for each. Linear interpolation and multiplicative/additive combination rules supplement the description. No clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_dr_damage_tradeoff_on_stamina.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/5cb31261-7422-451a-9aac-d1c38b48c802). The icon identifies the talent; it is not mechanism evidence.
