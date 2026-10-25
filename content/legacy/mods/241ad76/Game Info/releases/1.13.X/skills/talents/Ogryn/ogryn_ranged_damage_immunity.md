# 休想再打中我......(Can't Hit Me...Again)：原始碼依據

[English](en/ogryn_ranged_damage_immunity.md)

[返回玩家說明](README.md#ogryn_ranged_damage_immunity)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_ranged_damage_immunity)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_ranged_damage_immunity`；名稱鍵：`loc_talent_ogryn_ranged_damage_immunity`；描述鍵：`loc_talent_ogryn_ranged_damage_immunity_desc`。
- 節點：`node_8da16e7f-a2a1-4400-9b7e-e6ea62d8e57d`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_damage_taken要求ranged且attacked_unit==self；active2.5 cooldown4，不允許active重觸；ranged_damage_taken_multiplier .8。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3308–3336](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3308-L3336)
- [scripts/settings/talent/talent_settings_ogryn.lua：137–141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L137-L141)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：150–184](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L150-L184)
- [scripts/utilities/attack/damage.lua：202–229](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage.lua#L202-L229)
- [scripts/utilities/attack/damage_calculation.lua：587–626](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L626)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2369–2395](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2369-L2395)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1899–1927](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1899-L1927)

## 算例條件與待確認事項

- **減傷算例**：效果期間，此階段 100 點遠程傷害變成 80 點；近戰傷害不受這項減免影響。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5b06263e`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_ranged_damage_immunity.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/b7e2a92b-0a60-459a-87c9-6276b204f64e)

圖片僅供技能辨識，不作機制證據。

