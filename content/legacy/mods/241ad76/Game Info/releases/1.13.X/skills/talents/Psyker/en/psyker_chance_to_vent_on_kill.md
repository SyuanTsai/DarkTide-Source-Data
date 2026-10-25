# Battle Meditation: source evidence

[繁體中文](../psyker_chance_to_vent_on_kill.md) | [Player description](README.md#psyker_chance_to_vent_on_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_chance_to_vent_on_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_chance_to_vent_on_kill`; name key `loc_talent_psyker_base_2`; description key `loc_talent_psyker_quell_on_kill_and_reduction_desc`. Node `node_a665def4-3336-44eb-b7ed-1023d01cfd99`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_kill` has a probability of `0.1`; the permanent `warp_charge_amount` multiplier is `0.9`.
- A proc sets a single Boolean flag. The next update calls `decrease_immediate(0.1)`. Multiple procs before the same update coalesce into one reduction.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L495-L527](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L495-L527)
- [scripts/settings/talent/talent_settings_psyker.lua — L187-L191](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L187-L191)
- [scripts/utilities/shared_overheat_and_warp_charge_functions.lua — L18-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L18-L24)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L461-L488](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L461-L488)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L171-L202](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L171-L202)

## Example assumptions and limits

- **Effect**: Peril Generation is reduced by 10%; each Kill has a 10% chance to remove 10 percentage points of Peril.

- **Peril example**: an attack that normally generates 20 percentage points of Peril instead generates 20 × 0.9 = 18 percentage points. When the kill effect triggers, 50% Peril falls to 40%; if only 6% remains, it falls to 0%.

- **Proc chance**: 10% is the chance on each Kill; it does not guarantee one proc for every 10 enemies killed.

The coalescing of multiple kills within one update frame has not been tested in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_base_2`, hash `91b8623f`, entry 9426: **Battle Meditation**.
- Description key `loc_talent_psyker_quell_on_kill_and_reduction_desc`, hash `2b245e8a`, entry 2795.

Full raw template:

~~~text
{warp_charge_reduction:%s} Peril Generation. {chance:%s} chance to Quell {warp_charge_percent:%s} Peril on Kill.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `warp_charge_reduction` | `0.9` multiplier | manipulation `round((1 − value) × 100)`, `-` prefix → `-10%` |
| `chance` | `0.1` | percentage → `10%` |
| `warp_charge_percent` | `0.1` | percentage → `10%` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L466-L483) selects the verified generation multiplier and proc values. As established for the shared percentage formatter, `value_manipulation` replaces its default ×100 conversion; the reduction field becomes `-10%`.

Static reconstruction; not an observed game screen:

~~~text
-10% Peril Generation. 10% chance to Quell 10% Peril on Kill.
~~~

## English comparison

The English describes a 10% generation reduction and a 10% on-Kill chance to Quell 10% Peril, consistent with the verified generation multiplier and 10-point gauge reduction. It does not explicitly say the removed amount is a fraction of current Peril. The zero floor and update-frame coalescing are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_chance_to_vent_on_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/69bdf081-b37e-479b-a157-f6e047efcfda). The icon identifies the talent; it is not mechanism evidence.
