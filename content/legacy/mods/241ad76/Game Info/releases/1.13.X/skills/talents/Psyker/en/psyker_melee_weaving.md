# By Crack of Bone: source evidence

[繁體中文](../psyker_melee_weaving.md) | [Player description](README.md#psyker_melee_weaving) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_melee_weaving)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_melee_weaving`; name key `loc_talent_psyker_melee_weaving`; description key `loc_talent_psyker_melee_weaving_desc`. Node `node_3d79a0fe-26e0-4ff4-9ecd-6b5d4b228404`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The event is `on_melee_weakspot_kills`; the proc stat is `warp_charge_amount = 0.8`, with `active_duration` of 4 seconds. `decrease_immediate(0.1)` runs on the next update. A single Boolean flag may combine triggers occurring within the same frame.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3190-L3228](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3190-L3228)
- [scripts/settings/talent/talent_settings_psyker.lua — L34-L38](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L34-L38)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2297-L2324](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2297-L2324)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1816-L1843](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1816-L1843)

## Example assumptions and limits

- **Trigger**: Kill an enemy with a melee Weakspot hit to remove 10 percentage points of Peril. Peril generation is reduced by 20% for the next 4 seconds. Another trigger refreshes the duration.

- **Peril example**: A trigger at 60% Peril lowers it to 50%. During the effect, an attack that would generate 20 percentage points generates 20 × 0.8 = 16 percentage points.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_melee_weaving`, hash `09e1a8bc`, entry 616: **By Crack of Bone**.
- Description key `loc_talent_psyker_melee_weaving_desc`, hash `9a0cbda1`, entry 9930.

Full raw template:

~~~text
Melee Weakspot Kills Quell {vent:%s} Peril and Reduce further Peril Generation by {warp_generation:%s} for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `vent` | 0.1 | Percentage ×100: 10%. |
| `warp_generation` | 0.8 | `100 - math.round(value × 100)`: 20%. |
| `duration` | 4 | Number: 4. |

Display mapping: [psyker_talents.lua L2302-L2319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2302-L2319). Existing verified values and shared formatter behavior are reused.

Static reconstruction; not an observed game screen:

~~~text
Melee Weakspot Kills Quell 10% Peril and Reduce further Peril Generation by 20% for 4s.
~~~

## English comparison

The English agrees with the melee Weakspot kill trigger, Peril reduction, generation reduction and duration. The percentage uses the full Peril gauge; the wording does not explicitly state that it is a fraction of current Peril. Refresh and next-update handling are supplementary.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_melee_weaving.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/efceab94-6c34-43bc-a8ed-6d06fbf269b1). The icon identifies the talent; it is not mechanism evidence.
