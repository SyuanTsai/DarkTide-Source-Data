# Rad-Sink: source evidence

[繁體中文](../cryptic_stacking_ranged_damage.md) | [Player description](README.md#cryptic_stacking_ranged_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_stacking_ranged_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_stacking_ranged_damage`; name key `loc_talent_cryptic_stacking_ranged_damage`; description key `loc_talent_cryptic_stacking_ranged_damage_desc`. Node `node_2da404f3-b540-4bfd-bdda-0ad5654eafce`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The implementation computes `steps = min(floor((fixed_t - fire_last_t - (1 - 1)) / 1), 2)`. The first stack therefore arrives at 1 second, rather than after an initial 1-second wait followed by another second. `time_lapsed <= 0.1` resets the stacks to zero.
- The `ranged_damage` stat enters the common additive stage. The exact order of a hit and bonus recalculation within the same frame still depends on weapon update timing.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L282-L321](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L282-L321)
- [scripts/settings/talent/talent_settings_cryptic.lua — L514-L519](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L514-L519)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2865-L2931](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2865-L2931)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2157-L2180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2157-L2180)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L527-L552](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L527-L552)

## Example assumptions and limits

- **Accumulation**: At **1 second since the last shot**, gain **10% Ranged Damage**. At **2 seconds**, it rises to **20%**, up to **2 stacks**.
- **Consumption**: Shooting again restarts the waiting period. Sustained fire cannot keep both stacks continuously.
- **Example**: At 100 base damage, one stack gives `100 × 1.10 = 110` and two give `100 × 1.20 = 120`. With an existing same-stage 25% bonus, two stacks give `100 × (1 + 25% + 20%) = 145`.

- The examples use 100 base damage: one stack gives 110, two give 120, or 145 with another same-stage 25% bonus.
- The English phrase after not Shooting for 1s, each subsequent second can be read as an extra second before the first stack. The verified source gives the first stack at 1 second and the second at 2. Keep this wording/presentation caveat separate from a Chinese-specific translation error; no cross-version behavior or game-screen timing was verified here.
- Same-frame hit and bonus recalculation order remains dependent on weapon update timing. Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_stacking_ranged_damage`, hash `237b28e6`, entry 2310: **Rad-Sink**.
- Description key `loc_talent_cryptic_stacking_ranged_damage_desc`, hash `0ff2b66e`, entry 1041.

Full raw template:

~~~text
After not Shooting for {duration:%s}s, each subsequent second spent not Shooting increases Ranged Damage by {ranged_damage:%s} on your next Shot. Stacks {stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration` | 1 | `number`: verified `talent_settings.cryptic_stacking_ranged_damage.time_since_last_shot_before_stacking = 1` |
| `ranged_damage` | +10% | `percentage`, prefix `+`: verified `talent_settings.cryptic_stacking_ranged_damage.ranged_damage_per_stack = 0.1` |
| `stacks` | 2 | `number`: verified `talent_settings.cryptic_stacking_ranged_damage.max_stacks = 2` |

The display mappings in `cryptic_talents.lua` L2165–L2179 use the already verified delay, per-stack value and cap. The reconstruction preserves the original timing wording.

Static reconstruction; not an observed game screen:

~~~text
After not Shooting for 1s, each subsequent second spent not Shooting increases Ranged Damage by +10% on your next Shot. Stacks 2 times.
~~~

## English comparison

The English +10% Ranged Damage per stack, two-stack cap and next-shot scope agree with the accepted effect. Its phrase after not Shooting for 1s, each subsequent second is ambiguous about whether the first stack appears at that first second or one second later. The accepted source clearly gives stacks at 1 and 2 seconds; because the wording permits competing timing readings, that point remains a wording caveat rather than an explicit English contradiction. Same-frame ordering and same-stage damage examples are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_stacking_ranged_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/26c97989-2f88-46ee-9bf3-f9f02b09c0f3). The icon identifies the talent; it is not mechanism evidence.
