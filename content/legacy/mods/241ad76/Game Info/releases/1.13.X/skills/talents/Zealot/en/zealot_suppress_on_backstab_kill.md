# Behind the Lines: source evidence

[繁體中文](../zealot_suppress_on_backstab_kill.md) | [Player description](README.md#zealot_suppress_on_backstab_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_suppress_on_backstab_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_suppress_on_backstab_kill`; name key `loc_talent_zealot_suppress_on_backstab_kill`; description key `loc_talent_zealot_suppress_on_backstab_kill_desc`. Node `node_09a97b15-e79d-4953-a189-f24beac4a40d`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_kill` also requires `on_heavy_hit` and `is_backstab`. `Suppression.apply_area_minion_suppression` uses the holder's position, radius 8, suppression 200000 and `falloff = true`. The value is suppression, not damage or a duration in seconds.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2800-L2826](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2800-L2826)
- [scripts/settings/talent/talent_settings_zealot.lua — L167-L174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L167-L174)
- [scripts/utilities/attack/suppression.lua — L87-L150](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/suppression.lua#L87-L150)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2481-L2503](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2481-L2503)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1890-L1915](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1890-L1915)

## Example assumptions and limits

- **Trigger:** a Heavy Melee Backstab Kill suppresses enemies capable of being suppressed within 8 metres of you, with a 5-second cooldown. The area is centred on your position.
- **Limits:** suppression decreases with distance from you. Enemy suppression resistance and behaviour differ, so this does not guarantee that every enemy stops attacking, and it deals no extra damage.
- **Cooldown example:** after triggering at 0 seconds, another Heavy Melee Backstab Kill at 2 seconds does not trigger it again. It can trigger again from about 5 seconds.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `2ae92ad1` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_suppress_on_backstab_kill`, hash `5e4f6e53`, entry 6112: **Behind the Lines**.
- Description key `loc_talent_zealot_suppress_on_backstab_kill_desc`, hash `2ae92ad1`, entry 2780.

Full raw template:

~~~text
Heavy Melee Backstab Kills suppress enemies within {range:%s}m. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `range` | `8` | `number`: `8` |
| `cooldown` | `5` | `number`: `5` |

The display mapping uses `suppression.distance` and `cooldown_duration`. Its additional `suppression_value` field is not referenced by the raw template; it does not add a damage or duration claim.

Static reconstruction; not an observed game screen:

~~~text
Heavy Melee Backstab Kills suppress enemies within 8m. 5s Cooldown.
~~~

## English comparison

The English independently agrees on Heavy Melee Backstab Kills, suppression, range and cooldown. It does not specify the centre of the area, falloff or enemy resistance. Those limits are supplements; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_suppress_on_backstab_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/5d469457-ce3e-4c4f-ac25-c0759b30b61f). The icon identifies the talent; it is not mechanism evidence.
