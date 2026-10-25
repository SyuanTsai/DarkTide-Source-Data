# 趁人之危(Cheap Shots)：原始碼依據

[English](en/broker_passive_damage_vs_heavy_staggered.md)

[返回玩家說明](README.md#broker_passive_damage_vs_heavy_staggered)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_damage_vs_heavy_staggered)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_damage_vs_heavy_staggered`；名稱鍵：`loc_talent_broker_passive_damage_vs_heavy_staggered`；描述鍵：`loc_talent_broker_passive_damage_vs_heavy_staggered_desc_02`。
- 節點：`node_f8ac2c83-f6f8-40f2-958d-565a359f0607`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- buff damage_vs_staggered=.1、damage_vs_medium_staggered=.15−.1=.05；damage_calculation對至少medium再加.05。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：446–470](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L446-L470)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2267–2275](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2267-L2275)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1982–2014](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1982-L2014)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1456–1481](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1456-L1481)

## 算例條件與待確認事項

- **傷害算例**：基礎 100 點，輕度踉蹌時為 110，中度或重度為 115；另有同階段 25% 增傷時，後者為 100 × (1 + 25% + 15%) = 140 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6dc4e3b1`。
- 兩語均以15%替換10%的總加成，未見矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_damage_vs_heavy_staggered.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/d6795940-e616-410f-b56b-76593e8a12eb)

圖片僅供技能辨識，不作機制證據。

