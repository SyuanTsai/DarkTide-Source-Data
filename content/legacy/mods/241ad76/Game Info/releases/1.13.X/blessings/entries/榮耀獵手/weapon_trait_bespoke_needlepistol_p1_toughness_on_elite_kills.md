# 榮耀獵手(Gloryhunter)：針彈手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_needlepistol_p1_toughness_on_elite_kills`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_needlepistol_p1.lua#L489-L519)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_needlepistol_p1_buff_templates.lua#L22)。
- 適用型號：針彈手槍 布蘭克斯 MkVI、針彈手槍 布蘭克斯 MKII。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[榮耀獵手玩家說明](README.md)
- 實際綁定型號：針彈手槍 布蘭克斯 MkVI、針彈手槍 布蘭克斯 MKII。
- 本變體 I–IV：I 17.5%／II 20%／III 22.5%／IV 25%。
- 攻擊模式差異：MkVI／MKII 均有腰射及瞄準 hitscan 射擊；切換化學模式是 toggle，不單獨造成擊殺，未見 melee sweep／充能。 切換模式後的射擊仍須以同一物品產生擊殺事件。
- 追加毒傷、MkVI毒爆／MKII毒氣死亡爆炸沒有保留武器物品，不能觸發；一般彈丸的合格精英直接擊殺仍可觸發。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
