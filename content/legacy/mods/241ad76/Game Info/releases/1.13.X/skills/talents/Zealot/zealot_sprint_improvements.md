# 狂熱不懈(Relentless Fervor)：原始碼依據

[English](en/zealot_sprint_improvements.md)

[返回玩家說明](README.md#zealot_sprint_improvements)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_sprint_improvements)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_sprint_improvements`；名稱鍵：`loc_talent_zealot_dodge_improvements`；描述鍵：`loc_talent_zealot_sprint_improvements_alt_desc`。
- 節點：`node_72f07a65-a83f-4264-99fe-6d3551d135e1`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 常駐sprint_movement_speed+.1、sprinting_cost_multiplier=.9。on_sprint_started添加單層子buff；子buff以gameplay時間>=start+1授slowdown_immune，on_sprint_ended標記退出，不會保留至下一段衝刺。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2574–2599](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2574-L2599)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2937–2970](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2937-L2970)
- [scripts/settings/talent/talent_settings_zealot.lua：133–137](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L133-L137)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2358–2385](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2358-L2385)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1526–1551](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1526-L1551)

## 算例條件與待確認事項

- **速度與消耗算例**：若原本衝刺速度為 6 公尺／秒、每秒消耗 2 點耐力，只計此天賦後為 6 × 1.1 = 6.6 公尺／秒、2 × 0.9 = 1.8 點耐力／秒。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`490f7206`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_sprint_improvements.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/bcb76321-c69e-466f-b588-a894e8c63443)

圖片僅供技能辨識，不作機制證據。

