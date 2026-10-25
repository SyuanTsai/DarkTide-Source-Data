# Retaliatory Force: source evidence

[繁體中文](../adamant_perfect_block_damage_boost.md) | [Player description](README.md#adamant_perfect_block_damage_boost) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_perfect_block_damage_boost)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_perfect_block_damage_boost`; name key `loc_talent_adamant_perfect_block_damage_boost`; description key `loc_talent_adamant_perfect_block_damage_boost_alt_desc`. Node `node_3910099b-f9f7-472c-bbaa-f66e23e67962`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- Persistent `block_cost_multiplier = 0.85`. `on_perfect_block` adds a child with `max_stacks = 1`, refresh, duration 8s, `damage = 0.15` and `attack_speed = 0.15`.
- The speed stat is general `attack_speed`, rather than melee-only `melee_attack_speed`.

## Fixed source evidence

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3386-L3402](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3386-L3402)
- [scripts/utilities/attack/block.lua — L272-L286](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L272-L286)
- [scripts/utilities/attack/damage_calculation.lua — L236-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/utilities/action/action_handler.lua — L356-L428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/settings/talent/talent_settings_adamant.lua — L214-L219](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L214-L219)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3373-L3385](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3373-L3385)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L904-L935](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L904-L935)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2358-L2384](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2358-L2384)

## Example assumptions and limits

- **Block cost**: Block Stamina cost is reduced by 15%. A base cost of 2 Stamina becomes 2 × 0.85 = 1.7 with this effect alone.

- **Perfect Block buff**: Perfect Blocks grant 15% Damage and Attack Speed for 8s. Another Perfect Block resets the duration.

- **Buff examples**: Base damage 100 becomes 115. A 1s action affected by Attack Speed becomes 1 ÷ 1.15 ≈ 0.870s. With an existing same-stage 25% damage bonus, damage is 100 × (1 + 25% + 15%) = 140.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_perfect_block_damage_boost`, hash `70a444b4`, entry 7312: **Retaliatory Force**.
- Description key `loc_talent_adamant_perfect_block_damage_boost_alt_desc`, hash `9349e3e7`, entry 9527.

Full raw template:

~~~text
Gain {block_cost:%s} Reduced Block Cost. On Perfect Block gain {damage:%s} Damage and {attack_speed:%s} Attack Speed for {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| block_cost | talent_settings.perfect_block_damage_boost.block_cost = 0.85 | Custom (1 − value) × 100 overrides percentage conversion; no prefix → 15% |
| damage | talent_settings.perfect_block_damage_boost.damage = 0.15 | Percentage, + prefix → +15% |
| attack_speed | talent_settings.perfect_block_damage_boost.attack_speed = 0.15 | Percentage, + prefix → +15% |
| duration | talent_settings.perfect_block_damage_boost.duration = 8 | Number → 8; template adds s |

Static reconstruction; not an observed game screen:

~~~text
Gain 15% Reduced Block Cost. On Perfect Block gain +15% Damage and +15% Attack Speed for 8s.
~~~

## English comparison

The independently read English places the 15% Block Cost reduction in its own clause and the 15% Damage/Attack Speed bonuses after Perfect Block for 8s, matching the accepted persistent and triggered effects. General Attack Speed scope, refresh and the numerical examples are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_perfect_block_damage_boost.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/96221430-4610-4bf3-9b19-4fd056c99e74). The icon identifies the talent; it is not mechanism evidence.
