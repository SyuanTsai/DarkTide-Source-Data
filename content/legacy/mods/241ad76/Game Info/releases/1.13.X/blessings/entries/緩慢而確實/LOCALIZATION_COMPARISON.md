# 緩慢而確實：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_toughness_on_hit_based_on_charge_time`／hash`5fafa09d`；描述鍵`loc_trait_bespoke_toughness_on_hit_based_on_charge_time_desc`／hash`b386c76e`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Slow and Steady／緩慢而確實。

- 文件名稱：緩慢而確實(Slow and Steady)。

- 適用武器：戴維爾戰鎬、碎骨者；描述鍵`loc_trait_bespoke_toughness_on_hit_based_on_charge_time_desc`／hash`b386c76e`。

- 英文模板：Recover {toughness:%s} toughness when hitting an enemy with a heavy attack, based on charge time.

- 繁中模板：重攻擊擊中敵人時回復{toughness:%s}韌性，回復量依蓄力時間而定。

- **靜態重建**：以下依兩個 own formatter 的 `percentage` 格式和 `+` 前綴，以同一英／繁 RAW description key 靜態代入 I–IV；不改寫原句型：
- I — EN: Recover +5% toughness when hitting an enemy with a heavy attack, based on charge time.｜繁中：重攻擊擊中敵人時回復+5%韌性，回復量依蓄力時間而定。
- II — EN: Recover +6% toughness when hitting an enemy with a heavy attack, based on charge time.｜繁中：重攻擊擊中敵人時回復+6%韌性，回復量依蓄力時間而定。
- III — EN: Recover +7% toughness when hitting an enemy with a heavy attack, based on charge time.｜繁中：重攻擊擊中敵人時回復+7%韌性，回復量依蓄力時間而定。
- IV — EN: Recover +8% toughness when hitting an enemy with a heavy attack, based on charge time.｜繁中：重攻擊擊中敵人時回復+8%韌性，回復量依蓄力時間而定。

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 階級比例與顯示 | 中英 RAW 同 key `loc_trait_bespoke_toughness_on_hit_based_on_charge_time_desc`、hash `b386c76e`，逐級文字列於重建表。 | 兩 own formatter 於 weapon_traits_bespoke_ogryn_pickaxe_2h_p1.lua:487–517 與 weapon_traits_bespoke_ogryn_hammer_2h_p1.lua:219–249 讀 `toughness_fixed_percentage`，格式 percentage 並加 `+`。 | 符合 | 顯示值 +5/+6/+7/+8% 與 tier 原值 `.05/.06/.07/.08` 相符。 |
| 蓄能文字與計數模型 | RAW 稱「based on charge time／回復量依蓄力時間而定」，未列門檻事件模型。 | scripts/extension_systems/weapon/actions/action_windup.lua:49–85 ActionWindup.fixed_update selects the chain threshold and emits on_windup_trigger at intervals; scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_pickaxe_2h_p1_buff_templates.lua:34–82 and scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_hammer_2h_p1_buff_templates.lua:29–77 increment the custom count. | 文件未涵蓋 | 程式按離散門檻計數，命中倍率採 min(n,3)，並非連續秒數直接乘比例。 |
| 重攻擊限制 | RAW 明示 heavy attack／重攻擊。 | scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_pickaxe_2h_p1_buff_templates.lua:34–82 and scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_hammer_2h_p1_buff_templates.lua:29–77 register on_hit; scripts/extension_systems/weapon/actions/action_push.lua:52–88 ActionPush._push passes the current item; scripts/utilities/attack/push_attack.lua:80–99 calls Attack.execute(attack_type=push) and queues on_push_hit; scripts/utilities/attack/attack.lua:86–88, 374–388, 577–623 handles no-proc, _handle_buffs, and on_hit eligibility; scripts/settings/damage/damage_profiles/common_damage_profile_templates.lua:119–159, 306–343 define the actual push profiles. | 明確矛盾 | RAW 限定重攻擊；實際 callback 不檢查 attack_type 或攻擊強度。四個綁定的純推擊可另外送 on_hit（本祝福不聽 on_push_hit），故若舊計數仍在且該推擊通過一般事件條件，也可消耗它。 |
| 倍率上限與計數清除 | RAW 未說明單次計數上限或清除事件。 | scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_pickaxe_2h_p1_buff_templates.lua:34–82 and scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_hammer_2h_p1_buff_templates.lua:29–77 reset/increment callbacks; scripts/extension_systems/weapon/actions/action_sweep.lua:390–428 and 944–964 exit/on_sweep_finish dispatch. | 文件未涵蓋 | 單次倍率最多三個 windup 事件；掃掠傷害窗口後結束（含揮空）及重新持用會清零。 |
| 型號動作接線 | RAW 未列各武器型號的蓄能招式。 | scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m1.lua:112–222, 1048–1187, 1188–1327; corresponding m2.lua:112–222, 1044–1183, 1184–1322; m3.lua:113–225, 1265–1403, 1404–1542; scripts/settings/equipment/weapon_templates/ogryn_hammers_2h/ogryn_hammer_2h_p1_m1.lua:388–1127 and 1308–1566. Actual push profile assignments and types: m1.lua:1132–1187, m2.lua:1128–1182, m3.lua:1348–1403, and hammer m1.lua:1175–1230; all use ogryn_push/default_push with ogryn_physical types. | 文件未涵蓋 | Pickaxe special actions go directly to sweeps without their own windup; hammer special chains contain windup then special-heavy sweeps. Pure push creates no windup but can send on_hit and consume pending same-item count when generic event gates pass. Other actions remain in the coverage matrix. |
| 實際韌性回復 | RAW 未列最大值或缺失上限。 | scripts/settings/buff/helper_functions/shared_buff_functions.lua:10–27 regain_toughness_proc_func；scripts/extension_systems/toughness/player_unit_toughness_extension.lua:253–286 recover_percentage_toughness；同檔:447–475 _toughness_regen_disabled。 | 文件未涵蓋 | 回復要求為最大韌性比例乘 windup 計數，再封頂缺失韌性；略過一般倍率不代表略過原生恢復禁用條件。 |
| 持用與裝備生命週期 | RAW 未提持用／卸裝。 | scripts/settings/buff/helper_functions/conditional_functions.lua:43–59 ConditionalFunctions.is_item_slot_wielded; scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua:168–210 trait install; scripts/extension_systems/weapon/player_unit_weapon_extension.lua:633–693 equip/unequip and 743–785 slot unwield. | 文件未涵蓋 | 持用條件控制事件；切槽的 on_wield 會重置計數，真正卸下才移除祝福來源。 |
