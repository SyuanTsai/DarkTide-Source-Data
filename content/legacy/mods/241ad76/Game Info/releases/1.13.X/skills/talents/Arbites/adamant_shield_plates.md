# 盾型裝甲(Shield Plates)：原始碼依據

[English](en/adamant_shield_plates.md)

[返回玩家說明](README.md#adamant_shield_plates)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_shield_plates)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_shield_plates`；名稱鍵：`loc_talent_adamant_shield_plates`；描述鍵：`loc_talent_adamant_shield_plates_alt_desc`。
- 節點：`node_2c04a28e-bcad-4554-b738-37f89f37eee2`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_block加入3秒max_stacks1且refresh的子buff，.15×dt/3；on_perfect_block自訂perfect_t，t>perfect_t才立即replenish(.1)，然後設t+1，互不共用冷卻。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2480–2497](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2480-L2497)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/extension_systems/buff/buff_extension_base.lua：433–468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L433-L468)
- [scripts/settings/talent/talent_settings_adamant.lua：191–196](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L191-L196)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2454–2479](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2454-L2479)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1281–1307](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1281-L1307)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1571–1598](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1571-L1598)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、缺額足夠且沒有其他恢復加成，一次同時觸發兩份效果的完美格擋，共恢復 100 × 10% + 100 × 15% = 25 點；其中 10 點立即補回、15 點分 3 秒補回。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0ce5d555`。
- 繁中格擋／完美格擋兩份恢復與英文一致；1秒冷卻僅套完美格擋即補，原文未拆清楚屬補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_shield_plates.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/e51d3184-42e7-434f-8369-0ae7a6568619)

圖片僅供技能辨識，不作機制證據。

