# 勢頭：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own tiers / formatter: chainsword_2h_p1 | [Own tiers / formatter: chainsword_2h_p1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_2h_p1.lua#L146-L200) |
| Actual wrapper: chainsword_2h_p1 | [Actual wrapper: chainsword_2h_p1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_2h_p1_buff_templates.lua#L13) |
| Own tiers / formatter: forcesword_2h_p1 | [Own tiers / formatter: forcesword_2h_p1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L492-L546) |
| Actual wrapper: forcesword_2h_p1 | [Actual wrapper: forcesword_2h_p1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L48) |
| Own tiers / formatter: ogryn_club_p2 | [Own tiers / formatter: ogryn_club_p2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L170-L224) |
| Actual wrapper: ogryn_club_p2 | [Actual wrapper: ogryn_club_p2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p2_buff_templates.lua#L13) |
| Own tiers / formatter: ogryn_combatblade_p1 | [Own tiers / formatter: ogryn_combatblade_p1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L342-L396) |
| Actual wrapper: ogryn_combatblade_p1 | [Actual wrapper: ogryn_combatblade_p1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_combatblade_p1_buff_templates.lua#L113) |
| Own tiers / formatter: thunderhammer_2h_p1 | [Own tiers / formatter: thunderhammer_2h_p1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_thunderhammer_2h_p1.lua#L253-L307) |
| Actual wrapper: thunderhammer_2h_p1 | [Actual wrapper: thunderhammer_2h_p1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_thunderhammer_2h_p1_buff_templates.lua#L32) |
| Bound Mark action wiring: chainsword_2h_p1_m1 | [Bound Mark action wiring: chainsword_2h_p1_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L271-L1539) |
| Bound Mark action wiring: chainsword_2h_p1_m2 | [Bound Mark action wiring: chainsword_2h_p1_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L233-L1540) |
| Bound Mark action wiring: forcesword_2h_p1_m1 | [Bound Mark action wiring: forcesword_2h_p1_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L92-L2797) |
| Bound Mark action wiring: forcesword_2h_p1_m2 | [Bound Mark action wiring: forcesword_2h_p1_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L102-L2712) |
| Bound Mark action wiring: ogryn_club_p2_m1 | [Bound Mark action wiring: ogryn_club_p2_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L49-L1382) |
| Bound Mark action wiring: ogryn_club_p2_m2 | [Bound Mark action wiring: ogryn_club_p2_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L47-L1603) |
| Bound Mark action wiring: ogryn_club_p2_m3 | [Bound Mark action wiring: ogryn_club_p2_m3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L47-L1697) |
| Bound Mark action wiring: ogryn_combatblade_p1_m1 | [Bound Mark action wiring: ogryn_combatblade_p1_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L94-L1333) |
| Bound Mark action wiring: ogryn_combatblade_p1_m2 | [Bound Mark action wiring: ogryn_combatblade_p1_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L91-L1367) |
| Bound Mark action wiring: ogryn_combatblade_p1_m3 | [Bound Mark action wiring: ogryn_combatblade_p1_m3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L91-L1311) |
| Bound Mark action wiring: thunderhammer_2h_p1_m1 | [Bound Mark action wiring: thunderhammer_2h_p1_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thunder_hammers_2h/thunderhammer_2h_p1_m1.lua#L60-L1780) |
| Bound Mark action wiring: thunderhammer_2h_p1_m2 | [Bound Mark action wiring: thunderhammer_2h_p1_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thunder_hammers_2h/thunderhammer_2h_p1_m2.lua#L62-L1811) |
| Attack no-proc damage-type list | [Attack no-proc damage-type list](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L86-L88) |
| Attack on-hit dispatch and profile skip | [Attack on-hit dispatch and profile skip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L550-L623) |
| Trait melee/current target ordinal gate | [Trait melee/current target ordinal gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L425) |
| ActionSweep target ordinal and Attack payload | [ActionSweep target ordinal and Attack payload](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1330-L1501) |
| Chainsword sticky skip profiles: light/sticky overrides | [Chainsword sticky skip profiles: light/sticky overrides](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/settings_templates/chain_sword_2h_damage_profile_templates.lua#L650-L1275) |
| Chainsword sticky skip profiles: heavy overrides | [Chainsword sticky skip profiles: heavy overrides](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/settings_templates/chain_sword_2h_damage_profile_templates.lua#L2290-L3040) |
| Chainsword sticky tick calls Attack with ordinal 1 | [Chainsword sticky tick calls Attack with ordinal 1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L720-L800) |
| Force Sword Wind Slash RangedAction | [Force Sword Wind Slash RangedAction](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/force_sword_2h_p1_buff_templates.lua#L150-L204) |
| RangedAction forces ranged type | [RangedAction forces ranged type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L22-L29) |
| ActionDamageTarget forces ranged type | [ActionDamageTarget forces ranged type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L136-L164) |
| Toughness percentage recovery and cap | [Toughness percentage recovery and cap](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L286) |
| Toughness disabled state | [Toughness disabled state](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L447-L474) |
| ProcBuff immediate per-event cooldown | [ProcBuff immediate per-event cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L185) |
| ProcBuff first-event initialization | [ProcBuff first-event initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L11-L18) |
| M1 light-special sticky profile selection | [M1 light-special sticky profile selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L62-L102) |
| M1 heavy-special sticky profile selection | [M1 heavy-special sticky profile selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L187-L244) |
| M2 light-special sticky profile selection | [M2 light-special sticky profile selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L108-L148) |
| M2 heavy-special sticky profile selection | [M2 heavy-special sticky profile selection](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L190-L230) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 固定 Release 1.13.1 source commit `7e662fcda16219d775b84af50322be2e9cd9d62e`。五個完整 trait ID 各自對應 inventory 實際 binding，共 12 個 Mark；沒有以相同 suffix 或 weapon family 推定額外型號。

- 五個 own tier 的 `buff_data.replenish_percentage` 是 0.12／0.13／0.14／0.15，`required_num_hits=3`。五個 buff wrapper 都 clone `BaseWeaponTraitBuffTemplates.toughness_recovery_on_multiple_hits`，沒有後續欄位寫入；tier override 取代 base `.5` fallback，不相加。

- wrapper 要求祝福仍在持有槽、攻擊 item 與 trait context item 相同，且觸發 predicate 的 attack_type 是 `melee`、目前攻擊傳入的 `target_number >= 3`。ActionSweep 在逐目標處理時先更新目標序號再呼叫 `Attack.execute`。序號是當前橫掃的處理序，不是先前成功 on_hit 的累計；predicate 只檢查當前事件，不回看先前兩個序號是否都發出 on_hit。

- `Attack.execute` 只有在 profile 沒有 `skip_on_hit_proc` 且 damage type 不在 no-proc 表時才派發一般 on_hit；固定來源的 no-proc damage type 為 `grimoire`。本項一般與直接 special melee profiles 不屬該 type；Chainsword sticky bite／last-stick profile overrides 則明設 `skip_on_hit_proc=true`。兩個 Chainsword Marks 的額外 sticky tick 還以 `target_number=1` 呼叫 Attack，不能由該 tick 觸發。

- 五系列已接入的直接普通／重擊／special 斬擊皆由 Sweep 類 melee action 送 Attack。普通推擊用 push action，不滿足 attack_type predicate；push-follow 若有直接 melee sweep 則照 sweep 判定。Force Sword 風刃額外攻擊由 `RangedAction.execute_attack` 強制傳 ranged 且不傳 target_number；fling 由 `ActionDamageTarget` 傳 ranged 且不傳 target_number。雷鎚開關特殊狀態本身不是命中，啟用後直接揮擊仍使用近戰 Sweep；砍刀上勾拳與惡霸棍棒特殊揮擊／拳擊是直接 melee Sweep。

- wrapper 立即呼叫 `Toughness.replenish_percentage(unit, percentage, false)`。false 會套用 toughness replenish modifier 與 multiplier（缺 multiplier 預設 1）；請求公式是最大韌性 × tier 比例 × 兩個角色修正，實際回復受缺額封頂。死亡、倒地等與 prevent-toughness-replenish 狀態控制回復能否發生。

- ProcBuff 初始 active_start_time 已扣除其 duration 與 cooldown，wrapper duration 為 0；因此首個合格事件不必額外等 0.12 秒。每次事件即時重查冷卻，且合格事件即更新冷卻；即使回復被缺額封頂為 0，也不會保留本次冷卻。

- 倒地限制實際檢查 assisted_state_input.force_assist；角色倒地且此 component 為 false 時阻止恢復。這不是 optional_reason 的條件，不能由本項 callback 未傳 reason 推定此例外不適用。死亡與 prevent_toughness_replenish 另阻止恢復；只允許能力的恢復限制再依 optional_reason 判定，本項未傳該參數。移除本來源 Buff 後無本祝福 callback 接收事件；未推定其他來源的冷卻會重置。

恢復請求：`requested = max_toughness × tier_fraction × toughness_replenish_modifier × toughness_replenish_multiplier`。缺少 multiplier 時使用 1。實際恢復 `actual = min(missing_toughness, requested)`，前提是當時恢復狀態允許增加韌性。Tier fraction I–IV 為 0.12／0.13／0.14／0.15；百分點差是 3 pp（IV−I），同一基數與角色倍率下的相對請求增幅是 25%（0.15/0.12−1）。

冷卻為事件後 0.12 秒，這不是每個 sweep 的永久一次鎖；首個事件初始可用。一次回復受缺額或狀態限制仍可能耗用冷卻。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_088`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_088.png)｜[Issue附件](https://github.com/user-attachments/assets/9a96eb9f-a967-4b3c-8132-8b31575217d0)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 重型開膛劍等級覆寫 | [重型開膛劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_2h_p1.lua#L146-L200) |
| 重型開膛劍Buff接入 | [重型開膛劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_2h_p1_buff_templates.lua#L13) |
| UI 重型開膛劍 | [UI 重型開膛劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L22) |
| 重型開膛劍 泰格魯斯 Mk III匯入 | [重型開膛劍 泰格魯斯 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L16) |
| 重型開膛劍 泰格魯斯 Mk III接入 | [重型開膛劍 泰格魯斯 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m1.lua#L1537-L1539) |
| 重型開膛劍 泰格魯斯 Mk XV匯入 | [重型開膛劍 泰格魯斯 Mk XV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L15) |
| 重型開膛劍 泰格魯斯 Mk XV接入 | [重型開膛劍 泰格魯斯 Mk XV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/chain_swords_2h/chainsword_2h_p1_m2.lua#L1538-L1540) |
| 烈焰力場巨劍等級覆寫 | [烈焰力場巨劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L492-L546) |
| 烈焰力場巨劍Buff接入 | [烈焰力場巨劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L48) |
| UI 烈焰力場巨劍 | [UI 烈焰力場巨劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L245) |
| 烈焰力場巨劍 誓約 Mk VI匯入 | [烈焰力場巨劍 誓約 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L15) |
| 烈焰力場巨劍 誓約 Mk VI接入 | [烈焰力場巨劍 誓約 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2795-L2797) |
| 烈焰力場巨劍 誓約 Mk VIII匯入 | [烈焰力場巨劍 誓約 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L15) |
| 烈焰力場巨劍 誓約 Mk VIII接入 | [烈焰力場巨劍 誓約 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2710-L2712) |
| 惡霸棍棒等級覆寫 | [惡霸棍棒等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L170-L224) |
| 惡霸棍棒Buff接入 | [惡霸棍棒Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p2_buff_templates.lua#L13) |
| UI 惡霸棍棒 | [UI 惡霸棍棒](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L308) |
| 惡霸棍棒 「布倫特專用」 Mk I匯入 | [惡霸棍棒 「布倫特專用」 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L15) |
| 惡霸棍棒 「布倫特專用」 Mk I接入 | [惡霸棍棒 「布倫特專用」 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L1380-L1382) |
| 惡霸棍棒 「布倫特得意之作」 Mk II匯入 | [惡霸棍棒 「布倫特得意之作」 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L15) |
| 惡霸棍棒 「布倫特得意之作」 Mk II接入 | [惡霸棍棒 「布倫特得意之作」 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L1601-L1603) |
| 惡霸棍棒 「布倫特猛擊」 Mk IIIb匯入 | [惡霸棍棒 「布倫特猛擊」 Mk IIIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L15) |
| 惡霸棍棒 「布倫特猛擊」 Mk IIIb接入 | [惡霸棍棒 「布倫特猛擊」 Mk IIIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L1695-L1697) |
| 砍刀等級覆寫 | [砍刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L342-L396) |
| 砍刀Buff接入 | [砍刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_combatblade_p1_buff_templates.lua#L113) |
| UI 砍刀 | [UI 砍刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L328) |
| 砍刀 克魯克 Mk VI匯入 | [砍刀 克魯克 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L16) |
| 砍刀 克魯克 Mk VI接入 | [砍刀 克魯克 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L1331-L1333) |
| 砍刀 蠻牛屠夫 Mk III匯入 | [砍刀 蠻牛屠夫 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L16) |
| 砍刀 蠻牛屠夫 Mk III接入 | [砍刀 蠻牛屠夫 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L1365-L1367) |
| 砍刀 克魯克 Mk IV匯入 | [砍刀 克魯克 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L16) |
| 砍刀 克魯克 Mk IV接入 | [砍刀 克魯克 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L1309-L1311) |
| 雷鎚等級覆寫 | [雷鎚等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_thunderhammer_2h_p1.lua#L253-L307) |
| 雷鎚Buff接入 | [雷鎚Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_thunderhammer_2h_p1_buff_templates.lua#L32) |
| UI 雷鎚 | [UI 雷鎚](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L578) |
| 雷鎚 十字星 Mk II匯入 | [雷鎚 十字星 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thunder_hammers_2h/thunderhammer_2h_p1_m1.lua#L16) |
| 雷鎚 十字星 Mk II接入 | [雷鎚 十字星 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thunder_hammers_2h/thunderhammer_2h_p1_m1.lua#L1778-L1780) |
| 雷鎚 鐵盔 Mk IV匯入 | [雷鎚 鐵盔 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thunder_hammers_2h/thunderhammer_2h_p1_m2.lua#L17) |
| 雷鎚 鐵盔 Mk IV接入 | [雷鎚 鐵盔 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thunder_hammers_2h/thunderhammer_2h_p1_m2.lua#L1809-L1811) |
