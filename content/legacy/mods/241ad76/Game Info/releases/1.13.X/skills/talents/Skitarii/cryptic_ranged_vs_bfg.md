# 暗殺協議(Assassination Protocols)：原始碼依據

[English](en/cryptic_ranged_vs_bfg.md)

[返回玩家說明](README.md#cryptic_ranged_vs_bfg)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_ranged_vs_bfg)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_ranged_vs_bfg`；名稱鍵：`loc_talent_cryptic_ranged_vs_bfg`；描述鍵：`loc_talent_cryptic_ranged_vs_bfg_desc`。
- 節點：`node_7d5dc6be-b293-4831-a12c-d79c725e5b7a`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 各別ranged_damage_vs_ogryn/monsters/captains=0.25，共用傷害按breed.tags判斷並加算，不能僅憑敵人體型推定。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：389–413](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L389-L413)
- [scripts/settings/talent/talent_settings_cryptic.lua：584–588](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L584-L588)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3147–3155](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3147-L3155)
- [scripts/utilities/attack/damage_calculation.lua：232–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2341–2356](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2341-L2356)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1456–1485](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1456-L1485)

## 算例條件與待確認事項

- **傷害算例**：目標符合其中一類、基礎遠程傷害 100 時，100 × 1.25 = 125；若同階段原有 20% 加成，則 100 × (1 + 20% + 25%) = 145。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`01397401`。
- 繁中與英文一致；補充遠程限制與加算公式。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_ranged_vs_bfg.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/c9876de0-2e5d-4421-9bee-326ac0c92290)

圖片僅供技能辨識，不作機制證據。

