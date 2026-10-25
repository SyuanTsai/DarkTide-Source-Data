# 靈活還擊(Riposte)：原始碼依據

[English](en/zealot_stacking_melee_damage_after_dodge.md)

[返回玩家說明](README.md#zealot_stacking_melee_damage_after_dodge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_stacking_melee_damage_after_dodge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_stacking_melee_damage_after_dodge`；名稱鍵：`loc_talent_zealot_stacking_melee_damage_after_dodge`；描述鍵：`loc_talent_zealot_stacking_melee_damage_after_dodge_desc`。
- 節點：`node_324c71cf-ae7e-4441-acb6-203a35ae041d`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 成功閃避添加effect；max_stacks3、duration8、refresh_duration_on_stack=true，melee_damage每層+.05。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2152–2190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2152-L2190)
- [scripts/settings/talent/talent_settings_zealot.lua：65–69](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L65-L69)
- [scripts/utilities/attack/damage_calculation.lua：289–303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2025–2049](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2025-L2049)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1500–1525](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1500-L1525)

## 算例條件與待確認事項

- **傷害算例**：3 層共 15%，基礎 100 點變成 100 × (1 + 3 × 5%) = 115 點；已有同階段 20% 加成時，則是 100 × (1 + 20% + 15%) = 135 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b421dbe6`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_stacking_melee_damage_after_dodge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/7a00054d-1b7e-448e-a9f3-eee60922b19e)

圖片僅供技能辨識，不作機制證據。

