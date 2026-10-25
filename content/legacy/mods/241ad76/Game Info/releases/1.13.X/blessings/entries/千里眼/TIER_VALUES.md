# 千里眼：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

- **I 級**：`stat_buffs.fov_multiplier = 0.85`。
- **II 級**：`stat_buffs.fov_multiplier = 0.85`。
- **III 級**：`stat_buffs.fov_multiplier = 0.85`。
- **IV 級**：`stat_buffs.fov_multiplier = 0.85`。
- **共通**：wrapper 同鍵 conditional 備用值為 0.95；tier 同名值覆寫後各級均為 0.85，持用與替代瞄準條件仍保留。

[步兵鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L11-L49)。
