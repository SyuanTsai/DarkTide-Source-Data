# 雷鳴：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

對目標既有 `rending_debuff` 層數 `s`、等級每擊層數 `n∈{1,2,3,4}`，目標上限 `C=16`，每層 `r=0.025`：`added=min(n,C-s)`，`ΔR=added×r`。IV 對空目標 `ΔR=4×.025=.10`；對已有14層目標則 `ΔR=2×.025=.05`。`ΔR` 是 target_stat_buffs.rending_multiplier 的輸入變化，不是最終生命傷害倍率；DamageCalculation 將其與 attacker's rending、護甲類型、profile 倍率及其他條件合併並限制總 rending。

RAW 數字、每擊層數、每層2.5%、16層上限和5秒期限均與實際 formatter／Buff 一致。RAW 沒有交代 exact attacking item、Minion 目標、持用條件、命中後仍存活條件、全域 profile/no-proc 過濾、事件延後處理與加層刷新；均歸類為文件未涵蓋，沒有製造額外勘誤。只有突擊鏈斧黏附追加 profile 明確略過一般 on-hit；2H 碾壓者爆炸與 P3 電弧鏈路則按各自保留 item 的 Attack 路由判斷。
