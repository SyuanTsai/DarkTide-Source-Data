# 完美一擊(Perfect Strike)：作戰大錘&板盾實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_ogryn_powermaul_slabshield_p1_pass_past_armor_on_crit`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1.lua#L202-L241)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_powermaul_slabshield_p1_buff_templates.lua#L23)。
- 適用型號：作戰大錘&板盾 歐洛克斯 Mk II & Mk III、作戰大錘&板盾 果羅姆 Mk I & Mk V。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 歐洛克斯 Mk II & Mk III／果羅姆 Mk I & Mk V 共用數值；直接揮擊掃掠、武器特殊格擋、純推擊為 push。
- 共通條件、首次生效、切換與算例見[完整說明](README.md)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
