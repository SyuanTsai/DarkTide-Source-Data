# 殘忍命運(Cruel Fortune)：原始碼依據

[English](en/psyker_mark_weakspot_kills.md)

[返回玩家說明](README.md#psyker_mark_weakspot_kills)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_mark_weakspot_kills)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_mark_weakspot_kills`；名稱鍵：`loc_talent_psyker_mark_weakspot_stacks`；描述鍵：`loc_talent_psyker_mark_weakspot_stacks_description`。
- 節點：`node_9c95d8c4-7304-4a56-a9fa-6a727d553105`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit需親自擊殺current_target，才將hit_weakspot傳給give_stack；weakspot_stacks=3是總數。內部all_weakspot_kills_grant_buff變數名稱不代表所有未標記弱點擊殺也生效。

## 原始碼依據

- [scripts/settings/talent/talent_settings_psyker.lua：16–18](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L16-L18)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：734–755](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L734-L755)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：924–943](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L924-L943)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2221–2240](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2221-L2240)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1625–1648](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1625-L1648)

## 算例條件與待確認事項

- **層數算例**：原有 4 層時，4 + 3 = 7 層；原有 14 層、上限 15 層時，則停在 15 層。
- 算例假設沒有其他修正，尚未遊戲內驗證；本機文字與固定來源版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`40c93869`。
- 同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_mark_weakspot_kills.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/a3deac9c-bddd-441f-a916-e41eecf9b23e)

圖片僅供技能辨識，不作機制證據。

