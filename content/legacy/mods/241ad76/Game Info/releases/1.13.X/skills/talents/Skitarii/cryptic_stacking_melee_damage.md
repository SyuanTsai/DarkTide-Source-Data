# 持續攻擊教義(Sustained Assault Doctrine)：原始碼依據

[English](en/cryptic_stacking_melee_damage.md)

[返回玩家說明](README.md#cryptic_stacking_melee_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_stacking_melee_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_stacking_melee_damage`；名稱鍵：`loc_talent_cryptic_stacking_melee_damage`；描述鍵：`loc_talent_cryptic_stacking_melee_damage_desc`。
- 節點：`node_987f94ff-7679-4651-8217-d9592c83efe3`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_sweep_finish且num_hit_units>0；實際Buff stat是damage而不是melee_damage，duration8 max5 refresh，沒有逐層衰減設定。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2749–2766](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2749-L2766)
- [scripts/utilities/attack/damage_calculation.lua：232–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/talent/talent_settings_cryptic.lua：489–493](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L489-L493)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2734–2748](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2734-L2748)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2094–2117](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2094-L2117)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2036–2065](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2036-L2065)

## 算例條件與待確認事項

- **傷害算例**：5 層提供 15%，基礎傷害 100 → 115；若原有 25% 同階段加成，100 × (1 + 25% + 15%) = 140。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`32d4da44`。
- 雙語均為Damage/傷害，未限定僅近戰增傷；補充跨攻擊類型。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_stacking_melee_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/9e58fba3-e137-4f3e-89c3-ea7f5ebb0f24)

圖片僅供技能辨識，不作機制證據。

