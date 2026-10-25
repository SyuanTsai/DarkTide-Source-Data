# 烈火熱焰：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令有效層數n≤5，每層b依I–IV為0.07／0.08／0.09／0.10，q近為其他適用的damage_near加法修正。近端值N=1+q近+n×b。遠端值F=damage_far+(遠程攻擊時的ranged_damage_far−1)；非遠程攻擊不加入後一項。兩個遠端值未受其他修正時均為1。

- 距離比例s=clamp((d−12.5)/(30−12.5),0,1)，d是這次傷害結算時攻擊者與目標的位置距離。
- 距離分支D=lerp(N,F,sqrt(s))。原生結算把D−1加入其他適用的傷害加法修正，不直接把整次最終傷害乘以D。
- 與其他條件相同而沒有本祝福時相比，本祝福提供的距離分支增量為n×b×(1−sqrt(s))。在12.5公尺內為n×b；30公尺起為0。
- 下列算例明確令其他近遠修正中性；其中D相對1的增幅只描述距離分支，並非最終傷害保證。

固定 source SHA、Release 1.13.1。凍結七組 own tier/wrapper、17 UI bindings、locale 0/16 RAW、actual icon 016、完整距離consumer、event gate、held/cache/expiry/switch與每 Mark 攻擊路由；同名 Heavystubber P1 不在固定17 binding故排除。唯一窄義RAW勘誤為繁中「近戰傷害」對應近端 distance consumer；其他未列 gate 是文件未涵蓋。主控已核對本項證據與差異；未做遊戲內測試、未聲稱擷取截圖。
