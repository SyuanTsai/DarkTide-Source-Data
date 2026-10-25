# 亡命之徒：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Shared successful-dodge ProcBuff template | [Shared successful-dodge ProcBuff template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2455-L2467) |
| Manual dodge input is not a success event | [Manual dodge input is not a success event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L17-L98) |
| Dodge recognition and successful event payload | [Dodge recognition and successful event payload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L100-L212) |
| ProcBuff active-time test | [ProcBuff active-time test](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L104) |
| ProcBuff cooldown and active re-trigger decision | [ProcBuff cooldown and active re-trigger decision](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195) |
| ProcBuff trait stat override table | [ProcBuff trait stat override table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L300) |
| ProcBuff conditional/check and active-time reset | [ProcBuff conditional/check and active-time reset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| Current item-slot wielded check | [Current item-slot wielded check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Melee hit dodge reporting | [Melee hit dodge reporting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_attack.lua#L928-L955) |
| Enemy ranged shoot dodge window | [Enemy ranged shoot dodge window](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_attack.lua#L489-L539) |
| Ranged net successful-dodge reporting | [Ranged net successful-dodge reporting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_shoot_net_action.lua#L260-L272) |
| M1 hip-fire shot action | [M1 hip-fire shot action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L203-L214) |
| M1 aimed shot action | [M1 aimed shot action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L285-L294) |
| M1 normal and Psyker push modes | [M1 normal and Psyker push modes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L610-L652) |
| Trait buffs target on_equip | [Trait buffs target on_equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211) |
| Equip installs and unequip removes on_equip buffs | [Equip installs and unequip removes on_equip buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L661) |
| Switch removes on_wield, not on_equip buffs | [Switch removes on_wield, not on_equip buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| Generic crit stat, clamp, and conversion consumer | [Generic crit stat, clamp, and conversion consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| Crit roll rounding and PRD | [Crit roll rounding and PRD](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L10) |
| Enemy hound leap dodge reporting | [Enemy hound leap dodge reporting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_chaos_hound_leap_action.lua#L529-L546) |
| Enemy mutant charge dodge reporting | [Enemy mutant charge dodge reporting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_mutant_charger_charge_action.lua#L483) |
| Enemy grab successful-dodge reporting | [Enemy grab successful-dodge reporting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_chaos_spawn_grab_action.lua#L272-L274) |
| ProcBuff held condition gates active stats as well as new events | [ProcBuff held condition gates active stats as well as new events](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L253) |
| Own actual family/mark UI registry | [Own actual family/mark UI registry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L938-L961) |
| 普通推擊類型 | [普通推擊類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L498-L510) |
| 靈能推擊類型 | [靈能推擊類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L570-L583) |
| 推擊攻擊參數 | [推擊攻擊參數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L80-L87) |
| 未指定攻擊參數採預設 | [未指定攻擊參數採預設](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L45-L73) |
| 爆擊參數預設false | [爆擊參數預設false](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L112-L114) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

| trait-description-numeric-precision | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L228) |
| trait-description-percentage-format | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L32) |
| critical-rounding-half-away-from-zero | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/utilities/math.lua#L108-L116) |

## 執行與計算

- 本型 trait 的 I–IV 覆寫 proc_stat_buffs.critical_strike_chance 為 0.125、0.15、0.175、0.20；format_values 使用 percentage 格式。LasPistol P1 wrapper 複製共用 dodge_grants_critical_strike_chance ProcBuff。共用模板的 0.05 是預設值；ProcBuff 取整份 proc_stat_buffs override table，所以四級效果是 +12.5、15、17.5、20 個百分點，並非在 5% 上再加一層。

- 共用 ProcBuff 監聽 on_successful_dodge，proc chance 為 1，active_duration 為 6 秒，allow_proc_while_active 為 true，且沒有 cooldown_duration。沒有任何 stack 欄位；每個合格事件把 active_start_time 設為事件處理時間，故效果期間再觸發會重設倒數而不是疊加。

- base template 的 conditional_proc_func 是 is_item_slot_wielded。事件被處理時需持用該武器槽；此 ProcBuff 沒有 incoming-item 比對、attack_type 篩選、距離條件或特定 dodge_type 條件。成功閃避事件 payload 包含 dodging_unit、attacking_unit、attack_type、dodge_type，不要求敵方攻擊由本祝福武器造成。

- Dodge.check 只驗證閃避輸入、狀態與移動條件；它本身不送出成功事件。Dodge.is_dodging 會辨識實際閃避／寬限時間，也會依 count_as_dodge 關鍵字把攻擊視為閃避；各攻擊處理器確認後，Dodge.sucessful_dodge 才將非空 attack_type 的 on_successful_dodge 加入 Buff queue。固定來源呼叫點包括近戰攻擊、敵方射擊閃避窗口、網槍，以及撲擊／抓取／衝撞流程；此 trait 對事件本身不再區分類型。

- player weapon extension 在裝備槽安裝 on_equip buffs；切換槽位時移除 on_wield buffs，不會移除此 on_equip ProcBuff。ProcBuff._can_add_stat_and_keywords 在判斷已啟動的 proc_stat_buffs 時也會重跑 conditional_proc_func；切出後 active timer 繼續倒數，但持用條件為 false 時 stat 暫停，切回且未到期則恢復剩餘時間。卸下該裝備槽才移除 on_equip buff。

- CriticalStrike.chance 先加 archetype base、generic critical_strike_chance、該次攻擊類型的 specialized chance 與 weapon handling 修正，再 clamp 到 0–1；若呼叫未略過轉換，再乘上 (1 - critical_strike_chance_to_damage_convert)。最後爆擊判定把機率四捨五入至小數點後兩位並送入 PRD。因此本頁算例是轉換前提明示的機率池，不是每擊獨立命中率或最終傷害保證。

- 這個 trait 只定義於 laspistol_p1 family 的 traits 表，M1 weapon template 會匯入該表的 ukeys 並 append 至 traits；本 item metadata 的 weapon_type_restriction 更窄，僅為 laspistol_p1_m1。family import 不會擴張 metadata 限制。

- 本型號普通與靈能特殊推擊使用 PushAttack，以 push 類型呼叫 Attack.execute 且未傳入 is_critical_strike；Attack.execute 的此參數預設為 false，因此不讀一般爆擊率來擲骰。

- 爆擊率池：p_pool = clamp(p_base + p_generic + p_attack_type + p_handling + p_tier, 0, 1)。

- 本祝福的 p_tier：I=0.125、II=0.15、III=0.175、IV=0.20；它加入 generic critical_strike_chance 欄位，故一般近戰與遠程 critical chance 呼叫都會讀到它。

- 若該次 CriticalStrike.chance 呼叫沒有略過機率轉傷害修正，p_after_conversion = p_pool × (1 - critical_strike_chance_to_damage_convert)；本例設 conversion=0。

- 實際 roll 對機率四捨五入至小數點後兩位，再使用 PRD。範例的 20%→40% 表示未計最終取整／PRD 的機率池變化；+20 個百分點不是 +20% 傷害。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_123`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_123.png)｜[Issue附件](https://github.com/user-attachments/assets/f38673e8-c0ad-4bfb-801b-05501784a1a5)；圖示只作辨識。


## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 重型鐳射手槍等級覆寫 | [重型鐳射手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_laspistol_p1.lua#L371-L420) |
| 重型鐳射手槍Buff接入 | [重型鐳射手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_laspistol_p1_buff_templates.lua#L20) |
| UI 重型鐳射手槍 | [UI 重型鐳射手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L938) |
| 重型鐳射手槍 奧克塔蘭MG Mk II匯入 | [重型鐳射手槍 奧克塔蘭MG Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L16) |
| 重型鐳射手槍 奧克塔蘭MG Mk II接入 | [重型鐳射手槍 奧克塔蘭MG Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L858-L860) |
