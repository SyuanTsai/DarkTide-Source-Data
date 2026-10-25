# 移動目標(Moving Target)：原始碼依據

[English](en/broker_passive_increased_ranged_dodges.md)

[返回玩家說明](README.md#broker_passive_increased_ranged_dodges)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_increased_ranged_dodges)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_increased_ranged_dodges`；名稱鍵：`loc_talent_broker_passive_increased_ranged_dodges`；描述鍵：`loc_talent_broker_passive_increased_ranged_dodges_desc`。
- 節點：`node_3d505fe8-4783-4d64-9bc8-df4a39546474`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- secondary欄位啟用extra_consecutive_dodges=1，Dodge依武器diminishing_return_start加round(extra)得到consecutive_dodges_count。

## 原始碼依據

- [scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua：246–260](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L246-L260)
- [scripts/settings/talent/talent_settings_broker.lua：228–230](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L228-L230)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1013–1031](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1013-L1031)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：907–922](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L907-L922)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：663–689](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L663-L689)

## 算例條件與待確認事項

- **次數算例**：武器原有 3 次有效閃避時，變成 3 + 1 = 4 次。這項加成不增加閃避距離或速度。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`a7db2b5d`。
- 英文Effective Dodges與繁中「閃避效率」用詞不同；補清楚其為次數，依保守標準不把缺少量詞直接列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_increased_ranged_dodges.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/95c8ba8f-bd1f-424f-bee5-435d83d4dfa6)

圖片僅供技能辨識，不作機制證據。

