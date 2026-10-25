# Hybrid Combat Covenant: source evidence

[繁體中文](../cryptic_hybrid_damage.md) | [Player description](README.md#cryptic_hybrid_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_hybrid_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_hybrid_damage`; name key `loc_talent_cryptic_hybrid_damage`; description key `loc_talent_cryptic_hybrid_damage_desc`. Node `node_fc9c8c0d-a7fc-4c81-8e39-bdddf1b0078c`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_ranged_kill` grants `melee_damage_buff`; `on_melee_kill` grants `ranged_damage_buff`.
- Each buff has its own maximum of 5 stacks and both duration-refresh flags. Their timers and attack-type damage bonuses are separate.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2597-L2634](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2597-L2634)
- [scripts/utilities/attack/damage_calculation.lua — L295-L319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L319)
- [scripts/settings/talent/talent_settings_cryptic.lua — L460-L467](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L460-L467)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2580-L2596](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2580-L2596)
- [scripts/utilities/attack/damage_calculation.lua — L232-L245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2018-L2054](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2018-L2054)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1264-L1289](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1264-L1289)

## Example assumptions and limits

- **Triggers**: A melee kill adds one Ranged Damage stack; a ranged kill adds one Melee Damage stack. The two effects accumulate separately, each granting 3% per stack, up to 5 stacks.
- **Duration**: Gaining a new stack of either type restarts that type's 8-second countdown. After you stop triggering it, one stack is lost every 8 seconds. Switching weapons does not directly remove accumulated effects.
- **Damage example**: Five Ranged Damage stacks give 15%, taking base shooting damage from 100 to 115. Even if you also have five Melee Damage stacks, that shot still receives only the 15% Ranged Damage bonus.

The damage example isolates these bonuses with no other damage modifiers. Melee and Ranged Damage bonuses do not add together for the same attack.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_hybrid_damage`, hash `4f8c78fb`, entry 5165: **Hybrid Combat Covenant**.
- Description key `loc_talent_cryptic_hybrid_damage_desc`, hash `dc9f61eb`, entry 14308.

Full raw template:

~~~text
Melee Kills increase Ranged Damage by {ranged_damage:%s} for {duration:%s}s. Stacks {stacks:%s} times. Ranged Kills increase Melee Damage by {melee_damage:%s} for {duration_two:%s}s. Stacks {max_stacks:%s} times.

Stacks decay one at a time.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `ranged_damage`, `melee_damage` | `0.03` → `+3%` each | Percentage with `+` prefix. |
| `duration`, `duration_two` | `8` each | Number; the template supplies `s`. |
| `stacks`, `max_stacks` | `5` each | Number. |

Display mappings are `cryptic_talents.lua` L2026-L2053. All values reuse the verified settings listed above.

Static reconstruction; not an observed game screen:

~~~text
Melee Kills increase Ranged Damage by +3% for 8s. Stacks 5 times. Ranged Kills increase Melee Damage by +3% for 8s. Stacks 5 times.

Stacks decay one at a time.
~~~

## English comparison

The English correctly pairs each kill type with the other attack type's damage bonus, gives 3% / 8 seconds / 5 stacks for each and explicitly says stacks decay one at a time. Separate refresh timers, persistence through weapon switching and the attack-type calculation are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_hybrid_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/f8248e1e-3923-42b3-9afb-abed0c3ac1e9). The icon identifies the talent; it is not mechanism evidence.
