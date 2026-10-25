# 還擊：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| shared Riposte ProcBuff template | [shared Riposte ProcBuff template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2455-L2480) |
| ProcBuff no-cooldown behavior | [ProcBuff no-cooldown behavior](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195) |
| ProcBuff slot-conditioned active stats | [ProcBuff slot-conditioned active stats](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L247-L253) |
| ProcBuff critical-stat override replaces template table | [ProcBuff critical-stat override replaces template table](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L300) |
| ProcBuff refresh while active | [ProcBuff refresh while active](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| item slot condition | [item slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| successful dodge recognition and event type | [successful dodge recognition and event type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/utilities/dodge.lua#L100-L212) |
| dodge event queue and dispatch | [dodge event queue and dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L233-L255) |
| dodge event dispatch gate | [dodge event dispatch gate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L992) |
| weapon trait equip and unwield lifecycle | [weapon trait equip and unwield lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211) |
| equipped and unequipped trait buff lifecycle | [equipped and unequipped trait buff lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L661) |
| switching only removes on-wield buffs | [switching only removes on-wield buffs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| critical chance clamp and conversion | [critical chance clamp and conversion](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L13-L39) |
| critical chance rounding and PRD | [critical chance rounding and PRD](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/critical_strike.lua#L5-L10) |
| melee sweep critical roll timing | [melee sweep critical roll timing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L207-L225) |
| melee enemy attack successful dodge | [melee enemy attack successful dodge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_attack.lua#L928-L955) |
| ranged attack successful dodge | [ranged attack successful dodge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/minion_attack.lua#L489-L539) |
| net attack dodge event | [net attack dodge event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_shoot_net_action.lua#L260-L272) |
| hound leap dodge event | [hound leap dodge event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_chaos_hound_leap_action.lua#L529-L546) |
| mutant charge dodge event | [mutant charge dodge event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_mutant_charger_charge_action.lua#L483) |
| chaos spawn grab dodge event | [chaos spawn grab dodge event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/behavior/nodes/actions/bt_chaos_spawn_grab_action.lua#L272-L274) |
| dual shivs throw critical check and spawn | [dual shivs throw critical check and spawn](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L76-L143) |
| dual shivs throwable action class | [dual shivs throwable action class](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_throw.lua#L7-L20) |
| projectile stat snapshot on create | [projectile stat snapshot on create](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/unit_templates/item_projectile_unit_template.lua#L78-L92) |
| weapon UI family/pattern/mark composition | [weapon UI family/pattern/mark composition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| weapon UI lore fields | [weapon UI lore fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |
| Crit chance display formatter | [Crit chance display formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L8-L20) |
| Trait formatting and percentage fields | [Trait formatting and percentage fields](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L228) |
| Catachan combat blade special jab action | [Catachan combat blade special jab action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L881-L895) |
| Maccabian parry actions | [Maccabian parry actions](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m1.lua#L998-L1124) |
| Dual Shivs special throw action | [Dual Shivs special throw action](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1096-L1202) |
| Force greatsword activation and special sweep | [Force greatsword activation and special sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2101-L2287) |
| Force sword activation and powered sweep | [Force sword activation and powered sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1449-L1461) |
| Transonic special mode toggle and sweeps | [Transonic special mode toggle and sweeps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L2011-L2143) |
| Transonic special deactivation sweep | [Transonic special deactivation sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L2332-L2388) |
| Combatknife P1 M2 special jab mode | [Combatknife P1 M2 special jab mode](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L957-L982) |
| Duelling Sword P3 M2 parry and follow-up modes | [Duelling Sword P3 M2 parry and follow-up modes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m2.lua#L828-L970) |
| Duelling Sword P3 M3 parry and follow-up modes | [Duelling Sword P3 M3 parry and follow-up modes](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m3.lua#L835-L976) |
| Dual Shivs P1 M2 special throw mode | [Dual Shivs P1 M2 special throw mode](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1096-L1202) |
| Force greatsword P1 M2 activation and special sweep | [Force greatsword P1 M2 activation and special sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2016-L2202) |
| Force sword P1 M2 activation | [Force sword P1 M2 activation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1359-L1371) |
| Force sword P1 M3 activation | [Force sword P1 M3 activation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1226-L1238) |
| Force Sword P1 fling damage_target mode | [Force Sword P1 fling damage_target mode](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1348-L1375) |
| Force Greatsword P1 fling damage_target mode | [Force Greatsword P1 fling damage_target mode](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L1838-L1878) |
| ActionDamageTarget omits critical argument | [ActionDamageTarget omits critical argument](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L145-L162) |
| Attack.execute default is_critical_strike=false | [Attack.execute default is_critical_strike=false](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L100-L116) |
| ActionMeleeExplosive explosion hardcodes noncritical | [ActionMeleeExplosive explosion hardcodes noncritical](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_melee_explosive.lua#L62-L74) |
| Force Sword P1 special charged sweeps | [Force Sword P1 special charged sweeps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L333-L360) |
| Force Greatsword P1 activated special sweeps | [Force Greatsword P1 activated special sweeps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2188-L2290) |
| Transonic activated and deactivated sweep combo | [Transonic activated and deactivated sweep combo](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L2084-L2200) |
| Force Sword P1 M2 fling damage_target | [Force Sword P1 M2 fling damage_target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1265-L1292) |
| Force Sword P1 M3 fling damage_target | [Force Sword P1 M3 fling damage_target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1132-L1159) |
| Force Greatsword P1 M2 fling damage_target | [Force Greatsword P1 M2 fling damage_target](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L1669-L1702) |
| Attack.execute argument defaults including critical flag | [Attack.execute argument defaults including critical flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L82-L116) |
| Transonic crosshair type while special active | [Transonic crosshair type while special active](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L2528-L2544) |
| Special crosshair presentation path | [Special crosshair presentation path](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/ui/hud/elements/crosshair/hud_element_crosshair.lua#L365-L379) |
| Transonic special activate and deactivate sweeps | [Transonic special activate and deactivate sweeps](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L2084-L2143) |
| Force Greatsword M1 wind-slash settings | [Force Greatsword M1 wind-slash settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2384-L2452) |
| Force Greatsword M2 wind-slash settings | [Force Greatsword M2 wind-slash settings](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2299-L2367) |
| Force Greatsword M1 on-equip primer | [Force Greatsword M1 on-equip primer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2799-L2803) |
| Force Greatsword M2 on-equip primer | [Force Greatsword M2 on-equip primer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2714-L2718) |
| Primer chooses low/middle/high wind levels | [Primer chooses low/middle/high wind levels](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/force_sword_2h_p1_buff_templates.lua#L368-L410) |
| Wind slash trigger creates effect | [Wind slash trigger creates effect](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/force_sword_2h_p1_buff_templates.lua#L224-L259) |
| Wind effect captures initial critical state | [Wind effect captures initial critical state](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/force_sword_2h_p1_buff_templates.lua#L271-L300) |
| Wind effect reuses captured state for later hits | [Wind effect reuses captured state for later hits](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/force_sword_2h_p1_buff_templates.lua#L150-L193) |
| RangedAction preserves supplied critical flag | [RangedAction preserves supplied critical flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/ranged_action.lua#L22-L28) |
| WeaponThrow實際繼承 | [WeaponThrow實際繼承](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_throw.lua#L7-L30) |
| dual_shivs_p1_m1 trait module import | [dual_shivs_p1_m1 trait module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L14) |
| dual_shivs_p1_m1 trait ukeys and append | [dual_shivs_p1_m1 trait ukeys and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1500-L1502) |
| dual_shivs_p1_m2 trait module import | [dual_shivs_p1_m2 trait module import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L14) |
| dual_shivs_p1_m2 trait ukeys and append | [dual_shivs_p1_m2 trait ukeys and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1579-L1581) |
| dual shivs P1M1 equips throwing-knives poison buff | [dual shivs P1M1 equips throwing-knives poison buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1172-L1176) |
| dual shivs P1M2 equips throwing-knives poison buff | [dual shivs P1M2 equips throwing-knives poison buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1236-L1240) |
| WeaponThrow inherits ActionSpawnProjectile | [WeaponThrow inherits ActionSpawnProjectile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_throw.lua#L7-L10) |
| poison buff adds two stacks for crit and weakspot | [poison buff adds two stacks for crit and weakspot](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1952-L2020) |
| toxin interval tick invokes buff attack | [toxin interval tick invokes buff attack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_buff_templates.lua#L1493-L1521) |
| Attack.execute critical flag defaults false | [Attack.execute critical flag defaults false](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L112-L114) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 六個 trait 各自定義 I–IV；五個 trait 的 proc_stat_buffs.critical_strike_chance 覆寫為 0.125／0.15／0.175／0.20，Transonic 覆寫為 0.10／0.12／0.14／0.16。wrapper 分別複製共用 6 秒或低持續時間 4 秒 ProcBuff。

- 共用 ProcBuff 監聽 on_successful_dodge，proc chance 為 1，允許效果期間再次觸發。override_proc_stat_buffs 取代 base template 的整份 proc_stat_buffs 表；base 0.05 是 fallback，不會與 tier override 相加。

- 事件由成功閃避流程送出；輸入閃避鍵本身不生成事件。事件送入 buff queue 後由 ProcBuff 條件檢查，並需當時對應 item slot 正在 wielded。

- 合格事件將 active_start_time 設為當前時間，重觸發刷新單一計時效果；模板沒有 cooldown_duration，也沒有堆疊設定。

- on_equip trait buff 在換出武器時仍保留，但 conditional active stats 只在對應 slot wielded 時生效；離手時時間仍走，切回期限內恢復剩餘時間。

- CriticalStrike 將通用及攻擊類型機率來源加入機率池後 clamp 0–1，之後按攻擊呼叫條件套用 chance-to-damage conversion；roll 使用 round 與 PRD。故祝福提供機率百分點，不等同最終傷害百分比。

- ActionSweep.start 在近戰掃擊開始時執行 critical-strike check；ActionSpawnProjectile.start 在投擲動作開始時執行 check。一般爆擊率池會進入這兩種動作的判定，但不代表每個動作必定爆擊。

- 短刀投擲開始時檢查當下爆擊率，並把旗標傳入投射物建立流程；生成時將 owner stat buffs 複製到 projectile snapshot，之後切槽不改變既有投射物快照。本項僅據此說明投擲刀攻擊判定，不把它推廣到中毒持續傷害 tick。

- 格擋／招架、特殊切換或充能動作本身不是成功閃避事件。決鬥劍格擋／招架 action 不做爆擊判定；其後 sweep follow-up 才檢查。力場劍及力場巨劍的特殊啟動本身無傷害；powered sweep 使用 ActionSweep 的一般判定。兩者的 action_fling_target 為 damage_target，經 ActionDamageTarget 呼叫 Attack.execute 時沒有傳 is_critical_strike，而 Attack.execute 預設 false，故這個推擊傷害不吃通用爆擊率。穿音速雙刀的 special activate/deactivate combo 是 sweep，ActionSweep 正常檢查爆擊率，action 設定未標 guaranteed_crit。

- 力場巨劍 M1／M2 風刃會在啟動時捕捉暴擊狀態，後續追加目標沿用該旗標而不重新抽取；切出時若風刃尚未生成，條件會取消啟動。

- 短刀兩型號均安裝dual_shivs_p1_throwing_knives_poison；只接受dual_shivs_throwing_knives傷害設定，排除shield部位。每次合格施加依num_dots＝4＋2×is_critical_strike＋2×hit_weakspot加入neurotoxin_interval_buff3；此為施加函式的層數公式。毒傷每0.35秒呼叫Attack.execute，以attack_types.buff結算且未傳is_critical_strike，該參數預設false；因此不重新抽取還擊提高的爆擊率。

- 設其他通用、攻擊類型與處理模板來源合計為C，還擊加成為r；一般變體r＝0.125／0.15／0.175／0.20，穿音速雙刀r＝0.10／0.12／0.14／0.16。

- 生效機率池為clamp(C＋r,0,1)。若攻擊設定機率轉傷害，先依該設定轉換此池；送入PRD前才以round_with_precision取到小數點後兩位，不能把取整移到上限截斷之前。

- C＝0.20時，一般變體IV級為0.40，穿音速雙刀IV級為0.36；相對提升(0.40－0.20)÷0.20＝100%，(0.36－0.20)÷0.20＝80%。這是機率池比較，不是傷害增幅。

- 一般變體I級C＋r＝0.325，送入PRD前取為0.33；III級0.375取為0.38。原加成仍為12.5／17.5個百分點，不能把取整後差值當成tier覆寫。

- 合格觸發時間為t₀，期限D＝6秒或4秒；在t＜t₀＋D時生效。重觸發把t₀改為新時間；切換武器只暫停持用槽的加成，不暫停期限。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_186`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_186.png)｜[Issue附件](https://github.com/user-attachments/assets/0ca33a46-e0ab-4da3-abb3-ae014acaa376)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 戰刃等級覆寫 | [戰刃等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L244-L293) |
| 戰刃Buff接入 | [戰刃Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L16) |
| UI 戰刃 | [UI 戰刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L127) |
| 戰刃 卡塔昌 Mk III匯入 | [戰刃 卡塔昌 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L15) |
| 戰刃 卡塔昌 Mk III接入 | [戰刃 卡塔昌 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1434-L1436) |
| 戰刃 卡塔昌 Mk VI匯入 | [戰刃 卡塔昌 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L15) |
| 戰刃 卡塔昌 Mk VI接入 | [戰刃 卡塔昌 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1524-L1526) |
| 決鬥劍等級覆寫 | [決鬥劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p3.lua#L184-L233) |
| 決鬥劍Buff接入 | [決鬥劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p3_buff_templates.lua#L14) |
| UI 決鬥劍 | [UI 決鬥劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L191) |
| 決鬥劍 馬卡比安 Mk II匯入 | [決鬥劍 馬卡比安 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m1.lua#L15) |
| 決鬥劍 馬卡比安 Mk II接入 | [決鬥劍 馬卡比安 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m1.lua#L1688-L1690) |
| 決鬥劍 馬卡比安 Mk IV匯入 | [決鬥劍 馬卡比安 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m2.lua#L15) |
| 決鬥劍 馬卡比安 Mk IV接入 | [決鬥劍 馬卡比安 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m2.lua#L1499-L1501) |
| 決鬥劍 馬卡比安 Mk V匯入 | [決鬥劍 馬卡比安 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m3.lua#L14) |
| 決鬥劍 馬卡比安 Mk V接入 | [決鬥劍 馬卡比安 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m3.lua#L1473-L1475) |
| 短刀等級覆寫 | [短刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L244-L293) |
| 短刀Buff接入 | [短刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L16) |
| UI 短刀 | [UI 短刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L227) |
| 短刀 臨時拼湊 型號1匯入 | [短刀 臨時拼湊 型號1匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L14) |
| 短刀 臨時拼湊 型號1接入 | [短刀 臨時拼湊 型號1接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1500-L1502) |
| 短刀 臨時拼湊 型號3匯入 | [短刀 臨時拼湊 型號3匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L14) |
| 短刀 臨時拼湊 型號3接入 | [短刀 臨時拼湊 型號3接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1579-L1581) |
| 烈焰力場巨劍等級覆寫 | [烈焰力場巨劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_2h_p1.lua#L400-L449) |
| 烈焰力場巨劍Buff接入 | [烈焰力場巨劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_2h_p1_buff_templates.lua#L29) |
| UI 烈焰力場巨劍 | [UI 烈焰力場巨劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L245) |
| 烈焰力場巨劍 誓約 Mk VI匯入 | [烈焰力場巨劍 誓約 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L15) |
| 烈焰力場巨劍 誓約 Mk VI接入 | [烈焰力場巨劍 誓約 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m1.lua#L2795-L2797) |
| 烈焰力場巨劍 誓約 Mk VIII匯入 | [烈焰力場巨劍 誓約 Mk VIII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L15) |
| 烈焰力場巨劍 誓約 Mk VIII接入 | [烈焰力場巨劍 誓約 Mk VIII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords_2h/forcesword_2h_p1_m2.lua#L2710-L2712) |
| 烈焰力場劍等級覆寫 | [烈焰力場劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L323-L372) |
| 烈焰力場劍Buff接入 | [烈焰力場劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L28) |
| UI 烈焰力場劍 | [UI 烈焰力場劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L263) |
| 烈焰力場劍 朦朧 Mk II匯入 | [烈焰力場劍 朦朧 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L15) |
| 烈焰力場劍 朦朧 Mk II接入 | [烈焰力場劍 朦朧 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1745-L1747) |
| 烈焰力場劍 戴莫斯 Mk IV匯入 | [烈焰力場劍 戴莫斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L15) |
| 烈焰力場劍 戴莫斯 Mk IV接入 | [烈焰力場劍 戴莫斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1671-L1673) |
| 烈焰力場劍 伊利斯 Mk V匯入 | [烈焰力場劍 伊利斯 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L15) |
| 烈焰力場劍 伊利斯 Mk V接入 | [烈焰力場劍 伊利斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1539-L1541) |
| 穿音速雙刀等級覆寫 | [穿音速雙刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_transonic_sword_transonic_knife_p1.lua#L60-L109) |
| 穿音速雙刀Buff接入 | [穿音速雙刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_transonic_sword_transonic_knife_p1_buff_templates.lua#L16) |
| UI 穿音速雙刀 | [UI 穿音速雙刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L622) |
| 穿音速雙刀 布蘭克斯 Mk XI匯入 | [穿音速雙刀 布蘭克斯 Mk XI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L16) |
| 穿音速雙刀 布蘭克斯 Mk XI接入 | [穿音速雙刀 布蘭克斯 Mk XI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/transonic_sword_transonic_knife/transonic_sword_transonic_knife_p1_m1.lua#L3177-L3179) |
