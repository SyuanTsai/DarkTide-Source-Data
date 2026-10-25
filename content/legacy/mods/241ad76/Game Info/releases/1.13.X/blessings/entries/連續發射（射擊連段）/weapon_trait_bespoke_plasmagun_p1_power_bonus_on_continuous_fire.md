# 連續發射（射擊連段）(Blaze Away)：電漿槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_plasmagun_p1_power_bonus_on_continuous_fire`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_plasmagun_p1.lua#L111-L154)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_plasmagun_p1_buff_templates.lua#L17-L22)。
- 適用型號：電漿槍 M35熔岩核心 Mk II、電漿槍 M35熔岩核心 Mk III。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際型號：電漿槍 M35熔岩核心 Mk II、電漿槍 M35熔岩核心 Mk III（Plasma Gun M35 Magnacore Mk II / Plasma Gun M35 Magnacore Mk III；plasmagun_p1_m1、plasmagun_p1_m2）。
- I–IV 每步 5%/6%/7%/8%，最多 5 步。
- 普通與蓄力 hitscan 射擊各是一個動作步；普通動作耗 3 發、蓄力耗 1–8 發仍各算一次。蓄力 windup 保留；裝填、排氣與過熱不增加／保留。
- Mk II／III 動作模板分開核對，不由同 weapon id 推定完全相同。
- [完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
