# 坦克(Tank)：原始碼依據

[English](en/broker_stimm_durability_5a.md)

[返回玩家說明](README.md#broker_stimm_durability_5a)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_stimm_durability_5a)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_stimm_durability_5a`；名稱鍵：`loc_talent_broker_stimm_durability_b`；描述鍵：`loc_talent_stat_toughness_replenish_modifier`。
- 節點：`node_0b600a94-b5b8-44e6-a8bc-1f07f88229bd`；分類：興奮劑配方；配點成本：5 點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 本配方 cost=max_points，因此只購買一次，並非可重複點選的等級數。已選的前置配方仍同時生效；各節點效果依 stat 類型加算或乘算。
- toughness_replenish_modifier=.3，與四個前置各.05相加為1.5；不增加最大韌性。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4091–4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4128–4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4210–4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/extension_systems/toughness/player_unit_toughness_extension.lua：253–285](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：3873–3925](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L3873-L3925)
- [scripts/settings/talent/talent_settings_broker.lua：718–722](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L718-L722)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua：491–514](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L491-L514)

## 算例條件與待確認事項

- **恢復算例**：原本恢復 10 點的效果，合計變成 10 × (1 + 20% + 30%) = 15 點；最多補滿韌性。
- **注射算例**：最大韌性 100，彈幕I～IV 共提供 25% 一次恢復，套用此路線 50% 恢復加成後為 100 × 25% × 1.5 = 37.5 點。
- 算例假設恢復加成已生效；某些明確忽略stat buffs的恢復來源不受影響。
- 同一使用者的配方由 syringe_broker_buff 讀取並共同套用；場域分享時依提供者配方，外部控制的持續時間另按場域設定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`805fdb71`。
- 逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_durability_5a.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124)｜[圖片附件](https://github.com/user-attachments/assets/35bab219-731c-41ac-80a8-27af4a02f1c2)

圖片僅供技能辨識，不作機制證據。

