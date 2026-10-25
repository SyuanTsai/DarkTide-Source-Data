# 擊倒(Smackdown)：惡霸棍棒實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_club_p2_increased_crit_chance_on_staggered_weapon_special_hit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L367-L416)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p2_buff_templates.lua#L19-L20)。
- 適用型號：惡霸棍棒 「布倫特專用」 Mk I、惡霸棍棒 「布倫特得意之作」 Mk II、惡霸棍棒 「布倫特猛擊」 Mk IIIb。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 適用惡霸棍棒「布倫特專用」Mk I、「布倫特得意之作」Mk II、「布倫特猛擊」Mk IIIb；兩種特殊拍擊均符合。
- Mk II 特殊後續拳擊使用 `ogryn_club_light_punch`，有特殊標記，故也可觸發；Mk IIIb 同名拳擊使用一般 `ogryn_club_light_linesman`，只能享有效窗口加成。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
