# 危險平衡(Peril Equilibrium)：原始碼依據

[English](en/psyker_weapon_attacks_peril_equilibrium.md)

[返回玩家說明](README.md#psyker_weapon_attacks_peril_equilibrium)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_weapon_attacks_peril_equilibrium)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_weapon_attacks_peril_equilibrium`；名稱鍵：`loc_talent_psyker_weapon_attacks_peril_equilibrium`；描述鍵：`loc_talent_psyker_weapon_attacks_peril_equilibrium_desc`。
- 節點：`node_237fc277-fe42-473b-aeda-70d82fc2d9e8`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit 要求attacking_unit=self、damage!=0、非warp且melee/ranged。procs計數每update消耗一個；current<threshold時直接min(current+.02,.75)，未經warp_charge_amount。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3844–3919](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3844-L3919)
- [scripts/settings/talent/talent_settings_psyker.lua：102–105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L102-L105)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：2628–2647](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L2628-L2647)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1895–1922](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1895-L1922)

## 算例條件與待確認事項

- **反噬算例**：反噬 70% 時連續觸發三次，70% → 72% → 74% → 75%；原本 90% 時仍為 90%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`dc54df8c`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_weapon_attacks_peril_equilibrium.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/c84a6cc0-5f99-4eee-a394-9b234a1fa5dd)

圖片僅供技能辨識，不作機制證據。

