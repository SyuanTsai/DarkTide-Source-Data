# 護甲之禍：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own I-IV thresholds and formatter | [Own I-IV thresholds and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L301-L421) |
| Direct own wrapper clone | [Direct own wrapper clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p2_buff_templates.lua#L59) |
| Shared on_hit proc and interpolation | [Shared on_hit proc and interpolation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L596-L651) |
| Minion check | [Minion check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L606-L608) |
| Charge-field check | [Charge-field check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L622-L624) |
| Matching item check | [Matching item check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Target debuff helper | [Target debuff helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L37-L79) |
| Special-hit helper gate | [Special-hit helper gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L81-L90) |
| Target rending template | [Target rending template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376) |
| Minion buff addition | [Minion buff addition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/minion_buff_extension.lua#L206-L223) |
| Stack addition/start-time refresh | [Stack addition/start-time refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L462) |
| At-cap refresh | [At-cap refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L590) |
| Duration expiration | [Duration expiration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L44) |
| Finished buff removal | [Finished buff removal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L205) |
| Damage-before-on_hit | [Damage-before-on_hit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L348-L354) |
| on_hit payload and suppression | [on_hit payload and suppression](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L623) |
| Shot charge propagation | [Shot charge propagation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L375-L425) |
| HitScan shot inputs | [HitScan shot inputs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L145-L200) |
| HitScan ranged setup | [HitScan ranged setup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L53-L73) |
| HitScan attack dispatch | [HitScan attack dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L220-L227) |
| Ranged attack forwarding | [Ranged attack forwarding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L22-L28) |
| M1 hip hit-scan | [M1 hip hit-scan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L346-L425) |
| M1 aimed hit-scan | [M1 aimed hit-scan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L544-L612) |
| M2 hip hit-scan | [M2 hip hit-scan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L346-L425) |
| M2 aimed hit-scan | [M2 aimed hit-scan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L544-L612) |
| M3 hip hit-scan | [M3 hip hit-scan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L356-L423) |
| M3 aimed hit-scan | [M3 aimed hit-scan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L554-L621) |
| M1 bayonet routes | [M1 bayonet routes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L848-L1100) |
| M2 bayonet routes | [M2 bayonet routes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L848-L1100) |
| M3 bayonet route | [M3 bayonet route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L857-L1005) |
| Sweep charge default | [Sweep charge default](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L233-L240) |
| Sweep charge setup boundary | [Sweep charge setup boundary](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L233-L246) |
| Sweep Attack dispatch | [Sweep Attack dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1501) |
| Sweep saved charge and item packet | [Sweep saved charge and item packet](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1503) |
| Bayonet stab profiles | [Bayonet stab profiles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/settings_templates/lasgun_damage_profile_templates.lua#L1081-L1180) |
| Bayonet slash profile | [Bayonet slash profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/settings_templates/lasgun_damage_profile_templates.lua#L1180-L1200) |
| Rending armor damage | [Rending armor damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L60-L119) |
| Rending additive pool/cap | [Rending additive pool/cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660) |
| Armor rending factors | [Armor rending factors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L19) |
| Held slot condition | [Held slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Trait buff extraction | [Trait buff extraction](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L210) |
| Equip and unequip buff lifecycle | [Equip and unequip buff lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L681) |
| Wield transition | [Wield transition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L685-L693) |
| Unwield transition | [Unwield transition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| Fixed update cache | [Fixed update cache](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| Formatter | [Formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L56) |
| lasgun_p2_m1 trait import | [lasgun_p2_m1 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L15) |
| lasgun_p2_m1 trait binding | [lasgun_p2_m1 trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L1333-L1335) |
| lasgun_p2_m2 trait import | [lasgun_p2_m2 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L15) |
| lasgun_p2_m2 trait binding | [lasgun_p2_m2 trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L1327-L1329) |
| lasgun_p2_m3 trait import | [lasgun_p2_m3 trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L15) |
| lasgun_p2_m3 trait binding | [lasgun_p2_m3 trait binding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L1244-L1246) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

## 固定資料與等級

本項只有一個實際 trait 實作，UI／物品盤點將它連到冥潮鐳射槍 盧修斯 MK IIIa、MK V、Mk IV 三個 Mark。I–IV 都有來源定義；available_tiers 欄位為 null，只表示盤點 API 未提供可用等級資料。每級覆寫目標脆弱 proc 的充能層數門檻：25% 時分別為 2、4、6、8 層，75% 時分別為 6、8、10、12 層。每層數值來自共用目標 debuff，固定為 2.5%。

充能低於最低門檻時使用最低層數，高於最高門檻時使用最高層數；兩門檻間的程式逐段選值並按 charge level／該段門檻計算進度，最後向下取整。正好 25% 為最低層數，正好 75% 為最高層數。中段並非把 25%–75% 重新正規化成完整線性區間。

## 命中事件與路徑

自己的 wrapper 直接 clone 共用 charged-shot target-debuff 模板，沒有增加覆寫。程式接收 on_hit 後同時檢查目前手持槽位、attacking item 是否與 buff item 相同、目標是否為 minion，以及事件是否帶有 charge_level。它不要求充能已達 25%，也沒有只接受遠程射擊的檢查；所有條件成立時，依實際 charge_level 計算層數。共用 helper 只有在 target_buff_data 明確把 allow_weapon_special 設為 false 時才拒絕 weapon special；本項未設定該欄位。

三個 Mark 的普通腰射和瞄準射擊都有 charge-ammo 起手及帶 use_charge 的 shoot_hit_scan 發射路由。發射動作將當前 charge level、武器 item 與手持槽位傳入 HitScan，再由 ranged attack 傳給 Attack 的 on_hit 事件。因此 hit scan 對符合條件的小兵派送命中時，這些普通與瞄準射擊都可觸發；中斷蓄力、瞄準、換彈或只按特殊鍵本身不會施加脆弱。這三個 item 的命中射擊皆為 hitscan；沒有在三份 action table 找到普通推擊、投擲或獨立 projectile 路由。

盧修斯 MK IIIa 與 MK V 的 bayonet special 接到 stab 與 heavy-stab Sweep；Mk IV 接到 slash Sweep。這些 Sweep 設定未開啟自己的 use_charge 時，ActionSweep 送入 charge level 1，因此命中 minion 且滿足 held/item gate 時會依該級最高門檻數值施加脆弱。攻擊 profile 沒有 skip_on_hit_proc，而自己的 target_buff_data 也沒有禁止 weapon special，所以特殊攻擊不因特殊標記而被排除。這只確認上述 bayonet hit 路徑，沒有把一般 push、投擲或不存在的彈體路徑外推為可觸發。

## 目標端狀態與持用生命週期

proc helper 先要求目標仍存活且有 buff extension，再把計算層數交給目標端 rending_debuff。這個 debuff 自帶 5 秒 duration、16 層總上限與 refresh_duration_on_stack；每一層提供 0.025 的 target rending_multiplier。增加層數時重設 debuff 起始時間；到達 16 層後，新增請求無法增加層數，但共用 stack-cap 分支會刷新起始時間。持續時間結束後 buff update 標記 finished，extension 隨後移除它。Proc template 裡的 31 是 helper 對單次 target-buff 請求使用的 max_stacks，並非 target debuff 的 16 層上限。

on_equip 安裝使受祝福物品在裝備槽中擁有這個 proc buff；held-slot conditional 只在目前 wielded_slot 與 item_slot_name 相符時讓 proc 生效。切到別的槽位不會移除目標 debuff，也不會暫停其 5 秒計時，只會停止由該持用武器新觸發；切回時若目標效果仍存在且其它事件條件成立，便可繼續新增或刷新。物品從裝備槽卸下會移除安裝在該槽的 on_equip buff。固定更新先更新 buffs，再刷新 stat／keyword cache；本項事件在命中後產生，造成該次傷害已先完成結算。

## 層數與脆弱

每級在 25%／75% 充能門檻分別提供表中的最小／最大層數。以 IV 級 50% 為例，中段進度是 50%／75% = 2／3，因此 floor(8 + (12 − 8) × 2／3) = 10 層；10 × 2.5% = 25 個百分點目標脆弱。這是 target rending pool 的增量，不是直接傷害百分比。

## 傷害結算範例的限制

rending multiplier 由多個基準為 1 的來源相加，之後上限為 1，再乘護甲類別的 rending factor。目標脆弱只改變其中一項；護甲傷害 modifier、overdamage、finesse、背刺、側擊、部位、護甲加成、衰減及 force field 等後續條件仍會介入。受限算例使用 armored 類別的 rending factor 1 與 overdamage 0.25，並明確固定其餘輸入，因此得出的 28.125% 是該算例相對於其自身 80 基準的比較，不能泛化成所有攻擊的固定傷害加成。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_108`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_108.png)｜[Issue附件](https://github.com/user-attachments/assets/1c159e8c-afb0-4bd8-a18a-2e5843383a94)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 冥潮鐳射槍等級覆寫 | [冥潮鐳射槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L301-L421) |
| 冥潮鐳射槍Buff接入 | [冥潮鐳射槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p2_buff_templates.lua#L59) |
| UI 冥潮鐳射槍 | [UI 冥潮鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L892) |
| 冥潮鐳射槍 盧修斯 MK IIIa匯入 | [冥潮鐳射槍 盧修斯 MK IIIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L15) |
| 冥潮鐳射槍 盧修斯 MK IIIa接入 | [冥潮鐳射槍 盧修斯 MK IIIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L1333-L1335) |
| 冥潮鐳射槍 盧修斯 MK V匯入 | [冥潮鐳射槍 盧修斯 MK V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L15) |
| 冥潮鐳射槍 盧修斯 MK V接入 | [冥潮鐳射槍 盧修斯 MK V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L1327-L1329) |
| 冥潮鐳射槍 盧修斯 Mk IV匯入 | [冥潮鐳射槍 盧修斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L15) |
| 冥潮鐳射槍 盧修斯 Mk IV接入 | [冥潮鐳射槍 盧修斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L1244-L1246) |
