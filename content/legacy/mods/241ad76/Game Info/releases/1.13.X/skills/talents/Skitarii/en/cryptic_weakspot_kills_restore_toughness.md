# Servo-Core Recharge Engine: source evidence

[繁體中文](../cryptic_weakspot_kills_restore_toughness.md) | [Player description](README.md#cryptic_weakspot_kills_restore_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#cryptic_weakspot_kills_restore_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `cryptic_weakspot_kills_restore_toughness`; name key `loc_talent_cryptic_weakspot_kills_restore_toughness`; description key `loc_talent_cryptic_weakspot_kills_restore_toughness_desc`. Node `node_cde25ce6-426b-4efa-891d-739c3293f86e`; category Talent; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The trigger combines `on_kill` and `on_weakspot_hit`.
- Recovery uses `replenish_percentage = 0.05`; there is no duration or cooldown.

## Fixed source evidence

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_cryptic.lua — L367-L369](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L367-L369)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua — L2136-L2149](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2136-L2149)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua — L1698-L1712](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1698-L1712)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua — L2127-L2153](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2127-L2153)

## Example assumptions and limits

- **Trigger**: Killing an enemy with a Weakspot hit immediately restores 5% of maximum Toughness. Both melee and ranged attacks qualify.
- **Recovery example**: At 200 maximum Toughness, each trigger restores `200 × 5% = 10` points. Three consecutive qualifying kills can restore 30 points, capped at maximum Toughness.

The example assumes no other recovery bonuses and enough missing Toughness. The maximum-Toughness cap limits the actual amount restored.

Mechanisms reuse the fixed-version evidence, with local Build 25606770 English text corresponding to 1.13.1. Actual presentation and behavior remain unobserved in game. Missing details are supplementary explanations.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_cryptic_weakspot_kills_restore_toughness`, hash `bd0b9fe9`, entry 12188: **Servo-Core Recharge Engine**.
- Description key `loc_talent_cryptic_weakspot_kills_restore_toughness_desc`, hash `8c1c47d8`, entry 9070.

Full raw template:

~~~text
Weakspot Kills restore {toughness:%s} Toughness.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| `toughness` | `0.05` → `5%` | Percentage; no added prefix. |

The display mapping is `cryptic_talents.lua` L1706-L1711. The value reuses the verified settings above.

Static reconstruction; not an observed game screen:

~~~text
Weakspot Kills restore 5% Toughness.
~~~

## English comparison

The English correctly states Weakspot kills and 5% Toughness recovery, with no melee or ranged restriction. Immediate recovery, the maximum-Toughness basis, absence of a cooldown and cap-limited calculation are supplements. No explicit English contradiction was found.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_weakspot_kills_restore_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628) | [Existing attachment](https://github.com/user-attachments/assets/233341e1-6bfd-4027-9641-610ec8733e45). The icon identifies the talent; it is not mechanism evidence.
