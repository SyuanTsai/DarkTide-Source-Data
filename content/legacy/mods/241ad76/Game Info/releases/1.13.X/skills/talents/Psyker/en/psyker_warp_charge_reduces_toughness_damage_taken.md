# One with the Warp: source evidence

[繁體中文](../psyker_warp_charge_reduces_toughness_damage_taken.md) | [Player description](README.md#psyker_warp_charge_reduces_toughness_damage_taken) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_warp_charge_reduces_toughness_damage_taken)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_warp_charge_reduces_toughness_damage_taken`; name key `loc_talent_psyker_toughness_damage_reduction_from_warp_charge`; description key `loc_talent_psyker_toughness_damage_reduction_from_warp_charge_desc`. Node `node_1943527f-b930-43f0-98b6-340d14d596d5`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `toughness_damage_taken_multiplier` interpolates linearly from `0.9` to `0.67`, weighted by current Peril.
- This stat is `multiplicative` and multiplies with other effects in the same multiplicative stage.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1933-L1954](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1933-L1954)
- [scripts/settings/talent/talent_settings_psyker.lua — L232-L235](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L232-L235)
- [scripts/settings/buff/buff_settings.lua — L1000-L1035](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1000-L1035)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1566-L1593](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1566-L1593)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L850-L880](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L850-L880)

## Example assumptions and limits

- **Effect**: higher Peril provides stronger Toughness Damage Reduction. It is 10% at 0% Peril and 33% at 100% Peril, with proportional changes between them.

- **Reduction example**: at 50% Peril, the reduction is 10% + (33% − 10%) × 50% = 21.5%. An original 100 points of Toughness Damage becomes 100 × 0.785 = 78.5 points; with another independent 20% reduction it becomes 78.5 × 0.8 = 62.8 points. This effect does not reduce Health Damage.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_toughness_damage_reduction_from_warp_charge`, hash `96a29f5e`, entry 9738: **One with the Warp**.
- Description key `loc_talent_psyker_toughness_damage_reduction_from_warp_charge_desc`, hash `96e4cb7c`, entry 9753.

Full raw template:

~~~text
Gain Toughness Damage Reduction of {min_damage:%s} to {max_damage:%s} based on your current Peril.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `min_damage` | `0.9` damage-taken multiplier | manipulation `round((1 − value) × 100)`, `+` prefix → `+10%` |
| `max_damage` | `0.67` damage-taken multiplier | manipulation `round((1 − value) × 100)`, `+` prefix → `+33%` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1571-L1587) converts the verified damage-taken multipliers to reduction amounts. The established shared formatter uses the manipulation instead of the default percentage scaling.

Static reconstruction; not an observed game screen:

~~~text
Gain Toughness Damage Reduction of +10% to +33% based on your current Peril.
~~~

## English comparison

The English range and current-Peril basis agree with the verified 10–33% Toughness Damage Reduction. The exact linear interpolation and multiplication with other reductions are supplements. Its explicit Toughness scope agrees with the absence of Health Damage reduction.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_warp_charge_reduces_toughness_damage_taken.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/68726dca-2cf0-40d6-bfe6-eccecc659446). The icon identifies the talent; it is not mechanism evidence.
