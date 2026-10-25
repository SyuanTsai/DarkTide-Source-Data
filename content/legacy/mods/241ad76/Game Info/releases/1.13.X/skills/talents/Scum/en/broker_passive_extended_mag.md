# Ammo Jack: source evidence

[繁體中文](../broker_passive_extended_mag.md) | [Player description](README.md#broker_passive_extended_mag) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#broker_passive_extended_mag)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `broker_passive_extended_mag`; name key `loc_talent_broker_passive_extended_mag`; description key `loc_talent_broker_passive_extended_mag_desc`. Node `node_42f02425-b59e-44b5-8eac-c4ae72c9bc1a`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- `clip_size_modifier = 0.15`. Continuous weapon-extension updates use `ceil(base_max_clip × modifier)`, while current ammunition is converted at its original proportion with `floor`. Equipment initialization separately uses `floor`, but normal updates then align capacity to the `ceil` result.

## Fixed source evidence

- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua — L1428-L1452](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1428-L1452)
- [scripts/settings/talent/talent_settings_broker.lua — L313-L315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L313-L315)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua — L1342-L1348](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1342-L1348)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua — L1395-L1410](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1395-L1410)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua — L1429-L1455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1429-L1455)

## Example assumptions and limits

- **Capacity example**: A starting 30-round clip becomes ⌈30 × 1.15⌉ = 35 rounds; a starting 7-round clip becomes ⌈7 × 1.15⌉ = 9 rounds.

- **Scope**: Changes clip capacity without directly increasing the reserve-ammunition maximum. Other bonuses of the same capacity type add first, then the result is rounded up.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_broker_passive_extended_mag`, hash `5fc69f62`, entry 6220: **Ammo Jack**.
- Description key `loc_talent_broker_passive_extended_mag_desc`, hash `414a3799`, entry 4234.

Full raw template:

~~~text
{clip_size:%s} Clip Size, rounded up.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `{clip_size:%s}` | `clip_size_modifier = 0.15` | `percentage`, `+` prefix → `+15%` |

The existing display map at `broker_talents.lua` L1395-L1410 uses the verified clip-size modifier. The reused percentage formatter displays +15%.

Static reconstruction; not an observed game screen:

~~~text
+15% Clip Size, rounded up.
~~~

## English comparison

The English explicitly says Clip Size and “rounded up,” matching the verified modifier and normal capacity update. Reserve-ammunition scope, same-type combination, proportional current-ammunition conversion and the initialization/update distinction supplement it.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_extended_mag.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866) | [Existing attachment](https://github.com/user-attachments/assets/148db758-02d7-4855-9f45-badcabc7c8cf). The icon identifies the talent; it is not mechanism evidence.
