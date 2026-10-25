# 狡猾射手(Trickshooter)：快拔左輪手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_stubrevolver_p1_chained_weakspot_hits_increases_power`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_stubrevolver_p1.lua#L288-L355)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_stubrevolver_p1_buff_templates.lua#L16-L17)。
- 適用型號：快拔左輪手槍 紮羅娜 Mk IIa、快拔左輪手槍 阿格里皮娜 Mk XIV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 實際 UI 型號：快拔左輪手槍 紮羅娜 Mk IIa、快拔左輪手槍 阿格里皮娜 Mk XIV。兩 Mark 的腰射與瞄準皆為 hitscan；Mk XIV 的腰射與瞄準使用不同 hitscan template。兩型號皆有手槍鞭擊及追擊 Sweep；Mk IIa 為分段裝填，Mk XIV 為單一起始裝填 action。
- 兩 Mark 共用同一 Revolver P1 trait；沒有接入本項的投射物或蓄力射擊。型號差異見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
