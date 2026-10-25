# 永燃烈焰(Everlasting Flame)：淨化噴火器實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_flamer_p1_ammo_from_reserve_on_crit`。

- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_flamer_p1.lua#L279-L308)。

- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L60)。

- 適用型號：淨化噴火器 奧特米亞 Mk III。

## 機制與公式

- Flamer wrapper clone move_ammo_from_reserve_to_clip_on_crit；trait逐級覆寫num_ammmo_to_move=2/3/4/5，保留原始三個m的鍵名。[火焰實作clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_flamer_p1_buff_templates.lua#L60-L60)、[共享暴擊補彈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000)。

- 共用ProcBuff監聽on_critical_strike=1，conditional_proc_func要求本slot持用；沒有attack_type、命中、擊殺、冷卻、active_duration或疊層條件。[共享暴擊補彈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000)、[持用條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59)、[無冷卻的啟動規則](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195)。

- ActionWeaponBase新的暴擊判定成功才排on_critical_strike，尚不需要hit result；add_proc_event把事件存入佇列，Buff固定更新才處理。force_predicted_proc讓客端也可處理，不代表事件當場執行。[新暴擊判定事件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_base.lua#L148-L184)、[事件排入佇列](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L992)、[處理事件與客端預測](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L261)、[Buff固定更新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L144)。

- proc處理當下讀clip C、max M、reserve R，用T=min(N,M−C,R)，設clip=C+T、reserve=R−T。不是把武器的ammo source改成reserve，不走免費transfer；原本ammo_usage仍是1。[共享暴擊補彈](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2970-L3000)、[火焰動作與耗料](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/flamers/flamer_p1_m1.lua#L224-L301)、[射擊消耗](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L481-L560)。

- burst非auto在ActionShoot.start判暴擊；auto每個prepare_shooting呼叫_check_for_auto_critical_strike，成功後num_critical_shots最多3，沿用暴擊的後續準備只增加count，不重發on_critical_strike。[點射判定暴擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L149-L174)、[連噴準備判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L610-L615)、[連噴暴擊延續](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L997-L1068)、[火焰連噴三次暴擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L291-L336)。

- Flamer連噴對敵人傷害與on_shoot事件不同於新暴擊判定，不能按target count或DoT stack tick觸發本祝福。[連噴命中與射擊事件不同](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_flamer_gas.lua#L396-L423)。

- 系統按配置順序加入fixed_update list，buff_system早於角色動作系統。補入計算採proc處理時snapshot，不把排事件瞬間與燃料消耗瞬間合併成一刻。[系統依配置加入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L58-L104)、[按排序執行系統](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L160-L171)、[Buff系統順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L308-L322)、[角色動作系統順序](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L396-L407)。

- 固定更新順序的靜態推導：burst在start排暴擊事件，fire_time=.1使proc先處理、該發稍後耗料；auto在prepare排事件，同pass完成射擊並耗料，下一Buff固定更新處理補入。滿箱burst該筆T0後耗1；滿箱auto先耗1後T1（備彈至少1）。此為固定原始碼推導，未作遊戲實測。

- 本變體沿用本祝福的共用執行鏈；等級與條件依上述實際覆寫核對。

- 數值：`{"num_ammmo_to_move": [2, 3, 4, 5], "proc_event": "on_critical_strike", "condition": "item_slot_wielded", "ammo_transfer": "min(tier_amount, clip_capacity-current_clip, reserve) at proc processing", "auto_critical_shots": 3, "ammo_usage": 1}`。

- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。

- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
