# Unload: source evidence

[繁體中文](../broker_passive_damage_on_reload.md) | [Player description](README.md#broker_passive_damage_on_reload) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_damage_on_reload)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_damage_on_reload`; name key `loc_talent_broker_passive_damage_on_reload`; description key `loc_talent_broker_passive_damage_on_reload_desc`. Node `node_ba99146a-4a89-452f-8b02-7d6d871b30dd`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `on_reload` adds a 7-second buff. `on_ammo_consumed` accumulates `ammo_usage` only while the secondary slot is wielded; `refresh_func` resets it to zero.
- The formula is `ranged_damage = 0.02 + 0.02 × floor(ammo_spent / (max_ammo_in_clip × 0.1))`, with no clamp on the number of stages. The ordinary reload event is emitted at `refill_ammunition` and does not have to wait for the entire animation to finish.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2067-L2118](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2067-L2118)
- [scripts/extension_systems/weapon/actions/action_reload_state.lua — L91-L116](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_reload_state.lua#L91-L116)
- [scripts/utilities/attack/damage_calculation.lua — L250-L284](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L250-L284)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2057-L2066](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2057-L2066)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L2067-L2138](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2067-L2138)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1660-L1712](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1660-L1712)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L551-L577](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L551-L577)

## Example assumptions and limits

- **How it works**: when a reload refills ammunition, gain a 7-second Damage effect. It starts at 2% Ranged Damage and adds another 2% for every accumulated amount of ammunition spent equal to 10% of magazine capacity. Incomplete stages do not count.
- **Reloading again**: another reload resets the duration and ammunition-spent counter, restarting accumulation from 2%.
- **Damage example**: with a 100-round magazine and 30 rounds spent during the effect, the bonus is 2% + ⌊30 ÷ 10⌋ × 2% = 8%. Base Damage of 100 becomes 108; with an existing 25% bonus at the same stage, it becomes 100 × (1 + 25% + 8%) = 133.
- **Cap explanation**: spending the equivalent of one full magazine gives 22%. Ammunition replenishment that does not reset this effect can allow continued accumulation, so 22% is not a fixed cap.

The Damage example uses a 100-round magazine and the specified ammunition spent during the active effect. It isolates this effect except where the existing 25% same-stage bonus is explicitly included. Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_damage_on_reload`, hash `25a0e32f`, entry 2430: **Unload**.
- Description key `loc_talent_broker_passive_damage_on_reload_desc`, hash `6645de88`, entry 6653.

Full raw template:

~~~text
Reloading your Ranged Weapon grants {damage:%s} Ranged Damage for {duration:%s}s. Each {ammo_per_stack:%s} of magazine spent during the duration grants {damage_per_stack:%s} additional Ranged Damage.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{damage:%s}` | `broker_passive_damage_on_reload_buff.base_damage = 0.02` → `+2%` | `percentage`; prefix `+` |
| `{duration:%s}` | `broker_passive_damage_on_reload_buff.duration = 7` → `7` | `number` |
| `{ammo_per_stack:%s}` | `broker_passive_damage_on_reload_buff.ammo_percentage_per_stage = 0.1` → `10%` | `percentage`; no prefix |
| `{damage_per_stack:%s}` | `broker_passive_damage_on_reload_buff.damage_per_ammo_stage = 0.02` → `+2%` | `percentage`; prefix `+` |

The existing display mapping at `broker_talents.lua` L1664-L1707 reads `base_damage`, `duration`, `ammo_percentage_per_stage`, and `damage_per_ammo_stage` from `broker_passive_damage_on_reload_buff`. Verified values are reused.

Static reconstruction; not an observed game screen:

~~~text
Reloading your Ranged Weapon grants +2% Ranged Damage for 7s. Each 10% of magazine spent during the duration grants +2% additional Ranged Damage.
~~~

## English comparison

The English correctly states the reload trigger, initial 2% Ranged Damage, 7-second duration, and additional 2% per 10% of the magazine spent. It does not specify refill-event timing, complete-stage rounding, reset on another reload, additive Damage combination, or a cap. The accepted formula and the explanation that 22% is not a fixed cap are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_damage_on_reload.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/6849ad32-3ebc-4d11-b980-612b4d23fd94). The icon identifies the talent; it is not mechanism evidence.
