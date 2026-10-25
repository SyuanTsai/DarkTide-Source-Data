# 彈藥腰帶(Ammo Belt)：原始碼依據

[English](en/adamant_ammo_belt.md)

[返回玩家說明](README.md#adamant_ammo_belt)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_ammo_belt)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_ammo_belt`；名稱鍵：`loc_talent_adamant_ammo_belt`；描述鍵：`loc_talent_adamant_ammo_belt_desc`。
- 節點：`node_8cd80a54-2e4c-435c-9cdd-2ff7e4715505`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- ammo_reserve_capacity=.25為加算型倍率，武器套用時以math.floor(baseReserve*capacity_modifier)並限制網路容量上限；clip_size_modifier另行處理。

## 原始碼依據

- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua：1326–1343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1343)
- [scripts/settings/talent/talent_settings_adamant.lua：176–178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L176-L178)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2371–2377](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2371-L2377)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1196–1211](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1196-L1211)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：727–753](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L727-L753)

## 算例條件與待確認事項

- **容量算例**：武器原本可帶 400 發備用彈藥時，變成 400 × (1 + 25%) = 500 發；若原本 101 發，101 × 1.25 = 126.25，容量取整數 126 發。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`76199c1c`。
- 繁中「彈藥容量」與英文 Ammo Capacity 相符；實作限定備用彈藥是資訊補充，不列錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_ammo_belt.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/90c9bff4-baf3-4b53-b160-16945870dd88)

圖片僅供技能辨識，不作機制證據。

