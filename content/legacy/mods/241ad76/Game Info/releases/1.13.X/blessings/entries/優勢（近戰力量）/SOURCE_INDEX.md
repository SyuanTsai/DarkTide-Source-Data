# 優勢（近戰力量）：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| P3 full I–IV overrides and formatter; % reads parent tier stat, duration reads own paren | [P3 full I–IV overrides and formatter; % reads parent tier stat, duration reads own paren](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua#L81-L139) |
| P3 parent subscribes on_kill, allows active re-proc, held gates, one child per proc, chi | [P3 parent subscribes on_kill, allows active re-proc, held gates, one child per proc, chi](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua#L14-L32) |
| P3 child cap3, offset -1, held gate, fallback .125; parent same-key tier stat overrides  | [P3 child cap3, offset -1, held gate, fallback .125; parent same-key tier stat overrides ](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua#L33-L43) |
| Transonic P1 full I–IV overrides and formatter. | [Transonic P1 full I–IV overrides and formatter.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_transonic_sword_transonic_knife_p1.lua#L164-L222) |
| Transonic P1 parent subscribes on_kill, active re-proc, held gates, child_duration5, rem | [Transonic P1 parent subscribes on_kill, active re-proc, held gates, child_duration5, rem](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_transonic_sword_transonic_knife_p1_buff_templates.lua#L18-L36) |
| Transonic P1 child cap3, offset -1, held gate, fallback .125. | [Transonic P1 child cap3, offset -1, held gate, fallback .125.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_transonic_sword_transonic_knife_p1_buff_templates.lua#L37-L47) |
| Kill helper checks died plus target tags elite or special; no item/type check. | [Kill helper checks died plus target tags elite or special; no item/type check.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L120-L134) |
| Attack.execute queues owner on_kill only for died; payload carries tags, attack_type and | [Attack.execute queues owner on_kill only for died; payload carries tags, attack_type and](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L709) |
| ProcBuff tests chance, conditional, activation and specific check before counting event/ | [ProcBuff tests chance, conditional, activation and specific check before counting event/](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| Queued player proc events are delivered to installed buffs. | [Queued player proc events are delivered to installed buffs.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L271) |
| fixed_update processes proc events before recalculating stat buffs/keywords. | [fixed_update processes proc events before recalculating stat buffs/keywords.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| Parent initializes one placeholder; child physical capacity max3+abs(offset1)=4; destroy | [Parent initializes one placeholder; child physical capacity max3+abs(offset1)=4; destroy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L10-L54) |
| Proc event adds bounded requested children; at cap add0 still calls stack-add refresh. | [Proc event adds bounded requested children; at cap add0 still calls stack-add refresh.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L56-L89) |
| remove_t<t expiry; stacks_to_remove1; large elapsed gaps may remove multiple by elapsed  | [remove_t<t expiry; stacks_to_remove1; large elapsed gaps may remove multiple by elapsed ](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L132) |
| Every add resets decay start time, including zero-add at cap; child receives item slot a | [Every add resets decay start time, including zero-add at cap; child receives item slot a](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L163) |
| Effective child count clamps physical count plus stack offset; max includes offset. | [Effective child count clamps physical count plus stack offset; max includes offset.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L429) |
| Child context parent_buff_template merges matching equipped trait override data. | [Child context parent_buff_template merges matching equipped trait override data.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L184) |
| Stat buff calculation applies same-key override and adds value once per effective stack. | [Stat buff calculation applies same-key override and adds value once per effective stack.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| Held check compares contextual item_slot_name against current wielded slot. | [Held check compares contextual item_slot_name against current wielded slot.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Equip installs on_equip buffs; actual unequip removes on_equip and deletes weapon. | [Equip installs on_equip buffs; actual unequip removes on_equip and deletes weapon.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| Switch/unwield removes on_wield effects, not on_equip parent. | [Switch/unwield removes on_wield effects, not on_equip parent.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| melee_power_level_modifier is additive_multiplier. | [melee_power_level_modifier is additive_multiplier.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L877) |
| Melee modifier only applies to melee attack_type; factors sum then subtract7 and multipl | [Melee modifier only applies to melee attack_type; factors sum then subtract7 and multipl](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91) |
| Bound P3 Mark input/action mapping includes light/heavy charge and special inputs. | [Bound P3 Mark input/action mapping includes light/heavy charge and special inputs.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L33-L245) |
| P3 ordinary light/heavy attack action definitions are sweeps, including charged/heavy ro | [P3 ordinary light/heavy attack action definitions are sweeps, including charged/heavy ro](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L482-L1354) |
| P3 push uses default_push/light_push; pushfollow is a sweep. | [P3 push uses default_push/light_push; pushfollow is a sweep.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L1409-L1551) |
| P3 special-mode windups and activated light/heavy actions are sweeps. | [P3 special-mode windups and activated light/heavy actions are sweeps.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L1607-L2699) |
| P3 native special is WeaponSpecialCooldownCharges with active duration and charge config | [P3 native special is WeaponSpecialCooldownCharges with active duration and charge config](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L2775-L2823) |
| Transonic P1 M1 bound Mark input mapping for attacks, push-follow and special toggle. | [Transonic P1 M1 bound Mark input mapping for attacks, push-follow and special toggle.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L29-L170) |
| Transonic P1 ordinary light/heavy and charged forms use melee sweep actions. | [Transonic P1 ordinary light/heavy and charged forms use melee sweep actions.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L465-L1536) |
| Transonic push uses default_push/light_push; pushfollow and special pushfollow combo are | [Transonic push uses default_push/light_push; pushfollow and special pushfollow combo are](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L1537-L1930) |
| Transonic special toggle and activated light/heavy attack definitions use sweeps. | [Transonic special toggle and activated light/heavy attack definitions use sweeps.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L1940-L2224) |
| Transonic special deactivation transition attacks are sweeps. | [Transonic special deactivation transition attacks are sweeps.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L2332-L2445) |
| ActionSweep uses melee hit mass and keeps separate armor abort, max-hit-mass and breed a | [ActionSweep uses melee hit mass and keeps separate armor abort, max-hit-mass and breed a](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1356-L1380) |
| Each sweep executes Attack with attack_type melee and the actual weapon item. | [Each sweep executes Attack with attack_type melee and the actual weapon item.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1475-L1503) |
| ActionPush calls PushAttack and emits on_push_finish separately. | [ActionPush calls PushAttack and emits on_push_finish separately.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L52-L113) |
| PushAttack executes with attack_type push using configured damage profile. | [PushAttack executes with attack_type push using configured damage profile.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L32-L105) |
| default_push and light_push have power_distribution.attack=0; impact is separate. | [default_push and light_push have power_distribution.attack=0; impact is separate.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua#L82-L160) |
| P3 special class process_hit is empty. | [P3 special class process_hit is empty.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_cooldown_charges.lua#L48-L50) |
| Transonic special process_hit only adds push if target remains alive; no extra damage at | [Transonic special process_hit only adds push if target remains alive; no extra damage at](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/special_classes/weapon_special_activate_toggle.lua#L67-L88) |
| 雙刀 P1 實際特殊設定沒有 push_template 或 only_deactive_on_abort；特殊揮擊仍由該 Mark 定義 | [雙刀 P1 實際特殊設定沒有 push_template 或 only_deactive_on_abort；特殊揮擊仍由該 Mark 定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L3160-L3174) |
| Weapon 特殊類別以 Mark weapon_special_tweak_data 原樣初始化，未加其他值 | [Weapon 特殊類別以 Mark weapon_special_tweak_data 原樣初始化，未加其他值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon.lua#L50-L65) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

## 觸發與事件

- 兩個 own parent 都訂閱 `on_kill`，並允許 active 時重新觸發；每個合格事件最多要求增加一個 child。specific check 要求 `attack_result == died`，並且目標 tags 存在且含 `elite` 或 `special`。
- `Attack.execute` 在取得死亡結果後才把事件送入 owner buff extension。事件 payload 帶有 attack type、attacking item 等欄位，但本項 check 不比較這些欄位；parent 與 child 另以武器欄位是否正被持用作 gate。
- `PlayerUnitBuffExtension.fixed_update` 先處理 queued proc events，再更新 stat buffs／keywords。新層經 stat cache 更新才供後續攻擊使用，不追溯改寫已完成死亡判定的那一擊。

## 層數、上限與期限

- server parent 初始化一個 child placeholder。child `max_stacks=3` 且 `stack_offset=-1`；因此 parent 實際容量4，減去 placeholder 後玩家有效層數為0–3。
- own I–IV tier 在 parent `stat_buffs.melee_power_level_modifier` 設定 .04／.06／.08／.10；child fallback `.125` 經同 key parent tier override 取代。buff 更新依有效層數逐層相加。
- 兩個 parent 都是 `child_duration=5`、`stacks_to_remove=1`。每次合格擊殺刷新衰退起點；已達上限時新增數為0，仍會刷新。超過期限後移除過期層，且 `remove_t < t` 才執行；若一次固定更新跨過多個期間，會按經過期間移除相應層。
- 切換欄位使 `is_item_slot_wielded` 關閉觸發與 stat gate，但 parent 計時照常走。從裝備欄卸下時 on_equip parent 被移除，parent destroy 會清理所有 child。

## 兩個實際 Mark 的招式

- 動力劍 P3 M1 與穿音速雙刀 P1 M1 的普通 light/heavy 蓄力動作、特殊模式近戰揮擊、推擊後續都由 `ActionSweep` 以 `attack_type=melee` 執行 `Attack.execute`；符合 killed/tags 條件時可產生相同 `on_kill` 事件。
- `action_push` 呼叫 `PushAttack`、攻擊類型為 `push`，兩把武器實際選用 `default_push`／`light_push`，其 `power_distribution.attack=0`。純推擊的 impact 用於推／硬直，不能由 attack health damage 產生死亡事件；push-follow 是後續 sweep。
- 動力劍 P3 的 WeaponSpecialCooldownCharges.process_hit 空實作；特殊狀態的輕／重近戰揮擊仍走一般近戰攻擊路徑。雙刀 P1 的 WeaponSpecialActivateToggle.process_hit 通用分支只有在目標存活且 tweak_data.push_template 存在時，才對玩家自身施加位移推力；但此 Mark 的實際 weapon_special_tweak_data 沒有 push_template，也沒有 only_deactive_on_abort，因此此項不會執行推力分支，也不會追加第二次傷害攻擊。

`p` 是每層 `melee_power_level_modifier`（I–IV 為 .04／.06／.08／.10），`s` 為有效層數（0–3）。本項增量 `bonus=p×s`；在 PowerLevel 消費公式其餘加算因子都為 neutral 1 的前提下，modifier pool 為 `1+p×s`，乘在 curve-scaled PowerLevel。

例：Tier IV 三層 `bonus=.10×3=.30`，modifier pool 從1.00成為1.30；若曲線轉換後力量值是100，修正後為130。這是在 modifier 上增加30個百分點、相對 neutral 提升30%，不是最終傷害+30%。非 melee attack_type 不讀此 stat；最終傷害仍由目標護甲、命中部位、damage profile、finesse 及其餘因子決定。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_011`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_011.png)｜[Issue附件](https://github.com/user-attachments/assets/ad66f531-3350-4401-84f3-5c5d7b4cd4c9)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 機械神教動力劍等級覆寫 | [機械神教動力劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua#L81-L139) |
| 機械神教動力劍Buff接入 | [機械神教動力劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua#L14-L32) |
| UI 機械神教動力劍 | [UI 機械神教動力劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L552) |
| 機械神教動力劍 布蘭克斯 Mk VI匯入 | [機械神教動力劍 布蘭克斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L15) |
| 機械神教動力劍 布蘭克斯 Mk VI接入 | [機械神教動力劍 布蘭克斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_swords/powersword_p3_m1.lua#L3372-L3374) |
| 穿音速雙刀等級覆寫 | [穿音速雙刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_transonic_sword_transonic_knife_p1.lua#L164-L222) |
| 穿音速雙刀Buff接入 | [穿音速雙刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_transonic_sword_transonic_knife_p1_buff_templates.lua#L18-L36) |
| UI 穿音速雙刀 | [UI 穿音速雙刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L622) |
| 穿音速雙刀 布蘭克斯 Mk XI匯入 | [穿音速雙刀 布蘭克斯 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L16) |
| 穿音速雙刀 布蘭克斯 Mk XI接入 | [穿音速雙刀 布蘭克斯 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L3177-L3179) |
