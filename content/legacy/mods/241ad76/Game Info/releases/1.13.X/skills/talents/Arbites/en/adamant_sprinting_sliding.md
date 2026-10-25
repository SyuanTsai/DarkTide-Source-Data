# Rapid Movement: source evidence

[繁體中文](../adamant_sprinting_sliding.md) | [Player description](README.md#adamant_sprinting_sliding) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_sprinting_sliding)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_sprinting_sliding`; name key `loc_talent_adamant_sprinting_sliding`; description key `loc_talent_adamant_sprinting_sliding_description`. Node `node_4e45edbc-7e9a-43b8-9078-8d8146ca4177`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- Two independent buffs: `on_slide_end` starts a 5s buff with `sprint_movement_speed = 0.05`. `on_kill` uses `cooldown_duration = 0.75` and calls `Stamina.add_stamina_percent(0.05)` without checking the slide buff.

## Fixed source evidence

- [scripts/utilities/attack/stamina.lua — L102-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua — L149-L163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_sprinting.lua#L149-L163)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L144-L184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L144-L184)
- [scripts/settings/talent/talent_settings_adamant.lua — L473-L478](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L473-L478)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3005-L3022](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3005-L3022)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3023-L3035](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3023-L3035)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2981-L3015](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2981-L3015)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2122-L2146](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2122-L2146)

## Example assumptions and limits

- **Slide speed**: After a slide ends, Sprint Speed increases by 5% for 5s. Another slide restarts the duration. With a starting sprint speed of 6 metres/s, this effect alone gives 6 × 1.05 = 6.3 metres/s.

- **Kill recovery**: Kills restore 5% of maximum Stamina, at most once every 0.75s. No prior slide is required. With maximum Stamina 6, each trigger restores 6 × 5% = 0.3 points, capped at full Stamina.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_sprinting_sliding`, hash `c99d6967`, entry 13017: **Rapid Movement**.
- Description key `loc_talent_adamant_sprinting_sliding_description`, hash `1469331e`, entry 1329.

The resource-record suffix `[Writer]` is metadata, not displayed text.

Full raw template:

~~~text
Sliding increases Sprint Speed by {speed:%s} for {duration:%s}s. Kills restore {stamina:%s} Stamina. {cd:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| speed | talent_settings.sprinting_sliding.speed = 0.05 | Percentage, + prefix → +5% |
| duration | talent_settings.sprinting_sliding.duration = 5 | Number → 5; template adds s |
| stamina | talent_settings.sprinting_sliding.stamina = 0.05 | Percentage, + prefix → +5% |
| cd | talent_settings.sprinting_sliding.cd = 0.75 | Number → 0.75; template adds s |

Static reconstruction; not an observed game screen:

~~~text
Sliding increases Sprint Speed by +5% for 5s. Kills restore +5% Stamina. 0.75s Cooldown.
~~~

## English comparison

The independently read English agrees with sliding granting 5% Sprint Speed for 5s and kills restoring 5% Stamina on a 0.75s cooldown. The cooldown is attached to kill recovery. Slide-end activation, refresh, independent kill recovery, maximum-Stamina basis and examples are supplementary; no explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_sprinting_sliding.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/8a0b3c73-0e7e-4d31-9f7d-385634eae6e3). The icon identifies the talent; it is not mechanism evidence.
