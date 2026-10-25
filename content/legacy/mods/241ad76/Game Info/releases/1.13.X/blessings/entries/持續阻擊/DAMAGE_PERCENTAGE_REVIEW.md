# 持續阻擊：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令 C 為本祝福裝備槽經 Ammo.max_ammo_in_clips 讀取的最大彈匣容量，N 為玩家 shooting_status.num_shots，S=max(1,floor(C×0.025))；若重裝填或無有效裝備槽令步進函式回傳0，則 k=0、本祝福此次 stat contribution 為0；否則 k=min(5,floor(N/S))。等級每層 p_s 為 .125/.15/.175/.20，p_d 為 .04/.05/.06/.07。兩個同名 stat 均以 additive_multiplier 接入，故壓制倍率項為1+k×p_s，受壓制目標的傷害倍率項為1+k×p_d，不互乘。由於N先在射擊準備時計數，而Buff.fixed_update於後續更新stat cache，N改變的當發不保證採用新k；算例均指定 cache 已重算至所列N。damage_vs_suppressed只在傷害計算讀取目標已受壓制時納入一般傷害修正池；下列中性傷害算例只展示此倍率項，不保證最終生命傷害同率增加。

RAW 的2.5%彈匣、持續射擊與最多5層，和四級兩個正向百分比均可依各 tier formatter 重建。程式更具體地以完成射擊準備後的 num_shots 計數，再用最大彈匣容量乘2.5%並向下取整作步進，達5層封頂；RAW未交代計數、取整、停火清除、換槽時序、重裝填回傳0、首次施壓同擊不追溯加成等邊界，故屬文件未涵蓋，沒有足以成立的翻譯矛盾。
