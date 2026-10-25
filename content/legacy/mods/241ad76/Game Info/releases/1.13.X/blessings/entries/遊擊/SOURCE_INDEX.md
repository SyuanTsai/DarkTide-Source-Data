# 遊擊：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Shared base proc template | [Shared base proc template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L1462-L1474) |
| Attack emits on_hit params incl attack type, owner, item, result and hit point | [Attack emits on_hit params incl attack type, owner, item, result and hit point](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L623) |
| Death and ranged-attack gates | [Death and ranged-attack gates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L306-L318) |
| Same attacking item gate | [Same attacking item gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Attacker position to hit point distance test | [Attacker position to hit point distance test](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L777-L792) |
| Close-range constant and squared value | [Close-range constant and squared value](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/damage_settings.lua#L18-L23) |
| ProcBuff default duration override path | [ProcBuff default duration override path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L98-L104) |
| ProcBuff permits active reproc | [ProcBuff permits active reproc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L185) |
| ProcBuff refreshes start time on each accepted event | [ProcBuff refreshes start time on each accepted event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L356) |
| Trait buffs target on_equip | [Trait buffs target on_equip](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L190) |
| Weapon extension equip and slot switch lifecycle | [Weapon extension equip and slot switch lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| Unwield only swaps wield-related buffs | [Unwield only swaps wield-related buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L780-L785) |
| Ranged keyword in player dodge test | [Ranged keyword in player dodge test](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L100-L121) |
| Hit scan skips dodge test for undodgeable profiles | [Hit scan skips dodge test for undodgeable profiles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L143-L198) |
| Autogun P1 M1 hipfire hitscan | [Autogun P1 M1 hipfire hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L246-L294) |
| Autogun P1 M1 zoom hitscan | [Autogun P1 M1 zoom hitscan](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L320-L365) |
| Autogun P1 M1 special flashlight | [Autogun P1 M1 special flashlight](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L603-L606) |
| Shotgun P1 M1 hipfire pellet and shell profiles | [Shotgun P1 M1 hipfire pellet and shell profiles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L215-L268) |
| Shotgun P1 M1 ADS pellet and shell profiles | [Shotgun P1 M1 ADS pellet and shell profiles](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L381-L432) |
| Shotgun P1 M1 special ammunition mode | [Shotgun P1 M1 special ammunition mode](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L1046-L1061) |
| 持續時間終點為strict小於 | [持續時間終點為strict小於](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L78-L95) |
| Proc keyword時限及conditional消費 | [Proc keyword時限及conditional消費](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L267) |
| autogun_p2_m1動作／設定欄位 | [autogun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L244-L246) |
| autogun_p2_m1動作／設定欄位 | [autogun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L311-L313) |
| autogun_p2_m1動作／設定欄位 | [autogun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L491-L493) |
| autogun_p2_m1動作／設定欄位 | [autogun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L567-L568) |
| autogun_p2_m2動作／設定欄位 | [autogun_p2_m2動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L241-L243) |
| autogun_p2_m2動作／設定欄位 | [autogun_p2_m2動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L308-L310) |
| autogun_p2_m2動作／設定欄位 | [autogun_p2_m2動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L477-L479) |
| autogun_p2_m2動作／設定欄位 | [autogun_p2_m2動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L553-L554) |
| autogun_p2_m3動作／設定欄位 | [autogun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L244-L246) |
| autogun_p2_m3動作／設定欄位 | [autogun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L311-L313) |
| autogun_p2_m3動作／設定欄位 | [autogun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L491-L493) |
| autogun_p2_m3動作／設定欄位 | [autogun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L567-L568) |
| lasgun_p3_m1動作／設定欄位 | [lasgun_p3_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m1.lua#L248-L250) |
| lasgun_p3_m1動作／設定欄位 | [lasgun_p3_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m1.lua#L319-L321) |
| lasgun_p3_m1動作／設定欄位 | [lasgun_p3_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m1.lua#L486-L488) |
| lasgun_p3_m1動作／設定欄位 | [lasgun_p3_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m1.lua#L503-L504) |
| lasgun_p3_m2動作／設定欄位 | [lasgun_p3_m2動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m2.lua#L249-L251) |
| lasgun_p3_m2動作／設定欄位 | [lasgun_p3_m2動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m2.lua#L328-L330) |
| lasgun_p3_m2動作／設定欄位 | [lasgun_p3_m2動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m2.lua#L496-L498) |
| lasgun_p3_m2動作／設定欄位 | [lasgun_p3_m2動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m2.lua#L513-L514) |
| lasgun_p3_m3動作／設定欄位 | [lasgun_p3_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m3.lua#L248-L250) |
| lasgun_p3_m3動作／設定欄位 | [lasgun_p3_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m3.lua#L319-L321) |
| lasgun_p3_m3動作／設定欄位 | [lasgun_p3_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m3.lua#L482-L484) |
| lasgun_p3_m3動作／設定欄位 | [lasgun_p3_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m3.lua#L499-L500) |
| shotgun_p2_m1動作／設定欄位 | [shotgun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L311-L313) |
| shotgun_p2_m1動作／設定欄位 | [shotgun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L357-L359) |
| shotgun_p2_m1動作／設定欄位 | [shotgun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L402-L404) |
| shotgun_p2_m1動作／設定欄位 | [shotgun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L412-L414) |
| shotgun_p2_m1動作／設定欄位 | [shotgun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L458-L460) |
| shotgun_p2_m1動作／設定欄位 | [shotgun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L459-L461) |
| shotgun_p2_m1動作／設定欄位 | [shotgun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L719-L720) |
| shotgun_p2_m1動作／設定欄位 | [shotgun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L790-L792) |
| shotgun_p2_m1動作／設定欄位 | [shotgun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L809-L810) |
| shotgun_p2_m1動作／設定欄位 | [shotgun_p2_m1動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L885-L887) |
| shotgun_p2_m3動作／設定欄位 | [shotgun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L312-L314) |
| shotgun_p2_m3動作／設定欄位 | [shotgun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L319-L321) |
| shotgun_p2_m3動作／設定欄位 | [shotgun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L364-L366) |
| shotgun_p2_m3動作／設定欄位 | [shotgun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L365-L367) |
| shotgun_p2_m3動作／設定欄位 | [shotgun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L418-L420) |
| shotgun_p2_m3動作／設定欄位 | [shotgun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L468-L470) |
| shotgun_p2_m3動作／設定欄位 | [shotgun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L712-L713) |
| shotgun_p2_m3動作／設定欄位 | [shotgun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L783-L784) |
| shotgun_p2_m3動作／設定欄位 | [shotgun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L802-L803) |
| shotgun_p2_m3動作／設定欄位 | [shotgun_p2_m3動作／設定欄位](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L878-L879) |
| hitscan type | [hitscan type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L68-L72) |
| hitscan dispatch | [hitscan dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/hit_scan.lua#L218-L226) |
| ranged helper | [ranged helper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L22-L28) |
| pellet type | [pellet type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L415-L417) |
| pellet helper dispatch | [pellet helper dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_shoot_pellets.lua#L518-L523) |
| melee sweep type | [melee sweep type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1501) |
| autogun bash base and heavy clone | [autogun bash base and heavy clone](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/settings_templates/autogun_damage_profile_templates.lua#L891-L968) |
| shotgun bash profile | [shotgun bash profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/settings_templates/shotgun_damage_profile_templates.lua#L1910-L2003) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 五個trait literal均以`format_values.time`讀取該trait `active_duration` override，I–IV皆是0.7／0.8／0.9／1.0秒。

- 五個weapon-specific buff wrapper均只clone共用`count_as_dodge_vs_ranged_on_close_kill`模板；該模板監聽`on_hit`，檢查擊殺結果、遠程攻擊類型、近距離及同一attacking item，沒有額外held-slot、暴擊或弱點命中條件。

- 觸發結果需為`attack_result == died`；`attack_type == ranged`或`damage_profile.count_as_ranged_attack`成立即可。`attacking_item.name`須與trait context item相同。

- 距離從`attacking_unit`的位置（`POSITION_LOOKUP`或其世界位置）到`params.hit_world_position`；缺少命中位置時不通過。用平方距離比較`distance² <= 12.5²`，不是從槍口或第一人稱射擊起點量。

- attack系統傳入attacking unit/item、attack result/type及hit world position；模板監聽`on_hit`，不是`on_kill`。

- ProcBuff允許效果期間再次觸發，每次將active start time重設為現在；無層數、無額外冷卻。

- trait buff在`on_equip`加入；切換武器僅切換`on_wield`／`on_unwield`，此ProcBuff沒有持用條件，已觸發效果會保留至計時結束。

- 遠程閃避keyword讓玩家Dodge判定對可閃避遠程攻擊回傳true；hit scan對`undodgeable` profile跳過該檢查，所以不是普遍遠程免疫。

- 步兵自動槍阿格里皮娜Mk I腰射與瞄準都是hitscan，特殊功能是手電筒。戰鬥霰彈槍紮羅娜Mk VI腰射與瞄準都是pellet射擊，特殊彈藥仍由遠程射擊動作發射；這些模式不改變共用祝福條件。

- 另外八型號的shoot_hit_scan或shoot_pellets均走遠程執行鏈；RangedAction.execute_attack明確傳入attack_type=ranged。P2自動槍與P2霰彈槍槍托動作走ActionSweep的melee類型，其base與heavy覆寫未設定count_as_ranged_attack。P3鐳射槍特殊鍵為toggle_special，不送出攻擊。

- `duration(I–IV) = [0.7, 0.8, 0.9, 1.0]`秒；合格事件發生於`t0`時，效果在`t0 + duration`到期。

- `d = ||position(attacking_unit) - hit_world_position||`；`d² <= 156.25m²`（等價於`d <= 12.5m`）。恰為12.5m會通過。

- 若有效期間在`t1`再次觸發，到期時間更新為`t1 + duration`，不會將時間相加或增加層數。

- 切換武器不會清除此計時；後續刷新仍需符合同一祝福武器的item-match條件。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_053`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_053.png)｜[Issue附件](https://github.com/user-attachments/assets/e0cc7da1-f63c-4ac4-aa8a-c987737212e5)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 步兵自動槍等級覆寫 | [步兵自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p1.lua#L362-L391) |
| 步兵自動槍Buff接入 | [步兵自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p1_buff_templates.lua#L26) |
| UI 步兵自動槍 | [UI 步兵自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L648) |
| 步兵自動槍 阿格里皮娜 Mk I匯入 | [步兵自動槍 阿格里皮娜 Mk I匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L17) |
| 步兵自動槍 阿格里皮娜 Mk I接入 | [步兵自動槍 阿格里皮娜 Mk I接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p1_m1.lua#L768-L770) |
| 槍托自動槍等級覆寫 | [槍托自動槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_autogun_p2.lua#L138-L167) |
| 槍托自動槍Buff接入 | [槍托自動槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_autogun_p2_buff_templates.lua#L17) |
| UI 槍托自動槍 | [UI 槍托自動槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L671) |
| 槍托自動槍 弗拉克斯 Mk II匯入 | [槍托自動槍 弗拉克斯 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L16) |
| 槍托自動槍 弗拉克斯 Mk II接入 | [槍托自動槍 弗拉克斯 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m1.lua#L812-L814) |
| 槍托自動槍 格拉亞 Mk IV匯入 | [槍托自動槍 格拉亞 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L17) |
| 槍托自動槍 格拉亞 Mk IV接入 | [槍托自動槍 格拉亞 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m2.lua#L863-L865) |
| 槍托自動槍 阿格里皮娜 Mk VIII匯入 | [槍托自動槍 阿格里皮娜 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L16) |
| 槍托自動槍 阿格里皮娜 Mk VIII接入 | [槍托自動槍 阿格里皮娜 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/autoguns/autogun_p2_m3.lua#L817-L819) |
| 偵察鐳射槍等級覆寫 | [偵察鐳射槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_lasgun_p3.lua#L74-L103) |
| 偵察鐳射槍Buff接入 | [偵察鐳射槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_lasgun_p3_buff_templates.lua#L11) |
| UI 偵察鐳射槍 | [UI 偵察鐳射槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L915) |
| 偵察鐳射槍 奧克塔蘭 Mk VIc匯入 | [偵察鐳射槍 奧克塔蘭 Mk VIc匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m1.lua#L15) |
| 偵察鐳射槍 奧克塔蘭 Mk VIc接入 | [偵察鐳射槍 奧克塔蘭 Mk VIc接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m1.lua#L730-L732) |
| 偵察鐳射槍 奧克塔蘭 Mk XII匯入 | [偵察鐳射槍 奧克塔蘭 Mk XII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m2.lua#L15) |
| 偵察鐳射槍 奧克塔蘭 Mk XII接入 | [偵察鐳射槍 奧克塔蘭 Mk XII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m2.lua#L740-L742) |
| 偵察鐳射槍 奧克塔蘭 Mk XIV匯入 | [偵察鐳射槍 奧克塔蘭 Mk XIV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m3.lua#L15) |
| 偵察鐳射槍 奧克塔蘭 Mk XIV接入 | [偵察鐳射槍 奧克塔蘭 Mk XIV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/lasguns/lasgun_p3_m3.lua#L726-L728) |
| 戰鬥霰彈槍等級覆寫 | [戰鬥霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p1.lua#L138-L167) |
| 戰鬥霰彈槍Buff接入 | [戰鬥霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p1_buff_templates.lua#L14) |
| UI 戰鬥霰彈槍 | [UI 戰鬥霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1131) |
| 戰鬥霰彈槍 紮羅娜 Mk VI匯入 | [戰鬥霰彈槍 紮羅娜 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L14) |
| 戰鬥霰彈槍 紮羅娜 Mk VI接入 | [戰鬥霰彈槍 紮羅娜 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p1_m1.lua#L950-L952) |
| 雙管霰彈槍等級覆寫 | [雙管霰彈槍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotgun_p2.lua#L9-L38) |
| 雙管霰彈槍Buff接入 | [雙管霰彈槍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotgun_p2_buff_templates.lua#L14) |
| UI 雙管霰彈槍 | [UI 雙管霰彈槍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L1154) |
| 雙管霰彈槍 十字星 Mk XI匯入 | [雙管霰彈槍 十字星 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L17) |
| 雙管霰彈槍 十字星 Mk XI接入 | [雙管霰彈槍 十字星 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m1.lua#L1110-L1112) |
| 雙管霰彈槍 克魯克 Mk IV匯入 | [雙管霰彈槍 克魯克 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L17) |
| 雙管霰彈槍 克魯克 Mk IV接入 | [雙管霰彈槍 克魯克 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotguns/shotgun_p2_m3.lua#L1103-L1105) |
