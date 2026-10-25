# 恢復姿態(Regained Posture)：原始碼依據

[English](en/broker_passive_stamina_on_successful_dodge.md)

[返回玩家說明](README.md#broker_passive_stamina_on_successful_dodge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_stamina_on_successful_dodge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_stamina_on_successful_dodge`；名稱鍵：`loc_talent_broker_passive_stamina_on_successful_dodge`；描述鍵：`loc_talent_broker_passive_stamina_on_successful_dodge_desc`。
- 節點：`node_763f2b5b-964d-42a3-b4d7-4fca89c0e311`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_successful_dodge呼叫Stamina.add_stamina(percentage=.1)，依目前武器與屬性組成的最大耐力計算。

## 原始碼依據

- [scripts/utilities/attack/stamina.lua：102–119](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L102-L119)
- [scripts/utilities/attack/stamina.lua：151–174](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stamina.lua#L151-L174)
- [scripts/settings/talent/talent_settings_broker.lua：340–342](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L340-L342)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：1797–1811](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L1797-L1811)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1050–1065](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1050-L1065)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：462–489](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L462-L489)

## 算例條件與待確認事項

- **恢復算例**：最大耐力 5 點時，每次恢復 5 × 10% = 0.5 點；目前為 4.8 點時，實際只恢復 0.2 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`022ffbe4`。
- 兩語皆為成功閃避恢復耐力，未見矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_stamina_on_successful_dodge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/31e809e4-4465-4dde-9719-1f66f8face02)

圖片僅供技能辨識，不作機制證據。

