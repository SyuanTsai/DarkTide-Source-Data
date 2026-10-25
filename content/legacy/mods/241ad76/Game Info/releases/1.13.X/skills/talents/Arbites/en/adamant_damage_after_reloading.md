# Withering Fire: source evidence

[繁體中文](../adamant_damage_after_reloading.md) | [Player description](README.md#adamant_damage_after_reloading) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_damage_after_reloading)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_damage_after_reloading`; name key `loc_talent_adamant_damage_after_reloading`; description key `loc_talent_adamant_damage_after_reloading_desc`. Node `node_0ebf45d0-b4da-42ea-8735-1d9c31ac2a9f`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_reload` activates `proc_stat_buffs.ranged_damage = 0.15` for 5s. `allow_proc_while_active` permits duration refresh. `DamageCalculation` adds `ranged_damage − 1` to `damage_stat_buffs`; this is not an independent multiplier on final damage.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L295-L319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L319)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L303-L357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2498-L2512](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2498-L2512)
- [scripts/settings/talent/talent_settings_adamant.lua — L125-L128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L125-L128)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L971-L990](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L971-L990)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L440-L464](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L440-L464)

## Example assumptions and limits

- **Trigger and refresh**: Completing a reload grants 15% Ranged Damage for 5s. Reloading again resets the duration; the damage bonus does not stack.

- **Damage example**: Isolating this stage, base damage 100 becomes 100 × (1 + 15%) = 115. With an existing same-stage 25% bonus, 125 becomes 100 × (1 + 25% + 15%) = 140.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_damage_after_reloading`, hash `8ae492a7`, entry 8987: **Withering Fire**.
- Description key `loc_talent_adamant_damage_after_reloading_desc`, hash `e68c7c57`, entry 14960.

Full raw template:

```text
{damage:%s} Ranged Damage for {duration:%s}s after Reloading.
```

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings.damage_after_reloading.ranged_damage = 0.15 | Percentage, prefix + → +15% |
| duration | talent_settings.damage_after_reloading.duration = 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

```text
+15% Ranged Damage for 5s after Reloading.
```

## English comparison

The independently read English agrees with the reload trigger, ranged bonus and duration. Duration refresh and additive calculation are supplementary details. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_damage_after_reloading.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216) | [Existing attachment](https://github.com/user-attachments/assets/82a4d2c5-a0aa-4c05-a8ea-e03bc0e4932b). The icon identifies the talent; it is not mechanism evidence.
