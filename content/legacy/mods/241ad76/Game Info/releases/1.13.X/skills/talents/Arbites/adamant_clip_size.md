# 秉賦為先(Priority Endowment)：原始碼依據

[English](en/adamant_clip_size.md)

[返回玩家說明](README.md#adamant_clip_size)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_clip_size)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_clip_size`；名稱鍵：`loc_talent_adamant_clip_size`；描述鍵：`loc_talent_adamant_clip_size_alt_desc`。
- 節點：`node_5d52392f-6daa-479c-9104-67a901e69a32`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- clip_size_modifier=.15。武器動態容量更新用math.ceil(base_max_clip*modifier)，目前彈量按舊填充比例換算後math.floor。初始化_apply_stat_buffs另用floor，之後動態更新會依ceil上限校正，不能僅引用初始化誤判原文進位錯誤。

## 原始碼依據

- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua：1426–1455](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1426-L1455)
- [scripts/extension_systems/weapon/player_unit_weapon_extension.lua：1326–1343](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1326-L1343)
- [scripts/settings/talent/talent_settings_adamant.lua：438–440](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L438-L440)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：2117–2123](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L2117-L2123)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2520–2535](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2520-L2535)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：2196–2221](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L2196-L2221)

## 算例條件與待確認事項

- **容量算例**：原本 30 發彈匣，30 × 1.15 = 34.5，向上取整數為 35 發；原本 5 發則由 5 × 1.15 = 5.75 變成 6 發。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5f584f5e`。
- 繁中「無條件進位」與英文 rounded up一致，動態容量更新也使用ceil；未列目前彈量換算不算錯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_clip_size.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/03af9ca3-e4f4-4383-9650-f8ac659cfadd)

圖片僅供技能辨識，不作機制證據。

