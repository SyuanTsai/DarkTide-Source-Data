# 散彈(Scattershot)：滅絕者霰彈槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_shotgun_p4_crit_chance_on_hitting_multiple_with_one_shot`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p4.lua#L309-L358)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p4_buff_templates.lua#L22-L24)。
- 適用型號：滅絕者霰彈槍 鐵腕 Mk III、滅絕者霰彈槍 鐵腕 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 滅絕者霰彈槍 Mk III/Mk VIII 的腰射、裝填接續射擊、瞄準射擊都為散彈命中；特殊彈殼仍按一發射擊合併計數。

- 每層數值與共通層數、清除及切換算例見[玩家說明](README.md)，不另外計算近戰爆擊率。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
