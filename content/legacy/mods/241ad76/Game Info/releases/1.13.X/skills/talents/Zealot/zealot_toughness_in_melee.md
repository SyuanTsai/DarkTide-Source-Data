# 內憂外患(Enemies Within, Enemies Without)：原始碼依據

[English](en/zealot_toughness_in_melee.md)

[返回玩家說明](README.md#zealot_toughness_in_melee)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_toughness_in_melee)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_toughness_in_melee`；名稱鍵：`loc_talent_zealot_toughness_regen_in_melee`；描述鍵：`loc_talent_zealot_toughness_near_enemies_desc`。
- 節點：`node_019a38fd-8454-4e5c-961b-7e74d408f0af`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- update先用先前百分比*dt恢復，每.1秒重新查半徑5的broadphase。每名敵人先加1，monster/captain/cultist_captain再加monster_count5，因此實際權重6；不是設定名稱所暗示的總數5。
- is_disabled時直接return。恢復以最大韌性為基準，受恢復加成及缺額限制。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：1481–1592](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1481-L1592)
- [scripts/settings/talent/talent_settings_zealot.lua：199–205](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L199-L205)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：2979–3017](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L2979-L3017)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：887–918](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L887-L918)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 100，附近 3 名一般敵人時，每秒補 100 × [2.5% + (3 − 1) × 1%] = 4.5 點；6 名時達到每秒 7.5 點上限。
- 本機中英文皆寫巨獸算5；固定實作先+1再+5。兩來源版本對應為1.13.1，列跨來源差異而非繁中誤譯。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`fc8eff61`。
- 本機中英文皆寫巨獸按5名敵人；固定update先為每名敵人加1，再為巨獸或頭目加5，實際6。不是繁中單方翻錯，待遊戲內確認。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/default/zealot_toughness_in_melee.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929296872)｜[圖片附件](https://github.com/user-attachments/assets/fbb6b38f-57a3-4659-bf32-04d1edc4d989)

圖片僅供技能辨識，不作機制證據。

