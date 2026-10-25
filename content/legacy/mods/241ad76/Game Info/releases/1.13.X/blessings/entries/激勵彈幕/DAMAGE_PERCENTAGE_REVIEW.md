# 激勵彈幕：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

## 韌性回復公式

令 M 為最大韌性，C 為目前韌性，p 為 tier 固定比例，n 為事件處理時實際武器連擊計數，last 為前次彈藥事件記錄值，m = NetworkConstants.action_combo_count.max。held-slot gate 成立、n > last 或 n = m、且韌性回復沒有被封鎖時：

計算回復量 = M × p × min(n, 5)

實際增加量 = min(計算回復量, M − C)

ignore_stat_buffs=true 表示本次不套用韌性回復倍率等 stat 修正；恢復仍受目前缺額與回復狀態限制。公式中的 n 是原生 action combo_count，不是固定射擊次數、命中數或目標數。

本項 RAW 的百分比值由每個 own tier 的 toughness_fixed_percentage 取值並以百分比及加號格式顯示；本項實際恢復是每個合格彈藥事件直接回復韌性，連擊計數最多作五倍乘數。RAW 的「疊加」文字不表示角色身上存在五層持續 Buff。反衝者與惡棍槍的 combo 保留／重設設定不同，因此玩家實際回復要看事件當下的武器連擊計數；例子只展示明確假設的計數值，不代表每一發射擊都有固定保證回復。恢復會忽略 stat-buff 修正並受缺額及正常回復封鎖限制。
