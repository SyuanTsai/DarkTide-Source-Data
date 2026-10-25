# 射盡殺戮(Spray and Slay)：原始碼依據

[English](en/ogryn_ranged_improves_melee.md)

[返回玩家說明](README.md#ogryn_ranged_improves_melee)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_ranged_improves_melee)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_ranged_improves_melee`；名稱鍵：`loc_talent_ogryn_ranged_improves_melee`；描述鍵：`loc_talent_ogryn_ranged_improves_melee_desc`。
- 節點：`node_fce211eb-69a1-47f3-a8c4-74589f2d1918`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_ammo_consumed且current_slot_clip_percentage==0，active6 melee_damage.15/melee_attack_speed.075；無cooldown可重觸。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3423–3455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3423-L3455)
- [scripts/settings/talent/talent_settings_ogryn.lua：156–160](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L156-L160)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：173–184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L184)
- [scripts/utilities/action/action_handler.lua：356–429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/utilities/attack/damage_calculation.lua：278–300](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L300)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2578–2602](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2578-L2602)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：2148–2170](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2148-L2170)

## 算例條件與待確認事項

- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7ba7e606`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_ranged_improves_melee.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/eeae1229-b245-43fc-9840-960c36f5787e)

圖片僅供技能辨識，不作機制證據。

