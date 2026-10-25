# 專注凝神(Focused Resolve)：原始碼依據

[English](en/broker_ability_focus_sub_3.md)

[返回玩家說明](README.md#broker_ability_focus_sub_3)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_ability_focus_sub_3)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_ability_focus_sub_3`；名稱鍵：`loc_talent_broker_ability_focus_sub_3`；描述鍵：`loc_talent_broker_ability_focus_sub_3_desc`。
- 節點：`node_28d7a3c1-58af-42f2-99c4-70b734175557`；分類：能力；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此節點啟用 broker_focus_cooldown_regain；強化專注 buff 的 on_kill 與特定 on_minion_death 共用擊殺處理。一般 on_kill 檢查死亡結果、遠程攻擊（或武器設定視為遠程）及命中點至攻擊者位置在12.5公尺內；此檢查沒有另讀 outline/標記狀態。
- 受害者 breed 標籤含 elite 或 special 時恢復1秒；其他合格擊殺恢復0.5秒。template_data.cooldown_restored 逐次累加，且每次先扣除已恢復量後再受 max_restore=5 限制，因此單次能力狀態總恢復不超過5秒。
- 能力資源設定45點消耗、每秒自然補1點；buff 存續期間自然補充被暫停。restore_ability_resource 仍直接加回資源並受滿值上限約束，因此5點恢復最多把充能需求從45減到40；停止狀態後自然補充再繼續。
- 特殊的間接擊殺來自針槍追蹤：狀態期間僅將指定針槍、遠程攻擊命中且仍存活的敵人記錄為已追蹤；後續 minion death 必須 damage_type=toxin，且死亡位置到 params.attacking_unit 目前位置不超過12.5公尺。這不是任何 toxin 死亡都觸發，攻擊者位置也不保證等於能力持有者的位置。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：220–260](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L220-L260)
- [scripts/settings/talent/talent_settings_broker.lua：119–141](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L119-L141)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua：37–65](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L37-L65)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：255–314](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L255-L314)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：398–450](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L398-L450)
- [scripts/settings/buff/broker_buff_utils.lua：99–190](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/broker_buff_utils.lua#L99-L190)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：306–318](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L306-L318)
- [scripts/settings/buff/helper_functions/check_proc_functions.lua：777–792](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L792)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1081–1102](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1081-L1102)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：839–884](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L839-L884)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：220–260](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L220-L260)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：2025–2047](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L2025-L2047)

## 算例條件與待確認事項

- **冷卻算例**：若沒有其他修正，45秒冷卻按每秒1點充能；一般近距離遠程擊殺每次補0.5秒，精英／專家補1秒，累計最多5秒後自然充能尚需40秒。
- 遠程擊殺觸發依近距離檢查，不會因其他距離的擊殺而恢復；原文所稱標記目標不會由擊殺處理另外檢查標記狀態。
- 針槍毒素間接死亡須此前被指定針槍遠程命中追蹤、毒素致死且死亡位置距攻擊者不超過12.5公尺；不能概括為任何毒素擊殺。
- 最大5秒是單次專注期間的累計上限；冷卻自然充能暫停到專注狀態結束。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5ba532cd`。
- 繁中與英文都寫標記敵人擊殺恢復0.5秒、精英或專家恢復1秒、上限5秒，數值相符。固定版本程式的普通擊殺檢查是近距離遠程擊殺，沒有另外檢查標記旗標；針槍毒素死亡是有追蹤及距離條件的特例，原文省略不等於翻譯錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/ability_modifier/broker_ability_focus_sub_3.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/74d4304b-23f7-4666-879b-62c727596b69)

圖片僅供技能辨識，不作機制證據。

