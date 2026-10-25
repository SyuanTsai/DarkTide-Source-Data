# 效率：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 步兵鐳射槍 | 步兵鐳射槍 卡特雷爾 Mk VII | I–IV | 新裝備時即就緒；每次射擊事件後冷卻 I–IV 為 1.25／1／0.75／0.5 秒，連射會刷新。就緒時 Mk VII／IX 用量 3→1，約省66.7%；Mk IIb 用量2→1，省50%。 | [weapon_trait_bespoke_lasgun_p1_first_shot_ammo_cost_reduction](weapon_trait_bespoke_lasgun_p1_first_shot_ammo_cost_reduction.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L17)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L714-L716) |
| 步兵鐳射槍 | 步兵鐳射槍 卡特雷爾 Mk IIb | I–IV | 新裝備時即就緒；每次射擊事件後冷卻 I–IV 為 1.25／1／0.75／0.5 秒，連射會刷新。就緒時 Mk VII／IX 用量 3→1，約省66.7%；Mk IIb 用量2→1，省50%。 | [weapon_trait_bespoke_lasgun_p1_first_shot_ammo_cost_reduction](weapon_trait_bespoke_lasgun_p1_first_shot_ammo_cost_reduction.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L692-L694) |
| 步兵鐳射槍 | 步兵鐳射槍 卡特雷爾 Mk IX | I–IV | 新裝備時即就緒；每次射擊事件後冷卻 I–IV 為 1.25／1／0.75／0.5 秒，連射會刷新。就緒時 Mk VII／IX 用量 3→1，約省66.7%；Mk IIb 用量2→1，省50%。 | [weapon_trait_bespoke_lasgun_p1_first_shot_ammo_cost_reduction](weapon_trait_bespoke_lasgun_p1_first_shot_ammo_cost_reduction.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L693-L695) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
