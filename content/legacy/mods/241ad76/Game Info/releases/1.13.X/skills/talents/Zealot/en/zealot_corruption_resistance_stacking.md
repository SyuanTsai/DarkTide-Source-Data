# On the Brink: source evidence

[繁體中文](../zealot_corruption_resistance_stacking.md) | [Player description](README.md#zealot_corruption_resistance_stacking) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_corruption_resistance_stacking)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_corruption_resistance_stacking`; name key `loc_talent_zealot_corruption_resistance_stacking`; description key `loc_talent_zealot_corruption_resistance_stacking_desc`. Node `node_ccd0b423-3a44-4f74-8339-7c7b65ba2d63`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- This node attaches `zealot_corruption_resistance_stacking`. `corruption_taken_multiplier` interpolates from 1 to 5 × .1 = .5 with `t=missing Wounds/5`, equivalent to `1−.1×Wounds`. Its current template is not the old `zealot_preacher_reduce_corruption_damage`.
- One missing Wound gives a 0.9 damage-taken multiplier (10% reduction); five give 0.5 (50% reduction). This reduces the Corruption damage-taken multiplier rather than granting additional Health or Wounds.
- Wound calculation is shared with Martyrdom and counts at most 5. There is no independent trigger, timer or stack timeout.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2624-L2643](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2624-L2643)
- [scripts/settings/talent/talent_settings_zealot.lua — L211-L213](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L211-L213)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L633-L652](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L633-L652)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L3096-L3125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3096-L3125)
- [scripts/utilities/health.lua — L117-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L117-L127)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1916-L1940](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1916-L1940)
- [scripts/utilities/attack/damage_taken_calculation.lua — L368-L372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L368-L372)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2624-L2643](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2624-L2643)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1916-L1940](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1916-L1940)

## Example assumptions and limits

- **Operation**: Each complete missing Wound reduces Corruption damage taken by 10%, up to 5 stacks and 50%. It does not clear already accumulated Corruption.
- **Corruption example**: An event normally granting 20 Corruption grants 20 × (1 − 3 × 10%) = 14 at 3 stacks, or 10 at 5. Other Corruption multipliers multiply separately; this does not grant immunity to all Corruption sources.

- The example calculates only this node's Corruption damage multiplier, without combining other damage-taken modifiers.
- “Resistance” in both languages describes the effect. The implementation adjusts `corruption_taken_multiplier`; it must not be expanded into immunity or a reduced Corruption cap.
- The accepted Chinese comparison at hash `892c3a6b` records both languages giving Corruption Resistance per Martyrdom stack. Explaining the damage-taken multiplier is an implementation detail.
- Actual game behavior and presentation remain unobserved; omitted details supplement the description.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_corruption_resistance_stacking`, hash `26f3f7c2`, entry 2513: **On the Brink**.
- Description key `loc_talent_zealot_corruption_resistance_stacking_desc`, hash `892c3a6b`, entry 8899.

Full raw template:

~~~text
{talent_name:%s} grants {corruption_resistance:%s} Corruption Resistance per stack.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_zealot_martyrdom`: Martyrdom | `loc_string`; hash `15d87f95`, entry 1420 |
| `corruption_resistance` | 0.1 → +10% | `percentage`, `+` prefix; `talent_settings.zealot_corruption_resistance_stacking.corruption_taken_multiplier_per_stack` |

The minimal display mapping at `zealot_talents.lua` L2624-L2638 uses the accepted per-Wound value and localized Martyrdom name.

Static reconstruction; not an observed game screen:

~~~text
Martyrdom grants +10% Corruption Resistance per stack.
~~~

## English comparison

The English grants +10% Corruption Resistance per Martyrdom stack, matching the accepted reduction of the Corruption damage-taken multiplier by 0.1 per counted Wound. It does not promise removal of existing Corruption or immunity. Complete-Wound counting, the five-stack cap, multiplier combination and preserved 20→14/10 example supplement the short stat description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_corruption_resistance_stacking.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/9bc683a7-534a-4244-8381-1a6c0463003f). The icon identifies the talent; it is not mechanism evidence.
