# Solidity: source evidence

[繁體中文](../psyker_increased_vent_speed.md) | [Player description](README.md#psyker_increased_vent_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_increased_vent_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_increased_vent_speed`; name key `loc_talent_psyker_increased_vent_speed`; description key `loc_talent_psyker_increased_vent_speed_description`. Node `node_57581786-6c2f-45d1-a396-8e58299d84d8`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `vent_warp_charge_speed = 0.7` multiplies both `vent_interval` and `vent_duration`.
- Their ratio cancels for the amount removed per tick, while the interval becomes shorter. The time cannot be calculated as `4 ÷ 1.3`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L2825-L2831](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2825-L2831)
- [scripts/settings/talent/talent_settings_psyker.lua — L330-L332](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L330-L332)
- [scripts/utilities/warp_charge.lua — L251-L315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L251-L315)
- [scripts/utilities/shared_overheat_and_warp_charge_functions.lua — L63-L72](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L63-L72)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1056-L1071](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1056-L1071)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L936-L964](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L936-L964)

## Example assumptions and limits

- **Effect**: the time needed to actively Quell Peril is reduced by 30%.

- **Timing example**: with the same weapon, starting Peril and other conditions, a Quelling process that took 4 seconds becomes approximately 4 × 0.7 = 2.8 seconds. The processing rate per second is 1 ÷ 0.7 ≈ 1.429 times the original, approximately 42.9% faster.

The example excludes the animations for entering and leaving the Quelling action. Scheduling and update frames introduce discrete error. The existing Chinese evidence notes that the local text says Quell Speed while the fixed source applies 0.7 to time and interval; both sources are 1.13.1, and actual behavior remains untested in game. It does not directly classify this as a Traditional Chinese mistranslation. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_increased_vent_speed`, hash `cab0da20`, entry 13090: **Solidity**.
- Description key `loc_talent_psyker_increased_vent_speed_description`, hash `479e9713`, entry 4650.

Full raw template:

~~~text
Increases Quell Speed by {vent_speed:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `vent_speed` | `1 − 0.7 = 0.3` | percentage → `30%` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1061-L1066) explicitly uses `1 − talent_settings_3.mixed_3.vent_warp_charge_speed`. The verified 0.7 time multiplier reconstructs as 30%, with shared percentage formatting.

Static reconstruction; not an observed game screen:

~~~text
Increases Quell Speed by 30%.
~~~

## English comparison

The English explicitly says Quell Speed increases by 30%. The accepted implementation reduces time and interval by 30%, which corresponds to approximately 42.9% more Peril processed per second, not 30%. This is an explicit English numerical mismatch when “Speed” means processing rate. The faithfully translated explanation describes the 0.7 time multiplier; actual game behavior remains unobserved.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_increased_vent_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/86582600-a30d-4e5a-b87b-ae33b2e78746). The icon identifies the talent; it is not mechanism evidence.
