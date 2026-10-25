# Long Lasting: source evidence

[繁體中文](../broker_passive_stimm_increased_duration.md) | [Player description](README.md#broker_passive_stimm_increased_duration) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_stimm_increased_duration)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_stimm_increased_duration`; name key `loc_talent_broker_passive_stimm_increased_duration`; description key `loc_talent_broker_passive_stimm_increased_duration_desc`. Node `node_9e73b9a9-bd27-46c2-b75d-1972b411c6b8`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `syringe_duration` has `value = 5`. The Broker syringe and the Ability/Power/Speed syringe `start_func` read it and apply `add_duration`. Effects without a duration are skipped.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L4173-L4181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4173-L4181)
- [scripts/settings/buff/syringe_buff_templates.lua — L211-L219](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/syringe_buff_templates.lua#L211-L219)
- [scripts/settings/buff/syringe_buff_templates.lua — L274-L282](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/syringe_buff_templates.lua#L274-L282)
- [scripts/settings/buff/syringe_buff_templates.lua — L325-L333](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/syringe_buff_templates.lua#L325-L333)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L198-L209](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L198-L209)
- [scripts/settings/talent/talent_settings_broker.lua — L374-L376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L374-L376)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2001-L2007](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2001-L2007)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1613-L1628](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1613-L1628)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1704-L1732](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1704-L1732)

## Example assumptions and limits

- **Duration example**: A Stimm normally lasting 15 seconds lasts 15 + 5 = 20 seconds. This adds a fixed 5 seconds, not 5%.

- **Cooldown effect**: The Scum's dedicated Stimm pauses natural cooldown recovery while its effects are active. Extending those effects also delays the start of natural cooldown recovery.

- **Applicability**: Extends Stimms with a timed effect. Instant healing itself does not become five more seconds of healing.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_stimm_increased_duration`, hash `e452d69c`, entry 14798: **Long Lasting**.
- Description key `loc_talent_broker_passive_stimm_increased_duration_desc`, hash `905ad5d9`, entry 9326.

Full raw template:

~~~text
{duration_increase:%s}s Stimm Duration.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `duration_increase` | `talent_settings.broker_passive_stimm_increased_duration.duration_increase = 5` | Number with `+` prefix: `+5`; the template supplies `s` |

The accepted value supplies 5. The display mapping at `broker_talents.lua` L1613-L1628 reads the talent setting directly. Reuse the accepted number formatting.

Static reconstruction; not an observed game screen:

~~~text
+5s Stimm Duration.
~~~

## English comparison

The English states five additional seconds of Stimm duration, matching the accepted fixed duration addition. Natural cooldown timing and the requirement for a timed effect supplement the description. No clear contradiction appears.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_stimm_increased_duration.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/c19f893c-1a73-4111-b234-e675605b17b5). The icon identifies the talent; it is not mechanism evidence.
