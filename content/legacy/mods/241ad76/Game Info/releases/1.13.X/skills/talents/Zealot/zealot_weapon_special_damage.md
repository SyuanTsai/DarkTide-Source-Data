# 神聖工具(Holy Tools)：原始碼依據

[English](en/zealot_weapon_special_damage.md)

[返回玩家說明](README.md#zealot_weapon_special_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_weapon_special_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_weapon_special_damage`；名稱鍵：`loc_talent_zealot_weapon_special_damage`；描述鍵：`loc_talent_zealot_weapon_special_damage_desc`。
- 節點：`node_4753943d-671c-4898-b061-b0d1f22accd5`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_weapon_special_activate須params.wielded_slot==slot_primary。effect5秒單層refresh，melee_damage+.2；on_sweep_finish無命中判斷直接force_finish。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：4736–4778](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L4736-L4778)
- [scripts/settings/talent/talent_settings_zealot.lua：246–249](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L246-L249)
- [scripts/utilities/attack/damage_calculation.lua：289–303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3268–3287](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3268-L3287)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：2088–2110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L2088-L2110)

## 算例條件與待確認事項

- **傷害算例**：基礎 100 點變成 100 × 1.2 = 120 點；已有同階段 25% 近戰增傷時，則 100 × (1 + 25% + 20%) = 145 點。一次橫掃的效果維持到該次揮擊結束。
- 不同武器特殊動作是否實際發送activate事件依武器動作決定，未逐把遊戲內驗證；不延伸保證所有特殊輸入均可觸發。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`21bf1b41`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_weapon_special_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/28bd1a77-6a4b-44e5-b46c-1d1a334479e7)

圖片僅供技能辨識，不作機制證據。

