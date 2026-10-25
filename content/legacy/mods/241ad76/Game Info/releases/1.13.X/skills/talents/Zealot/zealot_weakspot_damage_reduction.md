# 傲慢(Hubris)：原始碼依據

[English](en/zealot_weakspot_damage_reduction.md)

[返回玩家說明](README.md#zealot_weakspot_damage_reduction)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_weakspot_damage_reduction)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_weakspot_damage_reduction`；名稱鍵：`loc_talent_zealot_weakspot_damage_reduction`；描述鍵：`loc_talent_zealot_weakspot_damage_reduction_desc`。
- 節點：`node_df2f87b7-6abf-45d0-b9a7-bc99a34d5f82`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_kill配on_weakspot_kill，effect單層、4秒、refresh，damage_taken_multiplier=.85。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2115–2151](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2115-L2151)
- [scripts/settings/talent/talent_settings_zealot.lua：60–64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L60-L64)
- [scripts/utilities/attack/damage_calculation.lua：590–610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L590-L610)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2001–2024](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2001-L2024)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1784–1806](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1784-L1806)

## 算例條件與待確認事項

- **持續與算例**：效果不累積層數，再次觸發會重新計時。只計本天賦時，100 × 0.85 = 85 點傷害；另有獨立 25% 減傷時為 100 × 0.85 × 0.75 = 63.75 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b3615f2a`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_weakspot_damage_reduction.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/2ea26a3b-1222-4c56-8120-26a65b4595fa)

圖片僅供技能辨識，不作機制證據。

