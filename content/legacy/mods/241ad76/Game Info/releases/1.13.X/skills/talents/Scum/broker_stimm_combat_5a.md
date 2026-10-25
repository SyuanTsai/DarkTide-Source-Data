# 野火V(Wildfire V)：原始碼依據

[English](en/broker_stimm_combat_5a.md)

[返回玩家說明](README.md#broker_stimm_combat_5a)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_stimm_combat_5a)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_stimm_combat_5a`；名稱鍵：`loc_talent_broker_stimm_combat_a`；描述鍵：`loc_talent_stat_power_level / loc_talent_stat_finesse_modifier_bonus`。
- 節點：`node_2d8bcc20-0d76-462f-bf28-a3d82ccd1c06`；分類：興奮劑配方；配點成本：5 點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 本配方 cost=max_points，因此只購買一次，並非可重複點選的等級數。已選的前置配方仍同時生效；各節點效果依 stat 類型加算或乘算。
- power_level_modifier=.04，由PowerLevel計算威力後再進武器曲線，不能直接當作所有最終傷害增加4%。
- finesse_modifier_bonus 為額外finesse部分的加算，不是整筆weakspot/crit damage。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4091–4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4128–4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4210–4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/utilities/attack/power_level.lua：25–91](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91)
- [scripts/utilities/attack/damage_calculation.lua：675–782](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L675-L782)
- [scripts/settings/talent/talent_settings_broker.lua：605–613](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L605-L613)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua：190–213](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L190-L213)

## 算例條件與待確認事項

- **威力算例**：僅此節點時，500 × (1 + 4%) = 520。從野火I 選到此層共 5 個威力節點時，為 500 × (1 + 5 × 4%) = 600。
- **額外傷害算例**：先固定威力與其他條件，普通傷害 100、原弱點傷害 200 時，本節點將結果變為 100 + (200 − 100) × 1.25 = 225，整筆傷害提高 12.5%。野火IV、V 的這項加成合計 35%，同例為 235。
- 同一使用者的配方由 syringe_broker_buff 讀取並共同套用；場域分享時依提供者配方，外部控制的持續時間另按場域設定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`f8a49d31 / b004d6a5`。
- 逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_combat_5a.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124)｜[圖片附件](https://github.com/user-attachments/assets/eaa62b3f-dc32-4364-81c0-8aadbf77c9dc)

圖片僅供技能辨識，不作機制證據。

