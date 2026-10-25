# 強化電流弧：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 電弧步槍 | 電弧步槍 布蘭克斯 Mk IV | I–IV | 持用電弧步槍 布蘭克斯 Mk IV 時，角度 I–IV 加 +3°／+5°／+7.5°／+10°、半徑加 +0.3／+0.5／+0.75／+1、max_jumps 各加 1。 | [weapon_trait_bespoke_arc_rifle_p1_enhanced_arc_jumps_angle](weapon_trait_bespoke_arc_rifle_p1_enhanced_arc_jumps_angle.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L20)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L1059-L1061) |
| 電弧鎚 | 電弧鎚 布蘭克斯 Mk III | I–IV | 持用電弧鎚 布蘭克斯 Mk III 時，角度 I–IV 加 +5°／+7.5°／+10°／+12.5°、半徑加 +0.5／+1／+1.5／+2、max_jumps 加 1／1／2／2；掃擊路徑另受 special-active gate 限制。 | [weapon_trait_bespoke_powermaul_p3_enhanced_arc_jumps_angle](weapon_trait_bespoke_powermaul_p3_enhanced_arc_jumps_angle.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/power_mauls/powermaul_p3_m1.lua#L2629-L2631) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
