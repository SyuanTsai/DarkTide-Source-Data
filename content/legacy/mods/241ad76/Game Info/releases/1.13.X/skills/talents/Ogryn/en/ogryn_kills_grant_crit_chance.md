# Massacre: source evidence

[繁體中文](../ogryn_kills_grant_crit_chance.md) | [Player description](README.md#ogryn_kills_grant_crit_chance) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_kills_grant_crit_chance)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_kills_grant_crit_chance`; name key `loc_talent_ogryn_crit_chance_on_kill`; description key `loc_talent_ogryn_crit_chance_on_kill_desc`. Node `node_3f0606c3-a70e-461e-a487-031ef17650ba`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- An `on_hit` event passing `on_kill` adds the child buff. It has duration 12s, maximum 8 stacks and refresh, with `critical_strike_chance=0.02` per stack.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2119-L2153](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2119-L2153)
- [scripts/settings/talent/talent_settings_ogryn.lua — L230-L234](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L230-L234)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L45-L66](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L45-L66)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L983-L1007](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L983-L1007)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1018-L1045](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1018-L1045)

## Example assumptions and limits

- **Trigger and stacks**: Killing an enemy grants one stack, adding 2 percentage points of Critical Chance per stack, up to 8 stacks, for 12s. Another kill restarts the duration.

- **Chance example**: Starting at 5% Critical Chance, full stacks give `5% + 8 × 2% = 21%`, rather than `5% × 1.16`. The bonus increases Critical Chance; it does not guarantee a critical hit on every attack.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_crit_chance_on_kill`, hash `b46db274`, entry 11632: **Massacre**.
- Description key `loc_talent_ogryn_crit_chance_on_kill_desc`, hash `4e716e92`, entry 5110.

Full raw template:

~~~text
Killing an Enemy grants {crit_chance:%s} Critical Chance for {duration:%s}s. Stacks {max_stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| crit_chance | offensive_1.crit_chance_on_kill = 0.02 | Percentage with explicit + prefix → +2% |
| duration | offensive_1.duration = 12 | Number → 12 |
| max_stacks | offensive_1.max_stacks = 8 | Number → 8 |

Only the missing display mapping in the cited talent definition, lines 983–1007, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
Killing an Enemy grants +2% Critical Chance for 12s. Stacks 8 times.
~~~

## English comparison

The independently read English grants +2% Critical Chance on an enemy kill for 12s, stacking eight times. This matches the accepted per-stack chance, duration and cap. The event filter, duration refresh and addition in percentage points supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_kills_grant_crit_chance.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/7e27b3b4-5eca-49b5-aafd-c8abc6635b14). The icon identifies the talent; it is not mechanism evidence.
