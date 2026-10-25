# 高壓電(High Voltage)：滅絕者霰彈槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_shotgun_p4_damage_bonus_vs_electrocuted`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p4.lua#L677-L716)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p4_buff_templates.lua#L37-L45)。
- 適用型號：滅絕者霰彈槍 鐵腕 Mk III、滅絕者霰彈槍 鐵腕 Mk VIII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 滅絕者霰彈槍 P4 M1 鐵腕 Mk III、M2 鐵腕 Mk VIII。M1 特殊彈先完成該輪所有 pellet damage，之後才加 shotgun_special_stun；因此同一輪不會被自己新加的狀態追溯增傷。狀態更新後的後續射擊與 interval tick 可符合條件。M2 特殊彈是 8 秒、+0.25 rending debuff，沒有 electrocuted keyword。 兩種目標狀態各最多一層，重複施加刷新期限；電擊間隔傷害在瘟疫爆破者踉蹌時跳過該次結算。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
