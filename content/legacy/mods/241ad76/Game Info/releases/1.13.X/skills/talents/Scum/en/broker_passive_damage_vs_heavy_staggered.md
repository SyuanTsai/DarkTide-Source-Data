# Cheap Shots: source evidence

[繁體中文](../broker_passive_damage_vs_heavy_staggered.md) | [Player description](README.md#broker_passive_damage_vs_heavy_staggered) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_damage_vs_heavy_staggered)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_damage_vs_heavy_staggered`; name key `loc_talent_broker_passive_damage_vs_heavy_staggered`; description key `loc_talent_broker_passive_damage_vs_heavy_staggered_desc_02`. Node `node_f8ac2c83-f6f8-40f2-958d-565a359f0607`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The Buff uses `damage_vs_staggered = 0.1` and `damage_vs_medium_staggered = 0.15 − 0.1 = 0.05`. Damage calculation adds the extra 0.05 for at least Medium Stagger.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L446-L470](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L446-L470)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2267-L2275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2267-L2275)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1982-L2014](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1982-L2014)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1456-L1481](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1456-L1481)

## Example assumptions and limits

- **Damage bonus**: Deal 10% more damage while the enemy meets the Stagger condition. Medium or Heavy Stagger raises the total bonus to 15%; the 10% and 15% figures do not combine to 25%.

- **Damage example**: With a base of 100, Light Stagger gives 110, and Medium or Heavy Stagger gives 115. With another 25% bonus at the same stage, the latter becomes 100 × (1 + 25% + 15%) = 140.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_damage_vs_heavy_staggered`, hash `1d40fec5`, entry 1915: **Cheap Shots**.
- Description key `loc_talent_broker_passive_damage_vs_heavy_staggered_desc_02`, hash `6dc4e3b1`, entry 7135.

Full raw template:

~~~text
{power_light:%s} Damage against Enemies that are Staggered. Medium and Heavy Staggered Enemies instead take {power_heavy:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `power_light` | `damage_vs_staggered = 0.1` | Percentage with `+` prefix: `+10%` |
| `power_heavy` | `damage_vs_medium_staggered = 0.05` | Percentage with `+` prefix: `+5%` |

The existing Buff values supply the substitutions. The talent display mapping at `broker_talents.lua` L1982-L2014 reads the additional 0.05 directly for `power_heavy`, without adding the base 0.1. Reuse the accepted percentage formatting. This independently reconstructed English display therefore differs from the Chinese document's prior wording comparison; the verified total damage bonus remains 15%.

Static reconstruction; not an observed game screen:

~~~text
+10% Damage against Enemies that are Staggered. Medium and Heavy Staggered Enemies instead take +5%.
~~~

## English comparison

The Stagger condition and base 10% bonus agree. The reconstructed English says Medium and Heavy Staggered enemies instead take +5%, although the accepted evidence gives a total 15% bonus: `power_heavy` displays only the additional 5%. This is an explicit numerical contradiction in the reconstructed English description. Actual game presentation remains unobserved. Same-stage stacking is supplementary detail.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_damage_vs_heavy_staggered.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/d6795940-e616-410f-b56b-76593e8a12eb). The icon identifies the talent; it is not mechanism evidence.
