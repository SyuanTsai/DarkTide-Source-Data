# Penetration of the Soul: source evidence

[繁體中文](../psyker_warp_attacks_rending.md) | [Player description](README.md#psyker_warp_attacks_rending) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_warp_attacks_rending)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_warp_attacks_rending`; name key `loc_talent_psyker_warp_attacks_rending`; description key `loc_talent_psyker_warp_attacks_rending_alt_desc`. Node `node_fdd4387e-788e-46ca-accb-c59f01e5f97d`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `warp_attacks_rending_multiplier` interpolates from 0 to 0.2 using `current_percentage`. This buff does not use `talent_settings.threshold = 0.75`. `damage_calculation` first totals Rending, then adjusts it by armour type; after reaching an armour Damage multiplier (`ADM`) of 1, excess Rending uses the `overdamage` coefficient.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3365-L3393](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3365-L3393)
- [scripts/settings/talent/talent_settings_psyker.lua — L64-L67](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L64-L67)
- [scripts/utilities/attack/damage_calculation.lua — L60-L95](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L95)
- [scripts/utilities/attack/damage_calculation.lua — L629-L660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/settings/damage/armor_settings.lua — L8-L19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2368-L2388](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2368-L2388)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L2163-L2187](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L2163-L2187)

## Example assumptions and limits

- **How it works**: Warp Attacks gain Rending based on current Peril: 10% / 20% Rending at 50% / 100% Peril. The actual Damage increase depends on the weapon and enemy armour.

- **Armour example**: Compare only the armour stage with a Rending-resistance modifier of 1, excluding Weakspots, Critical Hits and other multipliers. With 100 pre-armour Damage and a baseline armour multiplier of 0.5, at 100% Peril, 100 × 0.5 = 50 becomes 100 × (0.5 + 0.2) = 70, a 40% Damage increase.

- **Different target**: With the same 20% Rending, a baseline armour multiplier already at 1 and an excess-Rending conversion coefficient of 0.25, 100 becomes 100 × (1 + 0.2 × 0.25) = 105, only a 5% increase.

The example isolates the armour stage. Weakspots and Critical Hits subsequently recalculate `finesse`, so the result cannot be treated as a fixed increase to the entire Damage calculation. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_warp_attacks_rending`, hash `5437d8c9`, entry 5475: **Penetration of the Soul**.
- Description key `loc_talent_psyker_warp_attacks_rending_alt_desc`, hash `35bc88f1`, entry 3490.

Full raw template:

~~~text
Up to {rending:%s} Rending on Warp-Attacks, based on Peril.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `rending` | 0.2 | Percentage ×100, with `+` prefix: +20%. |
| `threshold` | 0.75 | Mapped percentage 75%, but absent from this English template and unused by the buff. |

Display mapping: [psyker_talents.lua L2373-L2383](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2373-L2383). Values reuse the accepted evidence; the unused threshold is not inserted into the display.

Static reconstruction; not an observed game screen:

~~~text
Up to +20% Rending on Warp-Attacks, based on Peril.
~~~

## English comparison

The English correctly gives up to 20% Rending on Warp Attacks based on Peril. It does not equate Rending to a fixed final Damage increase or claim a 75% threshold. Linear interpolation, armour conversion, excess Rending and finesse recalculation are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_warp_attacks_rending.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/790d837c-239d-4d45-b4e8-c3c039df63ba). The icon identifies the talent; it is not mechanism evidence.
