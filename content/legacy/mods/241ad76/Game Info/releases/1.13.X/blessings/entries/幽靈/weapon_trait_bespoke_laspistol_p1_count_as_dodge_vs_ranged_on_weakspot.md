# 幽靈(Ghost)：重型鐳射手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_laspistol_p1_count_as_dodge_vs_ranged_on_weakspot`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_laspistol_p1.lua#L260-L289)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_laspistol_p1_buff_templates.lua#L15)。
- 適用型號：重型鐳射手槍 奧克塔蘭MG Mk II、重型鐳射手槍 卡特雷爾 Mk X。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 腰射與瞄準射擊可觸發；普通／靈能推擊按軀幹命中判定，保證弱點效果仍須同武器來源。
- 本變體數值與共通觸發條件見集中頁；以下逐型號動作來源核對本變體的差異。
- [Heavy Laspistol P1 M1 hip/aimed hit-scan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L203-L333)。
- [Heavy Laspistol P1 M1 normal push action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L498-L568)。
- [Heavy Laspistol P1 M1 Psyker push action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m1.lua#L570-L610)。
- [Heavy Laspistol P1 M3 hip/aimed hit-scan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m3.lua#L203-L336)。
- [Heavy Laspistol P1 M3 normal push action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m3.lua#L503-L574)。
- [Heavy Laspistol P1 M3 Psyker push action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/laspistols/laspistol_p1_m3.lua#L575-L615)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
