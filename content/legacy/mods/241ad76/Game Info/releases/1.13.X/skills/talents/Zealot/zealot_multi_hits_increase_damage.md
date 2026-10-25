# 蔑視(Disdain)：原始碼依據

[English](en/zealot_multi_hits_increase_damage.md)

[返回玩家說明](README.md#zealot_multi_hits_increase_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_multi_hits_increase_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_multi_hits_increase_damage`；名稱鍵：`loc_talent_zealot_3_tier_2_ability_1`；描述鍵：`loc_talent_zealot_3_tier_2_ability_1_description`。
- 節點：`node_88dfd7e8-94f2-4d58-8bfa-06e53dca3286`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_sweep_finish 直接把 params.num_hit_units 寫入 hits；lerp=clamp(hits/5,0,1)，melee_damage上限.05*5=.25。沒有duration，也沒有每次命中逐步增強目前揮擊的程式；揮擊結束才替換下一擊使用的值。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：1136–1179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1136-L1179)
- [scripts/settings/talent/talent_settings_zealot.lua：485–488](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L485-L488)
- [scripts/utilities/attack/damage_calculation.lua：289–303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1397–1417](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1397-L1417)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：96–121](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L96-L121)

## 算例條件與待確認事項

- **傷害算例**：沒有其他加成，上一擊命中 3 名敵人時，下一擊的 100 點變成 100 × (1 + 3 × 5%) = 115 點；命中 5 名以上則為 125 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`e1fe6b4c`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_multi_hits_increase_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/69a5f7ea-11bc-41ae-8758-86a14213a116)

圖片僅供技能辨識，不作機制證據。

