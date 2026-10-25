# 優化冷卻：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| Tier | 每階倍率 | RAW token | 五階總倍率 | 五階降低 |
|---|---:|---:|---:|---:|
| I | 0.96 | −4% | 0.8153726976 | 18.46273024% |
| II | 0.94 | −6% | 0.7339040224 | 26.60959776% |
| III | 0.92 | −8% | 0.6590815232 | 34.09184768% |
| IV | 0.90 | −10% | 0.59049 | 40.951% |

五階為逐階相乘，不是把顯示百分比加五次；Mk II／Mk III共用數值。

[電漿槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L343-L389)。
