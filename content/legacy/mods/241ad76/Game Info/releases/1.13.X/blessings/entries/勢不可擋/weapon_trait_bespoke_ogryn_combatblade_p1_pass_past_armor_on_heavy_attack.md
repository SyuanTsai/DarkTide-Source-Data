# 勢不可擋(Unstoppable Force)：砍刀實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_combatblade_p1_pass_past_armor_on_heavy_attack`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L221-L260)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_combatblade_p1_buff_templates.lua#L76-L110)。
- 適用型號：砍刀 克魯克 Mk VI、砍刀 蠻牛屠夫 Mk III、砍刀 克魯克 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- [來源索引](SOURCE_INDEX.md#執行與計算)｜[武器型號](WEAPON_COMPATIBILITY.md)｜[等級表](TIER_VALUES.md)
- 克魯克 Mk VI、蠻牛屠夫 Mk III、克魯克 Mk IV 共用同一 trait 與四級值，但連段 profile 不同：Mk VI 有重型推擊連段；Mk III 的直接推擊追擊雖選重型 profile，預設 push-follow 輸入不自動完成，所以只符合持用中的 armor-abort 例外；Mk IV 的推擊追擊採 light profile。三型號 special uppercut 均採 light profile。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
