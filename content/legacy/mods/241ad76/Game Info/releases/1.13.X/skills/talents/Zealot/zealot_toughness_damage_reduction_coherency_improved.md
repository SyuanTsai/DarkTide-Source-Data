# 恩賜(Benediction)：原始碼依據

[English](en/zealot_toughness_damage_reduction_coherency_improved.md)

[返回玩家說明](README.md#zealot_toughness_damage_reduction_coherency_improved)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_toughness_damage_reduction_coherency_improved)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_toughness_damage_reduction_coherency_improved`；名稱鍵：`loc_talent_zealot_aura_efficiency`；描述鍵：`loc_talent_zealot_toughness_aura_efficiency_desc`。
- 節點：`node_4411a1ae-e625-4cd6-9ae3-403b4a346801`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 天賦定義的 format_values.damage_reduction 由 1−talent_settings_2.coherency.toughness_damage_taken_multiplier 計算。基礎設定 multiplier=0.925；升級設定 multiplier=0.85，max_stacks=1。
- 兩個 buff template 的 coherency_id 都是 zelot_maniac_coherency_aura；基礎 priority=2、升級 priority=1。協同擇優邏輯以數字較小者優先，並把勝出 aura 設為單一 active buff。
- 協同 daisy-chain 建立時把自身 unit 插入集合；coherency extension 逐一檢查集合內來源 buff，因此持有者本身也可收到自己的光環。
- 韌性傷害降低是 toughness_damage_taken_multiplier stat buff；不得簡化成生命值減傷或所有傷害減免。
- 接收端若帶有 prevent_coherency_buffs_from_other_players keyword，通用 coherency selector 只採用同一位玩家來源的 aura；這是接收端例外，本次三個 Zealot aura 定義沒有賦予該 keyword。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：779–827](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L779-L827)
- [scripts/settings/talent/talent_settings_zealot.lua：319–328](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L319-L328)
- [scripts/settings/talent/talent_settings_zealot.lua：381–384](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L381-L384)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：3283–3356](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3283-L3356)
- [scripts/extension_systems/coherency/coherency_system.lua：188–195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L195)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua：256–311](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L256-L311)
- [scripts/utilities/attack/damage_taken_calculation.lua：234–255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L255)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：802–827](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L802-L827)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：459–485](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L459-L485)

## 算例條件與待確認事項

- 單獨比較：100 點韌性傷害 × 0.85 = 85；基礎光環則是 100 × 0.925 = 92.5。
- 若持有者與一名隊友都帶有恩賜，coherency 選擇器仍只選取該 coherency_id 中 priority 較高的同一種升級 buff。
- 算例只隔離此 multiplier；其他韌性傷害修正及傷害計算可能影響最終實際數值。
- max_stacks=1 是每個 buff template 的層數上限；同一 coherency_id 的不同來源另由 unique aura 優先選擇處理。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`90d53110`。
- Build 25606770 的繁中與英文均描述持有者及協同盟友獲得韌性傷害降低；沒有可確認的明確譯錯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/aura/zealot_toughness_damage_reduction_coherency_improved.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/da0a72a9-f944-4291-a753-a8c87b696ad5)

圖片僅供技能辨識，不作機制證據。

