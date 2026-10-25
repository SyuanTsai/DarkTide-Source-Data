# Weight of the Lex: source evidence

[繁體中文](../adamant_heavy_attacks_increase_damage.md) | [Player description](README.md#adamant_heavy_attacks_increase_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_heavy_attacks_increase_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_heavy_attacks_increase_damage`; name key `loc_talent_adamant_heavy_attacks_increase_damage`; description key `loc_talent_adamant_heavy_attacks_increase_damage_desc`. Node `node_44740858-05d7-46c6-a2f0-a51c3aadadaf`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_sweep_finish` actually checks `params.is_heavy` and `num_hit_units > 0`. A local `is_heavy` variable includes a fallback but is unused by the predicate, so it cannot establish broader trigger coverage. The bonus is `damage = 0.15`, rather than `melee_damage`; it starts after the sweep ends and does not retroactively affect the triggering heavy attack.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L236-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L303-L357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua — L243-L246](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L243-L246)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2547-L2570](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2547-L2570)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L1367-L1386](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1367-L1386)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1599-L1624](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1599-L1624)

## Example assumptions and limits

- **Trigger and refresh**: A heavy melee attack hitting at least one enemy grants 15% Damage for 5s after the sweep ends. Another qualifying heavy hit can reset the duration. The bonus also applies to subsequent ranged attacks.

- **Damage example**: Considering only attacks after the buff becomes active, base damage 100 becomes 100 × (1 + 15%) = 115. With an existing same-stage 25% bonus, 125 becomes 140.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_heavy_attacks_increase_damage`, hash `b17cd91c`, entry 11429: **Weight of the Lex**.
- Description key `loc_talent_adamant_heavy_attacks_increase_damage_desc`, hash `573a8877`, entry 5667.

Full raw template:

```text
Gain {damage:%s} Damage for {duration:%s}s after Heavy Melee Attack.
```

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings.heavy_attacks_increase_damage.damage = 0.15 | Percentage, prefix + → +15% |
| duration | talent_settings.heavy_attacks_increase_damage.duration = 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

```text
Gain +15% Damage for 5s after Heavy Melee Attack.
```

## English comparison

The independently read English agrees with the heavy-melee trigger, general 15% Damage bonus and 5s duration. The hit requirement, sweep-end timing, unused-fallback limitation, refresh and additive examples are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_heavy_attacks_increase_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/bff83e5a-48a0-4f4c-b280-3093df526c5d). The icon identifies the talent; it is not mechanism evidence.
