# 連續發射（射擊連段）(Blaze Away)：震盪槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_thumper_p2_power_bonus_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_thumper_p2.lua#L40-L87)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_thumper_p2_buff_templates.lua#L15-L20)。
- 適用型號：震盪槍 洛倫茲 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：震盪槍 洛倫茲 Mk VI（Rumbler Lorenz Mk VI，ogryn_thumper_p1_m2）。
- I–IV 每步 6%/7%/8%/9%，最多 5 步。
- hip／瞄準各是一個榴彈動作；hip 未設 keep_combo、aimed 設 keep_combo。直接命中、引信與爆炸不各加一步；zoom／裝填保留；bash 轉換含重設邊。
- 榴彈保存發射時玩家力量快照，static_power_level=500 仍進後續一般 PowerLevel 修正；切出不重寫既有快照，剛增加但尚未快取的步不保證包含。
- [完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
