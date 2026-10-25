# 致命一擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_infinite_melee_cleave_on_weakspot_kill`／hash`7d810db1`；描述鍵`loc_trait_bespoke_infinite_melee_cleave_on_weakspot_kill_desc`／hash`399cce97`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Deathblow／致命一擊。

- 文件名稱：致命一擊(Deathblow)。

- 適用武器：重劍；描述鍵`loc_trait_bespoke_infinite_melee_cleave_on_weakspot_kill_desc`／hash`399cce97`。

- 英文模板：{weakspot_damage:%s} Weak Spot Damage. Weakspot Kills also ignore Enemy Hit Mass.

- 繁中模板：提高{weakspot_damage:%s}弱點傷害。弱點攻擊擊殺後還會無視敵人打擊質量。

- **靜態重建**：依本體百分比格式與 + 前綴靜態代入。
- I (0.075)：+7.5% Weak Spot Damage. Weakspot Kills also ignore Enemy Hit Mass.
  繁中：提高+7.5%弱點傷害。弱點攻擊擊殺後還會無視敵人打擊質量。
- II (0.10)：+10% Weak Spot Damage. Weakspot Kills also ignore Enemy Hit Mass.
  繁中：提高+10%弱點傷害。弱點攻擊擊殺後還會無視敵人打擊質量。
- III (0.125)：+12.5% Weak Spot Damage. Weakspot Kills also ignore Enemy Hit Mass.
  繁中：提高+12.5%弱點傷害。弱點攻擊擊殺後還會無視敵人打擊質量。
- IV (0.15)：+15% Weak Spot Damage. Weakspot Kills also ignore Enemy Hit Mass.
  繁中：提高+15%弱點傷害。弱點攻擊擊殺後還會無視敵人打擊質量。

各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| I–IV 弱點傷害數值 | 同一描述鍵 399cce97，以 `{weakspot_damage:%s}` 代入；自身 formatter 為 percentage 並加 `+` 前綴。 | Own trait `weapon_traits_bespoke_combatsword_p2.lua:246–285`。 | 一致 | I–IV 靜態重建依序為 +7.5%、+10%、+12.5%、+15%。 |
| 近戰弱點傷害的結算區域 | RAW 寫 Weak Spot Damage，沒有交代該 tier 只加入近戰弱點 finesse 部分。 | `damage_calculation.lua:713–724`；後續 finesse 合成 `749–782`。 | 文件未涵蓋 | 持用近戰劍時，等級增量進近戰弱點額外傷害乘區，不要求擊殺，也不是整次攻擊的最終傷害乘數。 |
| 弱點擊殺的質量回退條件 | 英文與繁中 RAW 說弱點擊殺忽略敵人命中質量，未列目標標籤、每次揮擊的角色擊殺位置與回退時序。 | `action_sweep.lua:1347–1389,1398–1425,1449–1454`。 | 文件未涵蓋 | 非歐格林、前三個總角色擊殺位置及傷害後回退是程式細節；描述省略這些限制，不據此列為誤譯或明確矛盾。 |
| 觸發目標本身是否免除命中質量 | RAW 沒有說明 abort profile、該目標傷害和質量回退的先後。 | `action_sweep.lua:1398–1425,1475–1503`。 | 文件未涵蓋 | 先以預計 abort 的傷害設定結算該擊；只有成功擊殺後才影響後續 sweep hit。 |
| 持用、層數、期限與冷卻 | RAW 沒有描述持用門檻或時間；模板也沒有 proc stack、duration、cooldown。 | Base template `base_weapon_trait_buff_templates.lua:428–439`；Buff condition `conditional_functions.lua:43–60`。 | 文件未涵蓋 | 實際為持用時的條件式屬性／關鍵字，沒有擊殺層數或倒數刷新。 |
| 後續目標的傷害順位 | RAW 未交代質量回退分支與下一目標傷害順位。 | `action_sweep.lua:1398–1425`。 | 文件未涵蓋 | 合格擊殺分支略過一般傷害目標順位遞增；仍由後續目標各自的護甲、部位與攻擊設定決定實際傷害。 |
