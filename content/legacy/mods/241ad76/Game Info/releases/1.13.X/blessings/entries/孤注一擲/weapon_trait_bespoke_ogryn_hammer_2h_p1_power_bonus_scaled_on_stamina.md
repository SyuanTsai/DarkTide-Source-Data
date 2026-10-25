# 孤注一擲(All or Nothing)：碎骨者實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_hammer_2h_p1_power_bonus_scaled_on_stamina`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_hammer_2h_p1.lua#L113-L155)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_hammer_2h_p1_buff_templates.lua#L19-L27)。
- 適用型號：碎骨者 克魯克 Mk IIa。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

[查看逐型號對應](WEAPON_COMPATIBILITY.md)。碎骨者 共核對 1 個實際標記；本武器依 own tier 使用每階 `0.125` 耐力比例步幅及最多五階。 本型號步幅為 12.5 個百分點、每階係數及卡面上限與其他八種不同。 各標記實際動作與耐力樣板：碎骨者 克魯克 Mk IIa：耐力樣板 `tank_pickaxe_m1`；9 個 Sweep、4 個重擊 Sweep；特殊／特殊啟用 Sweep：action_heavy_1_special, action_heavy_2_special；推擊後 Sweep：action_pushfollow。純推擊動作：action_push。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
