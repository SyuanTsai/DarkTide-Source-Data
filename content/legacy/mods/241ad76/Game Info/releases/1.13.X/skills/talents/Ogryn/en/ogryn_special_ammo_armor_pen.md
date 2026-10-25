# Hail of Fire: source evidence

[繁體中文](../ogryn_special_ammo_armor_pen.md) | [Player description](README.md#ogryn_special_ammo_armor_pen) | [Technical index](SOURCE_INDEX.md) | [English comparison](LOCALIZATION_COMPARISON.md#ogryn_special_ammo_armor_pen)

Release 1.13.1; fixed SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`. Talent `ogryn_special_ammo_armor_pen`; name key `loc_talent_ogryn_special_ammo_armor_pen`; description key `loc_talent_ogryn_special_ammo_armor_pen_new_desc`. Node `node_d2b60f6e-1db0-4ccd-b239-75926acb7839`; category Combat ability; one point. Mechanisms and examples reuse verified source evidence; no in-game test was performed.

## Source-confirmed behavior and static derivation

- Special rule `ogryn_combat_armor_pierce` makes stance `start_func` add the armour-pierce proc buff. During the 12s stance it writes shared value 0.15 to `ranged_damage` and `ranged_rending_multiplier`.
- `damage_calculation._rending_multiplier` includes the ranged attribute in attacker total Rending. It then applies `rending_armor_type_multiplier` by target armour. The `armored` weight is 1 and the `overdamage` coefficient is 0.25.
- Without a separately configured attack armour modifier, `power_level_settings.default_armor_damage_modifier` gives `armored` attack modifier 0.5. With no other Rending, adding 0.15 leaves `armor_damage_modifier_lost = 0.5`, greater than `rending_multiplier = 0.15`; the branch uses `armor_damage_modifier + rending_multiplier = 0.65`. The +15% ranged Damage is applied separately.

## Fixed source evidence

- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1553-L1592](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1553-L1592)
- [scripts/settings/talent/talent_settings_ogryn.lua — L114-L117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L114-L117)
- [scripts/settings/talent/talent_settings_ogryn.lua — L194-L203](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L194-L203)
- [scripts/settings/talent/talent_settings_ogryn.lua — L275-L282](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L275-L282)
- [scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua — L93-L110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/ogryn_abilities.lua#L93-L110)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L1851-L1915](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1851-L1915)
- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua — L2353-L2380](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L2353-L2380)
- [scripts/utilities/attack/damage_calculation.lua — L55-L95](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L55-L95)
- [scripts/utilities/attack/damage_calculation.lua — L629-L660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660)
- [scripts/settings/damage/armor_settings.lua — L8-L19](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19)
- [scripts/settings/damage/power_level_settings.lua — L80-L102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L80-L102)
- [scripts/settings/buff/buff_settings.lua — L939-L962](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L939-L962)
- [scripts/utilities/attack/damage_calculation.lua — L64-L84](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L64-L84)
- [scripts/settings/damage/armor_settings.lua — L8-L24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua — L1553-L1592](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1553-L1592)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua — L1318-L1341](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1318-L1341)

## Example assumptions and limits

- **Activation**: During Point-Blank Barrage's 12s effect, gain +15% ranged Damage and 15% Rending.

- **Damage example**: Assume base damage 100, a Carapace target with an original armour modifier of 0.5, and no other modifiers. The original damage is 50; with both this talent's damage bonus and Rending, it is 100 × 1.15 × (0.5 + 0.15) = 74.75.

- **Armour differences**: Rending improves a weapon's damage modifier against particular armour. Once the original modifier reaches 1, only one quarter of the excess is used. Rending is therefore not a uniform +15% final damage bonus.

The fixed-source numerical example assumes an armoured-type target, base armour modifier 0.5, and no other Rending, critical, weakspot or damage modifiers. Different weapon armour modifiers and other attributes change the result. The player example retains its expressly assumed Carapace modifier; 0.5 is not asserted as a universal Carapace value. The 15% is a Rending calculation bonus, not +15% final Health damage against all armour. English and code evidence both correspond to 1.13.1.

<a id="original-english-template-and-reconstruction"></a>

## Original English template and reconstruction

Steam Build `25606770`; `content/localization/ui`, resource hash `63564edcb7c3c5ee`; language `en` (code `0`).

- Name key `loc_talent_ogryn_special_ammo_armor_pen`, hash `4ab8b42e`, entry 4858: **Hail of Fire**.
- Description key `loc_talent_ogryn_special_ammo_armor_pen_new_desc`, hash `5f4e17cf`, entry 6179.

Full raw template:

~~~text
{rending_multiplier:%s} Rending and {damage:%s} Damage to your Ranged Attacks while {ability:%s} is active.
~~~

| Placeholder | Value | Formatting |
|---|---|---|
| rending_multiplier | find_value from ogryn_ranged_stance_armor_pierce.conditional_stat_buffs.ranged_rending_multiplier = 0.15 | Percentage × 100, explicit + prefix → +15% |
| damage | find_value from ogryn_ranged_stance_armor_pierce.conditional_stat_buffs.ranged_damage = 0.15 | Percentage × 100, explicit + prefix → +15% |
| ability | loc_talent_ogryn_combat_ability_special_ammo | Localized name → Point-Blank Barrage |

Referenced name `loc_talent_ogryn_combat_ability_special_ammo`, hash `7e117ab1`, entry 8180: **Point-Blank Barrage**. Only the necessary English display map at L1553–L1592 was read; mechanism evidence was reused.

Static reconstruction; not an observed game screen:

~~~text
+15% Rending and +15% Damage to your Ranged Attacks while Point-Blank Barrage is active.
~~~

## English comparison

The English independently states +15% Rending and +15% Damage for ranged attacks while Point-Blank Barrage is active. These match the accepted attributes and activation condition. Armour-specific Rending consumption, its quarter-strength excess coefficient, 12s parent duration and numerical assumptions supplement the description. The text does not promise a flat final-damage percentage for every armour type. No explicit English contradiction is established.

## Icon source

[Original image](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/ability_modifier/ogryn_special_ammo_armor_pen.webp) | [Media-Assets Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931383354) | [Existing attachment](https://github.com/user-attachments/assets/708231ab-86cd-44b4-8f01-0d0fe8413ede). The icon identifies the talent; it is not mechanism evidence.
