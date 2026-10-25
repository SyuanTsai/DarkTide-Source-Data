# 厚實表皮(Thick Skin)：原始碼依據

[English](en/ogryn_base_tank_passive.md)

[返回基礎效果](BASE_EFFECTS.md#ogryn_base_tank_passive)｜[技術索引](SOURCE_INDEX.md)

- 固定來源：Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 基礎天賦：`ogryn_base_tank_passive`；不占可選天賦點數。
- 證據程度：原始碼確認與程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- tank settings damage_taken_multiplier=.8、toughness_damage_taken_multiplier=.75、damage_taken_while_dodging=.5、dodge_linger_duration=.25。
- conditional_stat_buffs 在 Dodge.is_dodging 時套用 0.5；on_dodge_end 另啟動 0.25 秒 proc_stat_buffs。ProcBuff 先呼叫父類別計算一般／條件屬性，再加入有效的 proc 屬性。damage_taken_multiplier 屬乘法型，因此上一閃避的尾段與下一次閃避重疊時，兩份 0.5 相乘；一般傷害倍率為 0.8 × 0.5 × 0.5 = 0.2，韌性再乘 0.75 為 0.15。這是程式推導，未作遊戲內測量。
- static_movement_reduction_multiplier=0只消除weapon_template.static_speed_reduction_mod的減速差值，其他weapon_action/alternate_fire乘數獨立。

## 原始碼依據

- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L5-L11)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L57-L81)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1496-L1512)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L626)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L467-L504)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/archetype/archetypes/ogryn_archetype.lua#L50-L74)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L299)
- [固定版本來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L775-L775)

## 算例與待確認事項

- 傷害例只隔離所列階段；敵人攻擊、韌性穿透、腐敗與特殊傷害可能有其他路徑。
- 本機文字 Build 25606770 與固定公開來源版本對應為1.13.1。
