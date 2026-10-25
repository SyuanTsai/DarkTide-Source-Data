# 轉移反噬(Transfer Peril)：電流力場法杖實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcestaff_p3_vents_warpcharge_on_weakspot_hits`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcestaff_p3.lua#L355-L384)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcestaff_p3_buff_templates.lua#L50-L52)。
- 適用型號：電流力場法杖 諾瑪努斯 Mk VI。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- **實際型號**：電流力場法杖 諾瑪努斯 Mk VI。
- 普通射擊為直接投射物；蓄力為連鎖閃電，`ChainLightning.execute_attack` 將 `hit_zone_name` 設為 `center_mass`。通用程式仍按目標 hit-zone 對照計算實際弱點旗標，只有旗標為真才觸發；瞄準方向不會把固定 hit-zone 改成 head，且不能只憑 `center_mass` 名稱判定命中一定不是弱點。特殊鍵的刺擊、輕擊及重擊走近戰掃擊，實際弱點旗標為真時可觸發。推擊本體及手動排放反噬是分開動作。
- 數值採 P1/P3 共用欄；通用觸發與結算見主頁及執行來源。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
