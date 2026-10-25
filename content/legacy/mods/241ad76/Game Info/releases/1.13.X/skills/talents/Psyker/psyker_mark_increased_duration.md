# 持久影響(Lingering Influence)：原始碼依據

[English](en/psyker_mark_increased_duration.md)

[返回玩家說明](README.md#psyker_mark_increased_duration)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_mark_increased_duration)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_mark_increased_duration`；名稱鍵：`loc_talent_psyker_mark_increased_duration`；描述鍵：`loc_talent_psyker_mark_increased_duration_description`。
- 節點：`node_0ee8a9f7-a62a-4bd7-996e-050a9f445d10`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 選 increased_duration 時改用duration=10的clone，保留15層上限及refresh_duration_on_stack/remove_stack=true。if increased_stacks優先於elseif increased_duration，不能逕自組成25層且10秒的新變體。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：820–830](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L820-L830)
- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：973–995](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L973-L995)
- [scripts/extension_systems/buff/buff_extension_base.lua：635–663](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L635-L663)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2139–2174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2139-L2174)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1498–1523](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1498-L1523)

## 算例條件與待確認事項

- **時間算例**：原有 3 層且之後都沒有重新計時，會在約 10、20、30 秒依序減至 2、1、0 層；原本約需 5 × 3 = 15 秒，現在約需 10 × 3 = 30 秒。
- 算例假設沒有其他修正，尚未遊戲內驗證；本機文字與固定來源版本對應為1.13.1。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`cacfbe0c`。
- 同描述鍵的繁中與英文效果方向一致；未列完整公式與上限不視為誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/keystone_modifier/psyker_mark_increased_duration.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928024966)｜[圖片附件](https://github.com/user-attachments/assets/d2b37d6f-6054-462c-ba12-5583c59bceb8)

圖片僅供技能辨識，不作機制證據。

