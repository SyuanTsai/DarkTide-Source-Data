# 兇狠切割：百分比與結算

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

令p=.14/.16/.18/.20，n=實際child stack_count−1，範圍0–5；保留實體子層1使有效0，最大實體6使有效5。父模板沒有stat鍵，所以own tier override不自行成為常駐加成；child conditional枚舉melee_impact_modifier時由同名override換成p，再按有效n聚合。令q為已有同類衝擊增量，M=1+q+n*p；原近戰衝擊輸入P0於此乘區變為P0*M。只有事件處理後快取已更新且未被同批start/finish清層才讀到n；此式不是傷害或最終踉蹌公式。

來源與實際三 Mark 接線均已核對。正式整合須保留 singular/plural callback API 差異、child-only tier 聚合、命中後快取時序與純推擊分支界線。
