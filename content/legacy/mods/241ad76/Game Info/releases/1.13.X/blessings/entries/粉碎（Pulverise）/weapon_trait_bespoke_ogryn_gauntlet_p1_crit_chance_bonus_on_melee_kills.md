# 粉碎（Pulverise）：擲彈兵臂鎧實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_gauntlet_p1_crit_chance_bonus_on_melee_kills`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_gauntlet_p1.lua#L248-L301)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_gauntlet_p1_buff_templates.lua#L65-L77)。
- 適用型號：擲彈兵臂鎧 布拉斯托姆 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 此實作對應擲彈兵臂鎧 布拉斯托姆 Mk III。數值、觸發及完整爆炸差異集中於[玩家說明](README.md)與[來源及公式](SOURCE_INDEX.md)。

- 特殊直接拳擊委派至近戰 sweep；其爆炸分類及爆擊旗標與普通榴彈不同，見[特殊攻擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_melee_explosive.lua#L61-L103)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
