# The Sweet Spot: source evidence

[繁體中文](../broker_passive_increased_weakspot_damage.md) | [Player description](README.md#broker_passive_increased_weakspot_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_increased_weakspot_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_increased_weakspot_damage`; name key `loc_talent_broker_passive_increased_weakspot_damage`; description key `loc_talent_broker_passive_increased_weakspot_damage_desc`. Node `node_52c9240d-6228-4b32-badf-76f17ef9b6da`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- On `hit_weakspot`, add `weakspot_damage = 0.25` to `finesse_buff_damage_multiplier`. Then `final_finesse_damage = base_finesse_damage × finesse_buff_damage_multiplier`.
- `base_finesse_damage` depends on the damage profile, armour, Weakspot modifier and Critical boost curve. The examples fix the normal and additional components and exclude other modifiers to show only the scope of this multiplier.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L675-L782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L675-L782)
- [scripts/settings/talent/talent_settings_broker.lua — L351-L353](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L351-L353)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1871-L1877](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1871-L1877)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1379-L1394](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1379-L1394)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1536-L1565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1536-L1565)

## Example assumptions and limits

- **Calculation**: On a Weakspot Hit, increase the additional Weakspot/Finesse Damage component. The whole damage amount is not multiplied by 1.25. Weapon, armour, attack type and whether the hit is Critical may change this component's share.

- **Damage example**: Assume a normal component of 100 and additional Weakspot component of 100, for 200 total. The bonus gives 100 + 100 × 1.25 = 225, a 12.5% increase in total damage.

- **Weapon difference example**: Another weapon with a normal component of 100 and additional component of 300 starts at 400. The bonus gives 100 + 300 × 1.25 = 475, a total increase of 18.75%. The same 25% Weakspot bonus therefore does not give every weapon the same total damage percentage increase.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_increased_weakspot_damage`, hash `3f4df881`, entry 4120: **The Sweet Spot**.
- Description key `loc_talent_broker_passive_increased_weakspot_damage_desc`, hash `54b98b85`, entry 5506.

Full raw template:

~~~text
{weakspot_damage:%s} Weakspot Damage.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `weakspot_damage` | `talent_settings.broker_passive_increased_weakspot_damage.weakspot_damage = 0.25` | Percentage with `+` prefix: `+25%` |

The accepted value supplies 0.25. The display mapping at `broker_talents.lua` L1379-L1394 reads the talent setting directly. Reuse the accepted percentage formatting.

Static reconstruction; not an observed game screen:

~~~text
+25% Weakspot Damage.
~~~

## English comparison

The English states a 25% Weakspot Damage bonus, matching the accepted statistic and value. It does not specify the additional Finesse component or promise a fixed 25% increase to total damage. The component formula and weapon-dependent examples supplement this abbreviated description; no clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_increased_weakspot_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/bd4b828f-f439-429d-a682-c036774235f3). The icon identifies the talent; it is not mechanism evidence.
