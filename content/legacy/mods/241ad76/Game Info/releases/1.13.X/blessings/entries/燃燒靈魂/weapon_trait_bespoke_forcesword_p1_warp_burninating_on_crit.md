# 燃燒靈魂(Blazing Spirit)：烈焰力場劍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_forcesword_p1_warp_burninating_on_crit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L574-L629)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L65)。
- 適用型號：烈焰力場劍 朦朧 Mk II、烈焰力場劍 戴莫斯 Mk IV、烈焰力場劍 伊利斯 Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- [來源索引](SOURCE_INDEX.md#執行與計算)｜[武器型號](WEAPON_COMPATIBILITY.md)｜[等級表](TIER_VALUES.md)
- 朦朧 Mk II、戴莫斯 Mk IV、伊利斯 Mk V 共用同一實際 trait 與 I–IV 數值。一般掃掠皆是近戰；特殊模式啟用後，同一掃掠讀取特殊 active profile。前兩個 Mark 的特殊 profile 為重型力場劍傷害型；伊利斯 Mk V 改用特殊輕／重力場劍橫掃 profile。是否觸發仍看該次命中是否造成傷害並實際暴擊。
- M1／M2 的指定輕／重掃掠使用 light_sticky／heavy_sticky 黏附追加命中；追加攻擊透過 Attack.execute 傳入同一武器、近戰攻擊類型和當下暴擊旗標，profile 未略過 on_hit，故正傷害暴擊也可觸發。閃避脫離黏附的 sticky_dodge_push attack 值及各護甲 attack 修正皆為 0，無法通過正傷害檢查。M3 不使用 sticky 設定，且改用 WeaponSpecialDeactivateAfterNumActivations；M1／M2 則使用 WeaponSpecialWarpChargedAttacks。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
