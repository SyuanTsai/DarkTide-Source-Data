# 精確定位：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `s=min(5, floor(有效瞄準時間/0.4))`，單步增量 `p` 見集中表，累積 `t=s×p`。若同一威力池另有加成 `q`，power-type 曲線後輸入 `B` 的比較是 `B×(1+q+t)`，不是 `(1+q)×(1+t)`；`B` 不是最終生命傷害。通用 clone 在射擊事件處理後於下一次 Buff 更新清空；Ogryn callback 在發射後0.8秒內回傳old_steps，超過保留窗才重算，conditional stat 另有持用 gate。

英、繁中 RAW 共用同一描述鍵與 hash；四家族 formatter 對每步百分比、0.4秒及5層的靜態輸出均已逐級重建。前三個 clone 在實際 `on_shoot` 後清層；Ogryn grenade action 則只送 `on_shoot_projectile`，自訂 wrapper也不監聽清除事件，因此全句「射擊後清除所有層數」對 Ogryn 家族明確不符。0.8秒保留、持用、切換與榴彈快照條件是文件未涵蓋，不另作反向勘誤。
