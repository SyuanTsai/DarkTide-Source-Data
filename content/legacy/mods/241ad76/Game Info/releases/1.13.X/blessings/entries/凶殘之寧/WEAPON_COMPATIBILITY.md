# 凶殘之寧：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 烈焰力場巨劍 | 烈焰力場巨劍 誓約 Mk VI | I–IV | 持用烈焰力場巨劍時，當合格近戰命中事件序號達 3 或以上，同批事件合併成一次延後扣除，依 I–IV 級減少目前反噬 2／3／4／5 個百分點；額外風刃與甩擊不觸發。 | [weapon_trait_bespoke_forcesword_2h_p1_vent_warp_charge_on_multiple_hits](weapon_trait_bespoke_forcesword_2h_p1_vent_warp_charge_on_multiple_hits.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2795-L2797) |
| 烈焰力場巨劍 | 烈焰力場巨劍 誓約 Mk VIII | I–IV | 持用烈焰力場巨劍時，當合格近戰命中事件序號達 3 或以上，同批事件合併成一次延後扣除，依 I–IV 級減少目前反噬 2／3／4／5 個百分點；額外風刃與甩擊不觸發。 | [weapon_trait_bespoke_forcesword_2h_p1_vent_warp_charge_on_multiple_hits](weapon_trait_bespoke_forcesword_2h_p1_vent_warp_charge_on_multiple_hits.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L15)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2710-L2712) |

- 每條型號關聯核對玩家UI、MasterItems類別與限制、固定Git模板匯入及trait接入。
