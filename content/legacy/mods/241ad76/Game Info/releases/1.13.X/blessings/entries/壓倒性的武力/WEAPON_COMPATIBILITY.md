# 壓倒性的武力：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 電擊錘 | 電擊錘 阿格尼 Mk Ia | I–IV | 阿格尼 Mk Ia、軍務部 Mk III：持用時，full 且 stagger 的 on_hit 依 I–IV 機率套用眩暈；無額外攻擊類型或目標標籤門檻。 | [weapon_trait_bespoke_powermaul_p1_staggering_hits_has_chance_to_stun](weapon_trait_bespoke_powermaul_p1_staggering_hits_has_chance_to_stun.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m1.lua#L1520-L1522) |
| 電擊錘 | 電擊錘 軍務部 Mk III | I–IV | 阿格尼 Mk Ia、軍務部 Mk III：持用時，full 且 stagger 的 on_hit 依 I–IV 機率套用眩暈；無額外攻擊類型或目標標籤門檻。 | [weapon_trait_bespoke_powermaul_p1_staggering_hits_has_chance_to_stun](weapon_trait_bespoke_powermaul_p1_staggering_hits_has_chance_to_stun.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p1_m2.lua#L1607-L1609) |
| 電弧鎚 | 電弧鎚 布蘭克斯 Mk III | I–IV | 布蘭克斯 Mk III：full 且 stagger 的 on_hit 依相同機率套用眩暈，另須目標標籤為 elite 或 special。 | [weapon_trait_bespoke_powermaul_p3_staggering_hits_has_chance_to_stun](weapon_trait_bespoke_powermaul_p3_staggering_hits_has_chance_to_stun.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua#L2629-L2631) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
