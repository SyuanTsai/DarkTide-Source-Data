# 掃射：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 設D為加入finesse_boost_damage後、背面增量前的傷害，q為本祝福0.325/0.35/0.375/0.4，s為其他同類flanking_damage加成。符合effective_flanking時flank multiplier=1+s+q，增量D×(s+q)；不符合則增量0。

- 在背面加成結算階段，無其他同類加成時I–IV倍率為1.325/1.35/1.375/1.4；後續hit-zone、DoT、armor、DR與生命／韌性結算另依各自流程。D=100、IV為140；D=150已含弱點增量時為210。

- 已有s=0.20時，D=100由120變160，相對原有提升40÷120≈33.333%；不是120×1.4=168。[條件數值與trait覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747)、[背面傷害增量](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L857-L861)。

- 角度以攻擊入射方向相對target forward作比較；dot>0等價水平後半圈，純水平正側面dot=0不生效。沒有距離、命中次數、暴擊或弱點門檻。[遠程背面判定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack_positioning.lua#L9-L65)。

- 主控直接核對三trait全部等級與共用模板，不把預設0.5當成實際50%傷害。

- 加成階段涵蓋finesse_boost_damage後的整筆D；同類加成採加算，不誤寫Power或只有弱點額外部分。

- 玩家算例明確保留同方向、相同後續倍率與原傷害前提；沒有捏造敵人護甲或武器基礎傷害。
