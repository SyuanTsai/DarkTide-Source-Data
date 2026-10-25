# Medicae Servo-Skull: source evidence

[繁體中文](../cryptic_servo_skull_inject_ally.md) | [Player description](README.md#cryptic_servo_skull_inject_ally) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_servo_skull_inject_ally)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_servo_skull_inject_ally`; name key `loc_talent_cryptic_servo_skull_inject_ally`; description key `loc_talent_cryptic_servo_skull_inject_ally_revive_new_desc`. Node `node_f09fc8b6-be58-4bca-8d9c-b4ed66c72473`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The feature adds the `cryptic_servo_skull_inject_ally` rule. The spawn function creates an additional Medicae skull with `can_shoot = false`. On an order, the Medicae skull is obtained from the target player unit; validation requires it to be alive and in `following` state. The target must be a player unit with `PlayerUnitStatus.requires_allied_interaction_help` true, neither hanging from a ledge nor already receiving help.
- The ability's injection cost is 1. Activation enters `inject_ally` and spends 1 `grenade_ability` charge. The injection action has `revive = true`, rescues after a 1-second delay and grants temporary invulnerability.
- After injection, `cryptic_servo_skull_medicae_buff` lasts 5 seconds. Its Toughness Damage taken multiplier is 0.25: 25% of the original amount taken, or a 75% reduction. Each frame calls `recover_percentage_toughness` with `0.2 × dt`, restoring 20% of maximum Toughness per second, capped by maximum Toughness.
- `talent_settings` retains the format values `toughness_bonus = 50` and `instant_toughness_percent = 0.5`, but their execution endpoints were not found in the existing source evidence. The confirmed treatment uses the per-second recovery and Damage taken multiplier above.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L711-L779](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L711-L779)
- [scripts/settings/talent/talent_settings_cryptic.lua — L43-L49](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L43-L49)
- [scripts/utilities/spawn_companions_from_talent.lua — L39-L54](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/spawn_companions_from_talent.lua#L39-L54)
- [scripts/utilities/companion/companion_servo_skull_ability.lua — L39-L55](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L39-L55)
- [scripts/utilities/companion/companion_servo_skull_ability.lua — L305-L389](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L305-L389)
- [scripts/settings/companion/companion_servo_skull_settings.lua — L15-L19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/companion/companion_servo_skull_settings.lua#L15-L19)
- [scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua — L91-L104](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua#L91-L104)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1049-L1061](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1049-L1061)
- [scripts/utilities/toughness/toughness.lua — L16-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L24)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1211-L1241](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1211-L1241)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua — L15-L29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L15-L29)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L734-L770](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L734-L770)
- [scripts/utilities/companion/companion_servo_skull_ability.lua — L391-L420](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L391-L420)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L711-L779](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L711-L779)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1625-L1648](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1625-L1648)

## Example assumptions and limits

- **Operation**: Gain an additional Medicae Servo-Skull. Tag a Knocked Down, Hogtied or Netted teammate who needs assistance to send it to rescue them.

- **After rescue**: The rescue gets the ally back up. For the next 5 seconds, Toughness Damage taken is 25% of the original amount, and they restore 20% of maximum Toughness per second.

- **Example**: With maximum Toughness 100, the ally restores 20 per second during the recovery period, up to 100 total. Each rescue spends 1 Blitz charge, shared with the Flamer Servo-Skull.

- **Rescue limits**: It cannot rescue an ally hanging from a ledge. If rescue fails while you are still alive, the charge spent is refunded.

- An ally with maximum Toughness 100 restores 20 per second over the full 5 seconds, up to 100 total if they do not reach maximum earlier. Toughness Damage taken remains at 25% of its original amount.
- With both Flamer and Medicae skulls, each valid fire order or rescue spends 1 charge from the shared pool. Base capacity is 3, increasing to 5 when both are selected.
- Only a player ally currently needing allied assistance can be targeted, excluding ledge-hanging allies and those already in another assisted state. The skull must also be alive and following.
- Per-second recovery uses the recipient's maximum Toughness; actual recovery is capped by maximum Toughness.
- The fixed source defines format values for +50 Toughness and an instant restoration of 50% maximum Toughness, but the Medicae execution path does not read them in the accepted evidence. Confirmed behavior is 20% recovery per second and a Toughness Damage taken multiplier of 0.25.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_servo_skull_inject_ally`, hash `9182c0fe`, entry 9410: **Medicae Servo-Skull**.
- Description key `loc_talent_cryptic_servo_skull_inject_ally_revive_new_desc`, hash `86ee1b55`, entry 8763.

Full raw template:

~~~text
You have an additional Servo-Skull equipped with Adapted Medicae Syringes. Target a Knocked Down, Hogtied, or Netted Ally to inject them.

The injection Revives them, as well as granting them {tdr:%s} Toughness Damage Reduction and {toughness_per_second:%s} Toughness per second. Lasts for {duration:%s}s.

If {flamer_talent:%s} and {medicae_talent:%s} are both selected, you gain {bonus_charge:%s} Charges.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `tdr` | `talent_settings.servo_skull_medicae.tdr = 0.25` | Custom manipulation rounds `(1 − 0.25) × 100 = 75`; percentage with `+`: `+75%`, without another ×100 |
| `toughness_per_second` | `talent_settings.servo_skull_medicae.toughness_percent = 0.20` | Percentage: `20%` |
| `duration` | `talent_settings.servo_skull_medicae.duration = 5` | Number: `5` |
| `flamer_talent` | `loc_talent_cryptic_servo_skull_flamethrower` | Localized string: `Purgator Servo-Skull`; hash `dfc8746f`, entry 14520 |
| `medicae_talent` | `loc_talent_cryptic_servo_skull_inject_ally` | Localized string: `Medicae Servo-Skull`; hash `9182c0fe`, entry 9410 |
| `bonus_charge` | `talent_settings.servo_skull_extra_charges.extra_grenade_charges = 2` | Number with `+`: `+2` |

Necessary display mapping: `cryptic_talents.lua` L723-L774. Values and the Toughness formula reuse accepted evidence; custom percentage manipulation follows the accepted formatting rule. Legacy format fields absent from this raw template are not inserted.

Static reconstruction; not an observed game screen:

~~~text
You have an additional Servo-Skull equipped with Adapted Medicae Syringes. Target a Knocked Down, Hogtied, or Netted Ally to inject them.

The injection Revives them, as well as granting them +75% Toughness Damage Reduction and 20% Toughness per second. Lasts for 5s.

If Purgator Servo-Skull and Medicae Servo-Skull are both selected, you gain +2 Charges.
~~~

## English comparison

The independently read English describes the additional Medicae skull, a Knocked Down/Hogtied/Netted ally as the target, revival, +75% Toughness Damage Reduction, 20% Toughness per second for 5 seconds and +2 charges when both skulls are selected. These agree with the accepted assistance checks, 0.25 Damage taken multiplier, maximum-based recovery and shared capacity bonus. The ledge/already-assisted exclusions, living/following skull, one-second delay, temporary invulnerability, shared charge spending, failure refund and recovery cap supplement the text. Unused legacy format values are not claimed by this template; no clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_servo_skull_inject_ally.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/adeeeef3-0c2e-450a-974b-66ce6c6366bd). The icon identifies the talent; it is not mechanism evidence.
