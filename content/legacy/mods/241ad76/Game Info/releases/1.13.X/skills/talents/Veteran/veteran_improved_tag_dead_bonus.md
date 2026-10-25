# 目標擊倒！(Target Down!)：原始碼依據

[English](en/veteran_improved_tag_dead_bonus.md)

[返回玩家說明](README.md#veteran_improved_tag_dead_bonus)｜[技術索引](SOURCE_INDEX.md)

- 來源版本：Release 1.13.1；SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`veteran_improved_tag_dead_bonus`；名稱鍵：`loc_talent_veteran_improved_tag_dead_bonus`；描述鍵：`loc_talent_veteran_improved_tag_dead_bonus_description`。
- [節點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/veteran_tree.lua#L1947-L1969)：`keystone_modifier`，花費 1 點；[天賦定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3021-L3040)。
- 名稱對應沿用翻譯表；未進行遊戲內驗證。

## 死亡判定與受益者

- on_minion_death 僅要求 dying_unit==outlined_unit，沒有擊殺者限制。allied_defense_boost 啟用時，以 stacks_applied×.05 分別呼叫 Toughness.replenish_percentage 與 Stamina.add_stamina_percent。
- CoherencySystem 在建立 daisy chain 時以 new_chain[unit]=coherency_extension 納入本人，再把整個鏈加入 in_coherence_units。因此這個沒有排除 owner 的迴圈同時涵蓋本人與協同成員；不能因函式名稱而誤判只給隊友。
- 韌性呼叫 ignore_stat_buffs=true，不乘一般韌性恢復速率修正；耐力按受益者最大值計算。兩者都限制於缺口。增傷標記到期會清除 outlined_unit，因此不再符合死亡事件。
- 算例：4 層→.20，韌性 100×.20=20；耐力 6×.20=1.2。另選集中火力後，6 層→.30。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/veteran_talents.lua，第 3021–3040 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/veteran_talents.lua#L3021-L3040)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3286–3309 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3286-L3309)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua，第 200–205 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L200-L205)
- [scripts/utilities/toughness/toughness.lua，第 16–24 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L24)
- [scripts/utilities/attack/stamina.lua，第 102–118 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L118)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3350–3352 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3350-L3352)
- [scripts/extension_systems/coherency/coherency_system.lua，第 188–255 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L188-L255)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua，第 253–285 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua，第 3383–3400 行](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/veteran_buff_templates.lua#L3383-L3400)

## 算例條件與待確認事項

- 玩家頁算例按列出的基礎值及條件計算；未列出的加成、護甲、部位、距離及遊戲更新誤差不納入。
- 靜態推導不等同遊戲實測；名稱識別鍵與既有譯名的對應仍待使用者確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/veteran/keystone_modifier/veteran_improved_tag_dead_bonus.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/6#issuecomment-5922929234)｜[圖片附件](https://github.com/user-attachments/assets/47cc6995-f2fa-407d-9cb0-4dd91fcdc10d)

圖片僅供技能辨識，不作機制證據。

