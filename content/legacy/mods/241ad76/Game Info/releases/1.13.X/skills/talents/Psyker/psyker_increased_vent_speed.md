# 穩固(Solidity)：原始碼依據

[English](en/psyker_increased_vent_speed.md)

[返回玩家說明](README.md#psyker_increased_vent_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#psyker_increased_vent_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`psyker_increased_vent_speed`；名稱鍵：`loc_talent_psyker_increased_vent_speed`；描述鍵：`loc_talent_psyker_increased_vent_speed_description`。
- 節點：`node_57581786-6c2f-45d1-a396-8e58299d84d8`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- vent_warp_charge_speed=.7 同時乘 vent_interval 與 vent_duration。每次移除量的比值抵銷，間隔縮短；不能用4÷1.3。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua：2825–2831](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/psyker_buff_templates.lua#L2825-L2831)
- [scripts/settings/talent/talent_settings_psyker.lua：330–332](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_psyker.lua#L330-L332)
- [scripts/utilities/warp_charge.lua：251–315](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/warp_charge.lua#L251-L315)
- [scripts/utilities/shared_overheat_and_warp_charge_functions.lua：63–72](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L63-L72)
- [scripts/settings/ability/archetype_talents/talents/psyker_talents.lua：1056–1071](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/psyker_talents.lua#L1056-L1071)
- [scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua：936–964](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/psyker_tree.lua#L936-L964)

## 算例條件與待確認事項

- **時間算例**：相同武器、起始反噬與其他條件下，原本需 4 秒的平息過程約變成 4 × 0.7 = 2.8 秒。換算每秒處理速度為 1 ÷ 0.7 ≈ 1.429 倍，約快 42.9%。
- 算例不包含進入或退出平息動作動畫；排程與更新幀會有離散誤差。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`479e9713`。
- 本機用語為平息速度，固定源碼把.7套到時間與間隔。兩來源皆為1.13.1；實際表現待遊戲內核對，不直接判定繁中誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/psyker/default/psyker_increased_vent_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/7#issuecomment-5928034845)｜[圖片附件](https://github.com/user-attachments/assets/86582600-a30d-4e5a-b87b-ae33b2e78746)

圖片僅供技能辨識，不作機制證據。

