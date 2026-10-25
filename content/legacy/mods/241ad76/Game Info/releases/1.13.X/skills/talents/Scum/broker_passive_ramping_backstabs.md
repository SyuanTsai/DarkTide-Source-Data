# 加重背刺(Ramping Backstabs)：原始碼依據

[English](en/broker_passive_ramping_backstabs.md)

[返回玩家說明](README.md#broker_passive_ramping_backstabs)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_ramping_backstabs)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_ramping_backstabs`；名稱鍵：`loc_talent_broker_passive_ramping_backstabs`；描述鍵：`loc_talent_broker_passive_ramping_backstabs_desc`。
- 節點：`node_1e885682-6bee-46c1-9d23-21332ffd3b51`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_melee_hit且is_backstab增加childBuff；其他近戰命中mark_finished所有已記錄stack。child max_stacks5/melee_power_level_modifier=.1，無duration。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1641–1652](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1641-L1652)
- [scripts/utilities/attack/power_level.lua：25–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/settings/talent/talent_settings_broker.lua：332–335](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L332-L335)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1617–1640](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1617-L1640)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1501–1520](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1501-L1520)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：635–662](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L635-L662)

## 算例條件與待確認事項

- **威力算例**：5 層共增加 50%。若進入此加成階段的威力為 500，則為 500 × 1.5 = 750；另有同階段 20% 威力時為 500 × (1 + 20% + 50%) = 850。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2f7fcac8`。
- 兩語皆為背刺提高強度、非背刺清空；威力與最終傷害的區別屬補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_ramping_backstabs.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/d6f72725-01aa-4bc8-aeca-5e76118c1a51)

圖片僅供技能辨識，不作機制證據。

