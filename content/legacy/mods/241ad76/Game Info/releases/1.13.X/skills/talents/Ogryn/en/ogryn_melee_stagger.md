# Slam: source evidence

[繁體中文](../ogryn_melee_stagger.md) | [Player description](README.md#ogryn_melee_stagger) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_melee_stagger)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_melee_stagger`; name key `loc_talent_ogryn_melee_stagger`; description key `loc_talent_ogryn_melee_stagger_new_desc`. Node `node_4cf8d6e2-c191-4c71-b49e-f1d1b84cb457`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_hit`/`on_push_hit` require `stagger_result==stagger` and `attack_type` equal to `melee` or absent. They share `cooldown_duration=0.75`.
- `_stagger_add_stamina` calls `add_stamina_percent(0.05)`.
- `melee_impact_modifier=0.25` adds to other bonuses at the same Impact stage. Stamina recovery uses maximum Stamina and clamps to its cap.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1035-L1079](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1035-L1079)
- [scripts/settings/talent/talent_settings_ogryn.lua — L303-L307](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L303-L307)
- [scripts/utilities/attack/stamina.lua — L102-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119)
- [scripts/utilities/attack/stagger_calculation.lua — L190-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L205)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1110-L1134](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1110-L1134)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L273-L303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L273-L303)

## Example assumptions and limits

- **Impact bonus**: Gain +25% melee Impact, improving stagger. This bonus does not directly increase Health damage.

- **Stamina recovery**: A melee hit or push that successfully staggers an enemy restores 5% of maximum Stamina, with at least 0.75s between recoveries. A hit that causes no stagger restores nothing.

- **Example**: With maximum Stamina 8, each recovery gives `8 × 5% = 0.4`; if only 0.2 is missing, only 0.2 is restored. Considering only the Impact stage, base 100 becomes `100 × 1.25 = 125`. Whether the target staggers still depends on the enemy and attack.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_melee_stagger`, hash `8c49e966`, entry 9084: **Slam**.
- Description key `loc_talent_ogryn_melee_stagger_new_desc`, hash `ce88baeb`, entry 13358. The export suffix `[Writer]` is metadata outside the raw text.

Full raw template:

~~~text
{stagger:%s} Impact bonus on Melee Attacks. Staggering an enemy with a Melee Attack replenishes {stamina:%s} Stamina. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| stagger | passive_1.impact_modifier = 0.25 | Percentage with explicit + prefix → +25% |
| stamina | passive_1.stamina = 0.05 | Percentage without a prefix → 5% |
| cooldown | passive_1.cooldown = 0.75 | Number → 0.75; accepted automatic decimal formatting reused |

Only the missing display mapping in the cited talent definition, lines 1110–1134, was read. Existing mechanisms and formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+25% Impact bonus on Melee Attacks. Staggering an enemy with a Melee Attack replenishes 5% Stamina. 0.75s Cooldown.
~~~

## English comparison

The independently read English specifies melee Impact, actual stagger for Stamina recovery, and a cooldown. These match the accepted +25%, 5% and 0.75s values. Push-event applicability, event filters, maximum-Stamina basis, cap and examples supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_melee_stagger.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/ee98056a-b754-4821-9542-717ef68c944a). The icon identifies the talent; it is not mechanism evidence.
