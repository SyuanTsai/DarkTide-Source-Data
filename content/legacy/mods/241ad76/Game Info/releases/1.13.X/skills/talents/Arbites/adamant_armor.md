# 法務官之鎧(Arbitrator Armour)：原始碼依據

[English](en/adamant_armor.md)

[返回玩家說明](README.md#adamant_armor)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_armor)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_armor`；名稱鍵：`loc_talent_adamant_armor`；描述鍵：`loc_talent_adamant_armor_desc`。
- 節點：`node_1b027142-867d-492d-a12c-a31f83808c10`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 常駐stat_buffs.toughness=25；max_toughness將_max_toughness與toughness相加，乘toughness_bonus後math.ceil，最後加toughness_bonus_flat。不是立即恢復25點的觸發型效果。

## 原始碼依據

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：79–88](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L79-L88)
- [scripts/settings/talent/talent_settings_adamant.lua：164–166](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L164-L166)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2350–2356](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2350-L2356)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1133–1148](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1133-L1148)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：698–726](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L698-L726)

## 算例條件與待確認事項

- **效果與算例**：最大韌性增加 25 點。原本 100 點、沒有百分比修正時，變成 100 + 25 = 125 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0604ced3`。
- 繁中「韌性提高」與英文 Toughness 的number25一致；百分比順序是補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_armor.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/d25eaf26-cb8b-4009-80ac-af75d049fb9f)

圖片僅供技能辨識，不作機制證據。

