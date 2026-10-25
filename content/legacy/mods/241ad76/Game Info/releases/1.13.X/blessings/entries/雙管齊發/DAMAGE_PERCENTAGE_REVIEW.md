# 雙管齊發：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- `p` 是本祝福的 `reload_speed` 加法增量，`q` 是其他同類來源。`reload_speed` 類型是 additive_multiplier，基底為 1。

- M1/M3 reload action 把 `reload_speed` 列入 `time_scale_stat_buffs`；動作開始時用當前 stat cache 算倍率。此 action 單列一個 stat，未觸及上限時 `scale = 1 + q + p`。

- double_barrel reload template 的 eject_mag/eject_mag_restart 補彈閾值為 1.3 action-time 秒，fit_new_mag 為 .7 秒，cock_weapon 沒有 refill。牆鐘時間由 action scale 除算；已啟動動作沿用啟動時的倍率。

四級值來自本項 trait override；英文／繁中名稱與描述以相同 localization resource 與 hash 配對。實際 UI 名稱、trait 限制、Mark 接線及圖示資源均依固定來源的裝備模板與 metadata 核對。on_kill 要求死亡結果且為 ranged attack（或 profile 明列 count_as_ranged_attack）；queued ProcBuff 處理時讀取 action-start snapshot。+40%–+70% 描述方向與 formatter 一致；IV 級速度倍率是 1.70，因此相同 action-time 閾值約除以 1.70，不是時間直接減少 70%。原文未說明 Mark 射擊模式、snapshot／事件順序、補彈點消耗、無固定期限或切換條件，屬文件未涵蓋，非已證明矛盾。不將未核對的外部武器列為此祝福已證實的觸發來源。
