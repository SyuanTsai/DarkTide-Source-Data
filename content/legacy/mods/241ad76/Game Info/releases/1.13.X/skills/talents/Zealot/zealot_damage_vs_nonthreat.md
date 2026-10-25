# 無形之刃(Unseen Blade)：原始碼依據

[English](en/zealot_damage_vs_nonthreat.md)

[返回玩家說明](README.md#zealot_damage_vs_nonthreat)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_damage_vs_nonthreat)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_damage_vs_nonthreat`；名稱鍵：`loc_talent_zealot_damage_vs_nonthreat`；描述鍵：`loc_talent_zealot_damage_vs_nonthreat_desc`。
- 節點：`node_e35a5d28-2c2c-493c-a5bb-c5c107fccd07`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 共用傷害讀blackboard.perception.target_unit，比較是否不等於attacking_unit；不要求必須有另一名玩家，target_unit為nil時也不等於玩家。damage_vs_nonthreat加進damage_stat_buffs。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2236–2242](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2236-L2242)
- [scripts/settings/talent/talent_settings_zealot.lua：75–77](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L75-L77)
- [scripts/utilities/attack/damage_calculation.lua：428–440](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L428-L440)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2074–2090](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2074-L2090)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1552–1574](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1552-L1574)

## 算例條件與待確認事項

- **傷害算例**：只計本天賦，100 × 1.2 = 120 點；若已有同階段 25% 增傷，則是 100 × (1 + 25% + 20%) = 145 點。敵人改為鎖定你後，這項條件增傷就不成立。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`9ca32fdb`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_damage_vs_nonthreat.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/c97e932c-97b3-454c-9047-2145a5d9a49d)

圖片僅供技能辨識，不作機制證據。

