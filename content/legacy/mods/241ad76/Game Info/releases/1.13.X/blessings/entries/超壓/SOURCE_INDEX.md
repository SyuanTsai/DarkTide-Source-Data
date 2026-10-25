# 超壓：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own tiers and formatter | [Own tiers and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L138-L181) |
| Own wrapper clone | [Own wrapper clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L25) |
| Base clip-scaled stepped wrapper | [Base clip-scaled stepped wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2926-L2969) |
| Stepped stat count | [Stepped stat count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/stepped_stat_buff.lua#L32-L51) |
| Tier override aggregation | [Tier override aggregation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Held-slot condition | [Held-slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Active clip helper | [Active clip helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/ammo.lua#L210-L242) |
| M1 normal burst action | [M1 normal burst action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L221-L287) |
| M1 braced continuous action | [M1 braced continuous action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L288-L365) |
| Brace transitions | [Brace transitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L366-L414) |
| Reload and special push config | [Reload and special push config](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L415-L505) |
| Actual trait append | [Actual trait append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L743-L747) |
| ActionShoot order | [ActionShoot order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L244-L347) |
| ActionShoot ammo spend | [ActionShoot ammo spend](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L560) |
| Burst subclass and action | [Burst subclass and action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas_burst.lua#L20-L28) |
| Burst direct hit and DoT apply | [Burst direct hit and DoT apply](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas_burst.lua#L260-L329) |
| Continuous gas subclass | [Continuous gas subclass](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L25-L28) |
| Continuous action update | [Continuous action update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L100-L113) |
| Continuous direct damage | [Continuous direct damage](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L272-L358) |
| Continuous DoT apply | [Continuous DoT apply](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L360-L394) |
| Flamer direct damage function | [Flamer direct damage function](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/flamer_action.lua#L14-L58) |
| Ranged attack dispatch | [Ranged attack dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L22-L29) |
| DamageProfile power handoff | [DamageProfile power handoff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L34) |
| Generic power modifier selection | [Generic power modifier selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L61) |
| Power curve before modifier | [Power curve before modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91) |
| Attack passes current stats and type | [Attack passes current stats and type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L330-L354) |
| Damage uses scaled attack power | [Damage uses scaled attack power](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L228) |
| Burst and auto gas templates | [Burst and auto gas templates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/flamer_gas_templates.lua#L6-L35) |
| Continuous direct gas profile | [Continuous direct gas profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/settings_templates/flamer_damage_profile_templates.lua#L194-L245) |
| Burst direct gas profile | [Burst direct gas profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/settings_templates/flamer_damage_profile_templates.lua#L299-L342) |
| Burning tick profile | [Burning tick profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L301-L328) |
| flamer_assault DoT tick | [flamer_assault DoT tick](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L50-L78) |
| Interval tick dispatch | [Interval tick dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/interval_buff.lua#L30-L47) |
| Push action dispatch | [Push action dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L12-L43) |
| Push carries weapon item/power | [Push carries weapon item/power](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L52-L89) |
| PushAttack uses push type | [PushAttack uses push type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L32-L86) |
| Trait parser percentage conversion | [Trait parser percentage conversion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L20) |
| Trait parser override lookup | [Trait parser override lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L43-L56) |
| Trait parser interpolation assembly | [Trait parser interpolation assembly](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L77-L117) |
| 每次攻擊取得來源角色Buff | [每次攻擊取得來源角色Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L215-L227) |
| 每次攻擊讀取最新數值快取 | [每次攻擊讀取最新數值快取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L271-L287) |
| 完整推擊內外圈傷害檔 | [完整推擊內外圈傷害檔](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/settings_templates/bolter_damage_profile_templates.lua#L544-L613) |
| Buff快取先於武器系統 | [Buff快取先於武器系統](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L309-L322) |
| 武器系統後於Buff extension | [武器系統後於Buff extension](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L512-L521) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 此 trait 的 weapon_type_restriction 只有 flamer_p1；目前精確 inventory 交集是一個 variant、一個 mark：flamer_p1_m1。實際模板匯入 bespoke_flamer_p1 trait 集並將對應 key 加入 weapon_template.traits。UI 名稱由實際 family、pattern、mark loc keys 組成「淨化噴火器 奧特米亞 Mk III」。

- Tier 的 stat_buffs.power_level_modifier I–IV 是 .02/.03/.04/.05。實際 wrapper clone base power_scales_with_clip_percentage，使用 stepped_stat_buff；wrapper conditional fallback 同名 stat 是 .05，own tier key 會覆寫它，不再額外加 .05。stack_offset=-1 將 max_stacks=1 的占位貢獻扣回零，再加 clip 公式給出的 0–5 bonus steps。兩個條件函式都要求目前持用該 item slot；沒有 reload 排除或命中事件條件。

- Wrapper 把目前持用 weapon slot 所有 in-use clips 的 current/max 合計比例映射為階數；reserve ammo 不參與。一般 action_shoot 是 flamer_gas_burst，架槍 action_shoot_braced 是 flamer_gas，兩者都繼承 ActionShoot。直接目標傷害走 FlamerAction／RangedAction，使用通用 power_level_modifier。兩種 gas 配置都施加 flamer_assault。燃燒 interval 每 .5 秒以 owner_unit/source_item 呼叫 Attack.execute，attack_type=buff；每次週期傷害使用當下持有者 stat cache，不把 Overpressure 值快照到 DoT。切出噴火器後 DoT 仍可繼續，但持用條件在後續 stat 更新後不再提供本項修正。

- 特殊 push 由 ActionPush 在 damage_time 執行，PushAttack 用 attack_type=push、weapon item 與 inner/outer push profile 呼叫 Attack.execute。power_level_modifier 是 PowerLevel 的通用分量，不限於 ranged；故 push profile 的傷害／衝擊威力也受其影響，但不改變推擊半徑、體力成本或擊退設定。ActionShoot 在 _shoot callback 後才扣 ammo；階數透過後續 buff stat/cache 更新讀取新 clip 比例，不假設同影格同步重算。

- Attack222／271 於每次攻擊讀取 attacking_unit 的 buff extension與stat快取，353傳入DamageCalculation；flamer_assault50–78每次由燃燒疊層重建power_level，施加點僅傳owner/source_item，沒有把本項威力值保存進目標。完整推擊profiles544–613包含零護甲倍率，所以增加attack power不保證每個目標有傷害增幅。

- 令 r 為目前持用欄位所有 in-use clips 的總剩餘彈藥比例，n 為 wrapper bonus steps，p 為所選 tier 每階值：

- n = clamp(floor(5 × (1 − (r − 0.10) / 0.90)), 0, 5)

- A = n × p；I–IV 的 p 為 .02／.03／.04／.05，五階最大 A 為 .10／.15／.20／.25。滿彈 r=1 時 n=0；r≤.10 時 n=5。Ammo helpers 聚合在用 clip，不含 reserve ammunition。

- PowerLevel.scale_power_level_to_power_type_curve 先把輸入映射為所選 power-type curve 的 scaled power，再乘 buff modifier。令 S 為「已通過 PowerLevel power-type 曲線、未乘 buff modifier」的威力值，q 為其他適用 stat modifier 淨額，則 S′=S×(1+q+A)。通用 power_level_modifier 不受 attack_type 篩選；ranged-only stat 才有 ranged 類型條件。DamageProfile 隨後再分配 attack／impact／cleave 等 power，damage profile、護甲、目標與後續倍率仍會影響生命值傷害；A 不是最終傷害同比百分比。燃燒 DoT 與特殊 push 都把持有者 stat buffs 和實際 attack_type 傳入同一 power consumer。

- 以固定 S=500、q=0.20、A=0.10 的例子，600→650、相對此威力階段原值增加50/600≈8.33%；原本為零的profile護甲倍率仍為零，不把此比例當各種攻擊的最終傷害增幅。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_163`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_163.png)｜[Issue附件](https://github.com/user-attachments/assets/93d0d585-1ac5-4d54-bc29-d7f399538522)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 淨化噴火器等級覆寫 | [淨化噴火器等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L138-L181) |
| 淨化噴火器Buff接入 | [淨化噴火器Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L25) |
| UI 淨化噴火器 | [UI 淨化噴火器](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L792) |
| 淨化噴火器 奧特米亞 Mk III匯入 | [淨化噴火器 奧特米亞 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L14) |
| 淨化噴火器 奧特米亞 Mk III接入 | [淨化噴火器 奧特米亞 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L745-L747) |
