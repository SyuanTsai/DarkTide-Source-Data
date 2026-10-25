# 永恆(Eternal)：原始碼依據

[English](en/zealot_quickness_increased_duration.md)

[返回玩家說明](README.md#zealot_quickness_increased_duration)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_quickness_increased_duration)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_quickness_increased_duration`；名稱鍵：`loc_talent_zealot_quickness_increased_duration`；描述鍵：`loc_talent_zealot_quickness_increased_duration_desc`。
- 節點：`node_8b72c79c-2b0f-4081-b919-f730aaee433d`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此節點給予 `zealot_quickness_increased_duration` special rule。主 parent buff 依此規則選擇 `zealot_quickness_active_increased_duration`；該 buff 複製 Quickness active 的效果，只把持續時間由 6 秒覆寫為設定值 10 秒。
- 計數器的 20 層上限、取得方式、命中消耗條件及每層 stat 效果不變；延長的是命中後啟動的效果時間，不是收集層數的期限。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2260–2279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2260-L2279)
- [scripts/settings/talent/talent_settings_zealot.lua：556–561](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L556-L561)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：197–231](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L197-L231)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：288–313](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L288-L313)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2260–2279](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2260-L2279)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1623–1645](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1623-L1645)

## 算例條件與待確認事項

- **持續算例**：第 0 秒命中啟動後，原本約第 6 秒結束，改為約第 10 秒結束；期間命中仍不會重設本輪加成的持續時間。持續時間增加 4 秒，層數與每層加成不變。
- 只延長 Quickness active buff；不改每層效果數值或層數獲得速度。
- 10 秒效果若搭配 Momentum 回韌性節點，理論回韌時間也相應延長；實際仍受韌性上限和傷害影響。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`ffd6bfbb`。
- 遊戲繁中「持續時間延長至 10 秒」與英文一致；原始碼 talent name 有舊的閃避文字，但正式本地化描述與實際特殊規則都指向持續時間。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_quickness_increased_duration.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/aee84e86-4f0b-4d69-87e7-9602f27396e2)

圖片僅供技能辨識，不作機制證據。

