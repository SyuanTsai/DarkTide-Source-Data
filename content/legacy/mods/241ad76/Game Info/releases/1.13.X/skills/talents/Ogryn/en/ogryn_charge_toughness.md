# Stomping Boots: source evidence

[繁體中文](../ogryn_charge_toughness.md) | [Player description](README.md#ogryn_charge_toughness) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_charge_toughness)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_charge_toughness`; name key `loc_talent_ogryn_toughness_on_bull_rush`; description key `loc_talent_ogryn_toughness_on_bull_rush_desc`. Node `node_6639c593-e867-4ee5-9536-b01124b5aa53`; category Combat ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- The `ogryn_bull_rush_hits_replenish_toughness` passive accepts only `on_hit` with `damage_type = ogryn_lunge` and reads `lunge_character_state.is_lunging`. During the charge it calls `Toughness.replenish_percentage` with value 0.1.
- It uses each `on_hit` event without deduplicating target units. This passive has no additional cooldown.
- Talent settings also contain a separate ability variant named `combat_ability_3`. Its cooldown is not determined by this passive node and is not repeated in the player summary.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1434-L1454](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1434-L1454)
- [scripts/settings/talent/talent_settings_ogryn.lua — L391-L395](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L391-L395)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1819-L1847](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1819-L1847)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L59-L74](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L59-L74)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua — L253-L279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1434-L1454](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1434-L1454)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1244-L1266](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1244-L1266)

## Example assumptions and limits

- **Replenishment condition**: Each enemy hit during the charge restores 10% of maximum Toughness. Hits after the charge ends no longer provide this restoration.

- **Replenishment example**: With maximum Toughness 100, three consecutive qualifying hits and enough missing Toughness restore 100 × 10% × 3 = 30. With a deficit of only 20, restore only 20. Other Toughness replenishment bonuses are calculated separately.

Hits must occur while charging and use charge damage type. Full Toughness does not retain overflow restoration. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_toughness_on_bull_rush`, hash `97ff0c1f`, entry 9819: **Stomping Boots**.
- Description key `loc_talent_ogryn_toughness_on_bull_rush_desc`, hash `59b32c78`, entry 5813. Both [Writer] suffixes are resource metadata.

Full raw template:

~~~text
Replenish {toughness:%s} Toughness per Enemy Hit with {ability:%s}.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| toughness | combat_ability_3.toughness = 0.1 | Percentage × 100, explicit + prefix → +10% |
| ability | loc_talent_ogryn_bull_rush_distance | Localized name → Indomitable |

Referenced name `loc_talent_ogryn_bull_rush_distance`, hash `71d7d60a`, entry 7401: **Indomitable**. Only the necessary display map at L1434–L1454 was read; mechanism evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
Replenish +10% Toughness per Enemy Hit with Indomitable.
~~~

## English comparison

The independently read English names Indomitable and a +10% Toughness restoration per enemy hit. These match the accepted lunge-hit event and value. Maximum Toughness as the basis, deficit cap, event counting without target deduplication, is_lunging restriction and absence of a passive cooldown are supplementary. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_charge_toughness.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/0932d1f6-96b1-47d9-ad81-861fe9914d9a). The icon identifies the talent; it is not mechanism evidence.
