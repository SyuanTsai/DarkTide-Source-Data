# 快速裝填：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 步兵自動槍 | 步兵自動槍 阿格里皮娜 Mk I | I–IV | 三型號均在閃避事件後取得同一個兩秒 reload_speed bonus；I–IV為+10%／+12.5%／+15%／+20%，僅新開始的裝填動作按開始時的stat計算。 | [weapon_trait_bespoke_autogun_p1_reload_speed_on_dodge](weapon_trait_bespoke_autogun_p1_reload_speed_on_dodge.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L17)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L768-L770) |
| 步兵自動槍 | 步兵自動槍 弗拉克斯 Mk V | I–IV | 三型號均在閃避事件後取得同一個兩秒 reload_speed bonus；I–IV為+10%／+12.5%／+15%／+20%，僅新開始的裝填動作按開始時的stat計算。 | [weapon_trait_bespoke_autogun_p1_reload_speed_on_dodge](weapon_trait_bespoke_autogun_p1_reload_speed_on_dodge.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m2.lua#L764-L766) |
| 步兵自動槍 | 步兵自動槍 哥倫努 Mk VIII | I–IV | 三型號均在閃避事件後取得同一個兩秒 reload_speed bonus；I–IV為+10%／+12.5%／+15%／+20%，僅新開始的裝填動作按開始時的stat計算。 | [weapon_trait_bespoke_autogun_p1_reload_speed_on_dodge](weapon_trait_bespoke_autogun_p1_reload_speed_on_dodge.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m3.lua#L765-L767) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
