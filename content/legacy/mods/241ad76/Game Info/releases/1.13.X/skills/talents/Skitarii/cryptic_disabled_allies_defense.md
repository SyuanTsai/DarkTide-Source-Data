# 守護協議(Protectorate Protocol)：原始碼依據

[English](en/cryptic_disabled_allies_defense.md)

[返回玩家說明](README.md#cryptic_disabled_allies_defense)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_disabled_allies_defense)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_disabled_allies_defense`；名稱鍵：`loc_talent_cryptic_disabled_allies_defense`；描述鍵：`loc_talent_cryptic_disabled_allies_defense_post_boost_desc`。
- 節點：`node_fd9cf282-8e86-4503-acfe-f8a3841e535e`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- talent coherency給cryptic_disabled_allies_defense，requires_help條件套0.75；passive援助事件需interactor_unit=self與受助者存活。
- 援助後Buff max1 duration6 refresh，stun_immune與0.75，實際讀disabled_allies_defense的damage_taken_multiplier，不是unused cryptic_assisted_allies_defense.settings=0.5。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3552–3571](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3552-L3571)
- [scripts/utilities/attack/player_unit_status.lua：94–112](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/player_unit_status.lua#L94-L112)
- [scripts/utilities/attack/damage_calculation.lua：584–611](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L584-L611)
- [scripts/settings/talent/talent_settings_cryptic.lua：639–643](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L639-L643)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3572–3599](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3572-L3599)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3531–3551](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3531-L3551)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2613–2652](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2613-L2652)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2346–2371](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2346-L2371)

## 算例條件與待確認事項

- **減傷算例**：單一效果下，原本 100 點傷害變成 100 × 0.75 = 75 點；另有獨立 20% 減傷時為 100 × 0.75 × 0.80 = 60 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5bdd6b9d`。
- 雙語一致；補充需自己援助、協同與獨立6秒效果的邊界。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_disabled_allies_defense.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030)｜[圖片附件](https://github.com/user-attachments/assets/53a3e76f-67fe-4d9e-bff5-7aafaee21065)

圖片僅供技能辨識，不作機制證據。

