# Priority Endowment: source evidence

[繁體中文](../adamant_clip_size.md) | [Player description](README.md#adamant_clip_size) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#adamant_clip_size)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `adamant_clip_size`; name key `loc_talent_adamant_clip_size`; description key `loc_talent_adamant_clip_size_alt_desc`. Node `node_5d52392f-6daa-479c-9104-67a901e69a32`; category Passive talent; one point.

## Source-confirmed behavior and static derivation

- `clip_size_modifier = 0.15`. Dynamic weapon capacity updates use `math.ceil(base_max_clip × modifier)`. Current rounds are rescaled using the previous fill ratio and `math.floor`.
- Initialization in `_apply_stat_buffs` uses `floor`; the subsequent dynamic update corrects the maximum using `ceil`. The initialization alone does not establish an English rounding error.

## Fixed source evidence

- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua — L1426-L1455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1426-L1455)
- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua — L1326-L1343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1343)
- [scripts/settings/talent/talent_settings_adamant.lua — L438-L440](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L438-L440)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua — L2117-L2123](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2117-L2123)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua — L2520-L2535](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2520-L2535)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua — L2196-L2221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2196-L2221)

## Example assumptions and limits

- **Capacity examples**: A base 30-round magazine becomes 30 × 1.15 = 34.5, rounded up to 35 rounds. A base 5-round magazine becomes 5 × 1.15 = 5.75, rounded up to 6 rounds.

- **Scope**: This increases the magazine capacity. Reserve ammunition capacity is determined by other effects.

Values and behavior reuse the verified fixed-version evidence. The examples are static derivations, not in-game tests. English and code evidence both refer to 1.13.1; differences still require an in-game check. Omitted details are supplementary rather than translation errors.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_adamant_clip_size`, hash `da3b1720`, entry 14153: **Priority Endowment**.
- Description key `loc_talent_adamant_clip_size_alt_desc`, hash `5f584f5e`, entry 6184.

Full raw template:

~~~text
{clip_size:%s} Clip Size, rounded up.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| clip_size | talent_settings.clip_size.clip_size_modifier = 0.15 | Percentage, + prefix → +15% |

Static reconstruction; not an observed game screen:

~~~text
+15% Clip Size, rounded up.
~~~

## English comparison

The independently read English agrees with 15% Clip Size and upward rounding in the dynamic capacity calculation. Initialization and current-round rescaling are supplementary; the existing record already distinguishes these from the final maximum. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_clip_size.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852) | [Existing attachment](https://github.com/user-attachments/assets/03af9ca3-e4f4-4383-9650-f8ac659cfadd). The icon identifies the talent; it is not mechanism evidence.
