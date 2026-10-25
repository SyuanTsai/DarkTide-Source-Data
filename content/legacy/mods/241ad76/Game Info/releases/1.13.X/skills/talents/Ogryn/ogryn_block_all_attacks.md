# 堅不可摧(Unbreakable)：原始碼依據

[English](en/ogryn_block_all_attacks.md)

[返回玩家說明](README.md#ogryn_block_all_attacks)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#ogryn_block_all_attacks)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`ogryn_block_all_attacks`；名稱鍵：`loc_talent_ogryn_block_all_attacks`；描述鍵：`loc_talent_ogryn_block_all_attacks_variant_desc`。
- 節點：`node_abc9d2b7-97eb-4431-9596-61435a15bff7`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 掛載perfect版，is_perfect_blocking才給block_unblockable；on_perfect_block加damage_boost max1 duration5 melee_damage.2，sweep_finish退出。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua：3463–3509](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/ogryn_buff_templates.lua#L3463-L3509)
- [scripts/settings/talent/talent_settings_ogryn.lua：164–167](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_ogryn.lua#L164-L167)
- [scripts/utilities/attack/block.lua：90–125](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L90-L125)
- [scripts/utilities/attack/block.lua：252–273](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/block.lua#L252-L273)
- [scripts/utilities/attack/damage_calculation.lua：278–300](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L278-L300)
- [scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua：2491–2506](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/ogryn_talents.lua#L2491-L2506)
- [scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua：1694–1718](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/ogryn_tree.lua#L1694-L1718)

## 算例條件與待確認事項

- **傷害算例**：基礎 100 點變成 120 點；同階段原有 30% 增傷時為 100 × (1 + 30% + 20%) = 150 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`b565afeb`。
- 核對同一描述鍵／hash 的繁中與英文，效果方向未見明確翻譯矛盾；未列公式、上限或細部限制不算錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/ogryn/default/ogryn_block_all_attacks.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/10#issuecomment-5931394406)｜[圖片附件](https://github.com/user-attachments/assets/3ff7d7eb-6206-4d77-91c5-483259320072)

圖片僅供技能辨識，不作機制證據。

