# Dance of Death: source evidence

[繁體中文](../zealot_improved_weapon_handling_after_dodge.md) | [Player description](README.md#zealot_improved_weapon_handling_after_dodge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_improved_weapon_handling_after_dodge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_improved_weapon_handling_after_dodge`; name key `loc_talent_zealot_improved_spread_post_dodge`; description key `loc_talent_zealot_improved_spread_post_dodge_desc`. Node `node_e31d8155-919c-4fed-a71c-b7d93bab1157`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_successful_dodge`, `active_duration` 3 and refresh grant `spread_modifier` −0.75 and `recoil_modifier` −0.5. Spread multiplies pitch/yaw by the combined modifier. Recoil multiplies unsteadiness increases by the modifier and decay by its reciprocal; this is not proportional scaling of the final camera angle.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L313-L332](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L313-L332)
- [scripts/extension_systems/spread/player_unit_weapon_spread_extension.lua — L169-L182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/spread/player_unit_weapon_spread_extension.lua#L169-L182)
- [scripts/extension_systems/recoil/player_unit_weapon_recoil_extension.lua — L90-L117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/recoil/player_unit_weapon_recoil_extension.lua#L90-L117)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1572-L1623](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1572-L1623)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L2157-L2180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2157-L2180)

## Example assumptions and limits

- **How it works:** after successfully Dodging an attack, bullet Spread is reduced by 75% and Recoil unsteadiness buildup by 50% for 3 seconds. Another successful Dodge restarts the timer.
- **Spread example:** with this effect alone, an affected Spread angle of 4 degrees becomes 4 × 0.25 = 1 degree. This does not mean hit rate increases by a fixed 75%.
- **Recoil example:** an original unsteadiness increase of 0.2 per event becomes 0.2 × 0.5 = 0.1. Its decay rate during recovery is multiplied by 1 ÷ 0.5 = 2. Actual crosshair displacement still follows the weapon's Recoil curve; this does not guarantee that all visible camera movement is halved.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `b7d4f75a` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_improved_spread_post_dodge`, hash `3be70e6b`, entry 3893: **Dance of Death**.
- Description key `loc_talent_zealot_improved_spread_post_dodge_desc`, hash `b7d4f75a`, entry 11856.

Full raw template:

~~~json
"{spread:%s} Spread and {recoil:%s} Recoil for {duration:%s}s on successful Dodge. "
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `spread` | `−0.75` | `abs(value) × 100 = 75`; `percentage`, `−` prefix: `-75%` |
| `recoil` | `−0.5` | `abs(value) × 100 = 50`; `percentage`, `−` prefix: `-50%` |
| `duration` | `3` | `value` from `active_duration`: `3` |

The existing display mapping finds both modifiers in `proc_stat_buffs` and the duration in `active_duration`. The known percentage formatter uses the manipulated percentages directly. The raw template's trailing space is retained in the JSON string above.

Static reconstruction; not an observed game screen:

~~~text
-75% Spread and -50% Recoil for 3s on successful Dodge.
~~~

## English comparison

The English independently agrees on successful Dodge, both modifier values and duration. Its general “Recoil” wording does not explicitly promise that all final camera movement is halved. Refresh, unsteadiness increase/decay and weapon-curve limits are supplements; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_improved_weapon_handling_after_dodge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/a007251f-9a21-4822-b2e4-38eac8e0ae56). The icon identifies the talent; it is not mechanism evidence.
