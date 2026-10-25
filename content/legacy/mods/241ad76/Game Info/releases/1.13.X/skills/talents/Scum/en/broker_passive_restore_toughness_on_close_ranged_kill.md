# Voice of Tertium: source evidence

[繁體中文](../broker_passive_restore_toughness_on_close_ranged_kill.md) | [Player description](README.md#broker_passive_restore_toughness_on_close_ranged_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_restore_toughness_on_close_ranged_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_restore_toughness_on_close_ranged_kill`; name key `loc_talent_broker_passive_restore_toughness_on_close_ranged_kill`; description key `loc_talent_broker_passive_restore_toughness_on_close_ranged_kill_desc`. Node `node_8d67a080-fc70-4749-9f1e-75b1d158f0f5`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_kill` uses `CheckProcFunctions.on_ranged_close_kill` to require `died`, `ranged` or `count_as_ranged_attack`, and squared distance between `hit_world_position` and `attacking_unit` no greater than 12.5². The close-range condition follows the accepted check, not merely the talent name or UI wording.
- An Elite or Specialist uses 0.15; other enemies use 0.08. The two values do not add together.

## Fixed source evidence

- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L306-L317](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L306-L317)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L777-L791](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L791)
- [scripts/settings/damage/damage_settings.lua — L18-L25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_broker.lua — L267-L270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L267-L270)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1148-L1168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1148-L1168)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1136-L1156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1136-L1156)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L116-L142](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L116-L142)

## Example assumptions and limits

- **Kill condition**: killing an Enemy within 12.5 metres with a Ranged attack restores 8% of maximum Toughness. Elite or Specialist enemies instead restore 15%.
- **Recovery example**: with 100 maximum Toughness, an ordinary Enemy restores 8 points, and an Elite or Specialist restores 15. At 95 current Toughness, either restores only the 5 missing points.

The recovery example uses 100 maximum Toughness and the current deficit; the Elite/Specialist amount replaces the ordinary amount. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_restore_toughness_on_close_ranged_kill`, hash `07db222a`, entry 480: **Voice of Tertium**.
- Description key `loc_talent_broker_passive_restore_toughness_on_close_ranged_kill_desc`, hash `7f8728ae`, entry 8286.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness on Ranged Kill. Elites and Specials instead replenish {toughness_elites:%s} Toughness.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{toughness:%s}` | `talent_settings.broker_passive_restore_toughness_on_close_ranged_kill.toughness_percentage = 0.08` → `+8%` | `percentage`; prefix `+` |
| `{toughness_elites:%s}` | `talent_settings.broker_passive_restore_toughness_on_close_ranged_kill.toughness_elites = 0.15` → `+15%` | `percentage`; prefix `+` |

The existing display mapping at `broker_talents.lua` L1140-L1151 reads the two talent-setting percentages and adds the configured `+` prefixes. Verified values are reused.

Static reconstruction; not an observed game screen:

~~~text
Replenish +8% Toughness on Ranged Kill. Elites and Specials instead replenish +15% Toughness.
~~~

## English comparison

The English correctly states Ranged kills and replacement of 8% by 15% for Elites and Specials. It omits the 12.5-metre limit, the actual hit-position/attacker check, and the maximum-Toughness/deficit basis. The description does not explicitly promise all ranges; these are supplements rather than English errata.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_restore_toughness_on_close_ranged_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/04100618-a87c-416c-8e22-3c1eb01aa7ab). The icon identifies the talent; it is not mechanism evidence.
