# 額外彈藥袋(Extra Pouches)：原始碼依據

[English](en/broker_passive_increased_blitz_ammo.md)

[返回玩家說明](README.md#broker_passive_increased_blitz_ammo)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_increased_blitz_ammo)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_increased_blitz_ammo`；名稱鍵：`loc_talent_broker_passive_increased_blitz_ammo`；描述鍵：`loc_talent_broker_passive_increased_blitz_ammo_desc`。
- 節點：`node_38569366-6b83-4815-a1e7-ca4f41f4a366`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- extra_max_amount_of_grenades=1，broker各手雷／飛彈launcher ability用stat_buff相加到max_charges。

## 原始碼依據

- [scripts/settings/ability/player_abilities/abilities/broker_abilities.lua：211–269](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/player_abilities/abilities/broker_abilities.lua#L211-L269)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：2311–2317](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L2311-L2317)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：1897–1919](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L1897-L1919)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：1252–1278](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L1252-L1278)

## 算例條件與待確認事項

- **容量算例**：原本最多攜帶 3 次閃擊時，變成 3 + 1 = 4 次；原本 2 次則變成 3 次。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0e811057`。
- 兩語均為增加閃擊充能數量，未見矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_increased_blitz_ammo.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/88f63a37-5b06-4bf2-93a5-95c9f3c98c48)

圖片僅供技能辨識，不作機制證據。

