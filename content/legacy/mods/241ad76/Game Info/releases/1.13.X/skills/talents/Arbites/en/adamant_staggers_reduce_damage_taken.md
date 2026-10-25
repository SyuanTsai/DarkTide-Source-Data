# Hold the Line: source evidence

[繁體中文](../adamant_staggers_reduce_damage_taken.md) | [Player description](README.md#adamant_staggers_reduce_damage_taken) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_staggers_reduce_damage_taken)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_staggers_reduce_damage_taken`; name key `loc_talent_adamant_staggers_reduce_damage_taken`; description key `loc_talent_adamant_staggers_reduce_damage_taken_alt_desc`. Node `node_4bd3e71e-c621-4727-bedc-141b052cbee5`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- `on_staggering_hit` can accept Concussive's Weakspot condition. Targets with `ogryn` or `monster` tags grant 5 stacks; other targets grant 1. The child buff caps at 5, with `damage_taken_multiplier = 0.97` multiplied per stack.
- The child buff finishes when `on_player_hit_received` has `attack_type = melee`. This predicate has no `damage > 0` or block-result restriction. `Attack` queues the event on the hit player's own buff extension; an ally being hit does not clear these stacks.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3418-L3448](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3418-L3448)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L543-L558](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L543-L558)
- [scripts/utilities/attack/damage_calculation.lua — L587-L614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/utilities/attack/attack.lua — L752-L784](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L752-L784)
- [scripts/extension_systems/buff/buffs/buff.lua — L689-L727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/settings/talent/talent_settings_adamant.lua — L220-L226](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L220-L226)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3403-L3417](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3403-L3417)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L936-L970](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L936-L970)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1067-L1096](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1067-L1096)

## Example assumptions and limits

- **Stacks and removal**: Staggering an ordinary enemy grants 1 stack; Staggering an Ogryn or Monster grants 5, up to a maximum of 5. Another trigger resets the 8s countdown. A received melee hit clears all stacks.

- **Damage-reduction example**: Each stack multiplies damage taken by 0.97. At 5 stacks, 100 × 0.97⁵ ≈ 85.87 points, approximately 14.13% less damage. While active, the effect also reduces ranged damage; a ranged hit does not consume the stacks.

The exact coverage of the English Non-Human Sized category versus the accepted Ogryn/Monster tag set remains unconfirmed. No expanded enemy or mechanism research was performed.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_staggers_reduce_damage_taken`, hash `7186f17f`, entry 7378: **Hold the Line**.
- Description key `loc_talent_adamant_staggers_reduce_damage_taken_alt_desc`, hash `0f55ddc6`, entry 1002.

Full raw template:

```text
Staggering an Enemy grants {normal_stacks:%s} stack(s) of {damage_taken_multiplier:%s} Damage Resistance, on the next Melee hit taken. Stacking {max_stacks:%s} times and lasting {duration:%s}s. Staggering Non-Human Sized Enemies grants {ogryn_stacks:%s} stack(s).
```

| Placeholder | Value | Formatting |
|---|---|---|
| normal_stacks | talent_settings.staggers_reduce_damage_taken.normal_stacks = 1 | Number → 1 |
| ogryn_stacks | talent_settings.staggers_reduce_damage_taken.ogryn_stacks = 5 | Number → 5 |
| max_stacks | talent_settings.staggers_reduce_damage_taken.max_stacks = 5 | Number → 5 |
| damage_taken_multiplier | talent_settings.staggers_reduce_damage_taken.damage_taken_multiplier = 0.97 | Custom (1 − value) × 100 → 3 instead of default percentage conversion; + prefix and % suffix → +3% |
| duration | talent_settings.staggers_reduce_damage_taken.duration = 8 | Number → 8; template adds s |

Static reconstruction; not an observed game screen:

```text
Staggering an Enemy grants 1 stack(s) of +3% Damage Resistance, on the next Melee hit taken. Stacking 5 times and lasting 8s. Staggering Non-Human Sized Enemies grants 5 stack(s).
```

## English comparison

The independently read English agrees with Staggering, the ordinary increment/cap/duration, +3% resistance per stack and the next melee hit as the consuming event. It does not explicitly exclude ranged protection before that event; this broader protection, refresh, event-recipient details, Concussive interaction and multiplicative examples are supplementary. Exact coverage of Non-Human Sized versus Ogryn/Monster tags remains unconfirmed. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_staggers_reduce_damage_taken.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/fd423ddb-0080-4603-8fd7-90257b583c3d). The icon identifies the talent; it is not mechanism evidence.
