# Hyper-Violence: source evidence

[繁體中文](../broker_passive_melee_damage_carry_over.md) | [Player description](README.md#broker_passive_melee_damage_carry_over) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_melee_damage_carry_over)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_melee_damage_carry_over`; name key `loc_talent_broker_passive_melee_damage_carry_over`; description key `loc_talent_broker_passive_melee_damage_carry_over_desc`. Node `node_ca3fd6b8-f002-4e51-875d-a234a153d071`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `_calculate_meleed_damage_carry_over` computes 0.25 × (`overkill_damage` − active bonus). `on_kill` does not restrict attack type but excludes `instakill`. While active, it only accepts a higher new value.
- `melee_damage_bonus` is a value, not a multiplier. `_base_damage` adds `buff_damage_bonus` after the general multiplier terms; later Damage processing can still modify the result.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2886-L2931](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2886-L2931)
- [scripts/utilities/attack/damage_calculation.lua — L293-L301](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L293-L301)
- [scripts/utilities/attack/damage_calculation.lua — L587-L614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2893-L2931](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2893-L2931)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1789-L1820](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1789-L1820)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1141-L1168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1141-L1168)

## Example assumptions and limits

- **Behavior**: On killing an enemy, 25% of the Damage exceeding its remaining Health becomes flat bonus Melee Damage for 1s. Special instant executions do not trigger this.

- **Damage example**: Dealing 300 Damage to an enemy with 100 Health remaining gives 200 overkill Damage and 200 × 25% = 50 bonus Damage. If the next Melee attack would deal 100 at this calculation stage, it becomes 150. This is flat bonus Damage, not a 50% increase.

- **Another kill**: During the effect, the current bonus is subtracted before calculating the new 25%. Only a higher new value replaces the bonus and restarts its timer. With 50 bonus Damage already active and 400 overkill Damage on the next kill, the new value is (400 − 50) × 25% = 87.5. If overkill is only 200, the new value of 37.5 is lower, so it neither replaces the bonus nor restarts the timer.

The original Chinese comparison records its overkill wording as matching the English difference definition; subtracting the active bonus and the replacement rule are supplementary. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_melee_damage_carry_over`, hash `14cf33e0`, entry 1346: **Hyper-Violence**.
- Description key `loc_talent_broker_passive_melee_damage_carry_over_desc`, hash `821fa540`, entry 8448.

Full raw template:

~~~text
Kills grants {percentage:%s} of the difference between the Damage dealt by your attack and the Health of the killed Enemy as Melee Damage for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{percentage:%s}` | `carry_over_percentage = 0.25` | `percentage`, `+` prefix → `+25%` |
| `{duration:%s}` | `active_duration = 1` | `number` → `1` |

The existing display map at `broker_talents.lua` L1789-L1820 reads the verified carry-over fraction and active duration. Reused percentage and number formatting give +25% and 1.

Static reconstruction; not an observed game screen:

~~~text
Kills grants +25% of the difference between the Damage dealt by your attack and the Health of the killed Enemy as Melee Damage for 1s.
~~~

## English comparison

The English describes a fraction of the attack-Damage/Health difference as Melee Damage, matching the flat carry-over bonus and 1s duration. It does not limit the triggering kill to Melee or describe a percentage multiplier on the next attack. Instant-execution exclusion, active-bonus subtraction, replacement/timer rules and the calculation stage are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_melee_damage_carry_over.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/5439d198-0b4c-4a05-ab95-fc67f67398c9). The icon identifies the talent; it is not mechanism evidence.
