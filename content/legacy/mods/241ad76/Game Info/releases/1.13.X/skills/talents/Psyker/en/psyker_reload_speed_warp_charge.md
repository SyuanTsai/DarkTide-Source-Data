# Surety of Arms: source evidence

[繁體中文](../psyker_reload_speed_warp_charge.md) | [Player description](README.md#psyker_reload_speed_warp_charge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_reload_speed_warp_charge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_reload_speed_warp_charge`; name key `loc_talent_psyker_reload_speed_warp`; description key `loc_talent_psyker_reload_speed_warp_desc`. Node `node_e3d09295-0206-4166-91c4-2371e8abf9e3`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Conditional `reload_speed = 0.3` applies at the threshold `<= 0.8`. `on_reload_start` records the ammunition count; `on_reload` uses the actual increase divided by `maxclip` as `charge_level` when calling `increase_immediate`, with `prevent_explosion = true`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3456-L3517](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3456-L3517)
- [scripts/settings/talent/talent_settings_psyker.lua — L76-L80](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L76-L80)
- [scripts/utilities/warp_charge.lua — L1-L100](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L1-L100)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2495-L2518](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2495-L2518)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1923-L1948](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1923-L1948)

## Example assumptions and limits

- **How it works**: At no more than 80% Peril, gain 30% Reload Speed. If the threshold condition still holds when the reload completes, generate Peril according to the fraction of the clip restored.

- **Reload example**: Compare only the segment affected by Reload Speed. A segment that originally takes 3 seconds becomes 3 ÷ 1.3 ≈ 2.31 seconds.

- **Peril example**: With a 40-round clip, 20 rounds restored and no other Peril modifiers, gain 20 ÷ 40 × 15% = 7.5 percentage points of Peril. Restoring a full clip adds 15 percentage points.

#### English wording correction

- “Below 80% Peril” excludes exactly 80%, but the verified condition is Peril ≤80%.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_reload_speed_warp`, hash `d9a5f4a2`, entry 14108: **Surety of Arms**.
- Description key `loc_talent_psyker_reload_speed_warp_desc`, hash `62b8a0d4`, entry 6413.

Full raw template:

~~~text
{reload_speed:%s} Reload Speed while below {threshold:%s} Peril. On Reload generate up to {warp_charge:%s} Peril based on the Percentage of the Clip Restored.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `reload_speed` | 0.3 | Percentage ×100: 30%. |
| `threshold` | 0.8 | Percentage ×100: 80%. |
| `warp_charge` | 0.15 | Percentage ×100: 15%. |

Display mapping: [psyker_talents.lua L2500-L2513](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2500-L2513). Values reuse the accepted Chinese evidence.

Static reconstruction; not an observed game screen:

~~~text
30% Reload Speed while below 80% Peril. On Reload generate up to 15% Peril based on the Percentage of the Clip Restored.
~~~

## English comparison

The Reload Speed and proportional Peril amounts agree. The English says “below 80%”, whereas the accepted condition includes exactly 80% (`<= 0.8`): this boundary is an explicit wording contradiction. Completion-time eligibility, action timing and explosion prevention are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_reload_speed_warp_charge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/5bac250d-4cc2-48b2-9832-8408652cec12). The icon identifies the talent; it is not mechanism evidence.
