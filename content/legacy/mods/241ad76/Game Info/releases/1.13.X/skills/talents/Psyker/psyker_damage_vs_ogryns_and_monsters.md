# 脆弱心智(Vulnerable Minds)：原始碼依據

[English](en/psyker_damage_vs_ogryns_and_monsters.md)

[返回玩家說明](README.md#psyker_damage_vs_ogryns_and_monsters)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_damage_vs_ogryns_and_monsters)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_damage_vs_ogryns_and_monsters`；名稱鍵：`loc_talent_psyker_damage_vs_ogryns_and_monsters`；描述鍵：`loc_talent_psyker_damage_vs_ogryns_and_monsters_desc`。
- 節點：`node_427cefce-0443-4754-becd-ae4967e84f5a`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- damage_vs_ogryn_and_monsters=.2；共用damage以breed標記加入一般damage_stat_buffs，不能把所有大型外觀敵人都當成該標籤。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1834–1840](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1834-L1840)
- [scripts/settings/talent/talent_settings_psyker.lua：116–118](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L116-L118)
- [scripts/utilities/attack/damage_calculation.lua：391–405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L391-L405)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2748–2762](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2748-L2762)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1844–1868](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1844-L1868)

## 算例條件與待確認事項

- **傷害算例**：只比較此增傷階段，其餘倍率固定為 1。基準 100 點、無其他加成時，100 × (1 + 20%) = 120 點；原有 25% 同階段加成時，從 125 變成 100 × (1 + 25% + 20%) = 145 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`454bae2f`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_damage_vs_ogryns_and_monsters.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/f3235e60-41ff-4e15-81eb-172af5ec1f2e)

圖片僅供技能辨識，不作機制證據。

