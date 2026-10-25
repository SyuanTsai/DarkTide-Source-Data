# Strongman: source evidence

[繁體中文](../ogryn_damage_reduction_after_elite_kill.md) | [Player description](README.md#ogryn_damage_reduction_after_elite_kill) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_damage_reduction_after_elite_kill)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_damage_reduction_after_elite_kill`; name key `loc_talent_ogryn_damage_reduction_after_elite_kill_name`; description key `loc_talent_ogryn_damage_reduction_after_elite_kill_desc`. Node `node_848294a5-dd6e-4636-8990-f059c331ebb3`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_elite_or_special_kill` activates `damage_taken_multiplier=0.9` for 5s, with `allow_proc_while_active`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2727-L2745](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2727-L2745)
- [scripts/settings/talent/talent_settings_ogryn.lua — L45-L48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L45-L48)
- [scripts/utilities/attack/damage_calculation.lua — L587-L612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1979-L2001](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1979-L2001)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1845-L1873](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1845-L1873)

## Example assumptions and limits

- **Trigger**: Killing an Elite or Specialist grants 10% damage reduction for 5s. Another qualifying kill restarts the timer without adding stacks.

- **Damage-reduction example**: With this effect alone, damage of 100 becomes 90. With another independent 20% reduction, it becomes `100 × 0.9 × 0.8 = 72`.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_damage_reduction_after_elite_kill_name`, hash `6839065a`, entry 6786: **Strongman**.
- Description key `loc_talent_ogryn_damage_reduction_after_elite_kill_desc`, hash `fb76eb37`, entry 16330.

Full raw template:

~~~text
{damage_reduction:%s} Damage Resistance on Elite Kill or Specialist Kill. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage_reduction | shared damage_taken_multiplier = 0.9 | math_round((1 − value) × 100); percentage with explicit + prefix → +10% |
| duration | shared duration = 5 | Number → 5 |

Only the missing display mapping in the cited talent definition, lines 1979–2001, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+10% Damage Resistance on Elite Kill or Specialist Kill. Lasts 5s.
~~~

## English comparison

The independently read English grants +10% damage resistance on an Elite or Specialist kill for 5s, matching the accepted trigger, multiplier and duration. Refresh without stacking and independent-multiplier calculation supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_damage_reduction_after_elite_kill.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/6fbf8a63-5e26-482f-9964-01eb0598b142). The icon identifies the talent; it is not mechanism evidence.
