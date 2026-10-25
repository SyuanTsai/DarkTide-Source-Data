# 虹吸：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 完整 I–IV 數值與 formatter | [完整 I–IV 數值與 formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L423-L464) |
| 實際 ProcBuff wrapper 與觸發條件 | [實際 ProcBuff wrapper 與觸發條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L252-L312) |
| M1 輕重擊、衝刺、推擊與推後橫掃 | [M1 輕重擊、衝刺、推擊與推後橫掃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L285-L1605) |
| M2 輕重擊、衝刺、推擊與推後橫掃 | [M2 輕重擊、衝刺、推擊與推後橫掃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L282-L1692) |
| 特殊能力在橫掃開始時取值 | [特殊能力在橫掃開始時取值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L207-L298) |
| 掃掠處理順序與中止 | [掃掠處理順序與中止](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1091-L1119) |
| 掃掠候選去重與單位存活檢查 | [掃掠候選去重與單位存活檢查](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1138-L1174) |
| target ordinal、Attack與ragdoll分支 | [target ordinal、Attack與ragdoll分支](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1330-L1425) |
| ActionSweep傳入melee與target_number | [ActionSweep傳入melee與target_number](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1501) |
| 近戰及多目標target_number predicate | [近戰及多目標target_number predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L425) |
| Attack on_hit條件與target_number payload | [Attack on_hit條件與target_number payload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L550-L623) |
| Attack block result流程 | [Attack block result流程](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L456-L539) |
| Attack alive-at-start與Buff事件門檻 | [Attack alive-at-start與Buff事件門檻](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L198-L202) |
| Health.is_damagable定義 | [Health.is_damagable定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/health.lua#L103-L115) |
| 最大韌性比例回復與缺額封頂 | [最大韌性比例回復與缺額封頂](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L280) |
| 韌性恢復禁止狀態 | [韌性恢復禁止狀態](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L447-L474) |
| M1實際特殊能力切換動作 | [M1實際特殊能力切換動作](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L1606-L1821) |
| M2實際特殊能力切換動作 | [M2實際特殊能力切換動作](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L1760-L1974) |
| 特殊切換executor及觸發時點 | [特殊切換executor及觸發時點](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_toggle_weapon_special.lua#L15-L51) |
| 特殊切換附帶格擋executor | [特殊切換附帶格擋executor](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_toggle_weapon_special_with_block.lua#L16-L47) |
| 充能能力啟用不造成額外攻擊 | [充能能力啟用不造成額外攻擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_charging.lua#L66-L81) |
| M1充能特殊類別接線 | [M1充能特殊類別接線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L1905-L1912) |
| M2充能特殊類別接線 | [M2充能特殊類別接線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L2058-L2065) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 固定 Release 1.13.1、SHA `7e662fcda16219d775b84af50322be2e9cd9d62e` 的 inventory 有一個 melee variant、兩筆 binding。完整 trait ID 為 `weapon_trait_bespoke_bespoke_powersword_2h_p1_regain_toughness_on_multiple_hits_by_weapon_special`，重複的 `bespoke` 是實際 ID 的一部分；buff wrapper 使用同一 ID，沒有 alias。實際 UI 名稱由 metadata family／pattern／mark loc_ids 組成：上古神刃 軍務部 Mk X、Mk II。

- Own I–IV tier 的 `toughness_fixed_percentage` 是 0.10／0.12／0.14／0.16。wrapper 的 0.15 只作 base fallback；proc function 優先讀 `template_override_data.toughness_fixed_percentage`，所以不能在 tier 值上再加 15%。RAW formatter 以 percentage 將值乘 100，再加 `+` prefix，顯示 +10%／+12%／+14%／+16%。

- Wrapper 是 `proc_buff`，conditional 為目前持有裝備槽，對應 `on_sweep_start`、`on_hit`、`on_sweep_finish`。橫掃開始時把傳入的 weapon `special_active` 存入 `can_activate`；在 on_hit 先核對 item，再核對該旗標及 `on_multiple_melee_hit`。後者要求 `attack_type == melee` 且 `required_num_hits (3) <= target_number`。第一個符合事件（當前事件須已滿足 target_number≥3）先將本次 `can_activate` 設為 false，再呼叫韌性恢復；即使恢復因缺額為零或狀態門檻遭拒，這次橫掃資格也已消耗，不會重試。這不是要求之前兩個序號都各自送出 on_hit。橫掃結束也設回 false。

- 兩個實際型號的輕擊、重擊、衝刺攻擊與 `action_pushfollow` 都是 `ActionSweep` kind；`action_push` 是 push kind。特殊攻擊鍵的動作是 toggle-special 類型，作用為切換武器特殊狀態，不是本祝福的攻擊事件。ActionSweep 在套用動作內特殊切換後讀取目前 slot 的 `special_active`，並在 on_sweep_start 傳給 wrapper；只有該橫掃開始時狀態為啟用才留下資格。

- ActionSweep 先對每個掃掠單位挑一筆最佳結果，略過同一 unit 已處理或不存在的 unit；之後 `_process_hit` 先增加本次 target ordinal，再決定是否可走 Attack.execute。命中角色且仍存活時才更新持續的 `num_hit_enemies`；ragdoll／無法攻擊分支不同。Attack.execute 收到 `target_number` 與 melee 類型；其 on_hit Buff 派送要求目標在攻擊開始時存活且有 breed，並受 `damage_type` no-proc、`skip_on_hit_proc` 及 already-procced gate 控制。有效事件不要求正傷、踉蹌或擊殺；被格擋的活體目標仍可完成 Attack buff dispatch。

- 因此，程式比較的是同一特殊能力啟用橫掃中「當前合格近戰 on_hit 事件所帶的 target_number 是否≥3」，不是先累積三個合格 on_hit。target_number 是 ActionSweep 在處理當前結果時傳入的序號；更不能把它誇大成成功造成正傷的三名敵人。非角色可處理結果的 local ordinal 與持續敵人計數不同，且是否到達 on_hit 仍受 actual collision/result/breed gates 限制；不把所有 breakable 都當作敵人或排除對象。

- proc function 呼叫 `recover_percentage_toughness(fixed_percentage, true)`。`true` 只跳過 toughness replenish stat multiplier；恢復請求以呼叫當下的最大韌性 × tier fraction 計算，實際寫回最多消除現有韌性缺額。呼叫前仍檢查倒地（強制協助例外）、死亡及 prevent-toughness-replenish keywords；玩家已滿韌性時實際恢復為零。

- 特殊切換的實際 executor 為 ActionToggleWeaponSpecial（15–51）及附帶格擋類別（16–47）；兩型號實際選用 WeaponSpecialCharging，啟用／停用只改 charge_template（66–81）。本項不是把按特殊鍵本身算成近戰命中；新增來源列出所有實際特殊切換動作。

- 觸發前提：特殊能力在該次橫掃開始時已啟用；當前合格近戰 on_hit 的 `target_number >= 3`，且該次橫掃資格尚未消耗。達門檻後先消耗資格，再嘗試恢復。

- 令 `Tmax` 為呼叫當下的最大韌性，`Tnow` 為目前韌性，`r` 為 tier 固定比例。韌性恢復未被禁止時：

- 請求恢復量 = `Tmax × r`，其中 I／II／III／IV 的 `r` = 0.10／0.12／0.14／0.16。

- 實際恢復量 = `min(Tmax − Tnow, Tmax × r)`。恢復程序使用 `ignore_stat_buffs=true`，不套 toughness replenish 統計乘數；但目前缺額及倒地（強制協助例外）、死亡、禁止恢復狀態檢查仍有效；恢復失敗不會退回本次橫掃資格。

- 這不是每秒回復率、不是目前缺額的百分比，也不是傷害減免。每次橫掃的觸發資格只消耗一次；恢復成功與否都不會在本次橫掃重試，下一次觸發須由新的合格橫掃開始。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_240`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_240.png)｜[Issue附件](https://github.com/user-attachments/assets/167e264e-36c8-4869-bf55-23dc1b42e6d7)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 上古神刃等級覆寫 | [上古神刃等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L423-L464) |
| 上古神刃Buff接入 | [上古神刃Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_2h_p1_buff_templates.lua#L252-L312) |
| UI 上古神刃 | [UI 上古神刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L498) |
| 上古神刃 軍務部 Mk X匯入 | [上古神刃 軍務部 Mk X匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L15) |
| 上古神刃 軍務部 Mk X接入 | [上古神刃 軍務部 Mk X接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m1.lua#L2302-L2304) |
| 上古神刃 軍務部 Mk II匯入 | [上古神刃 軍務部 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L14) |
| 上古神刃 軍務部 Mk II接入 | [上古神刃 軍務部 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords_2h/powersword_2h_p1_m2.lua#L2455-L2457) |
