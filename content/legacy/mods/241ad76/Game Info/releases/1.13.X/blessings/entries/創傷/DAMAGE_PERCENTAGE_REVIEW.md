# 創傷：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- 令s為有效層數(0至5)，p為該級每層增量(.14、.16、.18或.20)。一般踉蹌結算中的近戰impact modifier逐層加算：M_melee_impact = M_other + p×s；其餘修正全為預設1時，M_other=1。

- Impact階段示例：IV級p=.20、s=5，modifier=1+(.20×5)=2.0；基礎impact power 100因此在該乘算階段成為200。此中間值不保證踉蹌強度、踉蹌類型、擊退距離或最終結果加倍。

- 一般duration分支：D=breed.stagger_durations[stagger_type]×M_other_duration×1.1^s+profile_duration_modifier。五層時1.1^5=1.61051；若基礎時間0.5秒、其他一般時間倍率M_other_duration=1、profile modifier=0，則0.805255秒。opt-in profile改用opt_in_stagger_duration_multiplier。

- 五個實際綁定變體的I–IV均為14%／16%／18%／20%每有效層，沒有tier差異。

- 2秒窗口從有效堆層進度開始後的最後一次合格命中更新；逾期清除層數並把計數器設回0。冷啟動與逾時重置後的首層門檻不同。

- 多目標計數依ActionSweep傳入的target_number，而不是每個敵人都加層；target_number>1被共用proc_func略過。

- 共用child另有逐層乘算的踉蹌時間效果，但opt-in profile讀不同stat；算例限定一般duration分支、同一踉蹌類型且其他修正不變。

- 五個武器家族的M1近戰動作範例皆採ActionSweep；Buff沒有普通、蓄力或特殊攻擊類型排除，但動作仍須送出合格on_hit事件。

- 特殊動作需按實際命中事件判斷：惡魔之爪防禦姿態不加層，但後續反擊命中可加；工兵鏟／撬棍的模式切換及碾壓者／雷鎚的啟動本身不加層；撬棍sticky傷害及碾壓者AoE是另行送出的命中事件，仍受同一item/target_number gate。
