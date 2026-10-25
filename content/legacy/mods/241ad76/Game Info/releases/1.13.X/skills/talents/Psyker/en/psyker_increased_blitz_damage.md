# Psykinetic Grip: source evidence

[繁體中文](../psyker_increased_blitz_damage.md) | [Player description](README.md#psyker_increased_blitz_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_increased_blitz_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_increased_blitz_damage`; name key `loc_talent_psyker_increased_blitz_damage`; description key `loc_talent_psyker_increased_blitz_damage_desc`. Node `node_c63246bc-9c76-437f-be2a-c8072ecc474b`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The buff separately grants `smite_damage`, `chain_lightning_damage` and `psyker_throwing_knives_damage_multiplier` values of 0.2. Each applies in the additive `damage_stat_buffs` stage for its corresponding Damage type.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L3829-L3840](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3829-L3840)
- [scripts/settings/talent/talent_settings_psyker.lua — L109-L111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L109-L111)
- [scripts/utilities/attack/damage_calculation.lua — L477-L526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L477-L526)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2672-L2700](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2672-L2700)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L2188-L2212](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L2188-L2212)

## Example assumptions and limits

- **How it works**: Brain Rupture, Smite and Assail deal 20% more Damage.

- **Damage example**: Compare only this Damage stage, with all other multipliers fixed at 1. With a baseline of 100 and no other bonuses, 100 × (1 + 20%) = 120. With an existing 25% bonus in the same stage, 125 becomes 100 × (1 + 25% + 20%) = 145.

#### Traditional Chinese wording correction

- The Chinese construction meaning “Damage dealt to…” presents the three Blitz abilities as targets being attacked. The effect instead increases the Damage dealt by Brain Rupture, Smite and Assail themselves.

The accepted Chinese correction is retained separately from the independent English comparison. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_increased_blitz_damage`, hash `4ac15b0d`, entry 4861: **Psykinetic Grip**.
- Description key `loc_talent_psyker_increased_blitz_damage_desc`, hash `9b44cc81`, entry 10016.

Full raw template:

~~~text
{blitz_damage:%s} Damage for {blitz_one:%s}, {blitz_two:%s}, and {blitz_three:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `blitz_damage` | 0.2 | Percentage ×100, with `+` prefix: +20%. |
| `blitz_one` | `loc_talent_psyker_brain_burst_improved` | Localized string: Brain Rupture; hash `c3b5cefd`, entry 12622. |
| `blitz_two` | `loc_ability_psyker_chain_lightning` | Localized string: Smite; hash `eb65c907`, entry 15301. |
| `blitz_three` | `loc_ability_psyker_blitz_throwing_knives` | Localized string: Assail; hash `9cd7d808`, entry 10129. |

Display mapping: [psyker_talents.lua L2677-L2696](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2677-L2696). The amount reuses accepted evidence; the three name strings use the same local English resource.

Static reconstruction; not an observed game screen:

~~~text
+20% Damage for Brain Rupture, Smite, and Assail.
~~~

## English comparison

The English says Damage “for” the three Blitz abilities, correctly identifying them as the attacks receiving the bonus. Their names and 20% amount agree. Damage-type eligibility and the additive stage are supplementary details; the Chinese wording correction is not an English erratum.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_increased_blitz_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/e66044cc-0b83-4f85-86ff-84661f076941). The icon identifies the talent; it is not mechanism evidence.
