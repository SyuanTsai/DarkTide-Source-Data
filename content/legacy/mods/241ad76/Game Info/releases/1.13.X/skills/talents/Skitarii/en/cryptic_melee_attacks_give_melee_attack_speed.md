# Uncapped Arrestor: source evidence

[繁體中文](../cryptic_melee_attacks_give_melee_attack_speed.md) | [Player description](README.md#cryptic_melee_attacks_give_melee_attack_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_melee_attacks_give_melee_attack_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_melee_attacks_give_melee_attack_speed`; name key `loc_talent_cryptic_melee_attacks_give_melee_attack_speed`; description key `loc_talent_cryptic_melee_attacks_give_melee_attack_speed_desc`. Node `node_f5562b92-4ae9-48d4-8334-06be09bef3ca`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_sweep_finish` with `num_hit_units > 0` adds the `melee_attack_speed = 0.025` buff.
- The buff has `max_stacks = 5`, `duration = 3` and `refresh_duration_on_stack`. The trigger is per completed swing, not per enemy hit.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3189-L3206](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3189-L3206)
- [scripts/settings/talent/talent_settings_cryptic.lua — L594-L598](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L594-L598)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L3176-L3188](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3176-L3188)
- [scripts/utilities/action/action_handler.lua — L402-L423](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L402-L423)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L2382-L2405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2382-L2405)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L1317-L1346](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1317-L1346)

## Example assumptions and limits

- **Stacks**: A melee swing that hits an enemy grants one Melee Attack Speed stack. Hitting multiple enemies still grants only one stack. Each stack gives 2.5%, up to 5 stacks.
- **Duration**: Every trigger resets the 3-second countdown. If you do not trigger it again within 3 seconds, the effect expires.
- **Attack-speed example**: Five stacks give 12.5% Attack Speed. An attack action affected by Attack Speed that originally takes 1 second becomes `1 ÷ 1.125 ≈ 0.889` seconds. An actual full combo also contains other actions.

The timing example applies only to the attack action affected by Attack Speed and assumes no other speed bonuses. It does not describe the duration of an entire combo.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_melee_attacks_give_melee_attack_speed`, hash `7e00e5eb`, entry 8174: **Uncapped Arrestor**.
- Description key `loc_talent_cryptic_melee_attacks_give_melee_attack_speed_desc`, hash `ff4edf3b`, entry 16574.

Full raw template:

~~~text
Successful Melee Attacks grants {melee_attack_speed:%s} Melee Attack Speed for {duration:%s}s. Stacking {stacks:%s} times.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `melee_attack_speed` | `0.025` → `+2.5%` | Percentage with `+` prefix. |
| `duration` | `3` | Number; the template supplies `s`. |
| `stacks` | `5` | Number. |

Display mappings are `cryptic_talents.lua` L2390-L2404. All values reuse the verified settings listed above.

Static reconstruction; not an observed game screen:

~~~text
Successful Melee Attacks grants +2.5% Melee Attack Speed for 3s. Stacking 5 times.
~~~

## English comparison

The English correctly states successful melee attacks, +2.5% Melee Attack Speed, 3 seconds and a 5-stack cap. It does not claim a stack per enemy hit. Per-swing triggering, shared duration refresh and conversion from speed to action time are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_melee_attacks_give_melee_attack_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/8c6107b2-c1ee-4fa6-9465-919f3c4d9d8b). The icon identifies the talent; it is not mechanism evidence.
