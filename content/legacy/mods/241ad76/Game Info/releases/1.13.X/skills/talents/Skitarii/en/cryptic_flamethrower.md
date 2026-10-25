# Purgator Servo-Skull: source evidence

[繁體中文](../cryptic_flamethrower.md) | [Player description](README.md#cryptic_flamethrower) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_flamethrower)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_flamethrower`; name key `loc_talent_cryptic_servo_skull_flamethrower`; description key `loc_talent_cryptic_servo_skull_flamethrower_new_desc`. Node `node_5b3ac425-e484-4aeb-83c9-19ceefa75f2d`; category Blitz; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The feature adds the `cryptic_servo_skull_flamethrower` and `hack_to_allow_grenades` rules and applies the `servo_skull_extra_grenade` passive. The spawn function creates an additional Servo-Skull marked for the Flamer grenade ability with `can_shoot = false`.
- On an order, `start_order_ability` first tries the Medicae skull if that feature is selected and the target is valid, then checks the Flamer skull and a valid destination. Flamer validation requires the skull to be alive and in `following` state, a valid target position and at least 1 `grenade_ability` charge. Activation changes its state to `flamethrower` and normally spends 1 `grenade_ability` charge. Only the external keyword `cryptic_servo_skull_flamethrower_uses_no_charge` exempts that cost.
- The fire action lasts 15 seconds, has a maximum 10-metre range and uses 4 rays per frame. Player input switches `circle`/`cone` modes.
- `cryptic_servo_skull_order` has base capacity 3 and its `stat_buff` points to `extra_max_amount_of_grenades`. The `servo_skull_extra_grenade` passive adds +2 to that stat only if the Medicae rule also exists. When the player ability extension detects the increase in maximum charges, it replenishes the difference, giving a capacity of 5.
- Flamer and Medicae skulls each spend 1 charge from the same `grenade_ability` resource. Basic Data Interrogation is configured to cost 0 charges.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L670-L710](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L670-L710)
- [scripts/settings/talent/talent_settings_cryptic.lua — L43-L59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L43-L59)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua — L15-L29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L15-L29)
- [scripts/utilities/spawn_companions_from_talent.lua — L10-L63](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/spawn_companions_from_talent.lua#L10-L63)
- [scripts/utilities/companion/companion_servo_skull_ability.lua — L39-L72](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L39-L72)
- [scripts/utilities/companion/companion_servo_skull_ability.lua — L229-L302](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/companion/companion_servo_skull_ability.lua#L229-L302)
- [scripts/settings/companion/companion_servo_skull_settings.lua — L15-L19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/companion/companion_servo_skull_settings.lua#L15-L19)
- [scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua — L59-L90](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breed_actions/companion/companion_servo_skull_actions.lua#L59-L90)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L1211-L1241](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1211-L1241)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L734-L770](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L734-L770)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L773-L804](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L773-L804)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L670-L710](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L670-L710)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L213-L236](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L213-L236)

## Example assumptions and limits

- **Operation**: Gain an additional Flamer Servo-Skull. After you designate a ground area, it moves there and fires for up to 15 seconds, with a 10-metre range.

- **Fire modes and cost**: Use Primary Action to switch between Dispersed and Focused modes. Each order to fire consumes 1 Blitz charge.

- **Example**: Base capacity is 3 charges. Selecting Medicae Servo-Skull as well adds 2, raising capacity to 5; fire and rescue share those 5 charges.

- Base capacity is 3. Selecting both Flamer and Medicae gives 5. One fire order and one rescue share the pool and spend 2, leaving 3 charges.
- A fire order needs a valid ground position, a living Flamer skull that is following, and at least 1 remaining grenade-ability charge.
- Circular and cone modes use `circle` and `cone` respectively. Fire range is at most 10 metres, and the action lasts at most 15 seconds.
- The extra 2 charges require the Medicae feature to be selected as well and increase the shared ability capacity. This branch does not grant extra charges for the Flamer feature alone.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_servo_skull_flamethrower`, hash `dfc8746f`, entry 14520: **Purgator Servo-Skull**.
- Description key `loc_talent_cryptic_servo_skull_flamethrower_new_desc`, hash `e66555ce`, entry 14954.

Full raw template:

~~~text
You have an additional Servo-Skull equipped with a Flamer. Target an Area to deploy it. Use your Primary Action to switch between Dispersed or Focused Fire Mode.

If {flamer_talent:%s} and {medicae_talent:%s} are both selected, you gain {bonus_charge:%s} Charges.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `flamer_talent` | `loc_talent_cryptic_servo_skull_flamethrower` | Localized string: `Purgator Servo-Skull`; hash `dfc8746f`, entry 14520 |
| `medicae_talent` | `loc_talent_cryptic_servo_skull_inject_ally` | Localized string: `Medicae Servo-Skull`; hash `9182c0fe`, entry 9410 |
| `bonus_charge` | `talent_settings.servo_skull_extra_charges.extra_grenade_charges = 2` | Number with `+`: `+2` |

Necessary display mapping: `cryptic_talents.lua` L670-L695. The bonus value reuses the accepted shared-charge evidence; localized names come from the same English resource. Number and localized-string formatting reuse the accepted rules.

Static reconstruction; not an observed game screen:

~~~text
You have an additional Servo-Skull equipped with a Flamer. Target an Area to deploy it. Use your Primary Action to switch between Dispersed or Focused Fire Mode.

If Purgator Servo-Skull and Medicae Servo-Skull are both selected, you gain +2 Charges.
~~~

## English comparison

The independently read English describes an additional Flamer Servo-Skull deployed to a targeted area, Primary Action switching Dispersed/Focused modes, and +2 charges when both Purgator and Medicae are selected. The accepted spawn, area order, circle/cone input and conditional shared-capacity increase agree. Living/following-state checks, Medicae order priority, charge consumption and its external-keyword exception, 15-second duration, 10-metre range, ray count and shared resource accounting supplement the text; no clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/tactical_modifier/cryptic_flamethrower.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935585681) | [Existing attachment](https://github.com/user-attachments/assets/295017d9-50cd-4797-8b33-bd3627a7139f). The icon identifies the talent; it is not mechanism evidence.
