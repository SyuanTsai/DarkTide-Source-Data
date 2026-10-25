# 死忠(Stalwart)：原始碼依據

[English](en/zealot_fanatic_rage_toughness_on_max.md)

[返回玩家說明](README.md#zealot_fanatic_rage_toughness_on_max)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_fanatic_rage_toughness_on_max)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_fanatic_rage_toughness_on_max`；名稱鍵：`loc_talent_zealot_fanatic_rage_toughness`；描述鍵：`loc_talent_zealot_fanatic_rage_toughness_replenish_desc`。
- 節點：`node_e079e0d7-8d4b-45de-8e6b-5ed57f82c641`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 升級授予 `zealot_fanatic_rage_toughness` special rule。每次 Piety 加層後資源達25時，若目前沒有 `zealot_fanatic_rage_buff`，立即以百分比方式補回0.5最大韌性；若 Fury buff 已在運作，只重新計時 Fury 時間，不重複給這次立即恢復。
- Fury buff 中的條件韌性傷害倍率是0.75，即韌性承傷降低25%；條件函式明確要求 talent resource current_resource 等於 max_resource，兩者均為25。
- 同一滿層條件下，update_func 每秒以 `.02 × dt` 恢復最大韌性百分比。因此有傷害事件維持滿層時可以持續恢復；資源一旦掉離上限，條件承傷修正與週期恢復即不再啟用。
- 沒有額外冷卻。立即恢復發生於 Fury buff 建立時且它原先未啟動；滿層額外事件重新計時 Fury 時不會反覆補50%。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1139–1177](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1139-L1177)
- [scripts/settings/talent/talent_settings_zealot.lua：459–468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L459-L468)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：774–919](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L774-L919)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：921–978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L921-L978)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1330–1353](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1330-L1353)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/utilities/attack/damage_taken_calculation.lua：223–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1139–1177](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1139-L1177)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1330–1353](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1330-L1353)

## 算例條件與待確認事項

- **恢復與減傷算例**：最大韌性 100，啟動時最多補 50 點；滿層維持 8 秒另可補 100 × 2% × 8 = 16 點，均受缺額限制。原本 100 點韌性傷害變成 100 × 0.75 = 75 點。
- 靜態例子假設最大韌性100且沒有同時受到傷害；遊戲中韌性上限、承傷與其他恢復來源會改變實際結果。
- 繁中與英文寫狂怒啟動時觸發一次50%恢復；程式限制為 Fury buff 原本不活動時，且週期效果要 resource 保持滿層。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`efdfa530`。
- 翻譯方向及三項效果方向一致；程式對 50% 的重新計時條件與25層維持條件是更細的觸發限制。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_fanatic_rage_toughness_on_max.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/0fd06e0a-ef14-4228-8cd5-02980c989f05)

圖片僅供技能辨識，不作機制證據。

