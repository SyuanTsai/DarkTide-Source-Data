# Cruel Fortune: source evidence

[繁體中文](../psyker_mark_weakspot_kills.md) | [Player description](README.md#psyker_mark_weakspot_kills) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_mark_weakspot_kills)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_mark_weakspot_kills`; name key `loc_talent_psyker_mark_weakspot_stacks`; description key `loc_talent_psyker_mark_weakspot_stacks_description`. Node `node_9c95d8c4-7304-4a56-a9fa-6a727d553105`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_hit` requires a personal kill of `current_target` before passing `hit_weakspot` to `give_stack`. `weakspot_stacks = 3` is the total grant. The internal variable name `all_weakspot_kills_grant_buff` does not make unmarked Weakspot kills eligible.

## Fixed source evidence

- [scripts/settings/talent/talent_settings_psyker.lua — L16-L18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L16-L18)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L734-L755](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L734-L755)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L924-L943](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L924-L943)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L2221-L2240](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2221-L2240)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L1625-L1648](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1625-L1648)

## Example assumptions and limits

- **Trigger:** Kill Disrupt Destiny's current Marked Enemy with a Weakspot hit to gain two Precision stacks in addition to the original one, for three in total. Killing an unmarked enemy does not trigger this effect.

- **Stack example:** At four stacks, gain `4 + 3 = 7`. At 14 with a cap of 15, the count stops at 15.

The example assumes no other modifiers and has not been verified in game. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_mark_weakspot_stacks`, hash `1570663e`, entry 1387: **Cruel Fortune**.
- Description key `loc_talent_psyker_mark_weakspot_stacks_description`, hash `40c93869`, entry 4201.

Full raw template:

~~~text
Weakspot Kills grant {stacks:%s} additional Stacks of {talent_name:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `talent_name` | `loc_talent_psyker_marked_enemies_passive` | Localized string: Disrupt Destiny; hash `6a38907d`, entry 6922. |
| `stacks` | 3 − 1 = 2 | Number; additional stacks. |

The existing mapping in `scripts/settings/ability/archetype_talents/talents/psyker_talents.lua` L2226-L2235 localizes `talent_name` and sets `stacks = talent_settings.mark_passive.weakspot_stacks - 1`. The accepted total of three therefore displays as two additional stacks. The same-build name and common formatting are reused.

Static reconstruction; not an observed game screen:

~~~text
Weakspot Kills grant 2 additional Stacks of Disrupt Destiny.
~~~

## English comparison

The English describes two additional Disrupt Destiny stacks on Weakspot Kills. Two additional plus the normal one equals the accepted total of three. It does not restate the base Keystone's current-Marked-target requirement; the personal/current-target checks and capped examples must remain in the explanation. This omitted condition is supplementary, rather than an explicit promise that unmarked kills work. No explicit English contradiction is identified.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_mark_weakspot_kills.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845) | [Existing attachment](https://github.com/user-attachments/assets/a3deac9c-bddd-441f-a916-e41eecf9b23e). The icon identifies the talent; it is not mechanism evidence.
