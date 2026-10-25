# 罪孽判官(Soulguilt Scan)：原始碼依據

[English](en/adamant_stacking_weakspot_strength.md)

[返回玩家說明](README.md#adamant_stacking_weakspot_strength)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#adamant_stacking_weakspot_strength)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`adamant_stacking_weakspot_strength`；名稱鍵：`loc_talent_adamant_stacking_weakspot_strength`；描述鍵：`loc_talent_adamant_stacking_weakspot_strength_duration_desc`。
- 節點：`node_e8d152e8-495b-4da1-86e8-4c78bd1dd63b`；分類：技能；每節點一點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- on_weakspot_hit加入10秒子buff，max_stacks8且refresh，weakspot_power_level_modifier=.02按有效層數加算。PowerLevel在weakspot時合入power_level_buff_modifier，於曲線縮放後乘入；不是weakspot_damage或finesse額外傷害欄位。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3577–3592](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3577-L3592)
- [scripts/utilities/attack/power_level.lua：25–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/extension_systems/buff/buff_extension_base.lua：433–468](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L433-L468)
- [scripts/settings/talent/talent_settings_adamant.lua：386–390](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_adamant.lua#L386-L390)
- [scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua：3566–3576](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/adamant_buff_templates.lua#L3566-L3576)
- [scripts/settings/ability/archetype_talents/talents/adamant_talents.lua：2719–2741](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ability/archetype_talents/talents/adamant_talents.lua#L2719-L2741)
- [scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua：1436–1461](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/talent_builder_view/layouts/adamant_tree.lua#L1436-L1461)

## 算例條件與待確認事項

- **威力算例**：只計這個威力階段，原本 500、滿層 16% 時為 500 × (1 + 8 × 2%) = 580；若已有同階段 20% 威力加成，則由 600 變成 680。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`62e55f07`。
- 繁中「弱點強化」與英文 Weakspot Strength一致；主文釐清與額外弱點傷害加成不同，未判誤譯。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/adamant/default/adamant_stacking_weakspot_strength.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/11#issuecomment-5932563852)｜[圖片附件](https://github.com/user-attachments/assets/59f1504d-8b25-40c7-a582-b5de1b3278cf)

圖片僅供技能辨識，不作機制證據。

