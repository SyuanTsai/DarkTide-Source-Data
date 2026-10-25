# 亞空間震波(Empyric Shock)：原始碼依據

[English](en/psyker_force_staff_quick_attack_bonus.md)

[返回玩家說明](README.md#psyker_force_staff_quick_attack_bonus)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_force_staff_quick_attack_bonus)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_force_staff_quick_attack_bonus`；名稱鍵：`loc_talent_psyker_force_staff_quick_attack_bonus`；描述鍵：`loc_talent_psyker_force_staff_quick_attack_bonus_desc`。
- 節點：`node_de28df8a-4aed-426c-8122-73893a04aa5b`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- force_staff_primary命中掛目標debuff，max5 duration10 refresh；warp_damage_taken_multiplier=1.06 是multiplicative，每層冪次相乘，damage_calculation在is_warp_damage分支套在目標承傷階段。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3538–3565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3538-L3565)
- [scripts/utilities/attack/damage_calculation.lua：599–611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L599-L611)
- [scripts/settings/buff/buff_settings.lua：1024–1032](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1024-L1032)
- [scripts/extension_systems/buff/buffs/buff.lua：694–730](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L694-L730)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2530–2575](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2530-L2575)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：2027–2054](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L2027-L2054)

## 算例條件與待確認事項

- **傷害算例**：目標原本受到 100 點亞空間傷害，1 層為 100 × 1.06 = 106 點；5 層為 100 × 1.06⁵ ≈ 133.82 點，增加約 33.82%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`c4f73f93`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_force_staff_quick_attack_bonus.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/f556046f-b193-4776-963d-798307d2c36a)

圖片僅供技能辨識，不作機制證據。

