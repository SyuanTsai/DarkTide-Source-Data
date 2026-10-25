# 猛攻：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 每步蓄力時間乘數 p | n=0 | n=1 | n=2 | n=3 | n=4 | n=5 | 五步最大縮短 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| I | −6% | 1.00 | 0.94 | 0.88 | 0.82 | 0.76 | 0.70 | 30% |
| II | −8% | 1.00 | 0.92 | 0.84 | 0.76 | 0.68 | 0.60 | 40% |
| III | −10% | 1.00 | 0.90 | 0.80 | 0.70 | 0.60 | 0.50 | 50% |
| IV | −12% | 1.00 | 0.88 | 0.76 | 0.64 | 0.52 | 0.40 | 60% |

係數是 `charge_up_time` 相對基準 `T0` 的乘數表；0–5 是 wrapper 讀取的連段邏輯步階，不是疊加的祝福 buff 數量。

[冥潮鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L258-L300)。
