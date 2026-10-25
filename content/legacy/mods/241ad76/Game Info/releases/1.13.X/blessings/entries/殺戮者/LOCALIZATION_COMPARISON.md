# 殺戮者：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increase_power_on_kill`／hash`cee6f091`；描述鍵`loc_trait_bespoke_increase_power_on_kill_desc`／hash`dd3de970`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Slaughterer／殺戮者。

- 文件名稱：殺戮者(Slaughterer)。

- 適用武器：突擊鏈斧、烈焰力場劍、砍刀、戴維爾戰鎬、碾壓者、動力劍、雷鎚；描述鍵`loc_trait_bespoke_increase_power_on_kill_desc`／hash`dd3de970`。

- 英文模板：{power_level:%s} Strength for {time:%s}s on Kill. Stacks {stacks:%s} times.

- 繁中模板：擊殺後威力提升{power_level:%s}，持續{time:%s}秒，可疊加{stacks:%s}層。

- **靜態重建**：同一名稱鍵 `loc_trait_bespoke_increase_power_on_kill`（hash `cee6f091`）配同一描述鍵 `loc_trait_bespoke_increase_power_on_kill_desc`（hash `dd3de970`），RAW EN/ZH 於 `content/localization/items` 精確配對。數值按完整 own tier formatter 重建：`power_level` 從 tier parent 的 `stat_buffs.power_level_modifier` 以 percentage + 前綴格式化，`time` 從 parent `child_duration` 讀數字，`stacks` 從 child `max_stacks` 讀數字。

- **I（.05）**：EN `+5% Strength for 4.5s on Kill. Stacks 5 times.`／繁中 `擊殺後威力提升+5%，持續4.5秒，可疊加5層。`
- **II（.06）**：EN `+6% Strength for 4.5s on Kill. Stacks 5 times.`／繁中 `擊殺後威力提升+6%，持續4.5秒，可疊加5層。`
- **III（.07）**：EN `+7% Strength for 4.5s on Kill. Stacks 5 times.`／繁中 `擊殺後威力提升+7%，持續4.5秒，可疊加5層。`
- **IV（.08）**：EN `+8% Strength for 4.5s on Kill. Stacks 5 times.`／繁中 `擊殺後威力提升+8%，持續4.5秒，可疊加5層。`

各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發事件 | EN: “on Kill.”；繁中：「擊殺後」。 | base parent `on_kill` + exact-item check + `on_melee_kill`; Attack queues on_kill after a died result. | 文件未涵蓋 | 兩語都未限定近戰類型或 exact item；實際只接受同一武器物品造成的 melee 死亡事件。 |
| I–IV 威力值 | 同一 hash `dd3de970` 的 `{power_level:%s}`；EN Strength，繁中威力提升。 | 七份 own formatter 均讀 parent `stat_buffs.power_level_modifier`，percentage + prefix；值 .05/.06/.07/.08。 | 一致 | 逐級靜態值為 +5／+6／+7／+8%；此欄為每層修正，不是最終生命傷害比例。 |
| 層數 | EN: “Stacks {stacks:%s} times.”；繁中：「可疊加{stacks:%s}層。」 | child `max_stacks=5`, `stack_offset=-1`; parent init adds one zero-effective placeholder; each accepted kill adds one layer. | 一致 | 格式顯示上限五層，實作有效層數亦為五；初始佔位不算一層。 |
| 持續與刷新 | EN `{time:%s}s`；繁中 `{time:%s}秒`。 | All seven own parent definitions use `child_duration=4.5`; a qualifying accepted event refreshes one shared timer, including at cap; expiry removes up to five effective layers. | 文件未涵蓋 | 4.5 秒數值一致；共同倒數、滿層刷新與到期清層未在描述中展開。 |
| 動作/持用限制 | 兩語只寫 kill，未列武器、攻擊類型、推擊或切換條件。 | Base check requires exact attacking item and melee death; parent/child are held-slot gated. Sweep special hits remain melee; pure push and Force Sword P1 ranged fling fail the gate. Existing generic power may feed push impact, zero-health-damage fling impact and the Powermaul separate explosion; this does not alter the melee-kill trigger gate. | 文件未涵蓋 | 這些是未列出的實作條件與例外，原文沒有作出相反限制。 既有層數的受益分支與增加層數的觸發限制不同，不能由後者推論前者不存在。 |
