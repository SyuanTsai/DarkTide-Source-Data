# 精準投毒(Targeted Toxin)：原始碼依據

[English](en/broker_passive_reduced_damage_by_toxined.md)

[返回玩家說明](README.md#broker_passive_reduced_damage_by_toxined)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_reduced_damage_by_toxined)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_reduced_damage_by_toxined`；名稱鍵：`loc_talent_broker_passive_reduced_damage_by_toxined`；描述鍵：`loc_talent_broker_passive_reduced_damage_by_toxined_desc`。
- 節點：`node_088ae839-61d1-45c5-9656-582439b3b638`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_buff_added由owner事件轉送，toxin keyword後依tags.monster/captain/cultist_captain分流；debuff damage=-.15/-.3，max1，無duration，失去toxin後退出。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2529–2566](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2529-L2566)
- [scripts/extension_systems/buff/buff_extension_base.lua：1346–1372](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L1346-L1372)
- [scripts/utilities/attack/damage_calculation.lua：233–244](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L233-L244)
- [scripts/settings/talent/talent_settings_broker.lua：386–389](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L386-L389)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2474–2528](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2474-L2528)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：2015–2037](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L2015-L2037)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1336–1363](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1336-L1363)

## 算例條件與待確認事項

- **減傷算例**：該敵人原本造成 100 點傷害，單計本效果變成 85；適用 30% 的頭目則為 70。這是降低敵人的輸出，隊友受到該敵人攻擊時也能受益。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`615c771b`。
- 英文寫你感染、繁中省略施毒者；屬條件不完整，依規則不列誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_reduced_damage_by_toxined.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/28aafc63-bbd4-4097-a93f-3fb0d62f8710)

圖片僅供技能辨識，不作機制證據。

