# 敏捷：來源與公式

[玩家說明](README.md)｜[來源索引](SOURCE_INDEX.md)｜[武器對應](WEAPON_COMPATIBILITY.md)｜[等級](TIER_VALUES.md)｜[原文比較](LOCALIZATION_COMPARISON.md)｜[百分比檢核](DAMAGE_PERCENTAGE_REVIEW.md)

- Release1.13.1，固定SHA `7e662fcda16219d775b84af50322be2e9cd9d62e`；機制只依公開Darktide-Source-Code。
- [共用來源邊界](../../SOURCE_INDEX.md)記錄MasterItems快取、完整語系RAW及後端欄位狀態。

| 用途 | 固定原始碼 |
|---|---|
| Axe P2 tier table and formatter | [Axe P2 tier table and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p2.lua#L427-L467) |
| Sword P3 tier table and formatter | [Sword P3 tier table and formatter](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p3.lua#L413-L453) |
| Both variants clone common proc template | [Both variants clone common proc template](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/base_weapon_trait_buff_templates.lua#L2635-L2659) |
| Dodge diminishing return consumer | [Dodge diminishing return consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L49-L208) |
| Shared critical/weakspot Finesse extra | [Shared critical/weakspot Finesse extra](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L782) |
| Axe P2 wrapper | [Axe P2 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p2_buff_templates.lua#L26) |
| Sword P3 wrapper | [Sword P3 wrapper](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p3_buff_templates.lua#L21) |
| Held-slot condition | [Held-slot condition](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/conditional_functions.lua#L43-L59) |
| Attack on_hit dispatch | [Attack on_hit dispatch](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/attack.lua#L581-L621) |
| ProcBuff stat update | [ProcBuff stat update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L300) |
| Buff conditional update | [Buff conditional update](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L735-L747) |
| Buff condition/override | [Buff condition/override](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L689-L715) |
| Dodge DR formula | [Dodge DR formula](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L49-L59) |
| Dodge entry counter/distance | [Dodge entry counter/distance](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L189-L208) |
| Dodge exit cooldowns | [Dodge exit cooldowns](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L249-L267) |
| ninjafencer profile | [ninjafencer profile](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/dodge/weapon_dodge_templates.lua#L533-L556) |
| Axe M1 dodge | [Axe M1 dodge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L1155) |
| Axe M2 dodge | [Axe M2 dodge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L1178) |
| Axe M3 dodge | [Axe M3 dodge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L1063) |
| Sword M1 dodge | [Sword M1 dodge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m1.lua#L1389) |
| Sword M2 dodge | [Sword M2 dodge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m2.lua#L1215) |
| Sword M3 dodge | [Sword M3 dodge](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m3.lua#L1220) |
| Axe M1 special sweep | [Axe M1 special sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L1033-L1048) |
| Axe M2 special sweep | [Axe M2 special sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L1058-L1073) |
| Axe M3 special sweep | [Axe M3 special sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L943-L958) |
| Sweep attack type | [Sweep attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/weapon/actions/action_sweep.lua#L745-L760) |
| Sword M1 block/parry chain | [Sword M1 block/parry chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m1.lua#L1002-L1033) |
| Sword M2 block/parry chain | [Sword M2 block/parry chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m2.lua#L832-L863) |
| Sword M3 block/parry chain | [Sword M3 block/parry chain](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m3.lua#L838-L869) |
| Sword M1 riposte sweep | [Sword M1 riposte sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m1.lua#L1125-L1135) |
| Sword M2 riposte sweep | [Sword M2 riposte sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m2.lua#L945-L955) |
| Sword M3 riposte sweep | [Sword M3 riposte sweep](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m3.lua#L951-L961) |
| Push attack type | [Push attack type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/push_attack.lua#L80-L98) |
| Items trait description | [Items trait description](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L1601-L1605) |
| Trait description localization | [Trait description localization](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L65-L72) |
| Tier override percentage formatting | [Tier override percentage formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L77-L117) |
| Trait precision formatting | [Trait precision formatting](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/trait_value_parser.lua#L189-L227) |
| Stat type | [Stat type](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/buff_settings.lua#L882) |
| Weakspot stat consumer | [Weakspot stat consumer](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L715-L746) |
| Merged crit/weakspot Finesse extra | [Merged crit/weakspot Finesse extra](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L672-L712) |
| Final shared Finesse application | [Final shared Finesse application](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L777-L782) |
| 匹配實際攻擊物品 | [匹配實際攻擊物品](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L721-L727) |
| 近戰事件條件 | [近戰事件條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L368-L370) |
| 弱點事件條件 | [弱點事件條件](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/helper_functions/check_proc_functions.lua#L473-L475) |
| 動作開始建立剩餘距離 | [動作開始建立剩餘距離](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L190-L208) |
| 兩種閃避冷卻獨立更新 | [兩種閃避冷卻獨立更新](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L253-L269) |
| 途中速度重新讀取次數 | [途中速度重新讀取次數](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/character_state_machine/character_states/player_character_state_dodging.lua#L380-L393) |
| 持用加成與傷害消費端 | [持用加成與傷害消費端](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/proc_buff.lua#L288-L300) |
| 持用加成與傷害消費端 | [持用加成與傷害消費端](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/extension_systems/buff/buffs/buff.lua#L735-L747) |
| 持用加成與傷害消費端 | [持用加成與傷害消費端](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L713-L724) |
| 持用加成與傷害消費端 | [持用加成與傷害消費端](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/attack/damage_calculation.lua#L766-L782) |
| 實際UI型號組名 | [實際UI型號組名](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L315-L327) |
| UI名稱欄位讀取 | [UI名稱欄位讀取](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/utilities/items.lua#L378-L426) |

## 執行與計算

- Combat Axe P2 與 Duelling Sword P3 各自定義 I–IV；`conditional_stat_buffs[melee_weakspot_damage]` 分別為 0.025／0.05／0.075／0.10。兩個 wrapper 都複製共用 `weakspot_hit_resets_dodge_count` base。
- Base template 監聽 `on_hit`，要求武器欄位持用、attacking item 相符、`attack_type=melee`、`hit_weakspot=true`；唯一 proc 寫入是 `dodge_character_state.consecutive_dodges=0`。沒有疊層、計時或 cooldown 欄位。
- Tier 弱點傷害是 held-slot `conditional_stat_buffs`；`ProcBuff.update_stat_buffs` 會先走 `Buff.update_stat_buffs`，不需要 reset proc 已 active。傷害 consumer 不按 attacking item name 篩選這個 stat，因此 reset gate 與傷害 stat gate 不應混為一談。
- 下次 dodge 更新連續閃避計數，之後把該計數代入武器的 diminishing-return factor；冷卻欄位由 dodge exit 獨立寫入。本項只改 counter。六個 mark 都選 `ninjafencer`。
- 戰術斧特殊 sweep 走 melee hit。決鬥劍特殊 block/parry 本身不是 hit，但 riposte follow-up 是 sweep。純 push 傳入 `attack_type=push`，不符合 melee gate。
- `melee_weakspot_damage` 只進 melee weakspot 命中；critical 與 weakspot boosts 先合成單一 `base_finesse_damage`，本項放大共享 Finesse extra，而非完整命中。
- 正在閃避時，速度更新會再次讀取連續次數計算遞減倍率；proc只改counter，不重建on_enter已建立的distance_left，也不清兩種冷卻欄位。這區別於只在下一次閃避才有影響的解讀。

- 令 `h` 為 I–IV=`0.025/0.05/0.075/0.10`，`B` 為不受本項影響的命中部分，`F` 為唯一一份 `base_finesse_damage`，`c` 為同一 Finesse multiplier 階段其他已合併加成。其他條件固定時：`D_before=B+F(1+c)`；`D_after=B+F(1+c+h)`；`ΔD=Fh`；整體命中相對增幅=`Fh/[B+F(1+c)]`。

- 弱點爆擊的 F 已包含合併後的 crit/weakspot extra。示例是假設，不是實測；其它下游倍率保持不變或另行建模。

## 圖示

- item.icon：`content/ui/textures/icons/traits/weapon_trait_184`。

- [原圖](https://gameslantern.com/storage/sites/darktide/exporter/content/ui/textures/icons/traits/weapon_trait_184.png)｜[Issue附件](https://github.com/user-attachments/assets/5e8c5a82-2a11-4d70-9418-d14acb4c4f6d)；圖示只作辨識。


## 其他武器變體

| 用途 | 固定原始碼 |
|---|---|
| 戰術斧等級覆寫 | [戰術斧等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combataxe_p2.lua#L427-L468) |
| 戰術斧Buff接入 | [戰術斧Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combataxe_p2_buff_templates.lua#L26-L28) |
| UI 戰術斧 | [UI 戰術斧](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L81) |
| 戰術斧 埃托克斯 Mk II匯入 | [戰術斧 埃托克斯 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L13) |
| 戰術斧 埃托克斯 Mk II接入 | [戰術斧 埃托克斯 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m1.lua#L1450-L1452) |
| 戰術斧 埃托克斯 Mk IV匯入 | [戰術斧 埃托克斯 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L13) |
| 戰術斧 埃托克斯 Mk IV接入 | [戰術斧 埃托克斯 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m2.lua#L1491-L1493) |
| 戰術斧 埃托克斯 Mk VII匯入 | [戰術斧 埃托克斯 Mk VII匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L13) |
| 戰術斧 埃托克斯 Mk VII接入 | [戰術斧 埃托克斯 Mk VII接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_axes/combataxe_p2_m3.lua#L1358-L1360) |
| 決鬥劍等級覆寫 | [決鬥劍等級覆寫](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_traits/weapon_traits_bespoke_combatsword_p3.lua#L413-L454) |
| 決鬥劍Buff接入 | [決鬥劍Buff接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/buff/weapon_traits_buff_templates/weapon_traits_bespoke_combatsword_p3_buff_templates.lua#L21-L23) |
| UI 決鬥劍 | [UI 決鬥劍](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/ui/ui_weapon_pattern_settings.lua#L191) |
| 決鬥劍 馬卡比安 Mk II匯入 | [決鬥劍 馬卡比安 Mk II匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m1.lua#L15) |
| 決鬥劍 馬卡比安 Mk II接入 | [決鬥劍 馬卡比安 Mk II接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m1.lua#L1688-L1690) |
| 決鬥劍 馬卡比安 Mk IV匯入 | [決鬥劍 馬卡比安 Mk IV匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m2.lua#L15) |
| 決鬥劍 馬卡比安 Mk IV接入 | [決鬥劍 馬卡比安 Mk IV接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m2.lua#L1499-L1501) |
| 決鬥劍 馬卡比安 Mk V匯入 | [決鬥劍 馬卡比安 Mk V匯入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m3.lua#L14) |
| 決鬥劍 馬卡比安 Mk V接入 | [決鬥劍 馬卡比安 Mk V接入](https://github.com/Aussiemon/Darktide-Source-Code/blob/7e662fcda16219d775b84af50322be2e9cd9d62e/scripts/settings/equipment/weapon_templates/combat_swords/combatsword_p3_m3.lua#L1473-L1475) |
