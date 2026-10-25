# 聚能爆發：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increased_crit_chance_bonus_based_on_charge_time`／hash`3d2ff140`；描述鍵`loc_trait_bespoke_increased_crit_chance_bonus_based_on_charge_time_desc`／hash`57a7d806`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Power Blast／聚能爆發。

- 文件名稱：聚能爆發(Power Blast)。

- 適用武器：電漿槍；描述鍵`loc_trait_bespoke_increased_crit_chance_bonus_based_on_charge_time_desc`／hash`57a7d806`。

- 英文模板：Gain between {crit_chance_min:%s} and {crit_chance_max:%s} Crit Chance based on charge level when firing.

- 繁中模板：根據射擊時的充能等級，提升{crit_chance_min:%s}至{crit_chance_max:%s}暴擊機率。

- **靜態重建**：自己的 formatter 以階級每步值乘 100 重建下限，以同值 ×5×100 重建上限；未配置 `+` 前綴。I–IV 精確代入同一組中英 RAW 模板如下：

- I：Gain between 2% and 10% Crit Chance based on charge level when firing. ／ 根據射擊時的充能等級，提升2%至10%暴擊機率。
- II：Gain between 3% and 15% Crit Chance based on charge level when firing. ／ 根據射擊時的充能等級，提升3%至15%暴擊機率。
- III：Gain between 4% and 20% Crit Chance based on charge level when firing. ／ 根據射擊時的充能等級，提升4%至20%暴擊機率。
- IV：Gain between 5% and 25% Crit Chance based on charge level when firing. ／ 根據射擊時的充能等級，提升5%至25%暴擊機率。

以上為逐級靜態字串；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | RAW 英文／繁中：Power Blast／聚能爆發；name hash 3d2ff140。 | 文件名與 RAW 一致，沿用詞表。 | 一致 | 名稱無需勘誤。 |
| 最低機率值 | RAW 描述寫 between 2/3/4/5% and 10/15/20/25% when firing；description hash 57a7d806。 | 合法未蓄力普通單發在爆擊判定時 charge_level=0，故本 trait 加成為 0pp。 | 明確矛盾 | 可發射的普通首發並非閒置狀態，實際下限低於 RAW 所寫最小值。 |
| 最大機率值 | RAW 每階 formatter 靜態重建為 I–IV 2–10/3–15/4–20/5–25%。 | 五階時 runtime 最大增量同為 +10/+15/+20/+25pp；每階按 charge step 加算。 | 一致並補充 | RAW 文字未揭露階數公式；普通直蓄滿只達兩階。 |
| 充能判定時間 | RAW 說明為 based on charge level when firing。 | 射擊開始先以當前爆擊 stat cache 判定；之後才準備射擊並更新/清除 charge。 | 一致並補充 | 後續 charge 更新不回溯修改已擲出的該發結果；cache 同影格更新時點不作超出來源的推定。 |
| 增益種類 | RAW 稱 Crit Chance／暴擊機率。 | 增加爆擊機率百分點；通用爆擊池先夾限，再可能另行機率轉傷害與 PRD。 | 一致並補充 | 不稱整次傷害增幅或保證爆擊。 |
