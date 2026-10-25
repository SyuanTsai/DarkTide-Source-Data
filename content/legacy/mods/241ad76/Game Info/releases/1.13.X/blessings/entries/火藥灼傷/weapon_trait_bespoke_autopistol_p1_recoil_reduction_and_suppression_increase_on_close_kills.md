# 火藥灼傷(Powderburn)：撕裂者自動手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_autopistol_p1_recoil_reduction_and_suppression_increase_on_close_kills`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autopistol_p1.lua#L341-L411)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autopistol_p1_buff_templates.lua#L34)。
- 適用型號：撕裂者自動手槍 尤斯 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 撕裂者自動手槍 尤斯 Mk IV：一般腰射與瞄準射擊都走直接 hitscan 遠程路徑，可在實際近距離擊殺時觸發。
- 照明切換與裝填不是造成傷害的攻擊；本次綁定沒有蓄力射擊或傷害型特殊動作。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
