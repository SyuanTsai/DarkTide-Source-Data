# Noospheric Command: source evidence

[繁體中文](../cryptic_servo_skull_improved_tagging.md) | [Player description](README.md#cryptic_servo_skull_improved_tagging) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_servo_skull_improved_tagging)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_servo_skull_improved_tagging`; name key `loc_talent_cryptic_servo_skull_improved_tagging`; description key `loc_talent_cryptic_servo_skull_improved_tagging_fire_rate_cost_desc`. Node `node_cc688d42-e7dd-45bb-81ec-df7c8d772e3f`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent adds the `cryptic_servo_skull_improved_tagging` rule. A valid shooting order requires a living skull, a living enemy and the skull to be in `following`, `following_shooting` or `following_shooting_ability`. Normal play requires at least 0.3 charges of `combat_ability` Capacitance; `training_grounds` bypasses this minimum. Starting the order sets the skull to `following_shooting_ability` and applies `cryptic_servo_skull_tagging_buff` to it. This lasts 2s and has `minion_shoot_cooldown_modifier = 0.15`. The shooting action multiplies its cooldown by that value: 15% of the original cooldown remains (an 85% reduction; about 6.67 times the original frequency). The configured cost for a full use is 0.3 charges of `combat_ability` Capacitance. If the same speed boost already exists, the code uses its duration progress to calculate the additional cost. All this Capacitance belongs to `combat_ability`, separately from the `grenade_ability` uses shared by the Flamer and Medicae skulls. `minion_shoot_cooldown_modifier` is a `multiplicative_multiplier`; with the permanent ×0.5 bonus, 3s × 0.5 × 0.15 = 0.225s. With no existing effect, `duration_progress` returns 0 and the cost is 0.3. When time remains on an existing effect, the cost is calculated using `1 - progress`, then the 2s timer resets.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L23-L51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L23-L51)
- [scripts/settings/talent/talent_settings_cryptic.lua — L60-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L60-L65)
- [scripts/utilities/companion/companion_servo_skull_ability.lua — L502-L580](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L502-L580)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L999-L1046](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L999-L1046)
- [scripts/extension_systems/behavior/nodes/actions/bt_shoot_action.lua — L716-L723](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_shoot_action.lua#L716-L723)
- [scripts/settings/companion/companion_servo_skull_settings.lua — L23-L28](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/companion/companion_servo_skull_settings.lua#L23-L28)
- [scripts/extension_systems/buff/buff_extension_base.lua — L617-L620](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L617-L620)
- [scripts/extension_systems/buff/buffs/buff.lua — L576-L585](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L576-L585)
- [scripts/settings/buff/buff_settings.lua — L891-L891](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L891-L891)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1063-L1072](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1063-L1072)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1145-L1149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1145-L1149)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L23-L57](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L23-L57)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2293-L2315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2293-L2315)

## Example assumptions and limits

- **How it works**: Tag a valid enemy and double-tap the Tag input to order the Servo-Skull to attack. For 2s after activation, its shooting cooldown is reduced to 15% of the original.
- **Example**: A 3s shooting cooldown becomes 0.45s. A full 2s boost costs 0.3 Capacitance charges (30% of one charge).
- **How it works**: You need at least 0.3 Capacitance charges before issuing the order. The Psykhanium does not check this threshold.
- **With Artificer Servo-Skull**: The permanent halving of the shooting interval multiplies with this effect. For example, a base 3s interval becomes 1.5s with the permanent bonus, then 3 × 0.5 × 0.15 = 0.225s during the command. This calculates the shooting interval; actual attacks still depend on aiming and target conditions.

- A base shooting cooldown of 3s × 0.15 = 0.45s. A full 2s boost costs 0.3 Capacitance charges.
- At 0.25 charges, you are below the 0.3-charge activation threshold and cannot issue an order that triggers this shooting boost in a normal mission. The Psykhanium skips the threshold.
- The boost triggers only when the improved tagging talent is active and the Servo-Skull order is valid. It does not change the grenade-ability uses shared by the Flamer and Medicae skulls.
- A shooting cooldown multiplier of 0.15 leaves 15% of the cooldown, reducing it by 85%. The UI format value converts this into an attack-speed increase of about 567%.
- The Capacitance cost is adjusted for the time remaining on the same boost at use. The maximum duration is 2s.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_servo_skull_improved_tagging`, hash `dd8d8400`, entry 14376: **Noospheric Command**.
- Description key `loc_talent_cryptic_servo_skull_improved_tagging_fire_rate_cost_desc`, hash `843cef80`, entry 8603.

Full raw template:

~~~text
Ordering your Servo-Skull to attack an Enemy will greatly increase its Fire Rate for {duration:%s}s. Costs {capacitance:%s} {capacitance_keyword:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{duration:%s}` | 2 | `number`; literal s in the template |
| `{capacitance:%s}` | 0.3 → 30% | `percentage`; no prefix |
| `{capacitance_keyword:%s}` | `loc_talent_cryptic_power_keyword` → Capacitance | `loc_string`; hash `ecc15a9f`, entry 15388 |

The minimally read display mapping is `cryptic_talents.lua` L23-L57: `duration` and `capacitance` use the existing 2s and 0.3 values from `servo_skull_shooting_tagging`. The keyword is paired to the same-build English entry above. The configured `attack_speed` format value uses `round((1 / 0.15 - 1) × 100)` → +567%, but this English template has no attack_speed placeholder; do not insert that unused value into its reconstruction.

Static reconstruction; not an observed game screen:

~~~text
Ordering your Servo-Skull to attack an Enemy will greatly increase its Fire Rate for 2s. Costs 30% Capacitance.
~~~

## English comparison

The attack order, 2s duration and 30% of one Capacitance charge cost agree with the accepted evidence. “Greatly increase its Fire Rate” is consistent with the ×0.15 cooldown multiplier; it does not state a numerical increase. The threshold, Psykhanium exception, valid states, refresh pricing, resource distinction and multiplication with the permanent bonus supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_servo_skull_improved_tagging.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/c365855a-e85f-4d0d-8156-4048ae9f7e02). The icon identifies the talent; it is not mechanism evidence.
