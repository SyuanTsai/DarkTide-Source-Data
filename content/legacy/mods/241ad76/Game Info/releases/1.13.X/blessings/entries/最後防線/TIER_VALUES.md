# 最後防線：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 冷卻 | `block_cost_multiplier` | 格擋消耗降低 | 英中 RAW formatter |
|---|---:|---:|---:|---:|
| I | 18 秒 | 0.85 | 15% | `100 − value × 100`，前綴 `-` |
| II | 15 秒 | 0.80 | 20% | `100 − value × 100`，前綴 `-` |
| III | 12 秒 | 0.75 | 25% | `100 − value × 100`，前綴 `-` |
| IV | 9 秒 | 0.70 | 30% | `100 − value × 100`，前綴 `-` |

[法務官電擊鎚和鎮壓護盾](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_shield_p1.lua#L263-L319)；[作戰大錘&板盾](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1.lua#L342-L400)。
