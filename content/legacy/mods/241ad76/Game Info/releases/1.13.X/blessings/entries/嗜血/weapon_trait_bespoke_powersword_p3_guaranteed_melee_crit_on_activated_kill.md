# 嗜血(Bloodthirsty)：機械神教動力劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_powersword_p3_guaranteed_melee_crit_on_activated_kill`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_powersword_p3.lua#L140-L182)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_powersword_p3_buff_templates.lua#L44-L46)。
- 適用型號：機械神教動力劍 布蘭克斯 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 共通觸發、首次生效、五秒期限、消耗、切換及算例見[完整說明](README.md)。
- **適用型號**：機械神教動力劍 布蘭克斯 Mk VI。
- **攻擊接線差異**：P3 的 active-special 直接攻擊 profile 有特殊旗標；普通攻擊、推擊本體與普通 push-follow profile 未標特殊。
- **本變體效果**：I–IV 每次加入 2／4／6／8 層，每層增加 5 個百分點，最多 8 層；5 秒內再次觸發可加層但不重設首次計時，下一次橫掃開始消耗。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
