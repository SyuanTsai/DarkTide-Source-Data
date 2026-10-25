# Lingering Influence: source evidence

[繁體中文](../psyker_mark_increased_duration.md) | [Player description](README.md#psyker_mark_increased_duration) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_mark_increased_duration)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_mark_increased_duration`; name key `loc_talent_psyker_mark_increased_duration`; description key `loc_talent_psyker_mark_increased_duration_description`. Node `node_0ee8a9f7-a62a-4bd7-996e-050a9f445d10`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Selecting `increased_duration` uses the clone with `duration = 10`, retaining the 15-stack cap and `refresh_duration_on_stack = true` / `refresh_duration_on_remove_stack = true`. The `if increased_stacks` branch takes priority over `elseif increased_duration`; these cannot simply be combined into a new variant with 25 stacks and a ten-second duration.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L820-L830](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L820-L830)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L973-L995](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L973-L995)
- [scripts/extension_systems/buff/buff_extension_base.lua — L635-L663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L663)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2139-L2174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2139-L2174)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1498-L1523](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1498-L1523)

## Example assumptions and limits

- **How it works:** Disrupt Destiny's Precision timer before each one-stack decay increases from five to ten seconds. Gaining a stack or hitting a qualifying target can still refresh the countdown.

- **Time example:** With three stacks and no subsequent refresh, the count falls to two, one and zero at about 10, 20 and 30 seconds. Full decay originally took about `5 × 3 = 15` seconds; it now takes about `10 × 3 = 30`.

- **Selection limit:** Choose either Lingering Influence or Perfectionism.

The example assumes no other modifiers and has not been verified in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_mark_increased_duration`, hash `e4c25bba`, entry 14833: **Lingering Influence**.
- Description key `loc_talent_psyker_mark_increased_duration_description`, hash `cacfbe0c`, entry 13097.

Full raw template:

~~~text
Increase the duration of {talent_name:%s} from {duration_previous:%s}s to {duration_after:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_marked_enemies_passive` | Localized string: Disrupt Destiny; hash `6a38907d`, entry 6922. |
| `duration_previous` | 5 | Number; seconds are in the template. |
| `duration_after` | 10 | Number; seconds are in the template. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L2144-L2169 reads `duration` from the base and `increased_duration` bonus buffs and localizes `talent_name`. Accepted durations, the same-build name and common formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
Increase the duration of Disrupt Destiny from 5s to 10s.
~~~

## English comparison

The English explicitly changes duration from five to ten seconds, agreeing with the accepted Precision-bonus clone. The base description defines one-stack loss followed by a refreshed timer, so this extends the time before each decay. The retained cap and refresh flags, qualifying-hit refresh and exclusive choice with Perfectionism supplement the wording. It does not promise a combined 25-stack, ten-second variant; no explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_mark_increased_duration.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/d2b37d6f-6054-462c-ba12-5583c59bceb8). The icon identifies the talent; it is not mechanism evidence.
