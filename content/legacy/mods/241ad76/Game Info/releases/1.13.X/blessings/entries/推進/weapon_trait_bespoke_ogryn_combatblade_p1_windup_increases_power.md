# 推進(Thrust)：砍刀實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_combatblade_p1_windup_increases_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L397-L448)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_combatblade_p1_buff_templates.lua#L114-L115)。
- 適用型號：砍刀 克魯克 Mk VI、砍刀 蠻牛屠夫 Mk III、砍刀 克魯克 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用型號：砍刀 克魯克 Mk VI (ogryn_combatblade_p1_m1)、砍刀 蠻牛屠夫 Mk III (ogryn_combatblade_p1_m2)、砍刀 克魯克 Mk IV (ogryn_combatblade_p1_m3)。共用條件見[玩家說明](README.md)。
- 克魯克 Mk VI：推擊後於 .45 動作時間進入獨立 windup，重攻擊在 .5 動作時間銜接 heavy sweep；不套用 Mk III 的右輕路徑條件。
- 蠻牛屠夫 Mk III：右輕推擊後約 .45 動作時間進入 combo windup；首事件在 .5 動作時間觸發，light 銜接沒有等待門檻，必須等事件及後續 Buff/cache 更新後再輸入。
- 克魯克 Mk IV：沒有上述兩種專用推擊後 combo windup。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
