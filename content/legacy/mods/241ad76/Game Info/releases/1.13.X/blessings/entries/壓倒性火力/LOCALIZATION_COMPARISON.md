# 壓倒性火力：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_power_bonus_on_chained_hits_on_single_target`／hash`8e60a921`；描述鍵`loc_trait_bespoke_power_bonus_on_chained_hits_on_single_target_desc`／hash`2eeb3f14`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Overwhelming Fire／壓倒性火力。

- 文件名稱：壓倒性火力(Overwhelming Fire)。

- 適用武器：電弧步槍、雙鏈重型機槍、重伐木槍；描述鍵`loc_trait_bespoke_power_bonus_on_chained_hits_on_single_target_desc`／hash`2eeb3f14`。

- 英文模板：{power:%s} Strength for every {hit:%s} Single Target Hits. Lasts {time:%s}s and Stacks {stacks:%s} times.

- 繁中模板：每擊中單體目標{hit:%s}次，威力提升{power:%s}，持續{time:%s}秒，可疊加{stacks:%s}層。

- **靜態重建**：依照兩語原文 placeholder 與各實際型號 formatter 靜態代入 I–IV；以下是文字重建，不是遊戲畫面。
- 電弧步槍 I 級 EN: +1.5% Strength for every 4 Single Target Hits. Lasts 2s and Stacks 5 times.
  電弧步槍 I 級繁中：每擊中單體目標4次，威力提升+1.5%，持續2秒，可疊加5層。
- 電弧步槍 II 級 EN: +2.5% Strength for every 4 Single Target Hits. Lasts 2s and Stacks 5 times.
  電弧步槍 II 級繁中：每擊中單體目標4次，威力提升+2.5%，持續2秒，可疊加5層。
- 電弧步槍 III 級 EN: +3% Strength for every 4 Single Target Hits. Lasts 2s and Stacks 5 times.
  電弧步槍 III 級繁中：每擊中單體目標4次，威力提升+3%，持續2秒，可疊加5層。
- 電弧步槍 IV 級 EN: +4% Strength for every 4 Single Target Hits. Lasts 2s and Stacks 5 times.
  電弧步槍 IV 級繁中：每擊中單體目標4次，威力提升+4%，持續2秒，可疊加5層。
- 雙鏈重型機槍 I 級 EN: +7% Strength for every 4 Single Target Hits. Lasts 2s and Stacks 5 times.
  雙鏈重型機槍 I 級繁中：每擊中單體目標4次，威力提升+7%，持續2秒，可疊加5層。
- 雙鏈重型機槍 II 級 EN: +8% Strength for every 4 Single Target Hits. Lasts 2s and Stacks 5 times.
  雙鏈重型機槍 II 級繁中：每擊中單體目標4次，威力提升+8%，持續2秒，可疊加5層。
- 雙鏈重型機槍 III 級 EN: +9% Strength for every 4 Single Target Hits. Lasts 2s and Stacks 5 times.
  雙鏈重型機槍 III 級繁中：每擊中單體目標4次，威力提升+9%，持續2秒，可疊加5層。
- 雙鏈重型機槍 IV 級 EN: +10% Strength for every 4 Single Target Hits. Lasts 2s and Stacks 5 times.
  雙鏈重型機槍 IV 級繁中：每擊中單體目標4次，威力提升+10%，持續2秒，可疊加5層。
- 重伐木槍 I 級 EN: +7% Strength for every 1 Single Target Hits. Lasts 2s and Stacks 5 times.
  重伐木槍 I 級繁中：每擊中單體目標1次，威力提升+7%，持續2秒，可疊加5層。
- 重伐木槍 II 級 EN: +8% Strength for every 1 Single Target Hits. Lasts 2s and Stacks 5 times.
  重伐木槍 II 級繁中：每擊中單體目標1次，威力提升+8%，持續2秒，可疊加5層。
- 重伐木槍 III 級 EN: +9% Strength for every 1 Single Target Hits. Lasts 2s and Stacks 5 times.
  重伐木槍 III 級繁中：每擊中單體目標1次，威力提升+9%，持續2秒，可疊加5層。
- 重伐木槍 IV 級 EN: +10% Strength for every 1 Single Target Hits. Lasts 2s and Stacks 5 times.
  重伐木槍 IV 級繁中：每擊中單體目標1次，威力提升+10%，持續2秒，可疊加5層。
各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 四級數值與格式 | EN/ZH RAW 同 description key/hash，包含威力、命中數、時間與層數 placeholder。 | scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_arc_rifle_p1.lua:230–311；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua:280–361；scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua:9–90，各型號 format_values。 | 符合（formatter 顯示值） | 各自 formatter 靜態代入與 I–IV 顯示數值相符；不延伸解讀 RAW 未寫出的觸發條件。 |
| 首次目標與累計門檻 | RAW 說每擊中單體目標 h 次；未說新目標的第一個事件只建追蹤。 | scripts/settings/buff/buff_utils.lua:116–134 consecutive_hits_same_target_proc_func；scripts/extension_systems/buff/buffs/weapon_trait_target_number_parent_proc_buff.lua:52–86 update_proc_events/update_number_of_children。 | 文件未涵蓋 | 新目標首事件把追蹤目標、命中計數與累計層數歸零，且不更新 last_hit_time；事件批次同步子層後將有效 child 移除。只有後續同目標事件才按 floor(hit_count/h) 增層並更新計時。 |
| 持續與逾時 | RAW 說持續 2 秒、最多 5 層；未說共用計時、嚴格比較或首層前部分計數。 | scripts/extension_systems/buff/buffs/weapon_trait_target_number_parent_proc_buff.lua:14–49 timeout；同檔 52–86 子層同步。 | 符合（2 秒與 5 層）；文件未涵蓋（更新條件與換目標） | 2 秒與 5 層的格式化數值相符；RAW 未說明只由同目標後續命中刷新。新目標首事件會清除既有有效層但不刷新計時；已有層後逾時採嚴格大於 2 秒判斷。 |
| 攻擊事件與特殊動作 | RAW 提到單體命中，未列鏈電、槍托重擊、刺擊或手電筒切換。 | scripts/utilities/attack/attack.lua:350–390 damage/_handle_buffs；scripts/utilities/attack/attack.lua:577–623 命中事件 gate；scripts/extension_systems/weapon/actions/action_sweep.lua:1486–1503 SweepAttack；scripts/utilities/action/chain_lightning.lua:500–512。 | 文件未涵蓋 | 只有實際綁定動作及未被 profile 排除的事件更新追蹤；攻擊類型另決定是否讀取遠程威力。 |
| 遠程威力消費 | RAW 說威力增加，未指定哪些攻擊類型讀取此屬性。 | scripts/utilities/attack/power_level.lua:25–35 PowerLevel；scripts/utilities/attack/power_level.lua:58–60 additive pool；scripts/utilities/action/ranged_action.lua:22–29 遠程攻擊分派。 | 文件未涵蓋 | 只有 attack_type=ranged 讀取 ranged_power_level_modifier；鏈電與近戰動作即使更新追蹤也不讀取本項修正。 |
| 首次命中與屬性快取 | RAW 未說明建立新層的命中能否追溯受益。 | scripts/utilities/attack/attack.lua:350–390 傷害結算先於 _handle_buffs；scripts/extension_systems/buff/buff_extension_base.lua:233–271 _update_proc_events；scripts/extension_systems/buff/player_unit_buff_extension.lua:131–149；scripts/extension_systems/buff/buff_extension_base.lua:330–354、934–938。 | 文件未涵蓋 | 命中造成的傷害先結算；事件批次同步子層並在屬性快取更新後供後續攻擊讀取，不回溯修改觸發該層的已結算命中。 |
| 切槽與效果移除 | RAW 未提到持用條件、切槽期間的計時或來源武器卸下。 | scripts/settings/buff/helper_functions/conditional_functions.lua:43–59 is_item_slot_wielded；scripts/extension_systems/weapon/player_unit_weapon_extension.lua:633–693 裝備安裝；同檔 743–785 切槽生命週期。 | 文件未涵蓋 | 切槽使持用條件在快取更新後停用 proc/stat，但計時照常；只有卸下來源武器才移除其祝福。 |
