# 連續發射(Blaze Away)：撕裂者自動手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_autopistol_p1_power_bonus_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autopistol_p1.lua#L97-L144)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autopistol_p1_buff_templates.lua#L21-L26)。
- 適用型號：撕裂者自動手槍 尤斯 Mk IV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號與 Mark：撕裂者自動手槍 尤斯 Mk IV（Shredder Autopistol Ius Mk IV，`autopistol_p1_m1`）.
- 每步 I–IV：5%、6%、7%、8%；彈匣門檻 10%。
- 特殊模式與效果：特殊鍵切換手電筒；不是攻擊，不增加射擊計數，也沒有特殊傷害設定檔可套用本項。
- 實際散佈清除時間（仍須停止射擊且動作允許清除）：autopistol_p1_m1：未瞄準 default_autopistol_assault（站立 0.50 秒；移動沿用 0.50 秒）；瞄準／架槍 default_autopistol_spraynpray（架槍 0.25 秒）。
- 共用持用條件與五步上限；[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
