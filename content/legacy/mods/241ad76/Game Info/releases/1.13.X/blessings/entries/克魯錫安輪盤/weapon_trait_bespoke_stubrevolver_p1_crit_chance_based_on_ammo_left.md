# 克魯錫安輪盤(Crucian Roulette)：快拔左輪手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_stubrevolver_p1_crit_chance_based_on_ammo_left`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_stubrevolver_p1.lua#L248-L287)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_stubrevolver_p1_buff_templates.lua#L22)。
- 適用型號：快拔左輪手槍 紮羅娜 Mk IIa、快拔左輪手槍 阿格里皮娜 Mk XIV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 兩型號每發加成相同，使用手槍一組數值；射擊與鞭打都可讀取通用爆擊池。當時上限5發、剩1發時缺4發，完全空匣則0。

- [左輪彈匣定義](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_ammo_templates.lua#L595-L618)。

- **快拔左輪手槍 紮羅娜 Mk IIa**：[普通射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua#L191)、[瞄準射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua#L262)、[近戰](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua#L562)。

- **快拔左輪手槍 阿格里皮娜 Mk XIV**：[普通射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua#L191)、[瞄準射擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua#L262)、[近戰](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua#L473)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
