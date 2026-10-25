# 正中眉心(Between the Eyes)：針彈手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_needlepistol_p1_suppression_negation_on_weakspot`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L248-L277)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_needlepistol_p1_buff_templates.lua#L21)。
- 適用型號：針彈手槍 布蘭克斯 MkVI、針彈手槍 布蘭克斯 MKII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：針彈手槍 布蘭克斯 Mk VI、針彈手槍 布蘭克斯 Mk II。
- 普通射擊以 `default_needlepistol_dart` hitscan profile 直擊；化學彈 `needlepistol_dart_aoe` 在其停止／爆炸條件成立時另送出爆炸攻擊並保留該槍作來源物品。爆炸選用可用的 center-mass actor，是否帶弱點旗標仍依敵種對該部位的映射（或外部保證弱點關鍵字）判斷，因此不能把 AoE 一概列為可觸發或排除。
- 爆炸命中可附加 `neurotoxin_interval_buff3`。之後毒素 tick 以 `attack_type=buff`、保留來源物品呼叫 `Attack.execute`，但未傳命中部位；通常沒有弱點旗標，除非外部保證弱點關鍵字覆寫判定。`cycle_chem` 只是切換，不是攻擊事件。
- 完整共通條件與計算見 [玩家說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
