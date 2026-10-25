# 快速裝填：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 令 `p` 為本級 Quickloader 加成（I／II／III／IV 為 0.10／0.125／0.15／0.20），`q` 為同一時點其他 `reload_speed` 加成的合計，`T₀` 為同型號、同一裝填動作、相同 handling 與 `q` 下不含 Quickloader 的動作時間。假設效果在開始裝填時計入、其他時間倍率不變，且沒有時間倍率上限介入：

  `reload_speed stat = 1 + q + p`

  `T₁ = T₀ × (1 + q) ÷ (1 + q + p)`

- 當 `q=0` 時，I／II／III／IV 的裝填時間比例依序為 `1/1.10=90.91%`、`1/1.125=88.89%`、`1/1.15=86.96%`、`1/1.20=83.33%`。這些是相對於基準裝填時間的結果，不是本祝福顯示的裝填速度百分比。

- 固定 Release 1.13.1／來源 SHA 的 trait、wrapper、ProcBuff、Buff 覆寫、玩家閃避事件、三型號 UI 接線及 RAW key/hash 已交叉核對。

- 原文描述「閃避後」但未細分事件開始與成功躲避；程式用進入閃避狀態時送出的事件，故列為文件未涵蓋，而非明確矛盾。

- RAW 的百分比可由 trait tier formatter 精確重建；重建字串不是遊戲畫面擷取。

- 實際 trait item 的 icon 與 icon_small 均為空，原始公開 MasterItems 另確認 mastery_icon 也為空。圖示仍未驗證；使用者已核准本項以無可核對圖示說明及精確缺口證據完成文件，不上傳或替代不存在的來源圖片。
