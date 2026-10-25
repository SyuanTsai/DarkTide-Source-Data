# Swift Endurance: source evidence

[繁體中文](../broker_passive_stamina_grants_atk_speed.md) | [Player description](README.md#broker_passive_stamina_grants_atk_speed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_stamina_grants_atk_speed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_stamina_grants_atk_speed`; name key `loc_talent_broker_passive_stamina_grants_atk_speed`; description key `loc_talent_broker_passive_stamina_grants_atk_speed_desc`. Node `node_ba662782-8e5c-4a86-8927-3127d7c3735c`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The `stepped_stat_buff` has `stack_offset = -1`, making the permanent single stack contribute a base stack count of 0. `bonus_stacks = floor(current_stamina)` and `bonus_stacks_max = 2 × max_stamina = 30`. Each step grants `melee_attack_speed = 0.02`.
- The configured `max_stamina = 15` must not be read as a 30% bonus cap: the code explicitly multiplies it by 2 before using it as the stack cap.

## Fixed source evidence

- [scripts/extension_systems/buff/buffs/stepped_stat_buff.lua — L32-L51](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L32-L51)
- [scripts/extension_systems/buff/buffs/buff.lua — L404-L410](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410)
- [scripts/utilities/attack/stamina.lua — L151-L174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L151-L174)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/talent/talent_settings_broker.lua — L347-L350](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L347-L350)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1835-L1870](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1835-L1870)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1363-L1378](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1363-L1378)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L608-L634](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L608-L634)

## Example assumptions and limits

- **Speed bonus**: use your remaining current Stamina. Each whole point grants 2% Melee Attack Speed; the bonus decreases as Stamina falls.
- **Timing example**: 5.8 current Stamina counts as 5 points, granting 10% Attack Speed. An accelerable action normally taking 1 second becomes 1 ÷ 1.1 ≈ 0.91 seconds, rather than a direct 10% time reduction to 0.9 seconds.
- **Cap**: at most 30 points of current Stamina count, giving 60% Attack Speed. Your actual attainable bonus is still limited by your maximum Stamina.

The timing example isolates this effect and uses an action that can be accelerated. Actual reachable stacks remain limited by current and maximum Stamina. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_stamina_grants_atk_speed`, hash `0d4f0d6b`, entry 872: **Swift Endurance**.
- Description key `loc_talent_broker_passive_stamina_grants_atk_speed_desc`, hash `15f411fc`, entry 1424.

Full raw template:

~~~text
{attack_speed_increase:%s} increased Melee Attack Speed for each current Stamina.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{attack_speed_increase:%s}` | `talent_settings.broker_passive_stamina_grants_atk_speed.attack_speed_increase = 0.02` → `+2%` | `percentage`; prefix `+` |

The existing display mapping at `broker_talents.lua` L1367-L1373 reads the per-step Attack Speed increase. The verified 0.02 value is reused.

Static reconstruction; not an observed game screen:

~~~text
+2% increased Melee Attack Speed for each current Stamina.
~~~

## English comparison

The English correctly states +2% Melee Attack Speed for each point of current Stamina. It omits whole-point rounding, the implemented 30-step cap, and the conversion from speed to action time. These are supplementary details.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_stamina_grants_atk_speed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/13f03cfd-6e09-41fe-920e-ad116f1a1548). The icon identifies the talent; it is not mechanism evidence.
