# 虹吸：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | `toughness_fixed_percentage` | 請求恢復量的基數 | 作用範圍 |
|---|---:|---|---|
| I | 10% | 最大韌性 | 每次合格橫掃最多一次；實際值受韌性缺額上限限制 |
| II | 12% | 最大韌性 | 每次合格橫掃最多一次；實際值受韌性缺額上限限制 |
| III | 14% | 最大韌性 | 每次合格橫掃最多一次；實際值受韌性缺額上限限制 |
| IV | 16% | 最大韌性 | 每次合格橫掃最多一次；實際值受韌性缺額上限限制 |

wrapper base fallback 為 15%；實際 I–IV own tier override 取代它。M1、M2 使用相同四級值。

[上古神刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_2h_p1.lua#L423-L464)。
