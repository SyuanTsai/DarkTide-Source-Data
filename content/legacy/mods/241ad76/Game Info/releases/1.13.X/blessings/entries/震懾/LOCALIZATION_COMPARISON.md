# 震懾：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_hit_mass_consumption_reduction_on_kill`／hash`60f2b6ce`；描述鍵`loc_trait_bespoke_hit_mass_consumption_reduction_on_kill_desc`／hash`5fa04ac9`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Shock & Awe／震懾。

- 文件名稱：震懾(Shock & Awe)。

- 適用武器：碎骨者、骨鋸、雷鎚；描述鍵`loc_trait_bespoke_hit_mass_consumption_reduction_on_kill_desc`／hash`5fa04ac9`。

- 英文模板：{hit_mass:%s} Enemy Hit Mass for {time:%s}s on Kill.

- 繁中模板：擊殺後使敵人的順劈抗性降低{hit_mass:%s}，持續{time:%s}秒。

- **靜態重建**：名稱鍵 loc_trait_bespoke_hit_mass_consumption_reduction_on_kill hash 為 60f2b6ce；描述鍵 loc_trait_bespoke_hit_mass_consumption_reduction_on_kill_desc hash 為 5fa04ac9。locale 0/16 同鍵 hash 配對一致。三個 own formatter（weapon_trait_bespoke_ogryn_hammer_2h_p1_hit_mass_consumption_reduction_on_kill、weapon_trait_bespoke_saw_p1_hit_mass_consumption_reduction_on_kill、weapon_trait_bespoke_thunderhammer_2h_p1_hit_mass_consumption_reduction_on_kill）逐一核對，均使用 I–IV modifier 0.70／0.60／0.50／0.40 及 3 秒時間；三者各級輸出相同，集中列於下表。

| 等級 | 英文靜態輸出 | 繁中靜態輸出 |
|---|---|---|
| I | -30% Enemy Hit Mass for 3s on Kill. | 擊殺後使敵人的順劈抗性降低-30%，持續3秒。 |
| II | -40% Enemy Hit Mass for 3s on Kill. | 擊殺後使敵人的順劈抗性降低-40%，持續3秒。 |
| III | -50% Enemy Hit Mass for 3s on Kill. | 擊殺後使敵人的順劈抗性降低-50%，持續3秒。 |
| IV | -60% Enemy Hit Mass for 3s on Kill. | 擊殺後使敵人的順劈抗性降低-60%，持續3秒。 |

這是依固定版本 formatter、RAW 與 own tier 覆寫重建的靜態文字，不是遊戲截圖。formatter 的 literal stacks=5 沒有對應 RAW {stacks} placeholder，不會顯示，也不代表 runtime 有五層；三 wrapper 維護單一三秒計時效果。

各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| I–IV 質量修正與 RAW 負號 | 描述鍵 hash 5fa04ac9 使用 {hit_mass:%s}；locale 0/16 同鍵配對。 | 三 own I–IV 均為 0.70／0.60／0.50／0.40；formatter 重建負向百分比。 | 英文負號與降低一致；繁中「降低-30%」方向矛盾。 | 目標質量消耗相對減少 30%／40%／50%／60%；繁中應避免「降低」後的額外負號。 |
| Enemy Hit Mass／順劈抗性所指效果 | RAW 分別寫 Enemy Hit Mass 與敵人的順劈抗性；沒有提到傷害或目標數。 | consumed_hit_mass_modifier 乘在 HitMass.target_hit_mass；弱點與遠程因素另行修正。 | 文件未涵蓋 | 程式支持質量預算影響；不把 RAW 詞語解讀成傷害變化、固定多命中數或無限順劈。 |
| 擊殺事件條件 | RAW 說 on Kill，沒有列 item、held slot 或封包條件。 | wrapper 訂閱 on_hit，檢查 attacking_item 相符、attack_result=died，並要求祝福武器欄位持握；無目標種類篩選。 | 文件未涵蓋 | 需合格 on_hit 封包、相符武器和死亡結果；不把 RAW 未列出的 gate 判為矛盾。 |
| 3 秒、刷新與層數 | RAW 有 {time:%s}，沒有 {stacks} placeholder。 | active_duration=3、允許 active 時再次 proc、無 cooldown/max_stacks；成功時刷新單一 active_start_time。 | 3 秒一致；刷新與層數文件未涵蓋 | 最後一次合格 proc 後 3 秒到期；中途合格 proc 刷新單一計時。literal 5 不顯示且不代表五層。 |
| 一般、蓄力、推擊、特殊及獨立傷害 | RAW 沒有列招式、特殊模式、投擲或額外傷害路徑。 | 四 Mark 的輕重擊、連段／推擊後續與特殊 sweep 接入 sweep；純 push attack=0，骨鋸 delayed rip 設 skip_on_hit_proc=true。 | 文件未涵蓋 | 各攻擊須各自送出合格封包；純推擊本身不能生命擊殺觸發，骨鋸 rip 擊殺不觸發。 |
