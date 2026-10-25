# 電能修復(Voltaic Restoration)：原始碼依據

[English](en/cryptic_coherency_toughness_on_ability.md)

[返回玩家說明](README.md#cryptic_coherency_toughness_on_ability)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_coherency_toughness_on_ability)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_coherency_toughness_on_ability`；名稱鍵：`loc_talent_cryptic_coherency_toughness_on_ability`；描述鍵：`loc_talent_cryptic_coherency_toughness_on_ability_desc`。
- 節點：`node_898ff194-0732-4782-b33a-f24581ca52d0`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_combat_ability只觸發一次，對in_coherence_units每位replenish_percentage0.2；coherency_system建立chain時納入自身。

## 原始碼依據

- [scripts/extension_systems/coherency/coherency_system.lua：186–195](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L186-L195)
- [scripts/extension_systems/coherency/coherency_system.lua：236–254](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/coherency/coherency_system.lua#L236-L254)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/talent/talent_settings_cryptic.lua：457–459](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L457-L459)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2560–2579](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2560-L2579)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2003–2017](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2003-L2017)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：1936–1961](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L1936-L1961)

## 算例條件與待確認事項

- **恢復算例**：你最大韌性 100，恢復 100 × 20% = 20 點；隊友最大韌性 200，恢復 200 × 20% = 40 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`5c2bb368`。
- 繁中與英文一致；補充戰鬥技能與各自最大韌性。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_coherency_toughness_on_ability.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/bb7b86c4-512f-495f-a82a-7011cae498d6)

圖片僅供技能辨識，不作機制證據。

