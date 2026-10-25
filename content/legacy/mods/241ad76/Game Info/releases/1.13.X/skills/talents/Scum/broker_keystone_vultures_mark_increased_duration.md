# 堅毅獵手(Patient Hunter)：原始碼依據

[English](en/broker_keystone_vultures_mark_increased_duration.md)

[返回玩家說明](README.md#broker_keystone_vultures_mark_increased_duration)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_keystone_vultures_mark_increased_duration)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_keystone_vultures_mark_increased_duration`；名稱鍵：`loc_talent_broker_keystone_vultures_mark_increased_duration`；描述鍵：`loc_talent_broker_keystone_vultures_mark_increased_duration_desc`。
- 節點：`node_aab0fcfa-aa2c-4f06-bed9-dd6903333cf0`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent_settings 設 core duration=8、increased_duration.duration=12。vultures_mark 的 start_func 檢查 special rule，並加入 12−8=4 秒額外時間，因此 buff duration 為 12 秒。
- vultures_mark 設 refresh_duration_on_stack=true；新 stack 或達最大層數時會重設 start_time。duration 是單一共享計時，且模板沒有 refresh_duration_on_remove_stack；到期時剩餘 stack 隨 finished buff 一起清除。
- 這項 special rule 只由 vultures_mark buff 的 start_func 使用，不改變其他兀鷲印記升級或兀鷲閃避的 1 秒效果。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2435–2449](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2435-L2449)
- [scripts/settings/talent/talent_settings_broker.lua：440–450](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L440-L450)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3387–3414](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3387-L3414)
- [scripts/extension_systems/buff/buff_extension_base.lua：434–461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L461)
- [scripts/extension_systems/buff/buff_extension_base.lua：560–589](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589)
- [scripts/extension_systems/buff/buff_extension_base.lua：631–698](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L631-L698)
- [scripts/extension_systems/buff/buff_extension_base.lua：187–205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L205)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2435–2449](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2435-L2449)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1658–1680](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1658-L1680)

## 算例條件與待確認事項

- **時間算例**：第一層在 0 秒取得，第二層在 6 秒取得後，計時重設為 12 秒；若之後無新印記，現有層數在第 18 秒到期。
- **上限算例**：已有 3 層時，第 4 次合格擊殺不增加第 4 層，但會重設 12 秒計時。
- 延長的是印記 buff 的共享時長；不提高 3 層上限，也不改變每層屬性加成或滿層回韌性的條件。
- 此項不延長兀鷲閃避升級所觸發的短暫閃避 buff。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`2a61076a`。
- 繁中與英文都將兀鷲印記持續時間列為 12 秒；程式以核心 8 秒加上 4 秒差額實作，且每次新增堆疊或重設持續時間會重設共享計時。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/keystone_modifier/broker_keystone_vultures_mark_increased_duration.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/76cdf6df-d713-4085-8b29-fce2c1c64413)

圖片僅供技能辨識，不作機制證據。

