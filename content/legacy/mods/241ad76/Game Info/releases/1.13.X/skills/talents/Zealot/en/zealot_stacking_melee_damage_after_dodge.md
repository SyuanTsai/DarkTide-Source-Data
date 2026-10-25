# Riposte: source evidence

[繁體中文](../zealot_stacking_melee_damage_after_dodge.md) | [Player description](README.md#zealot_stacking_melee_damage_after_dodge) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_stacking_melee_damage_after_dodge)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_stacking_melee_damage_after_dodge`; name key `loc_talent_zealot_stacking_melee_damage_after_dodge`; description key `loc_talent_zealot_stacking_melee_damage_after_dodge_desc`. Node `node_324c71cf-ae7e-4441-acb6-203a35ae041d`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- A successful Dodge adds the effect with `max_stacks = 3`, `duration = 8` and `refresh_duration_on_stack = true`.
- Each stack grants `melee_damage +0.05`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2152-L2190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2152-L2190)
- [scripts/settings/talent/talent_settings_zealot.lua — L65-L69](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L65-L69)
- [scripts/utilities/attack/damage_calculation.lua — L289-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2025-L2049](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2025-L2049)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1500-L1525](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1500-L1525)

## Example assumptions and limits

- **Stacking**: Each successfully dodged attack grants 1 stack of Melee damage, +5% per stack up to 3. Triggering again restarts the 8-second duration.
- **Damage example**: Three stacks total 15%, so base damage 100 becomes 100 × (1 + 3 × 5%) = 115. With an existing 20% same-stage bonus, the result is 100 × (1 + 20% + 15%) = 135.

- The accepted Chinese comparison at hash `b421dbe6` finds no explicit effect-direction contradiction. Omitted formulas, caps and finer restrictions remain supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_stacking_melee_damage_after_dodge`, hash `65e38fc5`, entry 6627: **Riposte**.
- Description key `loc_talent_zealot_stacking_melee_damage_after_dodge_desc`, hash `b421dbe6`, entry 11614.

Full raw template:

~~~text
{damage:%s} Melee Damage after Successful Dodge. Stacking {stacks:%s} times. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | 0.05 → +5% | `percentage`, prefix `+`; `talent_settings.zealot_stacking_melee_damage_after_dodge.melee_damage` |
| `stacks` | 3 → 3 | `number`; `max_stacks` |
| `duration` | 8 → 8 | `number`; `duration` |

The minimal display mapping at `zealot_talents.lua` L2025-L2049 reads the accepted per-stack bonus, stack cap and duration from `talent_settings.zealot_stacking_melee_damage_after_dodge`.

Static reconstruction; not an observed game screen:

~~~text
+5% Melee Damage after Successful Dodge. Stacking 3 times. Lasts 8s.
~~~

## English comparison

The English states +5% Melee Damage after a successful Dodge, stacking 3 times and lasting 8 seconds, agreeing with the accepted per-stack stat, cap and duration. Refreshing the timer and additive calculation with other same-stage damage bonuses supplement the wording.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_stacking_melee_damage_after_dodge.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/7a00054d-1b7e-448e-a9f3-eee60922b19e). The icon identifies the talent; it is not mechanism evidence.
