# Forge's Bellow: source evidence

[繁體中文](../broker_ability_punk_rage_sub_3.md) | [Player description](README.md#broker_ability_punk_rage_sub_3) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_ability_punk_rage_sub_3)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_ability_punk_rage_sub_3`; name key `loc_talent_broker_ability_punk_rage_sub_3`; description key `loc_talent_broker_ability_punk_rage_sub_3_desc_02`. Node `node_32f5f38d-828f-4993-8fcf-ebd1f1f30199`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Selecting `broker_rage_improved_shout` makes the state's `start_func` and `stop_func` each call the Shout. On stop, the second Shout requires a living character and server-side processing, under the fixed `use_exhaust = false` branch. `shout_radius = 4.5` sets its radius.
- The Shout uses the `broker_rage_shout` target template. Enemies not already Staggered can be forced into Heavy Stagger. A 5-second debuff is also applied to enemies within 4.5 metres.
- The debuff writes only `melee_attack_speed = -0.5`. This additive Attack Speed modifier leaves a speed multiplier of 0.5. Its reciprocal gives an interval 1 / 0.5 = 2 times the original, a 100% increase. The formatted description's +50% interval increase is not equivalent to halved Melee Attack Speed.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L425-L455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L425-L455)
- [scripts/settings/talent/talent_settings_broker.lua — L142-L168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L142-L168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L488-L541](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L488-L541)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L615-L646](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L615-L646)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L715-L729](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L715-L729)
- [scripts/settings/ability/shout_target_templates.lua — L35-L45](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/shout_target_templates.lua#L35-L45)
- [scripts/settings/buff/buff_settings.lua — L860-L864](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L860-L864)
- [scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua — L259-L278](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_melee_attack_action.lua#L259-L278)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L425-L455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L425-L455)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1949-L1971](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1949-L1971)

## Example assumptions and limits

- **Trigger:** Shout once when rage starts; when rage ends, Shout again if you are still alive.

- **Range and Stagger:** each Shout has a 4.5-metre radius and Staggers enemies in range.

- **Enemy slowdown:** each Shout reduces affected enemies' Melee Attack Speed by 50% for 5 seconds. If the original interval is 1 second, half speed gives approximately 1 ÷ 0.5 = 2 seconds between attacks, an increase of 100%, not 50%. This statistic does not modify Ranged Attack Speed.

#### English description erratum

- English says the time between attacks increases by +50%. The verified modifier halves Melee Attack Speed; with this effect alone, the reciprocal interval doubles, increasing by 100%.

The 5-second duration belongs to the enemy slowdown debuff; rage itself has a base 10 seconds and can be extended by Melee hits. The interval example isolates this speed modifier; actual enemy actions still depend on their original animations and other modifiers. Both original languages use the same +50% interval wording, so the Chinese record treated this as a code/text numeric gap rather than a mistranslation. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_ability_punk_rage_sub_3`, hash `fc8121dd`, entry 16400: **Forge's Bellow**.
- Description key `loc_talent_broker_ability_punk_rage_sub_3_desc_02`, hash `aa1fa2de`, entry 10969.

Full raw template:

~~~text
When {punk_rage%s} is activated, unleash a powerful Shout that staggers Enemies and increases the time between their attacks by {attack_speed_reduction:%s} for {duration:%s}s.

When {punk_rage:%s} runs out, shout again.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `punk_rage` | `loc_talent_broker_ability_punk_rage` | Localized string → `Rampage!` (hash `b37505a2`, entry 11575); the first raw occurrence `{punk_rage%s}` is malformed and retained unresolved |
| `attack_speed_reduction` | `improved_shout_enemy_melee_attack_speed = -0.5` | Mapping overrides value with literal `50`; percentage formatter uses that result, explicit plus prefix → `+50%` |
| `duration` | `improved_shout_duration = 5` | Number → `5` |

Display mapping: [broker_talents.lua L429–446](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L429-L446). Existing values and formatter behavior are reused. This is a **partial reconstruction**: the first `{punk_rage%s}` lacks the colon used by the second `{punk_rage:%s}`. Its runtime handling is not established, so it is retained literally rather than claimed as an observed or resolved display.

Static reconstruction; not an observed game screen:

~~~text
When {punk_rage%s} is activated, unleash a powerful Shout that staggers Enemies and increases the time between their attacks by +50% for 5s.

When Rampage! runs out, shout again.
~~~

## English comparison

Independently read as an interval statement, English explicitly promises +50% time between attacks. The existing Melee Attack Speed modifier −0.5 instead doubles the isolated interval (+100%), so this is one explicit English numeric contradiction. Start/end Shouts, Stagger and the 5-second debuff agree. Radius, living/server stop conditions, Melee-only scope and animation assumptions are supplements. The malformed first name placeholder's runtime display remains Cannot confirm; the raw template and partial reconstruction preserve it.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_punk_rage_sub_3.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/c23bede2-8365-4a28-9fcf-0aa91847923a). The icon identifies the talent; it is not mechanism evidence.
