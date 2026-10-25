# 炸彈使者(Boom Bringer)：原始碼依據

[English](en/broker_blitz_missile_launcher.md)

[返回玩家說明](README.md#broker_blitz_missile_launcher)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_blitz_missile_launcher)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_blitz_missile_launcher`；名稱鍵：`loc_talent_broker_blitz_missile_launcher`；描述鍵：`loc_talent_broker_blitz_missile_launcher_desc`。
- 節點：`node_71b9436c-eebd-417b-b666-9df1a19c2db7`；分類：閃擊；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- explosion static_power500，close radius4/radius7，close powerdistribution2800、outer1300；direct impact1800另算，不能把常數直接全數相加成所有敵人的固定傷害。
- talent用空buff_template_name替換blitz regen及tracking identifier；ability only_uses_charges，max2。

## 原始碼依據

- [scripts/settings/talent/talent_settings_broker.lua：191–204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L204)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua：255–269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L255-L269)
- [scripts/settings/projectile/player_projectile_templates.lua：175–190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L175-L190)
- [scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua：187–210](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_grenade_explosion_templates.lua#L187-L210)
- [scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua：156–281](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/archetypes/broker_damage_profile_templates.lua#L156-L281)
- [scripts/utilities/attack/damage_calculation.lua：219–228](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L228)
- [scripts/utilities/attack/damage_calculation.lua：69–109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L109)
- [scripts/settings/damage/power_level_settings.lua：7–29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29)
- [scripts/utilities/attack/damage_profile.lua：386–445](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L445)
- [scripts/settings/talent/talent_settings_broker.lua：191–205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L191-L205)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4253–4295](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4253-L4295)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1673–1717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1673-L1717)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：718–749](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L718-L749)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：295–322](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L295-L322)

## 算例條件與待確認事項

- **傷害算例**：以未受其他修正、未衰減的內圈爆炸計，基礎傷害為 20 × (500 × 2800 ÷ 10000) = 2800。打到無甲部位套 1.25 倍為 3500，甲殼部位套 2.4 倍為 6720。這些數字不含飛彈直擊、部位、敵人特殊減傷或其他天賦。
- 距離衰減、直擊部位及敵人減傷未以遊戲實測取得完整傷害表。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`fad7e488`。
- 兩語均描述飛彈及攜帶上限；爆炸範圍、分段傷害與恢復方式為補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/tactical/broker_blitz_missile_launcher.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/3b4df232-3b49-4f84-98c0-2b3e8828f917)

圖片僅供技能辨識，不作機制證據。

