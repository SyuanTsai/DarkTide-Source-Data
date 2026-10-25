# Immaterial Focus: source evidence

[繁體中文](../psyker_damage_resistance_stun_immunity.md) | [Player description](README.md#psyker_damage_resistance_stun_immunity) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_damage_resistance_stun_immunity)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_damage_resistance_stun_immunity`; name key `loc_talent_psyker_damage_resistance_stun_immunity`; description key `loc_talent_psyker_damage_resistance_stun_immunity_desc`. Node `node_fb6fc9c4-aed8-46c8-88a2-0ec1fa8e1eb0`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `damage_taken_multiplier = 0.9` is unconditional. The conditional keyword `stun_immune` is determined by `current >= 0.97`. When that condition changes from true to false, a 4-second buff is added, with `max_stacks = 1` and a refreshing timer. Stun Immunity does not establish immunity to grabs or all forms of crowd control.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1786-L1833](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1786-L1833)
- [scripts/settings/talent/talent_settings_psyker.lua — L112-L115](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L112-L115)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2701-L2722](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2701-L2722)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L2082-L2108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L2082-L2108)

## Example assumptions and limits

- **How it works**: Take 10% less Damage. At 97% Peril or above, become Stun Immune; after dropping below 97%, the immunity lasts another 4 seconds.

- **Damage reduction example**: Compare only this reduction stage. 100 Damage becomes 100 × 0.9 = 90. With another independent 20% reduction, 100 × 0.8 × 0.9 = 72, a combined reduction of 28%.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_damage_resistance_stun_immunity`, hash `b08dfe13`, entry 11369: **Immaterial Focus**.
- Description key `loc_talent_psyker_damage_resistance_stun_immunity_desc`, hash `c5294daa`, entry 12721.

Full raw template:

~~~text
{dr:%s} Damage Resistance, in addition, while at Critical Peril, and for {duration:%s}s afterwards, you are Stun Immune.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `dr` | 0.9 | `math_round((1 - value) × 100)`, with `+` prefix: +10%. |
| `duration` | 4 | Number: 4. |

Display mapping: [psyker_talents.lua L2704-L2717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2704-L2717). Values and shared formatter behavior reuse the accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
+10% Damage Resistance, in addition, while at Critical Peril, and for 4s afterwards, you are Stun Immune.
~~~

## English comparison

The English separates unconditional Damage Resistance from the conditional Stun Immunity and correctly gives the 4-second continuation. The exact 97% boundary, refreshing one-stack buff and limits on the scope of stun immunity are supplementary.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_damage_resistance_stun_immunity.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/288f8a4c-fee3-4e56-8e0b-b2419e2a115b). The icon identifies the talent; it is not mechanism evidence.
