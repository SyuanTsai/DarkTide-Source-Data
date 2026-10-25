# Perfectionism: source evidence

[繁體中文](../psyker_mark_increased_max_stacks.md) | [Player description](README.md#psyker_mark_increased_max_stacks) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_mark_increased_max_stacks)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_mark_increased_max_stacks`; name key `loc_talent_psyker_mark_increased_max_stacks`; description key `loc_talent_psyker_mark_increased_max_stacks_description`. Node `node_31fbc1eb-b397-449d-adb8-f5c9adb5d883`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `start_func` prioritizes the `increased_stacks` variant. Its clone of the base bonus has `max_stacks = 25`; `damage = 0.01`, `critical_strike_damage = 0.02`, `weakspot_damage = 0.025`, `duration = 5` and the timer-refresh flags remain unchanged.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L820-L830](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L820-L830)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L973-L995](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L973-L995)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2103-L2138](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2103-L2138)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1449-L1474](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1449-L1474)

## Example assumptions and limits

- **How it works:** Disrupt Destiny's Precision cap increases from 15 to 25 stacks. Per-stack effects and the rule of losing one stack every five seconds remain unchanged.

- **Damage example:** At 25 stacks, gain +25% general Damage, +50% additional Critical Damage and +62.5% additional Weakspot Damage. With only general Damage, `100 × (1 + 25%) = 125`. The additional Critical and Weakspot portions require separate calculation for each weapon.

- **Selection limit:** Choose either Perfectionism or Lingering Influence.

The example assumes no other modifiers and has not been verified in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_mark_increased_max_stacks`, hash `af94ab08`, entry 11303: **Perfectionism**.
- Description key `loc_talent_psyker_mark_increased_max_stacks_description`, hash `781eac6d`, entry 7806.

Full raw template:

~~~text
Maximum Precision Bonus stacks are increased from {stacks_previous:%s} to {stacks_after:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `stacks_previous` | 15 | Number. |
| `stacks_after` | 25 | Number. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L2108-L2133 reads `max_stacks` from the base and `increased_stacks` bonus buffs. `talent_name` is also mapped to Disrupt Destiny but is unused by this raw template. Accepted values and common formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
Maximum Precision Bonus stacks are increased from 15 to 25.
~~~

## English comparison

The English explicitly increases the maximum Precision Bonus stacks from 15 to 25, agreeing with the accepted variant. It makes no change to duration or per-stack strength. The unchanged stats and decay, weapon-dependent additional Damage and mutually exclusive choice with Lingering Influence are supplements; no explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_mark_increased_max_stacks.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/d2ef8713-7c0b-4dec-b13a-7f9e6a294435). The icon identifies the talent; it is not mechanism evidence.
