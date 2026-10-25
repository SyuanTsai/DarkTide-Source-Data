# Not Far Behind: source evidence

[繁體中文](../adamant_pinning_dog_bonus_moving_towards.md) | [Player description](README.md#adamant_pinning_dog_bonus_moving_towards) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_pinning_dog_bonus_moving_towards)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_pinning_dog_bonus_moving_towards`; node `node_8cd57c7e-dccf-4dd5-9829-c953101e1d34`; category Keystone; one point.

## Source-confirmed behavior and static derivation

- The proc buff listens for `on_player_companion_pounce` and creates `adamant_pinning_dog_bonus_moving_towards_buff` on the event. Its condition does not require a Pounce kill or hit.
- The child effect has `max_stacks = 1`, `duration = 5` and `refresh_duration_on_stack = true`. It supplies `damage = 0.10` and `movement_speed = 0.10`.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2852-L2876](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2852-L2876)
- [scripts/settings/talent/talent_settings_adamant.lua — L462-L466](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L462-L466)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2911-L2939](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2911-L2939)
- [scripts/utilities/attack/damage_calculation.lua — L587-L615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L615)
- [scripts/utilities/attack/damage_calculation.lua — L236-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2852-L2876](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2852-L2876)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1827-L1851](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1827-L1851)

## Example assumptions and limits

- **Trigger and duration**: Each Cyber-Mastiff Pounce grants the player +10% Movement Speed and +10% Damage for 5s.

- **Examples and refresh**: With this effect alone, base damage 100 becomes 110; with another +25% bonus in the same stage, it becomes 135. Base movement of 5m/s becomes 5 × 1.1 = 5.5m/s. Another Pounce resets the 5s countdown without increasing the bonus magnitude.

Each Pounce event creates or refreshes the 5s effect. During it, applying this +10% Damage bonus alone to base damage 100 gives 110.

The Cyber-Mastiff ability determines when the Pounce event occurs; this effect activates only from that event. The examples isolate the bonuses except for the explicitly stated additional +25% in the same damage stage.

Values and behavior reuse fixed-version evidence; examples are static derivations. Chinese, English and code evidence all refer to 1.13.1. Game execution and the final game UI were not observed. Wording differences are compared with the accepted implementation evidence; omitted details are not automatically translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_pinning_dog_bonus_moving_towards`, hash `8f9342af`, entry 9286: **Not Far Behind**. The `[Writer]` suffix is resource metadata.
- Description key `loc_talent_adamant_pinning_dog_bonus_moving_towards_description`, hash `478147b4`, entry 4642. The `[Writer]` suffix is resource metadata.

Full raw template:

```text
Gain {movement_speed:%s} Movement Speed and {damage:%s} Damage for {time:%s}s after Pounce.
```

The display maps `movement_speed`, `damage` and `time` to the corresponding `talent_settings.pinning_dog_bonus_moving_towards` values below. Values and shared formatting reuse the accepted evidence.

| Placeholder | Value | Formatting |
|---|---|---|
| movement_speed | 0.10 | Percentage with + prefix → +10% |
| damage | 0.10 | Percentage with + prefix → +10% |
| time | 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

```text
Gain +10% Movement Speed and +10% Damage for 5s after Pounce.
```

## English comparison limits

The independently read English matches the Pounce trigger, both +10% bonuses and 5s duration. The event-only condition, one-stack refresh behavior, aggregation and numerical examples are supplementary. No explicit English contradiction is established for this talent. Mechanisms, citations, shared formatting and icon provenance reuse the existing evidence.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/keystone_modifier/adamant_pinning_dog_bonus_moving_towards.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/0633a2b7-e8e9-4215-85a9-f54ae4d95809). The icon identifies the talent; it is not mechanism evidence.
