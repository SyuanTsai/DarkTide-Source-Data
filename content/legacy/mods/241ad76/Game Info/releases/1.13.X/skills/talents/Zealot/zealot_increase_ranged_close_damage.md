# 鮮血受膏(Anoint in Blood)：原始碼依據

[English](en/zealot_increase_ranged_close_damage.md)

[返回玩家說明](README.md#zealot_increase_ranged_close_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_increase_ranged_close_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_increase_ranged_close_damage`；名稱鍵：`loc_talent_zealot_ranged_damage_increased_to_close`；描述鍵：`loc_talent_zealot_ranged_damage_increased_to_close_desc`。
- 節點：`node_80eebf49-eccb-40ef-b6ca-5916f3f088b0`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- conditional_stat_buffs只要求slot_secondary；damage_near+.25。傷害共用近距離曲線t=clamp((d−12.5)/17.5,0,1)，近距離權重1−sqrt(t)。此條件是持用欄位，不能改寫成所有傷害路徑必須attack_type ranged。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：3840–3862](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3840-L3862)
- [scripts/settings/talent/talent_settings_zealot.lua：407–409](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L407-L409)
- [scripts/utilities/attack/damage_calculation.lua：280–297](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L280-L297)
- [scripts/settings/damage/damage_settings.lua：18–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1716–1732](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1716-L1732)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1112–1137](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1112-L1137)

## 算例條件與待確認事項

- **距離算例**：固定其他條件，基礎 100 點傷害，在 12.5 公尺內為 100 × 1.25 = 125；在 16.875 公尺，加成為 25% × [1 − √((16.875 − 12.5) ÷ 17.5)] = 12.5%，所以是 112.5 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7504148a`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_increase_ranged_close_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/f1f336d8-dc80-46a3-b756-2df08b26f541)

圖片僅供技能辨識，不作機制證據。

