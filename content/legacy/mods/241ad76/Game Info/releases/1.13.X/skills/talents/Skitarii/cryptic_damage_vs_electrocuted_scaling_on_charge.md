# 報應導管(Retribution Conduit)：原始碼依據

[English](en/cryptic_damage_vs_electrocuted_scaling_on_charge.md)

[返回玩家說明](README.md#cryptic_damage_vs_electrocuted_scaling_on_charge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_damage_vs_electrocuted_scaling_on_charge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_damage_vs_electrocuted_scaling_on_charge`；名稱鍵：`loc_talent_cryptic_damage_vs_electrocuted_based_on_charge`；描述鍵：`loc_talent_cryptic_damage_vs_electrocuted_scaling_on_charge_desc`。
- 節點：`node_e58ba04c-1e81-4f25-bea9-38a0ee1e62f5`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- remaining_ability_charges讀整數num_charges；stat_buff_multipliers返回0.1+0.05n，再乘基底1。damage_vs_electrocuted在共用傷害計算與其他傷害stat加算。

## 原始碼依據

- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1058–1075](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1058-L1075)
- [scripts/utilities/attack/damage_calculation.lua：350–360](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L350-L360)
- [scripts/settings/talent/talent_settings_cryptic.lua：657–660](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L657-L660)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3665–3684](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3665-L3684)
- [scripts/utilities/attack/damage_calculation.lua：232–245](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L232-L245)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2676–2696](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2676-L2696)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：584–614](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L584-L614)

## 算例條件與待確認事項

- **傷害算例**：保有 3 份時，加成為 10% + 3 × 5% = 25%；基礎傷害 100 → 125。有其他 20% 同階段加成時，100 × (1 + 20% + 25%) = 145。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`232897f8`。
- 原文每道充能方向一致；補充完整份數與加算公式。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_damage_vs_electrocuted_scaling_on_charge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935647528)｜[圖片附件](https://github.com/user-attachments/assets/eb093286-7cce-40e8-b518-3b5bc16dd38d)

圖片僅供技能辨識，不作機制證據。

