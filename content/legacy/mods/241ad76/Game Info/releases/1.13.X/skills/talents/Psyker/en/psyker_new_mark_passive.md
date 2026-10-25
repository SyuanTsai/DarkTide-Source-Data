# Disrupt Destiny: source evidence

[繁體中文](../psyker_new_mark_passive.md) | [Player description](README.md#psyker_new_mark_passive) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_new_mark_passive)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_new_mark_passive`; name key `loc_talent_psyker_marked_enemies_passive`; description key `loc_talent_psyker_marked_enemies_passive_updated_desc`. Node `node_44ce21ca-9b23-46b9-a6df-eae7ee03114b`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Target selection queries a 40-metre radius and accepts only living enemies with `breed.psyker_mark_target = true`. The horizontal view dot product must exceed 0.5 and `perception_extension` must report line of sight. Initial selection takes the first valid target in the broad query; reselection takes the valid target closest to the last death position.
- About once per second, the update checks whether the current target remains visible. Target death or expiry of visibility/engagement conditions causes reselection. This update cadence is not a per-second marking probability.
- The `on_hit` handler first requires `attacking_unit` to be the player, then `attack_result = died` and `victim_unit = current_target`. Only then does it grant the Movement Speed/Toughness buff and one Precision stack, before selecting again from the hit position.
- On a non-killing hit against the current Marked target or a target with `boss` tags, existing Precision stacks allow `refresh_duration_of_stacking_buff` to restart the stack buff's timer.
- Precision has `duration = 5` and `max_stacks = 15`; `refresh_duration_on_stack` and `refresh_duration_on_remove_stack` are both true. Expiry removes one stack and resets the remaining stacks' start time. Stacks therefore decay one at a time and do not have independent timers.
- Damage calculation applies the general Damage buff to base Damage before calculating the additional finesse boost. Weakspot and Critical bonuses apply only when their respective hit conditions hold. If both hold, their increases add within the common finesse multiplier.
- The reward buff restores Toughness at `0.25 / 2.5` per second, with `+0.2` Movement Speed for 2.5 seconds.
- The ranged-dodge declaration uses the dictionary `{[keywords.count_as_dodge_vs_ranged] = true}`. Values from `table.enum` are strings, while Buff initialization takes `#template.keywords` and updates read numeric indices. This declaration cannot establish an active ranged-dodge effect, so the player description does not list it.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1957-L2066](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1957-L2066)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L639-L733](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L639-L733)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L741-L755](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L741-L755)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L765-L840](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L765-L840)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L841-L895](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L841-L895)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L924-L971](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L924-L971)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L973-L1019](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L973-L1019)
- [scripts/settings/talent/talent_settings_psyker.lua — L16-L18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L16-L18)
- [scripts/utilities/attack/damage_calculation.lua — L587-L614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/utilities/attack/damage_calculation.lua — L672-L782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782)
- [scripts/extension_systems/buff/buff_extension_base.lua — L434-L462](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L462)
- [scripts/extension_systems/buff/buff_extension_base.lua — L635-L663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L663)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua — L108-L119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L108-L119)
- [scripts/extension_systems/buff/buffs/buff.lua — L130-L139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L130-L139)
- [scripts/extension_systems/buff/buffs/buff.lua — L809-L818](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L809-L818)
- [scripts/foundation/utilities/table.lua — L1110-L1126](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/utilities/table.lua#L1110-L1126)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1957-L2066](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1957-L2066)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1266-L1295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1266-L1295)

## Example assumptions and limits

- **Marking and stacks:** Mark eligible enemies in front of you, within 40 metres and with line of sight. Personally kill the current Marked Enemy to gain one Precision stack, up to 15.

- **Per-stack bonuses:** +1% general Damage, +2% additional Critical Damage and +2.5% additional Weakspot Damage. At 15 stacks these are +15%, +30% and +37.5%, respectively.

- **Damage examples:** With only the general Damage bonus, `100 × (1 + 15%) = 115`. For the Weakspot bonus alone, suppose the same hit already includes the general Damage bonus and has a base portion of 100 plus an additional Weakspot portion of 50. Adding 37.5% Weakspot Damage gives `100 + 50 × 1.375 = 168.75`, a 12.5% increase over the original 150 at this stage. Weapons have different additional-Damage proportions, so the increase to the whole hit varies.

- **Toughness and Movement Speed:** Killing the Marked target restores 25% of maximum Toughness over 2.5 seconds and grants +20% Movement Speed for 2.5 seconds. At 100 maximum Toughness, this restores 25 in total, or `25 ÷ 2.5 = 10` per second, capped by missing Toughness.

- **Timer refresh and decay:** Precision shares a five-second timer. Gaining a stack, or hitting a still-living Marked target or a Boss while stacks already exist, resets it. Expiry removes one stack, then starts another five-second timer. With three stacks and no further refresh, the count falls to two, one and zero at about 5, 10 and 15 seconds.

`breed.psyker_mark_target` determines eligible enemy breeds; the player description does not enumerate them. The existing simultaneous Critical/Weakspot example assumes direct Damage and additional finesse Damage of 100 each, without armour curves or other bonuses, and does not represent a fixed final result for every weapon. Critical and Weakspot increases add at the shared finesse stage only when the respective hit conditions hold. Other talents can raise the stack cap to 25, extend duration to 10 seconds or grant three stacks for a Weakspot kill; those variants are documented separately. The ranged-dodge keyword's dictionary format leaves its in-game effect unconfirmed. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_marked_enemies_passive`, hash `6a38907d`, entry 6922: **Disrupt Destiny**.
- Description key `loc_talent_psyker_marked_enemies_passive_updated_desc`, hash `cfa752d8`, entry 13416.

Full raw template:

~~~text
Every second, Enemies within {radius:%s}m have a chance of being Marked. Killing a Marked Enemy Replenishes {toughness:%s} Toughness over {move_speed_duration:%s}s, grants {move_speed:%s} Movement Speed for {move_speed_duration:%s}s, and adds a Precision Bonus for {bonus_duration}s.

Each Precision Bonus grants {base_damage:%s} Damage, {crit_damage:%s} Critical Damage and {weakspot_damage:%s} Weakspot Damage. Precision Bonus Stacks {bonus_stacks:%s} times and when the duration ends, one stack is removed and the duration is refreshed.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `radius` | 40 | Number; metres are in the template. |
| `toughness` | 0.25 | Percentage: 25%. |
| `move_speed_duration` | 2.5 | Number; seconds are in the template. |
| `move_speed` | 0.2 | Percentage with `+` prefix: +20%. |
| `bonus_duration` | 5 | Number; the raw token is `{bonus_duration}`. |
| `base_damage` | 0.01 | Percentage with `+` prefix: +1%. |
| `crit_damage` | 0.02 | Percentage with `+` prefix: +2%. |
| `weakspot_damage` | 0.025 | Percentage with `+` prefix and one decimal: +2.5%. |
| `bonus_stacks` | 15 | Number. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L1957-L2061 supplies radius from `target_distance_improved`, reward values from the bonus buff and Damage/duration/cap values from the stacking buff. Values reuse the verified evidence. The template's plain `{bonus_duration}` token is preserved above and manually substituted with its mapped value below; actual game presentation was not observed.

Static reconstruction; not an observed game screen:

~~~text
Every second, Enemies within 40m have a chance of being Marked. Killing a Marked Enemy Replenishes 25% Toughness over 2.5s, grants +20% Movement Speed for 2.5s, and adds a Precision Bonus for 5s.

Each Precision Bonus grants +1% Damage, +2% Critical Damage and +2.5% Weakspot Damage. Precision Bonus Stacks 15 times and when the duration ends, one stack is removed and the duration is refreshed.
~~~

## English comparison

The English explicitly agrees with the reward values, Precision bonuses, base cap and one-stack decay followed by a refreshed duration. Its opening says enemies have a chance of being Marked every second, while the accepted selection evidence uses eligibility, forward view and line of sight, with a roughly one-second target-status check. Whether 'chance' is intended to assert a random marking roll cannot be established from the wording; retain this concrete difference as Cannot confirm, pending in-game comparison. Forward-view and line-of-sight requirements, personal/current-target kill checks, non-killing-hit refresh and Damage-stage details are supplements. The uncertain ranged-dodge declaration is not claimed by the English.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone/psyker_new_mark_passive.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/885fdda1-bcf2-4502-97e0-7eaead2392e0). The icon identifies the talent; it is not mechanism evidence.
