# 恐怖阻擊：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_suppression_on_close_kill`／hash`1978bbc9`；描述鍵`loc_trait_bespoke_suppression_on_close_kill_desc`／hash`9bf6f6a0`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Terrifying Barrage／恐怖阻擊。

- 文件名稱：恐怖阻擊(Terrifying Barrage)。

- 適用武器：步兵自動槍、槍托自動槍、撕裂者自動手槍、矛頭爆矢槍、雙持自動手槍、虛空爆破力場法杖、烈焰力場法杖、電流力場法杖、虛空打擊力場法杖、撕裂槍、反衝者、惡棍槍、戰鬥霰彈槍、雙管霰彈槍、獵人霰彈槍、快拔左輪手槍；描述鍵`loc_trait_bespoke_suppression_on_close_kill_desc`／hash`9bf6f6a0`。

- 英文模板：Suppress Enemies within {range:%s} Radius on Close Range Kill.

- 繁中模板：近戰擊殺後，壓制{range:%s}範圍內的敵人。

- **靜態重建**：依 `range` rarity formatter 靜態代入；英文／繁中句型與原 RAW 相同，並非遊戲畫面擷取。
- I (`range="5m"`)：Suppress Enemies within 5m Radius on Close Range Kill.
  繁中：近戰擊殺後，壓制5m範圍內的敵人。
- II (`range="6m"`)：Suppress Enemies within 6m Radius on Close Range Kill.
  繁中：近戰擊殺後，壓制6m範圍內的敵人。
- III (`range="7m"`)：Suppress Enemies within 7m Radius on Close Range Kill.
  繁中：近戰擊殺後，壓制7m範圍內的敵人。
- IV (`range="8m"`)：Suppress Enemies within 8m Radius on Close Range Kill.
  繁中：近戰擊殺後，壓制8m範圍內的敵人。

各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| I–IV 顯示距離與實際抑制半徑 | 同一描述鍵 9bf6f6a0 的英文／繁中 RAW 均使用 `{range:%s}`；formatter 靜態代入 5m／6m／7m／8m。 | `weapon_traits_bespoke_autogun_p1.lua:312–321`；實際 `suppression_settings.distance=12` 見同檔 `328–357`，其餘十五變體相同。 | 矛盾（中英數值半徑） | 英文與繁中均顯示 5m／6m／7m／8m，與實際區域半徑 12m 不一致。 |
| 繁中觸發詞 | 英文為 Close Range Kill；繁中 RAW 為「近戰擊殺後」。 | check_proc_functions.lua:306–330；action_sweep.lua:1495–1505。 | 繁中用語勘誤 | 本祝福不接受 melee/push 攻擊；此處應理解為近距離擊殺，不能照繁中「近戰」用詞推成近戰武器擊殺。 |
| 距離／攻擊類型條件 | 英文只寫 Close Range Kill；繁中未列距離或允許 attack type。 | check_proc_functions.lua:306–330,777–792；damage_settings.lua:18–27。 | 文件未涵蓋 | 實作要求死亡、ranged／count_as_ranged_attack profile 或 explosion，並以事件處理時命中位置至攻擊者位置判斷不超過12.5m；RAW未給距離值或攻擊類型限制。 |
| Suppression 強度與接收結果 | RAW 未列 suppression_value、instant aggro、falloff 或 target receiver 條件。 | weapon_traits_bespoke_autogun_p1.lua:328–357；suppression.lua:87–154；minion_suppression_extension.lua:107–165,242–303。 | 文件未涵蓋 | I–IV suppression value 為15／20／25／30；目標仍依自身啟用、免疫、allowed type、LoS、meter cap、threshold與decay規則處理。 |
| 再觸發與掩體副效 | RAW 未描述 ProcBuff 再觸發 gate 或掩體副效。 | base_weapon_trait_buff_templates.lua:1442–1461；proc_buff.lua:173–185,304–355；suppression.lua:79–85,129–150。 | 文件未涵蓋 | 1.5秒為本祝福再觸發 gate，不是 enemy suppression TTL；區域內小於6m且有 cover extension 時可能釋出掩體位置3–8秒。 |
