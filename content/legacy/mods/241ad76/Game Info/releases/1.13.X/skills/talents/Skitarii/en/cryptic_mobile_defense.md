# Ablative Motion Routines: source evidence

[繁體中文](../cryptic_mobile_defense.md) | [Player description](README.md#cryptic_mobile_defense) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_mobile_defense)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_mobile_defense`; name key `loc_talent_cryptic_mobile_defense`; description key `loc_talent_cryptic_mobile_defense_desc`. Node `node_1c3959c9-9a0a-428b-9064-e5dd92d9044a`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The condition is `(is_sprinting and current_stamina > 0) or is_sliding`, applying `damage_taken_multiplier = 0.75`.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L584-L611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L584-L611)
- [scripts/settings/talent/talent_settings_cryptic.lua — L410-L412](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L410-L412)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2342-L2367](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2342-L2367)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1855-L1872](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1855-L1872)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L732-L756](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L732-L756)

## Example assumptions and limits

- **Trigger**: While **sprinting with Stamina remaining**, or while **sliding**, take **25% less damage**. Sliding itself does not require remaining Stamina.
- **Example**: Damage 100 becomes `100 × 0.75 = 75`. With another independent 30% reduction, it becomes `100 × 0.75 × 0.70 = 52.5`.
- **Ending**: The effect ends as soon as you leave those states, with no additional lingering duration.

- With no other reduction, the example gives 100 → 75 damage. With another independent 30% reduction, the multipliers give 52.5.
- The positive-Stamina requirement applies to sprinting, not sliding. It is omitted by the English description and is a supplementary condition rather than a translation error.
- Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_mobile_defense`, hash `55f092c8`, entry 5589: **Ablative Motion Routines**.
- Description key `loc_talent_cryptic_mobile_defense_desc`, hash `7c92ecd3`, entry 8086.

Full raw template:

~~~text
{damage_resistance:%s} Damage Resistance while Sprinting or Sliding.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage_resistance` | 25% | `percentage`: verified multiplier `0.75`, absolute value then `math_round((1 - value) * 100)`; no prefix |

The display mapping in `cryptic_talents.lua` L1863–L1871 transforms the already verified damage multiplier into the resistance value.

Static reconstruction; not an observed game screen:

~~~text
25% Damage Resistance while Sprinting or Sliding.
~~~

## English comparison

The English 25% Damage Resistance while sprinting or sliding agrees with the accepted multiplier and movement states. It does not say that sprinting at zero Stamina qualifies; the positive-Stamina check is an omitted condition. Sliding's separate branch, immediate ending and multiplication with other reductions are supplementary details. No explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_mobile_defense.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/bc0f3370-fa34-406f-9e0d-91e23b98f1f2). The icon identifies the talent; it is not mechanism evidence.
