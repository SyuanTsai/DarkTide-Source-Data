# 撕扯震盪：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_rend_armor_on_aoe_charge`／hash`8af2f9ee`；描述鍵`loc_trait_bespoke_rend_armor_on_aoe_charge_desc`／hash`dcca8f09`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Rending Shockwave／撕扯震盪。

- 文件名稱：撕扯震盪(Rending Shockwave)。

- 適用武器：虛空爆破力場法杖；描述鍵`loc_trait_bespoke_rend_armor_on_aoe_charge_desc`／hash`dcca8f09`。

- 英文模板：Target receives up to {stacks:%s} Stacks of {rending:%s} Brittleness, scaling with charge time of Secondary Attack. Debuff lasts for {time:%s} seconds and can have a maximum of {max_stacks:%s} stacks.

- 繁中模板：根據次要攻擊蓄力時間長短，使目標疊加最高{stacks:%s}層{rending:%s}脆弱。減益效果最高疊加{max_stacks:%s}層，持續{time:%s}秒。

- **靜態重建**：以下使用同一 RAW 資源／hash 的 placeholders，依完整 I–IV 覆寫與實際 trait formatter 靜態代入；不是遊戲畫面擷取。
- I 級英文：Target receives up to 2 Stacks of 2.5% Brittleness, scaling with charge time of Secondary Attack. Debuff lasts for 5 seconds and can have a maximum of 16 stacks.
- I 級繁中：根據次要攻擊蓄力時間長短，使目標疊加最高2層2.5%脆弱。減益效果最高疊加16層，持續5秒。
- II 級英文：Target receives up to 4 Stacks of 2.5% Brittleness, scaling with charge time of Secondary Attack. Debuff lasts for 5 seconds and can have a maximum of 16 stacks.
- II 級繁中：根據次要攻擊蓄力時間長短，使目標疊加最高4層2.5%脆弱。減益效果最高疊加16層，持續5秒。
- III 級英文：Target receives up to 6 Stacks of 2.5% Brittleness, scaling with charge time of Secondary Attack. Debuff lasts for 5 seconds and can have a maximum of 16 stacks.
- III 級繁中：根據次要攻擊蓄力時間長短，使目標疊加最高6層2.5%脆弱。減益效果最高疊加16層，持續5秒。
- IV 級英文：Target receives up to 8 Stacks of 2.5% Brittleness, scaling with charge time of Secondary Attack. Debuff lasts for 5 seconds and can have a maximum of 16 stacks.
- IV 級繁中：根據次要攻擊蓄力時間長短，使目標疊加最高8層2.5%脆弱。減益效果最高疊加16層，持續5秒。；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 效果觸發與蓄力縮放 | RAW：目標依 Secondary Attack 蓄力時間取得 up to {stacks} Stacks；描述鍵 loc_trait_bespoke_rend_armor_on_aoe_charge_desc。 | wrapper 27–77 監聽 on_hit，檢查持用物品、攻擊物品與 live action_trigger_explosion；proc 用 round(charge_level × num_stacks_on_proc)。 | 一致；程式只在受擊事件處理時套用，蓄力中不先加層。 | 次要蓄力的實際動作、事件 charge_level 與 own tier 上限均有固定來源證據。 |
| 每層脆弱值 | RAW placeholder {rending}；英文 Brittleness，繁中脆弱。 | rending_debuff.stat_buffs.rending_multiplier=0.025；stat 類型 additive_multiplier，Buff 按層數逐次累加。 | 四級靜態重建均為每層 2.5%；沒有額外隱藏乘數。 | formatter 從全域 Buff template 取值並用 percentage 格式；每層是目標 stat 增量。 |
| 目標最大層數與期限 | RAW placeholders {max_stacks} 與 {time}。 | 全域 rending_debuff 設 max_stacks=16、max_stacks_cap=16、duration=5、refresh_duration_on_stack=true。 | 一致；疊層會刷新 5 秒，達16層正數請求不再加層但仍刷新。 | wrapper 存的 max_stacks=31 未傳入實際目標 Buff，不覆蓋全域16層上限。 |
| 同次爆炸傷害與新增脆弱 | RAW 未說明傷害結算先後。 | Attack 先執行 DamageCalculation／處理本次傷害，後排 on_hit；Buff 事件稍後處理並對目標加層。 | 原文未涵蓋此時序，非明確矛盾。 | 本次新加值不追溯影響施加它的 hit；目標原有脆弱仍參與先前傷害計算。 |
| 傷害含義與武器範圍 | RAW 稱 target receives Brittleness，未承諾整體傷害百分比，也未列各動作名稱。 | DamageCalculation 把 target rending 與其他因子合併並依護甲／傷害 profile 計算；實際 binding 僅 Force Staff P1 Mk III。 | 沒有整體傷害百分比可對照；文件不涵蓋非觸發動作細節。 | 按 target stat consumer 描述，不將每層2.5%誤寫成整次傷害提升。 |
| 延遲命中與零層數 | RAW 以次要蓄力敘述一般觸發，未描述排隊處理的當前動作檢查。 | wrapper在事件處理時看live action；實際primary impact與四種special sweep的charge=1，push=nil→0。 | 文件未涵蓋這個時序例外；不宣稱已實測重現，也不稱為誤譯。 | 符合當前持用/攻擊物品/爆炸動作且正數層數才可加層；零請求不刷新。 |
