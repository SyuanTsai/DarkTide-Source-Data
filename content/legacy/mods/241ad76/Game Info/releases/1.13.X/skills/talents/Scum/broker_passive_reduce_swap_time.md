# 黏黏手(Sticky Hands)：原始碼依據

[English](en/broker_passive_reduce_swap_time.md)

[返回玩家說明](README.md#broker_passive_reduce_swap_time)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_passive_reduce_swap_time)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_passive_reduce_swap_time`；名稱鍵：`loc_talent_broker_passive_reduce_swap_time`；描述鍵：`loc_talent_broker_passive_reduce_swap_time_desc`。
- 節點：`node_977720e3-b06a-4dc7-b27c-497af87a0812`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- wield_speed=.4常駐；not alternate_fire.is_active或actionkeyword braced時recoil_modifier=-.1/spread_modifier=-.3。
- recoil extension用modifier乘unsteadiness增加量，衰減則乘其倒數；spread extension直接乘pitch/yaw。

## 原始碼依據

- [scripts/utilities/action/action_handler.lua：356–428](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L428)
- [scripts/extension_systems/recoil/player_unit_weapon_recoil_extension.lua：90–110](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/recoil/player_unit_weapon_recoil_extension.lua#L90-L110)
- [scripts/extension_systems/spread/player_unit_weapon_spread_extension.lua：170–182](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/spread/player_unit_weapon_spread_extension.lua#L170-L182)
- [scripts/settings/talent/talent_settings_broker.lua：223–227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L223-L227)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：990–1012](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L990-L1012)
- [scripts/settings/ability/archetype_talents/talents/broker_talents.lua：875–906](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/broker_talents.lua#L875-L906)
- [scripts/ui/views/talent_builder_view/layouts/broker_tree.lua：999–1028](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/broker_tree.lua#L999-L1028)

## 算例條件與待確認事項

- **切換算例**：可加速的切換動作原需 1 秒，變成 1 ÷ 1.4 ≈ 0.71 秒。
- **散佈算例**：單計此效果，原本 2 度的散佈角變成 2 × 0.7 = 1.4 度。後座力修正影響不穩定度累積與恢復，實際鏡頭位移還取決於武器曲線。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`dd6f6b11`。
- 兩語均描述切換速度、腰射或架槍的後座力及散佈，未見矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/default/broker_passive_reduce_swap_time.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5933987866)｜[圖片附件](https://github.com/user-attachments/assets/2dfab969-4eb2-4181-aa52-7dc1c8c93f89)

圖片僅供技能辨識，不作機制證據。

