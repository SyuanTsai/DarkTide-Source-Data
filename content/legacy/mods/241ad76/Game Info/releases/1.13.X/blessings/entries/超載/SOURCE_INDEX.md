# 超載：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 過熱100%進入鎖定 | [過熱100%進入鎖定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L9-L28) |
| 鎖定事件與充能關閉 | [鎖定事件與充能關閉](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_charging.lua#L26-L63) |
| 熱量立即扣除及鎖定保留 | [熱量立即扣除及鎖定保留](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L64-L79) |
| 固定百分點與限幅 | [固定百分點與限幅](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L18-L24) |
| 散熱至零解除鎖定 | [散熱至零解除鎖定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L149-L171) |
| 四等級爆炸設定 | [四等級爆炸設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L660-L699) |
| 近區傷害與衝擊 | [近區傷害與衝擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/settings_templates/power_sword_2h_damage_profile_templates.lua#L1327-L1368) |
| 外圈衝擊與零基礎傷害 | [外圈衝擊與零基礎傷害](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/settings_templates/power_sword_2h_damage_profile_templates.lua#L1369-L1434) |
| profile匯入 | [profile匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profile_templates.lua#L67-L68) |
| 伺服器及固定power | [伺服器及固定power](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L57-L83) |
| 自己與友軍排除 | [自己與友軍排除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L180-L199) |
| 通用半徑倍率 | [通用半徑倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L430-L502) |
| 近遠區與掩體結算 | [近遠區與掩體結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L250-L314) |
| Proc是否需冷卻 | [Proc是否需冷卻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195) |
| 機率與持用條件 | [機率與持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L338) |
| 持用判定 | [持用判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| ragdoll標記是死亡動畫 | [ragdoll標記是死亡動畫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_die_action.lua#L39-L55) |
| powersword_2h_p1_m1實際充能鎖定接入 | [powersword_2h_p1_m1實際充能鎖定接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L1905-L1917) |
| powersword_2h_p1_m2實際充能鎖定接入 | [powersword_2h_p1_m2實際充能鎖定接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L2058-L2070) |
| powersword_p2_m1實際充能鎖定接入 | [powersword_p2_m1實際充能鎖定接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m1.lua#L1355-L1367) |
| powersword_p2_m2實際充能鎖定接入 | [powersword_p2_m2實際充能鎖定接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m2.lua#L1616-L1628) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 兩個trait override逐級選`trait_buff_powersword_2h_lockout_proc_explosion_1…4`及`overheat_reduction=0.10/0.15/0.20/0.25`。wrapper只監聽`on_overheat_lockout=1`，持用條件符合後先建立爆炸，再對本武器slot呼叫`Overheat.decrease_immediate`；爆心為玩家local位置加`Vector3.up()`。

- 實際四型號都使用`WeaponSpecialCharging`且`lockout_enabled=true`。熱量限幅至1後進入lockout；fixed_update在special_active狀態中關閉充能並派送一次事件。若存在`use_overheat_soft_lockout` keyword則改走soft事件，此wrapper不監聽；不能把soft_lockout與lockout混為同一觸發。[過熱100%進入鎖定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L9-L28)、[鎖定事件與充能關閉](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_charging.lua#L26-L63)。

- 固定移除量是`clamp(H−r,0,1)`；只有lockout且扣完恰為0才轉idle，之後自然散熱也以0解除lockout。[熱量立即扣除及鎖定保留](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L64-L79)、[固定百分點與限幅](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L18-L24)、[散熱至零解除鎖定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L149-L171)。

- 爆炸的`static_power_level=500`覆蓋wrapper傳入的DEFAULT_POWER_LEVEL；兩武器與所有等級共用近區attack power25／impact62、外圈attack0／impact35。這些power_distribution欄位不是最終生命傷害。[四等級爆炸設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L660-L699)、[近區傷害與衝擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/settings_templates/power_sword_2h_damage_profile_templates.lua#L1327-L1368)、[外圈衝擊與零基礎傷害](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/settings_templates/power_sword_2h_damage_profile_templates.lua#L1369-L1434)、[伺服器及固定power](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L57-L83)。

- 爆炸的兩半徑各自乘通用`explosion_radius_modifier`。近區判定為體型修正後`hit_distance < close_radius`；爆炸未設`damage_falloff`，不啟用近遠區之間的連續距離衰減。掩體raycast阻擋時不呼叫Attack；自身與同side友軍被篩除。[自己與友軍排除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L180-L199)、[通用半徑倍率](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L430-L502)、[近遠區與掩體結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L250-L314)。

- `ragdoll_only=true`只在死亡流程避免普通死亡動畫，不是把近區攻擊限制為屍體。[ragdoll標記是死亡動畫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_die_action.lua#L39-L55)。

- wrapper沒有cooldown_duration／active_duration覆寫、沒有子Buff或持續stat；ProcBuff無cooldown設定時直接允許proc。切換本身不派送on_overheat_lockout，conditional_proc_func要求本slot正在持用。[Proc是否需冷卻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195)、[機率與持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L338)、[持用判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)。

- 熱量以0–1表示。觸發前`H=1`、等級固定扣除量`r=0.10/0.15/0.20/0.25`；`H₁=clamp(H−r,0,1)`，依序為0.90、0.85、0.80、0.75。

- 這是10／15／20／25個百分點的固定扣除，不是每次對目前熱量乘90%／85%／80%／75%；本祝福實際事件在100%觸發。

- 設爆炸半徑倍率`M`、總基礎半徑`R`及近區`C`；`R₁=R×M,C₁=C×M`。IV級`M=1.20`得到`5.4公尺、3.3公尺`，散熱量仍為0.25。

- IV級未加範圍倍率時，判定距離2.5公尺小於2.75而用近區profile；3.5公尺介於近區與4.5公尺總半徑而用外圈。體型修正為`max(actor_distance−breed.explosion_radius,0)`，沒有該欄位時使用原距離。

- 近區與外圈分開使用profile，近區攻擊power25/impact62，外圈0/35；跨等級沒有增加這兩組數值。敵人抗性、傷害計算及攻擊者其他Buff仍由Attack處理，未把500power或25attack power寫成500／25點最終傷害。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_242`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_242.png)｜[Issue附件](https://github.com/user-attachments/assets/c05b0b5b-2f43-48d2-a309-370bcdb98a57)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 上古神刃等級覆寫 | [上古神刃等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L634-L676) |
| 上古神刃Buff接入 | [上古神刃Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L397-L423) |
| UI 上古神刃 | [UI 上古神刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L498) |
| 上古神刃 軍務部 Mk X匯入 | [上古神刃 軍務部 Mk X匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L15) |
| 上古神刃 軍務部 Mk X接入 | [上古神刃 軍務部 Mk X接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L2302-L2304) |
| 上古神刃 軍務部 Mk II匯入 | [上古神刃 軍務部 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L14) |
| 上古神刃 軍務部 Mk II接入 | [上古神刃 軍務部 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L2455-L2457) |
| 動力彎刀等級覆寫 | [動力彎刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p2.lua#L508-L550) |
| 動力彎刀Buff接入 | [動力彎刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p2_buff_templates.lua#L282-L308) |
| UI 動力彎刀 | [UI 動力彎刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L534) |
| 動力彎刀 阿里丁 Mk I匯入 | [動力彎刀 阿里丁 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m1.lua#L11) |
| 動力彎刀 阿里丁 Mk I接入 | [動力彎刀 阿里丁 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m1.lua#L1741-L1743) |
| 動力彎刀 執法者 Mk IIb匯入 | [動力彎刀 執法者 Mk IIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m2.lua#L11) |
| 動力彎刀 執法者 Mk IIb接入 | [動力彎刀 執法者 Mk IIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p2_m2.lua#L2023-L2025) |
