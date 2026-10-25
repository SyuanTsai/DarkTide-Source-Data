# 燃起來！：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 令 `n = round(clamp01((heat_fraction−0.10)/0.90)×5)`，`n∈{0,1,2,3,4,5}`。I–IV 每階一般爆擊機率加成 `d = 0.055/0.070/0.085/0.100`，即 +5.5/+7/+8.5/+10 個百分點；每階遠程爆擊傷害係數 `r = 0.04/0.06/0.08/0.10`。因此 `ΔP = n×d`，`h=n×r`。在五階時，`ΔP=+27.5/+35/+42.5/+50 個百分點`，`h=+20/+30/+40/+50%`。

- 對確實產生 finesse extra 的遠程爆擊命中，令 `F=base_finesse_damage`，令 `B` 代表其他命中傷害，`c` 代表同一共享 finesse multiplier 階段其他加成的合併淨額；假設其他同階項為中性，或已納入 `c`，且 downstream multipliers 不變：`D_before=B+F(1+c)`，`D_after=B+F(1+c+h)`，`ΔD=Fh`，`(D_after−D_before)/D_before=Fh/[B+F(1+c)]`。h 乘的是 F，不是 B+F。

- 一般爆擊機率池應另寫作 `P=clamp(P_base + P_general + P_attack_type + P_handling,0,1)`；Gets Hot 加到 `P_general`。Mk II／Mk III 的一般及蓄力單發 action 另加 0.05 handling。此單發路徑不略過機率轉傷害：先限制至0–1，再乘(1−critical_strike_chance_to_damage_convert)，最後取整至小數點後兩位供 PRD 判定，所以機率池例不代表固定爆擊頻率。

- 當爆擊同時命中弱點時，`F` 是程式將 crit 與 weakspot boost 合併後產生的 `base_finesse_damage`；不要對弱點及爆擊各自複製一份 F。若 `critical_strike_chance_to_damage_convert` 非零，會再有獨立的機率轉傷害項，此處公式不包含它。

- **階數與覆寫**：五階上限由熱能公式決定；各級數值覆寫 wrapper 同名備用值，沒有額外再加 1%。

- **爆擊率**：百分點直接加入一般機率池；先限制至 0–1，再處理適用的機率轉傷害，最後取整供 PRD 判定。

- **傷害部分**：遠程爆擊傷害係數加入共用額外傷害乘數；算例分開列出基礎部分、額外部分、已有同階加成與最終命中增幅。爆擊兼弱點命中只有一份合併額外傷害。

- **算例邊界**：所有傷害單位均為明示假設，沒有宣稱 Mk II／Mk III 的實戰測量；機率轉傷害設為零，其餘結算保持相同。
