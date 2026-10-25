# Abolish Blasphemers: source evidence

[繁體中文](../zealot_damage_vs_elites.md) | [Player description](README.md#zealot_damage_vs_elites) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_damage_vs_elites)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_damage_vs_elites`; name key `loc_talent_zealot_damage_vs_elites`; description key `loc_talent_zealot_damage_vs_elites_desc`. Node `node_16cdb92c-ed3f-48f6-9d30-bbe86d8eae5d`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Permanent `damage_vs_elites` +0.15 enters the shared damage stage only when the target breed's `elite` classification applies.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2108-L2114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2108-L2114)
- [scripts/settings/talent/talent_settings_zealot.lua — L57-L59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L57-L59)
- [scripts/utilities/attack/damage_calculation.lua — L310-L344](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L310-L344)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L1984-L2000](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1984-L2000)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1755-L1783](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1755-L1783)

## Example assumptions and limits

- **How it works:** deal 15% more damage to Elite enemies, with both Melee and Ranged attacks. This condition does not include every Specialist or boss.
- **Damage example:** 100 × 1.15 = 115 points. With an existing 20% damage bonus in the same stage, the result is 100 × (1 + 20% + 15%) = 135 points.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `43f97b1b` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_damage_vs_elites`, hash `964482ce`, entry 9713: **Abolish Blasphemers**.
- Description key `loc_talent_zealot_damage_vs_elites_desc`, hash `43f97b1b`, entry 4400.

Full raw template:

~~~text
{damage:%s} Damage vs Elites.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | `0.15` | `percentage`, `+` prefix: `+15%` |

The existing display mapping uses `talent_settings.zealot_damage_vs_elites.damage_vs_elites` with the verified value 0.15.

Static reconstruction; not an observed game screen:

~~~text
+15% Damage vs Elites.
~~~

## English comparison

The English independently agrees with the Elite target condition and +15% damage. It does not restrict the effect to either Melee or Ranged attacks. Breed classification and addition with other same-stage bonuses are supplements; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_damage_vs_elites.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/9b7dda36-1d18-41b4-9e28-3cfd26f0ad66). The icon identifies the talent; it is not mechanism evidence.
