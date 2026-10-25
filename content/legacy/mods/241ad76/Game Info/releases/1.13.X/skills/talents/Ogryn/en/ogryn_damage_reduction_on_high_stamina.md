# Pumped Up: source evidence

[繁體中文](../ogryn_damage_reduction_on_high_stamina.md) | [Player description](README.md#ogryn_damage_reduction_on_high_stamina) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_damage_reduction_on_high_stamina)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_damage_reduction_on_high_stamina`; name key `loc_talent_ogryn_damage_reduction_on_high_stamina_name`; description key `loc_talent_ogryn_damage_reduction_on_high_stamina_desc`. Node `node_ab33a2d5-d40f-4d6e-bb73-47f0b3994608`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Requires `current_fraction > 0.75` and applies `damage_taken_multiplier=0.875`. It is continuously conditional, without stacks or cooldown.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2973-L2997](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2973-L2997)
- [scripts/settings/talent/talent_settings_ogryn.lua — L80-L83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L80-L83)
- [scripts/utilities/attack/damage_calculation.lua — L587-L612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2174-L2196](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2174-L2196)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1719-L1746](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1719-L1746)

## Example assumptions and limits

- **Condition**: Active while current Stamina is above 75% of maximum. Exactly 75% does not qualify; spending Stamina below the threshold removes the reduction.

- **Damage-reduction example**: Damage of 100 at this stage becomes `100 × 0.875 = 87.5`. With another independent 20% reduction, it becomes `100 × 0.875 × 0.8 = 70`.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_damage_reduction_on_high_stamina_name`, hash `bd034d9a`, entry 12184: **Pumped Up**.
- Description key `loc_talent_ogryn_damage_reduction_on_high_stamina_desc`, hash `ab8d5e62`, entry 11043.

Full raw template:

~~~text
{damage_taken:%s} Damage Resistance while above {stamina:%s} Stamina.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage_taken | shared damage_taken_multiplier = 0.875 | (1 − value) × 100; percentage with explicit + prefix → +12.5% |
| stamina | shared stamina_threshold = 0.75 | Percentage without prefix → 75% |

Only the missing display mapping in the cited talent definition, lines 2174–2196, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+12.5% Damage Resistance while above 75% Stamina.
~~~

## English comparison

The independently read English grants +12.5% damage resistance while above 75% Stamina. This matches the accepted 0.875 multiplier and strict greater-than condition; exactly 75% is excluded by above. Continuous activation without stacks/cooldown and the independent-multiplier example supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_damage_reduction_on_high_stamina.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/15edb762-d209-407d-8bd5-fc0672bd5ef8). The icon identifies the talent; it is not mechanism evidence.
