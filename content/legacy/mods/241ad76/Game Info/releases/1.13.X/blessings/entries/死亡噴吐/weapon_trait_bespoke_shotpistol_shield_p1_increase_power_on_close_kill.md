# 死亡噴吐(Deathspitter)：衝覆者霰彈手槍和防暴盾牌實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_shotpistol_shield_p1_increase_power_on_close_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotpistol_shield_p1.lua#L610-L673)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotpistol_shield_p1_buff_templates.lua#L30-L32)。
- 適用型號：衝覆者霰彈手槍和防暴盾牌 審判 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 完整數值、觸發、層數期限、切換及算例見[完整說明](README.md)。
- 實際型號：衝覆者霰彈手槍和防暴盾牌 審判 Mk IV。
- 本型號的層數、門檻及觸發規則與其他變體相同。
- 盾擊、純推擊及重擊揮擊不符合遠程觸發條件；霰彈射擊可在近距離合格擊殺後取得新層。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
