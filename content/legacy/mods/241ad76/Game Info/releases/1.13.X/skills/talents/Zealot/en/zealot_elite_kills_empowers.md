# Prime Target: source evidence

[繁體中文](../zealot_elite_kills_empowers.md) | [Player description](README.md#zealot_elite_kills_empowers) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_elite_kills_empowers)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_elite_kills_empowers`; name key `loc_talent_zealot_elite_kills_empowers`; description key `loc_talent_zealot_elite_kills_empowers_desc`. Node `node_5f95669c-df41-4278-bbcb-01eb63cf1c85`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_elite_kill` adds a single-stack effect with `damage` +0.1 and `duration` 5. The update restores a fraction of maximum Toughness equal to `0.15 × dt / 5`. Refreshing does not create multiple copies of the per-second restoration effect.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2004-L2045](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2004-L2045)
- [scripts/settings/talent/talent_settings_zealot.lua — L43-L48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L43-L48)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/utilities/attack/damage_calculation.lua — L289-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1917-L1941](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1917-L1941)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1836-L1864](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1836-L1864)

## Example assumptions and limits

- **Trigger:** an Elite Kill grants +10% damage for 5 seconds. During the effect, restore 3% of maximum Toughness per second, for 15% over the full 5 seconds.
- **Timer refresh:** another Elite Kill resets the 5-second countdown. It does not stack the damage bonus or the per-second restoration rate.
- **Damage and restoration example:** base damage 100 becomes 100 × 1.1 = 110. With maximum Toughness 100, restore 100 × 15% ÷ 5 = 3 points per second. If triggered again at the third second and then sustained until the eighth second, total restoration can reach 24 points, limited by missing Toughness.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `3d3cbd01` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_elite_kills_empowers`, hash `b976e500`, entry 11960: **Prime Target**.
- Description key `loc_talent_zealot_elite_kills_empowers_desc`, hash `3d3cbd01`, entry 3995.

Full raw template:

~~~text
{damage:%s} Damage and replenish {toughness:%s} Toughness over {duration:%s}s, after Elite Kill.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | `0.1` | `percentage`, `+` prefix: `+10%` |
| `toughness` | `0.15` | `percentage`: `15%` |
| `duration` | `5` | `number`: `5` |

The display mapping uses the verified `damage`, `toughness` and `duration` fields of `talent_settings.zealot_elite_kills_empowers`.

Static reconstruction; not an observed game screen:

~~~text
+10% Damage and replenish 15% Toughness over 5s, after Elite Kill.
~~~

## English comparison

The English independently agrees on Elite Kill, +10% damage and 15% Toughness restored over 5 seconds. The maximum-Toughness basis, single-stack refresh and fixed restoration rate are supplements; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_elite_kills_empowers.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/e3c3d16b-83a0-4dfb-a797-080ed9e63c4b). The icon identifies the talent; it is not mechanism evidence.
