# 強力一擊：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Own I–IV tiers and formatter | [Own I–IV tiers and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L140-L189) |
| Base parent and child definitions | [Base parent and child definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L274-L365) |
| Event order and sweep hits | [Event order and sweep hits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L290) |
| Instakill and event dispatch | [Instakill and event dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L350-L395) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L12-L14) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L140-L189) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L12-L14) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L317-L366) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p2_buff_templates.lua#L16-L18) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L274-L299) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L300-L365) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L29-L76) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L132) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L182) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L434-L488) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L397-L429) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L196-L257) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L388-L452) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L757-L824) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L832-L877) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L881-L951) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1006-L1067) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L196-L257) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L388-L452) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L707-L771) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L829-L900) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L908-L953) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L957-L1026) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1080-L1142) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L788-L847) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L854-L904) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L961-L1010) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1014-L1089) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1103-L1121) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L806-L855) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L862-L911) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L918-L968) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1025-L1074) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1078-L1153) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1167-L1185) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L228-L287) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L451-L510) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L586-L645) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L856-L913) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L928-L970) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L992-L1061) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L1084-L1153) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L228-L287) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L452-L511) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L868-L925) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L939-L981) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L1003-L1072) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L1095-L1164) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L140-L199) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L350-L426) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L804-L879) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L883-L970) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L974-L1062) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L1274-L1331) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L1346-L1388) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/settings_templates/combat_knife_damage_profile_templates.lua#L79) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/settings_templates/combat_knife_damage_profile_templates.lua#L241) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/settings_templates/combat_knife_damage_profile_templates.lua#L372) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/settings_templates/combat_knife_damage_profile_templates.lua#L551) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/settings_templates/dual_shivs_damage_profile_templates.lua#L179) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/settings_templates/dual_shivs_damage_profile_templates.lua#L415) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/settings_templates/dual_shivs_damage_profile_templates.lua#L559) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/settings_templates/dual_shivs_damage_profile_templates.lua#L703) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/settings_templates/dual_shivs_damage_profile_templates.lua#L833) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L145) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L241) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L335) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L420) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L549) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L677) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L756) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L940) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/settings_templates/ogryn_club_damage_profile_templates.lua#L1076) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L438-L446) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L76-L86) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L623) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L669-L713) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L160-L187) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L285-L300) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_profiles/buff_damage_profile_templates.lua#L523-L533) |
| 本項觸發／動作／結算差異 | [本項觸發／動作／結算差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L42-L53) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- Own trait I–IV 將每層機率設為 0.01／0.02／0.03／0.04，formatter 為百分比且帶加號；父層上限為 5。三個 wrapper 都 clone base parent，指定各自 child template 並 clone 對應 child；own tier override 經父子覆寫傳到 child 的 killing_blow_chance。
- Child 以當前有效層數乘每層機率擲骰，條件為符合 item、近戰、重擊、目標存活且有 breed；再排除 captain／monster／ogryn／cultist_captain tags。通過後呼叫 killing_blow profile 執行 instakill。沒有幾何尺寸檢查，也沒有連擊狀態 gate。
- Parent 只在近戰重擊命中事件加一層，不檢查目標仍存活；同一掃掠對多目標會有多個命中事件。每批事件先由 child 檢查，再由 parent 加層，因此批次內擲骰使用先前層數。
- Child 保留一個預留副本；raw capacity 6 含預留 1，有效上限 5。共享計時每 5 秒未觸發移除一層，合格命中重設計時，上限命中亦可刷新。切換武器會因 held gate 暫停加成，既有計時照常流逝。
- Killing blow 的額外 Attack 仍可送出 on_hit/on_kill 事件；這不等於所有其他效果必定生效，接收端仍按自己的條件處理。

主控差異核對：全部三項own I–IV與父→子wrapper個別匹配；子層先建立再父層附加，事件批次先判定後加層。Parent.destroy42–53只適用於實際父效果移除，不能把切出武器說成全清；共用五秒計時切出仍更新，切回讀剩餘層。實際重擊傷害配置欄位、雙短刀型號3追擊與投擲路徑分別核對。秒殺Attack使用buff_damage_profile_templates.killing_blow523–533，不繼承原重擊強度或特殊旗標；因此不據此宣稱再加重擊層，也不概括停用其他一般事件。

有效層數 n=實際子層數−1，範圍0–5；保留子層使初始實際1層、有效0層，最大實際6層、有效5層。每層機率 p=.01/.02/.03/.04，子效果直接比較隨機值與 P=n×p，沒有另加文件推定的 clamp；本項最大為.20。同一事件批次先由子效果按舊n判定，父效果隨後按每個合格重擊事件增加一層、封頂五層並刷新共用五秒計時。IV n2/3/5 的 P為.08/.12/.20；百分點與相對增幅均指機率，不是傷害。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_195`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_195.png)｜[Issue附件](https://github.com/user-attachments/assets/9a68dfab-1a01-42c6-a9fa-ffe4d8295036)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 戰刃等級覆寫 | [戰刃等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L140-L189) |
| 戰刃Buff接入 | [戰刃Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L12-L13) |
| UI 戰刃 | [UI 戰刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L127) |
| 戰刃 卡塔昌 Mk III匯入 | [戰刃 卡塔昌 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L15) |
| 戰刃 卡塔昌 Mk III接入 | [戰刃 卡塔昌 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1434-L1436) |
| 戰刃 卡塔昌 Mk VI匯入 | [戰刃 卡塔昌 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L15) |
| 戰刃 卡塔昌 Mk VI接入 | [戰刃 卡塔昌 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1524-L1526) |
| 短刀等級覆寫 | [短刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L140-L189) |
| 短刀Buff接入 | [短刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L12-L13) |
| UI 短刀 | [UI 短刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L227) |
| 短刀 臨時拼湊 型號1匯入 | [短刀 臨時拼湊 型號1匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L14) |
| 短刀 臨時拼湊 型號1接入 | [短刀 臨時拼湊 型號1接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1500-L1502) |
| 短刀 臨時拼湊 型號3匯入 | [短刀 臨時拼湊 型號3匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L14) |
| 短刀 臨時拼湊 型號3接入 | [短刀 臨時拼湊 型號3接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1579-L1581) |
| 惡霸棍棒等級覆寫 | [惡霸棍棒等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_club_p2.lua#L317-L366) |
| 惡霸棍棒Buff接入 | [惡霸棍棒Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_club_p2_buff_templates.lua#L16-L17) |
| UI 惡霸棍棒 | [UI 惡霸棍棒](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L308) |
| 惡霸棍棒 「布倫特專用」 Mk I匯入 | [惡霸棍棒 「布倫特專用」 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L15) |
| 惡霸棍棒 「布倫特專用」 Mk I接入 | [惡霸棍棒 「布倫特專用」 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m1.lua#L1380-L1382) |
| 惡霸棍棒 「布倫特得意之作」 Mk II匯入 | [惡霸棍棒 「布倫特得意之作」 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L15) |
| 惡霸棍棒 「布倫特得意之作」 Mk II接入 | [惡霸棍棒 「布倫特得意之作」 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m2.lua#L1601-L1603) |
| 惡霸棍棒 「布倫特猛擊」 Mk IIIb匯入 | [惡霸棍棒 「布倫特猛擊」 Mk IIIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L15) |
| 惡霸棍棒 「布倫特猛擊」 Mk IIIb接入 | [惡霸棍棒 「布倫特猛擊」 Mk IIIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_clubs/ogryn_club_p2_m3.lua#L1695-L1697) |
