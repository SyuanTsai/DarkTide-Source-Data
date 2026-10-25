# 靈魂竊賊(Soulstealer)：原始碼依據

[English](en/psyker_toughness_on_warp_kill.md)

[返回玩家說明](README.md#psyker_toughness_on_warp_kill)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_toughness_on_warp_kill)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_toughness_on_warp_kill`；名稱鍵：`loc_talent_psyker_toughness_on_warp_kill`；描述鍵：`loc_talent_psyker_toughness_on_warp_kill_desc`。
- 節點：`node_5cdd458f-bbfc-40a3-ac1f-4a229ddbbb6a`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit 透過 on_warp_kill 判斷亞空間傷害類型與死亡結果，使用 replenish_percentage(.075,false)。恢復以最大韌性計算，再套 toughness_replenish_modifier 及 toughness_replenish_multiplier，最後受缺額限制。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1435–1448](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1435-L1448)
- [scripts/settings/talent/talent_settings_psyker.lua：199–204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L199-L204)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：964–979](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L964-L979)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：37–62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L37-L62)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、沒有其他恢復加成時，每次恢復 100 × 7.5% = 7.5 點；若目前為 96，實際補回 100 − 96 = 4 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ffb1d758`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_toughness_on_warp_kill.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/800b3bd1-a9a6-48ba-961c-66e12b256f37)

圖片僅供技能辨識，不作機制證據。

