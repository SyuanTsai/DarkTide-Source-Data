# 憤怒：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 設 c 為該武器、該等級每層加成小數（例如35%=0.35），raw 為共享 child buff 的內部 stack_count。有效層數 n = clamp(raw−1,0,5)。本祝福提供的 additive multiplier 增量為 B=c×n；只考慮本祝福時，max_hit_mass_attack 最終倍率=1+B。若有其他攻擊順劈修正，damage_profile.lua 會把相應 modifier 相加後再乘上基礎 max_hit_mass_attack。這個值調整可穿透的攻擊質量，不是線性目標數公式，也不改 max_hit_mass_impact。

- 同一順劈additive group每層增量相加；一般IV五層+2，另+0.2時基礎倍率3.2。動力劍IV五層3.5倍；骨鋸IV五層2.25倍。

- 父層數raw上限6、offset−1；有效n0–5。child override取parent trait tier，替換模板預設0.5，不再另外加0.5。

- 持用槽位不符時proc/stat停用但timeout仍更新；沒有reset_update清層分支，因callback回傳false。

- 每層順劈百分比為加算，最後乘基礎攻擊質量；加成不直接等於敵人數。

- 十個變體、22個型號的等級與wrapper均逐一核對；動力劍、骨鋸差異保留。

- 滿層仍刷新3.5秒，揮空或逾時一次清除全部有效層，切出只停用並不暫停計時。
