# 千里眼：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 步兵鐳射槍 | 步兵鐳射槍 卡特雷爾 Mk VII | I–IV | 僅已核對 Mk VII／Mk IIb／Mk IX；三者 ADS 輸入垂直視角均為 45°，I–IV 的 fov_multiplier 均為 0.85。 | [weapon_trait_bespoke_lasgun_p1_increased_zoom](weapon_trait_bespoke_lasgun_p1_increased_zoom.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L17)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L714-L716) |
| 步兵鐳射槍 | 步兵鐳射槍 卡特雷爾 Mk IIb | I–IV | 僅已核對 Mk VII／Mk IIb／Mk IX；三者 ADS 輸入垂直視角均為 45°，I–IV 的 fov_multiplier 均為 0.85。 | [weapon_trait_bespoke_lasgun_p1_increased_zoom](weapon_trait_bespoke_lasgun_p1_increased_zoom.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L692-L694) |
| 步兵鐳射槍 | 步兵鐳射槍 卡特雷爾 Mk IX | I–IV | 僅已核對 Mk VII／Mk IIb／Mk IX；三者 ADS 輸入垂直視角均為 45°，I–IV 的 fov_multiplier 均為 0.85。 | [weapon_trait_bespoke_lasgun_p1_increased_zoom](weapon_trait_bespoke_lasgun_p1_increased_zoom.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L693-L695) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
