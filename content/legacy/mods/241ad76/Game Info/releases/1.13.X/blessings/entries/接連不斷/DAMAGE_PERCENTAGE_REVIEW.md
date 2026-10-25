# 接連不斷：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令M為目前武器slot內使用中clip的最大容量總和（不含備彈），N為玩家共用射擊次數，r為步距比例（一般 .10，Ripper .08）。重裝或無有效slot時S=0、k=0；否則S=max(1,floor(M×r))，k=min(floor(N/S),5)。每步p依I–IV為.035/.04/.045/.05；祝福給通用 `critical_strike_chance` 的增量是k×p，五步上限為17.5/20/22.5/25個百分點。

實際判定還會加入archetype base、通用/近戰/遠程與handling修正，clamp後可能套轉傷害轉換；判定前另有小數二位rounding與PRD。因此算例把其它適用輸入合併成B並令轉換為中性，只示祝福stat增量，不等同遊戲實測爆擊頻率或最終傷害。

依固定1.13.1 source與inventory交集，只涵蓋五個trait ID、十個Mark。四個家族自有formatter顯示10%，Ripper P1自有formatter顯示8%，均與各自helper一致。Tier、5步上限與same-key fallback覆寫逐項核對。RAW未說floor/minimum-one、共用計數、spread timer、切槽及stat-cache時序，列為文件未涵蓋；未發現明確相反敘述，遊戲描述勘誤留空。 已區分實際 Sweep 特殊近戰與純推擊：爆矢槍 action_push（kind=sweep）、雙持 pistol-whip 及撕裂槍 stab 可走近戰爆擊判定；手電筒切換及純 push 不會擲本項爆擊。切槽僅使持用欄位條件失效，卸下武器才會移除 on_equip buff。
