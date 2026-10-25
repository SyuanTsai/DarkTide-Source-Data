# Tis but a Scratch: source evidence

[繁體中文](../broker_passive_replenish_toughness_on_ranged_toughness_damage.md) | [Player description](README.md#broker_passive_replenish_toughness_on_ranged_toughness_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_replenish_toughness_on_ranged_toughness_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_replenish_toughness_on_ranged_toughness_damage`; name key `loc_talent_broker_passive_replenish_toughness_on_ranged_toughness_damage`; description key `loc_talent_broker_passive_replenish_toughness_on_ranged_toughness_damage_desc`. Node `node_3d4045a2-3883-4d78-9bf7-ac097351162e`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_damage_taken` requires both `has_toughness` and `on_ranged_hit`. The child buff has `duration = 3`, `max_stacks = 1`, refresh enabled, and `toughness_regen_percent = 0.3 / 3`.
- `on_player_toughness_broken` directly calls `force_finish`. The buff also has `prevent_toughness_regen_when_depleted`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1955-L1978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1955-L1978)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L362-L365](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L362-L365)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L756-L758](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L756-L758)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L160-L174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L160-L174)
- [scripts/settings/talent/talent_settings_broker.lua — L366-L369](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L366-L369)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1944-L1954](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1944-L1954)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1575-L1593](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1575-L1593)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L518-L550](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L518-L550)

## Example assumptions and limits

- **Trigger condition**: taking Ranged Damage while your Toughness is not depleted starts ongoing Toughness recovery. Restore 10% of maximum Toughness per second for 3 seconds.
- **Refresh and cancellation**: retriggering resets the 3-second duration without stacking the recovery rate. Recovery stops when Toughness is depleted.
- **Recovery example**: at 100 maximum Toughness, restore 10 points per second, totalling 30 over a full 3 seconds. If triggered again at the 2-second mark, recovery can extend to the 5-second mark, totalling at most 50 points, still capped by the deficit.

The recovery example assumes the buff can run for the stated duration without a Toughness break and that sufficient Toughness is missing; actual recovery cannot exceed the deficit. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_replenish_toughness_on_ranged_toughness_damage`, hash `6de924eb`, entry 7147: **Tis but a Scratch**.
- Description key `loc_talent_broker_passive_replenish_toughness_on_ranged_toughness_damage_desc`, hash `6f652e30`, entry 7239.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness over {duration:%s}s after taking Ranged Toughness Damage. Losing all Toughness cancels the effect.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toughness:%s}` | `talent_settings.broker_passive_replenish_toughness_on_ranged_toughness_damage.toughness = 0.3` → `30%` | `percentage`; no prefix |
| `{duration:%s}` | `talent_settings.broker_passive_replenish_toughness_on_ranged_toughness_damage.duration = 3` → `3` | `number` |

The existing display mapping at `broker_talents.lua` L1579-L1588 reads total Toughness recovery and duration from the talent settings. Verified values are reused.

Static reconstruction; not an observed game screen:

~~~text
Replenish 30% Toughness over 3s after taking Ranged Toughness Damage. Losing all Toughness cancels the effect.
~~~

## English comparison

The English states 30% recovery over 3 seconds after Ranged Toughness Damage and explicitly says losing all Toughness cancels it. Both agree with the accepted evidence. The per-second maximum-Toughness basis, single-buff refresh, and deficit cap are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_replenish_toughness_on_ranged_toughness_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/ba3e0adf-5d95-459d-9ed4-f17e21febd90). The icon identifies the talent; it is not mechanism evidence.
