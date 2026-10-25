# Voltaic Burst: source evidence

[繁體中文](../cryptic_electrocution_push.md) | [Player description](README.md#cryptic_electrocution_push) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_electrocution_push)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_electrocution_push`; name key `loc_talent_cryptic_electrocution_push`; description key `loc_talent_cryptic_electrocution_push_desc`. Node `node_4f58a882-02f4-4d7d-99f4-d2f5a996a632`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

`on_push_hit` applies the buff within `specific_check` but returns `false`, so it does not start the ProcBuff cooldown. `on_push_finish` instead uses `should_go_on_cooldown` to trigger the cooldown and reset the flag.

`cryptic_electrocution_default` has `duration = 3`, a maximum of one stack, and duration refresh. The `12`-second cooldown is shared by the whole Push, rather than separate for each enemy.

## Fixed source evidence

- [scripts/settings/buff/weapon_buff_templates.lua — L2619-L2674](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L2619-L2674)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L151-L174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L151-L174)
- [scripts/settings/talent/talent_settings_cryptic.lua — L627-L629](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L627-L629)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3449-L3494](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3449-L3494)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2553-L2567](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2553-L2567)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2480-L2504](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2480-L2504)

## Example assumptions and limits

- **Trigger**: When a Push actually staggers an enemy, it applies **3 seconds** of Electrocution to that still-living target. Every qualifying target in the same Push can receive Electrocution.
- **Cooldown**: The **12-second** cooldown starts only after that Push finishes. A missed Push or one that does not stagger an enemy does not start the cooldown.
- **Timing example**: If the Push finishes at **0 seconds**, the next Push able to apply Electrocution is available no earlier than **12 seconds** later. Pushes during the cooldown still retain their ordinary effects.

The example times the cooldown from the end of the qualifying Push. Electrocution uses a single refreshable effect on each target, not a separate 12-second cooldown per enemy.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_electrocution_push`, hash `cfd90f66`, entry 13431: **Voltaic Burst**.
- Description key `loc_talent_cryptic_electrocution_push_desc`, hash `642d90e7`, entry 6513.

Full raw template:

~~~text
Staggering enemies with a Push applies Electrocution, dealing damage and stunning enemies. {cooldown:%s}s Cooldown.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{cooldown:%s}` | `12` | Number; template adds `s` |

The existing display mapping in `scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua` (L2561-L2566) uses the verified `cooldown_duration` value.

Static reconstruction; not an observed game screen:

~~~text
Staggering enemies with a Push applies Electrocution, dealing damage and stunning enemies. 12s Cooldown.
~~~

## English comparison

The English correctly describes Electrocution triggered by staggering enemies with a Push and a 12-second cooldown. It does not state that the cooldown begins on the first target hit or is separate for each enemy. The whole-Push application, living-target condition, three-second effect, refresh, and cooldown starting at Push completion are supplementary details. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_electrocution_push.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030) | [Existing attachment](https://github.com/user-attachments/assets/80106b42-e788-43cb-a07a-ee69f668002f). The icon identifies the talent; it is not mechanism evidence.
