# Keep Shooting: source evidence

[繁體中文](../ogryn_reload_speed_on_empty.md) | [Player description](README.md#ogryn_reload_speed_on_empty) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_reload_speed_on_empty)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_reload_speed_on_empty`; name key `loc_talent_ogryn_reload_speed_on_empty_name`; description key `loc_talent_ogryn_reload_speed_on_empty_desc`. Node `node_ac9221c9-6033-4a8d-99ca-2bd3b508bdba`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- While not reloading, `update_func` sets `is_active=(Ammo.current_slot_clip_percentage==0)`. It does not overwrite this value during the reload. The conditional stat is `reload_speed=0.2`.
- The weapon reload action lists `reload_speed`. `ActionHandler` adds the specified time-scale modifiers and computes action duration as `total_time / time_scale`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2786-L2821](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2786-L2821)
- [scripts/settings/talent/talent_settings_ogryn.lua — L53-L55](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L53-L55)
- [scripts/utilities/action/action_handler.lua — L356-L365](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L365)
- [scripts/utilities/action/action_handler.lua — L402-L429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L402-L429)
- [scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua — L563-L572](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ripperguns/ogryn_rippergun_p1_m1.lua#L563-L572)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2353-L2368](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2353-L2368)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L113-L138](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L113-L138)

## Example assumptions and limits

- **Trigger**: Start reloading with an empty clip to gain +20% Reload Speed for that reload. Reloading early while ammunition remains does not gain this bonus.

- **Time example**: With only this bonus, a 3s action affected by Reload Speed becomes `3 ÷ (1 + 20%) = 2.5s`, about 16.7% shorter. This is not a direct 20% reduction in duration.

- **Persistence**: The empty-clip condition is checked before reloading. That result is retained during the reload, so inserting ammunition does not immediately remove the bonus.

The example applies only to actions affected by `reload_speed`. Multi-stage reloads and other timing modifiers must be calculated stage by stage. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_reload_speed_on_empty_name`, hash `9a341931`, entry 9943: **Keep Shooting**.
- Description key `loc_talent_ogryn_reload_speed_on_empty_desc`, hash `000cf461`, entry 5.

Full raw template:

~~~text
{reload_speed:%s} Reload Speed when reloading an Empty Clip.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| reload_speed | 0.2 | Percentage with explicit + prefix → +20% |

Only the missing display mapping in the cited talent definition, lines 2353–2368, was read. Existing mechanisms and formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+20% Reload Speed when reloading an Empty Clip.
~~~

## English comparison

The independently read English grants Reload Speed when reloading an empty clip, matching the accepted condition and +20% stat. It does not state a direct reduction in duration. Retaining the condition during reloading, the 2.5s calculation and multi-stage limits supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_reload_speed_on_empty.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/f61476bf-8738-40b1-8c66-63980d690cc7). The icon identifies the talent; it is not mechanism evidence.
