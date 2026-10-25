# 走一走治百病(Walk It Off)：原始碼依據

[English](en/adamant_stamina_spent_replenish_toughness.md)

[返回玩家說明](README.md#adamant_stamina_spent_replenish_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_stamina_spent_replenish_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_stamina_spent_replenish_toughness`；名稱鍵：`loc_talent_adamant_stamina_regens_toughness`；描述鍵：`loc_talent_adamant_stamina_spent_replenish_toughness_desc`。
- 節點：`node_89e56162-d28d-49d5-a01a-ca818154041f`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 逐更新累計current_stamina減少量，最大耐力變動造成的減少不計。達1減去1並加入子buff，每更新最多加入一次，餘額保留。子buff max_stacks=1、refresh_duration_on_stack=true，3秒內以.1×dt/3恢復最大韌性。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3095–3157](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3095-L3157)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3095–3139](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3095-L3139)
- [scripts/settings/talent/talent_settings_adamant.lua：483–487](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L483-L487)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2782–2804](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2782-L2804)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：613–637](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L613-L637)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、缺額足夠且沒有其他恢復加成，每秒約恢復 100 × 10% ÷ 3 = 3.33 點。啟動 2 秒後再次觸發並持續至結束，共約恢復 3.33 × 5 = 16.67 點，而非瞬間補 20 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5bfeac39`。
- 繁中「消耗…在…秒內恢復」與英文 Spending／over 一致；重新計時不疊速是原文未寫的機制。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_stamina_spent_replenish_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/4c4b06a3-049f-4272-b1d2-a8a472f541b0)

圖片僅供技能辨識，不作機制證據。

