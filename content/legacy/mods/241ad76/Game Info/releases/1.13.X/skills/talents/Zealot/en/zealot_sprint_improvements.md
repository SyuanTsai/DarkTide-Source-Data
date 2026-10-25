# Relentless Fervor: source evidence

[繁體中文](../zealot_sprint_improvements.md) | [Player description](README.md#zealot_sprint_improvements) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_sprint_improvements)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_sprint_improvements`; name key `loc_talent_zealot_dodge_improvements`; description key `loc_talent_zealot_sprint_improvements_alt_desc`. Node `node_72f07a65-a83f-4264-99fe-6d3551d135e1`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Permanently grants `sprint_movement_speed +0.1` and `sprinting_cost_multiplier = 0.9`.
- `on_sprint_started` adds a single-stack child Buff. At gameplay time `>= start + 1`, that child grants `slowdown_immune`.
- `on_sprint_ended` marks the child to exit. The immunity does not carry into the next Sprint.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2574-L2599](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2574-L2599)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L2937-L2970](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2937-L2970)
- [scripts/settings/talent/talent_settings_zealot.lua — L133-L137](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L133-L137)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2358-L2385](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2358-L2385)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1526-L1551](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1526-L1551)

## Example assumptions and limits

- **Operation**: Grants +10% Sprint Speed and reduces Sprint Stamina cost by 10%. After 1 second of continuous Sprinting, gain Slowdown Immunity. Stopping the Sprint removes it; the next Sprint starts the timer again.
- **Speed and cost example**: If Sprint Speed is originally 6 metres/second and cost is 2 Stamina/second, counting only this talent gives 6 × 1.1 = 6.6 metres/second and 2 × 0.9 = 1.8 Stamina/second.

- The accepted Chinese comparison at hash `490f7206` finds no explicit effect-direction contradiction. Omitted formulas, caps and finer restrictions remain supplements.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_dodge_improvements`, hash `bc4195b7`, entry 12144: **Relentless Fervor**.
- Description key `loc_talent_zealot_sprint_improvements_alt_desc`, hash `490f7206`, entry 4742.

Full raw template:

~~~text
{sprint_speed:%s} Sprint Speed and {sprint_cost:%s} Sprint Cost. Sprinting for {duration:%s}s grants Slowdown Immunity.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `sprint_speed` | 0.1 → +10% | `percentage`, prefix `+`; `talent_settings.zealot_sprint_improvements.sprint_speed` |
| `sprint_cost` | 0.9 → round((1 − 0.9) × 100) = 10 → −10% | `percentage`, prefix `-`, explicit manipulation; `sprint_cost` |
| `duration` | 1 → 1 | `number`; `slowdown_immune_start_t` |

The minimal display mapping at `zealot_talents.lua` L2358-L2385 reads the accepted speed, cost multiplier and immunity delay from `talent_settings.zealot_sprint_improvements`. Reuse the known formatter behavior: explicit manipulation supplies the display number without a second multiplication by 100.

Static reconstruction; not an observed game screen:

~~~text
+10% Sprint Speed and -10% Sprint Cost. Sprinting for 1s grants Slowdown Immunity.
~~~

## English comparison

The English's +10% Sprint Speed, −10% Sprint Cost and immunity after 1 second of Sprinting agree with the accepted stats and delay. It does not explicitly promise immunity after Sprinting stops. The single child Buff, gameplay-time check, removal on Sprint end and timer reset next Sprint supplement the description.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_sprint_improvements.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/bcb76321-c69e-466f-b588-a894e8c63443). The icon identifies the talent; it is not mechanism evidence.
