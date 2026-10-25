# Kinetic Presence: source evidence

[繁體中文](../psyker_aura_damage_vs_elites.md) | [Player description](README.md#psyker_aura_damage_vs_elites) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_aura_damage_vs_elites)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_aura_damage_vs_elites`; name key `loc_talent_psyker_base_3`; description key `loc_talent_psyker_base_3_description`. Node `node_d323e130-860b-42f1-acd2-dc50cacde619`; category Aura; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- At the fixed source SHA, this aura sets `damage_vs_elites=0.1` with a maximum of 1 stack. The buff applies that value to its recipient. The Coherency set includes the player when created; the Coherency extension updates the auras of units in that set, benefiting the player and teammates in Coherency.
- Shared damage calculation reads `damage_vs_elites` only when the target has an `elite` tag and includes the bonus in the attacker's damage modifiers. The effect therefore does not apply generally to every Specialist or every enemy.

## Fixed source evidence

- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L373-L401](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L373-L401)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L926-L943](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L926-L943)
- [scripts/settings/talent/talent_settings_psyker.lua — L176-L179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L176-L179)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1303-L1320](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1303-L1320)
- [scripts/extension_systems/coherency/coherency_system.lua — L188-L195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua — L279-L311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L279-L311)
- [scripts/utilities/attack/damage_calculation.lua — L334-L337](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L334-L337)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L926-L943](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L926-L943)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L373-L401](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L373-L401)

## Example assumptions and limits

- **Aura**: You and teammates in Coherency deal 10% more damage against Elite enemies. The same aura does not stack multiple times.

- **Damage example**: Isolating this stage with a baseline of 100 and no other bonuses, 100 × 1.1 = 110. With an existing 25% bonus at the same stage, damage rises from 125 to 100 × (1 + 25% + 10%) = 135. Non-Elite enemies do not receive this bonus.

- Assume only this aura's 10% bonus applies, ignoring other damage bonuses and target multipliers. Against an Elite: `100 × 1.1 = 110`; against a non-Elite, this aura bonus is not applied. The illustrative Elite damage increases by 10%, while non-Elite damage gains nothing from this aura.
- It affects only targets marked Elite by the source. Other bonuses may separately target Specialists, Monstrosities or other categories; those cannot be inferred from this aura.
- Other damage bonuses jointly affect final damage; examples isolate this aura.
- Text and source both correspond to 1.13.1; actual behavior remains pending in-game comparison, without in-game testing. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_base_3`, hash `aa5cdd41`, entry 10988: **Kinetic Presence**.
- Description key `loc_talent_psyker_base_3_description`, hash `4fad8ca6`, entry 5173.

Full raw template:

~~~text
{damage:%s} Damage against Elite Enemies for you and Allies in Coherency.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | `damage_vs_elites=0.1` | Percentage with `+` prefix → `+10%` |

Only missing display fields at `psyker_talents.lua` L926–940 were read. `damage` uses `talent_settings_2.coherency.damage_vs_elites`, with accepted value 0.1 and percentage formatting with `+` prefix → `+10%`. Mechanisms and common formatting reuse accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
+10% Damage against Elite Enemies for you and Allies in Coherency.
~~~

## English comparison

Read independently, the English names you and Allies in Coherency as recipients, Elite enemies as targets, and +10% damage as the effect. These agree with the accepted self-inclusive Coherency aura and Elite-tagged damage modifier. It does not promise bonuses against all Specialists or all enemies. The one-stack cap and same-stage additive example are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/aura/psyker_aura_damage_vs_elites.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/ddd7895f-a971-4cdf-99bd-3f536cab3f8a). The icon identifies the talent; it is not mechanism evidence.
