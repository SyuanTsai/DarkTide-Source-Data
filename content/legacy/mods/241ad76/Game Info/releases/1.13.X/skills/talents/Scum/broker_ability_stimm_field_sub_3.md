# 熟練部署(Practiced Deployment)：原始碼依據

[English](en/broker_ability_stimm_field_sub_3.md)

[返回玩家說明](README.md#broker_ability_stimm_field_sub_3)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_ability_stimm_field_sub_3)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_ability_stimm_field_sub_3`；名稱鍵：`loc_talent_broker_ability_stimm_field_sub_3`；描述鍵：`loc_talent_broker_ability_stimm_field_sub_3_desc`。
- 節點：`node_c7a8a5c5-60d1-4c71-bc38-79121befb0c8`；分類：能力；配點成本：1 點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此天賦掛常駐 interval buff broker_ability_stimm_field_sub_3，伺服器端每0.5秒檢查一次。啟動時記錄 pocketable_small 欄位是否已有 syringe 標籤物品，以及 pocketable_ability 剩餘充能數。
- 之後若普通興奮劑欄位從無到有，或自身 pocketable_ability 剩餘充能增加，呼叫 restore_ability_charge_percentage(combat_ability,1)；該函式恢復一個充能成本比例並將資源限制在能力上限。兩個條件各自判斷，可能各呼叫一次；都受同一充能上限限制。
- combat_ability 是單次充能、60秒自然回充；因此此觸發直接補回一個完整能力充能。檢查為輪詢方式，最多等待約0.5秒；若欄位已有興奮劑，新增本天賦時只記錄目前狀態，不立即恢復。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：573–587](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L573-L587)
- [scripts/settings/talent/talent_settings_broker.lua：170–188](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L170-L188)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua：98–112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L98-L112)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3830–3872](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3830-L3872)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1081–1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1127–1165](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1127-L1165)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：573–587](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L573-L587)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：2071–2093](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2071-L2093)

## 算例條件與待確認事項

- **充能算例**：一次觸發把一個缺少的能力充能成本比例補回；60秒冷卻期間即使只剩部分未充滿，也會補至單次充能上限。
- 常駐效果以0.5秒間隔檢查新狀態；已持有興奮劑時不會因首次讀取而立即觸發。
- 能力最多1次充能，無法將多次觸發累積成超過上限的充能。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`88b27852`。
- 繁中與英文都表示取得可用興奮劑後可使能力準備就緒，觸發條件一致。固定版本實際以0.5秒間隔檢查，且只恢復到充能上限；這是文案時序及充能上限補充，不構成中英矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_stimm_field_sub_3.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/c0ce43c8-1324-4c26-8319-c1f12c28fbb3)

圖片僅供技能辨識，不作機制證據。

