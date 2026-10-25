# 鐵血之志(Force of Will)：原始碼依據

[English](en/adamant_staggers_replenish_toughness.md)

[返回玩家說明](README.md#adamant_staggers_replenish_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_staggers_replenish_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_staggers_replenish_toughness`；名稱鍵：`loc_talent_adamant_staggers_replenish_toughness`；描述鍵：`loc_talent_adamant_staggers_replenish_toughness_melee_desc`。
- 節點：`node_ff7e488d-67b2-4139-a794-6032177b6d56`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit必須on_staggering_hit AND on_melee_hit，target_number>1即return。共用on_staggering_hit另接受adamant_melee_weakspots_count_as_staggered規則且近戰弱點命中，不要求實際stagger結果。

## 原始碼依據

- [scripts/settings/buff/helper_functions/check_proc_functions.lua：543–558](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L543-L558)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2306–2323](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2306-L2323)
- [scripts/settings/talent/talent_settings_adamant.lua：146–148](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L146-L148)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1072–1086](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1072-L1086)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：557–585](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L557-L585)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、無其他恢復加成時，每次恢復 100 × 7.5% = 7.5 點；一擊掃中 3 名敵人仍最多恢復 7.5 點，並受缺額限制。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`050254b5`。
- 繁中「近戰攻擊使敵人踉蹌」與英文 Staggering Melee Attack 一致；未列首目標與天賦互動不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_staggers_replenish_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/898ad4c6-3f99-404d-8ff9-b15a9820f8e9)

圖片僅供技能辨識，不作機制證據。

