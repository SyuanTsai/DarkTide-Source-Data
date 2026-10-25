# Get Stuck In: source evidence

[繁體中文](../ogryn_ally_movement_boost_on_ability.md) | [Player description](README.md#ogryn_ally_movement_boost_on_ability) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_ally_movement_boost_on_ability)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_ally_movement_boost_on_ability`; name key `loc_talent_ogryn_bull_rush_movement_speed`; description key `loc_talent_ogryn_ability_movement_speed_desc`. Node `node_439226f9-4126-4a4c-9a7e-58850b64f4c1`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_combat_ability` applies a child buff to `in_coherence_units`. The child has duration 6s, maximum one stack and refresh, with `movement_speed=0.2`, `stun_immune` and `suppression_immune`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1306-L1353](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1306-L1353)
- [scripts/settings/talent/talent_settings_ogryn.lua — L337-L342](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L337-L342)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1331-L1351](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1331-L1351)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L940-L966](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L940-L966)

## Example assumptions and limits

- **Trigger**: Activating your Combat Ability grants you and allies currently in Coherency +20% Movement Speed and immunity to Stuns and Suppression for 6s.

- **Timing and stacking**: Leaving Coherency does not immediately remove the effect. Receiving it again restarts the duration; the speed bonus does not stack to 40%.

- **Speed example**: Starting at 5m/s, with only this bonus, speed becomes `5 × (1 + 20%) = 6m/s`.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_bull_rush_movement_speed`, hash `58c6ea3b`, entry 5762: **Get Stuck In**.
- Description key `loc_talent_ogryn_ability_movement_speed_desc`, hash `2156e8e1`, entry 2172.

Full raw template:

~~~text
On activating your Combat Ability, you and Allies in Coherency gain {movement_speed:%s} Movement Speed and are also Immune to Stuns & Suppression for {time:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| movement_speed | coop_2.movement_speed = 0.2 | Percentage with explicit + prefix → +20% |
| time | coop_2.duration = 6 | Number → 6 |

Only the missing display mapping in the cited talent definition, lines 1331–1351, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
On activating your Combat Ability, you and Allies in Coherency gain +20% Movement Speed and are also Immune to Stuns & Suppression for 6s.
~~~

## English comparison

The independently read English specifies the Combat Ability trigger, you and allies in Coherency, +20% Movement Speed and Stun/Suppression immunity for 6s. These match the accepted evidence. Retaining the effect after leaving Coherency, refresh rather than stacking, and the speed calculation supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_ally_movement_boost_on_ability.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/895c3ccd-387f-4862-9a2b-b429ff5d6432). The icon identifies the talent; it is not mechanism evidence.
