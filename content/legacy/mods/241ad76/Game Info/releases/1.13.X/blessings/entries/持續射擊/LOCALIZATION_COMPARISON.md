# 持續射擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_followup_shots_ranged_damage`／hash`a4047175`；描述鍵`loc_trait_bespoke_followup_shots_ranged_damage_desc`／hash`9df3457b`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Sustained Fire／持續射擊。

- 文件名稱：持續射擊(Sustained Fire)。

- 適用武器：步兵自動槍、撕裂者自動手槍、雙持自動手槍、虛空爆破力場法杖、電流力場法杖、虛空打擊力場法杖、冥潮鐳射槍、偵察鐳射槍、滅絕者霰彈槍、快拔左輪手槍；描述鍵`loc_trait_bespoke_followup_shots_ranged_damage_desc`／hash`9df3457b`。

- 英文模板：{damage:%s} Damage on Second, Third and Fourth shots in a Salvo.

- 繁中模板：齊射的第二、第三和第四發射擊增加{damage:%s}傷害。

- **靜態重建**：每級以帶「+」的百分比格式代入同一描述模板。

- I：`+14% Damage on Second, Third and Fourth shots in a Salvo.`／`齊射的第二、第三和第四發射擊增加+14%傷害。`
- II：`+16% Damage on Second, Third and Fourth shots in a Salvo.`／`齊射的第二、第三和第四發射擊增加+16%傷害。`
- III：`+18% Damage on Second, Third and Fourth shots in a Salvo.`／`齊射的第二、第三和第四發射擊增加+18%傷害。`
- IV：`+20% Damage on Second, Third and Fourth shots in a Salvo.`／`齊射的第二、第三和第四發射擊增加+20%傷害。`

以上保留本體的發數措辭；實際計數、快取與特殊模式差異另列；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 計數窗 | Second, Third and Fourth shots in a Salvo／齊射第二、第三和第四發 | base wrapper一般以num_shots 1–3判定；shotgun P4 use_combo後讀combo_count 1–3 | 大致對應 | RAW序號是一般連射語意；裝填/特殊動作/延遲命中不能一律等同固定第幾發。 |
| Tier數值 | {damage:%s}／增加{damage:%s}傷害 | tier formatter從conditional_stat_buffs.ranged_damage取.14/.16/.18/.20，百分比+格式 | 一致 | 四級為+14%/+16%/+18%/+20%。 |
| Stat map | Damage／傷害 | own tier conditional map整體覆寫base fallback；法杖wrapper的.05 charge map被替代 | 部分文件未涵蓋 | 不能將備用+20%或法杖+5%蓄力另加至own tier。 |
| 攻擊範圍 | Damage／傷害 | consumer要求attack_type=ranged或profile.count_as_ranged_attack | 條件具體化 | 爆炸attack type不自動視為ranged；須另查profile旗標。 |
| 最終結果 | Second, Third and Fourth shots／第二、第三和第四發 | ranged_damage加入共用damage bucket，後續乘算；不是最終生命值固定比例 | 條件具體化 | 算例只描述本傷害加算池，其他profile與目標因素仍會改變最終值。 |
