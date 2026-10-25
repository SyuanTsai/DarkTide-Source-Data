# 狂轟猛炸：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_explosion_radius_bonus_on_continuous_fire`／hash`d72f3677`；描述鍵`loc_trait_bespoke_explosion_radius_bonus_on_continuous_fire_desc`／hash`a8764734`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Blast Zone／狂轟猛炸。

- 文件名稱：狂轟猛炸(Blast Zone)。

- 適用武器：震盪槍；描述鍵`loc_trait_bespoke_explosion_radius_bonus_on_continuous_fire_desc`／hash`a8764734`。

- 英文模板：{radius:%s} Explosion Radius for every shot fired during continuous fire. Stacks {stacks:%s} times.

- 繁中模板：連續射擊時，每發射擊可增加{radius:%s}的爆炸範圍，可疊加{stacks:%s}層。

- **靜態重建**：formatter 從本 trait 的 stat_buffs.explosion_radius_modifier 讀取當級值，以百分比及 + 前綴重建 I–IV 的 +3%／+4%／+5%／+6%；stacks 固定填入字串 5。兩語描述同樣表示連續射擊的半徑加成與最多五層，未列出的起手、重設、引爆讀值時點屬文件未涵蓋；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | RAW: Blast Zone／狂轟猛炸；hash d72f3677 | 兩語 RAW 名稱鍵/hash 相同 | 一致 | 沿用同 hash 名稱。 |
| 連續射擊觸發 | RAW: every shot fired during continuous fire | 以combo_count計階；一般手動idle起手歸零，瞄準射擊keep_combo_on_start=true會保留起手count再遞增，其他運行中chain依實際規則。 | 文件未涵蓋 | RAW未述一般與瞄準起手差異、重設及連接窗口；依實際action補充，非翻譯勘誤。 |
| 數值 placeholder | RAW: {radius:%s}、{stacks:%s} | formatter 讀 tier override 百分比，prefix +，固定字串 5 | 一致 | I–IV 每階3/4/5/6%，最多五階；tier覆寫備用值。 |
| 半徑結算 | RAW: Explosion Radius | consumer 對 radius 與 close_radius 乘 modifier；Rumbler 保留既有 damage falloff/profiles | 文件未涵蓋 | 不得寫成傷害增幅百分比。 |
| 攻擊範圍 | RAW 未分一般、瞄準、特殊或直擊 | hipfire/brace兩 projectile 爆炸適用；直擊 profile與 melee bash分開 | 文件未涵蓋 | 無明確語言矛盾。 |
