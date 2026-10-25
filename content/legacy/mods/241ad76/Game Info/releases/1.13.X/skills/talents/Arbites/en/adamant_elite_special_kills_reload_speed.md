# Judicious Efficiency: source evidence

[繁體中文](../adamant_elite_special_kills_reload_speed.md) | [Player description](README.md#adamant_elite_special_kills_reload_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_elite_special_kills_reload_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_elite_special_kills_reload_speed`; name key `loc_talent_adamant_elite_special_kills_reload_speed`; description key `loc_talent_adamant_elite_special_kills_reload_speed_desc`. Node `node_9b76913c-5597-404c-ae20-7f3e16ec9273`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

A qualifying kill adds a child buff with `max_stacks = 1` and no duration. `on_reload` marks it done; it exits once `current_action.kind` is outside `reload_shotgun`, `reload_state` and `ranged_load_special`. Per-shell loading can therefore retain the effect until the entire sequence is exited.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3506-L3547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3506-L3547)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L120-L133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L133)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/talent/talent_settings_adamant.lua — L379-L381](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L379-L381)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3491-L3505](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3491-L3505)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2685-L2699](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2685-L2699)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1462-L1486](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1462-L1486)

## Example assumptions and limits

- **Trigger and consumption**: Killing an Elite or Specialist grants 20% Reload Speed for the next reload. Repeated kills do not accumulate the multiplier. The effect remains until the reload is completed and the reload action is exited.

- **Reload example**: Considering only action segments affected by Reload Speed, an original 3s becomes 3 ÷ 1.2 = 2.5s. A 20% speed increase is not a 20% reduction in time.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_elite_special_kills_reload_speed`, hash `183ba616`, entry 1582: **Judicious Efficiency**.
- Description key `loc_talent_adamant_elite_special_kills_reload_speed_desc`, hash `79ad9249`, entry 7911.

Full raw template:

```text
{reload_speed:%s} Reload Speed on next reload after Elite Kill or Specialist Kill.
```

| Placeholder | Value | Formatting |
|---|---|---|
| reload_speed | talent_settings.elite_special_kills_reload_speed.reload_speed = 0.20 | Percentage; no prefix configured → 20% |

Static reconstruction; not an observed game screen:

```text
20% Reload Speed on next reload after Elite Kill or Specialist Kill.
```

## English comparison

The independently read English agrees with the Elite/Specialist Kill trigger, 20% Reload Speed and next-reload scope. The cap, persistence, action-exit consumption and reciprocal-speed example are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_elite_special_kills_reload_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/88c5f583-d739-484e-a7cd-89b79a90334d). The icon identifies the talent; it is not mechanism evidence.
