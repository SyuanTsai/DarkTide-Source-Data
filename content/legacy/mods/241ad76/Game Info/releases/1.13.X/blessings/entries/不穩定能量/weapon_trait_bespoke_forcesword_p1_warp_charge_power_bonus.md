# 不穩定能量(Unstable Power)：烈焰力場劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcesword_p1_warp_charge_power_bonus`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L96-L138)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L18-L22)。
- 適用型號：烈焰力場劍 朦朧 Mk II、烈焰力場劍 戴莫斯 Mk IV、烈焰力場劍 伊利斯 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- **實際型號**：烈焰力場劍 朦朧 Mk II、戴莫斯 Mk IV、伊利斯 Mk V，分別對應 forcesword_p1_m1/m2/m3。
- 三 Mark 使用相同 tier p 與 wrapper；單手 formatter 把每階 p 乘四顯示最高值。Mk II 使用 light_force_sword／heavy_force_sword_smiter；Mk IV 使用 light_force_sword_stab／heavy_force_sword；Mk V 使用 light_force_sword／heavy_force_sword。
- 只有 Mk II/Mk IV 設定 light_sticky 與 heavy_sticky。兩者黏附追加命中各自執行 Attack 時讀玩家力量快取；Mk V 不套用此 sticky 結論。各 Mark 的 special-active profile 仍按自身設定選擇，最後輸出依 profile 結算。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
