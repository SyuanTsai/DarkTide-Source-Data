# 專注冷卻：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| 完整I–IV tier值與formatter | [完整I–IV tier值與formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L300-L342) |
| 本項Buff wrapper與持用條件 | [本項Buff wrapper與持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L144-L152) |
| Tier conditional map覆寫與stat aggregation | [Tier conditional map覆寫與stat aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| 持用slot條件 | [持用slot條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Critical Strike狀態設定及事件 | [Critical Strike狀態設定及事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184) |
| ActionShoot開始時的crit判定 | [ActionShoot開始時的crit判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L100-L160) |
| 單發射擊handling設定 | [單發射擊handling設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L271-L280) |
| Mk II普通射擊 | [Mk II普通射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L318-L384) |
| Mk II蓄力射擊 | [Mk II蓄力射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L385-L447) |
| Mk III普通射擊 | [Mk III普通射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L318-L384) |
| Mk III蓄力射擊 | [Mk III蓄力射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L472-L534) |
| 射擊後加入heat的順序 | [射擊後加入heat的順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L244-L347) |
| ActionShoot的immediate heat入口 | [ActionShoot的immediate heat入口](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L568-L580) |
| Crit immediate heat consumer | [Crit immediate heat consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L31-L62) |
| 共用立即熱量加入與clamp | [共用立即熱量加入與clamp](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/shared_overheat_and_warp_charge_functions.lua#L5-L15) |
| 蓄力持續heat | [蓄力持續heat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L82-L100) |
| Vent移除heat | [Vent移除heat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L174-L230) |
| OverheatActionModule | [OverheatActionModule](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/overheat_action_module.lua#L18-L60) |
| Mk II direct-charge action | [Mk II direct-charge action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L239-L317) |
| Mk II brace-charge action | [Mk II brace-charge action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L448-L534) |
| Mk II vent and reload actions | [Mk II vent and reload actions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L535-L650) |
| Mk III direct-charge action | [Mk III direct-charge action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L239-L317) |
| Mk III brace-charge action | [Mk III brace-charge action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L385-L471) |
| Mk III vent and reload actions | [Mk III vent and reload actions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L535-L650) |
| 實際命中掃描繼承射擊類別 | [實際命中掃描繼承射擊類別](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L1-L22) |
| 實際命中掃描先呼叫父類start | [實際命中掃描先呼叫父類start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L48-L54) |
| 百分比自訂formatter | [百分比自訂formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L9-L20) |
| 百分比prefix處理順序 | [百分比prefix處理順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L79-L108) |
| 自然散熱的獨立數值 | [自然散熱的獨立數值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/overheat.lua#L155-L171) |
| 蓄力時間的獨立數值 | [蓄力時間的獨立數值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/modules/charge_action_module.lua#L28-L87) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 固定來源 inventory 中，唯一變體是 weapon_trait_bespoke_plasmagun_p1_reduced_overheat_on_critical_strike，使用完整 weapon ID plasmagun_p1；實際兩筆 UI binding 為電漿槍 M35熔岩核心 Mk II與Mk III。

- Tier 寫入 conditional_stat_buffs.overheat_immediate_amount_critical_strike；實際 wrapper 是 held-slot conditional 的普通 Buff，並提供同一 stat 的 0.5 fallback。Buff.update_stat_buffs 在有 tier conditional override 時選用 tier map，故實際 I–IV 值為 0.7／0.6／0.5／0.4，而不是在 0.5 上再疊加或相乘一次。

- 兩型號的普通與蓄力發射動作都使用 ActionShoot；其單發射擊動作開始時更新 critical_strike_component.is_active。射擊處理後，ActionShoot._add_heat 把該狀態傳給 Overheat.increase_immediate；此消費端不依賴命中結果。

- Overheat.increase_immediate 先依一般 overheat_amount、overheat_immediate_amount 與 charge_template.overheat_percent 算出基準立即熱量；只有爆擊時才再乘 overheat_immediate_amount_critical_strike。共用加入函式把該新增量加到現有熱量並限制在 0–1，因此本祝福縮減新增熱量，不會直接扣掉既有熱量。

- 蓄力中的持續熱量由 Overheat.increase_over_time 計算，使用 overheat_over_time_amount；通風則以 vent_overheat_speed 計算移除時間。兩條路徑不讀取本祝福的爆擊即時倍率。

- 實際 shoot_hit_scan 對應 ActionShootHitScan；其22行繼承ActionShoot，48–54的start先呼叫super.start。immediate_single_shot的auto_fire_time=nil使ActionShoot100–160走單發開始時判定critical state；ActionShoot308–343先_shoot再_add_heat，後者568–580只傳該狀態而不傳命中結果。

- 令 B 為同一發爆擊射擊套用本祝福前原本會增加的即時熱量比例，已包含該射擊的 charge_level、charge_template.overheat_percent、一般 overheat_amount／overheat_immediate_amount 及其他既有倍率；令 H 為開火前現有熱量比例，m 為本級倍率（I 0.7、II 0.6、III 0.5、IV 0.4）。則 ΔH=B×m，H_after=clamp(H+ΔH,0,1)。相對於 B，本級少增加 1−m，即30%／40%／50%／60%；這是相對減少該次新增量，不是目前熱量的百分點減項。非爆擊時本 stat 不參與該次增加。

- 算例使用 B=0.10、H=0.40，IV 新增0.04後為0.44；基準0.50與0.44差0.06，即6百分點。爆擊新增量相對減少60%與最後表讀數的百分點差額分開。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_156`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_156.png)｜[Issue附件](https://github.com/user-attachments/assets/0020f814-9db1-4f7a-8ab7-2724ce98b3bc)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 電漿槍等級覆寫 | [電漿槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L300-L342) |
| 電漿槍Buff接入 | [電漿槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L144-L152) |
| UI 電漿槍 | [UI 電漿槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1113) |
| 電漿槍 M35熔岩核心 Mk II匯入 | [電漿槍 M35熔岩核心 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L18) |
| 電漿槍 M35熔岩核心 Mk II接入 | [電漿槍 M35熔岩核心 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L985-L987) |
| 電漿槍 M35熔岩核心 Mk III匯入 | [電漿槍 M35熔岩核心 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L18) |
| 電漿槍 M35熔岩核心 Mk III接入 | [電漿槍 M35熔岩核心 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L985-L987) |
