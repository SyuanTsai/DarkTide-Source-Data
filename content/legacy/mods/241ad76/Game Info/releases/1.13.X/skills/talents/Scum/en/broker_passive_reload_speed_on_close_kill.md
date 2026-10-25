# Speedloader: source evidence

[繁體中文](../broker_passive_reload_speed_on_close_kill.md) | [Player description](README.md#broker_passive_reload_speed_on_close_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_reload_speed_on_close_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_reload_speed_on_close_kill`; name key `loc_talent_broker_passive_reload_speed_on_close_kill`; description key `loc_talent_broker_passive_reload_speed_on_close_kill_desc`. Node `node_11c062d4-c4be-4e96-b5f2-991bbedf2de3`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- A close-range Ranged `on_kill` applies the effect buff, with `duration = 8`, `max_stacks = 1`, refresh enabled, and `reload_speed = 0.3`.
- A separate `on_hit` mark is specific to `needlepistol_p1_m1`/`needlepistol_p1_m2`. It requires the server, a Ranged attack, the wielded secondary slot, and a living target. Tracking lasts until more than one frame after the `toxin` keyword disappears. `on_minion_death` checks only that the target is marked, `damage_type = toxin`, and the distance between `params.attacking_unit` and the death position is ≤12.5 m; it does not separately verify the final Damage owner.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1382-L1434](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1382-L1434)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L306-L317](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L306-L317)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L777-L791](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L791)
- [scripts/settings/buff/broker_buff_utils.lua — L99-L190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L99-L190)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/talent/talent_settings_broker.lua — L286-L289](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L286-L289)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1392-L1418](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1392-L1418)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1230-L1249](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1230-L1249)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L171-L199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L171-L199)

## Example assumptions and limits

- **Trigger and refresh**: a Ranged kill within 12.5 metres grants 30% Reload Speed for 8 seconds. Retriggering resets the duration without stacking the amount.
- **Timing example**: a reload action that can be accelerated and normally takes 2 seconds becomes 2 ÷ 1.3 ≈ 1.54 seconds with this effect alone. With an existing 20% Reload Speed bonus at the same stage, it becomes 2 ÷ (1 + 20% + 30%) ≈ 1.33 seconds.
- **Needle Pistol**: first hit a living Enemy with the Needle Pistol. If that Enemy remains tracked by the Toxin logic and dies to Toxin at close range, the bonus can also trigger.

The special Toxin-death branch measures distance from the attacker in the event, which is not guaranteed to match the talent owner's position. Multiplayer attribution and boundary behavior have not been tested in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_reload_speed_on_close_kill`, hash `e3392d09`, entry 14726: **Speedloader**.
- Description key `loc_talent_broker_passive_reload_speed_on_close_kill_desc`, hash `f9ccd2c5`, entry 16219.

Full raw template:

~~~text
{reload_speed:%s} Reload Speed for {duration:%s}s on Close Ranged Kill.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{reload_speed:%s}` | `talent_settings.broker_passive_reload_speed_on_close_kill.reload_speed = 0.3` → `+30%` | `percentage`; prefix `+` |
| `{duration:%s}` | `talent_settings.broker_passive_reload_speed_on_close_kill.duration = 8` → `8` | `number` |

The existing display mapping at `broker_talents.lua` L1234-L1244 reads the Reload Speed and duration settings. Verified values are reused.

Static reconstruction; not an observed game screen:

~~~text
+30% Reload Speed for 8s on Close Ranged Kill.
~~~

## English comparison

The English expressly states Close Ranged Kill and agrees with the +30% Reload Speed and 8-second duration. It does not specify the 12.5 m threshold, single-buff refresh, speed-to-time calculation, or Needle Pistol tracking exception. These are supplements; no new English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_reload_speed_on_close_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/139c3b2c-0d64-4a99-89fb-a19e5ec4cc6e). The icon identifies the talent; it is not mechanism evidence.
