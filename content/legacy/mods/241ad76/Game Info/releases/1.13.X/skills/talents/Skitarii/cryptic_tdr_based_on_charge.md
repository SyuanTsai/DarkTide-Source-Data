# 剩餘電流緩衝(Residual Current Buffer)：原始碼依據

[English](en/cryptic_tdr_based_on_charge.md)

[返回玩家說明](README.md#cryptic_tdr_based_on_charge)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_tdr_based_on_charge)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_tdr_based_on_charge`；名稱鍵：`loc_talent_cryptic_tdr_based_on_charge`；描述鍵：`loc_talent_cryptic_tdr_based_on_charge_base_desc`。
- 節點：`node_1a138503-24e5-4a0f-8a07-9b311df58558`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- stat_buff_multiplier返回1−0.1−0.025*remaining_ability_charges，乘基底1。與其他damage taken multiplier相乘。

## 原始碼依據

- [scripts/utilities/attack/damage_taken_calculation.lua：234–255](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_taken_calculation.lua#L234-L255)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1058–1075](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1058-L1075)
- [scripts/settings/talent/talent_settings_cryptic.lua：599–602](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L599-L602)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3207–3227](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3207-L3227)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2406–2426](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2406-L2426)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2184–2214](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2184-L2214)

## 算例條件與待確認事項

- **減傷算例**：3 份時，10% + 3 × 2.5% = 17.5%；100 點韌性傷害 → 100 × 0.825 = 82.5。另有獨立 20% 韌性減傷時，82.5 × 0.8 = 66 點。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`3b317052`。
- 中英一致；補充同技能加總、不同減傷相乘與整份門檻。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_tdr_based_on_charge.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935653628)｜[圖片附件](https://github.com/user-attachments/assets/f34040ff-ebd0-4f7e-b857-4557ccdee00c)

圖片僅供技能辨識，不作機制證據。

