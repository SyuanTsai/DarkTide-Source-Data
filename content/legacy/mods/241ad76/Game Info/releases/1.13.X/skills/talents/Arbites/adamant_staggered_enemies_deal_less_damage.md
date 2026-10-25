# 壓制武力(Suppression Force)：原始碼依據

[English](en/adamant_staggered_enemies_deal_less_damage.md)

[返回玩家說明](README.md#adamant_staggered_enemies_deal_less_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_staggered_enemies_deal_less_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_staggered_enemies_deal_less_damage`；名稱鍵：`loc_talent_adamant_staggered_enemies_deal_less_damage`；描述鍵：`loc_talent_adamant_staggered_enemies_deal_less_damage_desc`。
- 節點：`node_5aaad316-c107-420b-9010-48668b673c58`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit跳過擊殺，經on_melee_stagger_hit=近戰+MinionState.is_staggered；push分支同樣要求MinionState.is_staggered。此狀態含count_as_staggered，因此震盪攻擊標記可滿足。
- 給敵人max_stacks1、duration5、refresh的debuff，stat_buffs.damage=-.2，攻擊結算從攻擊者damage加入一般傷害階段。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3719–3728](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3719-L3728)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：537–565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L537-L565)
- [scripts/utilities/minion_state.lua：57–72](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_state.lua#L57-L72)
- [scripts/utilities/attack/damage_calculation.lua：236–263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/settings/talent/talent_settings_adamant.lua：404–407](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L404-L407)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3676–3718](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3676-L3718)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2580–2598](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2580-L2598)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：2280–2306](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2280-L2306)

## 算例條件與待確認事項

- **傷害算例**：單計這項削弱，敵人原本造成 100 點傷害時變成 100 × (1 − 20%) = 80 點；這是削弱敵人的輸出，不是對敵人追加傷害。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`cd6418d9`。
- 同源繁中「對其造成…傷害」把作用方向反轉；英文 makes them deal…Damage是敵人輸出降低，實作在敵人身上設damage=-.2。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_staggered_enemies_deal_less_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/af381ce2-1360-49a1-931d-6db3fb174166)

圖片僅供技能辨識，不作機制證據。

