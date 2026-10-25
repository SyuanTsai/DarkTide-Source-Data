# 嗜血(Bloodthirsty)：突擊鏈鋸劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_chainsword_p1_guaranteed_melee_crit_on_activated_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_p1.lua#L286-L328)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_p1_buff_templates.lua#L22-L24)。
- 適用型號：突擊鏈鋸劍 卡迪亞 Mk IV、突擊鏈鋸劍 卡迪亞 Mk XIIIg。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 共通觸發、首次生效、五秒期限、消耗、切換及算例見[完整說明](README.md)。
- **適用型號**：突擊鏈鋸劍 卡迪亞 Mk IV、Mk XIIIg。
- **攻擊接線差異**：普通直接攻擊 profile 未標特殊；部分普通黏附鋸擊與 special-active profile 標有特殊旗標。兩Mark的 push-follow 使用實際 sticky settings；符合旗標的黏附擊殺即使 skip_on_hit_proc=true 仍可由 on_kill 觸發。
- **本變體效果**：各級要求 4／6／8／10 次加入，但子效果上限為一層，所以均為一次近戰必定爆擊；切槽後的遠程爆擊事件也可能消耗它。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
