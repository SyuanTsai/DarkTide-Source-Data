# Lucky Streak: source evidence

[繁體中文](../ogryn_crit_damage_increase.md) | [Player description](README.md#ogryn_crit_damage_increase) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_crit_damage_increase)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_crit_damage_increase`; name key `loc_talent_ogryn_crit_damage_increase`; description key `loc_talent_ogryn_crit_damage_increase_desc`. Node `node_68a16449-f5c8-47a2-bae3-6a6eb858f0b5`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `critical_strike_damage=0.75` contributes to `critical_damage_stat_buff`, applied to `base_finesse_damage` by `_finesse_boost_damage`. It adds at the same stage as Weakspot / Finesse bonuses rather than directly multiplying the full `base_damage`.
- The 100 + 50 / 20 examples fix the two components entering the Finesse-buff stage and ignore later special damage reduction, armour changes and damage floors.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3510-L3516](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3510-L3516)
- [scripts/settings/talent/talent_settings_ogryn.lua — L161-L163](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L161-L163)
- [scripts/utilities/attack/damage_calculation.lua — L672-L782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2737-L2752](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2737-L2752)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1747-L1769](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1747-L1769)

## Example assumptions and limits

- **Effect**: Increase the additional damage component of a critical hit by 75%. This does not increase Critical Chance or multiply the entire critical hit's damage by 1.75. The additional component's share varies with weapon, armour and hit location, so the actual increase varies too.

- **Damage example**: Under fixed conditions, assume the original damage comprises 100 base damage and 50 additional critical damage, for 150 total. With this effect, `100 + 50 × 1.75 = 187.5`, a relative increase of 25%. If the additional component is only 20, the total rises from 120 to 135, an increase of only 12.5%.

- **Critical Weakspot hits**: When a hit is both critical and on a Weakspot, the shared additional damage is calculated first, then the critical and Weakspot bonuses are applied. Do not multiply by separate critical and Weakspot multipliers once each.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_crit_damage_increase`, hash `ec3af270`, entry 15355: **Lucky Streak**.
- Description key `loc_talent_ogryn_crit_damage_increase_desc`, hash `c90c5cb1`, entry 12976.

Full raw template:

~~~text
{crit_damage:%s} Critical Strike Damage.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| crit_damage | shared ogryn_crit_damage_increase.critical_strike_damage = 0.75 | Percentage with explicit + prefix → +75% |

Only the missing display mapping in the cited talent definition, lines 2737–2752, was read. Accepted values, mechanisms and common formatting were reused. The [Writer] suffix is export metadata on both name and description, not part of either displayed string.

Static reconstruction; not an observed game screen:

~~~text
+75% Critical Strike Damage.
~~~

## English comparison

The independently read English states +75% Critical Strike Damage, matching the accepted critical_strike_damage stat. It does not specify how that stat affects the base versus additional damage components or promise a uniform 75% increase to total damage. The Finesse-stage scope, Critical Chance distinction, combined Weakspot handling and fixed-component examples supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_crit_damage_increase.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/de5091de-3dd6-455b-875a-55228eb4d67e). The icon identifies the talent; it is not mechanism evidence.
