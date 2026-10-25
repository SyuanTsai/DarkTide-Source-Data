# Cower, Miscreants!: source evidence

[繁體中文](../adamant_damage_vs_suppressed.md) | [Player description](README.md#adamant_damage_vs_suppressed) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_damage_vs_suppressed)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_damage_vs_suppressed`; name key `loc_talent_adamant_damage_vs_suppressed`; description key `loc_talent_adamant_damage_vs_suppressed_desc`. Node `node_0bf17803-4dbf-4ffd-8c23-2115ca8b2515`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- `damage_vs_suppressed = 0.25` is added to `damage_stat_buffs` when `is_attacked_unit_suppressed` is true. There is no attack-type condition and no extra timed buff.

## Fixed source evidence

- [scripts/utilities/attack/damage_calculation.lua — L442-L444](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L442-L444)
- [scripts/settings/talent/talent_settings_adamant.lua — L435-L437](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L435-L437)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2110-L2116](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2110-L2116)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2504-L2519](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2504-L2519)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2222-L2246](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2222-L2246)

## Example assumptions and limits

- **Damage example**: Against a Suppressed enemy, this effect alone changes base damage 100 to 100 × 1.25 = 125. With an existing same-stage 20% bonus, damage rises from 120 to 100 × (1 + 20% + 25%) = 145.

- **Scope**: Melee and ranged attacks both qualify. The bonus does not apply when the target is not Suppressed.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_damage_vs_suppressed`, hash `966e20b7`, entry 9726: **Cower, Miscreants!**.
- Description key `loc_talent_adamant_damage_vs_suppressed_desc`, hash `0e174b92`, entry 925.

Full raw template:

~~~text
{damage_vs_suppressed:%s} Damage vs Suppressed Enemies.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| damage_vs_suppressed | talent_settings.damage_vs_suppressed.damage_vs_suppressed = 0.25 | Percentage, + prefix → +25% |

Static reconstruction; not an observed game screen:

~~~text
+25% Damage vs Suppressed Enemies.
~~~

## English comparison

The independently read English agrees with 25% Damage against Suppressed enemies. Melee/ranged coverage, the absence of a timed buff and the additive damage example are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_damage_vs_suppressed.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/a72c3f5b-2dde-48d0-8f5c-1af4ba20a044). The icon identifies the talent; it is not mechanism evidence.
