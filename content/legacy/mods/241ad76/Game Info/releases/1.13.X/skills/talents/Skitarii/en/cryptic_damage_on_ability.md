# Moebian Conductor: source evidence

[繁體中文](../cryptic_damage_on_ability.md) | [Player description](README.md#cryptic_damage_on_ability) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_damage_on_ability)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_damage_on_ability`; name key `loc_talent_cryptic_damage_on_ability`; description key `loc_talent_cryptic_damage_on_ability_desc`. Node `node_ab833650-8296-4bca-b5ac-b347ca72b960`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The trigger is `on_combat_ability`, with `allow_proc_while_active`.
- The proc stat is `damage = 0.15`, active for 10 seconds. The effect does not read `num_charges`.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/talent/talent_settings_cryptic.lua — L611-L614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L611-L614)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3258-L3272](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3258-L3272)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2471-L2490](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2471-L2490)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2097-L2126](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2097-L2126)

## Example assumptions and limits

- **Trigger**: Activating your Combat Ability grants 15% Damage for 10 seconds. Blitz does not trigger it.
- **Refresh**: Another activation resets the 10-second countdown without stacking. Spending multiple Capacitance charges in one activation still grants only 15%.
- **Damage example**: At base damage 100 with an existing 25% bonus in the same stage, `100 × (1 + 25% + 15%) = 140` damage.

The damage example combines the stated additive bonuses in the same stage. Ability category and activation count determine triggering; the amount is not multiplied by Capacitance charges spent.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_damage_on_ability`, hash `7a67e0cf`, entry 7955: **Moebian Conductor**.
- Description key `loc_talent_cryptic_damage_on_ability_desc`, hash `d9e47181`, entry 14124.

Full raw template:

~~~text
Gain {damage:%s} Damage for {duration:%s}s on Ability Use.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | `0.15` → `+15%` | Percentage with `+` prefix. |
| `duration` | `10` | Number; the template supplies `s`. |

Display mappings are `cryptic_talents.lua` L2479-L2489. Values reuse the verified settings above.

Static reconstruction; not an observed game screen:

~~~text
Gain +15% Damage for 10s on Ability Use.
~~~

## English comparison

The English correctly states +15% Damage for 10 seconds on ability use. It does not explicitly promise Blitz triggering or an increase for each charge spent. The Combat Ability trigger, duration refresh and fixed per-activation bonus are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_damage_on_ability.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/78378820-be56-4a92-bd07-f6275c55fa47). The icon identifies the talent; it is not mechanism evidence.
