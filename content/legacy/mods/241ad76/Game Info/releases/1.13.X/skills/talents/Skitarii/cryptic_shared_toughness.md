# 能量溢流(Power Overflow)：原始碼依據

[English](en/cryptic_shared_toughness.md)

[返回玩家說明](README.md#cryptic_shared_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_shared_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_shared_toughness`；名稱鍵：`loc_talent_cryptic_shared_toughness`；描述鍵：`loc_talent_cryptic_shared_toughness_desc`。
- 節點：`node_942817f8-a5de-4c69-9f24-bd1865adea98`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_toughness_replenished要求reason!=shared、wanted>0、actual_recovered_amount==0、current_percent>=1。用params.amount*0.25對每個非本人coherency_unit呼叫replenish_flat(false,shared)。
- 來源wanted_amount已套本人恢復加成；接收者flat再套接收者加成。不是把任意超額尾數分享。

## 原始碼依據

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：295–322](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L295-L322)
- [scripts/settings/talent/talent_settings_cryptic.lua：494–496](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L494-L496)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2767–2799](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2767-L2799)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2118–2132](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2118-L2132)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：757–782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L757-L782)

## 算例條件與待確認事項

- **分配算例**：自己已滿，接到原本會恢復 20 點的效果，每位隊友各獲得 20 × 25% = 5 點；3 名隊友合計可獲得 15 點，不是把 5 點平分。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0f1a34d2`。
- 英文each與繁中所有皆可包含逐人獲得；補充不平分、部分補滿不觸發，不當成錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_shared_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/dbeb2660-6b6d-4b09-b33a-bd21aef50f59)

圖片僅供技能辨識，不作機制證據。

