# 繩之以法(Target Neutralised)：原始碼依據

[English](en/adamant_elite_special_kills_replenish_toughness.md)

[返回玩家說明](README.md#adamant_elite_special_kills_replenish_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_elite_special_kills_replenish_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_elite_special_kills_replenish_toughness`；名稱鍵：`loc_talent_adamant_elite_special_kills_replenish_toughness`；描述鍵：`loc_talent_adamant_elite_special_kills_replenish_toughness_desc`。
- 節點：`node_3541dea3-3eba-4635-a80b-9dd635c02298`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_kill經on_elite_or_special_kill，立即replenish_percentage(.1,false)並加入4秒adamant_toughness_on_elite_kill_effect。子buff沒有max_stacks，能存在多個各自計时的實例；每實例每更新恢復.025×dt。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2257–2291](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2257-L2291)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：120–133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L133)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/extension_systems/buff/buffs/buff.lua：23–83](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L23-L83)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2257–2271](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2257-L2271)
- [scripts/settings/talent/talent_settings_adamant.lua：138–142](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L138-L142)
- [scripts/extension_systems/buff/buff_extension_base.lua：433–468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L433-L468)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：1034–1056](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L1034-L1056)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：493–521](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L493-L521)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、缺額足夠且沒有其他恢復加成，一次擊殺共恢復 100 × 10% + 100 × 2.5% × 4 = 20 點。兩次擊殺的持續恢復重疊時，每秒共 5 點；實際補量不超過缺額。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2ec3a4dd`。
- 繁中「立即恢復…額外」與英文 instantly／over 一致；多次擊殺的獨立持續恢復是補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_elite_special_kills_replenish_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932554216)｜[圖片附件](https://github.com/user-attachments/assets/fc3f3a29-7b71-45d4-aec6-c72036ba9831)

圖片僅供技能辨識，不作機制證據。

