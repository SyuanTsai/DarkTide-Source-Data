# 突然襲擊：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| own I-IV tiers and formatter | [own I-IV tiers and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p1.lua#L342-L395) |
| own wrapper clone | [own wrapper clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p1_buff_templates.lua#L13-L19) |
| base proc template | [base proc template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2571-L2584) |
| Buff trait override selection | [Buff trait override selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L184) |
| ProcBuff held active gate | [ProcBuff held active gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L253) |
| ProcBuff whole stat-map override | [ProcBuff whole stat-map override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L300) |
| ProcBuff expiry | [ProcBuff expiry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L100) |
| ProcBuff refreshing event | [ProcBuff refreshing event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| held item slot | [held item slot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| melee weapon special predicate | [melee weapon special predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L384-L386) |
| trait source item predicate | [trait source item predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| crit chance formula consumer | [crit chance formula consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| action crit flags | [action crit flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| ActionSweep start | [ActionSweep start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L217-L225) |
| ActionSweep attack call | [ActionSweep attack call](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1488-L1503) |
| Attack on_hit payload | [Attack on_hit payload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L579-L621) |
| trait buff extraction | [trait buff extraction](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L192-L210) |
| on-equip add and unequip removal | [on-equip add and unequip removal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L662) |
| wield transition | [wield transition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L685-L693) |
| unwield lifecycle | [unwield lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| buff slot context | [buff slot context](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1248-L1270) |
| M1 special punch action | [M1 special punch action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L819-L835) |
| M1 uppercut profile link | [M1 uppercut profile link](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L903-L905) |
| uppercut special flag | [uppercut special flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_shovel_damage_profile_templates.lua#L968-L975) |
| M2 special toggle | [M2 special toggle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L1109-L1137) |
| M2 folded light profile | [M2 folded light profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L165-L183) |
| M2 folded light link and guard | [M2 folded light link and guard](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L260-L268) |
| M2 folded heavy and link | [M2 folded heavy and link](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L272-L360) |
| M3 special toggle | [M3 special toggle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L1094-L1122) |
| M3 folded light profile | [M3 folded light profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L165-L183) |
| M3 folded light link and guard | [M3 folded light link and guard](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L258-L265) |
| M3 folded heavy and link | [M3 folded heavy and link](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L272-L360) |
| folded light special profile | [folded light special profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_shovel_damage_profile_templates.lua#L608-L640) |
| folded heavy special profile | [folded heavy special profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_shovel_damage_profile_templates.lua#L673-L700) |
| folded-mode deactivation | [folded-mode deactivation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_shovels.lua#L94-L106) |
| pure push type | [pure push type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L78-L84) |
| melee-vs-push helper | [melee-vs-push helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L367-L386) |
| m1 normal light | [m1 normal light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L149-L235) |
| m1 charged/normal heavy | [m1 charged/normal heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L240-L311) |
| m1 alternate light | [m1 alternate light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L369-L454) |
| m1 alternate heavy | [m1 alternate heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L459-L535) |
| m1 chained light | [m1 chained light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L588-L674) |
| m1 combo light | [m1 combo light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L728-L811) |
| m1 pushfollow | [m1 pushfollow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L961-L1036) |
| m1 pure push | [m1 pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L1045-L1088) |
| m2 normal light | [m2 normal light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L422-L505) |
| m2 charged/normal heavy | [m2 charged/normal heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L514-L585) |
| m2 chained light | [m2 chained light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L649-L730) |
| m2 alternate heavy | [m2 alternate heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L739-L812) |
| m2 chain light 3 | [m2 chain light 3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L869-L952) |
| m2 chain light 4 | [m2 chain light 4](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L1017-L1100) |
| m2 pushfollow | [m2 pushfollow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L1188-L1262) |
| m2 pure push | [m2 pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L1270-L1325) |
| m3 normal light | [m3 normal light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L419-L502) |
| m3 charged/normal heavy | [m3 charged/normal heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L511-L583) |
| m3 alternate light | [m3 alternate light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L647-L729) |
| m3 alternate heavy | [m3 alternate heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L737-L807) |
| m3 chained light | [m3 chained light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L865-L947) |
| m3 combo light | [m3 combo light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L1005-L1086) |
| m3 pushfollow | [m3 pushfollow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L1173-L1249) |
| m3 pure push | [m3 pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L1258-L1313) |
| standard profile without weapon_special: ogryn_shovel_light_tank | [standard profile without weapon_special: ogryn_shovel_light_tank](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_shovel_damage_profile_templates.lua#L137-L240) |
| standard profile without weapon_special: ogryn_shovel_heavy_smiter | [standard profile without weapon_special: ogryn_shovel_heavy_smiter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_shovel_damage_profile_templates.lua#L752-L877) |
| standard profile without weapon_special: ogryn_shovel_heavy_tank | [standard profile without weapon_special: ogryn_shovel_heavy_tank](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_shovel_damage_profile_templates.lua#L319-L422) |
| standard profile without weapon_special: ogryn_shovel_light_smiter | [standard profile without weapon_special: ogryn_shovel_light_smiter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_shovel_damage_profile_templates.lua#L482-L607) |
| standard profile without weapon_special: ogryn_shovel_light_linesman | [standard profile without weapon_special: ogryn_shovel_light_linesman](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_shovel_damage_profile_templates.lua#L1183-L1263) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- Own trait 的 I–IV `proc_stat_buffs.melee_critical_strike_chance` 為 .075/.10/.125/.15，`active_duration` 均為 3；RAW formatter 以帶「+」百分比顯示機率、以數字顯示時間。own wrapper 只 clone base proc template。

- ProcBuff 對 stat map 選擇完整 own override 或 base fallback，並非相加；own melee chance 取代 base `critical_strike_chance=.10`。`_can_add_stat_and_keywords` 同時要求尚在三秒窗口及 `is_item_slot_wielded`，故切出時 ongoing stat 也停止彙總。

- 觸發事件需同時符合來源 item 相同、`weapon_special=true`、attack type melee。Mk III 的 `action_special_uppercut` 使用 weapon_special=true 上勾 profile；Mk XIX/Mk V 的折疊模式特殊輕、重攻擊使用各自 weapon_special=true profile。純切換不打出命中；普通／蓄力攻擊與追斬沒有特殊旗標；push 使用獨立 `attack_type=push`。

- 合格 on_hit 機率為 1，允許啟用期間再次觸發，事件時間重設窗口起點，沒有層數。掃掠起始先擲定 action crit flag，命中後才送出帶該 flag 的 on_hit；首次新觸發不回溯，同一動作不重擲。不同動作在 buff/stat cache 更新後才讀新值。

- 切換槽位時，on_equip instance 可留在已裝備武器上，但 item-slot gate 關閉其 stat/proc；計時照走。切回未到期武器後由下一次屬性快取更新恢復；卸裝移除 on_equip buff。只有近戰暴擊 consumer 讀取這個 stat；forced/prevented/auto-crit條件及 clamp、conversion、PRD仍各自生效。

令 `p` 是本祝福數值（.075/.10/.125/.15），`C` 是基礎機率、`g` 是全域暴擊加成、`q` 是其他 melee 暴擊加成、`h` 是武器 handling 修正。近戰暴擊率計算先加總 `C+g+q+p+h` 並 clamp 至 `[0,1]`；若未略過轉換，再乘 `(1-critical_strike_chance_to_damage_convert)`。本項只供應近戰暴擊率輸入，不是最終傷害加成；prevent、guaranteed/action-auto crit及 PRD會影響實際擲定。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_209`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_209.png)｜[Issue附件](https://github.com/user-attachments/assets/8d8fcea8-fdfc-4f8c-958c-fccc4983c64f)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 廁所鏟等級覆寫 | [廁所鏟等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p1.lua#L342-L397) |
| 廁所鏟Buff接入 | [廁所鏟Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p1_buff_templates.lua#L17-L19) |
| UI 廁所鏟 | [UI 廁所鏟](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L286) |
| 廁所鏟 兇殘 Mk III匯入 | [廁所鏟 兇殘 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L16) |
| 廁所鏟 兇殘 Mk III接入 | [廁所鏟 兇殘 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m1.lua#L1395-L1397) |
| 廁所鏟 兇殘 Mk XIX匯入 | [廁所鏟 兇殘 Mk XIX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L17) |
| 廁所鏟 兇殘 Mk XIX接入 | [廁所鏟 兇殘 Mk XIX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m2.lua#L1668-L1670) |
| 廁所鏟 兇殘 Mk V匯入 | [廁所鏟 兇殘 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L17) |
| 廁所鏟 兇殘 Mk V接入 | [廁所鏟 兇殘 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p1_m3.lua#L1657-L1659) |
