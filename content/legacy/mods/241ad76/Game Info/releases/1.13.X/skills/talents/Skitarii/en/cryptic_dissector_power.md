# Higher Purpose: source evidence

[繁體中文](../cryptic_dissector_power.md) | [Player description](README.md#cryptic_dissector_power) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_dissector_power)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_dissector_power`; name key `loc_talent_cryptic_dissector_power`; description key `loc_talent_cryptic_dissector_power_desc`. Node `node_ce7afddd-b252-4604-a423-da685ffa5410`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This modifier enables the special rule `cryptic_dissector_increased_cooldown_gained_on_elite_or_special_kills`. The `cryptic_ability_recharge` kill handler starts from 2% for an ordinary kill or 4% for an Elite/Specialist kill. With this rule, it adds `0.025` only to the Elite/Specialist value, giving 6.5%.
- Recovery calls `restore_ability_charge_percentage(COMBAT_ABILITY_TYPE, cooldown_to_restore)`. `PlayerUnitAbilityExtension` multiplies the fraction by `resource_cost_per_charge`, not by the entire `max_ability_resource` pool. The helper sets `ignore_stat_buffs = true`, so Redline's `resource_restored_modifier` and other stat buffs are not multiplied again. At 50 points per charge, 6.5% is 3.25 resource points, of which this modifier adds 1.25.
- The kill proc returns early when it detects the `cryptic_precision_stance` keyword. While that stance is active, neither the ordinary 2% nor the Elite/Specialist total 6.5% recovery occurs.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1820-L1842](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1820-L1842)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1211-L1231](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1211-L1231)
- [scripts/settings/talent/talent_settings_cryptic.lua — L19-L22](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L19-L22)
- [scripts/settings/talent/talent_settings_cryptic.lua — L251-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L251-L263)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L298-L342](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L298-L342)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1081-L1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua — L70-L115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/cryptic_abilities.lua#L70-L115)
- [scripts/settings/talent/talent_settings_cryptic.lua — L3-L18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L3-L18)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1211-L1231](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1211-L1231)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1820-L1842](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1820-L1842)

## Example assumptions and limits

- **Trigger**: An Elite or Specialist kill restores an **additional 2.5% of one Combat Ability charge's cost**. Added to the class's original 4%, that kill restores **6.5% in total**.
- **Example**: With a 50-point cost per charge, the additional 2.5% is `1.25` points; the original 4% is `2` points, for a total of `3.25`. These resources first accumulate as charge progress and do not necessarily add one whole usable charge immediately.
- **Exception**: While Advanced Combat Doctrines is active, both the class's base kill recovery and this talent's additional recovery are suspended.

- At 50 points per charge, this modifier adds `50 × 0.025 = 1.25`. The original Elite/Specialist recovery is `50 × 0.04 = 2`; the combined result is `50 × 0.065 = 3.25` points. Recovery smaller than a whole charge adds progress.
- The total 6.5% consists of the fixed class's 4% plus this additional 2.5%. The additional value must not be presented as the total recovery.
- The percentage uses the cost of one charge, not the full charge pool. `restore_ability_charge_percentage` ignores stat buffs, so Redline's restoration multiplier does not amplify this recovery.
- The precision stance keyword causes the entire kill-recovery proc to return early.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_dissector_power`, hash `90d98e74`, entry 9359: **Higher Purpose**.
- Description key `loc_talent_cryptic_dissector_power_desc`, hash `2baab5a1`, entry 2834.

Full raw template:

~~~text
Elite and Specialist kills restore an additional {power:%s} {capacitance_keyword:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `power` | +2.5% | `percentage`, prefix `+`: `talent_settings.dissector.extra_cooldown_on_elite_or_special_kills = 0.025` |
| `capacitance_keyword` | Capacitance | `loc_string`: `loc_talent_cryptic_power_keyword` |

The display mappings in `cryptic_talents.lua` L1220–L1230 use the already verified extra recovery value and paired Capacitance keyword.

Static reconstruction; not an observed game screen:

~~~text
Elite and Specialist kills restore an additional +2.5% Capacitance.
~~~

## English comparison

The English explicitly calls the 2.5% additional and identifies Elite and Specialist kills, matching the extra value rather than the combined 6.5%. The single-charge denominator, total recovery, stat-buff exception and suspension during Advanced Combat Doctrines are supplementary details. No explicit English contradiction was identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_dissector_power.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/e1ca03f4-8152-4fa6-9b43-0780a40ae7ca). The icon identifies the talent; it is not mechanism evidence.
