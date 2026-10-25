# 輻射槽(Rad-Sink)：原始碼依據

[English](en/cryptic_stacking_ranged_damage.md)

[返回玩家說明](README.md#cryptic_stacking_ranged_damage)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_stacking_ranged_damage)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_stacking_ranged_damage`；名稱鍵：`loc_talent_cryptic_stacking_ranged_damage`；描述鍵：`loc_talent_cryptic_stacking_ranged_damage_desc`。
- 節點：`node_2da404f3-b540-4bfd-bdda-0ad5654eafce`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 實作steps=min(floor((fixed_t-fire_last_t-(1-1))/1),2)；因此首層在1秒而非先等1秒再等1秒。time_lapsed<=0.1即清零。
- 引用ranged_damage進入共用加算階段；精確同幀命中與重算先後仍依weapon update時序。

## 原始碼依據

- [scripts/utilities/attack/damage_calculation.lua：282–321](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L282-L321)
- [scripts/settings/talent/talent_settings_cryptic.lua：514–519](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L514-L519)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：2865–2931](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L2865-L2931)
- [scripts/utilities/attack/damage_calculation.lua：232–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2157–2180](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2157-L2180)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：527–552](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L527-L552)

## 算例條件與待確認事項

- **傷害算例**：基礎傷害 100 時，一層為 100 × 1.10 = 110，兩層為 100 × 1.20 = 120；若原有 25% 同階段加成，兩層為 100 × (1 + 25% + 20%) = 145。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`0ff2b66e`。
- 雙語字面可讀成等待1秒後下一秒才加層；固定來源首層1秒。保留跨版本/顯示差異，不列繁中專屬勘誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_stacking_ranged_damage.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/26c97989-2f88-46ee-9bf3-f9f02b09c0f3)

圖片僅供技能辨識，不作機制證據。

