# 汲魂者(Souldrinker)：原始碼依據

[English](en/psyker_killing_enemy_with_warpfire_boosts.md)

[返回玩家說明](README.md#psyker_killing_enemy_with_warpfire_boosts)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_killing_enemy_with_warpfire_boosts)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_killing_enemy_with_warpfire_boosts`；名稱鍵：`loc_talent_psyker_nearby_soulblaze_reduced_damage`；描述鍵：`loc_talent_psyker_killing_enemy_with_warpfire_boosts_duration_desc`。
- 節點：`node_4315ba13-1c64-4293-981d-9bd75a1c6612`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_minion_death看死亡時warpfire_burning標記，不要求owner；fallback看本人的warpfire擊殺。死亡管理器發送給valid_enemy_player_units，沒有半徑檢查。buff5秒max1refresh，update固定.15×dt/5。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3303–3356](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3303-L3356)
- [scripts/managers/minion/minion_death_manager.lua：374–398](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/managers/minion/minion_death_manager.lua#L374-L398)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2325–2367](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2325-L2367)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1789–1815](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1789-L1815)

## 算例條件與待確認事項

- **恢復與機率算例**：最大韌性 100、缺額足夠且沒有其他修正時，每秒恢復 100 × 15% ÷ 5 = 3 點；原本 10% 爆擊率變成 10% + 5% = 15%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`3db8d226`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_killing_enemy_with_warpfire_boosts.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/444fd0d1-2a66-48f9-b841-f7bf1bcc6ccf)

圖片僅供技能辨識，不作機制證據。

