# Frenzied Blows: source evidence

[繁體中文](../ogryn_stacking_attack_speed.md) | [Player description](README.md#ogryn_stacking_attack_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_stacking_attack_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_stacking_attack_speed`; name key `loc_talent_ogryn_stacking_attack_speed_name`; description key `loc_talent_ogryn_stacking_attack_speed_desc`. Node `node_e7226bdd-5733-49a0-9b8a-d938c1526a3c`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- On each `sweep_finish`, the parent increments `chained` after a hit or resets it to zero after a miss. `chained > 1` adds the child.
- The child has maximum 5 stacks, duration 5s with refresh, and `melee_attack_speed=0.025` per stack. A miss exits it.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L3014-L3062](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3014-L3062)
- [scripts/settings/talent/talent_settings_ogryn.lua — L70-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L70-L74)
- [scripts/utilities/action/action_handler.lua — L356-L429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L2089-L2112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2089-L2112)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1770-L1798](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1770-L1798)

## Example assumptions and limits

- **Gaining stacks**: Consecutive melee sweeps hitting enemies grant one stack per sweep starting with the second successful sweep. Hitting multiple enemies in one sweep still grants only one stack.

- **Duration and interruption**: Each stack grants +2.5% melee Attack Speed, up to 5 stacks / 12.5%, for 5s. Further hits refresh the duration; a missed sweep clears the bonus and resets the chain.

- **Speed example**: At full stacks, an Attack-Speed-scaled 1s action becomes `1 ÷ (1 + 5 × 2.5%) ≈ 0.889s`, rather than a direct 12.5% duration reduction to 0.875s.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_stacking_attack_speed_name`, hash `fae480df`, entry 16290: **Frenzied Blows**.
- Description key `loc_talent_ogryn_stacking_attack_speed_desc`, hash `2909d3df`, entry 2658.

Full raw template:

~~~text
{attack_speed:%s} Melee Attack Speed on Chained Hit for {duration:%s}s. Stacks {stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| attack_speed | shared melee_attack_speed = 0.025 | Percentage with explicit + prefix → +2.5% |
| duration | shared duration = 5 | Number → 5 |
| stacks | shared max_stacks = 5 | Number → 5 |

Only the missing display mapping in the cited talent definition, lines 2089–2112, was read. Accepted values, mechanisms and common formatting were reused.

Static reconstruction; not an observed game screen:

~~~text
+2.5% Melee Attack Speed on Chained Hit for 5s. Stacks 5 times.
~~~

## English comparison

The independently read English grants +2.5% melee Attack Speed on a chained hit for 5s, up to five stacks. This agrees with the accepted chain-dependent bonus, value, duration and cap. Starting on the second successful sweep, per-sweep counting, refresh, miss removal and reciprocal action timing supplement the text. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_stacking_attack_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406) | [Existing attachment](https://github.com/user-attachments/assets/5f6d651a-4c88-40ea-a96b-3133459df2f4). The icon identifies the talent; it is not mechanism evidence.
