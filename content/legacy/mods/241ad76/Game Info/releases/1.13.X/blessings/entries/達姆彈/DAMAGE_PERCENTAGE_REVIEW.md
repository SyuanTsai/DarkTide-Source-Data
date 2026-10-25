# 達姆彈：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 距離d公尺，`x=clamp((d−12.5)/17.5,0,1)`；有效層n、每層比例v，額外比例為`n×v×(1−sqrt(x))`，同階段已有s時倍率為`1+s+n×v×(1−sqrt(x))`。[距離公式](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L284-L297)；[距離常數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L26)。

- 步兵自動槍、偵察鐳射槍與重型鐳射手槍IV級：原值100點、n=5、v=.06，d≤12.5得130點、d=16.875得115點、d≥30得100點。

- 電弧步槍IV級：同條件v=.04，依序120、110、100點。

- s=.20且近距離時，其他三個武器族群120→150點，相對增加25%；電弧步槍120→140點，相對增加約16.67%。

- 距離取攻擊者與目標位置，連鎖傷害也以攻擊者至該目標的距離計算，不能以兩名敵人之間距離替代。[測距](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L335-L342)。

- `damage_near`沒有只限melee的條件；符合相同item條件的本武器近戰攻擊也可計數，其他武器不共用此加成。[本武器匹配](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727)；[非Buff命中](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L376-L382)。

- 距離曲線為平方根插值。算例隔離該傷害階段，護甲、弱點及其他倍率保持相同。
