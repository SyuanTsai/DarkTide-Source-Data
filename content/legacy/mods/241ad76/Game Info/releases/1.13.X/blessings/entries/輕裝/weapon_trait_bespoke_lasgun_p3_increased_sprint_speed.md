# 輕裝(Stripped Down)：偵察鐳射槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_lasgun_p3_increased_sprint_speed`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p3.lua#L168-L197)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p3_buff_templates.lua#L15)。
- 適用型號：偵察鐳射槍 奧克塔蘭 Mk VIc、偵察鐳射槍 奧克塔蘭 Mk XII、偵察鐳射槍 奧克塔蘭 Mk XIV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

適用的實際 UI 型號：偵察鐳射槍 奧克塔蘭 Mk VIc (Recon Lasgun Accatran Mk VIc) (`lasgun_p3_m1`)、偵察鐳射槍 奧克塔蘭 Mk XII (Recon Lasgun Accatran Mk XII) (`lasgun_p3_m2`)、偵察鐳射槍 奧克塔蘭 Mk XIV (Recon Lasgun Accatran Mk XIV) (`lasgun_p3_m3`)。這些型號共用同一 trait、I–IV 門檻與 ranged-dodge 條件；本祝福圖示為 `weapon_trait_056`。

[完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
