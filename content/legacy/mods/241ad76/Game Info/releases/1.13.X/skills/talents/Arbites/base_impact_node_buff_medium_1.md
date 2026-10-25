# 衝擊加成(Impact Boost)：原始碼依據

[English](en/base_impact_node_buff_medium_1.md)

[返回玩家說明](README.md#base_impact_node_buff_medium_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#base_impact_node_buff_medium_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`base_impact_node_buff_medium_1`；名稱鍵：`loc_talent_impact_boost_medium`；描述鍵：`loc_talent_impact_boost_medium_desc`。
- 節點：`node_da43a66a-4f23-41fb-8257-6cf06d157433`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- impact_modifier=.25由stagger_calculation合入衝擊強度；實際踉蹌類型還需比較breed抗性與門檻。

## 原始碼依據

- [scripts/settings/buff/player_buff_templates.lua：901–929](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/player_buff_templates.lua#L901-L929)
- [scripts/utilities/attack/stagger_calculation.lua：67–180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L180)
- [scripts/utilities/attack/stagger_calculation.lua：190–204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L204)
- [scripts/settings/ability/archetype_talents/talents/base_talents.lua：989–1012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/base_talents.lua#L989-L1012)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1127–1156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1127-L1156)

## 算例條件與待確認事項

- **衝擊算例**：單計衝擊倍率，原本 100 單位踉蹌強度變成 100 × (1 + 25%) = 125 單位。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f61917fa`。
- 繁中「衝擊」與英文 Impact 一致，補充與生命傷害的區別。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/stat/base_impact_node_buff_medium_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/e8b31492-509e-479a-9369-203e36e1e1e4)

圖片僅供技能辨識，不作機制證據。

