# 惡意攻勢(Malefic Momentum)：原始碼依據

[English](en/psyker_kills_stack_other_weapon_damage.md)

[返回玩家說明](README.md#psyker_kills_stack_other_weapon_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_kills_stack_other_weapon_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_kills_stack_other_weapon_damage`；名稱鍵：`loc_talent_psyker_kills_stack_other_weapon_damage`；描述鍵：`loc_talent_psyker_kills_stack_other_weapon_damage_both_description`。
- 節點：`node_8e7a1179-6cbd-4f0d-9992-a0ca5282b30b`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 依擊殺的 damage_type 是否在 warp_damage_types 選擇 buff，並非依目前手持武器。非亞空間 buff 同時給 damage+.05、warp_damage−.05，在亞空間攻擊的同一加算階段抵銷；兩模板各有獨立10秒5層限制。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2832–2886](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2832-L2886)
- [scripts/utilities/attack/damage_calculation.lua：517–526](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L517-L526)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1094–1191](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1094-L1191)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：775–800](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L775-L800)

## 算例條件與待確認事項

- **傷害算例**：只比較此增傷階段，其餘倍率固定為 1。基準 100 點、無其他加成時，100 × (1 + 25%) = 125 點；原有 25% 同階段加成時，從 125 變成 100 × (1 + 25% + 25%) = 150 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ef213cd8`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_kills_stack_other_weapon_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/cc72c2ff-3d22-42e0-be1d-69a9f4d7cb22)

圖片僅供技能辨識，不作機制證據。

