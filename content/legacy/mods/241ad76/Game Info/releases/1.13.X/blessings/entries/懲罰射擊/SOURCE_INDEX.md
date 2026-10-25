# 懲罰射擊：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| P1 own I–IV | [P1 own I–IV](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua#L385-L446) |
| P1 own ProcBuff wrapper | [P1 own ProcBuff wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p1_buff_templates.lua#L44-L60) |
| P3 own I–IV | [P3 own I–IV](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua#L385-L446) |
| P3 own ProcBuff wrapper | [P3 own ProcBuff wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p3_buff_templates.lua#L45-L61) |
| Melee and target ordinal helpers | [Melee and target ordinal helpers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L370) |
| Multiple melee target helper | [Multiple melee target helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L414-L426) |
| Exact item match helper | [Exact item match helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| P1 Kickback Mk V ranged hip / Bash | [P1 Kickback Mk V ranged hip / Bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L192-L238) |
| P1 Bash special sweeps | [P1 Bash special sweeps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L427-L647) |
| P1 special action selector | [P1 special action selector](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L904) |
| P3 Thugshot Mk VII ranged hip | [P3 Thugshot Mk VII ranged hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L197-L245) |
| P3 Bash special sweeps | [P3 Bash special sweeps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L447-L647) |
| P3 special action selector | [P3 special action selector](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L893) |
| Bash melee heavy profile | [Bash melee heavy profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/settings_templates/thumper_damage_profile_templates.lua#L24-L57) |
| ActionSweep ordinal reset | [ActionSweep ordinal reset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L380-L388) |
| ActionSweep target number creation | [ActionSweep target number creation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1330-L1362) |
| ActionSweep melee item call | [ActionSweep melee item call](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1501) |
| Attack on_hit event payload | [Attack on_hit event payload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L550-L623) |
| P1 pellet consumer | [P1 pellet consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L410-L425) |
| P1 pellet ranged execution | [P1 pellet ranged execution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L510-L525) |
| P3 hitscan action | [P3 hitscan action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L145-L200) |
| Hitscan ranged item consumer | [Hitscan ranged item consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L219-L228) |
| Ranged attack executor | [Ranged attack executor](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L22-L29) |
| Power type conversion and stat modifier | [Power type conversion and stat modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91) |
| ProcBuff time and refresh | [ProcBuff time and refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L104) |
| ProcBuff no-cooldown activation | [ProcBuff no-cooldown activation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L185) |
| ProcBuff tier stat selection | [ProcBuff tier stat selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L300) |
| ProcBuff event refresh | [ProcBuff event refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| Held slot conditional | [Held slot conditional](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Buff update and stat cache | [Buff update and stat cache](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| Weapon removal cleanup | [Weapon removal cleanup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L652-L681) |
| Complete Bash damage profile and target table | [Complete Bash damage profile and target table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/settings_templates/thumper_damage_profile_templates.lua#L24-L162) |
| P1 multi-pellet hit-scan route | [P1 multi-pellet hit-scan route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L151-L182) |
| Applicable power modifier sum | [Applicable power modifier sum](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L61) |
| Trait percentage formatter | [Trait percentage formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L7-L21) |
| Trait description format_values | [Trait description format_values](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L65-L109) |
| Kickback Mk V zoomed action is a separate ordinary ranged-shot route. | [Kickback Mk V zoomed action is a separate ordinary ranged-shot route.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L312-L360) |
| The selected action_bash is a melee sweep using light_ogryn_shotgun_tank; this is the elig | [The selected action_bash is a melee sweep using light_ogryn_shotgun_tank; this is the elig](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L427-L547) |
| The alternate Bash direction is also a melee sweep; Bash chain input selects the actual sp | [The alternate Bash direction is also a melee sweep; Bash chain input selects the actual sp](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L548-L647) |
| Thugshot Mk VII zoomed action is a separate ordinary ranged-hit-scan route. | [Thugshot Mk VII zoomed action is a separate ordinary ranged-hit-scan route.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L311-L360) |
| The selected action_bash is a melee sweep using light_ogryn_shotgun_tank; this is the elig | [The selected action_bash is a melee sweep using light_ogryn_shotgun_tank; this is the elig](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L447-L556) |
| The alternate Bash direction is also a melee sweep. | [The alternate Bash direction is also a melee sweep.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L557-L647) |
| ActionSweep initializes per-action hit ordinal state. | [ActionSweep initializes per-action hit ordinal state.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L240-L258) |
| Processed sweep hit target state is retained/passed through the action loop. | [Processed sweep hit target state is retained/passed through the action loop.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1398-L1425) |
| HitScan processing preserves the attack as a ranged shot. | [HitScan processing preserves the attack as a ranged shot.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L53-L73) |
| ranged_power_level_modifier is configured as an additive_multiplier stat. | [ranged_power_level_modifier is configured as an additive_multiplier stat.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L952) |
| The push action is a separate push route, not either weapon special Bash sweep. | [The push action is a separate push route, not either weapon special Bash sweep.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L1-L100) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- **觸發條件**：兩個 own wrapper 都監聽 `on_hit`，並要求持用槽條件、事件武器與祝福所屬武器相同，以及 `on_multiple_melee_hit`。該 helper 檢查當前事件 `attack_type == melee` 與 `required_num_hits <= target_number`；own tier 將門檻設為 3。它不維護跨攻擊命中累計器。
- **實際動作**：兩個 UI binding 都把武器特殊動作接至 `action_bash`。其左右 Bash 均為 `kind = sweep`，使用 `light_ogryn_shotgun_tank` 近戰重擊 profile。ActionSweep 在每次新掃擊開始時重設目標序號；命中流程建立 `target_number` 後傳入近戰 Attack。特殊 Bash 在此提供合格近戰事件；普通遠程射擊與推擊本體不滿足同一條件。
- **作用對象**：own tier 的 `proc_stat_buffs.ranged_power_level_modifier` 覆寫 wrapper 的 0.05 fallback，並非在 fallback 上再加一次。力量消費端只對 ranged attack type 套用該修正；近戰 Bash 不吃本祝福的遠程修正。
- **計時與切換**：ProcBuff 的 active_duration 是 3 秒，allow_proc_while_active 開啟且無 cooldown；再次符合條件時重設 active_start_time，不建立每目標一層。`is_item_slot_wielded` 使效果只在該祝福武器當前持用時提供；切槽不停止計時，完全移除武器則清除其 on_equip buff。
- **首次生效**：合格命中事件由 Attack 交給玩家 BuffExtension 處理；該 extension 在更新事件後重算 stat cache。故力量修正在處理中的攻擊之外，於後續 Buff 更新／快取刷新後供遠程攻擊讀取；不把同一正在結算的射擊宣稱為已獲得新效果。

力量修正是 `ranged_power_level_modifier` 的加算項。令 `S_native` 為原生武器力量類型曲線轉換後、套用 stat-buff 修正前的數值，`q` 為全域、遠程、弱點與條件修正等當次適用項目相對基準 1 的淨加總（不適用項目為 0），`p` 為本祝福當級數值，則 `S_after = S_native × (1 + q + p)`。例如 `S_native=500`、`q=0`、I 級 `p=0.06` 時，力量輸入由 500 變為 530；IV 級 `p=0.15` 時為 575。若 `q=0.20`，IV 級是 600 變 675，新增 75、相對增加 12.5%。這不是最終傷害百分比；後續攻擊傷害、踉蹌、順劈仍走各自計算。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_130`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_130.png)｜[Issue附件](https://github.com/user-attachments/assets/63d34e16-454f-4ece-8051-9c473c0a1619)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 反衝者等級覆寫 | [反衝者等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua#L385-L446) |
| 反衝者Buff接入 | [反衝者Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p1_buff_templates.lua#L44-L60) |
| UI 反衝者 | [UI 反衝者](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1061) |
| 反衝者 洛倫茲 Mk V匯入 | [反衝者 洛倫茲 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L15) |
| 反衝者 洛倫茲 Mk V接入 | [反衝者 洛倫茲 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L840-L842) |
| 惡棍槍等級覆寫 | [惡棍槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua#L385-L446) |
| 惡棍槍Buff接入 | [惡棍槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p3_buff_templates.lua#L45-L61) |
| UI 惡棍槍 | [UI 惡棍槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1087) |
| 惡棍槍 洛倫茲 Mk VII匯入 | [惡棍槍 洛倫茲 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L16) |
| 惡棍槍 洛倫茲 Mk VII接入 | [惡棍槍 洛倫茲 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L832-L834) |
