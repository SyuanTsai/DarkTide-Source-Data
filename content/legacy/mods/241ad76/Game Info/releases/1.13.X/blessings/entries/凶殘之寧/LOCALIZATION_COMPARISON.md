# 凶殘之寧：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_vent_warp_charge_on_multiple_hits`／hash`558074d6`；描述鍵`loc_trait_bespoke_vent_warp_charge_on_multiple_hits_desc`／hash`12b73524`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Murderous Tranquility／凶殘之寧。

- 文件名稱：凶殘之寧(Murderous Tranquility)。

- 適用武器：烈焰力場巨劍；描述鍵`loc_trait_bespoke_vent_warp_charge_on_multiple_hits_desc`／hash`12b73524`。

- 英文模板：Hitting at least {multiple_hit:%s} enemies with an attack, quells {warp_charge:%s} Peril.

- 繁中模板：一次攻擊命中至少{multiple_hit:%s}個敵人後，平息{warp_charge:%s}反噬。

- **靜態重建**：multiple_hit=3；warp_charge 用 percentage 和正號格式。
- **I** EN: Hitting at least 3 enemies with an attack, quells +2% Peril. / ZH: 一次攻擊命中至少3個敵人後，平息+2%反噬。
- **II** EN: Hitting at least 3 enemies with an attack, quells +3% Peril. / ZH: 一次攻擊命中至少3個敵人後，平息+3%反噬。
- **III** EN: Hitting at least 3 enemies with an attack, quells +4% Peril. / ZH: 一次攻擊命中至少3個敵人後，平息+4%反噬。
- **IV** EN: Hitting at least 3 enemies with an attack, quells +5% Peril. / ZH: 一次攻擊命中至少3個敵人後，平息+5%反噬。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | RAW key loc_trait_bespoke_vent_warp_charge_on_multiple_hits/hash 558074d6: Murderous Tranquility／凶殘之寧。 | 兩筆 inventory binding 均指向 weapon_trait_bespoke_forcesword_2h_p1_vent_warp_charge_on_multiple_hits；item content/items/traits/bespoke_forcesword_2h_p1/vent_warp_charge_on_multiple_hits。 UI精確名稱組合見 scripts/utilities/items.lua315–327／378–426及兩Mark rootUI回條。 | 一致 | 兩語名稱共用 hash；UI weapon names 由 metadata family/pattern/mark loc_ids 組合。 |
| 觸發 | Desc key loc_trait_bespoke_vent_warp_charge_on_multiple_hits_desc/hash 12b73524；RAW EN/ZH 描述至少命中3個敵人後 quells/平息反噬。 | scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua:31-47 on_hit+held-slot+on_multiple_melee_hit；check_proc_functions.lua:368-425 要求 melee 和當前 target_number>=3。 | 文件未涵蓋 | RAW 未說明 target ordinal 與派送條件；不等同先累積三次正傷，也不宣稱每次碰撞均觸發。 |
| Tier與formatter | description hash 12b73524 有 multiple_hit 與 warp_charge placeholders。 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua:450-491，warp_charge percentage/+ 讀 tier override；multiple_hit 讀 wrapper required_num_hits=3。 | 一致 | I–IV 靜態值 +2/+3/+4/+5%；tier override 取代 fallback .01。 |
| 批次與時序 | 描述鍵 loc_trait_bespoke_vent_warp_charge_on_multiple_hits_desc／hash12b73524；RAW 未描述 proc flag 或同批合併。 | shared_buff_functions.lua:29-53 proc 設 boolean；player_unit_buff_extension.lua:131-146 fixed_update 先 _update_buffs 後 _update_proc_events。 | 文件未涵蓋 | 同事件處理批次只留一個 pending flag，後續 Buff.update 扣一次；新批次可再次設旗標。 |
| 數值效果 | 描述鍵 loc_trait_bespoke_vent_warp_charge_on_multiple_hits_desc／hash12b73524；RAW 稱 quells Peril，未說明相減基數和 clamp。 | warp_charge.lua:94-114 + shared_overheat_and_warp_charge_functions.lua:18-24：current fraction−tier、clamp[0,1]、state idle。 | 一致 | 固定百分點減目前反噬比例，不是相對百分比或傷害倍率；exploding state 另有能力中斷分支。 |
| 動作與切槽 | 描述鍵 loc_trait_bespoke_vent_warp_charge_on_multiple_hits_desc／hash12b73524；RAW 泛稱 an attack，未列 melee/push或切槽時點。 | M1/M2 melee sweeps：scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua:424-593,1901-2054,2101-2368；M2 counterpart scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua:437-605,1731-1890,2016-2283。Push executor scripts/extension_systems/weapon/actions/action_push.lua:23-112 與 scripts/utilities/attack/push_attack.lua:32-100 為 push；fling action_fling_target M1/M2 明列 kind=damage_target，實際 executor scripts/extension_systems/weapon/actions/action_damage_target.lua:136-164 硬傳 ranged 且無 target_number。Wind Slash routing 見 Force Sword special buff scripts/settings/buff/force_sword_2h_p1_buff_templates.lua:150-204,224-259,368-410、M1/M2 slash_settings ranges、scripts/utilities/action/ranged_action.lua:22-29：額外攻擊為 ranged 且不傳 ordinal。Held slot 見 conditional_functions.lua:43-59；已存 flag 由 shared update 消耗，不重查持有槽。 | 文件未涵蓋 | 普通與 special-powered melee sweeps 可觸發；special state switch event 本身不是 blessing on_hit。兩 Mark 的 Wind Slash extra attack 走 ranged 路徑，即使命中多個目標仍不符合；fling 也為 ranged。切槽前已通過 held gate 並存下的 pending flag 不取消。 |
