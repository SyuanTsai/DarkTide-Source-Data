# 激勵彈幕：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| P1 I–IV tier及formatter | [P1 I–IV tier及formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua#L125-L163) |
| P1 wrapper | [P1 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p1_buff_templates.lua#L15-L18) |
| P3 I–IV tier及formatter | [P3 I–IV tier及formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua#L125-L163) |
| P3 wrapper | [P3 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p3_buff_templates.lua#L16-L19) |
| base連續射擊計數 | [base連續射擊計數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1897-L1948) |
| base韌性ProcBuff | [base韌性ProcBuff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1991-L2034) |
| 恢復helper | [恢復helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/shared_buff_functions.lua#L10-L27) |
| 持用欄位條件 | [持用欄位條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| 射擊彈藥事件 | [射擊彈藥事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L566) |
| 射擊完成事件 | [射擊完成事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L653-L705) |
| 原生連擊更新 | [原生連擊更新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L494-L512) |
| 原生連擊逾時 | [原生連擊逾時](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L1149-L1162) |
| P1射擊、瞄準、裝填、Bash | [P1射擊、瞄準、裝填、Bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L192-L585) |
| P1連擊逾時設定 | [P1連擊逾時設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L795-L803) |
| P3射擊、瞄準、裝填、Bash | [P3射擊、瞄準、裝填、Bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L197-L593) |
| P3完整Mark無逾時覆寫 | [P3完整Mark無逾時覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L1-L903) |
| Buff事件處理與stat cache | [Buff事件處理與stat cache](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L354) |
| 玩家Buff固定更新 | [玩家Buff固定更新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L145) |
| on_equip安裝Buff | [on_equip安裝Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L643) |
| 槽位卸下移除Buff | [槽位卸下移除Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L652-L662) |
| 切換武器槽位 | [切換武器槽位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| 原生連擊上限符號 | [原生連擊上限符號](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/network_lookup/network_constants.lua#L239-L240) |
| 非迴圈動作逾時計數重設 | [非迴圈動作逾時計數重設](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L1155-L1159) |
| 倒地與force_assist回復限制 | [倒地與force_assist回復限制](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L447-L450) |
| 彈藥事件 payload欄位 | [彈藥事件 payload欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L540-L548) |
| ProcBuff無來源 item比對 | [ProcBuff無來源 item比對](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L338) |
| Buff owner事件 queue | [Buff owner事件 queue](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L255) |
| base檢查 held 並讀當下 combo | [base檢查 held 並讀當下 combo](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1997-L2025) |
| ActionShoot runs the shot path before spending ammunition and carries weapon/slot action d | [ActionShoot runs the shot path before spending ammunition and carries weapon/slot action d](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L306-L346) |
| ActionHandler fills parameters with current combo count and calls _update_combo_count afte | [ActionHandler fills parameters with current combo count and calls _update_combo_count afte](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L291-L335) |
| Per-action increase/hold flags override default action-kind rules. | [Per-action increase/hold flags override default action-kind rules.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/action_availability.lua#L98-L128) |
| Default combo-increase kinds include sweep, shoot_hit_scan and shoot_pellets. | [Default combo-increase kinds include sweep, shoot_hit_scan and shoot_pellets.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/action/action_handler_settings.lua#L48-L58) |
| Recovery uses maximum toughness and clamps to missing toughness. | [Recovery uses maximum toughness and clamps to missing toughness.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L253-L285) |
| Normal recovery gate blocks downed/dead/prevent-recovery states. | [Normal recovery gate blocks downed/dead/prevent-recovery states.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/toughness/player_unit_toughness_extension.lua#L447-L475) |
| Buff proc events are drained and processed through BuffExtension. | [Buff proc events are drained and processed through BuffExtension.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L279) |
| Buff stat/keyword cache is rebuilt during extension update. | [Buff stat/keyword cache is rebuilt during extension update.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L330-L354) |
| Weapon setup collects on_equip buffs. | [Weapon setup collects on_equip buffs.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/weapon.lua#L26-L82) |
| Weapon tweak construction maps bound traits into on_equip Buff list. | [Weapon tweak construction maps bound traits into on_equip Buff list.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L155-L211) |
| Slot equip/removal adds or removes on_equip buffs. | [Slot equip/removal adds or removes on_equip buffs.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| P1 inputs include shooting, aim, reload and bash; no separate charge or throw action is de | [P1 inputs include shooting, aim, reload and bash; no separate charge or throw action is de](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L30-L155) |
| P1 hip fire is shoot_pellets, consumes one ammo per action and keeps combo on start. | [P1 hip fire is shoot_pellets, consumes one ammo per action and keeps combo on start.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L192-L267) |
| P1 aim holds combo; zoomed fire is shoot_pellets, ammo one and keep_combo_on_start. | [P1 aim holds combo; zoomed fire is shoot_pellets, ammo one and keep_combo_on_start.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L268-L360) |
| P1 reload holds combo; some reload-to-Bash transitions reset combo. | [P1 reload holds combo; some reload-to-Bash transitions reset combo.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L374-L435) |
| P1 Bash is Sweep and does not spend ammo. | [P1 Bash is Sweep and does not spend ammo.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L437-L475) |
| P1 right Bash is also Sweep and does not spend ammo. | [P1 right Bash is also Sweep and does not spend ammo.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L548-L585) |
| P1 sets combo_reset_duration=.5 seconds. | [P1 sets combo_reset_duration=.5 seconds.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L795-L810) |
| P3 inputs include shooting, aim, reload and Bash; no separate charge or throw action is de | [P3 inputs include shooting, aim, reload and Bash; no separate charge or throw action is de](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L30-L155) |
| P3 hip fire is shoot_hit_scan, consumes one ammo, and has no keep_combo_on_start. | [P3 hip fire is shoot_hit_scan, consumes one ammo, and has no keep_combo_on_start.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L197-L267) |
| P3 aim action has no hold_combo. | [P3 aim action has no hold_combo.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L268-L311) |
| P3 zoomed fire is shoot_hit_scan, consumes one ammo, and has no keep_combo_on_start. | [P3 zoomed fire is shoot_hit_scan, consumes one ammo, and has no keep_combo_on_start.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L311-L394) |
| P3 reload holds combo and has a Bash chain with reset_combo=true. | [P3 reload holds combo and has a Bash chain with reset_combo=true.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L395-L458) |
| P3 Bash is Sweep and does not spend ammo. | [P3 Bash is Sweep and does not spend ammo.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L459-L493) |
| P3 right Bash is Sweep and does not spend ammo. | [P3 right Bash is Sweep and does not spend ammo.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L557-L593) |
| Actual P1 weapon template imports its bespoke trait module. | [Actual P1 weapon template imports its bespoke trait module.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L15) |
| Actual P1 Mark appends bespoke trait keys to weapon_template.traits. | [Actual P1 Mark appends bespoke trait keys to weapon_template.traits.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L840-L842) |
| Actual P3 weapon template imports its bespoke trait module. | [Actual P3 weapon template imports its bespoke trait module.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L16) |
| Actual P3 Mark appends bespoke trait keys to weapon_template.traits. | [Actual P3 Mark appends bespoke trait keys to weapon_template.traits.](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L832-L834) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

## 實際綁定與等級

UI／物品盤點找到兩個實際 trait 實作：反衝者 洛倫茲 Mk V 的 ogryn_thumper_p1_m1，以及惡棍槍 洛倫茲 Mk VII 的 ogryn_thumper_p1_m3。後者的實際 Mark 是 ogryn_thumper_p1_m3。兩個 own tier 都將 toughness_fixed_percentage 覆寫為 I–IV 級 0.01、0.02、0.03、0.04；各 wrapper 合併 base_weapon_trait_buff_templates.toughness_on_continuous_fire，並設 use_combo=true。wrapper 的 0.1 是未被本祝福 tier 覆寫時的 fallback，不是本項 I–IV 數值。

## 事件、連擊計數與直接回復

共用 ProcBuff 監聽 on_ammo_consumed 與 on_shoot_finish。on_shoot_finish 的本項 callback 不做事；彈藥事件的 callback 使用條件式持用欄位與 weapon combo_count。 ActionShoot 的彈藥事件 payload 不含來源 item/slot；ProcBuff 沒有通用的事件來源比對。ConditionalFunctions.is_item_slot_wielded 只比對事件處理當下的目前持用槽，base callback 忽略 params 並讀當下武器連擊數。因此本項沒有額外比對事件來源 item/slot；不從這條路徑外推跨武器或投擲可用性。use_combo=true 使 base helper 讀取當下的 weapon_action_component.combo_count，而不是 ammo percentage、子彈命中數或持續射擊 step。每次受檢查的持用彈藥事件都更新前次連擊數記錄；事件只有在 n 大於記錄值，或 n 等於 m = NetworkConstants.action_combo_count.max 時才通過。該原生計數上限由 scripts/network_lookup/network_constants.lua 的 Network.type_info("action_combo_count") 提供，這份 Lua 原始碼沒有給出 m 的數字。helper 把可用計數截在 5，乘上 tier 的 toughness_fixed_percentage，並呼叫直接韌性回復；這個五倍倍率上限不等於原生連擊上限。buff template 的 num_fire_steps 是用於記錄前次計數及顯示，不代表持續中的五層 stat buff。own formatter 裡的 ammo=10% 是字串欄位；RAW 沒有 ammo placeholder，因此它不顯示也不是本效果的彈藥門檻。

每次射擊動作消耗彈藥時送出一個 on_ammo_consumed 事件。反衝者射擊是 shoot_pellets，惡棍槍射擊是 shoot_hit_scan；事件單位是一次 ActionShoot，不是每個 pellet、命中目標、命中部位或傷害 packet。實際命中與否不在 ProcBuff gate 中。原生 ActionHandler 先更新武器連擊數，再傳入下一動作參數；當前數值會受每個實際 action 的 keep_combo_on_start、hold_combo、combo increase/reset 類別、reset_combo 鏈與逾時計數重設共同影響。逾時計數重設只在非迴圈動作結束後、經過時間超過 combo_reset_duration 時發生；計時以目前時間減去 action_end_t 計算，而不是在每次射擊後固定倒數。

## 兩個 Mark 的實際動作差異

反衝者的腰射與瞄準射擊都是每動作消耗一發的 shoot_pellets，並都指定 keep_combo_on_start=true；aim 與 reload 設定 hold_combo，模板把 combo_reset_duration 改為 0.5 秒。瞄準或重裝可依 hold_combo 保留計數，但部分銜接 Bash 的鏈明確設 reset_combo=true。普通 Bash 與右向 Bash 是 Sweep，自己不消耗彈藥；依 generic action kind 它可影響連擊，但沒有彈藥事件就不會直接回復。

惡棍槍的腰射與瞄準射擊都是每動作消耗一發的 shoot_hit_scan，未設 keep_combo_on_start；aim 未設 hold_combo，reload 設 hold_combo=true。完整 Mark template 沒有 combo_reset_duration，故通用預設 0.2 秒生效。由閒置開始的非自動動作若沒有 keep_combo_on_start，ActionHandler 會先把計數重設為 0；後續 shot 是否延續由實際 action chaining 和 counter reset rules 決定。它的 Bash 與右向 Bash 是 Sweep，也不直接消耗彈藥；部分 reload-to-Bash transition 明確重設連擊。兩個 Mark 都沒有獨立投擲、蓄力射擊或以命中／擊殺作為本祝福觸發的額外射擊路徑。

## 韌性結算與裝備生命週期

恢復函式使用最大韌性乘固定百分比與連擊倍率，ignore_stat_buffs=true，因此不套用 stat-buff recovery 修正；結果仍會限制在剩餘韌性缺額，且走正常回復封鎖檢查。一般倒地且非 force_assist 會被 PlayerUnitToughnessExtension 的 _toughness_regen_disabled 擋下；force_assist=true 不受這一項倒地條件阻擋。這項沒有 active_duration、cooldown 或反覆堆疊的 toughness stat buff。第一個合格彈藥事件經 ProcBuff 處理後直接改變韌性，Buff 固定更新在後續更新 stat／keyword cache；不是按下射擊鍵的同一個同步步驟。

武器 trait 經實際 Mark 匯入後加入其 on_equip Buff。切換到其它槽位只會使目前持用條件關閉，不會因切槽自動刪除仍裝備的 weapon buff，也不會清除本祝福記錄的前次彈藥事件連擊數；切回後是否回復仍由最新記錄與當下原生計數條件決定。從槽位移除武器時，PlayerUnitWeaponExtension 的 on_wieldable_slot_unequipped 移除它安裝的 on_equip Buff；改選其它武器時由 on_slot_unwielded 處理槽位切換。

## 韌性回復公式

令 M 為最大韌性，C 為目前韌性，p 為 tier 固定比例，n 為事件處理時實際武器連擊計數，last 為前次彈藥事件記錄值，m = NetworkConstants.action_combo_count.max。held-slot gate 成立、n > last 或 n = m、且韌性回復沒有被封鎖時：

計算回復量 = M × p × min(n, 5)

實際增加量 = min(計算回復量, M − C)

ignore_stat_buffs=true 表示本次不套用韌性回復倍率等 stat 修正；恢復仍受目前缺額與回復狀態限制。公式中的 n 是原生 action combo_count，不是固定射擊次數、命中數或目標數。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_127`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_127.png)｜[Issue附件](https://github.com/user-attachments/assets/6b381aff-25ca-43bb-9878-356963df97f5)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 反衝者等級覆寫 | [反衝者等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p1.lua#L125-L163) |
| 反衝者Buff接入 | [反衝者Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p1_buff_templates.lua#L15-L18) |
| UI 反衝者 | [UI 反衝者](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1061) |
| 反衝者 洛倫茲 Mk V匯入 | [反衝者 洛倫茲 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L15) |
| 反衝者 洛倫茲 Mk V接入 | [反衝者 洛倫茲 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m1.lua#L840-L842) |
| 惡棍槍等級覆寫 | [惡棍槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p3.lua#L125-L163) |
| 惡棍槍Buff接入 | [惡棍槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p3_buff_templates.lua#L16-L19) |
| UI 惡棍槍 | [UI 惡棍槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1087) |
| 惡棍槍 洛倫茲 Mk VII匯入 | [惡棍槍 洛倫茲 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L16) |
| 惡棍槍 洛倫茲 Mk VII接入 | [惡棍槍 洛倫茲 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/thumpers/ogryn_thumper_p1_m3.lua#L832-L834) |
