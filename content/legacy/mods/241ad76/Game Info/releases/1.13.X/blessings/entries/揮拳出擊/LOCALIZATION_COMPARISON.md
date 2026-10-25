# 揮拳出擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_weakspot_damage_bonus_on_pushed_enemies`／hash`78bd4e86`；描述鍵`loc_trait_bespoke_weakspot_damage_bonus_on_pushed_enemies_desc`／hash`61d08654`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Take a Swing／揮拳出擊。

- 文件名稱：揮拳出擊(Take a Swing)。

- 適用武器：工兵鏟、撬棍、碎骨者；描述鍵`loc_trait_bespoke_weakspot_damage_bonus_on_pushed_enemies_desc`／hash`61d08654`。

- 英文模板：{damage:%s} Weak Spot Damage for {time:%s} seconds on Pushing Enemies.

- 繁中模板：推開敵人後{damage:%s}弱點傷害，持續{time:%s}秒。

- **靜態重建**：以下逐級依三份實際 formatter 與 tier 覆寫重建；百分比格式使用 `+` 前綴，時間從各型號的 `active_duration` 取值，RAW 原文沒有尾端空格；表格逐字保留格式化結果。

| 等級 | EN：工兵鏟／撬棍（3秒） | 繁中：工兵鏟／撬棍（3秒） | EN：碎骨者（6秒） | 繁中：碎骨者（6秒） |
|---|---|---|---|---|
| I | ``+45% Weak Spot Damage for 3 seconds on Pushing Enemies.`` | ``推開敵人後+45%弱點傷害，持續3秒。`` | ``+45% Weak Spot Damage for 6 seconds on Pushing Enemies.`` | ``推開敵人後+45%弱點傷害，持續6秒。`` |
| II | ``+50% Weak Spot Damage for 3 seconds on Pushing Enemies.`` | ``推開敵人後+50%弱點傷害，持續3秒。`` | ``+50% Weak Spot Damage for 6 seconds on Pushing Enemies.`` | ``推開敵人後+50%弱點傷害，持續6秒。`` |
| III | ``+55% Weak Spot Damage for 3 seconds on Pushing Enemies.`` | ``推開敵人後+55%弱點傷害，持續3秒。`` | ``+55% Weak Spot Damage for 6 seconds on Pushing Enemies.`` | ``推開敵人後+55%弱點傷害，持續6秒。`` |
| IV | ``+60% Weak Spot Damage for 3 seconds on Pushing Enemies.`` | ``推開敵人後+60%弱點傷害，持續3秒。`` | ``+60% Weak Spot Damage for 6 seconds on Pushing Enemies.`` | ``推開敵人後+60%弱點傷害，持續6秒。`` |

- 各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 推擊觸發與門檻 | EN RAW：`{damage:%s} Weak Spot Damage for {time:%s} seconds on Pushing Enemies.`；繁中 RAW：`推開敵人後{damage:%s}弱點傷害，持續{time:%s}秒。`；`loc_trait_bespoke_weakspot_damage_bonus_on_pushed_enemies_desc`／hash `61d08654`。 | ActionPush._push (`scripts/extension_systems/weapon/actions/action_push.lua:52–115`) 先呼叫 PushAttack.push (`scripts/utilities/attack/push_attack.lua:32–108`)，再填 `num_hit_units`；on_push_finish payload (`scripts/settings/buff/buff_settings.lua:480–482`)，三個 own wrapper 的 check 為各 trait Buff source 中 `num_hit_units > 0`。 | 符合 | 本體說明推開敵人；實際程式只在整次推擊至少有一個有效目標時觸發，並不逐目標加層。 |
| 弱點傷害作用範圍 | EN RAW：`{damage:%s} Weak Spot Damage for {time:%s} seconds on Pushing Enemies.`；繁中 RAW：`推開敵人後{damage:%s}弱點傷害，持續{time:%s}秒。`；hash `61d08654`。 | DamageCalculation 的 weakspot 分支 (`scripts/utilities/attack/damage_calculation.lua:713–747`) 與 finesse 合成 (`scripts/utilities/attack/damage_calculation.lua:775–783`)。 | 符合 | weakspot_damage 只在 hit_weakspot 時計入弱點 finesse 部分；不等同推擊或整次攻擊的最終傷害百分比。 |
| 數值與格式參數 | EN RAW：`{damage:%s} Weak Spot Damage for {time:%s} seconds on Pushing Enemies.`；繁中 RAW：`推開敵人後{damage:%s}弱點傷害，持續{time:%s}秒。`；`damage` 是 formatter slot，hash `61d08654`。 | 三份 complete tier formatter/own values 見 weapon_traits_bespoke_* tier source；percentage formatter (`scripts/utilities/trait_value_parser.lua:8–32`) 將 .45–.60 乘 100 並套用 `+`；精度 formatter (`scripts/utilities/trait_value_parser.lua:189–228`)。 | 符合 | 本體 RAW 以 damage placeholder 表示數值；同 hash 的 formatter 和實際 I–IV 覆寫重建為 +45%／+50%／+55%／+60%。 |
| 持續時間與再次推擊 | EN RAW：`{damage:%s} Weak Spot Damage for {time:%s} seconds on Pushing Enemies.`；繁中 RAW：`推開敵人後{damage:%s}弱點傷害，持續{time:%s}秒。`；`time` 是 formatter slot，hash `61d08654`。 | own ProcBuff 的 `active_duration` 與 `allow_proc_while_active=true`；ProcBuff._is_proc_active (`scripts/extension_systems/buff/buffs/proc_buff.lua:78–104`)、_can_activate (`:173–185`) 及 update_proc_events (`:304–355`)。 | 文件未涵蓋 | RAW 沒有列出三秒／六秒按型號差異、持續中刷新、疊層或計時器語意；這些依實際 wrapper 與 ProcBuff 判定。 |
| 持用條件與非推擊路徑 | EN RAW：`{damage:%s} Weak Spot Damage for {time:%s} seconds on Pushing Enemies.`；繁中 RAW：`推開敵人後{damage:%s}弱點傷害，持續{time:%s}秒。`；hash `61d08654`。 | is_item_slot_wielded (`scripts/settings/buff/helper_functions/conditional_functions.lua:43–59`)、ProcBuff.update_stat_buffs (`scripts/extension_systems/buff/buffs/proc_buff.lua:247–253,288–300`)；三 Mark 的完整 action signatures 已按各固定模板 ranges 列入 attack_matrix/source_blocks。 | 文件未涵蓋 | RAW 未說明持用槽位門檻、切槽暫停、卸下清除，亦未區分普通／蓄力／special Sweep；本文件按實際事件訂閱與 stat consumer 分列。 |
