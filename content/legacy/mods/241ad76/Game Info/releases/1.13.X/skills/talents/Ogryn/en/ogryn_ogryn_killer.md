# Heavyweight: source evidence

[繁體中文](../ogryn_ogryn_killer.md) | [Player description](README.md#ogryn_ogryn_killer) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_ogryn_killer)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_ogryn_killer`; name key `loc_talent_ogryn_ogryn_fighter`; description key `loc_talent_ogryn_ogryn_fighter_desc`. Node `node_f92c86fb-b19e-47fa-81bc-a78a2d834608`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The buff grants both `damage_vs_ogryn=0.3` and `damage_vs_chaos_plague_ogryn=0.3`. The former checks the `ogryn` tag; the latter checks the breed name.
- Plague Ogryn has only `monster`/`minion` tags, so the two outgoing bonuses do not overlap.
- Corresponding incoming damage multipliers of 0.7 separately check the Ogryn tag and Plague Ogryn breed. General settlement multiplies the applicable multiplier with other damage reductions.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1121-L1130](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1121-L1130)
- [scripts/settings/talent/talent_settings_ogryn.lua — L325-L328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L325-L328)
- [scripts/utilities/attack/damage_calculation.lua — L278-L282](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L282)
- [scripts/utilities/attack/damage_calculation.lua — L392-L396](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L392-L396)
- [scripts/utilities/attack/damage_calculation.lua — L587-L626](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L626)
- [scripts/settings/breed/breeds/chaos/chaos_plague_ogryn_breed.lua — L66-L69](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/breed/breeds/chaos/chaos_plague_ogryn_breed.lua#L66-L69)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1152-L1173](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1152-L1173)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L164-L193](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L164-L193)

## Example assumptions and limits

- **Effect**: Deal 30% more damage to Bulwarks, Crushers, Reapers and Plague Ogryns, and take 30% less damage from them. Both melee and ranged damage qualify.

- **Damage example**: Considering only the damage-bonus stage, `100 × (1 + 30%) = 130`. With an existing +20% bonus at the same stage, the result is 150. Incoming damage of 100 becomes `100 × 0.7 = 70`; other damage reductions apply separately.

- **Targets**: This is not a general bonus against every large enemy or every Monstrosity.

Damage examples hold other attack conditions constant and isolate the stated modifier stages. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_ogryn_fighter`, hash `ab9a0418`, entry 11048: **Heavyweight**.
- Description key `loc_talent_ogryn_ogryn_fighter_desc`, hash `d9a22157`, entry 14107.

Full raw template:

~~~text
{damage:%s} Damage against Bulwarks, Crushers, Plague Ogryns and Reapers. Also receive {damage_reduction:%s} Damage Reduction against the same.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | offensive_1.damage_vs_ogryn = 0.3 | Percentage with explicit + prefix → +30% |
| damage_reduction | 1 − offensive_1.ogryn_damage_taken_multiplier = 1 − 0.7 = 0.3 | Percentage with explicit + prefix → +30% |

Only the missing display mapping in the cited talent definition, lines 1152–1173, was read. Existing mechanisms and formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+30% Damage against Bulwarks, Crushers, Plague Ogryns and Reapers. Also receive +30% Damage Reduction against the same.
~~~

## English comparison

The independently read English names Bulwarks, Crushers, Plague Ogryns and Reapers for the damage bonus and applies damage reduction against the same list. It matches the accepted target-specific +30% outgoing bonus and 0.7 incoming multiplier. Tag/breed non-overlap, melee/ranged applicability and calculations supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_ogryn_killer.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/c006f0e1-3f32-4dcc-891a-8c44b4ebe6df). The icon identifies the talent; it is not mechanism evidence.
