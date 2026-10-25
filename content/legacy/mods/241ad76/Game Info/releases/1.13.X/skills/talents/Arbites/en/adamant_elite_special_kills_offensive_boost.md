# No Escape: source evidence

[繁體中文](../adamant_elite_special_kills_offensive_boost.md) | [Player description](README.md#adamant_elite_special_kills_offensive_boost) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_elite_special_kills_offensive_boost)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_elite_special_kills_offensive_boost`; name key `loc_talent_adamant_elite_special_kills_offensive_boost`; description key `loc_talent_adamant_elite_special_kills_offensive_boost_alt_desc`. Node `node_a9e22eac-7d0d-4567-ae6c-e7be34534eaa`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_hit` uses `on_elite_or_special_kill`, granting `damage = 0.1` and `movement_speed = 0.1` for 4s with `allow_proc_while_active`. The two stats are calculated separately.

## Fixed source evidence

- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L120-L133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L133)
- [scripts/utilities/attack/damage_calculation.lua — L236-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L303-L357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua — L120-L124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L120-L124)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2597-L2613](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2597-L2613)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_walking.lua — L101-L129](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_walking.lua#L101-L129)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L837-L861](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L837-L861)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1514-L1540](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1514-L1540)

## Example assumptions and limits

- **Trigger and refresh**: Killing an Elite or Specialist grants 10% Damage and 10% Movement Speed for 4s. Another qualifying kill resets the duration.

- **Effect examples**: Isolating this effect, 100 points of damage becomes 110, and movement at 5 metres per second becomes 5 × 1.1 = 5.5 metres per second. With an existing same-stage 25% damage bonus, damage is 100 × (1 + 25% + 10%) = 135 points.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_elite_special_kills_offensive_boost`, hash `6f331228`, entry 7225: **No Escape**.
- Description key `loc_talent_adamant_elite_special_kills_offensive_boost_alt_desc`, hash `ea8040eb`, entry 15234.

Full raw template:

```text
{damage:%s} Damage and {movement_speed:%s} Movement Speed on Elite or Specialist Kill. Lasts {duration:%s}s.
```

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings.elite_special_kills_offensive_boost.damage = 0.1 | Percentage, + prefix → +10% |
| movement_speed | talent_settings.elite_special_kills_offensive_boost.movement_speed = 0.1 | Percentage, + prefix → +10% |
| duration | talent_settings.elite_special_kills_offensive_boost.duration = 4 | Number → 4; template adds s |

Static reconstruction; not an observed game screen:

```text
+10% Damage and +10% Movement Speed on Elite or Specialist Kill. Lasts 4s.
```

## English comparison

The independently read English agrees with the Elite/Specialist Kill trigger, both 10% bonuses and 4s duration. Refresh, the separate calculation stages and worked examples are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_elite_special_kills_offensive_boost.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/6d045fa3-97bc-4943-9e6e-0f703e68288d). The icon identifies the talent; it is not mechanism evidence.
