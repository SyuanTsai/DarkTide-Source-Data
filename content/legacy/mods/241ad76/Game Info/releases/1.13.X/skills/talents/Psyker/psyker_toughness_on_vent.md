# 心如止水(Quietude)：原始碼依據

[English](en/psyker_toughness_on_vent.md)

[返回玩家說明](README.md#psyker_toughness_on_vent)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_toughness_on_vent)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_toughness_on_vent`；名稱鍵：`loc_talent_psyker_toughness_from_vent`；描述鍵：`loc_talent_psyker_toughness_from_vent_and_gen_desc`。
- 節點：`node_0866df78-dac3-46dc-9af6-30119a64acbe`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 節點同時掛 generation 與 vent 兩個模板；前者處理負 percentage_change、後者正值。恢復比例為 abs(old−new)×.4，不是目前反噬乘.4。format_values 對 toughness 的 value_manipulation 與實際公式需分開記錄。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1449–1484](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1449-L1484)
- [scripts/settings/talent/talent_settings_psyker.lua：202–204](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L202-L204)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：980–1008](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L980-L1008)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：63–89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L63-L89)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、無其他恢復加成，反噬從 40% 升到 60%，恢復 100 × 20% × 0.4 = 8 點；之後從 60% 降到 50%，再恢復 100 × 10% × 0.4 = 4 點。韌性滿額時不會超補。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`50f8f0f2`。
- 核對同一 ui 資源及 hash 的繁中、英文文字與本頁核心效果；省略公式或例外不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_toughness_on_vent.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/12e587e5-b69a-49cd-8d0f-a8280b832197)

圖片僅供技能辨識，不作機制證據。

