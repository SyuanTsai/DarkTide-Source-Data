# 行刑者：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。

- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Combatknife P1 tier overrides and tooltip formatting | [Combatknife P1 tier overrides and tooltip formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L80-L139) |
| Dual Shivs P1 tier overrides and tooltip formatting | [Dual Shivs P1 tier overrides and tooltip formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L80-L139) |
| Force Sword P1 tier overrides and tooltip formatting | [Force Sword P1 tier overrides and tooltip formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L483-L542) |
| Three wrappers clone shared parent/child | [Three wrappers clone shared parent/child](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L9-L11) |
| Dual Shivs wrapper | [Dual Shivs wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L9-L11) |
| Force Sword wrapper | [Force Sword wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L62-L64) |
| Shared melee Executor parent/child values and gates | [Shared melee Executor parent/child values and gates](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L220-L273) |
| Ranged-only outside-candidate base | [Ranged-only outside-candidate base](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L166-L187) |
| One placeholder child on parent initialization | [One placeholder child on parent initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L10-L39) |
| Activated proc gate and one-stack child addition | [Activated proc gate and one-stack child addition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L18-L98) |
| Expiry and refresh timer | [Expiry and refresh timer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L163) |
| Effective child stack count | [Effective child stack count](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L404-L410) |
| Tier override applied per effective stack | [Tier override applied per effective stack](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L733) |
| Attack on_hit payload / optional event deduplication | [Attack on_hit payload / optional event deduplication](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L623) |
| ActionSweep weakspot and melee attack type | [ActionSweep weakspot and melee attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1353-L1360) |
| ActionSweep per-target Attack.execute | [ActionSweep per-target Attack.execute](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1503) |
| Power stat category | [Power stat category](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L925-L928) |
| Power buff modifier | [Power buff modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L60) |
| Power-type curve and modifier order | [Power-type curve and modifier order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91) |
| Power distribution and cleave hit-mass | [Power distribution and cleave hit-mass](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L48) |
| Impact/stagger consumes power | [Impact/stagger consumes power](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L78) |
| Combat Knife special jab sweep | [Combat Knife special jab sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L881-L951) |
| Dual Shivs special throw | [Dual Shivs special throw](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1096-L1105) |
| Thrown projectile uses ranged Attack.execute | [Thrown projectile uses ranged Attack.execute](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/projectile_damage/projectile_damage_extension.lua#L485-L540) |
| Force Sword charged active profile | [Force Sword charged active profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L420-L425) |
| Force Sword M2 charged active profile | [Force Sword M2 charged active profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L417-L422) |
| Force Sword M3 active cleave profile | [Force Sword M3 active cleave profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L556-L565) |
| Force Sword damage-target route is ranged | [Force Sword damage-target route is ranged](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_damage_target.lua#L149-L162) |
| UI display-name components | [UI display-name components](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| 滿層 wanted=1 但零新增仍刷新 | [滿層 wanted=1 但零新增仍刷新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_activated_parent_proc_buff.lua#L61-L76) |
| 零層 child helper 仍更新期限 | [零層 child helper 仍更新期限](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L163) |
| Equipping trait installs on_equip parent | [Equipping trait installs on_equip parent](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/utilities/weapon_tweak_templates.lua#L168-L211) |
| Equip/unequip buff lifecycle | [Equip/unequip buff lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L661) |
| Switching removes on_wield buffs only | [Switching removes on_wield buffs only](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| Item slot wielded condition | [Item slot wielded condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L60) |
| Proc event is queued, not immediately dispatched | [Proc event is queued, not immediately dispatched](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L982-L992) |
| Combat Knife special jab damage profile | [Combat Knife special jab damage profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/settings_templates/combat_knife_damage_profile_templates.lua#L542-L550) |
| Force Sword active base profile | [Force Sword active base profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/settings_templates/force_sword_damage_profile_templates.lua#L263-L278) |
| Force Sword active flat inherits base profile | [Force Sword active flat inherits base profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/settings_templates/force_sword_damage_profile_templates.lua#L376-L408) |
| Force Sword M3 active cleave profile | [Force Sword M3 active cleave profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/settings_templates/force_sword_damage_profile_templates.lua#L1282-L1295) |
| 戰刃 卡塔昌 Mk III接入 | [戰刃 卡塔昌 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L15) |
| 戰刃 卡塔昌 Mk III接入 | [戰刃 卡塔昌 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1434) |
| 戰刃 卡塔昌 Mk III接入 | [戰刃 卡塔昌 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1436) |
| 戰刃 卡塔昌 Mk VI接入 | [戰刃 卡塔昌 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L15) |
| 戰刃 卡塔昌 Mk VI接入 | [戰刃 卡塔昌 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1524) |
| 戰刃 卡塔昌 Mk VI接入 | [戰刃 卡塔昌 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1526) |
| 短刀 臨時拼湊 型號1接入 | [短刀 臨時拼湊 型號1接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L14) |
| 短刀 臨時拼湊 型號1接入 | [短刀 臨時拼湊 型號1接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1500) |
| 短刀 臨時拼湊 型號1接入 | [短刀 臨時拼湊 型號1接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1502) |
| 短刀 臨時拼湊 型號3接入 | [短刀 臨時拼湊 型號3接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L14) |
| 短刀 臨時拼湊 型號3接入 | [短刀 臨時拼湊 型號3接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1579) |
| 短刀 臨時拼湊 型號3接入 | [短刀 臨時拼湊 型號3接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1581) |
| 烈焰力場劍 朦朧 Mk II接入 | [烈焰力場劍 朦朧 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L15) |
| 烈焰力場劍 朦朧 Mk II接入 | [烈焰力場劍 朦朧 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1745) |
| 烈焰力場劍 朦朧 Mk II接入 | [烈焰力場劍 朦朧 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1747) |
| 烈焰力場劍 戴莫斯 Mk IV接入 | [烈焰力場劍 戴莫斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L15) |
| 烈焰力場劍 戴莫斯 Mk IV接入 | [烈焰力場劍 戴莫斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1671) |
| 烈焰力場劍 戴莫斯 Mk IV接入 | [烈焰力場劍 戴莫斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1673) |
| 烈焰力場劍 伊利斯 Mk V接入 | [烈焰力場劍 伊利斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L15) |
| 烈焰力場劍 伊利斯 Mk V接入 | [烈焰力場劍 伊利斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1539) |
| 烈焰力場劍 伊利斯 Mk V接入 | [烈焰力場劍 伊利斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1541) |
| child繼承父tier覆寫 | [child繼承父tier覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L223) |
| 連擊更新不自行重設 | [連擊更新不自行重設](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L52-L62) |
| on_hit前置filter | [on_hit前置filter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L570-L623) |
| 非proc傷害種類 | [非proc傷害種類](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L86-L88) |
| 護盾霰彈手槍候選tier | [護盾霰彈手槍候選tier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_shotpistol_shield_p1.lua#L288-L355) |
| 護盾霰彈手槍候選wrapper | [護盾霰彈手槍候選wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_shotpistol_shield_p1_buff_templates.lua#L18-L23) |
| 護盾霰彈手槍候選匯入 | [護盾霰彈手槍候選匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L16) |
| 護盾霰彈手槍候選接入 | [護盾霰彈手槍候選接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/shotpistol_shield/shotpistol_shield_p1_m1.lua#L1533-L1535) |
| 實際特殊攻擊 | [實際特殊攻擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L103-L172) |
| 實際特殊攻擊 | [實際特殊攻擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L570-L625) |
| 實際特殊攻擊 | [實際特殊攻擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L957-L979) |
| 實際特殊攻擊 | [實際特殊攻擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1022-L1030) |
| 實際特殊攻擊 | [實際特殊攻擊](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1160-L1171) |
| M1黏附傷害次數 | [M1黏附傷害次數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L103-L172) |
| 逐段黏附on_hit | [逐段黏附on_hit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L739-L809) |
| 特殊模式sticky fallback | [特殊模式sticky fallback](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L540-L545) |
| M1投擲實際template | [M1投擲實際template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1096-L1123) |
| M2投擲實際template | [M2投擲實際template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1160-L1187) |
| WeaponThrow繼承 | [WeaponThrow繼承](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_weapon_throw.lua#L1-L30) |
| 動作開始時生成投射物 | [動作開始時生成投射物](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L119-L143) |
| 投射物template選擇 | [投射物template選擇](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L347-L362) |
| 生成與item_projectile缺省 | [生成與item_projectile缺省](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_spawn_projectile.lua#L380-L432) |
| 短刀投射物實際設定 | [短刀投射物實際設定](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/projectile/player_projectile_templates.lua#L620-L655) |
| 投射物生成時複製owner Buff | [投射物生成時複製owner Buff](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/unit_templates/item_projectile_unit_template.lua#L79-L100) |
| 投射物Buff保留快照 | [投射物Buff保留快照](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_projectile_unit_buff_extension.lua#L13-L35) |
| 投射物Buff數值讀取 | [投射物Buff數值讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_projectile_unit_buff_extension.lua#L57-L65) |
| Attack投射物Buff讀取 | [Attack投射物Buff讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L199-L224) |
| Attack威力資料傳遞 | [Attack威力資料傳遞](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L271-L284) |
| Attack傳入傷害結算 | [Attack傳入傷害結算](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L350-L353) |
| 威力到傷害分配 | [威力到傷害分配](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L219-L227) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

三個正式 wrapper 都 clone BaseWeaponTraitBuffTemplates.chained_weakspot_hits_increases_power_parent/child，僅把 child template 名稱換成各自 variant。父模板建立一個子層占位，child stack_offset=-1，故起始有效層數為0；最多5個有效層。parent 監聽 on_hit，add_child_proc_events 只在 attack_type=melee 且 hit_weakspot 為 true 時加一層；第一個符合條件的事件即加層並把共同 child 到期時間設為當前事件時間+2.5秒。active_proc_func 對近戰非弱點命中在 target_index 存在且 <=1 時回 false 並移除占位以外所有 child；target_index 缺失或 >1 的非弱點命中不重置。reset_update_func 固定回 false，沒有 combo_count 或週期性清層條件。非弱點或 ranged 事件不新增 child，因此不刷新 child 到期時間。滿層時 add_child_proc_events 仍回 wanted=1，但新增容量為0；helper 以0層呼叫仍會重設期限。沒有新弱點命中時，parent update 在嚴格超過共同期限後以 stacks_to_remove=5 移除所有有效層；每個合格弱點命中都刷新期限，包含已滿5層時。

ActionSweep 以 Weakspot.hit_weakspot 分類目標，Attack.execute 傳 melee、target_index、target_number；此呼叫未傳共享 triggered_proc_events 去重表，Attack._handle_buffs 會將各目標 on_hit 事件排入佇列，因此同次揮擊的每個合格弱點目標都能各增加一層。proc_event 是排隊後處理，不應宣稱造成該弱點傷害前已套用本次新層數。

觸發與 child stat 都受 is_item_slot_wielded 限制。切出武器會使其觸發與威力 stat 條件失效，但裝備型 on_equip parent 不會因單純切出而移除；期限仍照常更新，切回且期限未過時可恢復剩餘層數。戰刃特殊 jab 是 sweep、力場劍的蓄能活化攻擊以 melee ActionSweep 結算；jab_special 與 force sword active profiles 均有 weapon_special 標記但未設 skip_on_hit_proc，共用 gate 沒有排除 weapon_special，因此命中弱點可觸發。雙短刀 special_throw 是 weapon_throw，ProjectileDamageExtension 使用 attack_type=ranged；力場劍 fling/push 的 ActionDamageTarget 也用 ranged attack_type，這些非近戰命中不符合 gate。

M1/M2 的 light_sticky/heavy_sticky 各配置3個 damage instances；ActionSweep._update_hit_stickyness 每段固定 melee、target_index=1，依 sticky actor 的 hit_zone_name 判定 hit_weakspot，未傳 dedup table，因此每段弱點 on_hit 均可加層/滿層刷新，身體段則清層。special_active未提供獨立sticky設定時，and/or選擇fallback到一般sticky設定。M3無hit_stickyness_settings，因此只走一般sweep。

DualShiv兩型號special_throw明確引用dual_shivs_p1_throwing_knives，ActionWeaponThrow繼承ActionSpawnProjectile。server在start119–143先生成投射物（不是之後fire_time=0.2放飛時才生成），unit_template_name缺省使用item_projectile；item_projectile在spawn時把owner stat_buffs shallow-copy到PlayerProjectileUnitBuffExtension。該extension update為空，stat_buffs回傳原快照；ProjectileDamageExtension以ranged Attack.execute，Attack讀投射物自己的attacker_buff_extension，DamageCalculation→DamageProfile→PowerLevel消費其通用power_level_modifier。因此生成快照可受Executor既有層數加成，之後owner切出/層數逾時不改已生成刀的快照；不能誤寫為命中時讀owner最新stat。ranged命中不新增、不清除、不刷新Executor child期限。

令 p 為每層值 (0.045/0.05/0.055/0.06)，n 為觸發後仍有效的層數，0<=n<=5。child 以 additive_multiplier 累加各層，威力倍率 M=1+n*p。Tier IV 五層 M=1.30；Tier I–IV 滿層分別為1.225、1.25、1.275、1.30。PowerLevel.scale_power_level_to_power_type_curve 先依 power type 曲線縮放，再套用一般 power_level_modifier；DamageProfile 接著把威力分配到 damage/impact 等輸出，Cleave 的 hit-mass 及 stagger 也讀此類 power。算例的300明確是假定已完成 power-type curve、尚未套用行刑者與後續 damage profile 分配的威力輸入。

其他同階段威力來源加算：M=1+n*p+b_other。b_other=0.20、IV五層時M=1.50，對比原倍率1.20的相對威力收益為25%；不是1.20×1.30。父級tier override會取代child模板預設0.05，而非再加0.05。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_030`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_030.png)｜[Issue附件](https://github.com/user-attachments/assets/6b4dbf18-065c-4d5f-af6e-a06a6bb4adca)；圖示只作辨識。

## 武器變體來源

| 用途 | 固定原始碼 |
|---|---|
| 戰刃等級覆寫 | [戰刃等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatknife_p1.lua#L80-L139) |
| 戰刃Buff接入 | [戰刃Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatknife_p1_buff_templates.lua#L9-L11) |
| UI 戰刃 | [UI 戰刃](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L127) |
| 戰刃 卡塔昌 Mk III匯入 | [戰刃 卡塔昌 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L15) |
| 戰刃 卡塔昌 Mk III接入 | [戰刃 卡塔昌 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m1.lua#L1434-L1436) |
| 戰刃 卡塔昌 Mk VI匯入 | [戰刃 卡塔昌 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L15) |
| 戰刃 卡塔昌 Mk VI接入 | [戰刃 卡塔昌 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_knives/combatknife_p1_m2.lua#L1524-L1526) |
| 短刀等級覆寫 | [短刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_dual_shivs_p1.lua#L80-L139) |
| 短刀Buff接入 | [短刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_dual_shivs_p1_buff_templates.lua#L9-L11) |
| UI 短刀 | [UI 短刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L227) |
| 短刀 臨時拼湊 型號1匯入 | [短刀 臨時拼湊 型號1匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L14) |
| 短刀 臨時拼湊 型號1接入 | [短刀 臨時拼湊 型號1接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m1.lua#L1500-L1502) |
| 短刀 臨時拼湊 型號3匯入 | [短刀 臨時拼湊 型號3匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L14) |
| 短刀 臨時拼湊 型號3接入 | [短刀 臨時拼湊 型號3接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/dual_shivs/dual_shivs_p1_m2.lua#L1579-L1581) |
| 烈焰力場劍等級覆寫 | [烈焰力場劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_forcesword_p1.lua#L483-L542) |
| 烈焰力場劍Buff接入 | [烈焰力場劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_forcesword_p1_buff_templates.lua#L62-L64) |
| UI 烈焰力場劍 | [UI 烈焰力場劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L263) |
| 烈焰力場劍 朦朧 Mk II匯入 | [烈焰力場劍 朦朧 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L15) |
| 烈焰力場劍 朦朧 Mk II接入 | [烈焰力場劍 朦朧 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m1.lua#L1745-L1747) |
| 烈焰力場劍 戴莫斯 Mk IV匯入 | [烈焰力場劍 戴莫斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L15) |
| 烈焰力場劍 戴莫斯 Mk IV接入 | [烈焰力場劍 戴莫斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m2.lua#L1671-L1673) |
| 烈焰力場劍 伊利斯 Mk V匯入 | [烈焰力場劍 伊利斯 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L15) |
| 烈焰力場劍 伊利斯 Mk V接入 | [烈焰力場劍 伊利斯 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/force_swords/forcesword_p1_m3.lua#L1539-L1541) |
