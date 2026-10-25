# 野火(Wildfire)：原始碼依據

[English](en/psyker_spread_warpfire_on_kill.md)

[返回玩家說明](README.md#psyker_spread_warpfire_on_kill)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_spread_warpfire_on_kill)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_spread_warpfire_on_kill`；名稱鍵：`loc_talent_psyker_warpfire_spread`；描述鍵：`loc_talent_psyker_warpfire_spread_desc`。
- 節點：`node_ebeb44ed-54d4-44f6-a211-f7060668f98a`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 由warp_fire的on_remove_stack_func記錄stacks_on_death=min(死亡前層數,4)，stop_func檢查owner的special rule；實際radius硬寫5，不用PSET殘留distance15。while共用stacks_to_share逐層減少；目標現有層數>=stacks_on_death就跳過。

## 原始碼依據

- [scripts/settings/buff/weapon_buff_templates.lua：129–230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L129-L230)
- [scripts/settings/talent/talent_settings_psyker.lua：244–248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L244-L248)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1692–1707](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1692-L1707)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：690–717](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L690-L717)

## 算例條件與待確認事項

- **層數算例**：死者有 6 層、附近兩名有效敵人原本都為 0 層時，可分配總数為 min(6,4) = 4，輪流各給 1 層，結果各得 2 層。只有一名有效目標時可得 4 層。
- 中英文都使用每名附近敵人的措辭，與固定源碼共用4層分配池不同；這一點待遊戲內核對，不列為繁中誤譯。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7f4f685e`。
- 繁中「被你的靈魂之火灼燒而亡」把條件縮成火焰擊殺；英文及執行條件是敵人死亡時仍受你的靈魂之火影響，其他攻擊完成擊殺也可觸發。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_spread_warpfire_on_kill.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/1e6189fe-4a6e-4fda-bbe9-e2a38c75ff2a)

圖片僅供技能辨識，不作機制證據。

