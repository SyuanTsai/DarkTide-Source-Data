# 卓越防禦記憶模組(Superior Defence Engrams)：原始碼依據

[English](en/cryptic_ranged_stacking_toughness.md)

[返回玩家說明](README.md#cryptic_ranged_stacking_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_ranged_stacking_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_ranged_stacking_toughness`；名稱鍵：`loc_talent_cryptic_ranged_stacking_toughness`；描述鍵：`loc_talent_cryptic_ranged_stacking_toughness_desc`。
- 節點：`node_a615c4c7-47ca-4039-8649-58f9fbf10d17`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_ranged_kill給max5/duration8/refresh_duration_on_stack效果；update按stack_count*0.01*dt呼叫replenish_percentage。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3106–3129](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3106-L3129)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_cryptic.lua：574–578](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L574-L578)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3092–3105](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3092-L3105)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2294–2317](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2294-L2317)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2215–2244](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2215-L2244)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 200、5 層時，每秒恢復 200 × 5 × 1% = 10 點；維持滿層 8 秒共可恢復 80 點，最多補到上限。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`057bb0ce`。
- 中英文一致；補充重新計時與上限。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_ranged_stacking_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/deb63065-b15d-498f-a16c-ec7726ca6a22)

圖片僅供技能辨識，不作機制證據。

