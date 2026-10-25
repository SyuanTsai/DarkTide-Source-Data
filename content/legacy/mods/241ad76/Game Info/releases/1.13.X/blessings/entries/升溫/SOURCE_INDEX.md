# 升溫：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| SteppedStatBuff動態計數 | [SteppedStatBuff動態計數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L10-L51) |
| Buff tier override與stat計算 | [Buff tier override與stat計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Held item-slot gate | [Held item-slot gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Reload與vent動作排除 | [Reload與vent動作排除](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L74-L103) |
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
| 各等級及formatter | [各等級及formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L257-L299) |
| 完整專屬wrapper | [完整專屬wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L104-L143) |
| percentage自訂函式 | [percentage自訂函式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L20) |
| 射擊先結算再增加熱能 | [射擊先結算再增加熱能](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L308-L343) |
| 一般威力修正聚合 | [一般威力修正聚合](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L60) |
| 威力修正作用位置 | [威力修正作用位置](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91) |
| 攻擊／衝擊／順劈威力分配 | [攻擊／衝擊／順劈威力分配](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L50) |
| 傷害檔威力輸入 | [傷害檔威力輸入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L228) |
| 傷害呼叫傳入攻擊者數值 | [傷害呼叫傳入攻擊者數值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L587-L596) |
| 衝擊威力進入踉蹌計算 | [衝擊威力進入踉蹌計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L80) |
| 威力修正的stat類型 | [威力修正的stat類型](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L925-L928) |
| 實際射擊接入命中掃描 | [實際射擊接入命中掃描](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L145-L200) |
| 實際射擊命中質量預算 | [實際射擊命中質量預算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L53-L92) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 此項只有一個完整 trait ID，綁定 plasmagun_p1 的 Mk II 與 Mk III。兩個實際武器模板都載入 bespoke_plasmagun_p1 trait 類別並將對應 key 加入 traits；metadata 的 weapon_type_restriction 是 plasmagun_p1。

- I–IV tier 的 stat_buffs.power_level_modifier 依序為 0.015／0.02／0.03／0.04。實際 wrapper 是 stepped_stat_buff，max_stacks=1、stack_offset=-1、min/max step=0/5；它讀取目前持用武器欄位的 overheat_current_percentage，計算 heat step，且要求持用該欄位、目前欄位為武器及不是重新裝填。Tier stat 與 wrapper conditional_stat_buffs 的同名 power_level_modifier 相同，故 tier override 取代 0.01 備用值；不是在 tier 值上再加 0.01。wrapper 沒有 optional stepped_stat_buffs 表。

- 該加成是依熱能持續重新計算，不依賴命中、擊殺、爆擊或射擊次數，也沒有此 trait 自己的事件疊層或持續時間。reload_state 與 vent_overheat 都由實際 reload predicate 視為重新裝填，因此 bonus_step 為 0。兩種型號的普通、直接蓄力與架槍蓄力射擊都走 ActionShoot／hitscan 攻擊路徑；兩者射擊 profile 可不同，但通用 power_level_modifier 的計算方式相同。

- PowerLevel25–60 將八個適用威力分量相加再減七個基準1，63–91 在各 power type 曲線解析後乘總因子；DamageProfile29–50 分配攻擊／衝擊／順劈輸入。實際兩型號 shoot_hit_scan 接入 ActionShootHitScan._shoot→HitScan.process_hits，後者以 DamageProfile.max_hit_mass 取得貫穿的命中質量預算。因此引用的是實際射擊接線，而非僅憑共用工具定義推定。

- ActionShoot308–343 先執行該發攻擊、後呼叫_add_heat；新的熱能由後續 Buff 快取更新反映。實際攻擊仍受各 hit_scan profile、目標曲線及其他結算影響，不保證威力加成等比例提升最終傷害或貫穿數量。

- 令 h 為武器欄位中的 normalized overheat_current_percentage，n 為有效熱能階數，p 為所選 tier 每階值：n=round(5×clamp01((h−0.10)/0.90))，範圍 0–5；A=n×p。I–IV 的 p 為 0.015／0.02／0.03／0.04，所以五階 A 上限是 0.075／0.10／0.15／0.20。

- power_level_modifier 是 additive_multiplier。PowerLevel.power_level_buff_modifier 將此通用 modifier 與適用的遠程、弱點、目標狀態等威力修正組合；本項在該組合中貢獻 A。若其他適用分量都在基準 1，合計因子為 1+A。該因子乘在攻擊類型曲線已解析的威力值上，然後由 DamageProfile 分別分配 attack、impact 與 cleave power；DamageCalculation 以 attack power 分布計算傷害，StaggerCalculation 使用 impact power。故 A 不是最終傷害的直接同比百分比。

- 武器射擊及蓄力會改變過熱欄位；祝福統計快取在武器系統之前更新，而 ActionShoot 在該發攻擊後才增加射擊熱能。因此，當下熱能只會在後續快取更新後改變 A，不會回溯修改已結算的該發射擊。排熱與其他每欄位熱能更新仍依其實際 weapon heat 流程，不把衰減或排熱速度等同於祝福階數。

- 若其他適用威力分量的加法貢獻合計 q，合計因子為 1+q+A。在 P=500、q=0.10、A=0.08 的固定輸入例中，550→590，相對此階段原值增幅為 40/550≈7.27%；不是獨立乘1.08，也不宣稱最終傷害等比。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_152`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_152.png)｜[Issue附件](https://github.com/user-attachments/assets/155eda34-c438-4fc9-8400-a055c6b492e2)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 電漿槍等級覆寫 | [電漿槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L257-L299) |
| 電漿槍Buff接入 | [電漿槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L104-L143) |
| UI 電漿槍 | [UI 電漿槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1113) |
| 電漿槍 M35熔岩核心 Mk II匯入 | [電漿槍 M35熔岩核心 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L18) |
| 電漿槍 M35熔岩核心 Mk II接入 | [電漿槍 M35熔岩核心 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L985-L987) |
| 電漿槍 M35熔岩核心 Mk III匯入 | [電漿槍 M35熔岩核心 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L18) |
| 電漿槍 M35熔岩核心 Mk III接入 | [電漿槍 M35熔岩核心 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L985-L987) |
