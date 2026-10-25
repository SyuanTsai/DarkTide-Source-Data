# 動能偏斜(Kinetic Deflection)：原始碼依據

[English](en/psyker_block_costs_warp_charge.md)

[返回玩家說明](README.md#psyker_block_costs_warp_charge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_block_costs_warp_charge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_block_costs_warp_charge`；名稱鍵：`loc_talent_psyker_block_costs_warp_charge`；描述鍵：`loc_talent_psyker_block_costs_warp_charge_desc`。
- 節點：`node_59a39703-43ce-432e-b853-c80517a08947`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- Block 實作取 block_cost/max_stamina×warp_charge_block_cost×warp_charge_amount；反噬 cap=.97，excess 依 1/warp_charge_block_cost×max_stamina 回換耐力。回換式沒有除 warp_charge_amount，其他反噬減免須照實重算。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1890–1932](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1890-L1932)
- [scripts/settings/talent/talent_settings_psyker.lua：229–231](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L229-L231)
- [scripts/utilities/attack/block.lua：164–200](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L164-L200)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1550–1565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1550-L1565)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1047–1073](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1047-L1073)

## 算例條件與待確認事項

- **格擋算例**：最大耐力 4 點、一次格擋原需 2 點，沒有其他反噬修正時，增加 2 ÷ 4 × 25% = 12.5 個百分點反噬。原為 50% 時變成 62.5%，此次不耗耐力。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`136ee48b`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_block_costs_warp_charge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/e56e3649-507c-4ebb-94fc-58f7eff77aee)

圖片僅供技能辨識，不作機制證據。

