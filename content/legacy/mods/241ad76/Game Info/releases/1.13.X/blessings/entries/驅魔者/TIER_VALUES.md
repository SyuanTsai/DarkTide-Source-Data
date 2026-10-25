# 驅魔者：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。

## 武器變體數值

| 等級 | `vent_percentage` | 每次有效後續弱點揮擊消解 | 備註 |
|---|---:|---:|---|
| I | 0.02 | 2個百分點 | 第一記弱點事件只建立計數 |
| II | 0.03 | 3個百分點 | 弱點揮擊時須有 `combo_count > 0` 才延續計數並消解 |
| III | 0.04 | 4個百分點 | 弱點事件的 `combo_count` 回到0時重設為首次起算 |
| IV | 0.05 | 5個百分點 | 每次消解即時套用，最低為0% |

[烈焰力場劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L543-L573)。
