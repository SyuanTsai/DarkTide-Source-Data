# 散熱器：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_reduce_fixed_overheat_amount`／hash`1a699330`；描述鍵`loc_reduce_fixed_overheat_amount_desc`／hash`14cd4e99`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 名稱：Heatsink／散熱器。

- 英文模板：Weakspot Kills and Critical Strike Kills reduces Heat by {amount:%s} over {time:%s}s.

- 繁中模板：弱點擊殺與暴擊擊殺後，在{time:%s}秒內減少{amount:%s}熱能。

- **靜態重建**：I級弱點或暴擊擊殺在3秒內減少+4%熱量；IV級在3秒內減少+10%熱量，原模板未列首目標及非鎖定倍率；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|
| 擊殺類型 | 同hash中英列Weakspot Kills and Critical Strike Kills／弱點擊殺與暴擊擊殺 | [上古神刃觸發parent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L87-L107)、[動力彎刀觸發parent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L87-L107) | 一致 | 實作使用OR，任一成立即可；不要求同時弱點與暴擊。 |
| 第一目標 | 本體模板未列target_number | [上古神刃觸發parent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L87-L107)、[動力彎刀觸發parent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L87-L107) | 文件未涵蓋 | target_number必須為1；後續目標即使合格擊殺也不算。 |
| I–IV散熱量與3秒 | format_values重建4/6/8/10% over3s | [上古神刃每秒扣熱child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L108-L147)、[動力彎刀每秒扣熱child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L108-L147) | 條件差異 | r/3只在lockout使用；其他狀態再乘0.25，原文沒有區分。 |
| 扣熱節拍 | 模板只寫在3秒內 | [上古神刃每秒扣熱child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L108-L147)、[動力彎刀每秒扣熱child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L108-L147)、[合併child實例不重跑start_func](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L484) | 文件未涵蓋 | 每秒timer始於placeholder建立，重新kill不重跑start_func；不是即時扣整筆。 |
| 刷新而非多份疊加 | 模板未列 | [合格擊殺新增或刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L56-L89)、[刷新期限不重建child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L162) | 文件未涵蓋 | 最多一有效層，新增0仍延長期限。 |
| 切換武器 | 模板未列 | [上古神刃每秒扣熱child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L108-L147)、[動力彎刀每秒扣熱child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L108-L147)、[切出不移除on_equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) | 文件未涵蓋 | child未加持用條件，切出已有效者仍對原slot扣熱。 |
| 到零與狀態 | 模板未列 | [扣熱與鎖定解除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L64-L79) | 文件未涵蓋 | 低於0限幅，lockout結果0才解除，後續tick依新state速度。 |
