# 精確瞄準(True Aim)：原始碼依據

[English](en/psyker_guaranteed_crit_on_multiple_weakspot_hits.md)

[返回玩家說明](README.md#psyker_guaranteed_crit_on_multiple_weakspot_hits)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_guaranteed_crit_on_multiple_weakspot_hits)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_guaranteed_crit_on_multiple_weakspot_hits`；名稱鍵：`loc_talent_psyker_weakspot_grants_crit`；描述鍵：`loc_talent_psyker_weakspot_grants_crit_once_description`。
- 節點：`node_9674b583-7566-4f0c-a334-99e83f4715b2`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_weakspot_hit後排除damage<=0。同一attack_instigator_unit去重，非投射物分支排除target_index>1。五層啟用guaranteed_ranged_critical_strike，active狀態收到ranged on_critical_strike才finish；沒有一般duration倒數。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3073–3137](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3073-L3137)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1072–1093](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1072-L1093)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：992–1018](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L992-L1018)

## 算例條件與待確認事項

- **算例**：從 0 層開始，五次各自有效的弱點命中為 1 → 2 → 3 → 4 → 5 層；之後觸發的遠程暴擊消耗這組效果。暴擊傷害仍依武器、部位與目標計算，不是固定雙倍。
- 連發武器是否保留同次暴擊序列依各武器共用暴擊設定，不把一次消耗等同只一顆子彈。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2341fb06`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_guaranteed_crit_on_multiple_weakspot_hits.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/4b242d12-87d5-44a8-a2aa-4c1a0f3a2376)

圖片僅供技能辨識，不作機制證據。

