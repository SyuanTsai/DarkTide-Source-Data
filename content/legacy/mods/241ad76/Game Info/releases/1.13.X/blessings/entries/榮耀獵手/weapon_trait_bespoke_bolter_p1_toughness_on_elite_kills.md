# 榮耀獵手(Gloryhunter)：矛頭爆矢槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_bolter_p1_toughness_on_elite_kills`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_bolter_p1.lua#L192-L222)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_bolter_p1_buff_templates.lua#L18)。
- 適用型號：矛頭爆矢槍 洛克 Mk IIb、矛頭爆矢槍 洛克 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[榮耀獵手玩家說明](README.md)
- 實際綁定型號：矛頭爆矢槍 洛克 Mk IIb、矛頭爆矢槍 洛克 Mk III。
- 本變體 I–IV：I 10%／II 12%／III 14%／IV 16%。
- 攻擊模式差異：Mk IIb／Mk III 均有腰射及瞄準 hitscan 射擊，另有特殊動作推擊 sweep；未找到充能或手持投擲動作。 共用條件沒有對射擊／推擊另加限制。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
