# 勢不可擋：等級數值

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)

- JSON的`available_tiers`保留null；共用資料來源與欄位範圍見[總來源索引](../../SOURCE_INDEX.md)。


## 其他武器變體數值

| 武器 | 適用型號 | I | II | III | IV | 實際效果限制 |
|---|---|---:|---:|---:|---:|---|
| 撬棍 | 科技教士 型號6 | +2.5% | +5% | +7.5% | +10% | 自動完成重型近戰掃掠取得傷害增量與貫穿；持用時重型掃掠另可通過 armor-abort 判定 |
| 砍刀 | 克魯克 Mk VI | +2.5% | +5% | +7.5% | +10% | 同上 |
| 砍刀 | 蠻牛屠夫 Mk III | +2.5% | +5% | +7.5% | +10% | M2 直接推擊追擊 profile 為 heavy 但無 auto-complete，只符合持用中的 armor-abort 條件 |
| 砍刀 | 克魯克 Mk IV | +2.5% | +5% | +7.5% | +10% | 自動完成重型近戰掃掠取得傷害增量與貫穿；持用時重型掃掠另可通過 armor-abort 判定 |
| 碎骨者 | 克魯克 Mk IIa | +2.5% | +5% | +7.5% | +10% | 自動完成重型近戰掃掠取得傷害增量與貫穿；持用時重型掃掠另可通過 armor-abort 判定 |

[撬棍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L445-L484)；[砍刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L221-L260)；[碎骨者](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_hammer_2h_p1.lua#L307-L346)。
