# Boiling Blood: source evidence

[繁體中文](../broker_ability_punk_rage_sub_4.md) | [Player description](README.md#broker_ability_punk_rage_sub_4) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_ability_punk_rage_sub_4)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_ability_punk_rage_sub_4`; name key `loc_talent_broker_ability_punk_rage_sub_4`; description key `loc_talent_broker_ability_punk_rage_sub_4_desc`. Node `node_8efd6143-4d2d-4bd8-a40d-229263fccfd1`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent enables `broker_rage_duration_extend`. Rage's Melee `on_hit` starts with base `max_duration = 20` and `added_duration = 0.3`. Only with this branch selected and any `elite`, `special`, `monster` or `captain` tag in `params.tags` does it switch to `max_duration = 30` and `added_duration = 1`. This is broader than the localized Elite/Monstrosity list, also including Specialist and Captain tags.
- Each hit type calls the shared extension logic with its own threshold. It takes the integer part of elapsed time since activation divided by that threshold, then divides the extension by 2 raised to that power. Special-tag hits give 1 second during seconds 0–30, 0.5 during seconds 30–60 and 0.25 during seconds 60–90. Other Melee hits retain the 20-second threshold and base 0.3 seconds.
- The event requires a `melee` attack and does not require a kill. Each extension remains constrained by the maximum allowed movement of the buff start time and its current remaining duration.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L456-L494](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L456-L494)
- [scripts/settings/talent/talent_settings_broker.lua — L142-L168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L142-L168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L243-L253](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L243-L253)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L683-L701](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L683-L701)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L456-L494](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L456-L494)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1972-L1994](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1972-L1994)

## Example assumptions and limits

- **Special-enemy extension:** Melee hits on Elites, Specialists, Monstrosities or Captain-type enemies extend rage by 1 second. This type of hit begins diminishing only after 30 seconds: 0.5 seconds per hit after 30 seconds and 0.25 seconds after 60 seconds.

- **Ordinary-enemy extension:** ordinary enemy hits retain the base 0.3-second extension and start diminishing after 20 seconds. The 30-second threshold does not also change ordinary hits.

The 30-second diminution threshold applies only to `elite`, `special`, `monster` or `captain` hits, without changing ordinary hit extensions. The extension is duration gained per Melee hit; 30 seconds is not a total rage-duration cap. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_ability_punk_rage_sub_4`, hash `f8c9fad1`, entry 16157: **Boiling Blood**.
- Description key `loc_talent_broker_ability_punk_rage_sub_4_desc`, hash `43686b03`, entry 4360.

Full raw template:

~~~text
Melee Strikes against Elites and Monstrosities extend the duration of {punk_rage:%s} by {rage_duration_extend_elites:%s}s. Additionally, the time before extending becomes diminished is now {rage_duration_max_upgrade:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `punk_rage` | `loc_talent_broker_ability_punk_rage` | Localized string → `Rampage!` (hash `b37505a2`, entry 11575) |
| `rage_duration_extend_elites` | `broker_punk_rage_stance.sub_4_duration_extend_elite = 1` | Number → `1` |
| `rage_duration_max_upgrade` | `broker_punk_rage_stance.sub_4_duration_max_improved = 30` | Number → `30` |

Display mapping: [broker_talents.lua L460–485](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L460-L485). All values reuse the accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
Melee Strikes against Elites and Monstrosities extend the duration of Rampage! by 1s. Additionally, the time before extending becomes diminished is now 30s.
~~~

## English comparison

English states that Melee strikes against Elites and Monstrosities give a 1-second extension, followed by the 30-second diminution threshold. Those targets receive the stated values. It does not explicitly say only those tags qualify or that the upgrade applies to all hit types, so the additional Specialist/Captain tags and ordinary hits' unchanged 20-second rule are supplements rather than an asserted English contradiction. Exact later extensions and remaining-duration limits are also supplementary.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_punk_rage_sub_4.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/040166f5-e6b1-4f43-ae17-2c21b8fd8014). The icon identifies the talent; it is not mechanism evidence.
