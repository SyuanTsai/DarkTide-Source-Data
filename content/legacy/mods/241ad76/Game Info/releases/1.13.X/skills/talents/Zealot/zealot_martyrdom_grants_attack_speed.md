# 狂燥之心(Maniac)：原始碼依據

[English](en/zealot_martyrdom_grants_attack_speed.md)

[返回玩家說明](README.md#zealot_martyrdom_grants_attack_speed)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#zealot_martyrdom_grants_attack_speed)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`zealot_martyrdom_grants_attack_speed`；名稱鍵：`loc_talent_zealot_attack_speed_per_martyrdom`；描述鍵：`loc_talent_zealot_attack_speed_per_martyrdom_upd_desc`。
- 節點：`node_9d8273b3-4c5d-4317-b480-54a125376f0d`；分類：鑰石；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 此節點掛載 `zealot_martyrdom_attack_speed`，只設定 `melee_attack_speed`，最高為每格 6% × 5；Buff 依與殉道相同的失去傷口格數/5 線性插值。
- 沒有額外 proc、冷卻、時間或計時層數；效果直接跟隨傷口格數。它加成近戰攻擊速度，不包含遠程開火速度。

## 原始碼依據

- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1551–1571](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1551-L1571)
- [scripts/settings/talent/talent_settings_zealot.lua：364–375](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_zealot.lua#L364-L375)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：633–652](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L633-L652)
- [scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua：1715–1739](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/zealot_buff_templates.lua#L1715-L1739)
- [scripts/utilities/health.lua：117–127](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L117-L127)
- [scripts/utilities/action/action_handler.lua：356–429](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L356-L429)
- [scripts/settings/ability/archetype_talents/talents/zealot_talents.lua：1551–1571](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/zealot_talents.lua#L1551-L1571)
- [scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua：1087–1111](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/zealot_tree.lua#L1087-L1111)

## 算例條件與待確認事項

- **速度算例**：3 層增加 3 × 6% = 18% 近戰攻速，受影響的 1 秒動作變成 1 ÷ 1.18 ≈ 0.847 秒；5 層為 1 ÷ 1.3 ≈ 0.769 秒。其他同階段攻速先相加。
- 示例未計入其他攻擊速度修正及最終動作速度計算。
- 失去的傷口格數依目前最大生命與最大傷口數計算；不代表每缺固定百分比血量增加一層。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b83c3710`。
- 原文與繁中指向殉道層數提供攻擊速度；程式明確限定為近戰攻擊速度，缺失傷口格和數值補充不構成矛盾。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/zealot/keystone_modifier/zealot_martyrdom_grants_attack_speed.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/8#issuecomment-5929289315)｜[圖片附件](https://github.com/user-attachments/assets/2a096b34-3273-406a-82fc-23c774fcaedf)

圖片僅供技能辨識，不作機制證據。

