# Inner Tranquility: source evidence

[繁體中文](../psyker_reduced_warp_charge_cost_and_venting_speed.md) | [Player description](README.md#psyker_reduced_warp_charge_cost_and_venting_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_reduced_warp_charge_cost_and_venting_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_reduced_warp_charge_cost_and_venting_speed`; name key `loc_talent_psyker_reduced_warp_charge_cost_venting_speed`; description key `loc_talent_psyker_reduced_warp_charge_cost_venting_speed_desc`. Node `node_3879efd1-ebac-4cd2-b004-8c7927d16924`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `stat_buffs.warp_charge_amount` linearly interpolates from 1 to 0.52 across zero to six souls. The total reduction is 48 percentage points divided by six, or 0.08 per stack. At four stacks the multiplier is `1 − 0.48 × (4 / 6) = 0.68`.
- This modifier reads the same `talent_resource.current_resource`, requiring Warp Siphon. Warp Battery changes the attainable cap from four to six without changing the reduction per stack.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1253-L1269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1253-L1269)
- [scripts/settings/talent/talent_settings_psyker.lua — L208-L214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L208-L214)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1506-L1526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1506-L1526)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L141-L146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L141-L146)
- [scripts/settings/talent/talent_settings_psyker.lua — L241-L243](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L241-L243)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1253-L1269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1253-L1269)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1326-L1349](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1326-L1349)

## Example assumptions and limits

- **How it works:** Each Warp Charge reduces Peril Generation by 8%. Four stacks give a 32% reduction; six with Warp Battery give 48%.

- **Peril example:** An attack that originally generates 10 percentage points of Peril generates `10 × (1 − 8% × 4) = 6.8` at four stacks, or 5.2 at six. Other Generation modifiers apply separately.

The −8% per stack derives from the source stat multiplier and uses the original Peril Generation as its baseline; the final Peril change depends on each attack's original value. `venting_speed` in the internal talent identifier does not establish another Quelling Speed stat here: this source sets only `warp_charge_amount`. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_reduced_warp_charge_cost_venting_speed`, hash `34b929e1`, entry 3430: **Inner Tranquility**.
- Description key `loc_talent_psyker_reduced_warp_charge_cost_venting_speed_desc`, hash `e3048a81`, entry 14711.

Full raw template:

~~~text
{warp_charge_amount:%s} Peril Generation Reduction for each Warp Charge.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `warp_charge_amount` | (1 − 0.52) / 6 = 0.08 | Percentage with `-` prefix: -8%. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L1258-L1264 uses `(1 - talent_settings_2.offensive_1_2.warp_charge_capacity) / talent_settings_2.offensive_2_1.max_souls_talent`. Accepted values and the shared percentage format are reused. The negative prefix and the template's word 'Reduction' are preserved.

Static reconstruction; not an observed game screen:

~~~text
-8% Peril Generation Reduction for each Warp Charge.
~~~

## English comparison

The English identifies Peril Generation reduction per Warp Charge. Its mapped value is −8%, consistent in effect direction and magnitude with the verified linear multiplier. It makes no Quelling Speed claim. The six-soul denominator, Warp Siphon resource requirement and changed attainable cap with Warp Battery supplement the text; no explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_reduced_warp_charge_cost_and_venting_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/333bcafc-3c34-4b47-bb5b-658c9cd2b777). The icon identifies the talent; it is not mechanism evidence.
