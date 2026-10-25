# 1.13.0 → 1.13.1: talent changes

[繁體中文](TALENT_CHANGES_1.13.0_TO_1.13.1.md) | [Skill categories](README.en.md) | [Version information](../README.md) | [Text differences](../source/TEXT_DIFF_1.13.0_TO_1.13.1.md)

## Talent effects

Talents for Veteran, Psyker, Zealot, Ogryn, Arbites, Scum and Skitarii have the same effects. Scum's Stim recipes, class base effects, and the damage, Toughness recovery, cooldown, stacking and Charge formulas are also unchanged.

Existing Traditional Chinese and English talent text is unchanged from 1.13.0; the existing errata still apply. Omitted formulas or exceptions remain incomplete information, not translation errors. Existing questions about text versus implementation still require in-game confirmation.

These conclusions are limited to the [fixed-version diff](https://github.com/Aussiemon/Darktide-Source-Code/compare/419fe18d414a618ce0474bd015bab470afb446d6...7e662fcda16219d775b84af50322be2e9cd9d62e) between the [1.13.0 source](https://github.com/Aussiemon/Darktide-Source-Code/tree/419fe18d414a618ce0474bd015bab470afb446d6) and [1.13.1 source](https://github.com/Aussiemon/Darktide-Source-Code/tree/7e662fcda16219d775b84af50322be2e9cd9d62e).

## Gameplay and test conditions

- **Havoc enemy enhancements**: Some enemy-enhancement modifiers now activate during loading. They include effects on ranged damage taken and Stagger; the same weapon and talents can therefore produce different damage or control results against enhanced enemies. Hold Havoc modifiers and enemy state constant when comparing talent increases. [Modifier activation settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/mutator/templates/mutator_havoc_templates.lua#L27-L182); [Loading and activation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/mutator/mutator_manager.lua#L55-L67); [Ranged damage-taken effect](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/havoc_buff_templates.lua#L514-L534); [Stagger limits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/havoc_buff_templates.lua#L2138-L2144).
- **Survival supplies**: Additional supplies now read the correct supply pool. This affects mission supply sources, not the talents' own recovery percentages or cooldown formulas. [Supply source](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/game_mode/game_modes/game_mode_survival.lua#L1290-L1296).
- **Training Grounds difficulty**: An invalid saved difficulty now falls back to tier 3. Reconfirm Training Grounds difficulty when testing damage; do not infer it solely from an old saved setting. [Difficulty selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/training_grounds_options_view/training_grounds_options_view.lua#L198-L208).

Boss phase parameters and the number of arena hazards were also adjusted. These are encounter conditions, not class-talent value changes. [Boss phase parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/pacing/bosses/spillway_wizard.lua#L783-L809); [Other phase parameters](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/pacing/bosses/spillway_wizard.lua#L1115-L1141); [Arena hazard settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/stage_hazards/wizard_teeth_stage_hazard.lua#L9-L23).

Each talent example retains its original assumptions; no additional Havoc modifiers, particular boss conditions or other mission modifiers are applied.
