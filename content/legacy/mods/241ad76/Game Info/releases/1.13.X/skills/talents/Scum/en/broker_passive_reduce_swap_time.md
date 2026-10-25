# Sticky Hands: source evidence

[繁體中文](../broker_passive_reduce_swap_time.md) | [Player description](README.md#broker_passive_reduce_swap_time) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_reduce_swap_time)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_reduce_swap_time`; name key `loc_talent_broker_passive_reduce_swap_time`; description key `loc_talent_broker_passive_reduce_swap_time_desc`. Node `node_977720e3-b06a-4dc7-b27c-497af87a0812`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `wield_speed = 0.4` is permanent. When `alternate_fire.is_active` is false, or the action has the `braced` keyword, `recoil_modifier = -0.1` and `spread_modifier = -0.3` apply.
- The Recoil extension multiplies unsteadiness gain by the modifier and decay by its reciprocal. The Spread extension directly multiplies pitch/yaw.

## Fixed source evidence

- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/extension_systems/recoil/player_unit_weapon_recoil_extension.lua — L90-L110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/recoil/player_unit_weapon_recoil_extension.lua#L90-L110)
- [scripts/extension_systems/spread/player_unit_weapon_spread_extension.lua — L170-L182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/spread/player_unit_weapon_spread_extension.lua#L170-L182)
- [scripts/settings/talent/talent_settings_broker.lua — L223-L227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L223-L227)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L990-L1012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L990-L1012)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L875-L906](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L875-L906)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L999-L1028](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L999-L1028)

## Example assumptions and limits

- **Swap example**: An accelerable swap action that normally takes 1s becomes 1 ÷ 1.4 ≈ 0.71s.

- **Firing control**: While firing from the hip or bracing, the Recoil modifier is ×0.9 and reticle Spread is ×0.7. Ordinary aiming without bracing does not gain these two bonuses.

- **Spread example**: With this effect alone, a 2-degree Spread angle becomes 2 × 0.7 = 1.4 degrees. The Recoil modifier affects unsteadiness accumulation and recovery; actual camera displacement also depends on weapon curves.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_reduce_swap_time`, hash `ac99c027`, entry 11106: **Sticky Hands**.
- Description key `loc_talent_broker_passive_reduce_swap_time_desc`, hash `dd6f6b11`, entry 14367.

Full raw template:

~~~text
{wield_speed:%s} Weapon Swap Speed.
Additionally, gain {recoil:%s} Recoil and {spread:%s} Spread while firing from the hip or bracing.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{wield_speed:%s}` | 0.4 | `percentage`, `+` prefix → `+40%` |
| `{recoil:%s}` | −0.1 | Custom `abs(value) × 100`, `percentage`, `-` prefix → `-10%` |
| `{spread:%s}` | −0.3 | Custom `abs(value) × 100`, `percentage`, `-` prefix → `-30%` |

The existing display map at `broker_talents.lua` L875-L906 uses the verified three values. The reused percentage formatter multiplies ordinary values by 100 and uses custom manipulation results directly.

Static reconstruction; not an observed game screen:

~~~text
+40% Weapon Swap Speed.
Additionally, gain -10% Recoil and -30% Spread while firing from the hip or bracing.
~~~

## English comparison

The English separates permanent Weapon Swap Speed from Recoil and Spread during hip fire or bracing, matching the verified conditions and values. The inverse action-time calculation and the distinction between the Recoil modifier and camera displacement are supplements.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_reduce_swap_time.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/2dfab969-4eb2-4181-aa52-7dc1c8c93f89). The icon identifies the talent; it is not mechanism evidence.
