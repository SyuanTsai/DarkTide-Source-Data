# 肉槌：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| M1 light | [M1 light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L161-L245) |
| M1 heavy | [M1 heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L246-L318) |
| M1 alternate light | [M1 alternate light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L373-L457) |
| M1 alternate heavy | [M1 alternate heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L458-L532) |
| M1 third light | [M1 third light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L587-L670) |
| M1 pushfollow | [M1 pushfollow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L722-L798) |
| M1 pure push | [M1 pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L799-L853) |
| M1 push-combo windup | [M1 push-combo windup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L854-L904) |
| M1 heavy pushfollow | [M1 heavy pushfollow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L905-L984) |
| M1 special uppercut | [M1 special uppercut](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L985-L1064) |
| M2 light | [M2 light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L158-L247) |
| M2 heavy | [M2 heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L248-L325) |
| M2 alternate light | [M2 alternate light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L380-L469) |
| M2 alternate heavy | [M2 alternate heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L470-L549) |
| M2 third light | [M2 third light](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L604-L688) |
| M2 pushfollow | [M2 pushfollow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L740-L818) |
| M2 pure push | [M2 pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L819-L874) |
| M2 pushfollow windup | [M2 pushfollow windup](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L875-L928) |
| M2 pushfollow combo | [M2 pushfollow combo](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L929-L1017) |
| M2 special uppercut | [M2 special uppercut](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L1018-L1098) |
| M3 light branch 3 | [M3 light branch 3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L208-L297) |
| M3 heavy | [M3 heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L298-L375) |
| M3 light branch 1 | [M3 light branch 1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L484-L568) |
| M3 alternate heavy | [M3 alternate heavy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L569-L648) |
| M3 light branch 2 | [M3 light branch 2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L704-L788) |
| M3 pushfollow | [M3 pushfollow](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L840-L917) |
| M3 pure push | [M3 pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L918-L973) |
| M3 special uppercut | [M3 special uppercut](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L974-L1054) |
| Own tier and formatter | [Own tier and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L181-L220) |
| Wrapper and counter | [Wrapper and counter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_combatblade_p1_buff_templates.lua#L34-L75) |
| Ordinary light smiter profile | [Ordinary light smiter profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/settings_templates/combat_blade_damage_profile_templates.lua#L386-L559) |
| Ordinary heavy linesman profile | [Ordinary heavy linesman profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/settings_templates/combat_blade_damage_profile_templates.lua#L812-L1018) |
| Ordinary light linesman profile | [Ordinary light linesman profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/settings_templates/combat_blade_damage_profile_templates.lua#L615-L811) |
| Ordinary heavy smiter profile | [Ordinary heavy smiter profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/settings_templates/combat_blade_damage_profile_templates.lua#L212-L385) |
| Pushfollow override | [Pushfollow override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/settings_templates/combat_blade_damage_profile_templates.lua#L197-L211) |
| Light stab override | [Light stab override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/settings_templates/combat_blade_damage_profile_templates.lua#L560-L614) |
| Actual uppercut plus profile | [Actual uppercut plus profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/settings_templates/combat_blade_damage_profile_templates.lua#L1160-L1167) |
| Special melee predicate | [Special melee predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L384-L386) |
| Item identity predicate | [Item identity predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| Damage resolves before proc | [Damage resolves before proc](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L330-L383) |
| On-hit event carries profile/type/item | [On-hit event carries profile/type/item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L621) |
| ActionSweep melee dispatch | [ActionSweep melee dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1498-L1501) |
| One sweep finish event | [One sweep finish event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L944-L964) |
| Push finish event | [Push finish event](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L108-L114) |
| Push attack type | [Push attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L80-L90) |
| Power curve and melee modifier | [Power curve and melee modifier](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91) |
| Damage impact/cleave inputs | [Damage impact/cleave inputs](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L46) |
| Impact input | [Impact input](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L75) |
| Sweep cleave budget sampled at start | [Sweep cleave budget sampled at start](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L235-L248) |
| Sweep budget melee calculation | [Sweep budget melee calculation](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L328-L357) |
| Correction redoes stored cleave | [Correction redoes stored cleave](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L360-L383) |
| Weapon import/equip lifecycle | [Weapon import/equip lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| Held predicate | [Held predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Fixed update: buff-system-order | [Fixed update: buff-system-order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L308-L320) |
| Fixed update: weapon-system-order | [Fixed update: weapon-system-order](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/extension_system_configuration.lua#L511-L524) |
| Fixed update: extension-systems-fixed-update-dispatch | [Fixed update: extension-systems-fixed-update-dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/foundation/managers/extension/extension_system_holder.lua#L125-L183) |
| Fixed update: player-buff-fixed-update | [Fixed update: player-buff-fixed-update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/player_unit_buff_extension.lua#L131-L147) |
| Fixed update: buff-stat-cache-rebuild | [Fixed update: buff-stat-cache-rebuild](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buff_extension_base.lua#L318-L353) |
| Fixed update: action-handler-fixed-update | [Fixed update: action-handler-fixed-update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/action/action_handler.lua#L137-L174) |
| M1 exact bespoke-list import | [M1 exact bespoke-list import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L16) |
| M1 exact trait lookup and append | [M1 exact trait lookup and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L1331-L1333) |
| M2 exact bespoke-list import | [M2 exact bespoke-list import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L16) |
| M2 exact trait lookup and append | [M2 exact trait lookup and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L1365-L1367) |
| M3 exact bespoke-list import | [M3 exact bespoke-list import](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L16) |
| M3 exact trait lookup and append | [M3 exact trait lookup and append](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L1309-L1311) |
| 基礎威力與上勾接線 | [基礎威力與上勾接線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/damage/power_level_settings.lua#L7-L12) |
| 基礎威力與上勾接線 | [基礎威力與上勾接線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1472-L1505) |
| 預設威力接線 | [預設威力接線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L24-L26) |
| 預設威力接線 | [預設威力接線](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L39-L41) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- Own trait定義I–IV `melee_power_level_modifier`=.15/.20/.25/.30，formatter從trait override取值，使用percentage與`+`前綴。
- Wrapper是ProcBuff，conditional fallback同一stat=.10；實際matched-item命中、持用且`weapon_special=true`與melee後，`active=true`、count=4。通用同key override以own tier取代.10，仍受held+active條件控制，不是加算兩份。
- 三個已綁定型號的`action_special_uppercut`都是melee sweep並引用`special_uppercut_plus`（`weapon_special=true`）；Mk VI動作使用預設power level=500，另兩型號明列500；三者基礎威力相同，後續profile、曲線及武器數值仍須分別結算。
- 普通輕擊/重擊與推擊追斬是一般近戰掃掠，不會觸發，但有效時可受益並於掃掠結束扣數。純推擊採`attack_type=push`、輸出`on_push_finish`，wrapper不聽該事件且melee stat selector不包含push，所以不受益也不扣數。
- Attack先算傷害與HitReaction，後送on_hit；掃掠結束每動作送一筆on_sweep_finish，wrapper不檢查hit count。觸發命中不回溯；後續cache更新後較晚的同一掃掠命中可能受益，不保證同frame。
- 威力修正可改變damage、impact及cleave中間輸入。一般cleave budget於ActionSweep啟動時計算，後來才觸發不重算已保存預算；伺服器correction明確重算。
- 此wrapper無duration或stack table，使用active與四次sweep-finish counter。切出時held gate暫停效果/扣數；仍裝備則無TTL，卸下slot時on_equip buff才移除。

令p為本項`melee_power_level_modifier`（.15/.20/.25/.30），q為同一stat的其他加算貢獻，S為已通過原生power-type曲線、尚未套用buff modifier的威力輸入：`S_after=S×(1+q+p)`。PowerLevel以中性值1為基準合併修正，只有`attack_type=melee`時加入本項；傷害／衝擊沿後續曲線計算，ActionSweep順劈預算則於動作開始取樣。此百分比不可直接當成最終傷害、踉蹌或順劈數的等比例增幅。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_082`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_082.png)｜[Issue附件](https://github.com/user-attachments/assets/6765cb07-f1bf-4026-b850-12f27882d24b)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 砍刀等級覆寫 | [砍刀等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_combatblade_p1.lua#L181-L220) |
| 砍刀Buff接入 | [砍刀Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_combatblade_p1_buff_templates.lua#L34-L75) |
| UI 砍刀 | [UI 砍刀](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L328) |
| 砍刀 克魯克 Mk VI匯入 | [砍刀 克魯克 Mk VI匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L16) |
| 砍刀 克魯克 Mk VI接入 | [砍刀 克魯克 Mk VI接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m1.lua#L1331-L1333) |
| 砍刀 蠻牛屠夫 Mk III匯入 | [砍刀 蠻牛屠夫 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L16) |
| 砍刀 蠻牛屠夫 Mk III接入 | [砍刀 蠻牛屠夫 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m2.lua#L1365-L1367) |
| 砍刀 克魯克 Mk IV匯入 | [砍刀 克魯克 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L16) |
| 砍刀 克魯克 Mk IV接入 | [砍刀 克魯克 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_blades/ogryn_combatblade_p1_m3.lua#L1309-L1311) |
