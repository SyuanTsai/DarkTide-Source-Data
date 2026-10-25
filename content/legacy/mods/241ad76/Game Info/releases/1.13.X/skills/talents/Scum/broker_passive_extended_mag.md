# 軍火商(Ammo Jack)：原始碼依據

[English](en/broker_passive_extended_mag.md)

[返回玩家說明](README.md#broker_passive_extended_mag)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_extended_mag)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_extended_mag`；名稱鍵：`loc_talent_broker_passive_extended_mag`；描述鍵：`loc_talent_broker_passive_extended_mag_desc`。
- 節點：`node_42f02425-b59e-44b5-8eac-c4ae72c9bc1a`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- clip_size_modifier=.15；weapon extension持續更新用ceil(base_max_clip*modifier)，目前彈藥按原比例floor轉換。裝備初始化另有floor，但正常更新再對齊ceil容量。

## 原始碼依據

- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua：1428–1452](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1428-L1452)
- [scripts/settings/talent/talent_settings_broker.lua：313–315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L313-L315)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1342–1348](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1342-L1348)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1395–1410](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1395-L1410)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1429–1455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1429-L1455)

## 算例條件與待確認事項

- **容量算例**：原本 30 發，變成 ⌈30 × 1.15⌉ = 35 發；原本 7 發，變成 ⌈7 × 1.15⌉ = 9 發。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`414a3799`。
- 兩語均明確寫出無條件進位，未見矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_extended_mag.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/148db758-02d7-4855-9f45-badcabc7c8cf)

圖片僅供技能辨識，不作機制證據。

