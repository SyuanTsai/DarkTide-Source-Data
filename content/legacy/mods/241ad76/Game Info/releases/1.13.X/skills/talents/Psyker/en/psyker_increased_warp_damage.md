# Focused Warp: source evidence

[繁體中文](../psyker_increased_warp_damage.md) | [Player description](README.md#psyker_increased_warp_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_increased_warp_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_increased_warp_damage`; name key `loc_talent_psyker_increased_warp_damage`; description key `loc_talent_psyker_increased_warp_damage_desc`. Node `node_1a3b8fd0-026d-4a46-b89e-6c1889f85a78`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `warp_damage = 0.15`. `damage_calculation` checks `warp_damage_types` before adding the bonus to the same additive Damage stage.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3819-L3828](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3819-L3828)
- [scripts/settings/talent/talent_settings_psyker.lua — L106-L108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L106-L108)
- [scripts/utilities/attack/damage_calculation.lua — L517-L526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L517-L526)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2648-L2671](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2648-L2671)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1869-L1894](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1869-L1894)

## Example assumptions and limits

- **How it works**: Warp Damage increases by 15%. Eligibility depends on the attack's Damage type, rather than its weapon name.

- **Damage example**: Compare only this Damage stage, with all other multipliers fixed at 1. With a baseline of 100 and no other bonuses, 100 × (1 + 15%) = 115. With an existing 25% bonus in the same stage, 125 becomes 100 × (1 + 25% + 15%) = 140.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_increased_warp_damage`, hash `32fd96aa`, entry 3329: **Focused Warp**.
- Description key `loc_talent_psyker_increased_warp_damage_desc`, hash `f4703bae`, entry 15873.

Full raw template:

~~~text
{warp_damage:%s} Damage on Warp-Attacks.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `warp_damage` | 0.15 | Percentage ×100, with `+` prefix: +15%. |

Display mapping: [psyker_talents.lua L2653-L2666](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2653-L2666). The buff lookup reuses the verified Chinese value.

Static reconstruction; not an observed game screen:

~~~text
+15% Damage on Warp-Attacks.
~~~

## English comparison

The Warp Attack bonus agrees with the accepted evidence. The Damage-type check and addition within the shared Damage stage are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_increased_warp_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/eeeb7b3b-f3bc-4509-b50f-edc7787cb0e7). The icon identifies the talent; it is not mechanism evidence.
