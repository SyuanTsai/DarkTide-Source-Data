# 熱力震盪：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 完整I–IV等級及formatter | [完整I–IV等級及formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L155-L200) |
| 實際SteppedStatBuff wrapper與heat函式 | [實際SteppedStatBuff wrapper與heat函式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L23-L62) |
| Tier正值百分比formatter | [Tier正值百分比formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L20) |
| SteppedStatBuff動態計數 | [SteppedStatBuff動態計數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L10-L51) |
| Buff tier override與stat計算 | [Buff tier override與stat計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Held item-slot gate | [Held item-slot gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Reload與vent動作排除 | [Reload與vent動作排除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L74-L103) |
| charge_up_time stat type | [charge_up_time stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L723-L725) |
| Additive multiplier baseline and aggregation | [Additive multiplier baseline and aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1057) |
| Both Mark selected charge template definitions | [Both Mark selected charge template definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_charge_templates.lua#L34-L91) |
| M1 direct overload charge route | [M1 direct overload charge route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L239-L317) |
| M1 uncharged/direct release shot | [M1 uncharged/direct release shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L318-L384) |
| M1 charged release shot | [M1 charged release shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L385-L447) |
| M1 brace overload charge route | [M1 brace overload charge route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L448-L534) |
| M1 vent and reload kinds | [M1 vent and reload kinds](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L535-L650) |
| M2 direct overload charge route | [M2 direct overload charge route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L239-L317) |
| M2 uncharged/direct release shot | [M2 uncharged/direct release shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L318-L384) |
| M2 brace overload charge route | [M2 brace overload charge route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L385-L471) |
| M2 charged release shot | [M2 charged release shot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L472-L534) |
| M2 vent and reload kinds | [M2 vent and reload kinds](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L535-L650) |
| Weapon action-kind dispatch | [Weapon action-kind dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_action_handler_data.lua#L50-L90) |
| Action module class dispatch | [Action module class dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/action_modules.lua#L12-L29) |
| Overload action order | [Overload action order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_charge.lua#L8-L29) |
| ActionCharge selects active template | [ActionCharge selects active template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_charge.lua#L26-L65) |
| Charge duration consumer | [Charge duration consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/charge_action_module.lua#L28-L87) |
| Charge heat module | [Charge heat module](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/overheat_action_module.lua#L18-L60) |
| Shot heat producer | [Shot heat producer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L568-L580) |
| Immediate heat clamp and application | [Immediate heat clamp and application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L31-L62) |
| Charge heat application | [Charge heat application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L82-L100) |
| Per-slot overheat decay | [Per-slot overheat decay](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L102-L171) |
| Vent heat and its separate stat | [Vent heat and its separate stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L174-L230) |
| Shared heat values are clamped percentages | [Shared heat values are clamped percentages](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L5-L15) |
| Shared continuous heat, idle decay and vent | [Shared continuous heat, idle decay and vent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L26-L71) |
| Weapon fixed-update ordering | [Weapon fixed-update ordering](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L487-L508) |
| Every weapon slot heat update | [Every weapon slot heat update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1377-L1390) |
| Buff extension precedes weapon system | [Buff extension precedes weapon system](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L309-L322) |
| Weapon item interpolation inputs | [Weapon item interpolation inputs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon.lua#L68-L78) |
| Template endpoint interpolation | [Template endpoint interpolation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L371-L402) |
| Current wielded resolved template getter | [Current wielded resolved template getter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1539-L1551) |
| Current charge template getter | [Current charge template getter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1633-L1641) |
| 一般蓄力完成門檻與初始化 | [一般蓄力完成門檻與初始化](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_charge.lua#L26-L49) |
| 完成狀態判定 | [完成狀態判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_charge.lua#L75-L87) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 固定 Steam Build 25606770／Release 1.13.1 的 inventory 有一個 ranged trait 實作，完整 trait ID 為 weapon_trait_bespoke_plasmagun_p1_lower_overheat_gives_faster_charge；兩筆實際型號關聯分別是 plasmagun_p1_m1、plasmagun_p1_m2，且兩者都接入同一個 bespoke_plasmagun_p1 trait item。玩家名稱依 metadata family／pattern／mark loc_ids 合成，不能用舊 display_name 代替。

- own I–IV tier 將 charge_up_time 設為 −0.025／−0.03／−0.035／−0.04。SteppedStatBuff wrapper 的 base conditional fallback 為 −0.01，但 tier own stat_buffs override 是各階實際值；Buff 聚合後每一有效階數加一次該 own modifier。charge_up_time 是 additive_multiplier，neutral baseline 為 1。

- wrapper 沒有命中或 timer 事件。bonus_step_func 讀目前 wielded weapon slot 的 overheat_current_percentage h，再計算 n=round(5×[1−clamp01((h−0.1)/0.9)])，由 template 的 0–5 min/max 限制。held slot gate 同時管 stepped-stat 與 conditional stat；not-reloading guard 會令 reload_state 與 vent_overheat 動作期間階數歸零。

- overheat_current_percentage 是 0–1 的每槽熱量。直接射擊透過 Overheat.increase_immediate 更新它；charge action 的 OverheatActionModule 讀 charge level/template 逐 fixed update 增加熱量；各武器槽再經 Overheat.update 依各自閾值和修正更新熱量。手動／強制通風則呼叫 update_venting，其速率讀 vent_overheat_speed，與本項 charge_up_time 是不同 stat。

- 實際蓄力由 action_charge_direct 或 action_charge 選擇 charge template，ActionOverloadCharge 先更新 ActionCharge／ChargeActionModule，再更新 OverheatActionModule。ChargeActionModule 每次 fixed_update 以及 complete_time 都讀目前 buff cache 的 charge_up_time 乘已解析的 charge_duration，並按目前分母重算 charge_level。因此效果可隨蓄力期間熱量改變；本例只是在固定熱量下比較時間。

- M1、M2 的直接蓄力都選 plasmagun_p1_m1_charge_direct，架槍蓄力都選 plasmagun_p1_m1_charge。M2 專屬命名 charge templates 在本檔僅有定義，未被兩型號實際 action 選用。兩型號的射擊 profile 有差異，但不改變此祝福的時間消費者；射擊階段將蓄力結果交給 hitscan，並按射擊模板另行增加熱量。

- Weapon fixed_update 先更新所有武器槽熱量，再更新當前 action；Buff 快取的更新順序在共通固定 SHA 快取中確認為先於 weapon system。故同一 fixed update 內改動的熱量會在後續 buff 更新時反映；ChargeActionModule 使用最新快取，但不把新的熱量追溯為已完成命中的直接傷害加成。

- RAW formatter 對 own 負值套 abs(value×100)，百分比轉換分支替代預設乘 100，tier 字樣因此是正的 2.5／3／3.5／4%。玩家稿以程式實際作用的「蓄力時間縮短」敘述；本體英文稱 Charge Speed，繁中稱充能速度，兩者沒有列出時間乘數公式。此差別記為原文未涵蓋作用階段，不直接定性成數值矛盾。

- 直接蓄力模板額外宣告 min_charge=0.05 與 fully_charged_charge_level=0.525；ActionCharge.start 將 max_charge 設為該門檻，OverheatActionModule 再以 min(fully_charged_charge_level,max_charge) 判定完成。ChargeActionModule 按 min_charge+(1−min_charge)×time_charged/charge_duration 計進度；所以本項時間參數例需再乘目標比例因子，不能把 0.704 秒直接宣稱為一般射擊的完成時間。

- 沒有直接傷害 stat 修正不代表同樣等待時間的充能比例不變；加速會改變進度。比較射擊傷害時要另固定充能比例與該射擊的其他條件。

- h 是目前 0–1 過熱比例，n=round(5×[1−clamp01((h−0.1)/0.9)])、範圍零至五。每階修正 c 為 I／II／III／IV 的 −0.025／−0.03／−0.035／−0.04；q 是其他 charge_up_time 加法貢獻。時間係數 M=1+q+n×c，充能時間參數 D=D₀×M，D₀ 是目前實際模板插值解析出的 charge_duration。

- 在來源充能公式中，正的已充能時間 t 與延遲 d 對應的進度為 a+(1−a)×(t−d)/D，再受最大可充能比例限制。固定條件下，達到目標 L 的時間為 d+D×(L−a)/(1−a)，適用前提為 L≥a 且可達到 L；時間參數 D 不必等於實際完成秒數。

- 實際直接路徑 a=0.05、L=0.525、此例 d=0，比例因子為 0.5。假設 D₀=0.80、h=0.46、IV 三階、q=0，參數 0.80→0.704 秒，門檻時間 0.40→0.352 秒；固定熱量的時間縮短均為 12%，反比速率提升約 13.64%。

- q=+0.20 時，同一路徑只有其他修正的參數為 0.96 秒、門檻時間 0.48 秒；加入本項為 0.864／0.432 秒，相對時間縮短 0.048/0.48=10%。這些比較沒有提供直接傷害乘數。

| 等級 | 每階charge_up_time modifier | RAW formatter值／階 | 五階時間係數 | 五階時間縮短 |
|---|---:|---:|---:|---:|
| I | −2.5% | 2.5% | 0.875 | 12.5% |
| II | −3% | 3% | 0.85 | 15% |
| III | −3.5% | 3.5% | 0.825 | 17.5% |
| IV | −4% | 4% | 0.8 | 20% |

- 五階時間係數以 q=0 為前提；若 q≠0，加入本項相對原時間的縮短率為 n×|c|/(1+q)。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_154`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_154.png)｜[Issue附件](https://github.com/user-attachments/assets/bb4dde18-82c5-4a0a-b0f6-a0e16651bf5a)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 電漿槍等級覆寫 | [電漿槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L155-L200) |
| 電漿槍Buff接入 | [電漿槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L23-L62) |
| UI 電漿槍 | [UI 電漿槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1113) |
| 電漿槍 M35熔岩核心 Mk II匯入 | [電漿槍 M35熔岩核心 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L18) |
| 電漿槍 M35熔岩核心 Mk II接入 | [電漿槍 M35熔岩核心 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L985-L987) |
| 電漿槍 M35熔岩核心 Mk III匯入 | [電漿槍 M35熔岩核心 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L18) |
| 電漿槍 M35熔岩核心 Mk III接入 | [電漿槍 M35熔岩核心 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L985-L987) |
