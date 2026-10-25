# 四平八穩(Good Balance)：原始碼依據

[English](en/zealot_reduced_damage_after_dodge.md)

[返回玩家說明](README.md#zealot_reduced_damage_after_dodge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_reduced_damage_after_dodge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_reduced_damage_after_dodge`；名稱鍵：`loc_talent_reduced_damage_after_dodge`；描述鍵：`loc_talent_reduced_damage_after_dodge_description`。
- 節點：`node_7ee3c5f1-cc73-412b-9e62-f013af339bc4`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- proc_buff on_successful_dodge，active_duration2.5，damage_taken_multiplier=.75。
- talent定義將duration錯套用round((1-value)*100)，2.5會變成-150；這是固定來源格式化疑點，尚無遊戲內畫面，不當成繁中誤譯或聲稱玩家實際看到-150秒。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4435–4451](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4435-L4451)
- [scripts/utilities/attack/damage_calculation.lua：590–610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L590-L610)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：173–184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L184)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2724–2763](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2724-L2763)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：834–862](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L834-L862)

## 算例條件與待確認事項

- **減傷算例**：原本 100 點傷害變成 100 × 0.75 = 75 點。若另有獨立乘算的 40% 減傷，則為 100 × 0.75 × 0.6 = 45 點。
- 持續時間格式化疑點待遊戲內確認顯示；主文按實作2.5秒說明。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d65317f7`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_reduced_damage_after_dodge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/41e85f89-6787-4fe4-9fd7-a2382f2aa025)

圖片僅供技能辨識，不作機制證據。

