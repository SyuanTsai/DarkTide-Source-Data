# 亡命之徒：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 爆擊率池：p_pool = clamp(p_base + p_generic + p_attack_type + p_handling + p_tier, 0, 1)。

- 本祝福的 p_tier：I=0.125、II=0.15、III=0.175、IV=0.20；它加入 generic critical_strike_chance 欄位，故一般近戰與遠程 critical chance 呼叫都會讀到它。

- 若該次 CriticalStrike.chance 呼叫沒有略過機率轉傷害修正，p_after_conversion = p_pool × (1 - critical_strike_chance_to_damage_convert)；本例設 conversion=0。

- 實際 roll 對機率四捨五入至小數點後兩位，再使用 PRD。範例的 20%→40% 表示未計最終取整／PRD 的機率池變化；+20 個百分點不是 +20% 傷害。

- **結算**：四級實際加入12.5／15／17.5／20個百分點，不疊加 base 預設5個百分點；機率先限制至100%，再處理轉換及一般判定取整。

- **觸發及期限**：需要敵方攻擊回報成功閃避且持用此型號；首次即取得完整效果，再次合格事件刷新6秒。

- **切換及特殊攻擊**：離手時倒數繼續、加成暫停；普通與靈能推擊固定使用非爆擊預設。
