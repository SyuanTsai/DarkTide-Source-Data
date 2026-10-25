# 燃燒靈魂：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 武器 | 適用型號 | I | II | III | IV | 實際效果 |
|---|---|---|---|---|---|---|
| 烈焰力場劍 | 朦朧 Mk II、戴莫斯 Mk IV、伊利斯 Mk V | 每次1層；上限3層 | 每次2層；上限6層 | 每次3層；上限9層 | 每次4層；上限12層 | 只在手持同一祝福武器且造成傷害的近戰／shout 暴擊符合實際命中檢查時加層；既有靈魂之火層數共用 |

[烈焰力場劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L574-L629)。
