# 致命連擊：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 近戰劍 I–IV 數值與 formatter | [近戰劍 I–IV 數值與 formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p2.lua#L452-L501) |
| 動力劍 I–IV 數值與 formatter | [動力劍 I–IV 數值與 formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua#L183-L232) |
| 近戰劍 ProcBuff wrapper | [近戰劍 ProcBuff wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p2_buff_templates.lua#L29-L42) |
| 動力劍 ProcBuff wrapper | [動力劍 ProcBuff wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua#L47-L60) |
| 弱點擊殺與物品比對 | [弱點擊殺與物品比對](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L84-L94) |
| Buff持用槽條件 | [Buff持用槽條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| ProcBuff觸發／刷新及持用中的屬性 | [ProcBuff觸發／刷新及持用中的屬性](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L345) |
| 擊殺事件參數與送出順序 | [擊殺事件參數與送出順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L376-L710) |
| 近戰掃擊暴擊與Attack路徑 | [近戰掃擊暴擊與Attack路徑](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L207-L225) |
| 近戰爆擊機率計算 | [近戰爆擊機率計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| 四個實際 Mark 推擊動作與後續攻擊 | [四個實際 Mark 推擊動作與後續攻擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L1248-L1300) |
| 四個實際 Mark 的推擊消費與固定 torso hit zone | [四個實際 Mark 的推擊消費與固定 torso hit zone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L32-L108) |
| 推擊 profile 的 attack=0 與 impact 值 | [推擊 profile 的 attack=0 與 impact 值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L82-L159) |
| 攻擊傷害取 attack power，不取 impact power | [攻擊傷害取 attack power，不取 impact power](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227) |
| 推擊 torso hit zone 的弱點判定 | [推擊 torso hit zone 的弱點判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/weakspot.lua#L9-L19) |
| 零攻擊傷害 profile 與推擊衝擊值 | [零攻擊傷害 profile 與推擊衝擊值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L82-L159) |
| 零攻擊係數與零 base damage | [零攻擊係數與零 base damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L21-L54) |
| 零 power level 對應零 damage percentage | [零 power level 對應零 damage percentage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L8-L23) |
| Attacking item identity predicate | [Attacking item identity predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| ProcBuff event eligibility and timer refresh | [ProcBuff event eligibility and timer refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L345) |
| ProcBuff active retrigger gate | [ProcBuff active retrigger gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195) |
| ProcBuff held gate for contribution | [ProcBuff held gate for contribution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L254) |
| Proc stat contribution | [Proc stat contribution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L300) |
| Attack result precedes buff dispatch | [Attack result precedes buff dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L376-L384) |
| On-kill proc payload | [On-kill proc payload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L710) |
| Player buff event and stat-cache update order | [Player buff event and stat-cache update order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| Sweep attack payload | [Sweep attack payload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1503) |
| Critical chance roll | [Critical chance roll](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L10) |
| Weapon action critical chance caller | [Weapon action critical chance caller](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L168) |
| Actual bound weapon template; melee action coverage / no projectile or explosion references | [Actual bound weapon template; melee action coverage / no projectile or explosion references](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L1-L1668) |
| Actual bound weapon template; melee action coverage / no projectile or explosion references | [Actual bound weapon template; melee action coverage / no projectile or explosion references](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L1-L1652) |
| Actual bound weapon template; melee action coverage / no projectile or explosion references | [Actual bound weapon template; melee action coverage / no projectile or explosion references](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L1-L1741) |
| Actual bound weapon template; melee action coverage / no projectile or explosion references | [Actual bound weapon template; melee action coverage / no projectile or explosion references](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L1-L3444) |
| Combatsword P2 M2 actual push profile | [Combatsword P2 M2 actual push profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L1232-L1284) |
| Combatsword P2 M3 actual push profile | [Combatsword P2 M3 actual push profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L1308-L1360) |
| Powersword P3 M1 actual push profile | [Powersword P3 M1 actual push profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L1409-L1462) |
| ActionPush dispatches push profile, not follow-up sweep | [ActionPush dispatches push profile, not follow-up sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L29-L115) |
| Damage profile power type distribution | [Damage profile power type distribution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L386-L431) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 固定來源版本為 Release 1.13.1／`7e662fcda16219d775b84af50322be2e9cd9d62e`。同一名稱鍵有兩個各自定義的 trait：`combatsword_p2` 重劍與 `powersword_p3` 動力劍；每個變體各自核過完整 I–IV 與自訂 ProcBuff wrapper。

- 兩個變體的 `proc_stat_buffs.melee_critical_strike_chance` I–IV 都是 `.05/.10/.15/.20`，wrapper 同名 `.10` 是 fallback，tier own table 覆寫同名 key，不與 `.10` 相加。兩個 wrapper 都以 `on_kill`、同一 attacking item 比對、弱點擊殺條件及目前持用槽條件處理事件；各自 active duration 3 秒、允許作用期間再次觸發，未設 cooldown。

- 弱點擊殺 helper 要求該次 Attack 結果為 `died` 且 `hit_weakspot=true`；沒有爆擊、敵人種類或特定攻擊類別條件。事件 payload 也保留 attacking item、攻擊類型、持用槽、弱點旗標與死亡結果。

- ProcBuff 在合格事件處理時更新活動起始時間；同一個單層增益重新計時，不累加成多層。其近戰爆擊 stat 只在 3 秒有效且目前持用槽仍符合時貢獻；切出武器會暫時關掉這項貢獻，但不暫停該 ProcBuff 計時。

- 四個實際綁定型號的傷害路徑皆為近戰 sweep：重劍的輕／重攻擊、推擊後續攻擊及武器特殊攻擊；布蘭克斯 Mk VI 動力劍的普通與蓄能特殊狀態近戰攻擊及推擊後續攻擊。特殊狀態切換本身不造成弱點擊殺，後續傷害命中仍須符合 `died` 與 `hit_weakspot`。

- `ActionSweep.start` 在該次 sweep 開始時檢查爆擊；傷害結算完成後 Attack 才排入擊殺事件。故觸發本祝福的當次攻擊不會被這次 ProcBuff 追溯修改；後續 attack 在 event 與 stat-cache 更新後才可能使用新值。

- 近戰爆擊機率計算先加角色基礎、通用爆擊、攻擊類型專屬加值及 handling modifier，再 clamp 至 0–1；此後可依 `crit_to_damage_convert` 轉換，最後由爆擊 roll 取整並經 PRD。此祝福只加近戰爆擊率，不是傷害倍率。

- 四個實際 Mark 的純推擊都使用 `default_push`／`light_push`：其 `power_distribution.attack` 為 0，非零 `impact` 是推擊衝擊分量；推擊消費固定傳入 `torso` hit zone。這個零攻擊傷害 profile 不提供一般弱點擊殺路徑；其後的 push-follow-up 是獨立 sweep Attack。

令 `b` 為加入本祝福前的近戰爆擊率總和，`t` 為本祝福加值（I–IV = .05/.10/.15/.20），`r` 為爆擊轉傷害係數。未受其他強制／禁止爆擊分支影響時，計算概念為 `p = clamp(b+t, 0, 1) × (1−r)`；之後爆擊 roll 會取整並由 PRD 決定逐擊結果。

IV 級受控例：`b=.20`、`t=.20`、`r=0`，且不觸及上限，則理論機率 `.20+.20=.40`，即 40%；相較原 20% 增加 20 個百分點。

轉換受控例：`b=.20`、`t=.20`、`r=.25` 且不觸及上限，則沒有祝福時 `.20×.75=.15`，有祝福時 `.40×.75=.30`；理論差值是 15 個百分點。兩例只展示爆擊率路徑，不代表具名武器實測，也不把機率差值當成傷害增幅。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_180`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_180.png)｜[Issue附件](https://github.com/user-attachments/assets/d941be9f-1923-42e9-99b4-356cc86720f4)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 重劍等級覆寫 | [重劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p2.lua#L452-L503) |
| 重劍Buff接入 | [重劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p2_buff_templates.lua#L29-L44) |
| UI 重劍 | [UI 重劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L168) |
| 重劍 圖妥斯基 Mk VI匯入 | [重劍 圖妥斯基 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L16) |
| 重劍 圖妥斯基 Mk VI接入 | [重劍 圖妥斯基 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m1.lua#L1597-L1599) |
| 重劍 圖妥斯基 Mk VII匯入 | [重劍 圖妥斯基 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L16) |
| 重劍 圖妥斯基 Mk VII接入 | [重劍 圖妥斯基 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m2.lua#L1581-L1583) |
| 重劍 圖妥斯基 Mk IX匯入 | [重劍 圖妥斯基 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L16) |
| 重劍 圖妥斯基 Mk IX接入 | [重劍 圖妥斯基 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p2_m3.lua#L1669-L1671) |
| 機械神教動力劍等級覆寫 | [機械神教動力劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua#L183-L232) |
| 機械神教動力劍Buff接入 | [機械神教動力劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua#L47-L60) |
| UI 機械神教動力劍 | [UI 機械神教動力劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L552) |
| 機械神教動力劍 布蘭克斯 Mk VI匯入 | [機械神教動力劍 布蘭克斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L15) |
| 機械神教動力劍 布蘭克斯 Mk VI接入 | [機械神教動力劍 布蘭克斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L3372-L3374) |
