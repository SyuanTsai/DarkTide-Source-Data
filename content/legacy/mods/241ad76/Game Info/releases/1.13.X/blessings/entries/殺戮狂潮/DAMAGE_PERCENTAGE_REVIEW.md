# 殺戮狂潮：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- P = clamp(P_base + P_generic + P_melee + P_weapon-handling + n×0.10, 0, 1) × (1−critical_strike_chance_to_damage_convert)，n為child有效stack。動作開始時先檢查禁止暴擊：符合時機率為0。沒有禁止條件，再檢查保證暴擊keyword／動作自動暴擊，符合時為1；兩者均未命中才用上述普通機率公式。

- 前提：基礎近戰暴擊機率5%，既有其他加算來源q=10個百分點，無武器操作修正、無暴擊機率轉傷害、沒有防暴擊或保證暴擊條件。

- II級：6層×每層0.10=+0.60。原值clamp(5%+10%,0,100%)=15%；加入後clamp(5%+10%+60%,0,100%)=75%。本祝福增加60個百分點；相對原15%是400%增加（最終為原來5倍），不是對既有暴擊率乘1.6，也不是傷害增加60%。
- IV級：10層×0.10=+1.00。以5%基礎且q=0、無轉換為例，clamp(5%+100%,0,100%)=100%暴擊機率；若有暴擊機率轉傷害轉換，會在clamp後再乘(1−轉換值)，所以不能一概說最後必定100%。

- 這是送入暴擊判定的機率值，不代表線性傷害增幅；其他暴擊旗標和下游傷害另行生效。

- 固定inventory交集為1個trait variant、1個melee武器族、3個實際Atrox Mark bindings。Own tier 4/6/8/10 stacks經formatter顯示+40/+60/+80/+100%；wrapper明確改指向percentage child，而非legacy guaranteed-keyword effect。擊殺須符合來源item、處理時持用、近戰暴擊、弱點命中、擊殺五條件。Child有效stat上限10層、最長5秒、加stack不刷新期限、on_sweep_start標finish並於下一buff update移除；child沒有held gate且不隨parent卸下同步移除。RAW placeholder與formatter相符；層數、期限、切換與事件清理時序屬RAW未涵蓋，未見明確文案矛盾。
