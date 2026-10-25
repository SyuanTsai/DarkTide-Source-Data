# Protectorate Protocol: source evidence

[繁體中文](../cryptic_disabled_allies_defense.md) | [Player description](README.md#cryptic_disabled_allies_defense) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_disabled_allies_defense)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_disabled_allies_defense`; name key `loc_talent_cryptic_disabled_allies_defense`; description key `loc_talent_cryptic_disabled_allies_defense_post_boost_desc`. Node `node_fd9cf282-8e86-4503-acfe-f8a3841e535e`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

The talent's Coherency effect gives `cryptic_disabled_allies_defense`; its `requires_help` condition applies a `0.75` damage-taken multiplier. The passive assistance event requires `interactor_unit = self` and a living recipient.

The post-assistance buff has a maximum of one stack, a refreshable `6`-second duration, `stun_immune`, and a `0.75` multiplier. It actually reads `cryptic_disabled_allies_defense.damage_taken_multiplier`, rather than the unused `cryptic_assisted_allies_defense` setting of `0.5`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3552-L3571](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3552-L3571)
- [scripts/utilities/attack/player_unit_status.lua — L94-L112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/player_unit_status.lua#L94-L112)
- [scripts/utilities/attack/damage_calculation.lua — L584-L611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L584-L611)
- [scripts/settings/talent/talent_settings_cryptic.lua — L639-L643](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L639-L643)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3572-L3599](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3572-L3599)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3531-L3551](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3531-L3551)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2613-L2652](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2613-L2652)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2346-L2371](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2346-L2371)

## Example assumptions and limits

- **Protection**: Allies who require help within Coherency take **25% less damage**, until they leave that state or lose the Coherency effect.
- **Assistance bonus**: When **you** complete the assistance, the rescued ally gains **6 seconds** of **25% Damage Resistance** and immunity to ordinary hit Stun. This separate reduction does not require them to remain within Coherency.
- **Reduction example**: With one effect, incoming damage **100** becomes `100 × 0.75 = 75`. With another independent **20%** reduction, `100 × 0.75 × 0.80 = 60` damage remains.

The two protections have separate conditions. The example uses one of the 25% effects and, where stated, an independent 20% reduction. The post-assistance effect refreshes rather than stacking, and its ordinary hit Stun immunity does not imply immunity to every disabling effect.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_disabled_allies_defense`, hash `45c3de20`, entry 4528: **Protectorate Protocol**.
- Description key `loc_talent_cryptic_disabled_allies_defense_post_boost_desc`, hash `5bdd6b9d`, entry 5957.

Full raw template:

~~~text
When an Ally in Coherency is Incapacitated, they have {damage_resistance:%s} Damage Resistance until freed. If you free them, they gain Stun Immunity and {damage_resistance_post:%s} Damage Resistance for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{damage_resistance:%s}` | `0.75` → `+25%` | `math_round((1 − value) × 100)`; percentage; `+` prefix |
| `{damage_resistance_post:%s}` | `0.75` → `+25%` | Same conversion; percentage; `+` prefix |
| `{duration:%s}` | `6` | Number; template adds `s` |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L2631-L2650) uses `damage_taken_multiplier`, `damage_taken_multiplier_post`, and `duration`. The first two values are both `0.75`, with duration `6`, in `scripts/settings/talent/talent_settings_cryptic.lua` (L639-L643). The reused formatter directly uses the manipulation result of `25` and adds `%`.

Static reconstruction; not an observed game screen:

~~~text
When an Ally in Coherency is Incapacitated, they have +25% Damage Resistance until freed. If you free them, they gain Stun Immunity and +25% Damage Resistance for 6s.
~~~

## English comparison

The English correctly identifies the recipient as the affected ally, the Coherency requirement for the initial protection, and your own assistance as the trigger for the post-assistance effect. Both displayed reductions are 25%, and the duration is 6 seconds. The precise `requires_help` boundary, ending on loss of Coherency, living-recipient check, refresh behavior, and independence of the later effect from Coherency are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_disabled_allies_defense.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030) | [Existing attachment](https://github.com/user-attachments/assets/53a3e76f-67fe-4d9e-bff5-7aafaee21065). The icon identifies the talent; it is not mechanism evidence.
