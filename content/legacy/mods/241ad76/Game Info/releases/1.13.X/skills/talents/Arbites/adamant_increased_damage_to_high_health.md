# 擊殺順序(Target Priority)：原始碼依據

[English](en/adamant_increased_damage_to_high_health.md)

[返回玩家說明](README.md#adamant_increased_damage_to_high_health)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_increased_damage_to_high_health)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_increased_damage_to_high_health`；名稱鍵：`loc_talent_adamant_increased_damage_to_high_health`；描述鍵：`loc_talent_adamant_increased_damage_to_high_health_desc`。
- 節點：`node_2eb48f41-2b1a-42ae-9f0c-e5c6210c9949`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- damage_vs_healthy=.15，實際DamageCalculation以current_health_percent()>HEALTHY_MIN_PERCENTAGE(.75)判定；沒有持续buff。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：35–39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L35-L39)
- [scripts/utilities/attack/damage_calculation.lua：387–390](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L387-L390)
- [scripts/settings/talent/talent_settings_adamant.lua：396–399](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L396-L399)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2335–2342](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2335-L2342)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2646–2664](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2646-L2664)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：2070–2095](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2070-L2095)

## 算例條件與待確認事項

- **傷害算例**：目標最大生命 1000、目前 800 時，基礎 100 點傷害變成 100 × 1.15 = 115 點；目前 750 時仍為 100 點。已有同階段 25% 加成且門檻成立時，125 點變成 140 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`c5936e7c`。
- 繁中「高於…生命值」與英文 above…Health一致；「造成…傷害」較不清楚，但未單憑措辭判錯，主文明寫加成及門檻。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_increased_damage_to_high_health.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/29a7dad3-3f9c-4679-a37d-680025796f47)

圖片僅供技能辨識，不作機制證據。

