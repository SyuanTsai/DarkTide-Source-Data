# 電容極限覆寫(Capacitory Limit Override)：原始碼依據

[English](en/cryptic_redline_rending.md)

[返回玩家說明](README.md#cryptic_redline_rending)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_redline_rending)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_redline_rending`；名稱鍵：`loc_talent_cryptic_power_generation_capacitance_bonuses`；描述鍵：`loc_talent_cryptic_redline_rending_clarified_desc`。
- 節點：`node_251b440a-215d-43dd-971f-a57d019e75ad`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦以 special rule 啟用撕裂加成；設定門檻為3層、rending_multiplier=0.15。
- 極限電容根 buff 只有在修正已選取且目前 cryptic_redline_stack 至少3層時，才啟用 conditional_stat_buffs 中的 rending_multiplier。此 stat buff 直接取設定值0.15，並不依目前層數重複套用。
- buff_settings 將通用 rending_multiplier 定為 additive_multiplier。撕裂參與護甲傷害計算，不能單獨等同最終傷害提高15%。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1506–1530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1506-L1530)
- [scripts/settings/talent/talent_settings_cryptic.lua：350–353](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L350-L353)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：1868–1900](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L1868-L1900)
- [scripts/settings/buff/buff_settings.lua：961–961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L961-L961)
- [scripts/utilities/attack/damage_calculation.lua：122–247](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L122-L247)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1506–1530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1506-L1530)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1218–1240](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1218-L1240)

## 算例條件與待確認事項

- **傷害算例**：只比較護甲階段，假設護甲前傷害100點、原護甲倍率0.5，且該類護甲的撕裂係數為1，原本100 × 0.5 = 50點，生效後為100 × (0.5 + 0.15) = 65點。此例增加30%傷害；不同護甲倍率會有不同增幅，不能直接把所有傷害乘1.15。
- 這是撕裂修正，不是對全部傷害直接乘以1.15。
- 效果只取決於是否達到3層；超過門檻不會增加撕裂數值。
- 以上為固定版程式碼的靜態推演，未在遊戲內實測。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`477f3a77`。
- 繁中字串把 {stacks} 放在主詞位置、{talent_name} 放在數量位置；代入後條件句錯置。同源英文與固定程式均為極限電容至少3層、獲得15%撕裂。這是同一語系資源內可確認的佔位位置錯誤，不是省略計算。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/keystone_modifier/cryptic_redline_rending.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/bd0f7682-079c-4c61-bae6-b759aa2608e9)

圖片僅供技能辨識，不作機制證據。

