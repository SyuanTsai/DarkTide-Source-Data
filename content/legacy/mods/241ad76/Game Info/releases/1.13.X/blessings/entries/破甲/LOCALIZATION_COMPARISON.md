# 破甲：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_infinite_armor_cleave_on_activated_attacks`／hash`c2ba97f2`；描述鍵`loc_trait_bespoke_infinite_armor_cleave_on_activated_attacks_and_heavy_damage_desc`／hash`a0176d3c`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Sunder／破甲。

- 文件名稱：破甲(Sunder)。

- 適用武器：動力劍、機械神教動力劍；描述鍵`loc_trait_bespoke_infinite_armor_cleave_on_activated_attacks_and_heavy_damage_desc`／hash`a0176d3c`。

- 英文模板：Increased Cleave and {heavy_damage:%s} Heavy Melee Attack Damage on Energised Attacks.

- 繁中模板：充能攻擊會提高順劈攻擊傷害，且近戰重擊傷害{heavy_damage:%s}。

- **靜態重建**：依 RAW 格式參數靜態重建 `{heavy_damage:%s}`；P1 斯干達 Mk III／阿克利斯 Mk VI 與 P3 布蘭克斯 Mk VI 使用各自 own tier 數值。

- P1 I：Increased Cleave and +5% Heavy Melee Attack Damage on Energised Attacks.／充能攻擊會提高順劈攻擊傷害，且近戰重擊傷害+5%。
- P1 II：Increased Cleave and +10% Heavy Melee Attack Damage on Energised Attacks.／充能攻擊會提高順劈攻擊傷害，且近戰重擊傷害+10%。
- P1 III：Increased Cleave and +15% Heavy Melee Attack Damage on Energised Attacks.／充能攻擊會提高順劈攻擊傷害，且近戰重擊傷害+15%。
- P1 IV：Increased Cleave and +20% Heavy Melee Attack Damage on Energised Attacks.／充能攻擊會提高順劈攻擊傷害，且近戰重擊傷害+20%。
- P3 I：Increased Cleave and +4% Heavy Melee Attack Damage on Energised Attacks.／充能攻擊會提高順劈攻擊傷害，且近戰重擊傷害+4%。
- P3 II：Increased Cleave and +6% Heavy Melee Attack Damage on Energised Attacks.／充能攻擊會提高順劈攻擊傷害，且近戰重擊傷害+6%。
- P3 III：Increased Cleave and +8% Heavy Melee Attack Damage on Energised Attacks.／充能攻擊會提高順劈攻擊傷害，且近戰重擊傷害+8%。
- P3 IV：Increased Cleave and +10% Heavy Melee Attack Damage on Energised Attacks.／充能攻擊會提高順劈攻擊傷害，且近戰重擊傷害+10%。

各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 順劈的描述與作用範圍 | 英文 RAW 為 `Increased Cleave`；繁中 RAW 為「提高順劈攻擊傷害」。 | 實際效果是略過護甲中止並降低合資格目標受擊質量；近戰重擊另由傷害修正鍵提供數值加成。 | 文件未涵蓋 | 英文對應穿透能力；繁中用詞未區分穿透與傷害，不能據此推定所有輕擊另有直接傷害加成。原文沒有列出質量比例或各種中止邊界，本文依實作補足，無須將含糊措辭列成明確實作矛盾。 |
| 同描述鍵／hash：{heavy_damage:%s}／「近戰重擊傷害」 | P1/P3 自有等級格式化器 296–335、233–272 讀取 melee_heavy_damage；DamageCalculation 303–315、582–615 組裝傷害修正池與後續乘區 | 數值只加入近戰攻擊且傷害設定的攻擊強度為重擊時的修正池；各級自有值取代基礎模板的 .05 條件後備值 | 一致 | 輕斬、純推擊與非重擊強度的 profile 不符合此傷害條件；算例需固定其他修正與下游乘數，不能當作最終命中傷害的保證增幅。 |
| 同描述鍵／hash：on Energised Attacks／「充能攻擊」 | base template 1193–1204 以持用欄位和該欄位 special_active 同時控制條件；ConditionalFunctions 43–60、134–149 讀取這兩個狀態 | 描述中的 Energised 條件由持用適用武器且其特殊狀態生效來實作 | 一致 | P1 與 P3 的原生特殊時限、充能和切槽行為不同，詳見相應型號來源。 |
| 同描述鍵／hash：單一 {heavy_damage:%s} 參數未逐級列出數值 | 兩個實際 variants 各有自有等級與 wrapper；P1 為 5/10/15/20%，P3 為 4/6/8/10%，各級數值取代基礎後備值 | 英繁中模板未列出各武器系列的 I–IV 數值及後備值取代方式 | 文件未涵蓋 | 依兩組實際自有等級與格式化器重建靜態等級數值。 |
| 同描述鍵／hash：未列出推擊、推擊後追擊或各特殊動作的攻擊設定 | P1 兩個實際型號的動作圖與 P3 八條特殊動作至有效攻擊設定的連線、六個特殊攻擊設定 | 純推擊為 push；推擊後追擊為 sweep，但是否套用重擊加成仍取決於實際攻擊強度；仍須特殊狀態生效 | 文件未涵蓋 | 動作範圍來自固定版本來源；RAW 沒有列出每種輸入對應的攻擊設定。 |
