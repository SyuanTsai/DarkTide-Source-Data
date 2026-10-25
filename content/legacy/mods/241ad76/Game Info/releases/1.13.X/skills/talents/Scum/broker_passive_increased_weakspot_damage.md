# 甜蜜點(The Sweet Spot)：原始碼依據

[English](en/broker_passive_increased_weakspot_damage.md)

[返回玩家說明](README.md#broker_passive_increased_weakspot_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_increased_weakspot_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_increased_weakspot_damage`；名稱鍵：`loc_talent_broker_passive_increased_weakspot_damage`；描述鍵：`loc_talent_broker_passive_increased_weakspot_damage_desc`。
- 節點：`node_52c9240d-6228-4b32-badf-76f17ef9b6da`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- weakspot_damage=.25在hit_weakspot時加入finesse_buff_damage_multiplier，final_finesse_damage=base_finesse_damage*該倍率。
- base_finesse_damage依damage profile、護甲、weakspot modifier與crit boost曲線產生。算例將一般與額外部分固定，排除其他修正，只示範此倍率作用範圍。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：675–782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L675-L782)
- [scripts/settings/talent/talent_settings_broker.lua：351–353](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L351-L353)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1871–1877](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1871-L1877)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1379–1394](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1379-L1394)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1536–1565](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1536-L1565)

## 算例條件與待確認事項

- **傷害算例**：假設一般部分 100、弱點額外部分 100，原本合計 200；加成後為 100 + 100 × 1.25 = 225，總傷害增加 12.5%。
- **武器差異算例**：另一武器若一般部分 100、額外部分 300，原本 400，生效後為 100 + 300 × 1.25 = 475，總增幅為 18.75%。所以同一項 25% 弱點加成，在不同武器上不會固定增加相同的總傷害百分比。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`54b98b85`。
- 繁中與英文都簡寫弱點傷害，公式缺漏不是描述錯誤；補上不同武器的總增幅差異。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_increased_weakspot_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/bd4b828f-f439-429d-a682-c036774235f3)

圖片僅供技能辨識，不作機制證據。

