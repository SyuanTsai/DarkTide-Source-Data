# 能量循環：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 每步近戰衝擊修正 | 有效步數上限 | 額外充能揮擊上限 | 合計充能揮擊上限 |
|---|---:|---:|---:|---:|
| I | 2.5% | 1 | 1 | 2 |
| II | 5% | 1 | 1 | 2 |
| III | 7.5% | 2 | 2 | 3 |
| IV | 10% | 2 | 2 | 3 |

- 上限以前後連擊有效、每個合格傷害窗消耗一次且未提早關閉為前提；可用次數讀當前有效步數，不是啟用時永久保留的額度。
- III／IV 的第二步近戰衝擊增量合計為 15%／20%；RAW 顯示的是每步來源值。

[動力劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p1.lua#L336-L397)。
