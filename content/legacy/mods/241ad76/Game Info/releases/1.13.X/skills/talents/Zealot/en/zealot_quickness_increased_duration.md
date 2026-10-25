# Eternal: source evidence

[繁體中文](../zealot_quickness_increased_duration.md) | [Player description](README.md#zealot_quickness_increased_duration) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_quickness_increased_duration)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_quickness_increased_duration`; name key `loc_talent_zealot_quickness_increased_duration`; description key `loc_talent_zealot_quickness_increased_duration_desc`. Node `node_8b72c79c-2b0f-4081-b919-f730aaee433d`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This node grants the `zealot_quickness_increased_duration` special rule. The main parent Buff selects `zealot_quickness_active_increased_duration` under that rule. This Buff copies Quickness active's effects, overriding only its duration from 6 seconds to the configured 10.
- The counter's 20-stack cap, acquisition methods, hit-consumption condition and per-stack stats stay the same. The extension applies to the bonus activated after a hit, rather than a stack-collection deadline.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2260-L2279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2260-L2279)
- [scripts/settings/talent/talent_settings_zealot.lua — L556-L561](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L556-L561)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L197-L231](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L197-L231)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L288-L313](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L288-L313)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2260-L2279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2260-L2279)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1623-L1645](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1623-L1645)

## Example assumptions and limits

- **Effect**: Inexorable Judgement's active bonus lasts 10 seconds.
- **Duration example**: A hit activates it at second 0. It ordinarily ends around second 6, now around second 10. Hits during the bonus still do not reset that cycle's duration. The extension is 4 seconds; stacks and per-stack bonuses stay the same.

- Only the Quickness active Buff's duration extends; per-stack values and stack acquisition speed are unchanged.
- With the Momentum Toughness-restoration node, the theoretical restoration period extends accordingly. Actual restoration still depends on Toughness cap and damage taken.
- The accepted Chinese comparison at hash `ffd6bfbb` records both languages extending duration to 10 seconds. The source's internal talent `name` retains old Dodge wording, but the formal localized description and actual special rule both refer to duration.
- Actual game behavior and presentation remain unobserved; omitted details are supplementary explanations.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_quickness_increased_duration`, hash `6f4e2bef`, entry 7234: **Eternal**.
- Description key `loc_talent_zealot_quickness_increased_duration_desc`, hash `ffd6bfbb`, entry 16609.

Full raw template:

~~~text
Increase the duration of {talent_name:%s} to {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_zealot_quickness`: Inexorable Judgement | `loc_string`; hash `5a980ea5`, entry 5876 |
| `duration` | 10 | `number`; `talent_settings_3.quickness.increased_duration` |

The minimal display mapping at `zealot_talents.lua` L2260-L2274 supplies the accepted extended duration and localized main Keystone name. The old internal Dodge wording is not inserted into the localized description.

Static reconstruction; not an observed game screen:

~~~text
Increase the duration of Inexorable Judgement to 10s.
~~~

## English comparison

The English says to increase Inexorable Judgement's duration **to** 10 seconds, matching the accepted active-Buff override from 6 to 10. It does not say to add 10 seconds. The hit-activated phase, unchanged stacks and per-stack values, non-refreshing hits and possible longer restoration period are supplements. The stale internal talent name is separate from the game English; no English erratum is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_quickness_increased_duration.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/aee84e86-4f0b-4d69-87e7-9602f27396e2). The icon identifies the talent; it is not mechanism evidence.
