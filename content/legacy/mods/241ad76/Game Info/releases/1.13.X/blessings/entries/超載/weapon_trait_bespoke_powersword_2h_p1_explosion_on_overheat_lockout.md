# 超載(Overload)：上古神刃實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powersword_2h_p1_explosion_on_overheat_lockout`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L634-L676)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L397-L423)。
- 適用型號：上古神刃 軍務部 Mk X、上古神刃 軍務部 Mk II。

## 機制與公式

- 兩個trait override逐級選`trait_buff_powersword_2h_lockout_proc_explosion_1…4`及`overheat_reduction=0.10/0.15/0.20/0.25`。wrapper只監聽`on_overheat_lockout=1`，持用條件符合後先建立爆炸，再對本武器slot呼叫`Overheat.decrease_immediate`；爆心為玩家local位置加`Vector3.up()`。

- 實際四型號都使用`WeaponSpecialCharging`且`lockout_enabled=true`。熱量限幅至1後進入lockout；fixed_update在special_active狀態中關閉充能並派送一次事件。若存在`use_overheat_soft_lockout` keyword則改走soft事件，此wrapper不監聽；不能把soft_lockout與lockout混為同一觸發。[過熱100%進入鎖定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L9-L28)、[鎖定事件與充能關閉](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_charging.lua#L26-L63)。

- 固定移除量是`clamp(H−r,0,1)`；只有lockout且扣完恰為0才轉idle，之後自然散熱也以0解除lockout。[熱量立即扣除及鎖定保留](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L64-L79)、[固定百分點與限幅](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L18-L24)、[散熱至零解除鎖定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L149-L171)。

- 爆炸的`static_power_level=500`覆蓋wrapper傳入的DEFAULT_POWER_LEVEL；兩武器與所有等級共用近區attack power25／impact62、外圈attack0／impact35。這些power_distribution欄位不是最終生命傷害。[四等級爆炸設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L660-L699)、[近區傷害與衝擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/settings_templates/power_sword_2h_damage_profile_templates.lua#L1327-L1368)、[外圈衝擊與零基礎傷害](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/settings_templates/power_sword_2h_damage_profile_templates.lua#L1369-L1434)、[伺服器及固定power](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L57-L83)。

- 爆炸的兩半徑各自乘通用`explosion_radius_modifier`。近區判定為體型修正後`hit_distance < close_radius`；爆炸未設`damage_falloff`，不啟用近遠區之間的連續距離衰減。掩體raycast阻擋時不呼叫Attack；自身與同side友軍被篩除。[自己與友軍排除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L180-L199)、[通用半徑倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L430-L502)、[近遠區與掩體結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L250-L314)。

- `ragdoll_only=true`只在死亡流程避免普通死亡動畫，不是把近區攻擊限制為屍體。[ragdoll標記是死亡動畫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_die_action.lua#L39-L55)。

- wrapper沒有cooldown_duration／active_duration覆寫、沒有子Buff或持續stat；ProcBuff無cooldown設定時直接允許proc。切換本身不派送on_overheat_lockout，conditional_proc_func要求本slot正在持用。[Proc是否需冷卻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195)、[機率與持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L338)、[持用判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"overheat_reduction": [0.1, 0.15, 0.2, 0.25], "radius": [3, 3.5, 4, 4.5], "close_radius": [2, 2.25, 2.5, 2.75], "static_power_level": 500, "proc_chance": 1, "cooldown_duration": null}`。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
