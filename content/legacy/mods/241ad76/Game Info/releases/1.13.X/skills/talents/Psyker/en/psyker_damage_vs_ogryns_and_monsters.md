# Vulnerable Minds: source evidence

[繁體中文](../psyker_damage_vs_ogryns_and_monsters.md) | [Player description](README.md#psyker_damage_vs_ogryns_and_monsters) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_damage_vs_ogryns_and_monsters)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_damage_vs_ogryns_and_monsters`; name key `loc_talent_psyker_damage_vs_ogryns_and_monsters`; description key `loc_talent_psyker_damage_vs_ogryns_and_monsters_desc`. Node `node_427cefce-0443-4754-becd-ae4967e84f5a`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `damage_vs_ogryn_and_monsters = 0.2`. Shared Damage calculation adds this to the general `damage_stat_buffs` based on breed tags. A large-looking enemy does not automatically qualify for the tag.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1834-L1840](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1834-L1840)
- [scripts/settings/talent/talent_settings_psyker.lua — L116-L118](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L116-L118)
- [scripts/utilities/attack/damage_calculation.lua — L391-L405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L391-L405)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2748-L2762](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2748-L2762)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1844-L1868](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1844-L1868)

## Example assumptions and limits

- **How it works**: Deal 20% more Damage to Ogryns and Monstrosities.

- **Damage example**: Compare only this Damage stage, with all other multipliers fixed at 1. With a baseline of 100 and no other bonuses, 100 × (1 + 20%) = 120. With an existing 25% bonus in the same stage, 125 becomes 100 × (1 + 25% + 20%) = 145.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_damage_vs_ogryns_and_monsters`, hash `7b6a6e65`, entry 8023: **Vulnerable Minds**.
- Description key `loc_talent_psyker_damage_vs_ogryns_and_monsters_desc`, hash `454bae2f`, entry 4492.

Full raw template:

~~~text
{damage:%s} Damage vs Ogryns and Monstrosities.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | 0.2 | Percentage ×100, with `+` prefix: +20%. |

Display mapping: [psyker_talents.lua L2751-L2757](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2751-L2757). The amount reuses the verified Chinese value.

Static reconstruction; not an observed game screen:

~~~text
+20% Damage vs Ogryns and Monstrosities.
~~~

## English comparison

The target categories and 20% bonus agree. Breed-tag eligibility and addition alongside other bonuses in the same Damage stage are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_damage_vs_ogryns_and_monsters.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/f3235e60-41ff-4e15-81eb-172af5ec1f2e). The icon identifies the talent; it is not mechanism evidence.
