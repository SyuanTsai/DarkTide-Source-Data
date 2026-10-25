# Inexorable Judgement: source evidence

[繁體中文](../zealot_quickness_passive.md) | [Player description](README.md#zealot_quickness_passive) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#zealot_quickness_passive)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `zealot_quickness_passive`; name key `loc_talent_zealot_quickness`; description key `loc_talent_zealot_quickness_desc`. Node `node_86295aae-d8b7-4c66-9862-29d98ae57798`; category Keystone; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The core Keystone attaches a parent proc Buff which converts travelled distance into stacks of `zealot_quickness_counter`: 1 stack per 5 metres, Sprint distance multiplied by 2, maximum 20. The remaining distance short of 5 metres is retained.
- The Buff registers `on_hit` and `on_successful_dodge`. The base node allows only melee/ranged hits to remove counter stacks. Successful Dodges add stacks only with the `zealot_quickness_passive_dodge_stacks` special rule selected.
- On a Melee or Ranged Hit check, if the corresponding Quickness active Buff already exists, the counter is not consumed. Otherwise, removed stacks are added to the 6-second active Buff. Each stack grants +1% Melee Attack Speed, +1% Ranged Attack Speed and +1% Damage, with per-stack dodge speed, distance and dodge cooldown-reset stat modifiers as well.
- There is no stack timeout or periodic decay in the accepted calculation. The counter accumulates movement distance up to its cap. Immediate Toughness restoration on consumption depends on another node outside this list; this base node does not enable that special rule.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L945-L1010](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L945-L1010)
- [scripts/settings/talent/talent_settings_zealot.lua — L556-L561](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L556-L561)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua — L165-L312](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L165-L312)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1164-L1197](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1164-L1197)
- [scripts/utilities/action/action_handler.lua — L356-L429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua — L253-L267](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L253-L267)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua — L945-L1010](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L945-L1010)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua — L1164-L1197](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1164-L1197)

## Example assumptions and limits

- **Building Momentum**: Movement grants 1 Momentum stack per accumulated 5 metres, maximum 20. Sprint distance counts double: reaching full stacks from zero requires 100 metres of ordinary movement or 50 metres of Sprinting.
- **Activation**: A Melee or Ranged Hit consumes current Momentum for a 6-second bonus. You can build the next pool during this bonus, but hits do not refresh the current bonus, consume the next pool or increase the current bonus's stacks.
- **Damage and speed**: Each spent stack grants 1% Damage, 1% Melee Attack Speed and 1% Ranged Attack Speed. At 20 stacks, base damage 100 becomes 100 × 1.2 = 120; an affected 1-second action takes 1 ÷ 1.2 ≈ 0.833 seconds. Other same-stage bonuses add first.
- **Dodge bonuses**: Each stack also adds 0.5% Dodge Distance, shortens consecutive-dodge recovery time by 1%, and multiplies Dodge Speed by 1.005. At 20 stacks, distance is ×1.1, recovery time ×0.8, and speed about 1.005²⁰ ≈ ×1.105.

- A successful Dodge alone does not add base Quickness stacks; the dodge upgrade is required.
- Damage and Attack Speed examples exclude other modifiers. Active dodge stats do not grant additional dodge counts.
- Distance is accumulated frame by frame from character locomotion speed; the example ignores sampling precision and server-update differences.
- The accepted Chinese note at hash `634bdcc4` records movement accumulation and hit-activated attack-speed/firing-speed bonuses in both languages. Exact distance, cap, trigger conditions and extra stats are supplementary. Actual game behavior and presentation remain unobserved.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_zealot_quickness`, hash `5a980ea5`, entry 5876: **Inexorable Judgement**.
- Description key `loc_talent_zealot_quickness_desc`, hash `634bdcc4`, entry 6451.

Full raw template:

~~~text
Moving grants you Momentum (Stacks {max_stacks:%s} times).

When you Hit an Enemy, spend all Momentum, gaining {melee_attack_speed:%s} Melee Attack Speed, {ranged_attack_speed:%s} Ranged Attack Speed, and {damage_modifier:%s} Damage per Stack. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `max_stacks` | 20 | `number`; `talent_settings_3.quickness.max_stacks` |
| `melee_attack_speed` | 0.01 → +1% | `percentage`, `+` prefix; `zealot_quickness_active.stat_buffs.melee_attack_speed` |
| `ranged_attack_speed` | 0.01 → +1% | `percentage`, `+` prefix; corresponding `ranged_attack_speed` |
| `damage_modifier` | 0.01 → +1% | `percentage`, `+` prefix; corresponding `damage` |
| `duration` | 6 | `number`; `zealot_quickness_active.duration` |

The minimal display mapping at `zealot_talents.lua` L945-L1005 uses accepted active-Buff values. The unused `talent_name` entry is not part of this template.

Static reconstruction; not an observed game screen:

~~~text
Moving grants you Momentum (Stacks 20 times).

When you Hit an Enemy, spend all Momentum, gaining +1% Melee Attack Speed, +1% Ranged Attack Speed, and +1% Damage per Stack. Lasts 6s.
~~~

## English comparison

The English describes movement-generated Momentum capped at 20, then hit activation of +1% to both attack speeds and Damage per spent stack for 6 seconds. These match the accepted base behavior. It omits the 5-metre threshold, double Sprint weighting, active-Buff gate, non-decaying counter, dodge stats and lack of the unrelated immediate-Toughness rule; these are supplements. The generic hit wording is qualified by the accepted Melee/Ranged filters, without an explicit conflicting promise.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone/zealot_quickness_passive.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315) | [Existing attachment](https://github.com/user-attachments/assets/0a442a9a-29b1-4a94-b85c-5772f9d85d7c). The icon identifies the talent; it is not mechanism evidence.
