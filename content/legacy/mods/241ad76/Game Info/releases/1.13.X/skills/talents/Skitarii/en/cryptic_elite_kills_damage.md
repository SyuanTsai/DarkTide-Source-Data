# Galvanic Marking Array: source evidence

[繁體中文](../cryptic_elite_kills_damage.md) | [Player description](README.md#cryptic_elite_kills_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_elite_kills_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_elite_kills_damage`; name key `loc_talent_cryptic_elite_kills_damage`; description key `loc_talent_cryptic_elite_kills_damage_desc`. Node `node_29b1d9ec-b4e1-4045-a28d-45732f7521a8`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `CheckProcFunctions.all(on_ranged_kill, on_elite_kill)` requires the killing attack to be ranged and the enemy to carry the Elite tag. It does not require the enemy to carry a ranged tag.
- Each stack gives `damage = 0.05`, up to 4 stacks. Both `refresh_duration_on_stack` and `refresh_duration_on_remove_stack` are true. The damage bonus adds within the same calculation stage.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2219-L2236](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2219-L2236)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L96-L109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L96-L109)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L216-L220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L216-L220)
- [scripts/utilities/attack/damage_calculation.lua — L282-L321](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L282-L321)
- [scripts/settings/talent/talent_settings_cryptic.lua — L394-L398](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L394-L398)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2208-L2218](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2208-L2218)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1777-L1800](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1777-L1800)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L615-L644](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L615-L644)

## Example assumptions and limits

- **Trigger**: Killing an Elite enemy **with a ranged attack** grants **1 damage stack**. The target does not need to be a gun-carrying ranged Elite.
- **Stacks and duration**: Each stack adds **5% Damage**, up to **4 stacks**. Another qualifying kill restarts the **15-second countdown**. With no further kills, one stack is lost every 15 seconds.
- **Example**: Four stacks give 20%, turning base damage 100 into `100 × 1.20 = 120`. Starting at full stacks with no further triggers, 3, 2, 1 and 0 stacks remain after 15, 30, 45 and 60 seconds respectively.

#### Chinese original text correction

- The game Chinese says “擊殺遠程精英” (kill ranged Elites), which can suggest a restriction to gun-carrying Elites. This version requires **killing an Elite with a ranged attack**. Killing a gun-carrying Elite in melee does not satisfy that condition.

- The example uses 4 stacks, a 20% bonus and base damage 100, giving 120. If no further trigger occurs from full stacks, they decay to 3/2/1/0 after 15/30/45/60 seconds.
- The original Chinese wording makes ranged modify the enemy type. The English Ranged Elite Kills can describe the attack used to kill an Elite, matching the verified ranged-kill condition. The correction concerns the Chinese original text; it is not an English erratum.
- Actual presentation and behavior remain unobserved in game.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_elite_kills_damage`, hash `ac680fe6`, entry 11098: **Galvanic Marking Array**.
- Description key `loc_talent_cryptic_elite_kills_damage_desc`, hash `768f2807`, entry 7699.

Full raw template:

~~~text
Ranged Elite Kills increase Damage by {damage:%s} for {duration:%s}s. Stacks {stacks:%s} times. Stacks decay one at a time.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `damage` | +5% | `percentage`, prefix `+`: verified `talent_settings.cryptic_elite_kills_damage.damage = 0.05` |
| `duration` | 15 | `number`: verified `talent_settings.cryptic_elite_kills_damage.duration = 15` |
| `stacks` | 4 | `number`: verified `talent_settings.cryptic_elite_kills_damage.max_stacks = 4` |

The display mappings in `cryptic_talents.lua` L1785–L1799 use the already verified per-stack damage, duration and cap.

Static reconstruction; not an observed game screen:

~~~text
Ranged Elite Kills increase Damage by +5% for 15s. Stacks 4 times. Stacks decay one at a time.
~~~

## English comparison

Read independently, Ranged Elite Kills can denote Elite kills made with ranged attacks, matching the accepted conjunction of ranged-kill and Elite-kill checks. The +5% value, 15-second duration, four-stack cap and one-at-a-time decay also agree. The phrase does not unambiguously restrict targets to ranged Elites, so the existing Chinese correction is not an English contradiction. Exact refresh behavior, same-stage addition and decay examples are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_elite_kills_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528) | [Existing attachment](https://github.com/user-attachments/assets/77cad8a5-5837-45fe-98a7-549e27e5d738). The icon identifies the talent; it is not mechanism evidence.
