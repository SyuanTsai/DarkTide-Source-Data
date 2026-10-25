# 制裁重擊(Prosecution Blow)：原始碼依據

[English](en/adamant_crits_rend.md)

[返回玩家說明](README.md#adamant_crits_rend)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_crits_rend)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_crits_rend`；名稱鍵：`loc_talent_adamant_crits_rend`；描述鍵：`loc_talent_adamant_crits_rend_alt_desc`。
- 節點：`node_939b77d7-9bd1-48a9-8ae6-66beae3686ec`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 實際屬性為ranged_critical_strike_rending_multiplier=0.2。_rending_multiplier按攻擊型態/條件加入；護甲倍率未達1時先填缺口，超出則乘armor overdamage multiplier。不是最終傷害直接乘1+r。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：63–89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L63-L89)
- [scripts/utilities/attack/damage_calculation.lua：629–670](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L670)
- [scripts/settings/damage/armor_settings.lua：8–24](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24)
- [scripts/settings/talent/talent_settings_adamant.lua：376–378](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L376-L378)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3484–3490](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3484-L3490)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2418–2433](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2418-L2433)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1881–1907](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1881-L1907)

## 算例條件與待確認事項

- **護甲算例**：先隔離護甲階段，假設傷害基準 100、甲殼護甲倍率 0.5，原本 50 點變成 100 × (0.5 + 0.2) = 70 點，此階段提高 40%。其他暴擊、弱點與增傷再依各自階段計算。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7ccaaaa3`。
- 繁中與英文均限定遠程暴擊撕裂；作用條件一致，公式為補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_crits_rend.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/e650aa60-14d1-446d-9fa3-fed8dd633716)

圖片僅供技能辨識，不作機制證據。

