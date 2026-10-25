# 護甲之禍：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | 充能不高於 25% | 充能不低於 75% | 每層脆弱 |
|---|---:|---:|---:|
| I | 2 層 | 6 層 | 2.5% |
| II | 4 層 | 8 層 | 2.5% |
| III | 6 層 | 10 層 | 2.5% |
| IV | 8 層 | 12 層 | 2.5% |

英文與繁體中文原始描述使用相同鍵值與雜湊，內容皆說明疊層數依充能等級變化，且每層提供 2.5% 脆弱。

[冥潮鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p2.lua#L301-L421)。
