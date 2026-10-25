# 狂怒I(Fury I)：原始碼依據

[English](en/broker_stimm_combat_4b.md)

[返回玩家說明](README.md#broker_stimm_combat_4b)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_stimm_combat_4b)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_stimm_combat_4b`；名稱鍵：`loc_talent_broker_stimm_combat_b`；描述鍵：`loc_talent_stat_power_level / loc_talent_stat_rending_multiplier`。
- 節點：`node_8eaa3a96-6b14-4511-ab1a-5dcecc1f666d`；分類：興奮劑配方；配點成本：4 點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 本配方 cost=max_points，因此只購買一次，並非可重複點選的等級數。已選的前置配方仍同時生效；各節點效果依 stat 類型加算或乘算。
- power_level_modifier=.04，由PowerLevel計算威力後再進武器曲線，不能直接當作所有最終傷害增加4%。
- rending_multiplier對小於1的護甲係數提高有效係數，跨越1與特殊profile另走rending規則，算例限未跨1。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4091–4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4128–4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4210–4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/attack/power_level.lua：25–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/utilities/attack/damage_calculation.lua：69–109](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L69-L109)
- [scripts/settings/talent/talent_settings_broker.lua：614–622](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L614-L622)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua：140–165](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L140-L165)

## 算例條件與待確認事項

- **威力算例**：僅此節點時，500 × (1 + 4%) = 520。從野火I 選到此層共 4 個威力節點時，為 500 × (1 + 4 × 4%) = 580。
- **護甲算例**：固定其他條件，護甲前 100 點、原護甲係數 0.5 時，僅本節點為 100 × (0.5 + 0.05) = 55 點。兩項合計則為 100 × (0.5 + 0.15) = 65 點。
- 同一使用者的配方由 syringe_broker_buff 讀取並共同套用；場域分享時依提供者配方，外部控制的持續時間另按場域設定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f8a49d31 / 0dd2df4e`。
- 逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_combat_4b.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124)｜[圖片附件](https://github.com/user-attachments/assets/1db9427d-9c25-4096-898f-57089a300fce)

圖片僅供技能辨識，不作機制證據。

