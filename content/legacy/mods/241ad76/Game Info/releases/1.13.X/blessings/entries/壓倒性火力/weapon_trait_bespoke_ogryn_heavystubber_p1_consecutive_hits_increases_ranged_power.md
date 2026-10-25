# 壓倒性火力(Overwhelming Fire)：雙鏈重型機槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_heavystubber_p1_consecutive_hits_increases_ranged_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p1.lua#L280-L361)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p1_buff_templates.lua#L31-L33)。
- 適用型號：雙鏈重型機槍 克魯克 Mk V、雙鏈重型機槍 戈爾貢努姆 Mk IV、雙鏈重型機槍 阿克利斯 Mk VII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 克魯克 Mk V（ogryn_heavystubber_p1_m1）、戈爾貢努姆 Mk IV（ogryn_heavystubber_p1_m2）、阿克利斯 Mk VII（ogryn_heavystubber_p1_m3）。
- 三型號均每 4 次同一目標的後續合格命中增加一層；特殊刺擊可更新追蹤，但該次近戰不讀取本項遠程威力。
- 新目標的第一個合格命中會重設追蹤、清除既有有效層且不刷新計時；只有同目標後續合格命中會更新共用 2 秒計時。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
