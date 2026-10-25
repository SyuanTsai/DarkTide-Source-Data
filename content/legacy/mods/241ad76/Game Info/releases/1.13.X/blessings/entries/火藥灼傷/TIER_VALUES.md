# 火藥灼傷：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 等級 | recoil_modifier | suppression_dealt | damage_vs_suppressed |
|---|---:|---:|---:|
| I | -0.28（-28%） | +28% | +14% |
| II | -0.32（-32%） | +32% | +16% |
| III | -0.36（-36%） | +36% | +18% |
| IV | -0.40（-40%） | +40% | +20% |

四個實際實作的 I–IV 數值相同；每個武器的 own tier 取代基礎 wrapper 同名 fallback。

[撕裂者自動手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autopistol_p1.lua#L341-L411)；[雙持自動手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_autopistols_p1.lua#L341-L411)；[磷光爆破手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_phosphor_pistol_p1.lua#L402-L472)；[滅絕者霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p4.lua#L717-L787)。
