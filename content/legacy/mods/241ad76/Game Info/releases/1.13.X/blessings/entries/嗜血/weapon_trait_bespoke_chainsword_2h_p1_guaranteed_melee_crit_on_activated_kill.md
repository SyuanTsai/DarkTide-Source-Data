# 嗜血(Bloodthirsty)：重型開膛劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_chainsword_2h_p1_guaranteed_melee_crit_on_activated_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainsword_2h_p1.lua#L10-L52)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainsword_2h_p1_buff_templates.lua#L8-L10)。
- 適用型號：重型開膛劍 泰格魯斯 Mk III、重型開膛劍 泰格魯斯 Mk XV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 共通觸發、首次生效、五秒期限、消耗、切換及算例見[完整說明](README.md)。
- **適用型號**：重型開膛劍 泰格魯斯 Mk III、Mk XV。
- **攻擊接線差異**：special-active 直接攻擊與部分 active push-follow profile 標有特殊旗標；部分普通黏附鋸擊 profile 也標有特殊旗標，且可能同時設定 skip_on_hit_proc。後者只略過 on_hit 分支，不阻止獨立的擊殺分支。M1 普通 push-follow 沒有普通 sticky selector；M2 依其實際普通／special-active sticky selector選profile。
- **本變體效果**：各級要求 4／6／8／10 次加入，但子效果上限為一層，所以均為一次近戰必定爆擊；切槽後的遠程爆擊事件也可能消耗它。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
