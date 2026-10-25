# 帝皇之拳(The Emperor's Fist)：原始碼依據

[English](en/adamant_first_melee_hit_increased_damage.md)

[返回玩家說明](README.md#adamant_first_melee_hit_increased_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_first_melee_hit_increased_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_first_melee_hit_increased_damage`；名稱鍵：`loc_talent_adamant_first_melee_hit_increased_damage`；描述鍵：`loc_talent_adamant_first_melee_hit_increased_damage_desc`。
- 節點：`node_bf589f32-33d7-48d4-ae96-2ab3d6a63ee3`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_sweep_start設active=true；on_hit且on_melee_hit時false，on_sweep_finish亦false。conditional_stat_buffs為melee_damage=.15及impact_modifier=.3。動作開始到首次近戰命中是效果窗口，非target_number永久屬性。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：295–319](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L295-L319)
- [scripts/utilities/attack/stagger_calculation.lua：190–204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L204)
- [scripts/settings/talent/talent_settings_adamant.lua：492–495](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L492-L495)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3064–3094](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3064-L3094)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2831–2851](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2831-L2851)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：2018–2042](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2018-L2042)

## 算例條件與待確認事項

- **分項算例**：單計增傷，原本 100 點近戰傷害變成 115 點；原本 100 單位踉蹌強度變成 130。已有同階段 25% 增傷時，傷害為 100 × (1 + 25% + 15%) = 140 點。
- 同一更新內多目標的事件處理時序未在遊戲內測試；主文按揮擊開始／首次命中後解除的實作意圖說明。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b13d7bb8`。
- 繁中「每次攻擊命中的第一個敵人」與英文 first Enemy hit with each attack一致；先後事件為補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_first_melee_hit_increased_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/6f3ef825-f018-482c-b511-60f87907cefc)

圖片僅供技能辨識，不作機制證據。

