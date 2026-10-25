# Focused Resolve: source evidence

[繁體中文](../broker_ability_focus_sub_3.md) | [Player description](README.md#broker_ability_focus_sub_3) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_ability_focus_sub_3)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_ability_focus_sub_3`; name key `loc_talent_broker_ability_focus_sub_3`; description key `loc_talent_broker_ability_focus_sub_3_desc`. Node `node_28d7a3c1-58af-42f2-99c4-70b734175557`; category Ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Selecting the talent enables `broker_focus_cooldown_regain`. The improved focus buff's `on_kill` and its specific `on_minion_death` path share the kill handler. Ordinary kills require a death result, a Ranged attack (or a weapon configured as Ranged), and a hit position within 12.5 m of the attacker. The handler does not additionally read the enemy's outline or highlight status.
- A victim with the `elite` or `special` breed tag restores 1 second; other eligible victims restore 0.5 seconds. `template_data.cooldown_restored` accumulates restoration. Each restoration is limited by the amount still available under `max_restore = 5`, giving at most 5 seconds per ability state.
- The ability costs 45 resource and naturally recovers at 1 per second. Natural recovery pauses while the focus buff exists, but `restore_ability_resource` still adds resource directly, capped at full resource. A total restoration of 5 leaves a natural recovery requirement of 45 − 5 = 40 after the state ends.
- The Needle Pistol indirect-kill exception tracks a target that remains alive after a designated Ranged pistol hit during the state. A later death qualifies only with `damage_type = toxin` and a death position within 12.5 m of the current `params.attacking_unit`. This does not cover arbitrary Toxin deaths, and that attacker position is not guaranteed to be the ability owner's position.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L220-L260](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L220-L260)
- [scripts/settings/talent/talent_settings_broker.lua — L119-L141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L119-L141)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua — L37-L65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L37-L65)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L255-L314](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L255-L314)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L398-L450](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L398-L450)
- [scripts/settings/buff/broker_buff_utils.lua — L99-L190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L99-L190)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L306-L318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L306-L318)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L777-L792](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L792)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L1081-L1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua — L839-L884](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L884)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L220-L260](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L220-L260)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L2025-L2047](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2025-L2047)

## Example assumptions and limits

- **Cooldown restored:** during focus, ordinary Close Range Ranged kills restore 0.5 seconds of Ability Cooldown. Elite and Specialist kills restore 1 second.

- **Per-activation cap:** each focus state restores at most 5 seconds: 10 ordinary kills or 5 Elite/Specialist kills reach the cap, and mixed kills stop restoring once their combined total reaches 5 seconds.

- **Cooldown example:** natural recovery is 1 second per second and the base cooldown is 45 seconds. Restoring the full 5 seconds leaves 45 − 5 = 40 seconds of natural recovery after focus ends. Natural recovery pauses during focus, but kill-triggered restoration still adds resource directly.

- **Needle Pistol exception:** a target tracked after a Needle Pistol hit during focus can also restore cooldown if it subsequently dies from Toxin within Close Range. This does not make every Toxin death eligible.

Ordinary eligibility requires a Close Range Ranged kill, without a separate highlight-status check. The Needle Pistol exception has its own tracking, Toxin and distance conditions. Five seconds is the cumulative restoration cap for each focus state; natural recovery remains paused during that state. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_ability_focus_sub_3`, hash `26e4c99d`, entry 2508: **Focused Resolve**.
- Description key `loc_talent_broker_ability_focus_sub_3_desc`, hash `5ba532cd`, entry 5940.

Full raw template:

~~~text
Killing highlighted Enemies restores {cooldown_base:%s}s Ability Cooldown. Elite and Specialist kills instead restore {cooldown_elite:%s}s. {cooldown_max:%s}s Max Cooldown restored.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `cooldown_base` | `broker_focus_stance.sub_3_cooldown_replenish = 0.5` | Number, adaptive decimal formatting → `0.5` |
| `cooldown_elite` | `broker_focus_stance.sub_3_cooldown_replenish_elite = 1` | Number → `1` |
| `cooldown_max` | `broker_focus_stance.sub_3_cooldown_replenish_max = 5` | Number → `5` |

Display mapping: [broker_talents.lua L224–255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L224-L255). Values and adaptive number formatting reuse the accepted evidence.

Static reconstruction; not an observed game screen:

~~~text
Killing highlighted Enemies restores 0.5s Ability Cooldown. Elite and Specialist kills instead restore 1s. 5s Max Cooldown restored.
~~~

## English comparison

The English quantities agree with the accepted ordinary, Elite/Specialist and maximum restoration values. The wording describes highlighted enemies but does not explain the actual Ranged and 12.5 m eligibility checks, the absence of a separate highlight-status check, or the tracked Needle Pistol exception. These omitted conditions, the per-state scope of the cap and paused natural recovery are supplementary explanations; the numerical agreement does not establish eligibility for every way of killing a highlighted enemy.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_focus_sub_3.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534) | [Existing attachment](https://github.com/user-attachments/assets/74d4304b-23f7-4666-879b-62c727596b69). The icon identifies the talent; it is not mechanism evidence.
