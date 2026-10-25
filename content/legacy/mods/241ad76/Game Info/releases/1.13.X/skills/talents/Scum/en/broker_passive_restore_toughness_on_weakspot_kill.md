# Precision Violence: source evidence

[繁體中文](../broker_passive_restore_toughness_on_weakspot_kill.md) | [Player description](README.md#broker_passive_restore_toughness_on_weakspot_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_restore_toughness_on_weakspot_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_restore_toughness_on_weakspot_kill`; name key `loc_talent_broker_passive_restore_toughness_on_weakspot_kill`; description key `loc_talent_broker_passive_restore_toughness_on_weakspot_kill_desc`. Node `node_46a6b70d-17b4-4088-af93-c3af18887046`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_melee_hit` requires a Melee attack; the server excludes `is_instakill`. When `target_index <= last_target_index`, it resets `toughness_granted_this_attack`.
- It subtracts the recorded percentage from 4%, 8%, or 12% to check whether the result is greater than 0. However, `replenish_percentage` receives the full `toughness_percentage`, not the `toughness_to_grant` difference. A 4→8→12 sequence can therefore restore 24% in total. In the reverse order, after 12%, the 8% and 4% hits restore nothing further.
- Recovery uses maximum Toughness, applies general recovery modifiers, and clamps to the deficit. The examples above omit other recovery modifiers.

## Fixed source evidence

- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L368-L370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L370)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_broker.lua — L271-L275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L271-L275)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1169-L1216](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1169-L1216)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1157-L1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1157-L1179)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L90-L115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L90-L115)

## Example assumptions and limits

- **Recovery amount**: ordinary Melee hits restore 4% of maximum Toughness; Critical or Weakspot hits instead restore 8%, and hits that are both Critical and on a Weakspot restore 12%. A kill is not required. Direct instakills from special executions do not trigger this effect.
- **Same swing**: a later target triggers recovery again only when its recovery percentage exceeds the percentage already recorded for this attack. Equal percentages do not repeat recovery for every target.
- **Recovery example**: with 100 maximum Toughness, hitting an ordinary target and then a Weakspot restores 4 points followed by 8, for 12 total. A subsequent Critical Weakspot hit in the same attack can restore another 12 points. Each recovery is capped by the deficit; if only 5 points are missing, it restores at most 5.

The multi-target example assumes increasing `target_index` values and hit data matching the stated Weakspot/Critical conditions. Cleave resolution and event ordering have not been tested in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_restore_toughness_on_weakspot_kill`, hash `f58949f3`, entry 15950: **Precision Violence**.
- Description key `loc_talent_broker_passive_restore_toughness_on_weakspot_kill_desc`, hash `d91c10cd`, entry 14067.

Full raw template:

~~~text
Melee Hits replenishes {default:%s} Toughness.
Melee Critical Strikes and Weakspot Hits instead replenish {weakspot:%s}, and Critical Weakspot Strikes replenish {critical:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{default:%s}` | `talent_settings.broker_passive_restore_toughness_on_weakspot_kill.default = 0.04` → `4%` | `percentage`; no prefix |
| `{weakspot:%s}` | `talent_settings.broker_passive_restore_toughness_on_weakspot_kill.weakspot = 0.08` → `8%` | `percentage`; no prefix |
| `{critical:%s}` | `talent_settings.broker_passive_restore_toughness_on_weakspot_kill.critical = 0.12` → `12%` | `percentage`; no prefix |

The existing display mapping at `broker_talents.lua` L1161-L1174 reads the three talent-setting values as percentages. The verified 4%/8%/12% values are reused.

Static reconstruction; not an observed game screen:

~~~text
Melee Hits replenishes 4% Toughness.
Melee Critical Strikes and Weakspot Hits instead replenish 8%, and Critical Weakspot Strikes replenish 12%.
~~~

## English comparison

The English correctly identifies Melee hits and the three recovery percentages, including replacement by 8% or 12% for the matching hit type. It does not state a per-swing total cap. The recorded-percentage gate, full-value recovery on a higher percentage, reverse-order behavior, instakill exclusion, and maximum-Toughness/deficit rules are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_restore_toughness_on_weakspot_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/596d2151-a0bd-4b71-9305-805caed18fcc). The icon identifies the talent; it is not mechanism evidence.
