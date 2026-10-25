# 近身平射：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Shared proc buff listens for kill and grants ranged crit stat | [Shared proc buff listens for kill and grants ranged crit stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1575-L1586) |
| Melee kill qualification: died result and melee attack type | [Melee kill qualification: died result and melee attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L226-L237) |
| ProcBuff with no cooldown can activate while active | [ProcBuff with no cooldown can activate while active](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195) |
| Qualified event refreshes active start time | [Qualified event refreshes active start time](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| Active duration uses tier override and start time | [Active duration uses tier override and start time](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L104) |
| Proc stat buffs apply only while proc is active | [Proc stat buffs apply only while proc is active](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L303) |
| No conditional proc function means active time alone gates stat | [No conditional proc function means active time alone gates stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L255) |
| CriticalStrike adds ranged-specific chance and clamps | [CriticalStrike adds ranged-specific chance and clamps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| 特殊近戰以melee執行Attack | [特殊近戰以melee執行Attack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1503) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 爆彈手槍爆炸限制來源

| 用途 | 固定原始碼 |
|---|---|
| 爆彈手槍M1爆炸配置 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/settings_templates/boltpistol_hitscan_templates.lua#L11-L26) |
| 爆彈手槍M2爆炸配置 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/settings_templates/boltpistol_hitscan_templates.lua#L42-L57) |
| 起爆距離基礎值及倍率 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L31-L43) |
| 擊殺／停止爆炸條件與非爆擊參數 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L86-L139) |
| 直接命中沿用爆擊旗標 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L226) |
| 穿透停止爆炸固定非爆擊 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L290-L301) |
| 爆炸參數對應 | [固定來源](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L57) |

## 執行與計算

- 三個武器專屬 trait wrapper 都複製共同的 melee-kill proc 模板。共用模板監聽擊殺事件，預設提供遠程爆擊率；各武器 tier override 將此數值改為14%、16%、18%、20%，並提供該武器型號的持續時間。

- 共用檢查函式只接受 `attack_result == died` 且 `attack_type == melee`。它沒有近距離條件、擊殺武器比對或持用武器槽檢查；所以用另一把近戰武器完成有效近戰擊殺也能啟動。

- 三個 trait 都沒有 cooldown。ProcBuff 在沒有 cooldown 時允許有效事件再次啟動；每次合格擊殺將 active start time 設為事件時間，因此重觸發會重設倒數而不是疊層。持續時間與 stat 都在啟動期間生效。

- `CriticalStrike.chance` 讀取玩家的 `ranged_critical_strike_chance`，近戰暴擊則走不同的 `melee_critical_strike_chance` 欄位。此效果加在遠程爆擊計算，不提高近戰爆擊率；它是定時 stat buff，普通射擊不會消耗或刷新。

- 三個 trait item 的 metadata 限制分別為爆彈手槍、針彈手槍、快拔左輪手槍家族；六個實際 mark template 均匯入對應 traits 定義，並將該 trait 的 ukeys 加入武器 traits。

- 對遠程攻擊，爆擊率先將基礎機率、全域加成、遠程專屬加成（含此祝福）與武器 handling 修正相加，再限制於0至1：`p_ranged = clamp(p_base + p_global + p_ranged_other + p_PointBlank + p_handling, 0, 1)`。

- 若該次計算沒有略過「爆擊率轉傷害」修正，之後再乘上 `(1 - critical_strike_chance_to_damage_convert)`。下方算例假設該轉換為0。

- 本祝福的 `p_PointBlank` 為I級0.14、II級0.16、III級0.18、IV級0.20；這是直接加入機率的百分點，不是把既有機率乘以1.14至1.20。近戰分支使用另一個 melee 機率欄位，因此不套用此加成。

- ProcBuff 活性判定為 `t < active_start_time + active_duration`。合格近戰擊殺在效果期間發生時，新的事件時間取代 `active_start_time`；不增加額外層數。

- 爆彈手槍M1／M2的腰射與瞄準射擊接入各自hitscan，直接命中可沿用射擊爆擊結果；配置的擊殺／停止與穿透停止爆炸另行生成且固定非爆擊。命中質量耗盡爆炸受伺服器、起爆距離及耗盡條件控制。M1基礎起爆距離5公尺、M2為3公尺，再乘其他來源起爆距離倍率；沒有配置穿透出口爆炸。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_119`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_119.png)｜[Issue附件](https://github.com/user-attachments/assets/1f0e089c-39ab-4e22-952e-fedd5e91f0d9)；圖示只作辨識。


## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 爆彈手槍等級覆寫 | [爆彈手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_boltpistol_p1.lua#L10-L63) |
| 爆彈手槍Buff接入 | [爆彈手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_boltpistol_p1_buff_templates.lua#L11) |
| UI 爆彈手槍 | [UI 爆彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L748) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk IV匯入 | [爆彈手槍 戈德溫–布蘭克斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L16) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk IV接入 | [爆彈手槍 戈德溫–布蘭克斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L769-L771) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk VI匯入 | [爆彈手槍 戈德溫–布蘭克斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L16) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk VI接入 | [爆彈手槍 戈德溫–布蘭克斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L769-L771) |
| 針彈手槍等級覆寫 | [針彈手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L520-L575) |
| 針彈手槍Buff接入 | [針彈手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_needlepistol_p1_buff_templates.lua#L23) |
| UI 針彈手槍 | [UI 針彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L961) |
| 針彈手槍 布蘭克斯 MkVI匯入 | [針彈手槍 布蘭克斯 MkVI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L17) |
| 針彈手槍 布蘭克斯 MkVI接入 | [針彈手槍 布蘭克斯 MkVI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m1.lua#L791-L793) |
| 針彈手槍 布蘭克斯 MKII匯入 | [針彈手槍 布蘭克斯 MKII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L17) |
| 針彈手槍 布蘭克斯 MKII接入 | [針彈手槍 布蘭克斯 MKII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/needlepistols/needlepistol_p1_m2.lua#L788-L790) |
| 快拔左輪手槍等級覆寫 | [快拔左輪手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_stubrevolver_p1.lua#L356-L409) |
| 快拔左輪手槍Buff接入 | [快拔左輪手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_stubrevolver_p1_buff_templates.lua#L23) |
| UI 快拔左輪手槍 | [UI 快拔左輪手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1216) |
| 快拔左輪手槍 紮羅娜 Mk IIa匯入 | [快拔左輪手槍 紮羅娜 Mk IIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua#L16) |
| 快拔左輪手槍 紮羅娜 Mk IIa接入 | [快拔左輪手槍 紮羅娜 Mk IIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua#L982-L984) |
| 快拔左輪手槍 阿格里皮娜 Mk XIV匯入 | [快拔左輪手槍 阿格里皮娜 Mk XIV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua#L15) |
| 快拔左輪手槍 阿格里皮娜 Mk XIV接入 | [快拔左輪手槍 阿格里皮娜 Mk XIV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua#L885-L887) |
