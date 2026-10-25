# 削弱敵人(Soften Them Up)：原始碼依據

[English](en/ogryn_targets_recieve_damage_taken_increase_debuff.md)

[返回玩家說明](README.md#ogryn_targets_recieve_damage_taken_increase_debuff)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_targets_recieve_damage_taken_increase_debuff)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_targets_recieve_damage_taken_increase_debuff`；名稱鍵：`loc_talent_ogryn_targets_recieve_damage_increase_debuff`；描述鍵：`loc_talent_ogryn_targets_recieve_damage_increase_debuff_new_desc`。
- 節點：`node_94f1d2a8-305c-4d75-bcc4-733a7ef4cd20`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- check_proc為on_melee_hit + on_damaging_hit + on_non_kill；目標仍HEALTH_ALIVE且有buff extension才施加。
- 目標buff duration5/max_stacks1/refresh_duration_on_stack，damage_taken_modifier=.15；在傷害結算的承傷加算階段使用，並非只增加施加者傷害。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：769–806](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L769-L806)
- [scripts/utilities/attack/damage_calculation.lua：587–612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L612)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：1756–1799](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L1756-L1799)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：304–329](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L304-L329)

## 算例條件與待確認事項

- **傷害算例**：效果已施加後，原本 100 點傷害變成 100 × (1 + 15%) = 115 點；若同一承傷階段另有 20% 加成，則為 135 點。首次觸發的那一擊不會追溯重算。
- 假設後續命中條件、護甲與其他倍率相同；不把命中觸發後的減益追溯套在首次傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`8d887b7b`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_targets_recieve_damage_taken_increase_debuff.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/53e0b90e-52dc-4a4a-953c-b235753aa97a)

圖片僅供技能辨識，不作機制證據。

