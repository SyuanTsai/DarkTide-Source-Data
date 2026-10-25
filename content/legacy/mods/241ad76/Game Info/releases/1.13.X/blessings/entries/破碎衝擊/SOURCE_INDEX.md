# 破碎衝擊：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Bolter tiers | [Bolter tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_bolter_p1.lua#L10-L78) |
| Gauntlet tiers | [Gauntlet tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_gauntlet_p1.lua#L120-L188) |
| Thumper tiers | [Thumper tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L222-L291) |
| Plasma tiers | [Plasma tiers](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L41-L110) |
| Shared proc buff | [Shared proc buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L564-L579) |
| Bolter wrapper | [Bolter wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_bolter_p1_buff_templates.lua#L12-L13) |
| Gauntlet wrapper | [Gauntlet wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_gauntlet_p1_buff_templates.lua#L25-L26) |
| Thumper wrapper | [Thumper wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L28-L29) |
| Plasma wrapper | [Plasma wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L15-L16) |
| Ranged gate | [Ranged gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L362-L366) |
| Item match gate | [Item match gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Wielded slot condition | [Wielded slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Target debuff | [Target debuff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L366-L376) |
| Buff stack add | [Buff stack add](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_utils.lua#L37-L90) |
| Target buff stacks | [Target buff stacks](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L412-L415) |
| Stack refresh | [Stack refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L457) |
| Cap refresh | [Cap refresh](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L560-L590) |
| Damage before proc event | [Damage before proc event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L353-L383) |
| Hit event params | [Hit event params](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L623) |
| Rending consumer | [Rending consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L629-L660) |
| Rending armor calculation | [Rending armor calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L65-L109) |
| Armor rending factors | [Armor rending factors](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/armor_settings.lua#L8-L24) |
| UI display names | [UI display names](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI name loc fields | [UI name loc fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| Trait registration | [Trait registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_trait_templates.lua#L25-L69) |
| Buff registration | [Buff registration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_templates.lua#L56-L100) |
| Bolter m1 append | [Bolter m1 append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L762-L764) |
| Bolter m2 append | [Bolter m2 append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L757-L759) |
| Gauntlet append | [Gauntlet append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L1295-L1297) |
| Thumper append | [Thumper append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L855-L857) |
| Plasma m1 append | [Plasma m1 append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L985-L987) |
| Plasma m2 append | [Plasma m2 append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L985-L987) |
| Bolter bolt-shell template | [Bolter bolt-shell template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/settings_templates/bolter_hitscan_templates.lua#L11-L27) |
| Hitscan attack type | [Hitscan attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L70) |
| Bolt-shell explosion route | [Bolt-shell explosion route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L273-L319) |
| Gauntlet projectile action | [Gauntlet projectile action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L313-L347) |
| Gauntlet projectile template | [Gauntlet projectile template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L27-L41) |
| Thumper ranged explosion flags | [Thumper ranged explosion flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/demolitions_damage_profile_templates.lua#L1429-L1458) |
| Plasma hitscan action | [Plasma hitscan action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L318-L332) |
| Plasma overload explosion call | [Plasma overload explosion call](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_overload_explosion.lua#L103-L123) |
| Plasma explosion profile | [Plasma explosion profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L7-L15) |
| Plasma profile no ranged flag | [Plasma profile no ranged flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L548-L601) |
| Explosion attack execution | [Explosion attack execution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L289-L316) |
| Gauntlet actual explosion templates | [Gauntlet actual explosion templates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/settings_templates/grenadier_gauntlet_explosion_templates.lua#L12-L75) |
| Gauntlet normal blast ranged flag | [Gauntlet normal blast ranged flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/settings_templates/grenadier_gauntlet_damage_profile_templates.lua#L680-L685) |
| Gauntlet close blast ranged flag | [Gauntlet close blast ranged flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/settings_templates/grenadier_gauntlet_damage_profile_templates.lua#L769-L775) |
| Gauntlet special close blast ranged flag | [Gauntlet special close blast ranged flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/settings_templates/grenadier_gauntlet_damage_profile_templates.lua#L826-L832) |
| Gauntlet special direct melee profile | [Gauntlet special direct melee profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/settings_templates/grenadier_gauntlet_damage_profile_templates.lua#L394-L488) |
| Gauntlet special action wiring | [Gauntlet special action wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L1234-L1238) |
| Gauntlet special explosion item route | [Gauntlet special explosion item route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_melee_explosive.lua#L61-L85) |
| Projectile ranged impact | [Projectile ranged impact](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L475-L540) |
| Projectile explosion item route | [Projectile explosion item route](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L638-L659) |
| Thumper instant explosion templates | [Thumper instant explosion templates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/explosion_templates/player_weapon_explosion_templates.lua#L83-L101) |
| Bolter explosion profiles wiring | [Bolter explosion profiles wiring](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/settings_templates/bolter_explosion_templates.lua#L12-L118) |
| Bolter explosion profiles no ranged flag | [Bolter explosion profiles no ranged flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/settings_templates/bolter_damage_profile_templates.lua#L204-L368) |
| Proc queue conditional timing | [Proc queue conditional timing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L307-L338) |
| Shared buff expiration | [Shared buff expiration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L29-L43) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 四個 trait 的 I–IV `num_stacks_on_proc` 均為1／2／3／4。

- wrapper 複製共用 `targets_receive_rending_debuff`，再以 `on_item_match` 與 `on_ranged_hit` 覆寫 proc 檢查。遠程檢查接受 `attack_type=ranged`，或 `damage_profile.count_as_ranged_attack=true`。

- 共用持用條件在處理 proc 佇列時檢查。BuffUtils 要求目標仍存活且具有 buff extension；不要求傷害大於0、暴擊、弱點、擊殺或第一目標。

- 爆矢槍 hitscan 直接命中分類為 ranged。爆矢爆炸的傷害設定沒有 ranged flag，因此 explosion 分類不通過檢查。

- 臂鎧一般榴彈爆炸使用 `close_gauntlet_demolitions`／`default_gauntlet_demolitions`；特殊爆炸拳使用 `close_special_gauntlet_demolitions`／`default_gauntlet_demolitions`。三個實際爆炸 profile 都有 `count_as_ranged_attack=true`，並保留武器 item 與來源 slot，因此一般與特殊爆炸均能通過檢查。

- 臂鎧普通揮擊及特殊拳擊的直接傷害分類為 melee；其傷害 profile 不設 ranged flag，不能觸發。直接投射物命中則分類為 ranged，可以觸發。

- 震盪槍的 `ogryn_thumper_p1_m2_default_instant`／`ogryn_thumper_p1_m2_close_instant` 均有 ranged flag，爆炸及直接命中均符合。

- 電漿槍直接命中分類為 ranged；`plasma_overheat` 沒有 ranged flag，過熱爆炸不符合。`stagger_category=ranged` 並不是這個 proc 檢查的條件。

- 目標側 `rending_debuff` 每層 `.025`，`max_stacks=max_stacks_cap=16`、`duration=5`、`refresh_duration_on_stack=true`。trait 父資料中的31並非實際層數上限。

- 減益依 template_name 共用層數，不以來源玩家或武器分開。換武器不移除已存在的目標減益；疊層及滿層再觸發均刷新整組期限。

- Attack.execute 先完成本次傷害，之後排入 on_hit。新層數不回溯；後續傷害計算讀取目標的 rending stat。

- DamageCalculation 加總目標與攻擊者撕裂，總量封頂1，再使用實際護甲係數與原裝甲倍率。裝甲、重甲、抗性與狂戰士類型使用撕裂係數1；其他類型係數0。

- 設目前層數為 n，I–IV 每次新增 q=1／2／3／4；更新後 S=min(n+q,16)，目標脆弱提供 B=.025×S。其他撕裂按傷害公式加算，總撕裂 R=min(總和,1)。

- 對撕裂係數1的護甲，設原裝甲倍率 A，裝甲階段倍率 F：若 A≥1，F=A+.25R；若 A<1 且 R>1−A，F=1+.25(R−(1−A))；其餘 F=A+R。

- 裝甲階段傷害為 D×F。D=100、A=.5、S=4 時，B=.1，F=.6，傷害由50提高至60，相對增加20%。

- S=16、B=.4：A=.1 時 F=.5、傷害50；A=.9 時 F=1.075、傷害107.5。這些是裝甲階段結果，並非保證最終扣血量。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_138`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_138.png)｜[Issue附件](https://github.com/user-attachments/assets/4f6afe3b-84a0-4de9-826a-1bda5e3594b5)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 矛頭爆矢槍等級覆寫 | [矛頭爆矢槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_bolter_p1.lua#L10-L79) |
| 矛頭爆矢槍Buff接入 | [矛頭爆矢槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_bolter_p1_buff_templates.lua#L12-L13) |
| UI 矛頭爆矢槍 | [UI 矛頭爆矢槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L730) |
| 矛頭爆矢槍 洛克 Mk IIb匯入 | [矛頭爆矢槍 洛克 Mk IIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L16) |
| 矛頭爆矢槍 洛克 Mk IIb接入 | [矛頭爆矢槍 洛克 Mk IIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m1.lua#L762-L764) |
| 矛頭爆矢槍 洛克 Mk III匯入 | [矛頭爆矢槍 洛克 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L16) |
| 矛頭爆矢槍 洛克 Mk III接入 | [矛頭爆矢槍 洛克 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/bolter_p1_m2.lua#L757-L759) |
| 擲彈兵臂鎧等級覆寫 | [擲彈兵臂鎧等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_gauntlet_p1.lua#L120-L189) |
| 擲彈兵臂鎧Buff接入 | [擲彈兵臂鎧Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_gauntlet_p1_buff_templates.lua#L25-L26) |
| UI 擲彈兵臂鎧 | [UI 擲彈兵臂鎧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1025) |
| 擲彈兵臂鎧 布拉斯托姆 Mk III匯入 | [擲彈兵臂鎧 布拉斯托姆 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L17) |
| 擲彈兵臂鎧 布拉斯托姆 Mk III接入 | [擲彈兵臂鎧 布拉斯托姆 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/grenadier_gauntlets/ogryn_gauntlet_p1_m1.lua#L1295-L1297) |
| 震盪槍等級覆寫 | [震盪槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L222-L291) |
| 震盪槍Buff接入 | [震盪槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L28-L29) |
| UI 震盪槍 | [UI 震盪槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1074) |
| 震盪槍 洛倫茲 Mk VI匯入 | [震盪槍 洛倫茲 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L16) |
| 震盪槍 洛倫茲 Mk VI接入 | [震盪槍 洛倫茲 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m2.lua#L855-L857) |
| 電漿槍等級覆寫 | [電漿槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L41-L110) |
| 電漿槍Buff接入 | [電漿槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L15-L16) |
| UI 電漿槍 | [UI 電漿槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1113) |
| 電漿槍 M35熔岩核心 Mk II匯入 | [電漿槍 M35熔岩核心 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L18) |
| 電漿槍 M35熔岩核心 Mk II接入 | [電漿槍 M35熔岩核心 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m1.lua#L985-L987) |
| 電漿槍 M35熔岩核心 Mk III匯入 | [電漿槍 M35熔岩核心 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L18) |
| 電漿槍 M35熔岩核心 Mk III接入 | [電漿槍 M35熔岩核心 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/plasma_rifles/plasmagun_p1_m2.lua#L985-L987) |
