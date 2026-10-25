# 猛攻：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_faster_charge_on_chained_attacks`／hash`85a809fe`；描述鍵`loc_trait_bespoke_faster_charge_on_chained_attacks_desc`／hash`54890a6d`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Weight of Fire／猛攻。

- 文件名稱：猛攻(Weight of Fire)。

- 適用武器：冥潮鐳射槍；描述鍵`loc_trait_bespoke_faster_charge_on_chained_attacks_desc`／hash`54890a6d`。

- 英文模板：Chaining Charged Attacks reduces their Charge Time by {charge_time:%s}. Stacks {stacks:%s} times.

- 繁中模板：鏈鋸蓄力攻擊可使蓄力時間縮短{charge_time:%s}，最多疊加{stacks:%s}次。

- **靜態重建**：依各級 own tier、百分比 formatter 與 `stacks=5` 重建；負號保留：

- I：EN “Chaining Charged Attacks reduces their Charge Time by -6%. Stacks 5 times.”；繁中「鏈鋸蓄力攻擊可使蓄力時間縮短-6%，最多疊加5次。」
- II：EN “Chaining Charged Attacks reduces their Charge Time by -8%. Stacks 5 times.”；繁中「鏈鋸蓄力攻擊可使蓄力時間縮短-8%，最多疊加5次。」
- III：EN “Chaining Charged Attacks reduces their Charge Time by -10%. Stacks 5 times.”；繁中「鏈鋸蓄力攻擊可使蓄力時間縮短-10%，最多疊加5次。」
- IV：EN “Chaining Charged Attacks reduces their Charge Time by -12%. Stacks 5 times.”；繁中「鏈鋸蓄力攻擊可使蓄力時間縮短-12%，最多疊加5次。」；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | RAW 英文／繁中以同一 name hash 85a809fe 配對，名稱為 Weight of Fire／猛攻。 | 實際同一 trait key 綁定三個 lasgun_p2 Mark。 | 一致 | 不把同家族其他型號推入適用範圍。 |
| Chaining Charged Attacks | 同一描述 hash 54890a6d；繁中 RAW 作「鏈鋸蓄力攻擊」。 | 三 Mark 以 shoot_hit_scan 連段更新共享 combo_count，下一次蓄力讀目前步階。 | 術語差異 | Chaining 是連段／接續，不是鏈鋸武器；不混入數值符號勘誤。 |
| Charge Time by placeholder | RAW 說 reduces by；formatter 對 I–IV 精確輸出 −6／−8／−10／−12%。 | 負向 charge_up_time 加入蓄力時間 additive multiplier，實際使時間縮短。 | 數值符號矛盾 | 負值放在「縮短 by」之後會倒轉數值方向，列為描述勘誤。 |
| Stacks 5 times | RAW 宣稱最多五次。 | Wrapper 讀共享連段計數並 clamp 至五步，不建立五個祝福 buff instance。 | 一致但機制細節未涵蓋 | RAW 未說明 counter、動作白名單或持用條件；這是文件未涵蓋，不另判錯。 |
| 適用模式與更新時點 | RAW 未區分腰射／瞄準、特殊攻擊、裝填、切換或快取更新。 | 實際三 Mark 的腰射／ADS 蓄力與射擊入白名單；特殊攻擊離開白名單且返回射擊重置 combo。 | 文件未涵蓋 | 只按實際三個模板補充；wrapper quick 名稱在這三個模板中沒有實際 action。 |
