# 效率：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 冷卻秒數 | RAW耗彈字串 |
|---|---:|---|
| I | 1.25 | 66% |
| II | 1 | 66% |
| III | 0.75 | 66% |
| IV | 0.5 | 66% |

- 省彈公式四級相同；升級只縮短冷卻。RAW字串不隨型號改變，實際整數扣除見[完整說明](README.md)。

[步兵鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L50-L95)。
