# 信仰之勇(Faith's Fortitude)：原始碼依據

[English](en/zealot_additional_wounds.md)

[返回玩家說明](README.md#zealot_additional_wounds)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_additional_wounds)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_additional_wounds`；名稱鍵：`loc_talent_zealot_3_tier_1_ability_3`；描述鍵：`loc_talent_zealot_3_tier_1_ability_3_description`。
- 節點：`node_5b313422-552e-4e6c-b89c-d35acad88fc9`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- extra_max_amount_of_wounds=2，max_wounds把基礎數與extra相加，沒有max_health加成。傷口單格生命=max_health/max_wounds，也會改變以傷口為單位判定的其他天賦。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：1120–1128](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1120-L1128)
- [scripts/settings/talent/talent_settings_zealot.lua：482–484](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L482-L484)
- [scripts/extension_systems/health/player_unit_health_extension.lua：422–427](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/health/player_unit_health_extension.lua#L422-L427)
- [scripts/utilities/health.lua：129–136](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L129-L136)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2804–2820](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2804-L2820)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1000–1025](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1000-L1025)

## 算例條件與待確認事項

- **傷口算例**：最大生命 200、原本 2 格傷口時，每格 200 ÷ 2 = 100；選取後變成 4 格，每格 200 ÷ 4 = 50。它不會把生命值加到 400。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`029afb2e`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_additional_wounds.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/793e953e-5b99-416a-99c8-c6d185df7cc9)

圖片僅供技能辨識，不作機制證據。

