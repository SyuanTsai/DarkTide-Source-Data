# 集中火力(Concentrated Fire)：重型鐳射手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_laspistol_p1_chained_weakspot_hits_increases_crit_chance`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_laspistol_p1.lua#L421-L472)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_laspistol_p1_buff_templates.lua#L21-L25)。
- 適用型號：重型鐳射手槍 奧克塔蘭MG Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 僅接到奧克塔蘭MG Mk II（M1）；metadata weapon_type_restriction 精確限定 laspistol_p1_m1，同家族 M3 不在此項綁定。
- 普通及瞄準射擊是 shoot_hit_scan；槍托 push 不是 on_shoot 事件，因此不加層也不清層。
- [M1 hit-scan actions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L203-L335)；[push action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L498-L515)。
- 普通與靈能推擊固定不爆擊；共通層數與算例見[玩家說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
