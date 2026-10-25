# 熟能生巧(Dedicated Practice)：原始碼依據

[English](en/ogryn_wield_speed_increase.md)

[返回玩家說明](README.md#ogryn_wield_speed_increase)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_wield_speed_increase)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_wield_speed_increase`；名稱鍵：`loc_talent_ogryn_wield_speed_increase`；描述鍵：`loc_talent_ogryn_wield_speed_increase_desc`。
- 節點：`node_cc251802-f60d-41bf-9528-7428fa11391b`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- wield_speed .35；ActionHandler依use_wield_speed將stat加入time_scale，動作time/time_scale。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3301–3307](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3301-L3307)
- [scripts/settings/talent/talent_settings_ogryn.lua：134–136](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L134-L136)
- [scripts/utilities/action/action_handler.lua：356–429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2538–2553](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2538-L2553)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：2098–2124](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L2098-L2124)

## 算例條件與待確認事項

- **時間算例**：原本 1 秒的動作變成 1 ÷ 1.35 ≈ 0.741 秒，約縮短 25.9%；不是縮短至原本的 35%，也不是直接減少 35% 時間。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`6349b08e`。
- 英文是增加Weapon Swap Speed，繁中寫「縮短為」把速度增幅誤當時間剩餘比例；不是單純省略公式。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_wield_speed_increase.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/5974d1c4-5b31-42b8-af90-022202c4614e)

圖片僅供技能辨識，不作機制證據。

