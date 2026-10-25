# 為您撐腰(Got Your Back)：原始碼依據

[English](en/zealot_melee_kills_restore_toughness_to_target.md)

[返回玩家說明](README.md#zealot_melee_kills_restore_toughness_to_target)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_melee_kills_restore_toughness_to_target)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_melee_kills_restore_toughness_to_target`；名稱鍵：`loc_talent_zealot_melee_kills_restore_toughness_to_target`；描述鍵：`loc_talent_zealot_melee_kills_restore_toughness_to_target_desc`。
- 節點：`node_c10e9c6e-1e1c-48db-8e08-f218097bdbdb`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_melee_kill後檢查attacked_unit、attacked_unit_target_unit存在且不等於holder，分別對target回.075、holder回.05最大韌性。模板沒有coherency或距離測試，也沒有cooldown。
- 程式只排除自身與nil，未額外判斷target是否玩家；無韌性擴充的其他目標不能等同保證隊友恢復，主文按正常隊友戰鬥情境說明。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4779–4816](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4779-L4816)
- [scripts/settings/talent/talent_settings_zealot.lua：242–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L242-L245)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3249–3267](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3249-L3267)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：2111–2133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2111-L2133)

## 算例條件與待確認事項

- **恢復算例**：隊友最大韌性 120、你為 100，隊友補 120 × 7.5% = 9 點，你額外補 100 × 5% = 5 點；雙方各自受恢復加成與韌性缺額限制，原本近戰擊殺恢復另算。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`185f78b2`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_melee_kills_restore_toughness_to_target.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/5ddb9790-0039-4a22-97e6-8ff7c82719c0)

圖片僅供技能辨識，不作機制證據。

