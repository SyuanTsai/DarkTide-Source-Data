# 完美主義(Perfectionism)：原始碼依據

[English](en/psyker_mark_increased_max_stacks.md)

[返回玩家說明](README.md#psyker_mark_increased_max_stacks)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_mark_increased_max_stacks)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_mark_increased_max_stacks`；名稱鍵：`loc_talent_psyker_mark_increased_max_stacks`；描述鍵：`loc_talent_psyker_mark_increased_max_stacks_description`。
- 節點：`node_31fbc1eb-b397-449d-adb8-f5c9adb5d883`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- start_func 優先選 increased_stacks 變體；clone 基礎加成後 max_stacks=25，其餘 damage=.01、critical_strike_damage=.02、weakspot_damage=.025、duration=5 與重新計時旗標不變。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：820–830](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L820-L830)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：973–995](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L973-L995)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2103–2138](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2103-L2138)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1449–1474](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1449-L1474)

## 算例條件與待確認事項

- **傷害算例**：25 層提供 25% 一般傷害、50% 暴擊額外傷害與 62.5% 弱點額外傷害。只計一般傷害，100 × (1 + 25%) = 125 點；弱點與暴擊的額外部分需依武器另外計算。
- 算例假設沒有其他修正，尚未遊戲內驗證；本機文字與固定來源版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`781eac6d`。
- 同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_mark_increased_max_stacks.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/d2ef8713-7c0b-4dec-b13a-7f9e6a294435)

圖片僅供技能辨識，不作機制證據。

