# 開溜：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_improved_sprint_dodge`／hash`f1dfd8b7`；描述鍵`loc_trait_bespoke_improved_sprint_dodge_desc`／hash`5b7c2d2f`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Bug Out／開溜。

- 文件名稱：開溜(Bug Out)。

- 適用武器：步兵自動槍；描述鍵`loc_trait_bespoke_improved_sprint_dodge_desc`／hash`5b7c2d2f`。

- 英文模板：{movement_speed:%s} Sprint speed for {time:%s}s after Dodging a Ranged Attack.

- 繁中模板：閃避遠端攻擊後衝刺速度{movement_speed:%s}，持續{time:%s}秒。

- **靜態重建**：每級 movement_speed 採百分比格式，時間由 wrapper 的 active_duration=1 取得；四級代入同一描述模板。

- I：`10% Sprint speed for 1s after Dodging a Ranged Attack.`／`閃避遠端攻擊後衝刺速度10%，持續1秒。`
- II：`12.5% Sprint speed for 1s after Dodging a Ranged Attack.`／`閃避遠端攻擊後衝刺速度12.5%，持續1秒。`
- III：`15% Sprint speed for 1s after Dodging a Ranged Attack.`／`閃避遠端攻擊後衝刺速度15%，持續1秒。`
- IV：`15% Sprint speed for 1s after Dodging a Ranged Attack.`／`閃避遠端攻擊後衝刺速度15%，持續1秒。`

以上保留本體措辭；III／IV 的角度效果另由實作補充；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | RAW 英文 Bug Out；繁中 開溜；name hash f1dfd8b7。 | 文件名 開溜（Bug Out）。 | 一致 | 同一 localization key 的英繁 hash 相同。 |
| 觸發方式 | RAW：after Dodging a Ranged Attack。 | 實際只在可閃避的 incoming ranged hit-scan 被判為玩家 sprint dodge、且持用條件成立後送出事件。 | 描述未細列觸發分類，不構成直接矛盾。 | 一般閃避或只開火不會送出本項事件；角度算例另列前提。 |
| 速度值 | RAW placeholder `{movement_speed:%s}`；模板沒固定寫數字。 | I 10%；II 12.5%；III 15%；IV 15%。 | 格式參數重建一致。 | tier formatter 讀取每級 proc stat 並按 percentage 格式化。 |
| 時間 | RAW `{time:%s}s`。 | wrapper active_duration=1；實際 proc stat 於 t<start+1 且持用時套用。 | 格式參數重建一致。 | 子類 .2 predicate 未進入實際 proc-stat aggregation，不把效果寫為 1.2 秒或延遲 .2 秒。 |
| III／IV 附加角度 stat | RAW 描述未列角度門檻。 | III／IV 持用時角度門檻降低 10°；I／II 沒有此項。 | 文件未涵蓋，不列勘誤。 | 此為另外的 held conditional stat，不是短暫速度效果的一部分。 |
