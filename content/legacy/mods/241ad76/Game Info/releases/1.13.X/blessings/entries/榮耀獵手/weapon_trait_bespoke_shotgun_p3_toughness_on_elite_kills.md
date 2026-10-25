# 榮耀獵手(Gloryhunter)：獵人霰彈槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_shotgun_p3_toughness_on_elite_kills`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p3.lua#L868-L900)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p3_buff_templates.lua#L51-L53)。
- 適用型號：獵人霰彈槍 奧克塔蘭 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[榮耀獵手玩家說明](README.md)
- 實際綁定型號：獵人霰彈槍 奧克塔蘭 Mk III。
- 本變體 I–IV：I 10%／II 12%／III 14%／IV 16%。
- 攻擊模式差異：Accatran Enforcer Mk III 有腰射、瞄準及裝填中接續的 pellet 射擊；special action 是 toggle，不是獨立傷害動作。 每一擊殺事件仍只依 item／elite／held 條件判定。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
