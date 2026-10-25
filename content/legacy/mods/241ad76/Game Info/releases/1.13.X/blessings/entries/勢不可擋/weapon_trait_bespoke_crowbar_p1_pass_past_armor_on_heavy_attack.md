# 勢不可擋(Unstoppable Force)：撬棍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_crowbar_p1_pass_past_armor_on_heavy_attack`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_crowbar_p1.lua#L445-L484)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_crowbar_p1_buff_templates.lua#L43-L77)。
- 適用型號：撬棍 科技教士 型號6。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- [來源索引](SOURCE_INDEX.md#執行與計算)｜[武器型號](WEAPON_COMPATIBILITY.md)｜[等級表](TIER_VALUES.md)
- 科技教士 Mk VI 的一般重擊與特殊啟動重擊都使用重型 profile；特殊重擊另有 sticky 後續傷害。後續 sticky Attack 沒有自動完成旗標，不取得本祝福的完全蓄力傷害／貫穿效果。輕擊與推擊追擊採 light profile；純推擊是 push。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
