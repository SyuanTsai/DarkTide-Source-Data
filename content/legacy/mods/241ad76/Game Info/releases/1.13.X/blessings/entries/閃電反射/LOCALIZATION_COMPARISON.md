# 閃電反射：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_block_has_chance_to_stun`／hash`c728ed68`；描述鍵`loc_trait_bespoke_block_has_chance_to_stun_with_cd_alt_desc`／hash`060ccef7`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Lightning Reflexes／閃電反射。

- 文件名稱：閃電反射(Lightning Reflexes)。

- 適用武器：電擊錘、法務官電擊鎚、電弧鎚、法務官電擊鎚和鎮壓護盾；描述鍵`loc_trait_bespoke_block_has_chance_to_stun_with_cd_alt_desc`／hash`060ccef7`。

- 英文模板：Blocking an attack grants you {power_level:%s} Melee Strength for {duration:%s} seconds. Additionally, on Perfect Block, this also Stuns the attacker. Cooldown {cooldown_duration:%s} seconds.

- 繁中模板：成功格擋攻擊可使你獲得{power_level:%s}近戰威力，持續{duration:%s}秒。 此外，完美格擋時還能對攻擊者造成眩暈。 冷卻時間{cooldown_duration:%s}秒。

- **靜態重建**：保留同hash中英RAW，依四trait I–IV及各wrapper重建威力+10%／15%／20%／25%、期限3或5秒、敵方電擊3秒；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發 | Blocking an attack／成功格擋 | wrappercheck melee +held；WeaponExtension939–962 | 原文未列近戰限制 | 遠程格擋不觸發，破防未被排除。 |
| 威力 | {power_level:%s} Melee Strength | 四trait .10/.15/.20/.25；Buff override/stat計算 | 一致 | tier替換child預設.2，沒有額外常駐加成。 |
| 持續與冷卻 | duration/cooldown_duration | 兩format都讀child_duration，parent101–123/154–162 | 原文需釐清 | 效果維持3／5秒，期間不refresh或重觸發，之後不加另一段冷卻。 |
| 完美格擋 | Stuns attacker | wrapper specific proc → power_maul_stun847–891 | 原文未列完整消費 | 電擊3秒、隨機interval，以stun profile結算傷害與踉蹌。 |
| 機率 | Lightning Reflexes；程式名chance | proc_events value1 | 沒有額外機率 | 符合條件且未被鎖定就施加。 |
| 威力結算 | 百分比近戰威力 | PowerLevel25–92 | 不是最終HP百分比 | 威力加總後再經curve/profile及護甲。 |
