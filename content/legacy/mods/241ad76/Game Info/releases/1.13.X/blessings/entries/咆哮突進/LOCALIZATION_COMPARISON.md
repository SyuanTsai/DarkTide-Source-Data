# 咆哮突進：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_movement_speed_on_continuous_fire`／hash`3b53eda2`；描述鍵`loc_trait_bespoke_movement_speed_on_continuous_fire_desc`／hash`0d64e8ec`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Roaring Advance／咆哮突進。

- 文件名稱：咆哮突進(Roaring Advance)。

- 適用武器：電弧步槍、槍托自動槍、雙鏈重型機槍；描述鍵`loc_trait_bespoke_movement_speed_on_continuous_fire_desc`／hash`0d64e8ec`。

- 英文模板：{movement_speed:%s} Movement Speed Reduction for every {ammo:%s} of magazine spent during continuous fire. Stacks {stacks:%s} times.

- 繁中模板：持續射擊期間，每消耗{ammo:%s}彈藥，移動速度降低{movement_speed:%s}，最多疊加{stacks:%s}層。

- **靜態重建**：依據實際四級 formatter 的百分比轉換與負號前綴，將 I–IV 代入 RAW 模板：

| 等級 | English（槍托自動槍） | 繁體中文（槍托自動槍） | English（重型機槍） | 繁體中文（重型機槍） |
|---|---|---|---|---|
| I | -10% Movement Speed Reduction for every 5% of magazine spent during continuous fire. Stacks 5 times. | 持續射擊期間，每消耗5%彈藥，移動速度降低-10%，最多疊加5層。 | -7% Movement Speed Reduction for every 5% of magazine spent during continuous fire. Stacks 5 times. | 持續射擊期間，每消耗5%彈藥，移動速度降低-7%，最多疊加5層。 |
| II | -15% Movement Speed Reduction for every 5% of magazine spent during continuous fire. Stacks 5 times. | 持續射擊期間，每消耗5%彈藥，移動速度降低-15%，最多疊加5層。 | -8% Movement Speed Reduction for every 5% of magazine spent during continuous fire. Stacks 5 times. | 持續射擊期間，每消耗5%彈藥，移動速度降低-8%，最多疊加5層。 |
| III | -20% Movement Speed Reduction for every 5% of magazine spent during continuous fire. Stacks 5 times. | 持續射擊期間，每消耗5%彈藥，移動速度降低-20%，最多疊加5層。 | -9% Movement Speed Reduction for every 5% of magazine spent during continuous fire. Stacks 5 times. | 持續射擊期間，每消耗5%彈藥，移動速度降低-9%，最多疊加5層。 |
| IV | -25% Movement Speed Reduction for every 5% of magazine spent during continuous fire. Stacks 5 times. | 持續射擊期間，每消耗5%彈藥，移動速度降低-25%，最多疊加5層。 | -10% Movement Speed Reduction for every 5% of magazine spent during continuous fire. Stacks 5 times. | 持續射擊期間，每消耗5%彈藥，移動速度降低-10%，最多疊加5層。 |

各級使用相同描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 本體名稱 | Roaring Advance／咆哮突進（`loc_trait_bespoke_movement_speed_on_continuous_fire`，hash `3b53eda2`） | 同一資源的英文與繁中名稱配對相符 | localized_keys.json；primary-ui-raw-verification.json | 名稱無差異 |
| 四級數值與格式 | RAW 英文／繁中均使用 movement_speed、ammo、stacks 三個格式鍵；movement_speed 的 formatter 加上負號前綴後，槍托自動槍 I–IV 顯示 -10%／-15%／-20%／-25%，雙鏈重型機槍顯示 -7%／-8%／-9%／-10%。 | 三種實作的 tier 自訂百分比轉換、負號前綴與固定 5%／5 層字串按實際格式器重建；百分比轉換不再重乘 100。 | 三個 weapon_traits_bespoke_*.lua 的 tier block；Buff._calculate_stat_buffs | RAW 靜態重建保留 formatter 的負號；負號不改變程式按餘量倍率削弱既有減速的結論，不判為增速／減速矛盾。 |
| 射擊門檻 | 文字寫每彈匣 5% 消耗與最多 5 層，沒有寫出以最大容量計算、floor與最小一發。 | 程式以 `max(1,floor(M×0.05))` 作門檻；ActionShoot 在首發登記計數，命中判定不是條件。 | movement_speed_continuous_fire_step_func；ActionShoot._update；continuous fire step | RAW 未包含精確邊界公式，屬文件未涵蓋，不判確定矛盾。 |
| 效果含義 | RAW稱 Movement Speed Reduction，formatter對剩餘倍率加負號 | 兩個 tier stat 都乘減速幅度；不直接提高全局移動速度，五層按倍率連乘 | AlternateFire.movement_speed_modifier；WeaponActionMovement.move_speed_modifier | 文字不足以呈現具體兩個consumer，完整差異由玩家說明補足；不判RAW與程式互相矛盾 |
| 停火、持用與重新裝填 | RAW未指定持用槽、reload step、spread timer或刷新時點 | 持用 slot 條件；reload step為0；停火後依目前spread的strict `>` clear gate重置共用計數 | is_item_slot_wielded；fire_step_func；PlayerUnitWeaponExtension.fixed_update | 屬文件未涵蓋的執行細節 |
