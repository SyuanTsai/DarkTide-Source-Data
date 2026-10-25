# Final Warning: source evidence

[繁體中文](../adamant_ranged_damage_on_melee_stagger.md) | [Player description](README.md#adamant_ranged_damage_on_melee_stagger) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_ranged_damage_on_melee_stagger)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_ranged_damage_on_melee_stagger`; name key `loc_talent_adamant_ranged_damage_on_melee_stagger`; description key `loc_talent_adamant_ranged_damage_on_melee_stagger_desc`. Node `node_8dfe9968-7413-4940-bd87-0a220eb821e7`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- `on_hit` and `on_push_hit` use `on_staggering_hit`, restricted to melee/push attacks. The helper includes the melee Weakspot special rule used by Concussive. No cooldown is configured, so repeated triggers reset proc time even without `allow_proc_while_active`.

## Fixed source evidence

- [scripts/settings/buff/helper_functions/check_proc_functions.lua — L543-L558](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L543-L558)
- [scripts/utilities/attack/damage_calculation.lua — L317-L319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L317-L319)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L168-L184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L168-L184)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L303-L357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua — L234-L237](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L234-L237)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2064-L2091](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2064-L2091)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2742-L2760](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2742-L2760)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2170-L2195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2170-L2195)

## Example assumptions and limits

- **Trigger and refresh**: Melee attacks or pushes that Stagger an enemy grant 15% Ranged Damage for 5s. Another trigger resets the duration. With Concussive, qualifying melee Weakspot Hits can also trigger it.

- **Damage example**: Base ranged damage 100 becomes 115. With an existing same-stage 25% bonus, damage rises from 125 to 100 × (1 + 25% + 15%) = 140.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_ranged_damage_on_melee_stagger`, hash `eafa6fc0`, entry 15265: **Final Warning**.
- Description key `loc_talent_adamant_ranged_damage_on_melee_stagger_desc`, hash `b76999a7`, entry 11833.

Full raw template:

~~~text
{damage:%s} Ranged Damage on Melee Staggering Hits. Lasts {duration:%s}s.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings.ranged_damage_on_melee_stagger.ranged_damage = 0.15 | Percentage, no prefix → 15% |
| duration | talent_settings.ranged_damage_on_melee_stagger.duration = 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

~~~text
15% Ranged Damage on Melee Staggering Hits. Lasts 5s.
~~~

## English comparison

The independently read English agrees with the melee Stagger trigger, 15% Ranged Damage and 5s duration. Pushes, Concussive Weakspot interaction, repeat-trigger refresh and the additive damage example are supplementary; no explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_ranged_damage_on_melee_stagger.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/75cf7e7e-044e-432f-b7cb-b73e53164425). The icon identifies the talent; it is not mechanism evidence.
