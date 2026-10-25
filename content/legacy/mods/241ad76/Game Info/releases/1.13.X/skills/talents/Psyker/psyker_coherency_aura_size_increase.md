# 傀儡師(Puppet Master)：原始碼依據

[English](en/psyker_coherency_aura_size_increase.md)

[返回玩家說明](README.md#psyker_coherency_aura_size_increase)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_coherency_aura_size_increase)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_coherency_aura_size_increase`；名稱鍵：`loc_talent_psyker_coherency_size_increase`；描述鍵：`loc_talent_psyker_coherency_size_increase_description`。
- 節點：`node_b2a9dab7-310f-4938-a070-97187d356f75`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- coherency_radius_modifier=.75 為 additive_multiplier，base=1。UnitCoherencyExtension.current_radius 使用 radius×modifier×multiplier。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：1850–1857](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L1850-L1857)
- [scripts/settings/talent/talent_settings_psyker.lua：43–45](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L43-L45)
- [scripts/extension_systems/coherency/unit_coherency_extension.lua：144–161](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/unit_coherency_extension.lua#L144-L161)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1375–1397](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1375-L1397)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：1019–1046](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L1019-L1046)

## 算例條件與待確認事項

- **範圍算例**：其他修正不變，原半徑 8 公尺變成 8 × 1.75 = 14 公尺。增加的是半徑；若只比較平面圓形面積，面積倍率為 1.75² = 3.0625。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5556945e`。
- 繁中「光環範圍變為{radius_modifier}倍」混用倍率與增加量；實際效果是半徑增加 75%，也就是原本的 1.75 倍。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_coherency_aura_size_increase.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/1561e519-2633-4a6f-af9f-fffe6a6c8a03)

圖片僅供技能辨識，不作機制證據。

