# 煉獄：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Lasgun P1 tiers | [Lasgun P1 tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L306-L358) |
| Lasgun P2 tiers | [Lasgun P2 tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L10-L62) |
| Laspistol P1 tiers | [Laspistol P1 tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_laspistol_p1.lua#L136-L188) |
| Ogryn Heavy Stubber P2 tiers | [Ogryn Heavy Stubber P2 tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L717-L769) |
| Phosphor Pistol P1 tiers | [Phosphor Pistol P1 tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L121-L173) |
| Lasgun P3 candidate tiers | [Lasgun P3 candidate tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p3.lua#L382-L435) |
| Shared proc buff template | [Shared proc buff template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1794-L1809) |
| Ranged critical gate | [Ranged critical gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L340-L344) |
| Wielded slot gate | [Wielded slot gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| ProcBuff gate and event checks | [ProcBuff gate and event checks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L307-L338) |
| Attack event data | [Attack event data](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L623) |
| BuffUtils target override, cap, refresh, special flag | [BuffUtils target override, cap, refresh, special flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L37-L90) |
| Queued proc event | [Queued proc event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L992) |
| Stacking buff refresh on new stack | [Stacking buff refresh on new stack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L459) |
| Interval burn lifetime/ticks/stack removal | [Interval burn lifetime/ticks/stack removal](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L17-L64) |
| Removing interval-requested stack | [Removing interval-requested stack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L187-L205) |
| flamer_assault status cap/duration/interval/formula | [flamer_assault status cap/duration/interval/formula](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L76) |
| Burn damage profile | [Burn damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L328) |
| Hitscan crit to per-target attacks | [Hitscan crit to per-target attacks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L145-L199) |
| Per-target hit handling | [Per-target hit handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L215-L241) |
| RangedAction attack type | [RangedAction attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L22-L29) |
| Continuous auto crit shots | [Continuous auto crit shots](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1049) |
| Phosphor direct hit/explode configuration | [Phosphor direct hit/explode configuration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/settings_templates/phosphor_pistol_hitscan_templates.lua#L11-L43) |
| Phosphor explosion template | [Phosphor explosion template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/settings_templates/phosphor_pistol_explosion_templates.lua#L12-L24) |
| Phosphor backblast profile has no ranged flag | [Phosphor backblast profile has no ranged flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/settings_templates/phosphor_pistol_damage_profile_templates.lua#L181-L205) |
| Explosion attack type | [Explosion attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L312-L320) |
| UI display name format and localized fields | [UI display name format and localized fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L426) |
| lasgun_p1_m1 imports trait family | [lasgun_p1_m1 imports trait family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L17) |
| lasgun_p1_m1 ukeys/appends trait category | [lasgun_p1_m1 ukeys/appends trait category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L714-L716) |
| lasgun_p1_m2 imports trait family | [lasgun_p1_m2 imports trait family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L15) |
| lasgun_p1_m2 ukeys/appends trait category | [lasgun_p1_m2 ukeys/appends trait category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L692-L694) |
| lasgun_p1_m3 imports trait family | [lasgun_p1_m3 imports trait family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L15) |
| lasgun_p1_m3 ukeys/appends trait category | [lasgun_p1_m3 ukeys/appends trait category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L693-L695) |
| lasgun_p2_m1 imports trait family | [lasgun_p2_m1 imports trait family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L15) |
| lasgun_p2_m1 ukeys/appends trait category | [lasgun_p2_m1 ukeys/appends trait category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L1333-L1335) |
| lasgun_p2_m2 imports trait family | [lasgun_p2_m2 imports trait family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L15) |
| lasgun_p2_m2 ukeys/appends trait category | [lasgun_p2_m2 ukeys/appends trait category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L1327-L1329) |
| lasgun_p2_m3 imports trait family | [lasgun_p2_m3 imports trait family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L15) |
| lasgun_p2_m3 ukeys/appends trait category | [lasgun_p2_m3 ukeys/appends trait category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L1244-L1246) |
| laspistol_p1_m1 imports trait family | [laspistol_p1_m1 imports trait family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L16) |
| laspistol_p1_m1 ukeys/appends trait category | [laspistol_p1_m1 ukeys/appends trait category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L858-L860) |
| laspistol_p1_m3 imports trait family | [laspistol_p1_m3 imports trait family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m3.lua#L16) |
| laspistol_p1_m3 ukeys/appends trait category | [laspistol_p1_m3 ukeys/appends trait category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m3.lua#L862-L864) |
| ogryn_heavystubber_p2_m1 imports trait family | [ogryn_heavystubber_p2_m1 imports trait family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L15) |
| ogryn_heavystubber_p2_m1 ukeys/appends trait category | [ogryn_heavystubber_p2_m1 ukeys/appends trait category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L794-L796) |
| ogryn_heavystubber_p2_m2 imports trait family | [ogryn_heavystubber_p2_m2 imports trait family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L15) |
| ogryn_heavystubber_p2_m2 ukeys/appends trait category | [ogryn_heavystubber_p2_m2 ukeys/appends trait category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L815-L817) |
| ogryn_heavystubber_p2_m3 imports trait family | [ogryn_heavystubber_p2_m3 imports trait family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L15) |
| ogryn_heavystubber_p2_m3 ukeys/appends trait category | [ogryn_heavystubber_p2_m3 ukeys/appends trait category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L815-L817) |
| phosphor_pistol_p1_m1 imports trait family | [phosphor_pistol_p1_m1 imports trait family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L16) |
| phosphor_pistol_p1_m1 ukeys/appends trait category | [phosphor_pistol_p1_m1 ukeys/appends trait category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L1141-L1143) |
| lasgun_p1 wrapper | [lasgun_p1 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p1_buff_templates.lua#L48) |
| lasgun_p2 wrapper | [lasgun_p2 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p2_buff_templates.lua#L11) |
| laspistol_p1 wrapper | [laspistol_p1 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_laspistol_p1_buff_templates.lua#L12) |
| ogryn_heavystubber_p2 wrapper | [ogryn_heavystubber_p2 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L64) |
| phosphor_pistol_p1 wrapper | [phosphor_pistol_p1 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L19) |
| Duration expiry | [Duration expiry](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L43) |
| Reset finished on refresh | [Reset finished on refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L619-L630) |
| Zero-add loop | [Zero-add loop](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L416) |
| Refresh without tick reset | [Refresh without tick reset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L592-L597) |
| Burn armor table | [Burn armor table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L19-L28) |
| PowerLevel consumer | [PowerLevel consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L92) |
| Lasgun P3 imports | [Lasgun P3 imports](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m1.lua#L15-L16) |
| Lasgun P3 trait registration | [Lasgun P3 trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m1.lua#L730-L732) |
| Positive damage | [Positive damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L465-L467) |
| Same item | [Same item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Burning duration multiplier | [Burning duration multiplier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L65-L118) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 五個已綁定 wrapper 均 clone burninating_on_crit_ranged base。Base 在 on_hit 要求 attacking_item 與祝福物品匹配、事件為遠程暴擊、傷害大於0，且處理時祝福 slot 正持用；BuffUtils 僅對仍存活的 attacked_unit 添加層數。實際tier format讀 target_buff_data override，base 1/10是預設值。Base不設 allow_weapon_special=false，未全面禁用 weapon_special；近戰特攻仍因 attack_type 不符而失敗。12個正式型號主攻擊都是 shoot_hit_scan，一發的 crit 狀態傳給每個逐一執行的目標；HitScan呼RangedAction未傳共用on_hit去重表。重伐木槍連射按每次 shot 的 crit 狀態，不按時間疊層。flamer_assault是4秒、0.5秒interval的 interval_buff，堆疊刷新期限；每tick以當前層數產生burning profile power_level，期限後逐tick移除一層。Phosphor backblast是attack_type explosion且profile不標count_as_ranged_attack，因此不觸發；其爆炸模板另施加 phosphor_burn，與 Infernus 使用的 flamer_assault 不同。

- 實際添加量為 `min(num_stacks_on_proc, max(tier_cap − current_flamer_assault_stacks, 0))`；剛好等於本級cap時刷新，大於本級cap則零次添加迴圈，不刷新或減少已有層數。

- start_time刷新會將finished重設false，但不重設next_interval_t。嚴格 `t > start_time + duration` 才結束；到期節拍先按目前層數計算傷害，再請求移除一層，extension隨後執行。

- 共同flamer_assault上限31不由祝福tier改寫；不同來源共享同一目標模板的層數。

- IntervalBuff初始化時對敵方burning效果取owner的 `stat_buffs.burning_duration`，有效期限為 `4 × burning_duration`；無owner、英雄目標或未帶burning keyword則倍率1。此倍率在實例初始化時記錄。

- `x = current_flamer_assault_stacks / 31`；`smoothstep = x² × (3 − 2x)`；`power_level = 500 × smoothstep`。分母是目標效果cap31，與祝福tier cap不同。

- 12層的輸入為166.761773690；15層為237.907421705。burning profile attack power distribution400，再依PowerLevel、burning_damage、裝甲等結算；輸入不等於固定HP傷害。

- 其他來源可把同一 `flamer_assault` 堆至31層；Infernus只補至本級cap，不會改寫目標模板cap或替超過本級cap的現有層數刷新。

- 最後刷新後N層的名義清空時間為 `D + δ + (N − 1) × 0.5` 秒，`D = 4 × burning_duration`，δ為期限後第一個節拍相位，約0–0.5秒；無持續時間加成時，N12約9.5–10秒，N15約11–11.5秒，另有固定更新步長。

- 刷新會延後消退，節拍相位繼續；到期節拍先打當前N層的傷害再減為N−1。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_049`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_049.png)｜[Issue附件](https://github.com/user-attachments/assets/55a772ae-58cf-4db6-9a47-7dbb7fd230cd)；圖示只作辨識。

- **步兵鐳射槍、冥潮鐳射槍、重伐木槍**：item.icon `content/ui/textures/icons/traits/weapon_trait_049`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_049.png)｜[Issue附件](https://github.com/user-attachments/assets/55a772ae-58cf-4db6-9a47-7dbb7fd230cd)。

- **重型鐳射手槍、磷光爆破手槍**：item.icon `content/ui/textures/icons/traits/weapon_trait_121`；[原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_121.png)｜[Issue附件](https://github.com/user-attachments/assets/35d32d65-5cd0-478f-ad49-38860d19a111)。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 步兵鐳射槍等級覆寫 | [步兵鐳射槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L306-L359) |
| 步兵鐳射槍Buff接入 | [步兵鐳射槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p1_buff_templates.lua#L48) |
| UI 步兵鐳射槍 | [UI 步兵鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L870) |
| 步兵鐳射槍 卡特雷爾 Mk VII匯入 | [步兵鐳射槍 卡特雷爾 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L17) |
| 步兵鐳射槍 卡特雷爾 Mk VII接入 | [步兵鐳射槍 卡特雷爾 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L714-L716) |
| 步兵鐳射槍 卡特雷爾 Mk IIb匯入 | [步兵鐳射槍 卡特雷爾 Mk IIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L15) |
| 步兵鐳射槍 卡特雷爾 Mk IIb接入 | [步兵鐳射槍 卡特雷爾 Mk IIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L692-L694) |
| 步兵鐳射槍 卡特雷爾 Mk IX匯入 | [步兵鐳射槍 卡特雷爾 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L15) |
| 步兵鐳射槍 卡特雷爾 Mk IX接入 | [步兵鐳射槍 卡特雷爾 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L693-L695) |
| 冥潮鐳射槍等級覆寫 | [冥潮鐳射槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L10-L63) |
| 冥潮鐳射槍Buff接入 | [冥潮鐳射槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p2_buff_templates.lua#L11) |
| UI 冥潮鐳射槍 | [UI 冥潮鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L892) |
| 冥潮鐳射槍 盧修斯 MK IIIa匯入 | [冥潮鐳射槍 盧修斯 MK IIIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L15) |
| 冥潮鐳射槍 盧修斯 MK IIIa接入 | [冥潮鐳射槍 盧修斯 MK IIIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m1.lua#L1333-L1335) |
| 冥潮鐳射槍 盧修斯 MK V匯入 | [冥潮鐳射槍 盧修斯 MK V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L15) |
| 冥潮鐳射槍 盧修斯 MK V接入 | [冥潮鐳射槍 盧修斯 MK V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m2.lua#L1327-L1329) |
| 冥潮鐳射槍 盧修斯 Mk IV匯入 | [冥潮鐳射槍 盧修斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L15) |
| 冥潮鐳射槍 盧修斯 Mk IV接入 | [冥潮鐳射槍 盧修斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p2_m3.lua#L1244-L1246) |
| 重型鐳射手槍等級覆寫 | [重型鐳射手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_laspistol_p1.lua#L136-L189) |
| 重型鐳射手槍Buff接入 | [重型鐳射手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_laspistol_p1_buff_templates.lua#L12) |
| UI 重型鐳射手槍 | [UI 重型鐳射手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L938) |
| 重型鐳射手槍 奧克塔蘭MG Mk II匯入 | [重型鐳射手槍 奧克塔蘭MG Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L16) |
| 重型鐳射手槍 奧克塔蘭MG Mk II接入 | [重型鐳射手槍 奧克塔蘭MG Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L858-L860) |
| 重型鐳射手槍 卡特雷爾 Mk X匯入 | [重型鐳射手槍 卡特雷爾 Mk X匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m3.lua#L16) |
| 重型鐳射手槍 卡特雷爾 Mk X接入 | [重型鐳射手槍 卡特雷爾 Mk X接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m3.lua#L862-L864) |
| 重伐木槍等級覆寫 | [重伐木槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L717-L770) |
| 重伐木槍Buff接入 | [重伐木槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L64) |
| UI 重伐木槍 | [UI 重伐木槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1002) |
| 重伐木槍 克魯克 Mk IIa匯入 | [重伐木槍 克魯克 Mk IIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L15) |
| 重伐木槍 克魯克 Mk IIa接入 | [重伐木槍 克魯克 Mk IIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L794-L796) |
| 重伐木槍 戈爾貢努姆 Mk IIIa匯入 | [重伐木槍 戈爾貢努姆 Mk IIIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L15) |
| 重伐木槍 戈爾貢努姆 Mk IIIa接入 | [重伐木槍 戈爾貢努姆 Mk IIIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L815-L817) |
| 重伐木槍 阿克利斯 Mk II匯入 | [重伐木槍 阿克利斯 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L15) |
| 重伐木槍 阿克利斯 Mk II接入 | [重伐木槍 阿克利斯 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L815-L817) |
| 磷光爆破手槍等級覆寫 | [磷光爆破手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L121-L174) |
| 磷光爆破手槍Buff接入 | [磷光爆破手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_phosphor_pistol_p1_buff_templates.lua#L19) |
| UI 磷光爆破手槍 | [UI 磷光爆破手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1100) |
| 磷光爆破手槍 布蘭克斯 Mk XI匯入 | [磷光爆破手槍 布蘭克斯 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L16) |
| 磷光爆破手槍 布蘭克斯 Mk XI接入 | [磷光爆破手槍 布蘭克斯 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/phosphor_pistol/phosphor_pistol_p1_m1.lua#L1141-L1143) |
