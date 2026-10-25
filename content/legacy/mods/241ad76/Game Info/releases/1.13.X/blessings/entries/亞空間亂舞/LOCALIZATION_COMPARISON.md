# 亞空間亂舞：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_faster_charge_on_chained_secondary_attacks`／hash`4cf5de54`；描述鍵`loc_trait_bespoke_faster_charge_on_chained_secondary_attacks_desc`／hash`4eca7572`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Warp Flurry／亞空間亂舞。

- 文件名稱：亞空間亂舞(Warp Flurry)。

- 適用武器：虛空爆破力場法杖、烈焰力場法杖、電流力場法杖、虛空打擊力場法杖；描述鍵`loc_trait_bespoke_faster_charge_on_chained_secondary_attacks_desc`／hash`4eca7572`。

- 英文模板：{charge_time:%s}  Charge Time on Chained Secondary Attack. Stacks {stacks:%s} times.

- 繁中模板：連續使用次要攻擊會使充能時間縮短{charge_time:%s}，最多疊加{stacks:%s}次。

- **靜態重建**：依各 tier own formatter 的負向 charge_up_time，percentage 直接乘100並保留符號；stacks 代入3。I–IV完整句子如下：

- I：EN “-5.5%  Charge Time on Chained Secondary Attack. Stacks 3 times.”；繁中「連續使用次要攻擊會使充能時間縮短-5.5%，最多疊加3次。」

- II：EN “-6.5%  Charge Time on Chained Secondary Attack. Stacks 3 times.”；繁中「連續使用次要攻擊會使充能時間縮短-6.5%，最多疊加3次。」

- III：EN “-7.5%  Charge Time on Chained Secondary Attack. Stacks 3 times.”；繁中「連續使用次要攻擊會使充能時間縮短-7.5%，最多疊加3次。」

- IV：EN “-8.5%  Charge Time on Chained Secondary Attack. Stacks 3 times.”；繁中「連續使用次要攻擊會使充能時間縮短-8.5%，最多疊加3次。」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | 同一 RAW 資源的英文 Warp Flurry 與繁中 亞空間亂舞使用同 name hash 4cf5de54。 | 四個實際 trait 均使用相同 name_key；適用型號按 metadata family、pattern、mark 與模板接線核對。 | 一致 | 保留本體名稱與固定的四個實際型號。 |
| 蓄力時間占位符 | RAW 描述用 charge_time placeholder；格式重建依各 tier own formatter 原樣保留負值。 | 負值加入 charge_up_time 的 additive multiplier；以 1 為基準使蓄力時間縮短，正向玩家幅度為每層 5.5%／6.5%／7.5%／8.5%。 | 數值符號勘誤 | 繁中「縮短−x%」字面方向矛盾；標示的是靜態 formatter 重建，不是遊戲畫面。 |
| 連續次要攻擊 | RAW 說 chained secondary attack，未列具體 action 名、命中條件或武器專屬例外。 | 四 wrapper 僅在各自指定 charged-release action_start 生效；不要求命中，P2 一次連續火焰 release action 只在開始時計一次。 | 文件未涵蓋 | 機制細節補充依實際 wrapper/模板；RAW 不聲稱命中或每個 tick 計數。 |
| 最多疊加三次 | 繁中 RAW 說最多疊加 3 次。 | child max_stacks=3 且 stack_offset=−1；內部占位層不算有效層，玩家效果上限為三層，parent child_duration=5 秒並以每次合格事件刷新。 | 一致但期限未涵蓋 | 明列計時、刷新與切換條件；不將占位層當第四個有效層。 |
| 特殊釋放差異 | RAW 未區分四種法杖的蓄力釋放與特殊攻擊。 | P1 爆炸、P2 蓄力火焰、P3 蓄力連鎖閃電、P4 蓄力投射物符合各自 action 名；未蓄力火焰及近戰特殊動作不符合。 | 文件未涵蓋 | 只按四個本次綁定的實際 template 和 wrapper 逐項描述。 |
