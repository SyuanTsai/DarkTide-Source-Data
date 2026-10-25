# 出血穿透：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| weapon_buff_templates.lua shared bleed consumer | [weapon_buff_templates.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L235-L258) |
| interval_buff.lua shared bleed consumer | [interval_buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64) |
| buff.lua shared bleed consumer | [buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L43) |
| buff.lua shared bleed consumer | [buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L352-L363) |
| buff.lua shared bleed consumer | [buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L460-L466) |
| buff.lua shared bleed consumer | [buff.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L630) |
| buff_extension_base.lua shared bleed consumer | [buff_extension_base.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L205) |
| buff_extension_base.lua shared bleed consumer | [buff_extension_base.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L647-L662) |
| buff_damage_profile_templates.lua shared bleed consumer | [buff_damage_profile_templates.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L59-L68) |
| buff_damage_profile_templates.lua shared bleed consumer | [buff_damage_profile_templates.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L443-L466) |
| power_level.lua shared bleed consumer | [power_level.lua shared bleed consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L92) |
| Bolter tiers | [Bolter tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_bolter_p1.lua#L426-L464) |
| Bolt pistol tiers | [Bolt pistol tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_boltpistol_p1.lua#L349-L387) |
| Bolter clone | [Bolter clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_bolter_p1_buff_templates.lua#L33-L35) |
| Bolt pistol clone | [Bolt pistol clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_boltpistol_p1_buff_templates.lua#L17-L19) |
| Ranged bleed parent | [Ranged bleed parent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2035-L2050) |
| Ranged gate | [Ranged gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L362-L366) |
| Damage gate | [Damage gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L465-L467) |
| Item gate | [Item gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Held gate | [Held gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Target application | [Target application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L37-L90) |
| Queued proc | [Queued proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L307-L338) |
| Damage then on_hit | [Damage then on_hit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L542-L623) |
| Hitscan individual targets | [Hitscan individual targets](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L215-L247) |
| Hitscan explosions | [Hitscan explosions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L273-L319) |
| Ranged direct | [Ranged direct](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L22-L29) |
| Bolt pistol hitscan wiring | [Bolt pistol hitscan wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/settings_templates/boltpistol_hitscan_templates.lua#L11-L58) |
| Bolter explosion wiring | [Bolter explosion wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/settings_templates/bolter_explosion_templates.lua#L12-L118) |
| Bolt pistol explosion wiring | [Bolt pistol explosion wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/settings_templates/bolter_explosion_templates.lua#L120-L257) |
| Bolter no ranged explosion flag | [Bolter no ranged explosion flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/settings_templates/bolter_damage_profile_templates.lua#L204-L368) |
| Bolt pistol no ranged explosion flag | [Bolt pistol no ranged explosion flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/settings_templates/boltpistol_damage_profile_templates.lua#L240-L579) |
| At-cap refresh | [At-cap refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L589) |
| Stack refresh | [Stack refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L457) |
| bolter_p1_m1import | [bolter_p1_m1import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L16) |
| bolter_p1_m1trait append | [bolter_p1_m1trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L762-L764) |
| bolter_p1_m1shoot kind | [bolter_p1_m1shoot kind](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L223-L227) |
| bolter_p1_m2import | [bolter_p1_m2import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L16) |
| bolter_p1_m2trait append | [bolter_p1_m2trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L757-L759) |
| bolter_p1_m2shoot kind | [bolter_p1_m2shoot kind](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L223-L227) |
| boltpistol_p1_m1import | [boltpistol_p1_m1import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L16) |
| boltpistol_p1_m1trait append | [boltpistol_p1_m1trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L769-L771) |
| boltpistol_p1_m1shoot kind | [boltpistol_p1_m1shoot kind](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L211-L215) |
| boltpistol_p1_m2import | [boltpistol_p1_m2import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L16) |
| boltpistol_p1_m2trait append | [boltpistol_p1_m2trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L769-L771) |
| boltpistol_p1_m2shoot kind | [boltpistol_p1_m2shoot kind](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L211-L215) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 兩trait I–IV target_buff_data.num_stacks_on_proc=1／2／3／4；兩wrapper clone bleed_on_ranged，沒有後續覆寫該trait。

- Base2035–2050監聽on_hit，matchingitem、damage>0及on_ranged_hit，持用條件於proc佇列處理時檢查。BuffUtils要求target HEALTH_ALIVE及buff extension。

- on_ranged_hit接受attack_type=ranged，或damage_profile.count_as_ranged_attack。四型號射擊為shoot_hit_scan；HitScan226每目標呼叫RangedAction.execute_attack，沒有傳triggered_proc_events，22–29以ranged呼叫Attack；on_hit沒有首目標、穿透、暴擊或弱點檢查。

- 矛頭爆矢槍與爆彈手槍的子爆炸走explosion分類；實際kill/stop profiles未設count_as_ranged_attack，故不通過gate。M1/M2手槍各自的hitscan與shell模板已逐一核對；近戰推擊是sweep/melee且未設該flag，也不通過。

- 共用bleed實際16cap/.5interval/1.5duration，interval_stack_removal使期限後逐interval先跳傷再移除一層。加層與滿層刷新duration但不重排既有interval；既有目標bleed不因換武器清除。傷害使用bleeding profile、attack_type=buff及owner/source_item。

- 每次合格遠程直擊事件新增q層，兩個武器變體I–IV均為q=1／2／3／4。施加後N=min(n+q,16)。

- 目標流血輸入威力：s=N/16，P=500s²(3−2s)。6層P=158.203125，8層P=250，16層P=500；P不是直接扣血值。

- 最後刷新後先等1.5秒，再於期限後的既有跳傷節拍開始退層。設等待節拍相位δ為0至0.5秒，T=1.5+δ+(N−1)×.5秒；8層名義5–5.5秒、16層9–9.5秒，嚴格時間比較及固定更新另有延遲。

- bleeding profile power_distribution.attack=175；護甲倍率unarmored=.5、armored/resistant=.75、player/berserker/void_shield=1、super_armor=.25、disgustingly_resilient=.5，另經PowerLevel與傷害流程。175及P均不保證相同數字的HP傷害。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_227`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_227.png)｜[Issue附件](https://github.com/user-attachments/assets/0fbf88fb-7c0c-4b57-ac56-9687c1e5198d)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 矛頭爆矢槍等級覆寫 | [矛頭爆矢槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_bolter_p1.lua#L426-L466) |
| 矛頭爆矢槍Buff接入 | [矛頭爆矢槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_bolter_p1_buff_templates.lua#L33-L35) |
| UI 矛頭爆矢槍 | [UI 矛頭爆矢槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L730) |
| 矛頭爆矢槍 洛克 Mk IIb匯入 | [矛頭爆矢槍 洛克 Mk IIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L16) |
| 矛頭爆矢槍 洛克 Mk IIb接入 | [矛頭爆矢槍 洛克 Mk IIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L762-L764) |
| 矛頭爆矢槍 洛克 Mk III匯入 | [矛頭爆矢槍 洛克 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L16) |
| 矛頭爆矢槍 洛克 Mk III接入 | [矛頭爆矢槍 洛克 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L757-L759) |
| 爆彈手槍等級覆寫 | [爆彈手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_boltpistol_p1.lua#L349-L387) |
| 爆彈手槍Buff接入 | [爆彈手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_boltpistol_p1_buff_templates.lua#L17) |
| UI 爆彈手槍 | [UI 爆彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L748) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk IV匯入 | [爆彈手槍 戈德溫–布蘭克斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L16) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk IV接入 | [爆彈手槍 戈德溫–布蘭克斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L769-L771) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk VI匯入 | [爆彈手槍 戈德溫–布蘭克斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L16) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk VI接入 | [爆彈手槍 戈德溫–布蘭克斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L769-L771) |
