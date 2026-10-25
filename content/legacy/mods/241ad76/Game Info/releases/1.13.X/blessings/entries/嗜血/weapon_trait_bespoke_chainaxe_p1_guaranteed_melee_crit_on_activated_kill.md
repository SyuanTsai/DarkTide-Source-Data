# 嗜血(Bloodthirsty)：突擊鏈斧實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_chainaxe_p1_guaranteed_melee_crit_on_activated_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_chainaxe_p1.lua#L10-L52)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_chainaxe_p1_buff_templates.lua#L8-L10)。
- 適用型號：突擊鏈斧 奧瑞斯特斯 Mk IV、突擊鏈斧 奧瑞斯特斯 Mk XII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 共通觸發、首次生效、五秒期限、消耗、切換及算例見[完整說明](README.md)。
- **適用型號**：突擊鏈斧 奧瑞斯特斯 Mk IV、Mk XII。
- **攻擊接線差異**：普通直接揮擊與普通黏附鋸擊的實際 profile 未標特殊；special-active 的直接攻擊與黏附 profile 標有特殊旗標。因此以未標旗標的普通 profile 擊殺不觸發，必須由符合條件的特殊 profile 擊殺。
- **本變體效果**：I–IV 每次加入 4／6／8／10 層，每層增加 10 個百分點，最多 10 層；5 秒內再次觸發可加層但不重設首次計時，下一次橫掃開始消耗。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
