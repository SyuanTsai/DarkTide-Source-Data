# 能量循環：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own I–IV tiers and formatter | [Own I–IV tiers and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p1.lua#L336-L397) |
| Own wrapper clone | [Own wrapper clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p1_buff_templates.lua#L18) |
| Inherited base gates, bonus steps and activation stat | [Inherited base gates, bonus steps and activation stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1241-L1287) |
| Per-key tier override into conditional stat | [Per-key tier override into conditional stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Live combo-based stepped count | [Live combo-based stepped count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L32-L80) |
| P1 Scandar Mk III action graph | [P1 Scandar Mk III action graph](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m1.lua#L119-L986) |
| P1 Achlys Mk VI action graph | [P1 Achlys Mk VI action graph](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m2.lua#L119-L1295) |
| Sweep special-profile selection and activation counter | [Sweep special-profile selection and activation counter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L932-L942) |
| Weapon special threshold and expiry | [Weapon special threshold and expiry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/weapon_special.lua#L7-L27) |
| Melee impact modifier consumer | [Melee impact modifier consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L190-L203) |
| 本項連擊／特殊狀態差異 | [本項連擊／特殊狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L256-L331) |
| 本項連擊／特殊狀態差異 | [本項連擊／特殊狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L494-L511) |
| 本項連擊／特殊狀態差異 | [本項連擊／特殊狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L1149-L1162) |
| 本項連擊／特殊狀態差異 | [本項連擊／特殊狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_deactivate_after_num_activations.lua#L53-L76) |
| 本項連擊／特殊狀態差異 | [本項連擊／特殊狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L1150-L1235) |
| 本項連擊／特殊狀態差異 | [本項連擊／特殊狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m1.lua#L978-L986) |
| 本項連擊／特殊狀態差異 | [本項連擊／特殊狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m2.lua#L1287-L1295) |
| 本項連擊／特殊狀態差異 | [本項連擊／特殊狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| 本項連擊／特殊狀態差異 | [本項連擊／特殊狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L309-L315) |
| 本項連擊／特殊狀態差異 | [本項連擊／特殊狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L512-L518) |
| 本項連擊／特殊狀態差異 | [本項連擊／特殊狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L58-L105) |
| 本項連擊／特殊狀態差異 | [本項連擊／特殊狀態差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L160-L172) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| 衝擊乘數實際套用及後續曲線 | [衝擊乘數實際套用及後續曲線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L78) |

## 執行與計算

Trait 只接入 powersword_p1 的 M1/M2。自身 wrapper 是 exact clone of base `extended_activation_duration_on_chained_attacks`。base 為 stepped_stat_buff，stack_count=1、stack_offset=-1，故基礎步數 0；bonus_step_func 讀 live weapon_action.combo_count，tier `extra_hits_max` 將有效步數 clamp 至 1 或 2。

Base conditional_stat_buffs 包含 weapon_special_max_activations=1 及 melee_impact_modifier=.025，且要求持用這個 item slot 並且該劍 special_active。Own tier table 的 stat_buffs.melee_impact_modifier 不是第二個常駐值：Buff._calculate_stat_buffs 對 base conditional key 以 template_override_data.stat_buffs 同名 key 取代 base .025，再按同一有效步數重複聚合。tier I–IV 因此每步為 .025/.05/.075/.10；weapon_special_max_activations 則每步維持 base +1。

兩個 P1 型號所有標準輕重斬皆是 sweep，並各自有特殊作用中 damage profile；推擊是 kind=push 並使用一般 push profiles。推擊追擊是 sweep，M1 使用 light_powersword_smiter_push_follow_up_active，M2 使用 light_powersword_stab_active；若特殊狀態在該動作開始時有效，ActionSweep 依 special_active_at_start 選特殊 profile。M2 還有右輕斬接續及 activate-special→windup→right-heavy_2 的路徑。

ActionHandler 在 action:start 後才更新 combo_count；sweep 增加、windup 保留，push／activate_special 等非 increase/hold 動作清零。特殊啟用動作本身不命中；下個 sweep 建立 damage profile。P1 每次啟用的原生 num_activations=1；base 依有效步數再加 1 次 activation。WeaponSpecial 在每個充能 damage window 命中至少一個敵人或因 abort 結束時計一次，不按敵人數逐個計；有效活躍時間為 3 秒，活著的命中及合格 window 結束會更新起點。

主控差異核對：ActionHandler494–499的非接續首動作可能直接得到combo0，正常特殊啟用→windup→sweep接續則在start後更新步數。配置以先Buff後Weapon順序建立更新列表；ExtensionSystemHolder._add_system實際以list[#list+1]插入，不只依配置名稱推定順序。效果快取須更新後才取得新步數，十四個實際P1 sweep均有正數延遲傷害窗，算例明列已讀到s1/2的條件而不保證任意同幀生效。

P1本體3秒期限從最近啟用／活目標命中／合格傷害窗結束起算；命中或abort窗口也刷新，不是整次啟用最多3秒。純push使combo歸零，因門檻讀current stats，已消耗次數可能滿足降低後門檻。再啟用刷新起點但未清num_special_charges；兩P1完整tweak table明確保留sprint/stun/vault，未保留unwield，也沒有P3專用set_inactive_func，故不能套用P3保留充能計數的例外。

有效步數 s=clamp(combo_count,0,extra_hits_max)，基礎 stack_count1+offset(-1)=0；I／II clamp上限1、III／IV上限2。條件stat有效時，weapon_special_max_activations每步+1，使當前停止門檻N=原生1+s；它在狀態檢查時讀取目前快取，可隨combo重置降低。令p=.025/.05/.075/.10，近戰衝擊同類乘數為1+q+p*s，q為既有同類增量；IV在s1/2時新增.10/.20。q=.20時1.20→1.30/1.40，相對增幅8.33%/16.67%。StaggerCalculation把近戰衝擊修正與其他衝擊修正相加後進入後續踉蹌計算；此式不代表傷害或最終踉蹌百分比。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_205`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_205.png)｜[Issue附件](https://github.com/user-attachments/assets/05e48334-0184-4507-ba85-700d7d36844b)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 動力劍等級覆寫 | [動力劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p1.lua#L336-L397) |
| 動力劍Buff接入 | [動力劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p1_buff_templates.lua#L18) |
| UI 動力劍 | [UI 動力劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L516) |
| 動力劍 斯干達 Mk III匯入 | [動力劍 斯干達 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m1.lua#L12) |
| 動力劍 斯干達 Mk III接入 | [動力劍 斯干達 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m1.lua#L1266-L1268) |
| 動力劍 阿克利斯 Mk VI匯入 | [動力劍 阿克利斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m2.lua#L12) |
| 動力劍 阿克利斯 Mk VI接入 | [動力劍 阿克利斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p1_m2.lua#L1624-L1626) |
