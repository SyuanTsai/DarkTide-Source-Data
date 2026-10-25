# 二元彈道協議(Binary Ballistics Protocol)：原始碼依據

[English](en/cryptic_elite_kills_toughness.md)

[返回玩家說明](README.md#cryptic_elite_kills_toughness)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_elite_kills_toughness)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_elite_kills_toughness`；名稱鍵：`loc_talent_cryptic_elite_kills_toughness`；描述鍵：`loc_talent_cryptic_elite_kills_toughness_desc`。
- 節點：`node_baf3690d-c727-4388-ba24-bb4c55ef6699`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_kill只經on_elite_kill，沒有ranged過濾；allow_proc_while_active，update速率0.15/3。

## 原始碼依據

- [scripts/settings/buff/helper_functions/check_proc_functions.lua：96–109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L96-L109)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_cryptic.lua：402–405](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L402-L405)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2244–2272](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2244-L2272)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：1817–1835](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L1817-L1835)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：808–834](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L808-L834)

## 算例條件與待確認事項

- **恢復算例**：最大韌性 200，每秒 200 × 15% ÷ 3 = 10 點，完整 3 秒共 30 點；若第 2 秒再次觸發，連續 5 秒共可恢復 50 點。
- 韌性恢復以最大值計算，可受恢復加成影響且補到上限為止；算例固定無其他恢復加成。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`46309d46`。
- 繁中與英文一致；補充持續恢復與重新計時。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_elite_kills_toughness.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/79eb4aea-82d8-46fb-add1-a4ded8e41cce)

圖片僅供技能辨識，不作機制證據。

