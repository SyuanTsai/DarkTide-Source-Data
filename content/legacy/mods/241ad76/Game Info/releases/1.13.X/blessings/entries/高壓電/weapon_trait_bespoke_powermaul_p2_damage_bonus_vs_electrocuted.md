# 高壓電(High Voltage)：法務官電擊鎚實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powermaul_p2_damage_bonus_vs_electrocuted`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powermaul_p2.lua#L203-L242)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powermaul_p2_buff_templates.lua#L90-L98)。
- 適用型號：法務官電擊鎚 布蘭克斯 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 法務官電擊鎚 P2 M1 布蘭克斯 Mk III。特殊命中先完成 Attack 傷害，再由 on_hit primer 查看當時已有的 electrocuted group keyword；已電擊目標加 3.5 秒 extra stun（含該 keyword），未電擊目標加 0.1 秒 basic stun（不含該 keyword），所以未電擊目標的首次特殊命中不會自我供應加成。推擊 attack=0；追擊斬擊另按當下狀態。 extra/basic 各最多一層，重施刷新自身 3.5/.1 秒期限。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
