# 魔力彈藥：武器與型號

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器查詢](../../weapons/README.md)｜[共用資料](../../data/BLESSING_WEAPON_MAP.json)

| 武器 | 適用型號 | 等級 | 效果差異 | 實作及來源 |
|---|---|---|---|---|
| 雙鏈重型機槍 | 雙鏈重型機槍 克魯克 Mk V | I–IV | 每次新暴擊判定最多轉移2／3／4／5發 | [weapon_trait_bespoke_ogryn_heavystubber_p1_ammo_from_reserve_on_crit](weapon_trait_bespoke_ogryn_heavystubber_p1_ammo_from_reserve_on_crit.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m1.lua#L855-L857) |
| 雙鏈重型機槍 | 雙鏈重型機槍 戈爾貢努姆 Mk IV | I–IV | 每次新暴擊判定最多轉移2／3／4／5發 | [weapon_trait_bespoke_ogryn_heavystubber_p1_ammo_from_reserve_on_crit](weapon_trait_bespoke_ogryn_heavystubber_p1_ammo_from_reserve_on_crit.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m2.lua#L855-L857) |
| 雙鏈重型機槍 | 雙鏈重型機槍 阿克利斯 Mk VII | I–IV | 每次新暴擊判定最多轉移2／3／4／5發 | [weapon_trait_bespoke_ogryn_heavystubber_p1_ammo_from_reserve_on_crit](weapon_trait_bespoke_ogryn_heavystubber_p1_ammo_from_reserve_on_crit.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua#L16)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p1_m3.lua#L879-L881) |
| 電弧步槍 | 電弧步槍 布蘭克斯 Mk IV | I–IV | I–IV每次新暴擊判定最多轉移1發；連鎖傷害不額外補彈 | [weapon_trait_bespoke_arc_rifle_p1_ammo_from_reserve_on_crit](weapon_trait_bespoke_arc_rifle_p1_ammo_from_reserve_on_crit.md)；[匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L20)、[接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/arc_rifle/arc_rifle_p1_m1.lua#L1059-L1061) |

本表依各型號列出對應實作；數值與效果以本頁祝福的相應武器變體為準。


單一名稱鍵 RAW 對照：`loc_ogryn_heavystubber_p1_m3`（hash a01996ce）本體繁中 RAW 為「阿克利斯MK V二聯重機槍」，英文 RAW 為「Achlys Mk VII Twin-Linked Heavy Stubber」。依實際項目的家族、型式與 Mk 欄位組名，型號表使用「雙鏈重型機槍 阿克利斯 Mk VII」；這是同一m3型號，不另列成Mk V與Mk VII兩把武器。
