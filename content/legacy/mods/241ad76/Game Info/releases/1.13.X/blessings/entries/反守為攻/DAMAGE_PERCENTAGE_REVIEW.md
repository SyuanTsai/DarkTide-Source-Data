# 反守為攻：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 `C=block_cost`（本項收到的格擋事件參數），`T` 為最近一次有效處理前的累積值，`k` 為有效層，`p` 是每層本級近戰威力修正，`B` 是已通過原生 PowerLevel 曲線、尚未乘祝福／其他威力修正的輸入，`q` 是同一威力修正池中的其他加成。

`on_block`: 若 `t-last_hit_time>3.5`，`T'=C`；否則 `T'=T+C`。接著 `k'=clamp(floor(T')+(T'>0?1:0),0,5)` 並設 `last_hit_time=t`。`on_sweep_finish`: `T'=max(T-1,0)`、`k'=max(k-1,0)`、`last_hit_time=t`。超時移除有效子層時不清除此父層 `T`。

威力階段的簡化倍率是 `1+k×p+q`，`P=B×(1+k×p+q)`。例（兩層，k=2）：IV `p=.10`、`k=2`、`B=500`、`q=0`，則 `P=500×1.20=600`。這只說明威力輸入池的相對變化，不是最終生命傷害公式。

比較結論僅限定本項兩個確切盾錘物品與四個綁定 Mark。I–IV RAW formatter 的 +4/+6/+8/+10%、3.5秒和5層數字一致；實作實際為近戰 PowerLevel pool 修正。RAW 關於「每點耐力一層」與實際依累積 `block_cost` 的 `floor(T)+(T>0?1:0)` 在 `block_cost=1,T=0` 時給兩層，存在可重現的數量差異。RAW 沒列出 block event/持用條件、sweep-finish 消耗、無命中完成、純 push 不消耗、共享期限刷新及切槽行為，這些屬文件未涵蓋。特殊動作亦分型：兩個板盾 Mark 是零成本 block；兩個鎮壓護盾 Mark 的放出是未設定 attack_type 的 weapon_shout，不讀近戰修正且不送 sweep-finish；其0.4秒格擋窗若接到來襲攻擊仍能送 on_block。
