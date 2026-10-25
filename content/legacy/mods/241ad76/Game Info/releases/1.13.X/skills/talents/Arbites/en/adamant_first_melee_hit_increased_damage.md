# The Emperor's Fist: source evidence

[繁體中文](../adamant_first_melee_hit_increased_damage.md) | [Player description](README.md#adamant_first_melee_hit_increased_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_first_melee_hit_increased_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_first_melee_hit_increased_damage`; name key `loc_talent_adamant_first_melee_hit_increased_damage`; description key `loc_talent_adamant_first_melee_hit_increased_damage_desc`. Node `node_bf589f32-33d7-48d4-ae96-2ab3d6a63ee3`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_sweep_start` sets `active = true`. `on_hit` passing `on_melee_hit` sets it false, and `on_sweep_finish` also sets it false. `conditional_stat_buffs` grant `melee_damage = 0.15` and `impact_modifier = 0.3`. The window runs from action start to the first melee-hit event; it is not a permanent `target_number` property.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L295-L319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L319)
- [scripts/utilities/attack/stagger_calculation.lua — L190-L204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L204)
- [scripts/settings/talent/talent_settings_adamant.lua — L492-L495](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L492-L495)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3064-L3094](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3064-L3094)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2831-L2851](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2831-L2851)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2018-L2042](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2018-L2042)

## Example assumptions and limits

- **Trigger**: The first target hit by a melee sweep receives 15% more Melee Damage and 30% more Impact. The effect is consumed after that hit and becomes available again on the next sweep.

- **Separate examples**: Isolating the damage bonus, 100 points of melee damage becomes 115. An original 100 units of stagger strength becomes 130. With an existing same-stage 25% damage bonus, damage is 100 × (1 + 25% + 15%) = 140 points.

Multi-target event ordering within the same update has not been tested in game. The player description follows the accepted sweep-start / first-hit deactivation intent; strict first-target-only runtime coverage remains unconfirmed.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_first_melee_hit_increased_damage`, hash `4dd881a9`, entry 5072: **The Emperor's Fist**.
- Description key `loc_talent_adamant_first_melee_hit_increased_damage_desc`, hash `b13d7bb8`, entry 11414.

Full raw template:

```text
{damage:%s} Melee Damage and {impact:%s} Impact on first Enemy hit with each attack.
```

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings.first_melee_hit_increased_damage.damage = 0.15 | Percentage, + prefix → +15% |
| impact | talent_settings.first_melee_hit_increased_damage.impact = 0.3 | Percentage, + prefix → +30% |

Static reconstruction; not an observed game screen:

```text
+15% Melee Damage and +30% Impact on first Enemy hit with each attack.
```

## English comparison

The independently read English agrees with 15% Melee Damage and 30% Impact. The accepted activation window supports the first-hit intent; strict first-target-only coverage within one multi-target update remains unconfirmed. Event-state reset and separate calculation examples are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_first_melee_hit_increased_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/6f3ef825-f018-482c-b511-60f87907cefc). The icon identifies the talent; it is not mechanism evidence.
