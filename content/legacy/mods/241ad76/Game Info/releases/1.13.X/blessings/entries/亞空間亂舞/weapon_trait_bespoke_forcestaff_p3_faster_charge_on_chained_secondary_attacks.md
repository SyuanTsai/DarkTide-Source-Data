# 亞空間亂舞(Warp Flurry)：電流力場法杖實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcestaff_p3_faster_charge_on_chained_secondary_attacks`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p3.lua#L223-L271)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p3_buff_templates.lua#L27-L37)。
- 適用型號：電流力場法杖 諾瑪努斯 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 諾瑪努斯 Mk VI 的合格釋放為 action_shoot_charged，kind 為 chain_lightning，charge template 的 lerp_basic／lerp_perfect 時間端點為 1.4／0.7 秒；兩端點不是獨立攻擊模式。
- 連鎖閃電是本項合格的蓄力釋放；近戰特殊攻擊不符合。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
