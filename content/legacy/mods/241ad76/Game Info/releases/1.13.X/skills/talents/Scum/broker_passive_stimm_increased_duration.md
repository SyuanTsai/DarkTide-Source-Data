# 延長藥效(Long Lasting)：原始碼依據

[English](en/broker_passive_stimm_increased_duration.md)

[返回玩家說明](README.md#broker_passive_stimm_increased_duration)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_stimm_increased_duration)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_stimm_increased_duration`；名稱鍵：`loc_talent_broker_passive_stimm_increased_duration`；描述鍵：`loc_talent_broker_passive_stimm_increased_duration_desc`。
- 節點：`node_9e73b9a9-bd27-46c2-b75d-1972b411c6b8`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- syringe_duration value=5；broker syringe及ability/power/speed syringe start_func讀取並add_duration；沒有duration時跳過。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4173–4181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4173-L4181)
- [scripts/settings/buff/syringe_buff_templates.lua：211–219](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/syringe_buff_templates.lua#L211-L219)
- [scripts/settings/buff/syringe_buff_templates.lua：274–282](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/syringe_buff_templates.lua#L274-L282)
- [scripts/settings/buff/syringe_buff_templates.lua：325–333](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/syringe_buff_templates.lua#L325-L333)
- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua：198–209](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L198-L209)
- [scripts/settings/talent/talent_settings_broker.lua：374–376](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L374-L376)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2001–2007](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2001-L2007)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1613–1628](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1613-L1628)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1704–1732](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1704-L1732)

## 算例條件與待確認事項

- **持續算例**：原本持續 15 秒的興奮劑，變成 15 + 5 = 20 秒；這是固定加 5 秒，不是增加 5%。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`905ad5d9`。
- 兩語都是興奮劑持續時間加5秒，未見矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_stimm_increased_duration.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/c19f893c-1a73-4111-b234-e675605b17b5)

圖片僅供技能辨識，不作機制證據。

