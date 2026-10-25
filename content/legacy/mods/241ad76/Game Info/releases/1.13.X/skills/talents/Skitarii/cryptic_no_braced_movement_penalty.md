# 卓越追蹤聖歌(Superior Tracking Litanies)：原始碼依據

[English](en/cryptic_no_braced_movement_penalty.md)

[返回玩家說明](README.md#cryptic_no_braced_movement_penalty)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_no_braced_movement_penalty)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_no_braced_movement_penalty`；名稱鍵：`loc_talent_cryptic_no_braced_movement_penalty`；描述鍵：`loc_talent_cryptic_no_braced_movement_penalty_desc`。
- 節點：`node_f8cb2f49-4d9d-4b86-90fb-d0446febb49d`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- alternate_fire移動曲線以delta=1−mod，delta*=0.5，mod=1−delta；不是把速度乘1.5。
- spread_modifier=-0.45是無條件stat，與移動條件分開。

## 原始碼依據

- [scripts/utilities/alternate_fire.lua：160–173](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/alternate_fire.lua#L160-L173)
- [scripts/settings/talent/talent_settings_cryptic.lua：607–610](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L607-L610)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3250–3257](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3250-L3257)
- [scripts/extension_systems/spread/player_unit_weapon_spread_extension.lua：170–181](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/spread/player_unit_weapon_spread_extension.lua#L170-L181)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2448–2470](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2448-L2470)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：864–889](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L864-L889)

## 算例條件與待確認事項

- **移動算例**：原本速度為正常移動的 60%，減速幅度是 40%；生效後為 1 − 40% × 0.5 = 80% 正常速度。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f793a029`。
- 繁中占位值含負號，與英文一致；補充減少的是減速幅度且散布常駐，不列誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_no_braced_movement_penalty.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/29715f83-8068-4375-9aa9-d00c34e8d8f3)

圖片僅供技能辨識，不作機制證據。

