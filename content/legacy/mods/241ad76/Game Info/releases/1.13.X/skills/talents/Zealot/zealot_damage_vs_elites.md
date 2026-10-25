# 弒除瀆者(Abolish Blasphemers)：原始碼依據

[English](en/zealot_damage_vs_elites.md)

[返回玩家說明](README.md#zealot_damage_vs_elites)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_damage_vs_elites)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_damage_vs_elites`；名稱鍵：`loc_talent_zealot_damage_vs_elites`；描述鍵：`loc_talent_zealot_damage_vs_elites_desc`。
- 節點：`node_16cdb92c-ed3f-48f6-9d30-bbe86d8eae5d`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 常駐damage_vs_elites+.15，只有目標breed的elite分類成立才進共用傷害階段。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：2108–2114](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L2108-L2114)
- [scripts/settings/talent/talent_settings_zealot.lua：57–59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L57-L59)
- [scripts/utilities/attack/damage_calculation.lua：310–344](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L310-L344)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1984–2000](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1984-L2000)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1755–1783](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1755-L1783)

## 算例條件與待確認事項

- **傷害算例**：100 × 1.15 = 115 點；若已有同階段 20% 傷害加成，則是 100 × (1 + 20% + 15%) = 135 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`43f97b1b`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_damage_vs_elites.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/9b7dda36-1d18-41b4-9e28-3cfd26f0ad66)

圖片僅供技能辨識，不作機制證據。

