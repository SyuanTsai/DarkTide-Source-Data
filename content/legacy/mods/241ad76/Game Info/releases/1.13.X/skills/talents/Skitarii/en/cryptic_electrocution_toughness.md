# Entropic Transfer: source evidence

[繁體中文](../cryptic_electrocution_toughness.md) | [Player description](README.md#cryptic_electrocution_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_electrocution_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_electrocution_toughness`; name key `loc_talent_cryptic_electrocution_toughness`; description key `loc_talent_cryptic_electrocution_toughness_desc`. Node `node_cd91dbac-9a28-4af5-ae75-7c8022169f5b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The trigger listens for `on_buff_added`, `on_buff_stack_added` and `on_max_stack_refresh_buff`, checking membership in `group_keywords.electrocuted`. It does not trigger on every Electrocution damage-over-time tick.
- The recovery rate is `0.12 / 4`, with `allow_proc_while_active = true`.

## Fixed source evidence

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_cryptic.lua — L475-L478](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L475-L478)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2635-L2690](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2635-L2690)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2055-L2073](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2055-L2073)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L410-L439](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L410-L439)

## Example assumptions and limits

- **Trigger**: Applying Electrocution to an enemy, adding an Electrocution stack, or refreshing its duration at the stack cap starts recovery of **12% of maximum Toughness over 4 seconds**.
- **Refreshing**: Another trigger restarts the 4-second duration without increasing the amount restored per second.
- **Example**: At 100 maximum Toughness, restore `100 × 12% ÷ 4 = 3` points per second. Retriggering at 2 seconds extends the effect until 6 seconds, allowing 18 points to be restored over that period.

- The example assumes 100 maximum Toughness and no other recovery bonuses: 3 points per second. A trigger at 2 seconds resets the effect's duration, extending the continuous recovery to 6 seconds for 18 points in total.
- Restoration uses maximum Toughness, respects Toughness recovery bonuses and cannot exceed the maximum.
- Applying or refreshing Electrocution and the ongoing restoration rate supplement the English condition. Damage-over-time ticks themselves are not this talent's trigger. Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_electrocution_toughness`, hash `18815327`, entry 1606: **Entropic Transfer**.
- Description key `loc_talent_cryptic_electrocution_toughness_desc`, hash `f4493647`, entry 15865.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness over {duration:%s}s on Electrocuting an enemy.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | 12% | `percentage`: verified `talent_settings.cryptic_electrocution_toughness.toughness_regen = 0.12` |
| `duration` | 4 | `number`: verified `talent_settings.cryptic_electrocution_toughness.toughness_regen_time = 4` |

The display mappings in `cryptic_talents.lua` L2063–L2072 use the already verified recovery amount and duration.

Static reconstruction; not an observed game screen:

~~~text
Replenish 12% Toughness over 4s on Electrocuting an enemy.
~~~

## English comparison

The English Electrocution condition, 12% recovery and 4-second duration agree with the accepted effect. It does not define the qualifying buff events or promise a trigger on each damage tick. The maximum-Toughness basis, 3%-per-second rate, duration refreshing, modifiers and preserved extended-duration example are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_electrocution_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/98a10c08-52e1-47bf-a288-a2043ba40a63). The icon identifies the talent; it is not mechanism evidence.
