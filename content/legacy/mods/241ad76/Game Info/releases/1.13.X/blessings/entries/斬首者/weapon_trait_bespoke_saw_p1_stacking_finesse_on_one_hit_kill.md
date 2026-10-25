# 斬首者(Decapitator)：骨鋸實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_saw_p1_stacking_finesse_on_one_hit_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_saw_p1.lua#L114-L177)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_saw_p1_buff_templates.lua#L19-L33)。
- 適用型號：骨鋸 外科醫師 型號4。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：骨鋸 外科醫師 Mk IV。特殊鍵是塗層切換；輕／重掃掠有 normal/AP 變體。延遲黏附撕裂的兩種 profile 跳過 on_hit，但獨立 on_kill 是否觸發仍取決於撕裂是否造成符合旗標的擊殺。逐 Mark profile 見[完整說明](WEAPON_COMPATIBILITY.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
