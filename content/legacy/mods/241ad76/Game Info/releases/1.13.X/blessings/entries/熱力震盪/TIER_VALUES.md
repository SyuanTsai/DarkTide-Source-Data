# 熱力震盪：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 每階charge_up_time modifier | RAW formatter值／階 | 五階時間係數 | 五階時間縮短 |
|---|---:|---:|---:|---:|
| I | −2.5% | 2.5% | 0.875 | 12.5% |
| II | −3% | 3% | 0.85 | 15% |
| III | −3.5% | 3.5% | 0.825 | 17.5% |
| IV | −4% | 4% | 0.8 | 20% |

M1、M2共用相同I–IV值；有效階數為目前熱量所決定的0–5階。

[電漿槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L155-L200)。
