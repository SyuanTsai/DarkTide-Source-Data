# 能量循環：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

有效步數 s=clamp(combo_count,0,extra_hits_max)，基礎 stack_count1+offset(-1)=0；I／II clamp上限1、III／IV上限2。條件stat有效時，weapon_special_max_activations每步+1，使當前停止門檻N=原生1+s；它在狀態檢查時讀取目前快取，可隨combo重置降低。令p=.025/.05/.075/.10，近戰衝擊同類乘數為1+q+p*s，q為既有同類增量；IV在s1/2時新增.10/.20。q=.20時1.20→1.30/1.40，相對增幅8.33%/16.67%。StaggerCalculation把近戰衝擊修正與其他衝擊修正相加後進入後續踉蹌計算；此式不代表傷害或最終踉蹌百分比。

RAW 的 extra_hits 取 own buff_data.extra_hits_max，以number輸出1/1/2/2；stagger取own stat_buffs.melee_impact_modifier，以percentage輸出2.5/5/7.5/10%，沒有加號prefix。Own override覆寫base conditional同名key，不是額外常駐一份；實作按有效連擊步數重複聚合，因此III／IV第二步合計15%／20%。RAW未說明步數累計、動態門檻、刷新和推擊中斷，分類為文件未涵蓋，沒有已證實的英中RAW明確矛盾。
