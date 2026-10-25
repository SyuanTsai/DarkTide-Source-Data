# 抗焦慮藥I(Kalma I)：原始碼依據

[English](en/broker_stimm_concentration_1.md)

[返回玩家說明](README.md#broker_stimm_concentration_1)｜[技術索引](SOURCE_INDEX.md)｜[原文比對](LOCALIZATION_COMPARISON.md#broker_stimm_concentration_1)

- 來源版本：Release 1.13.1；固定 SHA：`7e662fcda16219d775b84af50322be2e9cd9d62e`。
- 天賦：`broker_stimm_concentration_1`；名稱鍵：`loc_talent_broker_stimm_concentration_a`；描述鍵：`loc_talent_stat_combat_ability_cooldown_regen_modifier`。
- 節點：`node_c23ee23e-1dc5-4a85-abb3-d0bd53d7b7bc`；分類：興奮劑配方；配點成本：1 點。
- 證據程度：原始碼確認／程式推導；以下算例屬程式推導，未進行遊戲內測試。

## 原始碼確認與程式推導

- 本配方 cost=max_points，因此只購買一次，並非可重複點選的等級數。已選的前置配方仍同時生效；各節點效果依 stat 類型加算或乘算。
- combat_ability_resource_regen_modifier=0.0625；stat為additive_multiplier，疊加前置節點後倍率1.0625。ability extension以(base_regen+flat_regen)×modifier結算；base在pause時為0。

## 原始碼依據

- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4091–4108](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4091-L4108)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4128–4168](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4128-L4168)
- [scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua：4210–4248](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/archetype_buff_templates/broker_buff_templates.lua#L4210-L4248)
- [scripts/extension_systems/buff/buffs/buff.lua：689–727](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L727)
- [scripts/extension_systems/ability/player_unit_ability_extension.lua：825–864](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/ability/player_unit_ability_extension.lua#L825-L864)
- [scripts/settings/buff/buff_settings.lua：742–742](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L742-L742)
- [scripts/settings/talent/talent_settings_broker.lua：733–737](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/talent/talent_settings_broker.lua#L733-L737)
- [scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua：264–288](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/views/broker_stimm_builder_view/layouts/broker_stimm_tree.lua#L264-L288)

## 算例條件與待確認事項

- **持續恢復算例**：從抗焦慮藥I 選到本節點時，總加成為 6.25%。原本每秒恢復 1 秒冷卻，現在每秒恢復 1.0625 秒；15 秒藥效內共恢復 15 × 1.0625 = 15.9375 秒。
- **剩餘時間算例**：原剩 60 秒，且能力正在正常恢復，15 秒藥效結束後還剩 60 − 15.9375 = 44.0625 秒；之後恢復原速。
- 同一使用者的配方由 syringe_broker_buff 讀取並共同套用；場域分享時依提供者配方，外部控制的持續時間另按場域設定。
- 遊戲原文：1.13.1／Steam Build 25606770 的 ui 資源。描述與實作的差異仍需遊戲內核對；省略細節不列為繁中誤譯。

## 原文核對

- 對應 hash：`04d3484f`。
- 逐一以相同 hash 核對動態組成的中英屬性描述，數值依固定來源的 format_values 與實際結算。原文未附疊加公式與算例屬資訊省略，不列為錯誤。

## 圖示來源

[原圖](https://gameslantern.com/storage/sites/darktide/exporter/talents/broker/broker_stimm/broker_stimm_concentration_1.webp)｜[圖片來源 Issue](https://github.com/SyuanTsai/Media-Assets/issues/12#issuecomment-5934604124)｜[圖片附件](https://github.com/user-attachments/assets/b6316199-6d72-4db3-8be6-a74600e54b2f)

圖片僅供技能辨識，不作機制證據。

