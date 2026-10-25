# In Your Face: source evidence

[繁體中文](../broker_passive_close_ranged_damage.md) | [Player description](README.md#broker_passive_close_ranged_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_close_ranged_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_close_ranged_damage`; name key `loc_talent_broker_passive_close_ranged_damage`; description key `loc_talent_broker_passive_close_ranged_damage_desc`. Node `node_61e47549-aaca-4298-977e-ece3e68e2372`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `conditional_stat_buffs` enables `damage_near = 0.25` and `damage_far = 0.1` when `wielded_slot == slot_secondary`. The actual condition is the wielded slot, rather than a separate attack-type check.
- The shared `distance_damage_buff` interpolates between the two Damage bonuses with a square-root factor rather than linear distance interpolation, adding the result to general `damage_stat_buffs`.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L284-L305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L305)
- [scripts/settings/damage/damage_settings.lua — L18-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25)
- [scripts/settings/talent/talent_settings_broker.lua — L234-L237](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L234-L237)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1039-L1062](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1039-L1062)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L923-L951](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L923-L951)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L63-L89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L63-L89)

## Example assumptions and limits

- **Distance bonus**: while wielding a Ranged weapon, deal 25% more Damage to targets within 12.5 metres. The bonus decreases with distance, remaining at 10% from 30 metres onwards.
- **Damage example**: at 16.875 metres, the falloff factor is √((16.875 − 12.5) ÷ 17.5) = 0.5. The bonus is 25% + (10% − 25%) × 0.5 = 17.5%. Base Damage of 100 becomes 117.5; with an existing 25% bonus at the same stage, the result is 100 × (1 + 25% + 17.5%) = 142.5.

The Damage example uses the stated 16.875 m distance and isolates this effect except where the existing 25% bonus at the same stage is explicitly included. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_close_ranged_damage`, hash `f80ef4b2`, entry 16115: **In Your Face**.
- Description key `loc_talent_broker_passive_close_ranged_damage_desc`, hash `be48df80`, entry 12268.

Full raw template:

~~~text
{damage_near:%s} Ranged Damage against targets within {range_near:%s} meters, scaling down to a minimum of {damage_far:%s} at {range_far:%s} meters and beyond.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{damage_near:%s}` | `talent_settings.broker_passive_close_ranged_damage.damage_near = 0.25` → `+25%` | `percentage`; prefix `+` |
| `{range_near:%s}` | `12.5` → `12.5` | `number`; existing adaptive precision |
| `{damage_far:%s}` | `talent_settings.broker_passive_close_ranged_damage.damage_far = 0.1` → `+10%` | `percentage`; prefix `+` |
| `{range_far:%s}` | `30` → `30` | `number` |

The existing display mapping at `broker_talents.lua` L927-L946 supplies both talent-setting percentages and literal range endpoints 12.5 and 30. Verified values and the shared number formatter are reused.

Static reconstruction; not an observed game screen:

~~~text
+25% Ranged Damage against targets within 12.5 meters, scaling down to a minimum of +10% at 30 meters and beyond.
~~~

## English comparison

The English's near/far bonuses and distances agree with the accepted evidence. Its broad Ranged Damage label does not state an exclusive attack-type test; the actual wielded-secondary-slot condition is a supplement. The square-root interpolation and additive Damage stage also supplement the short description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_close_ranged_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/caab00a6-dc0b-49ff-9d76-836ed680d22f). The icon identifies the talent; it is not mechanism evidence.
