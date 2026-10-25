# 電流標記陣列(Galvanic Marking Array)：原始碼依據

[English](en/cryptic_elite_kills_damage.md)

[返回玩家說明](README.md#cryptic_elite_kills_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_elite_kills_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_elite_kills_damage`；名稱鍵：`loc_talent_cryptic_elite_kills_damage`；描述鍵：`loc_talent_cryptic_elite_kills_damage_desc`。
- 節點：`node_29b1d9ec-b4e1-4045-a28d-45732f7521a8`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- CheckProcFunctions.all(on_ranged_kill,on_elite_kill)，條件是攻擊方式ranged加敵人elite標記，不是敵人ranged標記。
- stack damage0.05 max4，refresh_duration_on_stack及refresh_duration_on_remove_stack皆true；同階段加算。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2219–2236](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2219-L2236)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：96–109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L96-L109)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：216–220](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L216-L220)
- [scripts/utilities/attack/damage_calculation.lua：282–321](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L282-L321)
- [scripts/settings/talent/talent_settings_cryptic.lua：394–398](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L394-L398)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2208–2218](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2208-L2218)
- [scripts/utilities/attack/damage_calculation.lua：232–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1777–1800](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1777-L1800)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：615–644](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L615-L644)

## 算例條件與待確認事項

- **傷害算例**：4 層為 20%，基礎 100 → 100 × 1.20 = 120。從滿層起不再觸發，15、30、45、60 秒後分別剩 3、2、1、0 層。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`768f2807`。
- 繁中「擊殺遠程精英」把遠程修飾成敵人類型，與來源的遠程擊殺條件不同；英文Ranged Elite Kills需按攻擊方式理解。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_elite_kills_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/77cad8a5-5837-45fe-98a7-549e27e5d738)

圖片僅供技能辨識，不作機制證據。

