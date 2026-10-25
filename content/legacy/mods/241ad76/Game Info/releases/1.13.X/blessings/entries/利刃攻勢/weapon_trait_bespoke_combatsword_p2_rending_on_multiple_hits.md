# 利刃攻勢(Bladed Momentum)：重劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_combatsword_p2_rending_on_multiple_hits`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p2.lua#L326-L401)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p2_buff_templates.lua#L23-L24)。
- 適用型號：重劍 圖妥斯基 Mk VI、重劍 圖妥斯基 Mk VII、重劍 圖妥斯基 Mk IX。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：重劍 圖妥斯基 Mk VI（Heavy Sword Turtolsky Mk VI）、重劍 圖妥斯基 Mk VII（Heavy Sword Turtolsky Mk VII）、重劍 圖妥斯基 Mk IX（Heavy Sword Turtolsky Mk IX）。
- Mark combatsword_p2_m1、m2、m3 均接入同一 P2 trait 與 parent/child；每層值 I–IV 為 +5%、+6%、+7%、+8%，時間與有效層數按主頁表。
- 普通輕擊、重擊、M3 額外重擊連段、特殊揮掃及推後追擊走 ActionSweep；獨立 action_push 走 Attack type push，不符合此祝福的近戰命中檢查。
- 本族沒有投射物或遠程攻擊路徑。
- [完整說明](README.md)

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
