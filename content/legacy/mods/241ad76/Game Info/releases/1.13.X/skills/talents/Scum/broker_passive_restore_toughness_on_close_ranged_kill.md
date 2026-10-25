# 特提恩之聲(Voice of Tertium)：原始碼依據

[English](en/broker_passive_restore_toughness_on_close_ranged_kill.md)

[返回玩家說明](README.md#broker_passive_restore_toughness_on_close_ranged_kill)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_restore_toughness_on_close_ranged_kill)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_restore_toughness_on_close_ranged_kill`；名稱鍵：`loc_talent_broker_passive_restore_toughness_on_close_ranged_kill`；描述鍵：`loc_talent_broker_passive_restore_toughness_on_close_ranged_kill_desc`。
- 節點：`node_8d67a080-fc70-4749-9f1e-75b1d158f0f5`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_kill由CheckProcFunctions.on_ranged_close_kill核對died、ranged或count_as_ranged_attack，以及hit_world_position與attacking_unit距離平方<=12.5²；不因名稱close_ranged就只讀UI。
- 精英或專家取.15，其餘.08，兩者不相加。

## 原始碼依據

- [scripts/settings/buff/helper_functions/check_proc_functions.lua：306–317](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L306-L317)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：777–791](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L791)
- [scripts/settings/damage/damage_settings.lua：18–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_broker.lua：267–270](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L267-L270)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1148–1168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1148-L1168)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1136–1156](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1136-L1156)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：116–142](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L116-L142)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100 時，一般敵人恢復 8 點、精英或專家恢復 15 點；目前已有 95 點時，兩者實際都只補 5 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7f8728ae`。
- 繁中與英文皆寫遠程擊殺及8%／15%恢復；兩者省略近距離限制，屬描述不完整，不列勘誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_restore_toughness_on_close_ranged_kill.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/04100618-a87c-416c-8e22-3c1eb01aa7ab)

圖片僅供技能辨識，不作機制證據。

