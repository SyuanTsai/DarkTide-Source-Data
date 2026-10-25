# 精煉殺意：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 弱點／精準額外傷害乘區的加成 |
|---|---:|
| I | +52.5% |
| II | +55% |
| III | +57.5% |
| IV | +60% |

需持用此武器、近戰命中弱點，且目標在傷害計算時帶毒素狀態；本加成與既有同乘區增量相加，不直接乘整筆傷害。

[骨鋸](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L383-L422)。
