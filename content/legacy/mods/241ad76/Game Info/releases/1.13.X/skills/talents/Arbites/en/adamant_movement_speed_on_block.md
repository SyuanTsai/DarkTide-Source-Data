# March: source evidence

[繁體中文](../adamant_movement_speed_on_block.md) | [Player description](README.md#adamant_movement_speed_on_block) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_movement_speed_on_block)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_movement_speed_on_block`; name key `loc_talent_adamant_movement_speed_on_block`; description key `loc_talent_adamant_movement_speed_on_block_alt_desc`. Node `node_b93d4978-d0c5-4257-8725-9a1b20596f93`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

Despite the `on_block` talent identifier, `on_hit` uses `on_ranged_hit`. The proc grants `proc_stat_buffs.movement_speed = 0.15` for 3s. There is no cooldown: `ProcBuff._can_activate` returns true without one, permitting repeat triggers to restart the duration.

## Fixed source evidence

- [scripts/extension_systems/buff/buffs/proc_buff.lua — L168-L184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L168-L184)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L303-L357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua — L431-L434](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L431-L434)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2092-L2109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2092-L2109)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_walking.lua — L101-L129](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_walking.lua#L101-L129)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2665-L2684](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2665-L2684)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1487-L1513](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1487-L1513)

## Example assumptions and limits

- **Trigger and refresh**: A ranged attack hitting an enemy grants 15% Movement Speed for 3s. Another ranged hit resets the duration.

- **Movement-speed example**: Isolating this multiplier, an original 5 metres per second becomes 5 × 1.15 = 5.75 metres per second. Other action-related slowdowns still apply.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_movement_speed_on_block`, hash `ba21ad6e`, entry 12007: **March**.
- Description key `loc_talent_adamant_movement_speed_on_block_alt_desc`, hash `f2ea4140`, entry 15786.

Full raw template:

```text
{movement_speed:%s} Movement Speed on Ranged Hit. Lasts {duration:%s}s.
```

| Placeholder | Value | Formatting |
|---|---|---|
| movement_speed | talent_settings.movement_speed_on_block.movement_speed = 0.15 | Percentage, + prefix → +15% |
| duration | talent_settings.movement_speed_on_block.duration = 3 | Number → 3; template adds s |

Static reconstruction; not an observed game screen:

```text
+15% Movement Speed on Ranged Hit. Lasts 3s.
```

## English comparison

The independently read English agrees with the ranged-hit trigger, 15% Movement Speed and 3s duration. No-cooldown refresh, the movement example and action-slowdown qualification are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_movement_speed_on_block.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/8f0bcba7-48bd-4d61-ad19-b03a65160eb5). The icon identifies the talent; it is not mechanism evidence.
