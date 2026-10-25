# 兵敗如山倒(Drive them Back)：原始碼依據

[English](en/adamant_cleave_after_push.md)

[返回玩家說明](README.md#adamant_cleave_after_push)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_cleave_after_push)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_cleave_after_push`；名稱鍵：`loc_talent_adamant_cleave_after_push`；描述鍵：`loc_talent_adamant_cleave_after_push_desc`。
- 節點：`node_b4b7879c-20cc-40d3-ac4f-955b154a16e7`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_push_finish要求num_hit_units>0；只加max_melee_hit_mass_attack_modifier=.75，不加impact的max_hit_mass，且僅melee。

## 原始碼依據

- [scripts/utilities/attack/damage_profile.lua：36–62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L36-L62)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：303–357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua：227–230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L227-L230)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2513–2530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2513-L2530)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1308–1326](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1308-L1326)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1541–1570](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1541-L1570)

## 算例條件與待確認事項

- **順劈算例**：原本可穿過 10 單位敵人質量，單計此效果變成 10 × 1.75 = 17.5 單位。這是傷害穿透容量，不會一併增加踉蹌穿透容量。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`1389250b`。
- 繁中「推擊後…順劈」與英文 Pushing grants Cleave 一致；需要命中及只強化傷害容量屬未列細節。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_cleave_after_push.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/7b24cc5d-1975-4762-8b77-8899c0713175)

圖片僅供技能辨識，不作機制證據。

