# 特提恩是迎賓(A Tertium Welcome)：原始碼依據

[English](en/broker_passive_first_target_damage.md)

[返回玩家說明](README.md#broker_passive_first_target_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_first_target_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_first_target_damage`；名稱鍵：`loc_talent_broker_passive_first_target_damage`；描述鍵：`loc_talent_broker_passive_first_target_damage_desc`。
- 節點：`node_546ca755-3d86-41f5-bfc3-01a388f9471a`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 常駐first_target_melee_damage_modifier=.15；damage_calculation要求is_first_target且is_melee_attack才加入傷害加算。沒有層數、時間或冷卻。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：299–305](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L299-L305)
- [scripts/settings/talent/talent_settings_broker.lua：220–222](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L220-L222)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：983–989](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L983-L989)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：859–874](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L859-L874)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：36–62](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L36-L62)

## 算例條件與待確認事項

- **傷害算例**：第一個目標的基礎傷害若為 100，單計此效果變成 100 × 1.15 = 115；已有同階段 25% 增傷則為 100 × (1 + 25% + 15%) = 140 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`4ebbdbb2`。
- 繁中與英文皆明確限定每次近戰攻擊的第一個目標，未見矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_first_target_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/e5936fa1-2583-4575-a968-aa37e1096a16)

圖片僅供技能辨識，不作機制證據。

