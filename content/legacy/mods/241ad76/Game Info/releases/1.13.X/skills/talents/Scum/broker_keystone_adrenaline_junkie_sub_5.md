# 腎上腺素突破(Adrenaline Unbound)：原始碼依據

[English](en/broker_keystone_adrenaline_junkie_sub_5.md)

[返回玩家說明](README.md#broker_keystone_adrenaline_junkie_sub_5)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_keystone_adrenaline_junkie_sub_5)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_keystone_adrenaline_junkie_sub_5`；名稱鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_5`；描述鍵：`loc_talent_broker_keystone_adrenaline_junkie_sub_5_desc`。
- 節點：`node_084b7585-f08d-497a-939b-848ffcb58960`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 升級啟用 broker_keystone_adrenaline_junkie_restore_toughness special rule；Frenzy buff 僅在伺服器端將 restore_toughness 設為設定值 0.05。
- update_func 以 next_tick=t 初始化；若 next_tick<=t，呼叫 Toughness.replenish_percentage(unit,0.05)，並將下一 tick 設為 next_tick+1。
- recover_percentage_toughness 以 max_toughness×fixed_percentage 計算目標恢復值，再從 toughness_damage 扣除並以 0 為下限；因此單 tick 的理論恢復量是最大韌性 5%，實際恢復受缺額與韌性恢復修正影響。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2827–2855](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2827-L2855)
- [scripts/settings/talent/talent_settings_broker.lua：464–480](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L464-L480)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3761–3807](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3761-L3807)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3818–3829](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3818-L3829)
- [scripts/utilities/toughness/toughness.lua：16–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/toughness/toughness.lua#L16-L25)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L279)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2827–2855](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2827-L2855)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1834–1856](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1834-L1856)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100 且至少缺 5 點、沒有其他韌性恢復修正時，一次 tick 為 100 × 0.05 = 5 點；若只缺 3 點，實際最多補 3 點。
- 每秒 5% 按最大韌性計算，不是按缺失韌性計算；實際補量會受其他恢復修正影響，且不會超過最大韌性。
- 此升級只在 Frenzy buff 活躍時恢復韌性；Frenzy 持續多久仍由核心或延長狂暴升級決定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`1af84a83`。
- 繁中與英文都把恢復效果限定在狂暴期間，設定值為每秒 5%；程式使用最大韌性百分比回補並由韌性缺額限制實際值。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_adrenaline_junkie_sub_5.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/49a6640b-2259-4b1b-9fd1-634da02747ce)

圖片僅供技能辨識，不作機制證據。

