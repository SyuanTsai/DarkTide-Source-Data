# 無處可逃(No Escape)：原始碼依據

[English](en/adamant_elite_special_kills_offensive_boost.md)

[返回玩家說明](README.md#adamant_elite_special_kills_offensive_boost)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_elite_special_kills_offensive_boost)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_elite_special_kills_offensive_boost`；名稱鍵：`loc_talent_adamant_elite_special_kills_offensive_boost`；描述鍵：`loc_talent_adamant_elite_special_kills_offensive_boost_alt_desc`。
- 節點：`node_a9e22eac-7d0d-4567-ae6c-e7be34534eaa`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_hit經on_elite_or_special_kill，4秒damage=.1及movement_speed=.1，allow_proc_while_active。兩種屬性分開結算。

## 原始碼依據

- [scripts/settings/buff/helper_functions/check_proc_functions.lua：120–133](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L133)
- [scripts/utilities/attack/damage_calculation.lua：236–263](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L236-L263)
- [scripts/extension_systems/buff/buffs/proc_buff.lua：303–357](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L303-L357)
- [scripts/settings/talent/talent_settings_adamant.lua：120–124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L120-L124)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2597–2613](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2597-L2613)
- [scripts/extension_systems/character_state_machine/character_states/player_character_state_walking.lua：101–129](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_walking.lua#L101-L129)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：837–861](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L837-L861)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1514–1540](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1514-L1540)

## 算例條件與待確認事項

- **效果算例**：單計本效果，100 點傷害變成 110 點；每秒移動 5 公尺變成 5 × 1.1 = 5.5 公尺。若已有同階段 25% 增傷，則為 100 × (1 + 25% + 10%) = 135 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ea8040eb`。
- 繁中「傷害加成與移動速度」對應英文 Damage and Movement Speed，觸發及持續時間一致。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_elite_special_kills_offensive_boost.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/6d045fa3-97bc-4943-9e6e-0f703e68288d)

圖片僅供技能辨識，不作機制證據。

