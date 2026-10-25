# 全孔射擊(Full Bore)：滅絕者霰彈槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_shotgun_p4_power_bonus_on_hitting_single_enemy_with_all`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p4.lua#L220-L269)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p4_buff_templates.lua#L20)。
- 適用型號：滅絕者霰彈槍 鐵腕 Mk III、滅絕者霰彈槍 鐵腕 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用型號：鐵腕 Mk III、Mk VIII。I–IV均為14／16／18／20%，持續5秒。
- 普通、瞄準及裝填後彈種都由射擊事件聚合；裝填本身不觸發。詳見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
