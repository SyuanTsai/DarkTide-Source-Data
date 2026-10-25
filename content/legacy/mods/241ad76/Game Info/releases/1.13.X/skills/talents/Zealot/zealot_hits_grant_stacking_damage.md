# 持續突擊(Sustained Assault)：原始碼依據

[English](en/zealot_hits_grant_stacking_damage.md)

[返回玩家說明](README.md#zealot_hits_grant_stacking_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_hits_grant_stacking_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_hits_grant_stacking_damage`；名稱鍵：`loc_talent_zealot_increased_damage_stacks_on_hit`；描述鍵：`loc_talent_zealot_increased_damage_stacks_on_hit_desc`。
- 節點：`node_18bd9f66-02ab-4d6b-93ef-c860bbdf62e4`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit以機率1進入on_melee_hit（attack_type==melee）後施加effect；effect duration5、max_stacks5、refresh_duration_on_stack=true，各層melee_damage=.04，為同階段加算。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：3863–3901](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L3863-L3901)
- [scripts/settings/talent/talent_settings_zealot.lua：410–416](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L410-L416)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：368–370](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L370)
- [scripts/utilities/attack/damage_calculation.lua：289–303](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L289-L303)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1733–1757](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1733-L1757)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：152–178](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L152-L178)

## 算例條件與待確認事項

- **傷害算例**：沒有其他加成，3 層使 100 × (1 + 3 × 4%) = 112 點；滿層為 120 點。原有同階段 25% 加成時，滿層則為 100 × (1 + 25% + 20%) = 145 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`fa8c449f`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_hits_grant_stacking_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/9e5a26dc-8d4f-4c94-9dcd-fdc807cc1d48)

圖片僅供技能辨識，不作機制證據。

