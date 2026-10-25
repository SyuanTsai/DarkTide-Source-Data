# 致命零距離：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 以`B`表示其他generic radius modifiers的總增量，trait tier值`t∈{0.10,0.15,0.20,0.25}`；neutral base是1，總倍率`M=1+B+t+Σ(Sⱼ−1)`，其中`Sⱼ`是爆炸模板指定的radius_stat_buffs；此兩型號模板未指定額外radius_stat_buffs。tier override取代wrapper的0.10，不是`0.10+t`；Mk IV/Mk VI同一套tier值。

- 有效爆炸半徑`R=R₀×M`，有效近距離半徑`C=C₀×M`。未計其他modifier時，Mk IV `(R₀,C₀)=(3,0.75)m`；Mk VI `(R₀,C₀)=(5,1.75)m`。

- 模板`scalable_radius=false`，因此此兩型號不按charge level縮小半徑；表中直接用模板有效基礎值乘M。

- 爆炸距離gate：`d_hit ≥ d_arm×m_arm`。持用祝福槍時`m_arm=0`；切出後conditional stat不成立，`m_arm`回到neutral 1。此`d_hit`是hitscan起點至物理命中點距離。

- 對超出close區的目標，`dropoff=clamp(((d−C)/(R−C))²,0,1)`；`d`先扣除breed explosion radius。對`d<C`不套距離衰減；Mk IV或Mk VI各自的close_damage_profile與本次kill／stop damage_profile相同。掩體raycast另外判斷。此scalar不是傷害百分比。

- 普通radius stat是on_equip並保留至卸下；conditional arming stat才以currently wielded slot為條件。

- trait tier override替換wrapper的預設+10%；Buff stat type和neutral base使tier與其他generic radius modifiers加法疊加。

- 半徑modifier套用於generic explosion半徑與close radius；不直接改damage profile、power或友軍過濾。

- Mk IV的原始啟動距離／爆炸半徑／近距離半徑為5m／3m／0.75m；Mk VI為3m／5m／1.75m。
