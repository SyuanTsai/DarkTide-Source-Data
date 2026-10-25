# 震盪攻擊(Concussive)：原始碼依據

[English](en/adamant_melee_weakspot_hits_count_as_stagger.md)

[返回玩家說明](README.md#adamant_melee_weakspot_hits_count_as_stagger)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_melee_weakspot_hits_count_as_stagger)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_melee_weakspot_hits_count_as_stagger`；名稱鍵：`loc_talent_adamant_melee_weakspot_hits_count_as_stagger`；描述鍵：`loc_talent_adamant_melee_weakspot_hits_count_as_stagger_desc`。
- 節點：`node_46db21b8-af36-49bf-a4b3-8a79d303edb2`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 近戰弱點命中加入duration4、keyword=count_as_staggered的debuff（無max_stacks，多份實例）。MinionState.is_staggered和DamageCalculation均讀此keyword；另有adamant_melee_weakspots_count_as_staggered規則令on_staggering_hit接受同次近戰弱點命中。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1979–1986](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1979-L1986)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：543–558](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L543-L558)
- [scripts/utilities/minion_state.lua：57–72](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_state.lua#L57-L72)
- [scripts/utilities/attack/damage_calculation.lua：446–450](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L446-L450)
- [scripts/settings/talent/talent_settings_adamant.lua：408–410](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L408-L410)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：1963–1978](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L1963-L1978)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2599–2617](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2599-L2617)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：2307–2332](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2307-L2332)

## 算例條件與待確認事項

- **搭配算例**：搭配鎮壓異己的 10% 對踉蹌增傷，後續符合條件的基礎 100 點攻擊變成 100 × 1.1 = 110 點。單選本天賦不會自行增加傷害或強制敵人倒退。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`3be4daea`。
- 繁中「視為踉蹌」與英文 count as Staggered一致，沒有宣稱強制打出踉蹌動畫。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_melee_weakspot_hits_count_as_stagger.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/2577c784-85c4-473c-b9ba-a88f8de35355)

圖片僅供技能辨識，不作機制證據。

