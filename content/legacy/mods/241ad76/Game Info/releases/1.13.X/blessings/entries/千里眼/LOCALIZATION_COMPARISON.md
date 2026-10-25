# 千里眼：本體原文逐規則比較

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- Steam Build25606770（1.13.1），2026-10-02擷取，資源`content/localization/items`。

- 名稱鍵`loc_trait_bespoke_increased_zoom`／hash`215f8d62`；描述鍵`loc_trait_bespoke_increased_zoom_desc`／hash`ecd1c7e6`。

- 英文／繁中以同一資源與hash精確配對，完整RAW SHA-256：`c0719a6933c4f3d472a569a8ec841df819eb1b1a03d09d83c5cee05a2a861026`。

- 本體名稱：Telescopic Sight／千里眼。

- 文件名稱：千里眼(Telescopic Sight)。

- 適用武器：步兵鐳射槍；描述鍵`loc_trait_bespoke_increased_zoom_desc`／hash`ecd1c7e6`。

- 英文模板：Increased Scope Zoom

- 繁中模板：遠端瞄準

- **靜態重建**：固定描述不含數值佔位符；trait formatter 雖以 percentage 讀取 fov_multiplier＝0.85，這個 85% 格式值沒有欄位可代入該描述。四級靜態重建因此相同：

- **I 級**：EN Increased Scope Zoom／繁中 遠端瞄準。

- **II 級**：EN Increased Scope Zoom／繁中 遠端瞄準。

- **III 級**：EN Increased Scope Zoom／繁中 遠端瞄準。

- **IV 級**：EN Increased Scope Zoom／繁中 遠端瞄準。

以上為逐級相同的靜態字串；依格式參數重建，並非遊戲畫面。

| 規則 | 本體／既有文件描述與位置 | 程式行為與檔案／方法／行號 | 比較結果 | 理由 |
|---|---|---|---|---|
| 名稱 | RAW 英文／繁中：Telescopic Sight／千里眼；hash 215f8d62。 | 三個實際綁定名稱依 family、pattern、mark localization IDs 組成。 | 一致 | 英繁中同 hash；沿用本體繁中名。 |
| 描述 | RAW 英文 Increased Scope Zoom；繁中 遠端瞄準；hash ecd1c7e6。 | 實際效果為持用且進入替代瞄準時啟用視角乘數。 | 定性相符 | RAW 未列階級、型號或觸發條件，屬文件未涵蓋，並非矛盾。 |
| 格式器 | 描述沒有 `{...}` 數值佔位符。 | trait formatter 以 percentage 讀 tier override `fov_multiplier`。 | 靜態字串不變 | 格式器數值不會代入不含佔位符的描述。 |
| 階級數值 | RAW 名稱與描述在四級相同。 | I–IV 均為 0.85；wrapper .95 同鍵備用值被 tier 覆寫。 | runtime 補充 | 同鍵值不疊乘；四級沒有數值差異。 |
| 相機計算 | RAW 只稱增加 scope zoom，沒有角度公式。 | 三個已核對型號的 ADS 輸入垂直視角為 45°；ADS 取樣前次與目前乘數。 | 技術補充 | 32.5125° 僅在列明前提下成立，不是 RAW 錯誤或遊戲實測。 |
| 動作與退出 | RAW 未逐項列射擊、特殊動作或切換規則。 | 腰射不進入替代瞄準；瞄準射擊／瞄準中特殊輸入留在 zoom 路徑；unaim／unwield 停止替代瞄準。 | 文件未涵蓋 | 按實際型號動作表補充，不把省略列為矛盾。 |
