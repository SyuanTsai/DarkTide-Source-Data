# 碎骨打擊(Boiling Blood)：原始碼依據

[English](en/broker_ability_punk_rage_sub_4.md)

[返回玩家說明](README.md#broker_ability_punk_rage_sub_4)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_ability_punk_rage_sub_4)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_ability_punk_rage_sub_4`；名稱鍵：`loc_talent_broker_ability_punk_rage_sub_4`；描述鍵：`loc_talent_broker_ability_punk_rage_sub_4_desc`。
- 節點：`node_8efd6143-4d2d-4bd8-a40d-229263fccfd1`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此天賦掛 broker_rage_duration_extend。怒火的近戰 on_hit 事件先採基礎 max_duration=20、added_duration=0.3；只有此分支存在時，並且 params.tags 含 elite、special、monster 或 captain 任一標籤，才切換為 max_duration=30、added_duration=1。這比本地化文字列出的 Elite/Monstrosities 標籤範圍更廣，會納入專家及隊長標籤。
- 兩種命中各自呼叫共用延長邏輯，按啟動後經過時間除以各自門檻取整，再把本次延長量除以 2 的相應次方。因此特殊標籤命中在 0–30 秒為1秒、30–60秒為0.5秒、60–90秒為0.25秒；其他近戰命中仍按20秒門檻和0.3秒基礎值計算。
- 命中事件檢查攻擊類型為 melee，並未要求擊殺；每次仍受可延長起始時間上限與目前 buff 剩餘時間約束。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：456–494](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L456-L494)
- [scripts/settings/talent/talent_settings_broker.lua：142–168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L142-L168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：243–253](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L243-L253)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：683–701](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L683-L701)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：456–494](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L456-L494)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1972–1994](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1972-L1994)

## 算例條件與待確認事項

- **延長量算例**：特殊敵人命中在啟動後30秒內加1秒；跨過30秒後為1÷2=0.5秒；跨過60秒後為1÷2²=0.25秒。普通敵人則在20秒後按0.3÷2=0.15秒遞減。
- 30秒遞減門檻只用於帶 elite、special、monster 或 captain 標籤的目標命中，並未改變一般敵人命中的基礎延長。
- 延長是每次近戰命中增加的持續時間，30秒不是怒火總長度上限。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`43686b03`。
- 繁中與英文都描述精英／怪物命中可延長1秒、遞減門檻延至30秒；程式證據確認特殊標籤命中使用該值。專家與隊長標籤也適用是程式補充，不是原文反向。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_punk_rage_sub_4.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/040166f5-e6b1-4f43-ae17-2c21b8fd8014)

圖片僅供技能辨識，不作機制證據。

