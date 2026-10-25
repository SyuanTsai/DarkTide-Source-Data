# 慰藉精準(Reassuringly Accurate)：重型鐳射手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_laspistol_p1_toughness_on_crit_kills`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_laspistol_p1.lua#L340-L370)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_laspistol_p1_buff_templates.lua#L19)。
- 適用型號：重型鐳射手槍 奧克塔蘭MG Mk II。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 型號：重型鐳射手槍 奧克塔蘭MG Mk II。一般與瞄準射擊皆使用命中掃描並傳遞當次暴擊旗標及手槍 item；合格擊殺後依手槍自身 I–IV 比例回復。普通／靈能推擊不帶暴擊旗標，不能觸發。
[完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
