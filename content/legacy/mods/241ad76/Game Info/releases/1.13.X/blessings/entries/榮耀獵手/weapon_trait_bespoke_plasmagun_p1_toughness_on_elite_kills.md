# 榮耀獵手(Gloryhunter)：電漿槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_plasmagun_p1_toughness_on_elite_kills`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L10-L40)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L14)。
- 適用型號：電漿槍 M35熔岩核心 Mk II、電漿槍 M35熔岩核心 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[榮耀獵手玩家說明](README.md)
- 實際綁定型號：電漿槍 M35熔岩核心 Mk II、電漿槍 M35熔岩核心 Mk III。
- 本變體 I–IV：I 17.5%／II 20%／III 22.5%／IV 25%。
- 攻擊模式差異：Mk II／Mk III 均有普通與蓄力 hitscan 射擊、充能與過熱爆炸動作；過熱爆炸本身是否保留 attacking_item 依實際擊殺事件判定。 共用模板沒有對 charge_level 或 weapon-special 旗標增加排除條件。
- 實際對敵過熱範圍爆炸保留電漿槽物品，若擊殺精英且仍持用可觸發；過熱自傷不是精英擊殺。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
