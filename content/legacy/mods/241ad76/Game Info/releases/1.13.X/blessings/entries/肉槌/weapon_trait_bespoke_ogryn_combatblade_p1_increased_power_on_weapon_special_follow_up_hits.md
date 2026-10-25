# 肉槌(Tenderiser)：砍刀實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_combatblade_p1_increased_power_on_weapon_special_follow_up_hits`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L181-L220)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_combatblade_p1_buff_templates.lua#L34-L75)。
- 適用型號：砍刀 克魯克 Mk VI、砍刀 蠻牛屠夫 Mk III、砍刀 克魯克 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際接入砍刀克魯克 Mk VI、蠻牛屠夫 Mk III、克魯克 Mk IV；三型號共用本頁各級數值與計數機制。

- 三者特殊上勾皆引用 `special_uppercut_plus`。Mk VI 使用預設基礎威力500，其餘兩型號明列500；這項接線差異沒有造成基礎威力數值差異，也不表示最終傷害一定相同。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
