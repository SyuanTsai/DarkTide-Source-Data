# 兇狠切割：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increase_stagger_per_hit_in_sweep`／hash`c20ffbce`；描述鍵`loc_trait_bespoke_increase_stagger_per_hit_in_sweep_desc`／hash`7b8e9296`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Vicious Slice／兇狠切割。

- 文件名稱：兇狠切割(Vicious Slice)。

- 適用武器：「惡魔之爪」劍；描述鍵`loc_trait_bespoke_increase_stagger_per_hit_in_sweep_desc`／hash`7b8e9296`。

- 英文模板：{impact:%s} Impact to Target for each Enemy already Hit by the same Attack

- 繁中模板：每個被同一次攻擊命中的敵人都會使你對目標造成的衝擊力提高{impact:%s}。

- **靜態重建**：原文占位符與本祝福的 format_values、percentage 格式及 + 前綴逐級重建：

- I 級：EN +14% Impact to Target for each Enemy already Hit by the same Attack；繁中 每個被同一次攻擊命中的敵人都會使你對目標造成的衝擊力提高+14%。
- II 級：EN +16% Impact to Target for each Enemy already Hit by the same Attack；繁中 每個被同一次攻擊命中的敵人都會使你對目標造成的衝擊力提高+16%。
- III 級：EN +18% Impact to Target for each Enemy already Hit by the same Attack；繁中 每個被同一次攻擊命中的敵人都會使你對目標造成的衝擊力提高+18%。
- IV 級：EN +20% Impact to Target for each Enemy already Hit by the same Attack；繁中 每個被同一次攻擊命中的敵人都會使你對目標造成的衝擊力提高+20%。

各級使用同一描述句型；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 觸發範圍 | 英文／繁中描述：每個「同一次攻擊中已命中」的敵人增加衝擊；本體同一 localization key/hash。 | combatsword_p1 wrapper 定義 singular specific_check_proc_func；ProcBuff 318–341 只讀 plural specific_check_proc_funcs，而 on-hit 仍由 parent 批次計數。 | 明確矛盾 | runtime 不執行原定 item-match 與 sweep-active 檢查；持用 gate 仍存在，因此已處理命中事件的範圍較 RAW 描述廣。 |
| 等級數值 | RAW {impact:%s}；定位於 loc_trait_bespoke_increase_stagger_per_hit_in_sweep_desc。 | Own tier I–IV melee_impact_modifier 為 .14/.16/.18/.20；formatter 取同一 override 並用 percentage 與 + 前綴。 | 一致 | 固定來源 formatter 可逐級重建 +14%/+16%/+18%/+20%；RAW 沒有另寫五層總額。 |
| 作用階段 | RAW 稱 Impact to Target，繁中稱對目標造成的衝擊力。 | Buff 只把 child conditional melee_impact_modifier 替換為 tier 值並按有效 child stack 聚合；近戰 StaggerCalculation 讀取此 modifier。 | 一致 | 增加踉蹌計算的衝擊輸入，不是生命傷害倍率，也不能保證特定目標踉蹌。 |
| 橫掃界線 | RAW 指 same Attack；未交代刷新/清層時點。 | 父模板在 sweep-start 與 sweep-finish proc-event 清 child；同批處理先加後清。 | 文件未涵蓋 | 原文沒有描述事件佇列與 sweep 邊界；程式錯鍵另造成上方明確觸發範圍差異。 |
| 期限與冷卻 | RAW 未提 child timer 或冷卻。 | own wrapper 無 child_duration、child_duration_after_remove 或 cooldown；ProcBuff 無 cooldown 時允許啟動。 | 文件未涵蓋 | 額外層不按秒到期，靠 sweep-start/finish 清除；不要套用其他祝福的期限。 |
