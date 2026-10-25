# Enemies Within, Enemies Without: source evidence

[繁體中文](../zealot_toughness_in_melee.md) | [Player description](README.md#zealot_toughness_in_melee) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_toughness_in_melee)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_toughness_in_melee`; name key `loc_talent_zealot_toughness_regen_in_melee`; description key `loc_talent_zealot_toughness_near_enemies_desc`. Node `node_019a38fd-8454-4e5c-961b-7e74d408f0af`; category Skill; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Each update first restores the previous percentage × `dt`, then refreshes the radius-5 broadphase query every 0.1 seconds.
- Each enemy adds 1; `monster`, `captain` and `cultist_captain` add a further `monster_count = 5`. Their actual weight is therefore 6, not the total of 5 implied by that setting's name.
- If `is_disabled`, the update returns immediately. Restoration uses maximum Toughness, with restoration bonuses and the missing-Toughness cap.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L1481-L1592](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1481-L1592)
- [scripts/settings/talent/talent_settings_zealot.lua — L199-L205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L199-L205)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L2979-L3017](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2979-L3017)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L887-L918](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L887-L918)

## Example assumptions and limits

- **Operation**: With an enemy within 5 metres, restore 2.5% of maximum Toughness per second. Each additional enemy adds 1 percentage point per second, up to 7.5%. Restoration pauses while disabled and unable to act.
- **Restoration example**: With maximum Toughness 100 and 3 ordinary enemies nearby, restore 100 × [2.5% + (3 − 1) × 1%] = 4.5 per second. Six enemies reach the 7.5-per-second cap.
- **Large enemies**: The fixed source counts a Monstrosity or specified boss as 6 enemies, so one alone reaches the restoration cap.

- Both local Chinese and English count a Monstrosity as 5; the fixed update adds 1 and then another 5. Both sources correspond to 1.13.1. This is a difference between sources, not a Chinese-only mistranslation; actual game behavior remains unobserved.
- Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_toughness_regen_in_melee`, hash `3991c347`, entry 3736: **Enemies Within, Enemies Without**.
- Description key `loc_talent_zealot_toughness_near_enemies_desc`, hash `fc8eff61`, entry 16405.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness per Second while within {range:%s}m Range of an Enemy, increased by {more_toughness:%s} per Enemy. Monstrosities count as {monster_count:%s}. Max {max:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | 0.025 → +2.5% | `percentage`, prefix `+`; `initial_percentage_toughness` |
| `range` | 5 → 5 | `number`; `range` |
| `more_toughness` | 0.01 → +1% | `percentage`, prefix `+`; `percentage_toughness_per_enemy` |
| `monster_count` | 5 → 5 | `number`; `monster_count`, the extra count rather than total implemented weight |
| `max` | 0.075 → +7.5% | `percentage`, prefix `+`; `max_percentage_toughness` |

The minimal display mapping at `zealot_talents.lua` L2979-L3017 reads these values from `talent_settings.zealot_toughness_in_melee`. The template uses `monster_count` as a total; the accepted update uses it as an extra count.

Static reconstruction; not an observed game screen:

~~~text
Replenish +2.5% Toughness per Second while within 5m Range of an Enemy, increased by +1% per Enemy. Monstrosities count as 5. Max +7.5%.
~~~

## English comparison

The English's 5-metre condition, initial 2.5%, additional 1 percentage point and 7.5% cap agree with the accepted restoration rule. Its explicit “Monstrosities count as 5” contradicts the accepted total weight of 6 (ordinary 1 plus extra 5). Record this numerical English contradiction against fixed evidence, with actual game behavior unobserved. Maximum-Toughness basis, disabled-state pause, prior-rate integration, 0.1-second query and missing-Toughness cap supplement the text.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_toughness_in_melee.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872) | [Existing attachment](https://github.com/user-attachments/assets/fbb6b38f-57a3-4659-bf32-04d1edc4d989). The icon identifies the talent; it is not mechanism evidence.
