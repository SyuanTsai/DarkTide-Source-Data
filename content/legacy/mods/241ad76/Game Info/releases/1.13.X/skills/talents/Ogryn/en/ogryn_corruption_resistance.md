# Simple Minded: source evidence

[繁體中文](../ogryn_corruption_resistance.md) | [Player description](README.md#ogryn_corruption_resistance) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_corruption_resistance)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_corruption_resistance`; name key `loc_talent_ogryn_corruption_resistance_name`; description key `loc_talent_ogryn_corruption_resistance_desc`. Node `node_fda3d772-6d7d-4571-bf2b-80a14bbad5f9`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `corruption_taken_multiplier=0.6`. `_calculate_health_damage_player` applies it only to the `permanent_damage` calculation, not the ordinary `health_damage` component.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2921-L2927](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2921-L2927)
- [scripts/settings/talent/talent_settings_ogryn.lua — L94-L96](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L94-L96)
- [scripts/utilities/attack/damage_taken_calculation.lua — L356-L381](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L356-L381)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2334-L2352](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2334-L2352)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1594-L1620](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1594-L1620)

## Example assumptions and limits

- **Effect**: Reduce Corruption received through damage calculation by 40%. This does not clear existing Corruption or provide general damage reduction.

- **Corruption example**: An original increase of 20 Corruption becomes `20 × 0.6 = 12`. With another independent 20% Corruption reduction, it becomes `20 × 0.6 × 0.8 = 9.6`.

The example covers only damage paths that read corruption_taken_multiplier; it does not establish an effect on all Corruption directly set by scripts. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_corruption_resistance_name`, hash `c147793d`, entry 12460: **Simple Minded**.
- Description key `loc_talent_ogryn_corruption_resistance_desc`, hash `ca230578`, entry 13052.

Full raw template:

~~~text
{resistance:%s} Corruption Resistance.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| resistance | shared ogryn_corruption_resistance.corruption_taken_multiplier = 0.6 | math_round((1 − value) × 100); percentage with explicit + prefix → +40% |

Only the missing display mapping in the cited talent definition, lines 2334–2352, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+40% Corruption Resistance.
~~~

## English comparison

The independently read English states +40% Corruption Resistance, matching the accepted 0.6 Corruption multiplier. It does not claim to remove existing Corruption or reduce ordinary damage. The specific damage-calculation path, exclusion of unverified direct-script Corruption and independent-multiplier example supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_corruption_resistance.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/c5cc14b1-1227-4449-a1d9-de912e048e6e). The icon identifies the talent; it is not mechanism evidence.
