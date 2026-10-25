# 毒性再生(Toxic Renewal)：原始碼依據

[English](en/broker_passive_replenish_toughness_while_toxined_enemies_in_proximity.md)

[返回玩家說明](README.md#broker_passive_replenish_toughness_while_toxined_enemies_in_proximity)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_replenish_toughness_while_toxined_enemies_in_proximity)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_replenish_toughness_while_toxined_enemies_in_proximity`；名稱鍵：`loc_talent_broker_toughness_on_toxined_kill`；描述鍵：`loc_talent_broker_passive_replenish_toughness_while_toxined_enemies_in_proximity_desc`。
- 節點：`node_b2bbbec7-1551-42ea-9d9b-9771eda40654`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 每.2秒查詢敵人toxin狀態，每1秒server interval呼叫Toughness.replenish_percentage(.01*min(n,10))。
- 倒地檢查使用template_data.character_state_component但此start_func未設該欄位；不憑這段宣稱已驗證倒地時行為。

## 原始碼依據

- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2741–2829](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2741-L2829)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：3117–3171](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L3117-L3171)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1364–1394](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1364-L1394)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100、附近 4 名感染敵人，每秒恢復 100 × 4 × 1% = 4 點；10 名或更多時，每秒最多 10 點。只缺 3 點時實際只補 3 點。
- 倒地狀態下的實際恢復行為未做遊戲內驗證。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`c1d98f78`。
- 兩語均描述範圍、間隔、每敵人恢復量與上限，未見矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_replenish_toughness_while_toxined_enemies_in_proximity.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/0d36baca-b919-457c-890e-535a0ce33236)

圖片僅供技能辨識，不作機制證據。

