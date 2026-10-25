# 堅定打擊：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `T` 為當下計算出的最大韌性，`M` 為目前缺少韌性，`p` 為此實作與等級的 `toughness_fixed_percentage`。在韌性恢復未被狀態停用時，本次實際回復為 `min(M, T × p)`；若狀態停用，結果為 0。基礎模板以 `ignore_stat_buffs=true` 呼叫，因此不再乘 `toughness_replenish_modifier` 或 `toughness_replenish_multiplier`；`T` 本身仍採當前 `max_toughness()` 計算結果。

每一個已處理的 `on_sweep_finish` 事件先更新內部計數器：命中數大於 0 且 Sweep 開始時 `combo_count > 0` 時加 1，否則設為 1。僅計數器大於 1 才執行上式。這個計數器與 ProcBuff `max_stacks=1` 是兩件事；max_stacks 限制 Buff 實例數，不限制內部計數值。

本項只涵蓋固定來源 SHA 中實際綁定的九個 trait 實作與十九個 Mark。等級值、formatter、每份 clone wrapper、Mark 匯入／接入、動作表、掃掠事件、韌性 consumer 與圖示皆由固定來源或同 hash RAW／UI 收據逐項核對。特殊爆炸、連鎖電弧和武器吶喊依實際呼叫位置區分；不從英文名稱或 `special` 後綴推導觸發。描述沒有明確與實作相反的句子；未列出的條件按「文件未涵蓋」記錄。
