# Just a Dream: source evidence

[繁體中文](../psyker_damage_to_peril_conversion.md) | [Player description](README.md#psyker_damage_to_peril_conversion) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_damage_to_peril_conversion)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_damage_to_peril_conversion`; name key `loc_talent_psyker_damage_to_peril_conversion`; description key `loc_talent_psyker_damage_to_peril_conversion_desc`. Node `node_eaba4084-d11f-424a-872b-69ee649bdd44`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Conditional `damage_taken_multiplier = 0.75` applies while `current < 0.97`. `on_damage_taken` uses `params.damage_amount + params.toughness_damage_amount`, multiplies by 0.0025 and `warp_charge_amount`, and caps Peril at 0.97. `damage.lua` reports `damage` and `actual_toughness_damage_dealt`. The reduction and Peril examples fix their inputs separately: the 25% Damage value is not directly equated to the amount transferred into Peril.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1726-L1785](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1726-L1785)
- [scripts/settings/talent/talent_settings_psyker.lua — L99-L101](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L99-L101)
- [scripts/utilities/attack/damage.lua — L154-L178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L154-L178)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2592-L2605](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2592-L2605)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L2055-L2081](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L2055-L2081)

## Example assumptions and limits

- **How it works**: Below 97% Peril, take 25% less Damage. Also generate Peril from the combined Health and Toughness Damage reported for the hit: 0.25 percentage points per Damage point, up to 97% Peril.

- **Damage reduction example**: Compare only this reduction stage. An original 100 Damage becomes 100 × 0.75 = 75.

- **Peril example**: If the hit reports 40 combined Health and Toughness Damage, with no other Peril modifiers, gain 40 × 0.25 = 10 percentage points of Peril. An initial 50% becomes 60%; an initial 92% reaches at most 97%.

`params.damage_amount` is the `damage` supplied by the Damage path, rather than a direct before/after Health difference. Mixed Health/Toughness hits require the full Damage path calculation. The English conversion wording does not establish an exact one-for-one transfer of the Damage prevented. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_damage_to_peril_conversion`, hash `68abed2f`, entry 6815: **Just a Dream**.
- Description key `loc_talent_psyker_damage_to_peril_conversion_desc`, hash `832ffb7a`, entry 8526.

Full raw template:

~~~text
While below Critical Peril, {percent:%s} of Damage Taken is converted into Peril.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `percent` | 0.25 | Percentage ×100: 25%. |

Display mapping: [psyker_talents.lua L2595-L2600](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2595-L2600). The percentage reuses the accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
While below Critical Peril, 25% of Damage Taken is converted into Peril.
~~~

## English comparison

The below-Critical-Peril condition agrees with the accepted 97% threshold. “25% of Damage Taken is converted into Peril” describes the effect broadly, but does not resolve whether it means literally diverting the prevented Damage. The evidence instead establishes a 0.75 Damage multiplier and a separate Peril calculation from reported Damage; that literal transfer interpretation remains Cannot confirm. The exact reporting basis, generation modifier and cap are supplementary.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_damage_to_peril_conversion.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/b3086f22-3f24-417f-aaba-f59714897616). The icon identifies the talent; it is not mechanism evidence.
