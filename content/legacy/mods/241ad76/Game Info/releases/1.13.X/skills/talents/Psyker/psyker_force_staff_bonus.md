# 靈能引導(Channeled Force)：原始碼依據

[English](en/psyker_force_staff_bonus.md)

[返回玩家說明](README.md#psyker_force_staff_bonus)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_force_staff_bonus)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_force_staff_bonus`；名稱鍵：`loc_talent_psyker_force_staff_bonus`；描述鍵：`loc_talent_psyker_force_staff_both_bonus_desc`。
- 節點：`node_f0bb8060-6afc-4ae9-954d-3817cc054b35`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_action_finish要求secondary槽；forcestaff_p2_m1看action_charge_flame/ action_shoot_flame，其他看action_charge/rapid_left。蓄力> .95即掛primary buff，不要求成功命中。兩buffmax1duration5，各對應force_staff_single_target_damage .2與secondary .1。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3704–3782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3704-L3782)
- [scripts/settings/talent/talent_settings_psyker.lua：93–98](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L93-L98)
- [scripts/utilities/attack/damage_calculation.lua：486–506](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L486-L506)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2789–2818](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2789-L2818)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1997–2026](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1997-L2026)

## 算例條件與待確認事項

- **傷害算例**：只比較各自增傷階段、原傷害均為 100 且無其他加成時，主要攻擊為 100 × 1.2 = 120 點，次要攻擊為 100 × 1.1 = 110 點。兩項作用於不同攻擊，不能合成單次 30% 增傷。
- 來源明確檢查動作完成事件；各法杖取消、切換、連段的精確觸發時點仍需遊戲內核對。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`44883ede`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_force_staff_bonus.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/a3ca9930-1aef-4718-9463-1b5da02a5b6b)

圖片僅供技能辨識，不作機制證據。

