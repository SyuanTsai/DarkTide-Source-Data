# 最後防線：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_block_break_pushes`／hash`9825f3c4`；描述鍵`loc_trait_block_break_pushes_new_desc`／hash`06d33819`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Last Guard／最後防線。

- 文件名稱：最後防線(Last Guard)。

- 適用武器：作戰大錘&板盾、法務官電擊鎚和鎮壓護盾；描述鍵`loc_trait_block_break_pushes_new_desc`／hash`06d33819`。

- 英文模板：Block Breaks push Enemies, {cooldown:%s}s cooldown. {block_cost:%s} Block Cost.

- 繁中模板：格擋擊破會推開敵人，冷卻時間{cooldown:%s}秒。格擋消耗{block_cost:%s}。

- **靜態重建**：以下只把同一份英文及繁中描述中的四級 formatter placeholder 依實際 I–IV 值代入，保留原句型與標點。

- **I** — EN: `Block Breaks push Enemies, 18s cooldown. -15% Block Cost.`；ZH: `格擋擊破會推開敵人，冷卻時間18秒。格擋消耗-15%。`
- **II** — EN: `Block Breaks push Enemies, 15s cooldown. -20% Block Cost.`；ZH: `格擋擊破會推開敵人，冷卻時間15秒。格擋消耗-20%。`
- **III** — EN: `Block Breaks push Enemies, 12s cooldown. -25% Block Cost.`；ZH: `格擋擊破會推開敵人，冷卻時間12秒。格擋消耗-25%。`
- **IV** — EN: `Block Breaks push Enemies, 9s cooldown. -30% Block Cost.`；ZH: `格擋擊破會推開敵人，冷卻時間9秒。格擋消耗-30%。`

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 冷卻時間 I–IV | RAW `Block Breaks push Enemies, {cooldown:%s}s cooldown. {block_cost:%s} Block Cost.`／`格擋擊破會推開敵人，冷卻時間{cooldown:%s}秒。格擋消耗{block_cost:%s}。`；description key `loc_trait_block_break_pushes_new_desc` hash `06d33819`。 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1.lua:342–400 and scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua:263–319 define cooldown_duration; scripts/extension_systems/buff/buffs/proc_buff.lua ProcBuff._cooldown_duration:187–195 consumes it. | 一致（靜態值） | 兩變體 formatter-read own 18/15/12/9 秒；首次可用與事件冷卻起點是 RAW 未涵蓋的機制細節。 |
| 格擋消耗 I–IV | RAW placeholders `block_cost:%s` in matching EN/ZH description key `loc_trait_block_break_pushes_new_desc`, hash `06d33819`。 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1.lua:342–400 and scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua:263–319 formatter `100−value×100`; scripts/utilities/attack/block.lua Block._block_buff_modifier:275–290 consumes defender block-cost multiplier. | 一致（formatter 與倍率） | 原始 multiplier .85/.80/.75/.70 對應顯示降低15/20/25/30%；這是格擋耐力消耗，不是傷害減幅。 |
| 觸發與格擋破防條件 | RAW says “Block Breaks push Enemies”／「格擋擊破會推開敵人」；same description key/hash。 | scripts/utilities/attack/hit_reaction.lua HitReaction:138–157; scripts/utilities/attack/block.lua Block.attempt_block_break:130–161,206–235; scripts/extension_systems/weapon/player_unit_weapon_extension.lua PlayerUnitWeaponExtension.blocked_attack:911–963; scripts/extension_systems/buff/buffs/proc_buff.lua ProcBuff.update_proc_events:304–370. | 文件未涵蓋 | 本項要求 on_block、block_broken=true（positive cost 且 stamina depleted）、事件處理時來源 item held 及冷卻已結束；RAW 沒列這些條件，未與明文相反。 |
| Slab Shield weapon special | RAW 未逐型號說明 weapon-special block 的格擋成本。 | scripts/settings/equipment/weapon_templates/ogryn_powermaul_slabshield/ogryn_powermaul_slabshield_p1_m1.lua:1192–1240 and _m2.lua:848–896 set block_goes_brrr=true; scripts/utilities/attack/block.lua Block.attempt_block_break:153–161 then sets cost zero. | 文件未涵蓋 | 特殊格擋能擋攻擊但費用被設為零，因此不可能滿足 block_broken；一般 action_block 仍依耐力與成本判定。 |
| Shock Maul Shield special | RAW 未說明 special windup 或短暫 activation block window。 | scripts/extension_systems/weapon/actions/action_block_windup.lua ActionBlockWindup.start:8–24; scripts/extension_systems/weapon/actions/action_block.lua ActionBlock.finish:81–109; scripts/extension_systems/weapon/actions/action_weapon_shout.lua ActionWeaponShout.fixed_update:71–77; bound M1/M2 action files special ranges. | 文件未涵蓋 | 特殊 windup 及 activation .4 秒窗口可接受 melee/ranged；只有窗口內真實耗盡耐力且本項 held/cooldown 條件成立才觸發。 |
| 推擊範圍與推擊輸入 | RAW says pushes enemies but gives no radius, angle or native power input. | Each exact own wrapper scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1_buff_templates.lua:77–84 and weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua:77–84; scripts/utilities/attack/push_attack.lua PushAttack.push:32–108; scripts/settings/damage/power_level_settings.lua:7–11. | 文件未涵蓋 | 實作半徑5並按角度選 physical push profile，PowerLevel input is 2×500=1000；這不是固定生命傷害值。 |
| 推擊連鎖保留格擋狀態 | RAW 沒說向外推擊或推擊後追擊期間仍可格擋入站攻擊。 | scripts/extension_systems/weapon/actions/action_block.lua ActionBlock.finish:81–109; action_push.lua ActionPush.finish:23–50; bound Slabshield templates M1:1289–1370/M2:945–1030 and Shock Maul Shield M1:1037–1177/M2:1246–1386. | 文件未涵蓋 | 板盾與鎮壓護盾分別有0.5秒與0.4秒格擋保留窗口；向外 push/follow-up 本身不是 on_block，只有當前動作接受的入站攻擊在窗口內造成真實破防才可能觸發。 |
| 切槽、待發推擊與真正卸下 | RAW 沒有說明事件通過後切槽是否取消推擊，或真正卸下武器的狀態移除。 | Both own wrappers update_func:108–148 and scripts/extension_systems/weapon/player_unit_weapon_extension.lua PlayerUnitWeaponExtension.on_slot_unwielded:743–785 / on_wieldable_slot_unequipped:652–681. | 文件未涵蓋 | 切槽不移除 on_equip buff；事件已設定的 perform_push 不再檢查 held，仍安裝時後續更新會出手。真正卸下會移除 on_equip buff並刪除武器實例，來源 stat、冷卻及待發旗標隨實例終止。 |
| 切換時的減耗與新推擊條件 | RAW 不區分裝備安裝的 stat 與持用條件。 | scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1_buff_templates.lua:86–150 and weapon_traits_bespoke_powermaul_shield_p1_buff_templates.lua:86–150; scripts/extension_systems/weapon/player_unit_weapon_extension.lua on_wieldable_slot_equipped:633–650/on_slot_unwielded:743–785/on_wieldable_slot_unequipped:652–681. | 文件未涵蓋 | block_cost_multiplier 是沒有 held gate 的普通 stat_buffs；held 僅門控新 proc 事件。切槽不移除 on_equip stat/冷卻/已設旗標；真正卸下才移除來源 buff instance。 |
