# 近身平射(Point Blank)：快拔左輪手槍實作

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[型號對應](WEAPON_COMPATIBILITY.md)

- 實作：`weapon_trait_bespoke_stubrevolver_p1_crit_chance_bonus_on_melee_kills`。
- 等級覆寫：[trait](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_stubrevolver_p1.lua#L356-L409)。
- Buff接入：[繼承與覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_stubrevolver_p1_buff_templates.lua#L23)。
- 適用型號：快拔左輪手槍 紮羅娜 Mk IIa、快拔左輪手槍 阿格里皮娜 Mk XIV。

## 機制與公式

- 共用觸發、狀態與完整公式見[本祝福來源與公式](SOURCE_INDEX.md)。

- 持續2.5秒；普通／瞄準射擊受遠程機率加成，鞭打及接續鞭打擊殺可觸發。
- 每級加成與共通計時、刷新規則集中於本祝福頁；本頁僅列實作差異與來源。
- [stubrevolver_p1_m1 action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua#L188-L257)。
- [stubrevolver_p1_m1 action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua#L258-L324)。
- [stubrevolver_p1_m1 action_pistol_whip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua#L553-L646)。
- [stubrevolver_p1_m1 action_pistol_whip_followup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m1.lua#L647-L748)。
- [stubrevolver_p1_m2 action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua#L187-L257)。
- [stubrevolver_p1_m2 action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua#L258-L329)。
- [stubrevolver_p1_m2 action_pistol_whip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua#L464-L557)。
- [stubrevolver_p1_m2 action_pistol_whip_followup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/stub_pistols/stubrevolver_p1_m2.lua#L558-L659)。

- 等級與數值：[集中等級表](TIER_VALUES.md)。
- 結算與算例：[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)。
- 原文比較：[同一名稱與描述鍵](LOCALIZATION_COMPARISON.md)。
