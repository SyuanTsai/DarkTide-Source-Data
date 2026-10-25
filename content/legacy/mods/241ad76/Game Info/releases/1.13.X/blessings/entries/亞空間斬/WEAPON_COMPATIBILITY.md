# 亞空間斬：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 烈焰力場巨劍 | 烈焰力場巨劍 誓約 Mk VI | I–IV | 冷卻就緒時，特殊模式掃掠開始會消耗本次觸發並啟動冷卻；風斬效果建立時若保證暴擊關鍵字仍在快取，就會保存暴擊判定。 | [weapon_trait_bespoke_forcesword_2h_p1_wind_slash_crits](weapon_trait_bespoke_forcesword_2h_p1_wind_slash_crits.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2795-L2797) |
| 烈焰力場巨劍 | 烈焰力場巨劍 誓約 Mk VIII | I–IV | 冷卻就緒時，特殊模式掃掠開始會消耗本次觸發並啟動冷卻；風斬效果建立時若保證暴擊關鍵字仍在快取，就會保存暴擊判定。 | [weapon_trait_bespoke_forcesword_2h_p1_wind_slash_crits](weapon_trait_bespoke_forcesword_2h_p1_wind_slash_crits.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2710-L2712) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
