# Superior Defence Engrams: source evidence

[繁體中文](../cryptic_ranged_stacking_toughness.md) | [Player description](README.md#cryptic_ranged_stacking_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_ranged_stacking_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_ranged_stacking_toughness`; name key `loc_talent_cryptic_ranged_stacking_toughness`; description key `loc_talent_cryptic_ranged_stacking_toughness_desc`. Node `node_a615c4c7-47ca-4039-8649-58f9fbf10d17`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

`on_ranged_kill` grants an effect with `max_stacks = 5`, `duration = 8`, and `refresh_duration_on_stack`. Its update calls `replenish_percentage` with `stack_count × 0.01 × dt`, so recovery scales with both the stack count and elapsed time.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3106-L3129](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3106-L3129)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_cryptic.lua — L574-L578](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L574-L578)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3092-L3105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3092-L3105)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2294-L2317](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2294-L2317)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2215-L2244](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2215-L2244)

## Example assumptions and limits

- **Stacking**: Each ranged kill grants **1 stack**, up to **5**. Each stack restores **1% of maximum Toughness per second**.
- **Duration**: Another ranged kill resets the **8-second** timer. The duration can still refresh at maximum stacks.
- **Recovery example**: At **200 maximum Toughness** and **5 stacks**, recover `200 × 5 × 1% = 10` points per second. Maintaining full stacks for **8 seconds** can restore **80** points, capped at maximum Toughness.

The example assumes full stacks are maintained for all eight seconds. Recovery cannot exceed maximum Toughness.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_ranged_stacking_toughness`, hash `24e5786c`, entry 2383: **Superior Defence Engrams**.
- Description key `loc_talent_cryptic_ranged_stacking_toughness_desc`, hash `057bb0ce`, entry 333.

Full raw template:

~~~text
Ranged kills grant stacks. Each stack replenishes {toughness:%s} Toughness per second. Max {max_stacks:%s} stacks. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toughness:%s}` | `0.01` → `+1%` | Percentage; `+` prefix |
| `{max_stacks:%s}` | `5` | Number |
| `{duration:%s}` | `8` | Number; template adds `s` |

The existing display mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L2302-L2316) uses `toughness_regen_per_second_per_stack`, `max_stacks`, and `duration`.

Static reconstruction; not an observed game screen:

~~~text
Ranged kills grant stacks. Each stack replenishes +1% Toughness per second. Max 5 stacks. Lasts 8s.
~~~

## English comparison

The English matches the ranged-kill trigger, per-stack recovery rate, stack cap, and duration. Recovery based on maximum Toughness, the recovery cap, and refreshing the timer on another kill—including at maximum stacks—are supplementary details. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_ranged_stacking_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/deb63065-b15d-498f-a16c-ec7726ca6a22). The icon identifies the talent; it is not mechanism evidence.
