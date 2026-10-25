# 破片四濺：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_close_explosion_applies_bleed`／hash`151b51b2`；描述鍵`loc_trait_bespoke_close_explosion_applies_bleed_desc`／hash`3e470a37`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Shrapnel／破片四濺。

- 文件名稱：破片四濺(Shrapnel)。

- 適用武器：震盪槍；描述鍵`loc_trait_bespoke_close_explosion_applies_bleed_desc`／hash`3e470a37`。

- 英文模板：{stacks:%s} Bleed Stacks from close range explosions.

- 繁中模板：近距離爆炸會疊加{stacks:%s}層流血效果。

- **靜態重建**：英文名稱 Shrapnel／繁中原文 破片四濺，名稱hash 151b51b2；英文描述與繁中描述hash同為 3e470a37。description欄位顯示 tier stacks，依 fixed-SHA tier overrides 重建為 I–IV 每次命中施加1／2／3／4層；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 近距離爆炸 | 近距離爆炸會疊加{stacks:%s}層流血效果。（description key loc_trait_bespoke_close_explosion_applies_bleed_desc；hash 3e470a37） | 只在爆炸 close-hit 選用 ogryn_thumper_p1_m2_close_instant profile 時通過 wrapper gate；外圈與直接碰撞 profile 不符合。 | 一致 | 實際 gate 具體限定 close 爆炸傷害，與「近距離爆炸」一致；原文未宣稱整個爆炸半徑都可施加。 |
| 階級層數 | 描述格式欄位 {stacks:%s}；localized RAW未直接列出I–IV數字。 | tier I–IV 每次有效命中分別1／2／3／4層。 | 文件未涵蓋 | 層數由固定SHA trait tier覆寫重建，語句模板本身沒有逐階級表。 |
| 流血上限與退層 | 本體描述未說明流血stack cap、持續或tick。 | 共用bleed template cap16、duration1.5秒、interval0.5秒，滿層命中刷新；到期後逐層移除。 | 文件未涵蓋 | 說明狀態效果的共用結算，不擴大本體描述。 |
| 射擊／爆炸階段 | 本體描述未列出腰射、瞄準及直接撞擊的差異。 | 腰射及瞄準都用相同instant爆炸模板；直接接觸profile與close爆炸profile不同，首次碰撞不會立即impact-explode。 | 文件未涵蓋 | 以profile與projectile consumer區分生效階段；未把所有投射物碰撞視為爆炸命中。 |
| 持用條件與特殊動作 | 本體描述未列持用或近戰特攻條件。 | Buff wrapper要求item slot wielded；槍托近戰profile不等於所需close explosion profile。 | 文件未涵蓋 | 切出武器時條件不成立；近戰動作不符合精確傷害profile gate. |
