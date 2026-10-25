# 天災(Scourge)：原始碼依據

[English](en/zealot_crits_apply_bleed.md)

[返回玩家說明](README.md#zealot_crits_apply_bleed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_crits_apply_bleed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_crits_apply_bleed`；名稱鍵：`loc_talent_zealot_bleed_melee_crit_chance`；描述鍵：`loc_talent_zealot_bleed_melee_crit_chance_desc`。
- 節點：`node_0e6bc32b-bdab-4856-94e7-f141355cc9a0`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit先查bleeding再給crit effect；is_critical_strike且damage>0且HEALTH_ALIVE才迴圈加兩層bleed。on_bleeding_minion_death另核對melee與attacker==holder；不同事件不能保證每次擊殺恰好只加一層。
- bleed power=500*x²*(3−2x)，x=stacks/16；profile attack175，output20/10000與power正規化抵銷500，無甲ADM.5，得175*smoothstep*.5。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：1593–1658](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1593-L1658)
- [scripts/settings/talent/talent_settings_zealot.lua：357–361](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L357-L361)
- [scripts/settings/buff/weapon_buff_templates.lua：235–260](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L260)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：59–68](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L59-L68)
- [scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua：443–466](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L466)
- [scripts/utilities/attack/power_level.lua：21–23](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L21-L23)
- [scripts/utilities/attack/power_level.lua：63–94](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L94)
- [scripts/settings/damage/power_level_settings.lua：7–29](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L29)
- [scripts/utilities/attack/damage_profile.lua：386–444](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L444)
- [scripts/extension_systems/buff/buffs/interval_buff.lua：17–64](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1457–1521](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1457-L1521)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：11–36](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L11-L36)

## 算例條件與待確認事項

- **爆擊率算例**：原本近戰爆擊率 5%，滿 3 層後為 5% + 3 × 10% = 35%，不是 5% × 1.3。
- **流血傷害算例**：流血每約 0.5 秒結算一次，最多 16 層。固定無甲部位、沒有其他修正，2 層的單次傷害為 175 × (2 ÷ 16)² × [3 − 2 × (2 ÷ 16)] × 0.5 ≈ 3.76 點；8 層為 43.75 點，層數與傷害不是等比例增加。
- 流血範例是固定護甲與零其他修正的單次結算，不是所有敵人的固定每秒傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`cddf2bee`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_crits_apply_bleed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/96dc3500-2674-43bb-9fa9-10992eb3bcb8)

圖片僅供技能辨識，不作機制證據。

