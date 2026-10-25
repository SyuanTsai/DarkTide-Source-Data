# Becalming Eruption: source evidence

[繁體中文](../psyker_shout_reduces_warp_charge_generation.md) | [Player description](README.md#psyker_shout_reduces_warp_charge_generation) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_shout_reduces_warp_charge_generation)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_shout_reduces_warp_charge_generation`; name key `loc_talent_psyker_shout_reduces_warp_charge_generation`; description key `loc_talent_psyker_shout_reduces_warp_charge_generation_description`. Node `node_b6b57be7-9aa8-483b-a127-6c1815d452a4`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The shout-end event adds `num_hits` stacks of `psyker_shout_warp_generation_reduction`. The buff lasts 5 seconds and caps at 25 stacks. The default template and first override use `warp_charge_amount=0.99` per stack; the second override uses 0.98. Talent formatting reads a tier value; the examples use only the 0.99 scenario.
- Buff settings classify `warp_charge_amount` as a `multiplicative_multiplier`. Multi-stack buff calculation multiplies in each stack separately. Thus a 1% per-stack reduction gives a total Peril Generation coefficient of `0.99^n`, rather than adding the percentages directly.
- Until the configurations are confirmed in game, one override cannot be treated as the value fixed for every configuration.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L266-L316](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L266-L316)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L405-L445](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L405-L445)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L419-L445](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L419-L445)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L362-L417](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L362-L417)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L315-L343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L315-L343)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L515-L541](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L515-L541)
- [scripts/settings/buff/buff_settings.lua — L1018-L1021](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1018-L1021)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L729](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L729)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L266-L316](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L266-L316)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L515-L541](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L515-L541)

## Example assumptions and limits

- **Ability modifier**: Each Enemy hit by Venting Shriek grants one stack of Peril Generation reduction for 5 seconds, up to 25 stacks.
- **Stack examples**: Using the accepted 0.99 coefficient per stack and no other Peril Generation modifiers, 10 eligible hits give `0.99^10 ≈ 0.9044`: about 90.44% of original generation, or 9.56% less. A gain of 10 Peril percentage points becomes `10 × 0.99^10 ≈ 9.04` points. At 25 stacks, `0.99^25 ≈ 0.7778`: about 77.78% of original generation, or 22.22% less; a gain of 10 points becomes about 7.78 points.
- This reduces new Peril Generation; it does not directly Quell existing Peril. The source also contains a 0.98 tier override. The examples use 0.99 and cannot be applied unchanged to a different tier/configuration.

- The 10-hit example assumes 10 eligible Enemies hit by this shout, a 0.99 coefficient per stack and no other Peril Generation modifiers. The 25-stack example assumes the same coefficient at the cap; the effect lasts 5 seconds.
- Shout hit count depends on the action's target filtering and is capped at 25 stacks. Duplicate counting of the same target in some special collision cases has not been verified.
- The buff also has a 0.98 tier override. If the Build 25606770 client uses a different tier/configuration, the numerical examples cannot be applied directly and require comparison within the same build.
- The Peril Generation stat and Quelling are separate effects; this talent does not directly reduce already accumulated Peril. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_shout_reduces_warp_charge_generation`, hash `cc0d1ec0`, entry 13184: **Becalming Eruption**.
- Description key `loc_talent_psyker_shout_reduces_warp_charge_generation_description`, hash `57df8e08`, entry 5700.

Full raw template:

~~~text
{talent_name:%s} now decreases Peril Generation by {warp_generation:%s} for each Enemy hit, Stacking {max_stacks:%s} times. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_shout_vent_warp_charge` | Localized string → `Venting Shriek` |
| `warp_generation` | Tier-aware coefficient: `0.99`, with existing `0.98` override | `(1 − value) × 100` → `1%` or `2%`; reconstruction uses `1%` |
| `max_stacks` | `25` | Number → `25` |
| `duration` | `5` | Number → `5`; the template adds `s` |

Only missing display fields in `psyker_talents.lua` L266–311 were read. `talent_name` resolves to **Venting Shriek** (`loc_talent_psyker_shout_vent_warp_charge`, hash `90f1bcf1`, entry 9370). The tier-aware `warp_generation` mapping reads `warp_charge_amount` and applies `(1 − value) × 100`: the accepted 0.99 setting displays 1%, while the existing 0.98 override would display 2%. The reconstruction below uses only the 0.99 scenario. Which tier/configuration is active in game remains unconfirmed; mechanics and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Venting Shriek now decreases Peril Generation by 1% for each Enemy hit, Stacking 25 times. Lasts 5s.
~~~

## English comparison

Read independently, the English reduces Peril Generation per Enemy hit, caps stacking at 25 and lasts 5 seconds. This agrees with the accepted shout-hit trigger, affected stat, cap and duration. The wording does not require additive stacking or say that accumulated Peril is Quelled. The 1% reconstruction agrees with the 0.99 setting, but the mapping is tier-aware and the source also has a 0.98 override; the active tier across client configurations cannot be confirmed. Multiplicative calculations and the unresolved duplicate-hit condition remain supplementary details, with no explicit English contradiction established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_shout_reduces_warp_charge_generation.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/b89da8f0-2d3d-4a87-bc92-43e2438e28c8). The icon identifies the talent; it is not mechanism evidence.
