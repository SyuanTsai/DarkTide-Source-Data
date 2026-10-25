# 充能完畢(Charged Up)：原始碼依據

[English](en/psyker_empowered_grenades_increased_max_stacks.md)

[返回玩家說明](README.md#psyker_empowered_grenades_increased_max_stacks)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_empowered_grenades_increased_max_stacks)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_empowered_grenades_increased_max_stacks`；名稱鍵：`loc_talent_psyker_increased_empowered_chain_lightning_stacks`；描述鍵：`loc_talent_psyker_increased_empowered_chain_lightning_stacks_description`。
- 節點：`node_56a1da66-78b5-4f11-8b20-967dc92650da`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 實際charges夾在0至max_stack_talent=3。visual buff上限設為3+1，但visual_stack_count回傳min(stack_count,3)，max_stat_stacks=1；額外一層是事件與視覺處理，不是第四次可用充能。

## 原始碼依據

- [scripts/settings/talent/talent_settings_psyker.lua：339–341](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L339-L341)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2245–2269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2245-L2269)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2388–2431](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2388-L2431)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2487–2489](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2487-L2489)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1331–1350](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1331-L1350)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1524–1547](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1524-L1547)

## 算例條件與待確認事項

- **層數算例**：已有 2 層時再取得一層，2 + 1 = 3 層；已有 3 層時再次取得仍維持 3 層。
- 算例假設沒有其他修正，尚未遊戲內驗證；本機文字與固定來源版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`61957b58`。
- 同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_empowered_grenades_increased_max_stacks.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/1918d789-dd64-401d-b985-c99915053691)

圖片僅供技能辨識，不作機制證據。

