# 毒藥狂熱(Toxin Mania)：原始碼依據

[English](en/broker_passive_damage_after_toxined_enemies.md)

[返回玩家說明](README.md#broker_passive_damage_after_toxined_enemies)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_damage_after_toxined_enemies)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_damage_after_toxined_enemies`；名稱鍵：`loc_talent_broker_damage_after_toxined_enemies`；描述鍵：`loc_talent_broker_damage_after_toxined_enemies_desc`。
- 節點：`node_45324e02-771e-4f7d-8743-d306bcf106d2`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 每.2秒broadphase查詢range=DamageSettings.ranged_close，只看敵人toxin keyword，不看owner；stat multiplier clamp敵數0..3，damage=.05。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：233–244](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L233-L244)
- [scripts/settings/damage/damage_settings.lua：18–25](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L25)
- [scripts/settings/talent/talent_settings_broker.lua：390–395](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L390-L395)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2567–2643](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2567-L2643)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2057–2081](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2057-L2081)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1196–1222](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1196-L1222)

## 算例條件與待確認事項

- **傷害算例**：附近有 2 名感染敵人，增傷 10%，基礎 100 點變成 110；同階段原有 25% 時為 100 × (1 + 25% + 10%) = 135 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f70dc769`。
- 兩語都按附近感染敵人數量增傷，距離及來源不限為補充。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_damage_after_toxined_enemies.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/06abfebe-3a5e-421b-b71a-35e5faee2767)

圖片僅供技能辨識，不作機制證據。

