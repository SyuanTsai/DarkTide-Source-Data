# 致命精準：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| autogun_p3 tier I-IV | [autogun_p3 tier I-IV](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p3.lua#L318-L357) |
| autogun_p3 wrapper clone | [autogun_p3 wrapper clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p3_buff_templates.lua#L17) |
| boltpistol_p1 tier I-IV | [boltpistol_p1 tier I-IV](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_boltpistol_p1.lua#L128-L167) |
| boltpistol_p1 wrapper clone | [boltpistol_p1 wrapper clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_boltpistol_p1_buff_templates.lua#L19) |
| galvanic_rifle_p1 tier I-IV | [galvanic_rifle_p1 tier I-IV](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L39-L78) |
| galvanic_rifle_p1 wrapper clone | [galvanic_rifle_p1 wrapper clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_galvanic_rifle_p1_buff_templates.lua#L12) |
| lasgun_p1 tier I-IV | [lasgun_p1 tier I-IV](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L360-L399) |
| lasgun_p1 wrapper clone | [lasgun_p1 wrapper clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p1_buff_templates.lua#L49) |
| ogryn_heavystubber_p2 tier I-IV | [ogryn_heavystubber_p2 tier I-IV](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L771-L810) |
| ogryn_heavystubber_p2 wrapper clone | [ogryn_heavystubber_p2 wrapper clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L65) |
| shared base wrapper | [shared base wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1880-L1888) |
| tier conditional override | [tier conditional override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L747) |
| held item slot | [held item slot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| additive stat type | [additive stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L759-L762) |
| neutral stat base | [neutral stat base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L1048-L1053) |
| crit+weakspot consumer | [crit+weakspot consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L749-L782) |
| base finesse extra | [base finesse extra](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L711) |
| sweep crit check | [sweep crit check](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L220-L224) |
| sweep damage forwarding | [sweep damage forwarding](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1486-L1501) |
| hitscan resolution | [hitscan resolution](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_hit_scan.lua#L145-L220) |
| direct hitscan weakspot | [direct hitscan weakspot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L210-L243) |
| bolt secondary explosion flags | [bolt secondary explosion flags](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L286-L320) |
| percentage formatter | [percentage formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L32) |
| trait tier value lookup | [trait tier value lookup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L43-L56) |
| UI weapon name composition | [UI weapon name composition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| formula review: damage_calculation.lua | [formula review: damage_calculation.lua](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L766-L782) |
| shoot action critical handling | [shoot action critical handling](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot.lua#L1021-L1038) |
| secondary hitscan explosion branches | [secondary hitscan explosion branches](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L269-L320) |
| explosion call argument positions | [explosion call argument positions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/explosion.lua#L57-L63) |
| sweep weakspot calculation | [sweep weakspot calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1352-L1362) |
| autogun shot handling definitions | [autogun shot handling definitions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_handling_templates/weapon_handling_templates.lua#L586-L602) |
| Bolt Pistol M1 hit-scan/explosion profile | [Bolt Pistol M1 hit-scan/explosion profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/settings_templates/boltpistol_hitscan_templates.lua#L11-L41) |
| Bolt Pistol M2 hit-scan/explosion profile | [Bolt Pistol M2 hit-scan/explosion profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/settings_templates/boltpistol_hitscan_templates.lua#L42-L72) |
| Galvanic direct hit-scan template | [Galvanic direct hit-scan template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/settings_templates/galvanic_rifle_hitscan_templates.lua#L18-L38) |
| Galvanic beam line effect | [Galvanic beam line effect](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/effects/player_line_effects.lua#L436-L454) |
| Autogun base bash profile | [Autogun base bash profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_damage_profile_templates.lua#L891-L935) |
| Autogun heavy bash profile | [Autogun heavy bash profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_damage_profile_templates.lua#L936-L968) |
| Bolt Pistol special profile | [Bolt Pistol special profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/settings_templates/boltpistol_damage_profile_templates.lua#L203-L239) |
| Galvanic weapon special push profile | [Galvanic weapon special push profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/settings_templates/galvanic_rifle_damage_profile_templates.lua#L197-L241) |
| wired special_action_name autogun_p3_m1 | [wired special_action_name autogun_p3_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua#L1183) |
| wired special_action_name autogun_p3_m2 | [wired special_action_name autogun_p3_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L1246) |
| wired special_action_name autogun_p3_m3 | [wired special_action_name autogun_p3_m3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m3.lua#L1191) |
| wired special_action_name boltpistol_p1_m1 | [wired special_action_name boltpistol_p1_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L833) |
| wired special_action_name boltpistol_p1_m2 | [wired special_action_name boltpistol_p1_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L833) |
| wired special_action_name galvanic_rifle_p1_m1 | [wired special_action_name galvanic_rifle_p1_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L1015) |
| wired special_action_name ogryn_heavystubber_p2_m1 | [wired special_action_name ogryn_heavystubber_p2_m1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L854) |
| wired special_action_name ogryn_heavystubber_p2_m2 | [wired special_action_name ogryn_heavystubber_p2_m2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L875) |
| wired special_action_name ogryn_heavystubber_p2_m3 | [wired special_action_name ogryn_heavystubber_p2_m3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L875) |
| action_shoot_hip | [action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua#L267-L352) |
| action_shoot_zoomed | [action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua#L353-L416) |
| action_bash | [action_bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua#L583-L676) |
| action_bash_heavy | [action_bash_heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua#L677-L770) |
| action_shoot_hip | [action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L289-L372) |
| action_shoot_zoomed | [action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L373-L438) |
| action_toggle_flashlight | [action_toggle_flashlight](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L539-L554) |
| action_toggle_flashlight_zoom | [action_toggle_flashlight_zoom](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L555-L573) |
| action_bash | [action_bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L647-L740) |
| action_bash_heavy | [action_bash_heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L741-L834) |
| action_shoot_hip | [action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m3.lua#L268-L353) |
| action_shoot_zoomed | [action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m3.lua#L354-L418) |
| action_bash | [action_bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m3.lua#L592-L685) |
| action_bash_heavy | [action_bash_heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m3.lua#L686-L779) |
| action_shoot_hip | [action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L208-L289) |
| action_shoot_zoomed | [action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L290-L370) |
| action_push | [action_push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L454-L547) |
| action_shoot_hip | [action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L208-L289) |
| action_shoot_zoomed | [action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L290-L370) |
| action_push | [action_push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L454-L547) |
| action_shoot_hip | [action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L263-L345) |
| action_shoot_zoomed | [action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L346-L410) |
| action_toggle_flashlight | [action_toggle_flashlight](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L512-L527) |
| action_toggle_flashlight_zoom | [action_toggle_flashlight_zoom](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L528-L546) |
| action_bash | [action_bash](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L547-L640) |
| action_shoot_hip | [action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L205-L279) |
| action_shoot_zoomed | [action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L280-L350) |
| action_toggle_flashlight | [action_toggle_flashlight](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L449-L466) |
| action_toggle_flashlight_zoom | [action_toggle_flashlight_zoom](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L467-L486) |
| action_shoot_hip | [action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L202-L276) |
| action_shoot_zoomed | [action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L277-L347) |
| action_toggle_flashlight | [action_toggle_flashlight](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L446-L463) |
| action_toggle_flashlight_zoom | [action_toggle_flashlight_zoom](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L464-L483) |
| action_shoot_hip | [action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L202-L277) |
| action_shoot_zoomed | [action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L278-L348) |
| action_toggle_flashlight | [action_toggle_flashlight](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L447-L464) |
| action_toggle_flashlight_zoom | [action_toggle_flashlight_zoom](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L465-L484) |
| action_shoot_hip | [action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L241-L321) |
| action_shoot_zoomed | [action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L322-L391) |
| action_toggle_flashlight | [action_toggle_flashlight](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L554-L589) |
| action_shoot_hip | [action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L243-L323) |
| action_shoot_zoomed | [action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L324-L394) |
| action_toggle_flashlight | [action_toggle_flashlight](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L557-L592) |
| action_shoot_hip | [action_shoot_hip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L243-L323) |
| action_shoot_zoomed | [action_shoot_zoomed](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L324-L394) |
| action_toggle_flashlight | [action_toggle_flashlight](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L557-L592) |
| 護甲與命中質量耗盡爆炸旗標 | [護甲與命中質量耗盡爆炸旗標](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L53-L139) |
| 直接命中後派送追加爆炸 | [直接命中後派送追加爆炸](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L226-L248) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- **Tier 與 wrapper**：五個完整 I–IV trait 都寫入 `stat_buffs.critical_strike_weakspot_damage`；四組為 `.7/.8/.9/1.0`，電能步槍 為 `.3/.4/.5/.6`。五個武器 wrapper 都 clone `BaseWeaponTraitBuffTemplates.crit_weakspot_finesse`。wrapper 同 key 的 `.5` conditional fallback 被 tier override 取代，不會另加 `.5`。該 stat 是 additive_multiplier，neutral base 為 1。

- **傷害消費端**：`damage_calculation.lua:768–770` 只有 `is_critical_strike AND hit_weakspot` 才讀取此 stat；`:777–782` 把它加入 finesse multiplier 並乘在 `base_finesse_damage`，不是整個 hit。此消費端沒有 ranged-only gate，故仍持用這些遠程武器的 melee sweep 可走同一公式，但仍須同時符合兩旗標。

- **攻擊路徑**：12 個模型的 hip／zoom action 都是 `shoot_hit_scan`。Hitscan 為直接目標解析 weakspot，並把射擊 action critical flag 傳入 direct damage。自動／burst handling 不會為祝福生成層數。

- **切換與首次生效**：被動 wrapper 沒有 proc event、堆疊、計時器或首次命中條件。stat 由目前 wielded slot conditional 決定；離手條件為 false，切回後條件重新成立。來源沒有提供同一 frame 的實測順序，本文不宣稱已測。

- **特殊分支**：自動槍基本／重型 bash、爆彈手槍 `action_push`、電能步槍 bash 為 melee sweep；如同時爆擊及弱點命中，可套用。鐳射槍／重伐木槍 special 是無傷害的 flashlight toggle。爆彈手槍 secondary explosion 的 critical flag 明確為 false。

- **擊殺爆炸分支**：`RangedAction.hitmass_explosion` 在命中質量耗盡且符合距離條件時，依擊殺／未閃避選擇不同爆炸模板；建立爆炸同樣明確傳入 `is_critical_strike=false`，不取得本項加成。

- **公式**：`D_before=B+F(1+c)`；`D_after=B+F(1+c+h)`；`ΔD=Fh`；整體相對增幅為 `Fh/[B+F(1+c)]`。`h` 是同階 finesse extra 加成，因此不乘 `B`。

- **tier 代入**：自動槍、爆彈手槍、步兵鐳射槍、重伐木槍 I–IV `h=.7/.8/.9/1.0`；電能步槍 I–IV `h=.3/.4/.5/.6`。

- 上式描述本項作用的靈巧階段；B、F與既有c均為明示假設，其他轉換與下游倍率需依完整結算處理。若同次命中同時爆擊與弱點，以合併後的一份基礎靈巧額外傷害作F，不重複相加。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_050`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_050.png)｜[Issue附件](https://github.com/user-attachments/assets/fe96b700-e959-4d2e-9e69-7786cf5443a5)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 機動自動槍等級覆寫 | [機動自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p3.lua#L318-L357) |
| 機動自動槍Buff接入 | [機動自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p3_buff_templates.lua#L17) |
| UI 機動自動槍 | [UI 機動自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L694) |
| 機動自動槍 哥倫努 Mk III匯入 | [機動自動槍 哥倫努 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua#L17) |
| 機動自動槍 哥倫努 Mk III接入 | [機動自動槍 哥倫努 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m1.lua#L1031-L1033) |
| 機動自動槍 格拉亞 Mk VII匯入 | [機動自動槍 格拉亞 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L17) |
| 機動自動槍 格拉亞 Mk VII接入 | [機動自動槍 格拉亞 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m2.lua#L1094-L1096) |
| 機動自動槍 阿格里皮娜 Mk IX匯入 | [機動自動槍 阿格里皮娜 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m3.lua#L17) |
| 機動自動槍 阿格里皮娜 Mk IX接入 | [機動自動槍 阿格里皮娜 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p3_m3.lua#L1039-L1041) |
| 爆彈手槍等級覆寫 | [爆彈手槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_boltpistol_p1.lua#L128-L167) |
| 爆彈手槍Buff接入 | [爆彈手槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_boltpistol_p1_buff_templates.lua#L19) |
| UI 爆彈手槍 | [UI 爆彈手槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L748) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk IV匯入 | [爆彈手槍 戈德溫–布蘭克斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L16) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk IV接入 | [爆彈手槍 戈德溫–布蘭克斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m1.lua#L769-L771) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk VI匯入 | [爆彈手槍 戈德溫–布蘭克斯 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L16) |
| 爆彈手槍 戈德溫–布蘭克斯 Mk VI接入 | [爆彈手槍 戈德溫–布蘭克斯 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/bolt_pistols/boltpistol_p1_m2.lua#L769-L771) |
| 電能步槍等級覆寫 | [電能步槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_galvanic_rifle_p1.lua#L39-L78) |
| 電能步槍Buff接入 | [電能步槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_galvanic_rifle_p1_buff_templates.lua#L12) |
| UI 電能步槍 | [UI 電能步槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L857) |
| 電能步槍 布蘭克斯 Mk CV匯入 | [電能步槍 布蘭克斯 Mk CV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L17) |
| 電能步槍 布蘭克斯 Mk CV接入 | [電能步槍 布蘭克斯 Mk CV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/galvanic_rifle/galvanic_rifle_p1_m1.lua#L863-L865) |
| 步兵鐳射槍等級覆寫 | [步兵鐳射槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p1.lua#L360-L399) |
| 步兵鐳射槍Buff接入 | [步兵鐳射槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p1_buff_templates.lua#L49) |
| UI 步兵鐳射槍 | [UI 步兵鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L870) |
| 步兵鐳射槍 卡特雷爾 Mk VII匯入 | [步兵鐳射槍 卡特雷爾 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L17) |
| 步兵鐳射槍 卡特雷爾 Mk VII接入 | [步兵鐳射槍 卡特雷爾 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m1.lua#L714-L716) |
| 步兵鐳射槍 卡特雷爾 Mk IIb匯入 | [步兵鐳射槍 卡特雷爾 Mk IIb匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L15) |
| 步兵鐳射槍 卡特雷爾 Mk IIb接入 | [步兵鐳射槍 卡特雷爾 Mk IIb接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m2.lua#L692-L694) |
| 步兵鐳射槍 卡特雷爾 Mk IX匯入 | [步兵鐳射槍 卡特雷爾 Mk IX匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L15) |
| 步兵鐳射槍 卡特雷爾 Mk IX接入 | [步兵鐳射槍 卡特雷爾 Mk IX接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p1_m3.lua#L693-L695) |
| 重伐木槍等級覆寫 | [重伐木槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_heavystubber_p2.lua#L771-L810) |
| 重伐木槍Buff接入 | [重伐木槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_heavystubber_p2_buff_templates.lua#L65) |
| UI 重伐木槍 | [UI 重伐木槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1002) |
| 重伐木槍 克魯克 Mk IIa匯入 | [重伐木槍 克魯克 Mk IIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L15) |
| 重伐木槍 克魯克 Mk IIa接入 | [重伐木槍 克魯克 Mk IIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m1.lua#L794-L796) |
| 重伐木槍 戈爾貢努姆 Mk IIIa匯入 | [重伐木槍 戈爾貢努姆 Mk IIIa匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L15) |
| 重伐木槍 戈爾貢努姆 Mk IIIa接入 | [重伐木槍 戈爾貢努姆 Mk IIIa接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m2.lua#L815-L817) |
| 重伐木槍 阿克利斯 Mk II匯入 | [重伐木槍 阿克利斯 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L15) |
| 重伐木槍 阿克利斯 Mk II接入 | [重伐木槍 阿克利斯 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_heavystubbers/ogryn_heavystubber_p2_m3.lua#L815-L817) |
