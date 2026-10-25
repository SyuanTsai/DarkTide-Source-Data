# 序列充能(Sequenced Charge)：原始碼依據

[English](en/cryptic_strength_on_charge_gain.md)

[返回玩家說明](README.md#cryptic_strength_on_charge_gain)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#cryptic_strength_on_charge_gain)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`cryptic_strength_on_charge_gain`；名稱鍵：`loc_talent_cryptic_strength_on_charge_gain`；描述鍵：`loc_talent_cryptic_strength_on_charge_gain_desc`。
- 節點：`node_2c6fb874-3909-4aca-a12c-3f1b362aff55`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_combat_ability_charge_replenished觸發單一ProcBuff，不按params.num_charges_gained乘層；power_level_modifier0.125 active10 allow重新計時。
- power_type_curve結果乘PowerLevel.power_level_buff_modifier，各type再進模板輸出。

## 原始碼依據

- [scripts/extension_systems/ability/player_unit_ability_extension.lua：846–880](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L846-L880)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：1559–1580](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L1559-L1580)
- [scripts/utilities/attack/power_level.lua：25–89](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L89)
- [scripts/settings/talent/talent_settings_cryptic.lua：635–638](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_cryptic.lua#L635-L638)
- [scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua：3516–3530](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/cryptic_buff_templates.lua#L3516-L3530)
- [scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua：2593–2612](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/cryptic_talents.lua#L2593-L2612)
- [scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua：2398–2427](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/cryptic_tree.lua#L2398-L2427)

## 算例條件與待確認事項

- **威力算例**：假設某項攻擊在套用威力加成前的威力值為 500，生效後為 500 × 1.125 = 562.5；若同階段另有 20%，則 500 × (1 + 20% + 12.5%) = 662.5。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`9e3a3df6`。
- 繁中力量與英文Strength對應威力效果；補充完整份數及結算量。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/cryptic/default/cryptic_strength_on_charge_gain.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/13#issuecomment-5935656030)｜[圖片附件](https://github.com/user-attachments/assets/0a7a0b4b-9d65-4b36-9825-ed610ad0a3ae)

圖片僅供技能辨識，不作機制證據。

