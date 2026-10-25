# 散熱器(Heatsink)：上古神刃實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powersword_2h_p1_reduce_fixed_overheat_amount_parent`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L54-L98)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L87-L107)。
- 適用型號：上古神刃 軍務部 Mk X、上古神刃 軍務部 Mk II。

## 機制與公式

- MasterItems的trait指向`reduce_fixed_overheat_amount_parent`，不是舊的同前綴無_parent proc template；正式執行以parent87–107及child108–147為準。兩trait覆寫`duration=3,overheat_reduction=0.04/0.06/0.08/0.10`。

- parent監聽`on_kill=1`，check為`target_number==1 AND (hit_weakspot OR is_critical_strike)`，且要求本slot持用；事件只有attack_result=died才派送。沒有要求melee attack_type、special_active或同時弱點加暴擊。[上古神刃觸發parent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L87-L107)、[動力彎刀觸發parent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L87-L107)、[合格擊殺事件欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L709)。

- child初始占位1，加上一個有效層後stack_count2；最多兩實際stack。合格擊殺在滿層時新增0也刷新parent的3秒移除期限，超時移除1有效層但留占位。[父Buff占位子層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L18-L39)、[合格擊殺新增或刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L56-L89)、[3秒移除有效層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L131)、[刷新期限不重建child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L162)。

- child的start_func在首次建立時計`timer=fixed_t+1`，既有實例加層不重跑start_func。每次`t>timer`只把timer加1，stack_count>1才扣熱。期限與每秒timer為兩個時鐘，不能把重新擊殺視為重啟三次全新扣熱。[上古神刃每秒扣熱child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L108-L147)、[動力彎刀每秒扣熱child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L108-L147)、[合併child實例不重跑start_func](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L484)。

- 每次扣熱`a=r/override.duration`；slot_state為lockout時用a，其餘state用a×0.25。child繼承parent的override，並無持用條件，所以切出後對原slot仍扣熱。[上古神刃每秒扣熱child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L108-L147)、[動力彎刀每秒扣熱child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L108-L147)、[child繼承parent覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L184)、[裝備與切出生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211)、[切出不移除on_equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785)。

- `override.duration`只作分母；Buff.duration只讀template.duration，父子模板皆未設此duration。3秒到期由parent.child_duration處理，不是parent裝備三秒後被摧毀。[duration欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L518-L534)、[3秒移除有效層](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L131)。

- 更新先處理Buff、再處理proc events；父子皆由陣列更新。扣熱與有效層移除各用嚴格大於時間，窗口端點及節拍不能只靠描述模板推出固定總扣熱次數。算例明示三次有效扣熱，不作遊戲逐幀實測宣稱。[更新與proc處理順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L144)、[Buff按陣列更新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L207)。

- 每次立即扣除採clamp(H−a,0,1)；鎖定只在結果0轉idle。效果存續至期限內的下一次tick若已非lockout便用四分之一倍率。[固定百分點與限幅](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L18-L24)、[扣熱與鎖定解除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L64-L79)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"overheat_reduction": [0.04, 0.06, 0.08, 0.1], "duration": 3, "child_duration": 3, "max_effective_stacks": 1, "tick_interval": 1, "non_lockout_multiplier": 0.25, "first_target_only": true, "qualifying_kill": "weakspot or critical strike"}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
