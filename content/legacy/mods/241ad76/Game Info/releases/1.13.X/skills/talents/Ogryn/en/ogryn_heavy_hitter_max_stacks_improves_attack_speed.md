# Just Getting Started!: source evidence

[繁體中文](../ogryn_heavy_hitter_max_stacks_improves_attack_speed.md) | [Player description](README.md#ogryn_heavy_hitter_max_stacks_improves_attack_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_heavy_hitter_max_stacks_improves_attack_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_heavy_hitter_max_stacks_improves_attack_speed`; name key `loc_talent_ogryn_heavy_hitter_max_stacks_improves_attack_speed`; description key `loc_talent_ogryn_heavy_hitter_max_stacks_improves_attack_speed_description`. Node `node_09aa18e5-c980-46a8-89e9-8c93c778f69f`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The Heavy Hitter root checks this special rule. A hit that brings `current_stacks + stacks` to 8 or above adds `ogryn_heavy_hitter_attack_speed_effect`.
- That buff grants `attack_speed=0.1`. Its `conditional_exit_func` removes it when the shared interpolation value is below 1.
- The threshold is the full 8 stacks. This node has no separate stacks or cooldown and follows Heavy Hitter's 7.5s stack duration.
- `heavy_hitter_lerp_value` is module-local shared state. Interactions between multiple Ogryns were not tested; examples assume one character.
- The existing local inventory fixes the Chinese name of Just Getting Started! as 「熱身完畢！」. The Chinese document retains that corrected name.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L582-L619](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L582-L619)
- [scripts/settings/talent/talent_settings_ogryn.lua — L101-L110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L101-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L180-L260](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L180-L260)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L337-L347](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L337-L347)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L582-L619](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L582-L619)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L2072-L2097](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2072-L2097)

## Example assumptions and limits

- **Requirement**: Select Just Getting Started! and reach 8 Heavy Hitter stacks to gain the effect.

- **Effect**: At 8 stacks, gain 10% Attack Speed. The bonus is removed when the stack count falls below 8.

- **Example**: If an attack originally occurs once per second, +10% Attack Speed reduces its interval to about `1 ÷ 1.10 = 0.91s`.

Mechanisms are verified against the fixed public-source SHA, and local Build 25606770 Chinese and English text correspond to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_heavy_hitter_max_stacks_improves_attack_speed`, hash `377e881a`, entry 3598: **Just Getting Started!**.
- Description key `loc_talent_ogryn_heavy_hitter_max_stacks_improves_attack_speed_description`, hash `7e2f23b1`, entry 8195.

Full raw template:

~~~text
While {talent_name:%s} is at {stacks:%s} Stacks, gain {attack_speed:%s} Attack Speed.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| talent_name | loc_talent_ogryn_passive_heavy_hitter | Localized string → Heavy Hitter; accepted same-build name |
| stacks | 8 | Number; max_stacks from ogryn_heavy_hitter_damage_effect → 8 |
| attack_speed | 0.1 | Percentage with explicit + prefix; attack_speed from ogryn_heavy_hitter_attack_speed_effect → +10% |

Only the missing display mapping in the cited talent definition, lines 582–619, was read. Existing mechanism and formatter evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
While Heavy Hitter is at 8 Stacks, gain +10% Attack Speed.
~~~

## English comparison

The independently read English conditions the Attack Speed bonus on Heavy Hitter being at eight stacks. It matches the accepted threshold, +10% stat and removal below full stacks. The 7.5s parent duration, absence of separate stacks or cooldown, interval example and untested shared-state interaction supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/keystone_modifier/ogryn_heavy_hitter_max_stacks_improves_attack_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/93481225-465f-4750-a4f3-28602e723b40). The icon identifies the talent; it is not mechanism evidence.
