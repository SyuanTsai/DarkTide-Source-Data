# 堅韌信仰(Enduring Faith)：原始碼依據

[English](en/zealot_crits_reduce_toughness_damage.md)

[返回玩家說明](README.md#zealot_crits_reduce_toughness_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_crits_reduce_toughness_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_crits_reduce_toughness_damage`；名稱鍵：`loc_talent_zealot_toughness_melee_effectiveness`；描述鍵：`loc_talent_zealot_toughness_melee_effectiveness_desc`。
- 節點：`node_0dbb9346-b495-40d9-81d2-3d69b24056f7`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 觸發只檢查 on_crit(params.is_critical_strike)，沒有近戰限定。子效果max_stacks1，refresh_duration_on_stack=true，duration4；toughness_damage_taken_multiplier=.6為承傷乘數。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：1447–1477](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1447-L1477)
- [scripts/settings/talent/talent_settings_zealot.lua：347–350](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L347-L350)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：336–338](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L336-L338)
- [scripts/utilities/attack/damage_taken_calculation.lua：223–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2955–2978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2955-L2978)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：233–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L233-L258)

## 算例條件與待確認事項

- **減傷算例**：只計此效果，原有 100 點韌性傷害變成 100 × 0.6 = 60 點。若另有獨立的 10% 韌性減傷，則為 100 × 0.6 × 0.9 = 54 點，共降低 46%；這不是生命減傷。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`56b689eb`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_crits_reduce_toughness_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/c3395dd2-63a2-430a-9eec-fb9ecd995308)

圖片僅供技能辨識，不作機制證據。

