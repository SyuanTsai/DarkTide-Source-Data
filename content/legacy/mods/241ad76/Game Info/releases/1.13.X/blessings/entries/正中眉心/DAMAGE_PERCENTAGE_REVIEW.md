# 正中眉心：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

## 持續時間

`T = active_duration(等級)`：I=2.4 秒、II=2.8 秒、III=3.2 秒、IV=3.6 秒。每次合格事件處理時重設 `active_start_time`，有效條件為 `now < active_start_time + T`；沒有層數乘法，也沒有額外冷卻。

## 效果順序

攻擊命中先完成自己的傷害／命中路徑；合格 `on_hit` 事件稍後清除壓制並刷新期限。`player_unit_buff_extension` 固定更新先處理 buff，再處理 proc events，最後重建關鍵字快取，因此新免疫不追溯本次命中，從更新後可讀取的 `suppression_immune` cache 起生效。

RAW 的「Weak Spot Hit／命中弱點」與本項實際 hit_weakspot 條件相符；原文有持續時間 placeholder，formatter 讀取每級 active_duration。RAW 未列同一 item、持用、profile skip、快取刷新與各種特殊攻擊條件，這些是文件未涵蓋的實作細節，不構成翻譯矛盾。
