# 勢頭：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_toughness_recovery_on_multiple_hits`／hash`e4cb3efd`；描述鍵`loc_trait_bespoke_toughness_recovery_on_multiple_hits_desc`／hash`d6e3e99b`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Momentum／勢頭。

- 文件名稱：勢頭(Momentum)。

- 適用武器：重型開膛劍、烈焰力場巨劍、惡霸棍棒、砍刀、雷鎚；描述鍵`loc_trait_bespoke_toughness_recovery_on_multiple_hits_desc`／hash`d6e3e99b`。

- 英文模板：Hitting at least {multiple_hit:%s} enemies with an attack, restores {toughness:%s} toughness.

- 繁中模板：一次攻擊命中至少{multiple_hit:%s}個敵人後，恢復{toughness:%s}韌性。

- **靜態重建**：RAW keys and formatting: `multiple_hit` uses integer `required_num_hits=3`; `toughness` uses the trait override `buff_data.replenish_percentage`, formatted as percentage ×100 with a `+` prefix. These are static reconstructions of fixed localization templates, not gameplay captures.

- **I**：EN `Hitting at least 3 enemies with an attack, restores +12% toughness.`；繁中「一次攻擊命中至少3個敵人後，恢復+12%韌性。」
- **II**：EN `Hitting at least 3 enemies with an attack, restores +13% toughness.`；繁中「一次攻擊命中至少3個敵人後，恢復+13%韌性。」
- **III**：EN `Hitting at least 3 enemies with an attack, restores +14% toughness.`；繁中「一次攻擊命中至少3個敵人後，恢復+14%韌性。」
- **IV**：EN `Hitting at least 3 enemies with an attack, restores +15% toughness.`；繁中「一次攻擊命中至少3個敵人後，恢復+15%韌性。」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | 名稱鍵 `loc_trait_bespoke_toughness_recovery_on_multiple_hits`／hash `e4cb3efd`；EN `Momentum`；繁中 `勢頭`。 | 五個實際 trait ID 接入相同名稱鍵，12 個 UI binding 全在本項 inventory 交集。 | 一致 | 原文名稱與 inventory key 一致。 |
| 觸發條件 | 描述鍵 `loc_trait_bespoke_toughness_recovery_on_multiple_hits_desc`／hash `d6e3e99b`；EN `Hitting at least {multiple_hit:%s} enemies with an attack, restores {toughness:%s} toughness.`；繁中 `一次攻擊命中至少{multiple_hit:%s}個敵人後，恢復{toughness:%s}韌性。`。 | 各 wrapper 都要求 held slot、實際 item match、melee attack type、當前 target_number >= 3；命中事件還須通過 Attack 的 profile/type 派送閘門。 | 文件未涵蓋 | RAW 沒交代目前目標序號、damage profile 跳過與攻擊分類。此處不解讀為跨次攻擊累計三次事件，也不聲稱必須正傷。 |
| I–IV 恢復百分比 | 描述 placeholder `{toughness:%s}` 對應每級 trait override 的恢復比例。 | 五個 own tier 都是最大韌性比例 0.12／0.13／0.14／0.15，formatter percentage ×100 加 `+`。Tier 取代 base wrapper 的 0.5 fallback。 | 一致 | 靜態重建為 +12%／+13%／+14%／+15% Toughness；fallback 不是額外加算值。 |
| 恢復計算與上限 | RAW 僅說 restores toughness，沒有給百分比的基數、角色倍率或缺額上限。 | 實際請求 = 呼叫當下 max_toughness × tier fraction × toughness_replenish_modifier × toughness_replenish_multiplier（缺後者用 1）；回復最多為當前缺額。 | 文件未涵蓋 | 未將技能描述當成固定回復量；死亡／倒地等狀態與禁止恢復條件另控制是否能回復。 |
| 冷卻與動作範圍 | RAW 未載明冷卻、首次生效或哪些特殊攻擊屬近戰命中。 | 0.12 秒 cooldown；wrapper 無 per-sweep latch，合格事件立即執行恢復並消耗冷卻，即使實際回復為 0。Push 不符合 melee；直接 special sweeps 可；Force Wind Slash/fling ranged、Chainsword sticky ticks skip 且 ordinal=1。 | 文件未涵蓋 | 只涵蓋已接入的五個 variant／12 marks；普通近戰 on_hit 仍需過 profile skip 與 damage-type dispatch gate。 |
