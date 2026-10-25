# 不滅意志(I Shall Not Fall)：原始碼依據

[English](en/zealot_martyrdom_grants_toughness.md)

[返回玩家說明](README.md#zealot_martyrdom_grants_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_martyrdom_grants_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_martyrdom_grants_toughness`；名稱鍵：`loc_talent_zealot_martyrdom_grants_toughness`；描述鍵：`loc_talent_zealot_martyrdom_grants_toughness_upd_desc`。
- 節點：`node_2d176f63-527c-4758-a1c1-eed8dfd6ac78`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 技能節點授予 `zealot_martyrdom_toughness`，其最大 `toughness_damage_taken_modifier` 為每格 -7.5% × 5；插值係數使用與殉道相同的失去傷口格數/5，限制在 0 到 1。
- 此加成只作用於韌性承傷 stat，不等於生命傷害降低；它沒有獨立觸發器、計時器或可疊層數，隨傷口格數變動。
- 殉道主鑰石與此升級共用相同格數算法；`health_step=.15` 在此路徑亦未使用。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3115–3135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3115-L3135)
- [scripts/settings/talent/talent_settings_zealot.lua：329–339](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L329-L339)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：633–678](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L633-L678)
- [scripts/utilities/health.lua：117–127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L117-L127)
- [scripts/utilities/attack/damage_taken_calculation.lua：223–258](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L223-L258)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：3115–3135](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L3115-L3135)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1062–1086](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1062-L1086)

## 算例條件與待確認事項

- **減傷算例**：3 層為 22.5% 韌性減傷，100 × (1 − 22.5%) = 77.5 點；5 層為 62.5 點。若另有同階段 10% 韌性減傷，滿層時為 100 × (1 − 37.5% − 10%) = 52.5 點，獨立減傷再相乘。
- 百分比是韌性承傷的修正，不要改寫成生命傷害減免或所有傷害減免。
- 示例只展示 stat 修正疊加，不推演其他韌性修正的最後合併結果。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`15546289`。
- 原文及繁中描述都是殉道層數提高韌性承傷減免；格數、每格比例與上限為實作補足。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_martyrdom_grants_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/3e61d06f-e542-40cc-acf4-88e2493cc594)

圖片僅供技能辨識，不作機制證據。

