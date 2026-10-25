# 看破(Anticipation)：原始碼依據

[English](en/psyker_improved_dodge.md)

[返回玩家說明](README.md#psyker_improved_dodge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_improved_dodge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_improved_dodge`；名稱鍵：`loc_talent_psyker_improved_dodge`；描述鍵：`loc_talent_psyker_improved_dodge_description`。
- 節點：`node_1c28e8f1-c647-401d-80f1-38263a6b616b`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- extra_consecutive_dodges=1 直接加在 diminishing_return_start；dodge_linger_time_modifier=.5 為加算倍率，供 Dodge 的延續時間使用。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3065–3072](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3065-L3072)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua：139–158](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L139-L158)
- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua：246–261](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L246-L261)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1515–1549](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1515-L1549)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：881–907](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L881-L907)

## 算例條件與待確認事項

- **算例**：武器原本可連續有效閃避 3 次，變成 3 + 1 = 4 次。若延續時間原本為 0.2 秒，則為 0.2 × 1.5 = 0.3 秒；不代表整個閃避動作時間增加 50%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b7dff1d2`。
- 繁中「有效閃避次數增加至」把增加量寫成新的總數；英文是增加指定次數，實際為原有次數再加 1，不是總共只能閃避 1 次。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_improved_dodge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/80b2261c-4df6-4531-b9c1-bf67fbbbdcee)

圖片僅供技能辨識，不作機制證據。

