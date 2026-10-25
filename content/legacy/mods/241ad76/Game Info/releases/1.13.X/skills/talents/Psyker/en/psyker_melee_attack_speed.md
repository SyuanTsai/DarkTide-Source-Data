# Lightning Speed: source evidence

[繁體中文](../psyker_melee_attack_speed.md) | [Player description](README.md#psyker_melee_attack_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_melee_attack_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_melee_attack_speed`; name key `loc_talent_psyker_melee_attack_speed`; description key `loc_talent_psyker_melee_attack_speed_desc`. Node `node_f33e4491-1a9b-444b-b4f8-835aa37a6a87`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `melee_attack_speed = 0.1` adds to the action playback rate.
- Attack rate must be distinguished from action waits that are unaffected by this coefficient.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3162-L3168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3162-L3168)
- [scripts/settings/talent/talent_settings_psyker.lua — L46-L48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L46-L48)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2241-L2263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2241-L2263)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1734-L1761](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1734-L1761)

## Example assumptions and limits

- **Effect**: increase Melee Attack Speed by 10%.

- **Timing example**: comparing only the action segment affected by Attack Speed, a segment that originally takes 1 second with no other Attack Speed bonuses becomes 1 ÷ 1.1 ≈ 0.909 seconds. This does not mean the entire combo always takes 10% less time.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_melee_attack_speed`, hash `a84b3095`, entry 10842: **Lightning Speed**.
- Description key `loc_talent_psyker_melee_attack_speed_desc`, hash `10f28165`, entry 1104.

Full raw template:

~~~text
{melee_attack_speed:%s} Melee Attack Speed.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `melee_attack_speed` | `0.1` | percentage, no prefix → `10%` |

[Display mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2246-L2258) reads the verified `melee_attack_speed` stat. Shared percentage formatting yields `10%` with no extra plus sign.

Static reconstruction; not an observed game screen:

~~~text
10% Melee Attack Speed.
~~~

## English comparison

The English names Melee Attack Speed and displays the verified 10% stat amount. It does not promise a fixed 10% reduction to the duration of a whole combo. The rate-to-time conversion and unaffected action waits are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_melee_attack_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/ac3d53fd-1b36-40d7-8ee1-275804b29c63). The icon identifies the talent; it is not mechanism evidence.
