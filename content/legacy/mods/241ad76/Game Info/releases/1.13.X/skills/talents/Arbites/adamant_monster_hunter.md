# 巨獸獵人(Monstrosity Hunter)：原始碼依據

[English](en/adamant_monster_hunter.md)

[返回玩家說明](README.md#adamant_monster_hunter)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_monster_hunter)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_monster_hunter`；名稱鍵：`loc_talent_adamant_monster_hunter`；描述鍵：`loc_talent_adamant_monster_hunter_desc`。
- 節點：`node_48e362cb-c6b4-4d38-a325-08667444b783`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- damage_vs_ogryn_and_monsters=.2；DamageCalculation以target_is_ogryn_or_monster的一個OR條件加入一次一般傷害階段。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：391–402](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L391-L402)
- [scripts/settings/talent/talent_settings_adamant.lua：480–482](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L480-L482)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3036–3042](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3036-L3042)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2805–2820](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2805-L2820)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1991–2017](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1991-L2017)

## 算例條件與待確認事項

- **傷害算例**：對符合類型的目標，基礎 100 點傷害變成 100 × (1 + 20%) = 120 點；已有同階段 25% 加成時，為 100 × (1 + 25% + 20%) = 145 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`7ec647c9`。
- 繁中「歐格林和巨獸」對應英文 Ogryns and Monstrosities，沒有重複計算兩份加成的依據。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_monster_hunter.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/62b4954d-42c3-4eab-a6ea-a17719414e19)

圖片僅供技能辨識，不作機制證據。

