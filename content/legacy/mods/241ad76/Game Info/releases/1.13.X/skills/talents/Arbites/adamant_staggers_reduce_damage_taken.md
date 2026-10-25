# 堅守陣線(Hold the Line)：原始碼依據

[English](en/adamant_staggers_reduce_damage_taken.md)

[返回玩家說明](README.md#adamant_staggers_reduce_damage_taken)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_staggers_reduce_damage_taken)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_staggers_reduce_damage_taken`；名稱鍵：`loc_talent_adamant_staggers_reduce_damage_taken`；描述鍵：`loc_talent_adamant_staggers_reduce_damage_taken_alt_desc`。
- 節點：`node_4bd3e71e-c621-4727-bedc-141b052cbee5`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_staggering_hit可接受震盪攻擊的弱點條件。ogryn或monster tags加5，其餘1；子buff max_stacks5，damage_taken_multiplier=.97逐層相乘。
- 子buff on_player_hit_received只檢查attack_type=melee就finish，沒有damage>0或格擋結果限制。事件在Attack加入受擊玩家自己的buff extension；不會因隊友被打而清除。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3418–3448](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3418-L3448)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：543–558](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L543-L558)
- [scripts/utilities/attack/damage_calculation.lua：587–614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L614)
- [scripts/utilities/attack/attack.lua：752–784](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L752-L784)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/settings/talent/talent_settings_adamant.lua：220–226](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L220-L226)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3403–3417](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3403-L3417)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：936–970](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L936-L970)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1067–1096](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1067-L1096)

## 算例條件與待確認事項

- **減傷算例**：每層讓承受傷害乘以 0.97。5 層時，100 × 0.97⁵ ≈ 85.87 點，約減少 14.13%。存續期間也減少遠程傷害；遠程命中不消耗層數。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0f55ddc6`。
- 繁中「下次承受的近戰傷害」與英文 next Melee hit taken 相符；固定實作卻在存續期間套一般減傷、近戰命中才移除。列跨來源差異，不能單獨判為繁中誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_staggers_reduce_damage_taken.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/fd423ddb-0080-4603-8fd7-90257b583c3d)

圖片僅供技能辨識，不作機制證據。

