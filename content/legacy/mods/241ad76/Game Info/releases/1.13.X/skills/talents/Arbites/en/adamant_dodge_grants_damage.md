# Arbites Revelatum: source evidence

[繁體中文](../adamant_dodge_grants_damage.md) | [Player description](README.md#adamant_dodge_grants_damage) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_dodge_grants_damage)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_dodge_grants_damage`; name key `loc_talent_adamant_dodge_grants_damage`; description key `loc_talent_adamant_dodge_grants_damage_desc`. Node `node_bdab99db-3a50-4368-a9d7-7dc613f86f2d`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

`on_successful_dodge` activates `damage = 0.15`, with `active_duration = 5` and `allow_proc_while_active`. The damage bonus belongs to the general additive damage-stat stage.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L236-L263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/extension_systems/buff/buffs/proc_buff.lua — L303-L357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua — L382-L385](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L382-L385)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L3548-L3565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3548-L3565)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2700-L2718](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2700-L2718)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L1407-L1435](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1407-L1435)

## Example assumptions and limits

- **Trigger and refresh**: Successfully dodging an enemy attack grants 15% Damage for 5s. Another successful dodge resets the duration. Performing a dodge movement alone does not trigger the effect.

- **Damage example**: With base damage 100 and no other modifiers, damage becomes 100 × (1 + 15%) = 115 points. With an existing same-stage 25% bonus, 125 points becomes 140.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_dodge_grants_damage`, hash `cd99d258`, entry 13289: **Arbites Revelatum**.
- Description key `loc_talent_adamant_dodge_grants_damage_desc`, hash `ad9cd3f2`, entry 11170.

Full raw template:

```text
{damage:%s} Damage for {duration:%s}s after Successful Dodge.
```

| Placeholder | Value | Formatting |
|---|---|---|
| damage | talent_settings.dodge_grants_damage.damage = 0.15 | Percentage; no prefix configured → 15% |
| duration | talent_settings.dodge_grants_damage.duration = 5 | Number → 5; template adds s |

Static reconstruction; not an observed game screen:

```text
15% Damage for 5s after Successful Dodge.
```

## English comparison

The independently read English agrees with the successful-dodge trigger, general damage bonus and duration. Repeat-trigger refresh and additive calculation are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_dodge_grants_damage.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/9a87f145-d4a8-4554-b8ca-f5fbb2a58944). The icon identifies the talent; it is not mechanism evidence.
