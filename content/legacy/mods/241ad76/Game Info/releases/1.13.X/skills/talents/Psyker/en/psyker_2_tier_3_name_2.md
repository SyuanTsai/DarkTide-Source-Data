# Psykinetic's Aura: source evidence

[繁體中文](../psyker_2_tier_3_name_2.md) | [Player description](README.md#psyker_2_tier_3_name_2) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#psyker_2_tier_3_name_2)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `psyker_2_tier_3_name_2`; name key `loc_talent_psyker_elite_kills_give_combat_ability_cd_coherency`; description key `loc_talent_psyker_cooldown_on_elite_kills_desc`. Node `node_25cef95d-234f-4299-a964-2ca42056cb5a`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The passive listens for `on_minion_death`; only `tags.elite` or `tags.special` pass. On the server it also requires `attacking_unit == template_context.unit`, then adds `psyker_cooldown_buff` only to the owner's own `buff_extension`.
- That buff lasts 3 seconds, has `max_stacks=1`, and refreshes its duration on reapplication. Its `timer` starts at the fixed time plus 1. Whenever `t > timer`, `timer` advances by 1 and `restore_ability_resource("combat_ability", 0.5)` is called. Each tick therefore restores 0.5 cooldown-resource units directly.
- At one-second intervals, the three-second period gives approximately three ticks and a total of 1.5 seconds of cooldown resource. The exact third-tick/expiry boundary remains unobserved in game; the accepted update-order evidence below establishes the normal-update derivation.
- Although `start_func` stores `coherency_extension`, this proc path does not use it to iterate over teammates.
- The accepted expiry update order is: `Buff.update` first checks duration, then runs the template's `update_func`. Even if the duration check flags the effect as ended in that update, `BuffExtensionBase` removes it only after all `Buff.update` calls finish. With normal fixed updates, when `t` exceeds the third one-second timer point, the third 0.5-second recovery occurs before removal of the three-second effect.
- If a single update crosses multiple one-second timer points, the template uses a single `if` rather than a loop, so it does not catch up with multiple recovery ticks in that one update.

## Fixed source evidence

- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L839-L880](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L880)
- [scripts/extension_systems/buff/buff_extension_base.lua — L187-L206](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L206)
- [scripts/extension_systems/buff/buffs/buff.lua — L29-L48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L48)
- [scripts/extension_systems/buff/buffs/buff.lua — L103-L127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L103-L127)
- [scripts/extension_systems/buff/buffs/buff.lua — L305-L327](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L305-L327)
- [scripts/extension_systems/buff/player_unit_buff_extension.lua — L131-L145](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1414-L1433](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1414-L1433)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1658-L1687](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1658-L1687)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua — L1689-L1720](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1689-L1720)
- [scripts/settings/talent/talent_settings_psyker.lua — L39-L42](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L39-L42)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua — L1414-L1433](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1414-L1433)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua — L718-L746](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L718-L746)

## Example assumptions and limits

- **Trigger**: After personally killing an Elite or Specialist Enemy, gain an extra 0.5 seconds of Combat Ability cooldown recovery about once per second for 3 seconds. Triggering it again resets the effect's duration without increasing the amount restored by each tick.

- **Cooldown example**: With 20 seconds remaining, after 1 second of normal recovery and one extra recovery tick, the remaining cooldown becomes `20 − 1 − 0.5 = 18.5` seconds.

- **Full recovery amount**: With normal frame-by-frame updates and no interruption, three extra ticks restore `0.5 × 3 = 1.5` seconds in total, in addition to the cooldown time that naturally passes during this interval.

- Triggering still requires an Enemy tagged `elite` or `special`, personally killed by the owner.
- A public-source ability comment mentions teammates in Coherency, but this recovery path restores resources to the trigger owner. Text and source correspond to 1.13.1; actual behavior remains pending in-game comparison.
- A single update handles at most one tick even if it crosses multiple one-second timer points. Under normal fixed updates, the accepted source order yields three recoveries.
- Detailed duration and trigger scope derive from the fixed source and still require comparison with the same game build. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_psyker_elite_kills_give_combat_ability_cd_coherency`, hash `11cf3850`, entry 1154: **Psykinetic's Aura**.
- Description key `loc_talent_psyker_cooldown_on_elite_kills_desc`, hash `eaf79e38`, entry 15263.

Full raw template:

~~~text
{cooldown:%s} Cooldown Regeneneration for {time:%s}s, when you kill an Elite or Specialist Enemy.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `cooldown` | `0.5` | Percentage without a prefix → `50%` |
| `time` | `3` | Number → `3`; the template adds `s` |

Only missing display fields in `psyker_talents.lua` L1414–1427 were read. The accepted cooldown amount 0.5 uses percentage formatting without a prefix to display `50%`; accepted duration 3 uses number formatting. The original spelling `Regeneneration` is retained in both template and reconstruction. Mechanics and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
50% Cooldown Regeneneration for 3s, when you kill an Elite or Specialist Enemy.
~~~

## English comparison

Read independently, the English grants 50% Cooldown Regeneration for 3 seconds after you kill an Elite or Specialist Enemy. The accepted owner-only trigger and three-second effect agree. Under the normal one-second recovery baseline used in the existing example, the extra 0.5 resource per approximately one-second tick corresponds to the stated 50% regeneration bonus. The description does not say that Allies receive it, that it instantly removes 50% of remaining cooldown, or that repeated Kills increase tick strength. Discrete timing, refresh behavior, expiry order and update-delay limits supplement the wording; no explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/ability_modifier/psyker_2_tier_3_name_2.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966) | [Existing attachment](https://github.com/user-attachments/assets/547fa734-789a-404c-9c48-aa1671d3605c). The icon identifies the talent; it is not mechanism evidence.
