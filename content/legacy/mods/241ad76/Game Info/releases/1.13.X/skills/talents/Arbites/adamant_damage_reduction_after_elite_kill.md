# 勢如破竹(Imposing Force)：原始碼依據

[English](en/adamant_damage_reduction_after_elite_kill.md)

[返回玩家說明](README.md#adamant_damage_reduction_after_elite_kill)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_damage_reduction_after_elite_kill)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_damage_reduction_after_elite_kill`；名稱鍵：`loc_talent_adamant_damage_reduction_after_elite_kill`；描述鍵：`loc_talent_adamant_damage_reduction_after_elite_kill_desc`。
- 節點：`node_b4efa6cf-bc1d-4616-9518-4b9fc363dcf8`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit經on_elite_or_special_kill啟動5秒damage_taken_multiplier=.75。該倍率與其他獨立承傷倍率相乘；不是韌性專用減傷。

## 原始碼依據

- [scripts/settings/buff/helper_functions/check_proc_functions.lua：120–133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L133)
- [scripts/utilities/attack/damage_calculation.lua：587–614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：303–357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua：206–209](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L206-L209)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3292–3312](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3292-L3312)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：862–884](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L862-L884)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1039–1066](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1039-L1066)

## 算例條件與待確認事項

- **減傷算例**：原本承受 100 點傷害時，單計本效果為 100 × 0.75 = 75 點；另有獨立 20% 減傷則為 100 × 0.75 × 0.8 = 60 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`368927ce`。
- 繁中「擊殺精英或專家…傷害抗性」與英文相符，沒有把它寫成僅韌性抗性。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_damage_reduction_after_elite_kill.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/d856ef6a-9f61-4b4a-b672-e60019dea866)

圖片僅供技能辨識，不作機制證據。

