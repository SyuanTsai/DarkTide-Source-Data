# Time to Kill: source evidence

[繁體中文](../zealot_backstab_periodic_damage.md) | [Player description](README.md#zealot_backstab_periodic_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_backstab_periodic_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_backstab_periodic_damage`; name key `loc_talent_zealot_backstab_periodic_damage`; description key `loc_talent_zealot_backstab_periodic_damage_desc`. Node `node_1fbb7b5c-aac2-4489-9a39-9a9eab68f484`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `conditional_stat_buffs` grants `backstab_damage` +0.5 while `context.active`, meaning not on cooldown. `on_hit` paired with `is_damaging_backstab` starts the 8-second cooldown. `allow_backstabbing` is permanent, but the damage bonus still follows the cooldown. Backstab calculation is separate from the additional Finesse damage.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L3221-L3248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3221-L3248)
- [scripts/settings/talent/talent_settings_zealot.lua — L222-L225](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L222-L225)
- [scripts/utilities/attack/damage_calculation.lua — L95-L109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L95-L109)
- [scripts/utilities/attack/damage_calculation.lua — L848-L861](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L848-L861)
- [scripts/utilities/attack/attack_positioning.lua — L9-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2677-L2696](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2677-L2696)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1941-L1966](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1941-L1966)

## Example assumptions and limits

- **How it works:** while available, the effect grants +50% Melee Backstab damage. A damaging Backstab Hit starts an 8-second cooldown; a kill is not required.
- **Damage example:** with other conditions fixed and a baseline of 100 in this stage, no other Backstab bonus gives 100 × 1.5 = 150. An existing same-stage 20% Backstab bonus changes from 120 to 100 × (1 + 20% + 50%) = 170.
- **Direction limit:** the Melee hit must land within the valid angle behind the enemy. Shooting from behind does not count as this Melee Backstab.

- The original game text uses the 1.13.1 / Steam Build 25606770 `ui` resource. Differences between description and implementation still require an in-game check.
- The verified Chinese comparison for hash `f5f63199` found no explicit translation conflict in the direction of the effect. Omitted formulas, caps and detailed limits are supplements.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_backstab_periodic_damage`, hash `24b50209`, entry 2370: **Time to Kill**.
- Description key `loc_talent_zealot_backstab_periodic_damage_desc`, hash `f5f63199`, entry 15974.

Full raw template:

~~~text
{damage:%s} Melee Backstab Damage. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | `0.5` | `percentage`, `+` prefix: `+50%` |
| `cooldown` | `8` | `number`: `8` |

The existing display mapping uses `backstab_damage` and `cooldown_duration` with the verified values.

Static reconstruction; not an observed game screen:

~~~text
+50% Melee Backstab Damage. 8s Cooldown.
~~~

## English comparison

The English independently agrees on Melee Backstab damage and the 8-second cooldown. It does not state the damaging-hit trigger, angle, permanent Backstab eligibility or calculation stage. Those details are supplements; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_backstab_periodic_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/4bf327a5-94f0-4af9-ad51-b3380308846e). The icon identifies the talent; it is not mechanism evidence.
