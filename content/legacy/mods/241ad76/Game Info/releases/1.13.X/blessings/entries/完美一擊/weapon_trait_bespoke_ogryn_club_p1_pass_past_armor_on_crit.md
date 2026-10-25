# 完美一擊(Perfect Strike)：廁所鏟實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_club_p1_pass_past_armor_on_crit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p1.lua#L262-L301)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p1_buff_templates.lua#L15)。
- 適用型號：廁所鏟 兇殘 Mk III、廁所鏟 兇殘 Mk XIX、廁所鏟 兇殘 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 兇殘 Mk III（M1）特殊拳擊走自身 ActionSweep。Mk XIX（M2）折鏟特殊走掃掠且沒有 push_templates 設定；Mk V（M3）折鏟特殊啟用折鏟特殊狀態且命中前目標存活，會另推動玩家後退（該擊之後即使擊殺目標仍可能後退），不推敵人、不建立第二次傷害 Attack。
- 共通條件、首次生效、切換與算例見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
