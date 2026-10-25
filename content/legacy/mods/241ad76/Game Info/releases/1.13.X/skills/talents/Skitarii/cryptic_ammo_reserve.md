# 彈藥預知(Ammo-Cell Augury)：原始碼依據

[English](en/cryptic_ammo_reserve.md)

[返回玩家說明](README.md#cryptic_ammo_reserve)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_ammo_reserve)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_ammo_reserve`；名稱鍵：`loc_talent_cryptic_ammo_reserve`；描述鍵：`loc_talent_cryptic_ammo_reserve_desc`。
- 節點：`node_d9ef86eb-7750-4ede-8067-2bea7a6a996f`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- ammo_reserve_capacity0.25為additive_multiplier，武器初始化按floor套用；clip_size_modifier另行計算。

## 原始碼依據

- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua：1326–1345](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1345)
- [scripts/settings/talent/talent_settings_cryptic.lua：386–388](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L386-L388)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2162–2168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2162-L2168)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1737–1752](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1737-L1752)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1570–1599](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1570-L1599)

## 算例條件與待確認事項

- **容量算例**：原儲備上限 200 發，變成 200 × (1 + 25%) = 250 發；原本 203 發則計算 253.75，取整為 253 發。若另有 15% 同類容量加成，200 × (1 + 25% + 15%) = 280 發。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`bf4067b1`。
- 中英皆為彈藥儲備；補充為容量上限與取整。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_ammo_reserve.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/d265085f-7abd-4433-adc1-3f0276351436)

圖片僅供技能辨識，不作機制證據。

