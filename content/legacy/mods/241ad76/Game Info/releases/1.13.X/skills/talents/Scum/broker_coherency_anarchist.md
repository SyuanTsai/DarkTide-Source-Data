# 無政府主義者(Anarchist)：原始碼依據

[English](en/broker_coherency_anarchist.md)

[返回玩家說明](README.md#broker_coherency_anarchist)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_coherency_anarchist)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_coherency_anarchist`；名稱鍵：`loc_talent_broker_aura_anarchist`；描述鍵：`loc_talent_broker_aura_anarchist_desc`。
- 節點：`node_821e29e2-e6df-445f-817d-2f2d5c79c617`；分類：光環；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- anarchist critical_strike_chance=.05/max1，coherency_id去重，criticalchance加算。

## 原始碼依據

- [scripts/settings/talent/talent_settings_broker.lua：206–214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L206-L214)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua：260–309](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L260-L309)
- [scripts/utilities/attack/critical_strike.lua：13–39](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39)
- [scripts/settings/talent/talent_settings_broker.lua：206–215](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L206-L215)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：902–916](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L902-L916)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：821–838](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L821-L838)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：407–433](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L407-L433)

## 算例條件與待確認事項

- **機率算例**：原本 10% 變成 10% + 5% = 15%，原本 25% 則變成 30%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`d1ab227e`。
- 繁中與英文均為協同爆擊率提升，未見矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/aura/broker_coherency_anarchist.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933978534)｜[圖片附件](https://github.com/user-attachments/assets/213537c0-9bdc-49a7-9b60-67aaeb58f395)

圖片僅供技能辨識，不作機制證據。

