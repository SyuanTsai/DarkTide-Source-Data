# 懲罰齊射：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_followup_shots_ranged_weakspot_damage`／hash`dbf6f0e3`；描述鍵`loc_trait_bespoke_followup_shots_ranged_weakspot_damage_desc`／hash`2542f790`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Punishing Salvo／懲罰齊射。

- 文件名稱：懲罰齊射(Punishing Salvo)。

- 適用武器：步兵自動槍、偵察鐳射槍、滅絕者霰彈槍；描述鍵`loc_trait_bespoke_followup_shots_ranged_weakspot_damage_desc`／hash`2542f790`。

- 英文模板：{damage:%s} Weakspot Damage on Second, Third and Fourth shots in a Salvo.

- 繁中模板：齊射的第二、第三和第四發射擊增加{damage:%s}弱點傷害。

- **靜態重建**：三種實作均由本級 trait override 取值，百分比 formatter 乘100並加正號。逐級靜態重建如下：

- **I級**：英文 +35% Weakspot Damage on Second, Third and Fourth shots in a Salvo.；繁中 齊射的第二、第三和第四發射擊增加+35%弱點傷害。

- **II級**：英文 +40% Weakspot Damage on Second, Third and Fourth shots in a Salvo.；繁中 齊射的第二、第三和第四發射擊增加+40%弱點傷害。

- **III級**：英文 +45% Weakspot Damage on Second, Third and Fourth shots in a Salvo.；繁中 齊射的第二、第三和第四發射擊增加+45%弱點傷害。

- **IV級**：英文 +50% Weakspot Damage on Second, Third and Fourth shots in a Salvo.；繁中 齊射的第二、第三和第四發射擊增加+50%弱點傷害。

以上為逐級靜態字串；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 等級數值 | {damage:%s} | own conditional .35/.40/.45/.50取代fallback .20；formatter＋百分比 | 一致 | 三實作各四級相同。 |
| 射擊序號 | Second, Third and Fourth shots／第二、第三和第四發 | Auto/Las讀num_shots；P4讀combo_count1–3 | 實作例外 | P4特定轉場首殼可為count1並在末批受益；不是所有模式固定2–4。 |
| 弱點效果 | Weakspot Damage／弱點傷害 | ranged且hit_weakspot；合併精準額外部分乘同類係數 | 語意需釐清；文件未涵蓋 | 不是整筆傷害增幅；精準額外段含合併後爆擊部分。 |
| 清除、切換 | RAW未列計數清除與持用條件 | held gate；Auto/Las spread清除、P4行動連擊清除 | 文件未涵蓋 | 沒有獨立TTL或hit疊層；條件在下一次Buff更新反映。 |
| 同類修正 | RAW未列與同類係數的運算 | W×(1＋q＋r) | 文件未涵蓋 | 同類係數相加，算例區分相對增幅與總傷害。 |
