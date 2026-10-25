# 如夢似幻(Just a Dream)：原始碼依據

[English](en/psyker_damage_to_peril_conversion.md)

[返回玩家說明](README.md#psyker_damage_to_peril_conversion)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_damage_to_peril_conversion)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_damage_to_peril_conversion`；名稱鍵：`loc_talent_psyker_damage_to_peril_conversion`；描述鍵：`loc_talent_psyker_damage_to_peril_conversion_desc`。
- 節點：`node_eaba4084-d11f-424a-872b-69ee649bdd44`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- conditional damage_taken_multiplier=.75，條件current<.97。on_damage_taken使用params.damage_amount+params.toughness_damage_amount，乘.0025與warp_charge_amount，再cap.97；damage.lua回報damage與actual_toughness_damage_dealt。減傷與反噬算例分開固定輸入，不把25%傷害值直接等同轉移反噬量。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1726–1785](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1726-L1785)
- [scripts/settings/talent/talent_settings_psyker.lua：99–101](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L99-L101)
- [scripts/utilities/attack/damage.lua：154–178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L154-L178)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2592–2605](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2592-L2605)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：2055–2081](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L2055-L2081)

## 算例條件與待確認事項

- **減傷算例**：只比較此減傷階段，原本 100 點傷害變成 100 × 0.75 = 75 點。
- **反噬算例**：若該次回報的生命與韌性傷害合計 40 點、無其他反噬修正，增加 40 × 0.25 = 10 個百分點反噬；原為 50% 時到 60%，原為 92% 時最多到 97%。
- params.damage_amount是傷害路徑給出的damage，不是直接讀取前後生命差；混合生命/韌性命中須依完整傷害路徑計算。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`832ffb7a`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_damage_to_peril_conversion.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/b3086f22-3f24-417f-aaba-f59714897616)

圖片僅供技能辨識，不作機制證據。

