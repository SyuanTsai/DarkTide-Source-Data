# 報復時間(Payback Time)：原始碼依據

[English](en/ogryn_revenge_damage.md)

[返回玩家說明](README.md#ogryn_revenge_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_revenge_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_revenge_damage`；名稱鍵：`loc_talent_ogryn_revenge_damage`；描述鍵：`loc_talent_ogryn_revenge_damage_new_desc`。
- 節點：`node_dc6e3ffa-e5cb-4993-a914-04445d983656`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 事件on_player_hit_received與on_successful_dodge共用CheckProcFunctions.on_melee_hit；proc判斷damage>0或damage_absorbed>0或無damage欄的dodge。child damage .15 max1 duration5 refresh。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：1726–1773](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L1726-L1773)
- [scripts/settings/talent/talent_settings_ogryn.lua：365–368](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L365-L368)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：368–374](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L374)
- [scripts/utilities/attack/damage_calculation.lua：278–300](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L300)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1221–1241](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1221-L1241)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1046–1071](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1046-L1071)

## 算例條件與待確認事項

- **傷害算例**：基礎 100 點變成 115 點；同階段已有 20% 加成時，則為 100 × (1 + 20% + 15%) = 135 點。
- 本機中英只寫Attack；固定SHA多了近戰觸發限制，實際觸發條件待遊戲內核對，列跨來源待核，不判繁中誤譯。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2474ccf6`。
- 同源繁中與英文都沒有近戰限制，固定程式共用on_melee_hit篩選。實際表現待遊戲內核對，不單憑此判定繁中誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_revenge_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/5d6152a6-dedb-49c4-a7d2-328d082084c0)

圖片僅供技能辨識，不作機制證據。

