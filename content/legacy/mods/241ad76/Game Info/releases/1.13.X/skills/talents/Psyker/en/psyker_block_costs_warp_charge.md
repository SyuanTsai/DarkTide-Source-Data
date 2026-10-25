# Kinetic Deflection: source evidence

[繁體中文](../psyker_block_costs_warp_charge.md) | [Player description](README.md#psyker_block_costs_warp_charge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_block_costs_warp_charge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_block_costs_warp_charge`; name key `loc_talent_psyker_block_costs_warp_charge`; description key `loc_talent_psyker_block_costs_warp_charge_desc`. Node `node_59a39703-43ce-432e-b853-c80517a08947`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Block calculates `block_cost / max_stamina × warp_charge_block_cost × warp_charge_amount`.
- The Peril cap is `0.97`. Excess is converted back into Stamina using `1 / warp_charge_block_cost × max_stamina`.
- The reverse formula does not divide by `warp_charge_amount`; other Peril reductions must be recalculated according to the actual formula.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1890-L1932](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1890-L1932)
- [scripts/settings/talent/talent_settings_psyker.lua — L229-L231](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L229-L231)
- [scripts/utilities/attack/block.lua — L164-L200](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L164-L200)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1550-L1565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1550-L1565)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1047-L1073](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1047-L1073)

## Example assumptions and limits

- **Effect**: below 97% Peril, Blocking first generates Peril. The conversion is 25% of the original Stamina cost as a fraction of maximum Stamina. Once Peril reaches 97%, the remaining Block cost is paid with Stamina.

- **Block example**: with 4 maximum Stamina, a Block that originally costs 2, and no other Peril modifiers, gain 2 ÷ 4 × 25% = 12.5 percentage points of Peril. Starting at 50% gives 62.5%, with no Stamina spent on this Block.

- **Near the cap**: if the same Block starts at 90%, only 7 percentage points fit. The remaining 12.5 − 7 = 5.5 percentage points convert back to 5.5% ÷ 25% × 4 = 0.88 Stamina.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_block_costs_warp_charge`, hash `bb19c517`, entry 12067: **Kinetic Deflection**.
- Description key `loc_talent_psyker_block_costs_warp_charge_desc`, hash `136ee48b`, entry 1255.

Full raw template:

~~~text
While below critical Peril, Blocking an attack causes you to gain Peril instead of losing Stamina.

Gained Peril is {warp_charge_block_cost:%s} of the blocked attacks stamina cost.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `warp_charge_block_cost` | `0.25` | percentage → `25%` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1555-L1560) uses the verified `talent_settings_2.defensive_1.warp_charge_cost_multiplier` value of 0.25. Shared percentage formatting is reused.

Static reconstruction; not an observed game screen:

~~~text
While below critical Peril, Blocking an attack causes you to gain Peril instead of losing Stamina.

Gained Peril is 25% of the blocked attacks stamina cost.
~~~

## English comparison

The English describes Block cost being converted to Peril below the critical threshold and gives the verified 25% conversion parameter. It does not specify the 97% cap, normalization by maximum Stamina, overflow conversion or the effect of other Peril modifiers. These are supplements; it does not explicitly exclude Stamina payment for the portion that crosses the cap.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_block_costs_warp_charge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/e56e3649-507c-4ebb-94fc-58f7eff77aee). The icon identifies the talent; it is not mechanism evidence.
