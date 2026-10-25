# Warp Splitting: source evidence

[繁體中文](../psyker_cleave_from_peril.md) | [Player description](README.md#psyker_cleave_from_peril) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_cleave_from_peril)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_cleave_from_peril`; name key `loc_talent_psyker_cleave_from_peril`; description key `loc_talent_psyker_cleave_from_peril_desc`. Node `node_c648889c-ff07-4664-81b7-b9fafcd93a04`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `max_hit_mass_attack_modifier` scales linearly from 0 to 1. `DamageProfile.max_hit_mass` changes only `attack_modifier`, leaving `impact_modifier` unchanged.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3169-L3189](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3169-L3189)
- [scripts/settings/talent/talent_settings_psyker.lua — L27-L30](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L27-L30)
- [scripts/utilities/attack/damage_profile.lua — L36-L64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L64)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2264-L2280](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2264-L2280)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1762-L1788](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1762-L1788)

## Example assumptions and limits

- **How it works**: Higher Peril allows attacks to pass through more total enemy mass: +50% at 50% Peril and +100% at 100% Peril.

- **Cleave example**: With a baseline damage Cleave capacity of 4 mass units, 50% Peril and no other bonuses, 4 × (1 + 50%) = 6. This does not increase damage to a single enemy by 50% and cannot be converted directly into a fixed number of extra enemies hit.

#### Traditional Chinese wording correction

- The Chinese phrase meaning “Cleave attack damage” presents Cleave capacity as a damage increase. The English says Cleave; the effect raises the enemy mass limit an attack can pass through, rather than directly increasing damage per hit.

The accepted Chinese correction above is retained separately from the independent English comparison. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_cleave_from_peril`, hash `ef20acce`, entry 15544: **Warp Splitting**.
- Description key `loc_talent_psyker_cleave_from_peril_desc`, hash `5de5fc01`, entry 6089.

Full raw template:

~~~text
Up to {max_cleave:%s} Cleave, based on Peril.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `max_cleave` | 1 | Percentage ×100, with `+` prefix: +100%. |

Display mapping: [psyker_talents.lua L2269-L2275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2269-L2275). The maximum reuses the verified Chinese value.

Static reconstruction; not an observed game screen:

~~~text
Up to +100% Cleave, based on Peril.
~~~

## English comparison

The English correctly describes Cleave capacity and ties its maximum bonus to Peril. It does not claim a damage increase per hit. Linear scaling and the separate impact Cleave limit are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_cleave_from_peril.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/c8b43c74-3790-440f-8610-db321e11da83). The icon identifies the talent; it is not mechanism evidence.
