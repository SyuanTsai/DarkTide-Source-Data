# Precognition: source evidence

[繁體中文](../psyker_overcharge_weakspot_kill_bonuses.md) | [Player description](README.md#psyker_overcharge_weakspot_kill_bonuses) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_overcharge_weakspot_kill_bonuses)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_overcharge_weakspot_kill_bonuses`; name key `loc_ability_psyker_overcharge_weakspot`; description key `loc_ability_psyker_overcharge_weakspot_description`. Node `node_17c2bf3f-7235-4e00-be33-5931be3bb011`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The talent enables the `psyker_overchage_stance_weakspot_kills` special rule. During Gaze, `stacks` increases each second; an eligible Weakspot Kill increases `bonus_stacks` by one.
- The Gaze buff's `lerp_t_func` calculates `min(max_stacks, stacks + bonus_stacks) / max_stacks`. The additional seconds credited by Weakspot Kills therefore immediately increase the active damage lerp. The same rule enables a conditional Finesse Damage lerp, immediately increasing that bonus too.
- The stop condition remains 100% Peril. `bonus_stacks` does not change the active duration or stop condition. On exit, the same total stack count creates a buff lasting 10 seconds. The per-stack damage and Finesse fields are each 0.01, capped at 30 stacks.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L582-L615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L582-L615)
- [scripts/settings/talent/talent_settings_psyker.lua — L5-L15](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L5-L15)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1043-L1068](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1043-L1068)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1120-L1149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1120-L1149)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1151-L1159](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1151-L1159)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1195-L1199](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1195-L1199)
- [scripts/utilities/attack/damage_calculation.lua — L663-L801](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L663-L801)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L582-L615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L582-L615)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L590-L615](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L590-L615)

## Example assumptions and limits

- **Ability modifier**: During Scrier's Gaze, also gain 1% Finesse Damage each second, up to 30%, remaining for 10 seconds after it ends. Weakspot Kills add one stack of progress to both damage and Finesse Damage.

- **Stack example**: At 8 accumulated Gaze stacks, a Weakspot Kill gives `8 + 1 = 9` stacks. It does not extend the actual duration of Gaze.

- **Damage example**: Finesse Damage affects the extra Weakspot or Critical damage. Isolating a 30% Finesse bonus, assume base damage 100 and extra damage 50. The original 150 becomes `100 + 50 × 1.30 = 165`, a 10% increase for the whole hit; Gaze's other bonuses are calculated separately.

- Weakspot Kills only increase `bonus_stacks`; they do not change Peril accumulation or the end time.
- Once 30 stacks are reached, further bonus stacks do not raise the cap.
- The Finesse bonus affects only the Finesse component in the attack's hit calculation. Full final damage depends on weapon, target, Weakspot and Critical conditions. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_ability_psyker_overcharge_weakspot`, hash `17699256`, entry 1530: **Precognition**.
- Description key `loc_ability_psyker_overcharge_weakspot_description`, hash `492219ab`, entry 4746.

Full raw template:

~~~text
Weakspot Kills count as {second:%s}s spent in {talent_name:%s}.

For each second spent in {talent_name:%s}, you now also gain {finesse_damage_per_stack:%s} Finesse Damage ({max_finesse_damage%s} max) which lingers for {duration:%s}s after leaving {talent_name:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `second` | `1` | Number → `1`; the template adds `s` |
| `talent_name` | `loc_talent_psyker_combat_ability_overcharge_stance` | Localized string → `Scrier's Gaze` |
| `finesse_damage_per_stack` | `0.01` | Percentage with `+` prefix → `+1%` |
| `max_finesse_damage` | `0.01 × 30 = 0.30` | Percentage with `+` prefix → `+30%`; manually substituted for raw `{max_finesse_damage%s}` |
| `duration` | `10` | Number → `10`; the template adds `s` |

Only missing display fields in `psyker_talents.lua` L582–609 were read, plus `talent_settings_psyker.lua` L5–15 to fill the missing `second_per_weakspot=1`. `talent_name` resolves to **Scrier's Gaze** (`loc_talent_psyker_combat_ability_overcharge_stance`, hash `b664d880`, entry 11771). Accepted 0.01 Finesse Damage per stack, 30 stacks and 10-second exit duration supply the other values. The raw token `{max_finesse_damage%s}` lacks the colon used by the other tokens. It is preserved above; the display below manually substitutes the mapped +30% value. Actual handling/rendering of that token has not been observed in game; this is not a confirmed mechanism contradiction.

Static reconstruction; not an observed game screen:

~~~text
Weakspot Kills count as 1s spent in Scrier's Gaze.

For each second spent in Scrier's Gaze, you now also gain +1% Finesse Damage (+30% max) which lingers for 10s after leaving Scrier's Gaze.
~~~

## English comparison

Read independently, Weakspot Kills count as a second already spent in Gaze, which credits progress; the English does not say they extend Gaze's remaining duration. The +1% Finesse Damage per second, +30% cap and 10-second lingering bonus agree with the accepted rule and fields. Immediate advancement of both lerps, the Peril-based stop condition and the extra-damage calculation supplement the wording. The malformed maximum-value token is preserved and its display is manually reconstructed; game rendering remains unobserved, with no explicit English mechanism contradiction established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_overcharge_weakspot_kill_bonuses.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/41b92eae-77a3-481e-af12-783845ce49c4). The icon identifies the talent; it is not mechanism evidence.
