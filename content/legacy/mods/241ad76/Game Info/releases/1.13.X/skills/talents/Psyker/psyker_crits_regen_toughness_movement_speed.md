# 堅毅(Mettle)：原始碼依據

[English](en/psyker_crits_regen_toughness_movement_speed.md)

[返回玩家說明](README.md#psyker_crits_regen_toughness_movement_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_crits_regen_toughness_movement_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_crits_regen_toughness_movement_speed`；名稱鍵：`loc_talent_psyker_crits_regen_tougness_and_movement_speed`；描述鍵：`loc_talent_psyker_crits_regen_toughness_speed_description`。
- 節點：`node_a9e156c8-8c1a-4421-a5de-ec60da158b5d`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_critical_strike 設 crit 旗標，on_hit 套入 stacking_movement_buff。速度 stat 按 stack_count 疊加；update_func 本身只計 .1×dt/4，沒有乘 stack_count。共用 Buff.update 每實例執行一次 update_func。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：3008–3064](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L3008-L3064)
- [scripts/settings/talent/talent_settings_psyker.lua：54–59](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L54-L59)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/extension_systems/buff/buffs/buff.lua：29–48](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L48)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1486–1514](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1486-L1514)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：117–142](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L117-L142)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、缺額足夠且無其他加成，持續 4 秒恢復 100 × 10% = 10 點；疊到 3 層仍每秒恢復 2.5 點，移動倍率則為 1 + 3 × 5% = 1.15。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0da7190a`。
- 繁中與英文均將持續恢復和可疊層移速分段；補入「恢復速率不隨層數倍增」屬機制說明，不列錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_crits_regen_toughness_movement_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/53013aa9-f833-431c-8b85-3e548dbc318c)

圖片僅供技能辨識，不作機制證據。

