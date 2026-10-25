# 超壓：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 令 r 為目前持用欄位所有 in-use clips 的總剩餘彈藥比例，n 為 wrapper bonus steps，p 為所選 tier 每階值：

- n = clamp(floor(5 × (1 − (r − 0.10) / 0.90)), 0, 5)

- A = n × p；I–IV 的 p 為 .02／.03／.04／.05，五階最大 A 為 .10／.15／.20／.25。滿彈 r=1 時 n=0；r≤.10 時 n=5。Ammo helpers 聚合在用 clip，不含 reserve ammunition。

- PowerLevel.scale_power_level_to_power_type_curve 先把輸入映射為所選 power-type curve 的 scaled power，再乘 buff modifier。令 S 為「已通過 PowerLevel power-type 曲線、未乘 buff modifier」的威力值，q 為其他適用 stat modifier 淨額，則 S′=S×(1+q+A)。通用 power_level_modifier 不受 attack_type 篩選；ranged-only stat 才有 ranged 類型條件。DamageProfile 隨後再分配 attack／impact／cleave 等 power，damage profile、護甲、目標與後續倍率仍會影響生命值傷害；A 不是最終傷害同比百分比。燃燒 DoT 與特殊 push 都把持有者 stat buffs 和實際 attack_type 傳入同一 power consumer。

- 以固定 S=500、q=0.20、A=0.10 的例子，600→650、相對此威力階段原值增加50/600≈8.33%；原本為零的profile護甲倍率仍為零，不把此比例當各種攻擊的最終傷害增幅。

- 一般爆發、架槍持續火焰、燃燒週期傷害與特殊推擊都已追到實際 Attack/PowerLevel consumer；不是僅由通用工具存在或武器名稱推定。

- 算例把 S 定義為已過 PowerLevel power-type 曲線、尚未乘 buff modifier 的值。tier 百分比不能直接套到最終生命值傷害。

- DoT 的 owner/source_item 是效果歸屬資料；DoT tick 再以 owner 當時的 stat cache 進行 Attack，故不是把 Overpressure 值快照進目標。

- ActionShoot 的 _shoot callback 先於扣彈藥；本項於 buff stat/cache 更新時按新 clip ratio 重算，不聲稱同影格立即更新。

- Formatter 插入 tier per-step 值及固定 stacks=5；RAW 未涵蓋顯示值與五階加法合成：per-step p×n 為本項貢獻，保留原字串與實作上限分列。
