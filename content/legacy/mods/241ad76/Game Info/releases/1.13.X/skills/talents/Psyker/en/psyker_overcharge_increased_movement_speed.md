# Warp Speed: source evidence

[繁體中文](../psyker_overcharge_increased_movement_speed.md) | [Player description](README.md#psyker_overcharge_increased_movement_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_overcharge_increased_movement_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_overcharge_increased_movement_speed`; name key `loc_ability_psyker_overcharge_movement_speed`; description key `loc_ability_psyker_overcharge_movement_speed_description`. Node `node_229f2961-ef6f-4ccb-942e-8c4945f1f90f`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent adds the `psyker_overcharge_increased_movement_speed` passive. Its template sets `conditional_stat_buffs.movement_speed=0.2`, enabled only when `buff_extension` reports the `psyker_overcharge` keyword.
- This is a separate effect from the damage buff created on leaving Gaze, which lasts 10 seconds.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L561-L581](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L561-L581)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1245-L1262](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1245-L1262)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1134-L1149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1134-L1149)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L561-L581](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L561-L581)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L616-L638](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L616-L638)

## Example assumptions and limits

- **Ability modifier**: While Scrier's Gaze is active, gain 20% Movement Speed. This bonus ends when Gaze ends.

- **Speed example**: Isolating this effect, an original speed of 5 metres per second becomes `5 × (1 + 20%) = 6` metres per second.

- With no other bonuses, `5 × (1 + 20%) = 6` metres per second.
- The source confirms the `movement_speed` stat field. The character's final displacement speed may also depend on other Movement Speed sources and caps. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_ability_psyker_overcharge_movement_speed`, hash `ede1e14c`, entry 15459: **Warp Speed**.
- Description key `loc_ability_psyker_overcharge_movement_speed_description`, hash `5f1da172`, entry 6161.

Full raw template:

~~~text
{talent_name:%s} now also increases your Movement Speed by {movement_speed:%s} while active.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_combat_ability_overcharge_stance` | Localized string → `Scrier's Gaze` |
| `movement_speed` | `0.2` | Percentage with `+` prefix → `+20%` |

Only missing display fields in `psyker_talents.lua` L561–575 were read. `talent_name` resolves to **Scrier's Gaze** (`loc_talent_psyker_combat_ability_overcharge_stance`, hash `b664d880`, entry 11771); the accepted conditional movement-speed stat 0.2 uses percentage formatting with a `+` prefix to display `+20%`. Mechanics and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Scrier's Gaze now also increases your Movement Speed by +20% while active.
~~~

## English comparison

Read independently, the English grants +20% Movement Speed while Scrier's Gaze is active. This agrees with the accepted 0.2 conditional stat and active-Gaze keyword requirement. It does not say that Movement Speed lingers with the separate damage buff. The isolated speed example and other sources/caps supplement the wording; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_overcharge_increased_movement_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/f9987bfc-f9d7-48d8-9431-8c361223c50e). The icon identifies the talent; it is not mechanism evidence.
