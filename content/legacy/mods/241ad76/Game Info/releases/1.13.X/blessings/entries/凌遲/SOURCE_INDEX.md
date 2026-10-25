# 凌遲：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| own tier I-IV and formatter | [own tier I-IV and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_pickaxe_2h_p1.lua#L366-L415) |
| own wrapper full clone and child selector | [own wrapper full clone and child selector](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_pickaxe_2h_p1_buff_templates.lua#L27-L31) |
| base parent fields retained by wrapper | [base parent fields retained by wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L873-L889) |
| base child fields retained by wrapper | [base child fields retained by wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L890-L900) |
| special melee hit predicate | [special melee hit predicate](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L384-L386) |
| base exact item predicate replaced | [base exact item predicate replaced](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| held slot condition | [held slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| parent placeholder capacity and initialization | [parent placeholder capacity and initialization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L10-L39) |
| parent child removal on destroy | [parent child removal on destroy](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L42-L54) |
| parent adds/refreshes child on accepted hit | [parent adds/refreshes child on accepted hit](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L56-L89) |
| parent duration expiration | [parent duration expiration](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L92-L132) |
| parent external child creation and timer reset | [parent external child creation and timer reset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/weapon_trait_parent_proc_buff.lua#L134-L163) |
| child inherits parent tier override | [child inherits parent tier override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L145-L184) |
| effective stack count and offset | [effective stack count and offset](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L397-L429) |
| conditional stat tier replacement | [conditional stat tier replacement](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L735) |
| ProcBuff allows active retrigger without cooldown | [ProcBuff allows active retrigger without cooldown](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L173-L195) |
| ProcBuff on_hit event acceptance and active timestamp | [ProcBuff on_hit event acceptance and active timestamp](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L304-L355) |
| damage and stagger precede attack buff processing | [damage and stagger precede attack buff processing](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L353-L383) |
| on_hit payload carries weapon_special and item | [on_hit payload carries weapon_special and item](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L577-L623) |
| sweep dispatch uses melee Attack.execute | [sweep dispatch uses melee Attack.execute](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L1488-L1503) |
| melee power modifier input | [melee power modifier input](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L61) |
| power modifier applied after native power curve | [power modifier applied after native power curve](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L63-L91) |
| M1 slow melee input and heavy charge mapping | [M1 slow melee input and heavy charge mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m1.lua#L45-L47) |
| M1 light attacks 1/slide | [M1 light attacks 1/slide](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m1.lua#L223-L397) |
| M1 heavy attack 1 | [M1 heavy attack 1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m1.lua#L404-L481) |
| M1 light attack 2 | [M1 light attack 2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m1.lua#L537-L620) |
| M1 heavy attack 2 | [M1 heavy attack 2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m1.lua#L628-L701) |
| M1 light attack 3 | [M1 light attack 3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m1.lua#L764-L847) |
| M1 light attack 4 | [M1 light attack 4](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m1.lua#L910-L989) |
| M1 push follow-up | [M1 push follow-up](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m1.lua#L1048-L1131) |
| M1 pure push | [M1 pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m1.lua#L1132-L1187) |
| M1 weapon special | [M1 weapon special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m1.lua#L1188-L1275) |
| M2 slow melee input and heavy charge mapping | [M2 slow melee input and heavy charge mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m2.lua#L45-L47) |
| M2 light attacks 1/slide | [M2 light attacks 1/slide](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m2.lua#L223-L397) |
| M2 heavy attack 1 | [M2 heavy attack 1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m2.lua#L404-L484) |
| M2 light attack 2 | [M2 light attack 2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m2.lua#L538-L621) |
| M2 heavy attack 2 | [M2 heavy attack 2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m2.lua#L629-L700) |
| M2 light attack 3 | [M2 light attack 3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m2.lua#L765-L842) |
| M2 light attack 4 | [M2 light attack 4](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m2.lua#L907-L985) |
| M2 push follow-up | [M2 push follow-up](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m2.lua#L1044-L1127) |
| M2 pure push | [M2 pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m2.lua#L1128-L1183) |
| M2 weapon special | [M2 weapon special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m2.lua#L1184-L1270) |
| M3 slow melee input and heavy charge mapping | [M3 slow melee input and heavy charge mapping](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L45-L47) |
| M3 light attack 1/slide | [M3 light attack 1/slide](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L226-L398) |
| M3 light attack 5 | [M3 light attack 5](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L458-L539) |
| M3 heavy attack 3 | [M3 heavy attack 3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L548-L620) |
| M3 heavy attack 1 | [M3 heavy attack 1](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L628-L699) |
| M3 light attack 2 | [M3 light attack 2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L761-L842) |
| M3 heavy attack 2 | [M3 heavy attack 2](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L851-L924) |
| M3 light attack 3 | [M3 light attack 3](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L989-L1066) |
| M3 light attack 4 | [M3 light attack 4](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L1128-L1205) |
| M3 push follow-up | [M3 push follow-up](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L1265-L1347) |
| M3 pure push | [M3 pure push](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L1348-L1402) |
| M3 weapon special | [M3 weapon special](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L1404-L1490) |
| ordinary light profile family | [ordinary light profile family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/settings_templates/ogryn_pickaxe_damage_profile_templates.lua#L48-L305) |
| ordinary heavy profile family | [ordinary heavy profile family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/settings_templates/ogryn_pickaxe_damage_profile_templates.lua#L306-L621) |
| ordinary push-follow profile family | [ordinary push-follow profile family](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/settings_templates/ogryn_pickaxe_damage_profile_templates.lua#L622-L768) |
| ordinary M3 push-follow profile | [ordinary M3 push-follow profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/settings_templates/ogryn_pickaxe_damage_profile_templates.lua#L876-L944) |
| M1 special uppercut profile flag | [M1 special uppercut profile flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/settings_templates/ogryn_pickaxe_damage_profile_templates.lua#L769-L815) |
| M2/M3 hook-pull special profile flag | [M2/M3 hook-pull special profile flag](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/settings_templates/ogryn_pickaxe_damage_profile_templates.lua#L945-L953) |
| ActionPush emits push finish | [ActionPush emits push finish](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_push.lua#L52-L115) |
| PushAttack attack type | [PushAttack attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L78-L90) |
| equipped weapon buff lifecycle | [equipped weapon buff lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L633-L693) |
| weapon switch lifecycle | [weapon switch lifecycle](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/player_unit_weapon_extension.lua#L743-L785) |
| 適用於戰鎬的共用威力／揮擊差異 | [適用於戰鎬的共用威力／揮擊差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/power_level.lua#L25-L91) |
| 適用於戰鎬的共用威力／揮擊差異 | [適用於戰鎬的共用威力／揮擊差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_profile.lua#L29-L46) |
| 適用於戰鎬的共用威力／揮擊差異 | [適用於戰鎬的共用威力／揮擊差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/stagger_calculation.lua#L67-L75) |
| 適用於戰鎬的共用威力／揮擊差異 | [適用於戰鎬的共用威力／揮擊差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L235-L248) |
| 適用於戰鎬的共用威力／揮擊差異 | [適用於戰鎬的共用威力／揮擊差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L328-L357) |
| 適用於戰鎬的共用威力／揮擊差異 | [適用於戰鎬的共用威力／揮擊差異](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L360-L383) |
| parent 無常駐項，child tier 替換條件值 | [parent 無常駐項，child tier 替換條件值](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L735-L747) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- 自身 I–IV tier 在 parent `stat_buffs.melee_power_level_modifier` 設為 `.12/.16/.20/.24`。描述 formatter 對此 parent trait override 使用 `percentage` 與 `+` 前綴；持續時間 formatter 讀 parent 的 `child_duration=3.5`。

- 實際 wrapper 是 `weapon_trait_parent_proc_buff` 的 parent，child ID 另有 `_child`；wrapper 將 parent 的命中檢查覆寫為 `on_melee_weapon_special_hit`。這個 predicate 實際只要求 `weapon_special` 且 `attack_type=melee`。持用條件仍由繼承的 `is_item_slot_wielded` 分別限制 proc 與 child stat；不要把已被替換的 `on_item_match` 當成額外檢查。

- child 沿用 `stack_offset=-1` 與 held-slot conditional melee power stat，但 wrapper 將 child `max_stacks` 設為 1。server parent 初始建立一個無有效 stat 的占位 child；第一次合格命中加入一個有效 child，`clamp(stack_count-1,0,1)` 因而只計一層。滿層時再次命中即使新增數量為零，仍會重設 parent 的 child removal timer。

- base parent 的 `child_duration=3.5`、`stacks_to_remove=5` 保留。parent update 在計時超過 3.5 秒後移除額外 child，但保留占位；切換武器槽不清除此 parent，held 條件只停用 stat/proc，計時仍走。parent 被銷毀時會移除其外部控制 child。

- 三型號 `action_special` 皆為 sweep；布蘭克斯使用 `ogryn_pickaxe_blunt` 上勾 profile，博羅維安與卡索拉斯使用 `special_pull` 勾拉 profile。兩種 profile 都明列 `weapon_special=true`；ActionSweep 傳入 `attack_type=melee`、實際 item/profile，Attack 在傷害／HitReaction 後才發出含 `weapon_special` 的 `on_hit` payload。

- 一般輕擊與重／蓄力攻擊是普通 melee sweeps，profile 不帶 `weapon_special`；pushfollow 也是普通 melee sweep。它們不能觸發，但在效果有效時可受 `melee_power_level_modifier`。純 push 由 ActionPush/PushAttack 以 `attack_type=push` 處理，所以既不通過特殊近戰 predicate，也不讀本項近戰威力 key。

- PowerLevel 只在 attack type 為 melee 時納入 `melee_power_level_modifier`，並將同類修正加到威力修正項；原生威力類型曲線先產生 S，再乘同類相加的修正係數；後續分別進入傷害／衝擊及順劈消費流程。最終生命傷害、踉蹌與順劈數不必按 tier 百分比等比改變。

- parent 與 child 的 `template.stat_buffs` 都沒有本項常駐數值。child creator 傳入相同 item slot 與實際 parent template 名稱，Buff 因 parent 名稱吻合而合併該 tier override；child 遍歷自身條件 `melee_power_level_modifier` 時，以 parent tier 的 `.12/.16/.20/.24` 替換 fallback `.20`。只有一個持用且有效層的加成，不會另加 fallback 或 parent 常駐項。

- parent 的到期判定是 `remove_t < t`；刷新採事件處理的 t，滿層仍呼叫新增零個 child 的流程並重設期限。child 是 parent 外部控制的效果，沒有另一個獨立自動到期期限。初始占位層與到期後留下的占位層都因 `stack_offset=-1` 不提供加成。

- 共用 ActionSweep 在開始時保存順劈命中質量預算，正常後續觸發不重算它；後續較晚的傷害／衝擊讀值可能在快取更新後受益，伺服器校正另行重算預算。本項三個實際特殊攻擊與普通近戰動作均接入該共用 sweep；不把共用順劈公式誤寫成每次命中都即時重算。

令 S 為沒有本項、已經過武器自身原生威力曲線後的同一近戰威力輸入，p 為本祝福 tier，q 為其他同類 additive melee power 修正；比較公式為 `S_after = S × (1 + q + p)`。

IV 級 p=.24：S=100 時，`100×(1+.24)=124`。若 q=.20，原值為 `100×1.20=120`，加祝福後為 `100×(1+.20+.24)=144`，相對原值增加 20%。此式不把加成乘在既有結果上；也不把 24% 宣稱為最終傷害／踉蹌增幅。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_214`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_214.png)｜[Issue附件](https://github.com/user-attachments/assets/4a26461f-b7ea-4fcc-a54c-529c4ebfeca9)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 戴維爾戰鎬等級覆寫 | [戴維爾戰鎬等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_ogryn_pickaxe_2h_p1.lua#L366-L415) |
| 戴維爾戰鎬Buff接入 | [戴維爾戰鎬Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_ogryn_pickaxe_2h_p1_buff_templates.lua#L27-L29) |
| UI 戴維爾戰鎬 | [UI 戴維爾戰鎬](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L351) |
| 戴維爾戰鎬 布蘭克斯 Mk Ia匯入 | [戴維爾戰鎬 布蘭克斯 Mk Ia匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m1.lua#L16) |
| 戴維爾戰鎬 布蘭克斯 Mk Ia接入 | [戴維爾戰鎬 布蘭克斯 Mk Ia接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m1.lua#L1569-L1571) |
| 戴維爾戰鎬 博羅維安 Mk III匯入 | [戴維爾戰鎬 博羅維安 Mk III匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m2.lua#L16) |
| 戴維爾戰鎬 博羅維安 Mk III接入 | [戴維爾戰鎬 博羅維安 Mk III接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m2.lua#L1566-L1568) |
| 戴維爾戰鎬 卡索拉斯 Mk II匯入 | [戴維爾戰鎬 卡索拉斯 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L16) |
| 戴維爾戰鎬 卡索拉斯 Mk II接入 | [戴維爾戰鎬 卡索拉斯 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/ogryn_pickaxes_2h/ogryn_pickaxe_2h_p1_m3.lua#L1880-L1882) |
