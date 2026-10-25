# 威脅偵測指令(Threat Detection Imperative)：原始碼依據

[English](en/cryptic_ranged_kills_tdr.md)

[返回玩家說明](README.md#cryptic_ranged_kills_tdr)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_ranged_kills_tdr)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_ranged_kills_tdr`；名稱鍵：`loc_talent_cryptic_ranged_kills_tdr`；描述鍵：`loc_talent_cryptic_ranged_kills_tdr_desc`。
- 節點：`node_8bd02750-e89f-4b2c-8de2-ba4ccba29e99`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- stepped table第n層=1−0.04n；refresh_duration_on_stack與refresh_duration_on_remove_stack都true，非0.96^n。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2180–2206](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2180-L2206)
- [scripts/utilities/attack/damage_taken_calculation.lua：234–255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L255)
- [scripts/settings/talent/talent_settings_cryptic.lua：389–393](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L389-L393)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2169–2179](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2169-L2179)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1753–1776](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1753-L1776)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2600–2630](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2600-L2630)

## 算例條件與待確認事項

- **減傷算例**：5 層合計 20%，原本 100 點韌性傷害變成 100 × (1 − 5 × 4%) = 80；另有獨立 15% 減傷時，80 × 0.85 = 68 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`3a7d18c1`。
- 雙語一致；補充逐層時間軸與同技能加算。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_ranged_kills_tdr.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030)｜[圖片附件](https://github.com/user-attachments/assets/a2e228da-729a-4b03-b07a-72bfaadf5dc3)

圖片僅供技能辨識，不作機制證據。

