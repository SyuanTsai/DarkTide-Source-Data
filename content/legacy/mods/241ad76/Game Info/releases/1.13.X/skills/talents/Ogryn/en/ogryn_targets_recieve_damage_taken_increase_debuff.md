# Soften Them Up: source evidence

[繁體中文](../ogryn_targets_recieve_damage_taken_increase_debuff.md) | [Player description](README.md#ogryn_targets_recieve_damage_taken_increase_debuff) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_targets_recieve_damage_taken_increase_debuff)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_targets_recieve_damage_taken_increase_debuff`; name key `loc_talent_ogryn_targets_recieve_damage_increase_debuff`; description key `loc_talent_ogryn_targets_recieve_damage_increase_debuff_new_desc`. Node `node_94f1d2a8-305c-4d75-bcc4-733a7ef4cd20`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The proc check combines `on_melee_hit`, `on_damaging_hit` and `on_non_kill`. It applies the debuff only if the target is still `HEALTH_ALIVE` and has a buff extension.
- The target buff has `duration=5`, `max_stacks=1` and `refresh_duration_on_stack`.
- Its `damage_taken_modifier=0.15` applies at the additive damage-taken stage. It does not only increase the applicator's damage.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L769-L806](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L769-L806)
- [scripts/utilities/attack/damage_calculation.lua — L587-L612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1756-L1799](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1756-L1799)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L304-L329](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L304-L329)

## Example assumptions and limits

- **Trigger**: Damage an enemy with a melee attack while it survives the hit. The enemy takes 15% more damage for 5s, benefiting teammates' subsequent attacks too.

- **Refresh**: Another qualifying melee-damage hit restarts the 5s duration. The effect has at most 1 stack; repeated hits do not raise it to 30%.

- **Damage example**: After the debuff is applied, damage of 100 becomes `100 × (1 + 15%) = 115`. With another +20% at the same damage-taken stage, it becomes 135. The first triggering hit is not recalculated retroactively.

Assume identical subsequent hit conditions, armour and other multipliers. The debuff applied after a hit is not retroactively applied to that first damage calculation. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_targets_recieve_damage_increase_debuff`, hash `133de1c0`, entry 1236: **Soften Them Up**.
- Description key `loc_talent_ogryn_targets_recieve_damage_increase_debuff_new_desc`, hash `8d887b7b`, entry 9165.

Full raw template:

~~~text
Enemies damaged by your Melee Attacks take {damage:%s} more Damage for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | damage_taken_modifier = 0.15 from ogryn_recieve_damage_taken_increase_debuff | Percentage with explicit + prefix → +15% |
| duration | duration = 5 from the same buff | Number → 5 |

Only the missing display mapping in the cited talent definition, lines 1756–1799, was read. Its extra stacks value is not used by this template. Existing mechanisms and formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Enemies damaged by your Melee Attacks take +15% more Damage for 5s.
~~~

## English comparison

The independently read English describes a timed increase to damage taken by enemies damaged by melee attacks. It matches the accepted target debuff and its +15% / 5s values, without restricting subsequent benefit to the applicator. Survival and buff-extension requirements, one-stack refresh, additive examples and the initial-hit limit supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_targets_recieve_damage_taken_increase_debuff.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/53e0b90e-52dc-4a4a-953c-b235753aa97a). The icon identifies the talent; it is not mechanism evidence.
