# 連續發射(Blaze Away)：電弧步槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_arc_rifle_p1_power_bonus_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_arc_rifle_p1.lua#L60-L107)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_arc_rifle_p1_buff_templates.lua#L15-L20)。
- 適用型號：電弧步槍 布蘭克斯 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號與 Mark：電弧步槍 布蘭克斯 Mk IV（Arc Rifle Branx Mk IV，`arc_rifle_p1_m1`）.
- 每步 I–IV：1%、1.5%、2%、3%；彈匣門檻 10%。
- 特殊模式與效果：按住特殊鍵蓄勢後接槍托近戰掃擊；不增加射擊計數，掃擊的傷害設定檔會讀取一般攻擊力量修正。
- 實際散佈清除時間（仍須停止射擊且動作允許清除）：arc_rifle_p1_m1：未瞄準 arc_rifle_p1_m1_spread_hip（站立／移動 0.25 秒）；瞄準／架槍 arc_rifle_p1_m1_spread_ads（站立／移動 0.10 秒）。
- 共用持用條件與五步上限；[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
