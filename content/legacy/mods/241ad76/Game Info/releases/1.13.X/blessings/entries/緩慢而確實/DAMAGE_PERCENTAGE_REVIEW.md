# 緩慢而確實：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

單次命中要求回復 `W=M×p×min(n,3)`，實際回復 `R=min(M−T,W)`；`M` 為最大韌性、`T` 為命中前韌性、`p` 為階級比例、`n` 為先前已處理的 windup 門檻數。命中後自訂計數歸零。`ignore_stat_buffs=true` 只跳過一般回復倍率，原生回復禁用條件仍有效。

RAW 使用 `heavy attack／重攻擊`，實作則只要求在命中事件處理時持用相符武器物品；callback 沒有讀取攻擊強度或 attack_type，故先前計數可能由同物品、符合通用 on_hit 條件的其他命中使用，屬明確條件差異。RAW 未列離散 windup chain_time 門檻、單次計數最多三次、掃掠完成／重新持用清零、滿韌性會消耗計數但實際回復受缺口封頂，分類為文件未涵蓋。helper 忽略一般韌性回復倍率，仍遵守原生存活、倒地（force_assist例外）、prevent-replenish 與 ability-only 條件。
