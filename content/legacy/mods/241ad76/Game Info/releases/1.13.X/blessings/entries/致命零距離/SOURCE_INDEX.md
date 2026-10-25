# 致命零距離：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| I–IV trait literals與格式值 | [I–IV trait literals與格式值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_boltpistol_p1.lua#L428-L469) |
| Buff wrapper：普通radius與conditional arming | [Buff wrapper：普通radius與conditional arming](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_boltpistol_p1_buff_templates.lua#L20-L32) |
| trait加入on_equip目標 | [trait加入on_equip目標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L190) |
| 上裝、卸下、切換時的buff生命週期 | [上裝、卸下、切換時的buff生命週期](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| 切出時只切換on_wield與on_unwield | [切出時只切換on_wield與on_unwield](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L780-L785) |
| trait rarity override組合 | [trait rarity override組合](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L159-L221) |
| 普通stat與conditional stat分開計算 | [普通stat與conditional stat分開計算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| wielded slot條件 | [wielded slot條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| radius stat類型及neutral base | [radius stat類型及neutral base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L808) |
| additive stat neutral value | [additive stat neutral value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1060) |
| Mk IV與Mk VI hitscan距離及爆炸模板接線 | [Mk IV與Mk VI hitscan距離及爆炸模板接線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/settings_templates/boltpistol_hitscan_templates.lua#L11-L64) |
| Mk IV腰射與瞄準hitscan | [Mk IV腰射與瞄準hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L208-L339) |
| Mk VI腰射與瞄準hitscan | [Mk VI腰射與瞄準hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L208-L339) |
| Mk IV push為近戰sweep | [Mk IV push為近戰sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L454-L541) |
| Mk VI push為近戰sweep | [Mk VI push為近戰sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L454-L541) |
| first-person射擊起點與shot update | [first-person射擊起點與shot update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L403-L449) |
| shot position傳入hitscan | [shot position傳入hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L307-L313) |
| hitscan執行呼叫與物理hit結果 | [hitscan執行呼叫與物理hit結果](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L145-L200) |
| arming distance比較及armed damage type | [arming distance比較及armed damage type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L88-L109) |
| 目標命中傷害與hitmass explosion呼叫 | [目標命中傷害與hitmass explosion呼叫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L214-L247) |
| 穿透停止及impact explosion路徑 | [穿透停止及impact explosion路徑](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L288-L320) |
| hit mass explosion條件及kill/stop template | [hit mass explosion條件及kill/stop template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L86-L141) |
| Mk IV boltshell kill/stop explosion基礎值 | [Mk IV boltshell kill/stop explosion基礎值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/settings_templates/bolter_explosion_templates.lua#L120-L174) |
| Mk VI boltshell kill/stop explosion基礎值 | [Mk VI boltshell kill/stop explosion基礎值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolters/settings_templates/bolter_explosion_templates.lua#L204-L257) |
| 半徑與close radius套用generic stat | [半徑與close radius套用generic stat](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L430-L502) |
| 爆炸目標距離、breed半徑、掩體與falloff | [爆炸目標距離、breed半徑、掩體與falloff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon_system.lua#L208-L324) |
| 爆炸排除owner與allies | [爆炸排除owner與allies](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L173-L186) |
| Mk IV trait import | [Mk IV trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L16) |
| Mk IV trait ukeys與append | [Mk IV trait ukeys與append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L769-L771) |
| Mk VI trait import | [Mk VI trait import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L16) |
| Mk VI trait ukeys與append | [Mk VI trait ukeys與append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L769-L771) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- Trait literal於I／II／III／IV覆寫`explosion_radius_modifier`為0.10／0.15／0.20／0.25；wrapper普通`stat_buffs`中的0.10不是再加一次，Buff rarity override會以tier值替換該stat。

- Wrapper將`explosion_radius_modifier=0.10`放在普通stat，`explosion_arming_distance_multiplier=0`放在conditional stat。只有後者使用`is_item_slot_wielded`條件；普通stat在切出後仍有效。

- weapon trait buff target是`on_equip`；持有者裝備這把槍時加入，直到卸下槽位才移除。切換武器只切換on_wield/on_unwield buffs，因此不會移除普通範圍stat。

- `explosion_radius_modifier`類型是additive_multiplier、neutral base為1；tier加成與其他同名全域加成按加法累積。`Explosion.radii`對非prop的explosion attack把結果同時乘到模板半徑和close radius，所以加成也作用於該持有者其他爆炸。

- 持用時`explosion_arming_distance_multiplier=0`；hitscan以first-person shooting position為射擊起點，用PhysicsWorld hit record的距離對比armed distance，並在通過時選擇armed damage type。Mk IV預設5m、Mk VI預設3m。

- 歸零只解除武器既有arming-distance限制。現有手槍爆炸仍需通過hitmass消耗／擊殺、穿透停止或其他模板中原有的stop/impact條件；trait沒有另外排隊一個必然爆炸事件。

- Mk IV與Mk VI均在腰射和瞄準射擊使用本mark的hitscan template。Mk IV stop／kill blast使用3m半徑與0.75m close radius；Mk VI使用5m與1.75m。兩者damage_falloff=true且scalable_radius=false。special push是weapon-butt sweep，不是爆炸attack。

- WeaponSystem以爆炸中心到目標hit actor的距離判定，扣除breed.explosion_radius，對近距離半徑內目標不套距離衰減；每個型號的close_damage_profile與該次爆炸damage_profile相同。其餘目標使用既有平方衰減，並保留cover raycast檢查。半徑stat不改profile或power。

- 此兩個boltpistol explosion templates沒有friendly-fire override；Explosion依side system排除持有者與盟友的傷害。

- 以`B`表示其他generic radius modifiers的總增量，trait tier值`t∈{0.10,0.15,0.20,0.25}`；neutral base是1，總倍率`M=1+B+t+Σ(Sⱼ−1)`，其中`Sⱼ`是爆炸模板指定的radius_stat_buffs；此兩型號模板未指定額外radius_stat_buffs。tier override取代wrapper的0.10，不是`0.10+t`；Mk IV/Mk VI同一套tier值。

- 有效爆炸半徑`R=R₀×M`，有效近距離半徑`C=C₀×M`。未計其他modifier時，Mk IV `(R₀,C₀)=(3,0.75)m`；Mk VI `(R₀,C₀)=(5,1.75)m`。

- 模板`scalable_radius=false`，因此此兩型號不按charge level縮小半徑；表中直接用模板有效基礎值乘M。

- 爆炸距離gate：`d_hit ≥ d_arm×m_arm`。持用祝福槍時`m_arm=0`；切出後conditional stat不成立，`m_arm`回到neutral 1。此`d_hit`是hitscan起點至物理命中點距離。

- 對超出close區的目標，`dropoff=clamp(((d−C)/(R−C))²,0,1)`；`d`先扣除breed explosion radius。對`d<C`不套距離衰減；Mk IV或Mk VI各自的close_damage_profile與本次kill／stop damage_profile相同。掩體raycast另外判斷。此scalar不是傷害百分比。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_229`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_229.png)｜[Issue附件](https://github.com/user-attachments/assets/18053992-dda1-48a5-a975-6e9d2102c20a)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 爆彈手槍等級覆寫 | [爆彈手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_boltpistol_p1.lua#L428-L469) |
| 爆彈手槍Buff接入 | [爆彈手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_boltpistol_p1_buff_templates.lua#L20-L32) |
| UI 爆彈手槍 | [UI 爆彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L748) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk IV匯入 | [爆彈手槍 戈德溫–布蘭克斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L16) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk IV接入 | [爆彈手槍 戈德溫–布蘭克斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L769-L771) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk VI匯入 | [爆彈手槍 戈德溫–布蘭克斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L16) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk VI接入 | [爆彈手槍 戈德溫–布蘭克斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L769-L771) |
